import { randomBytes } from "node:crypto";
import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import { migrate } from "drizzle-orm/pglite/migrator";
import { beforeEach, describe, expect, it } from "vitest";
import type { Database } from "@/db/client";
import * as schema from "@/db/schema";
import { accessTokens, consents, requestHealth, requestRecipients, requests } from "@/db/schema";
import { blindIndex, decrypt, keyringFromEnv } from "@/lib/crypto/fieldCrypto";
import { CONSENT_TEXT_VERSION, deleteAfter, PostgresLeadRepository } from "./postgresRepository";
import { purgeExpiredLeads } from "./purge";
import type { StoredLead } from "./repository";
import { createManageToken, hashManageToken } from "./manageToken";

const keyring = keyringFromEnv({
  LEAD_ENCRYPTION_KEYS: `k1:${randomBytes(32).toString("base64")}`,
  LEAD_ENCRYPTION_ACTIVE_KEY: "k1",
  LEAD_HMAC_KEY: randomBytes(32).toString("base64"),
});

function lead(overrides: Partial<StoredLead> = {}): StoredLead {
  return {
    id: crypto.randomUUID(),
    locale: "fr",
    createdAt: "2026-10-07T12:00:00.000Z",
    interventionId: "abdominoplasty",
    country: "FR",
    city: "Lyon",
    timeframe: "3to6m",
    budget: "unknown",
    smoker: "no",
    previousSurgerySameArea: "no",
    pregnancyPlanned: "no",
    firstName: "Camille",
    email: "camille@example.com",
    phone: "+33 6 12 34 56 78",
    birthYear: 1990,
    isAdult: true,
    consentHealthData: true,
    consentNewsletter: false,
    manageToken: createManageToken(),
    surgeons: ["alice-demo-lyon", "bruno-essai-lyon"],
    ...overrides,
  };
}

let db: Database;

beforeEach(async () => {
  const pg = drizzle(new PGlite(), { schema });
  await migrate(pg, { migrationsFolder: "src/db/migrations" });
  db = pg as unknown as Database;
});

describe("PostgresLeadRepository", () => {
  it("enregistre la demande avec les champs personnels et médicaux chiffrés", async () => {
    const input = lead();
    await new PostgresLeadRepository(db, keyring).save(input);

    const [row] = await db.select().from(requests);
    expect(row).toMatchObject({ id: input.id, interventionId: "abdominoplasty", city: "Lyon", birthYear: 1990 });
    expect(JSON.stringify(row)).not.toContain("camille");
    expect(JSON.stringify(row)).not.toContain("Camille");
    expect(decrypt(row.emailEnc, keyring)).toBe("camille@example.com");
    expect(decrypt(row.phoneEnc!, keyring)).toBe("+33 6 12 34 56 78");
    expect(row.emailHash).toBe(blindIndex("camille@example.com", keyring));
    expect(row.deleteAfter.toISOString()).toBe("2027-04-07T12:00:00.000Z");

    const [health] = await db.select().from(requestHealth);
    expect(health.payloadEnc).not.toContain("smoker");
    expect(JSON.parse(decrypt(health.payloadEnc, keyring))).toEqual({
      smoker: "no",
      previousSurgerySameArea: "no",
      pregnancyPlanned: "no",
    });

    const recipients = await db.select().from(requestRecipients);
    expect(recipients.map((r) => r.surgeonSlug).sort()).toEqual(["alice-demo-lyon", "bruno-essai-lyon"]);
 
    const [token] = await db.select().from(accessTokens);
    expect(token).toMatchObject({ requestId: input.id, purpose: "manage", tokenHash: hashManageToken(input.manageToken) });
    expect(JSON.stringify(token)).not.toContain(input.manageToken);
    expect(token.expiresAt).toEqual(row.deleteAfter);
  });

  it("trace le consentement santé, et le consentement newsletter seulement s'il est donné", async () => {
    const repo = new PostgresLeadRepository(db, keyring);
    await repo.save(lead());
    await repo.save(lead({ consentNewsletter: true, email: "autre@example.com" }));

    const rows = await db.select().from(consents);
    expect(rows.filter((r) => r.type === "health_data")).toHaveLength(2);
    expect(rows.filter((r) => r.type === "newsletter")).toHaveLength(1);
    expect(rows.every((r) => r.textVersion === CONSENT_TEXT_VERSION)).toBe(true);
  });

  it("ne laisse rien en base si une écriture échoue (transaction)", async () => {
    const repo = new PostgresLeadRepository(db, keyring);
    const input = lead();
    await repo.save(input);
    await expect(repo.save(lead({ id: input.id }))).rejects.toThrow();
    expect(await db.select().from(requests)).toHaveLength(1);
    expect(await db.select().from(consents)).toHaveLength(1);
  });
});

describe("purgeExpiredLeads", () => {
  it("supprime les demandes échues et leurs données de santé, garde les preuves de consentement", async () => {
    const repo = new PostgresLeadRepository(db, keyring);
    await repo.save(lead({ createdAt: "2026-01-01T00:00:00.000Z" }));
    await repo.save(lead({ createdAt: "2026-09-01T00:00:00.000Z", email: "recent@example.com" }));

    const count = await purgeExpiredLeads(db, new Date("2026-10-07T00:00:00.000Z"));

    expect(count).toBe(1);
    expect(await db.select().from(requests)).toHaveLength(1);
    expect(await db.select().from(requestHealth)).toHaveLength(1);
    expect(await db.select().from(requestRecipients)).toHaveLength(2);
    const proofs = await db.select().from(consents);
    expect(proofs).toHaveLength(2);
    expect(proofs.filter((p) => p.requestId === null)).toHaveLength(1);
  });

  it("calcule l'échéance à 6 mois", () => {
    expect(deleteAfter(new Date("2026-10-07T12:00:00Z")).toISOString()).toBe("2027-04-07T12:00:00.000Z");
  });
});
