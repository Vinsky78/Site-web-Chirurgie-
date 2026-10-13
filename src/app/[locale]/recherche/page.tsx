import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getGlossary } from "@/content/glossary";
import { getGuides } from "@/content/guides";
import { getInterventions } from "@/content/interventions";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { buttonClasses } from "@/components/ui/button";
import type { Href } from "@/lib/seo";
import { matches } from "@/lib/search";

type Props = PageProps<"/[locale]/recherche">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "search" });
  return { title: t("title"), robots: { index: false, follow: true } };
}

interface Result {
  key: string;
  title: string;
  summary: string;
  href: Href;
}

export default async function SearchPage({ params, searchParams }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("search");
  const raw = (await searchParams).q;
  const q = (Array.isArray(raw) ? raw[0] : raw)?.trim().slice(0, 80) ?? "";

  const [interventions, guides, glossary] = q
    ? await Promise.all([getInterventions(locale as Locale), getGuides(locale as Locale), getGlossary(locale as Locale)])
    : [[], [], []];

  const groups: { id: string; label: string; items: Result[] }[] = [
    {
      id: "interventions",
      label: t("interventions"),
      items: interventions
        .filter((i) => matches(q, [i.title, i.summary, i.slug, ...i.description]))
        .map((i) => ({ key: i.id, title: i.title, summary: i.summary, href: { pathname: "/interventions/[slug]", params: { slug: i.slug } } })),
    },
    {
      id: "guides",
      label: t("guides"),
      items: guides
        .filter((g) => matches(q, [g.title, g.summary, g.answer, g.slug]))
        .map((g) => ({ key: g.id, title: g.title, summary: g.summary, href: { pathname: "/guides/[slug]", params: { slug: g.slug } } })),
    },
    {
      id: "glossary",
      label: t("glossary"),
      items: glossary
        .filter((term) => matches(q, [term.term, ...term.aliases, term.definition]))
        .map((term) => ({ key: term.id, title: term.term, summary: term.definition, href: { pathname: "/lexique/[slug]", params: { slug: term.slug } } })),
    },
  ];
  const total = groups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <div className="mx-auto max-w-reading px-4 py-12">
      <Breadcrumbs locale={locale as Locale} items={[{ name: t("title"), href: "/recherche" }]} />
      <h1 className="mt-6 font-serif text-h1 text-primary-strong">{t("title")}</h1>
      <p className="mt-4 text-muted">{t("lead")}</p>

      <form method="get" role="search" className="mt-8 flex flex-wrap items-end gap-3">
        <div className="min-w-0 flex-1">
          <label htmlFor="q" className="text-label">
            {t("label")}
          </label>
          <input
            id="q"
            name="q"
            type="search"
            defaultValue={q}
            maxLength={80}
            className="mt-1 block min-h-11 w-full rounded-control border border-border-input bg-surface px-3 py-2"
          />
        </div>
        <button type="submit" className={buttonClasses("primary")}>
          {t("button")}
        </button>
      </form>

      {!q && <p className="mt-6 text-muted">{t("hint")}</p>}
      {q && (
        <div aria-live="polite" className="mt-8">
          <p className="font-medium">{t("results", { count: total, q })}</p>
          {groups
            .filter((g) => g.items.length > 0)
            .map((g) => (
              <section key={g.id} aria-labelledby={`r-${g.id}`} className="mt-6">
                <h2 id={`r-${g.id}`} className="font-serif text-h3 text-primary-strong">
                  {g.label}
                </h2>
                <ul className="mt-3 space-y-3">
                  {g.items.map((item) => (
                    <li key={item.key}>
                      <Link href={item.href} className="block rounded-card border border-border bg-surface p-4 hover:border-primary">
                        <span className="font-semibold text-primary-strong">{item.title}</span>
                        <span className="mt-1 block text-small text-muted">{item.summary}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
        </div>
      )}
    </div>
  );
}
