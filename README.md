# Site web Chirurgie

Plateforme européenne d'information sur la chirurgie et la médecine esthétiques, avec demande de consultation auprès de chirurgiens qualifiés et vérifiés.

> **Statut : en développement (Phase 5).** Les contenus médicaux sont des brouillons à faire relire par un chirurgien qualifié ; ils sont exclus de l'indexation tant que ce n'est pas fait.

## Ce qui est en place

- Next.js 16 (App Router, Server Components), TypeScript strict, Tailwind CSS 4.
- Deux marchés : France (`/fr`) et Royaume-Uni (`/en-gb`), avec des contenus localisés et non simplement traduits.
- Accueil, liste des interventions, fiches intervention (rhinoplastie, abdominoplastie, augmentation mammaire) avec risques, contre-indications, alternatives et droits du patient du pays.
- Formulaire de demande en 4 étapes, validé côté client et serveur (Zod) : refus des mineurs, consentement explicite aux données de santé, étape de réflexion non enregistrée, anti-spam (pot de miel + durée minimale).
- Règles de conformité par pays (publicité, avant/après, témoignages, délai de réflexion, devis).
- SEO : balises canonical et hreflang, sitemap multilingue, robots.txt, données structurées schema.org (MedicalWebPage, MedicalProcedure, BreadcrumbList, FAQPage).
- Accessibilité : lien d'évitement, focus visible, champs étiquetés, résumé des erreurs, gestion du focus entre étapes, cibles tactiles de 44 px.
- En-têtes de sécurité HTTP.
- Tests unitaires (Vitest) et de bout en bout sur mobile (Playwright), intégration continue GitHub Actions.

## Installation

Prérequis : Node.js 22 ou plus récent.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Puis ouvrir http://localhost:3000 (redirige vers `/fr`).

Sans base de données, les demandes sont gardées en mémoire (développement uniquement).

### Avec la base de données (recommandé)

Prérequis : Docker.

```bash
docker compose up -d                 # PostgreSQL local
npm run keys:generate >> .env.local  # clés de chiffrement (ne jamais les committer)
echo 'DATABASE_URL=postgres://chirurgie:chirurgie@localhost:5432/chirurgie' >> .env.local
npm run db:migrate                   # lit .env.local
npm run dev
```

Les demandes sont alors enregistrées dans le schéma PostgreSQL `leads`. Prénom, e-mail, téléphone et réponses médicales sont chiffrés par l'application (AES-256-GCM) avant l'écriture ; seule une empreinte HMAC de l'e-mail permet de retrouver les demandes d'une personne. Chaque demande est supprimée 6 mois après sa création par `npm run leads:purge`, à planifier chaque jour.

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
| `npm run db:generate` | Génère une migration après modification de `src/db/schema` |
| `npm run db:migrate` | Applique les migrations (`DATABASE_URL` requis) |
| `npm run leads:purge` | Supprime les demandes de plus de 6 mois (tâche quotidienne) |
| `npm run keys:generate` | Génère des clés de chiffrement pour l'environnement local |

## Structure

```
messages/                 Textes d'interface par locale (fr, en-gb)
src/app/[locale]/         Pages (accueil, interventions, demande, informations)
src/app/sitemap.ts        Sitemap multilingue
src/components/           Composants partagés (en-tête, pied de page, encadré légal, JSON-LD)
src/content/              Contenus des interventions par locale (en attendant le CMS)
src/db/                   Schéma PostgreSQL (Drizzle) et migrations
src/i18n/                 Routage et configuration des langues
src/lib/crypto/           Chiffrement des champs sensibles
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

## Prochaines étapes

- Design system, URL anglaises localisées, CMS Payload, annuaire des chirurgiens, formulaire en 5 étapes, espace pro, e-mails (voir les documents des Phases 3 et 4).
