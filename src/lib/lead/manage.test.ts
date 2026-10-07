import { randomBytes } from "node:crypto";
import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import { migrate } from "drizzle-orm/pglite/migrator";
import { beforeEach, describe, expect, it } from "vitest";
import type { Database } from "@/db/client";
import * as schema from "@/db/schema";
import { accessLog, accessTokens, consents, requestHealth, requestRecipients, requests } from "@/db/schema";
import { keyringFromEnv } from "@/lib/crypto/fieldCrypto";
import { deleteByToken, findByToken } from "./manage";
import { createManageToken } from "./manageToken";
import { PostgresLeadRepository } from "./postgresRepository";

const keyring = keyringFromEnv({
  LEAD_ENCRYPTION_KEYS: `k1:${randomBytes(32).toString("base64")}`,
  LEAD_ENCRYPTION_ACTIVE_KEY: "k1",
  LEAD_HMAC_KEY: randomBytes(32).toString("base64"),
});

const ID = "7f1d6a0e-2b1c-4c55-9a3e-0d4f3c2b1a00";
const NOW = new Date("2026-10-08T12:00:00Z");
let db: Database;
let token: string;

beforeEach(async () => {
  const pg = drizzle(new PGlite(), { schema });
  await migrate(pg, { migrationsFolder: "src/db/migrations" });
  db = pg as unknown as Database;
  token = createManageToken();
  await new PostgresLeadRepository(db, keyring).save({
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
    consentNewsletter: true,
    surgeons: ["alice-demo-lyon", "chloe-fictif-lyon"],
    manageToken: token,
  });
  await db.insert(accessLog).values({ requestId: ID, proUserId: "u1", action: "view" });
});

describe("lien de gestion du patient", () => {
  it("retrouve et déchiffre la demande avec le bon jeton", async () => {
    const request = await findByToken(db, keyring, token, NOW);
    expect(request).toMatchObject({ id: ID, firstName: "Camille", health: { smoker: "no" } });
    expect(request?.recipients.map((r) => r.slug).sort()).toEqual(["alice-demo-lyon", "chloe-fictif-lyon"]);
  });

  it("ne donne rien avec un jeton inconnu, mal formé ou expiré", async () => {
    expect(await findByToken(db, keyring, createManageToken(), NOW)).toBeNull();
    expect(await findByToken(db, keyring, "abc", NOW)).toBeNull();
    expect(await findByToken(db, keyring, token, new Date("2027-05-01T00:00:00Z"))).toBeNull();
    expect(await deleteByToken(db, createManageToken(), NOW)).toBeNull();
  });

  it("supprime tout, garde les preuves de consentement marquées retirées", async () => {
    expect(await deleteByToken(db, token, NOW)).toEqual({
      surgeonSlugs: expect.arrayContaining(["alice-demo-lyon", "chloe-fictif-lyon"]),
      locale: "fr",
    });
    for (const table of [requests, requestHealth, requestRecipients, accessTokens, accessLog]) {
      expect(await db.select().from(table)).toHaveLength(0);
    }
    const proofs = await db.select().from(consents);
    expect(proofs).toHaveLength(2);
    expect(proofs.every((p) => p.requestId === null && p.withdrawnAt?.getTime() === NOW.getTime())).toBe(true);
    expect(await findByToken(db, keyring, token, NOW)).toBeNull();
  });
});
