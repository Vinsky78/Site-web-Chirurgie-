/**
 * Amorçage du CMS : importe les fiches, sous-pages, guides et entrées de
 * lexique de src/content (en brouillon) et crée
 * le premier compte administrateur.
 *
 *   npm run cms:seed            → crée les fiches absentes, ne touche pas aux autres
 *   npm run cms:seed -- --force → écrase aussi les fiches existantes (repassent en brouillon)
 *
 * Premier administrateur : CMS_ADMIN_EMAIL, CMS_ADMIN_PASSWORD et CMS_ADMIN_NAME.
 * À lancer juste après le premier déploiement : tant qu'aucun compte n'existe,
 * l'écran /admin propose de créer le premier administrateur à quiconque y accède.
 */
import config from "@payload-config";
import { getPayload } from "payload";
import { routing } from "@/i18n/routing";
import { INTERVENTION_IDS } from "@/content/types";
import { INTERVENTIONS_FROM_FILES } from "@/content/interventions/files";
import { SUBPAGES_FROM_FILES } from "@/content/subpages/files";
import { GUIDES_FROM_FILES } from "@/content/guides/files";
import { GLOSSARY_FROM_FILES } from "@/content/glossary/files";
import { glossaryTermToCms, guideToCms, interventionToCms, subpageToCms } from "@/cms/mapping";

const force = process.argv.includes("--force");
const payload = await getPayload({ config });
const context = { disableRevalidate: true };

const { totalDocs: userCount } = await payload.count({ collection: "users" });
const { CMS_ADMIN_EMAIL, CMS_ADMIN_PASSWORD, CMS_ADMIN_NAME } = process.env;
if (userCount === 0 && CMS_ADMIN_EMAIL && CMS_ADMIN_PASSWORD) {
  await payload.create({
    collection: "users",
    data: { email: CMS_ADMIN_EMAIL, password: CMS_ADMIN_PASSWORD, name: CMS_ADMIN_NAME ?? "Administrateur", role: "admin" },
  });
  console.log(`Administrateur créé : ${CMS_ADMIN_EMAIL}`);
} else if (userCount === 0) {
  console.warn("Aucun compte : définir CMS_ADMIN_EMAIL et CMS_ADMIN_PASSWORD pour créer l'administrateur.");
}

for (const id of INTERVENTION_IDS) {
  const existing = await payload.find({
    collection: "interventions",
    where: { interventionId: { equals: id } },
    limit: 1,
    depth: 0,
  });
  let docId = existing.docs[0]?.id;
  if (docId !== undefined && !force) {
    console.log(`${id} : déjà présente, ignorée (--force pour écraser).`);
    continue;
  }

  for (const locale of routing.locales) {
    const item = INTERVENTIONS_FROM_FILES[locale].find((entry) => entry.id === id);
    if (!item) continue;
    const data = interventionToCms(item);
    if (docId === undefined) {
      docId = (await payload.create({ collection: "interventions", locale, data, context })).id;
    } else {
      await payload.update({ collection: "interventions", id: docId, locale, data, context });
    }
    console.log(`${id} [${locale}] : importée (${item.slug}).`);
  }
}

/**
 * Importe un contenu présent dans plusieurs locales : un document par clé,
 * créé dans la première locale puis complété dans les suivantes.
 */
async function seedLocalized<T>(
  collection: "intervention-subpages" | "guides" | "glossary-terms",
  label: string,
  keys: { key: string; where: Record<string, { equals: string }> }[],
  itemFor: (locale: (typeof routing.locales)[number], key: string) => T | undefined,
  toCms: (item: T) => Record<string, unknown>,
) {
  for (const { key, where } of keys) {
    const existing = await payload.find({ collection, where, limit: 1, depth: 0 });
    let docId = existing.docs[0]?.id;
    if (docId !== undefined && !force) {
      console.log(`${label} ${key} : déjà présent, ignoré (--force pour écraser).`);
      continue;
    }
    for (const locale of routing.locales) {
      const item = itemFor(locale, key);
      if (!item) continue;
      // Les données suivent le gabarit de la collection (vérifié par les types de mapping.ts).
      const data = toCms(item) as never;
      if (docId === undefined) docId = (await payload.create({ collection, locale, data, context })).id;
      else await payload.update({ collection, id: docId, locale, data, context });
      console.log(`${label} ${key} [${locale}] : importé.`);
    }
  }
}

const subpageKeys = SUBPAGES_FROM_FILES[routing.defaultLocale].map((item) => ({
  key: `${item.interventionId}/${item.kind}`,
  where: { interventionId: { equals: item.interventionId }, kind: { equals: item.kind } },
}));
await seedLocalized(
  "intervention-subpages",
  "Sous-page",
  subpageKeys,
  (locale, key) => SUBPAGES_FROM_FILES[locale].find((item) => `${item.interventionId}/${item.kind}` === key),
  subpageToCms,
);

await seedLocalized(
  "guides",
  "Guide",
  GUIDES_FROM_FILES[routing.defaultLocale].map((item) => ({ key: item.id, where: { guideId: { equals: item.id } } })),
  (locale, key) => GUIDES_FROM_FILES[locale].find((item) => item.id === key),
  guideToCms,
);

await seedLocalized(
  "glossary-terms",
  "Lexique",
  GLOSSARY_FROM_FILES[routing.defaultLocale].map((item) => ({ key: item.id, where: { termId: { equals: item.id } } })),
  (locale, key) => GLOSSARY_FROM_FILES[locale].find((item) => item.id === key),
  glossaryTermToCms,
);

process.exit(0);
