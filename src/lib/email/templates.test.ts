import { describe, expect, it } from "vitest";
import { BrevoSender } from "./brevo";
import { escapeHtml, patientConfirmationEmail, surgeonNewRequestEmail } from "./templates";

describe("gabarits d'e-mails", () => {
  it("confirme au patient sans intervention ni donnée de santé", () => {
    const message = patientConfirmationEmail("fr", {
      email: "camille@example.com",
      firstName: "Camille",
      surgeons: ["Dr Alice Démo", "Dr Chloé Fictif"],
      manageUrl: "https://exemple.fr/fr/ma-demande/abc",
      reflectionDays: 15,
    });
    expect(message.subject).toBe("Votre demande de consultation est enregistrée");
    expect(message.text).toContain("Dr Chloé Fictif");
    expect(message.text).toContain("15 jours");
    expect(message.html).toContain('href="https://exemple.fr/fr/ma-demande/abc"');
    expect(`${message.subject} ${message.text}`).not.toMatch(/rhinoplastie|fum|grossesse|budget/i);
  });

  it("alerte le chirurgien avec la seule catégorie", () => {
    const message = surgeonNewRequestEmail("en-gb", {
      email: "dr@example.com",
      category: "Face",
      proUrl: "https://exemple.fr/en-gb/pro",
    });
    expect(message.text).toContain("(category: Face)");
    expect(message.text).toContain("two-factor");
  });

  it("échappe les valeurs saisies", () => {
    expect(escapeHtml(`<script>"x"&'y'</script>`)).toBe("&lt;script&gt;&quot;x&quot;&amp;&#39;y&#39;&lt;/script&gt;");
    const message = patientConfirmationEmail("fr", {
      email: "a@example.com",
      firstName: "<b>Camille</b>",
      surgeons: [],
      manageUrl: "https://exemple.fr",
      reflectionDays: null,
    });
    expect(message.html).not.toContain("<b>Camille</b>");
  });
});

describe("BrevoSender", () => {
  it("appelle l'API transactionnelle avec la clé et signale un refus", async () => {
    const calls: { url: string; init: RequestInit }[] = [];
    const ok = new BrevoSender("cle", { email: "noreply@exemple.fr", name: "Éclaira" }, (async (url: string, init: RequestInit) => {
      calls.push({ url, init });
      return new Response("{}", { status: 201 });
    }) as typeof fetch);
    const message = surgeonNewRequestEmail("fr", { email: "dr@example.com", category: "Visage", proUrl: "https://x" });
    await ok.send(message);
    expect(calls[0].url).toBe("https://api.brevo.com/v3/smtp/email");
    expect((calls[0].init.headers as Record<string, string>)["api-key"]).toBe("cle");
    expect(JSON.parse(String(calls[0].init.body))).toMatchObject({ to: [{ email: "dr@example.com" }], tags: ["surgeon-new-request"] });

    const refused = new BrevoSender("cle", { email: "a@b.c", name: "x" }, (async () => new Response("", { status: 401 })) as typeof fetch);
    await expect(refused.send(message)).rejects.toThrow("HTTP 401");
  });
});
