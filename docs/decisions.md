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

## CMS (Phase 5, d'après la Phase 4)

- **Payload 3** dans la même application Next.js (`/admin`), tables dans le schéma PostgreSQL `cms`, séparé de `leads`. Structure gérée par migrations (`push: false`), jamais par synchronisation automatique.
- **Fiches localisées par marché** (`localization`, sans repli) : chaque locale a son slug, ses risques et son contexte légal. Une fiche absente d'un marché n'y est pas publiée.
- **Catalogue dans le code** : identifiants et catégories restent dans `src/content/types.ts`, car le formulaire de demande en dépend.
- **Relecture médicale** (`src/cms/reviewWorkflow.ts`) : seul un relecteur médical valide ; sa signature est horodatée ; toute modification médicale par un autre compte repasse la fiche en brouillon. L'administrateur ne peut pas valider.
- **Charte éditoriale** (`src/content/charter.ts`) partagée par les tests et le CMS.
- **API REST** du CMS réservée aux comptes connectés ; le site lit par l'API locale, côté serveur. GraphQL désactivé.
- **Comptes** : sessions de 2 h, verrouillage 15 min après 5 échecs, cookies `SameSite=Strict`. Payload n'a pas de double authentification : `/admin` et `/api` sont protégés en amont (voir « Espace pro »).
- **Source des fiches** : `CONTENT_SOURCE=cms` en production ; les fichiers de `src/content` restent la source en CI et l'amorçage du CMS.
- **Dépendances** : `undici` et `dompurify` forcés en versions corrigées (`overrides`). Restent signalés `braces` (aucune version corrigée publiée, utilisé seulement au build par `sass`) et `esbuild` (serveur de développement de `drizzle-kit`, jamais en production).

## Annuaire des chirurgiens (Phase 5)

- **Publication** (`src/content/surgeons/rules.ts`) : vérifié au registre officiel il y a moins de 12 mois et abonnement en cours. Au-delà d'un an sans contrôle, le profil disparaît automatiquement.
- **Vérification** (`src/cms/verification.ts`) : réservée aux administrateurs, horodatée avec l'auteur ; case « Contrôle annuel effectué » pour relancer le délai ; preuve interne jamais publiée.
- **Ordre** alphabétique par nom de famille ; l'abonnement ne change ni le classement ni le nombre de demandes.
- **Pages ville** seulement à partir de 3 chirurgiens publiés (sinon 404) ; résultats filtrés et annuaire vide non indexés.
- **Profils propres à un marché** : pas d'alternatives hreflang entre annuaires de pays différents.
- **Aucun avis, avant/après ni prix** dans l'annuaire, quel que soit le pays. Présentation soumise à la charte éditoriale.
- **Chirurgiens fictifs** (`fixtures.ts`) chargés seulement avec `DIRECTORY_FIXTURES=1` (tests de bout en bout), jamais en production.

## Espace pro (Phase 5)

- **Better Auth** (`src/lib/auth`), tables dans le schéma PostgreSQL `pro`, séparé de `leads` et `cms`. Aucune route HTTP Better Auth exposée : connexion par actions serveur uniquement.
- **Pas d'inscription libre** : comptes créés par l'équipe (`npm run pro:create-user`), qui reçoivent un lien de choix du mot de passe (48 h, usage unique, ferme les sessions ouvertes), reliés à une fiche de l'annuaire (`pro.surgeon_links`) ; un assistant partage la fiche de son chirurgien. Les cabinets à plusieurs chirurgiens (`practices`) viendront avec la facturation.
- **Double authentification obligatoire** (TOTP, codes de secours) : sans elle, le compte n'accède qu'à la page d'activation. Pas d'appareil « de confiance » ; code redemandé à chaque connexion ; sessions de 12 h sans prolongation.
- **Tentatives** : 5 mots de passe faux bloquent l'adresse 15 minutes (en mémoire, par conteneur : à déplacer en base si plusieurs instances) ; 5 codes faux bloquent le compte 15 minutes (Better Auth). Les messages ne révèlent pas si une adresse existe.
- **Secrets TOTP et codes de secours** chiffrés en base par Better Auth (`BETTER_AUTH_SECRET`).
- **Accès aux demandes** contrôlé dans chaque requête SQL (destinataire = fiche reliée au compte) : un identifiant deviné donne une 404. La liste ne déchiffre rien ; chaque ouverture est tracée dans `leads.access_log` et passe le destinataire en « ouverte ».
- **Back-office** : le proxy exige, devant `/admin` et `/api`, une session de l'équipe interne (`staff`) ayant validé son code. La connexion Payload reste nécessaire ensuite.
- **Dépendance signalée** : `vitest` 4.0 (outil de test, jamais en production) fait l'objet d'avis de sécurité ; la mise à jour vers 4.1.11 bute sur une erreur de npm et sera faite à part.

## E-mails et lien patient (Phase 5)

- **Brevo** par son API transactionnelle (`src/lib/email/brevo.ts`), sans SDK. Sans clé : console en développement, refus journalisé en production. Un échec d'envoi ne fait jamais échouer l'action de l'utilisateur ; les e-mails d'une demande partent après la réponse (`after`).
- **Aucune donnée de santé par e-mail** (`src/lib/email/templates.ts`, testé) : ni intervention, ni réponse médicale, ni ville. Le patient reçoit la liste des chirurgiens choisis (indique une démarche de chirurgie esthétique : accepté en Phase 4) ; le chirurgien, la seule catégorie (Visage, Silhouette, Seins).
- **Lien personnel du patient** : jeton de 256 bits, seul son hash SHA-256 est stocké (`leads.access_tokens`), expire avec la demande. Page non indexée, sans cache, sans en-tête Referer.
- **Suppression par le patient** : demande, données de santé, destinataires, journal d'accès et lien effacés ; preuves de consentement gardées, marquées retirées, sans lien vers la demande ; chirurgiens prévenus sans détail.
