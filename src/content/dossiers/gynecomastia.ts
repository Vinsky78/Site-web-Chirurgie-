import type { Source } from "../types";
import type { Dossier } from "./types";

// ───────────────────────────── Sources France ─────────────────────────────
const HAS: Source = { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" };
const SOFCPRE: Source = {
  label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)",
  url: "https://www.sofcpre.fr",
};
const SFE: Source = { label: "Société française d'endocrinologie (SFE)", url: "https://www.sfendocrino.org" };
const AMELI: Source = { label: "Assurance maladie — ameli.fr (prise en charge, accord préalable)", url: "https://www.ameli.fr" };
const LEGIFRANCE_L6322_2: Source = {
  label: "Code de la santé publique, article L6322-2 (devis et délai de réflexion en chirurgie esthétique) — Légifrance",
  url: "https://www.legifrance.gouv.fr",
};
const ANNUAIRE_SANTE: Source = {
  label: "Annuaire santé (vérification des professionnels inscrits au RPPS)",
  url: "https://annuaire.sante.fr",
};
const ANSM: Source = {
  label: "Agence nationale de sécurité du médicament et des produits de santé (ANSM)",
  url: "https://ansm.sante.fr",
};
const SFAR: Source = { label: "Société française d'anesthésie et de réanimation (SFAR)", url: "https://sfar.org" };

// ───────────────────────────── Sources Royaume-Uni ─────────────────────────────
const NHS: Source = { label: "NHS — gynaecomastia and cosmetic procedures", url: "https://www.nhs.uk" };
const NHS_ENGLAND: Source = {
  label: "NHS England — Evidence-Based Interventions programme (procedures of limited clinical value)",
  url: "https://www.england.nhs.uk",
};
const BAAPS: Source = { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" };
const BAPRAS: Source = {
  label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)",
  url: "https://www.bapras.org.uk",
};
const GMC: Source = {
  label: "General Medical Council — guidance for doctors who offer cosmetic interventions; medical register",
  url: "https://www.gmc-uk.org",
};
const CQC: Source = { label: "Care Quality Commission (CQC)", url: "https://www.cqc.org.uk" };
const SOC_ENDO: Source = { label: "Society for Endocrinology", url: "https://www.endocrinology.org" };
const SAMARITANS: Source = { label: "Samaritans — 116 123", url: "https://www.samaritans.org" };

const REVIEW = { status: "draft" } as const;
const UPDATED_AT = "2026-10-13";

/** Gynécomastie : fiche, sous-pages et lexique (fr, en-gb). Brouillon à relire par le comité médical. */
export const dossier: Dossier = {
  // ═══════════════════════════════════ FRANCE ═══════════════════════════════════
  fr: {
    intervention: {
      id: "gynecomastia",
      locale: "fr",
      slug: "gynecomastie",
      category: "breast",
      title: "Chirurgie de la gynécomastie",
      summary:
        "Réduction d'une poitrine masculine développée par liposuccion et/ou retrait de la glande, après un bilan médical qui recherche une cause.",
      description: [
        "La gynécomastie est une augmentation de volume de la poitrine chez l'homme. On distingue la gynécomastie vraie, liée au développement de la glande mammaire, et la pseudogynécomastie (ou adipomastie), due à un excès de graisse sans glande développée. Les deux sont souvent associées. Elle peut toucher un seul côté ou les deux.",
        "Avant toute chirurgie, un bilan médical est indispensable pour rechercher une cause : médicaments (certains traitements de la prostate, du cœur, de l'estomac ou psychiatriques), déséquilibre hormonal, prise de stéroïdes anabolisants ou de cannabis, consommation d'alcool, maladie du foie, des reins ou de la thyroïde, et plus rarement une tumeur. Une gynécomastie récente, douloureuse, d'un seul côté, ferme ou avec écoulement du mamelon doit être examinée rapidement par un médecin. À l'adolescence, une gynécomastie est fréquente et régresse souvent spontanément en quelques mois à deux ans ; cette plateforme s'adresse aux adultes.",
        "La technique dépend de la composition de la poitrine. La liposuccion seule convient lorsque l'excès est surtout graisseux. Quand la glande est développée, le chirurgien la retire par une courte incision au bord inférieur de l'aréole (exérèse glandulaire), souvent en association avec une liposuccion pour harmoniser le contour. En cas d'excès de peau important, par exemple après une forte perte de poids, une résection cutanée est nécessaire, avec parfois un repositionnement de l'aréole et des cicatrices plus longues.",
        "Les cicatrices sont en général discrètes lorsqu'elles se limitent au pourtour de l'aréole et aux petits orifices de liposuccion. Les résections de peau laissent des cicatrices plus visibles, horizontales ou autour de l'aréole, qui s'atténuent sur un à deux ans sans disparaître.",
        "L'intervention ne traite pas la cause d'une gynécomastie : si un médicament, une substance ou un déséquilibre hormonal persiste, la poitrine peut augmenter de nouveau. Elle ne remplace pas une perte de poids et ne modifie pas la musculature. Le résultat est le plus souvent durable une fois la glande retirée, mais une prise de poids importante ou une cause qui persiste peut le modifier.",
      ],
      indications: [
        "Gynécomastie vraie ou mixte installée depuis plus d'un an environ, chez un adulte, sans régression spontanée.",
        "Gynécomastie persistante alors que la cause identifiée (médicament, substance) a été arrêtée ou traitée.",
        "Pseudogynécomastie qui ne régresse pas malgré un poids stable et une activité physique régulière.",
        "Gêne physique (sensibilité, tension) ou retentissement psychologique durable, par exemple évitement du sport ou de la plage.",
        "Asymétrie marquée entre les deux côtés, après avoir écarté une cause qui nécessite un autre traitement.",
        "Excès de peau thoracique après une perte de poids importante et stabilisée.",
      ],
      contraindications: [
        "Absence de bilan médical, ou cause identifiée non traitée (médicament non réévalué, déséquilibre hormonal, prise d'anabolisants ou de cannabis en cours).",
        "Suspicion de cancer du sein ou de tumeur hormonale non explorée : elle relève d'abord d'un bilan spécialisé.",
        "Poids instable ou perte de poids en cours.",
        "Tabagisme actif, qui augmente les risques de cicatrisation, surtout en cas de résection de peau.",
        "Attentes irréalistes, par exemple un torse sculpté sans aucune cicatrice ou un résultat identique à une photographie.",
        "Demande motivée principalement par la pression d'un tiers.",
        "Préoccupation excessive pour un défaut minime, pouvant évoquer un trouble dysmorphique corporel.",
        "Maladie cardiaque, respiratoire, trouble de la coagulation ou diabète non équilibrés.",
      ],
      risks: [
        {
          name: "Douleur, ecchymoses et gonflement",
          detail:
            "Suites attendues : la poitrine est sensible et gonflée pendant une à deux semaines, avec des bleus qui s'étendent parfois vers l'abdomen. Le gonflement résiduel peut persister plusieurs semaines et masquer le résultat.",
        },
        {
          name: "Hématome",
          detail:
            "Collection de sang sous la peau, l'une des complications les plus courantes de cette chirurgie, le plus souvent dans les premières 24 à 48 heures. Un hématome important se manifeste par un gonflement tendu et douloureux d'un seul côté et nécessite souvent une reprise au bloc opératoire.",
        },
        {
          name: "Sérome",
          detail:
            "Accumulation de liquide clair sous la peau, qui donne un gonflement souple. Il peut nécessiter une ou plusieurs ponctions en consultation ; la compression aide à le prévenir.",
        },
        {
          name: "Aspect en cratère ou creusé",
          detail:
            "Si trop de tissu est retiré sous l'aréole, celle-ci peut se déprimer ou adhérer au muscle, créant un creux visible. Une correction secondaire, par exemple par lipofilling, est parfois proposée.",
        },
        {
          name: "Excès de tissu résiduel ou correction insuffisante",
          detail:
            "Un reliquat de glande ou de graisse peut persister, surtout sur les côtés ou sous l'aréole. Une retouche est envisageable après quelques mois.",
        },
        {
          name: "Asymétrie et irrégularités",
          detail:
            "De petites différences entre les deux côtés, des bosses ou des irrégularités du contour sont possibles, en particulier après liposuccion. Les deux côtés n'étaient en général pas identiques avant l'intervention.",
        },
        {
          name: "Troubles de la sensibilité",
          detail:
            "Le mamelon et l'aréole peuvent être plus sensibles ou au contraire engourdis. Ces troubles sont le plus souvent transitoires mais peuvent durer plusieurs mois et, plus rarement, être définitifs.",
        },
        {
          name: "Peau relâchée et cicatrices",
          detail:
            "Une peau peu élastique peut ne pas se rétracter complètement après le retrait de la glande ou de la graisse. Les cicatrices peuvent s'élargir, se pigmenter ou devenir épaisses (cicatrice hypertrophique ou chéloïde), surtout sur peau mate ou foncée.",
        },
        {
          name: "Infection et retard de cicatrisation",
          detail:
            "Peu fréquents. Ils se traduisent par une rougeur, une chaleur, un écoulement ou de la fièvre, et sont traités par soins locaux et antibiotiques, parfois par un nouveau geste.",
        },
        {
          name: "Souffrance de l'aréole",
          detail:
            "Rare, surtout lors de résections de peau importantes avec déplacement de l'aréole : une mauvaise vascularisation peut entraîner une perte partielle ou totale de l'aréole ou du mamelon. Le tabac augmente ce risque.",
        },
        {
          name: "Récidive",
          detail:
            "Si la cause persiste (médicament, anabolisants, cannabis, déséquilibre hormonal) ou en cas de prise de poids importante, la poitrine peut augmenter de nouveau.",
        },
        {
          name: "Complications générales rares et graves",
          detail:
            "Phlébite et embolie pulmonaire, réaction à l'anesthésie ou, en cas de liposuccion étendue, complications liées à la liposuccion. Elles sont rares et évaluées lors de la consultation d'anesthésie obligatoire.",
        },
      ],
      procedure: {
        anaesthesia:
          "Anesthésie générale le plus souvent ; anesthésie locale avec sédation possible pour les gestes limités.",
        duration: "Environ 1 à 2 heures, davantage en cas de résection de peau.",
        hospitalStay: "Le plus souvent en ambulatoire (sortie le jour même), parfois une nuit d'hospitalisation.",
      },
      recovery: [
        "Jour de l'intervention : pansements et gilet ou brassière de compression ; un drain est parfois laissé un à deux jours. Une personne doit vous raccompagner.",
        "Premiers jours : douleur modérée soulagée par antalgiques simples, tension et ecchymoses sur le thorax. Évitez de lever les bras au-dessus de la tête et de porter des charges.",
        "Semaine 1 : consultation de contrôle, retrait éventuel des fils non résorbables entre le 7e et le 14e jour. Douche autorisée selon les consignes du chirurgien.",
        "Reprise du travail : en général après 5 à 10 jours pour une activité de bureau, plus tard pour un métier physique.",
        "Compression : gilet porté jour et nuit pendant environ 3 à 6 semaines selon le chirurgien.",
        "Sport : marche dès les premiers jours ; course et sports d'endurance vers 3 à 4 semaines ; musculation du haut du corps et sports de contact vers 6 semaines, avec l'accord du chirurgien.",
        "Exposition au soleil : protéger les cicatrices pendant au moins 6 à 12 mois.",
        "Résultat stabilisé : le contour s'affine en 3 à 6 mois ; les cicatrices continuent de s'atténuer pendant 12 à 18 mois.",
      ],
      alternatives: [
        "Ne rien faire : la gynécomastie n'est pas dangereuse en soi une fois une cause grave écartée, et elle peut régresser, notamment chez l'adolescent ou après l'arrêt d'un médicament.",
        "Traiter ou supprimer la cause : réévaluer un médicament avec le médecin prescripteur (sans l'arrêter seul), arrêter les anabolisants, le cannabis ou l'alcool, traiter un déséquilibre hormonal.",
        "Perte de poids et activité physique pour la pseudogynécomastie ; elles n'ont pas d'effet sur la glande elle-même.",
        "Traitement médicamenteux sur avis d'un endocrinologue, surtout pour une gynécomastie récente et douloureuse ; il est hors autorisation de mise sur le marché pour cette indication et comporte ses propres effets indésirables.",
        "Techniques non chirurgicales de réduction de la graisse (cryolipolyse) : elles n'agissent pas sur la glande, avec des résultats limités et leurs propres risques (douleur, hyperplasie graisseuse paradoxale).",
      ],
      faq: [
        {
          question: "Est-ce douloureux ?",
          answer:
            "La douleur est en général modérée les premiers jours, décrite comme une tension ou une courbature du thorax, et se soulage avec des antalgiques simples. Une douleur qui augmente fortement, surtout d'un seul côté, doit faire contacter le chirurgien.",
        },
        {
          question: "Faut-il faire des examens avant de consulter un chirurgien ?",
          answer:
            "Oui. Un bilan auprès de votre médecin traitant, et parfois d'un endocrinologue, est nécessaire : examen clinique, revue des médicaments et substances, prise de sang hormonale et, selon les cas, échographie ou mammographie. Il permet de traiter une cause éventuelle et d'éviter une récidive.",
        },
        {
          question: "Mon fils de 15 ans a de la poitrine : faut-il l'opérer ?",
          answer:
            "À l'adolescence, la gynécomastie est fréquente et régresse souvent spontanément en quelques mois à deux ans. Il faut d'abord consulter un médecin. La chirurgie n'est envisagée qu'exceptionnellement avant la fin de la croissance ; cette plateforme s'adresse aux adultes.",
        },
        {
          question: "Le sport ou un régime peuvent-ils suffire ?",
          answer:
            "Ils peuvent réduire une pseudogynécomastie, c'est-à-dire un excès de graisse. Ils n'ont pas d'effet sur une glande développée, et la musculation des pectoraux peut parfois rendre la poitrine plus visible.",
        },
        {
          question: "Quelles cicatrices vais-je avoir ?",
          answer:
            "Le plus souvent une petite cicatrice en demi-cercle au bord inférieur de l'aréole et quelques orifices de liposuccion de quelques millimètres. En cas d'excès de peau, les cicatrices sont plus longues. Elles restent visibles de près et s'atténuent sur un à deux ans.",
        },
        {
          question: "Le résultat est-il définitif ?",
          answer:
            "Une fois la glande retirée, le résultat est généralement durable. Une récidive reste possible si la cause persiste (médicament, anabolisants, cannabis, déséquilibre hormonal) ou en cas de prise de poids importante.",
        },
        {
          question: "L'intervention est-elle remboursée ?",
          answer:
            "Une prise en charge par l'Assurance maladie est possible dans certains cas de gynécomastie vraie, selon des critères médicaux et parfois après accord préalable. La liposuccion d'une pseudogynécomastie isolée relève en général de l'esthétique et reste à votre charge. Votre chirurgien et votre caisse peuvent vous indiquer ce qui s'applique à votre situation.",
        },
        {
          question: "Quel délai de réflexion dois-je respecter ?",
          answer:
            "Lorsque l'intervention est réalisée à titre esthétique, la loi impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention. Aucun paiement autre que la consultation ne peut être exigé avant la fin de ce délai.",
        },
        {
          question: "Quel chirurgien consulter et comment vérifier sa qualification ?",
          answer:
            "Consultez un chirurgien qualifié en chirurgie plastique, reconstructrice et esthétique. Vous pouvez vérifier son inscription et sa spécialité sur l'Annuaire santé (annuaire.sante.fr) ou auprès du Conseil national de l'Ordre des médecins, et demander où l'intervention aura lieu : l'établissement doit être autorisé par l'ARS.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      {
        interventionId: "gynecomastia",
        kind: "risks",
        locale: "fr",
        title: "Gynécomastie : les risques",
        summary:
          "Hématome, sérome, aspect creusé, asymétrie, troubles de la sensibilité, récidive : les risques de la chirurgie de la gynécomastie et les signes d'alerte.",
        answer:
          "La chirurgie de la gynécomastie comporte des risques comme toute intervention. Ecchymoses et gonflement sont attendus ; l'hématome est l'une des complications les plus courantes ; aspect creusé, asymétrie ou excès résiduel peuvent nécessiter une retouche. La récidive est possible si la cause persiste.",
        sections: [
          {
            heading: "Les suites fréquentes et attendues",
            paragraphs: [
              "Ces manifestations sont normales après l'intervention et diminuent progressivement en quelques semaines.",
            ],
            bullets: [
              "Douleur modérée et sensation de tension du thorax les premiers jours.",
              "Ecchymoses sur la poitrine, parfois jusqu'à l'abdomen.",
              "Gonflement qui masque le résultat pendant plusieurs semaines.",
              "Sensibilité modifiée du mamelon et de l'aréole, souvent transitoire.",
              "Petites indurations sous la peau dans les zones de liposuccion, qui s'assouplissent avec le temps.",
            ],
          },
          {
            heading: "Les complications moins fréquentes ou rares",
            paragraphs: [
              "Leur fréquence dépend de la technique, du volume retiré et de votre état de santé. Votre chirurgien peut préciser celles qui vous concernent.",
            ],
            bullets: [
              "Hématome : gonflement tendu et douloureux, le plus souvent d'un seul côté, dans les 48 premières heures ; il peut nécessiter une reprise au bloc.",
              "Sérome : collection de liquide clair, parfois ponctionnée en consultation.",
              "Aspect en cratère ou creusé sous l'aréole si trop de tissu a été retiré.",
              "Reliquat de glande ou de graisse, asymétrie, irrégularités du contour.",
              "Peau relâchée ou plis, surtout après une forte perte de poids.",
              "Infection ou retard de cicatrisation, cicatrices élargies ou épaisses.",
              "Souffrance ou perte partielle de l'aréole, rare, surtout en cas de résection de peau et chez les fumeurs.",
              "Phlébite, embolie pulmonaire et risques anesthésiques, rares.",
            ],
          },
          {
            heading: "La récidive",
            paragraphs: [
              "La chirurgie retire le tissu mais ne traite pas la cause. Si un médicament responsable est poursuivi, si la prise d'anabolisants ou de cannabis continue, ou si un déséquilibre hormonal n'est pas corrigé, la glande restante peut grossir de nouveau.",
              "C'est pourquoi le bilan médical préalable et le traitement de la cause font partie intégrante de la prise en charge.",
            ],
          },
          {
            heading: "Quand appeler sans attendre",
            paragraphs: [
              "Contactez rapidement le chirurgien ou l'équipe qui vous a opéré si vous constatez l'un des signes suivants. En cas d'essoufflement brutal, de douleur thoracique, de malaise ou de crachats sanglants, appelez le 15 (SAMU) ou le 112.",
            ],
            bullets: [
              "Gonflement rapide, tendu et douloureux d'un côté du thorax.",
              "Fièvre, rougeur ou chaleur qui s'étend, écoulement purulent.",
              "Aréole qui devient très foncée, violacée ou froide.",
              "Douleur ou gonflement d'un mollet.",
              "Saignement qui imbibe le pansement malgré le repos.",
            ],
          },
          {
            heading: "Les facteurs qui augmentent les risques",
            paragraphs: ["Certains facteurs peuvent être modifiés avant l'intervention et doivent être discutés en consultation."],
            bullets: [
              "Tabac et nicotine, qui altèrent la cicatrisation et la vascularisation de l'aréole.",
              "Aspirine, anti-inflammatoires, anticoagulants et certains compléments alimentaires, à signaler.",
              "Hypertension artérielle mal contrôlée, qui favorise l'hématome.",
              "Stéroïdes anabolisants, qui augmentent aussi le risque de récidive.",
              "Surpoids important ou poids instable.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFE, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "gynecomastia",
        kind: "cost",
        locale: "fr",
        title: "Prix d'une chirurgie de la gynécomastie",
        summary:
          "Ce que comprend un devis de chirurgie de la gynécomastie, ce qui fait varier le prix et dans quels cas l'Assurance maladie peut intervenir.",
        answer:
          "Le prix dépend de la technique (liposuccion, retrait de la glande, résection de peau), de l'établissement et du type d'anesthésie. Une prise en charge par l'Assurance maladie est possible pour certaines gynécomasties vraies, selon des critères médicaux. Un devis détaillé est obligatoire pour toute intervention esthétique.",
        sections: [
          {
            heading: "Ce que contient un devis",
            paragraphs: [
              "En chirurgie esthétique, le devis détaillé est obligatoire et doit être remis après la consultation. Il permet de comparer des propositions sur une base claire.",
            ],
            bullets: [
              "Honoraires du chirurgien et de l'anesthésiste.",
              "Frais de l'établissement : bloc opératoire, chambre ou ambulatoire, matériel.",
              "Gilet de compression, pansements et médicaments.",
              "Consultations de suivi et leur durée.",
              "Conditions prévues en cas de retouche ou de complication.",
            ],
          },
          {
            heading: "Ce qui fait varier le prix",
            paragraphs: ["Plusieurs éléments expliquent des écarts importants d'un devis à l'autre."],
            bullets: [
              "La technique : liposuccion seule, exérèse glandulaire, ou résection de peau plus longue.",
              "L'importance de la gynécomastie et le caractère unilatéral ou bilatéral.",
              "L'anesthésie générale ou locale, l'ambulatoire ou une nuit d'hospitalisation.",
              "La région et le type d'établissement.",
              "Les examens préalables (prise de sang hormonale, échographie), souvent facturés à part.",
            ],
          },
          {
            heading: "La prise en charge par l'Assurance maladie",
            paragraphs: [
              "La gynécomastie vraie, liée au développement de la glande, peut être prise en charge par l'Assurance maladie dans certains cas, selon des critères médicaux appréciés par le chirurgien et, le cas échéant, après accord préalable du service médical. Les conditions évoluent : renseignez-vous auprès de votre caisse avant de vous engager.",
              "La liposuccion d'une pseudogynécomastie isolée est en général considérée comme esthétique et n'est pas remboursée. Même en cas de prise en charge, des dépassements d'honoraires peuvent rester à votre charge ou à celle de votre complémentaire santé.",
            ],
          },
          {
            heading: "Le coût des complications et des retouches",
            paragraphs: [
              "Une reprise pour hématome, une retouche d'un excès résiduel ou la correction d'un aspect creusé peuvent entraîner des frais supplémentaires. Demandez qui les prend en charge et pendant combien de temps.",
              "Certains chirurgiens ou établissements proposent une assurance complications ; lisez ses exclusions et ses plafonds.",
            ],
          },
          {
            heading: "Vos droits",
            paragraphs: [
              "Pour une intervention esthétique, un délai de réflexion minimal de 15 jours doit séparer la remise du devis de l'intervention, et aucun paiement autre que la consultation ne peut être exigé avant la fin de ce délai. Méfiez-vous des tarifs présentés comme exceptionnels ou limités dans le temps.",
            ],
          },
        ],
        sources: [AMELI, LEGIFRANCE_L6322_2, HAS, SOFCPRE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "gynecomastia",
        kind: "recovery",
        locale: "fr",
        title: "Convalescence après une chirurgie de la gynécomastie",
        summary:
          "Compression, douleur, reprise du travail et du sport, cicatrices : les étapes de la convalescence après une chirurgie de la gynécomastie.",
        answer:
          "La convalescence est en général assez courte : retour au travail de bureau après 5 à 10 jours, gilet de compression pendant plusieurs semaines, musculation du haut du corps vers 6 semaines. Le contour s'affine en 3 à 6 mois.",
        sections: [
          {
            heading: "Les premiers jours",
            paragraphs: [
              "La sortie a souvent lieu le jour même. La poitrine est tendue, gonflée et marquée d'ecchymoses ; la douleur est en général modérée.",
            ],
            bullets: [
              "Gilet de compression porté jour et nuit.",
              "Drain parfois laissé un à deux jours.",
              "Bras gardés le long du corps : évitez de les lever au-dessus de la tête et de porter des charges.",
              "Marche douce dès le premier jour pour limiter le risque de phlébite.",
            ],
          },
          {
            heading: "Semaines 1 à 2",
            paragraphs: [
              "Une consultation de contrôle a lieu dans la première ou la deuxième semaine, avec retrait éventuel des fils. La plupart des personnes reprennent une activité de bureau entre le 5e et le 10e jour. La conduite est possible lorsque les mouvements ne sont plus douloureux et qu'aucun antalgique fort n'est pris.",
            ],
          },
          {
            heading: "Semaines 3 à 6",
            paragraphs: [
              "La compression est poursuivie selon les consignes, souvent jusqu'à 4 à 6 semaines. Course et vélo reprennent progressivement vers 3 à 4 semaines ; musculation des pectoraux et sports de contact attendent en général 6 semaines et l'accord du chirurgien.",
            ],
          },
          {
            heading: "Les cicatrices",
            paragraphs: [
              "Les cicatrices sont rosées puis s'éclaircissent sur 12 à 18 mois. Protégez-les du soleil pendant au moins 6 à 12 mois et suivez les conseils de massage ou de soins donnés par l'équipe. Des petites indurations sous la peau sont fréquentes et s'assouplissent en quelques mois.",
            ],
          },
          {
            heading: "Le résultat",
            paragraphs: [
              "Le contour s'affine à mesure que le gonflement disparaît, sur 3 à 6 mois. Une retouche, si elle est nécessaire, n'est envisagée qu'après cette période. Le maintien du résultat suppose d'éviter les substances en cause et de garder un poids stable.",
            ],
          },
          {
            heading: "Signes qui doivent faire appeler",
            paragraphs: [
              "Gonflement rapide et douloureux d'un côté, fièvre, rougeur qui s'étend, aréole violacée ou douleur d'un mollet doivent faire contacter le chirurgien sans attendre. En cas d'essoufflement ou de douleur thoracique, appelez le 15 ou le 112.",
            ],
          },
        ],
        sources: [SOFCPRE, HAS, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "gynecomastia",
        kind: "decision",
        locale: "fr",
        title: "Gynécomastie : avant de se décider",
        summary:
          "Bilan médical, cause à traiter, attentes, questions à poser au chirurgien et délai de réflexion de 15 jours avant une chirurgie de la gynécomastie.",
        answer:
          "Avant d'envisager la chirurgie, faites rechercher une cause par votre médecin : elle peut se traiter et conditionne le risque de récidive. Si l'intervention reste justifiée, prenez le temps de comparer, de poser vos questions et de respecter le délai de réflexion de 15 jours.",
        sections: [
          {
            heading: "Commencer par le bilan médical",
            paragraphs: [
              "Une gynécomastie peut être liée à un médicament, à un déséquilibre hormonal, à la prise d'anabolisants, de cannabis ou d'alcool, à une maladie du foie, des reins ou de la thyroïde, et plus rarement à une tumeur. Votre médecin traitant peut prescrire un bilan hormonal et, si besoin, une échographie, et vous orienter vers un endocrinologue.",
              "N'arrêtez jamais seul un traitement prescrit : parlez-en au médecin qui l'a prescrit. Une poitrine qui grossit vite, d'un seul côté, une masse dure ou un écoulement du mamelon doivent être examinés rapidement.",
            ],
          },
          {
            heading: "Attendre, parfois",
            paragraphs: [
              "Une gynécomastie récente ou liée à une cause qui vient d'être supprimée peut régresser en quelques mois. À l'adolescence, elle régresse souvent spontanément. La chirurgie se discute surtout lorsque la gynécomastie est installée depuis plus d'un an environ.",
            ],
          },
          {
            heading: "Des attentes réalistes",
            paragraphs: [
              "L'intervention vise un thorax plus plat et plus harmonieux, pas un torse sculpté. Des cicatrices persistent, une petite asymétrie est possible et le résultat dépend de la qualité de la peau.",
              "Si la préoccupation pour votre poitrine occupe une place très importante dans votre vie, alors que votre entourage ne perçoit qu'une différence minime, parlez-en à votre médecin : il peut s'agir d'un trouble dysmorphique corporel, qui se soigne et pour lequel la chirurgie apporte rarement un apaisement. En cas de détresse ou d'idées noires, le 3114 répond jour et nuit.",
            ],
          },
          {
            heading: "Questions à poser en consultation",
            paragraphs: ["Notez vos questions avant le rendez-vous et demandez des réponses claires."],
            bullets: [
              "Ma gynécomastie est-elle glandulaire, graisseuse ou mixte, et quelle technique proposez-vous ?",
              "Le bilan médical est-il suffisant ou faut-il des examens complémentaires ?",
              "Où seront les cicatrices et quelle sera leur longueur ?",
              "Quels sont les risques dans mon cas, et comment les complications sont-elles prises en charge ?",
              "Combien d'interventions de ce type réalisez-vous, et dans quel établissement ?",
              "Une prise en charge par l'Assurance maladie est-elle envisageable pour moi ?",
              "Quel suivi est prévu, et que se passe-t-il si une retouche est nécessaire ?",
            ],
          },
          {
            heading: "Le délai de réflexion et le choix du chirurgien",
            paragraphs: [
              "Pour une intervention esthétique, la loi impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention. Utilisez-le pour relire les documents, comparer et, si besoin, demander un deuxième avis.",
              "Vérifiez que le chirurgien est qualifié en chirurgie plastique, reconstructrice et esthétique sur l'Annuaire santé, que l'établissement est autorisé par l'ARS et qu'une consultation d'anesthésie est prévue.",
            ],
          },
        ],
        sources: [LEGIFRANCE_L6322_2, SFE, ANNUAIRE_SANTE, SOFCPRE, { label: "3114 — numéro national de prévention du suicide", url: "https://3114.fr" }],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "gynecomastia",
        kind: "alternatives",
        locale: "fr",
        title: "Alternatives à la chirurgie de la gynécomastie",
        summary:
          "Attendre, traiter la cause, perdre du poids, traitement médicamenteux ou techniques non chirurgicales : les alternatives à la chirurgie de la gynécomastie.",
        answer:
          "Selon la cause et l'ancienneté de la gynécomastie, plusieurs options existent avant la chirurgie : attendre, supprimer la cause, perdre du poids ou, sur avis spécialisé, un traitement médicamenteux. Aucune ne retire une glande installée depuis longtemps.",
        sections: [
          {
            heading: "Ne rien faire",
            paragraphs: [
              "Une fois une cause grave écartée, la gynécomastie n'est pas dangereuse. Elle peut régresser, surtout si elle est récente, et certaines personnes choisissent simplement de vivre avec, ou d'adapter leurs vêtements. Ce choix ne comporte pas de risque chirurgical.",
            ],
          },
          {
            heading: "Traiter ou supprimer la cause",
            paragraphs: [
              "Lorsque la gynécomastie est liée à un médicament, le médecin prescripteur peut parfois proposer un autre traitement. L'arrêt des anabolisants, du cannabis ou d'une consommation excessive d'alcool, ou le traitement d'un déséquilibre hormonal, peut faire régresser une gynécomastie récente.",
              "Plus la gynécomastie est ancienne, moins elle a de chances de régresser, car la glande devient fibreuse.",
            ],
          },
          {
            heading: "Perte de poids et activité physique",
            paragraphs: [
              "Elles peuvent réduire une pseudogynécomastie, faite de graisse. Elles n'agissent pas sur la glande. Une perte de poids importante peut en revanche laisser un excès de peau.",
            ],
          },
          {
            heading: "Traitement médicamenteux",
            paragraphs: [
              "Pour une gynécomastie récente et douloureuse, un endocrinologue peut discuter certains médicaments agissant sur les hormones. Ils sont utilisés hors autorisation de mise sur le marché pour cette indication, ont une efficacité variable et comportent leurs propres effets indésirables. Ils sont peu efficaces sur une gynécomastie ancienne.",
            ],
          },
          {
            heading: "Techniques non chirurgicales",
            paragraphs: [
              "La cryolipolyse et d'autres techniques de réduction de la graisse n'agissent pas sur la glande. Leurs résultats sont limités et elles comportent leurs propres risques, dont la douleur et, rarement, une augmentation paradoxale de la graisse traitée.",
            ],
          },
        ],
        sources: [SFE, HAS, ANSM, SOFCPRE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "pseudogynecomastia",
        locale: "fr",
        slug: "pseudogynecomastie",
        term: "Pseudogynécomastie",
        aliases: ["pseudogynecomastie", "pseudo-gynécomastie", "pseudo-gynecomastie", "adipomastie", "gynécomastie graisseuse"],
        definition:
          "La pseudogynécomastie est une augmentation de volume de la poitrine masculine due à un excès de graisse, sans développement de la glande mammaire. Elle s'oppose à la gynécomastie vraie, glandulaire.",
        detail: [
          "Elle est fréquente en cas de surpoids. La poitrine est souple à la palpation, sans noyau ferme sous l'aréole, contrairement à la gynécomastie vraie. Les formes mixtes, associant graisse et glande, sont courantes ; l'examen clinique et parfois une échographie permettent de les distinguer.",
          "La perte de poids peut la réduire. Lorsqu'elle persiste malgré un poids stable, une liposuccion peut être proposée ; cette intervention est en général considérée comme esthétique et n'est pas prise en charge par l'Assurance maladie.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "hormonal-assessment",
        locale: "fr",
        slug: "bilan-hormonal",
        term: "Bilan hormonal",
        aliases: ["bilans hormonaux", "bilan hormonal sanguin", "dosages hormonaux"],
        definition:
          "Le bilan hormonal est une prise de sang qui mesure le taux de plusieurs hormones pour rechercher un déséquilibre. Avant une chirurgie de la gynécomastie, il aide à identifier une cause à traiter.",
        detail: [
          "Selon le contexte, le médecin peut doser notamment la testostérone, l'estradiol, la LH et la FSH, la prolactine, l'hormone de grossesse hCG et les hormones thyroïdiennes, et vérifier le fonctionnement du foie et des reins. Le choix des dosages dépend de l'examen et des antécédents.",
          "Le bilan est prescrit par le médecin traitant ou un endocrinologue. Un résultat anormal peut conduire à d'autres examens et à un traitement de la cause avant toute chirurgie, ce qui réduit aussi le risque de récidive.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },

  // ═══════════════════════════════════ UNITED KINGDOM ═══════════════════════════════════
  "en-gb": {
    intervention: {
      id: "gynecomastia",
      locale: "en-gb",
      slug: "gynaecomastia-surgery",
      category: "breast",
      title: "Gynaecomastia surgery",
      summary:
        "Surgery to reduce enlarged male breasts using liposuction and/or gland removal, after a medical check-up to look for a cause.",
      description: [
        "Gynaecomastia is enlargement of the breast tissue in men. True gynaecomastia is caused by growth of the breast gland; pseudogynaecomastia is caused by excess fat without gland growth. Many men have a mix of both, and it can affect one side or both.",
        "Before any surgery, a GP assessment is essential to look for a cause. Possible causes include certain medicines (for example some treatments for prostate, heart, stomach or mental health conditions), a hormone imbalance, anabolic steroids, cannabis, alcohol, liver, kidney or thyroid disease and, rarely, a tumour. Breast enlargement that is recent, painful, one-sided, hard or associated with nipple discharge should be checked promptly by a doctor. Gynaecomastia is common in teenage boys and often settles on its own within a few months to two years; this platform is for adults only.",
        "The technique depends on what the chest is made of. Liposuction alone can treat mainly fatty tissue. Where there is gland, the surgeon removes it through a short cut along the lower edge of the areola (gland excision), often combined with liposuction to smooth the contour. Where there is a lot of loose skin, for example after major weight loss, skin is also removed, sometimes with repositioning of the nipple and longer scars.",
        "Scars are usually discreet when limited to the edge of the areola and small liposuction entry points. Skin removal leaves more visible scars, across the chest or around the areola, which fade over one to two years but do not disappear.",
        "Surgery does not treat the cause: if a medicine, substance or hormone imbalance continues, the breast can enlarge again. It is not a substitute for weight loss and does not change muscle shape. Once the gland has been removed the result is usually long-lasting, but significant weight gain or an ongoing cause can change it.",
      ],
      indications: [
        "True or mixed gynaecomastia in an adult that has been present for about a year or more without settling.",
        "Gynaecomastia that persists after an identified cause (medicine, substance) has been stopped or treated.",
        "Pseudogynaecomastia that does not improve despite a stable weight and regular exercise.",
        "Physical discomfort (tenderness, tightness) or lasting psychological impact, such as avoiding sport or swimming.",
        "Marked difference between the two sides, once a cause needing other treatment has been excluded.",
        "Loose chest skin after major, stable weight loss.",
      ],
      contraindications: [
        "No medical assessment, or an identified cause that has not been addressed (medicine not reviewed, hormone imbalance, ongoing anabolic steroid or cannabis use).",
        "A suspected breast cancer or hormone-producing tumour that has not been investigated: this needs specialist assessment first.",
        "Unstable weight or ongoing weight loss.",
        "Smoking or vaping nicotine, which increases healing problems, especially when skin is removed.",
        "Unrealistic expectations, such as a sculpted chest with no scars or a result identical to a photograph.",
        "A request driven mainly by pressure from someone else.",
        "Excessive concern about a minor difference, which may suggest body dysmorphic disorder.",
        "Poorly controlled heart or lung disease, bleeding disorder or diabetes.",
      ],
      risks: [
        {
          name: "Pain, bruising and swelling",
          detail:
            "Expected after surgery: the chest is tender and swollen for one to two weeks, with bruising that can spread towards the abdomen. Some swelling can last several weeks and hide the result.",
        },
        {
          name: "Haematoma",
          detail:
            "A collection of blood under the skin, one of the more common complications of this operation, usually within the first 24 to 48 hours. A large haematoma causes tense, painful swelling on one side and often needs a return to theatre.",
        },
        {
          name: "Seroma",
          detail:
            "A build-up of clear fluid under the skin causing soft swelling. It may need draining with a needle in clinic, sometimes more than once; compression helps to prevent it.",
        },
        {
          name: "Saucer or crater deformity",
          detail:
            "If too much tissue is removed under the areola, it can sink or stick to the muscle, leaving a visible dip. A second procedure, such as fat grafting, is sometimes offered to correct it.",
        },
        {
          name: "Residual tissue or under-correction",
          detail:
            "Some gland or fat may remain, particularly at the sides or under the areola. A revision can be considered after a few months.",
        },
        {
          name: "Asymmetry and contour irregularities",
          detail:
            "Small differences between the sides, lumps or uneven contours are possible, especially after liposuction. The two sides were usually not identical before surgery.",
        },
        {
          name: "Changes in sensation",
          detail:
            "The nipple and areola may become more sensitive or numb. This usually improves but can last several months and, less often, be permanent.",
        },
        {
          name: "Loose skin and scarring",
          detail:
            "Skin with poor elasticity may not fully tighten after tissue removal. Scars can widen, darken or become thick and raised (hypertrophic or keloid scars), particularly on darker skin.",
        },
        {
          name: "Infection and delayed healing",
          detail:
            "Uncommon. Signs include redness, warmth, discharge or fever; treatment is with wound care and antibiotics, occasionally a further procedure.",
        },
        {
          name: "Loss of blood supply to the nipple",
          detail:
            "Rare, mostly after extensive skin removal with nipple repositioning: poor blood supply can lead to partial or complete loss of the nipple or areola. Smoking increases this risk.",
        },
        {
          name: "Recurrence",
          detail:
            "If the cause continues (medicine, anabolic steroids, cannabis, hormone imbalance) or after significant weight gain, breast tissue can enlarge again.",
        },
        {
          name: "Rare but serious general complications",
          detail:
            "Deep vein thrombosis and pulmonary embolism, reactions to anaesthesia or, with extensive liposuction, liposuction-related complications. These are rare and assessed during your pre-operative anaesthetic assessment.",
        },
      ],
      procedure: {
        anaesthesia: "Usually general anaesthetic; local anaesthetic with sedation is possible for smaller procedures.",
        duration: "Around 1 to 2 hours, longer if skin is removed.",
        hospitalStay: "Usually a day case, sometimes one night in hospital.",
      },
      recovery: [
        "Day of surgery: dressings and a compression vest; a drain is sometimes left for a day or two. Someone needs to take you home.",
        "First few days: moderate pain eased with simple painkillers, tightness and bruising across the chest. Avoid lifting your arms above your head and carrying heavy items.",
        "Week 1: wound check, with removal of any non-dissolvable stitches between days 7 and 14. Shower as advised by your surgeon.",
        "Return to work: usually after 5 to 10 days for desk-based work, longer for physical jobs.",
        "Compression: vest worn day and night for about 3 to 6 weeks, depending on your surgeon.",
        "Exercise: walking from the first days; running and cardio around 3 to 4 weeks; upper-body weights and contact sports around 6 weeks, with your surgeon's agreement.",
        "Sun: protect scars for at least 6 to 12 months.",
        "Final result: the contour settles over 3 to 6 months; scars keep fading for 12 to 18 months.",
      ],
      alternatives: [
        "Doing nothing: once a serious cause has been ruled out, gynaecomastia is not harmful in itself, and it may settle, particularly in teenagers or after stopping a medicine.",
        "Treating or removing the cause: reviewing a medicine with the prescriber (never stopping it on your own), stopping anabolic steroids, cannabis or heavy drinking, treating a hormone imbalance.",
        "Weight loss and exercise for pseudogynaecomastia; these do not affect the gland itself.",
        "Medication on the advice of an endocrinologist, mainly for recent, painful gynaecomastia; it is used off-label for this purpose and has its own side effects.",
        "Non-surgical fat reduction (such as fat freezing): it does not treat the gland, results are limited and it has its own risks (pain, paradoxical fat enlargement).",
      ],
      faq: [
        {
          question: "Does it hurt?",
          answer:
            "Pain is usually moderate in the first few days, often described as tightness or aching across the chest, and is eased with simple painkillers. Pain that rises sharply, especially on one side, needs a call to your surgeon.",
        },
        {
          question: "Do I need tests before seeing a surgeon?",
          answer:
            "Yes. See your GP first: they will examine you, review your medicines and any substances, and may arrange hormone blood tests and sometimes an ultrasound or mammogram, or refer you to an endocrinologist. This helps treat any underlying cause and reduces the risk of recurrence.",
        },
        {
          question: "My 15-year-old son has breast tissue. Should he have surgery?",
          answer:
            "Gynaecomastia is common during puberty and often settles on its own within a few months to two years. He should see a GP first. Surgery is rarely considered before growth has finished, and this platform is for adults only.",
        },
        {
          question: "Can exercise or diet fix it?",
          answer:
            "They can reduce pseudogynaecomastia, which is excess fat. They do not shrink breast gland, and building the chest muscles can sometimes make it more noticeable.",
        },
        {
          question: "What scars will I have?",
          answer:
            "Usually a small semicircular scar along the lower edge of the areola and a few liposuction entry points a few millimetres long. If loose skin is removed, scars are longer. They remain visible close up and fade over one to two years.",
        },
        {
          question: "Is the result permanent?",
          answer:
            "Once the gland is removed, the result is usually long-lasting. Recurrence is possible if the cause continues (medicines, anabolic steroids, cannabis, hormone imbalance) or after significant weight gain.",
        },
        {
          question: "Can I have it on the NHS?",
          answer:
            "Rarely. Gynaecomastia surgery is generally treated as a procedure of limited clinical value, and most local NHS commissioners only fund it in exceptional circumstances, sometimes through an individual funding request. Your GP can tell you the criteria where you live. Most operations are carried out privately.",
        },
        {
          question: "How long should I wait before deciding?",
          answer:
            "There is no legal cooling-off period in the UK, but the General Medical Council expects surgeons to give you time to reflect, and two weeks between consultation and surgery is the recommended standard. You should never be asked to commit or pay a non-refundable deposit on the day.",
        },
        {
          question: "Which surgeon should I see and how do I check them?",
          answer:
            "See a consultant plastic surgeon. Check on the GMC medical register (gmc-uk.org) that they are on the specialist register for plastic surgery, and in England check that the hospital or clinic is registered with the Care Quality Commission. Royal College of Surgeons cosmetic surgery certification is voluntary but adds reassurance.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      {
        interventionId: "gynecomastia",
        kind: "risks",
        locale: "en-gb",
        title: "Gynaecomastia surgery risks",
        summary:
          "Haematoma, seroma, crater deformity, asymmetry, sensation changes and recurrence: the risks of gynaecomastia surgery and warning signs to act on.",
        answer:
          "Like any operation, gynaecomastia surgery carries risks. Bruising and swelling are expected; haematoma is one of the more common complications; a crater deformity, asymmetry or leftover tissue may need a revision. Recurrence is possible if the cause continues.",
        sections: [
          {
            heading: "Common, expected effects",
            paragraphs: ["These are normal after surgery and ease over a few weeks."],
            bullets: [
              "Moderate pain and tightness across the chest in the first few days.",
              "Bruising over the chest, sometimes down to the abdomen.",
              "Swelling that hides the result for several weeks.",
              "Altered sensation of the nipple and areola, often temporary.",
              "Firm areas under the skin after liposuction, which soften with time.",
            ],
          },
          {
            heading: "Less common and rare complications",
            paragraphs: [
              "How likely these are depends on the technique, how much tissue is removed and your general health. Your surgeon can tell you which apply most to you.",
            ],
            bullets: [
              "Haematoma: tense, painful swelling, usually on one side, within 48 hours; it may need a return to theatre.",
              "Seroma: a collection of clear fluid, sometimes drained in clinic.",
              "Saucer or crater deformity under the areola if too much tissue is removed.",
              "Residual gland or fat, asymmetry, contour irregularities.",
              "Loose skin or folds, particularly after major weight loss.",
              "Infection, delayed healing, widened or raised scars.",
              "Partial loss of the nipple or areola, rare, mainly with skin removal and in smokers.",
              "Deep vein thrombosis, pulmonary embolism and anaesthetic risks, rare.",
            ],
          },
          {
            heading: "Recurrence",
            paragraphs: [
              "Surgery removes tissue but does not treat the cause. If a responsible medicine continues, anabolic steroid or cannabis use carries on, or a hormone imbalance is not corrected, remaining tissue can grow again.",
              "This is why a medical assessment and treatment of the cause are part of the process, not optional extras.",
            ],
          },
          {
            heading: "When to call straight away",
            paragraphs: [
              "Contact your surgeon or the hospital team urgently if you notice any of the following. If you have sudden breathlessness, chest pain, collapse or cough up blood, call 999. If you are unsure, call NHS 111.",
            ],
            bullets: [
              "Rapid, tense, painful swelling on one side of the chest.",
              "Fever, spreading redness or warmth, or pus from a wound.",
              "A nipple or areola that turns very dark, purple or cold.",
              "Pain or swelling in a calf.",
              "Bleeding that soaks through the dressing despite rest.",
            ],
          },
          {
            heading: "Factors that increase risk",
            paragraphs: ["Some of these can be changed before surgery and should be discussed at consultation."],
            bullets: [
              "Smoking and nicotine products, which impair healing and nipple blood supply.",
              "Aspirin, anti-inflammatories, blood thinners and some supplements, which must be disclosed.",
              "Poorly controlled high blood pressure, which increases haematoma risk.",
              "Anabolic steroids, which also increase recurrence risk.",
              "Significant excess weight or unstable weight.",
            ],
          },
        ],
        sources: [NHS, BAAPS, BAPRAS, SOC_ENDO],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "gynecomastia",
        kind: "cost",
        locale: "en-gb",
        title: "Gynaecomastia surgery cost",
        summary:
          "What a gynaecomastia surgery quote should include, what affects the price, NHS funding rules and the cost of complications and revisions.",
        answer:
          "The price depends on the technique (liposuction, gland removal, skin removal), the hospital and the type of anaesthetic. NHS funding is rare and limited to strict criteria. Ask for a written, itemised quote that states what happens if you need further treatment.",
        sections: [
          {
            heading: "What a quote should include",
            paragraphs: [
              "A clear, written quote lets you compare providers on a like-for-like basis. Check it covers:",
            ],
            bullets: [
              "Surgeon's and anaesthetist's fees.",
              "Hospital fees: theatre, day-case or overnight stay, equipment.",
              "Compression vest, dressings and medicines to take home.",
              "Follow-up appointments and how long they are included.",
              "What is covered if a complication or revision is needed.",
            ],
          },
          {
            heading: "What affects the price",
            paragraphs: ["Quotes can vary widely for several reasons."],
            bullets: [
              "Technique: liposuction alone, gland excision, or more extensive skin removal.",
              "How much tissue there is and whether one or both sides are treated.",
              "General or local anaesthetic, day case or overnight stay.",
              "Location and type of hospital.",
              "Pre-operative tests (hormone blood tests, ultrasound), which may be charged separately if done privately.",
            ],
          },
          {
            heading: "NHS funding",
            paragraphs: [
              "The NHS rarely funds gynaecomastia surgery. It is generally classed as a procedure of limited clinical value, and local commissioners set strict criteria; some consider funding only through an individual funding request (IFR) in exceptional circumstances. Liposuction for pseudogynaecomastia alone is treated as cosmetic.",
              "The underlying medical assessment, such as GP review and hormone tests, is available on the NHS. Ask your GP what the local policy is before seeking private treatment.",
            ],
          },
          {
            heading: "The cost of complications and revisions",
            paragraphs: [
              "A return to theatre for haematoma, a revision for residual tissue or correction of a crater deformity can add costs. Ask who pays, and for how long after surgery.",
              "Some providers include complications cover or offer separate cosmetic surgery insurance; read the exclusions and limits carefully. NHS emergency care remains available if a serious complication occurs.",
            ],
          },
          {
            heading: "Protecting yourself",
            paragraphs: [
              "The GMC expects doctors not to pressure patients or use time-limited discounts, and to allow time for reflection. Be cautious of package deals that bundle travel or offer reduced prices for booking quickly.",
            ],
          },
        ],
        sources: [NHS_ENGLAND, NHS, GMC, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "gynecomastia",
        kind: "recovery",
        locale: "en-gb",
        title: "Recovery after gynaecomastia surgery",
        summary:
          "Compression vest, pain, returning to work and exercise, scar care: what to expect at each stage of recovery after gynaecomastia surgery.",
        answer:
          "Recovery is usually fairly quick: back to desk work after 5 to 10 days, a compression vest for several weeks and upper-body weights from around 6 weeks. The contour settles over 3 to 6 months.",
        sections: [
          {
            heading: "The first few days",
            paragraphs: [
              "Most people go home the same day. The chest is tight, swollen and bruised; pain is usually moderate.",
            ],
            bullets: [
              "Compression vest worn day and night.",
              "A drain is sometimes left for a day or two.",
              "Keep your arms low: avoid reaching overhead and lifting.",
              "Gentle walking from day one to reduce the risk of blood clots.",
            ],
          },
          {
            heading: "Weeks 1 to 2",
            paragraphs: [
              "You will usually have a wound check in the first or second week, with removal of any stitches. Most people return to desk-based work between days 5 and 10. Drive only when you can move freely and do an emergency stop without pain, and check with your insurer.",
            ],
          },
          {
            heading: "Weeks 3 to 6",
            paragraphs: [
              "Keep wearing compression as advised, often for 4 to 6 weeks. Running and cycling can usually build up from 3 to 4 weeks; chest workouts and contact sports usually wait until around 6 weeks and your surgeon's agreement.",
            ],
          },
          {
            heading: "Scar care",
            paragraphs: [
              "Scars are pink at first and fade over 12 to 18 months. Protect them from the sun for at least 6 to 12 months and follow your team's advice on massage or silicone products. Firm areas under the skin are common and soften over a few months.",
            ],
          },
          {
            heading: "The result",
            paragraphs: [
              "The contour improves as swelling settles over 3 to 6 months. Any revision is considered only after this. Keeping the result means avoiding substances that caused the problem and maintaining a stable weight.",
            ],
          },
          {
            heading: "Warning signs",
            paragraphs: [
              "Rapid, painful swelling on one side, fever, spreading redness, a purple nipple or calf pain mean you should contact your surgeon straight away. For breathlessness or chest pain, call 999; if unsure, call NHS 111.",
            ],
          },
        ],
        sources: [NHS, BAPRAS, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "gynecomastia",
        kind: "decision",
        locale: "en-gb",
        title: "Gynaecomastia surgery: before you decide",
        summary:
          "Medical assessment, treating the cause, realistic expectations, questions for your surgeon and the recommended two-week cooling-off period.",
        answer:
          "Before considering surgery, ask your GP to look for a cause: it may be treatable and affects the risk of recurrence. If surgery is still appropriate, take time to compare, ask questions and allow at least two weeks to reflect, as the GMC recommends.",
        sections: [
          {
            heading: "Start with a medical assessment",
            paragraphs: [
              "Gynaecomastia can be linked to medicines, hormone imbalance, anabolic steroids, cannabis or alcohol, liver, kidney or thyroid disease and, rarely, a tumour. Your GP can arrange hormone tests and, if needed, an ultrasound, and refer you to an endocrinologist.",
              "Never stop a prescribed medicine on your own: talk to the prescriber first. Breast tissue that grows quickly, is on one side only, feels hard or causes nipple discharge should be checked promptly.",
            ],
          },
          {
            heading: "Sometimes, wait",
            paragraphs: [
              "Recent gynaecomastia, or gynaecomastia whose cause has just been removed, may settle within months. In teenagers it often resolves naturally. Surgery is usually considered once it has been present for about a year or more.",
            ],
          },
          {
            heading: "Realistic expectations",
            paragraphs: [
              "The aim is a flatter, more balanced chest, not a sculpted torso. There will be scars, some asymmetry is possible and the outcome depends on your skin quality.",
              "If worry about your chest takes up a great deal of your time, while others notice little difference, talk to your GP: it may be body dysmorphic disorder, which is treatable and rarely eased by surgery. If you are struggling or having thoughts of harming yourself, Samaritans are available on 116 123, day or night.",
            ],
          },
          {
            heading: "Questions to ask at consultation",
            paragraphs: ["Write down your questions before the appointment and expect clear answers."],
            bullets: [
              "Is my gynaecomastia mainly gland, fat or both, and which technique do you recommend?",
              "Has the cause been investigated enough, or do I need further tests?",
              "Where will the scars be and how long will they be?",
              "What are the risks in my case, and how are complications managed and paid for?",
              "How many of these procedures do you carry out, and at which hospital?",
              "Are you on the GMC specialist register for plastic surgery?",
              "What follow-up is included, and what happens if I need a revision?",
            ],
          },
          {
            heading: "Cooling-off period and choosing a surgeon",
            paragraphs: [
              "There is no legal cooling-off period in the UK, but GMC guidance expects doctors to give patients time to reflect; a gap of at least two weeks between consultation and surgery is recommended. You should see the operating surgeon, not only a salesperson or coordinator.",
              "Check the surgeon on the GMC register, and in England check that the hospital is registered with the CQC. Royal College of Surgeons cosmetic surgery certification is voluntary but can help you choose.",
            ],
          },
        ],
        sources: [GMC, CQC, SOC_ENDO, BAAPS, SAMARITANS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "gynecomastia",
        kind: "alternatives",
        locale: "en-gb",
        title: "Alternatives to gynaecomastia surgery",
        summary:
          "Waiting, treating the cause, weight loss, medication or non-surgical fat reduction: the alternatives to gynaecomastia surgery and their limits.",
        answer:
          "Depending on the cause and how long it has been present, there are options before surgery: waiting, removing the cause, losing weight or, on specialist advice, medication. None of them removes long-standing breast gland.",
        sections: [
          {
            heading: "Doing nothing",
            paragraphs: [
              "Once a serious cause has been ruled out, gynaecomastia is not harmful. It may settle, especially if recent, and some men choose to live with it or adapt their clothing. This avoids any surgical risk.",
            ],
          },
          {
            heading: "Treating or removing the cause",
            paragraphs: [
              "If a medicine is responsible, the prescriber may be able to suggest an alternative. Stopping anabolic steroids, cannabis or heavy drinking, or treating a hormone imbalance, can help recent gynaecomastia settle.",
              "The longer gynaecomastia has been present, the less likely it is to resolve, because the gland becomes fibrous.",
            ],
          },
          {
            heading: "Weight loss and exercise",
            paragraphs: [
              "These can reduce pseudogynaecomastia, which is fat. They do not affect breast gland, and major weight loss can leave loose skin.",
            ],
          },
          {
            heading: "Medication",
            paragraphs: [
              "For recent, painful gynaecomastia, an endocrinologist may discuss hormone-acting medicines. They are used off-label for this purpose, work variably and have their own side effects. They are of little use for long-standing gynaecomastia.",
            ],
          },
          {
            heading: "Non-surgical treatments",
            paragraphs: [
              "Fat freezing (cryolipolysis) and similar treatments do not treat breast gland. Results are limited and they carry their own risks, including pain and, rarely, paradoxical enlargement of the treated fat. Check that any provider is properly qualified and that the device is used as intended.",
            ],
          },
        ],
        sources: [NHS, SOC_ENDO, BAAPS, {
          label: "Medicines and Healthcare products Regulatory Agency (MHRA)",
          url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
        }],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "pseudogynecomastia",
        locale: "en-gb",
        slug: "pseudogynaecomastia",
        term: "Pseudogynaecomastia",
        aliases: ["pseudogynecomastia", "pseudo-gynaecomastia", "pseudo-gynecomastia", "fatty gynaecomastia", "lipomastia"],
        definition:
          "Pseudogynaecomastia is enlargement of the male chest caused by excess fat, without growth of the breast gland. It differs from true gynaecomastia, which involves gland tissue.",
        detail: [
          "It is common in people carrying extra weight. The chest feels soft, without the firm disc of tissue under the areola found in true gynaecomastia. Mixed forms, with both fat and gland, are common; examination and sometimes an ultrasound help tell them apart.",
          "Weight loss can reduce it. If it persists at a stable weight, liposuction may be offered; this is generally treated as cosmetic and is not funded by the NHS.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "hormonal-assessment",
        locale: "en-gb",
        slug: "hormone-tests",
        term: "Hormone tests",
        aliases: ["hormone test", "hormone blood tests", "hormone blood test", "hormonal assessment"],
        definition:
          "Hormone tests are blood tests that measure levels of several hormones to look for an imbalance. Before gynaecomastia surgery, they help identify a cause that may need treatment.",
        detail: [
          "Depending on your history and examination, your doctor may check testosterone, oestradiol, LH and FSH, prolactin, hCG and thyroid hormones, as well as liver and kidney function. Which tests are needed varies from person to person.",
          "Tests are usually arranged by your GP or an endocrinologist. An abnormal result may lead to further investigations and treatment of the cause before any surgery, which also lowers the risk of recurrence.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },
};
