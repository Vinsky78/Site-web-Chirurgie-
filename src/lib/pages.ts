import type { Locale } from "@/i18n/routing";

export const INFO_PAGE_IDS = ["legal", "privacy", "methodology"] as const;
export type InfoPageId = (typeof INFO_PAGE_IDS)[number];

/** Slugs localisés des pages d'information. */
export const INFO_PAGE_SLUGS: Record<Locale, Record<InfoPageId, string>> = {
  fr: { legal: "mentions-legales", privacy: "confidentialite", methodology: "methodologie" },
  "en-gb": { legal: "legal-notice", privacy: "privacy", methodology: "how-we-work" },
};

export function infoPageIdFromSlug(locale: Locale, slug: string): InfoPageId | undefined {
  return INFO_PAGE_IDS.find((id) => INFO_PAGE_SLUGS[locale][id] === slug);
}
