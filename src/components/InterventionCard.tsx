import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import type { Intervention } from "@/content/types";

export async function InterventionCard({ intervention }: { intervention: Intervention }) {
  const t = await getTranslations("categories");
  return (
    <article className="reveal card-lift group relative flex h-full flex-col rounded-card border border-border bg-surface p-6 shadow-card">
      <div className="icon-pop flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-primary">
        <CategoryIcon category={intervention.category} />
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-clay">{t(intervention.category)}</p>
      <h3 className="mt-1 font-serif text-xl font-semibold text-primary-strong">
        <Link href={`/interventions/${intervention.slug}`} className="after:absolute after:inset-0">
          {intervention.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-muted">{intervention.summary}</p>
      <span aria-hidden="true" className="mt-4 font-medium text-primary transition group-hover:translate-x-1">
        →
      </span>
    </article>
  );
}
