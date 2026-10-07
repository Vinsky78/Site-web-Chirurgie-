import { randomBytes } from "node:crypto";
import type { Database } from "@/db/client";
import { surgeonLinks, type ProRole } from "@/db/schema";
import type { Auth } from "./config";

export interface NewProAccount {
  email: string;
  name: string;
  role: ProRole;
  /** Fiche de l'annuaire reliée (chirurgien ou assistant). */
  surgeonSlug?: string;
}

/** Mot de passe aléatoire initial, jamais communiqué : la personne choisit le sien par le lien d'invitation. */
export function temporaryPassword(): string {
  return randomBytes(18).toString("base64url");
}

/**
 * Crée un compte pro (sans inscription publique). La double authentification
 * sera activée par la personne elle-même à sa première connexion.
 */
export async function createProAccount(auth: Auth, db: Database, account: NewProAccount, password: string) {
  if ((account.role === "surgeon" || account.role === "assistant") && !account.surgeonSlug) {
    throw new Error("Un compte chirurgien ou assistant doit être relié à une fiche de l'annuaire.");
  }
  const ctx = await auth.$context;
  const email = account.email.trim().toLowerCase();
  if (await ctx.internalAdapter.findUserByEmail(email)) throw new Error(`Un compte existe déjà pour ${email}.`);

  const user = await ctx.internalAdapter.createUser(
    { email, name: account.name, role: account.role, emailVerified: true },
    { method: "admin" },
  );
  await ctx.internalAdapter.linkAccount({
    userId: user.id,
    providerId: "credential",
    accountId: user.id,
    password: await ctx.password.hash(password),
  });
  if (account.surgeonSlug) await db.insert(surgeonLinks).values({ userId: user.id, surgeonSlug: account.surgeonSlug });
  return user;
}
