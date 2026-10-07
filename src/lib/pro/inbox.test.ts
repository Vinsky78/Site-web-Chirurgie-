import { randomBytes } from "node:crypto";
import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import { migrate } from "drizzle-orm/pglite/migrator";
import { beforeEach, describe, expect, it } from "vitest";
import type { Database } from "@/db/client";
import * as schema from "@/db/schema";
import { accessLog, requestRecipients } from "@/db/schema";
import { keyringFromEnv } from "@/lib/crypto/fieldCrypto";
import { PostgresLeadRepository } from "@/lib/lead/postgresRepository";
import type { StoredLead } from "@/lib/lead/repository";
import { createManageToken } from "@/lib/lead/manageToken";
import { listInbox, markRelevance, openRequest } from "./inbox";

const keyring = keyringFromEnv({
  LEAD_ENCRYPTION_KEYS: `k1:${randomBytes(32).toString("base64")}`,
  LEAD_ENCRYPTION_ACTIVE_KEY: "k1",
  LEAD_HMAC_KEY: randomBytes(32).toString("base64"),
});

const ID = "7f1d6a0e-2b1c-4c55-9a3e-0d4f3c2b1a00";
const OTHER = "1b2c3d4e-5f60-4a7b-8c9d-0e1f2a3b4c5d";

function lead(overrides: Partial<StoredLead> = {}): StoredLead {
  return {
    id: ID,
    locale: "fr",
    createdAt: "2026-10-07T12:00:00.000Z",
    interventionId: "rhinoplasty",
    country: "FR",
    city: "Lyon",
    timeframe: "3to6m",
    budget: "unknown",
    smoker: "no",
    previousSurgerySameArea: "no",
    firstName: "Camille",
    email: "camille@example.com",
    birthYear: 1990,
    isAdult: true,
    consentHealthData: true,
    consentNewsletter: false,
    manageToken: createManageToken(),
    surgeons: ["alice-demo-lyon", "chloe-fictif-lyon"],
    ...overrides,
  };
}

let db: Database;

beforeEach(async () => {
  const pg = drizzle(new PGlite(), { schema });
  await migrate(pg, { migrationsFolder: "src/db/migrations" });
  db = pg as unknown as Database;
  const repo = new PostgresLeadRepository(db, keyring);
  await repo.save(lead());
  await repo.save(lead({ id: OTHER, surgeons: ["david-test-paris"], createdAt: "2026-10-08T12:00:00.000Z" }));
});

describe("boîte de réception pro", () => {
  it("ne liste que les demandes adressées aux fiches du compte", async () => {
    const items = await listInbox(db, ["alice-demo-lyon"]);
    expect(items).toEqual([expect.objectContaining({ id: ID, interventionId: "rhinoplasty", city: "Lyon", status: "sent" })]);
    expect(await listInbox(db, [])).toEqual([]);
  });

  it("n'affiche qu'une ligne quand le compte est relié à deux destinataires", async () => {
    expect(await listInbox(db, ["alice-demo-lyon", "chloe-fictif-lyon"])).toHaveLength(1);
  });

  it("refuse d'ouvrir une demande adressée à quelqu'un d'autre, sans rien tracer", async () => {
    expect(await openRequest(db, keyring, { requestId: OTHER, userId: "u1", slugs: ["alice-demo-lyon"] })).toBeNull();
    expect(await openRequest(db, keyring, { requestId: "pas-un-uuid", userId: "u1", slugs: ["alice-demo-lyon"] })).toBeNull();
    expect(await db.select().from(accessLog)).toHaveLength(0);
  });

  it("déchiffre la demande, trace la consultation et la marque ouverte pour ce seul chirurgien", async () => {
    const now = new Date("2026-10-09T08:00:00Z");
    const detail = await openRequest(db, keyring, { requestId: ID, userId: "u1", slugs: ["alice-demo-lyon"], now });

    expect(detail).toMatchObject({
      firstName: "Camille",
      email: "camille@example.com",
      phone: null,
      health: { smoker: "no", previousSurgerySameArea: "no" },
    });
    expect(await db.select().from(accessLog)).toEqual([
      expect.objectContaining({ requestId: ID, proUserId: "u1", action: "view", at: now }),
    ]);
    const recipients = await db.select().from(requestRecipients);
    expect(recipients.find((r) => r.surgeonSlug === "alice-demo-lyon")).toMatchObject({ status: "viewed", viewedAt: now });
    expect(recipients.find((r) => r.surgeonSlug === "chloe-fictif-lyon")).toMatchObject({ status: "sent", viewedAt: null });
  });

  it("trace chaque ouverture mais garde la date de première lecture", async () => {
    await openRequest(db, keyring, { requestId: ID, userId: "u1", slugs: ["alice-demo-lyon"], now: new Date("2026-10-09T08:00:00Z") });
    await openRequest(db, keyring, { requestId: ID, userId: "u2", slugs: ["alice-demo-lyon"], now: new Date("2026-10-10T08:00:00Z") });
    expect(await db.select().from(accessLog)).toHaveLength(2);
    const [alice] = (await db.select().from(requestRecipients)).filter((r) => r.surgeonSlug === "alice-demo-lyon");
    expect(alice.viewedAt).toEqual(new Date("2026-10-09T08:00:00Z"));
  });

  it("enregistre l'avis de pertinence uniquement pour un destinataire", async () => {
    expect(await markRelevance(db, { requestId: ID, slugs: ["david-test-paris"], relevant: true })).toBe(false);
    expect(await markRelevance(db, { requestId: ID, slugs: ["alice-demo-lyon"], relevant: false })).toBe(true);
    const rows = await db.select().from(requestRecipients);
    expect(rows.find((r) => r.surgeonSlug === "alice-demo-lyon")?.relevant).toBe(false);
    expect(rows.find((r) => r.surgeonSlug === "chloe-fictif-lyon")?.relevant).toBeNull();
  });
});
