import { describe, expect, it, vi } from "vitest";
import type { StoredApplication } from "./repository";
import { applicationFromFormData } from "./schema";
import { submitApplication } from "./submit";

const now = new Date("2026-10-08T12:00:00Z");
const valid = {
  fullName: "Dr Claire Martin",
  email: "c.martin@cabinet.example",
  phone: "",
  country: "FR",
  registryNumber: "10101010101",
  specialty: "plastic-surgery",
  city: "Lyon",
  interventions: ["rhinoplasty", "breast-augmentation"],
  languages: ["fr", "en"],
  consent: true,
  website: "",
  startedAt: now.getTime() - 60_000,
};

function deps() {
  const saved: StoredApplication[] = [];
  return { saved, repository: { save: async (a: StoredApplication) => void saved.push(a) }, now };
}

describe("candidature d'un chirurgien", () => {
  it("enregistre une candidature valide sans les champs techniques", async () => {
    const d = deps();
    expect(await submitApplication(valid, "fr", d)).toEqual({ ok: true });
    expect(d.saved).toHaveLength(1);
    expect(d.saved[0]).toEqual({
      fullName: "Dr Claire Martin",
      email: "c.martin@cabinet.example",
      phone: undefined,
      country: "FR",
      registryNumber: "10101010101",
      specialty: "plastic-surgery",
      city: "Lyon",
      interventions: ["rhinoplasty", "breast-augmentation"],
      languages: ["fr", "en"],
      locale: "fr",
    });
  });

  it("refuse une intervention hors de la spécialité déclarée", async () => {
    const result = await submitApplication({ ...valid, specialty: "ent" }, "fr", deps());
    expect(result).toEqual({ ok: false, reason: "invalid", fieldErrors: { interventions: "outsideSpecialty" } });
  });

  it("exige le consentement, un numéro au registre et au moins une intervention", async () => {
    const result = await submitApplication({ ...valid, consent: false, registryNumber: "x", interventions: [] }, "fr", deps());
    expect(result).toMatchObject({
      ok: false,
      fieldErrors: { consent: "consent", registryNumber: "registryNumber", interventions: "interventions" },
    });
  });

  it("écarte les robots : pot de miel rempli ou saisie trop rapide", async () => {
    expect(await submitApplication({ ...valid, website: "spam" }, "fr", deps())).toEqual({ ok: false, reason: "spam" });
    expect(await submitApplication({ ...valid, startedAt: now.getTime() - 1_000 }, "fr", deps())).toEqual({
      ok: false,
      reason: "spam",
    });
  });

  it("signale un stockage indisponible sans planter", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    const repository = { save: async () => Promise.reject(new Error("down")) };
    expect(await submitApplication(valid, "fr", { repository, now })).toEqual({ ok: false, reason: "unavailable" });
  });

  it("lit les cases multiples d'un formulaire", () => {
    const form = new FormData();
    form.append("interventions", "rhinoplasty");
    form.append("interventions", "abdominoplasty");
    form.append("consent", "on");
    expect(applicationFromFormData(form)).toMatchObject({ interventions: ["rhinoplasty", "abdominoplasty"], consent: true });
  });
});
