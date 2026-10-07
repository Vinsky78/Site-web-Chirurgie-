import { expect, test } from "@playwright/test";

test.describe("formulaire de demande", () => {
  test("parcours complet d'une demande valide", async ({ page }) => {
    await page.goto("/fr/interventions/abdominoplastie");
    await expect(page.getByRole("heading", { level: 1, name: "Abdominoplastie" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Risques et complications" })).toBeVisible();

    await page.getByRole("link", { name: "Préparer une demande de consultation" }).last().click();
    await expect(page.getByLabel("Intervention envisagée")).toHaveValue("abdominoplasty");

    await page.getByLabel("Ville ou région souhaitée").fill("Lyon");
    await page.getByRole("radio", { name: "3 à 6 mois" }).check();
    await page.getByRole("radio", { name: "Je préfère ne pas répondre" }).check();
    await page.getByRole("button", { name: "Continuer" }).click();

    await expect(page.getByRole("heading", { name: "Quelques questions médicales" })).toBeFocused();
    await page.getByRole("group", { name: "Fumez-vous ?" }).getByRole("radio", { name: "Non" }).check();
    await page.getByRole("group", { name: /déjà été opéré/ }).getByRole("radio", { name: "Non" }).check();
    await page.getByRole("group", { name: /grossesse/ }).getByRole("radio", { name: "Non" }).check();
    await page.getByRole("button", { name: "Continuer" }).click();

    await expect(page.getByRole("heading", { name: "Un temps de réflexion" })).toBeVisible();
    await page.getByRole("button", { name: "Continuer" }).click();

    // Étape 4 : chirurgiens publiés pratiquant l'abdominoplastie, ceux de Lyon en premier.
    await expect(page.getByRole("heading", { name: "Choisir vos chirurgiens" })).toBeFocused();
    const picker = page.getByRole("group", { name: "Chirurgiens qui recevront votre demande" });
    await expect(picker.getByRole("checkbox")).toHaveCount(2);
    await expect(picker.getByRole("checkbox").first()).toHaveAccessibleName("Dr Bruno Essai");
    await expect(picker.getByText("Dr Félix Attente")).toHaveCount(0); // non vérifié
    await page.getByRole("button", { name: "Continuer" }).click();
    await expect(page.getByText("Choisissez au moins un chirurgien.").first()).toBeVisible();
    await picker.getByLabel("Dr Bruno Essai").check();
    await page.getByRole("button", { name: "Continuer" }).click();

    await page.getByLabel("Prénom").fill("Camille");
    await page.getByLabel("Adresse e-mail").fill("camille@example.com");
    await page.getByLabel("Année de naissance").fill("1990");
    await page.getByLabel("Je certifie avoir 18 ans ou plus.").check();
    await page.getByLabel(/J'accepte que les informations de santé/).check();
    await page.waitForTimeout(4000); // durée minimale anti-robot
    await page.getByRole("button", { name: "Envoyer ma demande" }).click();

    await expect(page.getByRole("heading", { name: "Votre demande est enregistrée" })).toBeVisible();
  });

  test("présélectionne le chirurgien depuis sa fiche et limite le choix à trois", async ({ page }) => {
    await page.goto("/fr/chirurgiens/alice-demo-lyon");
    await page.getByRole("link", { name: "Préparer une demande de consultation" }).last().click();
    await page.waitForURL(/surgeon=alice-demo-lyon/);

    await page.getByLabel("Intervention envisagée").selectOption("rhinoplasty");
    await page.getByLabel("Ville ou région souhaitée").fill("Lyon");
    await page.getByRole("radio", { name: "3 à 6 mois" }).check();
    await page.getByRole("radio", { name: "Je préfère ne pas répondre" }).check();
    await page.getByRole("button", { name: "Continuer" }).click();
    await page.getByRole("group", { name: "Fumez-vous ?" }).getByRole("radio", { name: "Non" }).check();
    await page.getByRole("group", { name: /déjà été opéré/ }).getByRole("radio", { name: "Non" }).check();
    await page.getByRole("button", { name: "Continuer" }).click();
    await page.getByRole("button", { name: "Continuer" }).click();

    const picker = page.getByRole("group", { name: "Chirurgiens qui recevront votre demande" });
    await expect(picker.getByLabel("Dr Alice Démo")).toBeChecked();
    await picker.getByLabel("Dr Chloé Fictif").check();
    await picker.getByLabel("Dr David Test").check();
    await expect(page.getByText(/le maximum/)).toBeVisible();
  });

  test("affiche les erreurs et refuse une personne mineure", async ({ page }) => {
    await page.goto("/fr/demande?intervention=rhinoplasty");
    await page.getByRole("button", { name: "Continuer" }).click();
    await expect(page.getByRole("alert").filter({ hasText: "erreurs" })).toBeVisible();

    await page.getByLabel("Ville ou région souhaitée").fill("Paris");
    await page.getByRole("radio", { name: "Moins de 3 mois" }).check();
    await page.getByRole("radio", { name: "Je préfère ne pas répondre" }).check();
    await page.getByRole("button", { name: "Continuer" }).click();
    await page.getByRole("group", { name: "Fumez-vous ?" }).getByRole("radio", { name: "Non" }).check();
    await page.getByRole("group", { name: /déjà été opéré/ }).getByRole("radio", { name: "Non" }).check();
    await page.getByRole("button", { name: "Continuer" }).click();
    await page.getByRole("button", { name: "Continuer" }).click();
    await page.getByLabel("Dr David Test").check();
    await page.getByRole("button", { name: "Continuer" }).click();

    await page.getByLabel("Année de naissance").fill(String(new Date().getFullYear() - 16));
    await page.getByRole("button", { name: "Envoyer ma demande" }).click();
    await expect(page.getByText("moins de 18 ans")).toBeVisible();
  });
});
