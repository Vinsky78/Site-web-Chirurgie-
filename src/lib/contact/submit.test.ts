import { describe, expect, it, vi } from "vitest";
import type { ContactRepository, StoredContact } from "./repository";
import { pushToSheet, SHEET_FIELDS, toSheetRow, newReference } from "./sheet";
import { submitContact } from "./submit";

const now = new Date("2026-10-13T10:00:00Z");
const valid = {
  subject: "project",
  intervention: "rhinoplasty",
  timeframe: "3to6m",
  firstName: "Camille",
  email: "camille@example.com",
  phone: "",
  channel: "email",
  slot: "",
  message: "",
  page: "/fr/interventions/rhinoplastie",
  consent: true,
  website: "",
  startedAt: now.getTime() - 10_000,
};

function memory() {
  const saved: StoredContact[] = [];
  const repository: ContactRepository = { save: async (c) => void saved.push(c) };
  return { saved, repository };
}

describe("submitContact", () => {
  it("enregistre une demande de projet avec une référence", async () => {
    const { saved, repository } = memory();
    const result = await submitContact(valid, "fr", { repository, now, generateReference: () => "C-TEST01" });
    expect(result).toEqual({ ok: true, reference: "C-TEST01" });
    expect(saved[0]).toMatchObject({ subject: "project", intervention: "rhinoplasty", reference: "C-TEST01", locale: "fr" });
    expect(saved[0]).not.toHaveProperty("consent");
    expect(saved[0]).not.toHaveProperty("website");
  });

  it("exige un message hors projet et un téléphone pour être rappelé", async () => {
    const { repository } = memory();
    const result = await submitContact({ ...valid, subject: "question", channel: "phone" }, "fr", { repository, now });
    expect(result).toMatchObject({ ok: false, reason: "invalid", fieldErrors: { message: "required", phone: "phoneRequired" } });
  });

  it("signale toutes les erreurs dès le premier envoi", async () => {
    const { repository } = memory();
    const result = await submitContact({ ...valid, subject: "question", email: "pas-un-email", consent: false }, "fr", { repository, now });
    expect(result).toMatchObject({ ok: false, fieldErrors: { email: "email", consent: "consent", message: "required" } });
  });

  it("ignore l'intervention quand l'objet n'est pas un projet", async () => {
    const { saved, repository } = memory();
    await submitContact({ ...valid, subject: "press", message: "Demande d'interview." }, "fr", { repository, now });
    expect(saved[0].intervention).toBeUndefined();
    expect(saved[0].timeframe).toBeUndefined();
  });

  it("refuse le consentement manquant, le pot de miel et la saisie trop rapide", async () => {
    const { repository } = memory();
    expect(await submitContact({ ...valid, consent: false }, "fr", { repository, now })).toMatchObject({ reason: "invalid" });
    expect(await submitContact({ ...valid, website: "spam" }, "fr", { repository, now })).toEqual({ ok: false, reason: "spam" });
    expect(await submitContact({ ...valid, startedAt: now.getTime() - 500 }, "fr", { repository, now })).toEqual({ ok: false, reason: "spam" });
  });

  it("limite le message à 1 000 caractères", async () => {
    const { repository } = memory();
    const result = await submitContact({ ...valid, subject: "other", message: "a".repeat(1001) }, "fr", { repository, now });
    expect(result).toMatchObject({ ok: false, fieldErrors: { message: "message" } });
  });

  it("signale l'indisponibilité sans perdre l'information", async () => {
    const repository: ContactRepository = { save: async () => Promise.reject(new Error("db")) };
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(await submitContact(valid, "fr", { repository, now })).toEqual({ ok: false, reason: "unavailable" });
    spy.mockRestore();
  });
});

describe("synchronisation Google Sheets", () => {
  const contact: StoredContact = {
    subject: "project",
    intervention: "rhinoplasty",
    timeframe: "3to6m",
    firstName: "Camille",
    email: "camille@example.com",
    phone: undefined,
    channel: "email",
    page: undefined,
    message: "Antécédent médical à ne jamais envoyer",
    locale: "fr",
    reference: "C-TEST01",
  };
  const meta = { reference: "C-TEST01", receivedAt: now, adminUrl: "https://exemple.fr/admin" };

  it("n'envoie jamais l'intervention ni le message (données de santé possibles)", () => {
    const row = toSheetRow(contact, meta);
    expect(Object.keys(row).sort()).toEqual([...SHEET_FIELDS].sort());
    expect(JSON.stringify(row)).not.toContain("rhinoplasty");
    expect(JSON.stringify(row)).not.toContain("Antécédent");
  });

  it("ne fait rien sans configuration", async () => {
    const fetcher = vi.fn();
    expect(await pushToSheet(toSheetRow(contact, meta), {}, fetcher)).toBe("skipped");
    expect(fetcher).not.toHaveBeenCalled();
  });

  it("envoie la ligne avec le jeton et détecte un refus", async () => {
    const ok = vi.fn().mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    expect(await pushToSheet(toSheetRow(contact, meta), { url: "https://script.example/exec", token: "secret" }, ok)).toBe("sent");
    expect(JSON.parse(ok.mock.calls[0][1].body)).toMatchObject({ token: "secret", row: { reference: "C-TEST01" } });

    const refused = vi.fn().mockResolvedValue(new Response(JSON.stringify({ ok: false, error: "unauthorized" }), { status: 200 }));
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(await pushToSheet(toSheetRow(contact, meta), { url: "https://script.example/exec", token: "bad" }, refused)).toBe("failed");
    spy.mockRestore();
  });

  it("produit des références courtes et lisibles", () => {
    expect(newReference()).toMatch(/^C-[2-9A-HJKMNP-Z]{6}$/);
  });
});
