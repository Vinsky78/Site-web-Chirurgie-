import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { Intervention, InterventionSubpage, SubpageKind } from "@/content/types";
import { SUBPAGE_SLUGS } from "@/content/subpages/slugs";

/**
 * Sommaire du silo (Phase 2, maillage) : la fiche principale et ses
 * sous-pages, avec des ancres descriptives. `current` marque la page affichée.
 */
export async function DossierNav({
  locale,
  intervention,
  subpages,
  current,
}: {
  locale: Locale;
  intervention: Intervention;
  subpages: InterventionSubpage[];
  current: SubpageKind | "overview";
}) {
  const t = await getTranslations("editorial");
  if (subpages.length === 0) return null;
  const linkClass = "underline underline-offset-4";

  return (
    <nav aria-labelledby="dossier-nav" className="mt-8 rounded-card border border-border bg-surface p-4">
      <h2 id="dossier-nav" className="text-small font-semibold text-primary">
        {t("inThisFile", { title: intervention.title })}
      </h2>
      <ul className="mt-3 flex flex-col gap-2 text-small sm:flex-row sm:flex-wrap sm:gap-x-6">
        <li>
          {current === "overview" ? (
            <span aria-current="page" className="font-semibold">
              {t("overview")}
            </span>
          ) : (
            <Link href={{ pathname: "/interventions/[slug]", params: { slug: intervention.slug } }} className={linkClass}>
              {t("overview")}
            </Link>
          )}
        </li>
        {subpages.map((subpage) => (
          <li key={subpage.kind}>
            {subpage.kind === current ? (
              <span aria-current="page" className="font-semibold">
                {subpage.title}
              </span>
            ) : (
              <Link
                href={{
                  pathname: "/interventions/[slug]/[topic]",
                  params: { slug: intervention.slug, topic: SUBPAGE_SLUGS[locale][subpage.kind] },
                }}
                className={linkClass}
              >
                {subpage.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
