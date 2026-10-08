import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { INFO_PAGE_IDS, INFO_PAGE_SLUGS, infoPageIdFromSlug } from "@/lib/pages";
import { localeAlternates, withSocial } from "@/lib/seo";

type Props = PageProps<"/[locale]/informations/[page]">;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    INFO_PAGE_IDS.map((id) => ({ locale, page: INFO_PAGE_SLUGS[locale][id] })),
  );
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, page } = await params;
  const id = infoPageIdFromSlug(locale as Locale, page);
  if (!id) return {};
  const t = await getTranslations({ locale, namespace: "pages" });
  return withSocial(locale as Locale, {
    title: t(`${id}.title`),
    description: t(`${id}.description`),
    alternates: localeAlternates(locale as Locale, (l) => ({
      pathname: "/informations/[page]",
      params: { page: INFO_PAGE_SLUGS[l][id] },
    })),
  });
}

export default async function InfoPage({ params }: Props) {
  const { locale, page } = await params;
  setRequestLocale(locale);
  const id = infoPageIdFromSlug(locale as Locale, page);
  if (!id) notFound();
  const t = await getTranslations("pages");
  const paragraphs = t.raw(`${id}.body`) as string[];

  return (
    <div className="mx-auto max-w-reading px-4 py-12">
      <h1 className="font-serif text-h1 text-primary-strong">{t(`${id}.title`)}</h1>
      <div className="mt-6 space-y-4">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
}
