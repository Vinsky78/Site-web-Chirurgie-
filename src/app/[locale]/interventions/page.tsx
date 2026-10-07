import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { CATEGORY_IDS } from "@/content/types";
import { getInterventions } from "@/content/interventions";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "@/i18n/navigation";
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
    <>
      <PageHeader title={t("listTitle")} lead={t("listLead")} />
      <div className="mx-auto max-w-6xl px-4 pb-12">
      <nav aria-label={t("filterTitle")} className="-mt-5 flex flex-wrap gap-2">
        {CATEGORY_IDS.filter((c) => interventions.some((i) => i.category === c)).map((c) => (
          <a
            key={c}
            href={`#cat-${c}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-4 text-sm font-medium shadow-card hover:border-primary hover:text-primary"
          >
            <CategoryIcon category={c} className="h-5 w-5 text-primary" />
            {tc(c)}
            <span className="rounded-full bg-accent-soft px-2 text-xs text-primary-strong">
              {interventions.filter((i) => i.category === c).length}
            </span>
          </a>
        ))}
      </nav>
      {CATEGORY_IDS.map((category) => {
        const items = interventions.filter((item) => item.category === category);
        if (items.length === 0) return null;
        return (
          <section key={category} aria-labelledby={`cat-${category}`} className="reveal mt-12 scroll-mt-28">
            <h2 id={`cat-${category}`} className="heading-accent font-serif text-2xl font-semibold text-primary-strong">
              <Link href={`/interventions/categories/${category}`} className="underline-offset-4 hover:underline">
                {tc(category)}
              </Link>
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
    </>
  );
}
