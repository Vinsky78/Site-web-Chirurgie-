import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { HeaderNav } from "@/components/HeaderNav";
import type { MenuGroup } from "@/components/MegaMenu";
import { Logo } from "@/components/ui/Logo";
import { getInterventions } from "@/content/interventions";
import { CATEGORY_IDS } from "@/content/types";
import { SITE_NAME } from "@/lib/site";

export async function Header() {
  const t = await getTranslations("nav");
  const tl = await getTranslations("layout");
  const tc = await getTranslations("categories");
  const locale = (await getLocale()) as Locale;
  const interventions = await getInterventions(locale);
  const groups: MenuGroup[] = CATEGORY_IDS.map((id) => ({
    id,
    label: tc(id),
    items: interventions.filter((i) => i.category === id).map((i) => ({ id: i.id, title: i.title, slug: i.slug })),
  })).filter((group) => group.items.length > 0);

  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        {t("skip")}
      </a>
      <AnnouncementBar text={tl("announce")} closeLabel={t("announceClose")} />
      {/* En-tête fixe : logo, navigation et bouton de demande restent accessibles pendant la lecture. */}
      <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
        <div className="relative mx-auto flex max-w-page items-center gap-6 px-4 py-2.5">
          <Link href="/" aria-label={SITE_NAME} className="shrink-0">
            <Logo name={SITE_NAME} />
          </Link>
          <HeaderNav
            locale={locale}
            locales={routing.locales}
            groups={groups}
            labels={{
              main: t("main"),
              interventions: t("interventions"),
              allInterventions: t("allInterventions"),
              surgeons: t("surgeons"),
              guides: t("guides"),
              howItWorks: t("howItWorks"),
              search: t("search"),
              searchLabel: t("searchLabel"),
              request: t("request"),
              menuOpen: t("menuOpen"),
              menuClose: t("menuClose"),
              language: t("language"),
              languages: Object.fromEntries(
                routing.locales.map((l) => [l, { short: t(`langShort.${l}`), long: t(`languages.${l}`) }]),
              ) as Record<Locale, { short: string; long: string }>,
            }}
          />
        </div>
      </header>
    </>
  );
}
