import type { CollectionConfig } from "payload";
import { canEditContent, isAdmin, isAuthenticated } from "../roles";
import { GLOSSARY_CONTENT_FIELDS } from "../reviewWorkflow";
import { revalidateInterventions } from "../revalidate";
import { medicalReviewField, reviewHooks, slugField, textList } from "./shared";

/**
 * Lexique. Les fiches qui emploient un terme (ou l'une de ses variantes) sont
 * retrouvées automatiquement : aucun lien à saisir à la main.
 */
export const GlossaryTerms: CollectionConfig = {
  slug: "glossary-terms",
  labels: { singular: "Entrée de lexique", plural: "Lexique" },
  admin: { useAsTitle: "term", defaultColumns: ["term", "termId", "updatedAt"] },
  access: { read: isAuthenticated, create: canEditContent, update: canEditContent, delete: isAdmin },
  versions: { maxPerDoc: 50 },
  hooks: reviewHooks(GLOSSARY_CONTENT_FIELDS, revalidateInterventions),
  fields: [
    {
      name: "termId",
      label: "Identifiant",
      type: "text",
      required: true,
      unique: true,
      admin: { description: "Commun aux marchés (ex. seroma) : relie les versions pour hreflang." },
      validate: (value: string | null | undefined) =>
        /^[a-z0-9]+(-[a-z0-9]+)*$/.test(value ?? "") || "Minuscules, chiffres et tirets uniquement.",
    },
    slugField,
    { name: "term", label: "Terme", type: "text", localized: true, required: true },
    textList("aliases", "Variantes (pluriel, autre orthographe)", 0, false),
    {
      name: "definition",
      label: "Définition (deux phrases au plus)",
      type: "textarea",
      localized: true,
      required: true,
      maxLength: 400,
    },
    textList("detail", "Détail"),
    medicalReviewField,
  ],
};
