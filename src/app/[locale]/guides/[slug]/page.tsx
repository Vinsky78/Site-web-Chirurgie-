import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getGuideAlternateSlugs, getGuideBySlug, getGuides, isGuideIndexable } from "@/content/guides";
import { JsonLd } from "@/components/JsonLd";
import { Alert } from "@/components/ui/Alert";
import { buttonClasses } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { absoluteUrl, localeAlternates, socialMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

type Props = PageProps<"/[locale]/guides/[slug]">;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => getGuides(locale).map((g) => ({ locale, slug: g.slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuideBySlug(locale as Locale, slug);
  if (!guide) return {};
  const alternates = getGuideAlternateSlugs(guide.id);
  return {
    title: guide.title,
    description: guide.summary,
    alternates: localeAlternates(locale as Locale, (l) => (alternates[l] ? `/guides/${alternates[l]}` : undefined)),
    ...socialMetadata({ locale: locale as Locale, title: guide.title, description: guide.summary, path: `/guides/${guide.slug}`, type: "article" }),
    robots: isGuideIndexable(guide) ? undefined : { index: false, follow: true },
  };
}

export default async function GuidePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const guide = getGuideBySlug(locale as Locale, slug);
  if (!guide) notFound();
  const t = await getTranslations("guides");
  const tn = await getTranslations("nav");
  const format = await getFormatter();
  const others = getGuides(locale as Locale).filter((g) => g.id !== guide.id);

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.summary,
    inLanguage: locale,
    dateModified: guide.updatedAt,
    url: absoluteUrl(locale as Locale, `/guides/${guide.slug}`),
    publisher: { "@type": "Organization", name: SITE_NAME },
    author: { "@type": "Organization", name: SITE_NAME },
  };

  return (
    <article>
      <JsonLd data={article} />
      <PageHeader
        title={guide.title}
        lead={guide.summary}
        eyebrow={
          <nav aria-label={t("breadcrumb")}>
            <ol className="flex flex-wrap gap-2 normal-case tracking-normal">
              <li>
                <Link href="/" className="underline underline-offset-4">{tn("home")}</Link>
                <span aria-hidden="true"> / </span>
              </li>
              <li>
                <Link href="/guides" className="underline underline-offset-4">{t("title")}</Link>
                <span aria-hidden="true"> / </span>
              </li>
              <li aria-current="page">{guide.title}</li>
            </ol>
          </nav>
        }
      >
        <p className="mt-5 text-sm text-muted">{t("updatedAt", { date: format.dateTime(new Date(guide.updatedAt), { dateStyle: "long" }) })}</p>
      </PageHeader>

      <div className="mx-auto max-w-3xl px-4 pb-12 pt-10">
        {!guide.reviewed && <Alert tone="warning">{t("draftBanner")}</Alert>}
        {guide.sections.map((section, i) => (
          <section key={section.heading} aria-labelledby={`s-${i}`} className="mt-10">
            <h2 id={`s-${i}`} className="heading-accent font-serif text-2xl font-semibold text-primary-strong">{section.heading}</h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {section.bullets && (
                <ul className="list-disc space-y-2 pl-5 marker:text-clay">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        <p className="mt-12">
          <Link href="/demande" data-track="guide_request" className={buttonClasses()}>{t("cta")}</Link>
        </p>

        <section aria-labelledby="others" className="mt-12">
          <h2 id="others" className="font-serif text-2xl font-semibold text-primary-strong">{t("others")}</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {others.map((g) => (
              <li key={g.id}>
                <Link href={`/guides/${g.slug}`} className="block h-full rounded-card border border-border bg-surface p-4 hover:border-primary">
                  <span className="font-semibold text-primary-strong">{g.title}</span>
                  <span className="mt-1 block text-sm text-muted">{g.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
