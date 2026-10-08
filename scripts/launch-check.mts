/**
 * Contrôle de mise en production (npm run launch:check), à lancer dans
 * l'environnement de production avant chaque ouverture. Code de sortie 1 en
 * cas d'erreur bloquante. Les valeurs des secrets ne sont jamais affichées.
 */
import { checkLaunchReadiness } from "../src/lib/launch/readiness";

const { errors, warnings } = checkLaunchReadiness(process.env);
for (const error of errors) console.log(`✗ ${error}`);
for (const warning of warnings) console.log(`! ${warning}`);
console.log(errors.length === 0 ? "\nPrêt pour la mise en production." : `\n${errors.length} erreur(s) bloquante(s).`);
process.exit(errors.length === 0 ? 0 : 1);
