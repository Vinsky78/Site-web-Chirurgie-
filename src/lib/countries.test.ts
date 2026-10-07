import { describe, expect, it } from "vitest";
import { ACTIVE_COUNTRIES, COUNTRY_CODES, COUNTRY_RULES, strictestRules } from "./countries";

describe("règles par pays", () => {
  it("définit une règle pour chaque pays cible", () => {
    for (const code of COUNTRY_CODES) expect(COUNTRY_RULES[code].code).toBe(code);
  });

  it("interdit avant/après, témoignages et publicité en France et en Belgique", () => {
    for (const code of ["FR", "BE"] as const) {
      expect(COUNTRY_RULES[code]).toMatchObject({
        advertisingAllowed: false,
        beforeAfterAllowed: false,
        testimonialsAllowed: false,
        legalReflectionDays: 15,
        writtenQuoteMandatory: true,
      });
    }
  });

  it("interdit les avant/après en Allemagne", () => {
    expect(COUNTRY_RULES.DE.beforeAfterAllowed).toBe(false);
  });

  it("applique la règle la plus stricte quand plusieurs pays sont concernés", () => {
    expect(strictestRules(["GB", "FR"])).toEqual({
      advertisingAllowed: false,
      beforeAfterAllowed: false,
      testimonialsAllowed: false,
      surgeonPricesAllowed: false,
    });
    expect(strictestRules(["GB"]).beforeAfterAllowed).toBe(true);
  });

  it("n'ouvre que des pays connus", () => {
    for (const code of ACTIVE_COUNTRIES) expect(COUNTRY_CODES).toContain(code);
  });
});
