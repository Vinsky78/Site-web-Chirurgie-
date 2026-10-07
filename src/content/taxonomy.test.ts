import { describe, expect, it } from "vitest";
import { routing } from "@/i18n/routing";
import { getInterventions } from "./interventions";
import { CATEGORY_IDS } from "./types";
import { KEYWORDS, isCategory, staticPaths } from "./taxonomy";

describe("taxonomie", () => {
  it("chaque catégorie contient au moins une intervention dans chaque locale", () => {
    for (const locale of routing.locales) {
      for (const category of CATEGORY_IDS) {
        expect(getInterventions(locale).some((i) => i.category === category)).toBe(true);
      }
    }
  });

  it("les mots-clés couvrent toutes les locales et ont un terme principal", () => {
    for (const plan of Object.values(KEYWORDS)) {
      for (const locale of routing.locales) {
        expect(plan?.[locale]?.primary.length).toBeGreaterThan(0);
      }
    }
  });

  it("reconnaît les catégories valides", () => {
    expect(isCategory("face")).toBe(true);
    expect(isCategory("nope")).toBe(false);
  });

  it("publie une page par catégorie", () => {
    expect(staticPaths()).toContain("/interventions/categories/body");
  });
});
