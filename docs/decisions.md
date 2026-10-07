# Décisions

Décisions prises en Phase 1 (stratégie et conformité) et appliquées dans le code.
Le rapport complet est dans le document « Phase 1 – Stratégie et conformité » du projet.

| # | Décision | Où dans le code |
| --- | --- | --- |
| 1 | Modèle économique : abonnement fixe des chirurgiens, aucune rémunération par lead ou par patient. Le patient choisit lui-même 1 à 3 chirurgiens. | Pages `informations/methodologie`, écran de fin du formulaire |
| 2 | Lancement en France ; le Royaume-Uni est préparé (contenus en-gb). | `src/i18n/routing.ts`, `ACTIVE_COUNTRIES` dans `src/lib/countries.ts` |
| 3 | Règles de publicité par pays appliquées dans le code (avant/après, témoignages, prix par praticien). | `src/lib/countries.ts` |
| 4 | Délai de réflexion et devis affichés sur chaque fiche selon le pays. | `src/components/LegalBox.tsx` |
| 5 | Contenu non relu par un chirurgien : bandeau + `noindex` + exclu du sitemap. | `src/content/interventions/index.ts`, page intervention, `src/app/sitemap.ts` |
| 6 | Formulaire minimal (RGPD art. 5 et 9) : questions fermées, pas de texte libre médical, pas de photo, année de naissance seule. | `src/lib/lead/schema.ts` |
| 7 | Refus des moins de 18 ans dans tous les pays. | `src/lib/lead/schema.ts` |
| 8 | Étape de réflexion (dysmorphophobie) : réponses jamais enregistrées ni envoyées. | `src/app/[locale]/demande/RequestForm.tsx` |
| 9 | Pas de stockage en production tant que la base chez un hébergeur certifié HDS n'est pas en place. | `src/lib/lead/repository.ts` |
| 10 | Charte éditoriale testée automatiquement (termes promotionnels interdits, sections obligatoires). | `src/content/interventions/content.test.ts` |

## Hypothèses en attente de validation

- Société établie en France, aucun médecin associé au capital.
- Pas de destinations hors Europe au lancement.
- Analyse juridique à faire valider par un avocat dans chaque pays avant ouverture.

## Choix techniques provisoires (à confirmer en Phase 4)

- **Contenus** : fichiers TypeScript typés dans `src/content`, derrière une interface qui sera branchée sur le CMS headless sans changer les pages. Recommandation : Payload CMS (auto-hébergeable en UE, même base PostgreSQL, TypeScript natif).
- **Hébergement** : la base de données et l'API du formulaire doivent être hébergées en UE chez un hébergeur certifié HDS (OVHcloud, Scaleway, Clever Cloud).
- **Polices** : remplacé en Phase 5 par Source Serif 4 et Inter, auto-hébergées par `next/font` (voir ci-dessous).

## Design system (Phase 5, d'après la Phase 3)

- **Tokens** dans `src/app/globals.css` : couleurs (contrastes indiqués en tête de fichier), échelle typographique `text-display`, `text-h1` à `text-h3`, `text-body` (18 px), `text-small`, `text-label`, rayons `rounded-control` (6 px) et `rounded-card` (12 px), `shadow-float`, largeurs `max-w-reading` (680 px) et `max-w-page` (1 152 px).
- **Polices** : Source Serif 4 (titres) et Inter (texte), sous-ensembles latin et latin-ext, servies depuis notre domaine par `next/font` (`src/app/fonts.ts`). Le navigateur du visiteur n'appelle jamais Google.
- **Composants de base** : `buttonClasses()` pour les boutons et liens d'action, `Callout` pour les encadrés. Radix UI sera ajouté avec le premier composant interactif qui en a besoin (sélecteur de chirurgiens, fenêtre de dialogue).
- **Nom de marque** : Éclaira par défaut (`src/lib/site.ts`), surchargeable par `NEXT_PUBLIC_SITE_NAME` tant que la marque et les domaines ne sont pas vérifiés.
- **Adresses traduites** : `pathnames` dans `src/i18n/routing.ts`. Les dossiers de `src/app` restent en français ; le Royaume-Uni voit `/en-gb/procedures`, `/en-gb/request`, `/en-gb/information/...`. Les liens internes passent par des routes typées (`{ pathname, params }`).
