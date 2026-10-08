import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAlternateSlugs, getInterventions, isIndexable } from "@/content/interventions";
import { getSubpages, getSubpage, SUBPAGE_SLUGS } from "@/content/subpages";
import { getGuideAlternateSlugs, getGuides } from "@/content/guides";
import { getGlossary, getTermAlternateSlugs } from "@/content/glossary";
import { INFO_PAGE_IDS, INFO_PAGE_SLUGS } from "@/lib/pages";
import { getListedSurgeons } from "@/content/surgeons";
import { citiesWithPage } from "@/content/surgeons/rules";
import { LOCALE_COUNTRY } from "@/lib/countries";
import { absoluteUrl, hreflangAlternates, type Href } from "@/lib/seo";

/** Sitemap multilingue avec alternatives hreflang. Les contenus non relus en sont exclus. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const href of ["/", "/interventions", "/guides", "/lexique", "/rejoindre"] satisfies Href[]) {
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

    // Sous-pages : indexées une fois relues, indépendamment de leur fiche.
    for (const item of await getInterventions(locale)) {
      const slugs = await getAlternateSlugs(item.id);
      for (const subpage of (await getSubpages(locale, item.id)).filter(isIndexable)) {
        const hrefFor = (l: typeof locale): Href | undefined => {
          const slug = slugs[l];
          return slug ? { pathname: "/interventions/[slug]/[topic]", params: { slug, topic: SUBPAGE_SLUGS[l][subpage.kind] } } : undefined;
        };
        const available = new Set<string>();
        for (const l of routing.locales) if (await getSubpage(l, item.id, subpage.kind)) available.add(l);
        entries.push({
          url: absoluteUrl(locale, hrefFor(locale)!),
          lastModified: subpage.updatedAt,
          alternates: { languages: hreflangAlternates((l) => (available.has(l) ? hrefFor(l) : undefined)) },
        });
      }
    }

    for (const guide of (await getGuides(locale)).filter(isIndexable)) {
      const slugs = await getGuideAlternateSlugs(guide.id);
      const hrefFor = (l: typeof locale): Href | undefined =>
        slugs[l] ? { pathname: "/guides/[slug]", params: { slug: slugs[l] } } : undefined;
      entries.push({
        url: absoluteUrl(locale, hrefFor(locale)!),
        lastModified: guide.updatedAt,
        alternates: { languages: hreflangAlternates(hrefFor) },
      });
    }

    for (const term of (await getGlossary(locale)).filter(isIndexable)) {
      const slugs = await getTermAlternateSlugs(term.id);
      const hrefFor = (l: typeof locale): Href | undefined =>
        slugs[l] ? { pathname: "/lexique/[slug]", params: { slug: slugs[l] } } : undefined;
      entries.push({
        url: absoluteUrl(locale, hrefFor(locale)!),
        lastModified: term.updatedAt,
        alternates: { languages: hreflangAlternates(hrefFor) },
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
