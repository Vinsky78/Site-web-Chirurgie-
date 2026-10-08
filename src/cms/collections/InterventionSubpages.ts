import type { CollectionConfig } from "payload";
import { ValidationError } from "payload";
import { INTERVENTION_IDS, SUBPAGE_KINDS } from "@/content/types";
import { canEditContent, isAdmin, isAuthenticated } from "../roles";
import { SUBPAGE_CONTENT_FIELDS } from "../reviewWorkflow";
import { revalidateInterventions } from "../revalidate";
import { medicalReviewField, reviewHooks, sectionsField, sourcesField, summaryField } from "./shared";

const hooks = reviewHooks(SUBPAGE_CONTENT_FIELDS, revalidateInterventions);

/**
 * Sous-pages d'un dossier d'intervention (risques, prix, convalescence, avant
 * de se décider, alternatives). Une seule sous-page par intervention et par
 * sujet ; l'adresse est fixée par le sujet (src/content/subpages/slugs.ts).
 */
export const InterventionSubpages: CollectionConfig = {
  slug: "intervention-subpages",
  labels: { singular: "Sous-page d'intervention", plural: "Sous-pages d'intervention" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "interventionId", "kind", "updatedAt"],
  },
  access: { read: isAuthenticated, create: canEditContent, update: canEditContent, delete: isAdmin },
  versions: { maxPerDoc: 50 },
  hooks: {
    ...hooks,
    beforeValidate: [
      async ({ data, originalDoc, collection, req }) => {
        const interventionId = data?.interventionId ?? originalDoc?.interventionId;
        const kind = data?.kind ?? originalDoc?.kind;
        const { docs } = await req.payload.find({
          collection: "intervention-subpages",
          where: { and: [{ interventionId: { equals: interventionId } }, { kind: { equals: kind } }] },
          limit: 1,
          depth: 0,
          req,
        });
        if (docs[0] && docs[0].id !== originalDoc?.id) {
          throw new ValidationError({
            collection: collection.slug,
            errors: [{ path: "kind", message: "Cette sous-page existe déjà pour cette intervention." }],
            req,
          });
        }
        return data;
      },
      ...hooks.beforeValidate,
    ],
  },
  fields: [
    {
      type: "row",
      fields: [
        { name: "interventionId", label: "Intervention", type: "select", required: true, options: [...INTERVENTION_IDS] },
        {
          name: "kind",
          label: "Sujet",
          type: "select",
          required: true,
          options: [
            { label: "Risques", value: "risks" },
            { label: "Prix", value: "cost" },
            { label: "Convalescence", value: "recovery" },
            { label: "Avant de se décider", value: "decision" },
            { label: "Alternatives", value: "alternatives" },
          ] satisfies { value: (typeof SUBPAGE_KINDS)[number]; label: string }[],
        },
      ],
    },
    { name: "title", label: "Titre", type: "text", localized: true, required: true },
    summaryField,
    {
      name: "answer",
      label: "Réponse en tête",
      type: "textarea",
      localized: true,
      required: true,
      admin: { description: "La réponse directe à la question, en deux à quatre phrases." },
    },
    sectionsField("sections", "Détail"),
    sourcesField("sources", "Sources médicales"),
    medicalReviewField,
  ],
};
