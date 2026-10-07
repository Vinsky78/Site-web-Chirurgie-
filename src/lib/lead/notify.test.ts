import { describe, expect, it } from "vitest";
import type { EmailMessage } from "@/lib/email";
import { notifyNewLead } from "./notify";
import type { StoredLead } from "./repository";

const lead = {
  id: "id",
  locale: "fr",
  createdAt: "2026-10-07T12:00:00.000Z",
  interventionId: "rhinoplasty",
  country: "FR",
  city: "Lyon",
  timeframe: "3to6m",
  budget: "unknown",
  smoker: "yes",
  previousSurgerySameArea: "no",
  firstName: "Camille",
  email: "camille@example.com",
  birthYear: 1990,
  isAdult: true,
  consentHealthData: true,
  consentNewsletter: false,
  surgeons: ["alice-demo-lyon", "chloe-fictif-lyon"],
  manageToken: "jeton",
} satisfies StoredLead;

describe("notifyNewLead", () => {
  it("confirme au patient et alerte chaque compte pro, même si un envoi échoue", async () => {
    const sent: EmailMessage[] = [];
    await notifyNewLead(lead, "fr", {
      sender: {
        send: async (message) => {
          if (message.to.email === "assistant@example.com") throw new Error("refusé");
          sent.push(message);
        },
      },
      surgeonNames: async () => ["Dr Alice Démo", "Dr Chloé Fictif"],
      proEmails: async () => ["alice@example.com", "assistant@example.com", "chloe@example.com"],
      category: async () => "Visage",
      manageUrl: (token) => `https://exemple.fr/fr/ma-demande/${token}`,
      proUrl: "https://exemple.fr/fr/pro",
      reflectionDays: 15,
    });

    expect(sent.map((m) => m.to.email).sort()).toEqual(["alice@example.com", "camille@example.com", "chloe@example.com"]);
    const patient = sent.find((m) => m.to.email === "camille@example.com")!;
    expect(patient.text).toContain("https://exemple.fr/fr/ma-demande/jeton");
    // Aucun e-mail ne contient l'intervention ni les réponses médicales.
    for (const message of sent) expect(message.text).not.toMatch(/rhinoplast|Camille.*fum|Lyon/i);
  });
});
