import { describe, expect, it } from "vitest";
import { routing } from "@/i18n/routing";
import { INTERVENTION_IDS } from "../types";
import { getAlternateSlugs, getInterventions } from ".";

/** Termes promotionnels interdits par la charte éditoriale (Phase 1). */
const FORBIDDEN = [
  /\bmeilleur(e|s)?\b/i,
  /résultats? garantis?/i,
  /\bpromo(tion)?\b/i,
  /\boffre\b/i,
  /\bsans risque\b/i,
  /\bindolore\b/i,
  /\bbest\b/i,
  /\brisk-free\b/i,
  /\bpainless\b/i,
  /\bspecial offer\b/i,
];

describe("contenus interventions", () => {
  for (const locale of routing.locales) {
    const items = getInterventions(locale);

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
        const text = JSON.stringify(item);
        for (const pattern of FORBIDDEN) expect(text).not.toMatch(pattern);
      });
    }
  }

  it("fournit un slug par locale pour chaque intervention (hreflang)", () => {
    for (const id of INTERVENTION_IDS) {
      expect(Object.keys(getAlternateSlugs(id)).sort()).toEqual([...routing.locales].sort());
    }
  });
});
