import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getInterventions } from "@/content/interventions";
import { getListedSurgeons } from "@/content/surgeons";
import { citiesWithPage, filterSurgeons } from "@/content/surgeons/rules";
import { SurgeonCard } from "@/components/SurgeonCard";
import { buttonClasses } from "@/components/ui/button";
import { LOCALE_COUNTRY } from "@/lib/countries";
import { localeAlternates, withSocial } from "@/lib/seo";

type Props = PageProps<"/[locale]/chirurgiens">;

const param = (value: string | string[] | undefined) => (typeof value === "string" && value !== "" ? value : undefined);

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "directory" });
  const query = await searchParams;
  const surgeons = await getListedSurgeons(LOCALE_COUNTRY[locale as Locale], locale as Locale);
  const filtered = Boolean(param(query.intervention) || param(query.city));
  return withSocial(locale as Locale, {
    title: t("title"),
    description: t("lead"),
    // Chaque marché a son propre annuaire (chirurgiens du pays) : pas d'équivalent dans les autres langues.
    alternates: localeAlternates(locale as Locale, (l) => (l === locale ? "/chirurgiens" : undefined)),
    // Résultats filtrés et annuaire encore vide : pas d'indexation (contenu mince ou dupliqué).
    robots: filtered || surgeons.length === 0 ? { index: false, follow: true } : undefined,
  });
}

export default async function DirectoryPage({ params, searchParams }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("directory");
  const query = await searchParams;

  const all = await getListedSurgeons(LOCALE_COUNTRY[locale as Locale], locale as Locale);
  const interventions = await getInterventions(locale as Locale);
  const cityOptions = [...new Map(all.map((s) => [s.practice.citySlug, s.practice.city])).entries()].sort((a, b) =>
    a[1].localeCompare(b[1], locale),
  );
  const filters = { intervention: param(query.intervention), city: param(query.city) };
  const results = filterSurgeons(all, filters);
  const cities = citiesWithPage(all);

  return (
    <div className="mx-auto max-w-page px-4 py-12">
      <h1 className="font-serif text-h1 text-primary-strong">{t("title")}</h1>
      <p className="mt-4 max-w-reading text-muted">{t("lead")}</p>
      <p className="mt-2 max-w-reading text-small text-muted">{t("order")}</p>

      {all.length === 0 ? (
        <p className="mt-10 max-w-reading rounded-card border border-border bg-surface p-6">{t("empty")}</p>
      ) : (
        <>
          <form method="get" className="mt-10 flex flex-wrap items-end gap-4" aria-label={t("filters")}>
            <div>
              <label htmlFor="filtre-intervention" className="block text-label">
                {t("intervention")}
              </label>
              <select
                id="filtre-intervention"
                name="intervention"
                defaultValue={filters.intervention ?? ""}
                className="mt-1 min-h-11 rounded-control border border-border-input bg-surface px-3"
              >
                <option value="">{t("all")}</option>
                {interventions.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="filtre-ville" className="block text-label">
                {t("city")}
              </label>
              <select
                id="filtre-ville"
                name="city"
                defaultValue={filters.city ?? ""}
                className="mt-1 min-h-11 rounded-control border border-border-input bg-surface px-3"
              >
                <option value="">{t("all")}</option>
                {cityOptions.map(([slug, name]) => (
                  <option key={slug} value={slug}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className={buttonClasses("primary")}>
              {t("apply")}
            </button>
            {(filters.intervention || filters.city) && (
              <Link href="/chirurgiens" className="min-h-11 content-center underline underline-offset-4">
                {t("reset")}
              </Link>
            )}
          </form>

          <p className="mt-8 font-medium" role="status">
            {t("results", { count: results.length })}
          </p>
          <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((surgeon) => (
              <li key={surgeon.slug}>
                <SurgeonCard surgeon={surgeon} />
              </li>
            ))}
          </ul>

          {cities.length > 0 && (
            <section aria-labelledby="villes" className="mt-16">
              <h2 id="villes" className="font-serif text-h2">
                {t("cities")}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {cities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={{ pathname: "/chirurgiens/ville/[city]", params: { city: city.slug } }}
                      className="underline underline-offset-4"
                    >
                      {city.name} ({city.count})
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}

      <p className="mt-12 max-w-reading text-small text-muted">{t("noReviews")}</p>
    </div>
  );
}
