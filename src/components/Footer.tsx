import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { INFO_PAGE_IDS, INFO_PAGE_SLUGS } from "@/lib/pages";
import { SITE_NAME } from "@/lib/site";
import { LogoMark } from "@/components/ui/Logo";

export async function Footer() {
  const t = await getTranslations("footer");
  const tn = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const link = "text-primary-soft underline-offset-4 hover:text-white hover:underline";
  const heading = "text-label font-semibold text-white";

  return (
    <footer className="mt-16 bg-primary-strong text-small text-primary-soft">
      <div className="mx-auto grid max-w-page gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="inline-flex items-center gap-2.5 font-serif text-h3 text-white">
            <LogoMark />
            {SITE_NAME}
          </p>
          <p>{t("disclaimer")}</p>
          <p>{t("independence")}</p>
        </div>

        <nav aria-label={t("discover")}>
          <h2 className={heading}>{t("discover")}</h2>
          <ul className="mt-3 space-y-2">
            <li><Link href="/interventions" className={link}>{tn("interventions")}</Link></li>
            <li><Link href="/guides" className={link}>{tn("guides")}</Link></li>
            <li><Link href="/lexique" className={link}>{t("glossary")}</Link></li>
            <li><Link href="/chirurgiens" className={link}>{tn("surgeons")}</Link></li>
          </ul>
        </nav>

        <nav aria-label={t("tools")}>
          <h2 className={heading}>{t("tools")}</h2>
          <ul className="mt-3 space-y-2">
            <li><Link href="/recherche" className={link}>{t("search")}</Link></li>
            <li><Link href="/comparateur" className={link}>{t("compare")}</Link></li>
            <li><Link href="/comment-ca-marche" className={link}>{tn("howItWorks")}</Link></li>
            <li><Link href="/demande" className={link}>{tn("request")}</Link></li>
          </ul>
        </nav>

        <nav aria-label={t("platform")}>
          <h2 className={heading}>{t("platform")}</h2>
          <ul className="mt-3 space-y-2">
            {INFO_PAGE_IDS.map((id) => (
              <li key={id}>
                <Link href={{ pathname: "/informations/[page]", params: { page: INFO_PAGE_SLUGS[locale][id] } }} className={link}>
                  {t(id)}
                </Link>
              </li>
            ))}
            <li><Link href="/rejoindre" className={link}>{t("join")}</Link></li>
            <li><Link href="/pro" className={link}>{t("pro")}</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-page px-4 py-4">
          © {new Date().getFullYear()} {SITE_NAME}. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
