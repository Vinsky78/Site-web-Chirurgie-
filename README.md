# Site web Chirurgie

Plateforme européenne d'information sur la chirurgie et la médecine esthétiques, avec demande de consultation auprès de chirurgiens qualifiés et vérifiés.

> **Statut : première version (MVP technique).** Les contenus médicaux sont des brouillons à faire relire par un chirurgien qualifié ; ils sont exclus de l'indexation tant que ce n'est pas fait. Aucune base de données n'est encore branchée : les demandes ne sont pas conservées en production.

## Ce qui est en place

- Next.js 16 (App Router, Server Components), TypeScript strict, Tailwind CSS 4.
- Deux marchés : France (`/fr`) et Royaume-Uni (`/en-gb`), avec des contenus localisés et non simplement traduits.
- Accueil, liste des interventions, fiches intervention (10 : rhinoplastie, blépharoplastie, lifting du visage, otoplastie, liposuccion, abdominoplastie, augmentation et réduction mammaires, lifting mammaire, gynécomastie) avec risques, contre-indications, alternatives et droits du patient du pays.
- Formulaire de demande en 4 étapes, validé côté client et serveur (Zod) : refus des mineurs, consentement explicite aux données de santé, étape de réflexion non enregistrée, anti-spam (pot de miel + durée minimale).
- Règles de conformité par pays (publicité, avant/après, témoignages, délai de réflexion, devis).
- SEO : balises canonical et hreflang, sitemap multilingue, robots.txt, données structurées schema.org (MedicalWebPage, MedicalProcedure, BreadcrumbList, FAQPage).
- Accessibilité : lien d'évitement, focus visible, champs étiquetés, résumé des erreurs, gestion du focus entre étapes, cibles tactiles de 44 px.
- En-têtes de sécurité HTTP.
- Tests unitaires (Vitest) et de bout en bout sur mobile (Playwright), intégration continue GitHub Actions.

## Liens utiles (développement local)

Après `npm run dev`, le site est sur http://localhost:3000 (ces liens ne fonctionnent que sur ta machine, serveur lancé).

| Page | Lien |
| --- | --- |
| Accueil | http://localhost:3000/fr |
| Interventions | http://localhost:3000/fr/interventions |
| Catégorie (visage) | http://localhost:3000/fr/interventions/categories/face |
| Fiche rhinoplastie | http://localhost:3000/fr/interventions/rhinoplastie |
| Demande de consultation | http://localhost:3000/fr/demande |
| Chirurgiens | http://localhost:3000/fr/chirurgiens |
| Design system | http://localhost:3000/fr/design-system |
| Espace pro | http://localhost:3000/fr/pro |
| Version britannique | http://localhost:3000/en-gb |

Dépôt : https://github.com/Vinsky78/Site-web-Chirurgie-

## Installation

Prérequis : Node.js 22 ou plus récent.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Puis ouvrir http://localhost:3000 (redirige vers `/fr`).

## Commandes

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm start` | Lance le build de production |
| `npm run lint` | ESLint |
| `npm run typecheck` | Vérification TypeScript |
| `npm test` | Tests unitaires (Vitest) |
| `npm run test:e2e` | Tests de bout en bout (Playwright, après `npm run build`) |

## Structure

```
messages/                 Textes d'interface par locale (fr, en-gb)
src/app/[locale]/         Pages (accueil, interventions, demande, informations)
src/app/sitemap.ts        Sitemap multilingue
src/components/           Composants partagés (en-tête, pied de page, encadré légal, JSON-LD)
src/content/              Contenus des interventions par locale (en attendant le CMS)
src/i18n/                 Routage et configuration des langues
src/lib/countries.ts      Règles de conformité par pays
src/lib/lead/             Formulaire de demande : schéma, soumission, stockage
src/lib/seo.ts            Canonical et hreflang
e2e/                      Tests Playwright
docs/decisions.md         Décisions et hypothèses
```

## Ajouter une intervention

1. Ajouter son identifiant dans `INTERVENTION_IDS` (`src/content/types.ts`).
2. Rédiger la fiche dans chaque fichier de `src/content/interventions/` en respectant la charte (risques, contre-indications, alternatives, aucune promesse).
3. Lancer `npm test` : les tests vérifient les sections obligatoires et l'absence de termes promotionnels.
4. Après relecture par un chirurgien, passer `medicalReview` à `reviewed` avec son nom, sa qualification et la date : la fiche devient indexable.

## Ouvrir un nouveau marché

1. Ajouter la locale dans `src/i18n/routing.ts` et `HREFLANG` (`src/lib/seo.ts`).
2. Créer `messages/<locale>.json` et les contenus dans `src/content/interventions/`.
3. Vérifier la règle du pays dans `src/lib/countries.ts`, la faire valider par un avocat local (`legalReview: "validated"`), puis l'ajouter à `ACTIVE_COUNTRIES`.

## Phases 2 à 4 (code en place)

- **Phase 2 – taxonomie** : pages par catégorie (`/interventions/categories/<face|body|breast>`), plan de mots-clés (`src/content/taxonomy.ts`), sitemap étendu, fil d'Ariane schema.org.
- **Phase 3 – design system** : tokens dans `src/app/globals.css`, composants `src/components/ui` (Button, Badge, Alert, Card), page de référence non indexée `/<locale>/design-system`.
- **Phase 4 – socle** : stockage PostgreSQL (`migrations/001_init.sql`, `LEAD_STORAGE=postgres` + `DATABASE_URL`), annuaire des chirurgiens vérifiés (`/chirurgiens`, vide tant qu'aucune fiche n'est vérifiée), envoi d'une demande à 1 à 3 chirurgiens (`src/lib/lead/dispatch.ts`), espace pro `/pro` (sans authentification, aucune donnée exposée).

## Guides, comparateur et recherche

- `/guides` : 4 guides pratiques (choisir son chirurgien, préparer sa consultation, devis et délai de réflexion, préparation et convalescence), en brouillon (noindex) tant qu'une relecture juridique et médicale n'a pas eu lieu (`src/content/guides.ts`).
- `/comparateur` : compare 2 ou 3 interventions (anesthésie, durée, hospitalisation, convalescence, risques).
- `/recherche` : recherche tolérante aux accents sur les interventions et les guides.

## GEO et mesure d'audience

- **GEO** (visibilité dans les assistants IA) : `/llms.txt` (résumé du site, fiches relues uniquement), `robots.txt` avec robots d'IA autorisés sur les pages publiques, données structurées `Organization` et `WebSite` sur chaque page, en plus des données des fiches (`MedicalWebPage`, `FAQPage`).
- **Google Analytics 4** : renseigner `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` (voir `.env.example`). Chargé uniquement après consentement (bandeau avec « Refuser » aussi simple qu'« Accepter », lien « Gérer mes cookies » dans le pied de page), finalités publicitaires désactivées, jamais actif sur `/demande`, `/pro` ni `/design-system`. Sans identifiant, aucun script et aucun bandeau.

### Référencement et mesure : réglages à renseigner

Variables optionnelles (voir `.env.example`), publiées seulement si elles sont renseignées :
`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION`, `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_SAME_AS`, `NEXT_PUBLIC_SITE_URL`.
Événement de mesure `cta_click` sur les boutons clés (identifiants fermés dans `src/lib/analytics.ts`, aucun paramètre libre). Balises Open Graph et X/Twitter avec image générée (`opengraph-image.tsx`).

## Reste à faire

- Héberger la base chez un hébergeur certifié HDS et appliquer la migration.
- Brancher l'envoi réel (`Notifier`), l'authentification de l'espace pro et le CMS.
- Alimenter l'annuaire après vérification des registres (RPPS, GMC).
- Ajouter la sélection des chirurgiens dans le formulaire de demande et appeler `dispatchLead`.
- Faire relire les contenus médicaux par un chirurgien.

## Outils

`node "Website surgery.js" check | new | standalone` : vérification de cohérence fr/en-gb, création d'une fiche, page autonome.
