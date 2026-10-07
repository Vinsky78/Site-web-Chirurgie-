import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Intervention } from "@/content/types";

export async function InterventionCard({ intervention }: { intervention: Intervention }) {
  const t = await getTranslations("categories");
  return (
    <article className="relative h-full rounded-lg border border-border bg-surface p-6 hover:border-primary">
      <p className="text-sm font-medium text-primary">{t(intervention.category)}</p>
      <h3 className="mt-1 text-lg font-semibold">
        <Link href={`/interventions/${intervention.slug}`} className="after:absolute after:inset-0">
          {intervention.title}
        </Link>
      </h3>
      <p className="mt-2 text-muted">{intervention.summary}</p>
    </article>
  );
}
