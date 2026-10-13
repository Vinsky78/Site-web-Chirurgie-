import type { Source } from "../types";
import type { Dossier } from "./types";

// ─── Sources France ───
const HAS: Source = {
  label: "Haute Autorité de santé (HAS) : chirurgie de l'obésité et suivi après chirurgie bariatrique",
  url: "https://www.has-sante.fr",
};
const SOFCPRE: Source = {
  label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)",
  url: "https://www.sofcpre.fr",
};
const SFAR: Source = { label: "Société française d'anesthésie et de réanimation (SFAR)", url: "https://sfar.org" };
const LEGIFRANCE_L6322_2: Source = {
  label: "Code de la santé publique, article L6322-2 (devis et délai de réflexion en chirurgie esthétique) — Légifrance",
  url: "https://www.legifrance.gouv.fr",
};
const AMELI: Source = {
  label: "Assurance maladie — ameli.fr (chirurgie réparatrice après amaigrissement, accord préalable)",
  url: "https://www.ameli.fr",
};
const ANNUAIRE_SANTE: Source = {
  label: "Annuaire santé (vérification des professionnels inscrits au RPPS)",
  url: "https://annuaire.sante.fr",
};

// ─── Sources Royaume-Uni ───
const NHS: Source = { label: "NHS: weight loss surgery, cosmetic procedures and excess skin", url: "https://www.nhs.uk" };
const GMC: Source = {
  label: "General Medical Council: medical register and guidance for doctors who perform cosmetic interventions",
  url: "https://www.gmc-uk.org",
};
const CQC: Source = { label: "Care Quality Commission: find a registered hospital or clinic", url: "https://www.cqc.org.uk" };
const BAAPS: Source = { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" };
const BAPRAS: Source = {
  label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)",
  url: "https://www.bapras.org.uk",
};
const RCS: Source = {
  label: "Royal College of Surgeons of England: professional standards for cosmetic surgery",
  url: "https://www.rcseng.ac.uk",
};
const NICE: Source = {
  label: "National Institute for Health and Care Excellence (NICE): obesity management and follow-up after bariatric surgery",
  url: "https://www.nice.org.uk",
};

const REVIEW = { status: "draft" } as const;
const UPDATED_AT = "2026-10-13";

/** Lifting circulaire du corps (body lift) : fiche, sous-pages et lexique (fr, en-gb). Brouillon à relire par le comité médical. */
export const dossier: Dossier = {
  // ════════════════════════════════════ FRANCE ════════════════════════════════════
  fr: {
    intervention: {
      id: "body-lift",
      locale: "fr",
      slug: "lifting-circulaire-du-corps",
      category: "body",
      title: "Lifting circulaire du corps (body lift)",
      summary:
        "Après une perte de poids massive, le body lift retire l'excès de peau autour de la taille. Poids stable, nutrition, étapes, risques et prise en charge.",
      description: [
        "Le lifting circulaire du corps, ou body lift, retire en une seule intervention l'excédent de peau et de graisse qui fait le tour du tronc : bas du ventre, flancs, hanches, fesses et parfois face externe des cuisses. Il s'adresse surtout aux personnes qui ont perdu beaucoup de poids, le plus souvent après une chirurgie de l'obésité (chirurgie bariatrique : sleeve, bypass), et dont la peau, distendue pendant des années, ne s'est pas rétractée.",
        "On parle de « lower body lift » (lifting inférieur du corps) lorsque l'intervention traite la ceinture abdominale et pelvienne. Elle associe en pratique une abdominoplastie à l'avant (souvent avec repositionnement du nombril et, si besoin, réparation d'un écartement des muscles abdominaux) et un lifting des fesses et des hanches à l'arrière. La peau des fesses peut être conservée sous forme d'un lambeau graisseux replié pour redonner du volume (auto-augmentation fessière), selon les cas.",
        "La cicatrice fait le tour du corps, comme une ceinture, et se situe en général au niveau du maillot ou du sous-vêtement. Elle est longue, définitive, et sa qualité dépend de la cicatrisation de chacun ; elle peut s'élargir, s'épaissir ou remonter légèrement avec le temps. L'intervention échange en quelque sorte un excès de peau contre une cicatrice.",
        "Il s'agit d'une chirurgie lourde : elle dure plusieurs heures, impose de retourner la personne sur la table d'opération et nécessite une hospitalisation de quelques jours. Après une perte de poids massive, l'excès de peau touche souvent aussi les bras, la poitrine et les cuisses : la chirurgie se fait alors en plusieurs temps, espacés de plusieurs mois, plutôt qu'en une seule fois.",
        "Le body lift améliore le confort (irritations et mycoses dans les plis, difficultés pour s'habiller ou faire du sport, hygiène) et la silhouette, mais il ne fait pas maigrir et ne supprime pas tout relâchement : une peau qui a perdu son élasticité peut continuer à se détendre un peu après l'intervention. Le résultat se maintient d'autant mieux que le poids reste stable.",
      ],
      indications: [
        "Excès de peau circulaire du bas du tronc (ventre, flancs, hanches, fesses) après une perte de poids massive, qu'elle fasse suite à une chirurgie bariatrique ou à un amaigrissement sans chirurgie.",
        "Poids stabilisé depuis plusieurs mois, souvent 12 à 18 mois après la chirurgie bariatrique, à un niveau que la personne peut maintenir.",
        "Gêne fonctionnelle : irritations, macération, mycoses ou infections récidivantes dans les plis, difficultés d'hygiène, d'habillement ou d'activité physique.",
        "Bilan nutritionnel satisfaisant ou carences corrigées, en lien avec l'équipe qui suit la chirurgie bariatrique.",
        "Adulte en bonne santé générale, non-fumeur ou ayant arrêté, capable de suivre une convalescence de plusieurs semaines.",
        "Demande personnelle, mûrie, avec des attentes réalistes sur la cicatrice et le résultat.",
      ],
      contraindications: [
        "Perte de poids encore en cours, ou poids instable : le résultat serait imprévisible et la peau pourrait se relâcher à nouveau.",
        "Indice de masse corporelle encore élevé, qui augmente nettement les complications ; le seuil acceptable est apprécié par le chirurgien.",
        "Carences nutritionnelles non corrigées (protéines, fer, vitamines), anémie ou dénutrition, qui compromettent la cicatrisation.",
        "Tabagisme actif, qui multiplie les problèmes de cicatrisation et de nécrose de la peau : un arrêt complet est demandé plusieurs semaines avant et après.",
        "Antécédents de thrombose ou d'embolie pulmonaire non évalués, trouble de la coagulation.",
        "Maladie cardiaque, respiratoire, diabète ou autre maladie chronique non équilibrée.",
        "Projet de grossesse à court terme.",
        "Attentes irréalistes, préoccupation excessive pour l'apparence ou difficultés psychologiques non accompagnées, y compris un trouble du comportement alimentaire.",
      ],
      risks: [
        {
          name: "Douleurs, œdème et ecchymoses",
          detail:
            "Fréquents et attendus : douleurs importantes les premiers jours, contrôlées par des antalgiques, tiraillement en position debout, gonflement du ventre, du pubis et des cuisses qui peut durer plusieurs mois.",
        },
        {
          name: "Sérome",
          detail:
            "Accumulation de liquide sous la peau, fréquente après un body lift et plus encore après une perte de poids massive. Elle peut nécessiter des ponctions répétées, plus rarement une reprise chirurgicale. Des drains et des points d'ancrage internes sont utilisés pour la limiter.",
        },
        {
          name: "Désunion de cicatrice et retard de cicatrisation",
          detail:
            "Fréquente, en particulier au milieu du dos, au niveau du pubis ou aux points de jonction de la cicatrice. Elle se traite le plus souvent par des pansements pendant plusieurs semaines, parfois par une reprise. Le tabac, le diabète, les carences et la tension excessive sur la cicatrice en augmentent le risque.",
        },
        {
          name: "Nécrose de la peau ou du nombril",
          detail:
            "Souffrance d'une zone de peau mal vascularisée, qui noircit puis se détache, plus fréquente chez les fumeurs. Elle cicatrise lentement et peut laisser une cicatrice élargie ; une greffe ou une reprise est parfois nécessaire.",
        },
        {
          name: "Infection",
          detail:
            "Infection de cicatrice ou de sérome, le plus souvent traitée par antibiotiques, parfois par un drainage. Une infection sévère qui s'étend rapidement est exceptionnelle et impose une prise en charge urgente.",
        },
        {
          name: "Hématome et saignement",
          detail:
            "Collection de sang sous la peau, pouvant nécessiter une reprise au bloc. Les grandes surfaces décollées exposent à une perte de sang ; une transfusion est parfois nécessaire, surtout en cas d'anémie préalable.",
        },
        {
          name: "Thrombose veineuse et embolie pulmonaire",
          detail:
            "Plus fréquentes qu'après d'autres chirurgies esthétiques, du fait de la durée de l'intervention, de l'immobilisation et du profil des patients. Rares mais potentiellement mortelles, elles sont prévenues par un lever précoce, une contention et en règle générale un traitement anticoagulant pendant plusieurs jours à semaines.",
        },
        {
          name: "Cicatrices",
          detail:
            "La cicatrice circulaire est définitive. Elle peut s'élargir, s'épaissir (cicatrice hypertrophique, plus rarement chéloïde), remonter ou être asymétrique. Son aspect évolue pendant 12 à 18 mois.",
        },
        {
          name: "Asymétries, relâchement résiduel et irrégularités",
          detail:
            "Différences entre les deux côtés, petits excès de peau aux extrémités de la cicatrice (« oreilles »), relâchement qui réapparaît partiellement. Une retouche peut être discutée après stabilisation, souvent au bout d'un an.",
        },
        {
          name: "Troubles de la sensibilité et lymphœdème",
          detail:
            "Engourdissement de la peau du ventre et des cuisses, souvent prolongé, parfois définitif sur certaines zones. Un gonflement persistant des jambes ou du pubis par perturbation du drainage lymphatique est possible.",
        },
        {
          name: "Risques liés à l'anesthésie",
          detail:
            "Anesthésie générale longue, avec changement de position en cours d'intervention ; les risques sont évalués lors de la consultation d'anesthésie obligatoire, en tenant compte des antécédents (apnée du sommeil, chirurgie bariatrique, carences).",
        },
      ],
      procedure: {
        anaesthesia: "Anesthésie générale.",
        duration:
          "Le plus souvent 4 à 6 heures, parfois davantage selon l'étendue de l'excès de peau et les gestes associés.",
        hospitalStay:
          "Hospitalisation de 2 à 5 jours en général, avec surveillance des drains, de la douleur et de la prévention de la thrombose.",
      },
      recovery: [
        "Jours 1 à 3 : hospitalisation, drains, douleurs contrôlées par des antalgiques, lever et premiers pas dès le lendemain avec aide, position légèrement penchée en avant pour soulager la cicatrice.",
        "Fin de la semaine 1 : retour à domicile, souvent avec un ou plusieurs drains, injections anticoagulantes, gaine de compression jour et nuit ; présence d'un proche indispensable.",
        "Semaines 2 à 3 : retrait des derniers drains, pansements réguliers, fatigue marquée ; on évite de s'asseoir longtemps sur la cicatrice du dos et de porter des charges.",
        "Semaines 4 à 6 : redressement progressif, reprise d'une activité de bureau souvent entre 3 et 6 semaines, plus tard pour un travail physique ; conduite quand les mouvements le permettent.",
        "Semaines 6 à 8 : arrêt de la gaine selon les consignes, reprise progressive du sport doux ; pas de sport intensif ni de port de charges lourdes avant l'accord du chirurgien.",
        "Mois 3 à 6 : diminution lente de l'œdème, sensibilité qui revient partiellement, cicatrices encore rouges ; protection solaire stricte.",
        "Mois 12 à 18 : cicatrices plus claires et plus souples, résultat considéré comme stable ; une retouche ou l'étape suivante (bras, poitrine, cuisses) se discute en général à partir de ce moment ou après au moins 3 à 6 mois.",
      ],
      alternatives: [
        "Ne rien faire, ou reporter : une option légitime, notamment tant que le poids n'est pas stable.",
        "Mesures d'hygiène et soins de peau des plis, vêtements de maintien : ils limitent les irritations sans retirer l'excès de peau.",
        "Abdominoplastie ou dermolipectomie abdominale seule, si l'excès de peau prédomine à l'avant : cicatrice plus courte, intervention moins lourde.",
        "Lifting des cuisses, des bras ou des seins, réalisés séparément selon les zones les plus gênantes.",
        "Techniques non chirurgicales de raffermissement (radiofréquence, ultrasons) : effet très limité sur un excès de peau important après une perte de poids massive.",
      ],
      faq: [
        {
          question: "Combien de temps attendre après une chirurgie bariatrique ?",
          answer:
            "Il faut que le poids soit stabilisé depuis plusieurs mois. En pratique, cela correspond souvent à 12 à 18 mois après une sleeve ou un bypass. Opérer trop tôt expose à un relâchement de la peau si la perte de poids continue, et à davantage de complications si l'état nutritionnel n'est pas rétabli.",
        },
        {
          question: "Pourquoi un bilan nutritionnel est-il demandé ?",
          answer:
            "La chirurgie bariatrique peut entraîner des carences en protéines, en fer, en vitamine B12, en folates, en vitamine D ou en zinc. Ces carences et l'anémie ralentissent la cicatrisation et augmentent les risques. Un bilan sanguin et, si besoin, une correction avec l'équipe qui vous suit sont réalisés avant l'intervention. Les suppléments prescrits après une chirurgie bariatrique doivent être poursuivis.",
        },
        {
          question: "Peut-on tout corriger en une seule opération ?",
          answer:
            "Rarement. Le body lift traite la ceinture du tronc. Les bras, la poitrine, le dos haut et l'intérieur des cuisses sont en général opérés lors d'autres interventions, espacées de plusieurs mois. Associer trop de gestes allonge la durée d'anesthésie et augmente les risques de thrombose, de saignement et de complications de cicatrisation.",
        },
        {
          question: "Où se situe la cicatrice ?",
          answer:
            "Elle fait le tour du corps, en général au niveau du maillot ou de la culotte, de l'avant vers les hanches et le dos. Sa position est dessinée avec vous avant l'intervention. Elle est définitive, et son aspect s'améliore pendant 12 à 18 mois.",
        },
        {
          question: "Combien de temps dure la convalescence ?",
          answer:
            "Prévoyez plusieurs semaines : hospitalisation de quelques jours, drains, fatigue importante, et en général 3 à 6 semaines avant de reprendre une activité de bureau. Le sport intensif reprend plus tard, avec l'accord du chirurgien. Une aide à domicile est nécessaire les premiers jours.",
        },
        {
          question: "Le body lift est-il pris en charge par l'Assurance maladie ?",
          answer:
            "Une partie peut l'être lorsqu'il s'agit d'une chirurgie réparatrice après amaigrissement important, par exemple lorsque le tablier abdominal recouvre le pubis. La prise en charge suppose une demande d'accord préalable et ne couvre pas forcément toute l'intervention : le lifting des fesses ou des hanches est souvent considéré comme esthétique. Des dépassements d'honoraires sont possibles.",
        },
        {
          question: "Et si je reprends du poids, ou si je souhaite une grossesse ?",
          answer:
            "Une reprise de poids importante ou une grossesse peuvent distendre à nouveau la peau et altérer le résultat. Il est généralement conseillé d'attendre la fin des projets de grossesse ; après une chirurgie bariatrique, une grossesse se planifie par ailleurs avec l'équipe médicale.",
        },
        {
          question: "Quel est le délai entre la consultation et l'intervention ?",
          answer:
            "Lorsque l'intervention a une part esthétique, la loi impose un délai minimal de 15 jours entre la remise du devis détaillé et l'opération, sans paiement exigé avant hors consultation. En pratique, le temps nécessaire au bilan nutritionnel, à l'arrêt du tabac et à l'accord préalable est souvent plus long. Une consultation d'anesthésie est obligatoire.",
        },
        {
          question: "Quel chirurgien consulter ?",
          answer:
            "Un chirurgien qualifié en chirurgie plastique, reconstructrice et esthétique, ayant l'habitude de la chirurgie après perte de poids massive, opérant dans un établissement autorisé par l'ARS. Sa qualification se vérifie sur l'Annuaire santé. Une coordination avec l'équipe de chirurgie bariatrique et votre médecin traitant est souhaitable.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risques ──
      {
        interventionId: "body-lift",
        kind: "risks",
        locale: "fr",
        title: "Body lift : les risques",
        summary:
          "Sérome, désunion de cicatrice, nécrose, thrombose : les risques du lifting circulaire après perte de poids massive et les signes qui doivent alerter.",
        answer:
          "Le body lift est une chirurgie longue et étendue. Les complications de cicatrisation (désunion, sérome) sont fréquentes et le plus souvent traitées sans séquelle majeure, mais elles allongent la convalescence. La thrombose et l'embolie pulmonaire, rares mais graves, sont plus fréquentes qu'après d'autres chirurgies esthétiques. Le tabac, un poids encore élevé et les carences nutritionnelles augmentent nettement les risques.",
        sections: [
          {
            heading: "Les suites fréquentes et attendues",
            paragraphs: [
              "Ces manifestations font partie des suites normales d'une intervention de cette ampleur. Elles diminuent progressivement sur plusieurs semaines à plusieurs mois.",
            ],
            bullets: [
              "Douleurs importantes les premiers jours, puis tiraillement en se redressant pendant plusieurs semaines.",
              "Gonflement du ventre, du pubis, des parties génitales et des cuisses, qui peut durer plusieurs mois.",
              "Ecchymoses étendues, qui s'estompent en quelques semaines.",
              "Écoulement par les drains, qui diminue progressivement.",
              "Engourdissement de la peau du ventre et des fesses, souvent prolongé.",
              "Grande fatigue pendant plusieurs semaines, accentuée en cas d'anémie.",
            ],
          },
          {
            heading: "Les complications fréquentes ou moins fréquentes",
            paragraphs: [
              "Après une perte de poids massive, la peau et les tissus cicatrisent moins bien, ce qui rend certaines complications plus fréquentes qu'après une abdominoplastie classique.",
            ],
            bullets: [
              "Sérome (accumulation de liquide), parfois répété, nécessitant des ponctions.",
              "Désunion d'une partie de la cicatrice, souvent au milieu du dos, au pubis ou aux jonctions, soignée par pansements pendant plusieurs semaines.",
              "Infection de la cicatrice ou d'un sérome, traitée par antibiotiques ou drainage.",
              "Hématome nécessitant parfois une reprise au bloc ; transfusion en cas de saignement important.",
              "Nécrose d'une zone de peau ou du nombril, plus fréquente chez les fumeurs.",
              "Cicatrice élargie, épaissie, remontée ou asymétrique ; petits excès de peau aux extrémités.",
              "Relâchement résiduel ou récidive partielle du relâchement avec le temps.",
            ],
          },
          {
            heading: "Les complications rares mais graves",
            paragraphs: [
              "La thrombose veineuse profonde (caillot dans une veine de la jambe ou du bassin) peut se compliquer d'embolie pulmonaire, potentiellement mortelle. Le risque est plus élevé que pour la plupart des chirurgies esthétiques du fait de la durée de l'intervention, de l'immobilisation et des antécédents fréquents (surpoids, apnée du sommeil). La prévention associe un lever précoce, une contention et, en règle générale, des injections anticoagulantes pendant plusieurs jours ou semaines.",
              "Sont également possibles, de façon rare : une infection sévère s'étendant rapidement, une complication de l'anesthésie, une atteinte d'un nerf de la cuisse responsable de douleurs ou d'engourdissement durables, ou un lymphœdème persistant des jambes.",
            ],
          },
          {
            heading: "Quand appeler sans attendre",
            paragraphs: [
              "Contactez rapidement le chirurgien ou le service qui vous a opéré en cas de signe inhabituel. En cas d'essoufflement, de douleur dans la poitrine, de malaise ou de confusion, appelez le 15 (SAMU) ou le 112.",
            ],
            bullets: [
              "Essoufflement brutal, douleur thoracique, toux avec crachats sanglants, palpitations.",
              "Mollet ou cuisse douloureux, chaud ou gonflé d'un seul côté.",
              "Fièvre, frissons, rougeur qui s'étend, écoulement purulent ou malodorant.",
              "Peau qui noircit ou devient violacée le long de la cicatrice ou autour du nombril.",
              "Gonflement rapide et tendu d'une zone, douleur qui augmente au lieu de diminuer.",
              "Drain qui ramène brusquement beaucoup de sang, malaise, pâleur.",
              "Ouverture brutale de la cicatrice.",
            ],
          },
          {
            heading: "Les facteurs qui augmentent les risques",
            paragraphs: [
              "Plusieurs facteurs sont modifiables et doivent être corrigés avant de fixer une date : c'est l'un des intérêts du bilan préalable.",
            ],
            bullets: [
              "Tabac et nicotine sous toutes leurs formes : arrêt complet demandé plusieurs semaines avant et après.",
              "Indice de masse corporelle encore élevé et poids non stabilisé.",
              "Carences en protéines, en fer, en vitamines ou en zinc, anémie, après une chirurgie bariatrique.",
              "Diabète, apnée du sommeil, maladie cardiaque ou respiratoire mal équilibrés.",
              "Antécédents personnels ou familiaux de thrombose, contraception œstroprogestative ou traitement hormonal.",
              "Association de nombreux gestes dans la même séance, qui allonge la durée d'anesthésie.",
            ],
          },
          {
            heading: "Retouches et étapes suivantes",
            paragraphs: [
              "Des retouches sont assez fréquentes après un body lift : correction d'une cicatrice, d'un petit excès de peau aux extrémités ou d'une asymétrie. Elles sont envisagées après stabilisation, souvent au bout d'un an. Avant de vous engager, demandez quelles conditions sont prévues pour une retouche ou une complication, y compris sur le plan financier.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Prix ──
      {
        interventionId: "body-lift",
        kind: "cost",
        locale: "fr",
        title: "Prix et prise en charge d'un body lift",
        summary:
          "Devis d'un body lift, ce qui fait varier le prix, prise en charge partielle par l'Assurance maladie après perte de poids massive et accord préalable.",
        answer:
          "Le coût d'un body lift dépend de l'étendue de l'excès de peau, des gestes associés, de la durée de l'intervention et du séjour hospitalier. Nous n'indiquons pas de fourchette : seul un devis détaillé, remis après consultation, permet de connaître le montant. Après une perte de poids massive, une partie de l'intervention peut être prise en charge par l'Assurance maladie, sur accord préalable.",
        sections: [
          {
            heading: "Ce que contient un devis",
            paragraphs: [
              "Un devis détaillé et daté doit être remis avant l'intervention. Après une perte de poids massive, il distingue en général la partie remboursable de la partie restant à votre charge. Vérifiez qu'il précise les postes suivants, ou ceux qui n'y figurent pas.",
            ],
            bullets: [
              "Honoraires du chirurgien, avec la description des zones traitées et des gestes associés.",
              "Honoraires de l'anesthésiste, parfois facturés séparément.",
              "Frais d'hospitalisation : bloc opératoire, nuits, chambre particulière éventuelle.",
              "Gaine de compression, bas de contention, injections anticoagulantes, pansements, soins infirmiers à domicile.",
              "Examens préopératoires (bilan sanguin et nutritionnel).",
              "Consultations de suivi et conditions prévues en cas de retouche ou de complication.",
            ],
          },
          {
            heading: "Ce qui fait varier le prix",
            paragraphs: [
              "L'étendue de l'excès de peau, la réalisation d'un lifting circulaire complet ou seulement de certaines parties, les gestes associés (réparation des muscles abdominaux, auto-augmentation fessière, liposuccion), la durée d'intervention, le nombre de nuits d'hospitalisation et le secteur du chirurgien et de l'établissement pèsent sur le devis.",
              "La chirurgie après perte de poids massive se fait souvent en plusieurs temps : il est utile de demander une vision d'ensemble du parcours prévu et de son coût, pas seulement de la première étape.",
            ],
          },
          {
            heading: "La prise en charge par l'Assurance maladie",
            paragraphs: [
              "La chirurgie réparatrice de l'excès de peau après un amaigrissement important peut être prise en charge lorsqu'elle répond à des critères médicaux. C'est notamment le cas de la réparation du tablier abdominal lorsqu'il recouvre le pubis, ce qui correspond à la partie avant du body lift. Le chirurgien adresse une demande d'accord préalable au service médical de l'Assurance maladie, avec des photographies et un compte rendu ; il faut attendre la réponse avant de fixer la date.",
              "Le lifting des fesses, des hanches ou des cuisses est souvent considéré comme esthétique et reste alors à votre charge. Des dépassements d'honoraires sont possibles selon le secteur du chirurgien ; renseignez-vous auprès de votre complémentaire santé sur ce qu'elle rembourse. Les critères exacts et leur application doivent être confirmés au cas par cas.",
            ],
          },
          {
            heading: "Les règles applicables en France",
            paragraphs: [
              "Pour la part esthétique de l'intervention, le Code de la santé publique (article L6322-2) impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention, et aucune somme autre que les honoraires de consultation ne peut être exigée avant la fin de ce délai. Les actes à visée purement esthétique sont soumis à la TVA.",
              "L'intervention doit avoir lieu dans un établissement autorisé par l'ARS, et une consultation d'anesthésie préalable est obligatoire.",
            ],
          },
          {
            heading: "Le coût des complications et des retouches",
            paragraphs: [
              "Les soins d'une désunion de cicatrice (pansements infirmiers pendant plusieurs semaines), les ponctions de sérome, une reprise au bloc ou une retouche peuvent entraîner des frais, un arrêt de travail plus long et des déplacements. Demandez ce qui serait facturé et si une assurance couvrant les complications est prévue.",
              "Méfiez-vous des pressions à décider vite, des acomptes demandés avant la fin du délai légal, des crédits proposés en consultation et des devis sans détail des postes. Un body lift réalisé à l'étranger complique le suivi des complications, fréquentes avec cette intervention.",
            ],
          },
        ],
        sources: [AMELI, LEGIFRANCE_L6322_2, ANNUAIRE_SANTE, SOFCPRE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Convalescence ──
      {
        interventionId: "body-lift",
        kind: "recovery",
        locale: "fr",
        title: "Convalescence après un body lift",
        summary:
          "Après un body lift : hospitalisation, drains, anticoagulants, gaine, reprise du travail en 3 à 6 semaines, cicatrices sur 12 à 18 mois, signes d'alerte.",
        answer:
          "La convalescence d'un body lift est longue : quelques jours d'hospitalisation, des drains, des injections anticoagulantes, une gaine de compression pendant plusieurs semaines et une fatigue marquée. Une activité de bureau reprend souvent entre 3 et 6 semaines. Les cicatrices évoluent pendant 12 à 18 mois. Les consignes de votre chirurgien priment sur ces repères.",
        sections: [
          {
            heading: "À l'hôpital",
            paragraphs: [
              "L'hospitalisation dure en général 2 à 5 jours. Les douleurs sont traitées par des antalgiques adaptés, parfois par une pompe les premiers jours. Des drains évacuent le liquide sous la peau. Le lever a lieu dès le lendemain avec l'aide de l'équipe, en restant légèrement penché en avant pour ne pas tirer sur la cicatrice.",
            ],
            bullets: [
              "Marcher plusieurs fois par jour, même peu, pour prévenir la thrombose.",
              "Injections anticoagulantes et bas de contention selon la prescription.",
              "Reprise rapide de l'alimentation, avec un apport suffisant en protéines.",
              "Surveillance des drains, de la cicatrice et des signes de saignement.",
            ],
          },
          {
            heading: "Les premières semaines à domicile",
            paragraphs: [
              "Le retour à domicile se fait parfois avec un drain. Un proche doit être présent les premiers jours ; un infirmier passe souvent pour les pansements et les injections. La gaine de compression est portée jour et nuit.",
            ],
            bullets: [
              "Semaine 1 : fatigue importante, déplacements courts, position semi-assise pour dormir, genoux légèrement fléchis.",
              "Semaines 2 à 3 : retrait des derniers drains, redressement progressif ; éviter de rester longtemps assis directement sur la cicatrice du dos.",
              "Pas de port de charges, pas de bain ni de piscine tant que les cicatrices ne sont pas fermées ; douche selon les consignes.",
              "Poursuivre les suppléments vitaminiques et les apports en protéines prescrits après la chirurgie bariatrique.",
            ],
          },
          {
            heading: "Reprise du travail et des activités",
            paragraphs: [],
            bullets: [
              "Travail de bureau : souvent entre 3 et 6 semaines.",
              "Travail physique : plus tard, en général après 6 à 8 semaines ou davantage, selon l'avis du chirurgien.",
              "Conduite : quand on peut se tourner et freiner sans douleur, sans antalgique sédatif.",
              "Marche quotidienne dès les premiers jours, activités douces vers la 6e semaine.",
              "Sport intensif, abdominaux et port de charges lourdes : pas avant l'accord du chirurgien, souvent après 2 à 3 mois.",
              "Soleil : protéger les cicatrices pendant au moins un an.",
            ],
          },
          {
            heading: "Les mois suivants",
            paragraphs: [
              "L'œdème diminue lentement, sur plusieurs mois, notamment au pubis et aux cuisses. La sensibilité de la peau revient partiellement. Les cicatrices restent rouges et parfois épaisses pendant plusieurs mois, puis s'éclaircissent et s'assouplissent ; des soins (massages, pansements en silicone) peuvent être conseillés.",
              "Le résultat est considéré comme stable entre 12 et 18 mois. L'étape suivante d'une chirurgie en plusieurs temps (bras, poitrine, cuisses) ou une retouche ne se programme pas avant plusieurs mois, souvent au moins 3 à 6 mois, une fois la récupération complète.",
            ],
          },
          {
            heading: "Signes qui doivent faire appeler",
            paragraphs: [
              "Contactez le chirurgien en cas de fièvre, de rougeur qui s'étend, d'écoulement anormal, de peau qui noircit, de gonflement rapide d'une zone, d'ouverture de la cicatrice ou de mollet douloureux. En cas d'essoufflement, de douleur thoracique ou de malaise, appelez le 15 ou le 112.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Avant de se décider ──
      {
        interventionId: "body-lift",
        kind: "decision",
        locale: "fr",
        title: "Body lift : avant de se décider",
        summary:
          "Body lift : poids stable 12 à 18 mois après chirurgie bariatrique, bilan nutritionnel, arrêt du tabac, étapes, image du corps et questions à poser.",
        answer:
          "Le body lift s'envisage chez un adulte dont le poids est stabilisé depuis plusieurs mois, souvent 12 à 18 mois après une chirurgie bariatrique, avec un bilan nutritionnel satisfaisant et sans tabac. C'est une chirurgie lourde, souvent la première d'un parcours en plusieurs temps. Prenez le temps de comprendre le déroulé complet, de la consultation au suivi à un an.",
        sections: [
          {
            heading: "Est-ce le bon moment ?",
            paragraphs: [
              "Le poids doit être stable depuis plusieurs mois, à un niveau que vous pouvez maintenir. Après une sleeve ou un bypass, cela correspond souvent à 12 à 18 mois après l'intervention. Plus l'indice de masse corporelle est proche de la normale, plus le résultat est net et moins les complications sont fréquentes ; le chirurgien vous dira si une perte de poids complémentaire est souhaitable.",
              "Un bilan sanguin vérifie l'absence d'anémie et de carences (protéines, fer, vitamine B12, folates, vitamine D, zinc). Le tabac doit être arrêté complètement. Il est préférable d'avoir terminé ses projets de grossesse. La chirurgie esthétique est réservée aux adultes.",
            ],
          },
          {
            heading: "Le déroulé, de la consultation au suivi",
            paragraphs: [],
            bullets: [
              "Consultation : examen de l'excès de peau, des cicatrices éventuelles et des muscles abdominaux, photographies, discussion des priorités et du plan en plusieurs temps.",
              "Bilan : prise de sang et avis de l'équipe de chirurgie bariatrique ou du médecin nutritionniste, arrêt du tabac, équilibre des maladies chroniques.",
              "Demande d'accord préalable si une prise en charge est possible, puis devis détaillé et délai de réflexion.",
              "Consultation d'anesthésie, au moins 48 heures avant l'intervention.",
              "Intervention et hospitalisation de quelques jours, puis convalescence de plusieurs semaines.",
              "Suivi : consultations à une semaine, un mois, trois mois, six mois et un an environ ; bilan avant toute étape suivante.",
            ],
          },
          {
            heading: "Vos attentes et votre image du corps",
            paragraphs: [
              "Après une perte de poids massive, le décalage entre l'image de soi et un corps qui a beaucoup changé peut être difficile à vivre. Le body lift améliore souvent le confort et l'aisance, mais laisse une cicatrice circulaire et ne supprime pas tout relâchement. Demandez des photographies avant-après de patients au profil comparable et ce qui peut et ne peut pas changer dans votre cas.",
              "Certaines personnes souffrent d'une préoccupation envahissante pour leur apparence, que les autres perçoivent à peine : c'est le trouble dysmorphique corporel, ou dysmorphophobie. La chirurgie ne le soulage pas. Si vous vous reconnaissez dans cette description, ou si votre relation à l'alimentation reste difficile, parlez-en à votre médecin traitant ou à l'équipe qui vous a suivi pour la chirurgie bariatrique. En cas d'idées suicidaires, le 3114 répond jour et nuit.",
            ],
          },
          {
            heading: "Questions à poser au chirurgien",
            paragraphs: [],
            bullets: [
              "Êtes-vous qualifié en chirurgie plastique, reconstructrice et esthétique, et pratiquez-vous régulièrement la chirurgie après perte de poids massive ?",
              "Mon poids et mon bilan nutritionnel permettent-ils d'opérer maintenant, ou faut-il attendre ?",
              "Que comprendra l'intervention (avant, côtés, fesses, cuisses), où passera la cicatrice et quels gestes associez-vous ?",
              "Quel plan proposez-vous pour les autres zones, dans quel ordre et avec quel intervalle ?",
              "Combien de nuits d'hospitalisation, comment prévenez-vous la thrombose et pendant combien de temps ?",
              "Quelles complications voyez-vous le plus souvent, comment sont-elles soignées et qui joindre la nuit ou le week-end ?",
              "Quelle partie peut faire l'objet d'une demande d'accord préalable, et que restera-t-il à ma charge, y compris en cas de retouche ?",
            ],
          },
          {
            heading: "Le délai de réflexion et le second avis",
            paragraphs: [
              "Pour la part esthétique, le Code de la santé publique impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention, et aucun paiement autre que la consultation ne peut être exigé avant. Ce délai est un minimum. Demander un second avis est toujours légitime, d'autant plus pour une intervention de cette ampleur.",
            ],
          },
        ],
        sources: [
          LEGIFRANCE_L6322_2,
          HAS,
          ANNUAIRE_SANTE,
          SOFCPRE,
          { label: "3114 — numéro national de prévention du suicide", url: "https://3114.fr" },
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Alternatives ──
      {
        interventionId: "body-lift",
        kind: "alternatives",
        locale: "fr",
        title: "Alternatives au body lift",
        summary:
          "Abdominoplastie seule, lifting des cuisses, soins des plis, techniques non chirurgicales ou attendre : alternatives au body lift, limites et risques.",
        answer:
          "Selon la répartition de l'excès de peau, les alternatives sont une abdominoplastie ou une dermolipectomie abdominale seule, des interventions séparées sur les cuisses, les bras ou les seins, des soins de peau et vêtements de maintien, ou le choix de ne pas opérer. Les techniques non chirurgicales ont un effet très limité sur un excès de peau important.",
        sections: [
          {
            heading: "Abdominoplastie ou dermolipectomie abdominale seule",
            paragraphs: [
              "Si l'excès de peau se situe surtout à l'avant, sous forme de tablier abdominal, une intervention limitée au ventre peut suffire. La cicatrice est plus courte, l'intervention moins longue et la convalescence un peu moins lourde. En revanche, elle ne traite pas les hanches, les fesses ni le dos, et peut laisser un excès de peau sur les côtés.",
            ],
          },
          {
            heading: "Interventions séparées sur d'autres zones",
            paragraphs: [
              "Un lifting des cuisses, des bras ou des seins peut être réalisé seul si cette zone est la plus gênante. Chaque intervention a ses propres cicatrices et ses propres risques. Le chirurgien vous aide à définir les priorités et l'ordre des étapes.",
            ],
          },
          {
            heading: "Soins de la peau et mesures de confort",
            paragraphs: [
              "Une hygiène soigneuse des plis, un séchage minutieux, des traitements locaux des mycoses et des irritations, et des vêtements de maintien limitent les gênes au quotidien. Ils ne retirent pas l'excès de peau, mais peuvent suffire à certaines personnes ou permettre d'attendre la stabilisation du poids.",
            ],
          },
          {
            heading: "Techniques non chirurgicales",
            paragraphs: [
              "La radiofréquence, les ultrasons focalisés ou d'autres appareils de raffermissement agissent sur une peau légèrement relâchée. Après une perte de poids massive, leur effet est très limité et ne remplace pas une chirurgie. Ils comportent leurs propres risques (brûlures, douleurs) et doivent être réalisés sous responsabilité médicale. La liposuccion seule n'est pas adaptée : elle retire de la graisse mais pas de peau, et peut accentuer le relâchement.",
            ],
          },
          {
            heading: "Attendre ou ne rien faire",
            paragraphs: [
              "Choisir de ne pas opérer, ou de reporter, est une option légitime. C'est même nécessaire tant que le poids n'est pas stable ou que les carences ne sont pas corrigées. La réflexion peut être reprise plus tard sans conséquence médicale.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, AMELI],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "bariatric-surgery",
        locale: "fr",
        slug: "chirurgie-bariatrique",
        term: "Chirurgie bariatrique",
        aliases: [
          "chirurgie de l'obésité",
          "chirurgie de l'obesite",
          "chirurgie bariatrique",
          "sleeve",
          "sleeve gastrectomie",
          "gastrectomie longitudinale",
          "bypass gastrique",
          "anneau gastrique",
        ],
        definition:
          "La chirurgie bariatrique regroupe les interventions sur l'estomac ou l'intestin destinées à traiter l'obésité sévère, comme la sleeve gastrectomie ou le bypass gastrique. Elle entraîne une perte de poids importante, qui laisse souvent un excès de peau.",
        detail: [
          "En France, elle est réservée à des situations précises définies par la Haute Autorité de santé, après une évaluation par une équipe pluridisciplinaire, et nécessite un suivi médical à vie.",
          "Elle peut entraîner des carences en protéines, en fer, en vitamine B12, en folates, en vitamine D ou en zinc, d'où la prise de suppléments et des bilans sanguins réguliers. Ces carences doivent être corrigées avant une chirurgie de l'excès de peau, car elles compromettent la cicatrisation.",
          "La chirurgie de l'excès de peau (body lift, abdominoplastie, lifting des bras ou des cuisses) est en général envisagée une fois le poids stabilisé, souvent 12 à 18 mois après la chirurgie bariatrique.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "circumferential-body-lift",
        locale: "fr",
        slug: "lifting-circulaire",
        term: "Lifting circulaire",
        aliases: [
          "lifting circulaire du corps",
          "body lift",
          "body-lift",
          "bodylift",
          "lower body lift",
          "lifting inférieur du corps",
          "dermolipectomie circulaire",
          "torsoplastie",
        ],
        definition:
          "Le lifting circulaire est une intervention qui retire l'excès de peau et de graisse sur tout le tour du bas du tronc : ventre, flancs, hanches et fesses. La cicatrice fait le tour du corps, comme une ceinture.",
        detail: [
          "Il associe une abdominoplastie à l'avant et un lifting des fesses et des hanches à l'arrière, ce qui oblige à retourner la personne pendant l'intervention. Il est surtout pratiqué après une perte de poids massive.",
          "C'est une chirurgie longue, avec une hospitalisation de quelques jours et une convalescence de plusieurs semaines. Les complications de cicatrisation et le sérome y sont plus fréquents qu'après une abdominoplastie classique, et le risque de thrombose justifie une prévention renforcée.",
          "On distingue le lifting inférieur du corps (« lower body lift ») du lifting supérieur, qui traite le haut du tronc et la poitrine et se pratique lors d'une autre étape.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },

  // ════════════════════════════════════ UNITED KINGDOM ════════════════════════════════════
  "en-gb": {
    intervention: {
      id: "body-lift",
      locale: "en-gb",
      slug: "body-lift",
      category: "body",
      title: "Body lift (lower body lift)",
      summary:
        "After massive weight loss, a body lift removes excess skin around the waist. Stable weight, nutrition, staged surgery, risks and NHS criteria.",
      description: [
        "A body lift removes excess skin and fat from all the way around the lower trunk in one operation: the lower tummy, flanks, hips, buttocks and sometimes the outer thighs. It is mainly for people who have lost a large amount of weight, most often after weight loss surgery (bariatric surgery such as a gastric sleeve or bypass), whose skin has been stretched for years and has not shrunk back.",
        "A lower body lift treats the waist and pelvic area. In practice it combines a tummy tuck at the front, often with repositioning of the belly button and, if needed, repair of separated abdominal muscles, with a lift of the buttocks and hips at the back. Some of the buttock tissue may be kept and folded under the skin to add volume (buttock auto-augmentation), depending on your anatomy.",
        "The scar runs all the way round the body like a belt, usually sitting at the level of underwear or swimwear. It is long and permanent, and how it heals varies from person to person: it can widen, thicken or ride up a little over time. In effect, the operation trades excess skin for a scar.",
        "This is major surgery. It takes several hours, you are turned during the operation, and you stay in hospital for a few days. After massive weight loss, loose skin often also affects the arms, chest and inner thighs, so surgery is usually done in stages several months apart rather than all at once.",
        "A body lift can improve comfort (rashes and infections in skin folds, difficulty with clothing, hygiene or exercise) and body shape, but it is not a weight-loss operation and does not remove all looseness: skin that has lost its elasticity can relax a little again afterwards. Results are more likely to last if your weight stays stable.",
      ],
      indications: [
        "Excess skin around the lower trunk (tummy, flanks, hips, buttocks) after massive weight loss, whether after bariatric surgery or weight loss without surgery.",
        "Weight stable for several months, often 12 to 18 months after bariatric surgery, at a level you can maintain.",
        "Physical problems: rashes, skin breakdown, fungal or bacterial infections in the folds, difficulty with hygiene, clothing or exercise.",
        "Satisfactory blood tests, or nutritional deficiencies corrected, with input from your bariatric team.",
        "An adult in good general health who does not smoke or has stopped, and who can manage a recovery of several weeks.",
        "A considered personal decision with realistic expectations about the scar and result.",
      ],
      contraindications: [
        "Still losing weight, or weight not yet stable: the result would be unpredictable and the skin may loosen again.",
        "A body mass index that is still high, which greatly increases complications; the acceptable level is judged by the surgeon.",
        "Uncorrected nutritional deficiencies (protein, iron, vitamins), anaemia or malnutrition, which impair healing.",
        "Smoking or nicotine use, which greatly increase wound problems and skin loss: you will be asked to stop completely for several weeks before and after.",
        "A history of blood clots that has not been assessed, or a bleeding disorder.",
        "Heart or lung disease, diabetes or other long-term conditions that are not well controlled.",
        "Planning a pregnancy in the near future.",
        "Unrealistic expectations, excessive concern about appearance or psychological difficulties without support, including an eating disorder.",
      ],
      risks: [
        {
          name: "Pain, swelling and bruising",
          detail:
            "Common and expected: significant pain for the first few days, controlled with painkillers, a pulling sensation when standing up straight, and swelling of the tummy, pubic area and thighs that can last several months.",
        },
        {
          name: "Seroma",
          detail:
            "A collection of fluid under the skin is common after a body lift, and more so after massive weight loss. It may need draining with a needle several times, and occasionally further surgery. Drains and internal stitches are used to reduce the risk.",
        },
        {
          name: "Wound breakdown and delayed healing",
          detail:
            "Common, especially in the middle of the back, over the pubic area or where scar lines meet. It is usually treated with dressings over several weeks, sometimes with further surgery. Smoking, diabetes, nutritional deficiencies and tension on the wound increase the risk.",
        },
        {
          name: "Skin or belly button necrosis",
          detail:
            "An area of skin with a poor blood supply darkens and dies, more often in people who smoke. It heals slowly and can leave a wider scar; a skin graft or revision is sometimes needed.",
        },
        {
          name: "Infection",
          detail:
            "Infection of the wound or a seroma, usually treated with antibiotics and sometimes drainage. A severe, rapidly spreading infection is very rare and needs urgent treatment.",
        },
        {
          name: "Haematoma and bleeding",
          detail:
            "A collection of blood under the skin that may need a return to theatre. The large area of surgery can cause significant blood loss, and a blood transfusion is sometimes needed, especially if you were anaemic beforehand.",
        },
        {
          name: "Deep vein thrombosis and pulmonary embolism",
          detail:
            "More common than after most cosmetic operations, because of the length of surgery, reduced mobility and the health background of many patients. Rare but potentially fatal, they are reduced by moving early, compression stockings and usually blood-thinning injections for days to weeks.",
        },
        {
          name: "Scarring",
          detail:
            "The circumferential scar is permanent. It may widen, become raised (hypertrophic or, less often, keloid), move upwards or be uneven. It continues to change for 12 to 18 months.",
        },
        {
          name: "Asymmetry, residual looseness and contour irregularities",
          detail:
            "Differences between sides, small folds of skin at the ends of the scar ('dog ears'), and some looseness that returns over time. A revision can be considered once things have settled, often after about a year.",
        },
        {
          name: "Numbness and lymphoedema",
          detail:
            "Numbness of the tummy and thigh skin is common and can be long-lasting, sometimes permanent in places. Persistent swelling of the legs or pubic area, caused by disruption of lymphatic drainage, is possible.",
        },
        {
          name: "Anaesthetic risks",
          detail:
            "A long general anaesthetic with a change of position during surgery; the risks are assessed at your pre-operative assessment, taking into account conditions such as sleep apnoea, previous bariatric surgery and deficiencies.",
        },
      ],
      procedure: {
        anaesthesia: "General anaesthesia.",
        duration: "Usually 4 to 6 hours, sometimes longer depending on the amount of skin and any combined procedures.",
        hospitalStay:
          "Usually 2 to 5 nights in hospital, with monitoring of drains, pain control and blood clot prevention.",
      },
      recovery: [
        "Days 1 to 3: in hospital with drains, pain controlled with painkillers, getting up and taking first steps with help from the day after surgery, slightly bent forward to ease tension on the scar.",
        "End of week 1: home, often with one or more drains, blood-thinning injections and a compression garment day and night; you will need someone with you.",
        "Weeks 2 to 3: remaining drains removed, regular dressings, marked tiredness; avoid sitting for long on the back scar and do not lift anything heavy.",
        "Weeks 4 to 6: gradually standing straighter; return to desk-based work often between 3 and 6 weeks, later for physical jobs; driving once you can move freely.",
        "Weeks 6 to 8: stop the garment as advised and build up gentle exercise; no strenuous exercise or heavy lifting until your surgeon agrees.",
        "Months 3 to 6: swelling slowly settles, some sensation returns, scars still red; strict sun protection.",
        "Months 12 to 18: scars paler and softer, result considered settled; any revision or the next stage (arms, chest, thighs) is usually planned from this point, or at least 3 to 6 months after full recovery.",
      ],
      alternatives: [
        "Doing nothing, or waiting: a legitimate choice, and necessary while your weight is still changing.",
        "Skin care in the folds and supportive garments: these reduce irritation but do not remove excess skin.",
        "A tummy tuck or apronectomy (panniculectomy) alone, if most of the excess is at the front: a shorter scar and a smaller operation.",
        "A thigh, arm or breast lift carried out separately, depending on which area troubles you most.",
        "Non-surgical skin tightening (radiofrequency, ultrasound): very limited effect on large amounts of loose skin after massive weight loss.",
      ],
      faq: [
        {
          question: "How long should I wait after weight loss surgery?",
          answer:
            "Your weight should have been stable for several months. In practice this is often 12 to 18 months after a gastric sleeve or bypass. Operating too early risks the skin loosening again if you continue to lose weight, and more complications if your nutrition has not recovered.",
        },
        {
          question: "Why do I need blood tests and a nutrition check?",
          answer:
            "Bariatric surgery can cause deficiencies in protein, iron, vitamin B12, folate, vitamin D and zinc. These, and anaemia, slow wound healing and increase risks. Blood tests are done beforehand, and any deficiencies are corrected with your bariatric team or GP. Keep taking the supplements prescribed after your weight loss surgery.",
        },
        {
          question: "Can everything be done in one operation?",
          answer:
            "Rarely. A body lift treats the lower trunk. The arms, chest, upper back and inner thighs are usually treated in separate operations several months apart. Combining too much increases anaesthetic time and the risk of blood clots, bleeding and wound problems.",
        },
        {
          question: "Where will the scar be?",
          answer:
            "It goes all the way round, usually at the level of underwear or swimwear, from the front over the hips to the back. Its position is marked with you before surgery. It is permanent, and its appearance improves over 12 to 18 months.",
        },
        {
          question: "How long is the recovery?",
          answer:
            "Allow several weeks: a few days in hospital, drains, significant tiredness and usually 3 to 6 weeks before returning to desk-based work. Strenuous exercise comes later, once your surgeon agrees. You will need help at home for the first days.",
        },
        {
          question: "Is a body lift available on the NHS?",
          answer:
            "Only rarely. The NHS does not fund surgery for cosmetic reasons, and excess skin surgery after weight loss is generally treated as a procedure of limited clinical value. Criteria are set locally and are strict; a full body lift is often not routinely funded, though removal of an overhanging abdominal apron may be considered in some areas, sometimes through an individual funding request. Your GP or bariatric team can advise.",
        },
        {
          question: "What if I regain weight or want to get pregnant?",
          answer:
            "Significant weight gain or pregnancy can stretch the skin again and affect the result. Many surgeons suggest waiting until your family is complete; after bariatric surgery, pregnancy should in any case be planned with your medical team.",
        },
        {
          question: "How long should I wait before deciding?",
          answer:
            "There is no legal waiting period in the UK, but professional guidance recommends at least two weeks between your consultation and agreeing to surgery. In practice, the time needed for blood tests, stopping smoking and stabilising your weight is often longer.",
        },
        {
          question: "Who should carry out my body lift?",
          answer:
            "A surgeon on the GMC Specialist Register in plastic surgery with experience of surgery after massive weight loss, working in a hospital registered with the Care Quality Commission in England (or the equivalent regulator in Scotland, Wales or Northern Ireland). Coordination with your bariatric team and GP is advisable.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risks ──
      {
        interventionId: "body-lift",
        kind: "risks",
        locale: "en-gb",
        title: "Body lift risks",
        summary:
          "Seroma, wound breakdown, skin necrosis and blood clots: the risks of a body lift after massive weight loss and when to seek urgent help.",
        answer:
          "A body lift is long, extensive surgery. Wound healing problems such as wound breakdown and seroma are common and usually treated without lasting harm, but they lengthen recovery. Blood clots, rare but serious, are more common than after most cosmetic operations. Smoking, a still-high BMI and nutritional deficiencies all increase the risks considerably.",
        sections: [
          {
            heading: "Common and expected effects",
            paragraphs: [
              "These are part of normal recovery from an operation of this size and settle gradually over weeks to months.",
            ],
            bullets: [
              "Significant pain for the first few days, then a pulling sensation when standing straight for several weeks.",
              "Swelling of the tummy, pubic area, genitals and thighs, which can last several months.",
              "Widespread bruising, fading over a few weeks.",
              "Fluid from the drains, gradually reducing.",
              "Numbness of the skin of the tummy and buttocks, often long-lasting.",
              "Marked tiredness for several weeks, worse if you are anaemic.",
            ],
          },
          {
            heading: "Common or less common complications",
            paragraphs: [
              "After massive weight loss, skin and tissues heal less well, so some complications are more frequent than after a standard tummy tuck.",
            ],
            bullets: [
              "Seroma (fluid collection), sometimes recurring and needing repeated drainage.",
              "Breakdown of part of the wound, often in the middle of the back, over the pubic area or where scar lines meet, treated with dressings over several weeks.",
              "Infection of the wound or a seroma, treated with antibiotics or drainage.",
              "Haematoma, sometimes needing a return to theatre; transfusion if bleeding is significant.",
              "Necrosis of an area of skin or the belly button, more common in people who smoke.",
              "A wide, raised, displaced or uneven scar; small folds of skin at the ends.",
              "Residual looseness, or some looseness returning over time.",
            ],
          },
          {
            heading: "Rare but serious complications",
            paragraphs: [
              "Deep vein thrombosis, a clot in a vein in the leg or pelvis, can travel to the lungs (pulmonary embolism), which can be fatal. The risk is higher than for most cosmetic operations because of the length of surgery, reduced mobility and common background conditions such as a high BMI or sleep apnoea. Prevention combines moving early, compression stockings and usually blood-thinning injections for days or weeks.",
              "Other rare problems include a severe, rapidly spreading infection, anaesthetic complications, injury to a nerve in the thigh causing long-lasting pain or numbness, and persistent lymphoedema of the legs.",
            ],
          },
          {
            heading: "When to seek help urgently",
            paragraphs: [
              "Contact your surgeon's team promptly if something does not feel right; if you cannot reach them, call NHS 111. Call 999 if you have chest pain, sudden breathlessness, collapse or confusion.",
            ],
            bullets: [
              "Sudden breathlessness, chest pain, coughing up blood or a racing heartbeat.",
              "A painful, warm or swollen calf or thigh on one side.",
              "Fever, shivering, spreading redness, or pus or a foul smell from the wound.",
              "Skin along the scar or around the belly button turning dark or purple.",
              "An area that rapidly becomes swollen and tense, or pain that gets worse rather than better.",
              "A drain suddenly filling with blood, feeling faint or looking very pale.",
              "The wound suddenly opening.",
            ],
          },
          {
            heading: "What increases the risk",
            paragraphs: [
              "Several factors can be changed and should be addressed before a date is set; this is one of the reasons for the pre-operative assessment.",
            ],
            bullets: [
              "Smoking and nicotine in any form: you will be asked to stop completely for several weeks before and after.",
              "A BMI that is still high and weight that is not stable.",
              "Deficiencies in protein, iron, vitamins or zinc, or anaemia, after bariatric surgery.",
              "Diabetes, sleep apnoea, heart or lung disease that are not well controlled.",
              "A personal or family history of blood clots, the combined contraceptive pill or hormone therapy.",
              "Combining many procedures in one operation, which lengthens anaesthetic time.",
            ],
          },
          {
            heading: "Revisions and further stages",
            paragraphs: [
              "Revisions are fairly common after a body lift: improving a scar, a small fold of skin at the ends or an asymmetry. They are considered once things have settled, often after about a year. Ask before you commit what would happen, and what you would pay, if a revision or complication arose.",
            ],
          },
        ],
        sources: [NHS, BAPRAS, BAAPS, RCS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Cost ──
      {
        interventionId: "body-lift",
        kind: "cost",
        locale: "en-gb",
        title: "Body lift cost and NHS funding",
        summary:
          "What a body lift quote should include, what affects the price, strict NHS criteria for excess skin surgery after weight loss, and complication costs.",
        answer:
          "The cost of a body lift depends on the amount of excess skin, any combined procedures, the length of surgery and the hospital stay. We do not give price ranges: only a written, itemised quote after a consultation with the operating surgeon tells you the actual cost. NHS funding for excess skin surgery after weight loss exists only under strict local criteria and is often not available for a full body lift.",
        sections: [
          {
            heading: "What a quote should include",
            paragraphs: ["Ask for a written quote that lists every item, or states clearly what is excluded."],
            bullets: [
              "The surgeon's fee, describing the areas treated and any combined procedures.",
              "The anaesthetist's fee, which may be billed separately.",
              "Hospital fees: theatre time and the number of nights.",
              "Compression garments, stockings, blood-thinning injections, dressings and nursing care after discharge.",
              "Pre-operative blood tests and nutritional assessment.",
              "Follow-up appointments and what happens if a revision or complication arises.",
            ],
          },
          {
            heading: "What affects the price",
            paragraphs: [
              "The amount of excess skin, whether a full circumferential lift or only part of it is planned, combined procedures (muscle repair, buttock auto-augmentation, liposuction), the length of surgery, the number of nights in hospital and the hospital itself all affect the quote.",
              "Surgery after massive weight loss is often staged, so ask for an overview of the whole plan and its likely cost, not only the first operation.",
            ],
          },
          {
            heading: "NHS funding",
            paragraphs: [
              "The NHS does not fund cosmetic surgery, and body contouring after weight loss is generally classed as a procedure of limited clinical value. Integrated care boards set their own criteria, which are usually strict. They commonly include a BMI below a set threshold maintained for a long period (often 18 months to two years or more), weight loss that is documented and stable, no smoking, and significant functional problems such as recurrent skin infections or ulceration that persist despite treatment, or difficulty walking.",
              "Where funding exists, it is more often for removal of an overhanging abdominal apron (apronectomy or panniculectomy) than for a full body lift, which is frequently not routinely commissioned. In exceptional circumstances your GP or specialist can submit an individual funding request (IFR). Criteria vary between areas and change over time, so check the current policy locally.",
            ],
          },
          {
            heading: "Paying privately: points to check",
            paragraphs: [
              "Professional standards say you should not be pressured into booking, and time-limited discounts or package deals are a warning sign. The consultation should be with the operating surgeon, and you should have time to reflect before paying a deposit. Check whether any deposit is refundable.",
              "Be cautious about finance arranged at the consultation: you remain committed to the repayments even if you need further treatment. Some private health insurance policies may contribute to surgery with a clear medical indication; check with your insurer in writing beforehand.",
            ],
          },
          {
            heading: "The cost of complications and revisions",
            paragraphs: [
              "Dressings for wound breakdown over several weeks, seroma drainage, a return to theatre or a revision can lead to further costs, more time off work and extra travel. Ask what the quote covers, and whether insurance for complications is included or available. Because complications are fairly common after this operation, having surgery abroad can make follow-up care at home much harder to arrange.",
            ],
          },
        ],
        sources: [NHS, NICE, GMC, CQC, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Recovery ──
      {
        interventionId: "body-lift",
        kind: "recovery",
        locale: "en-gb",
        title: "Recovery after a body lift",
        summary:
          "Recovery after a body lift: hospital stay, drains, blood thinners, compression, return to work in 3 to 6 weeks, scars over 12 to 18 months, warning signs.",
        answer:
          "Recovery from a body lift is long: a few days in hospital, drains, blood-thinning injections, a compression garment for several weeks and marked tiredness. Many people return to desk-based work between 3 and 6 weeks. Scars keep changing for 12 to 18 months. Always follow your own surgeon's instructions.",
        sections: [
          {
            heading: "In hospital",
            paragraphs: [
              "You usually stay 2 to 5 nights. Pain is controlled with painkillers, sometimes through a pump at first. Drains remove fluid from under the skin. You get up the day after surgery with help, walking slightly bent forward to avoid pulling on the scar.",
            ],
            bullets: [
              "Walk several times a day, even short distances, to reduce the risk of blood clots.",
              "Blood-thinning injections and compression stockings as prescribed.",
              "Start eating again early, with enough protein.",
              "Monitoring of the drains, wound and signs of bleeding.",
            ],
          },
          {
            heading: "The first weeks at home",
            paragraphs: [
              "You may go home with a drain. Someone should stay with you for the first days; a nurse often visits for dressings and injections. The compression garment is worn day and night.",
            ],
            bullets: [
              "Week 1: significant tiredness, short walks, sleeping propped up with knees slightly bent.",
              "Weeks 2 to 3: remaining drains removed, gradually standing straighter; avoid sitting for long directly on the back scar.",
              "No lifting, and no baths or swimming until the wounds have healed; shower as advised.",
              "Keep taking the vitamins and protein recommended after your bariatric surgery.",
            ],
          },
          {
            heading: "Returning to work and activity",
            paragraphs: [],
            bullets: [
              "Desk-based work: often between 3 and 6 weeks.",
              "Physical work: later, usually after 6 to 8 weeks or more, as your surgeon advises.",
              "Driving: once you can twist and brake without pain and are not taking sedating painkillers; check your insurer's conditions.",
              "Daily walking from the first days; gentle activity from around week 6.",
              "Strenuous exercise, core exercises and heavy lifting: not until your surgeon agrees, often after 2 to 3 months.",
              "Sun: protect the scars for at least a year.",
            ],
          },
          {
            heading: "The following months",
            paragraphs: [
              "Swelling settles slowly over months, especially in the pubic area and thighs. Some sensation returns. Scars stay red and sometimes raised for several months before fading and softening; your surgeon may suggest massage or silicone dressings.",
              "The result is considered settled at 12 to 18 months. The next stage of a staged plan (arms, chest, thighs) or a revision is not usually scheduled until several months later, often at least 3 to 6 months, once you have fully recovered.",
            ],
          },
          {
            heading: "Warning signs",
            paragraphs: [
              "Contact your surgeon's team if you develop a fever, spreading redness, unusual discharge, darkening skin, rapid swelling, an opening wound or a painful calf; out of hours, call NHS 111. Call 999 for chest pain, breathlessness or collapse.",
            ],
          },
        ],
        sources: [NHS, BAPRAS, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Before you decide ──
      {
        interventionId: "body-lift",
        kind: "decision",
        locale: "en-gb",
        title: "Body lift: before you decide",
        summary:
          "Deciding on a body lift: stable weight 12 to 18 months after bariatric surgery, nutrition, stopping smoking, staged surgery, body image and questions.",
        answer:
          "A body lift tends to suit adults whose weight has been stable for several months, often 12 to 18 months after bariatric surgery, with good blood test results and no smoking. It is major surgery and often the first step in a staged plan. Take time to understand the whole pathway, from consultation to follow-up a year later.",
        sections: [
          {
            heading: "Is it the right time?",
            paragraphs: [
              "Your weight should be stable for several months, at a level you can maintain. After a gastric sleeve or bypass this is often 12 to 18 months after surgery. The closer your BMI is to the healthy range, the clearer the result and the fewer the complications; your surgeon will tell you whether further weight loss would help.",
              "Blood tests check for anaemia and deficiencies (protein, iron, vitamin B12, folate, vitamin D, zinc). You will need to stop smoking completely. It is better to have completed your family. Cosmetic surgery is for adults only.",
            ],
          },
          {
            heading: "The pathway, from consultation to follow-up",
            paragraphs: [],
            bullets: [
              "Consultation: examination of the excess skin, any previous scars and the abdominal muscles, photographs, discussion of priorities and of a staged plan.",
              "Assessment: blood tests and input from your bariatric team or dietitian, stopping smoking, controlling long-term conditions.",
              "If NHS funding is being sought, an application against local criteria; if private, a written quote and time to reflect.",
              "Pre-operative assessment with the anaesthetic team.",
              "Surgery and a few nights in hospital, then several weeks of recovery.",
              "Follow-up: appointments at around one week, one month, three months, six months and one year; a review before any further stage.",
            ],
          },
          {
            heading: "Expectations and body image",
            paragraphs: [
              "After massive weight loss, adjusting to a body that has changed so much can be hard. A body lift often improves comfort and ease of movement, but leaves a scar all the way round and does not remove all looseness. Ask to see before-and-after photographs of patients similar to you, and what can and cannot change in your case.",
              "Body dysmorphic disorder (BDD) is a mental health condition in which a person spends a lot of time worrying about flaws in their appearance that others barely notice. Surgery does not usually relieve it. If this sounds familiar, or if your relationship with food remains difficult, speak to your GP or your bariatric team. If you are struggling to cope, Samaritans can be reached any time on 116 123.",
            ],
          },
          {
            heading: "Questions to ask your surgeon",
            paragraphs: [],
            bullets: [
              "Are you on the GMC Specialist Register in plastic surgery, and how often do you operate after massive weight loss?",
              "Do my weight and blood tests allow surgery now, or should I wait?",
              "What will the operation include (front, sides, buttocks, thighs), where will the scar sit, and what do you combine it with?",
              "What plan do you suggest for other areas, in what order and with what interval?",
              "How many nights in hospital, and how will you reduce my risk of blood clots, and for how long?",
              "Which complications do you see most often, how are they treated, and who do I contact at night or at weekends? Is the hospital registered with the CQC?",
              "What does the quote include, and what would I pay for a revision or complication?",
            ],
          },
          {
            heading: "Cooling-off and second opinions",
            paragraphs: [
              "UK law sets no statutory waiting period, but GMC guidance recommends that you have time to reflect, and professional standards advise at least two weeks between consultation and agreeing to surgery. The consultation should be with the operating surgeon. A second opinion is always reasonable, all the more so for an operation of this size.",
            ],
          },
        ],
        sources: [NHS, GMC, RCS, CQC, { label: "Samaritans", url: "https://www.samaritans.org" }],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Alternatives ──
      {
        interventionId: "body-lift",
        kind: "alternatives",
        locale: "en-gb",
        title: "Alternatives to a body lift",
        summary:
          "Tummy tuck or apronectomy alone, thigh or arm lift, skin care, non-surgical tightening or waiting: alternatives to a body lift with their limits.",
        answer:
          "Depending on where the excess skin is, alternatives include a tummy tuck or apronectomy alone, separate operations on the thighs, arms or chest, skin care and supportive garments, or choosing not to have surgery. Non-surgical treatments have very little effect on large amounts of loose skin.",
        sections: [
          {
            heading: "Tummy tuck or apronectomy alone",
            paragraphs: [
              "If most of the excess skin is at the front, as an overhanging apron, an operation limited to the tummy may be enough. The scar is shorter, the operation is quicker and recovery somewhat easier. It does not treat the hips, buttocks or back, however, and may leave excess skin at the sides.",
            ],
          },
          {
            heading: "Separate operations on other areas",
            paragraphs: [
              "A thigh, arm or breast lift can be done on its own if that area bothers you most. Each has its own scars and risks. Your surgeon can help you set priorities and the order of stages.",
            ],
          },
          {
            heading: "Skin care and comfort measures",
            paragraphs: [
              "Careful hygiene in the skin folds, thorough drying, treatment of fungal infections and irritation, and supportive garments can reduce day-to-day problems. They do not remove excess skin, but may be enough for some people or help while your weight stabilises. Your GP can help if infections keep coming back.",
            ],
          },
          {
            heading: "Non-surgical treatments",
            paragraphs: [
              "Radiofrequency, focused ultrasound and other skin-tightening devices act on mildly loose skin. After massive weight loss their effect is very limited and they do not replace surgery. They carry their own risks, such as burns and pain, and many are offered with little regulation, so check who is treating you. Liposuction alone is not suitable: it removes fat, not skin, and can make looseness worse.",
            ],
          },
          {
            heading: "Waiting or doing nothing",
            paragraphs: [
              "Choosing not to have surgery, or postponing it, is a legitimate decision, and waiting is necessary while your weight is still changing or deficiencies are being corrected. You can revisit the question later without any medical consequence.",
            ],
          },
        ],
        sources: [NHS, NICE, BAPRAS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "bariatric-surgery",
        locale: "en-gb",
        slug: "bariatric-surgery",
        term: "Bariatric surgery",
        aliases: [
          "weight loss surgery",
          "weight-loss surgery",
          "obesity surgery",
          "gastric sleeve",
          "sleeve gastrectomy",
          "gastric bypass",
          "gastric band",
        ],
        definition:
          "Bariatric surgery covers operations on the stomach or intestine to treat severe obesity, such as a gastric sleeve or gastric bypass. It leads to major weight loss, which often leaves excess skin.",
        detail: [
          "In the UK it is available on the NHS for people who meet criteria set by NICE, after assessment by a specialist weight management service, and requires lifelong follow-up.",
          "It can cause deficiencies in protein, iron, vitamin B12, folate, vitamin D and zinc, which is why supplements and regular blood tests are needed. These deficiencies should be corrected before excess skin surgery because they impair wound healing.",
          "Excess skin surgery (body lift, tummy tuck, arm or thigh lift) is generally considered once weight has stabilised, often 12 to 18 months after bariatric surgery.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "circumferential-body-lift",
        locale: "en-gb",
        slug: "circumferential-body-lift",
        term: "Circumferential body lift",
        aliases: [
          "body lift",
          "body-lift",
          "lower body lift",
          "belt lipectomy",
          "circumferential abdominoplasty",
          "360 tummy tuck",
        ],
        definition:
          "A circumferential body lift removes excess skin and fat from all the way around the lower trunk: the tummy, flanks, hips and buttocks. The scar runs round the body like a belt.",
        detail: [
          "It combines a tummy tuck at the front with a buttock and hip lift at the back, so the patient is turned during the operation. It is mainly performed after massive weight loss.",
          "It is long surgery, with a hospital stay of a few days and a recovery of several weeks. Wound healing problems and seroma are more common than after a standard tummy tuck, and the risk of blood clots calls for careful prevention.",
          "A lower body lift is distinguished from an upper body lift, which treats the upper trunk and chest and is usually done as a separate stage.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },
};
