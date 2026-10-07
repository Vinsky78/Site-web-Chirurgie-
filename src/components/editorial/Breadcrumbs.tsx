import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { absoluteUrl, type Href } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

export interface Crumb {
  name: string;
  href: Href;
}

/** Fil d'Ariane visible et son équivalent BreadcrumbList ; le dernier élément est la page courante. */
export async function Breadcrumbs({ locale, items }: { locale: Locale; items: Crumb[] }) {
  const t = await getTranslations("intervention");
  const tn = await getTranslations("nav");
  const all: Crumb[] = [{ name: tn("home"), href: "/" }, ...items];
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: index === 0 ? SITE_NAME : crumb.name,
      item: absoluteUrl(locale, crumb.href),
    })),
  };

  return (
    <nav aria-label={t("breadcrumb")} className="text-small text-muted">
      <JsonLd data={data} />
      <ol className="flex flex-wrap gap-2">
        {all.map((crumb, index) =>
          index < all.length - 1 ? (
            <li key={index}>
              <Link href={crumb.href} className="underline underline-offset-4">
                {crumb.name}
              </Link>
              <span aria-hidden="true"> / </span>
            </li>
          ) : (
            <li key={index} aria-current="page">
              {crumb.name}
            </li>
          ),
        )}
      </ol>
    </nav>
  );
}
