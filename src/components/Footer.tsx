import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { INFO_PAGE_IDS, INFO_PAGE_SLUGS } from "@/lib/pages";
import { SITE_NAME } from "@/lib/site";

export async function Footer() {
  const t = await getTranslations("footer");
  const tn = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const link = "underline-offset-4 hover:underline";

  return (
    <footer className="mt-20 bg-primary-strong text-primary-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-3 text-sm">
          <p className="font-serif text-xl font-semibold text-white">{SITE_NAME}</p>
          <p>{t("disclaimer")}</p>
          <p>{t("independence")}</p>
        </div>
        <nav aria-label={t("explore")} className="text-sm">
          <h2 className="font-semibold text-white">{t("explore")}</h2>
          <ul className="mt-3 space-y-2">
            <li><Link href="/interventions" className={link}>{tn("interventions")}</Link></li>
            <li><Link href="/chirurgiens" className={link}>{tn("surgeons")}</Link></li>
            <li><Link href="/demande" className={link}>{tn("request")}</Link></li>
          </ul>
        </nav>
        <nav aria-label={t("about")} className="text-sm">
          <h2 className="font-semibold text-white">{t("about")}</h2>
          <ul className="mt-3 space-y-2">
            {INFO_PAGE_IDS.map((id) => (
              <li key={id}>
                <Link href={`/informations/${INFO_PAGE_SLUGS[locale][id]}`} className={link}>
                  {t(id)}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsButton className={link} />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
