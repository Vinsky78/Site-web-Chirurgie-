import { describe, expect, it } from "vitest";
import { isValidGaId, shouldTrack } from "./analytics";

describe("analytics", () => {
  it("ne mesure pas le formulaire de demande, l'espace pro ni le design system", () => {
    expect(shouldTrack("/fr/demande")).toBe(false);
    expect(shouldTrack("/en-gb/demande")).toBe(false);
    expect(shouldTrack("/fr/pro")).toBe(false);
    expect(shouldTrack("/fr/design-system")).toBe(false);
  });

  it("mesure les pages publiques", () => {
    expect(shouldTrack("/fr")).toBe(true);
    expect(shouldTrack("/fr/interventions/rhinoplastie")).toBe(true);
    expect(shouldTrack("/fr/chirurgiens")).toBe(true);
  });

  it("valide le format de l'identifiant GA4", () => {
    expect(isValidGaId("G-ABC123XYZ9")).toBe(true);
    expect(isValidGaId("UA-12345-1")).toBe(false);
    expect(isValidGaId("<script>")).toBe(false);
    expect(isValidGaId(undefined)).toBe(false);
  });
});
