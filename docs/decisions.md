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

## Sous-pages, guides et lexique (Phase 5)

- **Silos** : 5 sous-pages par fiche (risques, prix, convalescence, avant de se décider, alternatives) à `/fr/interventions/<fiche>/<sujet>` et `/en-gb/procedures/<fiche>/<sujet>`. Le segment du sujet est fixé dans le code (`src/content/subpages/slugs.ts`), pas dans le CMS.
- **Maillage** : sommaire « Dans ce dossier » sur la fiche et ses sous-pages, fil d'Ariane avec données structurées, liens « Lire aussi » depuis les sections Risques, Convalescence et Alternatives de la fiche, deux guides liés, termes du lexique employés par la fiche.
- **Pas d'appel à la demande sur les pages de risques** (parcours Camille, Phase 2).
- **Pages prix sans montant** : aucune donnée vérifiée ; elles expliquent le contenu d'un devis, les règles du pays, la prise en charge éventuelle et le coût des complications. Des fourchettes ne seront ajoutées qu'à partir de données sourcées.
- **Lexique relié automatiquement** (`src/content/glossary/match.ts`) : une entrée renvoie vers les fiches qui emploient le terme ou une variante (mot entier, sans casse), et inversement. Les variantes trop larges (« cicatrice ») sont proscrites.
- **Relecture** : mêmes règles que les fiches pour les trois gabarits (seul un relecteur médical valide, toute modification du contenu par un autre compte repasse en brouillon, charte testée à l'enregistrement). Le lexique, prévu « relecture éditeur » en Phase 2, suit la règle médicale, plus stricte.
- **Indexation** : chaque contenu est indexé (et listé dans le sitemap) seulement une fois relu, indépendamment de sa fiche.
- **Contenus de la vague 1** : 30 sous-pages, 12 guides et 30 entrées de lexique rédigés en brouillon (France et Royaume-Uni adaptés, non traduits), plus courts que les longueurs cibles de la Phase 2. Ils servent de base au rédacteur médical et au comité de relecture.

## SEO, performance et accessibilité (Phase 6)

- **Mesure** : axe-core (WCAG 2.2 AA) sur un exemplaire de chaque gabarit et Lighthouse mobile (4G lente simulée, médiane de 3 passages). Résultats et checklist complète dans le document Phase 6.
- **En-tête `Critical-CH` de Payload** limité à `/admin` (`src/lib/headers.ts`) : sur tout le site, il faisait relancer par Chrome la première navigation de chaque visiteur (environ 600 ms sur mobile).
- **Polices** : seul le jeu `latin` d'Inter est préchargé ; Source Serif (titres) se charge sans préchargement. latin-ext reste disponible à la demande.
- **Traductions côté client** : la mise en page n'en transmet plus aucune ; chaque formulaire reçoit son seul espace de noms (`ClientMessages`).
- **Schéma Zod du formulaire** chargé après l'affichage (`src/lib/lead/options.ts` sans dépendance) : environ 35 Ko de moins avant le premier rendu de /demande.
- **404** : une adresse dont le premier segment contient un point (`/llms.txt`) n'est plus prise pour une locale (erreur 500) ; une adresse inconnue sous une locale affiche la 404 du site avec sa langue.
- **Partage** : Open Graph et carte X sur toutes les pages publiques, image par marché (`opengraph-image.tsx`), favicon et icône de la marque (le favicon de Next.js pesait 26 Ko).
- **Contrôles en CI** (`e2e/quality.spec.ts`) : zéro violation axe, réorganisation à 320 px, lien d'évitement, balises SEO, descriptions uniques, 404, absence de `Critical-CH`, budget de JavaScript et de polices par page. Le LCP de laboratoire n'est pas un critère bloquant (trop variable d'un passage à l'autre) : il est suivi à la main avec Lighthouse, puis sur données réelles après le lancement.

## Lancement et croissance (Phase 7)

- **Analytics** : Plausible, sans cookie, hébergé dans l'UE (décision validée en fin de Phase 6). Script « manual » chargé après la page, seulement si `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` est défini. Pages vues envoyées sans paramètres d'adresse ; espace pro et lien patient jamais mesurés. Événements : étape du formulaire atteinte, demande envoyée, candidature envoyée, Core Web Vitals (métrique, note, gabarit). Jamais d'intervention, de réponse ni d'identifiant (`src/lib/analytics.ts`).
- **Audit d'accessibilité externe** avant le lancement (validé), pour publier la déclaration d'accessibilité.
- **Indexation pays par pays** (validé), en commençant par la France puis le Royaume-Uni, chaque fiche après relecture du comité médical.
- **Vérification par pays** (`src/content/surgeons/verification.ts`) : cinq contrôles (identité au registre, titre de spécialiste, absence de sanction, assurance, autorisation du lieu d'exercice) à cocher avant « Vérifié », avec la date de fin d'assurance ; le CMS refuse sinon. Le profil disparaît à l'expiration de l'assurance comme un an après le dernier contrôle. Registres et titres des 8 pays d'après la Phase 1, à confirmer par un juriste local.
- **Spécialité et interventions** : une intervention hors spécialité est refusée, à la candidature comme sur la fiche (rhinoplastie : plastique, ORL, maxillo-faciale ; abdominoplastie et augmentation mammaire : plastique).
- **Candidatures** : collection `surgeon-applications` du CMS, créée seulement par le site, lue par les administrateurs. Données professionnelles, aucun texte libre. Accusé de réception au candidat, alerte à `TEAM_EMAIL`. Une candidature refusée est supprimée après 12 mois (à faire à la main dans `/admin` en attendant une tâche automatique).
- **Bêta** : `REQUESTS_PAUSED=1` ferme le formulaire de demande (page et action serveur) sans fermer le reste du site.
- **Mise en production** : `npm run launch:check` contrôle la configuration (HTTPS, base hors poste local, hébergeur HDS déclaré, clés de chiffrement, secrets, CMS, chirurgiens fictifs désactivés, e-mails) sans afficher aucun secret.
