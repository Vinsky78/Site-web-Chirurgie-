import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { INFO_PAGE_IDS, INFO_PAGE_SLUGS } from "@/lib/pages";

export async function Footer() {
  const t = await getTranslations("footer");
  const locale = (await getLocale()) as Locale;

  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="mx-auto max-w-page space-y-4 px-4 py-8 text-small text-muted">
        <p>{t("disclaimer")}</p>
        <p>{t("independence")}</p>
        <ul className="flex flex-wrap gap-6">
          {INFO_PAGE_IDS.map((id) => (
            <li key={id}>
              <Link
                href={{ pathname: "/informations/[page]", params: { page: INFO_PAGE_SLUGS[locale][id] } }}
                className="underline underline-offset-4"
              >
                {t(id)}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/lexique" className="underline underline-offset-4">
              {t("glossary")}
            </Link>
          </li>
          <li>
            <Link href="/rejoindre" className="underline underline-offset-4">
              {t("join")}
            </Link>
          </li>
          <li>
            <Link href="/pro" className="underline underline-offset-4">
              {t("pro")}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
