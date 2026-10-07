import { describe, expect, it } from "vitest";
import { INTERVENTIONS_FROM_FILES } from "../interventions/files";
import type { GlossaryTerm } from "../types";
import { interventionsUsingTerm, termPattern, termsUsedBy } from "./match";

const term = (overrides: Partial<GlossaryTerm>): GlossaryTerm => ({
  id: "seroma",
  locale: "fr",
  slug: "serome",
  term: "Sérome",
  aliases: ["séromes"],
  definition: "Définition.",
  detail: [],
  medicalReview: { status: "draft" },
  updatedAt: "2026-10-07",
  ...overrides,
});

describe("liens automatiques du lexique", () => {
  it("reconnaît le terme et ses variantes, sans tenir compte de la casse", () => {
    const pattern = termPattern(term({}));
    expect(pattern.test("Un sérome peut apparaître.")).toBe(true);
    expect(pattern.test("Des SÉROMES fréquents.")).toBe(true);
  });

  it("ne reconnaît que des mots entiers, accents compris", () => {
    const pattern = termPattern(term({ term: "implant", aliases: [] }));
    expect(pattern.test("les implantations")).toBe(false);
    expect(pattern.test("l'implant mammaire")).toBe(true);
    expect(termPattern(term({ term: "œdème", aliases: [] })).test("œdèmes")).toBe(false);
  });

  it("échappe les caractères spéciaux des termes", () => {
    expect(termPattern(term({ term: "LAGC-AIM (lymphome)", aliases: [] })).test("le LAGC-AIM (lymphome) est rare")).toBe(true);
  });

  it("relie une entrée aux fiches qui l'emploient, et inversement", () => {
    const fiches = INTERVENTIONS_FROM_FILES.fr;
    const seroma = term({});
    const used = interventionsUsingTerm(seroma, fiches).map((item) => item.id);
    expect(used).toContain("abdominoplasty");
    expect(used).not.toContain("rhinoplasty");
    const abdo = fiches.find((item) => item.id === "abdominoplasty")!;
    expect(termsUsedBy(abdo, [seroma]).map((item) => item.id)).toEqual(["seroma"]);
  });
});

describe("index alphabétique du lexique", () => {
  it("classe les termes accentués et les ligatures sous leur lettre de base", async () => {
    const { initialOf } = await import("./index");
    expect(initialOf("Œdème")).toBe("O");
    expect(initialOf("Hématome")).toBe("H");
    expect(initialOf("élévation")).toBe("E");
  });
});
