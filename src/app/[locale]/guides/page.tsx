import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getGuides } from "@/content/guides";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { localeAlternates, withSocial } from "@/lib/seo";

type Props = PageProps<"/[locale]/guides">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "editorial" });
  return withSocial(locale as Locale, {
    title: t("guidesTitle"),
    description: t("guidesLead"),
    alternates: localeAlternates(locale as Locale, () => "/guides"),
  });
}

export default async function GuidesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("editorial");
  const guides = await getGuides(locale as Locale);

  return (
    <div className="mx-auto max-w-page px-4 py-12">
      <Breadcrumbs locale={locale as Locale} items={[{ name: t("guidesTitle"), href: "/guides" }]} />
      <h1 className="mt-6 font-serif text-h1 text-primary-strong">{t("guidesTitle")}</h1>
      <p className="mt-4 max-w-reading text-muted">{t("guidesLead")}</p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <li key={guide.id} className="rounded-card border border-border bg-surface p-6">
            <h2 className="font-serif text-h3">
              <Link href={{ pathname: "/guides/[slug]", params: { slug: guide.slug } }} className="underline-offset-4 hover:underline">
                {guide.title}
              </Link>
            </h2>
            <p className="mt-2 text-small text-muted">{guide.summary}</p>
          </li>
        ))}
      </ul>
      <p className="mt-10">
        <Link href="/lexique" className="underline underline-offset-4">
          {t("glossaryLink")}
        </Link>
      </p>
    </div>
  );
}
