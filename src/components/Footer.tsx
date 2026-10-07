import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { CATEGORY_IDS } from "@/content/types";
import { INFO_PAGE_IDS, INFO_PAGE_SLUGS } from "@/lib/pages";
import { SITE_NAME } from "@/lib/site";

export async function Footer() {
  const t = await getTranslations("footer");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("categories");
  const locale = (await getLocale()) as Locale;
  const link = "underline-offset-4 hover:underline";
  const heading = "font-semibold text-white";
  const list = "mt-3 space-y-2";

  return (
    <footer className="mt-20 bg-primary-strong text-primary-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 text-sm md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="font-serif text-xl font-semibold text-white">{SITE_NAME}</p>
          <p>{t("disclaimer")}</p>
          <p>{t("independence")}</p>
        </div>
        <nav aria-label={t("domains")}>
          <h2 className={heading}>{t("domains")}</h2>
          <ul className={list}>
            {CATEGORY_IDS.map((id) => (
              <li key={id}><Link href={`/interventions/categories/${id}`} className={link}>{tc(id)}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label={t("explore")}>
          <h2 className={heading}>{t("explore")}</h2>
          <ul className={list}>
            <li><Link href="/interventions" className={link}>{tn("interventions")}</Link></li>
            <li><Link href="/chirurgiens" className={link}>{tn("surgeons")}</Link></li>
            <li><Link href="/demande" className={link}>{tn("request")}</Link></li>
            <li><Link href="/pro" className={link}>{tn("pro")}</Link></li>
          </ul>
        </nav>
        <nav aria-label={t("legal")}>
          <h2 className={heading}>{t("legal")}</h2>
          <ul className={list}>
            {INFO_PAGE_IDS.map((id) => (
              <li key={id}><Link href={`/informations/${INFO_PAGE_SLUGS[locale][id]}`} className={link}>{t(id)}</Link></li>
            ))}
            <li><CookieSettingsButton className={link} /></li>
          </ul>
        </nav>
        <div>
          <h2 className={heading}>{t("markets")}</h2>
          <ul className={list}>
            <li><Link href="/" locale="fr" className={link}>{t("france")}</Link></li>
            <li><Link href="/" locale="en-gb" className={link}>{t("uk")}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs">© {new Date().getFullYear()} {SITE_NAME}</p>
      </div>
    </footer>
  );
}
