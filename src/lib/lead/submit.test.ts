import { describe, expect, it } from "vitest";
import { submitLead } from "./submit";
import type { LeadRepository, StoredLead } from "./repository";

const NOW = new Date("2026-10-07T12:00:00Z");

function validInput(overrides: Record<string, unknown> = {}) {
  return {
    interventionId: "rhinoplasty",
    country: "FR",
    city: "Lyon",
    timeframe: "3to6m",
    budget: "3to6k",
    smoker: "no",
    previousSurgerySameArea: "no",
    firstName: "Camille",
    email: "camille@example.com",
    birthYear: 1990,
    isAdult: true,
    consentHealthData: true,
    consentNewsletter: false,
    website: "",
    startedAt: NOW.getTime() - 60_000,
    ...overrides,
  };
}

function memoryRepo() {
  const saved: StoredLead[] = [];
  const repository: LeadRepository = { save: async (lead) => void saved.push(lead) };
  return { saved, repository };
}

describe("submitLead", () => {
  it("enregistre une demande valide sans les champs anti-spam", async () => {
    const { saved, repository } = memoryRepo();
    const result = await submitLead(validInput(), "fr", { repository, now: NOW, generateId: () => "id-1" });

    expect(result).toEqual({ ok: true });
    expect(saved).toHaveLength(1);
    expect(saved[0]).toMatchObject({ id: "id-1", locale: "fr", interventionId: "rhinoplasty" });
    expect(saved[0]).not.toHaveProperty("website");
    expect(saved[0]).not.toHaveProperty("startedAt");
  });

  it("refuse une personne mineure", async () => {
    const { saved, repository } = memoryRepo();
    const result = await submitLead(validInput({ birthYear: 2010 }), "fr", { repository, now: NOW });
    expect(result).toEqual({ ok: false, reason: "underage" });
    expect(saved).toHaveLength(0);
  });

  it("refuse sans case « 18 ans ou plus »", async () => {
    const { repository } = memoryRepo();
    const result = await submitLead(validInput({ isAdult: false }), "fr", { repository, now: NOW });
    expect(result).toMatchObject({ ok: false, reason: "invalid", fieldErrors: { isAdult: "isAdult" } });
  });

  it("exige le consentement explicite au traitement des données de santé", async () => {
    const { repository } = memoryRepo();
    const result = await submitLead(validInput({ consentHealthData: false }), "fr", { repository, now: NOW });
    expect(result).toMatchObject({ ok: false, fieldErrors: { consentHealthData: "consentHealthData" } });
  });

  it("exige la question grossesse pour une abdominoplastie", async () => {
    const { repository } = memoryRepo();
    const result = await submitLead(validInput({ interventionId: "abdominoplasty" }), "fr", { repository, now: NOW });
    expect(result).toMatchObject({ ok: false, fieldErrors: { pregnancyPlanned: "required" } });
  });

  it("ne conserve pas la réponse grossesse quand elle n'est pas pertinente", async () => {
    const { saved, repository } = memoryRepo();
    await submitLead(validInput({ pregnancyPlanned: "yes" }), "fr", { repository, now: NOW });
    expect(saved[0].pregnancyPlanned).toBeUndefined();
  });

  it("rejette un pays non ouvert", async () => {
    const { repository } = memoryRepo();
    const result = await submitLead(validInput({ country: "DE" }), "fr", { repository, now: NOW });
    expect(result).toMatchObject({ ok: false, fieldErrors: { country: "required" } });
  });

  it("détecte le pot de miel et les soumissions trop rapides", async () => {
    const { saved, repository } = memoryRepo();
    expect(await submitLead(validInput({ website: "http://spam" }), "fr", { repository, now: NOW })).toEqual({
      ok: false,
      reason: "spam",
    });
    expect(await submitLead(validInput({ startedAt: NOW.getTime() - 500 }), "fr", { repository, now: NOW })).toEqual({
      ok: false,
      reason: "spam",
    });
    expect(saved).toHaveLength(0);
  });

  it("signale l'indisponibilité du stockage sans perdre l'erreur", async () => {
    const repository: LeadRepository = {
      save: async () => {
        throw new Error("down");
      },
    };
    const result = await submitLead(validInput(), "fr", { repository, now: NOW });
    expect(result).toEqual({ ok: false, reason: "unavailable" });
  });
});
