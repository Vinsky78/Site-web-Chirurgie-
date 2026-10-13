import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { HOW_IT_WORKS } from "@/content/platform/how-it-works";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buttonClasses } from "@/components/ui/button";
import { localeAlternates, withSocial } from "@/lib/seo";

type Props = PageProps<"/[locale]/comment-ca-marche">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = HOW_IT_WORKS[locale as Locale];
  return withSocial(locale as Locale, {
    title: content.title,
    description: content.description,
    alternates: localeAlternates(locale as Locale, () => "/comment-ca-marche"),
  });
}

/** Parcours du patient et questions fréquentes : ce qu'il faut savoir avant d'envoyer une demande. */
export default async function HowItWorksPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = HOW_IT_WORKS[locale as Locale];

  return (
    <div className="mx-auto max-w-reading px-4 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: content.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <Breadcrumbs locale={locale as Locale} items={[{ name: content.title, href: "/comment-ca-marche" }]} />
      <h1 className="mt-6 font-serif text-h1 text-primary-strong">{content.title}</h1>
      <p className="mt-4 text-muted">{content.lead}</p>

      <section aria-labelledby="parcours" className="mt-10">
        <h2 id="parcours" className="font-serif text-h2">
          {content.stepsTitle}
        </h2>
        <ol className="mt-6 space-y-6">
          {content.steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-white"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-h3">{step.title}</h3>
                <p className="mt-1">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="engagements" className="mt-12">
        <h2 id="engagements" className="font-serif text-h2">
          {content.commitmentsTitle}
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {content.commitments.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="limites" className="mt-12">
        <h2 id="limites" className="font-serif text-h2">
          {content.notForTitle}
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {content.notFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="faq" className="mt-12">
        <h2 id="faq" className="font-serif text-h2">
          {content.faqTitle}
        </h2>
        <div className="mt-6 space-y-6">
          {content.faq.map((item) => (
            <div key={item.question}>
              <h3 className="text-h3">{item.question}</h3>
              <p className="mt-1">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="demander" className="mt-12 rounded-card border border-border bg-surface p-6">
        <h2 id="demander" className="font-serif text-h2">
          {content.ctaTitle}
        </h2>
        <p className="mt-2">{content.ctaText}</p>
        <Link href="/demande" className={`mt-4 ${buttonClasses("primary")}`}>
          {HOW_IT_WORKS[locale as Locale].steps[2].title}
        </Link>
      </section>
    </div>
  );
}
