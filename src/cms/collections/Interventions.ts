import type { ArrayField, CollectionConfig, Field } from "payload";
import { ValidationError } from "payload";
import { CATEGORY_IDS, INTERVENTION_IDS } from "@/content/types";
import { canEditContent, isAdmin, isAuthenticated } from "../roles";
import { charterErrors, medicalContentChanged, nextReviewState, type ReviewState } from "../reviewWorkflow";
import { revalidateInterventions } from "../revalidate";

/** Liste de paragraphes ou de puces (texte simple, sans mise en forme). */
function textList(name: string, label: string, minRows = 1): ArrayField {
  return {
    name,
    label,
    type: "array",
    localized: true,
    required: true,
    minRows,
    labels: { singular: "Élément", plural: "Éléments" },
    fields: [{ name: "text", label: "Texte", type: "textarea", required: true }],
  };
}

const medicalReview: Field = {
  name: "medicalReview",
  label: "Relecture médicale",
  type: "group",
  localized: true,
  admin: {
    position: "sidebar",
    description:
      "Seul un relecteur médical peut valider. Toute modification du contenu par un autre compte repasse la fiche en brouillon (non indexée).",
  },
  fields: [
    {
      name: "status",
      label: "Statut",
      type: "select",
      required: true,
      defaultValue: "draft",
      options: [
        { label: "Brouillon (non indexé)", value: "draft" },
        { label: "Relu par un chirurgien", value: "reviewed" },
      ],
    },
    { name: "reviewer", label: "Relu par", type: "text", admin: { readOnly: true } },
    { name: "qualification", label: "Qualification", type: "text", admin: { readOnly: true } },
    { name: "reviewedAt", label: "Date de relecture", type: "date", admin: { readOnly: true } },
  ],
};

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
  hooks: {
    beforeValidate: [
      ({ data, collection, req }) => {
        const errors = charterErrors(data ?? {});
        if (errors.length > 0) throw new ValidationError({ collection: collection.slug, errors, req });
        return data;
      },
    ],
    beforeChange: [
      ({ data, originalDoc, req }) => {
        data.medicalReview = nextReviewState({
          requested: data.medicalReview as ReviewState | undefined,
          previous: originalDoc?.medicalReview as ReviewState | undefined,
          contentChanged: medicalContentChanged(data, originalDoc),
          user: req.user,
          now: new Date(),
        });
        return data;
      },
    ],
    afterChange: [({ context }) => revalidateInterventions(context)],
    afterDelete: [({ context }) => revalidateInterventions(context)],
  },
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
    {
      name: "slug",
      label: "Adresse (slug)",
      type: "text",
      localized: true,
      required: true,
      unique: true,
      validate: (value: string | null | undefined) =>
        /^[a-z0-9]+(-[a-z0-9]+)*$/.test(value ?? "") || "Minuscules, chiffres et tirets uniquement.",
    },
    { name: "title", label: "Titre", type: "text", localized: true, required: true },
    {
      name: "summary",
      label: "Résumé (meta description)",
      type: "textarea",
      localized: true,
      required: true,
      maxLength: 160,
    },
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
    medicalReview,
  ],
};
