import type { CollectionConfig } from "payload";
import { isAdmin, isAdminField, isAdminOrSelf, ROLES } from "../roles";

/**
 * Comptes du back-office éditorial (pas les chirurgiens inscrits, qui auront
 * leur espace pro séparé). Sessions courtes et verrouillage après 5 échecs.
 */
export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "Compte", plural: "Comptes" },
  admin: { useAsTitle: "email", defaultColumns: ["email", "name", "role"] },
  auth: {
    tokenExpiration: 2 * 60 * 60,
    maxLoginAttempts: 5,
    lockTime: 15 * 60 * 1000,
    cookies: { secure: process.env.NODE_ENV === "production", sameSite: "Strict" },
  },
  access: {
    read: isAdminOrSelf,
    create: isAdmin,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  hooks: {
    beforeChange: [
      // Le tout premier compte créé est administrateur ; les suivants sont rédacteurs par défaut.
      async ({ data, operation, req }) => {
        if (operation === "create") {
          const { totalDocs } = await req.payload.count({ collection: "users", req });
          if (totalDocs === 0) data.role = "admin";
        }
        return data;
      },
    ],
  },
  fields: [
    { name: "name", label: "Nom complet", type: "text", required: true },
    {
      name: "role",
      label: "Rôle",
      type: "select",
      required: true,
      defaultValue: "editor",
      options: [
        { label: "Administrateur", value: ROLES[0] },
        { label: "Rédacteur", value: ROLES[1] },
        { label: "Relecteur médical", value: ROLES[2] },
      ],
      access: { create: isAdminField, update: isAdminField },
    },
    {
      name: "qualification",
      label: "Qualification",
      type: "text",
      admin: {
        description: "Pour un relecteur médical : spécialité et numéro d'inscription (RPPS, GMC…). Affichée sur les fiches relues.",
      },
      access: { update: isAdminField },
    },
  ],
};
