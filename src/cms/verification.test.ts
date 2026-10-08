import { describe, expect, it } from "vitest";
import { VERIFICATION_CHECKS } from "@/content/surgeons/verification";
import { nextVerificationState, VerificationBlockedError } from "./verification";

const now = new Date("2026-10-07T10:00:00Z");
const admin = { role: "admin", name: "Admin Éclaira" };
const editor = { role: "editor", name: "Rédactrice" };
const allChecks = Object.fromEntries(VERIFICATION_CHECKS.map((check) => [check, true]));
/** Contrôles du pays faits et assurance valide : la vérification peut être prononcée. */
const complete = { checks: allChecks, insuranceExpiresAt: "2027-06-30" };
const verified = {
  status: "verified" as const,
  verifiedAt: "2026-01-10T09:00:00.000Z",
  verifiedBy: "Admin Éclaira",
  ...complete,
};

describe("vérification des chirurgiens", () => {
  it("un administrateur vérifie : date et auteur horodatés", () => {
    expect(
      nextVerificationState({ requested: { status: "verified", ...complete }, previous: { status: "pending" }, user: admin, now }),
    ).toMatchObject({
      status: "verified",
      verifiedAt: now.toISOString(),
      verifiedBy: "Admin Éclaira",
      renew: false,
      insuranceExpiresAt: "2027-06-30",
    });
  });

  it("refuse la vérification tant qu'un contrôle du pays manque", () => {
    const requested = { status: "verified" as const, ...complete, checks: { ...allChecks, facility: false } };
    expect(() => nextVerificationState({ requested, previous: { status: "pending" }, user: admin, now })).toThrow(
      VerificationBlockedError,
    );
  });

  it("refuse la vérification sans assurance valide", () => {
    for (const insuranceExpiresAt of [null, "2026-10-01"]) {
      const requested = { status: "verified" as const, checks: allChecks, insuranceExpiresAt };
      expect(() => nextVerificationState({ requested, previous: { status: "pending" }, user: admin, now })).toThrow(
        /assurance/,
      );
    }
  });

  it("le contrôle annuel relance le délai", () => {
    const state = nextVerificationState({ requested: { ...verified, renew: true }, previous: verified, user: admin, now });
    expect(state.verifiedAt).toBe(now.toISOString());
    expect(state.renew).toBe(false);
  });

  it("le contrôle annuel exige lui aussi une assurance à jour", () => {
    const requested = { ...verified, renew: true, insuranceExpiresAt: "2026-09-30" };
    expect(() => nextVerificationState({ requested, previous: verified, user: admin, now })).toThrow(VerificationBlockedError);
  });

  it("un enregistrement sans contrôle annuel conserve la date d'origine et la preuve", () => {
    const state = nextVerificationState({ requested: { ...verified, evidence: "Capture RPPS" }, previous: verified, user: admin, now });
    expect(state.verifiedAt).toBe(verified.verifiedAt);
    expect(state.evidence).toBe("Capture RPPS");
  });

  it("un rédacteur ne peut ni vérifier ni relancer le délai", () => {
    expect(
      nextVerificationState({ requested: { status: "verified", ...complete }, previous: { status: "pending" }, user: editor, now }).status,
    ).toBe("pending");
    const state = nextVerificationState({ requested: { ...verified, renew: true }, previous: verified, user: editor, now });
    expect(state.verifiedAt).toBe(verified.verifiedAt);
  });

  it("une suspension garde la trace du dernier contrôle", () => {
    const state = nextVerificationState({ requested: { status: "suspended" }, previous: verified, user: admin, now });
    expect(state).toMatchObject({ status: "suspended", verifiedAt: verified.verifiedAt });
  });
});
