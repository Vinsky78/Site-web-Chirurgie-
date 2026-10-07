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

test.describe("mots de passe et lien patient", () => {
  test("mot de passe oublié : formulaire accessible depuis la connexion", async ({ page }) => {
    await page.goto("/fr/pro/connexion");
    await page.getByRole("link", { name: "Mot de passe oublié ?" }).click();
    await expect(page.getByRole("heading", { level: 1, name: "Mot de passe oublié" })).toBeVisible();
    await expect(page.getByLabel("Adresse e-mail professionnelle")).toBeVisible();
  });

  test("un lien de mot de passe incomplet propose d'en demander un autre", async ({ page }) => {
    await page.goto("/fr/pro/mot-de-passe/nouveau");
    await expect(page.getByText("Ce lien est incomplet.")).toBeVisible();
  });

  test("un lien patient inconnu ne révèle rien et ne fuit pas dans le Referer", async ({ page }) => {
    const response = await page.goto("/fr/ma-demande/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    expect(response?.status()).toBe(404);
    expect(response?.headers()["referrer-policy"]).toBe("no-referrer");
  });
});
