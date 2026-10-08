import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getGuideAlternateSlugs, getGuideBySlug, getGuides } from "@/content/guides";
import { getInterventions, isIndexable } from "@/content/interventions";
import type { Guide } from "@/content/types";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { ReviewNotice } from "@/components/editorial/ReviewNotice";
import { SourceList, TextSections } from "@/components/editorial/TextSections";
import { absoluteUrl, localeAlternates, withSocial } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

type Props = PageProps<"/[locale]/guides/[slug]">;

export async function generateStaticParams() {
  const perLocale = await Promise.all(
    routing.locales.map(async (locale) => (await getGuides(locale)).map((guide) => ({ locale, slug: guide.slug }))),
  );
  return perLocale.flat();
}

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = await getGuideBySlug(locale as Locale, slug);
  if (!guide) return {};
  const slugs = await getGuideAlternateSlugs(guide.id);
  return withSocial(locale as Locale, {
    title: guide.title,
    description: guide.summary,
    alternates: localeAlternates(locale as Locale, (l) =>
      slugs[l] ? { pathname: "/guides/[slug]", params: { slug: slugs[l] } } : undefined,
    ),
    robots: isIndexable(guide) ? undefined : { index: false, follow: true },
  });
}

function structuredData(guide: Guide) {
  const review = guide.medicalReview;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    url: absoluteUrl(guide.locale, { pathname: "/guides/[slug]", params: { slug: guide.slug } }),
    name: guide.title,
    description: guide.summary,
    inLanguage: guide.locale,
    dateModified: guide.updatedAt,
    publisher: { "@type": "Organization", name: SITE_NAME },
    ...(review.status === "reviewed" && {
      lastReviewed: review.reviewedAt,
      reviewedBy: { "@type": "Person", name: review.reviewer, jobTitle: review.qualification },
    }),
  };
}

export default async function GuidePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const guide = await getGuideBySlug(locale as Locale, slug);
  if (!guide) notFound();
  const t = await getTranslations("editorial");
  const interventions = (await getInterventions(locale as Locale)).filter((item) =>
    guide.interventions.includes(item.id),
  );

  return (
    <article className="mx-auto max-w-reading px-4 py-12">
      <JsonLd data={structuredData(guide)} />
      <Breadcrumbs
        locale={locale as Locale}
        items={[
          { name: t("guidesTitle"), href: "/guides" },
          { name: guide.title, href: { pathname: "/guides/[slug]", params: { slug: guide.slug } } },
        ]}
      />
      <h1 className="mt-6 font-serif text-h1 text-primary-strong">{guide.title}</h1>
      <ReviewNotice review={guide.medicalReview} updatedAt={guide.updatedAt} />

      <p className="mt-6 rounded-card border-l-4 border-primary bg-surface p-4">{guide.answer}</p>

      <TextSections sections={guide.steps} idPrefix="etape" />

      {guide.warningSigns.length > 0 && (
        <section aria-labelledby="alertes" className="mt-10 rounded-card bg-warning-bg p-6 text-warning-ink">
          <h2 id="alertes" className="font-serif text-h2">
            {t("warningSigns")}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {guide.warningSigns.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {interventions.length > 0 && (
        <section aria-labelledby="fiches" className="mt-10">
          <h2 id="fiches" className="font-serif text-h3">
            {t("citedInterventions")}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {interventions.map((item) => (
              <li key={item.id}>
                <Link
                  href={{ pathname: "/interventions/[slug]", params: { slug: item.slug } }}
                  className="underline underline-offset-4"
                >
                  {t("aboutIntervention", { title: item.title })}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <SourceList sources={guide.resources} title={t("resources")} />
    </article>
  );
}
