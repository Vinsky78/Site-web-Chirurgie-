import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import {
  getAlternateSlugs,
  getInterventionBySlug,
  getInterventions,
  isIndexable,
} from "@/content/interventions";
import type { Intervention } from "@/content/types";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { PageHeader } from "@/components/ui/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { LegalBox } from "@/components/LegalBox";
import { LOCALE_COUNTRY } from "@/lib/countries";
import { absoluteUrl, localeAlternates, socialMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

type Props = PageProps<"/[locale]/interventions/[slug]">;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getInterventions(locale).map((item) => ({ locale, slug: item.slug })),
  );
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const intervention = getInterventionBySlug(locale as Locale, slug);
  if (!intervention) return {};
  const alternates = getAlternateSlugs(intervention.id);

  return {
    title: intervention.title,
    description: intervention.summary,
    alternates: localeAlternates(locale as Locale, (l) =>
      alternates[l] ? `/interventions/${alternates[l]}` : undefined,
    ),
    ...socialMetadata({
      locale: locale as Locale,
      title: intervention.title,
      description: intervention.summary,
      path: `/interventions/${intervention.slug}`,
      type: "article",
    }),
    // Un contenu non relu par un chirurgien n'est pas indexé (exigence YMYL / E-E-A-T).
    robots: isIndexable(intervention) ? undefined : { index: false, follow: true },
  };
}

function structuredData(intervention: Intervention, listTitle: string) {
  const url = absoluteUrl(intervention.locale, `/interventions/${intervention.slug}`);
  const review = intervention.medicalReview;
  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      url,
      name: intervention.title,
      description: intervention.summary,
      inLanguage: intervention.locale,
      dateModified: intervention.updatedAt,
      publisher: { "@type": "Organization", name: SITE_NAME },
      author: { "@type": "Organization", name: SITE_NAME },
      ...(review.status === "reviewed" && {
        lastReviewed: review.reviewedAt,
        reviewedBy: { "@type": "Person", name: review.reviewer, jobTitle: review.qualification },
      }),
      mainEntity: {
        "@type": "MedicalProcedure",
        name: intervention.title,
        procedureType: "https://schema.org/SurgicalProcedure",
        howPerformed: intervention.description.join(" "),
        preparation: intervention.contraindications.join(" "),
        followup: intervention.recovery.join(" "),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl(intervention.locale, "") },
        { "@type": "ListItem", position: 2, name: listTitle, item: absoluteUrl(intervention.locale, "/interventions") },
        { "@type": "ListItem", position: 3, name: intervention.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: intervention.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="mt-10">
      <h2 id={id} className="heading-accent scroll-mt-24 font-serif text-2xl font-semibold text-primary-strong">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

const TOC = [
  ["description", "whatIs"],
  ["indications", "indications"],
  ["contre-indications", "contraindications"],
  ["risques", "risks"],
  ["convalescence", "recovery"],
  ["alternatives", "alternatives"],
  ["faq", "faq"],
] as const;

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-clay">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default async function InterventionPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const intervention = getInterventionBySlug(locale as Locale, slug);
  if (!intervention) notFound();

  const t = await getTranslations("intervention");
  const tn = await getTranslations("nav");
  const format = await getFormatter();
  const review = intervention.medicalReview;
  const related = getInterventions(locale as Locale)
    .filter((i) => i.category === intervention.category && i.id !== intervention.id)
    .slice(0, 4);
  const formatDate = (iso: string) => format.dateTime(new Date(iso), { dateStyle: "long" });

  return (
    <article>
      <JsonLd data={structuredData(intervention, t("listTitle"))} />

      <PageHeader
        title={intervention.title}
        lead={intervention.summary}
        eyebrow={
          <nav aria-label={t("breadcrumb")}>
            <ol className="flex flex-wrap gap-2 normal-case tracking-normal">
              <li>
                <Link href="/" className="underline underline-offset-4">
                  {tn("home")}
                </Link>
                <span aria-hidden="true"> / </span>
              </li>
              <li>
                <Link href="/interventions" className="underline underline-offset-4">
                  {t("listTitle")}
                </Link>
                <span aria-hidden="true"> / </span>
              </li>
              <li aria-current="page">{intervention.title}</li>
            </ol>
          </nav>
        }
      >
        <p className="mt-5 flex items-center gap-2 text-sm text-muted">
          <CategoryIcon category={intervention.category} className="h-6 w-6 text-primary" />
          {review.status === "reviewed"
            ? t("reviewedBy", {
                reviewer: review.reviewer,
                qualification: review.qualification,
                date: formatDate(review.reviewedAt),
              })
            : t("updatedAt", { date: formatDate(intervention.updatedAt) })}
        </p>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4">
        <dl aria-label={t("keyFacts")} className="-mt-8 grid gap-4 sm:grid-cols-3">
          {(["anaesthesia", "duration", "hospitalStay"] as const).map((key) => (
            <div key={key} className="rounded-card border border-border bg-surface p-5 shadow-card">
              <dt className="text-xs font-semibold uppercase tracking-wider text-clay">{t(key)}</dt>
              <dd className="mt-1 text-sm">{intervention.procedure[key]}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="max-w-3xl">
      {review.status === "draft" && (
        <p role="note" className="mt-8 rounded-control border-l-4 border-warning-ink bg-warning-bg p-4 text-warning-ink">
          {t("draftBanner")}
        </p>
      )}

      <Section id="description" title={t("whatIs")}>
        <div className="space-y-4">
          {intervention.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section id="indications" title={t("indications")}>
        <BulletList items={intervention.indications} />
      </Section>

      <Section id="contre-indications" title={t("contraindications")}>
        <BulletList items={intervention.contraindications} />
      </Section>

      <Section id="risques" title={t("risks")}>
        <p className="text-muted">{t("risksIntro")}</p>
        <dl className="mt-4 divide-y divide-border rounded-lg border border-border bg-surface">
          {intervention.risks.map((risk) => (
            <div key={risk.name} className="p-4">
              <dt className="font-semibold">{risk.name}</dt>
              <dd className="mt-1 text-muted">{risk.detail}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="convalescence" title={t("recovery")}>
        <BulletList items={intervention.recovery} />
      </Section>

      <Section id="alternatives" title={t("alternatives")}>
        <BulletList items={intervention.alternatives} />
      </Section>

      <div className="mt-10">
        <LegalBox country={LOCALE_COUNTRY[locale as Locale]} surgical={intervention.category !== "injectables"} />
      </div>

      <Section id="faq" title={t("faq")}>
        <div className="space-y-3">
          {intervention.faq.map((item) => (
            <details key={item.question} className="rounded-lg border border-border bg-surface p-4">
              <summary className="cursor-pointer font-semibold">{item.question}</summary>
              <p className="mt-2 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <p className="mt-10 text-sm text-muted">{t("noPromise")}</p>

      {related.length > 0 && (
        <section aria-labelledby="related" className="mt-12">
          <h2 id="related" className="font-serif text-2xl font-semibold text-primary-strong">{t("related")}</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {related.map((item) => (
              <li key={item.id}>
                <Link href={`/interventions/${item.slug}`} className="block rounded-card border border-border bg-surface p-4 hover:border-primary">
                  <span className="font-semibold text-primary-strong">{item.title}</span>
                  <span className="mt-1 block text-sm text-muted">{item.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="mt-10 space-y-6">
            <nav aria-label={t("toc")} className="rounded-card border border-border bg-surface p-5">
              <h2 className="font-serif text-lg font-semibold text-primary-strong">{t("toc")}</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {TOC.map(([id, key]) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-muted underline-offset-4 hover:text-primary hover:underline">
                      {t(key)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="rounded-card bg-primary-strong p-5 text-white">
              <h2 className="font-serif text-lg font-semibold">{t("ctaTitle")}</h2>
              <p className="mt-2 text-sm text-primary-soft">{t("ctaText")}</p>
              <Link
                href={`/demande?intervention=${intervention.id}`}
                data-track="sidebar_request"
                className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-control bg-white px-4 py-2 text-center text-sm font-medium text-primary-strong hover:bg-primary-soft"
              >
                {t("cta")}
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
