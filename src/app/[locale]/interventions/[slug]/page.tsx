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
import { JsonLd } from "@/components/JsonLd";
import { LegalBox } from "@/components/LegalBox";
import { LOCALE_COUNTRY } from "@/lib/countries";
import { absoluteUrl, localeAlternates } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { buttonClasses } from "@/components/ui/button";

type Props = PageProps<"/[locale]/interventions/[slug]">;

export async function generateStaticParams() {
  const perLocale = await Promise.all(
    routing.locales.map(async (locale) =>
      (await getInterventions(locale)).map((item) => ({ locale, slug: item.slug })),
    ),
  );
  return perLocale.flat();
}

// Une adresse modifiée dans le CMS est servie sans nouveau build ; un slug inconnu renvoie une 404.
export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const intervention = await getInterventionBySlug(locale as Locale, slug);
  if (!intervention) return {};
  const alternates = await getAlternateSlugs(intervention.id);

  return {
    title: intervention.title,
    description: intervention.summary,
    alternates: localeAlternates(locale as Locale, (l) =>
      alternates[l] ? { pathname: "/interventions/[slug]", params: { slug: alternates[l] } } : undefined,
    ),
    // Un contenu non relu par un chirurgien n'est pas indexé (exigence YMYL / E-E-A-T).
    robots: isIndexable(intervention) ? undefined : { index: false, follow: true },
  };
}

function structuredData(intervention: Intervention, listTitle: string) {
  const url = absoluteUrl(intervention.locale, {
    pathname: "/interventions/[slug]",
    params: { slug: intervention.slug },
  });
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
        { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl(intervention.locale, "/") },
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
      <h2 id={id} className="font-serif text-h2">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default async function InterventionPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const intervention = await getInterventionBySlug(locale as Locale, slug);
  if (!intervention) notFound();

  const t = await getTranslations("intervention");
  const tn = await getTranslations("nav");
  const format = await getFormatter();
  const review = intervention.medicalReview;
  const formatDate = (iso: string) => format.dateTime(new Date(iso), { dateStyle: "long" });

  return (
    <article className="mx-auto max-w-reading px-4 py-12">
      <JsonLd data={structuredData(intervention, t("listTitle"))} />

      <nav aria-label={t("breadcrumb")} className="text-small text-muted">
        <ol className="flex flex-wrap gap-2">
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

      <h1 className="mt-6 font-serif text-h1 text-primary-strong">{intervention.title}</h1>
      <p className="mt-4 text-muted">{intervention.summary}</p>

      <p className="mt-4 text-small text-muted">
        {review.status === "reviewed"
          ? t("reviewedBy", {
              reviewer: review.reviewer,
              qualification: review.qualification,
              date: formatDate(review.reviewedAt),
            })
          : t("updatedAt", { date: formatDate(intervention.updatedAt) })}
      </p>

      {review.status === "draft" && (
        <p role="note" className="mt-6 rounded-control bg-warning-bg p-4 text-warning-ink">
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
        <dl className="mt-4 divide-y divide-border rounded-card border border-border bg-surface">
          {intervention.risks.map((risk) => (
            <div key={risk.name} className="p-4">
              <dt className="font-semibold">{risk.name}</dt>
              <dd className="mt-1 text-muted">{risk.detail}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="deroulement" title={t("procedure")}>
        <dl className="grid gap-4 sm:grid-cols-3">
          {(["anaesthesia", "duration", "hospitalStay"] as const).map((key) => (
            <div key={key} className="rounded-card border border-border bg-surface p-4">
              <dt className="text-small font-medium text-primary">{t(key)}</dt>
              <dd className="mt-1">{intervention.procedure[key]}</dd>
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
        <LegalBox country={LOCALE_COUNTRY[locale as Locale]} />
      </div>

      <Section id="faq" title={t("faq")}>
        <div className="space-y-3">
          {intervention.faq.map((item) => (
            <details key={item.question} className="rounded-card border border-border bg-surface p-4">
              <summary className="cursor-pointer font-semibold">{item.question}</summary>
              <p className="mt-2 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <p className="mt-10 text-small text-muted">{t("noPromise")}</p>

      <p className="mt-6">
        <Link
          href={{ pathname: "/demande", query: { intervention: intervention.id } }}
          className={buttonClasses("primary")}
        >
          {t("cta")}
        </Link>
      </p>
    </article>
  );
}
