import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getInterventions } from "@/content/interventions";
import { isCategory } from "@/content/taxonomy";
import { CATEGORY_IDS } from "@/content/types";
import { PageHeader } from "@/components/ui/PageHeader";
import { InterventionCard } from "@/components/InterventionCard";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, localeAlternates, socialMetadata } from "@/lib/seo";

type Props = PageProps<"/[locale]/interventions/categories/[category]">;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => CATEGORY_IDS.map((category) => ({ locale, category })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;
  if (!isCategory(category)) return {};
  const t = await getTranslations({ locale, namespace: "category" });
  const tc = await getTranslations({ locale, namespace: "categories" });
  return {
    title: t("title", { category: tc(category) }),
    description: t(`${category}.lead`),
    alternates: localeAlternates(locale as Locale, () => `/interventions/categories/${category}`),
    ...socialMetadata({
      locale: locale as Locale,
      title: t("title", { category: tc(category) }),
      description: t(`${category}.lead`),
      path: `/interventions/categories/${category}`,
    }),
  };
}

export default async function CategoryPage({ params }: Props) {
  const { locale, category } = await params;
  if (!isCategory(category)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("category");
  const tc = await getTranslations("categories");
  const ti = await getTranslations("intervention");
  const items = getInterventions(locale as Locale).filter((i) => i.category === category);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ti("listTitle"), item: absoluteUrl(locale as Locale, "/interventions") },
      {
        "@type": "ListItem",
        position: 2,
        name: tc(category),
        item: absoluteUrl(locale as Locale, `/interventions/categories/${category}`),
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <PageHeader
        title={t("title", { category: tc(category) })}
        lead={t(`${category}.lead`)}
        eyebrow={
          <nav aria-label={ti("breadcrumb")}>
            <Link href="/interventions" className="underline-offset-4 hover:underline">
              {ti("listTitle")}
            </Link>{" "}
            / <span aria-current="page">{tc(category)}</span>
          </nav>
        }
      />
      <div className="mx-auto max-w-6xl px-4 pb-12">
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.id}>
            <InterventionCard intervention={item} />
          </li>
        ))}
      </ul>
      <p className="mt-10 text-sm text-muted">{t("others")}</p>
      <ul className="mt-2 flex flex-wrap gap-4">
        {CATEGORY_IDS.filter((c) => c !== category).map((c) => (
          <li key={c}>
            <Link href={`/interventions/categories/${c}`} className="underline underline-offset-4">
              {tc(c)}
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}
