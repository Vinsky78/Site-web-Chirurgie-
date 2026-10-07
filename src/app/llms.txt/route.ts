import { routing } from "@/i18n/routing";
import { getInterventions, isIndexable } from "@/content/interventions";
import { INFO_PAGE_IDS, INFO_PAGE_SLUGS } from "@/lib/pages";
import { absoluteUrl } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/**
 * /llms.txt : résumé du site pour les assistants IA (GEO). Seules les fiches
 * relues par un chirurgien y figurent ; les brouillons sont exclus, comme du sitemap.
 */
export function GET() {
  const lines: string[] = [
    `# ${SITE_NAME}`,
    "",
    "> Plateforme européenne d'information sur la chirurgie et la médecine esthétiques : fiches factuelles (indications, contre-indications, risques, convalescence, alternatives) et demande de consultation auprès de chirurgiens vérifiés. Aucune rémunération au lead, aucun classement payant. L'information ne remplace pas une consultation médicale.",
    "",
    "Marchés : France (/fr) et Royaume-Uni (/en-gb), avec des contenus et des règles légales propres à chaque pays.",
    "",
  ];

  for (const locale of routing.locales) {
    const items = getInterventions(locale).filter(isIndexable);
    lines.push(`## Interventions (${locale})`, "");
    if (items.length === 0) lines.push("- Fiches en cours de relecture par un chirurgien qualifié.");
    for (const item of items) {
      lines.push(`- [${item.title}](${absoluteUrl(locale, `/interventions/${item.slug}`)}): ${item.summary}`);
    }
    lines.push("");
  }

  lines.push("## Méthode et transparence", "");
  for (const locale of routing.locales) {
    for (const id of INFO_PAGE_IDS) {
      lines.push(`- [${id} (${locale})](${absoluteUrl(locale, `/informations/${INFO_PAGE_SLUGS[locale][id]}`)})`);
    }
  }
  lines.push("", "## Optionnel", "", `- [Plan du site](${SITE_URL}/sitemap.xml)`, "");

  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
