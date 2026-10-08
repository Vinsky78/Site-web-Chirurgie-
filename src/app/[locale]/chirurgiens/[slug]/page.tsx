import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getInterventionById } from "@/content/interventions";
import { getListedSurgeonBySlug } from "@/content/surgeons";
import { PUBLIC_REGISTRIES } from "@/content/surgeons/registries";
import { verificationExpiresAt } from "@/content/surgeons/rules";
import type { Surgeon } from "@/content/surgeons/types";
import { JsonLd } from "@/components/JsonLd";
import { buttonClasses } from "@/components/ui/button";
import { LOCALE_COUNTRY } from "@/lib/countries";
import { absoluteUrl, localeAlternates, withSocial } from "@/lib/seo";

type Props = PageProps<"/[locale]/chirurgiens/[slug]">;

/** Spécialités schema.org (MedicalSpecialty) ; absentes quand aucune ne correspond exactement. */
const SCHEMA_SPECIALTY: Partial<Record<Surgeon["specialty"], string>> = {
  "plastic-surgery": "PlasticSurgery",
  ent: "Otolaryngologic",
};

// Profils servis à la demande : un chirurgien vérifié dans le CMS apparaît sans nouveau build.
export const dynamicParams = true;
export function generateStaticParams() {
  return [];
}

async function load(locale: string, slug: string) {
  return getListedSurgeonBySlug(LOCALE_COUNTRY[locale as Locale], locale as Locale, slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const surgeon = await load(locale, slug);
  if (!surgeon) return {};
  const t = await getTranslations({ locale, namespace: "directory" });
  return withSocial(locale as Locale, {
    title: `${surgeon.displayName}, ${surgeon.practice.city}`,
    description: `${t(`specialty.${surgeon.specialty}`)}. ${surgeon.practice.name}, ${surgeon.practice.city}.`,
    // Un profil n'existe que dans le marché de son pays d'exercice.
    alternates: localeAlternates(locale as Locale, (l) =>
      l === locale ? { pathname: "/chirurgiens/[slug]", params: { slug } } : undefined,
    ),
  });
}

export default async function SurgeonPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const surgeon = await load(locale, slug);
  if (!surgeon) notFound();

  const t = await getTranslations("directory");
  const format = await getFormatter();
  const registry = PUBLIC_REGISTRIES[surgeon.country];
  const verifiedAt = surgeon.verification.verifiedAt!;
  const interventions = (
    await Promise.all(surgeon.interventions.map((id) => getInterventionById(locale as Locale, id)))
  ).flatMap((item) => item ?? []);
  const date = (value: string | Date) => format.dateTime(new Date(value), { dateStyle: "long" });

  return (
    <article className="mx-auto max-w-reading px-4 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Physician",
          name: surgeon.displayName,
          url: absoluteUrl(locale as Locale, { pathname: "/chirurgiens/[slug]", params: { slug } }),
          medicalSpecialty: SCHEMA_SPECIALTY[surgeon.specialty],
          knowsLanguage: surgeon.languages,
          address: {
            "@type": "PostalAddress",
            streetAddress: surgeon.practice.address,
            postalCode: surgeon.practice.postalCode,
            addressLocality: surgeon.practice.city,
            addressCountry: surgeon.country,
          },
        }}
      />
      <p className="text-small text-muted">
        <Link href="/chirurgiens" className="underline underline-offset-4">
          {t("allSurgeons")}
        </Link>
      </p>
      <h1 className="mt-6 font-serif text-h1 text-primary-strong">{surgeon.displayName}</h1>
      <p className="mt-2 text-primary">{t(`specialty.${surgeon.specialty}`)}</p>

      <section aria-labelledby="verification" className="mt-8 rounded-card border-l-4 border-success bg-surface p-6">
        <h2 id="verification" className="text-h3">
          {t("verification")}
        </h2>
        <p className="mt-2">
          {t("verifiedOn", { date: date(verifiedAt), next: date(verificationExpiresAt(verifiedAt)) })}
        </p>
        {registry && (
          <p className="mt-2 text-small text-muted">
            {t("registry", { registry: registry.name, number: surgeon.registryNumber })}.{" "}
            <a href={registry.url} className="underline underline-offset-4" rel="noopener">
              {t("checkYourself")}
            </a>
          </p>
        )}
      </section>

      {surgeon.bio && (
        <section aria-labelledby="presentation" className="mt-10">
          <h2 id="presentation" className="font-serif text-h2">
            {t("about")}
          </h2>
          <p className="mt-3">{surgeon.bio}</p>
        </section>
      )}

      <section aria-labelledby="exercice" className="mt-10">
        <h2 id="exercice" className="font-serif text-h2">
          {t("practice")}
        </h2>
        <address className="mt-3 not-italic">
          {surgeon.practice.name}
          <br />
          {surgeon.practice.address}
          <br />
          {surgeon.practice.postalCode} {surgeon.practice.city}
        </address>
        <p className="mt-3">
          {t("languagesList", { list: surgeon.languages.map((l) => t(`language.${l}`)).join(", ") })}
        </p>
      </section>

      {interventions.length > 0 && (
        <section aria-labelledby="interventions-pratiquees" className="mt-10">
          <h2 id="interventions-pratiquees" className="font-serif text-h2">
            {t("interventions")}
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {interventions.map((item) => (
              <li key={item.id}>
                <Link
                  href={{ pathname: "/interventions/[slug]", params: { slug: item.slug } }}
                  className="underline underline-offset-4"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-12">
        <Link
          href={{ pathname: "/demande", query: { intervention: interventions[0]?.id ?? "", surgeon: surgeon.slug } }}
          className={buttonClasses("primary")}
        >
          {t("cta")}
        </Link>
        <p className="mt-3 text-small text-muted">{t("ctaNote")}</p>
      </div>
      <p className="mt-10 text-small text-muted">{t("noReviews")}</p>
    </article>
  );
}
