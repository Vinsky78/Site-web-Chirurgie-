import type { CollectionConfig } from "payload";
import { CATEGORY_IDS, INTERVENTION_IDS } from "@/content/types";
import { canEditContent, isAdmin, isAuthenticated } from "../roles";
import { MEDICAL_CONTENT_FIELDS } from "../reviewWorkflow";
import { revalidateInterventions } from "../revalidate";
import { medicalReviewField, reviewHooks, slugField, summaryField, textList } from "./shared";

/**
 * Fiches d'intervention. Les contenus sont localisés par marché (et non
 * traduits) : chaque locale a son slug, ses risques et son contexte légal.
 * Le catalogue (identifiants, catégories) reste dans le code, car le
 * formulaire de demande en dépend.
 */
export const Interventions: CollectionConfig = {
  slug: "interventions",
  labels: { singular: "Intervention", plural: "Interventions" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "interventionId", "category", "updatedAt"],
  },
  // Lecture réservée aux comptes connectés : le site public lit par l'API locale, côté serveur.
  access: { read: isAuthenticated, create: canEditContent, update: canEditContent, delete: isAdmin },
  versions: { maxPerDoc: 50 },
  hooks: reviewHooks(MEDICAL_CONTENT_FIELDS, revalidateInterventions),
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "interventionId",
          label: "Identifiant",
          type: "select",
          required: true,
          unique: true,
          options: [...INTERVENTION_IDS],
          admin: { description: "Fixe : utilisé par le formulaire de demande." },
        },
        { name: "category", label: "Catégorie", type: "select", required: true, options: [...CATEGORY_IDS] },
      ],
    },
    slugField,
    { name: "title", label: "Titre", type: "text", localized: true, required: true },
    summaryField,
    textList("description", "Description"),
    textList("indications", "Indications"),
    textList("contraindications", "Contre-indications"),
    {
      name: "risks",
      label: "Risques et complications",
      type: "array",
      localized: true,
      required: true,
      minRows: 3,
      admin: { description: "Section obligatoire : au moins trois risques." },
      fields: [
        { name: "name", label: "Risque", type: "text", required: true },
        { name: "detail", label: "Détail", type: "textarea", required: true },
      ],
    },
    {
      name: "procedure",
      label: "Déroulement",
      type: "group",
      localized: true,
      fields: [
        { name: "anaesthesia", label: "Anesthésie", type: "text", required: true },
        { name: "duration", label: "Durée", type: "text", required: true },
        { name: "hospitalStay", label: "Hospitalisation", type: "text", required: true },
      ],
    },
    textList("recovery", "Convalescence"),
    textList("alternatives", "Alternatives"),
    {
      name: "faq",
      label: "Questions fréquentes",
      type: "array",
      localized: true,
      fields: [
        { name: "question", label: "Question", type: "text", required: true },
        { name: "answer", label: "Réponse", type: "textarea", required: true },
      ],
    },
    medicalReviewField,
  ],
};
