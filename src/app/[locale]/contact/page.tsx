import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getInterventions } from "@/content/interventions";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CONTACT_SUBJECTS } from "@/lib/contact/schema";
import { INFO_PAGE_SLUGS } from "@/lib/pages";
import { localeAlternates, withSocial } from "@/lib/seo";
import { Link } from "@/i18n/navigation";
import { buttonClasses } from "@/components/ui/button";
import { ClientMessages } from "@/components/ClientMessages";
import { ContactForm } from "./ContactForm";

type Props = PageProps<"/[locale]/contact">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return withSocial(locale as Locale, {
    title: t("title"),
    description: t("description"),
    alternates: localeAlternates(locale as Locale, () => "/contact"),
  });
}

export default async function ContactPage({ params, searchParams }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const query = await searchParams;
  const first = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);
  const interventions = await getInterventions(locale as Locale);
  const subject = first(query.objet ?? query.subject);
  const intervention = first(query.intervention);

  return (
    <div className="mx-auto max-w-page px-4 py-12">
      <Breadcrumbs locale={locale as Locale} items={[{ name: t("title"), href: "/contact" }]} />
      <div className="mt-6 lg:grid lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12">
        <div className="max-w-reading">
          <h1 className="font-serif text-h1 text-primary-strong">{t("title")}</h1>
          <p className="mt-4 text-muted">{t("lead")}</p>
          <div className="mt-8 rounded-card border border-border bg-surface p-6 sm:p-8">
            <ClientMessages namespaces={["contact"]}>
            <ContactForm
              interventions={interventions.map((item) => ({ value: item.id, label: item.title }))}
              initialSubject={(CONTACT_SUBJECTS as readonly string[]).includes(subject ?? "") ? subject : undefined}
              initialIntervention={interventions.some((item) => item.id === intervention) ? intervention : undefined}
              privacySlug={INFO_PAGE_SLUGS[locale as Locale].privacy}
            />
            </ClientMessages>
          </div>
        </div>
        <aside className="mt-10 lg:mt-24">
          <div className="rounded-card bg-sand p-6">
            <p className="text-small">{t("projectHint")}</p>
            <Link href="/demande" className={buttonClasses("primary", "mt-4 w-full py-2 text-center")}>
              {t("projectLink")}
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
