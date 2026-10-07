import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { CATEGORY_IDS } from "@/content/types";
import { getInterventions } from "@/content/interventions";
import { InterventionCard } from "@/components/InterventionCard";
import { localeAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/interventions">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "intervention" });
  return {
    title: t("listTitle"),
    description: t("listLead"),
    alternates: localeAlternates(locale as Locale, () => "/interventions"),
  };
}

export default async function InterventionsPage({ params }: PageProps<"/[locale]/interventions">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("intervention");
  const tc = await getTranslations("categories");
  const interventions = getInterventions(locale as Locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-serif text-3xl font-semibold text-primary-strong sm:text-4xl">{t("listTitle")}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{t("listLead")}</p>
      {CATEGORY_IDS.map((category) => {
        const items = interventions.filter((item) => item.category === category);
        if (items.length === 0) return null;
        return (
          <section key={category} aria-labelledby={`cat-${category}`} className="mt-12">
            <h2 id={`cat-${category}`} className="font-serif text-2xl font-semibold">
              {tc(category)}
            </h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-3">
              {items.map((item) => (
                <li key={item.id}>
                  <InterventionCard intervention={item} />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
