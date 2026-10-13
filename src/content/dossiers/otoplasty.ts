import type { Source } from "../types";
import type { Dossier } from "./types";

/* ───────────────────────────── Sources France ───────────────────────────── */
const LEGIFRANCE_L6322_2: Source = {
  label: "Code de la santé publique, article L6322-2 (devis et délai de réflexion en chirurgie esthétique) — Légifrance",
  url: "https://www.legifrance.gouv.fr",
};
const HAS: Source = { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" };
const SOFCPRE: Source = {
  label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)",
  url: "https://www.sofcpre.fr",
};
const SFORL: Source = {
  label: "Société française d'ORL et de chirurgie de la face et du cou (SFORL)",
  url: "https://www.sforl.org",
};
const AMELI: Source = { label: "Assurance maladie — ameli.fr (prise en charge, accord préalable)", url: "https://www.ameli.fr" };
const ANNUAIRE_SANTE: Source = {
  label: "Annuaire santé (vérification des professionnels inscrits au RPPS)",
  url: "https://annuaire.sante.fr",
};
const SFAR: Source = { label: "Société française d'anesthésie et de réanimation (SFAR)", url: "https://sfar.org" };

/* ───────────────────────────── Sources UK ───────────────────────────── */
const NHS: Source = { label: "NHS: ear correction surgery (otoplasty) and cosmetic procedures", url: "https://www.nhs.uk" };
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

const REVIEW = { status: "draft" } as const;
const UPDATED_AT = "2026-10-13";

/** Otoplastie : fiche, sous-pages et lexique (fr, en-gb). Brouillon à relire par le comité médical. */
export const dossier: Dossier = {
  /* ═══════════════════════════════════ FRANCE ═══════════════════════════════════ */
  fr: {
    intervention: {
      id: "otoplasty",
      locale: "fr",
      slug: "otoplastie",
      category: "face",
      title: "Otoplastie (oreilles décollées)",
      summary:
        "L'otoplastie rapproche de la tête des oreilles décollées. Techniques, cicatrice, risques, bandeau, convalescence et prise en charge chez l'adulte.",
      description: [
        "L'otoplastie est une intervention qui corrige les oreilles décollées, c'est-à-dire trop écartées de la tête ou dont le relief du pavillon est peu marqué. Elle vise à rapprocher l'oreille du crâne et à redessiner ses replis, en conservant une forme d'oreille harmonieuse. Elle peut porter sur une seule oreille ou sur les deux.",
        "Elle est souvent réalisée chez l'enfant, à partir de 6 ou 7 ans, quand le pavillon a presque atteint sa taille adulte. Cette plateforme ne s'adresse qu'aux adultes : les informations présentées ici concernent l'otoplastie après 18 ans, où le cartilage, plus ferme, se modèle parfois moins facilement.",
        "Les techniques reposent sur le travail du cartilage de l'oreille. Des points de suture non résorbables, placés à l'arrière du cartilage, recréent le repli de l'anthélix ou fixent la conque vers l'os situé derrière l'oreille (mastoïde). Selon la rigidité du cartilage, le chirurgien peut l'affiner, l'inciser ou retirer une petite partie de la conque. Un lobe trop décollé peut être corrigé dans le même temps. Des techniques par petites incisions ou par fils passés à travers la peau existent ; leur place et leur durabilité sont à discuter avec le chirurgien.",
        "La cicatrice se situe le plus souvent dans le sillon derrière l'oreille, où elle est peu visible. Elle évolue sur plusieurs mois. Chez certaines personnes, en particulier celles qui ont déjà présenté des cicatrices épaisses, elle peut devenir hypertrophique ou former une chéloïde.",
        "L'otoplastie ne change pas la taille de l'oreille de façon importante, ne corrige pas une gêne auditive et ne rend pas les deux oreilles strictement identiques : une légère asymétrie est fréquente, comme avant l'intervention. Le résultat est en principe durable, mais une récidive partielle du décollement est possible, surtout dans les premiers mois ; elle peut justifier une retouche.",
      ],
      indications: [
        "Oreilles décollées d'un ou des deux côtés, source d'une gêne exprimée par la personne elle-même et ancienne.",
        "Absence ou effacement du repli de l'anthélix, ou conque trop profonde.",
        "Lobe de l'oreille proéminent, isolément ou associé.",
        "Asymétrie marquée entre les deux oreilles.",
        "Récidive ou résultat insatisfaisant après une otoplastie antérieure, à évaluer au cas par cas.",
      ],
      contraindications: [
        "Attentes irréalistes, par exemple obtenir deux oreilles strictement identiques.",
        "Demande motivée par la pression d'un tiers (entourage, partenaire, réseaux sociaux).",
        "Préoccupation excessive pour un décollement minime ou peu visible, qui peut évoquer une dysmorphophobie (à aborder avec le chirurgien).",
        "Infection en cours de la peau de l'oreille ou du conduit auditif, à traiter d'abord.",
        "Antécédent de chéloïdes : ce n'est pas toujours une contre-indication, mais le risque doit être discuté en détail.",
        "Tabagisme actif : il altère la cicatrisation ; un arrêt est recommandé avant et après l'intervention.",
        "Troubles de la coagulation, traitement anticoagulant ou pathologies non équilibrées, à évaluer avant toute décision.",
      ],
      risks: [
        {
          name: "Douleur, gonflement et ecchymoses",
          detail:
            "Attendus les premiers jours : les oreilles sont sensibles, gonflées et parfois bleutées. La douleur est en général modérée et contrôlée par les antalgiques prescrits.",
        },
        {
          name: "Troubles de la sensibilité",
          detail:
            "Engourdissement ou sensibilité accrue au froid et au toucher, le plus souvent transitoires sur quelques semaines à quelques mois.",
        },
        {
          name: "Hématome",
          detail:
            "Peu fréquent, il survient surtout dans les premières 48 heures et se manifeste par une douleur intense et inhabituelle d'un seul côté. C'est une urgence : non évacué, il peut abîmer le cartilage et déformer l'oreille.",
        },
        {
          name: "Infection et chondrite",
          detail:
            "Rares. L'infection peut atteindre le cartilage (chondrite ou périchondrite) : oreille rouge, chaude, très douloureuse. Elle nécessite un traitement antibiotique rapide, parfois un drainage, car elle peut laisser une déformation durable.",
        },
        {
          name: "Récidive partielle du décollement",
          detail:
            "L'oreille peut se décoller à nouveau en partie, surtout dans les premiers mois, en raison de l'élasticité du cartilage ou du lâchage d'un point. Une retouche est parfois proposée.",
        },
        {
          name: "Asymétrie et irrégularités",
          detail:
            "Une différence entre les deux oreilles, des reliefs irréguliers du cartilage ou un aspect trop « plaqué » (hypercorrection) sont possibles et peuvent justifier une retouche.",
        },
        {
          name: "Problèmes liés aux fils",
          detail:
            "Les points non résorbables peuvent devenir palpables, s'extérioriser à travers la peau ou provoquer une petite réaction inflammatoire (granulome), parfois des mois après. Il faut alors les retirer.",
        },
        {
          name: "Cicatrice hypertrophique ou chéloïde",
          detail:
            "La cicatrice derrière l'oreille peut s'épaissir. Les chéloïdes, qui débordent de la cicatrice et peuvent récidiver après traitement, sont plus fréquentes chez les personnes à peau foncée ou ayant des antécédents personnels ou familiaux.",
        },
        {
          name: "Souffrance de la peau",
          detail:
            "Rare : un pansement trop serré ou un hématome peuvent compromettre la vascularisation de la peau, avec un risque de plaie ou de nécrose localisée.",
        },
        {
          name: "Risques liés à l'anesthésie",
          detail:
            "Faibles sous anesthésie locale ; plus importants sous anesthésie générale. Ils sont évalués lors de la consultation d'anesthésie, obligatoire en France si une anesthésie générale ou une sédation est prévue.",
        },
      ],
      procedure: {
        anaesthesia: "Anesthésie locale, parfois associée à une sédation ; anesthésie générale possible selon les cas et les préférences.",
        duration: "Environ 1 à 2 heures pour les deux oreilles.",
        hospitalStay: "Le plus souvent en ambulatoire (sortie le jour même).",
      },
      recovery: [
        "Jour 1 : pansement en forme de casque ou bandeau serrant, tête surélevée pour dormir, antalgiques selon prescription.",
        "Jours 2 à 7 : contrôle et renouvellement du pansement selon le chirurgien, qui est en général retiré au bout de quelques jours à une semaine.",
        "Retrait des fils de peau, s'ils ne sont pas résorbables, vers 7 à 15 jours.",
        "Reprise d'une activité de bureau souvent après une semaine environ, selon le pansement et la profession.",
        "Port d'un bandeau élastique la nuit pendant plusieurs semaines (souvent 4 à 6), pour éviter de replier l'oreille en dormant.",
        "Sport sans contact après 2 à 4 semaines ; sports de contact, de combat et piscine à éviter plus longtemps, selon les consignes.",
        "Résultat stabilisé vers 3 à 6 mois ; la cicatrice continue de s'affiner pendant environ un an.",
      ],
      alternatives: [
        "Ne rien faire : une option légitime, d'autant que le décollement n'a pas de conséquence sur la santé ni sur l'audition.",
        "Camouflage par la coiffure ou le port d'accessoires.",
        "Dispositifs adhésifs qui maintiennent l'oreille contre la tête : effet temporaire, irritation ou allergie cutanée possibles, aucune correction durable.",
        "Moulage de l'oreille par attelle : efficace seulement chez le nouveau-né, dans les premières semaines de vie ; il n'a pas de place chez l'adulte.",
        "Techniques par fils passés à travers la peau, sans incision classique : ce sont aussi des gestes chirurgicaux, avec leurs propres risques (récidive, extériorisation des fils).",
      ],
      faq: [
        {
          question: "L'otoplastie est-elle douloureuse ?",
          answer:
            "Les premiers jours, les oreilles sont sensibles et donnent une sensation de tension, en général bien soulagée par les antalgiques prescrits. Une douleur forte et soudaine d'un seul côté n'est pas normale : elle peut signaler un hématome et doit faire appeler le chirurgien sans attendre.",
        },
        {
          question: "Peut-on se faire opérer à l'âge adulte ?",
          answer:
            "Oui. L'otoplastie est souvent pratiquée chez l'enfant, mais elle peut se faire à tout âge adulte. Le cartilage étant plus rigide, le chirurgien associe plus souvent des sutures et un travail sur le cartilage. Cette plateforme ne concerne que les personnes majeures.",
        },
        {
          question: "La cicatrice se voit-elle ?",
          answer:
            "Elle est le plus souvent cachée dans le sillon derrière l'oreille. Elle est rouge les premiers mois puis s'éclaircit. En cas d'antécédent de chéloïdes, signalez-le : le risque de cicatrice épaisse doit être discuté.",
        },
        {
          question: "Le résultat est-il définitif ?",
          answer:
            "Le résultat est en principe durable, mais une récidive partielle du décollement est possible, surtout dans les premiers mois. Le respect du bandeau de nuit fait partie des précautions recommandées. Aucun résultat ne peut être garanti.",
        },
        {
          question: "Combien de temps faut-il porter le bandeau ?",
          answer:
            "Après le pansement des premiers jours, un bandeau élastique est en général porté la nuit pendant plusieurs semaines, souvent 4 à 6. La durée exacte dépend du chirurgien et de la technique.",
        },
        {
          question: "L'otoplastie est-elle remboursée ?",
          answer:
            "Une prise en charge par l'Assurance maladie est possible dans certaines situations, selon l'âge, l'importance du décollement et le caractère malformatif ou non de la demande. Elle n'est pas automatique chez l'adulte : demandez au chirurgien si l'acte peut être pris en charge et renseignez-vous auprès de votre caisse avant l'intervention.",
        },
        {
          question: "Quel est le délai de réflexion ?",
          answer:
            "Lorsque l'intervention relève de la chirurgie esthétique, la loi impose un devis détaillé et un délai minimal de 15 jours entre sa remise et l'intervention. Aucun paiement ne peut être exigé avant la fin de ce délai, en dehors des honoraires de consultation.",
        },
        {
          question: "Quel chirurgien consulter ?",
          answer:
            "Un chirurgien qualifié en chirurgie plastique, reconstructrice et esthétique, ou un chirurgien ORL et cervico-facial pratiquant l'otoplastie. Vous pouvez vérifier sa qualification et son inscription sur l'Annuaire santé (RPPS) ou auprès du Conseil de l'Ordre des médecins.",
        },
        {
          question: "Peut-on opérer une seule oreille ?",
          answer:
            "Oui, si le décollement ne concerne qu'un côté. Le chirurgien évalue toutefois les deux oreilles, car corriger un seul côté peut faire apparaître une asymétrie avec l'autre.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      {
        interventionId: "otoplasty",
        kind: "risks",
        locale: "fr",
        title: "Otoplastie : les risques",
        summary:
          "Suites attendues, complications rares et graves de l'otoplastie (hématome, chondrite, récidive, chéloïde) et signes qui doivent faire appeler.",
        answer:
          "L'otoplastie est une intervention courante, mais elle comporte des risques. Douleur, gonflement et sensibilité modifiée sont attendus ; récidive partielle, asymétrie ou problèmes liés aux fils sont possibles ; l'hématome et l'infection du cartilage sont rares mais demandent une prise en charge rapide.",
        sections: [
          {
            heading: "Les suites fréquentes et attendues",
            paragraphs: [
              "Ces manifestations font partie des suites normales et diminuent en quelques jours à quelques semaines.",
            ],
            bullets: [
              "Sensation de tension et douleur modérée les premiers jours.",
              "Gonflement et ecchymoses des oreilles, parfois de la région autour.",
              "Engourdissement ou sensibilité accrue au froid, le plus souvent transitoires.",
              "Rougeur de la cicatrice derrière l'oreille pendant plusieurs mois.",
            ],
          },
          {
            heading: "Les complications moins fréquentes ou rares",
            paragraphs: [
              "Leur fréquence dépend de la technique, de la rigidité du cartilage et de l'état de santé. Le chirurgien peut vous indiquer celles qui vous concernent plus particulièrement.",
            ],
            bullets: [
              "Hématome : collection de sang sous la peau, à évacuer rapidement pour protéger le cartilage.",
              "Infection, en particulier du cartilage (chondrite ou périchondrite), qui peut laisser une déformation.",
              "Récidive partielle du décollement, surtout dans les premiers mois.",
              "Asymétrie, irrégularités du relief ou oreille trop plaquée (hypercorrection).",
              "Fils palpables, extériorisés ou à l'origine d'un granulome, à retirer.",
              "Cicatrice hypertrophique ou chéloïde.",
              "Souffrance cutanée, rare, liée à un pansement trop serré ou à un hématome.",
              "Risques liés à l'anesthésie, évalués en consultation d'anesthésie lorsqu'une anesthésie générale ou une sédation est prévue.",
            ],
          },
          {
            heading: "Quand appeler sans attendre",
            paragraphs: [
              "Contactez immédiatement le chirurgien ou l'équipe qui vous a opéré si vous remarquez l'un des signes suivants. N'enlevez pas le pansement vous-même sauf consigne explicite.",
              "En cas de malaise, de difficulté à respirer ou de réaction allergique importante, appelez le 15 (SAMU) ou le 112.",
            ],
            bullets: [
              "Douleur intense, brutale ou qui augmente d'un seul côté, en particulier dans les 48 premières heures.",
              "Pansement très serré, saignement qui traverse le pansement.",
              "Fièvre, oreille rouge, chaude, gonflée ou très douloureuse au toucher, écoulement.",
              "Peau de l'oreille qui devient très pâle, violacée ou noirâtre.",
            ],
          },
          {
            heading: "Récidive et retouche",
            paragraphs: [
              "Le cartilage a une mémoire élastique : une partie du décollement peut réapparaître, notamment si un point lâche. Une retouche n'est envisagée qu'une fois les tissus cicatrisés, en général après plusieurs mois.",
              "Demandez avant de vous engager quelles sont les conditions prévues en cas de retouche, y compris sur le plan financier.",
            ],
          },
          {
            heading: "Chéloïdes : un risque à anticiper",
            paragraphs: [
              "L'oreille est une zone où les chéloïdes surviennent plus volontiers, notamment chez les personnes à peau foncée ou ayant des antécédents personnels ou familiaux. Une chéloïde peut récidiver après traitement.",
              "Signalez tout antécédent au chirurgien : il peut adapter la technique, proposer une surveillance rapprochée de la cicatrice et un traitement précoce en cas d'épaississement.",
            ],
          },
          {
            heading: "Les facteurs qui augmentent les risques",
            paragraphs: [],
            bullets: [
              "Tabac, qui altère la cicatrisation.",
              "Aspirine, anti-inflammatoires, anticoagulants ou certains compléments alimentaires, à signaler.",
              "Antécédent de chirurgie de l'oreille ou de traumatisme du cartilage.",
              "Diabète ou maladies chroniques non équilibrées.",
              "Non-respect du pansement ou du bandeau de nuit.",
            ],
          },
        ],
        sources: [SOFCPRE, SFORL, HAS, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "otoplasty",
        kind: "cost",
        locale: "fr",
        title: "Prix d'une otoplastie",
        summary:
          "Ce que contient un devis d'otoplastie, ce qui fait varier le coût, règles françaises et cas de prise en charge possible par l'Assurance maladie.",
        answer:
          "Le coût d'une otoplastie dépend de la technique, du type d'anesthésie, du chirurgien et de l'établissement. Nous n'indiquons pas de prix : seul un devis détaillé remis après consultation permet de connaître le montant. Une prise en charge par l'Assurance maladie est possible dans certaines situations, à vérifier avant l'intervention.",
        sections: [
          {
            heading: "Ce que contient un devis",
            paragraphs: [
              "Vérifiez que le devis détaille chacun des postes suivants, ou qu'il indique clairement ceux qui n'y figurent pas.",
            ],
            bullets: [
              "Honoraires du chirurgien.",
              "Honoraires de l'anesthésiste, si une sédation ou une anesthésie générale est prévue.",
              "Frais de l'établissement : bloc opératoire, prise en charge ambulatoire.",
              "Pansements, bandeau de contention et médicaments.",
              "Consultations de suivi.",
              "Conditions prévues en cas de retouche ou de complication.",
            ],
          },
          {
            heading: "Ce qui fait varier le coût",
            paragraphs: [],
            bullets: [
              "Une ou deux oreilles, correction associée du lobe.",
              "Technique : sutures seules ou travail plus important du cartilage.",
              "Anesthésie locale, sédation ou anesthésie générale.",
              "Type d'établissement et région.",
              "Otoplastie secondaire (après une première intervention), souvent plus complexe.",
            ],
          },
          {
            heading: "Les règles applicables en France",
            paragraphs: [
              "Lorsque l'intervention relève de la chirurgie esthétique, le Code de la santé publique (article L6322-2) impose un devis détaillé et daté et un délai minimal de 15 jours entre sa remise et l'intervention. Aucune somme autre que les honoraires de consultation ne peut être exigée avant la fin de ce délai.",
              "Les actes à visée purement esthétique sont soumis à la TVA. Les honoraires doivent être annoncés à l'avance et fixés avec tact et mesure.",
            ],
          },
          {
            heading: "Quand l'Assurance maladie peut intervenir",
            paragraphs: [
              "L'otoplastie figure parmi les actes que l'Assurance maladie peut prendre en charge dans certaines situations, en fonction notamment de l'âge, de l'importance du décollement et de son caractère malformatif. Chez l'adulte, la prise en charge n'est pas systématique et dépend de l'appréciation du dossier.",
              "Demandez au chirurgien si votre situation relève d'un acte remboursable, et renseignez-vous auprès de votre caisse avant l'intervention, y compris sur la nécessité d'une demande d'accord préalable. Même en cas de prise en charge, des dépassements d'honoraires sont possibles selon le secteur du chirurgien ; votre complémentaire santé peut en couvrir une partie.",
            ],
          },
          {
            heading: "Le coût des complications et des retouches",
            paragraphs: [
              "Une retouche pour récidive ou asymétrie, le retrait d'un fil ou le traitement d'une chéloïde peuvent entraîner des frais supplémentaires. Renseignez-vous sur ce qui serait facturé et sur l'existence éventuelle d'une assurance complications proposée par le chirurgien ou l'établissement, en lisant ses exclusions.",
            ],
          },
          {
            heading: "Points de vigilance",
            paragraphs: [
              "Un prix nettement inférieur aux pratiques habituelles doit inciter à vérifier ce qui est inclus, la qualification du chirurgien sur l'Annuaire santé et l'organisation du suivi. Méfiez-vous de toute pression à décider vite ou à verser un acompte avant la fin du délai légal.",
            ],
          },
        ],
        sources: [LEGIFRANCE_L6322_2, AMELI, ANNUAIRE_SANTE, SOFCPRE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "otoplasty",
        kind: "recovery",
        locale: "fr",
        title: "Convalescence après une otoplastie",
        summary:
          "Les étapes après une otoplastie : pansement, bandeau de nuit, reprise du travail et du sport, soins de la cicatrice, suivi et signes d'alerte.",
        answer:
          "Après une otoplastie, un pansement est porté quelques jours, puis un bandeau élastique la nuit pendant plusieurs semaines. La reprise d'une activité de bureau est souvent possible après environ une semaine, et le résultat se stabilise en quelques mois. Les consignes de votre chirurgien priment sur ces repères.",
        sections: [
          {
            heading: "Les premiers jours",
            paragraphs: [
              "Les oreilles sont protégées par un pansement en forme de casque ou par un bandeau serrant. La sensation de tension est habituelle.",
            ],
            bullets: [
              "Dormir la tête surélevée, sur le dos, sans appuyer sur les oreilles.",
              "Prendre les antalgiques prescrits ; éviter aspirine et anti-inflammatoires sauf avis contraire.",
              "Ne pas mouiller ni retirer le pansement sans consigne.",
              "Éviter les efforts et la chaleur.",
            ],
          },
          {
            heading: "La première semaine",
            paragraphs: [
              "Le pansement est contrôlé, puis en général retiré au bout de quelques jours à une semaine. Les oreilles peuvent encore être gonflées, bleutées et sensibles. Les fils de peau non résorbables sont retirés vers 7 à 15 jours.",
            ],
          },
          {
            heading: "Le bandeau de nuit",
            paragraphs: [
              "Un bandeau élastique est ensuite porté la nuit, souvent pendant 4 à 6 semaines, parfois aussi le jour au début. Il évite de replier l'oreille pendant le sommeil, ce qui pourrait faire lâcher une suture.",
            ],
          },
          {
            heading: "Reprise des activités",
            paragraphs: [],
            bullets: [
              "Travail de bureau : souvent après une semaine environ.",
              "Lunettes : à porter avec précaution, selon les conseils du chirurgien.",
              "Sport sans contact : après 2 à 4 semaines.",
              "Sports de contact, de combat, casque et piscine : plus tard, souvent après 6 semaines ou davantage.",
            ],
          },
          {
            heading: "Cicatrice et résultat",
            paragraphs: [
              "La cicatrice derrière l'oreille reste rouge plusieurs mois, puis s'éclaircit. Protégez-la du soleil et signalez tout épaississement, démangeaison importante ou bourrelet qui déborde : un traitement précoce est plus efficace en cas de chéloïde. Le résultat se stabilise vers 3 à 6 mois.",
            ],
          },
          {
            heading: "Signes d'alerte",
            paragraphs: [
              "Appelez le chirurgien en cas de douleur brutale ou croissante d'un côté, de fièvre, d'oreille rouge et chaude, d'écoulement ou de changement de couleur de la peau. En cas d'urgence vitale, appelez le 15 ou le 112.",
            ],
          },
        ],
        sources: [SOFCPRE, SFORL, HAS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "otoplasty",
        kind: "decision",
        locale: "fr",
        title: "Otoplastie : avant de se décider",
        summary:
          "Otoplastie à l'âge adulte : motivation, attentes, dysmorphophobie, questions à poser au chirurgien et délai de réflexion de 15 jours.",
        answer:
          "L'otoplastie peut être envisagée à tout âge adulte, quand le décollement est une gêne ancienne et personnelle. Elle rapproche l'oreille de la tête sans garantir une symétrie complète. En France, un délai minimal de 15 jours sépare la remise du devis de l'intervention lorsqu'elle relève de la chirurgie esthétique ; un second avis est toujours possible.",
        sections: [
          {
            heading: "Une intervention souvent faite dans l'enfance, possible à l'âge adulte",
            paragraphs: [
              "Beaucoup d'otoplasties sont réalisées chez l'enfant. Chez l'adulte, l'intervention reste possible ; le cartilage plus ferme demande parfois un travail plus important. Cette plateforme ne s'adresse qu'aux personnes majeures.",
            ],
          },
          {
            heading: "Votre motivation et vos attentes",
            paragraphs: [
              "Demandez-vous depuis quand le décollement vous gêne, dans quelles situations, et ce que vous attendez concrètement. L'intervention peut rapprocher les oreilles et atténuer une gêne ; elle ne garantit ni deux oreilles identiques, ni un changement dans votre vie personnelle ou professionnelle. Une décision prise sous la pression d'autrui expose davantage à la déception.",
            ],
          },
          {
            heading: "Dysmorphophobie",
            paragraphs: [
              "La dysmorphophobie (trouble dysmorphique corporel) se traduit par une préoccupation envahissante pour un défaut que les autres remarquent peu ou pas. La chirurgie ne la soulage généralement pas. Si cette préoccupation occupe une grande place dans vos journées, parlez-en à votre médecin traitant : des prises en charge efficaces existent.",
              "Si vous traversez une détresse importante ou avez des idées suicidaires, le 3114 (numéro national de prévention du suicide) est joignable 24 h/24.",
            ],
          },
          {
            heading: "Questions à poser en consultation",
            paragraphs: [],
            bullets: [
              "Quelle est votre qualification (chirurgie plastique ou ORL) et combien d'otoplasties réalisez-vous ?",
              "Quelle technique proposez-vous dans mon cas, et pourquoi ?",
              "Quels résultats sont réalistes, et quelles asymétries peuvent persister ?",
              "Quel type d'anesthésie, dans quel établissement autorisé ?",
              "Combien de temps faudra-t-il porter le pansement puis le bandeau ?",
              "Que se passe-t-il en cas de récidive ou de chéloïde, et qu'est-ce qui serait facturé ?",
              "Mon intervention peut-elle être prise en charge par l'Assurance maladie ?",
            ],
          },
          {
            heading: "Délai de réflexion et second avis",
            paragraphs: [
              "En chirurgie esthétique, le Code de la santé publique impose un devis détaillé et un délai minimal de 15 jours entre sa remise et l'intervention ; aucun paiement autre que la consultation ne peut être exigé avant. Une consultation d'anesthésie est obligatoire si une anesthésie générale ou une sédation est prévue. Vous pouvez demander un second avis : un chirurgien qui s'y oppose doit vous alerter.",
            ],
          },
        ],
        sources: [LEGIFRANCE_L6322_2, ANNUAIRE_SANTE, SOFCPRE, HAS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "otoplasty",
        kind: "alternatives",
        locale: "fr",
        title: "Alternatives à l'otoplastie",
        summary:
          "Options autres que l'otoplastie chez l'adulte : ne rien faire, coiffure, dispositifs adhésifs, techniques par fils, avec leurs limites.",
        answer:
          "Chez l'adulte, les alternatives non chirurgicales à l'otoplastie sont limitées : coiffure, dispositifs adhésifs temporaires, ou choix de ne rien faire. Le moulage par attelle n'est efficace que chez le nouveau-né. Les techniques par fils évitent une incision classique mais restent des gestes chirurgicaux.",
        sections: [
          {
            heading: "Ne rien faire",
            paragraphs: [
              "Les oreilles décollées n'ont aucune conséquence sur la santé ni sur l'audition. Choisir de ne pas se faire opérer, ou d'attendre, est une décision légitime.",
            ],
          },
          {
            heading: "Coiffure et accessoires",
            paragraphs: [
              "Une coupe de cheveux couvrant les oreilles, un bandeau ou un couvre-chef peuvent atténuer la visibilité du décollement, sans aucun risque médical.",
            ],
          },
          {
            heading: "Dispositifs adhésifs",
            paragraphs: [
              "Des petits adhésifs ou dispositifs collés derrière l'oreille la maintiennent contre la tête. L'effet disparaît dès qu'on les retire et ils ne modifient pas durablement le cartilage chez l'adulte. Ils peuvent provoquer irritation, macération ou allergie cutanée.",
            ],
          },
          {
            heading: "Le moulage de l'oreille : seulement chez le nouveau-né",
            paragraphs: [
              "Chez le nouveau-né, le cartilage est très malléable et une attelle posée dans les premières semaines peut corriger certaines déformations. Cette méthode n'a pas d'efficacité chez l'adulte.",
            ],
          },
          {
            heading: "Techniques par fils ou mini-incisions",
            paragraphs: [
              "Certaines techniques placent des fils à travers la peau pour replier le cartilage, sans incision classique. Elles restent des actes chirurgicaux, avec des risques de récidive, d'extériorisation des fils ou d'infection, et leur durabilité chez l'adulte au cartilage rigide doit être discutée avec le chirurgien.",
            ],
          },
        ],
        sources: [SOFCPRE, SFORL, HAS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "prominent-ears",
        locale: "fr",
        slug: "oreilles-decollees",
        term: "Oreilles décollées",
        aliases: ["oreille décollée", "oreilles decollees", "oreille decollee", "décollement des oreilles"],
        definition:
          "Les oreilles décollées sont des oreilles dont le pavillon est trop écarté de la tête, le plus souvent parce que le repli de l'anthélix est peu marqué ou que la conque est trop profonde. Il s'agit d'une particularité de forme, sans conséquence sur l'audition.",
        detail: [
          "Le décollement est en général présent dès la naissance et souvent familial. Il peut toucher une seule oreille ou les deux, et associer plusieurs mécanismes : effacement de l'anthélix, conque profonde, lobe proéminent.",
          "Chez le nouveau-né, une attelle posée dans les premières semaines peut corriger certaines formes. Plus tard, seule une otoplastie modifie durablement la position de l'oreille ; chez l'adulte, elle reste possible.",
          "Le décollement n'étant pas une maladie, ne rien faire est une option légitime. Lorsque la gêne est importante, elle mérite d'être discutée avec un chirurgien qualifié.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "keloid",
        locale: "fr",
        slug: "cheloide",
        term: "Chéloïde",
        aliases: ["chéloïdes", "cicatrice chéloïde", "cicatrices chéloïdes"],
        definition:
          "Une chéloïde est une cicatrice anormalement épaisse qui déborde des limites de la plaie initiale et continue parfois de grossir pendant des mois. Contrairement à la cicatrice hypertrophique, elle régresse rarement seule et peut récidiver après traitement.",
        detail: [
          "Les chéloïdes sont plus fréquentes chez les personnes à peau foncée, en cas d'antécédents personnels ou familiaux, et sur certaines zones comme le lobe ou le pavillon de l'oreille, le haut du thorax et les épaules. Elles peuvent démanger ou être douloureuses.",
          "Le traitement associe selon les cas des injections de corticoïdes, la compression, des pansements en silicone, une chirurgie suivie d'un traitement complémentaire, voire une radiothérapie dans des cas sélectionnés. Une chirurgie seule expose à une récidive fréquente.",
          "Avant toute intervention, il est important de signaler un antécédent de chéloïde au chirurgien, qui pourra en tenir compte dans l'indication, la technique et la surveillance.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },

  /* ═══════════════════════════════════ UNITED KINGDOM ═══════════════════════════════════ */
  "en-gb": {
    intervention: {
      id: "otoplasty",
      locale: "en-gb",
      slug: "otoplasty",
      category: "face",
      title: "Otoplasty (ear correction)",
      summary:
        "Otoplasty pins back prominent ears. Techniques, scars, risks, the night-time headband, recovery and NHS funding for adults in the UK.",
      description: [
        "Otoplasty, also called ear correction or pinnaplasty, is an operation to bring prominent ears closer to the head and to reshape the natural folds of the ear. It can be done on one ear or both.",
        "It is often carried out in children from around five or six, once the ears have nearly reached adult size. This platform is for adults only, so the information here relates to otoplasty from the age of 18. Adult ear cartilage is usually firmer, which can make it less easy to reshape.",
        "Most techniques work on the ear cartilage. Permanent stitches placed behind the cartilage create or strengthen the fold of the ear (the antihelix) or hold the bowl of the ear (the concha) back towards the bone behind it. Depending on how stiff the cartilage is, the surgeon may also score, thin or remove a small piece of it. A prominent earlobe can be corrected at the same time. Some surgeons offer stitch-only methods through tiny punctures; how well they last in adults should be discussed openly.",
        "The scar is usually hidden in the crease behind the ear. It fades over many months. In some people, especially those who have had thick scars before, it can become raised (hypertrophic) or form a keloid scar.",
        "Otoplasty does not significantly change the size of the ear, does not affect hearing and cannot make both ears identical: slight differences are common, as they were before surgery. The result is usually long-lasting, but partial return of prominence can happen, mostly in the first months, and may lead to revision surgery.",
      ],
      indications: [
        "Prominent ears on one or both sides that you have been concerned about for a long time, for your own reasons.",
        "A poorly formed or absent antihelical fold, or a deep concha.",
        "A prominent earlobe, alone or with other features.",
        "Marked difference between the two ears.",
        "Recurrence or an unsatisfactory result after previous ear surgery, assessed individually.",
      ],
      contraindications: [
        "Unrealistic expectations, such as wanting two identical ears.",
        "Wanting surgery because of pressure from a partner, family, friends or social media.",
        "Excessive concern about very slight prominence that others barely notice, which may suggest body dysmorphic disorder (to discuss with the surgeon).",
        "Active infection of the ear skin or ear canal, which should be treated first.",
        "A history of keloid scars: not always a reason to avoid surgery, but the risk needs careful discussion.",
        "Smoking or vaping nicotine, which slows healing; stopping before and after surgery is advised.",
        "Bleeding disorders, blood-thinning medication or poorly controlled medical conditions, to be assessed beforehand.",
      ],
      risks: [
        {
          name: "Pain, swelling and bruising",
          detail:
            "Expected in the first days: the ears feel tight, tender and sometimes look bruised. Pain is usually moderate and controlled with prescribed painkillers.",
        },
        {
          name: "Changes in sensation",
          detail:
            "Numbness or extra sensitivity to cold and touch, usually temporary over weeks to months.",
        },
        {
          name: "Haematoma",
          detail:
            "Uncommon, usually within the first 48 hours, causing severe, unusual pain on one side. It is an emergency: if the blood is not drained, it can damage the cartilage and leave the ear misshapen.",
        },
        {
          name: "Infection and chondritis",
          detail:
            "Rare. Infection can spread to the cartilage (chondritis or perichondritis), making the ear red, hot and very painful. It needs prompt antibiotics, sometimes drainage, as it can cause lasting deformity.",
        },
        {
          name: "Partial recurrence",
          detail:
            "The ear may move forward again to some extent, mostly in the first months, because cartilage is springy or a stitch gives way. Revision surgery is sometimes offered.",
        },
        {
          name: "Asymmetry and irregularities",
          detail:
            "A difference between the ears, uneven ridges of cartilage or an over-flattened look (overcorrection) can occur and may need revision.",
        },
        {
          name: "Stitch problems",
          detail:
            "Permanent stitches can sometimes be felt, work their way through the skin or cause a small inflammatory lump (granuloma), occasionally months later. They then need removing.",
        },
        {
          name: "Hypertrophic or keloid scar",
          detail:
            "The scar behind the ear can thicken. Keloids, which grow beyond the original scar and can come back after treatment, are more common in people with darker skin or a personal or family history.",
        },
        {
          name: "Skin damage",
          detail:
            "Rare: a dressing that is too tight or a haematoma can reduce blood supply to the skin, risking a wound or a small area of skin loss.",
        },
        {
          name: "Anaesthetic risks",
          detail:
            "Low with local anaesthesia; higher with general anaesthesia. They are assessed before surgery by the anaesthetic team.",
        },
      ],
      procedure: {
        anaesthesia: "Local anaesthesia, sometimes with sedation; general anaesthesia is also possible.",
        duration: "Around 1 to 2 hours for both ears.",
        hospitalStay: "Usually a day case (home the same day).",
      },
      recovery: [
        "Day 1: a bulky head bandage or tight headband, head raised when sleeping, painkillers as prescribed.",
        "Days 2 to 7: the dressing is checked and usually removed after a few days to a week, as your surgeon advises.",
        "Skin stitches, if not dissolvable, are removed at around 7 to 14 days.",
        "Return to desk-based work often after about a week, depending on the dressing and your job.",
        "An elastic headband worn at night for several weeks (often 4 to 6) so the ear is not folded forward in your sleep.",
        "Non-contact exercise after 2 to 4 weeks; contact and combat sports and swimming later, as advised.",
        "Result settled at around 3 to 6 months; the scar keeps maturing for about a year.",
      ],
      alternatives: [
        "Doing nothing: a legitimate choice, as prominent ears do not affect health or hearing.",
        "Hairstyles or accessories that cover the ears.",
        "Adhesive devices that hold the ear against the head: temporary only, can irritate the skin, no lasting change.",
        "Ear moulding with splints: effective only in newborn babies in the first weeks of life; it has no role in adults.",
        "Stitch-only techniques through small punctures: still surgical, with their own risks (recurrence, stitch extrusion).",
      ],
      faq: [
        {
          question: "Does otoplasty hurt?",
          answer:
            "Your ears will feel tight and tender for the first few days, which is usually well controlled with prescribed painkillers. Sudden, severe pain on one side is not normal: it may mean a haematoma, and you should contact your surgeon straight away.",
        },
        {
          question: "Can adults have ear correction surgery?",
          answer:
            "Yes. Otoplasty is often performed in children, but it can be done at any adult age. Because adult cartilage is firmer, surgeons more often combine stitches with reshaping of the cartilage. This platform is only for people aged 18 and over.",
        },
        {
          question: "Will the scar show?",
          answer:
            "It is usually hidden in the crease behind the ear. It is red for the first months and then fades. Tell your surgeon if you have ever had keloid scars, as the risk of a thick scar needs discussing.",
        },
        {
          question: "Is the result permanent?",
          answer:
            "The result is usually long-lasting, but partial recurrence can happen, mostly in the first months. Wearing the night-time headband as advised is one of the recommended precautions. No result can be guaranteed.",
        },
        {
          question: "How long will I wear a headband?",
          answer:
            "After the first dressing, an elastic headband is usually worn at night for several weeks, often 4 to 6. The exact length depends on your surgeon and the technique used.",
        },
        {
          question: "Can I get otoplasty on the NHS?",
          answer:
            "Rarely as an adult. NHS funding for ear correction is mainly considered for children who meet local criteria. Adults are usually only funded in exceptional circumstances, through an individual funding request supported by your GP or specialist. Criteria vary by area.",
        },
        {
          question: "Is there a cooling-off period?",
          answer:
            "There is no legal waiting period in the UK, but GMC guidance for doctors who perform cosmetic interventions recommends giving patients time to reflect, and professional standards suggest at least two weeks between consultation and agreeing to surgery.",
        },
        {
          question: "Which surgeon should I see?",
          answer:
            "A surgeon on the GMC Specialist Register in plastic surgery or in ENT (otolaryngology) who regularly performs otoplasty. You can check their registration on the GMC website and check that the clinic is registered with the CQC in England, or the equivalent regulator elsewhere in the UK.",
        },
        {
          question: "Can just one ear be corrected?",
          answer:
            "Yes, if only one ear is prominent. Your surgeon will still assess both, because correcting one side can make a difference with the other side more noticeable.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      {
        interventionId: "otoplasty",
        kind: "risks",
        locale: "en-gb",
        title: "Otoplasty risks",
        summary:
          "Expected effects, uncommon and serious complications of otoplasty (haematoma, chondritis, recurrence, keloid) and when to seek help urgently.",
        answer:
          "Otoplasty is a common operation, but it carries risks. Pain, swelling and altered sensation are expected; partial recurrence, asymmetry and stitch problems can occur; haematoma and cartilage infection are rare but need urgent treatment.",
        sections: [
          {
            heading: "Common and expected effects",
            paragraphs: ["These are a normal part of healing and settle over days to weeks."],
            bullets: [
              "Tightness and moderate pain for the first few days.",
              "Swelling and bruising of the ears and nearby skin.",
              "Numbness or sensitivity to cold, usually temporary.",
              "Redness of the scar behind the ear for several months.",
            ],
          },
          {
            heading: "Less common or rare complications",
            paragraphs: [
              "How likely these are depends on the technique, how stiff your cartilage is and your general health. Your surgeon can tell you which apply most to you.",
            ],
            bullets: [
              "Haematoma: a collection of blood under the skin, which needs draining quickly to protect the cartilage.",
              "Infection, particularly of the cartilage (chondritis or perichondritis), which can leave the ear misshapen.",
              "Partial recurrence of prominence, mostly in the first months.",
              "Asymmetry, uneven ridges or an over-flattened look.",
              "Stitches that can be felt, poke through the skin or cause a granuloma, needing removal.",
              "Hypertrophic or keloid scar.",
              "Rare skin damage from a tight dressing or haematoma.",
              "Anaesthetic risks, assessed beforehand.",
            ],
          },
          {
            heading: "When to seek help without waiting",
            paragraphs: [
              "Contact your surgeon or the clinic's 24-hour number straight away if you notice any of the following. Do not remove the dressing yourself unless you have been told to.",
              "If you cannot reach them and need advice, call NHS 111. Call 999 for breathing difficulty, collapse or a severe allergic reaction.",
            ],
            bullets: [
              "Severe, sudden or increasing pain on one side, especially in the first 48 hours.",
              "A dressing that feels very tight, or bleeding coming through it.",
              "Fever, or an ear that is red, hot, swollen or very tender, or discharge.",
              "Skin of the ear turning very pale, purple or dark.",
            ],
          },
          {
            heading: "Recurrence and revision",
            paragraphs: [
              "Cartilage is springy, so some prominence can return, particularly if a stitch gives way. Revision is usually only considered once healing has settled, typically after several months.",
              "Before you commit, ask what happens if revision is needed and whether it would be charged.",
            ],
          },
          {
            heading: "Keloid scars",
            paragraphs: [
              "The ear is a common site for keloid scars, particularly in people with darker skin or a personal or family history. Keloids can come back after treatment.",
              "Tell your surgeon about any history of keloids. They may adapt the technique, follow the scar closely and start treatment early if it thickens.",
            ],
          },
          {
            heading: "Factors that increase risk",
            paragraphs: [],
            bullets: [
              "Smoking or nicotine products, which slow healing.",
              "Aspirin, anti-inflammatory painkillers, blood thinners or some supplements, which you should mention.",
              "Previous ear surgery or injury to the cartilage.",
              "Diabetes or other poorly controlled conditions.",
              "Not following advice on the dressing or night-time headband.",
            ],
          },
        ],
        sources: [NHS, BAPRAS, BAAPS, RCS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "otoplasty",
        kind: "cost",
        locale: "en-gb",
        title: "Otoplasty cost",
        summary:
          "What an otoplasty quote should include, what makes the cost vary, NHS funding for adults and the cost of revision or complications.",
        answer:
          "The cost of otoplasty depends on the technique, the type of anaesthesia, the surgeon and the hospital or clinic. We do not give prices: only a written, itemised quote after consultation tells you the amount. NHS funding for adults is rare and limited to exceptional circumstances.",
        sections: [
          {
            heading: "What a quote should include",
            paragraphs: ["Check that the quote lists each of the following, or states clearly what is not included."],
            bullets: [
              "Surgeon's fee.",
              "Anaesthetist's fee, if sedation or general anaesthesia is planned.",
              "Hospital or clinic fees, including theatre time.",
              "Dressings, headband and medicines.",
              "Follow-up appointments.",
              "What happens, and what is charged, if revision or treatment of a complication is needed.",
            ],
          },
          {
            heading: "What makes the cost vary",
            paragraphs: [],
            bullets: [
              "One or both ears, and whether the earlobe is corrected too.",
              "Technique: stitches alone or more extensive cartilage work.",
              "Local anaesthesia, sedation or general anaesthesia.",
              "Type and location of the hospital or clinic.",
              "Revision surgery after a previous operation, which is often more complex.",
            ],
          },
          {
            heading: "NHS funding",
            paragraphs: [
              "The NHS does not usually fund cosmetic surgery. Ear correction is mainly considered for children who meet local criteria, and many areas list it among procedures of limited clinical value for adults.",
              "An adult may be funded only in exceptional circumstances, through an individual funding request (IFR) made by a GP or specialist. Criteria differ between integrated care boards in England and health boards in Scotland, Wales and Northern Ireland.",
            ],
          },
          {
            heading: "Revision and complications",
            paragraphs: [
              "Revision for recurrence or asymmetry, removal of a stitch or treatment of a keloid scar may cost extra. Ask whether the clinic offers a policy covering complications, and read what it excludes. If you have private medical insurance, check with your insurer: cosmetic surgery is usually excluded.",
            ],
          },
          {
            heading: "Points to watch",
            paragraphs: [
              "A price far below usual levels should prompt you to check what is included, the surgeon's GMC registration and how aftercare is organised. Be wary of time-limited discounts, pressure to pay a deposit quickly or finance agreed on the day of consultation; GMC guidance says cosmetic interventions should not be marketed in ways that put pressure on patients.",
            ],
          },
        ],
        sources: [NHS, GMC, CQC, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "otoplasty",
        kind: "recovery",
        locale: "en-gb",
        title: "Recovery after otoplasty",
        summary:
          "Recovery after otoplasty: the head bandage, night-time headband, returning to work and sport, scar care, follow-up and warning signs.",
        answer:
          "After otoplasty you wear a head bandage for a few days, then an elastic headband at night for several weeks. Many people return to desk-based work after about a week, and the result settles over a few months. Your surgeon's instructions come first.",
        sections: [
          {
            heading: "The first few days",
            paragraphs: ["Your ears are protected by a bulky bandage or tight headband. A feeling of tightness is normal."],
            bullets: [
              "Sleep with your head raised, on your back, without pressing on your ears.",
              "Take the painkillers prescribed; avoid aspirin and anti-inflammatories unless told otherwise.",
              "Keep the dressing dry and in place.",
              "Avoid strenuous activity and heat.",
            ],
          },
          {
            heading: "The first week",
            paragraphs: [
              "The dressing is checked and usually removed after a few days to a week. Your ears may still be swollen, bruised and tender. Non-dissolvable skin stitches are removed at around 7 to 14 days.",
            ],
          },
          {
            heading: "The night-time headband",
            paragraphs: [
              "An elastic headband is then worn at night, often for 4 to 6 weeks, sometimes during the day at first. It stops the ear being bent forward while you sleep, which could loosen a stitch.",
            ],
          },
          {
            heading: "Getting back to normal",
            paragraphs: [],
            bullets: [
              "Desk-based work: often after about a week.",
              "Glasses: wear with care, as your surgeon advises.",
              "Non-contact exercise: after 2 to 4 weeks.",
              "Contact or combat sports, helmets and swimming: later, often after 6 weeks or more.",
            ],
          },
          {
            heading: "Scar and result",
            paragraphs: [
              "The scar behind the ear stays red for several months, then fades. Protect it from the sun and report any thickening, marked itching or a ridge growing beyond the scar: early treatment works better if a keloid develops. The result usually settles at around 3 to 6 months.",
            ],
          },
          {
            heading: "Warning signs",
            paragraphs: [
              "Contact your surgeon for sudden or increasing pain on one side, fever, a red and hot ear, discharge or a change in skin colour. Call NHS 111 for advice if you cannot reach them, or 999 in an emergency.",
            ],
          },
        ],
        sources: [NHS, BAPRAS, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "otoplasty",
        kind: "decision",
        locale: "en-gb",
        title: "Otoplasty: before you decide",
        summary:
          "Ear correction as an adult: motivation, expectations, body dysmorphic disorder, questions to ask your surgeon and the two-week cooling-off.",
        answer:
          "Otoplasty can be considered at any adult age when prominent ears are a long-standing concern of your own. It brings the ears closer to the head but cannot promise full symmetry. UK professional standards recommend at least two weeks between consultation and agreeing to surgery, and a second opinion is always reasonable.",
        sections: [
          {
            heading: "Often done in childhood, possible in adults",
            paragraphs: [
              "Many otoplasties are performed in children. In adults the operation is still possible, though firmer cartilage sometimes needs more reshaping. This platform is only for people aged 18 and over.",
            ],
          },
          {
            heading: "Your motivation and expectations",
            paragraphs: [
              "Ask yourself how long your ears have bothered you, in which situations, and what you expect to change. Surgery can bring the ears closer to the head and may ease a long-standing concern; it cannot guarantee identical ears or changes in your personal or working life. A decision made under pressure from others is more likely to lead to disappointment.",
            ],
          },
          {
            heading: "Body dysmorphic disorder",
            paragraphs: [
              "Body dysmorphic disorder (BDD) is a mental health condition in which a person spends a lot of time worrying about flaws that others barely notice. Cosmetic surgery does not usually relieve it. If this sounds familiar, speak to your GP: effective treatments are available on the NHS.",
              "If you are struggling to cope, you can call Samaritans free on 116 123, at any time.",
            ],
          },
          {
            heading: "Questions to ask your surgeon",
            paragraphs: [],
            bullets: [
              "Are you on the GMC Specialist Register, in plastic surgery or ENT, and how many otoplasties do you perform?",
              "Which technique do you recommend for me, and why?",
              "What result is realistic, and what asymmetry may remain?",
              "What type of anaesthesia, and is the hospital or clinic registered with the CQC (or the regulator in Scotland, Wales or Northern Ireland)?",
              "How long will I wear the bandage and the headband?",
              "What happens if the ear relapses or I develop a keloid, and what would be charged?",
              "Who do I contact out of hours if there is a problem?",
            ],
          },
          {
            heading: "Cooling-off and second opinions",
            paragraphs: [
              "There is no statutory waiting period in UK law, but GMC guidance on cosmetic interventions asks doctors to give patients time to reflect, and professional standards recommend at least two weeks between consultation and agreeing to surgery. The consultation should be with the operating surgeon. You are free to seek a second opinion, and a surgeon who discourages this is a warning sign.",
            ],
          },
        ],
        sources: [GMC, NHS, CQC, RCS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "otoplasty",
        kind: "alternatives",
        locale: "en-gb",
        title: "Alternatives to otoplasty",
        summary:
          "Options other than otoplasty for adults: doing nothing, hairstyles, adhesive devices and stitch-only techniques, with the limits of each.",
        answer:
          "For adults, non-surgical alternatives to otoplasty are limited: hairstyles, temporary adhesive devices, or choosing not to have treatment. Ear moulding with splints only works in newborn babies. Stitch-only techniques avoid a standard incision but are still surgical procedures.",
        sections: [
          {
            heading: "Doing nothing",
            paragraphs: [
              "Prominent ears do not affect your health or hearing. Choosing not to have surgery, or waiting, is a legitimate decision.",
            ],
          },
          {
            heading: "Hairstyles and accessories",
            paragraphs: [
              "A hairstyle that covers the ears, a headband or a hat can make prominence less noticeable, with no medical risk.",
            ],
          },
          {
            heading: "Adhesive devices",
            paragraphs: [
              "Small adhesive strips or devices stuck behind the ear hold it against the head. The effect stops as soon as they are removed, and they do not permanently reshape adult cartilage. They can cause skin irritation, soreness or allergy.",
            ],
          },
          {
            heading: "Ear moulding: for newborns only",
            paragraphs: [
              "In newborn babies the cartilage is very soft, and splints applied in the first weeks can correct some ear shapes. This has no effect in adults.",
            ],
          },
          {
            heading: "Stitch-only and minimal-incision techniques",
            paragraphs: [
              "Some techniques place stitches through tiny punctures to fold the cartilage without a standard incision. They are still surgical procedures, with risks of recurrence, stitches working through the skin and infection. How well they last in adults with stiffer cartilage should be discussed with a surgeon on the GMC Specialist Register.",
            ],
          },
        ],
        sources: [NHS, BAPRAS, GMC],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "prominent-ears",
        locale: "en-gb",
        slug: "prominent-ears",
        term: "Prominent ears",
        aliases: ["prominent ear", "protruding ears", "protruding ear", "sticking-out ears"],
        definition:
          "Prominent ears stick out further from the head than usual, most often because the fold of the ear (the antihelix) is underdeveloped or the bowl of the ear (the concha) is deep. It is a difference in shape that does not affect hearing.",
        detail: [
          "Prominence is usually present from birth and often runs in families. It can affect one or both ears and may involve more than one feature: a flat antihelix, a deep concha or a prominent earlobe.",
          "In newborn babies, splinting in the first weeks can correct some ear shapes. Later on, only surgery (otoplasty) changes the position of the ear permanently; it remains possible in adults.",
          "As prominent ears are not a disease, doing nothing is a legitimate choice. If they cause significant distress, this is worth discussing with your GP or a qualified surgeon.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "keloid",
        locale: "en-gb",
        slug: "keloid-scar",
        term: "Keloid scar",
        aliases: ["keloid", "keloids", "keloid scars"],
        definition:
          "A keloid scar is an abnormally thick scar that grows beyond the edges of the original wound and may keep enlarging for months. Unlike a hypertrophic scar, it rarely flattens on its own and can return after treatment.",
        detail: [
          "Keloids are more common in people with darker skin, in those with a personal or family history, and on certain areas such as the earlobe and ear, upper chest and shoulders. They can itch or be painful.",
          "Treatment may combine steroid injections, pressure, silicone dressings, surgery followed by additional treatment and, in selected cases, radiotherapy. Surgery alone is often followed by recurrence.",
          "Before any operation, tell your surgeon if you have ever had a keloid, so it can be taken into account in the decision, the technique and follow-up.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },
};
