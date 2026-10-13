import { expect, test } from "@playwright/test";

test.describe("demande de contact", () => {
  test("chaque page propose de nous contacter", async ({ page }) => {
    for (const path of ["/fr", "/fr/guides", "/fr/interventions/rhinoplastie"]) {
      await page.goto(path);
      await expect(page.getByRole("region", { name: "Une question, un projet ?" }).getByRole("link", { name: "Nous contacter" })).toBeVisible();
    }
  });

  test("un projet se transmet en quelques champs et reçoit une confirmation", async ({ page }) => {
    await page.goto("/fr/interventions/rhinoplastie");
    await page.getByRole("region", { name: "Une question, un projet ?" }).getByRole("link", { name: "Nous contacter" }).click();
    await expect(page).toHaveURL(/\/fr\/contact$/);

    await page.getByRole("radio", { name: "J'ai un projet d'intervention" }).check();
    await page.getByLabel("Intervention qui vous intéresse (facultatif)").selectOption("rhinoplasty");
    await page.getByLabel(/Dans quel délai/).selectOption("3to6m");
    await page.getByLabel(/^Prénom/).fill("Camille");
    await page.getByLabel(/^Adresse e-mail/).fill("camille@example.com");
    await page.getByRole("radio", { name: "Par téléphone" }).check();
    await page.getByLabel(/^Téléphone/).fill("06 12 34 56 78");
    await page.getByLabel(/Créneau préféré/).selectOption("morning");
    await page.getByLabel(/J'accepte que mes coordonnées/).check();
    // Durée minimale de saisie (anti-robot).
    await page.waitForTimeout(4200);
    await page.getByRole("button", { name: "Envoyer ma demande" }).click();

    await expect(page.getByRole("heading", { name: "Votre demande est bien envoyée" })).toBeFocused();
  });

  test("les erreurs sont signalées et le formulaire reste rempli", async ({ page }) => {
    await page.goto("/fr/contact?objet=question");
    await page.getByLabel(/^Prénom/).fill("Camille");
    await page.waitForTimeout(4200);
    await page.getByRole("button", { name: "Envoyer ma demande" }).click();
    await expect(page.getByRole("alert").filter({ hasText: "erreurs" })).toBeVisible();
    await expect(page.getByText("Ce champ est obligatoire.").first()).toBeVisible();
    await expect(page.getByLabel(/^Prénom/)).toHaveValue("Camille");
  });

  test("la question depuis une fiche préremplit l'objet et l'intervention", async ({ page }) => {
    await page.goto("/fr/contact?objet=project&intervention=liposuction");
    await expect(page.getByRole("radio", { name: "J'ai un projet d'intervention" })).toBeChecked();
    await expect(page.getByLabel("Intervention qui vous intéresse (facultatif)")).toHaveValue("liposuction");
  });
});
