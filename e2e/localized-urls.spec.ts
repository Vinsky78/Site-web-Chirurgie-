import { expect, test } from "@playwright/test";

test.describe("adresses traduites par marché", () => {
  test("le parcours britannique reste sur des adresses anglaises", async ({ page }) => {
    await page.goto("/en-gb");
    await page.getByRole("navigation", { name: /main/i }).getByRole("link", { name: /procedures/i }).click();
    await expect(page).toHaveURL(/\/en-gb\/procedures$/);

    await page.getByRole("link", { name: "Tummy tuck (abdominoplasty)" }).click();
    await expect(page).toHaveURL(/\/en-gb\/procedures\/tummy-tuck$/);
    await expect(page.getByRole("heading", { level: 1, name: "Tummy tuck (abdominoplasty)" })).toBeVisible();

    await page.locator("main").getByRole("link", { name: /consultation request/i }).last().click();
    await expect(page).toHaveURL(/\/en-gb\/request\?intervention=abdominoplasty$/);
  });

  test("les alternatives hreflang pointent vers les adresses de chaque marché", async ({ page }) => {
    await page.goto("/fr/interventions/abdominoplastie");
    await expect(page.locator('link[rel="alternate"][hreflang="en-GB"]')).toHaveAttribute(
      "href",
      /\/en-gb\/procedures\/tummy-tuck$/,
    );
  });

  test("le sitemap liste les adresses traduites", async ({ request }) => {
    const sitemap = await (await request.get("/sitemap.xml")).text();
    expect(sitemap).toContain("/en-gb/procedures</loc>");
    expect(sitemap).toContain("/en-gb/information/privacy</loc>");
    expect(sitemap).not.toContain("/en-gb/interventions");
  });
});
