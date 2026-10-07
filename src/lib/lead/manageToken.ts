import { createHash, randomBytes } from "node:crypto";

/** Jeton de 256 bits, lisible dans une URL. */
export function createManageToken(): string {
  return randomBytes(32).toString("base64url");
}

/** Jeton à forte entropie : un hash simple suffit (pas de sel ni d'étirement). */
export function hashManageToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export function isManageTokenFormat(token: string): boolean {
  return /^[A-Za-z0-9_-]{43}$/.test(token);
}
