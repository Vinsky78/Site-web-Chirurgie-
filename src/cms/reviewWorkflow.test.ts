import { describe, expect, it } from "vitest";
import { charterErrors, medicalContentChanged, nextReviewState, type ReviewState } from "./reviewWorkflow";

const now = new Date("2026-10-07T10:00:00Z");
const reviewer = { role: "medical-reviewer", name: "Dr Claire Martin", qualification: "Chirurgienne plasticienne" };
const editor = { role: "editor", name: "Rédactrice" };
const admin = { role: "admin", name: "Admin" };
const reviewed: ReviewState = {
  status: "reviewed",
  reviewer: "Dr Claire Martin",
  qualification: "Chirurgienne plasticienne",
  reviewedAt: "2026-09-01T08:00:00.000Z",
};

describe("relecture médicale", () => {
  it("un relecteur médical valide une fiche et signe avec son nom, sa qualification et la date", () => {
    const state = nextReviewState({
      requested: { status: "reviewed" },
      previous: { status: "draft" },
      contentChanged: false,
      user: reviewer,
      now,
    });
    expect(state).toEqual({ ...reviewed, reviewedAt: now.toISOString() });
  });

  it.each([editor, admin])("le rôle %o ne peut pas valider une fiche", (user) => {
    const state = nextReviewState({ requested: { status: "reviewed" }, previous: { status: "draft" }, contentChanged: false, user, now });
    expect(state.status).toBe("draft");
  });

  it("une modification du contenu par un rédacteur repasse la fiche en brouillon", () => {
    const state = nextReviewState({ requested: reviewed, previous: reviewed, contentChanged: true, user: editor, now });
    expect(state).toMatchObject({ status: "draft", reviewer: null, reviewedAt: null });
  });

  it("une modification sans impact médical conserve la validation existante", () => {
    const state = nextReviewState({ requested: reviewed, previous: reviewed, contentChanged: false, user: editor, now });
    expect(state).toEqual(reviewed);
  });

  it("un relecteur qui modifie le contenu re-signe à la date du jour", () => {
    const state = nextReviewState({ requested: undefined, previous: reviewed, contentChanged: true, user: reviewer, now });
    expect(state.reviewedAt).toBe(now.toISOString());
  });

  it("un relecteur peut repasser une fiche en brouillon", () => {
    const state = nextReviewState({ requested: { status: "draft" }, previous: reviewed, contentChanged: false, user: reviewer, now });
    expect(state.status).toBe("draft");
  });
});

describe("détection des changements médicaux", () => {
  const original = { title: "Rhinoplastie", risks: [{ id: "a", name: "Infection", detail: "Rare" }], updatedAt: "x" };

  it("ignore les identifiants de lignes et les champs non médicaux", () => {
    expect(medicalContentChanged({ risks: [{ id: "b", name: "Infection", detail: "Rare" }], updatedAt: "y" }, original)).toBe(false);
  });

  it("repère un risque modifié", () => {
    expect(medicalContentChanged({ risks: [{ name: "Infection", detail: "Fréquente" }] }, original)).toBe(true);
  });

  it("considère une création comme un changement", () => {
    expect(medicalContentChanged({ title: "Rhinoplastie" }, undefined)).toBe(true);
  });
});

describe("charte éditoriale dans le CMS", () => {
  it("indique le champ fautif", () => {
    expect(charterErrors({ title: "Lifting", risks: [{ name: "Douleur", detail: "Intervention indolore" }] })).toEqual([
      { path: "risks.0.detail", message: "Terme interdit par la charte éditoriale : « indolore »." },
    ]);
  });

  it("accepte un contenu conforme", () => {
    expect(charterErrors({ title: "Rhinoplastie", summary: "Les risques et la convalescence." })).toEqual([]);
  });
});
