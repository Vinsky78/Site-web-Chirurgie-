import type { GlossaryTerm } from "../types";

/**
 * Lexique France (fr). Définitions factuelles, en langage courant, rédigées
 * selon la charte éditoriale. Statut "draft" tant qu'un chirurgien qualifié
 * ne les a pas relues.
 */
export const glossaryFr: GlossaryTerm[] = [
  {
    id: "seroma",
    locale: "fr",
    slug: "serome",
    term: "Sérome",
    aliases: ["séromes", "serome", "seromes"],
    definition:
      "Un sérome est une accumulation de liquide clair (lymphe et sérum) sous la peau, dans l'espace laissé par le décollement chirurgical. Il est fréquent après une abdominoplastie.",
    detail: [
      "Le sérome se manifeste par un gonflement souple, parfois mobile à la palpation, qui apparaît en général dans les jours ou les semaines suivant l'intervention. Il n'est pas douloureux en soi, mais peut être gênant ou tendre la peau.",
      "Un petit sérome peut se résorber spontanément. Un sérome plus volumineux est le plus souvent évacué par une ou plusieurs ponctions à l'aiguille, réalisées en consultation ; plus rarement, une reprise chirurgicale est nécessaire. Le port d'une gaine de contention et la limitation des efforts aident à le prévenir.",
      "Tout gonflement qui augmente, devient rouge, chaud ou s'accompagne de fièvre doit être signalé sans attendre au chirurgien.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "haematoma",
    locale: "fr",
    slug: "hematome",
    term: "Hématome",
    aliases: ["hématomes", "hematome", "hematomes"],
    definition:
      "Un hématome est une collection de sang qui s'accumule dans les tissus après un saignement. Après une intervention, il se traduit par un gonflement localisé, tendu et souvent bleuté.",
    detail: [
      "Les hématomes postopératoires sont peu fréquents. Ils surviennent le plus souvent dans les premières heures ou les premiers jours, en particulier en cas d'effort, d'hypertension artérielle ou de prise de médicaments qui fluidifient le sang (aspirine, anti-inflammatoires, anticoagulants).",
      "Un petit hématome peut se résorber seul. Un hématome important ou qui augmente rapidement nécessite en général une reprise au bloc opératoire pour évacuer le sang et contrôler le saignement ; après une augmentation mammaire, il peut imposer le retrait temporaire de l'implant.",
      "Il faut signaler au chirurgien tous les médicaments et compléments alimentaires pris avant l'intervention, et le contacter rapidement si un gonflement douloureux apparaît d'un seul côté.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "oedema",
    locale: "fr",
    slug: "oedeme",
    term: "Œdème",
    aliases: ["œdèmes", "oedème", "oedèmes", "oedeme", "oedemes"],
    definition:
      "L'œdème est un gonflement des tissus dû à une accumulation de liquide, réaction normale de l'organisme à l'intervention. Il est attendu après la plupart des chirurgies et diminue progressivement.",
    detail: [
      "L'œdème est maximal dans les deux à trois jours suivant l'opération, puis régresse sur plusieurs semaines. Il s'accompagne souvent d'ecchymoses (« bleus »). Après une rhinoplastie, l'œdème de la pointe du nez peut persister plusieurs mois, ce qui explique que le résultat définitif ne soit visible qu'à distance.",
      "Surélever la zone opérée, appliquer du froid selon les consignes et porter les vêtements de contention prescrits aident à le limiter.",
      "Un gonflement brutal, très douloureux, asymétrique ou accompagné de fièvre n'est pas un simple œdème et doit être signalé au chirurgien.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "capsular-contracture",
    locale: "fr",
    slug: "coque-periprothetique",
    term: "Coque périprothétique",
    aliases: ["coques périprothétiques", "coque", "contracture capsulaire"],
    definition:
      "La coque périprothétique est un épaississement et un durcissement de la capsule fibreuse que l'organisme forme naturellement autour d'un implant mammaire. Elle peut rendre le sein dur, douloureux ou déformé.",
    detail: [
      "La formation d'une fine capsule autour de l'implant est normale. On parle de coque lorsque cette capsule se rétracte et comprime l'implant. Sa sévérité est classée de 1 (sein souple, aspect naturel) à 4 (sein dur, douloureux et visiblement déformé), selon la classification de Baker.",
      "Elle peut apparaître quelques mois ou plusieurs années après l'intervention. Ses causes ne sont pas entièrement connues ; un hématome, une infection à bas bruit ou une radiothérapie en augmentent le risque.",
      "Une coque gênante se traite le plus souvent par une réintervention : retrait de la capsule (capsulectomie) et remplacement de l'implant, parfois avec changement de loge. Le risque de récidive existe.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "bia-alcl",
    locale: "fr",
    slug: "lymphome-anaplasique-lai",
    term: "Lymphome anaplasique à grandes cellules associé aux implants mammaires (LAGC-AIM)",
    aliases: ["LAGC-AIM", "lymphome anaplasique à grandes cellules", "lymphome anaplasique", "BIA-ALCL"],
    definition:
      "Le LAGC-AIM est un cancer rare du système immunitaire qui se développe dans la capsule ou le liquide entourant un implant mammaire. Il est associé surtout aux implants à surface macrotexturée.",
    detail: [
      "Il se manifeste le plus souvent par un gonflement tardif du sein, plusieurs années après la pose, lié à un épanchement de liquide autour de l'implant ; plus rarement par une masse ou une coque. Le diagnostic repose sur une échographie et l'analyse du liquide prélevé.",
      "Détecté tôt, il se traite généralement par le retrait de l'implant et de la capsule entière. En France, l'ANSM recense les cas et a retiré du marché certains implants macrotexturés en 2019.",
      "Retirer préventivement des implants sans symptôme n'est pas recommandé. En revanche, tout gonflement tardif ou toute modification d'un sein porteur d'implant doit être signalé au chirurgien ou au médecin traitant.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "general-anaesthesia",
    locale: "fr",
    slug: "anesthesie-generale",
    term: "Anesthésie générale",
    aliases: ["anesthésies générales", "anesthesie generale"],
    definition:
      "L'anesthésie générale plonge la personne dans un sommeil artificiel contrôlé pendant toute la durée de l'intervention. Elle est conduite et surveillée par un médecin anesthésiste-réanimateur.",
    detail: [
      "En France, une consultation d'anesthésie est obligatoire au moins 48 heures avant toute intervention programmée. Le médecin anesthésiste y évalue l'état de santé, les traitements en cours, les allergies et les antécédents, et explique les consignes de jeûne.",
      "Les effets indésirables courants (nausées, mal de gorge, frissons, somnolence) sont en général passagers. Les complications graves sont rares chez une personne en bonne santé, mais le risque n'est jamais nul et augmente avec certaines pathologies, le surpoids ou le tabagisme.",
      "Selon l'intervention, d'autres techniques peuvent être proposées : anesthésie locale, locorégionale ou sédation.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "day-surgery",
    locale: "fr",
    slug: "ambulatoire",
    term: "Chirurgie ambulatoire",
    aliases: ["ambulatoire", "en ambulatoire"],
    definition:
      "La chirurgie ambulatoire permet de rentrer chez soi le jour même de l'intervention, sans nuit d'hospitalisation. Elle concerne des interventions dont les suites sont prévisibles et maîtrisables à domicile.",
    detail: [
      "La sortie est autorisée par l'équipe médicale après vérification de l'état de la personne : réveil complet, douleur contrôlée, absence de saignement. Elle n'est pas automatique et une nuit d'hospitalisation peut être décidée si nécessaire.",
      "Après une anesthésie, il est demandé de ne pas conduire, d'être raccompagné par un adulte et de ne pas rester seul la première nuit. Les consignes écrites, les ordonnances et un numéro joignable 24 h/24 sont remis à la sortie.",
      "Le choix entre ambulatoire et hospitalisation dépend de l'intervention, de l'état de santé, de la distance du domicile et de l'entourage disponible.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "deep-vein-thrombosis",
    locale: "fr",
    slug: "phlebite",
    term: "Phlébite (thrombose veineuse profonde)",
    aliases: ["phlébite", "phlébites", "thrombose veineuse profonde", "thrombose veineuse", "thrombose"],
    definition:
      "La phlébite, ou thrombose veineuse profonde, est la formation d'un caillot de sang dans une veine profonde, le plus souvent de la jambe. Le caillot peut migrer vers les poumons et provoquer une embolie pulmonaire.",
    detail: [
      "Le risque augmente avec la durée de l'intervention, l'immobilisation, certaines interventions comme l'abdominoplastie, le surpoids, le tabac, la contraception œstroprogestative et les antécédents personnels ou familiaux de thrombose.",
      "La prévention repose sur un lever précoce, le port de bas de contention et, selon l'évaluation du risque, des injections d'anticoagulant pendant quelques jours ou semaines.",
      "Une douleur du mollet, une jambe gonflée, chaude ou rouge doivent faire consulter rapidement. Un essoufflement brutal, une douleur thoracique ou des crachats de sang imposent d'appeler le 15.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "hypertrophic-scar",
    locale: "fr",
    slug: "cicatrice-hypertrophique",
    term: "Cicatrice hypertrophique",
    aliases: ["cicatrices hypertrophiques", "chéloïde", "chéloïdes"],
    definition:
      "Une cicatrice hypertrophique est une cicatrice épaisse, en relief, rouge et parfois prurigineuse, qui reste limitée au trajet de l'incision. Elle se distingue de la chéloïde, qui déborde de la cicatrice initiale et récidive plus souvent.",
    detail: [
      "Toute cicatrice évolue pendant 12 à 18 mois : elle est souvent rosée et ferme les premiers mois, puis s'assouplit et s'éclaircit. Une cicatrice hypertrophique apparaît en général dans les premières semaines et peut s'atténuer avec le temps.",
      "Les facteurs favorisants sont la tension sur la cicatrice, les zones de mobilité, une infection ou un retard de cicatrisation, et une prédisposition individuelle, plus marquée sur les peaux foncées.",
      "Plusieurs traitements peuvent être proposés : massages, pansements ou gels de silicone, compression, injections de corticoïdes et, plus rarement, une reprise chirurgicale. Aucun ne permet d'effacer complètement une cicatrice.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "diastasis",
    locale: "fr",
    slug: "diastasis-des-grands-droits",
    term: "Diastasis des grands droits",
    aliases: ["diastasis", "diastasis abdominal", "diastasis des muscles abdominaux"],
    definition:
      "Le diastasis des grands droits est un écartement des deux muscles verticaux de l'abdomen, de part et d'autre de la ligne médiane. Il est fréquent après une grossesse.",
    detail: [
      "Pendant la grossesse, la ligne blanche qui relie les deux muscles grands droits s'étire. Chez une partie des femmes, l'écart persiste après l'accouchement, avec un ventre qui bombe à l'effort, parfois des douleurs lombaires ou une hernie associée.",
      "Un diastasis modéré peut s'améliorer avec une rééducation périnéale et abdominale adaptée, encadrée par un kinésithérapeute. Lorsqu'il est important et persistant, il peut être réparé chirurgicalement en rapprochant les muscles, le plus souvent au cours d'une abdominoplastie.",
      "La réparation est en général envisagée à distance d'une grossesse, à poids stable et lorsque aucune autre grossesse n'est prévue.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "septorhinoplasty",
    locale: "fr",
    slug: "rhinoseptoplastie",
    term: "Rhinoseptoplastie",
    aliases: ["rhinoseptoplasties", "septorhinoplastie", "septoplastie"],
    definition:
      "La rhinoseptoplastie associe, au cours d'une même intervention, une rhinoplastie qui modifie la forme du nez et une septoplastie qui corrige la cloison nasale. Elle vise à traiter à la fois une gêne esthétique et une gêne respiratoire.",
    detail: [
      "La cloison nasale (septum) sépare les deux fosses nasales. Lorsqu'elle est déviée, à la suite d'un traumatisme ou de façon congénitale, elle peut gêner le passage de l'air.",
      "La partie fonctionnelle, si la gêne respiratoire est documentée, peut relever d'une prise en charge par l'Assurance maladie ; la partie esthétique reste à la charge de la personne. Le devis doit distinguer clairement les deux.",
      "Les risques et la convalescence sont proches de ceux d'une rhinoplastie, avec en plus un risque de gêne respiratoire persistante ou, rarement, de perforation de la cloison.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "cooling-off-period",
    locale: "fr",
    slug: "delai-de-reflexion",
    term: "Délai de réflexion",
    aliases: ["délais de réflexion", "delai de reflexion", "délai minimal de 15 jours"],
    definition:
      "En chirurgie esthétique, le délai de réflexion est la période minimale de 15 jours imposée par la loi entre la remise du devis détaillé et l'intervention. Il permet de prendre sa décision sans précipitation.",
    detail: [
      "Ce délai est prévu par le Code de la santé publique (article L.6322-2). Il court à partir de la remise du devis daté et signé, qui doit détailler l'intervention, les honoraires, les frais d'anesthésie et d'hospitalisation.",
      "Pendant ce délai, aucune somme ne peut être exigée, en dehors des honoraires de consultation. La personne peut y renoncer sans justification ni frais, et revenir consulter pour poser de nouvelles questions.",
      "Le délai ne peut pas être raccourci, même à la demande de la personne. Une proposition d'opérer plus vite doit être considérée comme un signal d'alerte.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "body-dysmorphic-disorder",
    locale: "fr",
    slug: "dysmorphophobie",
    term: "Dysmorphophobie",
    aliases: ["trouble dysmorphique corporel", "préoccupation excessive"],
    definition:
      "La dysmorphophobie, ou trouble dysmorphique corporel, est une préoccupation excessive et envahissante pour un défaut physique minime ou imperceptible pour les autres. C'est un trouble psychique reconnu, qui se soigne.",
    detail: [
      "Elle se traduit par des vérifications répétées dans le miroir, des comparaisons, l'évitement de certaines situations et une souffrance importante. Elle est plus fréquente chez les personnes qui demandent une chirurgie esthétique que dans la population générale.",
      "La chirurgie ne fait en général pas disparaître la préoccupation, qui se reporte souvent sur une autre zone, et le niveau d'insatisfaction après l'intervention est élevé. C'est pourquoi le chirurgien peut proposer de différer ou de ne pas réaliser l'intervention.",
      "Une prise en charge par un psychiatre ou un psychologue, notamment par thérapie cognitivo-comportementale, est efficace. En parler avec son médecin traitant est une première étape possible.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "breast-implant",
    locale: "fr",
    slug: "implant-mammaire",
    term: "Implant mammaire",
    aliases: ["implants mammaires", "implant", "implants", "prothèse mammaire", "prothèses mammaires"],
    definition:
      "Un implant mammaire est une prothèse placée sous la glande mammaire ou sous le muscle pectoral pour augmenter le volume du sein ou le reconstruire. Il est constitué d'une enveloppe en silicone remplie de gel de silicone ou de sérum physiologique.",
    detail: [
      "Les implants diffèrent par leur forme (ronde ou anatomique), leur volume, leur profil et leur surface (lisse ou texturée). Ce sont des dispositifs médicaux surveillés en France par l'ANSM.",
      "Un implant n'est pas définitif : le risque d'usure, de rupture ou de coque augmente avec le temps, et une ou plusieurs réinterventions sont à prévoir au cours de la vie. Un suivi clinique régulier, complété par une imagerie selon les recommandations, est nécessaire.",
      "Le chirurgien doit remettre une information écrite sur l'implant et une carte d'implant indiquant la marque, le modèle et le numéro de lot. Cette carte est à conserver.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "lipofilling",
    locale: "fr",
    slug: "lipofilling",
    term: "Lipofilling",
    aliases: ["lipomodelage", "transfert de graisse", "greffe de graisse"],
    definition:
      "Le lipofilling consiste à prélever de la graisse par liposuccion sur une zone du corps, puis à la réinjecter après préparation dans une autre zone. Il permet d'ajouter du volume ou de corriger des irrégularités sans implant.",
    detail: [
      "Il est utilisé pour les seins, le visage, les fesses ou pour corriger des séquelles de chirurgie. Il nécessite une réserve de graisse suffisante sur la zone de prélèvement.",
      "Une partie de la graisse injectée est résorbée dans les mois qui suivent ; plusieurs séances peuvent être nécessaires. Le gain de volume est en général plus modeste qu'avec un implant.",
      "Les risques comprennent des ecchymoses, des irrégularités, des kystes ou petites zones de nécrose graisseuse, qui peuvent compliquer la lecture d'une imagerie mammaire, et plus rarement une infection. L'embolie graisseuse est exceptionnelle mais grave, surtout lors d'injections dans les fesses.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
];
