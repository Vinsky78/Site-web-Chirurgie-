# Charte graphique Éclaira

Référence visuelle du site. Les valeurs sont définies une seule fois dans
`src/app/globals.css` (tokens) et utilisées partout via les classes Tailwind.

## Intention

Éclaira aide à **éclairer une décision** médicale. Le ton visuel est celui d'une
« clinique éditoriale » : calme, lisible, digne de confiance, sans effet
commercial. Rien ne doit pousser à décider vite.

- Sobre : pas d'animation décorative, pas de compte à rebours, pas de badge promotionnel.
- Lisible : textes longs confortables (680 px de largeur de lecture, 18 px de corps).
- Rassurant : les risques et les droits sont toujours visibles, jamais cachés en petits caractères.

## Logo

Composant `src/components/ui/Logo.tsx`, favicon `src/app/icon.svg`.

- **Symbole** : un arc clair qui se lève au-dessus d'un horizon, avec un point
  argile, sur un carré teal profond aux angles arrondis (8 px sur 32 px).
- **Nom** : « Éclaira » en Source Serif, demi-gras, teal profond.
- Zone de protection : la hauteur du point argile tout autour du logo.
- Sur fond sombre (pied de page) : symbole inchangé, nom en blanc.
- À ne pas faire : déformer, changer les couleurs du symbole, ajouter une ombre.

## Couleurs

| Rôle | Token | Valeur | Usage |
| --- | --- | --- | --- |
| Teal profond | `primary-strong` | `#0a3642` | Titres, logo, pied de page, encadrés d'action |
| Teal | `primary` | `#0f4c5c` | Boutons principaux, liens d'action |
| Sauge claire | `primary-soft` | `#d3e5e5` | Puces, numéros d'étape, texte sur fond sombre |
| Sable | `sand` | `#f5eee4` | Bandeau d'accueil, encadrés de réflexion |
| Argile | `clay` | `#8f432c` | Surtitres, pictogrammes, accents (jamais pour un bouton) |
| Encre | `ink` | `#1c2430` | Texte courant |
| Gris texte | `muted` | `#4a5563` | Texte secondaire |
| Fond | `bg` | `#fbfaf8` | Fond des pages |
| Surface | `surface` | `#ffffff` | Cartes, champs |
| Bordure | `border` | `#d5dade` | Bordures décoratives |
| Bordure de champ | `border-input` | `#737f8c` | Champs de formulaire (3,9:1) |
| Alerte | `warning-bg` / `warning-ink` | `#fff6e0` / `#6b4500` | Bandeau « brouillon » |
| Erreur | `danger` | `#a1242b` | Messages d'erreur |
| Focus | `focus` | `#1d6fd6` | Contour de focus clavier |

Contrastes vérifiés (WCAG 2.2 AA) : encre/fond 15:1, teal/fond 9,1:1,
blanc/teal 9,5:1, argile/fond 6,7:1, argile/sable 6,1:1, encre/sable 13,6:1,
gris texte/sable 6,6:1, sauge/teal profond 9,9:1.

Répartition indicative : 70 % de neutres (fond, surface, encre), 20 % de teal,
10 % de sable et d'argile.

## Typographie

| Rôle | Police | Taille (mobile → bureau) |
| --- | --- | --- |
| Accroche (`text-display`) | Source Serif, demi-gras | 34 → 52 px |
| Titre de page (`text-h1`) | Source Serif, demi-gras | 30 → 42 px |
| Titre de section (`text-h2`) | Source Serif, demi-gras | 24 → 30 px |
| Sous-titre (`text-h3`) | Inter ou Source Serif, demi-gras | 19 → 21 px |
| Texte courant (`text-body`) | Inter | 18 px, interligne 1,6 |
| Petit texte (`text-small`) | Inter | 15 px |
| Libellé (`text-label`) | Inter, medium | 16 px |
| Surtitre | Inter, demi-gras, capitales espacées, argile | 15 px |

Une seule police préchargée (Inter), pour la vitesse d'affichage.

## Formes et espacements

- Rayons : 6 px pour les champs et boutons, 12 px pour les cartes, pilule pour les puces.
- Les cartes ont une bordure, pas d'ombre. L'ombre est réservée aux éléments flottants (menus).
- Largeurs : 680 px pour la lecture, 1 152 px pour la page.
- Cibles tactiles : 44 px minimum de hauteur.

## Composants

- **Bouton principal** : fond teal, texte blanc. Un seul par zone d'écran.
- **Bouton secondaire** : contour teal, fond blanc.
- **Puce de domaine** : pilule blanche, pictogramme argile, survol teal.
- **Carte** : surface blanche, bordure fine, entièrement cliquable, bordure teal au survol.
- **Encadré d'action** : fond teal profond, texte blanc, bouton blanc.
- **Encadré de réflexion** : fond sable, filet argile à gauche.

## Iconographie et images

- Pictogrammes au trait de 1,6 px, angles arrondis, en argile ou en teal (`CategoryIcon`).
- Illustrations abstraites uniquement : jamais de photo avant/après ni de corps
  idéalisé (règles de publicité médicale, voir `src/lib/countries.ts`).

## Ergonomie

- En-tête fixe sur une ligne : logo, navigation, recherche, langue et bouton de demande.
- Sous 1 024 px, la navigation se replie dans un bouton « Menu ».
- Fiches : repères « En bref » en haut, sommaire et demande dans une colonne qui
  reste visible sur ordinateur, barre de demande fixe en bas sur mobile.
- Accueil : recherche immédiate et accès par zone du corps dès le premier écran.

## Ton éditorial

Factuel, au « vous », sans superlatif ni promesse de résultat. Voir la charte
éditoriale et les termes interdits dans `src/content/charter.ts`.
