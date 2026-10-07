import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getListedSurgeons } from "@/content/surgeons";
import { citiesWithPage, filterSurgeons } from "@/content/surgeons/rules";
import { SurgeonCard } from "@/components/SurgeonCard";
import { LOCALE_COUNTRY } from "@/lib/countries";
import { localeAlternates } from "@/lib/seo";

type Props = PageProps<"/[locale]/chirurgiens/ville/[city]">;

export const dynamicParams = true;
export function generateStaticParams() {
  return [];
}

/** La page n'existe que si la ville compte assez de chirurgiens publiés (CITY_PAGE_MIN_SURGEONS). */
async function load(locale: string, citySlug: string) {
  const all = await getListedSurgeons(LOCALE_COUNTRY[locale as Locale], locale as Locale);
  const city = citiesWithPage(all).find((c) => c.slug === citySlug);
  return city ? { city, surgeons: filterSurgeons(all, { city: citySlug }) } : undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, city } = await params;
  const data = await load(locale, city);
  if (!data) return {};
  const t = await getTranslations({ locale, namespace: "directory" });
  return {
    title: t("cityTitle", { city: data.city.name }),
    description: t("cityLead", { city: data.city.name, count: data.city.count }),
    alternates: localeAlternates(locale as Locale, (l) =>
      l === locale ? { pathname: "/chirurgiens/ville/[city]", params: { city } } : undefined,
    ),
  };
}

export default async function CityPage({ params }: Props) {
  const { locale, city } = await params;
  setRequestLocale(locale);
  const data = await load(locale, city);
  if (!data) notFound();
  const t = await getTranslations("directory");

  return (
    <div className="mx-auto max-w-page px-4 py-12">
      <p className="text-small text-muted">
        <Link href="/chirurgiens" className="underline underline-offset-4">
          {t("allSurgeons")}
        </Link>
      </p>
      <h1 className="mt-6 font-serif text-h1 text-primary-strong">{t("cityTitle", { city: data.city.name })}</h1>
      <p className="mt-4 max-w-reading text-muted">{t("cityLead", { city: data.city.name, count: data.city.count })}</p>
      <p className="mt-2 max-w-reading text-small text-muted">{t("order")}</p>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.surgeons.map((surgeon) => (
          <li key={surgeon.slug}>
            <SurgeonCard surgeon={surgeon} />
          </li>
        ))}
      </ul>
    </div>
  );
}
