/** Segment d'URL : minuscules, sans accents, mots séparés par des tirets (« Saint-Étienne » → « saint-etienne »). */
export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
