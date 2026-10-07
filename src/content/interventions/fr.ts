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
  {
    id: "blepharoplasty",
    locale: "fr",
    slug: "blepharoplastie",
    category: "face",
    title: "Blépharoplastie",
    summary: "La blépharoplastie retire l'excès de peau ou de graisse des paupières. Indications, risques, convalescence et alternatives.",
    description: [
      "La blépharoplastie est une intervention qui retire l'excès de peau, parfois de muscle ou de graisse, des paupières supérieures, inférieures ou des deux.",
      "Les cicatrices sont placées dans le pli de la paupière supérieure et sous les cils en bas, ou à l'intérieur de la paupière : elles sont généralement peu visibles une fois mûres.",
      "Lorsque l'excès de peau de la paupière supérieure gêne le champ visuel, l'intervention peut avoir une indication fonctionnelle, évaluée par un bilan ophtalmologique.",
    ],
    indications: [
      "Excès de peau de la paupière supérieure, avec ou sans gêne visuelle.",
      "Poches ou excès de peau de la paupière inférieure.",
      "Paupières tombantes à distinguer d'un ptosis (atteinte du muscle releveur), à évaluer par le chirurgien.",
    ],
    contraindications: [
      "Sécheresse oculaire importante ou maladies de l'œil non évaluées.",
      "Certaines maladies de la thyroïde non équilibrées.",
      "Hypertension ou troubles de la coagulation non contrôlés.",
      "Attentes irréalistes.",
    ],
    risks: [
      { name: "Œdème et ecchymoses", detail: "Fréquents et attendus les 10 à 15 premiers jours." },
      {
        name: "Sécheresse oculaire et irritation",
        detail: "Fréquente de façon transitoire ; peut persister et nécessiter un traitement.",
      },
      { name: "Asymétrie ou résultat insatisfaisant", detail: "Une retouche est parfois nécessaire." },
      { name: "Difficulté à fermer complètement l'œil", detail: "Le plus souvent transitoire ; rarement durable." },
      { name: "Ectropion (paupière inférieure qui s'éloigne de l'œil)", detail: "Rare ; peut demander une reprise." },
      {
        name: "Hématome et infection",
        detail: "Peu fréquents. Un saignement derrière l'œil, très rare, est une urgence pouvant menacer la vision.",
      },
      { name: "Risques liés à l'anesthésie", detail: "À évaluer lors de la consultation d'anesthésie obligatoire." },
    ],
    procedure: {
      anaesthesia: "Anesthésie locale avec sédation, ou anesthésie générale.",
      duration: "Environ 1 à 2 heures.",
      hospitalStay: "Ambulatoire le plus souvent.",
    },
    recovery: [
      "Compresses froides les premiers jours ; fils retirés après environ 5 à 7 jours.",
      "Lunettes de soleil conseillées ; lentilles de contact à éviter environ 2 semaines.",
      "Reprise d'une activité de bureau après 7 à 10 jours le plus souvent.",
      "Sport et efforts importants repris après 3 à 4 semaines, selon les consignes.",
    ],
    alternatives: [
      "Chirurgie du sourcil (lifting du sourcil) lorsque l'excès vient de sa position.",
      "Injections ou traitements non chirurgicaux pour des irrégularités légères, aux effets limités et temporaires.",
      "Ne rien faire : une option légitime, à reconsidérer après un temps de réflexion.",
    ],
    faq: [
      {
        question: "L'intervention peut-elle être remboursée ?",
        answer: "Pour la paupière supérieure, une prise en charge par l'Assurance maladie est possible lorsqu'un bilan montre une gêne du champ visuel, avec accord préalable. La partie esthétique n'est pas remboursée.",
      },
      {
        question: "Quel est le délai de réflexion ?",
        answer: "En France, un délai minimal de 15 jours est imposé entre la remise du devis détaillé et l'intervention. Aucun paiement ne peut être exigé avant la fin de ce délai, en dehors des honoraires de consultation.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-08",
  },
  {
    id: "facelift",
    locale: "fr",
    slug: "lifting-du-visage",
    category: "face",
    title: "Lifting du visage",
    summary: "Le lifting du visage retend la peau et les tissus du visage et du cou. Indications, risques, cicatrices, convalescence et alternatives.",
    description: [
      "Le lifting cervico-facial retend les tissus profonds, redrape la peau et retire l'excès cutané du bas du visage et du cou.",
      "Les cicatrices sont dissimulées dans les plis devant et derrière l'oreille et dans le cuir chevelu.",
      "Il ne modifie pas la qualité de la peau ni les rides fines ; il n'arrête pas le vieillissement. Le résultat évolue avec le temps.",
    ],
    indications: [
      "Relâchement des tissus du bas du visage et du cou.",
      "Excès de peau du cou.",
      "Projet réfléchi, stable dans le temps, avec un état de santé général compatible.",
    ],
    contraindications: [
      "Tabagisme : il augmente fortement le risque de nécrose cutanée.",
      "Hypertension non contrôlée et traitements anticoagulants non adaptés.",
      "Maladies chroniques non équilibrées, troubles de la coagulation.",
      "Attentes irréalistes quant au résultat.",
    ],
    risks: [
      {
        name: "Hématome",
        detail: "La complication la plus fréquente, plus souvent chez les personnes hypertendues ; peut nécessiter une reprise rapide.",
      },
      { name: "Lésion d'un nerf facial", detail: "Le plus souvent transitoire ; rarement durable." },
      { name: "Nécrose cutanée et retard de cicatrisation", detail: "Plus fréquents chez les fumeurs." },
      {
        name: "Cicatrices visibles, élargies ou épaissies",
        detail: "Évolution sur 12 à 18 mois ; une retouche est parfois proposée.",
      },
      { name: "Troubles de la sensibilité et perte de cheveux près des cicatrices", detail: "Souvent temporaires." },
      { name: "Asymétrie, infection", detail: "Peu fréquentes." },
      { name: "Risques liés à l'anesthésie", detail: "À évaluer lors de la consultation d'anesthésie obligatoire." },
    ],
    procedure: {
      anaesthesia: "Anesthésie générale, ou locale avec sédation selon l'étendue.",
      duration: "Environ 3 à 5 heures.",
      hospitalStay: "Ambulatoire ou 1 à 2 nuits.",
    },
    recovery: [
      "Pansement compressif les premiers jours, puis bandeau.",
      "Œdème et ecchymoses pendant 2 à 3 semaines.",
      "Reprise d'une vie sociale souvent après 3 à 4 semaines.",
      "Soleil et efforts importants à éviter pendant plusieurs semaines ; résultat stabilisé après plusieurs mois.",
    ],
    alternatives: [
      "Lifting limité (mini-lifting) lorsque le relâchement est modéré.",
      "Traitements non chirurgicaux (injections, lasers, ultrasons) : effets plus limités et temporaires, avec leurs propres risques.",
      "Ne rien faire : une option légitime, à reconsidérer après un temps de réflexion.",
    ],
    faq: [
      {
        question: "À quel âge peut-on envisager un lifting ?",
        answer: "Il n'y a pas d'âge fixe : l'indication dépend du relâchement des tissus et de l'état de santé, évalués par le chirurgien.",
      },
      {
        question: "L'arrêt du tabac est-il nécessaire ?",
        answer: "Oui. Les chirurgiens demandent généralement un arrêt complet plusieurs semaines avant et après l'intervention.",
      },
      {
        question: "Quel est le délai de réflexion ?",
        answer: "En France, un délai minimal de 15 jours est imposé entre la remise du devis détaillé et l'intervention. Aucun paiement ne peut être exigé avant la fin de ce délai, en dehors des honoraires de consultation.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-08",
  },
  {
    id: "otoplasty",
    locale: "fr",
    slug: "otoplastie",
    category: "face",
    title: "Otoplastie (oreilles décollées)",
    summary: "L'otoplastie rapproche les oreilles de la tête et remodèle le pavillon. Indications, risques, convalescence et alternatives.",
    description: [
      "L'otoplastie corrige des oreilles décollées ou de forme inhabituelle en remodelant le cartilage et en rapprochant le pavillon de la tête.",
      "La cicatrice est placée derrière l'oreille, dans le sillon, et reste généralement discrète.",
      "Chez l'enfant, l'intervention est envisagée à partir de l'âge où l'oreille a atteint presque sa taille adulte, avec l'accord des parents. Le formulaire de ce site est réservé aux personnes majeures.",
    ],
    indications: [
      "Oreilles décollées ou asymétriques à l'origine d'une gêne.",
      "Anomalie de forme du pavillon.",
      "Séquelles de traumatisme, à évaluer par le chirurgien.",
    ],
    contraindications: [
      "Infection locale de la peau ou de l'oreille.",
      "Troubles de la cicatrisation connus (tendance aux cicatrices chéloïdes).",
      "Troubles de la coagulation non évalués.",
      "Attentes irréalistes.",
    ],
    risks: [
      { name: "Hématome", detail: "Peu fréquent ; peut nécessiter une reprise." },
      { name: "Infection du cartilage ou de la peau", detail: "Rare ; traitée par antibiotiques, parfois par reprise." },
      { name: "Récidive partielle", detail: "Les oreilles peuvent se décoller de nouveau en partie." },
      { name: "Surcorrection ou aspect peu naturel", detail: "Une retouche est parfois nécessaire." },
      { name: "Asymétrie", detail: "Une légère asymétrie est fréquente et physiologique." },
      { name: "Cicatrice épaissie, troubles de la sensibilité", detail: "Le plus souvent transitoires." },
      { name: "Risques liés à l'anesthésie", detail: "À évaluer lors de la consultation d'anesthésie obligatoire." },
    ],
    procedure: {
      anaesthesia: "Anesthésie locale ou générale selon l'âge et le cas.",
      duration: "Environ 1 à 2 heures.",
      hospitalStay: "Ambulatoire.",
    },
    recovery: [
      "Pansement de tête compressif pendant quelques jours.",
      "Bandeau porté jour et nuit puis la nuit seulement pendant plusieurs semaines.",
      "Reprise des activités habituelles après environ 1 semaine.",
      "Sports de contact à éviter environ un mois.",
    ],
    alternatives: [
      "Moulage des oreilles du nouveau-né (technique non chirurgicale, uniquement dans les premières semaines de vie).",
      "Coiffure ou accessoires, sans modification de l'oreille.",
      "Ne rien faire : une option légitime.",
    ],
    faq: [
      {
        question: "L'intervention peut-elle être remboursée ?",
        answer: "Une prise en charge par l'Assurance maladie est possible dans certains cas, notamment chez l'enfant. Demandez-le au chirurgien avant l'intervention.",
      },
      {
        question: "Quel est le délai de réflexion ?",
        answer: "En France, un délai minimal de 15 jours est imposé entre la remise du devis détaillé et l'intervention. Aucun paiement ne peut être exigé avant la fin de ce délai, en dehors des honoraires de consultation.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-08",
  },
  {
    id: "liposuction",
    locale: "fr",
    slug: "liposuccion",
    category: "body",
    title: "Liposuccion",
    summary: "La liposuccion retire des amas de graisse localisés. Ce n'est pas un traitement de l'obésité. Indications, risques, convalescence.",
    description: [
      "La liposuccion retire par de petites incisions des amas de graisse localisés (ventre, hanches, cuisses, menton…), à l'aide de fines canules.",
      "Ce n'est pas une méthode pour perdre du poids ni un traitement de l'obésité : elle modifie le contour, pas la masse corporelle.",
      "Le résultat dépend de l'élasticité de la peau. Une peau relâchée peut nécessiter une autre technique, seule ou associée.",
    ],
    indications: [
      "Surcharge graisseuse localisée, résistante à l'alimentation et à l'activité physique.",
      "Poids stable et peau de bonne élasticité.",
      "Projet réfléchi avec un état de santé compatible.",
    ],
    contraindications: [
      "Obésité ou poids non stabilisé : l'intervention n'est pas un traitement.",
      "Peau très relâchée, à évaluer par le chirurgien.",
      "Maladies cardiaques, de la coagulation ou autres pathologies non équilibrées.",
      "Grossesse ou projet de grossesse proche pour la zone du ventre.",
    ],
    risks: [
      {
        name: "Irrégularités du contour et ondulations",
        detail: "Possibles ; une retouche est parfois discutée après plusieurs mois.",
      },
      { name: "Œdème, ecchymoses, douleurs", detail: "Attendus plusieurs semaines." },
      {
        name: "Épanchement de liquide (sérome), hématome, infection",
        detail: "Peu fréquents ; peuvent nécessiter un drainage ou une reprise.",
      },
      { name: "Troubles de la sensibilité, taches pigmentées", detail: "Souvent transitoires, parfois durables." },
      { name: "Phlébite et embolie pulmonaire", detail: "Rares mais graves ; prévention adaptée." },
      {
        name: "Complications graves du volume aspiré",
        detail: "Rares : le volume est limité par sécurité (déséquilibre des liquides, embolie graisseuse, atteinte d'un organe).",
      },
      { name: "Risques liés à l'anesthésie", detail: "À évaluer lors de la consultation d'anesthésie obligatoire." },
    ],
    procedure: {
      anaesthesia: "Anesthésie locale ou générale selon l'étendue.",
      duration: "Environ 1 à 3 heures selon les zones.",
      hospitalStay: "Ambulatoire ou une nuit.",
    },
    recovery: [
      "Vêtement de contention porté plusieurs semaines (souvent 4 à 6).",
      "Reprise d'une activité de bureau après quelques jours à 2 semaines.",
      "Sport repris progressivement après environ 4 semaines.",
      "Œdème qui s'estompe sur 3 mois ; résultat jugé vers 6 mois.",
    ],
    alternatives: [
      "Hygiène de vie : alimentation et activité physique, avec un suivi adapté.",
      "Traitements non chirurgicaux de la graisse (par le froid, ultrasons) : effets plus modestes, avec leurs propres limites.",
      "Ne rien faire : une option légitime.",
    ],
    faq: [
      {
        question: "La liposuccion fait-elle maigrir ?",
        answer: "Non. Elle remodèle une zone ; le volume retiré est limité pour des raisons de sécurité.",
      },
      {
        question: "La graisse peut-elle revenir ?",
        answer: "Les cellules graisseuses retirées ne reviennent pas, mais la graisse restante peut augmenter si le poids augmente.",
      },
      {
        question: "Quel est le délai de réflexion ?",
        answer: "En France, un délai minimal de 15 jours est imposé entre la remise du devis détaillé et l'intervention. Aucun paiement ne peut être exigé avant la fin de ce délai, en dehors des honoraires de consultation.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-08",
  },
  {
    id: "breast-reduction",
    locale: "fr",
    slug: "reduction-mammaire",
    category: "breast",
    title: "Réduction mammaire",
    summary: "La réduction mammaire diminue le volume des seins et les remonte. Indications, cicatrices, risques, allaitement et convalescence.",
    description: [
      "La réduction mammaire retire une partie de la glande et de la peau pour diminuer le volume des seins, en remontant le mamelon.",
      "Les cicatrices entourent l'aréole, descendent verticalement et, selon la technique, longent le sillon sous le sein.",
      "Elle est souvent proposée pour une gêne physique : douleurs du dos et du cou, irritations sous les seins, limitation de l'activité.",
    ],
    indications: [
      "Seins volumineux responsables de douleurs ou d'une gêne durable.",
      "Croissance mammaire terminée et poids stable.",
      "Projet réfléchi après avis du chirurgien.",
    ],
    contraindications: [
      "Tabagisme : risque accru de troubles de cicatrisation.",
      "Poids non stabilisé.",
      "Grossesse en cours ou allaitement, ou projet proche d'allaitement.",
      "Maladies non équilibrées, antécédents mammaires à évaluer (bilan d'imagerie préalable).",
    ],
    risks: [
      { name: "Cicatrices visibles, épaissies ou élargies", detail: "Évolution sur 12 à 18 mois." },
      {
        name: "Modification de la sensibilité du mamelon",
        detail: "Temporaire ou durable, parfois perte de sensibilité.",
      },
      { name: "Difficulté ou impossibilité d'allaiter", detail: "L'allaitement peut être diminué ou impossible." },
      {
        name: "Retard de cicatrisation",
        detail: "Surtout à la jonction des cicatrices, plus fréquent chez les fumeuses.",
      },
      { name: "Souffrance de l'aréole ou du mamelon", detail: "Rare ; peut aller jusqu'à une nécrose." },
      { name: "Asymétrie, hématome, infection", detail: "Peu fréquents ; une reprise est parfois nécessaire." },
      { name: "Risques liés à l'anesthésie", detail: "À évaluer lors de la consultation d'anesthésie obligatoire." },
    ],
    procedure: { anaesthesia: "Anesthésie générale.", duration: "Environ 2 à 4 heures.", hospitalStay: "Une à deux nuits." },
    recovery: [
      "Soutien-gorge de maintien porté jour et nuit plusieurs semaines.",
      "Arrêt de travail de 2 à 3 semaines environ.",
      "Efforts, port de charges et sport évités environ 6 semaines.",
      "Résultat stabilisé après plusieurs mois.",
    ],
    alternatives: [
      "Perte de poids encadrée lorsque le volume est en partie lié au poids.",
      "Soutien-gorge adapté, kinésithérapie, prise en charge de la douleur.",
      "Liposuccion mammaire seule, dans de rares cas.",
      "Ne rien faire : une option légitime.",
    ],
    faq: [
      {
        question: "L'intervention peut-elle être remboursée ?",
        answer: "Une prise en charge par l'Assurance maladie est possible sur critères médicaux, avec accord préalable. Elle dépend notamment de la gêne et du poids de tissu à retirer.",
      },
      {
        question: "Pourra-t-on allaiter ?",
        answer: "C'est possible dans certains cas, mais non garanti. Parlez-en avec le chirurgien avant de décider.",
      },
      {
        question: "Quel est le délai de réflexion ?",
        answer: "En France, un délai minimal de 15 jours est imposé entre la remise du devis détaillé et l'intervention. Aucun paiement ne peut être exigé avant la fin de ce délai, en dehors des honoraires de consultation.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-08",
  },
  {
    id: "mastopexy",
    locale: "fr",
    slug: "lifting-mammaire",
    category: "breast",
    title: "Lifting mammaire (mastopexie)",
    summary: "Le lifting mammaire remonte des seins tombants en retirant l'excès de peau, sans changer beaucoup le volume. Risques et convalescence.",
    description: [
      "La mastopexie remonte le sein et le mamelon en retirant l'excès de peau et en remodelant la glande. Le volume change peu.",
      "Les cicatrices entourent l'aréole et, selon le degré de ptôse, descendent verticalement et parfois sous le sein.",
      "Elle peut être associée à des prothèses lorsqu'on souhaite aussi augmenter le volume.",
    ],
    indications: [
      "Ptôse mammaire (seins tombants) après grossesse, allaitement ou perte de poids.",
      "Poids stable et croissance mammaire terminée.",
      "Projet réfléchi, avec une cicatrice acceptée.",
    ],
    contraindications: [
      "Projet de grossesse ou d'allaitement proche : le résultat peut en être modifié.",
      "Tabagisme : risque accru de troubles de cicatrisation.",
      "Poids non stabilisé.",
      "Antécédents mammaires non évalués (bilan d'imagerie préalable).",
    ],
    risks: [
      { name: "Cicatrices visibles, épaissies ou élargies", detail: "Évolution sur 12 à 18 mois." },
      {
        name: "Récidive de la ptôse",
        detail: "Le sein peut retomber avec le temps, la grossesse ou les variations de poids.",
      },
      { name: "Modification de la sensibilité du mamelon", detail: "Temporaire ou durable." },
      { name: "Troubles de l'allaitement", detail: "Possibles." },
      { name: "Asymétrie", detail: "Fréquente à un degré léger, parfois à corriger." },
      {
        name: "Souffrance de l'aréole, hématome, infection",
        detail: "Peu fréquentes ; une reprise est parfois nécessaire.",
      },
      { name: "Risques liés à l'anesthésie", detail: "À évaluer lors de la consultation d'anesthésie obligatoire." },
    ],
    procedure: { anaesthesia: "Anesthésie générale.", duration: "Environ 2 à 3 heures.", hospitalStay: "Ambulatoire ou une nuit." },
    recovery: [
      "Soutien-gorge de maintien porté plusieurs semaines.",
      "Reprise d'une activité de bureau après 1 à 2 semaines.",
      "Efforts et sport évités environ 4 à 6 semaines.",
      "Cicatrices et forme définitive après plusieurs mois.",
    ],
    alternatives: [
      "Soutien-gorge adapté, sans modification de la forme du sein.",
      "Prothèses seules, lorsque le sein tombe peu et que l'on souhaite du volume.",
      "Ne rien faire : une option légitime.",
    ],
    faq: [
      {
        question: "Peut-on être enceinte après un lifting mammaire ?",
        answer: "Oui, mais une grossesse ou un allaitement peuvent modifier le résultat. Il est souvent conseillé d'attendre.",
      },
      {
        question: "Quel est le délai de réflexion ?",
        answer: "En France, un délai minimal de 15 jours est imposé entre la remise du devis détaillé et l'intervention. Aucun paiement ne peut être exigé avant la fin de ce délai, en dehors des honoraires de consultation.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-08",
  },
  {
    id: "gynecomastia",
    locale: "fr",
    slug: "gynecomastie",
    category: "breast",
    title: "Gynécomastie (seins chez l'homme)",
    summary: "La chirurgie de la gynécomastie réduit le volume des seins chez l'homme. Bilan médical, risques, convalescence et alternatives.",
    description: [
      "La gynécomastie est un développement du tissu mammaire chez l'homme, fréquent à l'adolescence et à l'âge adulte.",
      "L'intervention retire du tissu glandulaire et parfois de la graisse (liposuccion), par une petite incision autour de l'aréole.",
      "Un bilan médical précède toujours l'intervention : certaines causes (médicaments, troubles hormonaux, maladies) doivent être recherchées et traitées.",
    ],
    indications: [
      "Gynécomastie persistante, stable, avec gêne physique ou psychologique.",
      "Bilan médical réalisé et cause recherchée.",
      "Poids stable.",
    ],
    contraindications: [
      "Cause non explorée ou non traitée.",
      "Gynécomastie encore évolutive ou en phase de régression spontanée possible.",
      "Consommation de substances qui entretiennent la gynécomastie.",
      "Maladies ou troubles de la coagulation non équilibrés.",
    ],
    risks: [
      { name: "Hématome et sérome", detail: "Peu fréquents ; peuvent nécessiter un drainage." },
      { name: "Irrégularités du contour, asymétrie", detail: "Une retouche est parfois envisagée." },
      { name: "Troubles de la sensibilité du mamelon", detail: "Le plus souvent transitoires." },
      { name: "Excès de peau résiduel", detail: "Possible si la peau est peu élastique." },
      { name: "Cicatrice visible, infection", detail: "Peu fréquentes." },
      { name: "Risques liés à l'anesthésie", detail: "À évaluer lors de la consultation d'anesthésie obligatoire." },
    ],
    procedure: {
      anaesthesia: "Anesthésie générale ou locale avec sédation.",
      duration: "Environ 1 à 2 heures.",
      hospitalStay: "Ambulatoire le plus souvent.",
    },
    recovery: [
      "Vêtement de compression porté plusieurs semaines.",
      "Reprise d'une activité de bureau après environ une semaine.",
      "Sport et efforts évités environ 4 semaines.",
      "Résultat stabilisé après plusieurs mois.",
    ],
    alternatives: [
      "Surveillance : certaines gynécomasties régressent d'elles-mêmes, surtout chez l'adolescent.",
      "Traitement de la cause (médicament, trouble hormonal) lorsqu'il y en a une.",
      "Ne rien faire : une option légitime.",
    ],
    faq: [
      {
        question: "L'intervention peut-elle être remboursée ?",
        answer: "Une prise en charge est possible dans certains cas, selon le bilan et avec accord préalable. Demandez-le avant l'intervention.",
      },
      {
        question: "Quel est le délai de réflexion ?",
        answer: "En France, un délai minimal de 15 jours est imposé entre la remise du devis détaillé et l'intervention. Aucun paiement ne peut être exigé avant la fin de ce délai, en dehors des honoraires de consultation.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-08",
  },
];
