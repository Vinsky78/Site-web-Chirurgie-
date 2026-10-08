import { describe, expect, it } from "vitest";
import { isTracked, pageTemplate } from "./analytics";

describe("mesure d'audience", () => {
  it.each([
    ["/fr", "accueil"],
    ["/fr/interventions", "interventions"],
    ["/en-gb/procedures/rhinoplasty", "fiche"],
    ["/fr/interventions/rhinoplastie/risques", "sous-page"],
    ["/fr/guides/choisir-son-chirurgien", "guide"],
    ["/en-gb/glossary", "lexique"],
    ["/fr/chirurgiens/alice-demo-lyon", "profil"],
    ["/fr/chirurgiens/ville/lyon", "ville"],
    ["/en-gb/surgeons/city/london", "ville"],
    ["/fr/demande", "demande"],
    ["/en-gb/join", "candidature"],
    ["/fr/informations/confidentialite", "information"],
    ["/fr/introuvable", "autre"],
  ])("%s → %s", (pathname, template) => {
    expect(pageTemplate(pathname)).toBe(template);
  });

  it("ne mesure ni l'espace pro ni le lien personnel du patient", () => {
    expect(isTracked("/fr/pro/demandes/12")).toBe(false);
    expect(isTracked("/fr/ma-demande/abc")).toBe(false);
    expect(isTracked("/en-gb/my-request/abc")).toBe(false);
    expect(isTracked("/fr/demande")).toBe(true);
  });
});
