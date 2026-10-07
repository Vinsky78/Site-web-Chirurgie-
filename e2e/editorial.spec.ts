import { expect, test } from "@playwright/test";

test.describe("dossiers d'intervention, guides et lexique", () => {
  test("le patient passe de la fiche aux sous-pages par le sommaire du dossier, puis revient", async ({ page }) => {
    await page.goto("/fr/interventions/abdominoplastie");
    const dossier = page.getByRole("navigation", { name: /dans ce dossier/i });
    await expect(dossier.getByText("Vue d'ensemble")).toHaveAttribute("aria-current", "page");

    await dossier.getByRole("link", { name: "Abdominoplastie : les risques" }).click();
    await expect(page).toHaveURL(/\/fr\/interventions\/abdominoplastie\/risques$/);
    await expect(page.getByRole("heading", { level: 1, name: "Abdominoplastie : les risques" })).toBeVisible();
    // Contenu non relu : bandeau visible et page exclue de l'index.
    await expect(page.getByRole("note")).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    // Pas d'appel à l'action sur la page des risques.
    await expect(page.locator("main").getByRole("link", { name: /demande de consultation/i })).toHaveCount(0);

    await page.getByRole("navigation", { name: /dans ce dossier/i }).getByRole("link", { name: /prix/i }).click();
    await expect(page).toHaveURL(/\/fr\/interventions\/abdominoplastie\/prix$/);
    await page.getByRole("navigation", { name: /fil d'ariane/i }).getByRole("link", { name: "Abdominoplastie" }).click();
    await expect(page).toHaveURL(/\/fr\/interventions\/abdominoplastie$/);
  });

  test("les sous-pages ont des adresses et des équivalents propres à chaque marché", async ({ page }) => {
    await page.goto("/fr/interventions/rhinoplastie/avant-de-se-decider");
    await expect(page.locator('link[rel="alternate"][hreflang="en-GB"]')).toHaveAttribute(
      "href",
      /\/en-gb\/procedures\/rhinoplasty\/before-you-decide$/,
    );
    const response = await page.goto("/fr/interventions/rhinoplastie/lyon-inconnu");
    expect(response?.status()).toBe(404);
  });

  test("les guides sont dans la navigation et renvoient vers les fiches citées", async ({ page }) => {
    await page.goto("/fr");
    await page.getByRole("navigation", { name: /principale/i }).getByRole("link", { name: "Guides" }).click();
    await expect(page).toHaveURL(/\/fr\/guides$/);
    await page.getByRole("link", { name: /choisir son chirurgien/i }).click();
    await expect(page).toHaveURL(/\/fr\/guides\/choisir-son-chirurgien$/);
    await expect(page.getByRole("heading", { level: 2, name: "Signaux d'alerte" })).toBeVisible();
    await page.getByRole("link", { name: /comprendre l'intervention : rhinoplastie/i }).click();
    await expect(page).toHaveURL(/\/fr\/interventions\/rhinoplastie$/);
  });

  test("le lexique relie chaque terme aux fiches qui l'emploient", async ({ page }) => {
    await page.goto("/en-gb");
    await page.locator("footer").getByRole("link", { name: "Glossary" }).click();
    await expect(page).toHaveURL(/\/en-gb\/glossary$/);
    await page.getByRole("link", { name: "Seroma", exact: true }).click();
    await expect(page).toHaveURL(/\/en-gb\/glossary\/seroma$/);
    await page.getByRole("link", { name: /tummy tuck/i }).click();
    await expect(page).toHaveURL(/\/en-gb\/procedures\/tummy-tuck$/);
    await expect(page.getByRole("heading", { level: 2, name: "Glossary terms" })).toBeVisible();
  });
});
