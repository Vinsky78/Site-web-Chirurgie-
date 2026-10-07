import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAlternateSlugs, getInterventions, isIndexable } from "@/content/interventions";
import { INFO_PAGE_IDS, INFO_PAGE_SLUGS } from "@/lib/pages";
import { absoluteUrl, hreflangAlternates, type Href } from "@/lib/seo";

/** Sitemap multilingue avec alternatives hreflang. Les contenus non relus en sont exclus. */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const href of ["/", "/interventions"] satisfies Href[]) {
      entries.push({ url: absoluteUrl(locale, href), alternates: { languages: hreflangAlternates(() => href) } });
    }
    for (const id of INFO_PAGE_IDS) {
      const hrefFor = (l: typeof locale): Href => ({
        pathname: "/informations/[page]",
        params: { page: INFO_PAGE_SLUGS[l][id] },
      });
      entries.push({ url: absoluteUrl(locale, hrefFor(locale)), alternates: { languages: hreflangAlternates(hrefFor) } });
    }
    for (const item of getInterventions(locale).filter(isIndexable)) {
      const slugs = getAlternateSlugs(item.id);
      entries.push({
        url: absoluteUrl(locale, { pathname: "/interventions/[slug]", params: { slug: item.slug } }),
        lastModified: item.updatedAt,
        alternates: {
          languages: hreflangAlternates((l) => {
            const slug = slugs[l];
            return slug ? { pathname: "/interventions/[slug]", params: { slug } } : undefined;
          }),
        },
      });
    }
  }
  return entries;
}
