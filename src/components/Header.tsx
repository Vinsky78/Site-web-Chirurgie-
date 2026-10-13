import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { MegaMenu, type MenuGroup } from "@/components/MegaMenu";
import { getInterventions } from "@/content/interventions";
import { CATEGORY_IDS } from "@/content/types";
import { SITE_NAME } from "@/lib/site";
import { buttonClasses } from "@/components/ui/button";

export async function Header() {
  const t = await getTranslations("nav");
  const tl = await getTranslations("layout");
  const tc = await getTranslations("categories");
  const locale = await getLocale();
  const interventions = await getInterventions(locale as Locale);
  const groups: MenuGroup[] = CATEGORY_IDS.map((id) => ({
    id,
    label: tc(id),
    items: interventions.filter((i) => i.category === id).map((i) => ({ id: i.id, title: i.title, slug: i.slug })),
  })).filter((group) => group.items.length > 0);

  return (
    <header className="relative border-b border-border bg-surface">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        {t("skip")}
      </a>
      <AnnouncementBar text={tl("announce")} closeLabel={t("announceClose")} />
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="font-serif text-h3 text-primary-strong">
          {SITE_NAME}
        </Link>
        <nav aria-label={t("main")}>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-small">
            <MegaMenu label={t("interventions")} groups={groups} allLabel={t("allInterventions")} />
            <li>
              <Link href="/chirurgiens" className="underline-offset-4 hover:underline">
                {t("surgeons")}
              </Link>
            </li>
            <li>
              <Link href="/guides" className="underline-offset-4 hover:underline">
                {t("guides")}
              </Link>
            </li>
            <li>
              <Link href="/comment-ca-marche" className="underline-offset-4 hover:underline">
                {t("howItWorks")}
              </Link>
            </li>
            <li>
              <Link href="/recherche" className="underline-offset-4 hover:underline">
                {t("search")}
              </Link>
            </li>
            <li>
              <Link
                href="/demande"
                className={buttonClasses("primary")}
              >
                {t("request")}
              </Link>
            </li>
            <li>
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
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
