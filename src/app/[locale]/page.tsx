import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getInterventions } from "@/content/interventions";
import { InterventionCard } from "@/components/InterventionCard";
import { HeroArt } from "@/components/ui/HeroArt";
import { Card } from "@/components/ui/Card";
import { buttonClasses } from "@/components/ui/Button";
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
  const interventions = getInterventions(locale as Locale).slice(0, 6);
  const steps = [0, 1, 2, 3];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-sand via-bg to-accent-soft">
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-clay">{t("eyebrow")}</p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.1] text-primary-strong sm:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{t("lead")}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/interventions" className={`${buttonClasses()} px-6 shadow-card`}>
                {t("ctaInterventions")}
              </Link>
              <Link href="/demande" className={`${buttonClasses("secondary")} px-6`}>
                {t("ctaRequest")}
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-primary-strong">
              {[0, 1, 2].map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">✓</span>
                  {t(`trust.${i}`)}
                </li>
              ))}
            </ul>
          </div>
          <HeroArt className="mx-auto hidden w-full max-w-md lg:block" />
        </div>
      </section>

      <section aria-labelledby="engagements" className="mx-auto max-w-6xl px-4 py-16">
        <h2 id="engagements" className="font-serif text-3xl font-semibold text-primary-strong">
          {t("pillarsTitle")}
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-3">
          {PILLARS.map((key) => (
            <li key={key}>
              <Card className="h-full border-t-4 border-t-primary">
                <h3 className="text-lg font-semibold">{t(`pillars.${key}.title`)}</h3>
                <p className="mt-2 text-muted">{t(`pillars.${key}.text`)}</p>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="etapes" className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="etapes" className="font-serif text-3xl font-semibold text-primary-strong">
            {t("steps.title")}
          </h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((i) => (
              <li key={i} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-white"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{t(`steps.items.${i}.title`)}</h3>
                  <p className="mt-1 text-sm text-muted">{t(`steps.items.${i}.text`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="interventions" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="interventions" className="font-serif text-3xl font-semibold text-primary-strong">
            {t("featured")}
          </h2>
          <Link href="/interventions" className="font-medium text-primary underline underline-offset-4">
            {t("seeAll")}
          </Link>
        </div>
        <ul className="mt-8 grid gap-6 sm:grid-cols-3">
          {interventions.map((item) => (
            <li key={item.id}>
              <InterventionCard intervention={item} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="reflexion" className="mx-auto max-w-6xl px-4 pb-8">
        <div className="rounded-card border-l-4 border-clay bg-sand p-8">
          <h2 id="reflexion" className="font-serif text-2xl font-semibold text-primary-strong">
            {t("reflectionTitle")}
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-muted">{t("reflectionText")}</p>
        </div>
      </section>

      <section aria-labelledby="cta-band" className="mx-auto max-w-6xl px-4 pb-4 pt-8">
        <div className="rounded-card bg-primary-strong px-8 py-12 text-center text-white sm:px-16">
          <h2 id="cta-band" className="mx-auto max-w-2xl font-serif text-3xl font-semibold">{t("ctaBandTitle")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-soft">{t("ctaBandText")}</p>
          <Link href="/demande" className="mt-8 inline-flex min-h-11 items-center rounded-control bg-white px-6 font-medium text-primary-strong hover:bg-primary-soft">
            {t("ctaRequest")}
          </Link>
        </div>
      </section>
    </>
  );
}
