import type { Locale } from "@/i18n/routing";
import { HREFLANG, absoluteUrl } from "./seo";
import { CONTACT_EMAIL, SAME_AS, SITE_NAME, SITE_URL } from "./site";

interface OrganizationOptions {
  sameAs: string[];
  contactEmail?: string;
}

const fromEnv: OrganizationOptions = { sameAs: SAME_AS, contactEmail: CONTACT_EMAIL };

/** Entité éditeur (GEO / E-E-A-T). Réseaux et contact ne sont publiés que s'ils sont réellement renseignés. */
export function organizationData(description: string, options: OrganizationOptions = fromEnv) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description,
    logo: `${SITE_URL}/icon.svg`,
    knowsLanguage: ["fr-FR", "en-GB"],
    ...(options.sameAs.length > 0 && { sameAs: options.sameAs }),
    ...(options.contactEmail && {
      contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: options.contactEmail },
    }),
  };
}

/** Données structurées de site : l'entité éditeur et le site, pour les moteurs et les assistants IA. */
export function siteStructuredData(locale: Locale, description: string, options: OrganizationOptions = fromEnv) {
  return [
    organizationData(description, options),
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: absoluteUrl(locale, ""),
      name: SITE_NAME,
      description,
      inLanguage: HREFLANG[locale],
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ];
}
