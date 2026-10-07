import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Surgeon } from "@/content/surgeons/types";

export async function SurgeonCard({ surgeon }: { surgeon: Surgeon }) {
  const t = await getTranslations("directory");
  return (
    <article className="relative h-full rounded-card border border-border bg-surface p-6 hover:border-primary">
      <h3 className="text-h3">
        <Link
          href={{ pathname: "/chirurgiens/[slug]", params: { slug: surgeon.slug } }}
          className="after:absolute after:inset-0"
        >
          {surgeon.displayName}
        </Link>
      </h3>
      <p className="mt-1 text-small text-primary">{t(`specialty.${surgeon.specialty}`)}</p>
      <p className="mt-3 text-muted">
        {surgeon.practice.name}, {surgeon.practice.city}
      </p>
      <p className="mt-1 text-small text-muted">
        {t("languagesList", { list: surgeon.languages.map((l) => t(`language.${l}`)).join(", ") })}
      </p>
    </article>
  );
}
