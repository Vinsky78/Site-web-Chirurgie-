import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getGuides } from "@/content/guides";
import { PageHeader } from "@/components/ui/PageHeader";
import { localeAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/guides">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guides" });
  return { title: t("title"), description: t("lead"), alternates: localeAlternates(locale as Locale, () => "/guides") };
}

export default async function GuidesPage({ params }: PageProps<"/[locale]/guides">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("guides");
  const guides = getGuides(locale as Locale);

  return (
    <>
      <PageHeader title={t("title")} lead={t("lead")} />
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-10">
        <ul className="grid gap-6 sm:grid-cols-2">
          {guides.map((g, i) => (
            <li key={g.id}>
              <article className="reveal card-lift group relative flex h-full flex-col rounded-card border border-border bg-surface p-6 shadow-card">
                <span aria-hidden="true" className="icon-pop flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft font-serif text-lg font-semibold text-primary">
                  {i + 1}
                </span>
                <h2 className="mt-4 font-serif text-xl font-semibold text-primary-strong">
                  <Link href={`/guides/${g.slug}`} className="after:absolute after:inset-0">
                    {g.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-muted">{g.summary}</p>
                <span aria-hidden="true" className="mt-4 text-sm font-medium text-primary">
                  {t("read")} →
                </span>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
