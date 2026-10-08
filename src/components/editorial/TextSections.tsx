import { getTranslations } from "next-intl/server";
import type { Source, TextSection } from "@/content/types";

/** Sections d'un contenu éditorial ; les identifiants d'ancre sont préfixés pour rester uniques. */
export function TextSections({ sections, idPrefix }: { sections: TextSection[]; idPrefix: string }) {
  return (
    <>
      {sections.map((section, index) => {
        const id = `${idPrefix}-${index + 1}`;
        return (
          <section key={id} aria-labelledby={id} className="mt-10">
            <h2 id={id} className="font-serif text-h2">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="list-disc space-y-2 pl-5">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}

/** Sources ou ressources officielles ; les liens externes s'ouvrent dans le même onglet. */
export async function SourceList({ sources, title }: { sources: Source[]; title?: string }) {
  const t = await getTranslations("editorial");
  if (sources.length === 0) return null;
  return (
    <section aria-labelledby="sources" className="mt-10">
      <h2 id="sources" className="font-serif text-h3">
        {title ?? t("sources")}
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-small text-muted">
        {sources.map((source) => (
          <li key={source.label}>
            {source.url ? (
              <a href={source.url} rel="noopener" className="underline underline-offset-4">
                {source.label}
              </a>
            ) : (
              source.label
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
