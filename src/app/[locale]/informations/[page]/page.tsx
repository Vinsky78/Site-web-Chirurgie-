import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { routing, type Locale } from "@/i18n/routing";
import { INFO_PAGE_IDS, INFO_PAGE_SLUGS, infoPageIdFromSlug } from "@/lib/pages";
import { localeAlternates } from "@/lib/seo";

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
  return {
    title: t(`${id}.title`),
    alternates: localeAlternates(locale as Locale, (l) => `/informations/${INFO_PAGE_SLUGS[l][id]}`),
  };
}

export default async function InfoPage({ params }: Props) {
  const { locale, page } = await params;
  setRequestLocale(locale);
  const id = infoPageIdFromSlug(locale as Locale, page);
  if (!id) notFound();
  const t = await getTranslations("pages");
  const paragraphs = t.raw(`${id}.body`) as string[];

  return (
    <>
      <PageHeader title={t(`${id}.title`)} />
      <div className="mx-auto max-w-3xl px-4 pb-12 pt-10">
        <Card>
          <div className="space-y-4 leading-relaxed">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
