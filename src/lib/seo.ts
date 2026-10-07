import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { SITE_URL } from "./site";

/** Valeur hreflang de chaque locale (langue-pays quand la locale cible un marché). */
export const HREFLANG: Record<Locale, string> = {
  fr: "fr-FR",
  "en-gb": "en-GB",
};

/** Lien interne typé : route interne (et ses paramètres), traduite par getPathname. */
export type Href = Parameters<typeof getPathname>[0]["href"];

/** URL absolue d'une route dans une locale, avec le chemin traduit de ce marché. */
export function absoluteUrl(locale: Locale, href: Href): string {
  return `${SITE_URL}${getPathname({ locale, href })}`;
}

/**
 * Alternatives hreflang. `hrefFor` renvoie la route de la page équivalente dans
 * une locale, ou undefined si la page n'existe pas dans cette locale.
 */
export function hreflangAlternates(hrefFor: (locale: Locale) => Href | undefined): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    const href = hrefFor(l);
    if (href !== undefined) languages[HREFLANG[l]] = absoluteUrl(l, href);
  }
  return languages;
}

/** URL canonique et alternatives hreflang (avec x-default sur la locale par défaut). */
export function localeAlternates(
  locale: Locale,
  hrefFor: (locale: Locale) => Href | undefined,
): Metadata["alternates"] {
  const languages = hreflangAlternates(hrefFor);
  const defaultHref = hrefFor(routing.defaultLocale);
  if (defaultHref !== undefined) languages["x-default"] = absoluteUrl(routing.defaultLocale, defaultHref);

  return {
    canonical: absoluteUrl(locale, hrefFor(locale) ?? "/"),
    languages,
  };
}
