import { routing } from "@/i18n/routing";
import { getGuides } from "@/content/guides";
import { getInterventions, isIndexable } from "@/content/interventions";
import { INFO_PAGE_IDS, INFO_PAGE_SLUGS } from "@/lib/pages";
import { absoluteUrl, type Href } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * /llms.txt : résumé du site pour les assistants IA (GEO), au format llmstxt.org.
 * Mêmes règles que le sitemap : seuls les contenus relus par le comité médical
 * y figurent, les brouillons en sont exclus.
 */
export async function GET() {
  const lines: string[] = [
    `# ${SITE_NAME}`,
    "",
    "> Plateforme européenne d'information sur la chirurgie et la médecine esthétiques : fiches factuelles (indications, contre-indications, risques, convalescence, alternatives), guides pratiques et demande de consultation auprès de chirurgiens vérifiés. Aucune commission sur les interventions, aucun classement payant. L'information ne remplace pas une consultation médicale.",
    "",
    "Marchés : France (/fr) et Royaume-Uni (/en-gb), avec des contenus, des règles légales et des autorités propres à chaque pays.",
    "",
  ];

  for (const locale of routing.locales) {
    const pages: [string, Href][] = [
      ["Interventions", "/interventions"],
      ["Guides", "/guides"],
      ["Comment ça marche / How it works", "/comment-ca-marche"],
    ];
    lines.push(`## Pages principales (${locale})`, "");
    for (const [label, href] of pages) lines.push(`- [${label}](${absoluteUrl(locale, href)})`);
    lines.push("");

    const interventions = (await getInterventions(locale)).filter(isIndexable);
    if (interventions.length > 0) {
      lines.push(`## Interventions (${locale})`, "");
      for (const item of interventions) {
        lines.push(`- [${item.title}](${absoluteUrl(locale, { pathname: "/interventions/[slug]", params: { slug: item.slug } })}): ${item.summary}`);
      }
      lines.push("");
    }

    const guides = (await getGuides(locale)).filter(isIndexable);
    if (guides.length > 0) {
      lines.push(`## Guides (${locale})`, "");
      for (const guide of guides) {
        lines.push(`- [${guide.title}](${absoluteUrl(locale, { pathname: "/guides/[slug]", params: { slug: guide.slug } })}): ${guide.summary}`);
      }
      lines.push("");
    }
  }

  lines.push("## Méthode et transparence", "");
  for (const locale of routing.locales) {
    for (const id of INFO_PAGE_IDS) {
      lines.push(`- [${id} (${locale})](${absoluteUrl(locale, { pathname: "/informations/[page]", params: { page: INFO_PAGE_SLUGS[locale][id] } })})`);
    }
  }
  lines.push("", "## Optionnel", "", `- [Plan du site](${SITE_URL}/sitemap.xml)`, "");

  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
