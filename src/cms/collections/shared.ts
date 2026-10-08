import type { ArrayField, CollectionConfig, Field, TextField } from "payload";
import { ValidationError } from "payload";
import { charterErrors, medicalContentChanged, nextReviewState, type ReviewState } from "../reviewWorkflow";

/** Champs et règles communs aux gabarits éditoriaux (fiches, sous-pages, guides, lexique). */

/** Liste de paragraphes ou de puces (texte simple, sans mise en forme). */
export function textList(name: string, label: string, minRows = 1, required = true): ArrayField {
  return {
    name,
    label,
    type: "array",
    localized: true,
    required,
    minRows: required ? minRows : undefined,
    labels: { singular: "Élément", plural: "Éléments" },
    fields: [{ name: "text", label: "Texte", type: "textarea", required: true }],
  };
}

export const slugField: TextField = {
  name: "slug",
  label: "Adresse (slug)",
  type: "text",
  localized: true,
  required: true,
  unique: true,
  validate: (value: string | null | undefined) =>
    /^[a-z0-9]+(-[a-z0-9]+)*$/.test(value ?? "") || "Minuscules, chiffres et tirets uniquement.",
};

export const summaryField: Field = {
  name: "summary",
  label: "Résumé (meta description)",
  type: "textarea",
  localized: true,
  required: true,
  maxLength: 160,
};

/** Sections à intertitre : paragraphes et puces facultatives. */
export function sectionsField(name: string, label: string): ArrayField {
  return {
    name,
    label,
    type: "array",
    localized: true,
    required: true,
    minRows: 1,
    labels: { singular: "Section", plural: "Sections" },
    fields: [
      { name: "heading", label: "Intertitre", type: "text", required: true },
      { ...textList("paragraphs", "Paragraphes", 0, false), localized: false },
      { ...textList("bullets", "Puces", 0, false), localized: false },
    ],
  };
}

/** Sources ou ressources officielles, citées en bas de page. */
export function sourcesField(name: string, label: string): ArrayField {
  return {
    name,
    label,
    type: "array",
    localized: true,
    required: true,
    minRows: 1,
    fields: [
      { name: "label", label: "Intitulé", type: "text", required: true },
      {
        name: "url",
        label: "Adresse",
        type: "text",
        validate: (value: string | null | undefined) =>
          !value || /^https:\/\/[^\s]+$/.test(value) || "Adresse https complète attendue.",
      },
    ],
  };
}

export const medicalReviewField: Field = {
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
 * Charte éditoriale à l'enregistrement, relecture médicale et régénération
 * des pages publiques. `fields` : champs relus du gabarit.
 */
export function reviewHooks(fields: readonly string[], revalidate: (context: Record<string, unknown>) => void) {
  return {
    beforeValidate: [
      ({ data, collection, req }) => {
        const errors = charterErrors(data ?? {}, fields);
        if (errors.length > 0) throw new ValidationError({ collection: collection.slug, errors, req });
        return data;
      },
    ],
    beforeChange: [
      ({ data, originalDoc, req }) => {
        data.medicalReview = nextReviewState({
          requested: data.medicalReview as ReviewState | undefined,
          previous: originalDoc?.medicalReview as ReviewState | undefined,
          contentChanged: medicalContentChanged(data, originalDoc, fields),
          user: req.user,
          now: new Date(),
        });
        return data;
      },
    ],
    afterChange: [({ context }) => revalidate(context)],
    afterDelete: [({ context }) => revalidate(context)],
  } satisfies CollectionConfig["hooks"];
}
