import { expect, test } from "@playwright/test";

// Chirurgiens fictifs (DIRECTORY_FIXTURES=1 dans playwright.config.ts).
test.describe("annuaire des chirurgiens", () => {
  test("liste les seuls profils vérifiés, filtre et ouvre un profil", async ({ page }) => {
    await page.goto("/fr/chirurgiens");
    await expect(page.getByRole("heading", { level: 1, name: "Chirurgiens vérifiés" })).toBeVisible();
    await expect(page.getByRole("status")).toHaveText("4 chirurgiens");
    // Vérification expirée ou en attente : jamais affichés.
    await expect(page.getByText("Dr Emma Périmé")).toHaveCount(0);
    await expect(page.getByText("Dr Félix Attente")).toHaveCount(0);

    await page.getByLabel("Intervention").selectOption("abdominoplasty");
    await page.getByRole("button", { name: "Afficher" }).click();
    await expect(page).toHaveURL(/intervention=abdominoplasty/);
    await expect(page.getByRole("status")).toHaveText("2 chirurgiens");

    await page.getByRole("link", { name: "Dr Bruno Essai" }).click();
    await expect(page).toHaveURL(/\/fr\/chirurgiens\/bruno-essai-lyon$/);
    await expect(page.getByRole("heading", { level: 1, name: "Dr Bruno Essai" })).toBeVisible();
    await expect(page.getByText(/Qualification vérifiée le/)).toBeVisible();
    await expect(page.getByRole("link", { name: "Vérifier vous-même sur le registre officiel" })).toHaveAttribute(
      "href",
      "https://annuaire.sante.fr/",
    );
  });

  test("ouvre une page ville à partir de trois chirurgiens seulement", async ({ page }) => {
    await page.goto("/fr/chirurgiens");
    await page.getByRole("link", { name: "Lyon (3)" }).click();
    await expect(page).toHaveURL(/\/fr\/chirurgiens\/ville\/lyon$/);
    await expect(page.getByRole("heading", { level: 1, name: "Chirurgiens vérifiés à Lyon" })).toBeVisible();

    const paris = await page.goto("/fr/chirurgiens/ville/paris");
    expect(paris?.status()).toBe(404);
  });

  test("un profil non publié renvoie une 404", async ({ page }) => {
    const response = await page.goto("/fr/chirurgiens/emma-perime-paris");
    expect(response?.status()).toBe(404);
  });

  test("l'annuaire britannique, encore vide, n'est pas indexé", async ({ page }) => {
    await page.goto("/en-gb/surgeons");
    await expect(page.getByText("The UK directory is being built.")).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  });
});
