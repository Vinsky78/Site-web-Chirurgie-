import type { CollectionConfig } from "payload";
import { LANGUAGES, SPECIALTIES } from "@/content/surgeons/types";
import { verificationGuide } from "@/content/surgeons/verification";
import { INTERVENTION_IDS } from "@/content/types";
import { COUNTRY_CODES, type CountryCode } from "@/lib/countries";
import { isAdmin, isAdminField } from "../roles";

export const APPLICATION_STATUSES = ["new", "checking", "accepted", "rejected"] as const;

/**
 * Candidatures des chirurgiens (Phase 7), déposées depuis /rejoindre.
 * Données professionnelles uniquement, jamais de patient. Créées par le site
 * (API locale) ; lues et traitées par les administrateurs seulement.
 * Une candidature refusée est supprimée après 12 mois (docs/decisions.md).
 */
export const SurgeonApplications: CollectionConfig = {
  slug: "surgeon-applications",
  labels: { singular: "Candidature", plural: "Candidatures de chirurgiens" },
  admin: {
    useAsTitle: "fullName",
    defaultColumns: ["fullName", "country", "city", "status", "createdAt"],
    description: "Contrôler chaque candidature au registre du pays avant de créer la fiche et le compte.",
  },
  access: { read: isAdmin, create: () => false, update: isAdmin, delete: isAdmin },
  fields: [
    {
      name: "status",
      label: "Statut",
      type: "select",
      required: true,
      defaultValue: "new",
      options: [
        { label: "Nouvelle", value: "new" },
        { label: "Contrôle en cours", value: "checking" },
        { label: "Acceptée", value: "accepted" },
        { label: "Refusée", value: "rejected" },
      ],
      admin: { position: "sidebar" },
      access: { update: isAdminField },
    },
    {
      name: "notes",
      label: "Notes internes",
      type: "textarea",
      admin: { position: "sidebar", description: "Résultat des contrôles, motif d'un refus. Jamais transmis au candidat tel quel." },
    },
    {
      name: "guide",
      label: "Contrôles pour ce pays",
      type: "textarea",
      virtual: true,
      admin: { readOnly: true },
      hooks: { afterRead: [({ data }) => (data?.country ? verificationGuide(data.country as CountryCode) : "")] },
    },
    {
      type: "row",
      fields: [
        { name: "fullName", label: "Nom complet", type: "text", required: true, admin: { readOnly: true } },
        { name: "email", label: "E-mail", type: "email", required: true, admin: { readOnly: true } },
        { name: "phone", label: "Téléphone", type: "text", admin: { readOnly: true } },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "country", label: "Pays d'exercice", type: "select", required: true, options: [...COUNTRY_CODES], admin: { readOnly: true } },
        { name: "registryNumber", label: "Numéro au registre", type: "text", required: true, admin: { readOnly: true } },
        { name: "specialty", label: "Spécialité déclarée", type: "select", required: true, options: [...SPECIALTIES], admin: { readOnly: true } },
      ],
    },
    { name: "city", label: "Ville d'exercice", type: "text", required: true, admin: { readOnly: true } },
    {
      name: "interventions",
      label: "Interventions déclarées",
      type: "select",
      hasMany: true,
      required: true,
      options: [...INTERVENTION_IDS],
      admin: { readOnly: true },
    },
    { name: "languages", label: "Langues de consultation", type: "select", hasMany: true, options: [...LANGUAGES], admin: { readOnly: true } },
    { name: "locale", label: "Langue du site", type: "text", admin: { readOnly: true } },
  ],
};
