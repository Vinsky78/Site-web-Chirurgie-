import type { Source } from "../types";
import type { Dossier } from "./types";

// ───────────────────────────── Sources France ─────────────────────────────
const HAS: Source = {
  label: "Haute Autorité de santé (HAS) — évaluation du lipomodelage (lipofilling) des seins",
  url: "https://www.has-sante.fr",
};
const SOFCPRE: Source = {
  label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)",
  url: "https://www.sofcpre.fr",
};
const ANSM: Source = {
  label: "Agence nationale de sécurité du médicament et des produits de santé (ANSM)",
  url: "https://ansm.sante.fr",
};
const LEGIFRANCE_L6322_2: Source = {
  label: "Code de la santé publique, article L6322-2 (devis et délai de réflexion en chirurgie esthétique) — Légifrance",
  url: "https://www.legifrance.gouv.fr",
};
const AMELI: Source = { label: "Assurance maladie — ameli.fr (prise en charge, accord préalable)", url: "https://www.ameli.fr" };
const ANNUAIRE_SANTE: Source = {
  label: "Annuaire santé (vérification des professionnels inscrits au RPPS)",
  url: "https://annuaire.sante.fr",
};
const SFAR: Source = { label: "Société française d'anesthésie et de réanimation (SFAR)", url: "https://sfar.org" };
const ISAPS_FR: Source = {
  label: "International Society of Aesthetic Plastic Surgery (ISAPS) — recommandations internationales de sécurité du lipofilling fessier",
  url: "https://www.isaps.org",
};
const N3114: Source = { label: "3114 — numéro national de prévention du suicide", url: "https://3114.fr" };

// ───────────────────────────── Sources Royaume-Uni ─────────────────────────────
const NHS: Source = { label: "NHS — cosmetic procedures and cosmetic surgery abroad", url: "https://www.nhs.uk" };
const GMC: Source = {
  label: "General Medical Council — guidance for doctors who offer cosmetic interventions; medical register",
  url: "https://www.gmc-uk.org",
};
const CQC: Source = { label: "Care Quality Commission (CQC)", url: "https://www.cqc.org.uk" };
const BAAPS: Source = {
  label: "British Association of Aesthetic Plastic Surgeons (BAAPS) — safety guidance on buttock fat transfer",
  url: "https://baaps.org.uk",
};
const BAPRAS: Source = {
  label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)",
  url: "https://www.bapras.org.uk",
};
const RCS: Source = { label: "Royal College of Surgeons of England — cosmetic surgery certification", url: "https://www.rcseng.ac.uk" };
const ISAPS_UK: Source = {
  label: "International Society of Aesthetic Plastic Surgery (ISAPS) — international safety recommendations on gluteal fat grafting",
  url: "https://www.isaps.org",
};
const SAMARITANS: Source = { label: "Samaritans (116 123)", url: "https://www.samaritans.org" };

const REVIEW = { status: "draft" } as const;
const UPDATED_AT = "2026-10-13";

/** Lipofilling (transfert de graisse) : fiche, sous-pages et lexique (fr, en-gb). Brouillon à relire par le comité médical. */
export const dossier: Dossier = {
  // ═══════════════════════════════════ FRANCE ═══════════════════════════════════
  fr: {
    intervention: {
      id: "fat-grafting",
      locale: "fr",
      slug: "lipofilling-transfert-de-graisse",
      category: "body",
      title: "Lipofilling (transfert de graisse)",
      summary:
        "Le lipofilling réinjecte votre propre graisse pour ajouter du volume. Technique, zones, risques (dont lipofilling fessier), suites et questions à poser.",
      description: [
        "Le lipofilling, aussi appelé lipomodelage ou transfert de graisse autologue, consiste à prélever de la graisse sur une zone du corps où elle est en excès (ventre, hanches, cuisses, face interne des genoux), puis à la réinjecter, après préparation, dans une zone que l'on souhaite remodeler. Il n'utilise ni implant ni produit de comblement : c'est votre propre tissu qui est déplacé.",
        "L'intervention se déroule en trois temps. Le prélèvement se fait par une petite liposuccion à la canule, sous faible aspiration pour préserver les cellules graisseuses. La purification sépare ensuite la graisse du sang, du liquide injecté et de l'huile libérée, par décantation, centrifugation ou filtration selon les équipes. La réinjection se fait enfin avec des canules fines, en petites quantités déposées dans de multiples tunnels, afin que chaque particule de graisse soit au contact de tissus bien vascularisés et puisse survivre.",
        "Les zones les plus souvent traitées sont le visage (pommettes, tempes, sillons, creux sous les yeux), les seins (augmentation modérée, correction d'asymétrie, reconstruction après cancer), les fesses et les hanches, ainsi que le dos des mains. Le lipofilling sert aussi en chirurgie réparatrice, pour corriger des séquelles de chirurgie, de traumatisme ou une fonte graisseuse liée à certains traitements.",
        "Les cicatrices sont de quelques millimètres, au niveau des points d'entrée des canules, et sont en général placées dans des plis ou des zones discrètes. Elles s'estompent le plus souvent avec le temps, sans disparaître complètement.",
        "Le lipofilling ne remplace pas un lifting, ne retend pas une peau distendue et ne permet pas un gain de volume important en une seule séance. Une partie de la graisse réinjectée est résorbée dans les premiers mois, dans une proportion variable et imprévisible d'une personne à l'autre ; plusieurs séances espacées de quelques mois peuvent être nécessaires. Il suppose aussi une réserve de graisse suffisante sur la zone de prélèvement.",
        "La graisse qui a survécu au bout de trois à six mois est considérée comme durablement installée. Elle se comporte ensuite comme la graisse du reste du corps : elle augmente en cas de prise de poids et diminue en cas d'amaigrissement, et le vieillissement naturel des tissus se poursuit.",
      ],
      indications: [
        "Souhait d'un gain de volume modéré des seins, sans implant, chez une personne disposant d'une réserve de graisse suffisante.",
        "Creux, perte de volume ou asymétrie du visage, liés à l'âge, à un amaigrissement ou à une séquelle.",
        "Remodelage des fesses ou des hanches, en injection exclusivement sous-cutanée.",
        "Correction de séquelles : irrégularités après liposuccion, cicatrices adhérentes, défaut de contour après chirurgie ou traumatisme.",
        "Reconstruction mammaire après cancer, seule ou en complément d'un implant ou d'un lambeau, dans le cadre d'un parcours de soins spécialisé.",
        "Rajeunissement du dos des mains lorsque la peau est amincie et les tendons visibles.",
      ],
      contraindications: [
        "Attentes irréalistes, notamment un gain de volume important en une seule séance ou un résultat identique à une photo retouchée.",
        "Demande motivée par la pression d'un partenaire, d'un proche ou des réseaux sociaux.",
        "Préoccupation excessive pour un défaut minime ou invisible pour les autres (à évoquer avec le chirurgien ou un médecin).",
        "Réserve de graisse insuffisante sur les zones de prélèvement.",
        "Tabagisme actif, qui réduit la survie de la graisse et augmente les complications de cicatrisation ; un arrêt est recommandé.",
        "Troubles de la coagulation, diabète ou autre maladie chronique non équilibrés, infection en cours.",
        "Pour les seins : antécédent personnel ou risque familial élevé de cancer du sein, à discuter au cas par cas avec l'équipe et le radiologue ; bilan d'imagerie récent indispensable.",
        "Poids instable ou projet d'amaigrissement important à court terme.",
      ],
      risks: [
        {
          name: "Ecchymoses, œdème et douleur",
          detail:
            "Attendus sur la zone de prélèvement comme sur la zone injectée. Les ecchymoses s'estompent en général en deux à trois semaines ; l'œdème, plus marqué au visage, diminue sur plusieurs semaines.",
        },
        {
          name: "Résorption partielle de la graisse",
          detail:
            "Une part variable de la graisse injectée ne survit pas et disparaît dans les trois à six premiers mois. Le résultat peut donc être plus modeste qu'espéré et nécessiter une ou plusieurs séances complémentaires.",
        },
        {
          name: "Irrégularités et asymétries",
          detail:
            "Bosses, creux ou différences entre les deux côtés peuvent apparaître sur la zone injectée ou sur la zone de prélèvement. Certaines s'atténuent avec le temps ; d'autres nécessitent une retouche.",
        },
        {
          name: "Cytostéatonécrose et kystes huileux",
          detail:
            "Des îlots de graisse qui ne survivent pas peuvent former des nodules fermes ou des kystes remplis d'huile. Ils sont le plus souvent bénins mais peuvent être palpables, gênants, et nécessiter une imagerie, une ponction ou plus rarement une ablation.",
        },
        {
          name: "Modifications de l'imagerie mammaire",
          detail:
            "Après lipofilling des seins, la cytostéatonécrose peut donner des micro-calcifications ou des images visibles à la mammographie ou à l'échographie. Elles sont le plus souvent identifiables comme bénignes par un radiologue informé, mais peuvent conduire à des examens complémentaires, voire une biopsie.",
        },
        {
          name: "Infection",
          detail:
            "Peu fréquente. Elle se manifeste par une rougeur, une chaleur, une douleur croissante ou de la fièvre et se traite par antibiotiques, parfois par drainage chirurgical.",
        },
        {
          name: "Hématome ou sérome",
          detail:
            "Collection de sang ou de liquide, le plus souvent sur la zone de prélèvement. Elle peut nécessiter une ponction ou, rarement, une reprise.",
        },
        {
          name: "Troubles de la sensibilité",
          detail:
            "Diminution ou modification de la sensibilité de la peau sur les zones traitées, le plus souvent transitoire, régressant en quelques semaines à quelques mois.",
        },
        {
          name: "Embolie graisseuse lors d'un lipofilling fessier",
          detail:
            "Complication rare mais potentiellement mortelle : lorsque la graisse est injectée dans ou sous le muscle grand fessier, elle peut pénétrer dans les grosses veines de la région et migrer vers les poumons. Les sociétés savantes recommandent pour cette raison d'injecter uniquement dans le tissu sous-cutané, au-dessus du muscle.",
        },
        {
          name: "Injection intravasculaire au visage",
          detail:
            "Très rarement, une injection dans un vaisseau du visage peut provoquer une occlusion artérielle, avec un risque de nécrose de la peau, de perte de la vision ou d'accident vasculaire cérébral. Une technique avec canule mousse et petites quantités réduit ce risque sans l'annuler.",
        },
        {
          name: "Risques liés à l'anesthésie et thrombose",
          detail:
            "Évalués lors de la consultation d'anesthésie. Comme après toute chirurgie, une phlébite ou une embolie pulmonaire est possible, surtout après une intervention longue sur le corps ; une prévention peut être prescrite.",
        },
      ],
      procedure: {
        anaesthesia:
          "Anesthésie locale, éventuellement avec sédation, pour les petites quantités (visage, mains) ; anesthésie générale le plus souvent pour les seins et les fesses.",
        duration: "De moins d'une heure pour le visage à deux à quatre heures pour les seins ou les fesses, selon les volumes.",
        hospitalStay: "Le plus souvent en ambulatoire ; parfois une nuit d'hospitalisation pour les grands volumes.",
      },
      recovery: [
        "J1 : retour à domicile le plus souvent le jour même, accompagné ; douleurs comparables à des courbatures, soulagées par les antalgiques prescrits.",
        "Semaine 1 : ecchymoses et œdème sur les zones de prélèvement et d'injection ; vêtement de compression sur la zone de prélèvement, en général pour plusieurs semaines.",
        "Après un lipofilling fessier : éviter de s'asseoir ou de dormir directement sur les fesses pendant la durée indiquée par le chirurgien, souvent plusieurs semaines.",
        "Après un lipofilling du visage : œdème visible une à deux semaines ; éviter de masser ou de comprimer les zones injectées sauf consigne contraire.",
        "Reprise du travail : souvent après quelques jours à une semaine pour le visage, une à deux semaines pour les seins ou les fesses, selon l'activité.",
        "Sport : reprise douce vers trois à quatre semaines, sport intense ou de contact vers six semaines, selon l'avis du chirurgien.",
        "Mois 3 à 6 : la résorption se stabilise ; le chirurgien évalue le résultat et l'intérêt éventuel d'une nouvelle séance.",
        "Après un lipofilling des seins : poursuivre le dépistage habituel et signaler l'intervention à chaque examen d'imagerie.",
      ],
      alternatives: [
        "Ne rien faire, ou reporter la décision : un choix légitime, qui peut être réévalué plus tard.",
        "Produits de comblement (acide hyaluronique) pour le visage : effet temporaire, retouches régulières, avec leurs propres risques, dont de rares complications vasculaires graves.",
        "Implants mammaires : gain de volume plus important en une intervention, mais présence d'un dispositif implanté, avec des risques spécifiques et un suivi au long cours.",
        "Implants fessiers : alternative au lipofilling fessier pour un gain de volume, avec des risques propres (infection, déplacement, cicatrisation).",
        "Lifting ou chirurgie de la peau lorsque le problème principal est un relâchement plutôt qu'un manque de volume.",
      ],
      faq: [
        {
          question: "Le lipofilling est-il douloureux ?",
          answer:
            "La zone de prélèvement est souvent la plus sensible, avec des douleurs comparables à des courbatures pendant quelques jours, puis une sensibilité qui diminue en deux à trois semaines. Les antalgiques prescrits suffisent en général. Signalez au chirurgien toute douleur qui augmente au lieu de diminuer.",
        },
        {
          question: "Quelle quantité de graisse va rester ?",
          answer:
            "Personne ne peut le prédire précisément : une partie de la graisse est résorbée dans les premiers mois, dans une proportion variable selon la zone, la technique et la personne. C'est pourquoi le résultat ne s'apprécie qu'après trois à six mois et qu'une deuxième séance est parfois proposée.",
        },
        {
          question: "Le résultat est-il définitif ?",
          answer:
            "La graisse qui a survécu au-delà de quelques mois reste en place durablement, mais elle suit les variations de votre poids et le vieillissement naturel. Une prise ou une perte de poids importante modifie donc le résultat.",
        },
        {
          question: "Le lipofilling fessier est-il dangereux ?",
          answer:
            "Le lipofilling fessier a été associé à des décès par embolie graisseuse, lorsque la graisse était injectée dans le muscle. Les sociétés savantes recommandent d'injecter uniquement sous la peau, au-dessus du muscle, et de limiter les volumes. Demandez au chirurgien comment il procède et méfiez-vous des forfaits à l'étranger ou des actes réalisés par des personnes non qualifiées.",
        },
        {
          question: "Un lipofilling des seins gêne-t-il le dépistage du cancer ?",
          answer:
            "Il peut créer des images (kystes, micro-calcifications) visibles à la mammographie, le plus souvent reconnues comme bénignes par un radiologue informé. Un bilan d'imagerie est réalisé avant l'intervention, puis un suivi après. Signalez toujours l'intervention lors de vos examens.",
        },
        {
          question: "Et en cas de grossesse ou d'allaitement après un lipofilling ?",
          answer:
            "La graisse injectée suit les variations de poids liées à la grossesse. Il est conseillé d'attendre la fin des projets de grossesse pour un lipofilling esthétique. Parlez de l'allaitement avec votre chirurgien avant un lipofilling des seins.",
        },
        {
          question: "Le lipofilling laisse-t-il des cicatrices ?",
          answer:
            "Les points d'entrée des canules mesurent quelques millimètres et sont placés dans des zones discrètes. Ils restent généralement peu visibles, mais une cicatrice plus marquée ou pigmentée est possible selon la peau.",
        },
        {
          question: "Est-il remboursé par l'Assurance maladie ?",
          answer:
            "Le lipofilling à visée esthétique n'est pas pris en charge. Il peut l'être dans certaines indications réparatrices, par exemple la reconstruction mammaire après cancer ou certaines séquelles, parfois après accord préalable. Renseignez-vous auprès du chirurgien et de votre caisse.",
        },
        {
          question: "Quel délai entre le devis et l'intervention ?",
          answer:
            "En France, un délai minimal de 15 jours doit séparer la remise du devis détaillé et daté de l'intervention esthétique, et aucun paiement autre que la consultation ne peut être exigé avant ce délai.",
        },
        {
          question: "Quel chirurgien consulter et comment vérifier sa qualification ?",
          answer:
            "Un chirurgien qualifié en chirurgie plastique, reconstructrice et esthétique, exerçant dans un établissement autorisé par l'ARS. Sa qualification se vérifie sur l'Annuaire santé (RPPS) ou auprès du Conseil de l'Ordre des médecins.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risques ──
      {
        interventionId: "fat-grafting",
        kind: "risks",
        locale: "fr",
        title: "Lipofilling : les risques",
        summary:
          "Suites attendues, cytostéatonécrose, imagerie des seins, embolie graisseuse du lipofilling fessier : les risques du lipofilling et quand appeler.",
        answer:
          "Ecchymoses, œdème et résorption partielle de la graisse sont attendus après un lipofilling. Kystes huileux, cytostéatonécrose, irrégularités ou infection sont moins fréquents. Le risque le plus grave est l'embolie graisseuse, rare mais potentiellement mortelle, surtout lors d'un lipofilling fessier avec injection dans le muscle.",
        sections: [
          {
            heading: "Les suites fréquentes et attendues",
            paragraphs: [
              "Ces manifestations ne sont pas des complications. Elles concernent à la fois la zone de prélèvement et la zone injectée, et diminuent sur quelques semaines.",
            ],
            bullets: [
              "Ecchymoses et gonflement, parfois étendus sur la zone de prélèvement.",
              "Douleurs de type courbatures, surtout là où la graisse a été prélevée.",
              "Diminution du volume obtenu dans les premiers mois, du fait de la résorption partielle de la graisse.",
              "Sensibilité cutanée modifiée, le plus souvent transitoire.",
            ],
          },
          {
            heading: "Les complications moins fréquentes",
            paragraphs: [
              "Leur fréquence dépend de la zone, des volumes injectés, de la technique et de l'état de santé. Votre chirurgien peut vous indiquer celles qui vous concernent.",
            ],
            bullets: [
              "Cytostéatonécrose : nodules fermes formés par de la graisse qui n'a pas survécu.",
              "Kystes huileux, parfois palpables, qui peuvent nécessiter une ponction.",
              "Irrégularités, bosses ou creux, sur la zone injectée ou sur la zone de prélèvement.",
              "Asymétrie entre les deux côtés.",
              "Infection, hématome ou sérome.",
              "Cicatrices des points d'entrée plus visibles que prévu.",
            ],
          },
          {
            heading: "Le lipofilling des seins et l'imagerie",
            paragraphs: [
              "Un bilan radiologique (mammographie, échographie, parfois IRM selon l'âge et les antécédents) est réalisé avant un lipofilling des seins, puis un suivi après l'intervention. La cytostéatonécrose peut produire des micro-calcifications ou des kystes visibles à l'imagerie.",
              "Ces images sont le plus souvent reconnues comme bénignes par un radiologue informé de l'intervention, mais elles peuvent conduire à des examens complémentaires, voire à une biopsie. Signalez toujours votre lipofilling lors de vos examens de dépistage. La HAS a évalué cette technique et en a précisé les conditions de réalisation et de surveillance.",
            ],
          },
          {
            heading: "Le lipofilling fessier et l'embolie graisseuse",
            paragraphs: [
              "Le lipofilling des fesses, parfois appelé « BBL » (Brazilian butt lift), a été associé à des décès par embolie graisseuse. Lorsque la graisse est injectée dans ou sous le muscle grand fessier, elle peut pénétrer dans les grosses veines de la région et migrer vers les poumons, avec une détresse respiratoire brutale.",
              "Un groupe de travail international réunissant des sociétés savantes de chirurgie plastique recommande d'injecter la graisse uniquement dans le tissu sous-cutané, au-dessus du muscle, sans jamais orienter la canule vers la profondeur. Au Royaume-Uni, la BAAPS a publié des alertes et des recommandations de sécurité sur cette intervention.",
              "Ces décès concernent aussi des interventions réalisées à l'étranger dans le cadre de forfaits à bas coût, ou par des personnes non qualifiées. Avant de vous engager, demandez au chirurgien comment il procède et vérifiez sa qualification.",
            ],
          },
          {
            heading: "Les autres complications rares mais graves",
            paragraphs: ["Elles sont exceptionnelles mais doivent être connues avant de décider."],
            bullets: [
              "Injection dans un vaisseau du visage, avec risque de nécrose cutanée, de perte de la vision ou d'accident vasculaire cérébral.",
              "Infection sévère, pouvant nécessiter une hospitalisation et un drainage.",
              "Phlébite ou embolie pulmonaire, surtout après une intervention longue sur le corps.",
              "Perforation d'un organe lors du prélèvement, exceptionnelle.",
            ],
          },
          {
            heading: "Quand appeler sans attendre",
            paragraphs: [
              "Contactez rapidement le chirurgien ou l'équipe qui vous a opéré en cas de fièvre, de rougeur ou de chaleur qui s'étend, de douleur qui augmente au lieu de diminuer, d'écoulement purulent ou de gonflement brutal et douloureux d'un côté.",
              "Appelez le 15 (SAMU) ou le 112 en cas d'essoufflement, de douleur dans la poitrine, de malaise, de confusion, de trouble de la vision ou de faiblesse d'un côté du corps, même plusieurs jours après l'intervention.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, ISAPS_FR, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Coût ──
      {
        interventionId: "fat-grafting",
        kind: "cost",
        locale: "fr",
        title: "Prix d'un lipofilling",
        summary:
          "Ce que doit contenir un devis de lipofilling, ce qui fait varier le coût, séances multiples, prise en charge réparatrice et coût des complications.",
        answer:
          "Le coût d'un lipofilling dépend de la zone traitée, des volumes, du type d'anesthésie, de l'établissement et du nombre de séances ; nous ne publions pas de montants. Le devis détaillé et daté est obligatoire. Le lipofilling esthétique n'est pas remboursé ; certaines indications réparatrices peuvent être prises en charge.",
        sections: [
          {
            heading: "Ce que doit contenir le devis",
            paragraphs: [
              "En France, le devis détaillé et daté est obligatoire avant toute intervention de chirurgie esthétique. Il doit vous permettre de comparer des propositions sur une base identique.",
            ],
            bullets: [
              "Les honoraires du chirurgien, avec le nom du chirurgien qui opère.",
              "Les honoraires de l'anesthésiste et le type d'anesthésie prévu.",
              "Les frais de l'établissement : bloc opératoire, ambulatoire ou nuit d'hospitalisation, matériel de prélèvement et de purification.",
              "Les vêtements de compression et les médicaments éventuels.",
              "Les consultations de suivi incluses et leur durée.",
              "Les conditions d'une éventuelle séance complémentaire ou d'une retouche.",
            ],
          },
          {
            heading: "Ce qui fait varier le coût",
            paragraphs: [
              "Un lipofilling du visage sous anesthésie locale n'a rien de comparable avec un lipofilling des seins ou des fesses sous anesthésie générale. La durée d'intervention, les volumes à prélever et à réinjecter, le nombre de zones de prélèvement et l'expérience de l'équipe pèsent sur le devis.",
              "La résorption partielle de la graisse doit aussi être anticipée : une deuxième séance est parfois nécessaire, et son coût doit être discuté dès le départ.",
            ],
          },
          {
            heading: "La prise en charge par l'Assurance maladie",
            paragraphs: [
              "Le lipofilling à visée purement esthétique n'est pas pris en charge. En revanche, il peut l'être dans certaines indications réparatrices : reconstruction mammaire après cancer, correction de séquelles de chirurgie ou de traumatisme, certaines fontes graisseuses du visage liées à des traitements ou malformations.",
              "Certains actes à la frontière entre esthétique et réparation nécessitent une demande d'accord préalable adressée à votre caisse avant l'intervention. Des dépassements d'honoraires peuvent rester à votre charge, partiellement couverts selon votre complémentaire santé.",
            ],
          },
          {
            heading: "Le coût des complications et des retouches",
            paragraphs: [
              "Demandez qui prend en charge le traitement d'une complication (kyste, infection, irrégularité), une éventuelle reprise au bloc et les examens d'imagerie complémentaires. Certains chirurgiens proposent une assurance complications, souscrite au moment de l'intervention : lisez ses conditions et ses exclusions.",
              "Les complications graves sont prises en charge en urgence par le système de santé, mais la correction esthétique d'un résultat insatisfaisant reste en général à vos frais.",
            ],
          },
          {
            heading: "Paiement, forfaits et étranger",
            paragraphs: [
              "Aucun paiement autre que les honoraires de consultation ne peut être exigé avant la fin du délai de réflexion de 15 jours. Méfiez-vous des forfaits à durée limitée ou des pressions pour réserver rapidement.",
              "Les forfaits à bas coût à l'étranger, notamment pour le lipofilling fessier, peuvent vous laisser sans suivi à votre retour et ont été associés à des complications graves. Consultez notre guide sur la chirurgie à l'étranger avant toute démarche.",
            ],
          },
        ],
        sources: [LEGIFRANCE_L6322_2, AMELI, HAS, SOFCPRE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Convalescence ──
      {
        interventionId: "fat-grafting",
        kind: "recovery",
        locale: "fr",
        title: "Convalescence après un lipofilling",
        summary:
          "Suites d'un lipofilling semaine par semaine : compression, position assise après un lipofilling fessier, reprise du travail et du sport, résultat.",
        answer:
          "La plupart des personnes rentrent chez elles le jour même. Les ecchymoses durent deux à trois semaines, la compression de la zone de prélèvement plusieurs semaines, et la reprise du travail se fait en général après quelques jours à deux semaines. Le résultat ne s'apprécie qu'après trois à six mois, une fois la résorption stabilisée.",
        sections: [
          {
            heading: "Les premiers jours",
            paragraphs: [
              "Prévoyez d'être accompagné pour le retour et la première nuit. La zone de prélèvement est souvent la plus douloureuse, avec des sensations proches de courbatures ; les antalgiques prescrits suffisent en général.",
              "Un écoulement teinté de sang par les points d'entrée est fréquent les 24 à 48 premières heures, du fait du liquide injecté lors du prélèvement.",
            ],
          },
          {
            heading: "Les semaines 1 à 3",
            paragraphs: ["Les consignes varient selon la zone traitée ; suivez celles de votre chirurgien."],
            bullets: [
              "Porter le vêtement de compression sur la zone de prélèvement, en général plusieurs semaines.",
              "Ne pas comprimer ni masser la zone injectée, sauf consigne contraire, pour ne pas compromettre la survie de la graisse.",
              "Après un lipofilling des seins : soutien-gorge adapté, sans armature serrée, selon les consignes.",
              "Marcher tôt et souvent pour limiter le risque de phlébite.",
              "Ne pas fumer, pour favoriser la survie de la graisse et la cicatrisation.",
            ],
          },
          {
            heading: "Après un lipofilling fessier",
            paragraphs: [
              "Il est généralement demandé d'éviter de s'asseoir ou de dormir directement sur les fesses pendant plusieurs semaines, pour ne pas écraser la graisse injectée. Un coussin adapté peut être proposé. La durée exacte dépend de votre chirurgien.",
              "Les trajets longs en voiture ou en avion sont à discuter avec lui, en raison du risque de phlébite et de la position assise prolongée.",
            ],
          },
          {
            heading: "Reprise du travail et du sport",
            paragraphs: [
              "Après un lipofilling du visage, la reprise d'une activité de bureau est souvent possible après quelques jours à une semaine, selon l'œdème. Après un lipofilling des seins ou des fesses, elle se fait plutôt après une à deux semaines, davantage pour un métier physique ou imposant la position assise.",
              "Le sport doux reprend en général vers trois à quatre semaines, le sport intense ou de contact vers six semaines. Attendez l'avis du chirurgien.",
            ],
          },
          {
            heading: "Le résultat et le suivi",
            paragraphs: [
              "Le volume diminue dans les premières semaines avec la résorption de l'œdème puis d'une partie de la graisse. Le résultat se stabilise entre trois et six mois ; c'est à ce moment que le chirurgien évalue l'intérêt d'une séance complémentaire.",
              "Après un lipofilling des seins, un suivi radiologique est prévu et le dépistage habituel doit être poursuivi, en signalant toujours l'intervention.",
            ],
          },
          {
            heading: "Les signes qui doivent alerter",
            paragraphs: [
              "Fièvre, rougeur qui s'étend, douleur croissante, écoulement purulent ou gonflement brutal d'un côté justifient d'appeler le chirurgien. Essoufflement, douleur thoracique, malaise ou trouble de la vision imposent d'appeler le 15 ou le 112.",
            ],
          },
        ],
        sources: [SOFCPRE, HAS, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Avant de se décider ──
      {
        interventionId: "fat-grafting",
        kind: "decision",
        locale: "fr",
        title: "Lipofilling : avant de se décider",
        summary:
          "Attentes réalistes, séances multiples, seins et dépistage, sécurité du lipofilling fessier, questions à poser et délai de 15 jours avant un lipofilling.",
        answer:
          "Un lipofilling s'envisage avec des attentes réalistes : gain de volume modéré, résorption partielle, parfois plusieurs séances. Pour les seins, un bilan d'imagerie est nécessaire ; pour les fesses, la technique d'injection est un enjeu de sécurité majeur. Prenez le temps de consulter et utilisez le délai légal de 15 jours. Notre plateforme s'adresse aux personnes majeures.",
        sections: [
          {
            heading: "Des attentes réalistes",
            paragraphs: [
              "Le lipofilling apporte un volume modéré et progressif. Il ne permet pas d'obtenir en une séance un résultat comparable à un implant, ni de corriger un relâchement important de la peau. La part de graisse qui survit n'est pas prévisible avec précision.",
              "Il faut aussi disposer d'une réserve de graisse suffisante. Chez une personne très mince, le volume disponible peut limiter fortement le résultat.",
            ],
          },
          {
            heading: "Une demande qui vient de vous",
            paragraphs: [
              "La décision doit être la vôtre, sans pression d'un partenaire, d'un proche ou des réseaux sociaux. Les silhouettes très marquées diffusées en ligne sont souvent retouchées ou obtenues au prix de risques importants.",
              "Le trouble dysmorphique corporel (dysmorphophobie) se traduit par une préoccupation excessive pour un défaut minime ou invisible pour les autres, qui occupe beaucoup de temps et retentit sur la vie quotidienne. La chirurgie ne le soulage généralement pas. Si vous vous reconnaissez dans cette description, parlez-en à votre médecin traitant ou à un psychologue. En cas d'idées suicidaires, appelez le 3114, gratuit, 24 heures sur 24.",
            ],
          },
          {
            heading: "Seins : penser au dépistage",
            paragraphs: [
              "Avant un lipofilling des seins, un bilan d'imagerie récent est demandé, et un suivi est prévu après. Si vous avez un antécédent personnel ou familial de cancer du sein, ou une prédisposition génétique connue, la décision se prend au cas par cas avec l'équipe et le radiologue.",
            ],
          },
          {
            heading: "Fesses : la sécurité avant tout",
            paragraphs: [
              "Le lipofilling fessier a été associé à des décès par embolie graisseuse lorsque la graisse était injectée dans le muscle. Les sociétés savantes recommandent une injection exclusivement sous-cutanée. Un chirurgien doit pouvoir vous expliquer clairement où il injecte, avec quels volumes et quelles précautions.",
              "Soyez particulièrement prudent face aux forfaits à l'étranger, aux interventions réalisées en dehors d'un établissement autorisé ou par des personnes non qualifiées, et aux injections de produits de comblement dans les fesses.",
            ],
          },
          {
            heading: "Questions à poser en consultation",
            paragraphs: ["Notez vos questions et les réponses obtenues."],
            bullets: [
              "Êtes-vous qualifié en chirurgie plastique, reconstructrice et esthétique ? (vérifiable sur l'Annuaire santé ou auprès de l'Ordre des médecins)",
              "Quel gain de volume puis-je raisonnablement attendre, et combien de séances envisagez-vous ?",
              "Où sera prélevée la graisse et comment sera-t-elle préparée ?",
              "Pour les fesses : injectez-vous uniquement dans le tissu sous-cutané ? Quelles précautions prenez-vous ?",
              "Pour les seins : quel bilan d'imagerie avant et quel suivi après ?",
              "Quels risques me concernent particulièrement ? Qui joindre en cas de problème, y compris la nuit ?",
              "Que comprend le devis en cas de séance complémentaire ou de complication ?",
            ],
          },
          {
            heading: "Deuxième avis et délai de réflexion",
            paragraphs: [
              "Consulter un deuxième chirurgien est une démarche courante et légitime. En France, un délai minimal de 15 jours sépare la remise du devis détaillé et daté de l'intervention, et aucun paiement autre que la consultation ne peut être exigé avant. Vous pouvez renoncer ou reporter à tout moment.",
            ],
          },
        ],
        sources: [LEGIFRANCE_L6322_2, ANNUAIRE_SANTE, HAS, ISAPS_FR, N3114],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Alternatives ──
      {
        interventionId: "fat-grafting",
        kind: "alternatives",
        locale: "fr",
        title: "Alternatives au lipofilling",
        summary:
          "Produits de comblement, implants mammaires ou fessiers, lifting ou ne rien faire : les alternatives au lipofilling, leurs limites et leurs risques.",
        answer:
          "Selon la zone et l'objectif, les alternatives au lipofilling sont les produits de comblement pour le visage, les implants pour les seins ou les fesses, une chirurgie de la peau en cas de relâchement, ou ne rien faire. Chacune a ses avantages, ses limites et ses risques propres.",
        sections: [
          {
            heading: "Ne rien faire",
            paragraphs: [
              "Renoncer ou reporter reste un choix légitime. Une demande qui persiste dans le temps peut être réexaminée plus tard, à poids stable et dans un contexte personnel apaisé.",
            ],
          },
          {
            heading: "Les produits de comblement au visage",
            paragraphs: [
              "L'acide hyaluronique injecté corrige des creux ou restaure des volumes du visage sans chirurgie ni prélèvement. Son effet est temporaire, de quelques mois à plus d'un an, et nécessite des injections répétées.",
              "Il comporte ses propres risques : ecchymoses, nodules, infection et, rarement, occlusion d'un vaisseau avec risque de nécrose ou de perte de la vision. Il doit être injecté par un médecin formé.",
            ],
          },
          {
            heading: "Les implants mammaires",
            paragraphs: [
              "Ils permettent un gain de volume plus important et plus prévisible en une seule intervention. Ils impliquent en revanche un dispositif implanté, avec des risques spécifiques (coque, rupture, rare lymphome associé aux implants) et une surveillance au long cours. Une combinaison implant et lipofilling est parfois proposée.",
            ],
          },
          {
            heading: "Les implants fessiers et les produits injectés dans les fesses",
            paragraphs: [
              "Les implants fessiers sont une alternative au lipofilling fessier, avec leurs propres risques : infection, déplacement, désunion de cicatrice, gêne en position assise.",
              "L'injection de produits de comblement en grand volume dans les fesses est déconseillée : risques d'infection, de nodules, de migration, et de produits non autorisés injectés par des personnes non qualifiées. Ne confondez pas ces pratiques avec un acte chirurgical encadré.",
            ],
          },
          {
            heading: "Lifting et chirurgie de la peau",
            paragraphs: [
              "Lorsque le problème principal est un relâchement plutôt qu'un manque de volume, un lifting du visage, un lifting des seins (mastopexie) ou une chirurgie de la silhouette peut être plus adapté. Le lipofilling est d'ailleurs souvent associé à ces interventions.",
            ],
          },
        ],
        sources: [ANSM, HAS, SOFCPRE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "fat-necrosis",
        locale: "fr",
        slug: "cytosteatonecrose",
        term: "Cytostéatonécrose",
        aliases: [
          "cytostéatonécroses",
          "cytosteatonecrose",
          "nécrose graisseuse",
          "nécroses graisseuses",
          "nécrose du tissu graisseux",
          "stéatonécrose",
        ],
        definition:
          "La cytostéatonécrose est la mort d'un îlot de cellules graisseuses, qui forme un nodule ferme ou un kyste rempli d'huile. Elle survient notamment après un lipofilling, une chirurgie ou un traumatisme du sein.",
        detail: [
          "Après un lipofilling, une partie de la graisse injectée peut ne pas être revascularisée et mourir. Elle forme alors des nodules palpables, des kystes huileux ou des zones calcifiées. Ces lésions sont bénignes mais peuvent être gênantes ou inquiétantes.",
          "Dans le sein, la cytostéatonécrose peut donner des micro-calcifications ou des images visibles à la mammographie et à l'échographie. Un radiologue informé de l'intervention les reconnaît le plus souvent comme bénignes, mais une biopsie est parfois nécessaire pour écarter un cancer.",
          "Une technique d'injection en petites quantités réparties limite ce risque sans le supprimer. Tout nodule nouveau du sein doit être montré à un médecin.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "fat-embolism",
        locale: "fr",
        slug: "embolie-graisseuse",
        term: "Embolie graisseuse",
        aliases: ["embolies graisseuses", "embolie de graisse", "syndrome d'embolie graisseuse", "embolie graisseuse pulmonaire"],
        definition:
          "L'embolie graisseuse est le passage de graisse dans la circulation sanguine, qui peut obstruer des vaisseaux des poumons, du cerveau ou d'autres organes. C'est une complication rare mais potentiellement mortelle.",
        detail: [
          "En chirurgie esthétique, elle est principalement associée au lipofilling des fesses lorsque la graisse est injectée dans ou sous le muscle grand fessier : elle peut alors pénétrer dans les grosses veines de la région et migrer vers les poumons, avec une détresse respiratoire brutale.",
          "Pour réduire ce risque, les sociétés savantes de chirurgie plastique recommandent d'injecter la graisse uniquement dans le tissu sous-cutané, au-dessus du muscle. Elle peut aussi survenir, plus rarement, après une liposuccion ou une fracture d'un os long.",
          "Un essoufflement, une douleur thoracique, une confusion ou un malaise après une intervention imposent d'appeler le 15 ou le 112 sans attendre.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },

  // ═══════════════════════════════════ UNITED KINGDOM ═══════════════════════════════════
  "en-gb": {
    intervention: {
      id: "fat-grafting",
      locale: "en-gb",
      slug: "fat-transfer",
      category: "body",
      title: "Fat transfer (fat grafting)",
      summary:
        "Fat transfer moves your own fat to add volume. How it works, areas treated, risks including buttock fat transfer (BBL), recovery and questions to ask.",
      description: [
        "Fat transfer, also called fat grafting or lipofilling, involves removing fat from an area where you have some to spare, such as the tummy, hips, thighs or inner knees, and injecting it into an area you would like to reshape. No implant or filler is used: your own tissue is moved from one place to another.",
        "There are three stages. The fat is harvested by gentle liposuction through a thin tube (cannula) using low suction to protect the fat cells. It is then purified to separate the fat from blood, fluid and free oil, by settling, spinning in a centrifuge or filtering, depending on the surgeon's technique. Finally it is reinjected through fine cannulas in small amounts spread across many channels, so that each droplet sits next to tissue with a good blood supply and has a chance to survive.",
        "The areas most often treated are the face (cheeks, temples, folds, hollows under the eyes), the breasts (a modest increase in size, correcting asymmetry or as part of reconstruction after cancer), the buttocks and hips, and the backs of the hands. Fat transfer is also used in reconstructive surgery to correct the effects of previous surgery, injury, or fat loss caused by some medical treatments.",
        "The scars are a few millimetres long, where the cannulas go in, and are usually placed in creases or discreet areas. They tend to fade over time but do not disappear completely.",
        "Fat transfer does not replace a facelift, does not tighten loose skin and cannot give a large increase in volume in a single session. Some of the injected fat is reabsorbed during the first months, by an amount that varies and cannot be predicted precisely, so more than one session a few months apart may be needed. You also need enough spare fat at the donor site.",
        "Fat that has survived after three to six months is generally considered to be established. It then behaves like fat elsewhere in your body: it increases if you gain weight and shrinks if you lose weight, and natural ageing continues.",
      ],
      indications: [
        "Wanting a modest increase in breast size without implants, if you have enough spare fat.",
        "Hollowing, volume loss or asymmetry of the face from ageing, weight loss or previous injury.",
        "Reshaping of the buttocks or hips, with fat placed only under the skin, above the muscle.",
        "Correcting irregularities after liposuction, tethered scars or contour defects after surgery or injury.",
        "Breast reconstruction after cancer, alone or alongside an implant or flap, as part of specialist NHS or private care.",
        "Thin skin with prominent tendons on the backs of the hands.",
      ],
      contraindications: [
        "Unrealistic expectations, such as a large increase in volume from one session or matching an edited photo.",
        "Pressure from a partner, family member or social media.",
        "Excessive worry about a minor or invisible difference (discuss this with your surgeon or GP).",
        "Not enough spare fat at the donor sites.",
        "Smoking or vaping nicotine, which reduces fat survival and increases wound-healing problems; stopping is strongly advised.",
        "Bleeding disorders, diabetes or other uncontrolled medical conditions, or a current infection.",
        "For the breasts: a personal history or strong family history of breast cancer, to be discussed case by case with the team and a radiologist; recent breast imaging is essential.",
        "Unstable weight or plans for major weight loss in the near future.",
      ],
      risks: [
        {
          name: "Bruising, swelling and discomfort",
          detail:
            "Expected at both the donor and treated areas. Bruising usually fades within two to three weeks; swelling, more noticeable on the face, settles over several weeks.",
        },
        {
          name: "Partial reabsorption of fat",
          detail:
            "A variable proportion of the injected fat does not survive and disappears over the first three to six months. The result may be smaller than you hoped, and further sessions may be needed.",
        },
        {
          name: "Lumpiness, irregularity and asymmetry",
          detail:
            "Lumps, dents or differences between the two sides can occur at the treated area or the donor site. Some improve with time; others need further treatment.",
        },
        {
          name: "Fat necrosis and oil cysts",
          detail:
            "Fat that does not survive can form firm lumps or cysts filled with oil. They are usually harmless but can be felt, may be uncomfortable, and sometimes need a scan, drainage or, less often, removal.",
        },
        {
          name: "Changes on breast imaging",
          detail:
            "After breast fat transfer, fat necrosis can produce microcalcifications or other changes on a mammogram or ultrasound. These are usually recognisable as benign to a radiologist who knows about the procedure, but they can lead to further tests, including a biopsy.",
        },
        {
          name: "Infection",
          detail:
            "Uncommon. Signs include redness, warmth, increasing pain or a high temperature. It is treated with antibiotics and occasionally surgical drainage.",
        },
        {
          name: "Haematoma or seroma",
          detail: "A collection of blood or fluid, usually at the donor site, which may need draining or, rarely, a return to theatre.",
        },
        {
          name: "Altered sensation",
          detail: "Numbness or changed sensation of the skin over treated areas, usually temporary and improving over weeks to months.",
        },
        {
          name: "Fat embolism with buttock fat transfer",
          detail:
            "Rare but potentially fatal: when fat is injected into or beneath the gluteal muscle, it can enter the large veins in the area and travel to the lungs. For this reason, professional bodies advise that fat should only be placed in the layer under the skin, above the muscle.",
        },
        {
          name: "Injection into a blood vessel in the face",
          detail:
            "Very rarely, fat injected into a facial blood vessel can block an artery, risking skin loss, loss of vision or stroke. Blunt cannulas and small volumes reduce this risk but do not remove it.",
        },
        {
          name: "Anaesthetic risks and blood clots",
          detail:
            "Assessed at your pre-operative anaesthetic review. As with any surgery, deep vein thrombosis or pulmonary embolism is possible, especially after longer procedures on the body; preventive measures may be prescribed.",
        },
      ],
      procedure: {
        anaesthesia:
          "Local anaesthetic, sometimes with sedation, for small volumes (face, hands); usually general anaesthetic for the breasts and buttocks.",
        duration: "From under an hour for the face to two to four hours for the breasts or buttocks, depending on volumes.",
        hospitalStay: "Usually a day case; sometimes one night in hospital for larger volumes.",
      },
      recovery: [
        "Day 1: most people go home the same day with someone to accompany them; aching similar to a bruise or after hard exercise, eased with the painkillers advised.",
        "Week 1: bruising and swelling at the donor and treated areas; a compression garment over the donor area, usually for several weeks.",
        "After buttock fat transfer: avoid sitting or lying directly on your buttocks for as long as your surgeon advises, often several weeks.",
        "After facial fat transfer: visible swelling for one to two weeks; avoid massaging or pressing the treated areas unless told otherwise.",
        "Return to work: often after a few days to a week for the face, and one to two weeks for the breasts or buttocks, depending on your job.",
        "Exercise: gentle activity from around three to four weeks, strenuous or contact sport from around six weeks, as advised by your surgeon.",
        "Months 3 to 6: reabsorption settles and your surgeon assesses the result and whether another session would help.",
        "After breast fat transfer: keep attending breast screening and tell the radiographer about the procedure at every appointment.",
      ],
      alternatives: [
        "Doing nothing, or waiting: a legitimate choice that you can revisit later.",
        "Dermal fillers (hyaluronic acid) for the face: temporary, needing repeat treatments, with their own risks including rare but serious vascular complications. Check the practitioner is a regulated healthcare professional.",
        "Breast implants: a larger increase in one operation, but an implanted device with its own risks and long-term follow-up.",
        "Buttock implants: an alternative to buttock fat transfer, with their own risks (infection, movement, wound problems).",
        "A lift or skin surgery when the main issue is loose skin rather than lost volume.",
      ],
      faq: [
        {
          question: "Does fat transfer hurt?",
          answer:
            "The donor area is often the sorest, with aching for a few days and tenderness that eases over two to three weeks. Painkillers usually control it. Tell your surgeon if pain gets worse rather than better.",
        },
        {
          question: "How much of the fat will stay?",
          answer:
            "No one can predict this precisely: some of the fat is reabsorbed in the first months, by an amount that varies with the area, the technique and the person. That is why the result is judged after three to six months, and why a second session is sometimes suggested.",
        },
        {
          question: "Is the result permanent?",
          answer:
            "Fat that survives beyond a few months stays in place long term, but it follows changes in your weight and natural ageing. Significant weight gain or loss will change the result.",
        },
        {
          question: "Is a Brazilian butt lift (BBL) dangerous?",
          answer:
            "Buttock fat transfer has been linked to deaths from fat embolism when fat was injected into the muscle. In the UK, BAAPS has issued warnings and safety guidance, and professional bodies advise injecting only under the skin, above the muscle. Ask your surgeon exactly how they do it, and be wary of low-cost packages abroad or treatment by unqualified practitioners.",
        },
        {
          question: "Will breast fat transfer affect breast screening?",
          answer:
            "It can cause changes such as cysts or microcalcifications on a mammogram, which a radiologist who knows about the procedure can usually identify as benign. Breast imaging is done beforehand and follow-up is planned afterwards. Always tell the screening team about your procedure.",
        },
        {
          question: "What about pregnancy or breastfeeding afterwards?",
          answer:
            "Transferred fat changes with the weight changes of pregnancy. It is usually advisable to wait until you have completed your family before cosmetic fat transfer. Discuss breastfeeding with your surgeon before breast fat transfer.",
        },
        {
          question: "Will there be scars?",
          answer:
            "The entry points are a few millimetres long and placed in discreet areas. They are usually hard to see once healed, but a more noticeable or darker mark is possible depending on your skin.",
        },
        {
          question: "Is fat transfer available on the NHS?",
          answer:
            "Not for cosmetic reasons. It may be used on the NHS as part of breast reconstruction after cancer or to treat the effects of certain conditions or previous surgery, subject to local criteria; in some cases an individual funding request is needed.",
        },
        {
          question: "How long should I wait before deciding?",
          answer:
            "There is no legal cooling-off period in the UK, but GMC guidance says you should be given time to reflect, and a period of at least two weeks between consultation and agreeing to surgery is widely recommended.",
        },
        {
          question: "Who should perform my fat transfer?",
          answer:
            "A surgeon on the GMC Specialist Register in plastic surgery, working in a hospital or clinic registered with the Care Quality Commission in England, or the equivalent regulator elsewhere in the UK. You can check the GMC register online; Royal College of Surgeons cosmetic certification is an additional, optional check.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risks ──
      {
        interventionId: "fat-grafting",
        kind: "risks",
        locale: "en-gb",
        title: "Fat transfer risks",
        summary:
          "Expected effects, fat necrosis, breast imaging changes and fat embolism with buttock fat transfer (BBL): the risks of fat grafting and when to get help.",
        answer:
          "Bruising, swelling and partial loss of the transferred fat are expected after fat transfer. Oil cysts, fat necrosis, lumpiness and infection are less common. The most serious risk is fat embolism: rare but potentially fatal, mainly with buttock fat transfer when fat is injected into the muscle.",
        sections: [
          {
            heading: "Common and expected effects",
            paragraphs: [
              "These are a normal part of healing rather than complications. They affect both the donor and treated areas and settle over a few weeks.",
            ],
            bullets: [
              "Bruising and swelling, which can be widespread at the donor site.",
              "Aching, especially where the fat was taken from.",
              "Some loss of volume over the first months as part of the fat is reabsorbed.",
              "Changed skin sensation, usually temporary.",
            ],
          },
          {
            heading: "Less common complications",
            paragraphs: [
              "How likely these are depends on the area, the volumes injected, the technique and your health. Your surgeon can tell you which apply most to you.",
            ],
            bullets: [
              "Fat necrosis: firm lumps formed by fat that has not survived.",
              "Oil cysts, which can sometimes be felt and may need draining.",
              "Lumps, dents or irregularities at the treated area or donor site.",
              "Asymmetry between the two sides.",
              "Infection, haematoma or seroma.",
              "Entry-point scars that are more visible than expected.",
            ],
          },
          {
            heading: "Breast fat transfer and imaging",
            paragraphs: [
              "Breast imaging (mammogram, ultrasound and sometimes MRI, depending on your age and history) is carried out before breast fat transfer, and follow-up is planned afterwards. Fat necrosis can cause microcalcifications or cysts that show up on scans.",
              "These are usually recognised as benign by a radiologist who knows about the procedure, but they can lead to further tests, including a biopsy. Always tell the NHS Breast Screening Programme or your breast clinic that you have had fat transfer.",
            ],
          },
          {
            heading: "Buttock fat transfer (BBL) and fat embolism",
            paragraphs: [
              "Buttock fat transfer, often called a Brazilian butt lift or BBL, has been linked to deaths from fat embolism. When fat is injected into or beneath the gluteal muscle, it can enter the large veins in that area and travel to the lungs, causing sudden breathing failure.",
              "An international task force of plastic surgery societies recommends injecting fat only into the layer under the skin, above the muscle, and never angling the cannula deeper. In the UK, BAAPS has issued repeated warnings about the procedure: in 2018 it advised its members to pause performing it, and it has since published safety guidance for surgeons who do.",
              "Many reported deaths and serious complications in UK patients followed surgery abroad on low-cost packages, or treatment by unqualified practitioners. Before going ahead, ask the surgeon exactly how they inject and check their registration.",
            ],
          },
          {
            heading: "Other rare but serious complications",
            paragraphs: ["These are very rare but you should know about them before deciding."],
            bullets: [
              "Injection into a facial blood vessel, risking skin loss, loss of vision or stroke.",
              "Severe infection needing hospital admission and drainage.",
              "Deep vein thrombosis or pulmonary embolism, particularly after longer procedures on the body.",
              "Injury to an internal organ during fat harvesting, which is exceptional.",
            ],
          },
          {
            heading: "When to seek help urgently",
            paragraphs: [
              "Contact your surgeon or the hospital that treated you promptly if you have a high temperature, spreading redness or warmth, pain that is getting worse rather than better, discharge that looks like pus, or sudden painful swelling on one side. If you cannot reach them, call NHS 111.",
              "Call 999 if you have breathlessness, chest pain, collapse, confusion, a change in your vision or weakness on one side of the body, even several days after the procedure.",
            ],
          },
        ],
        sources: [BAAPS, ISAPS_UK, BAPRAS, NHS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Cost ──
      {
        interventionId: "fat-grafting",
        kind: "cost",
        locale: "en-gb",
        title: "How much does fat transfer cost?",
        summary:
          "What a UK fat transfer quote should include, what affects the cost, repeat sessions, when the NHS may fund it and the cost of complications.",
        answer:
          "The cost of private fat transfer in the UK depends on the area treated, the volumes, the type of anaesthetic, the hospital and the number of sessions, so we do not publish price figures. Ask for a detailed written quote. The NHS does not fund cosmetic fat transfer, but it may be used in reconstruction after cancer.",
        sections: [
          {
            heading: "What a quote should include",
            paragraphs: ["Ask for the quote in writing and check what is excluded as well as what is included."],
            bullets: [
              "The surgeon's fee, with the operating surgeon named.",
              "The anaesthetist's fee and the type of anaesthetic planned.",
              "Hospital fees: theatre, day case or overnight stay, equipment for harvesting and processing fat.",
              "Compression garments and any medicines.",
              "Follow-up appointments and how long aftercare lasts.",
              "The policy on further sessions or revision, and what you would still pay.",
            ],
          },
          {
            heading: "What affects the cost",
            paragraphs: [
              "A small facial treatment under local anaesthetic is very different from breast or buttock fat transfer under general anaesthetic. Operating time, the volumes harvested and injected, the number of donor sites and the hospital all affect the quote.",
              "Because some of the fat is reabsorbed, a second session is sometimes needed. Ask at the start whether it is likely and how it would be charged.",
            ],
          },
          {
            heading: "NHS funding",
            paragraphs: [
              "The NHS does not fund fat transfer for cosmetic reasons. It may be offered as part of breast reconstruction after cancer, or to treat the effects of injury, previous surgery or certain conditions. Local areas set their own criteria, often listing cosmetic procedures as being of limited clinical value, and an individual funding request may be needed in exceptional cases.",
              "If you have a concern that may have a medical cause, start by speaking to your GP.",
            ],
          },
          {
            heading: "If complications occur",
            paragraphs: [
              "The NHS will treat emergencies, such as a serious infection or a suspected embolism, whoever performed the surgery. It will not usually fund revision of private cosmetic surgery to improve appearance. Check whether your package includes treatment of complications and further imaging, and whether optional complications insurance is available and what it excludes.",
            ],
          },
          {
            heading: "Finance, discounts and surgery abroad",
            paragraphs: [
              "GMC guidance says doctors must not use time-limited discounts or financial incentives to encourage people to have cosmetic procedures. A deal that expires quickly is a reason to slow down. Be cautious about clinic-arranged finance that encourages you to commit before you have had time to reflect.",
              "Low-cost packages abroad, particularly for buttock fat transfer, have been linked to serious complications and can leave you without local follow-up. Read our guide on having surgery abroad before booking.",
            ],
          },
        ],
        sources: [NHS, GMC, BAAPS, CQC],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Recovery ──
      {
        interventionId: "fat-grafting",
        kind: "recovery",
        locale: "en-gb",
        title: "Recovery after fat transfer",
        summary:
          "Fat transfer recovery week by week: compression, sitting after buttock fat transfer, return to work and exercise, and when the result settles.",
        answer:
          "Most people go home the same day. Bruising lasts two to three weeks, a compression garment is worn over the donor area for several weeks, and most return to work after a few days to two weeks. The result can only be judged after three to six months, once reabsorption has settled.",
        sections: [
          {
            heading: "The first few days",
            paragraphs: [
              "Arrange for someone to take you home and stay with you the first night. The donor area is usually the sorest, with an ache like after hard exercise; the painkillers advised by the hospital usually control it.",
              "Blood-stained fluid leaking from the entry points is common for the first 24 to 48 hours, because of the fluid used during harvesting.",
            ],
          },
          {
            heading: "Weeks 1 to 3",
            paragraphs: ["Instructions vary with the area treated; follow your surgeon's advice."],
            bullets: [
              "Wear the compression garment over the donor area, usually for several weeks.",
              "Avoid pressing or massaging the treated area unless advised, so as not to harm the transferred fat.",
              "After breast fat transfer: wear a supportive bra without a tight underwire, as advised.",
              "Walk early and often to reduce the risk of blood clots.",
              "Do not smoke, to help the fat survive and the wounds heal.",
            ],
          },
          {
            heading: "After buttock fat transfer",
            paragraphs: [
              "You will usually be asked not to sit or lie directly on your buttocks for several weeks, so the transferred fat is not squashed. A special cushion may be suggested. The exact period depends on your surgeon.",
              "Discuss long car journeys and flights with your surgeon, because of prolonged sitting and the risk of blood clots. This is one reason why flying home soon after surgery abroad is a concern.",
            ],
          },
          {
            heading: "Returning to work and exercise",
            paragraphs: [
              "After facial fat transfer, many people return to desk work after a few days to a week, depending on swelling. After breast or buttock fat transfer it is more often one to two weeks, longer for physical jobs or work that involves long periods of sitting.",
              "Gentle exercise usually resumes at around three to four weeks, and strenuous or contact sport at around six weeks. Check with your surgeon first.",
            ],
          },
          {
            heading: "The result and follow-up",
            paragraphs: [
              "Volume decreases over the first weeks as swelling settles and some of the fat is reabsorbed. The result usually stabilises between three and six months, when your surgeon can assess whether another session would help.",
              "After breast fat transfer, follow-up imaging is planned and you should continue routine breast screening, always mentioning the procedure.",
            ],
          },
          {
            heading: "Warning signs",
            paragraphs: [
              "A high temperature, spreading redness, worsening pain, pus or sudden swelling on one side mean you should contact your surgeon, or NHS 111 if you cannot reach them. Breathlessness, chest pain, collapse or a change in vision mean calling 999.",
            ],
          },
        ],
        sources: [NHS, BAPRAS, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Decision ──
      {
        interventionId: "fat-grafting",
        kind: "decision",
        locale: "en-gb",
        title: "Fat transfer: before you decide",
        summary:
          "Realistic expectations, repeat sessions, breast screening, BBL safety, questions to ask your surgeon and the two-week cooling-off period.",
        answer:
          "Fat transfer needs realistic expectations: a modest increase in volume, some reabsorption and sometimes several sessions. For the breasts, imaging is needed beforehand; for the buttocks, how the fat is injected is a major safety issue. Take time to reflect, with at least two weeks before agreeing to surgery. Our platform is for adults only.",
        sections: [
          {
            heading: "Realistic expectations",
            paragraphs: [
              "Fat transfer gives a modest, gradual increase in volume. It cannot match the size change of an implant in one session, or correct significant loose skin. How much of the fat survives cannot be predicted precisely.",
              "You also need enough spare fat. If you are very slim, the amount available may limit what can be achieved.",
            ],
          },
          {
            heading: "Making sure it is your decision",
            paragraphs: [
              "The decision should be yours, without pressure from a partner, family or social media. Very exaggerated body shapes seen online are often edited, or achieved at significant risk.",
              "Body dysmorphic disorder (BDD) is an excessive preoccupation with a minor or invisible flaw that takes up a lot of time and affects daily life. Surgery does not usually help and can make it worse. If this sounds familiar, talk to your GP, who can refer you for support through the NHS. If you are struggling to cope, you can call Samaritans free on 116 123, day or night.",
            ],
          },
          {
            heading: "Breasts: think about screening",
            paragraphs: [
              "Before breast fat transfer, recent breast imaging is required, and follow-up is planned. If you have a personal or family history of breast cancer, or a known genetic risk, the decision should be made case by case with the team and a radiologist.",
            ],
          },
          {
            heading: "Buttocks: safety first",
            paragraphs: [
              "Buttock fat transfer has been linked to deaths from fat embolism when fat was injected into the muscle. BAAPS and international professional bodies advise injecting only under the skin. Your surgeon should be able to explain clearly where they inject, what volumes they use and what precautions they take, such as ultrasound guidance.",
              "Be particularly careful about low-cost packages abroad, procedures in unregistered premises or by unqualified practitioners, and so-called non-surgical or liquid BBL using fillers injected into the buttocks.",
            ],
          },
          {
            heading: "Questions to ask at your consultation",
            paragraphs: ["Write down your questions and the answers you receive."],
            bullets: [
              "Are you on the GMC Specialist Register in plastic surgery? (You can check online.) Is the hospital registered with the CQC?",
              "What increase in volume can I realistically expect, and how many sessions do you think I will need?",
              "Where will you take the fat from, and how will it be processed?",
              "For the buttocks: do you inject only above the muscle? What precautions do you take?",
              "For the breasts: what imaging do I need before, and what follow-up after?",
              "Which risks apply most to me? Who do I contact if there is a problem, including at night?",
              "What does the quote cover if I need another session or have a complication?",
            ],
          },
          {
            heading: "Second opinion and cooling-off period",
            paragraphs: [
              "Getting a second opinion is common and sensible. There is no legal cooling-off period in the UK, but GMC guidance says you must be given time to reflect, and at least two weeks between consultation and agreeing to surgery is recommended. You can change your mind at any point.",
            ],
          },
        ],
        sources: [GMC, BAAPS, CQC, RCS, SAMARITANS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Alternatives ──
      {
        interventionId: "fat-grafting",
        kind: "alternatives",
        locale: "en-gb",
        title: "Alternatives to fat transfer",
        summary:
          "Dermal fillers, breast or buttock implants, a lift or doing nothing: the alternatives to fat transfer, their limits and their own risks.",
        answer:
          "Depending on the area and your aims, alternatives to fat transfer include dermal fillers for the face, implants for the breasts or buttocks, skin-tightening surgery when loose skin is the main issue, or doing nothing. Each has its own benefits, limits and risks.",
        sections: [
          {
            heading: "Doing nothing",
            paragraphs: [
              "Deciding not to go ahead, or to wait, is a legitimate choice. A concern that persists can be revisited later, when your weight is stable and your circumstances are settled.",
            ],
          },
          {
            heading: "Dermal fillers for the face",
            paragraphs: [
              "Hyaluronic acid fillers can soften hollows or restore facial volume without surgery or fat harvesting. The effect is temporary, lasting months to around a year or more, so repeat treatments are needed.",
              "They have their own risks: bruising, lumps, infection and, rarely, blockage of a blood vessel with risk of skin loss or loss of vision. In the UK, fillers can be given by people without medical training; choose a regulated healthcare professional who can manage complications.",
            ],
          },
          {
            heading: "Breast implants",
            paragraphs: [
              "Implants give a larger and more predictable increase in size in one operation. They involve an implanted device with specific risks (capsular contracture, rupture, rare implant-associated lymphoma) and long-term follow-up. A combination of implant and fat transfer is sometimes suggested.",
            ],
          },
          {
            heading: "Buttock implants and injected fillers",
            paragraphs: [
              "Buttock implants are an alternative to buttock fat transfer, with their own risks: infection, implant movement, wound breakdown and discomfort when sitting.",
              "So-called non-surgical or liquid BBL, where large volumes of filler are injected into the buttocks, is not recommended by UK professional bodies: it has been linked to serious infection, sepsis, lumps and migration of the product, often after treatment by unqualified practitioners. It is not a safer version of surgery.",
            ],
          },
          {
            heading: "A lift or skin surgery",
            paragraphs: [
              "When loose skin rather than lost volume is the main issue, a facelift, breast uplift (mastopexy) or body-contouring surgery may be more suitable. Fat transfer is often combined with these operations.",
            ],
          },
        ],
        sources: [NHS, BAAPS, BAPRAS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "fat-necrosis",
        locale: "en-gb",
        slug: "fat-necrosis",
        term: "Fat necrosis",
        aliases: ["fat necroses", "necrosis of fat", "steatonecrosis", "cytosteatonecrosis"],
        definition:
          "Fat necrosis is the death of a cluster of fat cells, which forms a firm lump or a cyst filled with oil. It can occur after fat transfer, breast surgery or an injury to the breast.",
        detail: [
          "After fat transfer, some of the injected fat may not gain a blood supply and dies. It can form lumps that can be felt, oil cysts or calcified areas. These are benign but can be uncomfortable or worrying.",
          "In the breast, fat necrosis can cause microcalcifications or other changes on a mammogram or ultrasound. A radiologist who knows about the procedure can usually recognise them as benign, but a biopsy is sometimes needed to rule out cancer.",
          "Injecting small amounts spread across many channels reduces this risk but does not remove it. Any new breast lump should be checked by a doctor.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "fat-embolism",
        locale: "en-gb",
        slug: "fat-embolism",
        term: "Fat embolism",
        aliases: ["fat emboli", "fat embolus", "fat embolism syndrome", "pulmonary fat embolism"],
        definition:
          "Fat embolism is when fat enters the bloodstream and blocks blood vessels in the lungs, brain or other organs. It is a rare but potentially fatal complication.",
        detail: [
          "In cosmetic surgery it is mainly associated with buttock fat transfer (BBL) when fat is injected into or beneath the gluteal muscle: the fat can enter the large veins in that area and travel to the lungs, causing sudden breathing failure.",
          "To reduce this risk, BAAPS and international plastic surgery societies advise injecting fat only into the layer under the skin, above the muscle. Fat embolism can also occur, more rarely, after liposuction or a fracture of a long bone.",
          "Breathlessness, chest pain, confusion or collapse after a procedure mean calling 999 immediately.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },
};
