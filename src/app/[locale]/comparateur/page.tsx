import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getInterventionById, getInterventions } from "@/content/interventions";
import { INTERVENTION_IDS, type Intervention, type InterventionId } from "@/content/types";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";

export async function generateMetadata({ params }: PageProps<"/[locale]/comparateur">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "compare" });
  // Page pilotée par paramètres : pas d'intérêt à l'indexer.
  return { title: t("title"), description: t("lead"), robots: { index: false, follow: true } };
}

const SLOTS = ["a", "b", "c"] as const;

function pick(value: string | string[] | undefined, locale: Locale): Intervention | undefined {
  const id = Array.isArray(value) ? value[0] : value;
  if (!id || !(INTERVENTION_IDS as readonly string[]).includes(id)) return undefined;
  return getInterventionById(locale, id as InterventionId);
}

export default async function ComparePage({ params, searchParams }: PageProps<"/[locale]/comparateur">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("compare");
  const tc = await getTranslations("categories");
  const query = await searchParams;
  const all = getInterventions(locale as Locale);
  const chosen = SLOTS.map((s) => pick(query[s], locale as Locale));
  const selected = chosen.filter((i): i is Intervention => i !== undefined);
  const select = "mt-1 block min-h-11 w-full rounded-control border border-border-input bg-surface px-3 py-2";

  return (
    <>
      <PageHeader title={t("title")} lead={t("lead")} />
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-10">
        <form method="get" className="grid gap-4 rounded-card border border-border bg-surface p-6 shadow-card sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end">
          {SLOTS.map((slot, i) => (
            <div key={slot}>
              <label htmlFor={`cmp-${slot}`} className="font-medium">{t("choose", { n: i + 1 })}</label>
              <select id={`cmp-${slot}`} name={slot} defaultValue={chosen[i]?.id ?? ""} className={select}>
                <option value="">{t("none")}</option>
                {all.map((item) => (
                  <option key={item.id} value={item.id}>{item.title}</option>
                ))}
              </select>
            </div>
          ))}
          <Button type="submit">{t("button")}</Button>
        </form>

        {selected.length < 2 ? (
          <div className="mt-8"><Alert>{t("empty")}</Alert></div>
        ) : (
          <div className="mt-8 overflow-x-auto rounded-card border border-border bg-surface shadow-card">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <caption className="sr-only">{t("title")}</caption>
              <thead>
                <tr className="bg-accent-soft">
                  <td className="p-4" />
                  {selected.map((i) => (
                    <th key={i.id} scope="col" className="p-4 font-serif text-lg text-primary-strong">{i.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <Row label={t("domain")} cells={selected.map((i) => tc(i.category))} />
                <Row label={t("anaesthesia")} cells={selected.map((i) => i.procedure.anaesthesia)} />
                <Row label={t("duration")} cells={selected.map((i) => i.procedure.duration)} />
                <Row label={t("hospitalStay")} cells={selected.map((i) => i.procedure.hospitalStay)} />
                <Row label={t("recovery")} cells={selected.map((i) => i.recovery[0])} />
                <Row label={t("risks")} cells={selected.map((i) => i.risks.slice(0, 3).map((r) => r.name).join(" · "))} />
                <tr>
                  <th scope="row" className="p-4 font-medium">{t("view")}</th>
                  {selected.map((i) => (
                    <td key={i.id} className="p-4">
                      <Link href={`/interventions/${i.slug}`} className="font-medium text-primary underline underline-offset-4">{i.title}</Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <p className="mt-6 text-sm text-muted">{t("note")}</p>
      </div>
    </>
  );
}

function Row({ label, cells }: { label: string; cells: string[] }) {
  return (
    <tr>
      <th scope="row" className="w-40 p-4 align-top font-medium">{label}</th>
      {cells.map((c, i) => (
        <td key={i} className="p-4 align-top text-muted">{c}</td>
      ))}
    </tr>
  );
}
