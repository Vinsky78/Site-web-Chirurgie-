/**
 * Charte éditoriale (Phase 1) : termes promotionnels interdits dans les
 * contenus médicaux (Code de la santé publique R.4127-19 et R.4127-215,
 * CAP Code au Royaume-Uni). Appliquée par les tests sur les fichiers et par
 * le CMS à chaque enregistrement.
 */
export const FORBIDDEN_TERMS: readonly RegExp[] = [
  /\bmeilleur(e|s)?\b/i,
  /résultats? garantis?/i,
  /\bpromo(tion)?\b/i,
  /\boffre\b/i,
  /\bsans risque\b/i,
  /\bindolore\b/i,
  /\bbest\b/i,
  /\brisk-free\b/i,
  /\bpainless\b/i,
  /\bspecial offer\b/i,
];

/** Renvoie les termes interdits trouvés dans le texte (vide si conforme). */
export function findForbiddenTerms(text: string): string[] {
  const found: string[] = [];
  for (const pattern of FORBIDDEN_TERMS) {
    const match = text.match(pattern);
    if (match) found.push(match[0]);
  }
  return found;
}
