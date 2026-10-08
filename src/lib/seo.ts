import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { SITE_NAME, SITE_URL } from "./site";

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

/** Locale Open Graph (langue_PAYS) de chaque marché. */
export const OG_LOCALE: Record<Locale, string> = {
  fr: "fr_FR",
  "en-gb": "en_GB",
};

/**
 * Ajoute les balises de partage (Open Graph, carte Twitter/X) à partir du
 * titre, de la description et de l'URL canonique de la page. L'image vient de
 * src/app/[locale]/opengraph-image.tsx.
 */
export function withSocial(locale: Locale, metadata: Metadata): Metadata {
  const title = typeof metadata.title === "string" ? metadata.title : undefined;
  const description = metadata.description ?? undefined;
  const canonical = metadata.alternates?.canonical;
  const url = canonical && typeof canonical === "object" && "url" in canonical ? canonical.url : (canonical ?? undefined);
  return {
    ...metadata,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale],
      ...(title && { title }),
      ...(description && { description }),
      ...(url && { url }),
      // Une page qui définit openGraph remplace l'image du segment : on la rappelle ici.
      images: [{ url: `${SITE_URL}/${locale}/opengraph-image`, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: { card: "summary_large_image", ...(title && { title }), ...(description && { description }) },
  };
}
