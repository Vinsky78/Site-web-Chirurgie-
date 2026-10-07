import type { Locale } from "@/i18n/routing";
import { HREFLANG, absoluteUrl } from "./seo";
import { SITE_NAME, SITE_URL } from "./site";

/** Données structurées de site (GEO / SEO) : l'entité éditeur et le site, pour les moteurs et les assistants IA. */
export function siteStructuredData(locale: Locale, description: string) {
  const organizationId = `${SITE_URL}/#organization`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": organizationId,
      name: SITE_NAME,
      url: SITE_URL,
      description,
      knowsLanguage: ["fr-FR", "en-GB"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: absoluteUrl(locale, ""),
      name: SITE_NAME,
      description,
      inLanguage: HREFLANG[locale],
      publisher: { "@id": organizationId },
    },
  ];
}
