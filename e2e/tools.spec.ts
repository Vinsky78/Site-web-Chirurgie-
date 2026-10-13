import { expect, test } from "@playwright/test";

test.describe("outils : recherche et comparateur", () => {
  test("la recherche trouve une intervention sans accents et mène à sa fiche", async ({ page }) => {
    await page.goto("/fr/recherche");
    await page.getByLabel("Votre recherche").fill("blepharo");
    await page.getByRole("button", { name: "Rechercher" }).click();
    await expect(page).toHaveURL(/\/fr\/recherche\?q=blepharo$/);
    await page.locator("main").getByRole("link", { name: /Blépharoplastie/ }).first().click();
    await expect(page).toHaveURL(/\/fr\/interventions\/blepharoplastie$/);
  });

  test("le comparateur affiche deux interventions côte à côte", async ({ page }) => {
    await page.goto("/fr/comparateur");
    await page.getByLabel("Intervention 1").selectOption("rhinoplasty");
    await page.getByLabel("Intervention 2").selectOption("abdominoplasty");
    await page.getByRole("button", { name: "Comparer" }).click();
    const table = page.getByRole("table");
    await expect(table.getByRole("columnheader", { name: "Rhinoplastie" })).toBeVisible();
    await expect(table.getByRole("rowheader", { name: "Anesthésie" })).toBeVisible();
  });

  test("les outils ne sont pas indexés et gardent des adresses anglaises au Royaume-Uni", async ({ page }) => {
    await page.goto("/en-gb/search?q=scar");
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await page.goto("/en-gb/compare");
    await expect(page.getByRole("heading", { level: 1, name: "Compare procedures" })).toBeVisible();
  });

  test("le menu des interventions s'ouvre et mène à une fiche", async ({ page }) => {
    await page.goto("/fr");
    const nav = page.getByRole("navigation", { name: /principale/i });
    await nav.getByRole("button", { name: "Interventions" }).click();
    await nav.getByRole("link", { name: "Rhinoplastie" }).click();
    await expect(page).toHaveURL(/\/fr\/interventions\/rhinoplastie$/);
    await expect(nav.getByRole("link", { name: "Rhinoplastie" })).toBeHidden();
  });
});
