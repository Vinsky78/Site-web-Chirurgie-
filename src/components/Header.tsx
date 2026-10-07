import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { MainNav } from "@/components/MainNav";
import type { MenuGroup } from "@/components/MegaMenu";
import { getInterventions } from "@/content/interventions";
import { CATEGORY_IDS } from "@/content/types";
import { INFO_PAGE_SLUGS } from "@/lib/pages";
import { SITE_NAME } from "@/lib/site";

export async function Header() {
  const t = await getTranslations("nav");
  const tc = await getTranslations("categories");
  const tl = await getTranslations("layout");
  const locale = (await getLocale()) as Locale;
  const interventions = getInterventions(locale);

  const groups: MenuGroup[] = CATEGORY_IDS.map((id) => ({
    id,
    label: tc(id),
    href: `/interventions/categories/${id}`,
    items: interventions.filter((i) => i.category === id).map((i) => ({ title: i.title, href: `/interventions/${i.slug}` })),
  })).filter((g) => g.items.length > 0);

  return (
    <header>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        {t("skip")}
      </a>
      <AnnouncementBar text={tl("announce")} closeLabel={t("announceClose")} />

      <div className="border-b border-border bg-sand text-xs sm:text-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-1.5">
          <ul className="hidden flex-wrap gap-x-5 sm:flex">
            <li>
              <Link href="/pro" className="underline-offset-4 hover:underline">
                {t("pro")}
              </Link>
            </li>
            <li>
              <Link href={`/informations/${INFO_PAGE_SLUGS[locale].methodology}`} className="underline-offset-4 hover:underline">
                {t("method")}
              </Link>
            </li>
          </ul>
          <ul aria-label={t("language")} className="flex gap-3">
            {routing.locales.map((l) => (
              <li key={l}>
                <Link
                  href="/"
                  locale={l}
                  hrefLang={l}
                  lang={l}
                  aria-current={l === locale ? "true" : undefined}
                  className={l === locale ? "font-semibold" : "text-muted underline-offset-4 hover:underline"}
                >
                  {t(`languages.${l}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 px-4 py-3">
          <Link href="/" className="py-1 max-w-[60%] font-serif text-base font-semibold leading-tight text-primary-strong sm:max-w-none sm:text-xl">
            {SITE_NAME}
          </Link>
          <MainNav
            groups={groups}
            labels={{
              interventions: t("interventions"),
              surgeons: t("surgeons"),
              request: t("request"),
              main: t("main"),
              open: t("menuOpen"),
              close: t("menuClose"),
              all: t("allInterventions"),
            }}
          />
        </div>
      </div>
    </header>
  );
}
