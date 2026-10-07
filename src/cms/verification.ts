import { hasRole } from "./roles";

export interface VerificationState {
  status: "pending" | "verified" | "suspended";
  verifiedAt?: string | null;
  verifiedBy?: string | null;
  /** Case « Contrôle annuel effectué » : relance le délai d'un an, puis se décoche. */
  renew?: boolean | null;
}

/**
 * Vérification d'un chirurgien au registre officiel. Seul un administrateur
 * peut la prononcer ; la date et l'auteur sont horodatés automatiquement à la
 * première vérification et à chaque contrôle annuel.
 */
export function nextVerificationState({
  requested,
  previous,
  user,
  now,
}: {
  requested: VerificationState | undefined;
  previous: VerificationState | undefined;
  user: { role?: unknown; name?: string | null } | null | undefined;
  now: Date;
}): VerificationState {
  const kept = {
    verifiedAt: previous?.verifiedAt ?? null,
    verifiedBy: previous?.verifiedBy ?? null,
    renew: false,
  };
  if (!hasRole(user, "admin")) {
    // Les autres comptes ne changent jamais l'état de vérification.
    return { status: previous?.status ?? "pending", ...kept };
  }
  const status = requested?.status ?? previous?.status ?? "pending";
  const stamp = status === "verified" && (previous?.status !== "verified" || requested?.renew === true);
  return stamp
    ? { status, verifiedAt: now.toISOString(), verifiedBy: user?.name ?? null, renew: false }
    : { status, ...kept };
}
