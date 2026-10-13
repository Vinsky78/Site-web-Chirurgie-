/** Contrôle rapide d'un dossier d'intervention : npx tsx scripts/check-dossier.mts <fichier sans extension> */
import { findForbiddenTerms } from "../src/content/charter";
import { SUBPAGE_KINDS } from "../src/content/types";
import type { Dossier } from "../src/content/dossiers/types";

const name = process.argv[2];
const mod = (await import(`../src/content/dossiers/${name}.ts`)) as { dossier: Dossier };
const problems: string[] = [];
for (const [locale, d] of Object.entries(mod.dossier)) {
  const i = d.intervention;
  if (i.locale !== locale) problems.push(`${locale}: locale de la fiche`);
  if (i.summary.length > 160) problems.push(`${locale}: résumé de la fiche > 160 (${i.summary.length})`);
  if (i.risks.length < 6) problems.push(`${locale}: moins de 6 risques`);
  if (i.faq.length < 5) problems.push(`${locale}: moins de 5 questions`);
  for (const kind of SUBPAGE_KINDS) {
    const s = d.subpages.filter((p) => p.kind === kind);
    if (s.length !== 1) problems.push(`${locale}: sous-page ${kind} x${s.length}`);
  }
  for (const s of d.subpages) {
    if (s.summary.length > 160) problems.push(`${locale}/${s.kind}: résumé > 160 (${s.summary.length})`);
    if (s.interventionId !== i.id || s.locale !== locale) problems.push(`${locale}/${s.kind}: id ou locale`);
    if (s.sections.length < 4) problems.push(`${locale}/${s.kind}: moins de 4 sections`);
    if (s.sources.length < 2) problems.push(`${locale}/${s.kind}: moins de 2 sources`);
  }
  for (const g of d.glossary) if (g.locale !== locale) problems.push(`${locale}/lexique ${g.id}: locale`);
  const forbidden = findForbiddenTerms(JSON.stringify(d));
  if (forbidden.length) problems.push(`${locale}: termes interdits ${forbidden.join(", ")}`);
}
const ids = Object.values(mod.dossier).map((d) => d.glossary.map((g) => g.id).sort().join(","));
if (new Set(ids).size > 1) problems.push("les entrées de lexique diffèrent entre marchés");
console.log(problems.length ? problems.join("\n") : "OK");
process.exit(problems.length ? 1 : 0);
