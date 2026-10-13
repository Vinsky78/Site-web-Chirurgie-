import type { Source } from "../types";
import type { Dossier } from "./types";

/** Réduction mammaire : fiche, sous-pages et lexique (fr, en-gb). Brouillon à relire par le comité médical. */

const REVIEW = { status: "draft" } as const;
const UPDATED_AT = "2026-10-13";

// ───────────────────────────── Sources France ─────────────────────────────
const HAS: Source = { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" };
const SOFCPRE: Source = {
  label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)",
  url: "https://www.sofcpre.fr",
};
const AMELI: Source = {
  label: "Assurance maladie — ameli.fr (prise en charge, classification commune des actes médicaux)",
  url: "https://www.ameli.fr",
};
const LEGIFRANCE_L6322_2: Source = {
  label: "Code de la santé publique, article L6322-2 (devis et délai de réflexion en chirurgie esthétique) — Légifrance",
  url: "https://www.legifrance.gouv.fr",
};
const ANNUAIRE_SANTE: Source = {
  label: "Annuaire santé (vérification des professionnels inscrits au RPPS)",
  url: "https://annuaire.sante.fr",
};
const INCA: Source = { label: "Institut national du cancer (INCa) — dépistage du cancer du sein", url: "https://www.e-cancer.fr" };
const SFAR: Source = { label: "Société française d'anesthésie et de réanimation (SFAR)", url: "https://sfar.org" };

// ─────────────────────────── Sources Royaume-Uni ───────────────────────────
const NHS: Source = { label: "NHS — breast reduction surgery", url: "https://www.nhs.uk" };
const BAPRAS: Source = {
  label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)",
  url: "https://www.bapras.org.uk",
};
const BAAPS: Source = { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" };
const GMC: Source = {
  label: "General Medical Council — guidance for doctors who offer cosmetic interventions; medical register",
  url: "https://www.gmc-uk.org",
};
const CQC: Source = { label: "Care Quality Commission (CQC)", url: "https://www.cqc.org.uk" };
const RCS: Source = { label: "Royal College of Surgeons of England", url: "https://www.rcseng.ac.uk" };
const NICE: Source = { label: "National Institute for Health and Care Excellence (NICE)", url: "https://www.nice.org.uk" };

export const dossier: Dossier = {
  // ═══════════════════════════════════ FRANCE ═══════════════════════════════════
  fr: {
    intervention: {
      id: "breast-reduction",
      locale: "fr",
      slug: "reduction-mammaire",
      category: "breast",
      title: "Réduction mammaire",
      summary:
        "La réduction mammaire diminue le volume des seins en cas d'hypertrophie mammaire gênante. Techniques, cicatrices, risques, allaitement, prise en charge.",
      description: [
        "La réduction mammaire (ou plastie mammaire de réduction) consiste à retirer une partie de la glande, de la graisse et de la peau des seins, puis à remodeler le sein et à remonter l'aréole et le mamelon. Elle s'adresse aux personnes atteintes d'hypertrophie mammaire, c'est-à-dire de seins volumineux par rapport à leur morphologie, souvent responsables d'une gêne physique : douleurs du dos, de la nuque et des épaules, sillons creusés par les bretelles, irritations et mycoses sous les seins (intertrigo), difficulté à pratiquer une activité physique.",
        "Il existe plusieurs techniques. Le chirurgien choisit un « pédicule », c'est-à-dire la portion de tissu qui garde l'aréole vascularisée et innervée (supérieur, supéro-interne, inférieur…), et un tracé de peau. Dans les hypertrophies très importantes, l'aréole peut être prélevée puis regreffée (greffe libre de la plaque aréolo-mamelonnaire), au prix d'une perte de sensibilité et de la possibilité d'allaiter. Une liposuccion complémentaire est parfois associée, et peut suffire seule dans de rares cas choisis.",
        "Les cicatrices sont inévitables et définitives. Elles font le tour de l'aréole et descendent verticalement jusqu'au pli sous le sein (cicatrice verticale, dite « en sucette »), auxquelles s'ajoute souvent une cicatrice horizontale dans le pli (cicatrice en T inversé, ou « en ancre de marine »). Elles sont rouges et parfois épaisses pendant plusieurs mois, puis s'éclaircissent sur 12 à 18 mois, avec une qualité variable d'une personne à l'autre.",
        "Les tissus retirés sont systématiquement envoyés en examen anatomopathologique (analyse au microscope). Avant l'intervention, une mammographie et une échographie peuvent être demandées selon l'âge et les antécédents, afin de ne pas méconnaître une lésion. L'intervention ne remplace pas le dépistage du cancer du sein, qui doit être poursuivi ensuite.",
        "La réduction mammaire diminue le volume et remonte les seins, mais elle ne rend pas les deux seins strictement identiques, ne garantit pas la disparition complète des douleurs du dos (qui peuvent avoir d'autres causes) et ne préserve pas toujours la possibilité d'allaiter. Elle n'est pas un traitement de l'excès de poids.",
        "Le résultat est en général durable, car la glande retirée ne se reconstitue pas. Le volume et la forme peuvent toutefois évoluer avec une prise ou une perte de poids, une grossesse, l'allaitement, la ménopause et le vieillissement naturel des tissus, avec un relâchement progressif.",
      ],
      indications: [
        "Hypertrophie mammaire entraînant des douleurs du dos, de la nuque ou des épaules, persistantes malgré les mesures habituelles.",
        "Intertrigo sous-mammaire récidivant (irritations, macération, mycoses dans le pli sous les seins).",
        "Sillons douloureux creusés par les bretelles de soutien-gorge, gêne à la pratique sportive ou à l'habillement.",
        "Retentissement psychologique ou social d'une poitrine jugée trop volumineuse par la personne elle-même.",
        "Asymétrie importante de volume entre les deux seins, avec un sein hypertrophique.",
      ],
      contraindications: [
        "Âge inférieur à 18 ans sur cette plateforme ; chez l'adolescente, la décision relève d'une évaluation spécialisée attendant en principe la fin de la croissance mammaire.",
        "Grossesse en cours ou allaitement récent : un délai de plusieurs mois après le sevrage est généralement conseillé.",
        "Tabagisme actif : il augmente fortement le risque de nécrose et de retard de cicatrisation ; un arrêt plusieurs semaines avant et après est demandé.",
        "Diabète, hypertension ou autre maladie chronique non équilibrés ; obésité importante, qui augmente le risque de complications et peut justifier une perte de poids préalable.",
        "Lésion mammaire non explorée ou imagerie anormale non expliquée.",
        "Attentes irréalistes (seins parfaitement symétriques, absence de cicatrice, disparition certaine de toute douleur dorsale).",
        "Demande motivée par la pression d'un tiers, ou préoccupation excessive pour un défaut minime pouvant évoquer une dysmorphophobie.",
      ],
      risks: [
        {
          name: "Douleur, œdème et ecchymoses",
          detail:
            "Suites attendues : douleurs modérées les premiers jours, seins gonflés, tendus et marqués d'ecchymoses. Le gonflement diminue sur plusieurs semaines ; la forme définitive n'apparaît qu'après plusieurs mois.",
        },
        {
          name: "Retard de cicatrisation et désunion de la cicatrice en T",
          detail:
            "Complication assez fréquente : la jonction des cicatrices verticale et horizontale, sous le sein, est la zone la plus fragile. Une petite ouverture peut nécessiter des pansements pendant plusieurs semaines ; elle cicatrise le plus souvent sans nouvelle intervention, mais laisse parfois une cicatrice plus large.",
        },
        {
          name: "Hématome",
          detail:
            "Collection de sang dans le sein, peu fréquente, survenant surtout dans les premières heures ou les premiers jours. Un sein qui gonfle brutalement d'un seul côté, tendu et douloureux, peut imposer une reprise au bloc opératoire.",
        },
        {
          name: "Infection",
          detail:
            "Peu fréquente. Elle se manifeste par une rougeur, une chaleur, une douleur croissante, un écoulement ou de la fièvre, et se traite par antibiotiques, parfois par un drainage chirurgical.",
        },
        {
          name: "Cytostéatonécrose",
          detail:
            "Mort d'une partie du tissu graisseux du sein, qui forme un ou plusieurs nodules fermes, parfois douloureux, apparaissant des semaines ou des mois après l'intervention. Bénigne, elle peut nécessiter une imagerie voire une biopsie pour la distinguer d'une autre lésion lors du suivi.",
        },
        {
          name: "Modification de la sensibilité",
          detail:
            "Diminution ou augmentation de la sensibilité des mamelons et de la peau du sein, fréquente au début ; elle s'améliore souvent en quelques mois mais peut être définitive. La greffe libre de l'aréole entraîne une perte durable de la sensibilité du mamelon.",
        },
        {
          name: "Allaitement compromis",
          detail:
            "Une partie de la glande et des canaux est retirée ou sectionnée : l'allaitement peut rester possible, mais il est souvent partiel et n'est jamais assuré. Il est impossible après une greffe libre de l'aréole.",
        },
        {
          name: "Cicatrices épaisses ou de mauvaise qualité",
          detail:
            "Les cicatrices peuvent devenir hypertrophiques (rouges, épaisses, qui démangent) ou plus rarement chéloïdes, s'élargir ou se pigmenter. Des soins (massages, pansements en silicone, injections) peuvent être proposés ; une reprise n'est envisagée qu'après maturation, au bout d'un an au moins.",
        },
        {
          name: "Asymétrie et irrégularités de forme",
          detail:
            "Une petite différence de volume, de forme ou de hauteur des aréoles est fréquente. Des excès de peau aux extrémités de la cicatrice horizontale (« oreilles ») peuvent persister. Une retouche est parfois proposée à distance.",
        },
        {
          name: "Nécrose de l'aréole ou nécrose cutanée",
          detail:
            "Rare mais grave : une mauvaise vascularisation peut entraîner la perte partielle, exceptionnellement totale, de l'aréole et du mamelon, ou d'une zone de peau. Le risque augmente avec le tabac, l'obésité, le diabète et les réductions très importantes. Elle impose des soins prolongés et parfois une reconstruction secondaire de l'aréole.",
        },
        {
          name: "Thrombose veineuse et embolie pulmonaire",
          detail:
            "Rares mais graves. Le lever précoce, la marche et, selon le risque individuel, des bas de contention ou un traitement anticoagulant préventif servent à les prévenir.",
        },
        {
          name: "Risques liés à l'anesthésie générale",
          detail:
            "Évalués lors de la consultation d'anesthésie obligatoire, en fonction de l'état de santé, des traitements et des antécédents.",
        },
      ],
      procedure: {
        anaesthesia: "Anesthésie générale.",
        duration: "Environ 2 à 4 heures selon le volume à retirer et la technique.",
        hospitalStay: "Le plus souvent une à deux nuits d'hospitalisation ; parfois en ambulatoire.",
      },
      recovery: [
        "J0 à J2 : douleurs modérées soulagées par antalgiques, drains parfois en place 24 à 48 heures ; lever et marche dès le lendemain.",
        "Semaine 1 : soutien-gorge de maintien jour et nuit, pansements selon les consignes, pas de port de charges ni de bras levés de façon prolongée.",
        "Semaines 2 à 3 : retrait ou résorption des fils, première visite de contrôle ; reprise du travail possible pour une activité de bureau, après 2 à 3 semaines selon l'activité.",
        "Semaines 3 à 6 : soutien-gorge de maintien poursuivi en général 4 à 6 semaines ; conduite possible quand les mouvements ne sont plus douloureux.",
        "Après 6 semaines environ : reprise progressive du sport, en particulier des activités sollicitant les bras et la poitrine, avec l'accord du chirurgien.",
        "Mois 3 à 6 : le gonflement a largement disparu et la forme du sein se stabilise ; protection solaire des cicatrices.",
        "12 à 18 mois : cicatrices matures et résultat stabilisé ; une mammographie de référence peut être proposée selon l'âge, puis le dépistage habituel reprend.",
      ],
      alternatives: [
        "Ne rien faire : une option légitime, notamment si la gêne est modérée ; elle peut être réévaluée plus tard.",
        "Perte de poids encadrée, lorsque le surpoids contribue au volume des seins : elle peut réduire la poitrine et les douleurs, sans garantie sur le volume final.",
        "Kinésithérapie, renforcement musculaire du dos et soutien-gorge adapté (bonnet bien ajusté, bretelles larges) pour soulager les douleurs.",
        "Soins de peau et traitement de l'intertrigo (hygiène, séchage du pli, traitements antifongiques prescrits par un médecin).",
        "Liposuccion seule, dans de rares cas choisis : cicatrices minimes mais réduction limitée, sans remodelage ni remontée du sein.",
      ],
      faq: [
        {
          question: "L'intervention est-elle douloureuse ?",
          answer:
            "Les douleurs sont en général modérées et bien contrôlées par les antalgiques prescrits. Beaucoup de personnes décrivent surtout une sensation de tension et de gêne pendant quelques jours. Une douleur qui augmente au lieu de diminuer doit être signalée.",
        },
        {
          question: "À partir de quel âge peut-on se faire opérer ?",
          answer:
            "Il est habituellement conseillé d'attendre que les seins aient fini de se développer. Une réduction peut exceptionnellement être discutée chez une adolescente très gênée, après une évaluation spécialisée ; cette plateforme s'adresse uniquement aux adultes de 18 ans et plus.",
        },
        {
          question: "Les cicatrices seront-elles visibles ?",
          answer:
            "Les cicatrices autour de l'aréole, verticale et souvent horizontale dans le pli sont définitives. Elles sont cachées par un soutien-gorge ou un maillot de bain, s'éclaircissent sur 12 à 18 mois, mais leur qualité varie selon les personnes et ne peut pas être prédite avec certitude.",
        },
        {
          question: "Pourrai-je allaiter après une réduction mammaire ?",
          answer:
            "Peut-être, mais ce n'est pas assuré. Selon la technique et la quantité de glande retirée, l'allaitement peut être possible, partiel ou impossible. Si vous envisagez une grossesse, parlez-en au chirurgien : certaines personnes préfèrent attendre d'avoir eu leurs enfants.",
        },
        {
          question: "Une grossesse après l'intervention modifie-t-elle le résultat ?",
          answer:
            "Une grossesse et l'allaitement peuvent faire augmenter le volume des seins puis les relâcher. Il n'est pas contre-indiqué d'être enceinte après une réduction, mais le résultat peut s'en trouver modifié. Il est conseillé d'attendre au moins plusieurs mois après l'intervention.",
        },
        {
          question: "Le résultat est-il définitif ?",
          answer:
            "La glande retirée ne repousse pas, et le résultat est en général durable. Le volume peut cependant augmenter avec une prise de poids ou une grossesse, et les seins se relâchent avec l'âge.",
        },
        {
          question: "La réduction mammaire est-elle remboursée ?",
          answer:
            "Elle peut être prise en charge par l'Assurance maladie lorsqu'elle traite une hypertrophie mammaire, sous conditions. La règle de facturation habituellement citée (nomenclature CCAM) exige le retrait d'au moins 300 grammes de tissu par sein ; ce seuil et les modalités (accord préalable éventuel, dépassements d'honoraires) sont à confirmer avec le chirurgien et l'Assurance maladie avant l'intervention.",
        },
        {
          question: "Y a-t-il un délai de réflexion obligatoire ?",
          answer:
            "Pour la chirurgie esthétique, le Code de la santé publique impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention. Lorsque la réduction est réalisée pour une hypertrophie prise en charge, ce délai légal peut ne pas s'appliquer formellement, mais un temps de réflexion reste vivement conseillé.",
        },
        {
          question: "Quel chirurgien consulter, et comment vérifier sa qualification ?",
          answer:
            "La réduction mammaire est réalisée par un chirurgien qualifié en chirurgie plastique, reconstructrice et esthétique. Vous pouvez vérifier son inscription et sa spécialité sur l'Annuaire santé (annuaire.sante.fr) ou auprès du Conseil national de l'Ordre des médecins, et vous assurer que l'établissement est autorisé par l'ARS.",
        },
        {
          question: "Faut-il une mammographie avant l'opération ?",
          answer:
            "Selon l'âge et les antécédents personnels ou familiaux, le chirurgien peut demander une mammographie et une échographie avant l'intervention. Les tissus retirés sont ensuite analysés au microscope ; très rarement, cette analyse découvre une lésion qui nécessite un suivi ou un traitement.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      {
        interventionId: "breast-reduction",
        kind: "risks",
        locale: "fr",
        title: "Réduction mammaire : les risques",
        summary:
          "Suites attendues, complications fréquentes et rares de la réduction mammaire (cicatrice en T, nécrose, sensibilité, allaitement) et signes d'alerte.",
        answer:
          "La réduction mammaire comporte des risques comme toute chirurgie. Douleurs, gonflement et ecchymoses sont attendus ; les retards de cicatrisation à la jonction de la cicatrice en T sont assez fréquents ; la nécrose de l'aréole et les complications thromboemboliques sont rares mais graves. Le tabac augmente nettement plusieurs de ces risques.",
        sections: [
          {
            heading: "Les suites attendues",
            paragraphs: [
              "Certaines manifestations ne sont pas des complications mais des suites normales. Elles diminuent progressivement au fil des jours et des semaines.",
            ],
            bullets: [
              "Douleurs et sensation de tension dans les seins les premiers jours.",
              "Gonflement (œdème) et ecchymoses, qui régressent sur plusieurs semaines.",
              "Seins hauts et de forme un peu carrée au début, qui s'assouplissent et descendent en quelques mois.",
              "Sensibilité des mamelons modifiée, souvent transitoire.",
              "Petits suintements des cicatrices les premiers jours.",
            ],
          },
          {
            heading: "Les complications fréquentes ou peu fréquentes",
            paragraphs: [
              "Leur fréquence dépend de la technique, du volume retiré, du poids, du tabac et des maladies associées. Votre chirurgien peut vous dire celles qui vous concernent le plus.",
            ],
            bullets: [
              "Désunion de la cicatrice en T : ouverture de la jonction des cicatrices sous le sein, assez fréquente, traitée le plus souvent par pansements.",
              "Hématome : collection de sang, peu fréquente, qui peut imposer une reprise au bloc.",
              "Infection, traitée par antibiotiques, parfois par drainage.",
              "Cytostéatonécrose : nodules fermes liés à la mort de petites zones de graisse, bénins mais parfois source d'examens complémentaires.",
              "Cicatrices hypertrophiques ou élargies, asymétrie, excès de peau aux extrémités de la cicatrice.",
              "Perte durable de sensibilité du mamelon, allaitement partiel ou impossible.",
            ],
          },
          {
            heading: "Les complications rares mais graves",
            paragraphs: [
              "La nécrose de l'aréole et du mamelon, partielle ou exceptionnellement totale, survient quand l'apport sanguin est insuffisant. Elle est plus probable chez les fumeuses, en cas d'obésité, de diabète ou de réduction très volumineuse. Elle demande des soins prolongés et parfois une reconstruction de l'aréole.",
              "La thrombose veineuse profonde (caillot dans une veine de la jambe) et l'embolie pulmonaire sont rares. Les complications de l'anesthésie générale sont exceptionnelles et évaluées lors de la consultation d'anesthésie obligatoire.",
            ],
          },
          {
            heading: "Ce que révèle l'examen des tissus",
            paragraphs: [
              "Les tissus retirés sont analysés au microscope (examen anatomopathologique). Dans la très grande majorité des cas, ils sont normaux. Rarement, l'analyse découvre une lésion précancéreuse ou un cancer débutant, qui conduit à un suivi ou à un traitement complémentaire. Le résultat vous est communiqué lors du suivi.",
            ],
          },
          {
            heading: "Quand appeler sans attendre",
            paragraphs: [
              "Contactez rapidement le chirurgien ou l'établissement qui vous a opérée si l'un de ces signes apparaît. En cas d'essoufflement brutal, de douleur thoracique, de malaise ou de saignement abondant, appelez le 15 (SAMU) ou le 112.",
            ],
            bullets: [
              "Un sein qui gonfle brutalement, devient tendu, dur et douloureux, surtout d'un seul côté.",
              "Une aréole ou une zone de peau qui devient violacée, noire, froide ou très pâle.",
              "Fièvre, rougeur qui s'étend, chaleur, écoulement purulent ou malodorant.",
              "Douleur, gonflement ou rougeur d'un mollet.",
              "Cicatrice qui s'ouvre largement ou saigne de façon persistante.",
            ],
          },
          {
            heading: "Les facteurs qui augmentent les risques",
            paragraphs: ["Plusieurs facteurs sont modifiables et doivent être discutés en consultation."],
            bullets: [
              "Tabac et nicotine sous toutes leurs formes : arrêt recommandé plusieurs semaines avant et après l'intervention.",
              "Surpoids important et diabète non équilibré.",
              "Prise d'anticoagulants, d'aspirine, d'anti-inflammatoires ou de certains compléments alimentaires.",
              "Volume de réduction très important.",
              "Antécédents de chirurgie ou de radiothérapie du sein.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFAR, INCA],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "breast-reduction",
        kind: "cost",
        locale: "fr",
        title: "Prix d'une réduction mammaire",
        summary:
          "Composition d'un devis de réduction mammaire, ce qui fait varier le prix et conditions de prise en charge par l'Assurance maladie en cas d'hypertrophie.",
        answer:
          "Le coût d'une réduction mammaire dépend du chirurgien, de l'anesthésie, de l'établissement et de la durée d'hospitalisation. Nous n'indiquons aucun montant : seul un devis détaillé permet de le connaître. Lorsqu'elle traite une hypertrophie mammaire, l'intervention peut être prise en charge par l'Assurance maladie sous conditions, mais des dépassements d'honoraires peuvent rester à votre charge.",
        sections: [
          {
            heading: "Ce que contient un devis",
            paragraphs: [
              "Un devis détaillé et daté doit vous être remis avant l'intervention. Vérifiez qu'il précise chaque poste, ou qu'il indique clairement ceux qui n'y figurent pas.",
            ],
            bullets: [
              "Honoraires du chirurgien, avec la part prise en charge et l'éventuel dépassement.",
              "Honoraires de l'anesthésiste, souvent facturés séparément.",
              "Frais de l'établissement : bloc opératoire, nuits d'hospitalisation, chambre individuelle éventuelle.",
              "Examens préopératoires (mammographie, échographie, bilan sanguin) et examen anatomopathologique des tissus.",
              "Soutien-gorge de maintien, pansements, médicaments.",
              "Consultations de suivi après l'intervention.",
            ],
          },
          {
            heading: "La prise en charge par l'Assurance maladie",
            paragraphs: [
              "Lorsque la réduction traite une hypertrophie mammaire, elle relève de la chirurgie réparatrice et peut être remboursée. La règle de facturation habituellement citée dans la classification commune des actes médicaux (CCAM) exige le retrait d'au moins 300 grammes de tissu par sein. Ce seuil, ainsi que la nécessité éventuelle d'une demande d'accord préalable, sont à confirmer avec le chirurgien et l'Assurance maladie avant l'intervention.",
              "Si le poids retiré est finalement inférieur au seuil, ou si la demande est purement esthétique, l'intervention n'est pas prise en charge. Demandez au chirurgien comment ce cas est prévu dans le devis.",
            ],
          },
          {
            heading: "Ce qui reste souvent à votre charge",
            paragraphs: [
              "Même lorsque l'intervention est prise en charge, une partie peut rester à payer. Votre complémentaire santé (mutuelle) peut rembourser tout ou partie de ces frais selon votre contrat : demandez-lui une estimation à partir du devis.",
            ],
            bullets: [
              "Dépassements d'honoraires des chirurgiens et anesthésistes exerçant en secteur 2.",
              "Chambre individuelle et prestations de confort.",
              "Forfait journalier hospitalier.",
              "Liposuccion complémentaire à visée esthétique, le cas échéant.",
            ],
          },
          {
            heading: "Ce qui fait varier le prix",
            paragraphs: [],
            bullets: [
              "La technique et la durée de l'intervention, liées au volume à retirer.",
              "Le statut de l'établissement (public ou privé) et le secteur de conventionnement du chirurgien.",
              "La durée d'hospitalisation : ambulatoire ou une à deux nuits.",
              "La région et le niveau d'expérience de l'équipe.",
            ],
          },
          {
            heading: "Complications, retouches et règles à connaître",
            paragraphs: [
              "Les soins d'une complication (pansements prolongés, reprise au bloc) et une éventuelle retouche des cicatrices ou d'une asymétrie peuvent entraîner des frais supplémentaires. Demandez par écrit ce qui est prévu dans ces situations.",
              "Pour une intervention à visée esthétique non prise en charge, le Code de la santé publique impose un devis détaillé et un délai minimal de 15 jours avant l'intervention, et aucun paiement autre que la consultation ne peut être exigé avant la fin de ce délai. La TVA peut alors s'appliquer.",
            ],
          },
        ],
        sources: [AMELI, LEGIFRANCE_L6322_2, SOFCPRE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "breast-reduction",
        kind: "recovery",
        locale: "fr",
        title: "Convalescence après une réduction mammaire",
        summary:
          "Étapes de la convalescence après une réduction mammaire : premiers jours, soutien-gorge, reprise du travail et du sport, soins des cicatrices.",
        answer:
          "Après une réduction mammaire, la plupart des personnes reprennent une activité de bureau en 2 à 3 semaines et le sport vers 6 semaines. Un soutien-gorge de maintien est porté 4 à 6 semaines. La forme se stabilise en quelques mois et les cicatrices mûrissent sur 12 à 18 mois.",
        sections: [
          {
            heading: "Les premiers jours",
            paragraphs: [
              "Vous restez en général une à deux nuits à l'établissement. Des drains peuvent être en place 24 à 48 heures. Les douleurs sont modérées et soulagées par les antalgiques prescrits ; le lever et la marche dès le lendemain aident à prévenir la thrombose.",
              "Prévoyez quelqu'un pour vous raccompagner et vous aider à la maison les premiers jours.",
            ],
          },
          {
            heading: "Les premières semaines",
            paragraphs: [],
            bullets: [
              "Soutien-gorge de maintien sans armature, jour et nuit, selon les consignes.",
              "Pas de port de charges lourdes ni d'efforts avec les bras levés pendant plusieurs semaines.",
              "Douche autorisée selon les consignes du chirurgien ; pas de bain ni de piscine avant cicatrisation complète.",
              "Dormir sur le dos, buste légèrement surélevé.",
              "Pansements et contrôle des cicatrices lors de la visite de suivi, vers la fin de la première ou de la deuxième semaine.",
            ],
          },
          {
            heading: "Reprise du travail, de la conduite et du sport",
            paragraphs: [
              "Une activité de bureau peut souvent reprendre après 2 à 3 semaines ; un métier physique demande davantage. La conduite reprend quand les mouvements ne sont plus douloureux et que vous pouvez freiner en urgence.",
              "La marche est encouragée dès les premiers jours. Le sport, en particulier la course, la natation et les activités sollicitant les bras et la poitrine, reprend progressivement vers 6 semaines, avec l'accord du chirurgien.",
            ],
          },
          {
            heading: "Les cicatrices",
            paragraphs: [
              "Les cicatrices sont rouges et parfois en relief pendant plusieurs mois. Massages, pansements ou gels en silicone peuvent être conseillés une fois la peau fermée. Évitez l'exposition au soleil pendant au moins un an, ou protégez les cicatrices.",
              "Une petite ouverture à la jonction de la cicatrice en T est assez fréquente : elle demande des pansements réguliers, et cicatrise le plus souvent en quelques semaines.",
            ],
          },
          {
            heading: "Le résultat dans le temps",
            paragraphs: [
              "Le gonflement disparaît en grande partie en 3 mois ; la forme du sein se stabilise entre 6 et 12 mois. Le soulagement des douleurs du dos et des épaules est souvent ressenti rapidement, mais il n'est pas assuré. Une mammographie de référence peut être proposée selon l'âge, puis le dépistage habituel reprend.",
            ],
          },
          {
            heading: "Signes qui doivent faire appeler",
            paragraphs: [
              "Contactez le chirurgien en cas de fièvre, de sein qui gonfle brutalement, d'aréole qui change de couleur, d'écoulement purulent ou de douleur au mollet. En cas d'essoufflement brutal ou de douleur thoracique, appelez le 15 ou le 112.",
            ],
          },
        ],
        sources: [SOFCPRE, HAS, INCA],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "breast-reduction",
        kind: "decision",
        locale: "fr",
        title: "Réduction mammaire : avant de se décider",
        summary:
          "Bien décider d'une réduction mammaire : bon moment, projet de grossesse, poids, tabac, questions à poser au chirurgien et délai de réflexion.",
        answer:
          "La réduction mammaire est une décision personnelle, souvent motivée par une gêne physique ancienne. Il est utile d'y réfléchir en tenant compte d'un projet de grossesse, de la stabilité du poids et du tabac. Prenez le temps : le délai minimal de 15 jours prévu pour la chirurgie esthétique est un repère utile, et un second avis est toujours possible.",
        sections: [
          {
            heading: "Est-ce le bon moment ?",
            paragraphs: [
              "Il est conseillé d'attendre que les seins aient fini de se développer et que le poids soit stable depuis plusieurs mois. Une perte de poids importante après l'intervention peut relâcher les seins ; une prise de poids peut les faire augmenter de nouveau.",
              "Si vous envisagez une grossesse, sachez que l'allaitement peut être compromis et que la grossesse peut modifier le résultat. Certaines personnes choisissent d'attendre ; d'autres, très gênées, préfèrent se faire opérer avant. Il n'y a pas de bonne réponse unique : parlez-en au chirurgien.",
            ],
          },
          {
            heading: "Votre santé",
            paragraphs: [
              "Le tabac, l'obésité importante et le diabète non équilibré augmentent nettement les risques de nécrose et de retard de cicatrisation. Le chirurgien peut vous demander d'arrêter de fumer ou de perdre du poids avant de programmer l'intervention. Selon votre âge et vos antécédents, une imagerie des seins sera demandée.",
            ],
          },
          {
            heading: "Vos attentes",
            paragraphs: [
              "La réduction allège la poitrine et la remonte, au prix de cicatrices définitives. Elle ne rend pas les seins identiques et ne fait pas disparaître toutes les douleurs du dos, qui peuvent avoir d'autres causes. Une décision prise sous la pression d'un partenaire ou de l'entourage expose davantage à la déception.",
            ],
          },
          {
            heading: "Quand la préoccupation devient envahissante",
            paragraphs: [
              "La dysmorphophobie (trouble dysmorphique corporel) est un trouble dans lequel une personne est envahie par une préoccupation pour un défaut physique minime ou peu visible pour les autres. La chirurgie ne la soulage généralement pas. Si cette préoccupation occupe une grande partie de vos pensées ou vous isole, parlez-en à votre médecin traitant. En cas de détresse ou d'idées suicidaires, le 3114 est joignable gratuitement 24 heures sur 24.",
            ],
          },
          {
            heading: "Questions à poser en consultation",
            paragraphs: [],
            bullets: [
              "Êtes-vous qualifié en chirurgie plastique, reconstructrice et esthétique, et combien de réductions mammaires réalisez-vous chaque année ?",
              "Quelle technique et quelle cicatrice proposez-vous dans mon cas, et pourquoi ?",
              "Quel volume prévoyez-vous de retirer, et l'intervention remplit-elle les conditions de prise en charge ?",
              "Que deviendra la sensibilité de mes mamelons, et pourrai-je allaiter ?",
              "Quels examens d'imagerie dois-je faire avant ?",
              "Qui contacter la nuit ou le week-end en cas de problème ?",
              "Que comprend le devis, y compris en cas de complication ou de retouche ?",
            ],
          },
          {
            heading: "Délai de réflexion et second avis",
            paragraphs: [
              "Pour la chirurgie esthétique, la loi impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention (article L6322-2 du Code de la santé publique). Lorsque la réduction est prise en charge pour une hypertrophie, ce délai peut ne pas s'appliquer formellement, mais prendre ce temps reste recommandé. Un second avis est toujours légitime ; vérifiez la qualification du chirurgien sur l'Annuaire santé.",
            ],
          },
        ],
        sources: [LEGIFRANCE_L6322_2, ANNUAIRE_SANTE, SOFCPRE, HAS, { label: "3114 — numéro national de prévention du suicide", url: "https://3114.fr" }],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "breast-reduction",
        kind: "alternatives",
        locale: "fr",
        title: "Alternatives à la réduction mammaire",
        summary:
          "Options autres que la réduction mammaire : perte de poids, kinésithérapie, soutien-gorge adapté, soins de l'intertrigo, liposuccion ou ne rien faire.",
        answer:
          "Selon la gêne ressentie, on peut envisager une perte de poids, de la kinésithérapie, un soutien-gorge adapté, le traitement des irritations sous les seins ou, dans de rares cas, une liposuccion seule. Ces options soulagent sans modifier durablement le volume. Ne rien faire reste un choix légitime.",
        sections: [
          {
            heading: "Ne rien faire",
            paragraphs: [
              "Si la gêne est modérée, vous pouvez choisir de ne pas vous faire opérer et réévaluer la situation plus tard, par exemple après une grossesse ou une évolution de poids. Ce choix n'expose à aucun risque chirurgical.",
            ],
          },
          {
            heading: "Perte de poids encadrée",
            paragraphs: [
              "Lorsque le surpoids contribue au volume des seins, une perte de poids peut réduire la poitrine et les douleurs. Le résultat sur le volume des seins est imprévisible, car la part de glande et de graisse varie d'une personne à l'autre. Un accompagnement par un médecin ou un diététicien est préférable aux régimes restrictifs, qui ont leurs propres risques.",
            ],
          },
          {
            heading: "Kinésithérapie et soutien-gorge adapté",
            paragraphs: [
              "Le renforcement des muscles du dos, le travail de la posture et un soutien-gorge bien ajusté (bonnet adapté, bretelles larges, soutien-gorge de sport) peuvent diminuer les douleurs de la nuque et des épaules. Ces mesures soulagent sans traiter la cause, et leur efficacité varie.",
            ],
          },
          {
            heading: "Soins de l'intertrigo",
            paragraphs: [
              "Les irritations et mycoses du pli sous les seins se traitent par une hygiène adaptée, un séchage soigneux, des textiles absorbants et, si besoin, des traitements antifongiques prescrits par un médecin. Les récidives sont fréquentes tant que le pli reste profond.",
            ],
          },
          {
            heading: "Liposuccion seule",
            paragraphs: [
              "Dans de rares cas, lorsque les seins sont surtout graisseux et que la peau est de bonne qualité, une liposuccion peut réduire le volume avec des cicatrices minimes. Elle ne remonte pas les seins et ne corrige pas la position de l'aréole. Elle comporte ses propres risques (irrégularités, hématome, infection) et rend parfois la surveillance mammaire plus délicate.",
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
        id: "macromastia",
        locale: "fr",
        slug: "hypertrophie-mammaire",
        term: "Hypertrophie mammaire",
        aliases: ["hypertrophies mammaires", "macromastie", "macromasties"],
        definition:
          "L'hypertrophie mammaire désigne des seins d'un volume excessif par rapport à la morphologie de la personne. Elle peut entraîner des douleurs du dos et des épaules, des irritations sous les seins et une gêne dans la vie quotidienne.",
        detail: [
          "Elle peut toucher un seul sein ou les deux, apparaître à la puberté, après une grossesse, une prise de poids ou sous l'effet de certains traitements. Ses formes les plus importantes sont parfois appelées gigantomastie.",
          "Le traitement repose d'abord sur des mesures de soulagement (soutien-gorge adapté, kinésithérapie, perte de poids si besoin, soins de la peau). Lorsque la gêne persiste, une réduction mammaire peut être proposée ; en France, elle peut être prise en charge par l'Assurance maladie sous conditions, notamment de poids de tissu retiré.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "skin-necrosis",
        locale: "fr",
        slug: "necrose-cutanee",
        term: "Nécrose cutanée",
        aliases: ["nécroses cutanées", "necrose cutanee", "necroses cutanees", "nécrose de la peau"],
        definition:
          "La nécrose cutanée est la mort d'une zone de peau, due à un apport sanguin insuffisant. Après une chirurgie, elle touche surtout les zones où la peau a été décollée ou tendue.",
        detail: [
          "Elle se manifeste d'abord par une peau pâle, violacée ou froide, qui peut ensuite noircir et former une croûte. Le tabac, le diabète, l'obésité et une tension importante sur la cicatrice augmentent le risque. Après une réduction ou un lifting mammaire, elle peut toucher l'aréole et le mamelon ; après une abdominoplastie, la peau du bas-ventre.",
          "Une petite nécrose cicatrise le plus souvent avec des soins locaux prolongés, au prix d'une cicatrice plus large. Une nécrose étendue peut nécessiter un nettoyage chirurgical et, parfois, une reconstruction. Tout changement de couleur de la peau ou de l'aréole dans les jours suivant l'intervention doit être signalé sans attendre au chirurgien.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },

  // ═══════════════════════════════ UNITED KINGDOM ═══════════════════════════════
  "en-gb": {
    intervention: {
      id: "breast-reduction",
      locale: "en-gb",
      slug: "breast-reduction",
      category: "breast",
      title: "Breast reduction",
      summary:
        "Breast reduction removes breast tissue and skin to ease the symptoms of large breasts. Techniques, scars, risks, breastfeeding and NHS criteria.",
      description: [
        "Breast reduction (reduction mammaplasty) removes some of the breast tissue, fat and skin, then reshapes the breast and moves the nipple and areola higher. It is mainly for people with macromastia, meaning breasts that are large in proportion to their body and cause physical problems: back, neck and shoulder pain, grooves from bra straps, rashes and infections under the breasts (intertrigo), and difficulty exercising.",
        "There are several techniques. The surgeon chooses a 'pedicle', the strip of tissue that keeps the nipple supplied with blood and nerves (for example superior, superomedial or inferior), and a skin pattern. For very large reductions the nipple and areola may be removed and replaced as a graft (free nipple graft), which means losing nipple sensation and the ability to breastfeed. Liposuction is sometimes added, and in a few carefully selected cases may be used on its own.",
        "Scarring is unavoidable and permanent. Scars go around the areola and down to the crease under the breast (a vertical or 'lollipop' scar), often with a further scar along the crease (an inverted-T or 'anchor' scar). They are red and sometimes raised for several months, then fade over 12 to 18 months, though how well they settle varies from person to person.",
        "The tissue removed is routinely sent for histology (examination under a microscope). Depending on your age and history, you may be asked to have a mammogram or ultrasound before surgery so that an existing problem is not missed. Breast reduction does not replace breast screening, which should continue afterwards as normal.",
        "A breast reduction makes the breasts smaller and lifts them, but it cannot make both breasts identical, does not guarantee that back pain will go (it may have other causes), and does not always preserve the ability to breastfeed. It is not a treatment for being overweight.",
        "Results are usually long-lasting because the tissue removed does not grow back. Breast size and shape can still change with weight gain or loss, pregnancy, breastfeeding, the menopause and natural ageing, which gradually loosens the tissues.",
      ],
      indications: [
        "Large breasts causing back, neck or shoulder pain that persists despite conservative measures.",
        "Recurrent intertrigo: soreness, rashes or fungal infection in the crease under the breasts.",
        "Painful grooves from bra straps, or difficulty exercising or finding clothes that fit.",
        "Distress or self-consciousness about breasts you yourself feel are too large.",
        "Marked difference in size between the two breasts, with one breast enlarged.",
      ],
      contraindications: [
        "Under 18: this platform is for adults only; in teenagers, surgery is a specialist decision usually deferred until breast growth has finished.",
        "Current pregnancy or recent breastfeeding: surgeons usually suggest waiting several months after stopping breastfeeding.",
        "Smoking or nicotine use: it greatly increases the risk of tissue loss and wound problems; you will be asked to stop for several weeks before and after surgery.",
        "Poorly controlled diabetes, high blood pressure or other long-term conditions; a high BMI, which increases complications and may mean weight loss is advised first.",
        "A breast lump or abnormal imaging that has not been investigated.",
        "Unrealistic expectations, such as perfectly matching breasts, no visible scars or certain relief of all back pain.",
        "A request driven by pressure from someone else, or excessive preoccupation with a minor feature that may suggest body dysmorphic disorder.",
      ],
      risks: [
        {
          name: "Pain, swelling and bruising",
          detail:
            "Expected after surgery: moderate pain for the first few days and breasts that feel swollen, tight and bruised. Swelling settles over several weeks; the final shape takes several months to appear.",
        },
        {
          name: "Delayed wound healing and T-junction breakdown",
          detail:
            "Fairly common: the point under the breast where the vertical and horizontal scars meet is the most fragile area. A small opening may need dressings for several weeks; it usually heals without further surgery but can leave a wider scar.",
        },
        {
          name: "Haematoma",
          detail:
            "An uncommon collection of blood in the breast, usually within the first hours or days. A breast that suddenly swells on one side and becomes tight and painful may need a return to theatre.",
        },
        {
          name: "Infection",
          detail:
            "Uncommon. Signs include redness, warmth, increasing pain, discharge or a high temperature. It is treated with antibiotics and sometimes surgical drainage.",
        },
        {
          name: "Fat necrosis",
          detail:
            "Death of small areas of fatty breast tissue, forming one or more firm, sometimes tender lumps weeks or months after surgery. It is benign, but may need imaging or a biopsy to tell it apart from other lumps.",
        },
        {
          name: "Changes in sensation",
          detail:
            "Reduced or increased sensation in the nipples and breast skin is common at first and often improves over months, but can be permanent. A free nipple graft leads to permanent loss of nipple sensation.",
        },
        {
          name: "Reduced ability to breastfeed",
          detail:
            "Some milk-producing tissue and ducts are removed or divided. Breastfeeding may still be possible but is often partial and can never be guaranteed. It is not possible after a free nipple graft.",
        },
        {
          name: "Thick or poor-quality scars",
          detail:
            "Scars can become hypertrophic (red, raised and itchy) or, less often, keloid, and may stretch or change colour. Treatments such as massage, silicone dressings or steroid injections may help; scar revision is only considered once scars have matured, after at least a year.",
        },
        {
          name: "Asymmetry and irregular shape",
          detail:
            "Small differences in size, shape or nipple position are common. Puckered skin at the ends of the horizontal scar ('dog ears') can remain. A revision may be offered later.",
        },
        {
          name: "Nipple or skin necrosis",
          detail:
            "Rare but serious: a poor blood supply can cause partial or, very rarely, complete loss of the nipple and areola, or of an area of skin. The risk is higher with smoking, a high BMI, diabetes and very large reductions. It needs prolonged wound care and sometimes later nipple reconstruction.",
        },
        {
          name: "Deep vein thrombosis and pulmonary embolism",
          detail:
            "Rare but serious. Getting up and walking early and, depending on your individual risk, compression stockings or blood-thinning injections help to prevent them.",
        },
        {
          name: "Risks of general anaesthesia",
          detail:
            "Assessed at your pre-operative assessment by the anaesthetic team, taking into account your health, medicines and previous operations.",
        },
      ],
      procedure: {
        anaesthesia: "General anaesthesia.",
        duration: "Around 2 to 4 hours, depending on the amount removed and the technique.",
        hospitalStay: "Usually one or two nights in hospital; occasionally a day case.",
      },
      recovery: [
        "Days 0 to 2: moderate pain controlled with painkillers; drains may stay in for 24 to 48 hours; you will be encouraged to get up and walk the next day.",
        "Week 1: wear a supportive, non-wired bra day and night; follow dressing instructions; avoid lifting and keeping your arms raised for long.",
        "Weeks 2 to 3: stitches removed or dissolving and a first wound check; many people return to desk-based work after 2 to 3 weeks.",
        "Weeks 3 to 6: continue the support bra, usually for 4 to 6 weeks in total; drive once you can move comfortably and perform an emergency stop.",
        "From around 6 weeks: gradually return to exercise, especially upper-body activities, once your surgeon agrees.",
        "Months 3 to 6: most swelling has gone and the breast shape settles; protect scars from the sun.",
        "12 to 18 months: scars have matured and the result has stabilised; continue routine NHS breast screening when invited.",
      ],
      alternatives: [
        "Doing nothing: a legitimate choice, particularly if symptoms are moderate; you can reconsider later.",
        "Supported weight loss, where excess weight contributes to breast size: it may reduce breast size and pain, but the effect on the breasts is unpredictable.",
        "Physiotherapy, back-strengthening exercises and a professionally fitted bra (wide straps, correct cup size) to ease pain.",
        "Skin care and treatment of intertrigo (keeping the crease clean and dry, antifungal treatment prescribed by a GP or pharmacist).",
        "Liposuction alone in a few selected cases: minimal scarring but limited reduction, with no lift or reshaping.",
      ],
      faq: [
        {
          question: "Does breast reduction hurt?",
          answer:
            "Pain is usually moderate and controlled with the painkillers you are given. Many people describe tightness and discomfort for a few days more than sharp pain. Pain that is getting worse rather than better should be reported to your surgical team.",
        },
        {
          question: "How old do I need to be?",
          answer:
            "Surgeons usually advise waiting until the breasts have stopped developing. Surgery is occasionally considered in a teenager with severe symptoms after specialist assessment, but this platform is only for adults aged 18 and over.",
        },
        {
          question: "Will the scars be noticeable?",
          answer:
            "The scars around the areola, down the breast and often along the crease are permanent. They are usually hidden by a bra or swimwear and fade over 12 to 18 months, but scar quality varies and cannot be predicted with certainty.",
        },
        {
          question: "Will I be able to breastfeed afterwards?",
          answer:
            "Possibly, but it cannot be guaranteed. Depending on the technique and how much tissue is removed, breastfeeding may be possible, partial or not possible. If you are planning a family, discuss this with your surgeon: some people prefer to wait until they have had children.",
        },
        {
          question: "What happens if I get pregnant after surgery?",
          answer:
            "Pregnancy is not unsafe after a breast reduction, but pregnancy and breastfeeding can enlarge and then loosen the breasts, changing the result. Surgeons usually suggest waiting at least several months after surgery.",
        },
        {
          question: "Are the results permanent?",
          answer:
            "The tissue removed does not grow back, so results are usually long-lasting. Breasts can still enlarge with weight gain or pregnancy, and will droop with age.",
        },
        {
          question: "Can I have a breast reduction on the NHS?",
          answer:
            "Sometimes. NHS funding depends on criteria set locally by your integrated care board, often including a BMI below a set level, documented symptoms that have not improved with other measures, and being a non-smoker. Many areas treat it as a procedure of limited clinical value, so your GP may need to make an individual funding request (IFR). Ask your GP what applies where you live.",
        },
        {
          question: "Is there a cooling-off period?",
          answer:
            "There is no legal waiting period in the UK. For private cosmetic procedures, GMC guidance says doctors should give you time to reflect, and a cooling-off period of at least two weeks between consultation and agreeing to surgery is recommended.",
        },
        {
          question: "Which surgeon should I see, and how can I check their qualifications?",
          answer:
            "Breast reduction is carried out by consultant plastic surgeons. Check that the surgeon is on the GMC Specialist Register for plastic surgery using the GMC's online register, and that the hospital or clinic is registered with the CQC in England (or the equivalent regulator in Scotland, Wales or Northern Ireland). Membership of BAPRAS or BAAPS, or RCS cosmetic surgery certification, gives further reassurance but is optional.",
        },
        {
          question: "Do I need a mammogram before surgery?",
          answer:
            "Depending on your age and personal or family history, your surgeon may arrange a mammogram or ultrasound before surgery. The tissue removed is examined under a microscope afterwards; very rarely this finds a change that needs follow-up or treatment.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      {
        interventionId: "breast-reduction",
        kind: "risks",
        locale: "en-gb",
        title: "Breast reduction risks",
        summary:
          "Expected effects, common and rare complications of breast reduction (T-junction breakdown, nipple necrosis, sensation, breastfeeding) and warning signs.",
        answer:
          "Like any operation, breast reduction carries risks. Pain, swelling and bruising are expected; delayed healing where the inverted-T scars meet is fairly common; loss of the nipple and blood clots are rare but serious. Smoking markedly increases several of these risks.",
        sections: [
          {
            heading: "What to expect",
            paragraphs: [
              "Some effects are a normal part of recovery rather than complications. They ease gradually over days and weeks.",
            ],
            bullets: [
              "Pain and tightness in the breasts for the first few days.",
              "Swelling (oedema) and bruising, settling over several weeks.",
              "Breasts that sit high and look slightly square at first, softening and dropping over a few months.",
              "Altered nipple sensation, often temporary.",
              "Some oozing from the wounds in the first few days.",
            ],
          },
          {
            heading: "Common and less common complications",
            paragraphs: [
              "How likely these are depends on the technique, the amount removed, your weight, smoking and other health conditions. Your surgeon can tell you which are most relevant to you.",
            ],
            bullets: [
              "T-junction breakdown: the wound opens where the scars meet under the breast; fairly common and usually managed with dressings.",
              "Haematoma: an uncommon collection of blood that may need a return to theatre.",
              "Infection, treated with antibiotics and sometimes drainage.",
              "Fat necrosis: firm lumps from small areas of dead fatty tissue; benign, but may lead to further tests.",
              "Raised or stretched scars, asymmetry, and puckered skin at the ends of the scar.",
              "Permanent loss of nipple sensation; partial or no ability to breastfeed.",
            ],
          },
          {
            heading: "Rare but serious complications",
            paragraphs: [
              "Necrosis of the nipple and areola, partial or very rarely complete, happens when the blood supply is not sufficient. It is more likely in smokers, people with a high BMI or diabetes, and very large reductions. It needs prolonged wound care and sometimes later nipple reconstruction.",
              "Deep vein thrombosis (a clot in a leg vein) and pulmonary embolism are rare. Serious complications of general anaesthesia are very rare and are assessed at your pre-operative assessment.",
            ],
          },
          {
            heading: "What tissue analysis can show",
            paragraphs: [
              "The tissue removed is examined under a microscope (histology). In the vast majority of cases it is normal. Rarely, it shows a pre-cancerous change or an early cancer, which then needs follow-up or further treatment. You will be told the result at a follow-up appointment.",
            ],
          },
          {
            heading: "When to call straight away",
            paragraphs: [
              "Contact your surgical team urgently if you notice any of these signs; if you cannot reach them, call NHS 111. Call 999 for sudden breathlessness, chest pain, collapse or heavy bleeding.",
            ],
            bullets: [
              "A breast that suddenly swells and becomes tight, hard and painful, especially on one side.",
              "A nipple or area of skin that turns purple, black, cold or very pale.",
              "A high temperature, spreading redness, warmth, or pus or foul-smelling discharge.",
              "Pain, swelling or redness in a calf.",
              "A wound that opens widely or keeps bleeding.",
            ],
          },
          {
            heading: "Factors that increase risk",
            paragraphs: ["Several risk factors can be changed and should be discussed at your consultation."],
            bullets: [
              "Smoking, vaping and any nicotine products: stop for several weeks before and after surgery.",
              "A high BMI and poorly controlled diabetes.",
              "Anticoagulants, aspirin, anti-inflammatory painkillers and some herbal supplements.",
              "A very large reduction.",
              "Previous breast surgery or radiotherapy.",
            ],
          },
        ],
        sources: [NHS, BAPRAS, RCS, NICE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "breast-reduction",
        kind: "cost",
        locale: "en-gb",
        title: "Breast reduction cost",
        summary:
          "What a private breast reduction quote should include, what affects the price, NHS funding criteria and the cost of complications.",
        answer:
          "The cost of a private breast reduction depends on the surgeon, the anaesthetist, the hospital and the length of stay. We do not publish prices: only a written, itemised quote after consultation tells you the amount. The NHS funds breast reduction only when local criteria are met, which often requires an individual funding request.",
        sections: [
          {
            heading: "What a quote should include",
            paragraphs: [
              "Ask for a written, itemised quote and check whether each of these is included or clearly excluded.",
            ],
            bullets: [
              "Surgeon's fee.",
              "Anaesthetist's fee, sometimes billed separately.",
              "Hospital fees: theatre, overnight stay, nursing care.",
              "Pre-operative tests, imaging if needed, and histology of the tissue removed.",
              "Support bra, dressings and medicines to take home.",
              "Follow-up appointments, and who covers out-of-hours care.",
            ],
          },
          {
            heading: "NHS funding",
            paragraphs: [
              "The NHS does not generally fund cosmetic surgery. Breast reduction can be funded for symptoms of macromastia, but criteria are set locally by integrated care boards and vary across the country. They commonly include a BMI below a set threshold, being a non-smoker, documented symptoms that have not improved with other measures, and sometimes a minimum breast size or amount of tissue to be removed.",
              "Breast reduction is often listed among procedures of limited clinical value, so your GP may need to submit an individual funding request (IFR) showing why your case is exceptional. Waiting times can be long. Ask your GP which policy applies in your area.",
            ],
          },
          {
            heading: "What affects the price",
            paragraphs: [],
            bullets: [
              "The technique and length of the operation, which depend on the amount removed.",
              "The hospital, its location and the length of stay.",
              "The surgeon's experience and the anaesthetic used.",
              "Whether liposuction or other procedures are added.",
            ],
          },
          {
            heading: "Complications, revisions and insurance",
            paragraphs: [
              "Treating a complication, such as prolonged dressings or a return to theatre, and a later revision for scars or asymmetry can add cost. Ask in writing what is covered and for how long. Some providers include cover for complications in the price; check exactly what it includes.",
              "If you have private medical insurance, ask your insurer whether breast reduction for symptoms is covered and what evidence they need. If something goes wrong after private surgery, you may still need NHS emergency care.",
            ],
          },
          {
            heading: "Surgery abroad",
            paragraphs: [
              "Lower prices abroad can hide the costs of travel, longer stays and follow-up. Complications may need treatment once you are home, and checking the surgeon's qualifications and the clinic's standards can be harder. BAAPS and BAPRAS advise caution.",
            ],
          },
        ],
        sources: [NHS, GMC, BAAPS, BAPRAS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "breast-reduction",
        kind: "recovery",
        locale: "en-gb",
        title: "Recovery after breast reduction",
        summary:
          "Breast reduction recovery step by step: first days, support bra, returning to work, driving and exercise, and caring for your scars.",
        answer:
          "Most people return to desk-based work 2 to 3 weeks after a breast reduction and to exercise at around 6 weeks. A supportive bra is worn for 4 to 6 weeks. The shape settles over a few months and scars mature over 12 to 18 months.",
        sections: [
          {
            heading: "The first few days",
            paragraphs: [
              "You usually stay in hospital for one or two nights. Drains may stay in for 24 to 48 hours. Pain is moderate and controlled with painkillers; getting up and walking the next day helps prevent blood clots.",
              "Arrange for someone to take you home and help you for the first few days.",
            ],
          },
          {
            heading: "The first weeks",
            paragraphs: [],
            bullets: [
              "Wear a supportive, non-wired bra day and night as advised.",
              "Avoid heavy lifting and holding your arms above your head for several weeks.",
              "Shower as advised by your team; avoid baths and swimming until the wounds have fully healed.",
              "Sleep on your back with your upper body slightly raised.",
              "A wound check usually takes place at one to two weeks.",
            ],
          },
          {
            heading: "Work, driving and exercise",
            paragraphs: [
              "Many people return to desk-based work after 2 to 3 weeks; physical jobs need longer. You can drive once you can move comfortably and perform an emergency stop; check with your insurer.",
              "Walking is encouraged from the start. Running, swimming and upper-body exercise are usually resumed gradually from around 6 weeks, once your surgeon agrees.",
            ],
          },
          {
            heading: "Looking after your scars",
            paragraphs: [
              "Scars are red and sometimes raised for several months. Massage and silicone gel or sheets may be suggested once the skin has healed. Protect scars from the sun for at least a year.",
              "A small opening where the scars meet under the breast is fairly common. It needs regular dressings and usually heals within a few weeks.",
            ],
          },
          {
            heading: "The result over time",
            paragraphs: [
              "Most swelling has gone by 3 months and the breast shape settles between 6 and 12 months. Many people notice relief from back and shoulder pain quite quickly, but this is not guaranteed. Continue to attend NHS breast screening when invited and tell the radiographer about your surgery.",
            ],
          },
          {
            heading: "Signs that need attention",
            paragraphs: [
              "Contact your surgical team if you have a high temperature, a breast that suddenly swells, a nipple that changes colour, discharge from a wound or pain in a calf. Call NHS 111 if you cannot reach them, or 999 for sudden breathlessness or chest pain.",
            ],
          },
        ],
        sources: [NHS, BAPRAS, RCS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "breast-reduction",
        kind: "decision",
        locale: "en-gb",
        title: "Breast reduction: before you decide",
        summary:
          "Deciding on breast reduction: timing, future pregnancy, weight, smoking, questions to ask your surgeon and the recommended two-week cooling-off.",
        answer:
          "Breast reduction is a personal decision, often prompted by long-standing physical symptoms. It is worth thinking about future pregnancies, a stable weight and smoking before going ahead. Take your time: UK professional standards recommend at least two weeks between consultation and agreeing to surgery, and a second opinion is always reasonable.",
        sections: [
          {
            heading: "Is it the right time?",
            paragraphs: [
              "Surgeons usually advise waiting until the breasts have finished developing and your weight has been stable for several months. Losing a lot of weight afterwards can loosen the breasts; gaining weight can enlarge them again.",
              "If you are planning a pregnancy, breastfeeding may be affected and pregnancy can change the result. Some people choose to wait; others with severe symptoms prefer to go ahead first. There is no single right answer: discuss it with your surgeon.",
            ],
          },
          {
            heading: "Your health",
            paragraphs: [
              "Smoking, a high BMI and poorly controlled diabetes greatly increase the risk of tissue loss and wound problems. Your surgeon, or NHS funding criteria, may require you to stop smoking or lose weight before surgery. Depending on your age and history, breast imaging may be arranged.",
            ],
          },
          {
            heading: "Your expectations",
            paragraphs: [
              "A breast reduction makes the breasts lighter and higher, at the cost of permanent scars. It does not make the breasts identical and may not resolve all back pain, which can have other causes. A decision made under pressure from a partner or others is more likely to lead to disappointment.",
            ],
          },
          {
            heading: "Body dysmorphic disorder",
            paragraphs: [
              "Body dysmorphic disorder (BDD) is a mental health condition in which a person spends a lot of time worrying about flaws that others barely notice. Surgery does not usually help and can increase distress. If worries about your appearance take up much of your day or affect your life, speak to your GP. If you are struggling to cope, Samaritans can be reached free on 116 123, day or night.",
            ],
          },
          {
            heading: "Questions to ask your surgeon",
            paragraphs: [],
            bullets: [
              "Are you on the GMC Specialist Register for plastic surgery, and how many breast reductions do you perform each year?",
              "Which technique and scar pattern do you recommend for me, and why?",
              "How much tissue do you expect to remove, and what size am I likely to be?",
              "What will happen to my nipple sensation and ability to breastfeed?",
              "Do I need imaging before surgery?",
              "Is the hospital registered with the CQC, and who looks after me at night or at weekends?",
              "What does the quote include, including complications and revisions?",
            ],
          },
          {
            heading: "Cooling-off and second opinions",
            paragraphs: [
              "There is no statutory waiting period in UK law, but GMC guidance on cosmetic interventions expects doctors to give patients time to reflect, and a cooling-off period of at least two weeks between consultation and agreeing to surgery is recommended. You should meet the operating surgeon, not only an adviser. A second opinion is always reasonable; check the surgeon on the GMC register.",
            ],
          },
        ],
        sources: [GMC, CQC, NHS, RCS, { label: "Samaritans", url: "https://www.samaritans.org" }],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "breast-reduction",
        kind: "alternatives",
        locale: "en-gb",
        title: "Alternatives to breast reduction",
        summary:
          "Options other than breast reduction: weight loss, physiotherapy, a well-fitted bra, treating intertrigo, liposuction alone or doing nothing.",
        answer:
          "Depending on your symptoms, alternatives include weight loss, physiotherapy, a professionally fitted bra, treating skin problems under the breasts or, in a few cases, liposuction alone. Most of these ease symptoms without lasting change to breast size. Doing nothing is a legitimate choice.",
        sections: [
          {
            heading: "Doing nothing",
            paragraphs: [
              "If your symptoms are moderate, you can choose not to have surgery and review the situation later, for example after a pregnancy or a change in weight. This carries no surgical risk.",
            ],
          },
          {
            heading: "Supported weight loss",
            paragraphs: [
              "Where excess weight contributes to breast size, losing weight may reduce breast size and pain. The effect on the breasts is unpredictable because the balance of glandular tissue and fat varies. NHS weight management services or support from your GP are preferable to crash diets, which carry their own risks. Many NHS funding policies also require a BMI below a set level.",
            ],
          },
          {
            heading: "Physiotherapy and a well-fitted bra",
            paragraphs: [
              "Back-strengthening exercises, posture work and a professionally fitted bra with wide straps, or a good sports bra, can ease neck and shoulder pain. These measures relieve symptoms without treating the cause, and how much they help varies.",
            ],
          },
          {
            heading: "Treating intertrigo",
            paragraphs: [
              "Soreness and fungal infection under the breasts are treated by keeping the area clean and dry, wearing breathable fabrics and, if needed, antifungal creams from a pharmacist or GP. The problem often comes back while the crease remains deep.",
            ],
          },
          {
            heading: "Liposuction alone",
            paragraphs: [
              "In a few cases, when the breasts are mainly fatty and the skin is firm, liposuction can reduce size with very small scars. It does not lift the breasts or move the nipple. It has its own risks, including irregularities, haematoma and infection, and is rarely funded by the NHS.",
            ],
          },
        ],
        sources: [NHS, BAPRAS, NICE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "macromastia",
        locale: "en-gb",
        slug: "macromastia",
        term: "Macromastia",
        aliases: ["breast hypertrophy", "mammary hypertrophy"],
        definition:
          "Macromastia means breasts that are excessively large in proportion to the body. It can cause back and shoulder pain, skin problems under the breasts and difficulty with everyday activities.",
        detail: [
          "It can affect one or both breasts and may develop at puberty, after pregnancy, with weight gain or as a side effect of some medicines. The most extreme forms are sometimes called gigantomastia.",
          "Treatment starts with measures to relieve symptoms, such as a well-fitted bra, physiotherapy, weight loss where relevant and skin care. If symptoms persist, breast reduction may be considered; NHS funding depends on local criteria, often including BMI and smoking status.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "skin-necrosis",
        locale: "en-gb",
        slug: "skin-necrosis",
        term: "Skin necrosis",
        aliases: ["cutaneous necrosis", "necrosis of the skin", "skin flap necrosis"],
        definition:
          "Skin necrosis is the death of an area of skin because its blood supply is not sufficient. After surgery it mainly affects skin that has been lifted or stretched.",
        detail: [
          "It first shows as pale, purple or cold skin that may later turn black and form a scab. Smoking, diabetes, a high BMI and tension on the wound increase the risk. After a breast reduction or uplift it can affect the nipple and areola; after a tummy tuck, the skin of the lower abdomen.",
          "A small area usually heals with prolonged dressings, leaving a wider scar. Extensive necrosis may need surgical removal of the dead tissue and sometimes reconstruction. Report any change in skin or nipple colour in the days after surgery to your surgical team straight away.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },
};
