import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getGlossary, getTermAlternateSlugs, getTermBySlug } from "@/content/glossary";
import { interventionsUsingTerm } from "@/content/glossary/match";
import { getInterventions, isIndexable } from "@/content/interventions";
import type { GlossaryTerm } from "@/content/types";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { ReviewNotice } from "@/components/editorial/ReviewNotice";
import { absoluteUrl, localeAlternates, withSocial } from "@/lib/seo";

type Props = PageProps<"/[locale]/lexique/[slug]">;

export async function generateStaticParams() {
  const perLocale = await Promise.all(
    routing.locales.map(async (locale) => (await getGlossary(locale)).map((term) => ({ locale, slug: term.slug }))),
  );
  return perLocale.flat();
}

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const term = await getTermBySlug(locale as Locale, slug);
  if (!term) return {};
  const slugs = await getTermAlternateSlugs(term.id);
  return withSocial(locale as Locale, {
    title: term.term,
    description: term.definition.slice(0, 160),
    alternates: localeAlternates(locale as Locale, (l) =>
      slugs[l] ? { pathname: "/lexique/[slug]", params: { slug: slugs[l] } } : undefined,
    ),
    robots: isIndexable(term) ? undefined : { index: false, follow: true },
  });
}

function structuredData(term: GlossaryTerm) {
  const url = absoluteUrl(term.locale, { pathname: "/lexique/[slug]", params: { slug: term.slug } });
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    url,
    name: term.term,
    description: term.definition,
    inLanguage: term.locale,
    inDefinedTermSet: absoluteUrl(term.locale, "/lexique"),
  };
}

export default async function GlossaryTermPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const term = await getTermBySlug(locale as Locale, slug);
  if (!term) notFound();
  const t = await getTranslations("editorial");
  const usedBy = interventionsUsingTerm(term, await getInterventions(locale as Locale));

  return (
    <article className="mx-auto max-w-reading px-4 py-12">
      <JsonLd data={structuredData(term)} />
      <Breadcrumbs
        locale={locale as Locale}
        items={[
          { name: t("glossaryTitle"), href: "/lexique" },
          { name: term.term, href: { pathname: "/lexique/[slug]", params: { slug: term.slug } } },
        ]}
      />
      <h1 className="mt-6 font-serif text-h1 text-primary-strong">{term.term}</h1>
      <ReviewNotice review={term.medicalReview} updatedAt={term.updatedAt} />

      <p className="mt-6 rounded-card border-l-4 border-primary bg-surface p-4">{term.definition}</p>
      <div className="mt-6 space-y-4">
        {term.detail.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {usedBy.length > 0 && (
        <section aria-labelledby="fiches" className="mt-10">
          <h2 id="fiches" className="font-serif text-h3">
            {t("usedIn")}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {usedBy.map((item) => (
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

      <p className="mt-10">
        <Link href="/lexique" className="underline underline-offset-4">
          {t("backToGlossary")}
        </Link>
      </p>
    </article>
  );
}
