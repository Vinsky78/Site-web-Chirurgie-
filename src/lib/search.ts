/** Minuscules sans accents, pour une recherche tolérante (« blepharoplastie » trouve « blépharoplastie »). */
export function normalize(text: string): string {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

/** Vrai si tous les mots de la requête figurent dans l'un des champs. */
export function matches(query: string, fields: string[]): boolean {
  const haystack = normalize(fields.join(" "));
  return normalize(query)
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word));
}
