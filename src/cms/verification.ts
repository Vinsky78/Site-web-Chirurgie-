import { verificationBlockers, type VerificationCheck } from "@/content/surgeons/verification";
import { hasRole } from "./roles";

export interface VerificationState {
  status: "pending" | "verified" | "suspended";
  verifiedAt?: string | null;
  verifiedBy?: string | null;
  /** Case « Contrôle annuel effectué » : relance le délai d'un an, puis se décoche. */
  renew?: boolean | null;
  /** Contrôles du pays cochés par l'administrateur (Phase 7). */
  checks?: Partial<Record<VerificationCheck, boolean | null>> | null;
  insuranceExpiresAt?: string | null;
  evidence?: string | null;
}

/** La vérification est demandée alors que des contrôles manquent. */
export class VerificationBlockedError extends Error {
  constructor(readonly blockers: string[]) {
    super(blockers.join(" "));
    this.name = "VerificationBlockedError";
  }
}

/**
 * Vérification d'un chirurgien au registre officiel. Seul un administrateur
 * peut la prononcer, et seulement une fois tous les contrôles du pays cochés
 * et l'assurance valide ; la date et l'auteur sont horodatés automatiquement
 * à la première vérification et à chaque contrôle annuel.
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
    return { ...previous, status: previous?.status ?? "pending", ...kept };
  }
  const status = requested?.status ?? previous?.status ?? "pending";
  const stamp = status === "verified" && (previous?.status !== "verified" || requested?.renew === true);
  if (!stamp) return { ...requested, status, ...kept };

  const blockers = verificationBlockers(requested ?? {}, now);
  if (blockers.length > 0) throw new VerificationBlockedError(blockers);
  return { ...requested, status, verifiedAt: now.toISOString(), verifiedBy: user?.name ?? null, renew: false };
}
