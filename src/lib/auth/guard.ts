import "server-only";
import { headers } from "next/headers";
import { redirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getProSession, type ProSession } from ".";

/**
 * Accès aux pages de l'espace pro. Sans session : page de connexion. Sans
 * double authentification active : page d'activation, et rien d'autre.
 */
export async function requireProSession(locale: Locale, { twoFactor = true } = {}): Promise<ProSession> {
  const session = await getProSession(await headers());
  if (!session) return redirect({ href: "/pro/connexion", locale });
  if (twoFactor && !session.user.twoFactorEnabled) return redirect({ href: "/pro/securite", locale });
  return session;
}
