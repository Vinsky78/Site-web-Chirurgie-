import "server-only";
import { getDb } from "@/db/client";
import { getEmailSender, sendSafely } from "@/lib/email";
import { proPasswordEmail } from "@/lib/email/templates";
import { SITE_URL } from "@/lib/site";
import { createAuth, type Auth } from "./config";
import { passwordLinkUrl } from "./passwordLink";

let instance: Auth | undefined;

/** Authentification configurée si la base et le secret sont présents (sinon espace pro indisponible). */
export function isAuthConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL && process.env.BETTER_AUTH_SECRET);
}

export function getAuth(): Auth {
  if (!instance) {
    const secret = process.env.BETTER_AUTH_SECRET;
    if (!secret || secret.length < 32) throw new Error("BETTER_AUTH_SECRET manquant ou trop court (32 caractères minimum).");
    instance = createAuth(getDb(), {
      secret,
      baseURL: SITE_URL,
      sendPasswordLink: async ({ email, name, token }) => {
        await sendSafely(
          getEmailSender(),
          proPasswordEmail("fr", { email, name, url: passwordLinkUrl(token), invitation: false }),
        );
      },
    });
  }
  return instance;
}

export type ProSession = NonNullable<Awaited<ReturnType<Auth["api"]["getSession"]>>>;

/** Session en cours, ou null (y compris si l'authentification n'est pas configurée). */
export async function getProSession(headers: Headers): Promise<ProSession | null> {
  if (!isAuthConfigured()) return null;
  try {
    return await getAuth().api.getSession({ headers });
  } catch (error) {
    console.error("Lecture de session impossible :", error instanceof Error ? error.message : "erreur inconnue");
    return null;
  }
}

/** Accès au back-office /admin : équipe interne, double authentification active. */
export function canAccessAdmin(session: ProSession | null): boolean {
  return session?.user.role === "staff" && session.user.twoFactorEnabled === true;
}
