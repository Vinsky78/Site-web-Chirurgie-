import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getInterventions } from "@/content/interventions";
import { getGuides } from "@/content/guides";
import { JsonLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { InterventionCard } from "@/components/InterventionCard";
import { absoluteUrl, localeAlternates, withSocial } from "@/lib/seo";
import { buttonClasses } from "@/components/ui/button";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { getPathname } from "@/i18n/navigation";
import { CATEGORY_IDS } from "@/content/types";

export async function generateMetadata({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const tm = await getTranslations({ locale, namespace: "meta" });
  return withSocial(locale as Locale, {
    title: t("title"),
    description: tm("siteDescription"),
    alternates: localeAlternates(locale as Locale, () => "/"),
  });
}

const PILLARS = ["info", "verified", "choice"] as const;

/** Interventions les plus demandées, mises en avant sur l'accueil ; les autres sont sur /interventions. */
const KEY_INTERVENTIONS = ["breast-augmentation", "liposuction", "blepharoplasty", "rhinoplasty", "abdominoplasty", "facelift"] as const;

/** Guides mis en avant sur l'accueil (maillage Phase 2 : accueil → guides clés). */
const KEY_GUIDES = ["choosing-a-surgeon", "quote-and-cooling-off", "right-time"] as const;

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tm = await getTranslations("meta");
  const tc = await getTranslations("categories");
  const interventions = (await getInterventions(locale as Locale))
    .filter((item) => (KEY_INTERVENTIONS as readonly string[]).includes(item.id))
    .sort((a, b) => (KEY_INTERVENTIONS as readonly string[]).indexOf(a.id) - (KEY_INTERVENTIONS as readonly string[]).indexOf(b.id));
  const guides = (await getGuides(locale as Locale)).filter((guide) =>
    (KEY_GUIDES as readonly string[]).includes(guide.id),
  );

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: `${SITE_URL}/icon.svg`,
            description: tm("siteDescription"),
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE_NAME,
            url: absoluteUrl(locale as Locale, "/"),
            inLanguage: locale,
          },
        ]}
      />
      {/* Bandeau d'accueil : message, recherche immédiate et accès par zone. */}
      <section className="border-b border-border bg-sand">
        <div className="mx-auto grid max-w-page items-start gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
          <p className="text-small font-semibold uppercase tracking-wider text-clay">{t("eyebrow")}</p>
          <h1 className="mt-3 max-w-3xl font-serif text-display text-primary-strong">{t("title")}</h1>
          <p className="mt-5 max-w-reading text-muted">{t("lead")}</p>

          <form role="search" action={getPathname({ locale: locale as Locale, href: "/recherche" })} method="get" className="mt-8 max-w-2xl">
            <label htmlFor="hero-q" className="text-label text-primary-strong">
              {t("searchLabel")}
            </label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <input
                id="hero-q"
                name="q"
                type="search"
                maxLength={80}
                placeholder={t("searchPlaceholder")}
                className="min-h-12 w-full flex-1 rounded-control border border-border-input bg-surface px-4"
              />
              <button type="submit" className={buttonClasses("primary", "min-h-12")}>
                {t("searchButton")}
              </button>
            </div>
          </form>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-small text-muted">{t("browseBy")}</span>
            {CATEGORY_IDS.map((c) => (
              <Link
                key={c}
                href={{ pathname: "/interventions", hash: `cat-${c}` }}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-4 text-label hover:border-primary hover:text-primary"
              >
                <CategoryIcon category={c} className="h-5 w-5 text-clay" />
                {tc(c)}
              </Link>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-small font-medium text-primary-strong">
            {[0, 1, 2].map((i) => (
              <li key={i} className="flex items-center gap-2">
                <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[0.7rem] text-white">
                  ✓
                </span>
                {t(`trust.${i}`)}
              </li>
            ))}
          </ul>

          <p className="mt-8">
            <Link href="/demande" className={buttonClasses("secondary")}>
              {t("ctaRequest")}
            </Link>
          </p>
          </div>

          <aside aria-labelledby="etapes" className="rounded-card border border-border bg-surface p-6">
            <h2 id="etapes" className="font-serif text-h3 text-primary-strong">
              {t("stepsTitle")}
            </h2>
            <ol className="mt-4 space-y-4">
              {[0, 1, 2].map((i) => (
                <li key={i} className="flex gap-3">
                  <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft font-serif font-semibold text-primary-strong">
                    {i + 1}
                  </span>
                  <span className="text-small">{t(`steps.${i}`)}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5">
              <Link href="/comment-ca-marche" className="text-small font-medium text-primary underline underline-offset-4">
                {t("stepsLink")}
              </Link>
            </p>
          </aside>
        </div>
      </section>

      <section aria-labelledby="engagements" className="mx-auto max-w-page px-4 py-16">
        <h2 id="engagements" className="font-serif text-h2">
          {t("pillarsTitle")}
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-3">
          {PILLARS.map((key) => (
            <li key={key} className="rounded-card border border-border bg-surface p-6">
              <h3 className="text-h3">{t(`pillars.${key}.title`)}</h3>
              <p className="mt-2 text-muted">{t(`pillars.${key}.text`)}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link href="/comment-ca-marche" className="underline underline-offset-4">
            {t("howItWorks")}
          </Link>
        </p>
      </section>

      <section aria-labelledby="interventions" className="mx-auto max-w-page px-4 pb-16">
        <h2 id="interventions" className="font-serif text-h2">
          {t("featured")}
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {interventions.map((item) => (
            <li key={item.id}>
              <InterventionCard intervention={item} />
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link href="/interventions" className="underline underline-offset-4">
            {t("allInterventions")}
          </Link>
        </p>
      </section>

      {guides.length > 0 && (
        <section aria-labelledby="guides" className="mx-auto max-w-page px-4 pb-16">
          <h2 id="guides" className="font-serif text-h2">
            {t("guidesTitle")}
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <li key={guide.id} className="group relative rounded-card border border-border bg-surface p-6 transition-colors hover:border-primary focus-within:border-primary">
                <h3 className="text-h3 text-primary-strong">
                  <Link
                    href={{ pathname: "/guides/[slug]", params: { slug: guide.slug } }}
                    className="after:absolute after:inset-0 after:rounded-card underline-offset-4 group-hover:underline"
                  >
                    {guide.title}
                  </Link>
                </h3>
                <p className="mt-2 text-small text-muted">{guide.summary}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/guides" className="underline underline-offset-4">
              {t("allGuides")}
            </Link>
          </p>
        </section>
      )}

      <section aria-labelledby="reflexion" className="mx-auto max-w-page px-4 pb-8">
        <div className="rounded-card border-l-4 border-clay bg-sand p-6">
          <h2 id="reflexion" className="font-serif text-h3">
            {t("reflectionTitle")}
          </h2>
          <p className="mt-2 text-muted">{t("reflectionText")}</p>
        </div>
      </section>
    </>
  );
}
