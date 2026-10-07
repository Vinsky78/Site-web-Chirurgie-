import { expect, test } from "@playwright/test";

test.describe("espace pro et back-office", () => {
  test("l'espace pro renvoie vers une connexion accessible", async ({ page }) => {
    await page.goto("/fr/pro");
    await expect(page).toHaveURL(/\/fr\/pro\/connexion$/);
    await expect(page.getByRole("heading", { level: 1, name: "Connexion à l'espace professionnel" })).toBeVisible();
    await expect(page.getByLabel("Adresse e-mail professionnelle")).toHaveAttribute("autocomplete", "username");
    await expect(page.getByLabel("Mot de passe")).toHaveAttribute("type", "password");
    expect(await page.locator('meta[name="robots"]').getAttribute("content")).toContain("noindex");
  });

  test("les adresses anglaises de l'espace pro sont traduites", async ({ page }) => {
    await page.goto("/en-gb/pro");
    await expect(page).toHaveURL(/\/en-gb\/pro\/sign-in$/);
    await expect(page.getByRole("heading", { level: 1, name: "Sign in to the professional area" })).toBeVisible();
  });

  test("le back-office exige la double authentification", async ({ page, request }) => {
    await page.goto("/admin");
    await expect(page).toHaveURL(/\/fr\/pro\/connexion\?next=%2Fadmin$/);

    const login = await request.post("/api/users/login", { data: { email: "admin@example.com", password: "x" } });
    expect(login.status()).toBe(401);
  });
});
