import { randomBytes } from "node:crypto";
import { describe, expect, it } from "vitest";
import { blindIndex, decrypt, encrypt, encryptOptional, keyringFromEnv, type Keyring } from "./fieldCrypto";

const k = () => randomBytes(32).toString("base64");

function keyring(keys: Record<string, string>, active: string, hmac = k()): Keyring {
  return keyringFromEnv({
    LEAD_ENCRYPTION_KEYS: Object.entries(keys)
      .map(([id, key]) => `${id}:${key}`)
      .join(","),
    LEAD_ENCRYPTION_ACTIVE_KEY: active,
    LEAD_HMAC_KEY: hmac,
  });
}

describe("chiffrement des champs", () => {
  const ring = keyring({ k1: k() }, "k1");

  it("chiffre et déchiffre, sans laisser le texte en clair", () => {
    const value = encrypt("camille@example.com", ring);
    expect(value).not.toContain("camille");
    expect(value.startsWith("v1.k1.")).toBe(true);
    expect(decrypt(value, ring)).toBe("camille@example.com");
  });

  it("produit un chiffré différent à chaque appel (IV aléatoire)", () => {
    expect(encrypt("même valeur", ring)).not.toBe(encrypt("même valeur", ring));
  });

  it("détecte toute altération", () => {
    const parts = encrypt("donnée", ring).split(".");
    parts[4] = Buffer.from("autre").toString("base64url");
    expect(() => decrypt(parts.join("."), ring)).toThrow();
  });

  it("refuse une valeur dont l'identifiant de clé a été modifié", () => {
    const two = keyring({ k1: k(), k2: k() }, "k1");
    const tampered = encrypt("donnée", two).replace("v1.k1.", "v1.k2.");
    expect(() => decrypt(tampered, two)).toThrow();
  });

  it("permet la rotation : l'ancienne clé déchiffre encore, la nouvelle chiffre", () => {
    const oldKey = k();
    const before = keyring({ k1: oldKey }, "k1");
    const legacy = encrypt("ancienne", before);
    const after = keyring({ k1: oldKey, k2: k() }, "k2");
    expect(decrypt(legacy, after)).toBe("ancienne");
    expect(encrypt("nouvelle", after).startsWith("v1.k2.")).toBe(true);
  });

  it("ne chiffre pas une valeur absente", () => {
    expect(encryptOptional(undefined, ring)).toBeNull();
    expect(encryptOptional("", ring)).toBeNull();
  });

  it("calcule une empreinte stable, insensible à la casse", () => {
    expect(blindIndex(" Camille@Example.com", ring)).toBe(blindIndex("camille@example.com", ring));
    expect(blindIndex("a@example.com", ring)).not.toBe(blindIndex("b@example.com", ring));
  });

  it("refuse une configuration invalide", () => {
    expect(() => keyringFromEnv({})).toThrow();
    expect(() => keyring({ k1: "trop-court" }, "k1")).toThrow(/32 octets/);
    expect(() => keyring({ k1: k() }, "k2")).toThrow(/absente/);
  });
});
