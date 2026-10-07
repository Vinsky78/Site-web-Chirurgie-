import { describe, expect, it } from "vitest";
import { matches, normalize } from "./search";

describe("recherche", () => {
  it("ignore la casse et les accents", () => {
    expect(normalize("Blépharoplastie")).toBe("blepharoplastie");
    expect(matches("BLEPHARO", ["Blépharoplastie"])).toBe(true);
  });

  it("exige tous les mots de la requête", () => {
    expect(matches("lifting visage", ["Lifting du visage"])).toBe(true);
    expect(matches("lifting seins", ["Lifting du visage"])).toBe(false);
  });

  it("ne trouve rien pour une requête vide de mots", () => {
    expect(matches("   ", ["texte"])).toBe(true);
  });
});
