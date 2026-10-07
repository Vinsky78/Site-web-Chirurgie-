import type { Access, FieldAccess } from "payload";

/**
 * Rôles du back-office éditorial.
 * - admin : gère les comptes, ne relit pas les contenus médicaux à ce titre.
 * - editor : rédige et modifie les fiches.
 * - medical-reviewer : chirurgien qualifié, seul habilité à valider une fiche.
 */
export const ROLES = ["admin", "editor", "medical-reviewer"] as const;
export type Role = (typeof ROLES)[number];

interface UserWithRole {
  role?: Role | null;
}

export function hasRole(user: unknown, ...roles: Role[]): boolean {
  const role = (user as UserWithRole | null | undefined)?.role;
  return role != null && roles.includes(role);
}

export const isAuthenticated: Access = ({ req }) => Boolean(req.user);
export const isAdmin: Access = ({ req }) => hasRole(req.user, "admin");
export const canEditContent: Access = ({ req }) => hasRole(req.user, "admin", "editor", "medical-reviewer");
export const isAdminField: FieldAccess = ({ req }) => hasRole(req.user, "admin");

/** Un administrateur voit tous les comptes ; les autres ne voient que le leur. */
export const isAdminOrSelf: Access = ({ req }) => {
  if (hasRole(req.user, "admin")) return true;
  return req.user ? { id: { equals: req.user.id } } : false;
};
