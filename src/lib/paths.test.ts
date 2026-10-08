import { describe, expect, it } from "vitest";
import { isRootFile, isStrayFile } from "./paths";

describe("adresses ressemblant à des fichiers", () => {
  it.each(["/llms.txt", "/apple-touch-icon.png", "/wp-login.php", "/foo.txt/interventions"])("%s renvoie vers la 404", (path) => {
    expect(isStrayFile(path)).toBe(true);
  });

  it.each(["/favicon.ico", "/icon.svg", "/robots.txt", "/sitemap.xml"])("%s reste servi par l'application", (path) => {
    expect(isRootFile(path)).toBe(true);
    expect(isStrayFile(path)).toBe(false);
  });

  it.each(["/fr", "/fr/interventions/rhinoplastie", "/en-gb/procedures", "/"])("%s n'est pas concerné", (path) => {
    expect(isStrayFile(path)).toBe(false);
  });
});
