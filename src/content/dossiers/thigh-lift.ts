import type { Source } from "../types";
import type { Dossier } from "./types";

// ─── Sources France ───
const HAS: Source = { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" };
const HAS_BARIATRIQUE: Source = {
  label: "Haute Autorité de santé (HAS) : obésité, chirurgie bariatrique et suivi après amaigrissement massif",
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
const AMELI: Source = { label: "Assurance maladie — ameli.fr (prise en charge, accord préalable)", url: "https://www.ameli.fr" };
const ANNUAIRE_SANTE: Source = {
  label: "Annuaire santé (vérification des professionnels inscrits au RPPS)",
  url: "https://annuaire.sante.fr",
};

// ─── Sources Royaume-Uni ───
const NHS: Source = { label: "NHS: cosmetic procedures, thigh lift and weight-loss surgery", url: "https://www.nhs.uk" };
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
  label: "National Institute for Health and Care Excellence (NICE): obesity management and bariatric surgery",
  url: "https://www.nice.org.uk",
};

const REVIEW = { status: "draft" } as const;
const UPDATED_AT = "2026-10-13";

/** Lifting des cuisses (cruroplastie) : fiche, sous-pages et lexique (fr, en-gb). Brouillon à relire par le comité médical. */
export const dossier: Dossier = {
  // ════════════════════════════════════ FRANCE ════════════════════════════════════
  fr: {
    intervention: {
      id: "thigh-lift",
      locale: "fr",
      slug: "lifting-des-cuisses",
      category: "body",
      title: "Lifting des cuisses (cruroplastie)",
      summary:
        "Le lifting des cuisses retire la peau relâchée, souvent après un amaigrissement : techniques, cicatrices, désunion, lymphocèle et convalescence.",
      description: [
        "Le lifting des cuisses, ou cruroplastie, retire un excédent de peau et de graisse des cuisses, le plus souvent sur leur face interne. Il s'adresse à une peau relâchée qui ne se rétracte plus d'elle-même : après un amaigrissement important (notamment après une chirurgie de l'obésité), avec l'âge ou après des variations de poids répétées. La gêne est esthétique, mais aussi parfois fonctionnelle : frottements, irritations et macération dans les plis, difficulté à s'habiller ou à marcher.",
        "Le lifting interne (ou médial) est le plus fréquent. Quand l'excédent se limite au tiers supérieur de la cuisse, la peau est retirée par une incision horizontale cachée dans le pli de l'aine, qui peut se prolonger vers le pli de la fesse. Quand le relâchement s'étend jusqu'au genou, souvent après une forte perte de poids, une incision verticale le long de la face interne de la cuisse est nécessaire, associée ou non à l'incision de l'aine (cicatrice en « T » ou en « L »).",
        "Le lifting externe (ou latéral) traite la face externe de la cuisse et la région de la « culotte de cheval ». Il passe par une incision au niveau de la hanche, dans la zone couverte par un sous-vêtement. Il est rarement réalisé seul : il fait le plus souvent partie d'un lifting circulaire du bas du corps (body lift), qui traite en même temps le ventre, les hanches et les fesses.",
        "Pour limiter la descente de la cicatrice et la déformation de la région génitale, le chirurgien peut ancrer les tissus en profondeur sur un plan solide de l'aine. Une liposuccion des cuisses est souvent associée, dans le même temps ou lors d'une étape antérieure, pour réduire la graisse avant de retirer la peau.",
        "Le prix à payer est une cicatrice longue, définitive, et une convalescence plus délicate que pour la plupart des interventions de la silhouette. La région de l'aine, humide et soumise à des tensions à chaque mouvement, expose à des problèmes de cicatrisation, notamment à une désunion des berges. L'intervention ne fait pas maigrir, ne supprime ni la cellulite ni toutes les vergetures, et le vieillissement naturel de la peau se poursuit.",
      ],
      indications: [
        "Excédent de peau des cuisses, surtout à la face interne, qui ne s'est pas rétracté après un amaigrissement.",
        "Après une chirurgie de l'obésité (bariatrique) : en général au moins 12 à 18 mois après l'opération, avec un poids stable depuis plusieurs mois.",
        "Poids stable, proche de l'objectif que vous pouvez maintenir.",
        "Gêne fonctionnelle (frottements, irritations, infections cutanées dans les plis) ou gêne esthétique, exprimée par la personne elle-même.",
        "Relâchement modéré lié à l'âge ou à des variations de poids, pour un lifting limité au pli de l'aine.",
        "Dans le cadre d'un programme de chirurgie après amaigrissement massif, en complément d'une abdominoplastie, d'un lifting des bras ou d'un lifting circulaire.",
      ],
      contraindications: [
        "Perte de poids encore en cours ou poids instable : le résultat serait imprévisible et la peau risquerait de se relâcher à nouveau.",
        "Obésité importante non stabilisée, qui augmente nettement les risques de complications.",
        "Carences nutritionnelles non corrigées (protéines, fer, vitamines), fréquentes après une chirurgie bariatrique, qui gênent la cicatrisation.",
        "Tabagisme actif : il multiplie les risques de désunion et de nécrose de la peau ; un arrêt de plusieurs semaines avant et après est demandé.",
        "Troubles de la circulation des jambes non évalués : insuffisance veineuse importante, antécédents de lymphœdème ou de thrombose.",
        "Diabète, maladies cardiaques ou respiratoires et autres maladies chroniques non équilibrées.",
        "Attentes irréalistes, refus d'une cicatrice longue ou demande motivée par la pression d'un tiers.",
        "Grossesse ou allaitement en cours, ou projet de grossesse proche.",
      ],
      risks: [
        {
          name: "Douleurs, œdème et ecchymoses",
          detail:
            "Fréquents et attendus : tiraillements à la marche et en position assise, gonflement des cuisses et parfois des chevilles, bleus. L'œdème des jambes peut persister plusieurs mois.",
        },
        {
          name: "Désunion des cicatrices",
          detail:
            "Fréquente, surtout dans le pli de l'aine et à la jonction des incisions en « T » : la plaie s'ouvre partiellement sur quelques millimètres ou centimètres, sous l'effet de la tension, de l'humidité et des mouvements. Elle cicatrise le plus souvent avec des soins locaux pendant plusieurs semaines, mais peut laisser une cicatrice plus large et nécessite parfois une reprise.",
        },
        {
          name: "Sérome et lymphocèle",
          detail:
            "Accumulation de liquide sous la peau, assez fréquente après un lifting des cuisses. Lorsque des vaisseaux lymphatiques de l'aine ont été lésés, il peut s'agir d'une lymphocèle, plus persistante, qui nécessite parfois des ponctions répétées, un drainage ou une reprise chirurgicale.",
        },
        {
          name: "Migration et élargissement de la cicatrice",
          detail:
            "La cicatrice de l'aine peut descendre avec le temps et devenir visible sous le sous-vêtement ; la cicatrice verticale peut s'élargir ou s'épaissir. Un ancrage profond des tissus vise à limiter ce risque, sans le supprimer. Les cicatrices mettent 12 à 18 mois à mûrir et restent visibles.",
        },
        {
          name: "Déformation de la région génitale",
          detail:
            "Chez la femme, la tension sur la cicatrice de l'aine peut écarter ou déformer les grandes lèvres de la vulve ; cela peut être gênant et nécessiter une correction.",
        },
        {
          name: "Infection",
          detail:
            "Plus fréquente qu'après d'autres interventions en raison de la proximité de la région génitale et de l'humidité du pli ; le plus souvent traitée par soins locaux et antibiotiques, parfois par un drainage.",
        },
        {
          name: "Hématome et nécrose cutanée",
          detail:
            "Un hématome (collection de sang) peut nécessiter une reprise au bloc. Une souffrance de la peau des berges, favorisée par le tabac et la tension, peut évoluer vers une nécrose (mort de la peau) nécessitant des soins prolongés.",
        },
        {
          name: "Lymphœdème",
          detail:
            "Rare : gonflement durable de la jambe lié à une perturbation de la circulation lymphatique. Il peut nécessiter une compression au long cours et une prise en charge spécialisée.",
        },
        {
          name: "Troubles de la sensibilité",
          detail:
            "Engourdissement de la face interne de la cuisse, parfois jusqu'au genou, par atteinte de petits nerfs cutanés ; le plus souvent transitoire sur plusieurs mois, parfois définitif.",
        },
        {
          name: "Asymétrie, récidive du relâchement et irrégularités",
          detail:
            "Différence entre les deux côtés, excédent de peau résiduel près du genou ou réapparition d'un relâchement, notamment en cas de reprise ou de nouvelle perte de poids. Une retouche peut être discutée après stabilisation.",
        },
        {
          name: "Thrombose veineuse et embolie pulmonaire",
          detail:
            "Rares mais graves. Le risque est accru par la chirurgie des membres inférieurs, la durée de l'intervention, l'association de gestes et l'antécédent d'obésité. Il est prévenu par un lever précoce, des bas de contention et le plus souvent un traitement anticoagulant.",
        },
        {
          name: "Risques liés à l'anesthésie",
          detail: "À évaluer lors de la consultation d'anesthésie obligatoire.",
        },
      ],
      procedure: {
        anaesthesia: "Anesthésie générale.",
        duration:
          "Environ 2 à 4 heures selon la technique (lifting limité à l'aine ou lifting vertical) et les gestes associés.",
        hospitalStay:
          "Le plus souvent une à deux nuits d'hospitalisation ; une sortie le jour même est parfois possible pour un lifting limité.",
      },
      recovery: [
        "Jours 1 à 3 : lever et marche dès le lendemain, à petits pas ; drains éventuels retirés en quelques jours ; tiraillements à la marche et en position assise, antalgiques prescrits.",
        "Panty de compression porté jour et nuit en général 4 à 6 semaines, avec des bas de contention et souvent des injections d'anticoagulant.",
        "Semaines 1 à 2 : éviter d'écarter les jambes, de s'accroupir et de rester longtemps assis ; hygiène soigneuse du pli de l'aine, douche selon les consignes.",
        "Semaines 2 à 3 : reprise d'une activité de bureau possible pour beaucoup, plus tard pour un travail physique ou debout prolongé ; surveillance attentive des cicatrices.",
        "Semaines 3 à 6 : petites désunions fréquentes, traitées par soins locaux ; ponctions possibles en cas de sérome.",
        "Après 6 semaines : reprise progressive du sport, avec l'accord du chirurgien ; natation après cicatrisation complète.",
        "L'œdème des jambes peut persister plusieurs mois ; drainage lymphatique parfois conseillé.",
        "Cicatrices rouges puis pâlissant en 12 à 18 mois ; protection solaire stricte pendant cette période.",
      ],
      alternatives: [
        "Ne rien faire : une option légitime, à reconsidérer après un temps de réflexion.",
        "Liposuccion seule, si la peau est encore élastique et que l'excès est surtout graisseux : cicatrices minimes, mais elle ne retire pas la peau relâchée.",
        "Techniques non chirurgicales de raffermissement (radiofréquence, ultrasons focalisés) : effet modeste, réservé aux relâchements légers, plusieurs séances et risques propres (brûlures).",
        "Activité physique et renforcement musculaire : améliorent la tonicité mais ne font pas disparaître un excédent de peau.",
        "Lifting circulaire du bas du corps (body lift), si le relâchement concerne aussi le ventre, les hanches et les fesses.",
      ],
      faq: [
        {
          question: "Quelle est la différence entre lifting interne et lifting externe des cuisses ?",
          answer:
            "Le lifting interne traite la face interne des cuisses, par une cicatrice dans le pli de l'aine et, si le relâchement descend jusqu'au genou, une cicatrice verticale à l'intérieur de la cuisse. Le lifting externe traite la face externe et la culotte de cheval par une incision à la hanche ; il est le plus souvent réalisé dans le cadre d'un lifting circulaire du bas du corps.",
        },
        {
          question: "Où se situe la cicatrice et sera-t-elle visible ?",
          answer:
            "Elle se situe dans le pli de l'aine pour un lifting limité, et le long de la face interne de la cuisse en cas de lifting vertical. Elle est définitive, met 12 à 18 mois à s'atténuer et peut descendre ou s'élargir. Une cicatrice verticale reste visible en short ou en maillot ; c'est un compromis à accepter avant de se décider.",
        },
        {
          question: "Combien de temps après une chirurgie de l'obésité peut-on envisager un lifting des cuisses ?",
          answer:
            "En général au moins 12 à 18 mois après l'intervention bariatrique, une fois le poids stabilisé depuis plusieurs mois et les éventuelles carences nutritionnelles corrigées. Le chirurgien plasticien travaille idéalement en lien avec l'équipe qui assure votre suivi de l'obésité.",
        },
        {
          question: "Pourquoi les cicatrices s'ouvrent-elles parfois ?",
          answer:
            "Le pli de l'aine est une zone humide, proche de la région génitale, mise en tension à chaque pas et en position assise. Une désunion partielle est donc fréquente. Elle se soigne le plus souvent par des pansements pendant quelques semaines ; elle peut laisser une cicatrice plus large. Le tabac, le surpoids et les carences augmentent ce risque.",
        },
        {
          question: "Qu'est-ce qu'une lymphocèle ?",
          answer:
            "C'est une poche de lymphe qui se forme sous la peau lorsque des vaisseaux lymphatiques de l'aine ont été lésés. Elle se traduit par un gonflement souple, parfois persistant, qui peut nécessiter des ponctions répétées ou une reprise chirurgicale. Une dissection prudente de l'aine vise à en limiter le risque.",
        },
        {
          question: "Est-ce douloureux ?",
          answer:
            "Les premiers jours sont marqués par des tiraillements, surtout en marchant, en s'asseyant et en écartant les jambes. Les douleurs sont en général contrôlées par les antalgiques prescrits. Une douleur qui augmente, un mollet douloureux ou une fièvre doivent être signalés au chirurgien.",
        },
        {
          question: "Le lifting des cuisses est-il remboursé ?",
          answer:
            "Pas lorsqu'il est réalisé à visée esthétique. Après un amaigrissement massif, une prise en charge peut être discutée lorsque l'excédent de peau entraîne une gêne fonctionnelle documentée ; elle n'est pas systématique et suppose une demande d'accord préalable auprès de l'Assurance maladie.",
        },
        {
          question: "Quel est le délai entre la consultation et l'intervention ?",
          answer:
            "En France, pour une intervention à visée esthétique, la loi impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention, et aucun paiement autre que la consultation ne peut être exigé avant. Une consultation d'anesthésie est obligatoire.",
        },
        {
          question: "Quel chirurgien consulter ?",
          answer:
            "Un chirurgien qualifié en chirurgie plastique, reconstructrice et esthétique, opérant dans un établissement autorisé par l'ARS, idéalement habitué à la chirurgie après amaigrissement massif. Vous pouvez vérifier son inscription et sa qualification sur l'Annuaire santé.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risques ──
      {
        interventionId: "thigh-lift",
        kind: "risks",
        locale: "fr",
        title: "Lifting des cuisses : les risques",
        summary:
          "Désunion, sérome, lymphocèle, migration de cicatrice, thrombose : les risques du lifting des cuisses et les signes qui doivent faire appeler.",
        answer:
          "Le lifting des cuisses a un taux de complications plus élevé que beaucoup d'interventions de la silhouette, surtout après un amaigrissement massif. Douleurs, œdème et tiraillements sont attendus ; désunion des cicatrices, sérome et lymphocèle sont fréquents ; migration ou élargissement de la cicatrice et déformation de la région génitale sont possibles. Thrombose et embolie pulmonaire sont rares mais graves.",
        sections: [
          {
            heading: "Les suites fréquentes et attendues",
            paragraphs: [
              "Ces manifestations sont des suites normales de l'intervention. Elles diminuent progressivement en quelques semaines.",
            ],
            bullets: [
              "Tiraillements et douleurs à la marche, en position assise et en écartant les jambes.",
              "Gonflement des cuisses, des genoux et parfois des chevilles, qui peut durer plusieurs mois.",
              "Ecchymoses à la face interne des cuisses et parfois dans la région génitale.",
              "Écoulement par les drains ou les cicatrices les premiers jours.",
              "Engourdissement de la peau de la face interne de la cuisse.",
              "Cicatrices rouges et épaisses pendant plusieurs mois avant de s'atténuer.",
            ],
          },
          {
            heading: "Les complications fréquentes propres au lifting des cuisses",
            paragraphs: [
              "La région de l'aine cumule les facteurs défavorables à la cicatrisation : humidité, proximité de la région génitale, tension à chaque mouvement et riche réseau de vaisseaux lymphatiques.",
            ],
            bullets: [
              "Désunion des cicatrices : ouverture partielle de la plaie, surtout dans le pli de l'aine ou au croisement des incisions en « T », traitée le plus souvent par pansements pendant quelques semaines.",
              "Sérome : accumulation de liquide sous la peau, nécessitant parfois des ponctions.",
              "Lymphocèle : poche de lymphe liée à une lésion des vaisseaux lymphatiques de l'aine, plus persistante, pouvant nécessiter des ponctions répétées ou une reprise.",
              "Infection de la cicatrice, favorisée par la macération dans le pli.",
              "Migration de la cicatrice de l'aine vers le bas et élargissement des cicatrices.",
              "Déformation ou écartement des grandes lèvres chez la femme, par traction sur la cicatrice.",
            ],
          },
          {
            heading: "Les complications moins fréquentes",
            paragraphs: [
              "Leur fréquence dépend de la technique, de l'étendue du lifting, de la qualité des tissus et de votre état de santé.",
            ],
            bullets: [
              "Hématome, nécessitant parfois une reprise au bloc opératoire.",
              "Souffrance ou nécrose de la peau des berges, surtout chez les fumeurs.",
              "Cicatrices hypertrophiques ou chéloïdes.",
              "Asymétrie, excédent de peau résiduel près du genou ou récidive du relâchement.",
              "Engourdissement persistant de la face interne de la cuisse.",
              "Lymphœdème : gonflement durable de la jambe, rare, nécessitant une compression au long cours.",
            ],
          },
          {
            heading: "Les complications rares mais graves",
            paragraphs: [
              "La thrombose veineuse profonde (caillot dans une veine de la jambe) peut se compliquer d'embolie pulmonaire. Le lifting des cuisses cumule plusieurs facteurs de risque : chirurgie des membres inférieurs, mobilité réduite les premiers jours, antécédent d'obésité, durée de l'intervention et association fréquente avec d'autres gestes. Une prévention par lever précoce, bas de contention et, le plus souvent, injections d'anticoagulant est donc systématiquement discutée.",
              "Une infection sévère, exceptionnelle, peut s'étendre rapidement et impose une prise en charge urgente.",
            ],
          },
          {
            heading: "Quand appeler sans attendre",
            paragraphs: [
              "Contactez rapidement le chirurgien ou l'équipe qui vous a opéré en cas de signe inhabituel. En cas d'essoufflement, de douleur dans la poitrine ou de malaise, appelez le 15 (SAMU) ou le 112.",
            ],
            bullets: [
              "Essoufflement brutal, douleur thoracique, toux avec crachats sanglants, palpitations.",
              "Mollet douloureux, chaud ou gonflé d'un seul côté.",
              "Fièvre, frissons, rougeur qui s'étend, écoulement purulent ou malodorant.",
              "Gonflement rapide, tendu et douloureux d'une cuisse ou de l'aine.",
              "Cicatrice qui s'ouvre largement ou peau qui noircit sur les berges.",
              "Douleur qui augmente au lieu de diminuer.",
            ],
          },
          {
            heading: "Les facteurs qui augmentent les risques",
            paragraphs: ["Certains facteurs sont modifiables et doivent être discutés en consultation."],
            bullets: [
              "Tabac, y compris la cigarette électronique et les substituts nicotiniques selon les consignes du chirurgien.",
              "Indice de masse corporelle encore élevé, poids instable.",
              "Carences nutritionnelles après une chirurgie bariatrique (protéines, fer, vitamines).",
              "Diabète, insuffisance veineuse, antécédents de thrombose.",
              "Lifting vertical étendu, association avec d'autres interventions dans le même temps.",
              "Contraception œstroprogestative ou traitement hormonal (risque de thrombose).",
            ],
          },
          {
            heading: "Retouches",
            paragraphs: [
              "Une cicatrice élargie ou descendue, un excédent de peau résiduel ou une asymétrie peuvent justifier une retouche, en général sous anesthésie locale ou générale. Elle n'est envisagée qu'après stabilisation, souvent au moins 6 à 12 mois après l'intervention. Demandez avant de vous engager quelles conditions sont prévues, y compris sur le plan financier.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFAR, HAS_BARIATRIQUE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Prix ──
      {
        interventionId: "thigh-lift",
        kind: "cost",
        locale: "fr",
        title: "Prix d'un lifting des cuisses",
        summary:
          "Ce que contient un devis de lifting des cuisses, ce qui fait varier le prix, règles françaises et prise en charge possible après amaigrissement massif.",
        answer:
          "Le coût d'un lifting des cuisses dépend surtout de la technique (lifting limité à l'aine ou lifting vertical), d'une liposuccion associée, de la durée d'hospitalisation et de l'établissement. Nous n'indiquons pas de fourchette de prix : seul un devis détaillé et daté, remis après consultation, permet de connaître le montant. Une prise en charge partielle est parfois possible après un amaigrissement massif, sur accord préalable.",
        sections: [
          {
            heading: "Ce que contient un devis",
            paragraphs: [
              "En France, un devis détaillé et daté doit être remis avant toute intervention de chirurgie esthétique. Vérifiez qu'il précise les postes suivants, ou ceux qui n'y figurent pas.",
            ],
            bullets: [
              "Honoraires du chirurgien, avec la technique prévue (lifting interne, vertical, externe) et les gestes associés.",
              "Honoraires de l'anesthésiste.",
              "Frais de l'établissement : bloc opératoire, nuits d'hospitalisation, chambre particulière éventuelle.",
              "Panty de compression, bas de contention, injections d'anticoagulant, pansements et médicaments.",
              "Examens préopératoires et bilan nutritionnel éventuel.",
              "Consultations de suivi, soins infirmiers à domicile et conditions prévues en cas de retouche ou de complication.",
            ],
          },
          {
            heading: "Ce qui fait varier le prix",
            paragraphs: [
              "L'étendue du lifting (pli de l'aine seul ou cicatrice verticale jusqu'au genou), l'association avec une liposuccion, avec un lifting externe ou avec d'autres interventions, la durée de l'intervention, le nombre de nuits d'hospitalisation et le type d'établissement pèsent sur le devis.",
              "Il faut aussi prévoir des frais indirects : soins infirmiers pour les pansements, éventuel arrêt de travail prolongé en cas de désunion, vêtements de compression de rechange.",
            ],
          },
          {
            heading: "Les règles applicables en France",
            paragraphs: [
              "Pour une intervention à visée esthétique, le Code de la santé publique (article L6322-2) impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention. Aucune somme autre que les honoraires de consultation ne peut être exigée avant la fin de ce délai.",
              "Les actes à visée purement esthétique sont soumis à la TVA. L'intervention doit avoir lieu dans un établissement autorisé par l'ARS, et une consultation d'anesthésie préalable est obligatoire.",
            ],
          },
          {
            heading: "Quand l'Assurance maladie peut intervenir",
            paragraphs: [
              "Un lifting des cuisses réalisé pour des raisons esthétiques n'est pas pris en charge. Après un amaigrissement massif, notamment après une chirurgie bariatrique, une prise en charge peut être discutée lorsque l'excédent de peau entraîne une gêne fonctionnelle documentée (irritations, infections cutanées récidivantes, gêne à la marche). Elle n'est pas systématique et suppose une demande d'accord préalable adressée par le chirurgien au service médical de l'Assurance maladie.",
              "Même en cas d'accord, des dépassements d'honoraires restent possibles selon le secteur du chirurgien et l'établissement, et votre complémentaire santé ne les couvre pas toujours. Demandez un devis qui distingue clairement la part prise en charge et la part restant à votre charge.",
            ],
          },
          {
            heading: "Le coût des complications et des retouches",
            paragraphs: [
              "Une désunion des cicatrices, un sérome ou une lymphocèle peuvent nécessiter des semaines de soins infirmiers, des ponctions ou une reprise chirurgicale, avec un arrêt de travail plus long. Renseignez-vous sur ce qui serait facturé et sur l'existence d'une assurance couvrant les complications.",
              "Méfiez-vous des pressions à décider vite, des acomptes demandés avant la fin du délai légal, des crédits proposés en consultation et des prix très bas sans détail des postes.",
            ],
          },
        ],
        sources: [LEGIFRANCE_L6322_2, AMELI, ANNUAIRE_SANTE, SOFCPRE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Convalescence ──
      {
        interventionId: "thigh-lift",
        kind: "recovery",
        locale: "fr",
        title: "Convalescence après un lifting des cuisses",
        summary:
          "Après un lifting des cuisses : hospitalisation, position assise, panty de compression, soins des cicatrices, reprise du travail et du sport, signes d'alerte.",
        answer:
          "La convalescence est plus délicate que pour la plupart des chirurgies de la silhouette. Il faut éviter d'écarter les jambes et de rester longtemps assis les premières semaines, porter un panty de compression 4 à 6 semaines et surveiller de près les cicatrices de l'aine. Une activité de bureau reprend souvent après 2 à 3 semaines, le sport après 6 semaines. Les consignes de votre chirurgien priment sur ces repères.",
        sections: [
          {
            heading: "À l'hôpital et les premiers jours",
            paragraphs: [
              "L'hospitalisation dure le plus souvent une à deux nuits. Des drains peuvent être laissés en place quelques jours. Le lever et la marche à petits pas sont encouragés dès le lendemain pour limiter le risque de thrombose.",
            ],
            bullets: [
              "Prendre les antalgiques et les injections d'anticoagulant prescrits.",
              "Porter le panty de compression et les bas de contention.",
              "Éviter d'écarter les jambes, de s'accroupir et de monter de grandes marches.",
              "Prévoir une personne pour le retour à domicile et les premiers jours.",
            ],
          },
          {
            heading: "Semaine par semaine",
            paragraphs: [],
            bullets: [
              "Semaine 1 : tiraillements importants, position assise inconfortable ; alterner marche et repos allongé, jambes légèrement surélevées.",
              "Semaine 2 : les douleurs diminuent ; soins des cicatrices par infirmier ou selon les consignes ; retrait des fils ou agrafes si nécessaire.",
              "Semaines 2 à 3 : reprise d'une activité de bureau possible pour beaucoup ; trajets longs en voiture ou en avion à discuter (risque de thrombose).",
              "Semaines 3 à 6 : petites désunions fréquentes dans le pli de l'aine, à faire voir à l'équipe ; ponctions possibles en cas de sérome.",
              "Après 6 semaines : arrêt progressif du panty selon les consignes ; reprise du sport en douceur, natation après cicatrisation complète.",
              "Mois 3 à 18 : l'œdème disparaît lentement, les cicatrices pâlissent et s'assouplissent.",
            ],
          },
          {
            heading: "Prendre soin des cicatrices",
            paragraphs: [
              "Le pli de l'aine doit rester propre et sec : douche selon les consignes, séchage soigneux en tamponnant, sous-vêtements en coton. Une fois la cicatrisation acquise, le chirurgien peut conseiller des massages, des pansements siliconés ou une crème cicatrisante.",
              "Évitez l'exposition des cicatrices au soleil pendant au moins 12 mois. Une cicatrice qui s'élargit, s'épaissit ou démange fortement doit être montrée au chirurgien.",
            ],
          },
          {
            heading: "Reprise du travail et des activités",
            paragraphs: [],
            bullets: [
              "Travail de bureau : souvent après 2 à 3 semaines.",
              "Travail physique ou debout prolongé : en général après 4 à 6 semaines.",
              "Conduite : lorsque les mouvements des jambes ne sont plus gênés et sans antalgiques sédatifs.",
              "Rapports sexuels : à reprendre prudemment, selon l'état des cicatrices de l'aine.",
              "Sport intensif, vélo, équitation : en général après 6 à 8 semaines, avec l'accord du chirurgien.",
            ],
          },
          {
            heading: "Signes qui doivent faire appeler",
            paragraphs: [
              "Contactez le chirurgien en cas de fièvre, de rougeur qui s'étend, d'écoulement purulent, de cicatrice qui s'ouvre largement, de gonflement rapide d'une cuisse ou de mollet douloureux. En cas d'essoufflement ou de douleur thoracique, appelez le 15 ou le 112.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Avant de se décider ──
      {
        interventionId: "thigh-lift",
        kind: "decision",
        locale: "fr",
        title: "Lifting des cuisses : avant de se décider",
        summary:
          "Lifting des cuisses : poids stable, chirurgie bariatrique, cicatrice à accepter, dysmorphophobie, questions à poser et délai légal de 15 jours.",
        answer:
          "Le lifting des cuisses s'envisage chez un adulte au poids stable, en bonne santé, qui accepte une cicatrice longue et une convalescence exigeante. Après une chirurgie de l'obésité, il faut en général attendre 12 à 18 mois et corriger les carences. En France, un délai minimal de 15 jours sépare la remise du devis de l'intervention esthétique : prenez ce temps, et un second avis si vous le souhaitez.",
        sections: [
          {
            heading: "Est-ce le bon moment ?",
            paragraphs: [
              "Votre poids devrait être stable depuis plusieurs mois, à un niveau que vous pouvez maintenir. Une perte de poids en cours expose à un nouveau relâchement de la peau ; une prise de poids ultérieure peut élargir les cicatrices.",
              "Après une chirurgie bariatrique, l'équipe qui vous suit peut confirmer que le poids est stabilisé et que votre bilan nutritionnel est correct. Une grossesse future peut modifier le résultat. La chirurgie esthétique est réservée aux adultes.",
            ],
          },
          {
            heading: "Accepter la cicatrice",
            paragraphs: [
              "Le lifting des cuisses échange un excédent de peau contre une cicatrice. Celle de l'aine se cache en général dans un sous-vêtement, mais peut descendre avec le temps. Celle d'un lifting vertical reste visible en short ou en maillot. Demandez à voir des photos de cicatrices à un an chez des patients du chirurgien, et à quoi ressemblerait la vôtre.",
              "Si vous envisagez plusieurs interventions après un amaigrissement (ventre, bras, poitrine, cuisses), le chirurgien vous proposera un ordre et un intervalle entre les étapes : il n'est en général pas raisonnable de tout faire en une fois.",
            ],
          },
          {
            heading: "Votre motivation et la dysmorphophobie",
            paragraphs: [
              "Demandez-vous ce qui vous gêne précisément, depuis combien de temps, et ce que vous attendez de l'intervention. Après un amaigrissement important, l'image du corps peut mettre du temps à s'ajuster ; en parler avec votre médecin ou un psychologue peut aider.",
              "Certaines personnes souffrent d'une préoccupation envahissante pour un défaut que les autres remarquent à peine : c'est le trouble dysmorphique corporel, ou dysmorphophobie. La chirurgie ne le soulage pas et peut aggraver la détresse. Si vous vous reconnaissez dans cette description, parlez-en à votre médecin traitant ; des traitements efficaces existent. En cas d'idées suicidaires, le 3114 répond jour et nuit.",
            ],
          },
          {
            heading: "Questions à poser en consultation",
            paragraphs: [],
            bullets: [
              "Êtes-vous qualifié en chirurgie plastique, reconstructrice et esthétique, et pratiquez-vous souvent la chirurgie après amaigrissement massif ? (vérifiable sur l'Annuaire santé)",
              "Lifting limité à l'aine ou lifting vertical : lequel me proposez-vous, et où passera exactement la cicatrice ?",
              "Comment limitez-vous la migration de la cicatrice et la déformation de la région génitale ?",
              "Quel est le risque de désunion, de sérome ou de lymphocèle dans mon cas, et comment sont-ils pris en charge ?",
              "Faut-il associer une liposuccion, et en même temps ou avant ?",
              "Comment prévenez-vous la thrombose, et qui joindre la nuit ou le week-end en cas de problème ?",
              "Une demande d'accord préalable est-elle envisageable, et que comprend le devis en cas de retouche ou de complication ?",
            ],
          },
          {
            heading: "Le délai de réflexion et le second avis",
            paragraphs: [
              "Pour une intervention esthétique, le Code de la santé publique impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention, et aucun paiement autre que la consultation ne peut être exigé avant. Ce délai est un minimum : rien ne vous oblige à décider à son terme. Demander un second avis est toujours légitime.",
            ],
          },
        ],
        sources: [
          LEGIFRANCE_L6322_2,
          HAS_BARIATRIQUE,
          ANNUAIRE_SANTE,
          SOFCPRE,
          { label: "3114 — numéro national de prévention du suicide", url: "https://3114.fr" },
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Alternatives ──
      {
        interventionId: "thigh-lift",
        kind: "alternatives",
        locale: "fr",
        title: "Alternatives au lifting des cuisses",
        summary:
          "Liposuccion, techniques de raffermissement, sport, lifting circulaire ou ne rien faire : alternatives au lifting des cuisses, limites et risques.",
        answer:
          "Selon la situation, les alternatives sont la liposuccion seule si la peau est encore élastique, les techniques non chirurgicales de raffermissement pour un relâchement léger, l'activité physique, un lifting circulaire si le relâchement est plus global, ou ne rien faire. Aucune technique sans cicatrice ne retire un excédent de peau important.",
        sections: [
          {
            heading: "Liposuccion seule",
            paragraphs: [
              "Si l'excès est surtout graisseux et que la peau est encore élastique, une liposuccion peut suffire, avec de petites cicatrices. Elle ne retire pas la peau : en cas de relâchement marqué, elle peut au contraire le rendre plus visible. Elle est souvent associée au lifting plutôt que proposée à sa place.",
            ],
          },
          {
            heading: "Techniques non chirurgicales de raffermissement",
            paragraphs: [
              "La radiofréquence, les ultrasons focalisés ou certains lasers chauffent la peau pour stimuler sa rétraction. L'effet est modeste, progressif, nécessite souvent plusieurs séances et ne concerne que les relâchements légers. Les risques comprennent brûlures, douleurs et pigmentation ; ces techniques doivent être réalisées sous responsabilité médicale.",
            ],
          },
          {
            heading: "Activité physique et prise en charge de la peau",
            paragraphs: [
              "Le renforcement musculaire améliore la tonicité et la silhouette, mais ne fait pas disparaître un excédent de peau. En cas d'irritations ou de macération dans les plis, des soins de peau adaptés, des vêtements de contention ou anti-frottements et l'avis d'un médecin ou d'un dermatologue peuvent soulager.",
            ],
          },
          {
            heading: "Lifting circulaire et chirurgies associées",
            paragraphs: [
              "Si le relâchement concerne aussi le ventre, les hanches et les fesses, un lifting circulaire du bas du corps (body lift) traite ces zones en une intervention, avec une cicatrice qui fait le tour de la taille et une convalescence plus lourde. Le lifting interne des cuisses peut lui être associé ou réalisé lors d'une seconde étape.",
            ],
          },
          {
            heading: "Ne rien faire",
            paragraphs: [
              "Choisir de ne pas intervenir est une option légitime, en particulier si la cicatrice vous paraît plus gênante que l'excédent de peau. La réflexion peut être reprise plus tard sans conséquence médicale.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, HAS_BARIATRIQUE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "cruroplasty",
        locale: "fr",
        slug: "cruroplastie",
        term: "Cruroplastie",
        aliases: [
          "cruroplasties",
          "lifting des cuisses",
          "lifting de cuisses",
          "lifting interne des cuisses",
          "lifting crural",
          "dermolipectomie des cuisses",
        ],
        definition:
          "La cruroplastie est le nom médical du lifting des cuisses. Elle consiste à retirer un excédent de peau et de graisse des cuisses, le plus souvent à leur face interne.",
        detail: [
          "Dans sa forme limitée, la cicatrice est cachée dans le pli de l'aine. Lorsque le relâchement s'étend jusqu'au genou, souvent après un amaigrissement massif, une cicatrice verticale le long de la face interne de la cuisse est nécessaire.",
          "Le chirurgien peut ancrer les tissus en profondeur sur un plan solide de l'aine pour limiter la descente de la cicatrice et la déformation de la région génitale. Une liposuccion est souvent associée.",
          "Les complications les plus fréquentes sont la désunion des cicatrices, le sérome et la lymphocèle. Le lifting de la face externe des cuisses fait le plus souvent partie d'un lifting circulaire du bas du corps.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "lymphocele",
        locale: "fr",
        slug: "lymphocele",
        term: "Lymphocèle",
        aliases: ["lymphocèles", "lymphocele", "lymphoceles", "collection lymphatique", "épanchement lymphatique"],
        definition:
          "Une lymphocèle est une poche de lymphe qui se forme sous la peau après une lésion de vaisseaux lymphatiques pendant une intervention. Elle se manifeste par un gonflement souple, parfois persistant.",
        detail: [
          "La lymphe est le liquide clair qui circule dans les vaisseaux lymphatiques et rejoint les ganglions. Les zones riches en vaisseaux lymphatiques, comme l'aine, y exposent particulièrement : c'est une complication connue du lifting des cuisses.",
          "Proche du sérome, la lymphocèle a tendance à se reformer après ponction. Son traitement repose sur des ponctions répétées, la compression, parfois un drainage, l'injection d'un produit qui accole les tissus ou une reprise chirurgicale.",
          "Un gonflement qui devient rouge, chaud et douloureux, ou qui s'accompagne de fièvre, peut traduire une infection et doit être signalé rapidement au chirurgien.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },

  // ════════════════════════════════════ UNITED KINGDOM ════════════════════════════════════
  "en-gb": {
    intervention: {
      id: "thigh-lift",
      locale: "en-gb",
      slug: "thigh-lift",
      category: "body",
      title: "Thigh lift (thighplasty)",
      summary:
        "A thigh lift removes loose skin, often after major weight loss: inner and outer techniques, scars, wound breakdown, lymphocele and recovery.",
      description: [
        "A thigh lift, also called thighplasty or cruroplasty, removes excess skin and fat from the thighs, most often the inner thighs. It is for loose skin that will no longer tighten on its own: after major weight loss (particularly after weight-loss surgery), with age or after repeated weight changes. The concern may be cosmetic, but loose skin can also cause chafing, rashes and skin infections in the folds, or make clothing and walking uncomfortable.",
        "The inner (medial) thigh lift is the most common type. When the excess is limited to the upper third of the thigh, skin is removed through a cut hidden in the groin crease, sometimes extending towards the buttock crease. When the looseness reaches down to the knee, often after massive weight loss, a vertical cut along the inner thigh is needed, with or without the groin cut (a T- or L-shaped scar).",
        "The outer (lateral) thigh lift treats the outer thigh and 'saddlebag' area through a cut at the hip, usually within the underwear line. It is rarely done on its own: it is most often part of a lower body lift, which treats the tummy, hips, buttocks and outer thighs together.",
        "To reduce the risk of the scar dropping and of distortion of the genital area, the surgeon may anchor the deeper tissues to a firm layer in the groin. Liposuction of the thighs is often combined, either at the same time or at an earlier stage, to reduce fat before skin is removed.",
        "The trade-off is a long, permanent scar and a more demanding recovery than most body-contouring operations. The groin is moist and stretched with every movement, which makes wound healing problems, especially wound breakdown, relatively common. A thigh lift is not a weight-loss treatment, does not remove cellulite or all stretch marks, and the skin will continue to age.",
      ],
      indications: [
        "Excess skin on the thighs, particularly the inner thighs, that has not tightened after weight loss.",
        "After weight-loss (bariatric) surgery: usually at least 12 to 18 months after the operation, with weight stable for several months.",
        "A stable weight, close to a level you can maintain.",
        "Physical problems such as chafing, rashes or recurrent skin infections in the folds, or a cosmetic concern that is your own decision.",
        "Moderate looseness due to age or weight changes, for a limited lift with a groin-crease scar.",
        "As part of a staged plan of body contouring after massive weight loss, alongside a tummy tuck, arm lift or lower body lift.",
      ],
      contraindications: [
        "Ongoing weight loss or unstable weight: the result would be unpredictable and the skin could loosen again.",
        "Significant obesity that has not stabilised, which greatly increases the risk of complications.",
        "Uncorrected nutritional deficiencies (protein, iron, vitamins), common after bariatric surgery, which impair healing.",
        "Smoking or nicotine use: they greatly increase the risk of wound breakdown and skin loss; stopping for several weeks before and after surgery is required.",
        "Circulation problems in the legs that have not been assessed: significant venous disease, a history of lymphoedema or blood clots.",
        "Diabetes, heart or lung disease or other long-term conditions that are not well controlled.",
        "Unrealistic expectations, not being prepared to accept a long scar, or a request driven by pressure from others.",
        "Pregnancy or breastfeeding, or planning a pregnancy soon.",
      ],
      risks: [
        {
          name: "Pain, swelling and bruising",
          detail:
            "Common and expected: tightness when walking and sitting, swelling of the thighs and sometimes the ankles, and bruising. Leg swelling can last several months.",
        },
        {
          name: "Wound breakdown (dehiscence)",
          detail:
            "Common, particularly in the groin crease and where the cuts meet in a T: part of the wound opens by a few millimetres or centimetres because of tension, moisture and movement. It usually heals with dressings over several weeks, but may leave a wider scar and sometimes needs further surgery.",
        },
        {
          name: "Seroma and lymphocele",
          detail:
            "Fluid collecting under the skin is fairly common after a thigh lift. When lymphatic vessels in the groin have been damaged, it may be a lymphocele, which tends to persist and may need repeated drainage with a needle, a drain or further surgery.",
        },
        {
          name: "Scar migration and widening",
          detail:
            "The groin scar can drop over time and show below the underwear line; the vertical scar can widen or thicken. Anchoring the deeper tissues aims to reduce this but cannot prevent it. Scars take 12 to 18 months to mature and remain visible.",
        },
        {
          name: "Distortion of the genital area",
          detail:
            "In women, tension on the groin scar can pull the outer labia apart or change their shape; this can be troublesome and may need correction.",
        },
        {
          name: "Infection",
          detail:
            "More likely than after many other operations because the wound is close to the genital area and the fold is moist; usually treated with wound care and antibiotics, sometimes with drainage.",
        },
        {
          name: "Haematoma and skin necrosis",
          detail:
            "A haematoma (collection of blood) may need a return to theatre. Poor blood supply to the wound edges, made more likely by smoking and tension, can lead to skin necrosis (skin death) needing prolonged wound care.",
        },
        {
          name: "Lymphoedema",
          detail:
            "Rare: long-lasting swelling of the leg caused by disruption of lymphatic drainage. It may need long-term compression and specialist care.",
        },
        {
          name: "Changes in sensation",
          detail:
            "Numbness of the inner thigh, sometimes down to the knee, from injury to small skin nerves; usually temporary over several months but occasionally permanent.",
        },
        {
          name: "Asymmetry, recurrent looseness and uneven contour",
          detail:
            "Differences between sides, residual loose skin near the knee or looseness returning, especially with further weight loss. A revision can be discussed once healing has settled.",
        },
        {
          name: "Deep vein thrombosis and pulmonary embolism",
          detail:
            "Rare but serious. The risk is increased by surgery on the legs, longer operations, combined procedures and a history of obesity. It is reduced by moving early, compression stockings and usually blood-thinning injections.",
        },
        {
          name: "Anaesthetic risks",
          detail: "Discussed with the anaesthetist at your pre-operative assessment.",
        },
      ],
      procedure: {
        anaesthesia: "General anaesthesia.",
        duration:
          "Around 2 to 4 hours, depending on the technique (groin-crease or vertical lift) and any combined procedures.",
        hospitalStay:
          "Usually one or two nights in hospital; a limited lift can sometimes be done as a day case.",
      },
      recovery: [
        "Days 1 to 3: you are helped to walk from the day after surgery, with small steps; any drains are usually removed within a few days; walking and sitting feel tight, and painkillers are prescribed.",
        "A compression garment is usually worn day and night for 4 to 6 weeks, with compression stockings and often blood-thinning injections.",
        "Weeks 1 to 2: avoid spreading your legs, squatting and sitting for long periods; keep the groin clean and dry and shower as advised.",
        "Weeks 2 to 3: many people return to desk-based work; physical jobs or long periods standing take longer; keep a close eye on the wounds.",
        "Weeks 3 to 6: small areas of wound breakdown are common and are treated with dressings; seromas may need draining.",
        "After 6 weeks: gradually return to exercise once your surgeon agrees; swimming once the wounds have fully healed.",
        "Leg swelling can last several months; lymphatic drainage massage is sometimes suggested.",
        "Scars are red at first and fade over 12 to 18 months; protect them from the sun throughout this time.",
      ],
      alternatives: [
        "Doing nothing: a legitimate choice, which you can revisit later.",
        "Liposuction alone, if the skin is still elastic and the excess is mainly fat: small scars, but it does not remove loose skin.",
        "Non-surgical skin tightening (radiofrequency, focused ultrasound): a modest effect for mild looseness only, several sessions and its own risks, such as burns.",
        "Exercise and muscle strengthening: these improve tone but do not remove excess skin.",
        "A lower body lift, if the looseness also affects the tummy, hips and buttocks.",
      ],
      faq: [
        {
          question: "What is the difference between an inner and an outer thigh lift?",
          answer:
            "An inner thigh lift treats the inner thighs through a scar in the groin crease and, if the looseness reaches the knee, a vertical scar along the inner thigh. An outer thigh lift treats the outer thigh and saddlebag area through a cut at the hip; it is usually done as part of a lower body lift.",
        },
        {
          question: "Where will the scar be, and will it show?",
          answer:
            "For a limited lift, it sits in the groin crease. For a vertical lift, it runs along the inner thigh. It is permanent, takes 12 to 18 months to fade and can drop or widen. A vertical scar will show in shorts or swimwear; this is a trade-off to accept before deciding.",
        },
        {
          question: "How long after weight-loss surgery can I have a thigh lift?",
          answer:
            "Usually at least 12 to 18 months after bariatric surgery, once your weight has been stable for several months and any nutritional deficiencies have been corrected. Ideally your plastic surgeon works with the team managing your weight.",
        },
        {
          question: "Why do the wounds sometimes open?",
          answer:
            "The groin is moist, close to the genital area and stretched with every step and when you sit. Partial wound breakdown is therefore common. It usually heals with dressings over a few weeks, though it may leave a wider scar. Smoking, a high body mass index and nutritional deficiencies increase the risk.",
        },
        {
          question: "What is a lymphocele?",
          answer:
            "A pocket of lymph fluid that forms under the skin when lymphatic vessels in the groin have been damaged. It shows as a soft swelling that can persist and may need repeated needle drainage or further surgery. Careful surgery in the groin aims to reduce the risk.",
        },
        {
          question: "Does it hurt?",
          answer:
            "The first days bring tightness, especially when walking, sitting and moving your legs apart. This is usually managed with prescribed painkillers. Pain that gets worse, a painful calf or a fever should be reported to your surgeon.",
        },
        {
          question: "Is a thigh lift available on the NHS?",
          answer:
            "Not for cosmetic reasons. Body contouring after massive weight loss is generally treated as a procedure of limited clinical value, and many areas do not fund thigh lifts at all. In exceptional circumstances, an individual funding request may be considered according to strict local criteria. Your GP or bariatric team can advise.",
        },
        {
          question: "How long should I wait before deciding?",
          answer:
            "There is no legal waiting period in the UK, but professional guidance recommends at least two weeks between your consultation and agreeing to surgery. Use this time to think, ask questions and seek a second opinion if you wish.",
        },
        {
          question: "Who should carry out my thigh lift?",
          answer:
            "A surgeon on the GMC Specialist Register in plastic surgery, ideally experienced in surgery after massive weight loss, working in a hospital registered with the Care Quality Commission in England (or the equivalent regulator in Scotland, Wales or Northern Ireland). You can check the register on the GMC website.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risks ──
      {
        interventionId: "thigh-lift",
        kind: "risks",
        locale: "en-gb",
        title: "Thigh lift risks",
        summary:
          "Wound breakdown, seroma, lymphocele, scar migration and blood clots: thigh lift risks and when to seek urgent help.",
        answer:
          "A thigh lift has a higher complication rate than many body-contouring operations, especially after massive weight loss. Pain, swelling and tightness are expected; wound breakdown, seroma and lymphocele are common; scar migration or widening and distortion of the genital area are possible. Blood clots are rare but serious.",
        sections: [
          {
            heading: "Common and expected effects",
            paragraphs: ["These are normal after a thigh lift and settle gradually over weeks."],
            bullets: [
              "Tightness and pain when walking, sitting or moving the legs apart.",
              "Swelling of the thighs, knees and sometimes ankles, which can last several months.",
              "Bruising of the inner thighs and sometimes the genital area.",
              "Fluid from drains or wounds in the first days.",
              "Numbness of the inner thigh skin.",
              "Red, raised scars for several months before they fade.",
            ],
          },
          {
            heading: "Common complications specific to a thigh lift",
            paragraphs: [
              "The groin combines several factors that work against healing: moisture, closeness to the genital area, tension with every movement and a dense network of lymphatic vessels.",
            ],
            bullets: [
              "Wound breakdown: part of the wound opens, especially in the groin crease or where the cuts meet in a T, usually treated with dressings over a few weeks.",
              "Seroma: fluid collecting under the skin, sometimes needing needle drainage.",
              "Lymphocele: a pocket of lymph fluid caused by damage to groin lymphatics, which tends to persist and may need repeated drainage or further surgery.",
              "Wound infection, encouraged by moisture in the fold.",
              "Downward migration of the groin scar and widening of the scars.",
              "Distortion or spreading of the outer labia in women, from tension on the scar.",
            ],
          },
          {
            heading: "Less common complications",
            paragraphs: [
              "How likely these are depends on the technique, the extent of the lift, tissue quality and your general health.",
            ],
            bullets: [
              "Haematoma, sometimes needing a return to theatre.",
              "Poor blood supply or necrosis of the wound edges, especially in smokers.",
              "Hypertrophic or keloid scars.",
              "Asymmetry, residual loose skin near the knee or looseness returning.",
              "Lasting numbness of the inner thigh.",
              "Lymphoedema: long-term leg swelling, rare, needing ongoing compression.",
            ],
          },
          {
            heading: "Rare but serious complications",
            paragraphs: [
              "Deep vein thrombosis, a clot in a leg vein, can travel to the lungs (pulmonary embolism). A thigh lift combines several risk factors: surgery on the legs, reduced mobility in the first days, a history of obesity, the length of the operation and frequent combination with other procedures. Early walking, compression stockings and usually blood-thinning injections are therefore routinely considered.",
              "A severe, rapidly spreading infection is very rare and needs urgent treatment.",
            ],
          },
          {
            heading: "When to seek help urgently",
            paragraphs: [
              "Contact your surgeon's team promptly if something does not feel right; if you cannot reach them, call NHS 111. Call 999 if you have chest pain, sudden breathlessness or collapse.",
            ],
            bullets: [
              "Sudden breathlessness, chest pain, coughing up blood or a racing heartbeat.",
              "A painful, warm or swollen calf on one side.",
              "Fever, shivering, spreading redness, or pus or a bad smell from the wound.",
              "A thigh or groin that rapidly becomes swollen, tense and painful.",
              "A wound that opens widely, or skin at the wound edges turning dark.",
              "Pain that is getting worse rather than better.",
            ],
          },
          {
            heading: "What increases the risk",
            paragraphs: ["Some factors can be changed and should be discussed at your consultation."],
            bullets: [
              "Smoking, vaping and nicotine replacement, as your surgeon advises.",
              "A body mass index that is still high, or unstable weight.",
              "Nutritional deficiencies after bariatric surgery (protein, iron, vitamins).",
              "Diabetes, venous disease or a history of blood clots.",
              "An extensive vertical lift, or combining several operations at once.",
              "The combined contraceptive pill or hormone therapy (blood clot risk).",
            ],
          },
          {
            heading: "Revision surgery",
            paragraphs: [
              "A widened or dropped scar, residual loose skin or asymmetry may be improved with a revision, under local or general anaesthesia. This is only considered once healing has settled, often at least 6 to 12 months later. Ask before you commit what would happen, and what you would pay, if a revision were needed.",
            ],
          },
        ],
        sources: [NHS, BAAPS, BAPRAS, RCS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Cost ──
      {
        interventionId: "thigh-lift",
        kind: "cost",
        locale: "en-gb",
        title: "Thigh lift cost",
        summary:
          "What a thigh lift quote should include, what affects the price, NHS funding rules after weight loss and the cost of complications.",
        answer:
          "The cost of a thigh lift depends mainly on the technique (groin-crease or vertical lift), any liposuction, the length of hospital stay and the hospital. We do not give price ranges: only a written, itemised quote after a consultation with the operating surgeon tells you the actual cost. The NHS rarely funds thigh lifts, even after major weight loss.",
        sections: [
          {
            heading: "What a quote should include",
            paragraphs: ["Ask for a written quote that lists every item, or states clearly what is excluded."],
            bullets: [
              "The surgeon's fee, with the planned technique (inner, vertical, outer) and any combined procedures.",
              "The anaesthetist's fee.",
              "Hospital fees: theatre time and overnight stays.",
              "Compression garments, stockings, blood-thinning injections, dressings and medicines.",
              "Pre-operative tests and any nutritional assessment.",
              "Follow-up appointments, nurse-led wound care and what happens if a revision or complication arises.",
            ],
          },
          {
            heading: "What affects the price",
            paragraphs: [
              "The extent of the lift (groin crease only or a vertical scar to the knee), combining it with liposuction, an outer thigh lift or other operations, the length of the operation, the number of nights in hospital and the type of hospital all affect the quote.",
              "Allow for indirect costs too: wound care appointments, possibly more time off work if the wounds break down, and spare compression garments.",
            ],
          },
          {
            heading: "NHS funding",
            paragraphs: [
              "The NHS does not usually fund cosmetic surgery, and body contouring after massive weight loss is generally treated as a procedure of limited clinical value. Many areas do not fund thigh lifts at all. In exceptional circumstances, for example severe, documented skin problems despite treatment, an individual funding request (IFR) may be considered according to strict local criteria, which often include a stable weight and body mass index. Your GP or bariatric team can advise.",
            ],
          },
          {
            heading: "Paying privately: points to check",
            paragraphs: [
              "Professional standards say you should not be pressured into booking, and time-limited discounts or package deals are a warning sign. The consultation should be with the operating surgeon, and you should have time to reflect before paying a deposit. Check whether any deposit is refundable.",
              "Be cautious about finance offered at the consultation: you remain committed to the repayments even if you are unhappy with the result or need further treatment.",
            ],
          },
          {
            heading: "The cost of complications and revisions",
            paragraphs: [
              "Wound breakdown, a seroma or a lymphocele can mean weeks of dressings, repeated drainage or further surgery, and more time off work. Ask what the quote covers, and whether insurance for complications is included or available. If you have surgery abroad, wound care and follow-up at home may be hard to arrange.",
            ],
          },
        ],
        sources: [NHS, GMC, CQC, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Recovery ──
      {
        interventionId: "thigh-lift",
        kind: "recovery",
        locale: "en-gb",
        title: "Recovery after a thigh lift",
        summary:
          "Recovery after a thigh lift: hospital stay, sitting, compression garments, wound care, returning to work and exercise, and warning signs.",
        answer:
          "Recovery is more demanding than after most body-contouring operations. For the first weeks you will need to avoid spreading your legs and sitting for long periods, wear a compression garment for 4 to 6 weeks and watch the groin wounds closely. Many people return to desk-based work after 2 to 3 weeks and exercise after 6 weeks. Always follow your own surgeon's instructions.",
        sections: [
          {
            heading: "In hospital and the first few days",
            paragraphs: [
              "Most people stay one or two nights. Drains may be left in for a few days. You will be encouraged to get up and walk with small steps from the day after surgery to reduce the risk of blood clots.",
            ],
            bullets: [
              "Take the painkillers and blood-thinning injections prescribed.",
              "Wear your compression garment and stockings.",
              "Avoid spreading your legs, squatting and climbing high steps.",
              "Arrange for someone to take you home and help for the first few days.",
            ],
          },
          {
            heading: "Week by week",
            paragraphs: [],
            bullets: [
              "Week 1: marked tightness, sitting is uncomfortable; alternate walking with resting lying down, legs slightly raised.",
              "Week 2: pain eases; wound care by a nurse or as instructed; stitches or clips removed if needed.",
              "Weeks 2 to 3: many people return to desk-based work; discuss long car journeys or flights with your surgeon (blood clot risk).",
              "Weeks 3 to 6: small areas of wound breakdown in the groin are common and should be checked by the team; seromas may need draining.",
              "After 6 weeks: the garment is gradually stopped as advised; gentle return to exercise, swimming once the wounds have fully healed.",
              "Months 3 to 18: swelling slowly settles and the scars fade and soften.",
            ],
          },
          {
            heading: "Caring for your scars",
            paragraphs: [
              "Keep the groin clean and dry: shower as advised, pat dry carefully and wear cotton underwear. Once the wounds have healed, your surgeon may suggest massage, silicone sheets or gel.",
              "Protect the scars from the sun for at least 12 months. Show your surgeon a scar that is widening, thickening or very itchy.",
            ],
          },
          {
            heading: "Returning to work and activity",
            paragraphs: [],
            bullets: [
              "Desk-based work: often after 2 to 3 weeks.",
              "Physical work or long periods standing: usually after 4 to 6 weeks.",
              "Driving: once you can move your legs freely and are not taking sedating painkillers; check your insurer's conditions.",
              "Sex: resume gently, depending on how the groin wounds are healing.",
              "Strenuous exercise, cycling, horse riding: usually after 6 to 8 weeks, once your surgeon agrees.",
            ],
          },
          {
            heading: "Warning signs",
            paragraphs: [
              "Contact your surgeon's team if you develop a fever, spreading redness, pus from a wound, a wound that opens widely, rapid swelling of a thigh or a painful calf; out of hours, call NHS 111. Call 999 for chest pain or breathlessness.",
            ],
          },
        ],
        sources: [NHS, BAAPS, BAPRAS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Before you decide ──
      {
        interventionId: "thigh-lift",
        kind: "decision",
        locale: "en-gb",
        title: "Thigh lift: before you decide",
        summary:
          "Deciding on a thigh lift: stable weight, weight-loss surgery, accepting the scar, body dysmorphic disorder, questions to ask and cooling-off.",
        answer:
          "A thigh lift tends to suit healthy adults with a stable weight who accept a long scar and a demanding recovery. After weight-loss surgery, you usually need to wait 12 to 18 months and correct any deficiencies. There is no legal waiting period in the UK, but professional guidance recommends at least two weeks between consultation and agreeing to surgery, and a second opinion is always reasonable.",
        sections: [
          {
            heading: "Is it the right time?",
            paragraphs: [
              "Your weight should have been stable for several months, at a level you can maintain. If you are still losing weight the skin may loosen again; weight gained later can stretch the scars.",
              "After bariatric surgery, your weight-management team can confirm that your weight has stabilised and that your nutrition is adequate. A future pregnancy can change the result. Cosmetic surgery is for adults: reputable surgeons in the UK do not perform cosmetic thigh lifts on under-18s.",
            ],
          },
          {
            heading: "Accepting the scar",
            paragraphs: [
              "A thigh lift trades loose skin for a scar. The groin scar usually sits within underwear but can drop over time; a vertical scar will show in shorts or swimwear. Ask to see photographs of the surgeon's patients' scars at one year, and what yours is likely to look like.",
              "If you are considering several operations after weight loss (tummy, arms, breasts, thighs), your surgeon should propose an order and a gap between stages: doing everything at once is not usually advisable.",
            ],
          },
          {
            heading: "Your motivation and body dysmorphic disorder",
            paragraphs: [
              "Think about what exactly bothers you, for how long, and what you expect to change. After major weight loss, body image can take time to adjust; talking to your GP or a psychologist can help.",
              "Body dysmorphic disorder (BDD) is a mental health condition in which a person spends a lot of time worrying about flaws in their appearance that others barely notice. Surgery does not usually relieve BDD and can make distress worse. If this sounds familiar, speak to your GP; effective treatments are available. If you are struggling to cope, Samaritans can be reached any time on 116 123.",
            ],
          },
          {
            heading: "Questions to ask your surgeon",
            paragraphs: [],
            bullets: [
              "Are you on the GMC Specialist Register in plastic surgery, and how often do you operate after massive weight loss? Do you hold the Royal College of Surgeons' cosmetic surgery certification?",
              "Groin-crease or vertical lift: which do you recommend, and exactly where will the scar be?",
              "How do you reduce scar migration and distortion of the genital area?",
              "What is my risk of wound breakdown, seroma or lymphocele, and how would they be managed?",
              "Should liposuction be combined, and at the same time or beforehand?",
              "How do you reduce the risk of blood clots, and who do I contact at night or at weekends?",
              "Is the hospital registered with the CQC, and what does the quote include if I need a revision or have a complication?",
            ],
          },
          {
            heading: "Cooling-off and second opinions",
            paragraphs: [
              "UK law sets no statutory waiting period, but GMC guidance recommends that you have time to reflect, and professional standards advise at least two weeks between consultation and agreeing to surgery. The consultation should be with the operating surgeon, not only a sales adviser. A surgeon who discourages a second opinion is a warning sign.",
            ],
          },
        ],
        sources: [NHS, GMC, RCS, CQC, { label: "Samaritans", url: "https://www.samaritans.org" }],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Alternatives ──
      {
        interventionId: "thigh-lift",
        kind: "alternatives",
        locale: "en-gb",
        title: "Alternatives to a thigh lift",
        summary:
          "Liposuction, skin tightening, exercise, a lower body lift or doing nothing: alternatives to a thigh lift with their limits and risks.",
        answer:
          "Depending on your situation, alternatives include liposuction alone if your skin is still elastic, non-surgical skin tightening for mild looseness, exercise, a lower body lift if the looseness is more widespread, or no treatment. No scarless technique removes a large amount of loose skin.",
        sections: [
          {
            heading: "Liposuction alone",
            paragraphs: [
              "If the excess is mainly fat and the skin is still elastic, liposuction may be enough, with small scars. It does not remove skin: with marked looseness it can make the problem more visible. It is often combined with a thigh lift rather than offered instead of one.",
            ],
          },
          {
            heading: "Non-surgical skin tightening",
            paragraphs: [
              "Radiofrequency, focused ultrasound and some lasers heat the skin to encourage it to tighten. The effect is modest and gradual, often needs several sessions and is only suitable for mild looseness. Risks include burns, pain and skin discolouration. Many of these treatments are offered outside hospitals with little regulation, so check who is treating you and what training they have.",
            ],
          },
          {
            heading: "Exercise and skin care",
            paragraphs: [
              "Muscle strengthening improves tone and shape but does not remove excess skin. If you have rashes or chafing in the folds, good skin care, anti-chafing or support garments and advice from your GP or a dermatologist can help.",
            ],
          },
          {
            heading: "Lower body lift and combined surgery",
            paragraphs: [
              "If the looseness also affects the tummy, hips and buttocks, a lower body lift treats these areas in one operation, with a scar around the waist and a longer recovery. An inner thigh lift can be combined with it or done as a second stage.",
            ],
          },
          {
            heading: "Doing nothing",
            paragraphs: [
              "Choosing not to have surgery is a legitimate decision, particularly if the scar seems more of a concern to you than the loose skin. You can revisit the question later without any medical consequence.",
            ],
          },
        ],
        sources: [NHS, NICE, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "cruroplasty",
        locale: "en-gb",
        slug: "cruroplasty",
        term: "Cruroplasty",
        aliases: ["cruroplasties", "thighplasty", "thigh lift", "thigh lifts", "inner thigh lift", "medial thigh lift"],
        definition:
          "Cruroplasty is the medical name for a thigh lift, also called thighplasty. It removes excess skin and fat from the thighs, most often the inner thighs.",
        detail: [
          "In its limited form, the scar is hidden in the groin crease. When looseness extends to the knee, often after massive weight loss, a vertical scar along the inner thigh is needed.",
          "The surgeon may anchor the deeper tissues to a firm layer in the groin to reduce the risk of the scar dropping and of distortion of the genital area. Liposuction is often combined.",
          "The most common complications are wound breakdown, seroma and lymphocele. An outer thigh lift is usually done as part of a lower body lift.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "lymphocele",
        locale: "en-gb",
        slug: "lymphocele",
        term: "Lymphocele",
        aliases: ["lymphoceles", "lymphatic collection", "lymph collection", "lymphocoele"],
        definition:
          "A lymphocele is a pocket of lymph fluid that forms under the skin after lymphatic vessels are damaged during surgery. It shows as a soft swelling that can persist.",
        detail: [
          "Lymph is the clear fluid that flows through the lymphatic vessels to the lymph nodes. Areas rich in lymphatic vessels, such as the groin, are particularly prone: it is a recognised complication of a thigh lift.",
          "Similar to a seroma, a lymphocele tends to refill after needle drainage. Treatment includes repeated drainage, compression, sometimes a drain, injection of a substance that seals the space (sclerotherapy) or further surgery.",
          "Swelling that becomes red, hot and painful, or comes with a fever, may mean infection and should be reported to your surgeon promptly.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },
};
