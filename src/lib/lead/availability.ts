/**
 * Ouverture des demandes (plan de lancement, Phase 7) : pendant la bêta, le
 * site est en ligne mais REQUESTS_PAUSED=1 ferme le formulaire tant que
 * l'annuaire n'a pas assez de chirurgiens vérifiés.
 */
export function requestsPaused(): boolean {
  return process.env.REQUESTS_PAUSED === "1";
}
