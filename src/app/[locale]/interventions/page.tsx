import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { CATEGORY_IDS } from "@/content/types";
import { getInterventions } from "@/content/interventions";
import { InterventionCard } from "@/components/InterventionCard";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { localeAlternates, withSocial } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/interventions">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "intervention" });
  return withSocial(locale as Locale, {
    title: t("listTitle"),
    description: t("listLead"),
    alternates: localeAlternates(locale as Locale, () => "/interventions"),
  });
}

export default async function InterventionsPage({ params }: PageProps<"/[locale]/interventions">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("intervention");
  const tc = await getTranslations("categories");
  const interventions = await getInterventions(locale as Locale);

  return (
    <div className="mx-auto max-w-page px-4 py-12">
      <h1 className="font-serif text-h1 text-primary-strong">{t("listTitle")}</h1>
      <p className="mt-4 max-w-reading text-muted">{t("listLead")}</p>
      <nav aria-label={t("jumpTo")} className="mt-8 flex flex-wrap gap-2">
        {CATEGORY_IDS.filter((c) => interventions.some((i) => i.category === c)).map((c) => (
          <a
            key={c}
            href={`#cat-${c}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-4 text-label hover:border-primary hover:text-primary"
          >
            <CategoryIcon category={c} className="h-5 w-5 text-clay" />
            {tc(c)}
            <span className="rounded-full bg-primary-soft px-2 text-small text-primary-strong">
              {interventions.filter((i) => i.category === c).length}
            </span>
          </a>
        ))}
      </nav>
      {CATEGORY_IDS.map((category) => {
        const items = interventions.filter((item) => item.category === category);
        if (items.length === 0) return null;
        return (
          <section key={category} aria-labelledby={`cat-${category}`} className="mt-12">
            <h2 id={`cat-${category}`} className="font-serif text-h2">
              {tc(category)}
            </h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
