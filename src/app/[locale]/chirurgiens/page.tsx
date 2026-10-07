import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Alert } from "@/components/ui/Alert";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { LOCALE_COUNTRY } from "@/lib/countries";
import { localeAlternates } from "@/lib/seo";
import { listPublicSurgeons } from "@/lib/surgeons/directory";

export async function generateMetadata({ params }: PageProps<"/[locale]/chirurgiens">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "surgeons" });
  return { title: t("title"), description: t("lead"), alternates: localeAlternates(locale as Locale, () => "/chirurgiens") };
}

export default async function SurgeonsPage({ params }: PageProps<"/[locale]/chirurgiens">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("surgeons");
  const surgeons = listPublicSurgeons({ country: LOCALE_COUNTRY[locale as Locale] });

  return (
    <>
      <PageHeader title={t("title")} lead={t("lead")}>
        <p className="mt-2 max-w-2xl text-sm text-muted">{t("independence")}</p>
      </PageHeader>
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-10">
      {surgeons.length === 0 ? (
        <div className="mt-8 max-w-2xl">
          <Alert title={t("emptyTitle")}>{t("empty")}</Alert>
        </div>
      ) : (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {surgeons.map((s) => (
            <li key={s.id}>
              <Card>
                <Badge>{t("verified", { registry: s.registry })}</Badge>
                <h2 className="mt-3 text-lg font-semibold">{s.name}</h2>
                <p className="text-muted">{s.city}</p>
              </Card>
            </li>
          ))}
        </ul>
      )}
      </div>
    </>
  );
}
