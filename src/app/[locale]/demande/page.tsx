import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getInterventions } from "@/content/interventions";
import { INTERVENTION_IDS, type InterventionId } from "@/content/types";
import { INFO_PAGE_SLUGS } from "@/lib/pages";
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

  const options = (await getInterventions(locale as Locale)).map((item) => ({ id: item.id, title: item.title }));
  const initialIntervention = (INTERVENTION_IDS as readonly string[]).includes(String(intervention))
    ? (intervention as InterventionId)
    : undefined;

  return (
    <div className="mx-auto max-w-reading px-4 py-12">
      <h1 className="font-serif text-h1 text-primary-strong">{t("title")}</h1>
      <p className="mt-4 text-muted">{t("lead")}</p>
      <RequestForm
        interventions={options}
        initialIntervention={initialIntervention}
        privacySlug={INFO_PAGE_SLUGS[locale as Locale].privacy}
      />
    </div>
  );
}
