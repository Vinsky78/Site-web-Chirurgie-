import { describe, expect, it } from "vitest";
import { routing } from "@/i18n/routing";
import { INTERVENTION_IDS } from "../types";
import { findForbiddenTerms } from "../charter";
import { INTERVENTIONS_FROM_FILES } from "./files";

describe("contenus interventions (fichiers)", () => {
  for (const locale of routing.locales) {
    const items = INTERVENTIONS_FROM_FILES[locale];

    it(`${locale} : couvre toutes les interventions avec des slugs uniques`, () => {
      expect(items.map((i) => i.id).sort()).toEqual([...INTERVENTION_IDS].sort());
      expect(new Set(items.map((i) => i.slug)).size).toBe(items.length);
    });

    for (const item of items) {
      it(`${locale}/${item.slug} : sections médicales obligatoires présentes`, () => {
        expect(item.locale).toBe(locale);
        expect(item.risks.length).toBeGreaterThanOrEqual(3);
        expect(item.contraindications.length).toBeGreaterThan(0);
        expect(item.alternatives.length).toBeGreaterThan(0);
        expect(item.recovery.length).toBeGreaterThan(0);
        expect(item.summary.length).toBeLessThanOrEqual(160);
      });

      it(`${locale}/${item.slug} : aucun terme promotionnel`, () => {
        expect(findForbiddenTerms(JSON.stringify(item))).toEqual([]);
      });
    }
  }

  it("fournit un slug par locale pour chaque intervention (hreflang)", () => {
    for (const id of INTERVENTION_IDS) {
      for (const locale of routing.locales) {
        expect(INTERVENTIONS_FROM_FILES[locale].some((item) => item.id === id)).toBe(true);
      }
    }
  });
});
