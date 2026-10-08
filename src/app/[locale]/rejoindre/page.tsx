import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { ClientMessages } from "@/components/ClientMessages";
import { getInterventions } from "@/content/interventions";
import { LANGUAGES, SPECIALTIES } from "@/content/surgeons/types";
import { COUNTRY_CODES, LOCALE_COUNTRY } from "@/lib/countries";
import { INFO_PAGE_SLUGS } from "@/lib/pages";
import { localeAlternates, withSocial } from "@/lib/seo";
import { ApplicationForm } from "./ApplicationForm";

type Props = PageProps<"/[locale]/rejoindre">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "join" });
  return withSocial(locale as Locale, {
    title: t("metaTitle"),
    description: t("description"),
    alternates: localeAlternates(locale as Locale, () => "/rejoindre"),
  });
}

/** Candidature des chirurgiens (Phase 7) : la première étape de l'onboarding. */
export default async function JoinPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("join");
  const tDirectory = await getTranslations("directory");
  const regions = new Intl.DisplayNames([locale], { type: "region" });
  const languages = new Intl.DisplayNames([locale], { type: "language" });

  // Libellés traduits côté serveur : le formulaire ne reçoit que des listes de choix.
  const options = {
    countries: COUNTRY_CODES.map((value) => ({ value, label: regions.of(value) ?? value })),
    specialties: SPECIALTIES.map((value) => ({ value, label: tDirectory(`specialty.${value}`) })),
    interventions: (await getInterventions(locale as Locale)).map((item) => ({ value: item.id, label: item.title })),
    languages: LANGUAGES.map((value) => ({ value, label: languages.of(value) ?? value })),
  };

  return (
    <div className="mx-auto max-w-reading px-4 py-12">
      <h1 className="font-serif text-h1 text-primary-strong">{t("title")}</h1>
      <p className="mt-4 text-muted">{t("lead")}</p>

      <section aria-labelledby="modele" className="mt-10">
        <h2 id="modele" className="font-serif text-h2">
          {t("modelTitle")}
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {(t.raw("model") as string[]).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="etapes" className="mt-10">
        <h2 id="etapes" className="font-serif text-h2">
          {t("stepsTitle")}
        </h2>
        <ol className="mt-4 list-decimal space-y-2 pl-6">
          {(t.raw("steps") as string[]).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="candidature" className="mt-12">
        <h2 id="candidature" className="font-serif text-h2">
          {t("formTitle")}
        </h2>
        <ClientMessages namespaces={["join"]}>
          <ApplicationForm
            options={options}
            defaultCountry={LOCALE_COUNTRY[locale as Locale]}
            privacySlug={INFO_PAGE_SLUGS[locale as Locale].privacy}
          />
        </ClientMessages>
      </section>
    </div>
  );
}
