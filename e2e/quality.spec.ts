import { expect, test, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/**
 * Contrôles de la Phase 6, sur un exemplaire de chaque gabarit de page :
 * accessibilité (WCAG 2.2 AA, axe-core), balises SEO et budget de poids.
 */
const PAGES = [
  "/fr",
  "/en-gb",
  "/fr/interventions",
  "/fr/interventions/rhinoplastie",
  "/fr/interventions/rhinoplastie/risques",
  "/en-gb/procedures/tummy-tuck/cost",
  "/fr/guides",
  "/fr/guides/choisir-son-chirurgien",
  "/fr/lexique",
  "/en-gb/glossary/seroma",
  "/fr/chirurgiens",
  "/fr/demande",
  "/fr/informations/confidentialite",
  "/fr/pro/connexion",
  "/fr/page-inexistante",
];

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

async function axeViolations(page: Page) {
  const { violations } = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();
  return violations.map((v) => `${v.id} (${v.impact}) : ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`);
}

test.describe("accessibilité WCAG 2.2 AA", () => {
  for (const path of PAGES) {
    test(`${path} : aucune violation axe`, async ({ page }) => {
      await page.goto(path);
      expect(await axeViolations(page)).toEqual([]);
    });
  }

  test("chaque étape du formulaire reste conforme, erreurs affichées comprises", async ({ page }) => {
    await page.goto("/fr/demande");
    await page.getByRole("button", { name: /continuer/i }).click();
    await expect(page.getByRole("alert").filter({ hasText: /erreur/ })).toBeFocused();
    expect(await axeViolations(page)).toEqual([]);
  });

  test("le contenu se réorganise sans défilement horizontal à 320 px (WCAG 1.4.10)", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 640 });
    for (const path of ["/fr", "/fr/interventions/rhinoplastie/prix", "/fr/demande", "/fr/lexique", "/fr/chirurgiens"]) {
      await page.goto(path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, path).toBeLessThanOrEqual(0);
    }
  });

  test("le lien d'évitement mène au contenu principal au clavier", async ({ page }) => {
    await page.goto("/fr/guides");
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Aller au contenu principal" });
    await expect(skip).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("main#contenu")).toBeFocused();
  });
});

test.describe("SEO technique", () => {
  test("chaque page indexable a sa langue, un seul h1, une canonique, une description et ses balises de partage", async ({
    page,
  }) => {
    for (const path of PAGES.filter((p) => !p.includes("inexistante") && !p.includes("/pro/"))) {
      await page.goto(path);
      await expect(page.locator("html"), path).toHaveAttribute("lang", /^(fr|en-gb)$/);
      await expect(page.locator("h1"), path).toHaveCount(1);
      await expect(page.locator('link[rel="canonical"]'), path).toHaveCount(1);
      await expect(page.locator('meta[name="description"]'), path).toHaveAttribute("content", /.{50,}/);
      await expect(page.locator('meta[property="og:title"]'), path).toHaveCount(1);
      await expect(page.locator('meta[property="og:image"]'), path).toHaveCount(1);
    }
  });

  test("les descriptions des pages publiques sont toutes différentes", async ({ request }) => {
    const descriptions = new Map<string, string>();
    for (const path of PAGES.filter((p) => !p.includes("inexistante") && !p.includes("/pro/"))) {
      const html = await (await request.get(path)).text();
      const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
      expect(descriptions.get(description), `${path} reprend la description de ${descriptions.get(description)}`).toBeUndefined();
      descriptions.set(description, path);
    }
  });

  test("une adresse ressemblant à un fichier renvoie la 404 du site, pas une erreur", async ({ page }) => {
    const response = await page.goto("/llms.txt");
    expect(response?.status()).toBe(404);
    await expect(page.locator("html")).toHaveAttribute("lang", "fr");
    await expect(page.getByRole("heading", { level: 1, name: "Page introuvable" })).toBeVisible();
  });

  test("les pages publiques n'imposent pas de relance de navigation (Critical-CH)", async ({ request }) => {
    const response = await request.get("/fr");
    expect(response.headers()["critical-ch"]).toBeUndefined();
  });
});

test.describe("budget de poids (Core Web Vitals)", () => {
  /** Kilo-octets compressés téléchargés au premier affichage, marge d'environ 10 % sur l'état actuel. */
  const BUDGETS: Record<string, { js: number; fonts: number }> = {
    "/fr": { js: 175, fonts: 110 },
    "/fr/interventions/rhinoplastie": { js: 175, fonts: 110 },
    // Schéma de validation (Zod) compris : chargé après l'affichage, il ne retarde pas le premier rendu.
    "/fr/demande": { js: 205, fonts: 110 },
  };

  for (const [path, budget] of Object.entries(BUDGETS)) {
    test(`${path} : JavaScript et polices dans le budget`, async ({ page }) => {
      const sizes = { js: 0, fonts: 0 };
      page.on("requestfinished", async (request) => {
        const type = request.resourceType();
        if (type !== "script" && type !== "font") return;
        const { responseBodySize, responseHeadersSize } = await request.sizes();
        sizes[type === "script" ? "js" : "fonts"] += (responseBodySize + responseHeadersSize) / 1024;
      });
      await page.goto(path, { waitUntil: "networkidle" });
      expect(Math.round(sizes.js), "Ko de JavaScript").toBeLessThanOrEqual(budget.js);
      expect(Math.round(sizes.fonts), "Ko de polices").toBeLessThanOrEqual(budget.fonts);
      // Une seule police préchargée : le texte courant (élément LCP le plus fréquent).
      await expect(page.locator('link[rel="preload"][as="font"]')).toHaveCount(1);
    });
  }
});
