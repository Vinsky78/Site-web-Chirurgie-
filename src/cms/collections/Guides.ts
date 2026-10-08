import type { CollectionConfig } from "payload";
import { GUIDE_IDS, INTERVENTION_IDS } from "@/content/types";
import { canEditContent, isAdmin, isAuthenticated } from "../roles";
import { GUIDE_CONTENT_FIELDS } from "../reviewWorkflow";
import { revalidateInterventions } from "../revalidate";
import { medicalReviewField, reviewHooks, sectionsField, slugField, sourcesField, summaryField, textList } from "./shared";

/** Guides transverses : décider, se protéger. Relus par un chirurgien ou un juriste selon le sujet. */
export const Guides: CollectionConfig = {
  slug: "guides",
  labels: { singular: "Guide", plural: "Guides" },
  admin: { useAsTitle: "title", defaultColumns: ["title", "guideId", "updatedAt"] },
  access: { read: isAuthenticated, create: canEditContent, update: canEditContent, delete: isAdmin },
  versions: { maxPerDoc: 50 },
  hooks: reviewHooks(GUIDE_CONTENT_FIELDS, revalidateInterventions),
  fields: [
    {
      name: "guideId",
      label: "Identifiant",
      type: "select",
      required: true,
      unique: true,
      options: [...GUIDE_IDS],
      admin: { description: "Fixe : relie les versions de chaque marché (hreflang)." },
    },
    slugField,
    { name: "title", label: "Titre", type: "text", localized: true, required: true },
    summaryField,
    { name: "answer", label: "Réponse en tête", type: "textarea", localized: true, required: true },
    sectionsField("steps", "Étapes"),
    textList("warningSigns", "Signaux d'alerte"),
    sourcesField("resources", "Ressources officielles"),
    {
      name: "interventions",
      label: "Fiches citées",
      type: "select",
      hasMany: true,
      options: [...INTERVENTION_IDS],
    },
    medicalReviewField,
  ],
};
