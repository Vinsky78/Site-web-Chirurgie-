/**
 * Amorçage du CMS : importe les fiches de src/content (en brouillon) et crée
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
import { interventionToCms } from "@/cms/mapping";

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

process.exit(0);
