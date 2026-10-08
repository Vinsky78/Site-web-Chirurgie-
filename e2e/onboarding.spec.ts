import { expect, test, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/** Candidature des chirurgiens (Phase 7), stockée en mémoire pendant les tests. */
async function fillApplication(page: Page, { specialty }: { specialty: string }) {
  await page.getByLabel("Nom complet, tel qu'inscrit au registre").fill("Dr Test Candidat");
  await page.getByLabel("Adresse e-mail professionnelle").fill("candidat@cabinet.example");
  await page.getByLabel("Numéro au registre officiel").fill("10101010101");
  await page.getByLabel("Spécialité").selectOption({ label: specialty });
  await page.getByLabel("Ville d'exercice").fill("Lyon");
  await page.getByRole("group", { name: "Interventions que vous pratiquez" }).getByLabel(/rhinoplastie/i).check();
  await page.getByRole("group", { name: "Interventions que vous pratiquez" }).getByLabel(/augmentation mammaire/i).check();
  await page.getByRole("group", { name: "Langues de consultation" }).getByLabel(/français/i).check();
  await page.getByLabel(/J'accepte que ces informations/).check();
}

test.describe("candidature d'un chirurgien", () => {
  test("une candidature complète est envoyée", async ({ page }) => {
    await page.goto("/fr/rejoindre");
    await expect(page.getByLabel("Pays d'exercice")).toHaveValue("FR");
    await fillApplication(page, { specialty: "Chirurgie plastique, reconstructrice et esthétique" });
    await page.waitForTimeout(4000); // durée minimale anti-robot
    await page.getByRole("button", { name: "Envoyer ma candidature" }).click();
    await expect(page.getByRole("heading", { name: "Candidature envoyée" })).toBeFocused();
  });

  test("une intervention hors spécialité est refusée, saisie conservée et page conforme", async ({ page }) => {
    await page.goto("/fr/rejoindre");
    await fillApplication(page, { specialty: "ORL et chirurgie cervico-faciale" });
    await page.waitForTimeout(4000);
    await page.getByRole("button", { name: "Envoyer ma candidature" }).click();
    await expect(page.getByRole("alert").filter({ hasText: "Certains champs sont à corriger." })).toBeFocused();
    await expect(page.getByText("Une ou plusieurs interventions ne relèvent pas de la spécialité choisie.")).toBeVisible();
    await expect(page.getByLabel("Ville d'exercice")).toHaveValue("Lyon");
    const { violations } = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    expect(violations.map((v) => v.id)).toEqual([]);
  });

  test("la page existe au Royaume-Uni et la connexion pro y renvoie", async ({ page }) => {
    await page.goto("/en-gb/pro/sign-in");
    await page.getByRole("link", { name: "Apply to join" }).click();
    await expect(page).toHaveURL(/\/en-gb\/join$/);
    await expect(page.getByLabel("Country of practice")).toHaveValue("GB");
  });
});
