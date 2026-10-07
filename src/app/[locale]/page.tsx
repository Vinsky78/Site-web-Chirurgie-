import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getInterventions } from "@/content/interventions";
import { InterventionCard } from "@/components/InterventionCard";
import { localeAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title: t("title"),
    alternates: localeAlternates(locale as Locale, () => ""),
  };
}

const PILLARS = ["info", "verified", "choice"] as const;

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const interventions = getInterventions(locale as Locale);

  return (
    <>
      <section className="bg-accent-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-primary-strong sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{t("lead")}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/interventions"
              className="inline-flex min-h-11 items-center rounded-md bg-primary px-5 font-medium text-white hover:bg-primary-strong"
            >
              {t("ctaInterventions")}
            </Link>
            <Link
              href="/demande"
              className="inline-flex min-h-11 items-center rounded-md border border-primary px-5 font-medium text-primary hover:bg-surface"
            >
              {t("ctaRequest")}
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="engagements" className="mx-auto max-w-6xl px-4 py-16">
        <h2 id="engagements" className="font-serif text-2xl font-semibold">
          {t("pillarsTitle")}
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-3">
          {PILLARS.map((key) => (
            <li key={key} className="rounded-lg border border-border bg-surface p-6">
              <h3 className="font-semibold">{t(`pillars.${key}.title`)}</h3>
              <p className="mt-2 text-muted">{t(`pillars.${key}.text`)}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="interventions" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 id="interventions" className="font-serif text-2xl font-semibold">
          {t("featured")}
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-3">
          {interventions.map((item) => (
            <li key={item.id}>
              <InterventionCard intervention={item} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="reflexion" className="mx-auto max-w-6xl px-4 pb-8">
        <div className="rounded-lg border border-border bg-surface p-6">
          <h2 id="reflexion" className="font-serif text-xl font-semibold">
            {t("reflectionTitle")}
          </h2>
          <p className="mt-2 text-muted">{t("reflectionText")}</p>
        </div>
      </section>
    </>
  );
}
