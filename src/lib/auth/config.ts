import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { twoFactor } from "better-auth/plugins/two-factor";
import type { Database } from "@/db/client";
import { proAccounts, proSessions, proTwoFactors, proUsers, proVerifications } from "@/db/schema";
import { SITE_NAME } from "@/lib/site";

/** Durée d'une session pro (Phase 4 : 12 h, sans prolongation silencieuse au-delà). */
export const SESSION_HOURS = 12;
export const MIN_PASSWORD_LENGTH = 12;

/** Durée de validité d'un lien de choix du mot de passe (invitation ou oubli). */
export const PASSWORD_LINK_HOURS = 48;

interface AuthOptions {
  secret: string;
  baseURL: string;
  /** Envoie le lien de choix du mot de passe (le jeton seul : la page est la nôtre, pas une route Better Auth). */
  sendPasswordLink?: (data: { email: string; name: string; token: string }) => Promise<void>;
  /** Next.js : écrit les cookies depuis les actions serveur. Désactivé dans les tests. */
  withNextCookies?: boolean;
}

/**
 * Authentification de l'espace pro et de l'équipe interne.
 *
 * - Pas d'inscription libre : les comptes sont créés par l'équipe (scripts/pro-create-user.mts),
 *   qui reçoivent un lien pour choisir leur mot de passe.
 * - Double authentification TOTP obligatoire : tant qu'elle n'est pas activée,
 *   le compte n'accède qu'à la page d'activation (voir guard.ts).
 * - Aucune route HTTP Better Auth n'est exposée : tout passe par des actions serveur.
 */
export function createAuth(db: Database, { secret, baseURL, sendPasswordLink, withNextCookies = true }: AuthOptions) {
  return betterAuth({
    appName: SITE_NAME,
    secret,
    baseURL,
    database: drizzleAdapter(db, {
      provider: "pg",
      schema: {
        user: proUsers,
        session: proSessions,
        account: proAccounts,
        verification: proVerifications,
        twoFactor: proTwoFactors,
      },
    }),
    emailAndPassword: {
      enabled: true,
      disableSignUp: true,
      minPasswordLength: MIN_PASSWORD_LENGTH,
      resetPasswordTokenExpiresIn: PASSWORD_LINK_HOURS * 60 * 60,
      revokeSessionsOnPasswordReset: true,
      sendResetPassword: async ({ user, token }) => {
        await sendPasswordLink?.({ email: user.email, name: user.name, token });
      },
    },
    user: {
      additionalFields: {
        role: { type: "string", required: true, defaultValue: "surgeon", input: false },
      },
    },
    session: {
      expiresIn: SESSION_HOURS * 60 * 60,
      // Pas de prolongation : une session dure 12 h au plus, puis nouvelle connexion avec code.
      disableSessionRefresh: true,
    },
    rateLimit: { enabled: true, window: 60, max: 20 },
    telemetry: { enabled: false },
    plugins: [
      twoFactor({
        issuer: SITE_NAME,
        // Pas d'appareil « de confiance » : le code est demandé à chaque connexion.
        trustDeviceMaxAge: 0,
        accountLockout: { enabled: true, maxFailedAttempts: 5, durationSeconds: 15 * 60 },
      }),
      ...(withNextCookies ? [nextCookies()] : []),
    ],
  });
}

export type Auth = ReturnType<typeof createAuth>;
