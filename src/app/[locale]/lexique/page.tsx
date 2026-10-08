import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getGlossary, initialOf } from "@/content/glossary";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { localeAlternates } from "@/lib/seo";

type Props = PageProps<"/[locale]/lexique">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "editorial" });
  return {
    title: t("glossaryTitle"),
    description: t("glossaryLead"),
    alternates: localeAlternates(locale as Locale, () => "/lexique"),
  };
}

export default async function GlossaryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("editorial");
  const terms = await getGlossary(locale as Locale);
  const letters = [...new Set(terms.map((term) => initialOf(term.term)))];

  return (
    <div className="mx-auto max-w-reading px-4 py-12">
      <Breadcrumbs locale={locale as Locale} items={[{ name: t("glossaryTitle"), href: "/lexique" }]} />
      <h1 className="mt-6 font-serif text-h1 text-primary-strong">{t("glossaryTitle")}</h1>
      <p className="mt-4 text-muted">{t("glossaryLead")}</p>

      <nav aria-label={t("alphabet")} className="mt-8">
        <ul className="flex flex-wrap gap-2">
          {letters.map((letter) => (
            <li key={letter}>
              <a
                href={`#lettre-${letter}`}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-control border border-border bg-surface underline-offset-4 hover:underline"
              >
                {letter}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {letters.map((letter) => (
        <section key={letter} aria-labelledby={`lettre-${letter}`} className="mt-10">
          <h2 id={`lettre-${letter}`} className="font-serif text-h2">
            {letter}
          </h2>
          <dl className="mt-4 divide-y divide-border rounded-card border border-border bg-surface">
            {terms
              .filter((term) => initialOf(term.term) === letter)
              .map((term) => (
                <div key={term.id} className="p-4">
                  <dt className="font-semibold">
                    <Link
                      href={{ pathname: "/lexique/[slug]", params: { slug: term.slug } }}
                      className="underline underline-offset-4"
                    >
                      {term.term}
                    </Link>
                  </dt>
                  <dd className="mt-1 text-muted">{term.definition}</dd>
                </div>
              ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
