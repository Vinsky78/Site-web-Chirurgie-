import { describe, expect, it } from "vitest";
import { routing } from "@/i18n/routing";
import { GUIDE_IDS, getGuideAlternateSlugs, getGuides } from "./guides";

const FORBIDDEN = [/\bmeilleur(e|s)?\b/i, /résultats? garantis?/i, /\bpromo(tion)?\b/i, /\bsans risque\b/i, /\bindolore\b/i, /\bbest\b/i, /\brisk-free\b/i, /\bpainless\b/i, /\bspecial offer\b/i];

describe("guides", () => {
  for (const locale of routing.locales) {
    it(`${locale} : couvre tous les guides, slugs uniques, résumé court`, () => {
      const items = getGuides(locale);
      expect(items.map((g) => g.id).sort()).toEqual([...GUIDE_IDS].sort());
      expect(new Set(items.map((g) => g.slug)).size).toBe(items.length);
      for (const g of items) {
        expect(g.summary.length).toBeLessThanOrEqual(160);
        expect(g.sections.length).toBeGreaterThan(1);
        for (const pattern of FORBIDDEN) expect(JSON.stringify(g)).not.toMatch(pattern);
      }
    });
  }

  it("fournit un slug par locale pour chaque guide (hreflang)", () => {
    for (const id of GUIDE_IDS) {
      expect(Object.keys(getGuideAlternateSlugs(id)).sort()).toEqual([...routing.locales].sort());
    }
  });
});
