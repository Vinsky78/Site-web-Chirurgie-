import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getInterventions } from "@/content/interventions";
import { CATEGORY_IDS } from "@/content/types";
import { InterventionCard } from "@/components/InterventionCard";
import { buttonClasses } from "@/components/ui/Button";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { HeroArt } from "@/components/ui/HeroArt";
import { JsonLd } from "@/components/JsonLd";
import { localeAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title: t("title"),
    alternates: localeAlternates(locale as Locale, () => ""),
  };
}

const POINTS = [0, 1, 2, 3];
const FAQ = [0, 1, 2, 3, 4];
const STEPS = [0, 1, 2, 3];

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tc = await getTranslations("categories");
  const all = getInterventions(locale as Locale);
  const featured = all.slice(0, 6);
  const domains = CATEGORY_IDS.map((id) => ({ id, count: all.filter((i) => i.category === id).length })).filter((d) => d.count > 0);

  const figures = [
    { value: String(all.length), label: t("figures.sheets") },
    { value: String(domains.length), label: t("figures.domains") },
    { value: "2", label: t("figures.markets") },
    { value: "0 %", label: t("figures.commission") },
  ];

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((i) => ({
      "@type": "Question",
      name: t(`faq.${i}.q`),
      acceptedAnswer: { "@type": "Answer", text: t(`faq.${i}.a`) },
    })),
  };

  return (
    <>
      <JsonLd data={faqData} />
      {/* Bandeau d'accueil : titre, quatre points clés, appel à l'action, illustration */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sand via-bg to-accent-soft">
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-clay">{t("eyebrow")}</p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.1] text-primary-strong sm:text-5xl lg:text-6xl">{t("title")}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{t("lead")}</p>
            <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {POINTS.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm font-medium text-primary-strong">
                  <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">✓</span>
                  {t(`points.${i}`)}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/demande" className={`${buttonClasses()} px-6 shadow-card`}>{t("ctaRequest")}</Link>
              <Link href="/interventions" className={`${buttonClasses("secondary")} px-6`}>{t("ctaInterventions")}</Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-muted">
              {[0, 1].map((i) => (
                <li key={i} className="rounded-full border border-border bg-surface px-3 py-1">{t(`badges.${i}`)}</li>
              ))}
            </ul>
          </div>
          <HeroArt className="mx-auto hidden w-full max-w-md lg:block" />
        </div>
      </section>

      {/* Chiffres clés */}
      <section aria-labelledby="chiffres" className="bg-primary-strong text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 id="chiffres" className="sr-only">{t("figuresTitle")}</h2>
          <dl className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {figures.map((f) => (
              <div key={f.label}>
                <dd className="font-serif text-4xl font-semibold">{f.value}</dd>
                <dt className="mt-1 text-sm text-primary-soft">{f.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Nos domaines */}
      <section aria-labelledby="domaines" className="mx-auto max-w-6xl px-4 py-16">
        <h2 id="domaines" className="font-serif text-3xl font-semibold text-primary-strong">{t("domainsTitle")}</h2>
        <p className="mt-2 max-w-2xl text-muted">{t("domainsLead")}</p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {domains.map((d) => (
            <li key={d.id}>
              <Link
                href={`/interventions/categories/${d.id}`}
                className="group flex h-full flex-col rounded-card border border-border bg-surface p-6 shadow-card transition hover:-translate-y-1 hover:border-primary"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-primary">
                  <CategoryIcon category={d.id} />
                </span>
                <span className="mt-4 font-serif text-xl font-semibold text-primary-strong">{tc(d.id)}</span>
                <span className="mt-1 flex-1 text-sm text-muted">{t("domainCount", { count: d.count })}</span>
                <span className="mt-4 text-sm font-medium text-primary">{t("discover")} <span aria-hidden="true" className="inline-block transition group-hover:translate-x-1">→</span></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Comment ça marche */}
      <section aria-labelledby="etapes" className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="etapes" className="font-serif text-3xl font-semibold text-primary-strong">{t("steps.title")}</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((i) => (
              <li key={i} className="flex gap-4">
                <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-white">{i + 1}</span>
                <div>
                  <h3 className="font-semibold">{t(`steps.items.${i}.title`)}</h3>
                  <p className="mt-1 text-sm text-muted">{t(`steps.items.${i}.text`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Interventions */}
      <section aria-labelledby="interventions" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="interventions" className="font-serif text-3xl font-semibold text-primary-strong">{t("featured")}</h2>
          <Link href="/interventions" className="font-medium text-primary underline underline-offset-4">{t("seeAll")}</Link>
        </div>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <li key={item.id}><InterventionCard intervention={item} /></li>
          ))}
        </ul>
      </section>

      {/* Questions fréquentes */}
      <section aria-labelledby="faq" className="mx-auto max-w-3xl px-4 pb-16">
        <h2 id="faq" className="font-serif text-3xl font-semibold text-primary-strong">{t("faqTitle")}</h2>
        <div className="mt-6 space-y-3">
          {FAQ.map((i) => (
            <details key={i} className="group rounded-card border border-border bg-surface p-5 open:border-primary">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {t(`faq.${i}.q`)}
                <span aria-hidden="true" className="text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted">{t(`faq.${i}.a`)}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Confiance */}
      <section aria-labelledby="confiance" className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid items-center gap-6 rounded-card bg-accent-soft p-8 md:grid-cols-[1fr_auto]">
          <div>
            <h2 id="confiance" className="font-serif text-2xl font-semibold text-primary-strong">{t("trustTitle")}</h2>
            <p className="mt-3 max-w-3xl text-muted">{t("trustText")}</p>
          </div>
          <Link href="/chirurgiens" className={`${buttonClasses()} px-6`}>{t("trustCta")}</Link>
        </div>
      </section>

      <section aria-labelledby="reflexion" className="mx-auto max-w-6xl px-4 pb-8">
        <div className="rounded-card border-l-4 border-clay bg-sand p-8">
          <h2 id="reflexion" className="font-serif text-2xl font-semibold text-primary-strong">{t("reflectionTitle")}</h2>
          <p className="mt-3 max-w-3xl text-lg text-muted">{t("reflectionText")}</p>
        </div>
      </section>

      {/* Parlons de votre projet */}
      <section aria-labelledby="parlons" className="mx-auto max-w-6xl px-4 pb-4 pt-8">
        <div className="rounded-card bg-primary-strong px-8 py-12 text-center text-white sm:px-16">
          <h2 id="parlons" className="mx-auto max-w-2xl font-serif text-3xl font-semibold">{t("talkTitle")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-soft">{t("talkText")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/demande" className="inline-flex min-h-11 items-center rounded-control bg-white px-6 font-medium text-primary-strong hover:bg-primary-soft">{t("ctaRequest")}</Link>
            <Link href="/chirurgiens" className="inline-flex min-h-11 items-center rounded-control border border-white px-6 font-medium text-white hover:bg-white/10">{t("talkSecondary")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
