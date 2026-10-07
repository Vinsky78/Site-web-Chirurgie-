import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { SITE_NAME, SITE_URL } from "./site";

/** Valeur hreflang de chaque locale (langue-pays quand la locale cible un marché). */
export const HREFLANG: Record<Locale, string> = {
  fr: "fr-FR",
  "en-gb": "en-GB",
};

export function absoluteUrl(locale: Locale, path: string): string {
  return `${SITE_URL}/${locale}${path}`;
}

/**
 * URL canonique et alternatives hreflang. `pathFor` renvoie le chemin (après
 * la locale) de la page équivalente dans une locale, ou undefined si la page
 * n'existe pas dans cette locale.
 */
export function localeAlternates(
  locale: Locale,
  pathFor: (locale: Locale) => string | undefined,
): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    const path = pathFor(l);
    if (path !== undefined) languages[HREFLANG[l]] = absoluteUrl(l, path);
  }
  const defaultPath = pathFor(routing.defaultLocale);
  if (defaultPath !== undefined) languages["x-default"] = absoluteUrl(routing.defaultLocale, defaultPath);

  return {
    canonical: absoluteUrl(locale, pathFor(locale) ?? ""),
    languages,
  };
}

/** Balises de partage (Open Graph, X/Twitter) d'une page. L'image vient de opengraph-image du layout. */
export function socialMetadata({
  locale,
  title,
  description,
  path,
  type = "website",
}: {
  locale: Locale;
  title: string;
  description?: string;
  path: string;
  type?: "website" | "article";
}): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type,
      siteName: SITE_NAME,
      locale: HREFLANG[locale].replace("-", "_"),
      url: absoluteUrl(locale, path),
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
