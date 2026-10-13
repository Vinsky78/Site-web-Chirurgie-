import type { Guide } from "../types";

/**
 * Guides transverses France (fr). Charte éditoriale Phase 1 : information
 * factuelle et neutre, aucune promesse de résultat, aucun classement de
 * praticiens, d'établissements ou de pays. Statut "draft" tant qu'un
 * chirurgien qualifié ne les a pas relus.
 */
export const guidesFr: Guide[] = [
  {
    id: "choosing-a-surgeon",
    locale: "fr",
    slug: "choisir-son-chirurgien",
    title: "Choisir son chirurgien en chirurgie esthétique",
    summary:
      "Vérifier la qualification d'un chirurgien, l'autorisation de l'établissement et l'assurance : les points de contrôle avant une chirurgie esthétique.",
    answer:
      "Un chirurgien se choisit sur des éléments vérifiables : son inscription à l'Ordre des médecins, sa qualification en chirurgie plastique, reconstructrice et esthétique (ou une spécialité compétente pour la zone concernée), un établissement autorisé et une assurance en responsabilité civile professionnelle. Le prix, la notoriété sur les réseaux sociaux ou la rapidité d'obtention d'un rendez-vous ne disent rien de la sécurité. Cette plateforme ne désigne jamais un chirurgien comme supérieur à un autre : elle vous aide à vérifier, pas à classer.",
    steps: [
      {
        heading: "Vérifier l'inscription et la qualification",
        paragraphs: [
          "Tout médecin exerçant en France est inscrit au tableau de l'Ordre des médecins et dispose d'un numéro RPPS (Répertoire partagé des professionnels de santé). Ces informations sont consultables gratuitement sur l'Annuaire santé et sur l'annuaire du Conseil national de l'Ordre des médecins.",
          "Pour la chirurgie esthétique, la qualification de référence est « chirurgie plastique, reconstructrice et esthétique ». Certaines interventions d'une zone précise peuvent aussi être réalisées par des chirurgiens d'une autre spécialité qualifiés pour cette zone, par exemple un chirurgien ORL et cervico-facial pour le nez. Dans tous les cas, la qualification affichée doit correspondre à celle de l'annuaire officiel.",
        ],
        bullets: [
          "Nom, prénom et numéro RPPS identiques sur le devis et dans l'annuaire.",
          "Spécialité ordinale mentionnée dans l'annuaire, et non seulement sur un site personnel.",
          "Méfiance envers les titres non officiels (« expert », « spécialiste en esthétique ») sans qualification correspondante.",
        ],
      },
      {
        heading: "Vérifier l'établissement où aura lieu l'intervention",
        paragraphs: [
          "En France, une intervention de chirurgie esthétique ne peut être pratiquée que dans une installation ayant reçu une autorisation de l'agence régionale de santé (ARS) pour cette activité. Un bloc opératoire est nécessaire ; un cabinet ou un local non autorisé ne l'est pas.",
          "Demandez le nom et l'adresse de l'établissement. Les rapports de certification des établissements de santé publiés par la Haute Autorité de santé (HAS) peuvent également être consultés.",
        ],
      },
      {
        heading: "Vérifier l'assurance et l'organisation du suivi",
        paragraphs: [
          "Les médecins exerçant à titre libéral doivent être couverts par une assurance en responsabilité civile professionnelle. Vous pouvez demander le nom de l'assureur.",
          "Interrogez aussi le chirurgien sur l'organisation du suivi : rendez-vous postopératoires prévus, numéro joignable en cas de problème la nuit ou le week-end, prise en charge d'une éventuelle complication ou reprise.",
        ],
      },
      {
        heading: "Évaluer la consultation elle-même",
        paragraphs: [
          "La consultation doit avoir lieu avec le chirurgien qui opérera, et non avec un conseiller commercial. Elle comprend un examen, une explication de la technique, des risques, des alternatives (y compris celle de ne pas opérer) et des suites prévisibles.",
          "Un chirurgien peut vous déconseiller une intervention ou vous proposer un geste plus limité que celui que vous envisagiez. Ce n'est pas un mauvais signe : c'est une partie de son rôle.",
        ],
      },
      {
        heading: "Ne pas choisir sur le prix ni sur les réseaux sociaux",
        paragraphs: [
          "Un tarif nettement inférieur aux fourchettes habituelles peut cacher l'absence de certaines prestations (anesthésiste, nuit d'hospitalisation, suivi, reprise). Un tarif élevé ne garantit pas non plus la qualité.",
          "Le nombre d'abonnés, les vidéos de blocs opératoires ou les photos retouchées ne sont pas des critères de sécurité. En France, la communication des médecins est encadrée par le code de déontologie : elle doit rester loyale et informative, sans caractère commercial.",
        ],
      },
      {
        heading: "Prendre plusieurs avis si nécessaire",
        paragraphs: [
          "Consulter deux chirurgiens qualifiés permet de comparer les explications, les propositions et la manière dont vos questions sont reçues. Les honoraires de consultation sont alors à prévoir pour chacun.",
          "Ce guide est utile pour toutes les interventions présentées sur la plateforme, qu'elles concernent le visage, la silhouette ou les seins.",
        ],
      },
      {
        heading: "Grille de vérification, étape par étape",
        paragraphs: [
          "Ces vérifications prennent une vingtaine de minutes et se font gratuitement en ligne. Notez au fur et à mesure ce que vous trouvez : vous pourrez y revenir pendant le délai de réflexion.",
        ],
        bullets: [
          "Étape 1 : relevez sur le site du chirurgien, sa plaque ou le devis son nom complet et son numéro RPPS (11 chiffres).",
          "Étape 2 : recherchez ce nom sur l'Annuaire santé. Vérifiez la profession (médecin), la spécialité affichée et l'adresse d'exercice.",
          "Étape 3 : croisez avec l'annuaire du Conseil national de l'Ordre des médecins, qui indique l'inscription au tableau et la qualification reconnue.",
          "Étape 4 : vérifiez que la qualification correspond à la zone opérée. La chirurgie plastique, reconstructrice et esthétique couvre l'ensemble des interventions ; d'autres spécialités chirurgicales sont compétentes pour leur zone, par exemple l'ophtalmologie pour les paupières, l'ORL et chirurgie cervico-faciale pour le nez ou les oreilles, la chirurgie maxillo-faciale pour certaines interventions du visage.",
          "Étape 5 : demandez le nom et l'adresse exacte de l'établissement, puis vérifiez qu'il est autorisé pour la chirurgie esthétique (l'ARS de votre région peut vous le confirmer) et consultez son rapport de certification sur le site de la HAS.",
          "Étape 6 : demandez le nom du médecin anesthésiste-réanimateur et vérifiez-le de la même façon dans l'Annuaire santé.",
          "Étape 7 : demandez le nom de l'assureur en responsabilité civile professionnelle du chirurgien. Un refus de répondre est un signal à prendre au sérieux.",
        ],
      },
      {
        heading: "Les signaux d'alerte commerciaux",
        paragraphs: [
          "En France, la médecine ne doit pas être pratiquée comme un commerce. Certaines pratiques de communication ou de vente doivent vous inciter à la prudence, quelle que soit l'apparence professionnelle du site ou du cabinet.",
        ],
        bullets: [
          "Réduction limitée dans le temps, tirage au sort, jeu-concours ou parrainage rémunéré.",
          "Forfait associant plusieurs interventions présenté comme une économie.",
          "Premier contact uniquement avec un « conseiller » ou une plateforme qui ne donne pas le nom du chirurgien.",
          "Relances répétées par téléphone ou messagerie après une demande d'information.",
          "Photos avant/après sans conditions de prise de vue comparables, ou visiblement retouchées.",
          "Évaluation proposée uniquement sur photos ou en visio, sans examen en présentiel avant le devis.",
          "Paiement demandé en espèces, sur un compte à l'étranger ou sans reçu.",
        ],
      },
      {
        heading: "Ce qui change selon l'intervention",
        paragraphs: [
          "Les vérifications de base sont les mêmes pour toutes les interventions, mais quelques points s'ajoutent selon la zone opérée.",
        ],
        bullets: [
          "Augmentation mammaire : demandez la marque et le modèle des implants envisagés, et vérifiez qu'une carte d'implant vous sera remise.",
          "Lifting des seins, réduction mammaire, gynécomastie : demandez si une partie de l'intervention peut relever d'une prise en charge et si le chirurgien réalise la demande d'accord préalable.",
          "Gynécomastie : un bilan médical préalable (médecin traitant, parfois endocrinologue) est souvent utile pour rechercher une cause hormonale ou médicamenteuse.",
          "Blépharoplastie : un examen ophtalmologique préalable peut être demandé, notamment en cas de sécheresse oculaire.",
          "Liposuccion et lipofilling : demandez quel volume est envisagé, dans quelles zones et si l'établissement prévoit une hospitalisation selon ce volume.",
          "Lifting du visage, abdominoplastie : interrogez le chirurgien sur sa politique vis-à-vis du tabac, qui augmente le risque de souffrance de la peau.",
        ],
      },
      {
        heading: "Exemples de situations",
        paragraphs: [
          "Quelques cas fréquents, et la façon de les aborder.",
        ],
        bullets: [
          "Vous avez découvert un chirurgien sur un réseau social : vérifiez son RPPS et sa qualification avant toute prise de rendez-vous, comme pour n'importe quel praticien.",
          "Le cabinet vous propose de rencontrer un assistant à la première visite : demandez un rendez-vous avec le chirurgien lui-même avant tout devis.",
          "Deux chirurgiens qualifiés vous proposent des techniques différentes : demandez à chacun pourquoi il écarte l'autre option ; des avis différents peuvent être tous deux défendables.",
          "Le nom de l'établissement n'est pas encore connu au moment du devis : attendez de le connaître avant de vous engager.",
        ],
      },
    ],
    warningSigns: [
      "Le chirurgien n'apparaît pas dans l'Annuaire santé ou sa spécialité ne correspond pas à l'intervention.",
      "Vous ne rencontrez pas le chirurgien avant le jour de l'opération.",
      "On vous demande un acompte avant la fin du délai légal de 15 jours.",
      "L'intervention est proposée dans un lieu dont l'autorisation ne peut pas être indiquée.",
      "Une réduction est conditionnée à une réservation rapide.",
      "Les risques sont minimisés ou les questions éludées.",
      "Aucun suivi postopératoire ni contact d'urgence n'est prévu.",
      "Le nom du chirurgien n'est communiqué qu'après le versement d'une somme.",
      "Le premier contact se fait uniquement par messagerie avec un conseiller commercial.",
    ],
    resources: [
      { label: "Annuaire santé (RPPS)", url: "https://annuaire.sante.fr" },
      { label: "Conseil national de l'Ordre des médecins – annuaire des médecins", url: "https://www.conseil-national.medecin.fr" },
      { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" },
      { label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)", url: "https://www.sofcpre.fr" },
      { label: "Service-public.fr – chirurgie esthétique", url: "https://www.service-public.fr" },
      { label: "Agences régionales de santé (ARS)", url: "https://www.ars.sante.fr" },
      { label: "Légifrance – Code de la santé publique", url: "https://www.legifrance.gouv.fr" },
    ],
    interventions: [
      "rhinoplasty",
      "abdominoplasty",
      "breast-augmentation",
      "liposuction",
      "blepharoplasty",
      "facelift",
      "otoplasty",
      "breast-lift",
      "breast-reduction",
      "gynecomastia",
      "fat-grafting",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  {
    id: "surgery-abroad",
    locale: "fr",
    slug: "se-faire-operer-a-l-etranger",
    title: "Se faire opérer à l'étranger : les points à comparer",
    summary:
      "Cadre légal, suivi, langue, complications, voyage retour : les critères factuels à examiner avant une chirurgie esthétique hors de France.",
    answer:
      "Se faire opérer à l'étranger est possible, mais le cadre légal, l'organisation du suivi et la gestion des complications changent d'un pays à l'autre. Les points à examiner sont la vérification du chirurgien dans le registre officiel du pays, la langue de la consultation, la durée de séjour sur place, le voyage retour et ce qui se passe en cas de problème une fois rentré. La chirurgie esthétique n'est pas remboursée par l'Assurance maladie, y compris dans le cadre des soins transfrontaliers. Ce guide ne recommande aucune destination et ne classe aucun pays ni aucune clinique.",
    steps: [
      {
        heading: "Comprendre le cadre légal du pays",
        paragraphs: [
          "Les protections dont vous bénéficiez en France (devis détaillé et daté, délai de réflexion de 15 jours, interdiction de paiement autre que la consultation avant ce délai, autorisation de l'établissement par l'ARS) ne s'appliquent pas automatiquement ailleurs. Chaque pays a ses propres règles sur la qualification des chirurgiens, l'autorisation des établissements, la publicité et le délai de réflexion.",
          "En cas de litige, c'est en principe le droit et les juridictions du pays de l'intervention qui s'appliquent, ce qui peut compliquer un recours.",
        ],
        bullets: [
          "Quel registre officiel permet de vérifier le chirurgien ?",
          "Existe-t-il un délai légal ou recommandé entre le devis et l'opération ?",
          "Le chirurgien est-il assuré, et cette assurance couvre-t-elle un patient étranger ?",
        ],
      },
      {
        heading: "Vérifier la consultation et la langue",
        paragraphs: [
          "Une consultation préalable avec le chirurgien qui opérera, et pas seulement un échange de photos avec un intermédiaire, est nécessaire pour évaluer l'indication. Une consultation d'anesthésie doit également être prévue.",
          "Assurez-vous de comprendre parfaitement les explications, le consentement et les consignes postopératoires. Demandez des documents écrits dans une langue que vous maîtrisez, et la présence d'un interprète médical si besoin.",
        ],
      },
      {
        heading: "Anticiper le séjour et le voyage retour",
        paragraphs: [
          "Après une intervention, les vols long-courriers et les longs trajets en voiture ou en car augmentent le risque de phlébite (thrombose veineuse profonde) et d'embolie pulmonaire. Ce risque est plus marqué après une chirurgie du corps comme l'abdominoplastie.",
          "Le délai avant de reprendre l'avion dépend de l'intervention et de votre état de santé : il est souvent de plusieurs jours, parfois davantage. Il doit être fixé avec le chirurgien avant de réserver, en prévoyant une marge en cas de complication. Bas de contention, hydratation et mobilisation pendant le trajet font partie des précautions habituelles, à adapter sur avis médical.",
        ],
      },
      {
        heading: "Organiser le suivi et la gestion des complications",
        paragraphs: [
          "Les complications peuvent survenir après le retour : infection, hématome, désunion de cicatrice, sérome après une abdominoplastie, problème lié à un implant mammaire. Demandez qui assurera le suivi, comment joindre le chirurgien, et si une reprise est prévue sur place et à quelles conditions (frais de voyage, d'hébergement, de nouvelle intervention).",
          "Un chirurgien en France n'est pas tenu d'accepter de reprendre le suivi d'une intervention réalisée par un confrère à l'étranger, hors urgence. En cas d'urgence, vous serez pris en charge par le système de santé français.",
        ],
      },
      {
        heading: "Connaître les limites de la prise en charge",
        paragraphs: [
          "La directive européenne 2011/24/UE sur les soins de santé transfrontaliers permet le remboursement de soins reçus dans un autre pays de l'Union, sur la base des tarifs français et uniquement pour des soins qui seraient remboursés en France. La chirurgie esthétique n'en fait pas partie.",
          "Le formulaire S2 concerne des soins programmés autorisés au préalable par l'Assurance maladie : il ne s'applique pas à une intervention esthétique. La carte européenne d'assurance maladie (CEAM) couvre les soins médicalement nécessaires lors d'un séjour temporaire, mais pas un déplacement organisé pour se faire opérer.",
        ],
      },
      {
        heading: "Rassembler ses documents avant de rentrer",
        paragraphs: [
          "Demandez avant votre départ le compte rendu opératoire, le compte rendu d'anesthésie, les ordonnances, les consignes de soins et, pour une augmentation mammaire, la carte d'implant indiquant le fabricant, le modèle et le numéro de lot. Ces documents seront indispensables à tout médecin qui vous examinera ensuite.",
          "Prévenez votre médecin traitant de votre projet et de votre date de retour.",
        ],
      },
      {
        heading: "Un calendrier de séjour réaliste selon l'intervention",
        paragraphs: [
          "La durée de séjour se fixe avec le chirurgien, avant de réserver, en fonction de l'intervention, de votre santé et de la durée du trajet retour. Les ordres de grandeur ci-dessous sont souvent évoqués à titre indicatif ; ils ne remplacent pas l'avis du chirurgien et doivent être allongés en cas de complication ou d'association de plusieurs interventions.",
          "Prévoyez aussi le temps avant l'opération : consultation en présentiel avec le chirurgien, consultation d'anesthésie et examens éventuels, généralement un à deux jours avant l'intervention au minimum.",
        ],
        bullets: [
          "Blépharoplastie, otoplastie : contrôle et ablation des fils souvent prévus vers la fin de la première semaine ; à défaut, organisez cette ablation en France avant le départ.",
          "Rhinoplastie : attelle généralement retirée après environ une semaine ; un séjour couvrant cette période facilite le premier contrôle.",
          "Augmentation mammaire, lifting des seins, réduction mammaire, gynécomastie, liposuccion limitée : un séjour d'au moins une semaine est souvent évoqué avant un vol.",
          "Abdominoplastie, lifting du visage, liposuccion étendue, lipofilling des fesses ou interventions associées : un séjour plus long, de l'ordre de dix jours à deux semaines, est souvent évoqué.",
          "Dans tous les cas : prévoyez une marge de quelques jours, et un billet modifiable.",
        ],
      },
      {
        heading: "Le vol retour et le risque de thrombose",
        paragraphs: [
          "Une opération, l'immobilité et un trajet de plusieurs heures en position assise s'additionnent pour augmenter le risque de phlébite et d'embolie pulmonaire. Ce risque est plus élevé après une intervention longue ou du corps (abdominoplastie, liposuccion étendue, associations).",
          "Signalez au chirurgien et à l'anesthésiste tout facteur de risque : contraception œstroprogestative ou traitement hormonal, tabac, surpoids, antécédent personnel ou familial de phlébite, trouble de la coagulation. Un traitement anticoagulant préventif peut être prescrit ; demandez une ordonnance et un certificat pour transporter les seringues en cabine.",
        ],
        bullets: [
          "Bas ou chaussettes de contention adaptés, sur avis médical.",
          "Marcher quelques minutes régulièrement et bouger les chevilles en position assise.",
          "Boire de l'eau régulièrement et éviter l'alcool.",
          "Choisir une place côté couloir si possible.",
          "Essoufflement, douleur thoracique ou douleur du mollet pendant ou après le vol : prévenir l'équipage ou appeler le 15 ou le 112 dès l'arrivée.",
        ],
      },
      {
        heading: "Assurance et frais imprévus",
        paragraphs: [
          "Beaucoup d'assurances voyage et de cartes bancaires excluent les soins liés à une intervention programmée. Lisez les conditions avant le départ, et demandez une réponse écrite à votre assureur en citant l'intervention prévue.",
          "Certaines cliniques ou assureurs proposent une assurance complications spécifique. Vérifiez ce qu'elle couvre réellement : reprise chirurgicale sur place ou en France, frais de voyage et d'hébergement, rapatriement, durée de couverture après l'opération, exclusions (résultat jugé insatisfaisant, tabac, non-respect des consignes).",
        ],
        bullets: [
          "Nuits d'hôtel et repas supplémentaires si le retour doit être retardé.",
          "Billet de retour à modifier, éventuellement pour un accompagnant.",
          "Vêtements de contention, pansements et médicaments à racheter en France.",
          "Consultations de suivi ou soins infirmiers en France.",
          "Nouveau voyage si une reprise doit être réalisée sur place.",
        ],
      },
      {
        heading: "Le suivi une fois rentré",
        paragraphs: [
          "Organisez le suivi avant de partir. Prenez rendez-vous avec votre médecin traitant pour la semaine du retour et, si besoin, avec un infirmier pour les pansements ou l'ablation des fils. Convenez avec le chirurgien d'un moyen de le joindre (messagerie sécurisée, téléphone) et de consultations de contrôle à distance.",
          "Un chirurgien en France peut accepter de vous examiner pour un avis, mais n'est pas tenu de reprendre le suivi hors urgence. Une reprise à visée esthétique d'une intervention réalisée à l'étranger reste à votre charge.",
        ],
        bullets: [
          "Compte rendu opératoire et d'anesthésie, avec traduction en français si possible.",
          "Lettre de sortie précisant les consignes, la date d'ablation des fils et la durée de port de la contention.",
          "Ordonnances, dont celle d'un éventuel anticoagulant et sa durée.",
          "Carte d'implant après une augmentation mammaire (fabricant, modèle, numéro de lot).",
          "Coordonnées directes du chirurgien et de la clinique, et factures détaillées.",
        ],
      },
    ],
    warningSigns: [
      "Forfait « tout compris » vendu par un intermédiaire sans consultation préalable avec le chirurgien.",
      "Impossible de vérifier le chirurgien dans un registre officiel du pays.",
      "Opération prévue le lendemain de l'arrivée, sans temps de réflexion.",
      "Retour en avion prévu très peu de temps après l'intervention.",
      "Plusieurs interventions lourdes proposées en une seule séance pour réduire le séjour.",
      "Aucun document médical remis à la sortie.",
      "Aucune solution prévue en cas de complication après le retour.",
      "Le paiement intégral est exigé à l'avance par virement, sans contrat écrit.",
      "Les documents ne sont remis que dans une langue que vous ne comprenez pas.",
      "L'assurance proposée exclut précisément l'intervention prévue sans que cela vous soit signalé.",
    ],
    resources: [
      { label: "Ameli – soins à l'étranger", url: "https://www.ameli.fr" },
      { label: "Service-public.fr – soins dans un autre pays européen", url: "https://www.service-public.fr" },
      { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" },
      { label: "ANSM – implants mammaires et matériovigilance", url: "https://ansm.sante.fr" },
      { label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)", url: "https://www.sofcpre.fr" },
      { label: "Ministère de l'Europe et des affaires étrangères – Conseils aux voyageurs", url: "https://www.diplomatie.gouv.fr" },
      { label: "Centre européen des consommateurs France", url: "https://www.europe-consommateurs.eu" },
    ],
    interventions: [
      "rhinoplasty",
      "abdominoplasty",
      "breast-augmentation",
      "liposuction",
      "blepharoplasty",
      "facelift",
      "otoplasty",
      "breast-lift",
      "breast-reduction",
      "gynecomastia",
      "fat-grafting",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  {
    id: "preparing-consultation",
    locale: "fr",
    slug: "preparer-sa-consultation",
    title: "Préparer sa consultation de chirurgie esthétique",
    summary:
      "Questions à poser, antécédents médicaux, photos, consultation d'anesthésie : comment préparer sa première consultation de chirurgie esthétique.",
    answer:
      "Une consultation bien préparée permet d'obtenir des réponses claires et de décider en connaissance de cause. Notez vos attentes, vos antécédents médicaux et vos traitements, préparez une liste de questions sur la technique, les risques, les suites et le coût, et n'hésitez pas à venir accompagné. Une consultation d'anesthésie distincte est obligatoire avant toute intervention programmée sous anesthésie.",
    steps: [
      {
        heading: "Clarifier ce que vous souhaitez",
        paragraphs: [
          "Décrivez avec vos propres mots ce qui vous gêne et ce que vous attendez de l'intervention. Le chirurgien évaluera si ces attentes sont réalisables et vous expliquera les limites de la chirurgie.",
          "Des photos d'exemples peuvent aider à exprimer une idée, mais aucun chirurgien ne peut reproduire le résultat obtenu sur une autre personne : chaque anatomie est différente.",
        ],
      },
      {
        heading: "Rassembler vos antécédents médicaux",
        paragraphs: [
          "Le chirurgien a besoin d'une information complète pour évaluer les risques. Préparez une liste écrite, et apportez les comptes rendus utiles.",
        ],
        bullets: [
          "Maladies chroniques (diabète, hypertension, troubles de la coagulation, maladies auto-immunes).",
          "Traitements en cours, y compris anticoagulants, aspirine, contraception hormonale, compléments alimentaires et plantes.",
          "Allergies connues, notamment aux médicaments, au latex ou aux pansements.",
          "Interventions et anesthésies antérieures, et éventuelles complications.",
          "Tabac, alcool, variations de poids récentes, projet de grossesse.",
          "Antécédents personnels ou familiaux de phlébite ou d'embolie pulmonaire.",
        ],
      },
      {
        heading: "Préparer vos questions",
        paragraphs: [
          "Il est fréquent d'oublier une question une fois en consultation. Une liste écrite vous aide à couvrir l'essentiel et à noter les réponses.",
        ],
        bullets: [
          "Quelle est votre qualification et combien de fois réalisez-vous cette intervention ?",
          "Quelle technique proposez-vous dans mon cas, et pourquoi ?",
          "Quels sont les risques fréquents et les risques graves, même rares ?",
          "Combien de temps durent la convalescence et l'arrêt d'activité ?",
          "Où aura lieu l'intervention, et combien de temps resterai-je hospitalisé ?",
          "Que se passe-t-il en cas de complication ou de résultat insatisfaisant ? Une reprise est-elle facturée ?",
          "Quelles sont les alternatives, y compris celle de ne pas opérer ?",
        ],
      },
      {
        heading: "Les photos médicales",
        paragraphs: [
          "Le chirurgien prend généralement des photos de la zone concernée pour le dossier médical. Elles servent à préparer l'intervention et à suivre l'évolution. Vous pouvez demander comment elles sont conservées et qui y a accès ; elles sont couvertes par le secret médical.",
          "Pour la rhinoplastie, des photos de face et de profil sont habituelles ; pour l'abdominoplastie ou l'augmentation mammaire, des photos du tronc.",
        ],
      },
      {
        heading: "La consultation d'anesthésie",
        paragraphs: [
          "Pour une intervention programmée, une consultation avec un médecin anesthésiste-réanimateur est obligatoire plusieurs jours avant l'opération. Elle permet d'évaluer les risques liés à l'anesthésie, de choisir la technique adaptée et de donner des consignes (jeûne, arrêt de certains médicaments, arrêt du tabac).",
          "Apportez la même liste de traitements et d'antécédents, ainsi que vos derniers résultats d'analyses si vous en avez.",
        ],
      },
      {
        heading: "Venir accompagné et prendre le temps",
        paragraphs: [
          "Une personne de confiance peut vous aider à retenir les informations et à poser des questions auxquelles vous n'auriez pas pensé. Vous pouvez aussi prendre des notes.",
          "Vous n'avez rien à décider le jour de la consultation. Le devis détaillé et daté remis à l'issue de la consultation ouvre un délai légal de réflexion de 15 jours minimum. Une deuxième consultation peut être demandée avant de vous décider.",
        ],
      },
      {
        heading: "Des questions précises, classées par thème",
        paragraphs: [
          "En complément des questions générales, ces questions plus précises aident à comprendre ce qui vous attend concrètement. Choisissez celles qui vous concernent.",
        ],
        bullets: [
          "Indication : qu'est-ce qui, dans mon anatomie, rend cette intervention adaptée ou en limite l'effet ?",
          "Technique : où seront placées les cicatrices, quelle sera leur longueur et combien de temps mettront-elles à s'estomper ?",
          "Anesthésie : anesthésie générale, locale ou locale avec sédation ? Hospitalisation ambulatoire ou nuit sur place ?",
          "Risques : quelles complications rencontrez-vous le plus souvent avec cette intervention, et comment les prenez-vous en charge ?",
          "Suites : quand pourrai-je conduire, travailler, porter une charge ou un enfant, reprendre le sport ? Combien de temps porter un vêtement de contention ?",
          "Évolution : quand le résultat sera-t-il stabilisé, et comment évoluera-t-il avec l'âge, une grossesse ou une variation de poids ?",
          "Organisation : combien de consultations de suivi sont prévues, et qui joindre la nuit ou le week-end ?",
          "Coût : qu'est-ce qui n'est pas inclus dans le devis ? Quelles sont les conditions d'une éventuelle reprise ?",
        ],
      },
      {
        heading: "Questions propres à certaines interventions",
        paragraphs: [
          "Certaines interventions soulèvent des questions particulières qu'il vaut mieux préparer à l'avance.",
        ],
        bullets: [
          "Augmentation mammaire : quel type d'implant, quelle marque, quelle surveillance par imagerie, quel risque de LAGC-AIM (lymphome rare associé aux implants), quelle durée de vie envisager ?",
          "Lifting des seins, réduction mammaire : quel effet possible sur l'allaitement et la sensibilité des mamelons ? Une prise en charge est-elle envisageable dans mon cas ?",
          "Gynécomastie : un bilan pour rechercher une cause médicale ou médicamenteuse a-t-il été fait ? Quelle part de glande et de graisse ?",
          "Blépharoplastie : faut-il un bilan ophtalmologique préalable ? Quel risque de sécheresse oculaire ou de fermeture incomplète des paupières ?",
          "Lifting du visage : où passeront les cicatrices autour des oreilles ? Quel risque pour les nerfs du visage ?",
          "Liposuccion, lipofilling : quel volume est envisagé ? Quelle part de la graisse injectée risque de se résorber ? Faudra-t-il plusieurs séances ?",
          "Otoplastie : combien de temps porter un bandeau, de jour et de nuit ?",
        ],
      },
      {
        heading: "Les documents à apporter",
        paragraphs: [
          "Préparez un dossier la veille. Tout ce qui renseigne le chirurgien sur votre santé réduit le risque d'oubli.",
        ],
        bullets: [
          "Pièce d'identité et carte Vitale.",
          "Ordonnances en cours ou liste écrite de vos traitements, avec les doses.",
          "Comptes rendus d'interventions et d'anesthésies antérieures.",
          "Bilans sanguins récents et, pour une chirurgie des seins, vos dernières mammographie ou échographie si vous en avez.",
          "Carte d'implant si vous êtes déjà porteuse d'implants mammaires.",
          "Courrier de votre médecin traitant si un problème de santé est suivi.",
          "Votre liste de questions et de quoi noter les réponses.",
        ],
      },
      {
        heading: "Ce que vous devez avoir en repartant",
        paragraphs: [
          "À la fin de la consultation, vérifiez que vous repartez avec les éléments qui vous permettront de réfléchir chez vous, sans avoir à vous fier à votre mémoire.",
        ],
        bullets: [
          "Le devis détaillé et daté, qui ouvre le délai de réflexion de 15 jours.",
          "Un document d'information écrit sur l'intervention, ses suites et ses risques.",
          "Le formulaire de consentement, à relire chez vous plutôt qu'à signer sur place.",
          "Les coordonnées pour joindre le cabinet si une question vous vient.",
          "Les modalités pour prendre la consultation d'anesthésie.",
        ],
      },
    ],
    warningSigns: [
      "La consultation dure quelques minutes et ne comporte pas d'examen.",
      "Vos questions sur les risques reçoivent des réponses vagues ou rassurantes sans détail.",
      "On vous pousse à signer le devis ou à fixer une date le jour même.",
      "Vos antécédents médicaux ou vos traitements ne sont pas demandés.",
      "Aucune consultation d'anesthésie n'est prévue.",
      "Le résultat est présenté comme certain à partir de photos d'autres patients.",
      "Aucun document écrit ne vous est remis à la fin de la consultation.",
    ],
    resources: [
      { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" },
      { label: "Annuaire santé (RPPS)", url: "https://annuaire.sante.fr" },
      { label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)", url: "https://www.sofcpre.fr" },
      { label: "Service-public.fr – droits des patients", url: "https://www.service-public.fr" },
      { label: "Ameli – Mon espace santé", url: "https://www.ameli.fr" },
      { label: "ANSM – implants mammaires", url: "https://ansm.sante.fr" },
    ],
    interventions: [
      "rhinoplasty",
      "abdominoplasty",
      "breast-augmentation",
      "liposuction",
      "blepharoplasty",
      "facelift",
      "otoplasty",
      "breast-lift",
      "breast-reduction",
      "gynecomastia",
      "fat-grafting",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  {
    id: "quote-and-cooling-off",
    locale: "fr",
    slug: "devis-et-delai-de-reflexion",
    title: "Devis et délai de réflexion en chirurgie esthétique",
    summary:
      "Ce que doit contenir le devis, le délai légal de 15 jours, les acomptes, l'annulation et les précautions avant un financement à crédit.",
    answer:
      "En France, un devis détaillé et daté doit vous être remis avant toute intervention de chirurgie esthétique. Un délai minimal de 15 jours doit ensuite être respecté avant l'opération, et aucune somme autre que les honoraires de consultation ne peut être exigée pendant ce délai. Ce temps vous appartient : vous pouvez renoncer sans avoir à vous justifier.",
    steps: [
      {
        heading: "Ce que doit contenir le devis",
        paragraphs: [
          "Le contenu du devis de chirurgie esthétique est encadré par la réglementation. Il doit vous permettre de savoir précisément qui opère, quoi, où et pour quel coût total.",
        ],
        bullets: [
          "Nom, qualification et coordonnées du chirurgien et, le cas échéant, du médecin anesthésiste.",
          "Description précise de l'intervention et de la technique prévue.",
          "Type d'anesthésie et nom de l'établissement où aura lieu l'intervention.",
          "Détail des honoraires du chirurgien et de l'anesthésiste, des frais d'hospitalisation et des éventuels implants ou vêtements de contention.",
          "Montant total toutes taxes comprises.",
          "Date de remise du devis et durée de validité.",
        ],
      },
      {
        heading: "Le délai légal de 15 jours",
        paragraphs: [
          "Le Code de la santé publique impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention. Le patient peut demander à ce que ce délai soit allongé ; il ne peut pas être raccourci.",
          "Ce délai sert à relire les informations reçues, à poser des questions complémentaires, à prendre un autre avis si besoin et à organiser la convalescence (arrêt de travail, aide à domicile, garde des enfants).",
        ],
      },
      {
        heading: "Acomptes et paiements",
        paragraphs: [
          "Avant la fin du délai de 15 jours, aucune somme autre que les honoraires de consultation ne peut vous être demandée : ni acompte, ni arrhes, ni chèque de réservation, même non encaissé.",
          "La chirurgie à visée purement esthétique n'est pas remboursée par l'Assurance maladie et est en règle générale soumise à la TVA. Demandez si une partie de l'intervention peut relever d'une prise en charge (par exemple une rhinoseptoplastie pour gêne respiratoire, ou certaines abdominoplasties après grande perte de poids, selon des critères précis) : la partie esthétique reste à votre charge.",
        ],
      },
      {
        heading: "Annuler ou reporter",
        paragraphs: [
          "Vous pouvez renoncer à l'intervention pendant le délai de réflexion sans frais autres que la consultation déjà réglée. Après ce délai, les conditions d'annulation ou de report doivent figurer par écrit : lisez-les avant de signer.",
          "Si votre état de santé change (infection, fièvre, nouvelle maladie, grossesse), prévenez le chirurgien : l'intervention peut devoir être reportée pour votre sécurité.",
        ],
      },
      {
        heading: "Précautions si vous envisagez un crédit",
        paragraphs: [
          "Un crédit à la consommation engage sur plusieurs mois ou années, quel que soit le déroulement de la convalescence. Vérifiez le taux annuel effectif global (TAEG), le coût total du crédit et les mensualités.",
          "Un crédit à la consommation ouvre en principe un droit de rétractation de 14 jours. Méfiez-vous d'un financement proposé directement par l'intermédiaire ou l'établissement le jour de la consultation, et ne laissez pas un crédit vous conduire à décider plus vite.",
        ],
      },
      {
        heading: "Garder une trace écrite",
        paragraphs: [
          "Conservez le devis signé, le document d'information remis, le consentement éclairé et toute correspondance. Ces documents seront utiles en cas de question sur la facturation ou de complication.",
          "Les mêmes règles s'appliquent quelle que soit l'intervention esthétique, du visage, du corps ou des seins.",
        ],
      },
      {
        heading: "À quoi ressemble un devis lisible",
        paragraphs: [
          "Un devis bien construit se lit ligne par ligne, sans avoir besoin d'explications orales. Voici les rubriques que l'on s'attend à y trouver ; les honoraires de l'anesthésiste font parfois l'objet d'un devis séparé, qui doit alors vous être remis aussi.",
        ],
        bullets: [
          "Identification : chirurgien (nom, qualification, RPPS), établissement (nom, adresse), anesthésiste.",
          "Acte : intitulé de l'intervention, zone(s) traitée(s), technique prévue.",
          "Honoraires du chirurgien et honoraires de l'anesthésiste, chacun sur une ligne.",
          "Frais d'établissement : bloc opératoire, salle de réveil, chambre, en ambulatoire ou avec le nombre de nuits.",
          "Dispositifs et fournitures : implants (marque, modèle), vêtement de contention si fourni.",
          "Suivi : nombre de consultations postopératoires incluses et sur quelle durée.",
          "TVA éventuelle et montant total toutes taxes comprises.",
          "Date de remise, durée de validité, mention du délai de réflexion et emplacement pour votre signature.",
        ],
      },
      {
        heading: "Les frais annexes souvent oubliés",
        paragraphs: [
          "Certains frais ne figurent pas sur le devis du chirurgien, parce qu'ils ne relèvent pas de lui. Demandez-en la liste pour évaluer le coût réel de l'intervention.",
        ],
        bullets: [
          "Vêtement de contention, gaine ou soutien-gorge postopératoire, s'ils ne sont pas fournis.",
          "Médicaments, pansements et soins infirmiers à domicile.",
          "Examens préopératoires (bilan sanguin, imagerie) et consultation d'anesthésie.",
          "Séances de drainage ou de kinésithérapie conseillées après une liposuccion ou une abdominoplastie.",
          "Transport, hébergement et éventuel accompagnant si l'établissement est éloigné.",
          "Jours sans revenu : renseignez-vous auprès de votre caisse et de votre employeur sur l'indemnisation d'un arrêt de travail après une intervention non prise en charge.",
          "Reprise éventuelle : frais d'établissement et d'anesthésie, souvent facturés même si les honoraires du chirurgien ne le sont pas.",
        ],
      },
      {
        heading: "Acompte ou arrhes : ce qu'il faut vérifier après le délai",
        paragraphs: [
          "Une fois le délai de 15 jours écoulé, un versement peut vous être demandé pour réserver la date. Faites préciser par écrit s'il s'agit d'un acompte ou d'arrhes. En droit de la consommation, les arrhes permettent en principe de renoncer en les abandonnant, alors qu'un acompte engage plus fermement ; sans précision, les sommes versées d'avance sont présumées être des arrhes. Les conditions applicables doivent figurer sur le document que vous signez.",
          "Payez par un moyen traçable (carte, chèque, virement en France) et demandez systématiquement un reçu.",
        ],
      },
      {
        heading: "Un calendrier type, du devis à l'intervention",
        paragraphs: [
          "Ce calendrier illustre l'enchaînement habituel ; votre chirurgien peut proposer un délai plus long, jamais plus court.",
        ],
        bullets: [
          "Jour 0 : consultation avec le chirurgien et remise du devis daté. Seuls les honoraires de consultation sont réglés.",
          "Jours 1 à 15 : relecture des documents, questions par écrit, éventuel second avis, consultation d'anesthésie, organisation de la convalescence.",
          "À partir du jour 15 : signature du devis si vous décidez de poursuivre, et versement éventuel selon les conditions écrites.",
          "Quelques jours avant : rappel des consignes (jeûne, arrêt du tabac, médicaments à suspendre), confirmation de l'accompagnant pour le retour.",
          "Le jour même : vous pouvez encore renoncer ; les conséquences financières sont celles prévues par écrit.",
        ],
      },
    ],
    warningSigns: [
      "On vous demande un acompte ou un chèque de réservation avant la fin du délai de 15 jours.",
      "Le devis ne détaille pas les honoraires, l'anesthésie ou les frais d'hospitalisation.",
      "Le devis n'est pas daté ou ne mentionne pas l'établissement.",
      "Une date d'intervention moins de 15 jours après le devis est proposée.",
      "Une remise est accordée en échange d'une décision rapide.",
      "Un crédit vous est proposé avant même la fin de la consultation.",
      "Le devis mentionne des frais « à prévoir » sans les détailler.",
      "On refuse de vous laisser emporter le devis pour le relire chez vous.",
    ],
    resources: [
      { label: "Service-public.fr – chirurgie esthétique : devis et délai de réflexion", url: "https://www.service-public.fr" },
      { label: "Ameli – prise en charge des soins", url: "https://www.ameli.fr" },
      { label: "Conseil national de l'Ordre des médecins", url: "https://www.conseil-national.medecin.fr" },
      { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" },
      { label: "Légifrance – Code de la santé publique et Code de la consommation", url: "https://www.legifrance.gouv.fr" },
      { label: "Institut national de la consommation (INC)", url: "https://www.inc-conso.fr" },
    ],
    interventions: [
      "rhinoplasty",
      "abdominoplasty",
      "breast-augmentation",
      "liposuction",
      "blepharoplasty",
      "facelift",
      "otoplasty",
      "breast-lift",
      "breast-reduction",
      "gynecomastia",
      "fat-grafting",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  {
    id: "warning-signs-after-surgery",
    locale: "fr",
    slug: "signes-d-alerte-apres-une-operation",
    title: "Signes d'alerte après une chirurgie esthétique",
    summary:
      "Fièvre, douleur qui augmente, gonflement d'un seul côté, douleur du mollet, essoufflement : les signes qui doivent faire appeler sans attendre.",
    answer:
      "Certaines suites sont attendues après une opération, comme un gonflement, des ecchymoses ou une gêne qui diminue progressivement. D'autres signes doivent faire contacter rapidement le chirurgien : fièvre, douleur qui augmente au lieu de diminuer, gonflement important d'un seul côté, écoulement de la cicatrice. Un essoufflement brutal, une douleur thoracique ou un malaise imposent d'appeler immédiatement le 15 ou le 112.",
    steps: [
      {
        heading: "Distinguer les suites habituelles des signes d'alerte",
        paragraphs: [
          "Dans les jours qui suivent l'intervention, un œdème, des bleus, une sensation de tension et une douleur contrôlée par les antalgiques prescrits sont habituels. Ils doivent s'atténuer progressivement.",
          "Un symptôme qui s'aggrave, qui apparaît brutalement ou qui ne correspond pas à ce que le chirurgien vous a décrit doit vous conduire à appeler, même en dehors des heures de consultation.",
        ],
      },
      {
        heading: "Les signes qui imposent d'appeler le 15 ou le 112",
        paragraphs: [
          "Après une chirurgie, le risque de thrombose veineuse profonde (phlébite) et d'embolie pulmonaire existe, en particulier après une chirurgie du corps comme l'abdominoplastie. Certains signes sont des urgences vitales.",
        ],
        bullets: [
          "Essoufflement brutal ou difficulté à respirer.",
          "Douleur dans la poitrine, notamment si elle augmente à l'inspiration.",
          "Crachats sanglants, malaise, perte de connaissance.",
          "Saignement abondant qui ne s'arrête pas.",
          "Réaction allergique avec gonflement du visage ou de la gorge.",
        ],
      },
      {
        heading: "Les signes qui doivent faire contacter le chirurgien rapidement",
        paragraphs: [
          "Ces signes ne sont pas toujours graves, mais ils nécessitent un avis médical dans la journée. Si vous ne parvenez pas à joindre le chirurgien ou l'établissement, appelez le 15.",
        ],
        bullets: [
          "Fièvre (38 °C ou plus) ou frissons.",
          "Douleur qui augmente au lieu de diminuer, ou qui n'est plus soulagée par le traitement prescrit.",
          "Gonflement important, dur ou tendu d'un seul côté, par exemple d'un sein après une augmentation mammaire : il peut s'agir d'un hématome.",
          "Douleur, rougeur ou gonflement d'un mollet.",
          "Rougeur qui s'étend, chaleur, écoulement purulent ou malodorant de la cicatrice.",
          "Cicatrice qui s'ouvre, peau qui noircit ou change de couleur.",
          "Saignement de nez persistant après une rhinoplastie.",
        ],
      },
      {
        heading: "Qui appeler",
        paragraphs: [
          "Le chirurgien ou l'établissement doit vous avoir remis un numéro joignable en permanence. Gardez-le près de vous et enregistrez-le dans votre téléphone avant l'intervention.",
          "En cas d'urgence vitale, appelez le 15 (SAMU) ou le 112. En dehors de l'urgence vitale et si le chirurgien est injoignable, le 116 117 permet de joindre un médecin de garde dans les régions où ce service est déployé. Votre médecin traitant peut aussi vous examiner.",
        ],
      },
      {
        heading: "Garder ses documents à portée de main",
        paragraphs: [
          "Un médecin qui vous examine en urgence a besoin de savoir ce qui a été fait. Conservez ensemble et facilement accessibles les documents de l'intervention.",
        ],
        bullets: [
          "Compte rendu opératoire et compte rendu d'anesthésie.",
          "Ordonnances et liste des médicaments pris.",
          "Carte d'implant (fabricant, modèle, numéro de lot) après une augmentation mammaire.",
          "Coordonnées du chirurgien et de l'établissement.",
        ],
      },
      {
        heading: "Signaler un effet indésirable",
        paragraphs: [
          "Un incident lié à un dispositif médical, comme un implant mammaire, peut être signalé à l'ANSM par les professionnels de santé et par les patients eux-mêmes, via le portail officiel de signalement des événements sanitaires indésirables.",
          "Respectez les consultations de suivi prévues, même si tout semble aller bien : elles permettent de repérer des problèmes avant qu'ils ne deviennent gênants.",
        ],
      },
      {
        heading: "Dans les premières heures",
        paragraphs: [
          "La plupart des complications précoces, comme un hématome, apparaissent dans les 24 à 48 premières heures. C'est la raison pour laquelle il est demandé de ne pas rester seul la première nuit après une intervention en ambulatoire.",
        ],
        bullets: [
          "Saignement qui traverse le pansement ou remplit rapidement un drain.",
          "Gonflement rapide, tendu et douloureux d'un côté : visage ou cou après un lifting, sein après une chirurgie mammaire, thorax après une gynécomastie.",
          "Baisse de la vision, douleur intense de l'œil ou œil qui gonfle et devient dur après une blépharoplastie : complication rare mais urgente, appelez le 15.",
          "Douleur intense non calmée par le traitement prescrit.",
          "Nausées ou vomissements empêchant de boire ou de prendre les médicaments.",
          "Impossibilité d'uriner, somnolence inhabituelle ou confusion.",
        ],
      },
      {
        heading: "Dans les premiers jours",
        paragraphs: [
          "Entre le deuxième et le dixième jour environ, les infections, les problèmes de cicatrisation et les phlébites sont les principaux points de vigilance.",
        ],
        bullets: [
          "Fièvre, frissons, rougeur qui s'étend autour d'une cicatrice, écoulement trouble ou malodorant.",
          "Douleur ou gonflement d'un mollet, essoufflement : risque de phlébite ou d'embolie pulmonaire.",
          "Peau qui devient violacée, grise ou noire, notamment après une abdominoplastie, un lifting ou une chirurgie mammaire, en particulier chez les fumeurs.",
          "Essoufflement, confusion ou petites taches rouges sur la peau après une liposuccion ou un lipofilling : complication rare, appelez le 15.",
          "Douleur croissante d'une oreille sous le bandeau après une otoplastie.",
          "Cicatrice qui s'ouvre ou fil qui ressort.",
        ],
      },
      {
        heading: "Dans les semaines et les mois suivants",
        paragraphs: [
          "Certains signes apparaissent plus tard. Ils sont rarement urgents mais justifient une consultation auprès du chirurgien.",
        ],
        bullets: [
          "Gonflement qui réapparaît, fluctue ou donne une sensation de liquide sous la peau (sérome), après une abdominoplastie ou une liposuccion.",
          "Sein qui durcit, change de forme ou augmente de volume des mois ou des années après la pose d'un implant : une consultation est nécessaire pour en rechercher la cause.",
          "Cicatrice qui s'épaissit, reste rouge et démange au-delà de quelques mois.",
          "Asymétrie qui s'accentue, irrégularités ou creux après une liposuccion.",
          "Œil sec, irrité, ou paupière qui ne ferme pas complètement après une blépharoplastie.",
          "Tristesse persistante, regrets envahissants ou repli sur soi : parlez-en au chirurgien ou à votre médecin traitant.",
        ],
      },
      {
        heading: "Ce qu'il faut noter avant d'appeler",
        paragraphs: [
          "Quelques informations précises permettent au médecin d'évaluer la situation plus vite, en particulier au téléphone.",
        ],
        bullets: [
          "Date et nature de l'intervention, nom du chirurgien.",
          "Heure d'apparition du symptôme et son évolution depuis.",
          "Température mesurée, côté concerné, aspect de la cicatrice.",
          "Quantité et couleur du liquide recueilli si vous avez un drain.",
          "Médicaments pris et heure de la dernière prise.",
          "Une photo de la zone, si le chirurgien vous a indiqué un moyen sécurisé de la lui transmettre.",
        ],
      },
    ],
    warningSigns: [
      "Essoufflement brutal ou douleur thoracique : appeler le 15 ou le 112.",
      "Fièvre à 38 °C ou plus, frissons.",
      "Douleur qui augmente au lieu de diminuer.",
      "Gonflement important et dur d'un seul côté.",
      "Douleur, rougeur ou gonflement d'un mollet.",
      "Écoulement purulent, rougeur qui s'étend ou cicatrice qui s'ouvre.",
      "Saignement abondant ou persistant.",
      "Baisse de la vision ou douleur intense d'un œil après une chirurgie des paupières : appeler le 15.",
      "Gonflement rapide d'un côté du visage ou du cou après un lifting.",
      "Confusion, somnolence inhabituelle ou essoufflement après une liposuccion ou un lipofilling.",
    ],
    resources: [
      { label: "Ameli – numéros d'urgence et santé", url: "https://www.ameli.fr" },
      { label: "ANSM – signalement et implants mammaires", url: "https://ansm.sante.fr" },
      { label: "Service-public.fr – numéros d'urgence", url: "https://www.service-public.fr" },
      { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" },
      { label: "Portail de signalement des événements sanitaires indésirables", url: "https://signalement.social-sante.gouv.fr" },
      { label: "Société française d'anesthésie et de réanimation (SFAR)", url: "https://sfar.org" },
      { label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)", url: "https://www.sofcpre.fr" },
    ],
    interventions: [
      "rhinoplasty",
      "abdominoplasty",
      "breast-augmentation",
      "liposuction",
      "blepharoplasty",
      "facelift",
      "otoplasty",
      "breast-lift",
      "breast-reduction",
      "gynecomastia",
      "fat-grafting",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  {
    id: "right-time",
    locale: "fr",
    slug: "est-ce-le-bon-moment",
    title: "Chirurgie esthétique : est-ce le bon moment ?",
    summary:
      "Motivation personnelle, pression extérieure, événements de vie, poids stable, projet de grossesse, dysmorphophobie : les questions à se poser avant.",
    answer:
      "Le bon moment pour une chirurgie esthétique est celui où la demande vient de vous, est stable depuis longtemps, et où votre santé, votre poids et votre situation personnelle permettent une convalescence sereine. Une décision prise sous la pression d'un tiers, juste après un événement difficile ou avant une grossesse prévue mérite d'être reportée. Une préoccupation envahissante pour un défaut minime peut relever d'un trouble appelé dysmorphophobie, pour lequel une aide existe. Cette plateforme est réservée aux personnes majeures.",
    steps: [
      {
        heading: "Interroger sa motivation",
        paragraphs: [
          "Une demande qui vient de vous, ancienne et précise (une gêne identifiée sur une zone du corps), est un point de départ plus solide qu'un souhait apparu récemment ou lié à l'image renvoyée par d'autres.",
          "La chirurgie peut modifier une forme ; elle ne règle pas une difficulté de couple, une perte de confiance générale ou une situation professionnelle. Il est utile de se demander ce que l'on attend concrètement de l'intervention.",
        ],
        bullets: [
          "Depuis combien de temps cette gêne existe-t-elle ?",
          "Le souhait viendrait-il de vous si personne ne vous en parlait ?",
          "Qu'attendez-vous précisément de l'intervention ?",
        ],
      },
      {
        heading: "Repérer les pressions extérieures",
        paragraphs: [
          "Remarques d'un partenaire ou de l'entourage, comparaison avec des images filtrées sur les réseaux sociaux, sollicitations commerciales : ces pressions peuvent pousser à une décision que l'on regrettera.",
          "Un chirurgien attentif cherchera à savoir pour qui et pourquoi vous souhaitez l'intervention. Il peut refuser d'opérer s'il estime que la demande ne vient pas de vous.",
        ],
      },
      {
        heading: "Tenir compte des événements de vie",
        paragraphs: [
          "Une séparation, un deuil, une perte d'emploi ou une période de stress intense ne sont pas des moments favorables pour une décision de ce type. Il est généralement conseillé d'attendre que la situation se soit stabilisée.",
          "Pensez aussi à l'organisation pratique : arrêt de travail, aide pour les tâches quotidiennes, garde des enfants, impossibilité de porter des charges après une abdominoplastie.",
        ],
      },
      {
        heading: "Poids, grossesse et allaitement",
        paragraphs: [
          "Un poids stable depuis plusieurs mois est habituellement recommandé avant une chirurgie du corps : une variation importante après une abdominoplastie peut modifier le résultat.",
          "Une grossesse après une abdominoplastie peut distendre à nouveau la paroi abdominale ; il est souvent conseillé d'attendre d'avoir terminé ses projets de grossesse. Pour une augmentation mammaire, la grossesse et l'allaitement modifient le volume et la forme des seins ; la question de l'allaitement après implants est à aborder avec le chirurgien.",
        ],
      },
      {
        heading: "La dysmorphophobie : reconnaître les signes",
        paragraphs: [
          "La dysmorphophobie (ou trouble dysmorphique corporel) est un trouble dans lequel une personne est préoccupée de façon excessive par un défaut physique minime ou invisible pour les autres. Elle n'est pas un manque de volonté et se soigne.",
          "Dans ce cas, la chirurgie ne fait généralement pas disparaître la souffrance et la préoccupation se reporte souvent sur une autre zone. Le chirurgien peut aborder ce sujet et proposer d'en parler à un professionnel.",
        ],
        bullets: [
          "Pensées sur l'apparence occupant plusieurs heures par jour.",
          "Vérifications répétées dans le miroir, ou au contraire évitement des miroirs.",
          "Évitement de sorties, de photos ou de situations sociales.",
          "Demandes répétées d'interventions sans satisfaction durable.",
        ],
      },
      {
        heading: "Où trouver de l'aide",
        paragraphs: [
          "Votre médecin traitant peut vous écouter et vous orienter vers un psychiatre ou un psychologue. Le dispositif « Mon soutien psy » permet, sous conditions, un accompagnement par un psychologue avec une prise en charge de l'Assurance maladie.",
          "En cas de détresse ou d'idées suicidaires, le 3114, numéro national de prévention du suicide, est joignable gratuitement 24 heures sur 24. En cas de danger immédiat, appelez le 15 ou le 112.",
        ],
      },
      {
        heading: "L'âge et la maturité",
        paragraphs: [
          "Cette plateforme s'adresse exclusivement aux personnes majeures. Certaines interventions, comme la rhinoplastie, nécessitent en outre que la croissance du visage soit terminée.",
          "Reporter une décision n'est jamais un échec. Une intervention qui reste souhaitée après plusieurs mois de réflexion repose sur une base plus solide.",
        ],
      },
      {
        heading: "Situations de vie, cas par cas",
        paragraphs: [
          "Certaines périodes ne sont pas favorables, soit parce que le corps n'est pas stabilisé, soit parce que la décision risque d'être prise pour de mauvaises raisons. Ces repères généraux sont à discuter avec le chirurgien.",
        ],
        bullets: [
          "Grossesse en cours ou allaitement : la chirurgie esthétique est reportée. Après une grossesse, beaucoup de chirurgiens conseillent d'attendre plusieurs mois après la fin de l'allaitement pour que les seins et le ventre se stabilisent.",
          "Perte de poids en cours, par un régime ou après une chirurgie de l'obésité : il est habituellement conseillé d'attendre que le poids soit stable depuis plusieurs mois, ce qui représente souvent un an ou plus après une chirurgie de l'obésité.",
          "Rupture, deuil, perte d'emploi : attendre que la situation se soit apaisée permet de vérifier que le souhait persiste.",
          "Maladie non équilibrée (diabète, hypertension) ou tabagisme actif : un report le temps de stabiliser la situation réduit les risques.",
          "Événement à date fixe (mariage, voyage, rentrée) : prévoyez une large marge, car l'œdème et les ecchymoses peuvent durer plusieurs semaines et une complication peut retarder la récupération.",
          "Été et vacances : soleil sur les cicatrices et baignade sont souvent déconseillés pendant plusieurs semaines.",
        ],
      },
      {
        heading: "L'âge, au-delà de la majorité",
        paragraphs: [
          "Être majeur est une condition pour utiliser cette plateforme, mais ce n'est pas la seule question liée à l'âge. Chez le jeune adulte, certaines zones peuvent encore évoluer : la forme du nez, le volume des seins, ou une gynécomastie apparue à l'adolescence, qui régresse souvent spontanément et mérite un bilan médical. L'otoplastie est souvent réalisée pendant l'enfance, mais elle reste possible à l'âge adulte.",
          "Plus tard dans la vie, c'est l'état de santé général plus que l'âge lui-même qui guide la décision : maladies associées, traitements en cours, capacité à supporter l'anesthésie et la convalescence. La consultation d'anesthésie en tient compte.",
        ],
      },
      {
        heading: "Se donner un calendrier de décision",
        paragraphs: [
          "Il peut être utile de s'imposer quelques étapes avant de décider, par exemple : noter ce qui vous gêne, en reparler quelques mois plus tard, consulter, puis laisser passer le délai de réflexion sans pression de date.",
          "Vous pouvez considérer que les conditions sont réunies lorsque la plupart des points suivants sont vrais.",
        ],
        bullets: [
          "Le souhait est stable depuis longtemps et vient de vous.",
          "Votre poids est stable et aucune grossesse n'est prévue dans les prochains mois.",
          "Votre santé est équilibrée et vous pouvez arrêter de fumer si on vous le demande.",
          "La convalescence est organisée : arrêt de travail, aide à domicile, garde des enfants.",
          "Le financement ne met pas votre budget en difficulté.",
          "Vous savez reformuler avec vos mots ce que l'intervention peut et ne peut pas changer.",
        ],
      },
    ],
    warningSigns: [
      "Le souhait est apparu après les remarques d'un partenaire ou de l'entourage.",
      "La décision suit de près une rupture, un deuil ou une période de crise.",
      "La préoccupation pour un défaut occupe une grande partie de vos journées.",
      "Vous attendez de l'intervention qu'elle change votre vie ou vos relations.",
      "Une perte de poids importante est en cours ou une grossesse est prévue prochainement.",
      "Vous avez déjà eu plusieurs interventions sans être satisfait(e).",
      "Vous souhaitez placer l'intervention juste avant un événement à date fixe, sans marge.",
      "Le financement de l'intervention mettrait votre budget en difficulté.",
    ],
    resources: [
      { label: "Ameli – Mon soutien psy", url: "https://www.ameli.fr" },
      { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" },
      { label: "Service-public.fr – santé", url: "https://www.service-public.fr" },
      { label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)", url: "https://www.sofcpre.fr" },
      { label: "3114 – numéro national de prévention du suicide", url: "https://3114.fr" },
      { label: "Psycom – information sur la santé mentale", url: "https://www.psycom.org" },
    ],
    interventions: [
      "rhinoplasty",
      "abdominoplasty",
      "breast-augmentation",
      "liposuction",
      "blepharoplasty",
      "facelift",
      "otoplasty",
      "breast-lift",
      "breast-reduction",
      "gynecomastia",
      "fat-grafting",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
];
