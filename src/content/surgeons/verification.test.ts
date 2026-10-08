import { describe, expect, it } from "vitest";
import { COUNTRY_CODES } from "@/lib/countries";
import { INTERVENTION_IDS } from "../types";
import {
  COUNTRY_VERIFICATION,
  interventionsOutsideSpecialty,
  SPECIALTIES_BY_INTERVENTION,
  VERIFICATION_CHECKS,
  verificationBlockers,
  verificationGuide,
} from "./verification";

const now = new Date("2026-10-08T12:00:00Z");
const allChecks = Object.fromEntries(VERIFICATION_CHECKS.map((check) => [check, true]));

describe("contrôles par pays", () => {
  it.each(COUNTRY_CODES)("%s a un registre en https, un titre et une autorisation à contrôler", (country) => {
    const { registry, specialtyTitle, facility } = COUNTRY_VERIFICATION[country];
    expect(registry.url).toMatch(/^https:\/\//);
    expect(specialtyTitle.length).toBeGreaterThan(5);
    expect(facility.length).toBeGreaterThan(5);
    expect(verificationGuide(country)).toContain(registry.url);
  });

  it("aucun blocage quand tout est coché et l'assurance valide", () => {
    expect(verificationBlockers({ checks: allChecks, insuranceExpiresAt: "2027-01-01" }, now)).toEqual([]);
  });

  it("liste chaque contrôle manquant", () => {
    const blockers = verificationBlockers({ checks: { registryIdentity: true }, insuranceExpiresAt: "2027-01-01" }, now);
    expect(blockers).toHaveLength(VERIFICATION_CHECKS.length - 1);
  });

  it("bloque une assurance absente ou expirée", () => {
    expect(verificationBlockers({ checks: allChecks }, now)).toEqual(["Date d'expiration de l'assurance manquante."]);
    expect(verificationBlockers({ checks: allChecks, insuranceExpiresAt: "2026-10-08" }, now)).toEqual(["L'assurance est expirée."]);
  });
});

describe("interventions et spécialité", () => {
  it("chaque intervention admet la chirurgie plastique", () => {
    for (const id of INTERVENTION_IDS) expect(SPECIALTIES_BY_INTERVENTION[id]).toContain("plastic-surgery");
  });

  it("refuse une augmentation mammaire déclarée par un ORL, accepte sa rhinoplastie", () => {
    expect(interventionsOutsideSpecialty("ent", ["rhinoplasty", "breast-augmentation"])).toEqual(["breast-augmentation"]);
  });
});
