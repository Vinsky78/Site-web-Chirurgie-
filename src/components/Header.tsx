import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/site";
import { buttonClasses } from "@/components/ui/button";

export async function Header() {
  const t = await getTranslations("nav");
  const locale = await getLocale();

  return (
    <header className="border-b border-border bg-surface">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        {t("skip")}
      </a>
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="font-serif text-h3 text-primary-strong">
          {SITE_NAME}
        </Link>
        <nav aria-label={t("main")}>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-small">
            <li>
              <Link href="/interventions" className="underline-offset-4 hover:underline">
                {t("interventions")}
              </Link>
            </li>
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
