# Site web Chirurgie

Plateforme européenne d'information sur la chirurgie et la médecine esthétiques, avec demande de consultation auprès de chirurgiens qualifiés et vérifiés.

> **Statut : en développement (Phase 5).** Les contenus médicaux sont des brouillons à faire relire par un chirurgien qualifié ; ils sont exclus de l'indexation tant que ce n'est pas fait.

## Ce qui est en place

- Next.js 16 (App Router, Server Components), TypeScript strict, Tailwind CSS 4.
- Deux marchés : France (`/fr`) et Royaume-Uni (`/en-gb`), avec des contenus localisés et non simplement traduits.
- Accueil, liste des interventions, fiches intervention (rhinoplastie, abdominoplastie, augmentation mammaire) avec risques, contre-indications, alternatives et droits du patient du pays.
- Formulaire de demande en 5 étapes (dont le choix de 1 à 3 chirurgiens), validé côté client et serveur (Zod) : refus des mineurs, consentement explicite aux données de santé, étape de réflexion non enregistrée, anti-spam (pot de miel + durée minimale).
- Règles de conformité par pays (publicité, avant/après, témoignages, délai de réflexion, devis).
- SEO : balises canonical et hreflang, sitemap multilingue, robots.txt, données structurées schema.org (MedicalWebPage, MedicalProcedure, BreadcrumbList, FAQPage).
- Accessibilité : lien d'évitement, focus visible, champs étiquetés, résumé des erreurs, gestion du focus entre étapes, cibles tactiles de 44 px.
- En-têtes de sécurité HTTP.
- Back-office éditorial Payload (`/admin`) : fiches d'intervention par marché, relecture médicale signée, charte éditoriale vérifiée à l'enregistrement, historique des versions.
- Annuaire des chirurgiens (`/fr/chirurgiens`) : seuls les profils vérifiés au registre officiel depuis moins d'un an et abonnés sont publiés, par ordre alphabétique ; pages ville à partir de trois chirurgiens ; ni avis, ni avant/après, ni prix.
- Espace pro (`/fr/pro`) : connexion avec double authentification obligatoire (code TOTP), boîte de réception des demandes adressées au chirurgien, ouverture tracée dans un journal d'accès, avis de pertinence en un clic.
- Back-office `/admin` et son API accessibles seulement à l'équipe interne après double authentification.
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

### Avec le CMS (back-office éditorial)

Prérequis : la base de données ci-dessus.

```bash
echo "PAYLOAD_SECRET=$(openssl rand -hex 32)" >> .env.local
npm run cms:migrate                  # crée le schéma PostgreSQL `cms`
CMS_ADMIN_EMAIL=vous@exemple.fr CMS_ADMIN_PASSWORD='…' CMS_ADMIN_NAME='Prénom Nom' npm run cms:seed
echo 'CONTENT_SOURCE=cms' >> .env.local
npm run dev
```

`cms:seed` crée le premier administrateur et importe les fiches de `src/content` en brouillon. Le back-office est sur http://localhost:3000/admin. Sans `CONTENT_SOURCE=cms`, le site lit les fichiers de `src/content` (c'est le cas en intégration continue).

Rôles :

| Rôle | Peut |
| --- | --- |
| Administrateur | Gérer les comptes et les rôles, supprimer une fiche |
| Rédacteur | Créer et modifier les fiches |
| Relecteur médical | Tout ce que fait le rédacteur, et valider une fiche : son nom, sa qualification et la date s'affichent sur la page, qui devient indexable |

Une fiche modifiée par un autre compte qu'un relecteur médical repasse en brouillon (non indexée) jusqu'à une nouvelle relecture. Un terme interdit par la charte (« meilleur », « indolore », « sans risque »…) bloque l'enregistrement.

> En production, lancer `cms:seed` juste après le premier déploiement : tant qu'aucun compte n'existe, `/admin` propose de créer un administrateur à quiconque y accède.

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
| `npm run pro:create-user` | Crée un compte pro ou d'équipe et affiche un mot de passe provisoire |
| `npm run cms:migrate` | Applique les migrations du CMS (schéma `cms`) |
| `npm run cms:migrate:create` | Génère une migration après modification d'une collection (`src/cms/collections`) |
| `npm run cms:seed` | Crée le premier administrateur et importe les fiches de `src/content` |
| `npm run cms:types` | Régénère `src/payload-types.ts` après modification d'une collection |

## Structure

```
messages/                 Textes d'interface par locale (fr, en-gb)
src/app/[locale]/         Pages (accueil, interventions, demande, informations)
src/app/sitemap.ts        Sitemap multilingue
src/app/(payload)/        Back-office Payload (/admin) et son API (/api), fichiers générés
src/cms/                  Collections, rôles et règles de relecture médicale du CMS
src/content/surgeons/     Annuaire : règles de publication, registres officiels, chirurgiens fictifs de test
src/components/           Composants partagés (en-tête, pied de page, encadré légal, JSON-LD)
src/content/              Contenus des interventions en fichiers (source par défaut, amorçage du CMS) et charte éditoriale
src/db/                   Schéma PostgreSQL des demandes (Drizzle), migrations des demandes et du CMS
src/i18n/                 Routage et configuration des langues
src/lib/auth/             Better Auth : connexion, double authentification, accès à /admin
src/lib/crypto/           Chiffrement des champs sensibles
src/lib/pro/              Espace pro : boîte de réception, ouverture tracée des demandes
src/lib/countries.ts      Règles de conformité par pays
src/lib/lead/             Formulaire de demande : schéma, soumission, stockage
src/lib/seo.ts            Canonical et hreflang
e2e/                      Tests Playwright
docs/decisions.md         Décisions et hypothèses
```

## Ajouter une intervention

1. Ajouter son identifiant dans `INTERVENTION_IDS` (`src/content/types.ts`), puis `npm run cms:migrate:create` et `npm run cms:migrate` (la liste est une énumération en base).
2. Rédiger la fiche dans le back-office, pour chaque marché, en respectant la charte (au moins trois risques, contre-indications, alternatives, aucune promesse). Pour le développement sans base, la rédiger aussi dans `src/content/interventions/` : `npm test` vérifie ces fichiers.
3. Un relecteur médical la valide dans le back-office : elle devient indexable.

## Ouvrir un nouveau marché

1. Ajouter la locale dans `src/i18n/routing.ts` et `HREFLANG` (`src/lib/seo.ts`).
2. Créer `messages/<locale>.json` et les contenus dans `src/content/interventions/`.
3. Vérifier la règle du pays dans `src/lib/countries.ts`, la faire valider par un avocat local (`legalReview: "validated"`), puis l'ajouter à `ACTIVE_COUNTRIES`.

## Espace pro et accès à /admin

1. Définir `BETTER_AUTH_SECRET` (32 caractères au moins) et appliquer les migrations (`npm run db:migrate`).
2. Créer les comptes : `npm run pro:create-user -- --email dr@exemple.fr --name "Dr Claire Martin" --role surgeon --surgeon <slug>` pour un chirurgien (`assistant` pour son assistant, même fiche), `--role staff` pour l'équipe interne. Le mot de passe provisoire s'affiche une seule fois : transmettez-le par un autre canal que l'e-mail.
3. À la première connexion (`/fr/pro/connexion`), la personne active la double authentification avec une application (QR code, codes de secours) avant tout accès.
4. L'équipe ouvre `/admin` : elle passe d'abord par cette connexion avec code, puis par la connexion Payload.

## Prochaines étapes

- E-mails Brevo sans donnée de santé, lien de gestion de la demande pour le patient, invitation des comptes pro par e-mail.
- Sous-pages des dossiers d'intervention, guides et glossaire.
