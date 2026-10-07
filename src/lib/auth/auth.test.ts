import { PGlite } from "@electric-sql/pglite";
import { createHmac } from "node:crypto";
import { drizzle } from "drizzle-orm/pglite";
import { migrate } from "drizzle-orm/pglite/migrator";
import { beforeEach, describe, expect, it } from "vitest";
import type { Database } from "@/db/client";
import * as schema from "@/db/schema";
import { surgeonLinks } from "@/db/schema";
import { createProAccount } from "./accounts";
import { createAuth, type Auth } from "./config";

const PASSWORD = "mot-de-passe-provisoire-1";

let db: Database;
let auth: Auth;

beforeEach(async () => {
  const pg = drizzle(new PGlite(), { schema });
  await migrate(pg, { migrationsFolder: "src/db/migrations" });
  db = pg as unknown as Database;
  auth = createAuth(db, { secret: "s".repeat(32), baseURL: "http://localhost:3000", withNextCookies: false });
  await createProAccount(auth, db, { email: "Dr@Example.com", name: "Dr Démo", role: "surgeon", surgeonSlug: "alice-demo-lyon" }, PASSWORD);
});

/**
 * Code TOTP (RFC 6238) calculé comme une application d'authentification, à
 * partir du secret base32 de l'URI otpauth:// affichée en QR code.
 */
function totp(base32: string, now = Date.now()): string {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  let bits = "";
  for (const char of base32.replace(/=+$/, "")) bits += alphabet.indexOf(char).toString(2).padStart(5, "0");
  const key = Buffer.from(bits.match(/.{8}/g)!.map((byte) => parseInt(byte, 2)));
  const counter = Buffer.alloc(8);
  counter.writeBigUInt64BE(BigInt(Math.floor(now / 30_000)));
  const hmac = createHmac("sha1", key).update(counter).digest();
  const offset = hmac[hmac.length - 1] & 0xf;
  return String((hmac.readUInt32BE(offset) & 0x7fffffff) % 1_000_000).padStart(6, "0");
}

/** Transforme les Set-Cookie d'une réponse en en-tête Cookie pour la requête suivante. */
function cookiesFrom(response: Response, previous = new Headers()): Headers {
  const jar = new Map(
    (previous.get("cookie") ?? "")
      .split("; ")
      .filter(Boolean)
      .map((c) => c.split("=") as [string, string]),
  );
  for (const cookie of response.headers.getSetCookie()) {
    const [pair] = cookie.split(";");
    const [name, ...rest] = pair.split("=");
    jar.set(name, rest.join("="));
  }
  return new Headers({ cookie: [...jar].map(([k, v]) => `${k}=${v}`).join("; ") });
}

async function signIn(password = PASSWORD) {
  return auth.api.signInEmail({ body: { email: "dr@example.com", password }, asResponse: true });
}

async function enrol(): Promise<string> {
  const headers = cookiesFrom(await signIn());
  const enabled = await auth.api.enableTwoFactor({ body: { password: PASSWORD, method: "totp" }, headers });
  if (enabled.method !== "totp") throw new Error("TOTP attendu");
  const secret = new URL(enabled.totpURI).searchParams.get("secret")!;
  await auth.api.verifyTOTP({ body: { code: totp(secret) }, headers });
  return secret;
}

describe("authentification de l'espace pro", () => {
  it("crée le compte relié à sa fiche, sans inscription publique", async () => {
    expect(await db.select().from(surgeonLinks)).toEqual([expect.objectContaining({ surgeonSlug: "alice-demo-lyon" })]);
    await expect(
      auth.api.signUpEmail({ body: { email: "pirate@example.com", password: "x".repeat(16), name: "X" } }),
    ).rejects.toThrow();
  });

  it("refuse un mauvais mot de passe", async () => {
    const response = await signIn("mauvais-mot-de-passe");
    expect(response.status).toBe(401);
  });

  it("ouvre une session sans double authentification tant qu'elle n'est pas activée", async () => {
    const headers = cookiesFrom(await signIn());
    const session = await auth.api.getSession({ headers });
    expect(session?.user).toMatchObject({ email: "dr@example.com", role: "surgeon", twoFactorEnabled: false });
  });

  it("une fois activée, exige le code à chaque connexion", async () => {
    const secret = await enrol();

    const first = await signIn();
    expect(await first.clone().json()).toMatchObject({ twoFactorRedirect: true });
    const pending = cookiesFrom(first);
    expect(await auth.api.getSession({ headers: pending })).toBeNull();

    await expect(auth.api.verifyTOTP({ body: { code: "000000" }, headers: pending })).rejects.toThrow();

    const verified = await auth.api.verifyTOTP({
      body: { code: totp(secret) },
      headers: pending,
      asResponse: true,
    });
    const session = await auth.api.getSession({ headers: cookiesFrom(verified, pending) });
    expect(session?.user).toMatchObject({ twoFactorEnabled: true });
  });

  it("chiffre le secret TOTP en base", async () => {
    const secret = await enrol();
    const [row] = await db.select().from(schema.proTwoFactors);
    expect(row.secret).not.toContain(secret);
  });
});
