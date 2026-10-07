import { describe, expect, it } from "vitest";
import { nextVerificationState } from "./verification";

const now = new Date("2026-10-07T10:00:00Z");
const admin = { role: "admin", name: "Admin Éclaira" };
const editor = { role: "editor", name: "Rédactrice" };
const verified = { status: "verified" as const, verifiedAt: "2026-01-10T09:00:00.000Z", verifiedBy: "Admin Éclaira" };

describe("vérification des chirurgiens", () => {
  it("un administrateur vérifie : date et auteur horodatés", () => {
    expect(nextVerificationState({ requested: { status: "verified" }, previous: { status: "pending" }, user: admin, now })).toEqual({
      status: "verified",
      verifiedAt: now.toISOString(),
      verifiedBy: "Admin Éclaira",
      renew: false,
    });
  });

  it("le contrôle annuel relance le délai", () => {
    const state = nextVerificationState({ requested: { ...verified, renew: true }, previous: verified, user: admin, now });
    expect(state.verifiedAt).toBe(now.toISOString());
    expect(state.renew).toBe(false);
  });

  it("un enregistrement sans contrôle annuel conserve la date d'origine", () => {
    const state = nextVerificationState({ requested: verified, previous: verified, user: admin, now });
    expect(state.verifiedAt).toBe(verified.verifiedAt);
  });

  it("un rédacteur ne peut ni vérifier ni relancer le délai", () => {
    expect(nextVerificationState({ requested: { status: "verified" }, previous: { status: "pending" }, user: editor, now }).status).toBe("pending");
    const state = nextVerificationState({ requested: { ...verified, renew: true }, previous: verified, user: editor, now });
    expect(state.verifiedAt).toBe(verified.verifiedAt);
  });

  it("une suspension garde la trace du dernier contrôle", () => {
    const state = nextVerificationState({ requested: { status: "suspended" }, previous: verified, user: admin, now });
    expect(state).toMatchObject({ status: "suspended", verifiedAt: verified.verifiedAt });
  });
});
