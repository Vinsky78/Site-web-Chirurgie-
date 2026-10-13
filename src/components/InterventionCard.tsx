import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import type { Intervention } from "@/content/types";

/** Carte d'intervention entièrement cliquable (le lien du titre couvre la carte). */
export async function InterventionCard({ intervention }: { intervention: Intervention }) {
  const t = await getTranslations("categories");
  return (
    <article className="group relative flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-colors hover:border-primary focus-within:border-primary">
      <p className="inline-flex items-center gap-2 text-small font-medium text-clay">
        <CategoryIcon category={intervention.category} className="h-5 w-5" />
        {t(intervention.category)}
      </p>
      <h3 className="mt-2 text-h3 text-primary-strong">
        <Link
          href={{ pathname: "/interventions/[slug]", params: { slug: intervention.slug } }}
          className="after:absolute after:inset-0 after:rounded-card group-hover:underline underline-offset-4"
        >
          {intervention.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-small text-muted">{intervention.summary}</p>
      <span aria-hidden="true" className="mt-4 text-primary transition-transform group-hover:translate-x-1">
        →
      </span>
    </article>
  );
}
