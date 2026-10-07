import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

/** Adresse de la page de choix du mot de passe (sans next-intl : utilisable dans les scripts). */
export function passwordLinkUrl(token: string, locale: Locale = "fr"): string {
  const path = routing.pathnames["/pro/mot-de-passe/nouveau"][locale];
  return `${SITE_URL}/${locale}${path}?token=${encodeURIComponent(token)}`;
}
