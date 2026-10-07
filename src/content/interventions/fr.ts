import type { Intervention } from "../types";

/**
 * Contenus France (fr). Rédigés selon la charte éditoriale Phase 1 :
 * information factuelle, risques systématiques, aucune promesse de résultat.
 * Statut "draft" tant qu'un chirurgien qualifié ne les a pas relus.
 */
export const interventionsFr: Intervention[] = [
  {
    id: "rhinoplasty",
    locale: "fr",
    slug: "rhinoplastie",
    category: "face",
    title: "Rhinoplastie",
    summary:
      "La rhinoplastie modifie la forme du nez. Comprendre l'intervention, ses risques, la convalescence et les questions à poser au chirurgien.",
    description: [
      "La rhinoplastie est une intervention chirurgicale qui modifie la forme ou les proportions du nez : bosse, pointe, largeur, longueur ou axe.",
      "Lorsqu'elle corrige aussi une gêne respiratoire (par exemple une déviation de la cloison nasale), on parle de rhinoseptoplastie. Cette partie fonctionnelle peut relever d'une prise en charge par l'Assurance maladie, la partie esthétique non.",
      "Le résultat définitif n'est visible qu'après plusieurs mois, car l'œdème de la pointe du nez se résorbe lentement.",
    ],
    indications: [
      "Gêne liée à la forme du nez, exprimée par la personne elle-même et stable dans le temps.",
      "Séquelles de traumatisme ou malformation.",
      "Gêne respiratoire associée, à évaluer par le chirurgien.",
    ],
    contraindications: [
      "Croissance du visage non terminée.",
      "Attentes irréalistes ou demande motivée par la pression d'un tiers.",
      "Préoccupation excessive pour un défaut minime ou invisible (à évoquer avec le chirurgien).",
      "Certains troubles de la coagulation ou pathologies non équilibrées.",
    ],
    risks: [
      { name: "Œdème et ecchymoses", detail: "Fréquents et attendus les premières semaines, autour des yeux notamment." },
      { name: "Saignement et hématome", detail: "Peu fréquents ; nécessitent parfois une reprise." },
      { name: "Infection", detail: "Rare ; traitée le plus souvent par antibiotiques." },
      {
        name: "Gêne respiratoire",
        detail: "Peut apparaître ou persister après l'intervention et justifier un traitement ou une reprise.",
      },
      {
        name: "Résultat insatisfaisant ou asymétrie",
        detail: "Une retouche est nécessaire dans une partie des cas ; elle n'est envisagée qu'après cicatrisation complète, généralement au moins un an.",
      },
      { name: "Troubles de la sensibilité", detail: "Sensibilité modifiée de la pointe du nez, le plus souvent transitoire." },
      { name: "Risques liés à l'anesthésie", detail: "À évaluer lors de la consultation d'anesthésie obligatoire." },
    ],
    procedure: {
      anaesthesia: "Anesthésie générale le plus souvent.",
      duration: "Environ 1 à 3 heures selon la complexité.",
      hospitalStay: "Ambulatoire ou une nuit d'hospitalisation.",
    },
    recovery: [
      "Attelle sur le nez pendant environ une semaine, parfois méchages les premiers jours.",
      "Reprise d'une activité de bureau souvent après 10 à 15 jours.",
      "Sport et port de lunettes à éviter pendant plusieurs semaines, selon les consignes du chirurgien.",
      "Résultat stabilisé entre 6 et 12 mois.",
    ],
    alternatives: [
      "Rhinoplastie médicale par injections d'acide hyaluronique : corrige certaines irrégularités sans réduire le nez, effet temporaire, risques propres (dont des complications vasculaires rares mais graves).",
      "Ne rien faire : une option légitime, à reconsidérer après un temps de réflexion.",
    ],
    faq: [
      {
        question: "Quel est le délai entre la consultation et l'intervention ?",
        answer:
          "En France, la loi impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention. Aucun paiement ne peut être exigé avant la fin de ce délai, en dehors des honoraires de consultation.",
      },
      {
        question: "Peut-on voir le résultat avant l'intervention ?",
        answer:
          "Des simulations sur photo peuvent aider à exprimer une demande, mais elles ne constituent jamais une promesse de résultat.",
      },
      {
        question: "Quel chirurgien consulter ?",
        answer:
          "Un chirurgien qualifié en chirurgie plastique, reconstructrice et esthétique, ou un chirurgien ORL et cervico-facial pratiquant la rhinoplastie. Vous pouvez vérifier sa qualification sur l'annuaire de l'Ordre des médecins.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "abdominoplasty",
    locale: "fr",
    slug: "abdominoplastie",
    category: "body",
    title: "Abdominoplastie",
    summary:
      "L'abdominoplastie retire l'excédent de peau du ventre et peut réparer les muscles abdominaux. Indications, risques, cicatrice et convalescence.",
    description: [
      "L'abdominoplastie retire l'excédent de peau et de graisse de la partie basse du ventre, et permet si besoin de rapprocher les muscles grands droits écartés (diastasis), fréquent après une grossesse.",
      "Elle laisse une cicatrice horizontale au-dessus du pubis, généralement dissimulable sous un sous-vêtement, et souvent une cicatrice autour du nombril.",
      "Ce n'est pas une méthode d'amaigrissement. Elle s'envisage à poids stable et, idéalement, lorsqu'aucune grossesse n'est plus prévue.",
      "Lorsqu'un tablier abdominal important recouvre le pubis, une prise en charge par l'Assurance maladie est possible après accord préalable.",
    ],
    indications: [
      "Excédent cutané du bas-ventre après grossesse(s) ou perte de poids importante.",
      "Diastasis des muscles abdominaux.",
      "Poids stable depuis plusieurs mois.",
    ],
    contraindications: [
      "Tabagisme actif : il augmente fortement le risque de nécrose et de défaut de cicatrisation ; un arrêt est exigé avant et après l'intervention.",
      "Projet de grossesse à court terme.",
      "Perte de poids en cours ou obésité non stabilisée.",
      "Antécédents de thrombose ou d'embolie non évalués.",
    ],
    risks: [
      { name: "Sérome", detail: "Accumulation de liquide sous la peau, assez fréquente ; peut nécessiter des ponctions." },
      {
        name: "Troubles de cicatrisation et nécrose cutanée",
        detail: "Plus fréquents chez les fumeurs, les personnes diabétiques ou en surpoids.",
      },
      {
        name: "Thrombose veineuse et embolie pulmonaire",
        detail: "Rares mais graves ; prévenues par un lever précoce, des bas de contention et parfois un traitement anticoagulant.",
      },
      { name: "Hématome et infection", detail: "Peu fréquents ; peuvent nécessiter une reprise." },
      { name: "Cicatrice", detail: "Évolue sur 12 à 18 mois ; peut s'élargir, s'épaissir ou rester visible." },
      { name: "Perte de sensibilité", detail: "Engourdissement du bas-ventre, souvent partiel et prolongé." },
      { name: "Risques liés à l'anesthésie", detail: "À évaluer lors de la consultation d'anesthésie obligatoire." },
    ],
    procedure: {
      anaesthesia: "Anesthésie générale.",
      duration: "Environ 2 à 4 heures.",
      hospitalStay: "Une à trois nuits d'hospitalisation le plus souvent.",
    },
    recovery: [
      "Gaine de contention pendant plusieurs semaines.",
      "Douleurs et position légèrement penchée en avant les premiers jours.",
      "Arrêt de travail de 2 à 4 semaines selon l'activité.",
      "Sport et port de charges lourdes à reprendre progressivement après 6 à 8 semaines, selon les consignes du chirurgien.",
    ],
    alternatives: [
      "Mini-abdominoplastie, si l'excédent est limité sous le nombril.",
      "Rééducation périnéale et abdominale adaptée en cas de diastasis modéré.",
      "Liposuccion seule, uniquement si la peau est de bonne qualité et sans excédent.",
    ],
    faq: [
      {
        question: "Faut-il arrêter de fumer ?",
        answer:
          "Oui. Le tabac est un facteur de risque majeur de complications de cicatrisation. Les chirurgiens demandent en général un arrêt complet plusieurs semaines avant et après l'intervention.",
      },
      {
        question: "Peut-on avoir une grossesse après une abdominoplastie ?",
        answer:
          "C'est possible, mais une grossesse ultérieure peut altérer le résultat. Il est préférable d'attendre d'avoir terminé ses projets de grossesse.",
      },
      {
        question: "Quel est le délai de réflexion ?",
        answer:
          "En France, un délai minimal de 15 jours est imposé entre la remise du devis détaillé et l'intervention.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "breast-augmentation",
    locale: "fr",
    slug: "augmentation-mammaire",
    category: "breast",
    title: "Augmentation mammaire",
    summary:
      "L'augmentation mammaire augmente le volume des seins par implants ou par transfert de graisse. Types d'implants, risques, suivi à long terme.",
    description: [
      "L'augmentation mammaire augmente le volume ou modifie la forme des seins, le plus souvent par la pose d'implants, parfois par transfert de graisse (lipofilling).",
      "Les implants n'ont pas une durée de vie illimitée : un suivi régulier et une ou plusieurs réinterventions au cours de la vie sont à prévoir.",
      "Votre chirurgien doit vous remettre une information écrite sur l'implant choisi et vous transmettre la carte d'implant. En France, les implants sont surveillés par l'ANSM.",
    ],
    indications: [
      "Seins jugés trop petits par la personne elle-même.",
      "Perte de volume après grossesse, allaitement ou amaigrissement.",
      "Asymétrie mammaire ou malformation (dans ce dernier cas, une prise en charge peut être possible).",
    ],
    contraindications: [
      "Âge inférieur à 18 ans pour une indication esthétique.",
      "Grossesse ou allaitement en cours.",
      "Lésion mammaire non explorée : un bilan d'imagerie peut être demandé avant l'intervention.",
      "Attentes irréalistes ou demande motivée par la pression d'un tiers.",
    ],
    risks: [
      {
        name: "Coque périprothétique",
        detail: "Durcissement de la capsule qui se forme autour de l'implant ; peut entraîner douleur, déformation et réintervention.",
      },
      { name: "Rupture ou usure de l'implant", detail: "Le risque augmente avec le temps ; impose le remplacement de l'implant." },
      {
        name: "Lymphome anaplasique à grandes cellules (LAGC-AIM)",
        detail: "Cancer rare du système immunitaire, associé surtout aux implants à surface macrotexturée. Tout gonflement tardif d'un sein doit être signalé.",
      },
      { name: "Hématome et infection", detail: "Peu fréquents ; peuvent imposer le retrait temporaire de l'implant." },
      { name: "Modification de la sensibilité", detail: "Des mamelons ou de la peau, parfois durable." },
      { name: "Résultat esthétique imparfait", detail: "Asymétrie, déplacement ou visibilité de l'implant, ondulations." },
      {
        name: "Symptômes généraux (« breast implant illness »)",
        detail: "Fatigue, douleurs articulaires rapportées par certaines patientes ; le lien de causalité reste discuté.",
      },
      { name: "Risques liés à l'anesthésie", detail: "À évaluer lors de la consultation d'anesthésie obligatoire." },
    ],
    procedure: {
      anaesthesia: "Anesthésie générale.",
      duration: "Environ 1 à 2 heures.",
      hospitalStay: "Ambulatoire ou une nuit d'hospitalisation.",
    },
    recovery: [
      "Soutien-gorge de maintien jour et nuit pendant plusieurs semaines.",
      "Douleurs musculaires les premiers jours, surtout si l'implant est placé sous le muscle.",
      "Arrêt de travail d'environ une semaine selon l'activité.",
      "Sport sollicitant les bras et les pectoraux à reprendre après 6 semaines environ, selon les consignes du chirurgien.",
      "Surveillance clinique régulière et imagerie selon les recommandations en vigueur, pendant toute la durée de port des implants.",
    ],
    alternatives: [
      "Lipofilling mammaire : gain de volume plus modeste, sans implant, nécessite une réserve de graisse suffisante.",
      "Ne rien faire : une option légitime, à reconsidérer après un temps de réflexion.",
    ],
    faq: [
      {
        question: "Les implants doivent-ils être changés ?",
        answer:
          "Ils ne sont pas définitifs. Leur remplacement est envisagé en cas de complication ou d'usure, et non à date fixe. Un suivi régulier est nécessaire.",
      },
      {
        question: "Peut-on allaiter avec des implants ?",
        answer:
          "Dans la plupart des cas oui, mais certaines voies d'abord peuvent l'affecter. Parlez-en avec votre chirurgien si un projet de grossesse existe.",
      },
      {
        question: "Quel est le délai de réflexion ?",
        answer:
          "En France, un délai minimal de 15 jours est imposé entre la remise du devis détaillé et l'intervention.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
];
