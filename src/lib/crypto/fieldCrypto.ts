import { createCipheriv, createDecipheriv, createHmac, randomBytes } from "node:crypto";

/**
 * Chiffrement applicatif des champs sensibles (AES-256-GCM).
 *
 * Format d'une valeur chiffrée : `v1.<idClé>.<iv>.<tag>.<texteChiffré>` (base64url).
 * L'identifiant de clé permet la rotation : on chiffre avec la clé active et on
 * déchiffre avec la clé indiquée dans la valeur.
 *
 * Les clés viennent de l'environnement (LEAD_ENCRYPTION_KEYS). En production,
 * elles sont fournies par le gestionnaire de clés (KMS) de l'hébergeur et ne
 * sont jamais stockées dans le dépôt ni dans la base.
 */

const VERSION = "v1";
const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12;
const KEY_LENGTH = 32;

export interface Keyring {
  activeKeyId: string;
  keys: Map<string, Buffer>;
  /** Clé HMAC pour les empreintes de recherche (ex. e-mail), distincte des clés de chiffrement. */
  hmacKey: Buffer;
}

function decodeKey(id: string, base64: string): Buffer {
  const key = Buffer.from(base64, "base64");
  if (key.length !== KEY_LENGTH) {
    throw new Error(`Clé de chiffrement "${id}" invalide : 32 octets attendus en base64.`);
  }
  return key;
}

/**
 * Construit le trousseau à partir de :
 * - LEAD_ENCRYPTION_KEYS = "k1:<base64>,k2:<base64>"
 * - LEAD_ENCRYPTION_ACTIVE_KEY = "k2"
 * - LEAD_HMAC_KEY = "<base64>"
 */
export function keyringFromEnv(env: Record<string, string | undefined> = process.env): Keyring {
  const raw = env.LEAD_ENCRYPTION_KEYS;
  const activeKeyId = env.LEAD_ENCRYPTION_ACTIVE_KEY;
  const hmac = env.LEAD_HMAC_KEY;
  if (!raw || !activeKeyId || !hmac) {
    throw new Error("LEAD_ENCRYPTION_KEYS, LEAD_ENCRYPTION_ACTIVE_KEY et LEAD_HMAC_KEY sont requis.");
  }

  const keys = new Map<string, Buffer>();
  for (const entry of raw.split(",")) {
    const separator = entry.indexOf(":");
    const id = entry.slice(0, separator).trim();
    if (separator <= 0 || !/^[a-zA-Z0-9_-]+$/.test(id)) {
      throw new Error("LEAD_ENCRYPTION_KEYS mal formé : attendu id:base64[,id:base64].");
    }
    keys.set(id, decodeKey(id, entry.slice(separator + 1).trim()));
  }
  if (!keys.has(activeKeyId)) {
    throw new Error(`La clé active "${activeKeyId}" est absente de LEAD_ENCRYPTION_KEYS.`);
  }
  return { activeKeyId, keys, hmacKey: decodeKey("hmac", hmac) };
}

export function encrypt(plaintext: string, keyring: Keyring): string {
  const key = keyring.keys.get(keyring.activeKeyId)!;
  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(ALGORITHM, key, iv);
  // L'identifiant de clé est authentifié : il ne peut pas être modifié sans casser le tag.
  cipher.setAAD(Buffer.from(`${VERSION}.${keyring.activeKeyId}`));
  const ciphertext = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  return [
    VERSION,
    keyring.activeKeyId,
    iv.toString("base64url"),
    cipher.getAuthTag().toString("base64url"),
    ciphertext.toString("base64url"),
  ].join(".");
}

export function decrypt(value: string, keyring: Keyring): string {
  const [version, keyId, iv, tag, ciphertext, ...rest] = value.split(".");
  if (version !== VERSION || !keyId || !iv || !tag || ciphertext === undefined || rest.length > 0) {
    throw new Error("Valeur chiffrée mal formée.");
  }
  const key = keyring.keys.get(keyId);
  if (!key) throw new Error(`Clé "${keyId}" inconnue : impossible de déchiffrer.`);

  const decipher = createDecipheriv(ALGORITHM, key, Buffer.from(iv, "base64url"));
  decipher.setAAD(Buffer.from(`${version}.${keyId}`));
  decipher.setAuthTag(Buffer.from(tag, "base64url"));
  return Buffer.concat([decipher.update(Buffer.from(ciphertext, "base64url")), decipher.final()]).toString("utf8");
}

export function encryptOptional(plaintext: string | undefined, keyring: Keyring): string | null {
  return plaintext === undefined || plaintext === "" ? null : encrypt(plaintext, keyring);
}

/** Empreinte déterministe pour retrouver une valeur sans la déchiffrer (ex. demandes d'une même adresse). */
export function blindIndex(value: string, keyring: Keyring): string {
  return createHmac("sha256", keyring.hmacKey).update(value.trim().toLowerCase()).digest("base64url");
}
