import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getGuides } from "@/content/guides";
import { getInterventions } from "@/content/interventions";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { matches } from "@/lib/search";

export async function generateMetadata({ params }: PageProps<"/[locale]/recherche">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "search" });
  return { title: t("title"), robots: { index: false, follow: true } };
}

export default async function SearchPage({ params, searchParams }: PageProps<"/[locale]/recherche">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("search");
  const raw = (await searchParams).q;
  const q = (Array.isArray(raw) ? raw[0] : raw)?.trim().slice(0, 80) ?? "";

  const interventions = q ? getInterventions(locale as Locale).filter((i) => matches(q, [i.title, i.summary, ...i.description, i.slug])) : [];
  const guides = q ? getGuides(locale as Locale).filter((g) => matches(q, [g.title, g.summary, g.slug])) : [];
  const total = interventions.length + guides.length;

  return (
    <>
      <PageHeader title={t("title")} lead={t("lead")} />
      <div className="mx-auto max-w-3xl px-4 pb-12 pt-10">
        <form method="get" role="search" className="flex flex-wrap items-end gap-3">
          <div className="min-w-0 flex-1">
            <label htmlFor="q" className="font-medium">{t("label")}</label>
            <input
              id="q"
              name="q"
              type="search"
              defaultValue={q}
              maxLength={80}
              className="mt-1 block min-h-11 w-full rounded-control border border-border-input bg-surface px-3 py-2"
            />
          </div>
          <Button type="submit">{t("button")}</Button>
        </form>

        {!q && <p className="mt-6 text-muted">{t("hint")}</p>}
        {q && (
          <div aria-live="polite" className="mt-8">
            <p className="font-medium">{t("results", { count: total, q })}</p>
            {interventions.length > 0 && (
              <section aria-labelledby="r-int" className="mt-6">
                <h2 id="r-int" className="font-serif text-xl font-semibold text-primary-strong">{t("interventions")}</h2>
                <ul className="mt-3 space-y-3">
                  {interventions.map((i) => (
                    <li key={i.id}>
                      <Link href={`/interventions/${i.slug}`} className="block rounded-card border border-border bg-surface p-4 hover:border-primary">
                        <span className="font-semibold text-primary-strong">{i.title}</span>
                        <span className="mt-1 block text-sm text-muted">{i.summary}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {guides.length > 0 && (
              <section aria-labelledby="r-gui" className="mt-6">
                <h2 id="r-gui" className="font-serif text-xl font-semibold text-primary-strong">{t("guides")}</h2>
                <ul className="mt-3 space-y-3">
                  {guides.map((g) => (
                    <li key={g.id}>
                      <Link href={`/guides/${g.slug}`} className="block rounded-card border border-border bg-surface p-4 hover:border-primary">
                        <span className="font-semibold text-primary-strong">{g.title}</span>
                        <span className="mt-1 block text-sm text-muted">{g.summary}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        )}
      </div>
    </>
  );
}
