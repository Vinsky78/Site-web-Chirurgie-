import type { CollectionConfig } from "payload";
import { ValidationError } from "payload";
import { findForbiddenTerms } from "@/content/charter";
import { LANGUAGES, SPECIALTIES } from "@/content/surgeons/types";
import { INTERVENTION_IDS } from "@/content/types";
import { COUNTRY_CODES } from "@/lib/countries";
import { slugify } from "@/lib/slug";
import { canEditContent, isAdmin, isAdminField, isAuthenticated } from "../roles";
import { revalidateDirectory } from "../revalidate";
import { nextVerificationState, type VerificationState } from "../verification";

const SPECIALTY_LABELS: Record<(typeof SPECIALTIES)[number], string> = {
  "plastic-surgery": "Chirurgie plastique, reconstructrice et esthétique",
  ent: "ORL et chirurgie cervico-faciale",
  maxillofacial: "Chirurgie maxillo-faciale",
  oculoplastic: "Ophtalmologie (chirurgie oculoplastique)",
};

/**
 * Annuaire des chirurgiens. Seuls les profils vérifiés au registre officiel
 * depuis moins d'un an et abonnés sont publiés (src/content/surgeons/rules.ts).
 * Pas de photo avant/après, d'avis ni de prix (interdits en France).
 */
export const Surgeons: CollectionConfig = {
  slug: "surgeons",
  labels: { singular: "Chirurgien", plural: "Chirurgiens" },
  admin: {
    useAsTitle: "displayName",
    defaultColumns: ["displayName", "city", "specialty", "updatedAt"],
  },
  access: { read: isAuthenticated, create: isAdmin, update: canEditContent, delete: isAdmin },
  versions: { maxPerDoc: 50 },
  hooks: {
    beforeValidate: [
      ({ data, collection, req }) => {
        if (!data) return data;
        if (data.city) data.citySlug = slugify(String(data.city));
        if (!data.slug && data.displayName && data.city) {
          data.slug = slugify(`${String(data.displayName).replace(/^Dr\.?\s+/i, "")} ${data.city}`);
        }
        const terms = typeof data.bio === "string" ? findForbiddenTerms(data.bio) : [];
        if (terms.length > 0) {
          throw new ValidationError({
            collection: collection.slug,
            errors: [{ path: "bio", message: `Terme interdit par la charte éditoriale : « ${terms.join(" », « ")} ».` }],
            req,
          });
        }
        return data;
      },
    ],
    beforeChange: [
      ({ data, originalDoc, req }) => {
        data.verification = nextVerificationState({
          requested: data.verification as VerificationState | undefined,
          previous: originalDoc?.verification as VerificationState | undefined,
          user: req.user,
          now: new Date(),
        });
        return data;
      },
    ],
    afterChange: [({ context }) => revalidateDirectory(context)],
    afterDelete: [({ context }) => revalidateDirectory(context)],
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "displayName",
          label: "Nom affiché",
          type: "text",
          required: true,
          admin: { description: "Tel qu'inscrit au registre, ex. « Dr Claire Martin »." },
        },
        { name: "lastName", label: "Nom de famille (tri)", type: "text", required: true },
      ],
    },
    {
      name: "slug",
      label: "Adresse (slug)",
      type: "text",
      required: true,
      unique: true,
      admin: { description: "Calculée à partir du nom et de la ville si laissée vide." },
      validate: (value: string | null | undefined) =>
        /^[a-z0-9]+(-[a-z0-9]+)*$/.test(value ?? "") || "Minuscules, chiffres et tirets uniquement.",
    },
    {
      type: "row",
      fields: [
        {
          name: "specialty",
          label: "Spécialité",
          type: "select",
          required: true,
          options: SPECIALTIES.map((value) => ({ value, label: SPECIALTY_LABELS[value] })),
        },
        { name: "country", label: "Pays d'exercice", type: "select", required: true, defaultValue: "FR", options: [...COUNTRY_CODES] },
        {
          name: "registryNumber",
          label: "Numéro au registre",
          type: "text",
          required: true,
          admin: { description: "RPPS (France), numéro GMC (Royaume-Uni)…" },
          access: { update: isAdminField },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Lieu d'exercice",
      fields: [
        { name: "practiceName", label: "Cabinet ou clinique", type: "text", required: true },
        { name: "address", label: "Adresse", type: "text", required: true },
        {
          type: "row",
          fields: [
            { name: "postalCode", label: "Code postal", type: "text", required: true },
            { name: "city", label: "Ville", type: "text", required: true },
            { name: "citySlug", type: "text", index: true, admin: { readOnly: true, description: "Calculé." } },
          ],
        },
      ],
    },
    {
      name: "languages",
      label: "Langues de consultation",
      type: "select",
      hasMany: true,
      required: true,
      options: [...LANGUAGES],
    },
    {
      name: "interventions",
      label: "Interventions pratiquées",
      type: "select",
      hasMany: true,
      required: true,
      options: [...INTERVENTION_IDS],
    },
    {
      name: "bio",
      label: "Présentation",
      type: "textarea",
      localized: true,
      maxLength: 600,
      admin: { description: "Factuelle : parcours, spécialité. Aucune promesse, aucun superlatif." },
    },
    {
      name: "verification",
      label: "Vérification au registre",
      type: "group",
      admin: {
        position: "sidebar",
        description: "Réservée aux administrateurs. Le profil n'est publié que vérifié depuis moins d'un an.",
      },
      access: { update: isAdminField },
      fields: [
        {
          name: "status",
          label: "Statut",
          type: "select",
          required: true,
          defaultValue: "pending",
          options: [
            { label: "En attente de vérification", value: "pending" },
            { label: "Vérifié", value: "verified" },
            { label: "Suspendu", value: "suspended" },
          ],
        },
        { name: "renew", label: "Contrôle annuel effectué aujourd'hui", type: "checkbox", defaultValue: false },
        { name: "verifiedAt", label: "Dernier contrôle", type: "date", admin: { readOnly: true } },
        { name: "verifiedBy", label: "Contrôlé par", type: "text", admin: { readOnly: true } },
        {
          name: "evidence",
          label: "Preuve du contrôle (interne)",
          type: "textarea",
          admin: { description: "Ex. capture de la fiche RPPS du jour, lien vers le registre. Jamais publiée." },
        },
      ],
    },
    {
      name: "subscriptionActive",
      label: "Abonnement en cours",
      type: "checkbox",
      defaultValue: false,
      admin: { position: "sidebar", description: "Abonnement fixe : il ne change ni le classement ni le nombre de demandes." },
      access: { update: isAdminField },
    },
  ],
};
