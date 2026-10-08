import type { Metadata } from "next";
import { ClientMessages } from "@/components/ClientMessages";
import { notFound } from "next/navigation";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getDb } from "@/db/client";
import { getListedSurgeons } from "@/content/surgeons";
import { getInterventionById } from "@/content/interventions";
import type { InterventionId } from "@/content/types";
import type { CountryCode } from "@/lib/countries";
import { keyringFromEnv } from "@/lib/crypto/fieldCrypto";
import { findByToken } from "@/lib/lead/manage";
import { DeleteForm } from "./DeleteForm";

export async function generateMetadata({ params }: PageProps<"/[locale]/ma-demande/[token]">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "manage" });
  return { title: t("metaTitle"), robots: { index: false, follow: false } };
}

export default async function ManageRequestPage({ params }: PageProps<"/[locale]/ma-demande/[token]">) {
  const { locale, token } = await params;
  setRequestLocale(locale);
  if (!process.env.DATABASE_URL) notFound();

  const request = await findByToken(getDb(), keyringFromEnv(), token);
  if (!request) notFound();

  const t = await getTranslations("manage");
  const tForm = await getTranslations("form");
  const format = await getFormatter();
  const intervention = await getInterventionById(locale as Locale, request.interventionId as InterventionId);
  const listed = await getListedSurgeons(request.country as CountryCode, locale as Locale);
  const nameOf = (slug: string) => listed.find((s) => s.slug === slug)?.displayName ?? slug;

  const row = (label: string, value: string) => (
    <div className="grid gap-1 border-b border-border py-3 sm:grid-cols-[14rem_1fr]">
      <dt className="text-small text-muted">{label}</dt>
      <dd>{value}</dd>
    </div>
  );

  return (
    <div className="mx-auto max-w-reading px-4 py-12">
      <h1 className="font-serif text-h1 text-primary-strong">
        {t("title", { date: format.dateTime(request.createdAt, { dateStyle: "long" }) })}
      </h1>
      <p className="mt-4 text-muted">{t("lead")}</p>
      <p className="mt-2 text-small">{t("retention", { date: format.dateTime(request.deleteAfter, { dateStyle: "long" }) })}</p>

      <section aria-labelledby="destinataires" className="mt-10">
        <h2 id="destinataires" className="font-serif text-h2">{t("surgeons")}</h2>
        <ul className="mt-3 space-y-2">
          {request.recipients.map((r) => (
            <li key={r.slug} className="flex flex-wrap justify-between gap-2 border-b border-border py-2">
              <span>{nameOf(r.slug)}</span>
              <span className="text-small text-muted">{t(r.status)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="projet" className="mt-10">
        <h2 id="projet" className="font-serif text-h2">{t("project")}</h2>
        <dl className="mt-3">
          {row(tForm("fields.interventionId"), intervention?.title ?? request.interventionId)}
          {row(t("country"), tForm(`options.country.${request.country}`))}
          {row(tForm("fields.city"), request.city)}
          {row(tForm("fields.timeframe"), tForm(`options.timeframe.${request.timeframe}`))}
          {row(tForm("fields.budget"), tForm(`options.budget.${request.budget}`))}
        </dl>
      </section>

      <section aria-labelledby="sante" className="mt-10">
        <h2 id="sante" className="font-serif text-h2">{t("health")}</h2>
        <dl className="mt-3">
          {row(tForm("fields.smoker"), tForm(`options.smoker.${request.health.smoker}`))}
          {row(tForm("fields.previousSurgerySameArea"), tForm(`options.yesNo.${request.health.previousSurgerySameArea}`))}
          {request.health.pregnancyPlanned &&
            row(tForm("fields.pregnancyPlanned"), tForm(`options.yesNo.${request.health.pregnancyPlanned}`))}
        </dl>
      </section>

      <section aria-labelledby="coordonnees" className="mt-10">
        <h2 id="coordonnees" className="font-serif text-h2">{t("contact")}</h2>
        <dl className="mt-3">
          {row(tForm("fields.firstName"), request.firstName)}
          {row(tForm("fields.email"), request.email)}
          {row(tForm("fields.phone"), request.phone ?? t("noPhone"))}
          {row(t("birthYear"), String(request.birthYear))}
        </dl>
      </section>

      <ClientMessages namespaces={["manage"]}>
        <DeleteForm token={token} />
      </ClientMessages>
    </div>
  );
}
