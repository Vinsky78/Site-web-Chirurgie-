import type { CollectionConfig } from "payload";
import { INTERVENTION_IDS } from "@/content/types";
import { CONTACT_CHANNELS, CONTACT_SLOTS, CONTACT_SUBJECTS, CONTACT_TIMEFRAMES } from "@/lib/contact/schema";
import { isAdmin, isAdminField } from "../roles";

/**
 * Demandes de contact déposées depuis /contact. Créées par le site (API
 * locale) ; lues et traitées par les administrateurs seulement. Le message
 * n'est jamais recopié dans un e-mail. Supprimées 12 mois après leur création
 * (docs/decisions.md).
 */
export const ContactRequests: CollectionConfig = {
  slug: "contact-requests",
  labels: { singular: "Demande de contact", plural: "Demandes de contact" },
  admin: {
    useAsTitle: "reference",
    defaultColumns: ["reference", "firstName", "subject", "status", "createdAt"],
    description: "Répondre par le moyen de contact choisi. Ne jamais demander d'information médicale par ce canal : orienter vers la demande de consultation.",
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
        { label: "En cours", value: "in-progress" },
        { label: "Traitée", value: "done" },
      ],
      admin: { position: "sidebar" },
      access: { update: isAdminField },
    },
    { name: "notes", label: "Notes internes", type: "textarea", admin: { position: "sidebar" } },
    { name: "reference", label: "Référence", type: "text", required: true, index: true, admin: { readOnly: true, description: "Même référence que dans le tableau de suivi Google Sheets." } },
    { name: "subject", label: "Objet", type: "select", required: true, options: [...CONTACT_SUBJECTS], admin: { readOnly: true } },
    {
      type: "row",
      fields: [
        { name: "intervention", label: "Intervention envisagée", type: "select", options: [...INTERVENTION_IDS], admin: { readOnly: true } },
        { name: "timeframe", label: "Délai envisagé", type: "select", options: [...CONTACT_TIMEFRAMES], admin: { readOnly: true } },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "firstName", label: "Prénom", type: "text", required: true, admin: { readOnly: true } },
        { name: "email", label: "E-mail", type: "email", required: true, admin: { readOnly: true } },
        { name: "phone", label: "Téléphone", type: "text", admin: { readOnly: true } },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "channel", label: "Être recontacté par", type: "select", required: true, options: [...CONTACT_CHANNELS], admin: { readOnly: true } },
        { name: "slot", label: "Créneau préféré", type: "select", options: [...CONTACT_SLOTS], admin: { readOnly: true } },
      ],
    },
    { name: "message", label: "Message", type: "textarea", admin: { readOnly: true } },
    { name: "page", label: "Page d'origine", type: "text", admin: { readOnly: true } },
    { name: "locale", label: "Langue du site", type: "text", admin: { readOnly: true } },
  ],
};
