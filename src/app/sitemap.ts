import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAlternateSlugs, getInterventions, isIndexable } from "@/content/interventions";
import { INFO_PAGE_IDS, INFO_PAGE_SLUGS } from "@/lib/pages";
import { getListedSurgeons } from "@/content/surgeons";
import { citiesWithPage } from "@/content/surgeons/rules";
import { LOCALE_COUNTRY } from "@/lib/countries";
import { absoluteUrl, hreflangAlternates, type Href } from "@/lib/seo";

/** Sitemap multilingue avec alternatives hreflang. Les contenus non relus en sont exclus. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    for (const item of (await getInterventions(locale)).filter(isIndexable)) {
      const slugs = await getAlternateSlugs(item.id);
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

    // Annuaire : uniquement s'il contient des chirurgiens publiés ; profils et villes propres à chaque marché.
    const surgeons = await getListedSurgeons(LOCALE_COUNTRY[locale], locale);
    if (surgeons.length > 0) {
      entries.push({ url: absoluteUrl(locale, "/chirurgiens") });
      for (const surgeon of surgeons) {
        entries.push({ url: absoluteUrl(locale, { pathname: "/chirurgiens/[slug]", params: { slug: surgeon.slug } }) });
      }
      for (const city of citiesWithPage(surgeons)) {
        entries.push({ url: absoluteUrl(locale, { pathname: "/chirurgiens/ville/[city]", params: { city: city.slug } }) });
      }
    }
  }
  return entries;
}
