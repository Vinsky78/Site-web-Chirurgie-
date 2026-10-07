import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAlternateSlugs, getInterventions, isIndexable } from "@/content/interventions";
import { getGuideAlternateSlugs, getGuides, isGuideIndexable } from "@/content/guides";
import { INFO_PAGE_IDS, INFO_PAGE_SLUGS } from "@/lib/pages";
import { staticPaths } from "@/content/taxonomy";
import { absoluteUrl, HREFLANG } from "@/lib/seo";

/** Sitemap multilingue avec alternatives hreflang. Les contenus non relus en sont exclus. */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const languagesFor = (pathFor: (l: (typeof routing.locales)[number]) => string | undefined) => {
    const languages: Record<string, string> = {};
    for (const l of routing.locales) {
      const path = pathFor(l);
      if (path !== undefined) languages[HREFLANG[l]] = absoluteUrl(l, path);
    }
    return languages;
  };

  for (const locale of routing.locales) {
    for (const path of staticPaths()) {
      entries.push({ url: absoluteUrl(locale, path), alternates: { languages: languagesFor(() => path) } });
    }
    for (const id of INFO_PAGE_IDS) {
      entries.push({
        url: absoluteUrl(locale, `/informations/${INFO_PAGE_SLUGS[locale][id]}`),
        alternates: { languages: languagesFor((l) => `/informations/${INFO_PAGE_SLUGS[l][id]}`) },
      });
    }
    for (const guide of getGuides(locale).filter(isGuideIndexable)) {
      const slugs = getGuideAlternateSlugs(guide.id);
      entries.push({
        url: absoluteUrl(locale, `/guides/${guide.slug}`),
        lastModified: guide.updatedAt,
        alternates: { languages: languagesFor((l) => (slugs[l] ? `/guides/${slugs[l]}` : undefined)) },
      });
    }
    for (const item of getInterventions(locale).filter(isIndexable)) {
      const slugs = getAlternateSlugs(item.id);
      entries.push({
        url: absoluteUrl(locale, `/interventions/${item.slug}`),
        lastModified: item.updatedAt,
        alternates: {
          languages: languagesFor((l) => (slugs[l] ? `/interventions/${slugs[l]}` : undefined)),
        },
      });
    }
  }
  return entries;
}
