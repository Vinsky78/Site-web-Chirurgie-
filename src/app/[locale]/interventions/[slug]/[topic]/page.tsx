import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getAlternateSlugs, getInterventionBySlug, getInterventions, isIndexable } from "@/content/interventions";
import { getSubpage, getSubpages, SUBPAGE_SLUGS, subpageKindFromSlug } from "@/content/subpages";
import type { Intervention, InterventionSubpage } from "@/content/types";
import { JsonLd } from "@/components/JsonLd";
import { LegalBox } from "@/components/LegalBox";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { DossierNav } from "@/components/editorial/DossierNav";
import { ReviewNotice } from "@/components/editorial/ReviewNotice";
import { SourceList, TextSections } from "@/components/editorial/TextSections";
import { buttonClasses } from "@/components/ui/button";
import { LOCALE_COUNTRY } from "@/lib/countries";
import { absoluteUrl, localeAlternates, type Href, withSocial } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

type Props = PageProps<"/[locale]/interventions/[slug]/[topic]">;

export async function generateStaticParams() {
  const perLocale = await Promise.all(
    routing.locales.map(async (locale) => {
      const interventions = await getInterventions(locale);
      const params = await Promise.all(
        interventions.map(async (item) =>
          (await getSubpages(locale, item.id)).map((subpage) => ({
            locale,
            slug: item.slug,
            topic: SUBPAGE_SLUGS[locale][subpage.kind],
          })),
        ),
      );
      return params.flat();
    }),
  );
  return perLocale.flat();
}

export const dynamicParams = true;

async function load(locale: Locale, slug: string, topic: string) {
  const intervention = await getInterventionBySlug(locale, slug);
  const kind = subpageKindFromSlug(locale, topic);
  if (!intervention || !kind) return undefined;
  const subpage = await getSubpage(locale, intervention.id, kind);
  return subpage ? { intervention, subpage } : undefined;
}

function subpageHref(locale: Locale, interventionSlug: string, subpage: Pick<InterventionSubpage, "kind">): Href {
  return {
    pathname: "/interventions/[slug]/[topic]",
    params: { slug: interventionSlug, topic: SUBPAGE_SLUGS[locale][subpage.kind] },
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug, topic } = await params;
  const found = await load(locale as Locale, slug, topic);
  if (!found) return {};
  const { intervention, subpage } = found;
  const slugs = await getAlternateSlugs(intervention.id);
  // Équivalents : même sujet de la même intervention, publié dans l'autre marché.
  const available = Object.fromEntries(
    await Promise.all(
      routing.locales.map(async (l) => [l, Boolean(await getSubpage(l, intervention.id, subpage.kind))] as const),
    ),
  );

  return withSocial(locale as Locale, {
    title: subpage.title,
    description: subpage.summary,
    alternates: localeAlternates(locale as Locale, (l) =>
      slugs[l] && available[l] ? subpageHref(l, slugs[l], subpage) : undefined,
    ),
    robots: isIndexable(subpage) ? undefined : { index: false, follow: true },
  });
}

function structuredData(intervention: Intervention, subpage: InterventionSubpage) {
  const review = subpage.medicalReview;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    url: absoluteUrl(subpage.locale, subpageHref(subpage.locale, intervention.slug, subpage)),
    name: subpage.title,
    description: subpage.summary,
    inLanguage: subpage.locale,
    dateModified: subpage.updatedAt,
    publisher: { "@type": "Organization", name: SITE_NAME },
    about: { "@type": "MedicalProcedure", name: intervention.title },
    ...(review.status === "reviewed" && {
      lastReviewed: review.reviewedAt,
      reviewedBy: { "@type": "Person", name: review.reviewer, jobTitle: review.qualification },
    }),
  };
}

export default async function SubpagePage({ params }: Props) {
  const { locale, slug, topic } = await params;
  setRequestLocale(locale);
  const found = await load(locale as Locale, slug, topic);
  if (!found) notFound();
  const { intervention, subpage } = found;
  const siblings = await getSubpages(locale as Locale, intervention.id);

  const t = await getTranslations("intervention");
  const te = await getTranslations("editorial");
  const pillarHref: Href = { pathname: "/interventions/[slug]", params: { slug: intervention.slug } };

  return (
    <article className="mx-auto max-w-reading px-4 py-12">
      <JsonLd data={structuredData(intervention, subpage)} />
      <Breadcrumbs
        locale={locale as Locale}
        items={[
          { name: t("listTitle"), href: "/interventions" },
          { name: intervention.title, href: pillarHref },
          { name: subpage.title, href: subpageHref(locale as Locale, intervention.slug, subpage) },
        ]}
      />

      <h1 className="mt-6 font-serif text-h1 text-primary-strong">{subpage.title}</h1>
      <ReviewNotice review={subpage.medicalReview} updatedAt={subpage.updatedAt} />

      <p className="mt-6 rounded-card border-l-4 border-primary bg-surface p-4 text-body">{subpage.answer}</p>

      <DossierNav locale={locale as Locale} intervention={intervention} subpages={siblings} current={subpage.kind} />

      <TextSections sections={subpage.sections} idPrefix={SUBPAGE_SLUGS[locale as Locale][subpage.kind]} />

      {(subpage.kind === "cost" || subpage.kind === "decision") && (
        <div className="mt-10">
          <LegalBox country={LOCALE_COUNTRY[locale as Locale]} />
        </div>
      )}

      <SourceList sources={subpage.sources} />

      <p className="mt-10 text-small text-muted">{t("noPromise")}</p>

      <p className="mt-6">
        <Link href={pillarHref} className="underline underline-offset-4">
          {te("backToPillar", { title: intervention.title })}
        </Link>
      </p>

      {/* Pas d'appel à l'action sur la page des risques : aucune pression à ce moment de la lecture (Phase 2). */}
      {subpage.kind !== "risks" && (
        <p className="mt-6">
          <Link
            href={{ pathname: "/demande", query: { intervention: intervention.id } }}
            className={buttonClasses("secondary")}
          >
            {t("cta")}
          </Link>
        </p>
      )}
    </article>
  );
}
