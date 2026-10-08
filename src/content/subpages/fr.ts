import type { InterventionSubpage, Source } from "../types";

/**
 * Sous-pages France (fr) des dossiers d'intervention (Phase 2).
 * Gabarit : réponse directe en tête, détail en sections, sources officielles.
 * Aucun montant n'est indiqué : les pages « coût » expliquent la composition
 * d'un devis et les règles applicables, sans données tarifaires.
 * Statut "draft" tant qu'un chirurgien qualifié ne les a pas relues.
 */

const LEGIFRANCE_L6322_2: Source = {
  label: "Code de la santé publique, article L6322-2 (devis et délai de réflexion en chirurgie esthétique) — Légifrance",
  url: "https://www.legifrance.gouv.fr",
};
const HAS: Source = { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" };
const ANSM: Source = {
  label: "Agence nationale de sécurité du médicament et des produits de santé (ANSM)",
  url: "https://ansm.sante.fr",
};
const ANSM_IMPLANTS: Source = {
  label: "ANSM — dossier implants mammaires (surveillance, LAGC-AIM, information des patientes)",
  url: "https://ansm.sante.fr",
};
const SOFCPRE: Source = {
  label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)",
  url: "https://www.sofcpre.fr",
};
const AMELI: Source = { label: "Assurance maladie — ameli.fr (prise en charge, accord préalable)", url: "https://www.ameli.fr" };
const ANNUAIRE_SANTE: Source = {
  label: "Annuaire santé (vérification des professionnels inscrits au RPPS)",
  url: "https://annuaire.sante.fr",
};
const SFORL: Source = {
  label: "Société française d'ORL et de chirurgie de la face et du cou (SFORL)",
  url: "https://www.sforl.org",
};
const N3114: Source = { label: "3114 — numéro national de prévention du suicide", url: "https://3114.fr" };

const REVIEW = { status: "draft" } as const;
const UPDATED_AT = "2026-10-07";

export const subpagesFr: InterventionSubpage[] = [
  // ───────────────────────────── RHINOPLASTIE ─────────────────────────────
  {
    interventionId: "rhinoplasty",
    kind: "risks",
    locale: "fr",
    title: "Rhinoplastie : les risques",
    summary:
      "Complications fréquentes, rares et graves de la rhinoplastie, signes qui doivent faire appeler le chirurgien, retouches et facteurs de risque.",
    answer:
      "Comme toute chirurgie, la rhinoplastie comporte des risques. Œdème et ecchymoses sont attendus ; saignement, infection ou gêne respiratoire sont moins fréquents ; les complications graves sont rares. Une retouche est nécessaire dans une partie des cas, et le résultat n'est jamais garanti.",
    sections: [
      {
        heading: "Les suites fréquentes et attendues",
        paragraphs: [
          "Certaines manifestations ne sont pas des complications mais des suites normales de l'intervention. Elles diminuent progressivement au fil des jours et des semaines.",
        ],
        bullets: [
          "Gonflement (œdème) du nez et du visage, plus marqué les premiers jours ; l'œdème de la pointe peut persister plusieurs mois.",
          "Ecchymoses autour des yeux, qui s'estompent en général en une à trois semaines.",
          "Nez bouché par l'œdème, les croûtes ou les méchages, avec respiration par la bouche.",
          "Petits saignements les premières 24 à 48 heures.",
          "Sensibilité diminuée de la pointe du nez ou de la lèvre supérieure, le plus souvent transitoire.",
        ],
      },
      {
        heading: "Les complications moins fréquentes ou rares",
        paragraphs: [
          "Ces complications surviennent dans une minorité de cas. Leur fréquence dépend de la technique, de l'anatomie et de l'état de santé de chacun : votre chirurgien peut vous indiquer celles qui vous concernent plus particulièrement.",
        ],
        bullets: [
          "Saignement important (épistaxis) ou hématome de la cloison, qui peut nécessiter un geste en urgence.",
          "Infection, traitée le plus souvent par antibiotiques.",
          "Gêne respiratoire persistante ou nouvelle, liée par exemple à un affaissement de la valve nasale.",
          "Perforation de la cloison nasale, rare.",
          "Irrégularités, asymétries, cicatrice visible en cas de rhinoplastie ouverte.",
          "Troubles de l'odorat, le plus souvent transitoires.",
          "Risques liés à l'anesthésie, évalués lors de la consultation d'anesthésie obligatoire.",
        ],
      },
      {
        heading: "Ce qui est normal et ce qui ne l'est pas",
        paragraphs: [
          "Un gonflement qui diminue, des ecchymoses qui changent de couleur et un nez bouché sont habituels. En revanche, certains signes doivent faire contacter rapidement le chirurgien ou l'équipe qui vous a opéré.",
          "En cas de saignement abondant qui ne s'arrête pas, de difficulté à respirer, de malaise ou de trouble de la vision, appelez le 15 (SAMU) ou le 112.",
        ],
        bullets: [
          "Fièvre, douleur qui augmente au lieu de diminuer, écoulement purulent.",
          "Gonflement soudain et douloureux à l'intérieur du nez (possible hématome de la cloison).",
          "Rougeur ou chaleur croissante de la peau du nez.",
          "Saignement qui reprend ou persiste malgré le repos et la tête surélevée.",
        ],
      },
      {
        heading: "Retouche (rhinoplastie secondaire)",
        paragraphs: [
          "Une partie des personnes opérées demandent ou nécessitent une retouche, pour une irrégularité, une asymétrie ou une gêne respiratoire. Elle n'est généralement envisagée qu'après cicatrisation complète, soit au moins un an après l'intervention.",
          "Une rhinoplastie secondaire est souvent plus complexe que la première intervention. Demandez avant de vous engager quelles sont les conditions prévues en cas de retouche, notamment sur le plan financier.",
        ],
      },
      {
        heading: "Les facteurs qui augmentent les risques",
        paragraphs: [
          "Certains facteurs sont modifiables et doivent être discutés en consultation.",
        ],
        bullets: [
          "Tabac : il altère la cicatrisation ; un arrêt est recommandé plusieurs semaines avant et après l'intervention.",
          "Prise d'anticoagulants, d'aspirine, d'anti-inflammatoires ou de certains compléments alimentaires, à signaler.",
          "Antécédents de chirurgie nasale, de traumatisme du nez ou d'injections dans le nez.",
          "Consommation de substances par voie nasale.",
          "Troubles de la coagulation ou maladies chroniques non équilibrées.",
        ],
      },
    ],
    sources: [HAS, SOFCPRE, SFORL, LEGIFRANCE_L6322_2],
    medicalReview: REVIEW,
    updatedAt: UPDATED_AT,
  },
  {
    interventionId: "rhinoplasty",
    kind: "cost",
    locale: "fr",
    title: "Prix d'une rhinoplastie",
    summary:
      "Ce que contient un devis de rhinoplastie, règles françaises (devis daté, délai de 15 jours, TVA) et cas de prise en charge partielle par l'Assurance maladie.",
    answer:
      "Le coût d'une rhinoplastie varie selon la complexité de l'intervention, le chirurgien, l'anesthésie et l'établissement. Nous n'indiquons pas de fourchette de prix : seul un devis détaillé et daté, remis après consultation, permet de connaître le montant. La partie esthétique n'est pas remboursée ; la partie fonctionnelle d'une rhinoseptoplastie peut l'être.",
    sections: [
      {
        heading: "Ce que contient un devis",
        paragraphs: [
          "En France, un devis détaillé et daté doit vous être remis avant toute intervention de chirurgie esthétique. Vérifiez qu'il précise chacun des postes suivants, ou qu'il indique clairement ceux qui n'y figurent pas.",
        ],
        bullets: [
          "Honoraires du chirurgien.",
          "Honoraires de l'anesthésiste (parfois facturés séparément).",
          "Frais de l'établissement : bloc opératoire, séjour, chambre, éventuelle nuit d'hospitalisation.",
          "Attelle, pansements, médicaments et examens préopératoires éventuels.",
          "Consultations de suivi après l'intervention.",
          "Conditions prévues en cas de retouche ou de complication.",
        ],
      },
      {
        heading: "Les règles applicables en France",
        paragraphs: [
          "Le Code de la santé publique (article L6322-2) impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention. Aucune somme autre que les honoraires de consultation ne peut être exigée avant la fin de ce délai.",
          "Les actes à visée purement esthétique, sans finalité thérapeutique, sont soumis à la TVA au taux normal. Les honoraires de chirurgie esthétique ne sont pas encadrés par un tarif de l'Assurance maladie ; ils doivent être fixés avec tact et mesure et annoncés à l'avance.",
        ],
      },
      {
        heading: "Quand l'Assurance maladie peut intervenir",
        paragraphs: [
          "Lorsqu'une gêne respiratoire est liée à une déviation de la cloison ou à une anomalie de la valve nasale, la correction fonctionnelle (septoplastie) peut être prise en charge. On parle alors de rhinoseptoplastie : seule la partie fonctionnelle relève du remboursement, la partie esthétique reste à votre charge.",
          "Les séquelles de traumatisme ou certaines malformations peuvent aussi relever d'une prise en charge. Dans ces situations, des dépassements d'honoraires sont possibles selon le secteur du chirurgien ; votre complémentaire santé peut en couvrir une partie. Demandez un devis distinguant clairement la partie remboursable et la partie non remboursable.",
        ],
      },
      {
        heading: "Le coût des complications et des retouches",
        paragraphs: [
          "Une retouche est nécessaire dans une partie des cas. Renseignez-vous avant l'intervention : la retouche est-elle facturée, et sur quels postes (honoraires, anesthésie, établissement) ? Une complication peut aussi entraîner des frais, un arrêt de travail ou des déplacements supplémentaires.",
        ],
      },
      {
        heading: "Points de vigilance",
        paragraphs: [
          "Un prix très inférieur aux pratiques habituelles doit inciter à vérifier ce qui est inclus, la qualification du chirurgien (sur l'Annuaire santé ou auprès de l'Ordre des médecins) et l'organisation du suivi.",
          "Méfiez-vous de toute pression à décider vite, à verser un acompte avant la fin du délai légal ou à souscrire un crédit proposé au moment de la consultation. Un crédit engage sur la durée, y compris si le résultat ne correspond pas à vos attentes ou si une retouche est nécessaire.",
        ],
      },
    ],
    sources: [LEGIFRANCE_L6322_2, AMELI, ANNUAIRE_SANTE, SOFCPRE],
    medicalReview: REVIEW,
    updatedAt: UPDATED_AT,
  },
  {
    interventionId: "rhinoplasty",
    kind: "recovery",
    locale: "fr",
    title: "Convalescence après une rhinoplastie",
    summary:
      "Les étapes de la convalescence après une rhinoplastie : premiers jours, attelle, reprise du travail et du sport, soleil, suivi et signes d'alerte.",
    answer:
      "La convalescence se déroule en plusieurs temps : une à deux semaines de suites visibles (attelle, ecchymoses, gonflement), une reprise d'activité de bureau souvent après 10 à 15 jours, puis plusieurs mois pendant lesquels l'œdème se résorbe. Le résultat se stabilise en général entre 6 et 12 mois. Les consignes de votre chirurgien priment sur ces repères.",
    sections: [
      {
        heading: "Les premiers jours",
        paragraphs: [
          "Le nez est souvent recouvert d'une attelle, parfois avec des méchages dans les narines retirés après quelques jours. La respiration se fait surtout par la bouche. Le visage est gonflé et des ecchymoses apparaissent fréquemment autour des yeux.",
        ],
        bullets: [
          "Dormir la tête surélevée pour limiter l'œdème.",
          "Ne pas se moucher et éternuer bouche ouverte, sauf consigne contraire.",
          "Éviter les efforts, la chaleur (bains chauds, sauna) et les médicaments non prescrits qui favorisent les saignements.",
          "Appliquer les soins locaux (lavages, pommade) indiqués par l'équipe.",
        ],
      },
      {
        heading: "Les premières semaines",
        paragraphs: [
          "L'attelle est généralement retirée vers la fin de la première semaine. Le nez apparaît alors encore gonflé et peut sembler différent du résultat attendu : c'est habituel à ce stade.",
          "La reprise d'une activité de bureau est souvent possible après 10 à 15 jours. Un métier physique ou exposé aux chocs peut nécessiter un arrêt plus long. Le port de lunettes appuyant sur le nez est à éviter pendant plusieurs semaines.",
        ],
      },
      {
        heading: "Sport, soleil et vie quotidienne",
        paragraphs: [
          "Les activités douces peuvent reprendre progressivement selon l'avis du chirurgien. Les sports d'effort intense et surtout les sports de contact ou à risque de choc sur le visage sont à éviter pendant plusieurs semaines, voire plusieurs mois.",
          "Protégez la peau du nez et les zones d'ecchymoses du soleil pendant plusieurs mois (écran solaire, chapeau) pour limiter les pigmentations. En cas de rhinoplastie ouverte, la petite cicatrice sous la pointe doit aussi être protégée.",
        ],
      },
      {
        heading: "Les mois suivants et le suivi",
        paragraphs: [
          "L'œdème de la pointe du nez diminue lentement, surtout chez les personnes à peau épaisse. Le résultat se stabilise en général entre 6 et 12 mois. Une éventuelle retouche n'est discutée qu'après cette période.",
          "Des consultations de contrôle sont prévues, par exemple au retrait de l'attelle puis à plusieurs mois. Elles permettent de vérifier la cicatrisation et la respiration : ne les négligez pas, même si tout semble aller bien.",
        ],
      },
      {
        heading: "Signes d'alerte",
        paragraphs: [
          "Contactez rapidement votre chirurgien en cas de fièvre, de douleur croissante, de rougeur qui s'étend, d'écoulement purulent ou de gonflement douloureux à l'intérieur du nez.",
          "En cas de saignement abondant qui ne s'arrête pas, de difficulté respiratoire, de malaise ou de trouble de la vision, appelez le 15 ou le 112.",
        ],
      },
    ],
    sources: [HAS, SOFCPRE, SFORL],
    medicalReview: REVIEW,
    updatedAt: UPDATED_AT,
  },
  {
    interventionId: "rhinoplasty",
    kind: "decision",
    locale: "fr",
    title: "Rhinoplastie : avant de se décider",
    summary:
      "Bon moment, motivations, dysmorphophobie, questions à poser au chirurgien et deuxième avis : les points à examiner avant une rhinoplastie.",
    answer:
      "Une rhinoplastie s'envisage lorsque la croissance du visage est terminée, que la demande vient de vous et qu'elle est stable dans le temps. Prenez le temps de consulter, de poser vos questions, éventuellement de demander un deuxième avis, et utilisez le délai légal de réflexion de 15 jours. Notre plateforme s'adresse uniquement aux personnes majeures.",
    sections: [
      {
        heading: "Est-ce le bon moment ?",
        paragraphs: [
          "La forme du nez évolue jusqu'à la fin de la croissance. Notre plateforme ne concerne que les personnes de 18 ans et plus. Une période de stress important, un deuil ou une rupture récente ne sont pas des moments propices à une décision de ce type.",
          "Pensez aussi à l'organisation : une à deux semaines de suites visibles, des sports de contact à suspendre, des mois avant le résultat stabilisé.",
        ],
      },
      {
        heading: "Une demande qui vient de vous",
        paragraphs: [
          "La décision doit être la vôtre, et non répondre à la pression d'un proche, d'un partenaire ou des réseaux sociaux. Une demande ancienne et précise (une bosse, une pointe tombante, une gêne respiratoire) est différente d'une attente de changement global de vie.",
          "Les photos retouchées ou les filtres ne reflètent pas ce que la chirurgie peut faire. Une simulation peut aider à exprimer une demande, mais ce n'est jamais une promesse de résultat.",
        ],
      },
      {
        heading: "Dysmorphophobie : savoir la reconnaître",
        paragraphs: [
          "Le trouble dysmorphique corporel (dysmorphophobie) est une préoccupation excessive pour un défaut minime ou invisible pour les autres. Il touche souvent le nez. La chirurgie ne le soulage généralement pas et peut l'aggraver.",
          "Si vous vous reconnaissez dans plusieurs des signes ci-dessous, parlez-en à votre médecin traitant, à un psychologue ou à un psychiatre. En cas d'idées suicidaires, appelez le 3114, gratuit, 24 heures sur 24.",
        ],
        bullets: [
          "Pensées sur votre nez qui occupent plusieurs heures par jour.",
          "Vérifications fréquentes dans le miroir, ou au contraire évitement des miroirs et des photos.",
          "Évitement de sorties, du travail ou de relations à cause de votre apparence.",
          "Insatisfaction persistante après de précédentes interventions ou injections.",
        ],
      },
      {
        heading: "Questions à poser au chirurgien",
        paragraphs: ["Notez vos questions avant la consultation et les réponses obtenues."],
        bullets: [
          "Quelle est votre qualification (chirurgie plastique, reconstructrice et esthétique ou ORL et chirurgie cervico-faciale) ? Elle est vérifiable sur l'Annuaire santé (RPPS) ou auprès de l'Ordre des médecins.",
          "Ce que je demande est-il réalisable avec mon nez et ma peau ? Qu'est-ce qui ne l'est pas ?",
          "Rhinoplastie ouverte ou fermée, et pourquoi ?",
          "Quels sont les risques qui me concernent particulièrement ?",
          "Comment se passent le suivi, la gestion d'une complication et une éventuelle retouche ?",
          "Qui joindre en cas de problème, y compris la nuit et le week-end ?",
        ],
      },
      {
        heading: "Deuxième avis et délai de réflexion",
        paragraphs: [
          "Consulter un deuxième chirurgien est une démarche courante et légitime, surtout pour une première intervention ou une retouche. Les explications différentes que vous recevrez aident à préciser votre demande.",
          "En France, un délai minimal de 15 jours sépare la remise du devis détaillé et daté de l'intervention, et aucun paiement autre que les honoraires de consultation ne peut être exigé avant. Renoncer, ou reporter, reste possible à tout moment.",
        ],
      },
    ],
    sources: [HAS, SOFCPRE, LEGIFRANCE_L6322_2, ANNUAIRE_SANTE, N3114],
    medicalReview: REVIEW,
    updatedAt: UPDATED_AT,
  },
  {
    interventionId: "rhinoplasty",
    kind: "alternatives",
    locale: "fr",
    title: "Alternatives à la rhinoplastie",
    summary:
      "Rhinoplastie médicale par injections, chirurgie fonctionnelle seule, maquillage ou ne rien faire : options, limites et risques comparés.",
    answer:
      "Selon la demande, il existe des alternatives à la rhinoplastie chirurgicale : injections d'acide hyaluronique (rhinoplastie médicale), traitement uniquement fonctionnel d'une gêne respiratoire, techniques de maquillage, ou ne rien faire. Chacune a ses limites et ses risques propres ; aucune ne permet de réduire réellement la taille du nez sans chirurgie.",
    sections: [
      {
        heading: "La rhinoplastie médicale (injections)",
        paragraphs: [
          "Des injections d'acide hyaluronique peuvent masquer une petite bosse, relever légèrement une pointe ou combler un creux. Elles ajoutent du volume : elles ne réduisent pas le nez et ne corrigent pas une gêne respiratoire. L'effet est temporaire, de quelques mois à environ un an selon le produit et la personne.",
          "Le nez est une zone à risque vasculaire. Une injection dans un vaisseau ou une compression peut provoquer une souffrance de la peau (nécrose) et, très rarement, une perte de la vue. Ces complications sont rares mais graves. Les injections sont un acte médical, réservé en France aux médecins ; une douleur intense, une pâleur ou une marbrure de la peau, ou un trouble visuel pendant ou après l'injection imposent une prise en charge immédiate.",
        ],
      },
      {
        heading: "Traiter uniquement la respiration",
        paragraphs: [
          "Lorsque la gêne est surtout respiratoire, un bilan ORL peut conduire à un traitement médical (rhinite, allergie) ou à une chirurgie fonctionnelle seule, comme une septoplastie, sans modification volontaire de la forme du nez. Cette chirurgie a ses propres risques et peut relever d'une prise en charge par l'Assurance maladie.",
        ],
      },
      {
        heading: "Maquillage et coiffure",
        paragraphs: [
          "Les techniques de contouring modifient la perception de la forme du nez et ne comportent pas de risque médical. Leur effet est limité et quotidien, mais elles permettent aussi de tester ce qui vous gêne réellement.",
        ],
      },
      {
        heading: "Ne rien faire, ou attendre",
        paragraphs: [
          "Ne pas opérer est une option légitime. Une gêne liée à l'apparence peut évoluer avec le temps. Si la préoccupation est très envahissante, un accompagnement psychologique peut être plus utile qu'une intervention, notamment en cas de dysmorphophobie.",
        ],
      },
      {
        heading: "Comparaison honnête",
        paragraphs: ["Aucune option ne convient à toutes les situations. Les principaux éléments à mettre en balance :"],
        bullets: [
          "Chirurgie : modification durable de la forme, y compris réduction ; anesthésie, convalescence, risques chirurgicaux et retouche possible.",
          "Injections : sans anesthésie générale ni éviction prolongée ; effet temporaire, sans réduction, risque vasculaire rare mais grave ; répétition nécessaire.",
          "Chirurgie fonctionnelle seule : traite la respiration sans viser la forme ; risques chirurgicaux propres.",
          "Maquillage ou abstention : aucun risque médical ; aucune modification réelle.",
        ],
      },
    ],
    sources: [HAS, ANSM, SOFCPRE, SFORL],
    medicalReview: REVIEW,
    updatedAt: UPDATED_AT,
  },

  // ──────────────────────────── ABDOMINOPLASTIE ────────────────────────────
  {
    interventionId: "abdominoplasty",
    kind: "risks",
    locale: "fr",
    title: "Abdominoplastie : les risques",
    summary:
      "Sérome, hématome, cicatrisation, phlébite et embolie : les risques de l'abdominoplastie, les signes d'alerte et le rôle majeur du tabac.",
    answer:
      "L'abdominoplastie est une intervention importante dont les complications sont plus fréquentes que pour d'autres chirurgies esthétiques. Sérome et troubles de cicatrisation sont les plus courants ; la phlébite et l'embolie pulmonaire sont rares mais graves. Le tabac, le surpoids et le diabète augmentent nettement ces risques.",
    sections: [
      {
        heading: "Les suites attendues",
        paragraphs: ["Ces manifestations sont habituelles et diminuent progressivement."],
        bullets: [
          "Douleurs et tiraillements du ventre, plus marqués en cas de réparation des muscles.",
          "Position légèrement penchée en avant les premiers jours.",
          "Gonflement et ecchymoses du bas-ventre.",
          "Engourdissement de la peau sous le nombril, souvent prolongé et parfois partiellement définitif.",
          "Drains éventuels pendant quelques jours.",
        ],
      },
      {
        heading: "Les complications fréquentes ou moins fréquentes",
        paragraphs: [],
        bullets: [
          "Sérome : accumulation de liquide sous la peau, l'une des complications les plus fréquentes ; peut nécessiter des ponctions répétées.",
          "Hématome : collection de sang, qui peut imposer une reprise au bloc.",
          "Retard de cicatrisation ou désunion de la cicatrice, en particulier au centre.",
          "Infection de la plaie, traitée par soins et antibiotiques.",
          "Cicatrice épaisse, élargie ou mal placée ; « oreilles » aux extrémités de la cicatrice.",
          "Asymétrie, irrégularités, nombril d'aspect imparfait.",
        ],
      },
      {
        heading: "Les complications rares mais graves",
        paragraphs: [
          "La phlébite (thrombose veineuse) et l'embolie pulmonaire sont les complications graves à connaître. Leur prévention repose sur l'évaluation des risques, le lever précoce, les bas de contention et, selon les cas, un traitement anticoagulant.",
          "La nécrose cutanée (mort d'une partie de la peau) est favorisée par le tabac. D'autres complications graves, liées à l'anesthésie ou à une infection sévère, sont exceptionnelles.",
        ],
      },
      {
        heading: "Quand appeler le chirurgien ou le 15",
        paragraphs: [
          "Appelez le 15 ou le 112 en cas d'essoufflement brutal, de douleur thoracique, de crachat de sang, de malaise ou de perte de connaissance : ce sont des signes possibles d'embolie pulmonaire.",
          "Contactez rapidement votre chirurgien en cas de :",
        ],
        bullets: [
          "Mollet douloureux, chaud ou gonflé (signe possible de phlébite).",
          "Fièvre, rougeur qui s'étend, écoulement purulent ou odeur de la cicatrice.",
          "Gonflement rapide et tendu d'une zone du ventre.",
          "Peau qui devient noire, violacée ou froide le long de la cicatrice.",
          "Douleur qui augmente au lieu de diminuer.",
        ],
      },
      {
        heading: "Reprise chirurgicale",
        paragraphs: [
          "Une reprise peut être nécessaire en urgence (hématome) ou à distance, pour améliorer une cicatrice, des « oreilles » ou une asymétrie. Les reprises à visée esthétique ne sont envisagées qu'après stabilisation, en général au moins un an après l'intervention.",
        ],
      },
      {
        heading: "Les facteurs de risque",
        paragraphs: [],
        bullets: [
          "Tabac et nicotine sous toutes leurs formes : facteur de risque majeur de nécrose et de défaut de cicatrisation ; un arrêt complet est demandé plusieurs semaines avant et après.",
          "Surpoids important ou poids instable.",
          "Diabète, maladies cardiovasculaires ou respiratoires.",
          "Antécédents de phlébite ou d'embolie, contraception œstroprogestative ou traitement hormonal, à signaler.",
          "Association à d'autres interventions dans le même temps opératoire.",
        ],
      },
    ],
    sources: [HAS, SOFCPRE, ANSM],
    medicalReview: REVIEW,
    updatedAt: UPDATED_AT,
  },
  {
    interventionId: "abdominoplasty",
    kind: "cost",
    locale: "fr",
    title: "Prix d'une abdominoplastie",
    summary:
      "Contenu d'un devis d'abdominoplastie, règles françaises, prise en charge possible après grande perte de poids et coût des complications.",
    answer:
      "Le coût d'une abdominoplastie dépend de l'étendue de l'intervention, de la durée d'hospitalisation, du chirurgien et de l'établissement. Nous n'indiquons pas de prix : seul un devis détaillé et daté permet de le connaître. Elle peut être prise en charge par l'Assurance maladie lorsqu'un tablier abdominal recouvre le pubis, après accord préalable.",
    sections: [
      {
        heading: "Ce que contient un devis",
        paragraphs: [
          "Un devis détaillé et daté est obligatoire avant toute chirurgie esthétique. Pour une abdominoplastie, vérifiez notamment :",
        ],
        bullets: [
          "Les honoraires du chirurgien et ceux de l'anesthésiste.",
          "Les frais de l'établissement : bloc, nuits d'hospitalisation (souvent une à trois), chambre.",
          "La gaine de contention, les bas de contention, les pansements et un éventuel traitement anticoagulant.",
          "Les examens préopératoires.",
          "Les consultations de suivi et les éventuelles ponctions de sérome.",
          "Les conditions prévues en cas de reprise ou de complication.",
        ],
      },
      {
        heading: "Les règles applicables en France",
        paragraphs: [
          "L'article L6322-2 du Code de la santé publique impose un délai minimal de 15 jours entre la remise du devis et l'intervention. Aucune somme autre que les honoraires de consultation ne peut être demandée avant la fin de ce délai.",
          "Lorsque l'intervention est purement esthétique, elle est soumise à la TVA au taux normal et les honoraires ne sont pas remboursés.",
        ],
      },
      {
        heading: "Quand l'Assurance maladie peut prendre en charge",
        paragraphs: [
          "Lorsqu'un tablier abdominal important recouvre au moins en partie le pubis, typiquement après une grande perte de poids (y compris après chirurgie de l'obésité), l'intervention peut être prise en charge. Elle nécessite une demande d'accord préalable (entente préalable) adressée à l'Assurance maladie par le chirurgien, qui doit répondre à des critères précis.",
          "Même en cas de prise en charge, des dépassements d'honoraires sont possibles selon le secteur du chirurgien et de l'anesthésiste, ainsi que des frais de chambre particulière. Votre complémentaire santé peut en couvrir une partie : demandez-lui un avis sur le devis. Une liposuccion associée à visée esthétique reste à votre charge.",
        ],
      },
      {
        heading: "Le coût des complications et des reprises",
        paragraphs: [
          "Les complications sont plus fréquentes après une abdominoplastie que pour d'autres interventions esthétiques. Un sérome peut nécessiter plusieurs consultations, une désunion des soins infirmiers prolongés, un hématome une reprise au bloc. À cela peuvent s'ajouter un arrêt de travail plus long et des frais de transport.",
          "Demandez avant de vous engager ce qui est inclus en cas de complication ou de reprise de cicatrice.",
        ],
      },
      {
        heading: "Points de vigilance",
        paragraphs: [
          "Un prix nettement plus bas que les pratiques habituelles doit inciter à vérifier ce qui est inclus (anesthésie, nuits d'hospitalisation, suivi), la qualification du chirurgien sur l'Annuaire santé ou auprès de l'Ordre des médecins, et l'organisation en cas de complication.",
          "Méfiez-vous des demandes d'acompte avant la fin du délai légal et des propositions de crédit faites lors de la consultation. La décision doit rester indépendante de toute contrainte financière ou de calendrier.",
        ],
      },
    ],
    sources: [LEGIFRANCE_L6322_2, AMELI, HAS, ANNUAIRE_SANTE, SOFCPRE],
    medicalReview: REVIEW,
    updatedAt: UPDATED_AT,
  },
  {
    interventionId: "abdominoplasty",
    kind: "recovery",
    locale: "fr",
    title: "Convalescence après une abdominoplastie",
    summary:
      "Hospitalisation, gaine, reprise du travail et du sport, cicatrice et signes d'alerte : les étapes de la convalescence après une abdominoplastie.",
    answer:
      "La convalescence d'une abdominoplastie est plus longue que celle de nombreuses autres interventions esthétiques : une à trois nuits d'hospitalisation, une gaine pendant plusieurs semaines, un arrêt de travail de 2 à 4 semaines selon l'activité et une reprise progressive du sport après 6 à 8 semaines. La cicatrice évolue pendant 12 à 18 mois.",
    sections: [
      {
        heading: "À l'hôpital et les premiers jours",
        paragraphs: [
          "Le lever est généralement encouragé dès le lendemain pour limiter le risque de phlébite. Des drains peuvent être laissés quelques jours. La marche se fait d'abord légèrement penchée en avant, pour ne pas tirer sur la cicatrice.",
        ],
        bullets: [
          "Porter la gaine de contention et, si prescrits, les bas de contention.",
          "Suivre le traitement anticoagulant s'il a été prescrit.",
          "Marcher régulièrement, même brièvement, plusieurs fois par jour.",
          "Ne pas fumer ni utiliser de produits nicotinés.",
        ],
      },
      {
        heading: "Les premières semaines",
        paragraphs: [
          "Les douleurs diminuent progressivement, mais les tiraillements et la fatigue peuvent durer plusieurs semaines, surtout en cas de réparation des muscles. La gaine est en général portée jour et nuit pendant plusieurs semaines.",
          "L'arrêt de travail est souvent de 2 à 4 semaines, davantage pour un métier physique. Le port de charges lourdes est à éviter pendant plusieurs semaines. La conduite automobile reprend selon votre confort et l'avis du chirurgien.",
        ],
      },
      {
        heading: "Sport, bain et soleil",
        paragraphs: [
          "La marche est encouragée dès le début. Le sport et les exercices sollicitant les abdominaux sont à reprendre progressivement après 6 à 8 semaines, selon les consignes du chirurgien. Les bains, la piscine et la mer attendent la cicatrisation complète de la plaie.",
          "La cicatrice doit être protégée du soleil pendant au moins un an (vêtement couvrant ou écran solaire) pour limiter le risque de pigmentation.",
        ],
      },
      {
        heading: "La cicatrice et le résultat",
        paragraphs: [
          "La cicatrice est souvent rouge et parfois épaisse pendant les premiers mois, puis s'éclaircit et s'assouplit en 12 à 18 mois. Son aspect final varie d'une personne à l'autre et n'est pas prévisible avec certitude. L'engourdissement du bas-ventre s'améliore lentement, parfois incomplètement.",
          "Le résultat dépend aussi de la stabilité du poids et d'éventuelles grossesses ultérieures.",
        ],
      },
      {
        heading: "Le suivi",
        paragraphs: [
          "Des consultations sont prévues pour le retrait des drains et des fils, la surveillance d'un éventuel sérome, puis à plusieurs mois. Elles permettent de traiter tôt un problème de cicatrisation.",
        ],
      },
      {
        heading: "Signes d'alerte",
        paragraphs: [
          "Appelez le 15 ou le 112 en cas d'essoufflement brutal, de douleur dans la poitrine, de crachat de sang ou de malaise. Contactez rapidement votre chirurgien en cas de mollet douloureux ou gonflé, de fièvre, de rougeur qui s'étend, d'écoulement de la cicatrice, de gonflement rapide du ventre ou de peau qui noircit.",
        ],
      },
    ],
    sources: [HAS, SOFCPRE, AMELI],
    medicalReview: REVIEW,
    updatedAt: UPDATED_AT,
  },
  {
    interventionId: "abdominoplasty",
    kind: "decision",
    locale: "fr",
    title: "Abdominoplastie : avant de se décider",
    summary:
      "Poids stable, projets de grossesse, tabac, motivations et questions à poser : les points à examiner avant de décider d'une abdominoplastie.",
    answer:
      "Une abdominoplastie s'envisage à poids stable depuis plusieurs mois, idéalement lorsque les projets de grossesse sont terminés, et après arrêt du tabac. La demande doit venir de vous. Prenez le temps de consulter, de comparer éventuellement deux avis et d'utiliser le délai légal de 15 jours. Notre plateforme s'adresse uniquement aux personnes majeures.",
    sections: [
      {
        heading: "Est-ce le bon moment ?",
        paragraphs: ["Plusieurs conditions influencent à la fois la sécurité et la durabilité du résultat."],
        bullets: [
          "Poids stable depuis plusieurs mois : une perte ou une prise de poids après l'intervention modifie le résultat. Après une chirurgie de l'obésité, un délai de stabilisation est habituellement demandé.",
          "Projets de grossesse : une grossesse ultérieure est possible mais peut altérer le résultat ; il est préférable d'attendre d'avoir terminé ses projets.",
          "Après un accouchement, un délai de récupération et une rééducation sont généralement conseillés avant d'envisager la chirurgie.",
          "Tabac : un arrêt complet plusieurs semaines avant et après est indispensable.",
          "Organisation : plusieurs semaines de convalescence, avec une aide utile à domicile, notamment avec de jeunes enfants.",
        ],
      },
      {
        heading: "Une demande qui vient de vous",
        paragraphs: [
          "L'abdominoplastie corrige un excédent de peau et, si besoin, un écartement des muscles. Ce n'est pas une méthode d'amaigrissement. La décision doit répondre à votre propre gêne, et non à la pression d'un partenaire, de l'entourage ou d'images retouchées.",
        ],
      },
      {
        heading: "Dysmorphophobie : savoir la reconnaître",
        paragraphs: [
          "Une préoccupation très envahissante pour un défaut que les autres jugent minime peut relever d'un trouble dysmorphique corporel. Dans ce cas, la chirurgie soulage rarement et un accompagnement est plus adapté.",
          "Parlez-en à votre médecin traitant, à un psychologue ou à un psychiatre si votre apparence vous fait éviter des activités, des relations ou le travail, ou si vous y pensez plusieurs heures par jour. En cas d'idées suicidaires, appelez le 3114.",
        ],
      },
      {
        heading: "Questions à poser au chirurgien",
        paragraphs: [],
        bullets: [
          "Êtes-vous qualifié en chirurgie plastique, reconstructrice et esthétique ? (vérifiable sur l'Annuaire santé ou auprès de l'Ordre des médecins)",
          "Abdominoplastie complète, mini-abdominoplastie : laquelle et pourquoi dans mon cas ?",
          "Une réparation des muscles est-elle nécessaire ?",
          "Où se situera la cicatrice et quelle sera sa longueur ?",
          "Comment est prévenu le risque de phlébite ? Mon traitement hormonal doit-il être adapté ?",
          "Ma situation peut-elle relever d'une prise en charge par l'Assurance maladie ?",
          "Comment sont gérés un sérome, une complication ou une reprise, et qui joindre en urgence ?",
        ],
      },
      {
        heading: "Deuxième avis et délai de réflexion",
        paragraphs: [
          "Demander un deuxième avis est courant et légitime. En France, un délai minimal de 15 jours sépare la remise du devis détaillé et daté de l'intervention ; aucun paiement autre que les honoraires de consultation ne peut être exigé avant. Vous pouvez reporter ou renoncer à tout moment.",
        ],
      },
    ],
    sources: [HAS, SOFCPRE, LEGIFRANCE_L6322_2, ANNUAIRE_SANTE, N3114],
    medicalReview: REVIEW,
    updatedAt: UPDATED_AT,
  },
  {
    interventionId: "abdominoplasty",
    kind: "alternatives",
    locale: "fr",
    title: "Alternatives à l'abdominoplastie",
    summary:
      "Rééducation du diastasis, activité physique, mini-abdominoplastie, liposuccion ou ne rien faire : options, limites et risques comparés.",
    answer:
      "Selon la situation, des alternatives existent : rééducation abdominale et périnéale en cas de diastasis modéré, activité physique et stabilisation du poids, mini-abdominoplastie si l'excédent est limité, liposuccion seule si la peau est de bonne qualité, ou ne rien faire. Aucune ne retire un excédent de peau important sans chirurgie.",
    sections: [
      {
        heading: "Rééducation et kinésithérapie",
        paragraphs: [
          "Après une grossesse, une rééducation périnéale puis abdominale avec un kinésithérapeute ou une sage-femme est généralement recommandée en premier lieu. En cas de diastasis modéré, des exercices adaptés peuvent améliorer la tonicité et la fonction de la paroi.",
          "La rééducation ne retire pas l'excédent de peau et ne referme pas toujours un diastasis important, mais elle ne comporte pas de risque chirurgical et reste utile même si une intervention est envisagée ensuite. Certains exercices abdominaux classiques peuvent être déconseillés pendant cette période : demandez conseil.",
        ],
      },
      {
        heading: "Activité physique et poids",
        paragraphs: [
          "Une activité physique régulière et un poids stable améliorent la silhouette et réduisent les risques en cas d'intervention ultérieure. Elles ne corrigent pas une peau distendue ou des vergetures.",
        ],
      },
      {
        heading: "Les alternatives chirurgicales",
        paragraphs: ["D'autres interventions répondent à des situations plus limitées, avec leurs propres risques."],
        bullets: [
          "Mini-abdominoplastie : cicatrice plus courte, adaptée à un excédent limité sous le nombril ; résultat plus restreint.",
          "Liposuccion seule : uniquement si la peau est ferme et sans excédent ; elle peut accentuer un relâchement existant.",
          "Réparation isolée d'un diastasis ou d'une hernie, lorsqu'il existe une gêne fonctionnelle, à discuter avec un chirurgien.",
        ],
      },
      {
        heading: "Les techniques non chirurgicales",
        paragraphs: [
          "Des appareils (radiofréquence, cryolipolyse, ultrasons) sont proposés pour la graisse localisée ou la fermeté de la peau. Leurs effets sont modestes, variables et ne remplacent pas le retrait d'un excédent cutané. Ils ont aussi leurs effets indésirables (brûlures, douleurs, irrégularités) ; renseignez-vous sur le dispositif et la personne qui le pratique.",
        ],
      },
      {
        heading: "Ne rien faire",
        paragraphs: [
          "Ne pas opérer est une option légitime, en particulier si des grossesses sont encore envisagées ou si le poids n'est pas stable. La gêne peut être réévaluée plus tard.",
        ],
      },
      {
        heading: "Comparaison honnête",
        paragraphs: [],
        bullets: [
          "Abdominoplastie : seule option qui retire un excédent de peau important ; longue cicatrice, convalescence de plusieurs semaines, complications plus fréquentes.",
          "Mini-abdominoplastie ou liposuccion : moins lourdes ; indications limitées, résultat plus restreint.",
          "Rééducation : aucun risque chirurgical, bénéfice fonctionnel ; aucune action sur l'excédent de peau.",
          "Techniques non chirurgicales : effets modestes et inconstants.",
        ],
      },
    ],
    sources: [HAS, SOFCPRE, AMELI],
    medicalReview: REVIEW,
    updatedAt: UPDATED_AT,
  },

  // ───────────────────────── AUGMENTATION MAMMAIRE ─────────────────────────
  {
    interventionId: "breast-augmentation",
    kind: "risks",
    locale: "fr",
    title: "Augmentation mammaire : les risques",
    summary:
      "Coque, rupture, LAGC-AIM, symptômes rapportés, réinterventions : les risques de l'augmentation mammaire et des implants, et les signes d'alerte.",
    answer:
      "L'augmentation mammaire comporte des risques liés à la chirurgie (hématome, infection) et des risques propres aux implants, qui persistent tant qu'ils sont en place : coque, rupture, et plus rarement un lymphome (LAGC-AIM). Les implants ne sont pas définitifs : une ou plusieurs réinterventions au cours de la vie sont à prévoir.",
    sections: [
      {
        heading: "Les suites attendues",
        paragraphs: [],
        bullets: [
          "Douleurs et sensation de tension thoracique les premiers jours, plus marquées si l'implant est placé sous le muscle.",
          "Gonflement et ecchymoses ; seins plus hauts et plus fermes au début, qui prennent leur place en quelques semaines à quelques mois.",
          "Sensibilité modifiée des mamelons ou de la peau, souvent transitoire.",
        ],
      },
      {
        heading: "Les complications liées à la chirurgie",
        paragraphs: [],
        bullets: [
          "Hématome, le plus souvent dans les premières heures ou les premiers jours ; peut nécessiter une reprise.",
          "Infection, peu fréquente, qui peut imposer le retrait temporaire de l'implant.",
          "Cicatrices épaisses ou visibles.",
          "Troubles durables de la sensibilité.",
          "Risques liés à l'anesthésie, évalués lors de la consultation d'anesthésie obligatoire.",
        ],
      },
      {
        heading: "Les complications liées aux implants",
        paragraphs: [
          "Elles peuvent survenir à tout moment, parfois des années après la pose.",
        ],
        bullets: [
          "Coque périprothétique : durcissement de la capsule autour de l'implant, avec douleur ou déformation ; c'est une cause fréquente de réintervention.",
          "Rupture ou usure de l'enveloppe : le risque augmente avec l'âge de l'implant ; elle peut passer inaperçue et impose le remplacement.",
          "Déplacement, rotation, ondulations ou visibilité de l'implant ; asymétrie.",
          "Lymphome anaplasique à grandes cellules associé aux implants mammaires (LAGC-AIM) : cancer rare du système immunitaire, associé surtout aux implants à surface macrotexturée. Il se manifeste le plus souvent par un gonflement tardif du sein (épanchement) ou une masse. L'ANSM suit ce risque et a retiré du marché en France les implants macrotexturés en 2019.",
          "Symptômes généraux rapportés (« breast implant illness ») : fatigue, douleurs articulaires, troubles de la concentration décrits par certaines patientes ; le lien de causalité avec les implants n'est pas établi et fait l'objet d'études.",
        ],
      },
      {
        heading: "Ce qui doit faire consulter",
        paragraphs: [
          "Contactez rapidement votre chirurgien en cas de sein qui gonfle d'un seul côté dans les premiers jours, de fièvre, de rougeur, d'écoulement de la cicatrice ou de douleur croissante.",
          "À distance, consultez en cas de gonflement d'un sein, de masse, de durcissement, de déformation ou de douleur nouvelle, même plusieurs années après l'intervention. En cas d'essoufflement brutal, de douleur thoracique intense ou de malaise, appelez le 15 ou le 112.",
        ],
      },
      {
        heading: "Implants non définitifs, suivi et carte d'implant",
        paragraphs: [
          "Les implants ne durent pas toute la vie. Leur remplacement est envisagé en cas de complication ou d'usure, et non à date fixe. Un suivi clinique régulier, et une imagerie selon les recommandations en vigueur, sont nécessaires pendant toute la durée de port.",
          "Votre chirurgien doit vous remettre une information écrite et la carte d'implant, qui indique la marque, le modèle et le numéro de lot. Conservez-la : elle permet d'être informée en cas d'alerte sanitaire. Signalez vos implants lors de toute mammographie. Les incidents peuvent être déclarés sur le portail national de signalement des événements sanitaires indésirables.",
        ],
      },
      {
        heading: "Les facteurs de risque",
        paragraphs: [],
        bullets: [
          "Tabac, qui altère la cicatrisation et augmente le risque d'infection.",
          "Implants de très grand volume par rapport à la peau et à la glande.",
          "Antécédents de radiothérapie ou de chirurgie du sein.",
          "Troubles de la coagulation, diabète ou maladies chroniques non équilibrées.",
        ],
      },
    ],
    sources: [ANSM_IMPLANTS, HAS, SOFCPRE, LEGIFRANCE_L6322_2],
    medicalReview: REVIEW,
    updatedAt: UPDATED_AT,
  },
  {
    interventionId: "breast-augmentation",
    kind: "cost",
    locale: "fr",
    title: "Prix d'une augmentation mammaire",
    summary:
      "Contenu d'un devis d'augmentation mammaire, coût des implants, du suivi et des réinterventions, règles françaises et cas de prise en charge.",
    answer:
      "Le coût d'une augmentation mammaire dépend de la technique, du type d'implant, du chirurgien, de l'anesthésie et de l'établissement. Nous n'indiquons pas de prix : seul un devis détaillé et daté permet de le connaître. Une augmentation purement esthétique n'est pas remboursée ; il faut aussi prévoir le coût du suivi et des réinterventions futures.",
    sections: [
      {
        heading: "Ce que contient un devis",
        paragraphs: ["Un devis détaillé et daté est obligatoire. Vérifiez qu'il précise :"],
        bullets: [
          "Les honoraires du chirurgien et de l'anesthésiste.",
          "Le prix des implants, avec la marque, le modèle et le type de surface.",
          "Les frais de l'établissement (bloc, séjour ambulatoire ou nuit).",
          "Le soutien-gorge de maintien, les pansements, les médicaments.",
          "Les examens préalables éventuels (imagerie mammaire).",
          "Les consultations de suivi et les conditions en cas de complication ou de réintervention.",
        ],
      },
      {
        heading: "Les règles applicables en France",
        paragraphs: [
          "L'article L6322-2 du Code de la santé publique impose un délai minimal de 15 jours entre la remise du devis et l'intervention. Aucune somme autre que les honoraires de consultation ne peut être exigée avant la fin de ce délai.",
          "Une augmentation mammaire purement esthétique est soumise à la TVA au taux normal et n'est pas prise en charge par l'Assurance maladie.",
        ],
      },
      {
        heading: "Quand l'Assurance maladie peut intervenir",
        paragraphs: [
          "La reconstruction mammaire après cancer du sein est prise en charge. Certaines malformations ou asymétries importantes (par exemple seins tubéreux, absence de développement d'un sein) peuvent aussi relever d'une prise en charge, après demande d'accord préalable et selon des critères précis.",
          "Dans ces situations, des dépassements d'honoraires restent possibles selon le secteur du chirurgien et de l'anesthésiste. Votre complémentaire santé peut en couvrir une partie.",
        ],
      },
      {
        heading: "Le coût dans la durée",
        paragraphs: [
          "Les implants ne sont pas définitifs. Il faut anticiper le coût du suivi (consultations, imagerie) et d'une ou plusieurs réinterventions au cours de la vie : changement d'implant, traitement d'une coque, retrait. Ces réinterventions sont en règle générale à votre charge lorsque l'intervention initiale était esthétique.",
          "Certains fabricants proposent des garanties sur l'implant lui-même ; elles couvrent rarement l'ensemble des frais d'une réintervention (honoraires, anesthésie, établissement). Demandez à lire leurs conditions.",
        ],
      },
      {
        heading: "Points de vigilance",
        paragraphs: [
          "Un prix très bas doit inciter à vérifier le type et l'origine des implants, ce qui est inclus, la qualification du chirurgien (Annuaire santé, Ordre des médecins) et l'organisation du suivi à long terme.",
          "Méfiez-vous de toute demande d'acompte avant la fin du délai légal et des propositions de crédit faites au moment de la consultation : un crédit engage sur plusieurs années, alors que d'autres frais peuvent survenir pendant cette période.",
        ],
      },
    ],
    sources: [LEGIFRANCE_L6322_2, AMELI, ANSM_IMPLANTS, ANNUAIRE_SANTE, SOFCPRE],
    medicalReview: REVIEW,
    updatedAt: UPDATED_AT,
  },
  {
    interventionId: "breast-augmentation",
    kind: "recovery",
    locale: "fr",
    title: "Convalescence après une augmentation mammaire",
    summary:
      "Premiers jours, soutien-gorge, reprise du travail et du sport, cicatrices, suivi à long terme et signes d'alerte après une augmentation mammaire.",
    answer:
      "Après une augmentation mammaire, les douleurs sont surtout marquées les premiers jours. La reprise d'une activité de bureau est souvent possible après environ une semaine, le sport sollicitant les bras et les pectoraux après 6 semaines environ. La forme se stabilise en quelques mois, et un suivi est nécessaire tant que les implants sont en place.",
    sections: [
      {
        heading: "Les premiers jours",
        paragraphs: [
          "L'intervention se fait en ambulatoire ou avec une nuit d'hospitalisation. Les douleurs, de type courbatures, sont plus marquées lorsque l'implant est placé sous le muscle. Les seins sont gonflés, tendus et placés haut.",
        ],
        bullets: [
          "Porter le soutien-gorge de maintien jour et nuit, selon la durée indiquée.",
          "Éviter de lever les bras au-dessus de la tête et de porter des charges.",
          "Prendre les antalgiques prescrits ; éviter les médicaments qui favorisent les saignements sans avis médical.",
          "Respecter les consignes de douche et de pansements.",
        ],
      },
      {
        heading: "Les premières semaines",
        paragraphs: [
          "L'arrêt de travail est souvent d'environ une semaine pour une activité de bureau, davantage pour un métier physique ou impliquant le port de charges. La conduite reprend lorsque les mouvements des bras sont aisés, selon l'avis du chirurgien.",
          "Le gonflement diminue et les implants descendent progressivement. Une asymétrie transitoire est fréquente à ce stade.",
        ],
      },
      {
        heading: "Sport, sommeil et soleil",
        paragraphs: [
          "La marche est possible rapidement. Le sport sollicitant les bras et les pectoraux (musculation, natation, sports de raquette) est à reprendre après 6 semaines environ, selon les consignes du chirurgien. Dormir sur le ventre est déconseillé les premières semaines.",
          "Les cicatrices doivent être protégées du soleil pendant au moins un an. Elles sont rosées les premiers mois, puis s'éclaircissent progressivement.",
        ],
      },
      {
        heading: "Le résultat et le suivi à long terme",
        paragraphs: [
          "La forme des seins se stabilise en quelques mois. Des consultations de contrôle sont prévues dans les semaines et les mois qui suivent, puis un suivi régulier, avec imagerie selon les recommandations en vigueur, pendant toute la durée de port des implants.",
          "Conservez votre carte d'implant et signalez vos implants à chaque examen du sein. L'allaitement reste possible dans la plupart des cas ; parlez-en à votre chirurgien en cas de projet de grossesse.",
        ],
      },
      {
        heading: "Signes d'alerte",
        paragraphs: [
          "Contactez rapidement votre chirurgien en cas de gonflement brutal d'un sein, de douleur croissante, de fièvre, de rougeur ou d'écoulement de la cicatrice. À distance, consultez en cas de gonflement tardif, de masse, de durcissement ou de déformation d'un sein.",
          "En cas d'essoufflement brutal, de douleur thoracique intense ou de malaise, appelez le 15 ou le 112.",
        ],
      },
    ],
    sources: [ANSM_IMPLANTS, HAS, SOFCPRE],
    medicalReview: REVIEW,
    updatedAt: UPDATED_AT,
  },
  {
    interventionId: "breast-augmentation",
    kind: "decision",
    locale: "fr",
    title: "Augmentation mammaire : avant de se décider",
    summary:
      "Âge, grossesse, motivations, engagement à long terme des implants, dysmorphophobie et questions à poser avant une augmentation mammaire.",
    answer:
      "Une augmentation mammaire engage sur le long terme : les implants nécessitent un suivi et des réinterventions au cours de la vie. Elle s'envisage à l'âge adulte, en dehors d'une grossesse ou d'un allaitement, sur une demande qui vient de vous. Prenez le temps de consulter, éventuellement deux chirurgiens, et utilisez le délai légal de 15 jours.",
    sections: [
      {
        heading: "Est-ce le bon moment ?",
        paragraphs: [],
        bullets: [
          "Âge : notre plateforme s'adresse uniquement aux personnes majeures ; une indication esthétique n'est pas retenue avant 18 ans.",
          "Grossesse et allaitement : l'intervention est exclue pendant ces périodes ; une grossesse ultérieure peut modifier la forme des seins.",
          "Poids stable : une variation importante modifie le volume et la forme des seins.",
          "Santé du sein : un bilan d'imagerie peut être demandé avant l'intervention, selon l'âge et les antécédents.",
        ],
      },
      {
        heading: "Un engagement à long terme",
        paragraphs: [
          "Choisir des implants, c'est accepter un suivi régulier, la possibilité d'une ou plusieurs réinterventions et leur coût, ainsi que des risques qui persistent tant que les implants sont en place. Pensez à ce que vous souhaiterez dans 10 ou 20 ans, y compris la possibilité de les retirer un jour.",
        ],
      },
      {
        heading: "Une demande qui vient de vous",
        paragraphs: [
          "La décision doit répondre à votre propre souhait, et non à celui d'un partenaire, de l'entourage ou à des images retouchées. Un volume très important par rapport à votre morphologie augmente certains risques et peut ne pas être réalisable.",
          "Si votre apparence vous occupe plusieurs heures par jour, vous fait éviter des situations ou si vous restez insatisfaite après de précédentes interventions, il peut s'agir d'un trouble dysmorphique corporel (dysmorphophobie). La chirurgie soulage alors rarement ; parlez-en à votre médecin traitant, à un psychologue ou à un psychiatre. En cas d'idées suicidaires, appelez le 3114.",
        ],
      },
      {
        heading: "Questions à poser au chirurgien",
        paragraphs: [],
        bullets: [
          "Êtes-vous qualifié en chirurgie plastique, reconstructrice et esthétique ? (vérifiable sur l'Annuaire santé ou auprès de l'Ordre des médecins)",
          "Quel implant proposez-vous (marque, modèle, surface, forme, remplissage) et pourquoi ?",
          "Où sera-t-il placé (devant ou derrière le muscle) et par quelle cicatrice ?",
          "Le lipofilling est-il une option dans mon cas ?",
          "Quel suivi prévoir, à quelle fréquence, avec quels examens ?",
          "Que se passe-t-il en cas de coque, de rupture ou de complication, et qui joindre en urgence ?",
          "Vais-je recevoir une information écrite et la carte d'implant ?",
        ],
      },
      {
        heading: "Deuxième avis et délai de réflexion",
        paragraphs: [
          "Demander un deuxième avis est courant et légitime. En France, un délai minimal de 15 jours sépare la remise du devis détaillé et daté de l'intervention ; aucun paiement autre que les honoraires de consultation ne peut être exigé avant. Utilisez ce temps pour relire l'information écrite sur l'implant. Reporter ou renoncer reste possible à tout moment.",
        ],
      },
    ],
    sources: [ANSM_IMPLANTS, HAS, SOFCPRE, LEGIFRANCE_L6322_2, N3114],
    medicalReview: REVIEW,
    updatedAt: UPDATED_AT,
  },
  {
    interventionId: "breast-augmentation",
    kind: "alternatives",
    locale: "fr",
    title: "Alternatives à l'augmentation mammaire",
    summary:
      "Lipofilling, soutien-gorge adapté, prothèses externes ou ne rien faire : alternatives aux implants mammaires, leurs limites et leurs risques.",
    answer:
      "Plusieurs alternatives aux implants existent : le lipofilling (transfert de graisse), un soutien-gorge bien ajusté ou rembourré, des prothèses externes amovibles, ou ne rien faire. Le lipofilling permet un gain de volume plus modeste et a ses propres risques ; les solutions externes ne présentent pas de risque chirurgical.",
    sections: [
      {
        heading: "Le lipofilling mammaire",
        paragraphs: [
          "La graisse est prélevée par liposuccion sur une autre zone du corps, purifiée puis réinjectée dans les seins. Le gain de volume est plus modeste qu'avec un implant et une partie de la graisse se résorbe : plusieurs séances peuvent être nécessaires. Il faut disposer d'une réserve de graisse suffisante.",
          "Les risques comprennent les complications de la liposuccion (ecchymoses, irrégularités de la zone de prélèvement), la formation de kystes ou de calcifications dans le sein, qui doivent être signalées lors des examens d'imagerie, et un résultat variable. Le volume obtenu évolue avec le poids.",
        ],
      },
      {
        heading: "Soutien-gorge adapté et rembourrage",
        paragraphs: [
          "Un soutien-gorge bien ajusté, conseillé par une personne formée, change souvent l'apparence de la poitrine. Les modèles rembourrés ou les coussinets amovibles modifient le volume apparent de façon réversible, sans exposer à un risque médical.",
        ],
      },
      {
        heading: "Les prothèses mammaires externes",
        paragraphs: [
          "Des prothèses externes, placées dans le soutien-gorge ou adhésives, existent pour corriger une asymétrie ou un volume. Elles sont notamment utilisées après une chirurgie du cancer du sein, cas dans lequel elles peuvent être remboursées. Elles peuvent être contraignantes à porter (chaleur, sport), mais ne comportent pas de risque chirurgical.",
        ],
      },
      {
        heading: "Les autres interventions",
        paragraphs: [
          "Lorsque la gêne porte surtout sur un sein qui tombe plutôt que sur le volume, un lifting des seins (mastopexie) peut être plus adapté, seul ou associé. Cette intervention laisse des cicatrices plus étendues et a ses propres risques. Les injections d'acide hyaluronique pour augmenter le volume des seins ne sont pas recommandées.",
        ],
      },
      {
        heading: "Ne rien faire",
        paragraphs: [
          "Ne pas opérer est une option légitime. La forme et le volume des seins évoluent avec l'âge, les grossesses et le poids ; une décision peut être réévaluée plus tard.",
        ],
      },
      {
        heading: "Comparaison honnête",
        paragraphs: [],
        bullets: [
          "Implants : gain de volume choisi et important ; risques propres aux implants, suivi et réinterventions au cours de la vie.",
          "Lipofilling : sans implant, aspect naturel au toucher ; gain plus modeste, résorption partielle, plusieurs séances possibles.",
          "Soutien-gorge, rembourrage, prothèses externes : aucun risque médical, réversibles ; aucune modification permanente.",
          "Ne rien faire : aucun risque ; la gêne persiste mais peut évoluer.",
        ],
      },
    ],
    sources: [HAS, ANSM_IMPLANTS, SOFCPRE, AMELI],
    medicalReview: REVIEW,
    updatedAt: UPDATED_AT,
  },
];
