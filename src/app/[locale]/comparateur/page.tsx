import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getInterventions } from "@/content/interventions";
import type { Intervention } from "@/content/types";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { buttonClasses } from "@/components/ui/button";

type Props = PageProps<"/[locale]/comparateur">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "compare" });
  // Page pilotée par paramètres : pas d'intérêt à l'indexer.
  return { title: t("title"), description: t("lead"), robots: { index: false, follow: true } };
}

const SLOTS = ["a", "b", "c"] as const;

export default async function ComparePage({ params, searchParams }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("compare");
  const tc = await getTranslations("categories");
  const query = await searchParams;
  const all = await getInterventions(locale as Locale);
  const chosen = SLOTS.map((slot) => {
    const value = query[slot];
    const id = Array.isArray(value) ? value[0] : value;
    return all.find((item) => item.id === id);
  });
  const selected = chosen.filter((item): item is Intervention => item !== undefined);
  const select = "mt-1 block min-h-11 w-full rounded-control border border-border-input bg-surface px-3 py-2";

  return (
    <div className="mx-auto max-w-page px-4 py-12">
      <Breadcrumbs locale={locale as Locale} items={[{ name: t("title"), href: "/comparateur" }]} />
      <h1 className="mt-6 font-serif text-h1 text-primary-strong">{t("title")}</h1>
      <p className="mt-4 max-w-reading text-muted">{t("lead")}</p>

      <form method="get" className="mt-8 grid gap-4 rounded-card border border-border bg-surface p-6 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end">
        {SLOTS.map((slot, i) => (
          <div key={slot}>
            <label htmlFor={`cmp-${slot}`} className="text-label">
              {t("choose", { n: i + 1 })}
            </label>
            <select id={`cmp-${slot}`} name={slot} defaultValue={chosen[i]?.id ?? ""} className={select}>
              <option value="">{t("none")}</option>
              {all.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button type="submit" className={buttonClasses("primary")}>
          {t("button")}
        </button>
      </form>

      {selected.length < 2 ? (
        <p role="status" className="mt-8 rounded-card bg-accent-soft p-4">
          {t("empty")}
        </p>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-card border border-border bg-surface">
          <table className="w-full min-w-[40rem] border-collapse text-left text-small">
            <caption className="sr-only">{t("title")}</caption>
            <thead>
              <tr className="bg-accent-soft">
                <td className="p-4" />
                {selected.map((item) => (
                  <th key={item.id} scope="col" className="p-4 font-serif text-h3 text-primary-strong">
                    {item.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <Row label={t("category")} cells={selected.map((item) => tc(item.category))} />
              <Row label={t("anaesthesia")} cells={selected.map((item) => item.procedure.anaesthesia)} />
              <Row label={t("duration")} cells={selected.map((item) => item.procedure.duration)} />
              <Row label={t("hospitalStay")} cells={selected.map((item) => item.procedure.hospitalStay)} />
              <Row label={t("recovery")} cells={selected.map((item) => item.recovery[0] ?? "")} />
              <Row label={t("risks")} cells={selected.map((item) => item.risks.slice(0, 3).map((r) => r.name).join(" · "))} />
              <tr>
                <th scope="row" className="p-4 font-medium">
                  {t("view")}
                </th>
                {selected.map((item) => (
                  <td key={item.id} className="p-4">
                    <Link
                      href={{ pathname: "/interventions/[slug]", params: { slug: item.slug } }}
                      className="font-medium text-primary underline underline-offset-4"
                    >
                      {item.title}
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <p className="mt-6 text-small text-muted">{t("note")}</p>
    </div>
  );
}

function Row({ label, cells }: { label: string; cells: string[] }) {
  return (
    <tr>
      <th scope="row" className="w-40 p-4 align-top font-medium">
        {label}
      </th>
      {cells.map((cell, i) => (
        <td key={i} className="p-4 align-top text-muted">
          {cell}
        </td>
      ))}
    </tr>
  );
}
