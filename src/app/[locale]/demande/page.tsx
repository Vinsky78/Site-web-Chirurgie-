import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getInterventions } from "@/content/interventions";
import { INTERVENTION_IDS, type InterventionId } from "@/content/types";
import { INFO_PAGE_SLUGS } from "@/lib/pages";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";
import { RequestForm } from "./RequestForm";

type Props = PageProps<"/[locale]/demande">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "form" });
  // Page de conversion : pas d'intérêt à l'indexer.
  return { title: t("title"), robots: { index: false, follow: true } };
}

export default async function RequestPage({ params, searchParams }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("form");
  const { intervention } = await searchParams;

  const options = getInterventions(locale as Locale).map((item) => ({ id: item.id, title: item.title }));
  const initialIntervention = (INTERVENTION_IDS as readonly string[]).includes(String(intervention))
    ? (intervention as InterventionId)
    : undefined;

  return (
    <>
      <PageHeader title={t("title")} lead={t("lead")} />
      <div className="mx-auto max-w-3xl px-4 pb-12 pt-10">
        <Card>
          <RequestForm
            interventions={options}
            initialIntervention={initialIntervention}
            privacySlug={INFO_PAGE_SLUGS[locale as Locale].privacy}
          />
        </Card>
      </div>
    </>
  );
}
