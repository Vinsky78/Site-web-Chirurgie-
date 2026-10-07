import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { MegaMenu, type MenuGroup } from "@/components/MegaMenu";
import { buttonClasses } from "@/components/ui/Button";
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

      <div className="border-b border-border bg-sand text-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-1.5">
          <ul className="flex flex-wrap gap-x-5">
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
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="font-serif text-xl font-semibold text-primary-strong">
            {SITE_NAME}
          </Link>
          <nav aria-label={t("main")}>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <MegaMenu label={t("interventions")} groups={groups} allLabel={t("allInterventions")} allHref="/interventions" />
              <li>
                <Link href="/chirurgiens" className="font-medium hover:text-primary">
                  {t("surgeons")}
                </Link>
              </li>
              <li>
                <Link href="/demande" className={buttonClasses()}>
                  {t("request")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
