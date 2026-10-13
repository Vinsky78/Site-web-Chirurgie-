# Workflow des demandes de contact

## Le parcours

1. **Le visiteur** clique sur « Nous contacter » : bandeau en bas de chaque page,
   lien « Contact » de l'en-tête, ou « Une question sur cette intervention ? » sur
   chaque fiche (l'objet et l'intervention sont alors préremplis).
2. **Le formulaire** (`/contact`, `/en-gb/contact`) demande :
   - l'objet (projet d'intervention, question, chirurgien, presse, données personnelles, autre) ;
   - pour un projet : l'intervention qui intéresse et le délai envisagé (facultatifs) ;
   - un message (obligatoire hors projet, 1 000 caractères, sans information médicale) ;
   - le prénom, l'e-mail, le moyen de recontact (e-mail ou téléphone), le téléphone et le créneau ;
   - le consentement.
   La page d'origine est ajoutée automatiquement (chemin seulement).
3. **À l'envoi** :
   - la demande complète est enregistrée dans le back-office (collection
     « Demandes de contact » du CMS, base certifiée HDS en production), avec une
     référence courte (ex. `C-7K3M9Q`) ;
   - une ligne de suivi est ajoutée au **Google Sheet**, sans l'intervention ni le message ;
   - le visiteur reçoit un accusé de réception ;
   - l'équipe reçoit une alerte (objet et référence, sans le contenu).
4. **Le suivi** se fait dans le Google Sheet, par statut :

| Statut | Signification | Prochaine action calculée |
| --- | --- | --- |
| Nouvelle | Pas encore traitée | 2 jours ouvrés après réception (délai annoncé) |
| À rappeler | Tentative de contact sans réponse | 1 jour ouvré |
| En cours | Échange en cours | 3 jours ouvrés |
| Orientée vers une demande de consultation | La personne prépare sa demande sur le site | aucune |
| Clôturée | Réponse apportée | aucune |

Chaque matin à 8 h, l'équipe reçoit la liste des demandes dont la prochaine
action est due (références seulement). Les lignes en retard sont en rouge.
Les demandes de plus de 12 mois sont supprimées chaque nuit (durée annoncée
dans le formulaire). Pour le contenu d'une demande, ouvrir le lien « Back-office ».

## Colonnes du Google Sheet

Référence · Reçue le · Objet · Prénom · E-mail · Téléphone · Recontacter par ·
Créneau · Langue · Page d'origine · Back-office · Statut · Responsable ·
Prochaine action le · Dernière mise à jour · Notes.

Un onglet « Tableau de bord » compte les demandes par statut, par objet et en retard.

## Mise en place (15 minutes)

1. Créer un Google Sheet vide dans le Google Workspace de la société (pas un compte personnel).
2. **Extensions > Apps Script**, coller le contenu de `docs/google-sheet/contact-workflow.gs`, enregistrer.
3. **Paramètres du projet > Propriétés du script** : ajouter
   - `TOKEN` : une valeur secrète longue (par exemple `openssl rand -hex 32`) ;
   - `TEAM_EMAIL` : l'adresse de l'équipe qui traite les demandes.
4. Dans l'éditeur, choisir la fonction `setup` et cliquer sur **Exécuter** (accepter les autorisations).
5. **Déployer > Nouveau déploiement > Application Web** : exécuter en tant que « Moi »,
   accès « Tout le monde ». Copier l'URL de l'application Web.
6. Dans l'environnement du site (`.env.local` ou l'hébergeur) :
   ```
   CONTACT_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/…/exec
   CONTACT_SHEET_TOKEN=la même valeur que TOKEN
   TEAM_EMAIL=equipe@exemple.fr
   ```
7. Envoyer une demande de test depuis `/contact` : la ligne apparaît dans l'onglet « Demandes ».

Sans ces variables, le site fonctionne normalement : la demande est enregistrée
dans le back-office et aucune ligne n'est envoyée.

## Protection des données

- Google Sheets n'est pas un hébergeur certifié HDS : le site n'y envoie jamais
  l'intervention envisagée ni le message. Ne pas y recopier d'information médicale
  dans les notes.
- Utiliser un compte Google Workspace professionnel, avec l'avenant de traitement
  des données (DPA) accepté, et limiter le partage du classeur à l'équipe.
- Mentionner Google comme sous-traitant dans la politique de confidentialité
  (point à faire valider par le DPO).
- Durée de conservation : 12 mois, purge automatique.

## Étape suivante

Le Google Sheet est un point de départ. Quand le volume augmente, le suivi peut
se faire directement dans le back-office (statut et notes existent déjà dans la
collection « Demandes de contact »), ou dans un CRM, en gardant la même référence.
