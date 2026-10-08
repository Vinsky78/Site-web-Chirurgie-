/** Fichiers servis à la racine par l'application (routes de métadonnées). */
const ROOT_FILES = new Set(["/favicon.ico", "/icon.svg", "/robots.txt", "/sitemap.xml"]);

export function isRootFile(pathname: string): boolean {
  return ROOT_FILES.has(pathname);
}

/**
 * Adresse dont le premier segment ressemble à un fichier (/llms.txt,
 * /apple-touch-icon.png…) : sans ce contrôle, elle serait prise pour une
 * locale et renverrait une 404 nue, sans langue ni mise en page.
 */
export function isStrayFile(pathname: string): boolean {
  const first = pathname.split("/")[1] ?? "";
  return first.includes(".") && !ROOT_FILES.has(pathname);
}
