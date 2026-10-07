/**
 * Protection du back-office Payload (/admin et son API /api). Payload n'a pas
 * de double authentification : on exige devant lui une session de l'équipe
 * interne (rôle staff) ayant validé son code. La connexion Payload reste
 * nécessaire ensuite (deux comptes, deux mots de passe distincts).
 */
export type GateDecision = "pass" | "allow" | "redirect" | "deny";

export function isBackOfficePath(pathname: string): boolean {
  return /^\/(admin|api)(\/|$)/.test(pathname);
}

export function adminGate(pathname: string, hasStaffSessionWith2fa: boolean): GateDecision {
  if (!isBackOfficePath(pathname)) return "pass";
  if (hasStaffSessionWith2fa) return "allow";
  return pathname.startsWith("/api") ? "deny" : "redirect";
}
