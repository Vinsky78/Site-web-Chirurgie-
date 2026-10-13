import type { Source } from "../types";
import type { Dossier } from "./types";

/** Blépharoplastie : fiche, sous-pages et lexique (fr, en-gb). Brouillon à relire par le comité médical. */

const REVIEW = { status: "draft" } as const;
const UPDATED_AT = "2026-10-13";

// ───────────────────────────── Sources France ─────────────────────────────
const HAS: Source = { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" };
const SOFCPRE: Source = {
  label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)",
  url: "https://www.sofcpre.fr",
};
const SFO: Source = { label: "Société française d'ophtalmologie (SFO)", url: "https://www.sfo-online.fr" };
const AMELI: Source = {
  label: "Assurance maladie — ameli.fr (prise en charge, accord préalable)",
  url: "https://www.ameli.fr",
};
const ANNUAIRE_SANTE: Source = {
  label: "Annuaire santé (vérification des professionnels inscrits au RPPS)",
  url: "https://annuaire.sante.fr",
};
const LEGIFRANCE_L6322_2: Source = {
  label: "Code de la santé publique, article L6322-2 (devis et délai de réflexion en chirurgie esthétique) — Légifrance",
  url: "https://www.legifrance.gouv.fr",
};
const SFAR: Source = { label: "Société française d'anesthésie et de réanimation (SFAR)", url: "https://sfar.org" };
const N3114: Source = { label: "3114 — numéro national de prévention du suicide", url: "https://3114.fr" };

// ───────────────────────────── Sources Royaume-Uni ─────────────────────────────
const NHS: Source = { label: "NHS: eyelid surgery and cosmetic procedures", url: "https://www.nhs.uk" };
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
const RCOPHTH: Source = { label: "The Royal College of Ophthalmologists", url: "https://www.rcophth.ac.uk" };
const BOPSS: Source = { label: "British Oculoplastic Surgery Society (BOPSS)", url: "https://www.bopss.co.uk" };
const SAMARITANS: Source = { label: "Samaritans (116 123)", url: "https://www.samaritans.org" };

export const dossier: Dossier = {
  // ═══════════════════════════════════ FRANCE ═══════════════════════════════════
  fr: {
    intervention: {
      id: "blepharoplasty",
      locale: "fr",
      slug: "blepharoplastie",
      category: "face",
      title: "Blépharoplastie (chirurgie des paupières)",
      summary:
        "La blépharoplastie retire l'excès de peau ou les poches des paupières. Techniques, risques pour l'œil, convalescence et prise en charge possible.",
      description: [
        "La blépharoplastie est une intervention chirurgicale qui corrige l'excès de peau, le relâchement ou les poches graisseuses des paupières supérieures, inférieures ou des deux. Elle vise à atténuer un regard d'aspect fatigué ou alourdi et, dans certains cas, à dégager le champ visuel lorsque la peau de la paupière supérieure retombe sur les cils.",
        "Sur la paupière supérieure, le chirurgien retire un fuseau de peau, parfois une fine bande de muscle et une petite quantité de graisse, par une incision placée dans le pli naturel de la paupière. Sur la paupière inférieure, deux voies sont possibles : une incision juste sous les cils (voie sous-ciliaire ou transcutanée), qui permet aussi de retirer un excès de peau, ou une voie transconjonctivale, par l'intérieur de la paupière, sans cicatrice visible, utilisée surtout pour les poches graisseuses sans excès de peau important. La graisse peut être retirée ou redistribuée pour combler un creux sous l'œil ; un geste de soutien de la paupière inférieure (canthopexie) est parfois associé.",
        "Les cicatrices de la paupière supérieure se cachent dans le pli palpébral et prolongent parfois légèrement le coin externe de l'œil ; elles restent rosées quelques mois puis deviennent en général peu visibles. La voie transconjonctivale ne laisse pas de cicatrice cutanée ; la voie sous-ciliaire laisse une fine cicatrice sous les cils.",
        "La blépharoplastie ne corrige pas un ptosis palpébral (paupière qui tombe parce que le muscle releveur ne la soulève pas assez), qui relève d'une autre intervention, ni la chute du sourcil, les rides de la patte d'oie, les cernes pigmentés ou les ridules fines de la peau. Un bilan ophtalmologique préalable est recommandé pour vérifier notamment l'absence de sécheresse oculaire, de ptosis ou de trouble de la vision.",
        "Le résultat est en général durable, en particulier après le retrait des poches graisseuses de la paupière inférieure, qui récidivent rarement. Le vieillissement se poursuit toutefois : la peau de la paupière supérieure peut se relâcher de nouveau au fil des années, et une nouvelle intervention est parfois envisagée longtemps après.",
      ],
      indications: [
        "Excès de peau de la paupière supérieure qui alourdit le regard ou retombe sur les cils.",
        "Excès de peau qui réduit le champ visuel supérieur, constaté par un examen du champ visuel (situation pouvant relever d'une prise en charge par l'Assurance maladie).",
        "Poches graisseuses des paupières inférieures, souvent familiales, présentes en permanence.",
        "Relâchement cutané de la paupière inférieure, éventuellement associé à un creux sous l'œil.",
        "Gêne exprimée par la personne elle-même, stable dans le temps, après information sur ce que l'intervention peut et ne peut pas corriger.",
      ],
      contraindications: [
        "Attentes irréalistes, par exemple espérer effacer toutes les rides du contour de l'œil ou changer l'expression du regard.",
        "Demande motivée par la pression d'un tiers.",
        "Préoccupation excessive pour un défaut minime ou invisible (à évoquer avec le chirurgien, voire avec un médecin).",
        "Sécheresse oculaire importante ou fermeture incomplète des paupières, à traiter ou à évaluer avant toute décision.",
        "Maladie de la thyroïde avec atteinte des yeux (orbitopathie) non stabilisée.",
        "Hypertension artérielle, diabète ou trouble de la coagulation non équilibrés.",
        "Tabagisme actif, qui altère la cicatrisation : un arrêt est recommandé avant et après l'intervention.",
        "Grossesse ou allaitement en cours : l'intervention est reportée.",
      ],
      risks: [
        {
          name: "Œdème et ecchymoses",
          detail:
            "Fréquents et attendus : gonflement et « bleus » des paupières, parfois des joues, maximaux à 48 heures et qui s'estompent en une à trois semaines.",
        },
        {
          name: "Gonflement de la conjonctive (chémosis)",
          detail:
            "Œdème transparent du blanc de l'œil, plus fréquent après une chirurgie des paupières inférieures ; il régresse le plus souvent en quelques jours à quelques semaines avec des collyres.",
        },
        {
          name: "Sécheresse oculaire",
          detail:
            "Sensation de sable, larmoiement ou yeux qui piquent, souvent transitoires ; elle peut s'aggraver chez une personne déjà sujette à la sécheresse, d'où l'intérêt du bilan ophtalmologique préalable.",
        },
        {
          name: "Fermeture incomplète des paupières (lagophtalmie)",
          detail:
            "Difficulté à fermer complètement l'œil les premières semaines, en particulier la nuit ; elle est le plus souvent transitoire et nécessite des larmes artificielles ou un gel ; une ablation de peau excessive peut la rendre durable et justifier une reprise.",
        },
        {
          name: "Ectropion ou malposition de la paupière inférieure",
          detail:
            "La paupière inférieure peut s'écarter du globe ou se tirer vers le bas, laissant apparaître le blanc sous l'iris ; peu fréquent, souvent transitoire avec massages, il nécessite parfois une correction chirurgicale.",
        },
        {
          name: "Asymétrie et résultat insatisfaisant",
          detail:
            "Petites différences entre les deux côtés, excès ou insuffisance de correction, aspect creusé si trop de graisse est retirée ; une retouche est parfois envisagée après cicatrisation, en général plusieurs mois plus tard.",
        },
        {
          name: "Cicatrice visible, petits kystes (grains de milium)",
          detail:
            "La cicatrice peut rester rosée ou épaissie plus longtemps que prévu ; de petits kystes blancs peuvent apparaître le long de la cicatrice et sont faciles à retirer.",
        },
        {
          name: "Infection",
          detail: "Rare grâce à la bonne vascularisation des paupières ; traitée le plus souvent par antibiotiques.",
        },
        {
          name: "Vision double (diplopie)",
          detail:
            "Rare ; le plus souvent liée à l'œdème et transitoire, exceptionnellement à une atteinte d'un muscle de l'œil lors du retrait de graisse de la paupière inférieure.",
        },
        {
          name: "Hématome rétrobulbaire",
          detail:
            "Rare mais grave : saignement derrière le globe oculaire, en général dans les premières heures, qui comprime le nerf optique. Douleur intense, gonflement tendu, œil qui avance ou baisse de la vision imposent une prise en charge en urgence, car la vision est en jeu.",
        },
        {
          name: "Baisse ou perte de la vision",
          detail:
            "Exceptionnelle, le plus souvent conséquence d'un hématome rétrobulbaire non traité à temps ; c'est la raison pour laquelle tout signe d'alerte visuel doit faire consulter sans délai.",
        },
        {
          name: "Risques liés à l'anesthésie",
          detail:
            "Faibles sous anesthésie locale ; en cas de sédation ou d'anesthésie générale, ils sont évalués lors de la consultation d'anesthésie obligatoire.",
        },
      ],
      procedure: {
        anaesthesia:
          "Anesthésie locale, souvent pour les paupières supérieures seules ; anesthésie locale avec sédation ou anesthésie générale pour les quatre paupières ou la voie transconjonctivale.",
        duration: "Environ 45 minutes à 1 heure pour les paupières supérieures ; 1 h 30 à 3 heures pour les quatre paupières.",
        hospitalStay: "Le plus souvent en ambulatoire (sortie le jour même).",
      },
      recovery: [
        "J0 à J2 : tête surélevée, compresses froides ou poches de froid sur les paupières, collyres et pommades prescrits ; une vision un peu floue liée à la pommade est fréquente.",
        "J2 à J3 : pic du gonflement et des ecchymoses, puis amélioration progressive.",
        "J5 à J7 : retrait des fils lorsqu'ils ne sont pas résorbables.",
        "Semaine 1 à 2 : reprise d'une activité de bureau souvent possible entre 7 et 14 jours, selon l'aspect des ecchymoses et la nature du travail ; lunettes de soleil conseillées à l'extérieur.",
        "Environ 2 semaines : reprise du maquillage des yeux et des lentilles de contact, sur avis du chirurgien.",
        "Semaines 2 à 4 : reprise progressive du sport ; éviter piscine, sauna, efforts intenses et exposition solaire directe sans protection pendant plusieurs semaines.",
        "Mois 3 à 6 : disparition de l'œdème résiduel, cicatrices qui blanchissent ; le résultat est considéré comme stabilisé vers 6 mois.",
      ],
      alternatives: [
        "Ne rien faire : une option légitime, d'autant que l'excès de peau évolue lentement ; la décision peut être reconsidérée plus tard.",
        "Injections d'acide hyaluronique dans la vallée des larmes : atténuent un creux sous l'œil sans retirer les poches ni la peau ; effet temporaire, risques propres (gonflement, effet bleuté, complications vasculaires rares mais graves).",
        "Injections de toxine botulique : agissent sur les rides de la patte d'oie et peuvent relever légèrement la queue du sourcil, sans effet sur l'excès de peau ; effet de quelques mois, risque de chute transitoire de la paupière.",
        "Techniques de médecine esthétique sur la peau (laser, peeling, radiofréquence) : peuvent améliorer la qualité de la peau et les ridules, avec un effet limité sur le relâchement ; risques de brûlure ou de troubles de la pigmentation.",
        "Lifting du sourcil, lorsque la lourdeur du regard vient surtout de la chute du sourcil : intervention différente, avec ses propres risques.",
      ],
      faq: [
        {
          question: "La blépharoplastie est-elle douloureuse ?",
          answer:
            "Les douleurs sont en général modérées : sensation de tiraillement, de brûlure ou de sable dans les yeux les premiers jours, soulagée par les antalgiques simples, le froid et les collyres. Une douleur intense et croissante, surtout d'un seul côté, n'est pas normale et doit faire appeler le chirurgien sans attendre.",
        },
        {
          question: "À partir de quel âge peut-on se faire opérer ?",
          answer:
            "Il n'y a pas d'âge fixe. L'excès de peau apparaît le plus souvent à partir de la quarantaine, mais des poches graisseuses familiales peuvent justifier une intervention plus tôt. Notre plateforme s'adresse aux personnes majeures.",
        },
        {
          question: "Les cicatrices se voient-elles ?",
          answer:
            "La cicatrice de la paupière supérieure est placée dans le pli de la paupière et devient en général peu visible après quelques mois. La voie transconjonctivale, par l'intérieur de la paupière inférieure, ne laisse pas de cicatrice sur la peau. La qualité de la cicatrisation varie toutefois d'une personne à l'autre.",
        },
        {
          question: "Combien de temps dure le résultat ?",
          answer:
            "Le résultat est en général durable, mais le vieillissement se poursuit. Les poches graisseuses retirées récidivent rarement ; la peau de la paupière supérieure peut se relâcher à nouveau au fil des années.",
        },
        {
          question: "Ma paupière tombe : est-ce un excès de peau ou un ptosis ?",
          answer:
            "Ce sont deux situations différentes. Dans le ptosis palpébral, c'est le bord de la paupière lui-même qui descend sur l'œil, parce que le muscle qui la relève est affaibli ou détendu ; il se corrige par une autre intervention, sur ce muscle. Les deux peuvent coexister : seul un examen par un chirurgien ou un ophtalmologiste permet de faire la différence.",
        },
        {
          question: "La blépharoplastie peut-elle être prise en charge par l'Assurance maladie ?",
          answer:
            "Oui, dans certains cas : lorsque l'excès de peau de la paupière supérieure gêne le champ visuel, ce qui est documenté par un examen du champ visuel et des photographies. Le chirurgien vous indique si votre situation répond aux critères et si une demande d'accord préalable est nécessaire. La blépharoplastie à visée esthétique n'est pas remboursée, et des dépassements d'honoraires peuvent s'appliquer même en cas de prise en charge.",
        },
        {
          question: "Faut-il voir un ophtalmologiste avant l'intervention ?",
          answer:
            "Un bilan ophtalmologique est recommandé, en particulier en cas de sécheresse oculaire, de port de lentilles, d'antécédent de chirurgie des yeux (dont la chirurgie réfractive au laser) ou de glaucome. Il permet de repérer un problème qui modifierait l'indication ou augmenterait les risques.",
        },
        {
          question: "Quel est le délai de réflexion avant l'intervention ?",
          answer:
            "Pour une blépharoplastie esthétique, la loi impose un délai minimal de 15 jours entre la remise du devis détaillé et daté et l'intervention. Aucun paiement ne peut être exigé avant la fin de ce délai, en dehors des honoraires de consultation.",
        },
        {
          question: "Quel chirurgien consulter et comment vérifier sa qualification ?",
          answer:
            "La blépharoplastie est pratiquée par des chirurgiens qualifiés en chirurgie plastique, reconstructrice et esthétique, par des ophtalmologistes spécialisés en chirurgie des paupières (oculoplastique) et par des chirurgiens maxillo-faciaux. Vous pouvez vérifier l'inscription et la spécialité d'un médecin sur l'Annuaire santé (RPPS) ou l'annuaire de l'Ordre des médecins.",
        },
        {
          question: "Peut-on se faire opérer pendant une grossesse ?",
          answer:
            "Non : une chirurgie esthétique est reportée pendant la grossesse et l'allaitement. Mieux vaut attendre plusieurs mois après l'accouchement, une fois l'état général stabilisé.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      {
        interventionId: "blepharoplasty",
        kind: "risks",
        locale: "fr",
        title: "Blépharoplastie : les risques",
        summary:
          "Suites attendues, complications des paupières et de l'œil, hématome rétrobulbaire et signes qui doivent faire consulter sans attendre après une blépharoplastie.",
        answer:
          "Gonflement, ecchymoses et yeux secs ou irrités sont attendus après une blépharoplastie. Une fermeture incomplète de l'œil, un ectropion ou une asymétrie sont moins fréquents. L'hématome rétrobulbaire est rare mais menace la vision : il impose une prise en charge en urgence.",
        sections: [
          {
            heading: "Les suites fréquentes et attendues",
            paragraphs: [
              "Ces manifestations font partie de la cicatrisation normale. Elles diminuent progressivement en quelques jours à quelques semaines.",
            ],
            bullets: [
              "Gonflement (œdème) et ecchymoses des paupières, maximaux vers 48 heures.",
              "Yeux secs, qui piquent, ou au contraire larmoiement.",
              "Vision un peu floue les premiers jours, souvent due à la pommade ophtalmique.",
              "Gêne à la lumière et tiraillement des cicatrices.",
              "Difficulté à fermer complètement les paupières les premiers jours, surtout au réveil.",
            ],
          },
          {
            heading: "Les complications moins fréquentes",
            paragraphs: [
              "Leur fréquence dépend de la technique, de l'anatomie des paupières, de l'état de l'œil avant l'intervention et de la quantité de peau ou de graisse retirée. Le chirurgien peut vous indiquer celles qui vous concernent plus particulièrement.",
            ],
            bullets: [
              "Sécheresse oculaire qui persiste ou s'aggrave, traitée par larmes artificielles et parfois par un suivi ophtalmologique.",
              "Fermeture incomplète des paupières (lagophtalmie), le plus souvent transitoire.",
              "Ectropion ou paupière inférieure tirée vers le bas, surtout après une voie sous-ciliaire.",
              "Gonflement de la conjonctive (chémosis) qui se prolonge.",
              "Asymétrie, correction insuffisante ou excessive, aspect creusé.",
              "Cicatrice épaissie, petits kystes blancs (grains de milium) le long de la cicatrice.",
              "Infection, rare.",
            ],
          },
          {
            heading: "Les complications rares mais graves",
            paragraphs: [
              "L'hématome rétrobulbaire est un saignement qui se collecte derrière le globe oculaire. Il survient le plus souvent dans les heures qui suivent l'intervention. En comprimant le nerf optique, il peut entraîner une baisse de vision, voire une perte de la vision s'il n'est pas traité très rapidement. C'est la principale raison pour laquelle une surveillance attentive est nécessaire le premier jour.",
              "Une vision double durable, liée à une atteinte d'un muscle de l'œil, est exceptionnelle. Les risques de l'anesthésie générale ou de la sédation sont évalués lors de la consultation d'anesthésie obligatoire.",
            ],
          },
          {
            heading: "Quand appeler sans attendre",
            paragraphs: [
              "Contactez immédiatement le chirurgien ou l'équipe qui vous a opéré si l'un de ces signes apparaît. En cas de baisse brutale de la vision, de douleur intense de l'œil ou si vous ne joignez personne, appelez le 15 (SAMU) ou le 112 : chaque heure compte pour la vision.",
            ],
            bullets: [
              "Douleur intense et croissante, en particulier d'un seul côté.",
              "Gonflement rapide, tendu, avec un œil qui semble avancer ou qu'on ne peut plus ouvrir.",
              "Baisse de la vision, vision double ou perte de vision, même partielle.",
              "Saignement qui ne s'arrête pas malgré une compression douce.",
              "Fièvre, rougeur qui s'étend, écoulement purulent.",
            ],
          },
          {
            heading: "Retouche",
            paragraphs: [
              "Une retouche peut être proposée pour une asymétrie, un excès de peau résiduel ou une malposition de la paupière. Elle n'est en général envisagée qu'après la disparition complète de l'œdème, soit plusieurs mois après l'intervention. Demandez avant de vous engager quelles sont les conditions prévues en cas de retouche.",
            ],
          },
          {
            heading: "Les facteurs qui augmentent les risques",
            paragraphs: ["Certains facteurs sont à signaler et à corriger si possible avant l'intervention."],
            bullets: [
              "Sécheresse oculaire, port de lentilles, antécédent de chirurgie réfractive au laser.",
              "Hypertension artérielle mal équilibrée, qui favorise le saignement.",
              "Prise d'anticoagulants, d'aspirine, d'anti-inflammatoires ou de compléments alimentaires fluidifiant le sang.",
              "Maladie de la thyroïde avec atteinte des yeux.",
              "Tabac, qui altère la cicatrisation.",
              "Antécédent de chirurgie des paupières ou d'injections autour des yeux.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFO, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "blepharoplasty",
        kind: "cost",
        locale: "fr",
        title: "Prix d'une blépharoplastie",
        summary:
          "Composition d'un devis de blépharoplastie, ce qui fait varier le prix, prise en charge si le champ visuel est gêné et règles françaises du devis.",
        answer:
          "Le coût d'une blépharoplastie dépend du nombre de paupières opérées, de la technique, de l'anesthésie, du chirurgien et de l'établissement. Nous n'indiquons pas de prix : seul un devis détaillé et daté, remis après consultation, permet de le connaître. L'Assurance maladie peut prendre en charge une blépharoplastie supérieure lorsque l'excès de peau gêne le champ visuel.",
        sections: [
          {
            heading: "Ce que contient un devis",
            paragraphs: [
              "Pour une intervention à visée esthétique, un devis détaillé et daté doit vous être remis avant l'intervention. Vérifiez qu'il précise chacun des postes suivants, ou indique clairement ceux qui n'y figurent pas.",
            ],
            bullets: [
              "Honoraires du chirurgien.",
              "Honoraires de l'anesthésiste en cas de sédation ou d'anesthésie générale.",
              "Frais de l'établissement : bloc opératoire, prise en charge ambulatoire.",
              "Collyres, pommades, compresses et examens préopératoires éventuels (dont le bilan ophtalmologique).",
              "Consultations de suivi et retrait des fils.",
              "TVA, applicable aux actes à finalité purement esthétique.",
            ],
          },
          {
            heading: "Ce qui fait varier le prix",
            paragraphs: [
              "Plusieurs éléments expliquent les écarts entre deux devis. Comparer des devis n'a de sens que s'ils décrivent la même intervention.",
            ],
            bullets: [
              "Paupières supérieures seules, inférieures seules ou les quatre paupières.",
              "Technique : voie transconjonctivale, voie sous-ciliaire, redistribution de la graisse, geste de soutien de la paupière (canthopexie).",
              "Type d'anesthésie : locale, sédation ou générale.",
              "Gestes associés, par exemple un lifting du sourcil ou une correction de ptosis palpébral.",
              "Établissement et région, expérience du chirurgien.",
            ],
          },
          {
            heading: "La prise en charge par l'Assurance maladie",
            paragraphs: [
              "Lorsque l'excès de peau de la paupière supérieure retombe sur les cils et réduit le champ visuel, la blépharoplastie a une finalité fonctionnelle. Elle peut alors être prise en charge, sur la base d'un examen du champ visuel réalisé par un ophtalmologiste et de photographies. Le chirurgien vous indique si une demande d'accord préalable doit être adressée à votre caisse ; renseignez-vous sur ameli.fr ou auprès de votre caisse.",
              "La correction d'un ptosis palpébral relève également, en règle générale, d'une prise en charge. En revanche, la blépharoplastie à visée esthétique (poches, aspect fatigué) n'est pas remboursée. Même en cas de prise en charge, des dépassements d'honoraires peuvent s'appliquer selon le secteur du chirurgien : demandez-les par écrit et interrogez votre complémentaire santé.",
            ],
          },
          {
            heading: "Les règles françaises à connaître",
            paragraphs: [
              "Pour la chirurgie esthétique, le Code de la santé publique impose un délai de réflexion minimal de 15 jours entre la remise du devis et l'intervention. Aucun paiement ne peut être exigé avant la fin de ce délai, en dehors des honoraires de consultation. L'établissement doit être autorisé par l'agence régionale de santé (ARS) pour l'activité de chirurgie esthétique.",
            ],
          },
          {
            heading: "Complications, retouches et assurance",
            paragraphs: [
              "Demandez ce qui est prévu en cas de complication ou de retouche : nouvelle intervention, consultations supplémentaires, soins ophtalmologiques. Une complication d'un acte esthétique peut être prise en charge par l'Assurance maladie, mais une retouche purement esthétique reste en général à votre charge.",
              "Certains chirurgiens ou établissements proposent une assurance couvrant les complications ; lisez attentivement ce qu'elle couvre et ce qu'elle exclut.",
            ],
          },
        ],
        sources: [AMELI, LEGIFRANCE_L6322_2, SOFCPRE, HAS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "blepharoplasty",
        kind: "recovery",
        locale: "fr",
        title: "Convalescence après une blépharoplastie",
        summary:
          "Étapes de la convalescence après une blépharoplastie : soins des yeux, retrait des fils, reprise du travail, des écrans, des lentilles et du sport.",
        answer:
          "La sortie a lieu le plus souvent le jour même. Le gonflement et les ecchymoses sont maximaux vers 48 heures puis régressent en une à trois semaines ; les fils sont retirés vers le 5e à 7e jour. La reprise d'un travail de bureau est souvent possible entre 7 et 14 jours, et le résultat se stabilise en quelques mois.",
        sections: [
          {
            heading: "Le jour de l'intervention et les 48 premières heures",
            paragraphs: [
              "Une personne doit vous raccompagner et, idéalement, rester avec vous la première nuit, car c'est la période où un hématome peut survenir. Gardez la tête surélevée, y compris pour dormir, et appliquez du froid (compresses ou poches de froid enveloppées) sur les paupières selon les consignes.",
            ],
            bullets: [
              "Appliquez les collyres, gels ou pommades prescrits pour protéger l'œil.",
              "Évitez de vous pencher en avant, de porter des charges et de faire des efforts.",
              "Prenez les antalgiques prescrits ; évitez l'aspirine et les anti-inflammatoires sauf avis contraire.",
            ],
          },
          {
            heading: "La première semaine",
            paragraphs: [
              "Le gonflement diminue après le troisième jour et les ecchymoses changent de couleur. Les fils sont retirés vers le 5e à 7e jour lorsqu'ils ne sont pas résorbables. Les cicatrices se nettoient doucement selon les consignes du chirurgien.",
            ],
            bullets: [
              "Limitez les écrans et la lecture prolongée si vos yeux sont secs ou fatigués.",
              "Portez des lunettes de soleil à l'extérieur.",
              "Pas de lentilles de contact ni de maquillage des yeux.",
            ],
          },
          {
            heading: "Reprise du travail et de la vie sociale",
            paragraphs: [
              "La reprise d'un travail de bureau est souvent possible entre 7 et 14 jours. Le délai dépend de l'étendue de l'intervention, de l'importance des ecchymoses et de la nature du travail. Un arrêt de travail peut être prescrit lorsque l'intervention est prise en charge par l'Assurance maladie.",
              "Le maquillage des yeux et les lentilles de contact sont en général repris vers la deuxième semaine, sur avis du chirurgien.",
            ],
          },
          {
            heading: "Sport, soleil et activités",
            paragraphs: [
              "La marche est encouragée dès les premiers jours. Le sport est repris progressivement entre la deuxième et la quatrième semaine, en évitant les sports de contact plus longtemps.",
            ],
            bullets: [
              "Piscine, sauna et hammam : à éviter plusieurs semaines.",
              "Exposition solaire : protégez les cicatrices (lunettes, chapeau, écran solaire une fois la peau cicatrisée) pendant plusieurs mois.",
              "Conduite : seulement lorsque la vision est nette et que la gêne a disparu.",
            ],
          },
          {
            heading: "Le résultat dans le temps",
            paragraphs: [
              "Un œdème discret peut persister plusieurs semaines, surtout aux paupières inférieures. Les cicatrices restent rosées quelques mois puis blanchissent. Le résultat est considéré comme stabilisé vers 6 mois ; c'est à ce moment qu'une éventuelle retouche peut être discutée.",
            ],
          },
          {
            heading: "Les signes qui doivent faire consulter",
            paragraphs: [
              "Douleur intense ou croissante, gonflement tendu d'un seul côté, baisse ou trouble de la vision, saignement persistant ou fièvre doivent faire contacter le chirurgien sans attendre. En cas de baisse brutale de la vision, appelez le 15 ou le 112.",
            ],
          },
        ],
        sources: [SOFCPRE, SFO, HAS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "blepharoplasty",
        kind: "decision",
        locale: "fr",
        title: "Blépharoplastie : avant de se décider",
        summary:
          "Excès de peau, poches ou ptosis : faire le point avant une blépharoplastie, bilan des yeux, questions à poser et délai de réflexion de 15 jours.",
        answer:
          "Avant une blépharoplastie, il faut savoir précisément ce qui alourdit le regard : excès de peau, poches, chute du sourcil ou ptosis palpébral, qui ne se traitent pas de la même façon. Un bilan des yeux est recommandé. En France, un délai de réflexion de 15 jours après la remise du devis est obligatoire pour une intervention esthétique.",
        sections: [
          {
            heading: "Identifier ce qui vous gêne",
            paragraphs: [
              "Un regard « fatigué » peut avoir plusieurs causes, parfois associées : excès de peau de la paupière supérieure, poches graisseuses, creux sous l'œil, cernes pigmentés, chute du sourcil, ptosis palpébral. La blépharoplastie ne traite qu'une partie de ces causes.",
              "Dans le ptosis palpébral, c'est le bord de la paupière qui descend sur l'œil parce que le muscle releveur est affaibli. Il relève d'une autre intervention, souvent réalisée par un ophtalmologiste spécialisé en chirurgie des paupières. Retirer de la peau sans corriger un ptosis ne dégage pas le regard.",
            ],
          },
          {
            heading: "Le bilan des yeux",
            paragraphs: [
              "Un examen ophtalmologique préalable est recommandé. Il recherche notamment une sécheresse oculaire, un ptosis, un trouble de la vision ou une maladie de l'œil qui modifierait l'indication. Si une prise en charge est envisagée, un examen du champ visuel est réalisé.",
            ],
          },
          {
            heading: "Les questions à poser en consultation",
            paragraphs: ["Notez vos questions avant le rendez-vous et n'hésitez pas à demander une seconde consultation."],
            bullets: [
              "Quelle est la cause de ma gêne : peau, graisse, sourcil, ptosis ?",
              "Quelle technique proposez-vous, et par quelle voie pour les paupières inférieures ?",
              "Où seront les cicatrices ?",
              "Mes yeux sont-ils secs ? Faut-il un bilan ophtalmologique avant ?",
              "Quels sont les risques dans mon cas, et que faire en cas de saignement ou de trouble de la vision la première nuit ?",
              "Quel type d'anesthésie, et dans quel établissement ?",
              "Ma situation peut-elle relever d'une prise en charge par l'Assurance maladie ?",
              "Que se passe-t-il en cas de complication ou de retouche, et à quel coût ?",
            ],
          },
          {
            heading: "Le délai de réflexion et le devis",
            paragraphs: [
              "Pour une intervention esthétique, la loi impose un délai minimal de 15 jours entre la remise du devis détaillé et daté et l'intervention. Aucun paiement ne peut être exigé avant, hors honoraires de consultation. Utilisez ce temps pour relire les informations remises, en parler à vos proches et poser vos questions restantes.",
              "Une consultation avec un médecin anesthésiste est obligatoire si une anesthésie autre que locale est prévue. Vérifiez l'inscription et la spécialité du chirurgien sur l'Annuaire santé.",
            ],
          },
          {
            heading: "Quand la préoccupation devient envahissante",
            paragraphs: [
              "Il est normal de vouloir changer un détail de son visage. Si en revanche la pensée d'un défaut occupe une grande partie de vos journées, vous fait éviter les autres ou persiste après plusieurs interventions, il peut s'agir d'un trouble dysmorphique corporel. Dans ce cas, la chirurgie soulage rarement : parlez-en à votre médecin traitant.",
              "Si vous traversez une période de grande détresse ou avez des idées suicidaires, le 3114 est joignable gratuitement, 24 heures sur 24.",
            ],
          },
        ],
        sources: [LEGIFRANCE_L6322_2, ANNUAIRE_SANTE, SFO, SOFCPRE, N3114],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "blepharoplasty",
        kind: "alternatives",
        locale: "fr",
        title: "Alternatives à la blépharoplastie",
        summary:
          "Injections, toxine botulique, lasers, lifting du sourcil, correction d'un ptosis ou ne rien faire : les alternatives à la blépharoplastie et leurs limites.",
        answer:
          "Aucune technique non chirurgicale ne retire un excès de peau ou des poches graisseuses comme la blépharoplastie. Certaines options peuvent toutefois atténuer un creux, des rides ou une lourdeur liée au sourcil, avec leurs propres risques. Ne rien faire reste une option légitime.",
        sections: [
          {
            heading: "Ne rien faire",
            paragraphs: [
              "L'excès de peau des paupières évolue lentement. Si la gêne est surtout esthétique, attendre et reconsidérer la question plus tard n'a pas de conséquence pour la santé. Si la peau gêne la vision, un avis ophtalmologique reste utile.",
            ],
          },
          {
            heading: "Injections d'acide hyaluronique",
            paragraphs: [
              "Injecté dans la vallée des larmes, l'acide hyaluronique peut atténuer un creux sous l'œil. Il ne retire ni les poches ni l'excès de peau, et peut même accentuer des poches marquées. L'effet est temporaire.",
            ],
            bullets: [
              "Risques : gonflement prolongé, aspect bleuté sous la peau, irrégularités.",
              "Complications vasculaires rares mais graves, dont des atteintes de la vision.",
              "Acte médical, à réaliser par un médecin.",
            ],
          },
          {
            heading: "Toxine botulique",
            paragraphs: [
              "Elle atténue les rides de la patte d'oie et peut relever légèrement la queue du sourcil. Elle n'a aucun effet sur l'excès de peau ou les poches. L'effet dure quelques mois ; une chute transitoire de la paupière est un effet indésirable possible.",
            ],
          },
          {
            heading: "Lasers, peelings et radiofréquence",
            paragraphs: [
              "Ces techniques améliorent la texture de la peau et les ridules, avec un effet limité sur le relâchement. Elles exposent à des brûlures, des rougeurs prolongées et des troubles de la pigmentation, et nécessitent une protection oculaire stricte.",
            ],
          },
          {
            heading: "Une autre intervention selon la cause",
            paragraphs: [
              "Si la lourdeur du regard vient surtout de la chute du sourcil, un lifting du sourcil peut être plus adapté. Si la paupière tombe à cause d'un ptosis palpébral, c'est une correction du muscle releveur qui est indiquée. Ces interventions ont leurs propres risques et sont parfois associées à une blépharoplastie.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFO],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "eyelid-ptosis",
        locale: "fr",
        slug: "ptosis-palpebral",
        term: "Ptosis palpébral",
        aliases: ["ptosis palpébraux", "ptosis palpebral", "ptosis de la paupière", "ptosis des paupières", "blépharoptose", "blepharoptose"],
        definition:
          "Le ptosis palpébral est un abaissement du bord de la paupière supérieure, qui recouvre une partie de l'œil parce que le muscle releveur la soulève insuffisamment. Il se distingue de l'excès de peau traité par la blépharoplastie.",
        detail: [
          "Chez l'adulte, le ptosis est le plus souvent lié au vieillissement ou à un étirement du tendon du muscle releveur, favorisé par exemple par le port prolongé de lentilles de contact ou une chirurgie de l'œil. Il peut être congénital, et plus rarement révéler une maladie neurologique ou musculaire : un ptosis d'apparition brutale doit faire consulter rapidement.",
          "Le traitement est chirurgical : le chirurgien raccourcit ou réinsère le muscle releveur ou son tendon. Cette intervention, différente de la blépharoplastie, est souvent réalisée par un ophtalmologiste spécialisé en chirurgie des paupières ; elle relève en général d'une prise en charge par l'Assurance maladie.",
          "Un ptosis et un excès de peau peuvent coexister. Retirer de la peau sans corriger un ptosis ne dégage pas le regard, d'où l'intérêt d'un examen précis avant toute décision.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "dry-eye",
        locale: "fr",
        slug: "secheresse-oculaire",
        term: "Sécheresse oculaire",
        aliases: ["secheresse oculaire", "sécheresse des yeux", "syndrome de l'œil sec", "syndrome de l'oeil sec", "syndrome sec oculaire"],
        definition:
          "La sécheresse oculaire est une insuffisance en quantité ou en qualité des larmes, qui protègent la surface de l'œil. Elle se manifeste par une sensation de sable, des picotements, une rougeur ou, paradoxalement, un larmoiement.",
        detail: [
          "Elle est fréquente, en particulier avec l'âge, le travail sur écran, le port de lentilles, certains médicaments ou après une chirurgie réfractive. Après une blépharoplastie, une sécheresse transitoire est courante, car l'œdème et la fermeture moins efficace des paupières exposent davantage l'œil.",
          "Une sécheresse préexistante augmente le risque de gêne prolongée après une chirurgie des paupières. C'est l'une des raisons pour lesquelles un bilan ophtalmologique est recommandé avant l'intervention.",
          "Le traitement repose sur les larmes artificielles, les gels ou pommades, et sur la correction de la cause. Une douleur de l'œil, une baisse de la vision ou une rougeur intense doivent faire consulter rapidement.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },

  // ═══════════════════════════════════ UNITED KINGDOM ═══════════════════════════════════
  "en-gb": {
    intervention: {
      id: "blepharoplasty",
      locale: "en-gb",
      slug: "blepharoplasty",
      category: "face",
      title: "Blepharoplasty (eyelid surgery)",
      summary:
        "Blepharoplasty removes excess eyelid skin or under-eye bags. Techniques, risks to the eye, recovery and when the NHS may fund it.",
      description: [
        "Blepharoplasty is an operation to remove excess skin, tighten loose tissue or reduce fatty bags in the upper eyelids, lower eyelids or both. It aims to soften a heavy or tired appearance around the eyes and, in some cases, to clear the field of vision when upper eyelid skin hangs over the lashes.",
        "On the upper eyelid, the surgeon removes a strip of skin, sometimes with a thin band of muscle and a little fat, through a cut placed in the natural eyelid crease. On the lower eyelid there are two main approaches: a cut just below the lashes (subciliary or transcutaneous approach), which also allows excess skin to be removed, or a transconjunctival approach from the inside of the eyelid, which leaves no visible scar and is mainly used for fatty bags without much loose skin. Fat may be removed or repositioned to fill a hollow under the eye, and the lower lid is sometimes supported at its outer corner (canthopexy).",
        "Upper eyelid scars sit in the crease and may extend slightly beyond the outer corner of the eye; they usually stay pink for a few months and then fade. The transconjunctival approach leaves no scar on the skin; the subciliary approach leaves a fine line beneath the lashes.",
        "Blepharoplasty does not correct eyelid ptosis (an eyelid that droops because the muscle that lifts it is weak or stretched), which needs a different operation. Nor does it treat a low brow, crow's feet, dark pigmented circles or fine skin wrinkles. An eye assessment before surgery is recommended, to check in particular for dry eye, eyelid ptosis or problems with vision.",
        "Results are usually long-lasting, particularly after removal of lower eyelid fat, which rarely comes back. Ageing continues, however: upper eyelid skin may loosen again over the years, and some people consider further surgery a long time later.",
      ],
      indications: [
        "Excess upper eyelid skin that makes the eyes look heavy or rests on the lashes.",
        "Excess skin that restricts the upper field of vision, confirmed by a visual field test (a situation in which NHS funding may be considered).",
        "Persistent fatty bags under the eyes, often running in families.",
        "Loose lower eyelid skin, sometimes with a hollow beneath the eye.",
        "A concern raised by the person themselves, stable over time, after clear information about what surgery can and cannot change.",
      ],
      contraindications: [
        "Unrealistic expectations, such as hoping to remove every wrinkle around the eyes or change the expression of the face.",
        "A request driven by pressure from someone else.",
        "Excessive concern about a minor or barely visible feature (to be discussed with the surgeon and, if needed, a GP).",
        "Significant dry eye or incomplete eyelid closure, to be treated or assessed before any decision.",
        "Thyroid eye disease that is not yet stable.",
        "Poorly controlled high blood pressure, diabetes or a bleeding disorder.",
        "Smoking, which impairs healing: stopping before and after surgery is recommended.",
        "Pregnancy or breastfeeding: surgery is postponed.",
      ],
      risks: [
        {
          name: "Swelling and bruising",
          detail:
            "Common and expected: swelling (oedema) and bruising of the eyelids, sometimes the cheeks, peaking at around 48 hours and fading over one to three weeks.",
        },
        {
          name: "Swelling of the conjunctiva (chemosis)",
          detail:
            "Clear, jelly-like swelling of the white of the eye, more common after lower eyelid surgery; it usually settles within days to weeks with eye drops.",
        },
        {
          name: "Dry eye",
          detail:
            "Gritty, stinging or watery eyes, usually temporary; it can be worse in people who already have dry eyes, which is why an eye assessment before surgery matters.",
        },
        {
          name: "Incomplete eyelid closure (lagophthalmos)",
          detail:
            "Difficulty closing the eye fully in the first weeks, especially at night; usually temporary and managed with lubricating drops or gel, but removal of too much skin can make it lasting and require further surgery.",
        },
        {
          name: "Ectropion or lower eyelid malposition",
          detail:
            "The lower eyelid may pull down or away from the eye, showing white below the iris; uncommon and often temporary with massage, it sometimes needs surgical correction.",
        },
        {
          name: "Asymmetry and an unsatisfactory result",
          detail:
            "Small differences between sides, under- or over-correction, or a hollow look if too much fat is removed; revision may be considered once healing is complete, usually several months later.",
        },
        {
          name: "Visible scarring and milia",
          detail:
            "The scar may stay pink or thickened for longer than expected; small white cysts (milia) can form along the scar and are easily removed.",
        },
        {
          name: "Infection",
          detail: "Rare because the eyelids have a good blood supply; usually treated with antibiotics.",
        },
        {
          name: "Double vision (diplopia)",
          detail:
            "Rare; usually caused by swelling and temporary, very rarely due to injury to an eye muscle during removal of lower eyelid fat.",
        },
        {
          name: "Retrobulbar haematoma",
          detail:
            "Rare but serious: bleeding behind the eyeball, usually within the first hours, that presses on the optic nerve. Severe pain, tense swelling, a bulging eye or reduced vision need emergency treatment, because sight is at risk.",
        },
        {
          name: "Loss of vision",
          detail:
            "Extremely rare, most often the result of a retrobulbar haematoma not treated quickly enough; this is why any change in vision needs immediate medical attention.",
        },
        {
          name: "Anaesthetic risks",
          detail:
            "Low under local anaesthetic; with sedation or general anaesthesia, they are assessed at the pre-operative anaesthetic assessment.",
        },
      ],
      procedure: {
        anaesthesia:
          "Local anaesthetic, often for upper eyelids alone; local anaesthetic with sedation or general anaesthesia for all four eyelids or the transconjunctival approach.",
        duration: "About 45 minutes to an hour for the upper eyelids; around 1.5 to 3 hours for all four eyelids.",
        hospitalStay: "Usually day surgery (home the same day).",
      },
      recovery: [
        "Days 0 to 2: head raised, cold compresses on the eyelids, prescribed drops and ointment; slightly blurred vision from the ointment is common.",
        "Days 2 to 3: swelling and bruising peak, then gradually improve.",
        "Days 5 to 7: stitches removed if they are not dissolvable.",
        "Weeks 1 to 2: many people return to desk work after 7 to 14 days, depending on bruising and the type of job; sunglasses are useful outdoors.",
        "Around 2 weeks: eye make-up and contact lenses can usually be resumed, on the surgeon's advice.",
        "Weeks 2 to 4: gradual return to exercise; avoid swimming, saunas, heavy exertion and unprotected sun exposure for several weeks.",
        "Months 3 to 6: residual swelling settles and scars fade; the result is usually considered stable at around 6 months.",
      ],
      alternatives: [
        "Doing nothing: a legitimate choice, especially as excess eyelid skin changes slowly; the decision can be revisited later.",
        "Hyaluronic acid filler in the tear trough: can soften a hollow under the eye but does not remove bags or skin; temporary, with its own risks (swelling, a bluish tinge, rare but serious vascular complications).",
        "Botulinum toxin injections: soften crow's feet and can lift the tail of the brow slightly, with no effect on excess skin; lasts a few months, with a risk of temporary eyelid droop.",
        "Skin treatments (laser resurfacing, chemical peels, radiofrequency): may improve skin quality and fine lines, with limited effect on loose skin; risks include burns and pigmentation changes.",
        "Brow lift, when heaviness comes mainly from a low brow: a different operation with its own risks.",
      ],
      faq: [
        {
          question: "Does eyelid surgery hurt?",
          answer:
            "Discomfort is usually moderate: tightness, stinging or a gritty feeling in the eyes for the first few days, eased by simple painkillers, cold compresses and drops. Severe or increasing pain, especially on one side, is not normal and needs urgent contact with your surgeon.",
        },
        {
          question: "What age can you have blepharoplasty?",
          answer:
            "There is no set age. Excess eyelid skin usually appears from the forties onwards, but inherited under-eye bags can lead people to consider surgery earlier. Our platform is for adults aged 18 and over.",
        },
        {
          question: "Will the scars show?",
          answer:
            "Upper eyelid scars sit in the natural crease and usually become hard to see after a few months. The transconjunctival approach for the lower eyelids leaves no scar on the skin. How scars heal varies from person to person.",
        },
        {
          question: "How long do the results last?",
          answer:
            "Results are usually long-lasting, but ageing continues. Lower eyelid fat that has been removed rarely returns; upper eyelid skin may loosen again over the years.",
        },
        {
          question: "My eyelid droops: is it excess skin or eyelid ptosis?",
          answer:
            "These are different problems. In eyelid ptosis the edge of the eyelid itself sits low over the eye because the lifting muscle is weak or stretched; it is corrected by a different operation on that muscle. Both can occur together, and only an examination by a surgeon or ophthalmologist can tell them apart.",
        },
        {
          question: "Can I get blepharoplasty on the NHS?",
          answer:
            "Only in limited circumstances. The NHS does not usually fund cosmetic eyelid surgery. Upper eyelid surgery may be funded when excess skin significantly restricts your field of vision or causes other functional problems, confirmed by tests such as a visual field assessment, and local criteria are met. Ask your GP; if you fall outside the criteria, an individual funding request (IFR) is sometimes possible for exceptional cases.",
        },
        {
          question: "Should I see an eye specialist first?",
          answer:
            "An eye assessment is recommended, particularly if you have dry eyes, wear contact lenses, have had eye surgery (including laser vision correction) or have glaucoma. It can pick up a problem that would change the plan or increase the risks.",
        },
        {
          question: "How long should I wait before going ahead?",
          answer:
            "There is no legal cooling-off period in the UK, but the General Medical Council expects doctors to give you time to reflect, and two weeks between consultation and surgery is the recommended minimum. You should not be pressured into booking or paying a deposit on the day.",
        },
        {
          question: "Who should perform the surgery and how do I check them?",
          answer:
            "Blepharoplasty is performed by plastic surgeons, ophthalmologists specialising in eyelid surgery (oculoplastic surgeons) and some oral and maxillofacial surgeons. Check on the GMC medical register that the surgeon holds a licence to practise and is on the specialist register; in England, check that the hospital or clinic is registered with the Care Quality Commission.",
        },
        {
          question: "Can I have surgery while pregnant?",
          answer:
            "No: cosmetic surgery is postponed during pregnancy and breastfeeding. It is sensible to wait several months after giving birth, once your general health has settled.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      {
        interventionId: "blepharoplasty",
        kind: "risks",
        locale: "en-gb",
        title: "Blepharoplasty risks",
        summary:
          "Expected side effects, eyelid and eye complications, retrobulbar haematoma and the warning signs that need urgent help after blepharoplasty.",
        answer:
          "Swelling, bruising and dry or irritated eyes are expected after blepharoplasty. Incomplete eyelid closure, ectropion or asymmetry are less common. A retrobulbar haematoma is rare but threatens sight and needs emergency treatment.",
        sections: [
          {
            heading: "Common and expected effects",
            paragraphs: ["These are part of normal healing and ease over days to weeks."],
            bullets: [
              "Swelling (oedema) and bruising of the eyelids, peaking at around 48 hours.",
              "Dry, stinging or, conversely, watery eyes.",
              "Slightly blurred vision for the first few days, often from eye ointment.",
              "Sensitivity to light and tightness along the scars.",
              "Difficulty closing the eyes fully for the first few days, especially on waking.",
            ],
          },
          {
            heading: "Less common complications",
            paragraphs: [
              "How likely these are depends on the technique, the anatomy of your eyelids, the health of your eyes beforehand and how much skin or fat is removed. Your surgeon can explain which apply most to you.",
            ],
            bullets: [
              "Dry eye that persists or worsens, managed with lubricants and sometimes follow-up with an ophthalmologist.",
              "Incomplete eyelid closure (lagophthalmos), usually temporary.",
              "Ectropion or a lower eyelid that pulls down, particularly after the subciliary approach.",
              "Prolonged swelling of the conjunctiva (chemosis).",
              "Asymmetry, under- or over-correction, a hollow appearance.",
              "Thickened scars or small white cysts (milia) along the scar.",
              "Infection, which is rare.",
            ],
          },
          {
            heading: "Rare but serious complications",
            paragraphs: [
              "A retrobulbar haematoma is bleeding that collects behind the eyeball, usually in the hours after surgery. By pressing on the optic nerve it can reduce vision, or cause permanent loss of sight if not treated very quickly. This is the main reason for careful monitoring on the first day and night.",
              "Lasting double vision from injury to an eye muscle is very rare. Risks of sedation or general anaesthesia are assessed before surgery by the anaesthetic team.",
            ],
          },
          {
            heading: "When to seek help urgently",
            paragraphs: [
              "Contact your surgeon or the clinic's emergency number straight away if you notice any of the following. If your vision suddenly worsens, you have severe eye pain or you cannot reach the clinic, call 999 or go to A&E: every hour matters for sight. For less urgent concerns out of hours, call NHS 111.",
            ],
            bullets: [
              "Severe or increasing pain, especially on one side.",
              "Rapid, tense swelling, an eye that seems to bulge or that you cannot open.",
              "Reduced vision, double vision or any loss of sight, even partial.",
              "Bleeding that does not stop with gentle pressure.",
              "Fever, spreading redness or discharge of pus.",
            ],
          },
          {
            heading: "Revision surgery",
            paragraphs: [
              "Revision may be offered for asymmetry, remaining excess skin or eyelid malposition. It is usually considered only once swelling has fully settled, several months after surgery. Before booking, ask what the clinic's policy is on revisions and their cost.",
            ],
          },
          {
            heading: "Factors that increase risk",
            paragraphs: ["Tell your surgeon about these and address them before surgery where possible."],
            bullets: [
              "Dry eye, contact lens wear or previous laser vision correction.",
              "Poorly controlled high blood pressure, which increases bleeding.",
              "Anticoagulants, aspirin, anti-inflammatories or supplements that thin the blood.",
              "Thyroid eye disease.",
              "Smoking, which impairs healing.",
              "Previous eyelid surgery or injections around the eyes.",
            ],
          },
        ],
        sources: [NHS, BOPSS, RCOPHTH, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "blepharoplasty",
        kind: "cost",
        locale: "en-gb",
        title: "How much does blepharoplasty cost?",
        summary:
          "What a private blepharoplasty quote should include, what affects the price, when the NHS may fund eyelid surgery and covering complications.",
        answer:
          "The cost of blepharoplasty depends on how many eyelids are treated, the technique, the anaesthetic, the surgeon and the hospital. We do not quote prices: only a written, itemised quote after consultation tells you the total. The NHS may fund upper eyelid surgery when excess skin restricts your vision and set criteria are met.",
        sections: [
          {
            heading: "What a quote should include",
            paragraphs: [
              "Ask for a written, itemised quote and check whether each of the following is included or listed separately.",
            ],
            bullets: [
              "Surgeon's fee.",
              "Anaesthetist's fee if sedation or general anaesthesia is used.",
              "Hospital or clinic fees, including theatre time.",
              "Drops, ointment, dressings and any pre-operative tests, including an eye assessment.",
              "Follow-up appointments and stitch removal.",
              "What happens, and what you pay, if a complication or revision is needed.",
            ],
          },
          {
            heading: "What affects the price",
            paragraphs: ["Compare quotes only when they describe the same procedure."],
            bullets: [
              "Upper eyelids only, lower eyelids only, or all four.",
              "Technique: transconjunctival or subciliary approach, fat repositioning, lower eyelid support (canthopexy).",
              "Type of anaesthetic: local, sedation or general.",
              "Combined procedures, such as a brow lift or eyelid ptosis repair.",
              "Location of the clinic and the surgeon's experience.",
            ],
          },
          {
            heading: "NHS funding",
            paragraphs: [
              "The NHS does not usually fund cosmetic eyelid surgery. Blepharoplasty is one of the procedures covered by national guidance on interventions of limited clinical value (the Evidence-Based Interventions programme in England), and local commissioners set the criteria. Upper eyelid surgery may be funded when excess skin significantly impairs the field of vision or causes other functional problems, documented by tests such as a visual field assessment.",
              "Ask your GP or optometrist whether a referral is appropriate. If you do not meet the criteria but believe your case is exceptional, an individual funding request (IFR) can be submitted by your clinician. Eyelid ptosis repair is assessed under its own criteria.",
            ],
          },
          {
            heading: "Paying privately: what to check",
            paragraphs: [
              "In the UK there is no legal cooling-off period, but GMC guidance expects doctors to give you time to consider your decision, and two weeks is recommended. Be wary of pressure to pay a deposit at the first appointment, time-limited discounts or package deals. Check that the hospital or clinic is registered with the CQC in England (or the equivalent regulator in Scotland, Wales or Northern Ireland).",
            ],
          },
          {
            heading: "Complications, revisions and insurance",
            paragraphs: [
              "Ask whether follow-up care, treatment of complications and revision surgery are included, and for how long. If a complication needs emergency treatment, the NHS will provide it, but follow-up and revision of a cosmetic result are usually the responsibility of the private provider.",
              "Some providers include or offer complications insurance; read carefully what it covers and excludes.",
            ],
          },
        ],
        sources: [NHS, GMC, CQC, RCS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "blepharoplasty",
        kind: "recovery",
        locale: "en-gb",
        title: "Recovery after blepharoplasty",
        summary:
          "Recovery after blepharoplasty step by step: eye care, stitch removal, returning to work, screens, contact lenses and exercise.",
        answer:
          "Most people go home the same day. Swelling and bruising peak at around 48 hours and fade over one to three weeks; stitches come out at around five to seven days. Many people return to desk work after 7 to 14 days, and the result settles over a few months.",
        sections: [
          {
            heading: "The day of surgery and the first 48 hours",
            paragraphs: [
              "Someone should take you home and ideally stay with you on the first night, as this is when a haematoma is most likely. Keep your head raised, including when sleeping, and apply cold compresses or wrapped cold packs to the eyelids as instructed.",
            ],
            bullets: [
              "Use the prescribed drops, gel or ointment to protect the eyes.",
              "Avoid bending over, lifting and straining.",
              "Take the painkillers recommended; avoid aspirin and anti-inflammatories unless told otherwise.",
            ],
          },
          {
            heading: "The first week",
            paragraphs: [
              "Swelling eases after the third day and bruises change colour. Non-dissolvable stitches are removed at around five to seven days. Clean the wounds gently as advised.",
            ],
            bullets: [
              "Limit screen time and long periods of reading if your eyes feel dry or tired.",
              "Wear sunglasses outdoors.",
              "No contact lenses or eye make-up.",
            ],
          },
          {
            heading: "Returning to work and social life",
            paragraphs: [
              "Many people return to desk work after 7 to 14 days, depending on the extent of surgery, the amount of bruising and the type of job. Eye make-up and contact lenses are usually resumed at around two weeks, on your surgeon's advice.",
            ],
          },
          {
            heading: "Exercise, sun and everyday activities",
            paragraphs: [
              "Walking is encouraged from the first days. Exercise can be built up gradually from the second to the fourth week, with contact sports avoided for longer.",
            ],
            bullets: [
              "Swimming, saunas and steam rooms: avoid for several weeks.",
              "Sun: protect the scars (sunglasses, hat, sunscreen once healed) for several months.",
              "Driving: only once your vision is clear and you can react safely; check with your insurer.",
            ],
          },
          {
            heading: "How the result develops",
            paragraphs: [
              "Mild swelling may last several weeks, especially in the lower eyelids. Scars stay pink for a few months and then fade. The result is usually considered stable at around six months, which is when any revision would be discussed.",
            ],
          },
          {
            heading: "Warning signs",
            paragraphs: [
              "Severe or increasing pain, tense swelling on one side, reduced or changed vision, persistent bleeding or fever need urgent contact with your surgeon. If your vision suddenly worsens, call 999 or go to A&E; for other concerns out of hours, call NHS 111.",
            ],
          },
        ],
        sources: [NHS, BOPSS, BAPRAS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "blepharoplasty",
        kind: "decision",
        locale: "en-gb",
        title: "Blepharoplasty: before you decide",
        summary:
          "Excess skin, bags or eyelid ptosis: what to work out before blepharoplasty, the eye assessment, questions to ask and the two-week reflection period.",
        answer:
          "Before blepharoplasty, it helps to know exactly what makes your eyes look heavy: excess skin, fatty bags, a low brow or eyelid ptosis, which are treated differently. An eye assessment is recommended. There is no legal cooling-off period in the UK, but the GMC recommends allowing two weeks to reflect.",
        sections: [
          {
            heading: "Working out what bothers you",
            paragraphs: [
              "A tired look around the eyes can have several causes, sometimes together: excess upper eyelid skin, fatty bags, a hollow under the eye, dark pigmentation, a low brow or eyelid ptosis. Blepharoplasty treats only some of these.",
              "In eyelid ptosis, the edge of the eyelid sits low over the eye because the lifting muscle is weak. It needs a different operation, often performed by an oculoplastic surgeon. Removing skin without correcting eyelid ptosis will not open up the eye.",
            ],
          },
          {
            heading: "The eye assessment",
            paragraphs: [
              "An eye examination before surgery is recommended. It looks for dry eye, eyelid ptosis, problems with vision or eye conditions that would change the plan. If NHS funding is being considered, a visual field test is usually part of the assessment.",
            ],
          },
          {
            heading: "Questions to ask at your consultation",
            paragraphs: ["Write your questions down beforehand, and feel free to seek a second opinion."],
            bullets: [
              "What is causing my concern: skin, fat, brow or eyelid ptosis?",
              "Which technique do you recommend, and which approach for the lower eyelids?",
              "Where will the scars be?",
              "Are my eyes dry? Do I need an eye assessment first?",
              "What are the risks in my case, and what should I do if I notice bleeding or changes in vision on the first night?",
              "What type of anaesthetic, and where will the surgery take place?",
              "Could I be eligible for NHS treatment?",
              "What happens, and what will I pay, if there is a complication or I need a revision?",
            ],
          },
          {
            heading: "Time to reflect and checking your surgeon",
            paragraphs: [
              "The GMC expects doctors performing cosmetic interventions to give patients time to reflect, and two weeks between consultation and surgery is the recommended minimum. You should be seen by the surgeon who will operate, not only by a salesperson or coordinator.",
              "Check the surgeon on the GMC medical register (licence to practise and specialist register) and the clinic with the CQC in England. Royal College of Surgeons certification in cosmetic surgery is voluntary but can be a further indication of training.",
            ],
          },
          {
            heading: "When concern becomes overwhelming",
            paragraphs: [
              "It is normal to want to change something about your face. If thoughts about a feature take up a large part of your day, make you avoid other people or continue after previous procedures, this may be body dysmorphic disorder. Surgery rarely helps in that situation: talk to your GP.",
              "If you are in distress or having thoughts of suicide, you can call Samaritans free on 116 123, at any time.",
            ],
          },
        ],
        sources: [GMC, CQC, RCS, NHS, SAMARITANS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        interventionId: "blepharoplasty",
        kind: "alternatives",
        locale: "en-gb",
        title: "Alternatives to blepharoplasty",
        summary:
          "Fillers, botulinum toxin, skin treatments, brow lift, eyelid ptosis repair or doing nothing: alternatives to blepharoplasty and their limits.",
        answer:
          "No non-surgical treatment removes excess eyelid skin or fatty bags in the way blepharoplasty does. Some options can soften a hollow, wrinkles or heaviness from a low brow, each with its own risks. Doing nothing remains a legitimate choice.",
        sections: [
          {
            heading: "Doing nothing",
            paragraphs: [
              "Excess eyelid skin changes slowly. If your concern is mainly about appearance, waiting and reconsidering later has no health consequences. If skin is affecting your vision, an eye assessment is still worthwhile.",
            ],
          },
          {
            heading: "Hyaluronic acid fillers",
            paragraphs: [
              "Injected into the tear trough, filler can soften a hollow under the eye. It does not remove bags or loose skin and can make prominent bags look worse. The effect is temporary.",
            ],
            bullets: [
              "Risks: prolonged swelling, a bluish tinge under the skin, lumps.",
              "Rare but serious vascular complications, including effects on vision.",
              "Dermal fillers are not licensed medicines in the UK: choose a qualified medical practitioner and ask which product will be used.",
            ],
          },
          {
            heading: "Botulinum toxin",
            paragraphs: [
              "It softens crow's feet and can slightly lift the tail of the brow. It has no effect on excess skin or bags. The effect lasts a few months, and temporary eyelid droop is a possible side effect. It is a prescription-only medicine.",
            ],
          },
          {
            heading: "Laser resurfacing, peels and radiofrequency",
            paragraphs: [
              "These treatments can improve skin texture and fine lines, with limited effect on loose skin. Risks include burns, prolonged redness and pigmentation changes, and strict eye protection is essential.",
            ],
          },
          {
            heading: "A different operation for a different cause",
            paragraphs: [
              "If heaviness comes mainly from a low brow, a brow lift may be more suitable. If the eyelid droops because of eyelid ptosis, repair of the lifting muscle is the appropriate operation. These have their own risks and are sometimes combined with blepharoplasty.",
            ],
          },
        ],
        sources: [NHS, BOPSS, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "eyelid-ptosis",
        locale: "en-gb",
        slug: "eyelid-ptosis",
        term: "Eyelid ptosis",
        aliases: ["eyelid ptoses", "ptosis of the eyelid", "upper eyelid ptosis", "blepharoptosis", "drooping eyelid", "droopy eyelid"],
        definition:
          "Eyelid ptosis is a low position of the upper eyelid margin, which covers part of the eye because the muscle that lifts the lid is not working fully. It is different from the excess skin treated by blepharoplasty.",
        detail: [
          "In adults, eyelid ptosis is most often caused by ageing or stretching of the tendon of the lifting muscle (levator), sometimes linked to long-term contact lens wear or previous eye surgery. It can be present from birth, and more rarely signals a nerve or muscle condition: a droop that appears suddenly needs prompt medical assessment.",
          "Treatment is surgical: the surgeon shortens or reattaches the lifting muscle or its tendon. This operation, distinct from blepharoplasty, is often carried out by an oculoplastic surgeon, and may be available on the NHS when the droop affects vision.",
          "Eyelid ptosis and excess skin can occur together. Removing skin without correcting the ptosis will not open up the eye, which is why a careful examination comes before any decision.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "dry-eye",
        locale: "en-gb",
        slug: "dry-eye",
        term: "Dry eye",
        aliases: ["dry eyes", "dry eye syndrome", "dry eye disease"],
        definition:
          "Dry eye is a shortage or poor quality of tears, which protect the surface of the eye. It causes a gritty or stinging feeling, redness or, paradoxically, watering.",
        detail: [
          "It is common, particularly with age, screen use, contact lens wear, certain medicines and after laser vision correction. Temporary dry eye is frequent after blepharoplasty, because swelling and less effective blinking leave the eye more exposed.",
          "Existing dry eye increases the risk of prolonged discomfort after eyelid surgery. This is one of the reasons an eye assessment is recommended beforehand.",
          "Treatment relies on lubricating drops, gels or ointments and on addressing the cause. Eye pain, reduced vision or marked redness need prompt medical advice; a pharmacist or optometrist can help with milder symptoms.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },
};
