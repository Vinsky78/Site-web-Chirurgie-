/** Minuscules sans accents, pour une recherche tolérante (« blepharo » trouve « blépharoplastie »). */
export function normalize(text: string): string {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

/** Vrai si chaque mot de la requête figure dans au moins un des champs. Une requête vide ne trouve rien. */
export function matches(query: string, fields: string[]): boolean {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  if (words.length === 0) return false;
  const haystack = normalize(fields.join(" "));
  return words.every((word) => haystack.includes(word));
}
