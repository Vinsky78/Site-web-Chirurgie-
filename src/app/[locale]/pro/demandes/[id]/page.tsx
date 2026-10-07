import { notFound } from "next/navigation";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getDb } from "@/db/client";
import { getInterventionById } from "@/content/interventions";
import type { InterventionId } from "@/content/types";
import { COUNTRY_RULES, type CountryCode } from "@/lib/countries";
import { keyringFromEnv } from "@/lib/crypto/fieldCrypto";
import { requireProSession } from "@/lib/auth/guard";
import { linkedSurgeonSlugs, openRequest } from "@/lib/pro/inbox";
import { RelevanceForm } from "./RelevanceForm";

export default async function RequestPage({ params }: PageProps<"/[locale]/pro/demandes/[id]">) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const session = await requireProSession(locale as Locale);

  const db = getDb();
  // Contrôle d'accès dans la requête elle-même : un identifiant deviné ne donne rien (404).
  const request = await openRequest(db, keyringFromEnv(), {
    requestId: id,
    userId: session.user.id,
    slugs: await linkedSurgeonSlugs(db, session.user.id),
  });
  if (!request) notFound();

  const t = await getTranslations("pro.request");
  const tForm = await getTranslations("form");
  const format = await getFormatter();
  const intervention = await getInterventionById(locale as Locale, request.interventionId as InterventionId);
  const reflectionDays = COUNTRY_RULES[request.country as CountryCode]?.legalReflectionDays;

  const row = (label: string, value: string) => (
    <div className="grid gap-1 border-b border-border py-3 sm:grid-cols-[14rem_1fr]">
      <dt className="text-small text-muted">{label}</dt>
      <dd>{value}</dd>
    </div>
  );

  return (
    <div className="max-w-reading">
      <Link href="/pro" className="text-small underline underline-offset-4">
        {t("back")}
      </Link>
      <h1 className="mt-6 font-serif text-h1 text-primary-strong">
        {t("title", { date: format.dateTime(request.createdAt, { dateStyle: "long" }) })}
      </h1>
      <p className="mt-4 rounded-control bg-accent-soft p-4 text-small">{t("notice")}</p>
      {reflectionDays && <p className="mt-4 text-small">{t("reflection", { days: reflectionDays })}</p>}

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

      <RelevanceForm requestId={request.id} initial={request.relevant} />
    </div>
  );
}
