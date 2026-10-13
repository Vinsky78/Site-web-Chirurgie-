import type { Source } from "../types";
import type { Dossier } from "./types";

// ─── Sources France ───
const HAS: Source = { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" };
const HAS_BARIATRIQUE: Source = {
  label: "Haute Autorité de santé (HAS) — obésité de l'adulte : prise en charge chirurgicale et suivi après chirurgie bariatrique",
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
const ANSM: Source = {
  label: "Agence nationale de sécurité du médicament et des produits de santé (ANSM)",
  url: "https://ansm.sante.fr",
};

// ─── Sources Royaume-Uni ───
const NHS: Source = { label: "NHS: arm lift and cosmetic procedures", url: "https://www.nhs.uk" };
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
  label: "National Institute for Health and Care Excellence (NICE): obesity management and care after bariatric surgery",
  url: "https://www.nice.org.uk",
};

const REVIEW = { status: "draft" } as const;
const UPDATED_AT = "2026-10-13";

/** Brachioplastie (lifting des bras) : fiche, sous-pages et lexique (fr, en-gb). Brouillon à relire par le comité médical. */
export const dossier: Dossier = {
  // ════════════════════════════════════ FRANCE ════════════════════════════════════
  fr: {
    intervention: {
      id: "arm-lift",
      locale: "fr",
      slug: "lifting-des-bras",
      category: "body",
      title: "Lifting des bras (brachioplastie)",
      summary:
        "La brachioplastie retire l'excès de peau des bras, souvent après une forte perte de poids, au prix d'une longue cicatrice : techniques, risques, suites.",
      description: [
        "Le lifting des bras, ou brachioplastie, consiste à retirer l'excédent de peau et de graisse de la face interne du bras, entre l'aisselle et le coude, puis à retendre la peau restante. Il s'adresse au relâchement cutané qui donne un aspect de peau qui pend lorsque le bras est levé, parfois appelé « ailes de chauve-souris ».",
        "La situation la plus fréquente est celle d'une perte de poids importante, après une chirurgie de l'obésité (chirurgie bariatrique) ou un amaigrissement majeur : la peau, distendue pendant des années, ne se rétracte plus. Le vieillissement, la génétique et les variations de poids répétées peuvent aussi provoquer un relâchement plus modéré.",
        "Le prix à payer est une cicatrice longue. Dans la technique classique, elle court sur la face interne du bras, de l'aisselle jusqu'au coude, et peut se prolonger sur le côté du thorax quand l'excès de peau descend vers le tronc. Le chirurgien la place le plus souvent dans le sillon entre les muscles de la face interne, ou un peu en arrière, pour qu'elle soit peu visible bras le long du corps ; elle reste visible bras levés ou de face, et elle a tendance à s'élargir ou à s'épaissir.",
        "Lorsque l'excès de peau est limité et proche de l'aisselle, une brachioplastie dite courte, avec une cicatrice cachée dans le creux de l'aisselle, peut suffire. Elle ne corrige pas un relâchement qui s'étend jusqu'au coude. À l'inverse, une liposuccion seule ne convient qu'à un bras chargé en graisse avec une peau de bonne qualité : elle ne retire pas de peau.",
        "Une liposuccion est souvent associée à la brachioplastie, dans le même temps opératoire, pour réduire la graisse du bras et faciliter le retrait de la peau (on parle parfois de lipobrachioplastie). Le résultat se juge sur la silhouette du bras mais aussi sur la qualité de la cicatrice, qui ne s'apprécie qu'après 12 à 18 mois. Il se maintient tant que le poids reste stable ; le vieillissement de la peau continue.",
      ],
      indications: [
        "Excès de peau de la face interne du bras, gênant sur le plan esthétique ou fonctionnel (frottements, irritations, difficulté à s'habiller).",
        "Relâchement cutané après une perte de poids importante, notamment après chirurgie bariatrique, avec un poids stable depuis au moins 12 mois en général.",
        "Relâchement modéré lié à l'âge ou à des variations de poids, chez une personne qui accepte la cicatrice.",
        "Acceptation, après explication et visualisation, d'une cicatrice longue et visible bras levés.",
        "Demande précise, exprimée par la personne elle-même et stable dans le temps.",
        "Temps de remodelage associé à d'autres interventions après amaigrissement (abdominoplastie, lifting des cuisses, lifting des seins), selon un plan discuté avec le chirurgien.",
      ],
      contraindications: [
        "Poids non stabilisé, perte de poids encore en cours ou prévue.",
        "Refus ou appréhension majeure de la cicatrice, qui est inévitable dans la technique classique.",
        "Carences nutritionnelles non corrigées après chirurgie bariatrique (protéines, fer, vitamines), qui compromettent la cicatrisation.",
        "Tabagisme actif, qui augmente nettement le risque de désunion et de nécrose : un arrêt est recommandé.",
        "Antécédents de lymphœdème du membre supérieur, de curage ganglionnaire de l'aisselle ou de troubles circulatoires du bras, à évaluer spécifiquement.",
        "Pathologies cardiaques, respiratoires, diabète ou autres maladies chroniques non équilibrées, troubles de la coagulation.",
        "Attentes irréalistes, demande motivée par la pression d'un tiers ou préoccupation excessive pour un défaut minime.",
        "Grossesse ou allaitement en cours.",
      ],
      risks: [
        {
          name: "Ecchymoses, œdème et douleurs",
          detail:
            "Fréquents et attendus : bleus, gonflement du bras et parfois de l'avant-bras et de la main, tiraillements pendant plusieurs semaines. L'œdème peut persister quelques mois.",
        },
        {
          name: "Cicatrice élargie, épaissie ou visible",
          detail:
            "La face interne du bras est une zone où les cicatrices s'élargissent et s'épaississent fréquemment (cicatrice hypertrophique), restent rouges longtemps ou se pigmentent. Une chéloïde est plus rare. Une cicatrice peut aussi migrer et devenir plus visible que prévu. Des soins, des plaques de silicone ou une reprise sont parfois proposés.",
        },
        {
          name: "Retard de cicatrisation et désunion",
          detail:
            "Ouverture partielle de la cicatrice, souvent près de l'aisselle ou du coude, en raison de la tension. Elle cicatrise le plus souvent avec des soins locaux en quelques semaines, mais laisse une cicatrice plus large. Le tabac, le diabète et les carences augmentent ce risque.",
        },
        {
          name: "Sérome et hématome",
          detail:
            "Accumulation de liquide lymphatique ou de sang sous la peau, plus fréquente après liposuccion associée ou chez les personnes opérées après une forte perte de poids. Elle peut nécessiter des ponctions, plus rarement une reprise au bloc.",
        },
        {
          name: "Troubles de la sensibilité et lésion nerveuse",
          detail:
            "Engourdissement de la peau autour de la cicatrice, fréquent et le plus souvent transitoire. Un petit nerf sensitif qui chemine à la face interne du bras peut être lésé : il en résulte une zone d'insensibilité ou des douleurs de l'avant-bras, qui peuvent être durables.",
        },
        {
          name: "Lymphœdème",
          detail:
            "Rare : gonflement persistant de l'avant-bras ou de la main par gêne à la circulation lymphatique, plus à craindre en cas de résection étendue près de l'aisselle ou d'antécédents de chirurgie de cette région.",
        },
        {
          name: "Asymétrie, excès résiduel et irrégularités",
          detail:
            "Petites différences entre les deux bras, excès de peau persistant près du coude, petites « oreilles » aux extrémités de la cicatrice ou relâchement secondaire. Une retouche peut être discutée après stabilisation, en général au moins 6 à 12 mois plus tard.",
        },
        {
          name: "Infection et nécrose cutanée",
          detail:
            "L'infection est peu fréquente et le plus souvent traitée par antibiotiques. Une souffrance de la peau des berges (nécrose) est rare, favorisée par le tabac et la tension ; elle peut nécessiter des soins prolongés.",
        },
        {
          name: "Bride de l'aisselle",
          detail:
            "Une cicatrice qui traverse le creux de l'aisselle peut se rétracter et former une bride gênant l'élévation du bras ; elle peut nécessiter une correction chirurgicale.",
        },
        {
          name: "Thrombose veineuse et embolie pulmonaire",
          detail:
            "Rares mais graves. Le risque augmente avec la durée de l'intervention, les associations de gestes et certains facteurs personnels ; il est prévenu par un lever précoce et, selon le cas, des bas de contention et un traitement anticoagulant.",
        },
        {
          name: "Risques liés à l'anesthésie",
          detail: "À évaluer lors de la consultation d'anesthésie obligatoire.",
        },
      ],
      procedure: {
        anaesthesia: "Anesthésie générale le plus souvent ; une anesthésie locale avec sédation peut se discuter pour une brachioplastie courte.",
        duration: "Environ 1 h 30 à 3 heures selon l'étendue de la résection et l'association à une liposuccion.",
        hospitalStay:
          "Ambulatoire ou une nuit d'hospitalisation, davantage en cas d'interventions associées. Des drains sont parfois laissés 24 à 48 heures.",
      },
      recovery: [
        "Jour 1 : bras surélevés sur des coussins, tiraillements à la face interne, lever et marche dès le soir ou le lendemain.",
        "Manchons ou bandages de compression portés jour et nuit en général 3 à 6 semaines, selon les consignes du chirurgien.",
        "Semaine 1 : gonflement et ecchymoses, antalgiques simples, pansements ; éviter de lever les bras au-dessus des épaules et de porter des charges.",
        "Semaine 2 : retrait des fils non résorbables le cas échéant ; reprise d'une activité de bureau souvent entre 1 et 3 semaines.",
        "Semaines 3 à 4 : élévation progressive des bras ; pas de port de charges lourdes ni de mouvements amples répétés.",
        "Semaine 6 : reprise du sport, en particulier des exercices sollicitant les bras, avec l'accord du chirurgien.",
        "Cicatrice rouge et ferme pendant plusieurs mois : protection solaire stricte, massages et plaques de silicone si conseillés.",
        "Résultat apprécié entre 12 et 18 mois, quand la cicatrice a mûri.",
      ],
      alternatives: [
        "Ne rien faire : une option légitime, à reconsidérer après un temps de réflexion.",
        "Renforcement musculaire des bras et stabilisation du poids : ils améliorent la tonicité mais ne retirent pas la peau en excès.",
        "Liposuccion seule, si le bras est surtout chargé en graisse avec une peau élastique.",
        "Brachioplastie courte (cicatrice dans l'aisselle) pour un excès limité au tiers supérieur du bras.",
        "Techniques non chirurgicales de raffermissement (radiofréquence, ultrasons focalisés) : effet modeste sur un relâchement léger, inadaptées à un excès important, risques propres (brûlures).",
      ],
      faq: [
        {
          question: "Quelle sera la taille de la cicatrice ?",
          answer:
            "Dans la technique classique, elle va de l'aisselle au coude, sur la face interne du bras, et peut se prolonger sur le côté du thorax après une forte perte de poids. Elle est peu visible bras le long du corps mais se voit bras levés. Une brachioplastie courte laisse une cicatrice limitée à l'aisselle, mais ne convient qu'aux petits excès.",
        },
        {
          question: "La cicatrice va-t-elle s'estomper ?",
          answer:
            "Elle est rouge et ferme pendant plusieurs mois, puis s'éclaircit et s'assouplit en 12 à 18 mois. Au bras, elle s'élargit ou s'épaissit assez souvent. Sa qualité finale dépend de votre peau, de la tension, du tabac et des soins ; aucun chirurgien ne peut la prédire avec certitude.",
        },
        {
          question: "Combien de temps après une chirurgie de l'obésité peut-on se faire opérer ?",
          answer:
            "On attend en général que le poids soit stable depuis au moins 12 mois, souvent 12 à 18 mois après la chirurgie bariatrique. Un bilan nutritionnel (protéines, fer, vitamines) est utile avant l'intervention, car les carences ralentissent la cicatrisation.",
        },
        {
          question: "Peut-on associer une liposuccion ?",
          answer:
            "Oui, c'est fréquent : la liposuccion réduit la graisse du bras et facilite le retrait de la peau. Elle peut augmenter les ecchymoses, l'œdème et le risque de sérome. Le chirurgien décide de son étendue selon l'épaisseur de graisse et la qualité de la peau.",
        },
        {
          question: "Peut-on faire les bras en même temps que d'autres zones ?",
          answer:
            "C'est parfois possible, mais l'allongement de la durée opératoire augmente les risques, notamment de thrombose et de saignement. Après une forte perte de poids, le remodelage est souvent réparti en plusieurs interventions espacées de quelques mois.",
        },
        {
          question: "Quand pourrai-je lever les bras et porter des charges ?",
          answer:
            "On évite en général de lever les bras au-dessus des épaules et de porter des charges pendant 3 à 4 semaines, pour ne pas mettre la cicatrice en tension. Le sport sollicitant les bras reprend vers 6 semaines, avec l'accord du chirurgien.",
        },
        {
          question: "Est-ce remboursé par l'Assurance maladie ?",
          answer:
            "Pas lorsqu'il s'agit d'une demande purement esthétique. Après une perte de poids massive, une prise en charge peut être envisagée dans certaines situations, après une demande d'accord préalable examinée par le médecin-conseil. Des dépassements d'honoraires restent possibles.",
        },
        {
          question: "Quel est le délai entre la consultation et l'intervention ?",
          answer:
            "En France, pour une intervention à visée esthétique, la loi impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention. Aucun paiement autre que la consultation ne peut être exigé avant. Une consultation d'anesthésie est obligatoire.",
        },
        {
          question: "Quel chirurgien consulter ?",
          answer:
            "Un chirurgien qualifié en chirurgie plastique, reconstructrice et esthétique, opérant dans un établissement autorisé par l'ARS. Après chirurgie bariatrique, un chirurgien habitué au remodelage après amaigrissement et en lien avec l'équipe qui vous suit est préférable. Sa qualification est vérifiable sur l'Annuaire santé.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risques ──
      {
        interventionId: "arm-lift",
        kind: "risks",
        locale: "fr",
        title: "Lifting des bras : les risques",
        summary:
          "Cicatrice élargie, désunion, sérome, lésion nerveuse, lymphœdème, thrombose : les risques de la brachioplastie et les signes qui doivent faire appeler.",
        answer:
          "Le principal inconvénient de la brachioplastie est sa cicatrice, longue et souvent élargie ou épaissie. Ecchymoses, gonflement et engourdissement sont attendus ; désunion, sérome ou hématome sont moins fréquents, surtout après une forte perte de poids. Une lésion nerveuse durable, un lymphœdème ou une thrombose sont rares mais possibles.",
        sections: [
          {
            heading: "Les suites fréquentes et attendues",
            paragraphs: ["Ces manifestations sont des suites normales et diminuent progressivement en quelques semaines."],
            bullets: [
              "Ecchymoses du bras, qui peuvent descendre vers le coude et l'avant-bras.",
              "Gonflement du bras, parfois de la main, qui peut persister quelques mois.",
              "Sensation de tiraillement à la face interne, surtout en levant le bras.",
              "Engourdissement de la peau autour de la cicatrice, le plus souvent transitoire.",
              "Cicatrice rouge, ferme et parfois prurigineuse pendant plusieurs mois.",
            ],
          },
          {
            heading: "La cicatrice, un risque à part entière",
            paragraphs: [
              "La face interne du bras est une zone mobile, soumise à la tension et aux frottements. Les cicatrices y deviennent assez souvent larges, épaisses ou colorées, et elles peuvent glisser vers une position plus visible que celle prévue. Une chéloïde, cicatrice qui déborde et continue de grossir, est plus rare.",
              "Les plaques ou gels de silicone, la protection solaire et, dans certains cas, des injections de corticoïdes peuvent améliorer l'aspect. Une reprise chirurgicale de la cicatrice se discute après maturation, au moins un an plus tard, sans certitude d'amélioration.",
            ],
          },
          {
            heading: "Les complications moins fréquentes",
            paragraphs: [
              "Leur fréquence dépend de l'étendue de la résection, de l'association à une liposuccion, de la qualité de la peau et de votre état de santé.",
            ],
            bullets: [
              "Désunion partielle de la cicatrice, souvent près de l'aisselle ou du coude.",
              "Sérome (accumulation de liquide) ou hématome, nécessitant parfois des ponctions ou une reprise.",
              "Infection, le plus souvent traitée par antibiotiques.",
              "Asymétrie, excès de peau résiduel, petites « oreilles » aux extrémités de la cicatrice.",
              "Bride de l'aisselle limitant l'élévation du bras.",
              "Souffrance de la peau des berges (nécrose), favorisée par le tabac.",
            ],
          },
          {
            heading: "Les complications rares mais graves",
            paragraphs: [
              "Un nerf sensitif de la face interne du bras peut être lésé, laissant une insensibilité ou des douleurs durables de l'avant-bras. Un lymphœdème, gonflement chronique de l'avant-bras ou de la main, est rare mais difficile à traiter. Une thrombose veineuse profonde, qui peut se compliquer d'embolie pulmonaire, est rare ; son risque augmente quand les bras sont opérés en même temps que d'autres zones.",
            ],
          },
          {
            heading: "Quand appeler sans attendre",
            paragraphs: [
              "Contactez rapidement le chirurgien ou l'équipe qui vous a opéré en cas de signe inhabituel. En cas d'essoufflement, de douleur dans la poitrine ou de malaise, appelez le 15 (SAMU) ou le 112.",
            ],
            bullets: [
              "Essoufflement, douleur thoracique, toux avec crachats sanglants, palpitations.",
              "Bras qui gonfle rapidement, devient tendu, très douloureux ou violacé.",
              "Main froide, pâle, engourdie ou qui ne bouge plus normalement.",
              "Fièvre, rougeur qui s'étend, écoulement purulent ou malodorant.",
              "Cicatrice qui s'ouvre largement ou peau des berges qui noircit.",
              "Mollet douloureux, chaud ou gonflé d'un seul côté.",
            ],
          },
          {
            heading: "Les facteurs qui augmentent les risques",
            paragraphs: ["Certains sont modifiables et doivent être discutés en consultation."],
            bullets: [
              "Tabac et nicotine, y compris substituts selon l'avis du chirurgien.",
              "Carences nutritionnelles après chirurgie bariatrique, anémie.",
              "Indice de masse corporelle encore élevé, diabète.",
              "Association à une liposuccion importante ou à d'autres interventions dans la même séance.",
              "Antécédents de chirurgie ou de radiothérapie de l'aisselle.",
              "Médicaments qui favorisent le saignement (aspirine, anti-inflammatoires, anticoagulants, certains compléments).",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFAR, HAS_BARIATRIQUE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Prix ──
      {
        interventionId: "arm-lift",
        kind: "cost",
        locale: "fr",
        title: "Prix d'un lifting des bras",
        summary:
          "Ce que contient un devis de brachioplastie, ce qui fait varier le prix, prise en charge possible après perte de poids massive et coût des retouches.",
        answer:
          "Le coût d'une brachioplastie dépend surtout de l'étendue de la résection, d'une liposuccion associée, de l'anesthésie et de la durée d'hospitalisation. Nous n'indiquons pas de fourchette de prix : seul un devis détaillé, remis après consultation, renseigne sur le montant. Après une perte de poids massive, une prise en charge partielle peut parfois être demandée.",
        sections: [
          {
            heading: "Ce que contient un devis",
            paragraphs: [
              "En France, un devis détaillé et daté doit être remis avant toute intervention de chirurgie esthétique. Vérifiez qu'il précise les postes suivants, ou ceux qui n'y figurent pas.",
            ],
            bullets: [
              "Honoraires du chirurgien, avec la technique prévue (classique, courte, avec ou sans liposuccion).",
              "Honoraires de l'anesthésiste, parfois facturés séparément.",
              "Frais de l'établissement : bloc opératoire, ambulatoire ou nuit d'hospitalisation.",
              "Manchons de compression, pansements, médicaments, plaques de silicone éventuelles.",
              "Examens préopératoires, bilan nutritionnel si nécessaire.",
              "Consultations de suivi et conditions prévues en cas de retouche ou de complication.",
            ],
          },
          {
            heading: "Ce qui fait varier le prix",
            paragraphs: [
              "L'importance de l'excès de peau, l'extension de la cicatrice vers le thorax, l'association à une liposuccion, la durée opératoire, le type d'anesthésie et la nécessité d'une hospitalisation pèsent sur le devis. Une brachioplastie réalisée en même temps qu'une autre intervention modifie le coût global, mais aussi les risques.",
              "Le prix ne renseigne pas à lui seul sur la qualité ni sur l'expérience du chirurgien en remodelage après amaigrissement.",
            ],
          },
          {
            heading: "Les règles applicables en France",
            paragraphs: [
              "Pour une intervention à visée esthétique, le Code de la santé publique (article L6322-2) impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention. Aucune somme autre que les honoraires de consultation ne peut être exigée avant la fin de ce délai.",
              "Les actes à visée purement esthétique sont soumis à la TVA. L'intervention doit avoir lieu dans un établissement autorisé par l'ARS, avec une consultation d'anesthésie préalable.",
            ],
          },
          {
            heading: "Quand l'Assurance maladie peut intervenir",
            paragraphs: [
              "Une brachioplastie demandée pour une raison esthétique n'est pas prise en charge. Après une perte de poids massive, notamment après chirurgie bariatrique, une prise en charge peut être envisagée lorsque l'excès de peau entraîne une gêne fonctionnelle (irritations, infections cutanées, limitation dans la vie quotidienne). Elle suppose une demande d'accord préalable, appréciée au cas par cas par le médecin-conseil.",
              "Même en cas d'accord, des dépassements d'honoraires et certains frais (chambre particulière, liposuccion à visée esthétique) peuvent rester à votre charge selon le secteur du chirurgien et votre complémentaire santé. Demandez un devis qui distingue clairement ce qui est remboursable.",
            ],
          },
          {
            heading: "Le coût des complications et des retouches",
            paragraphs: [
              "Une ponction de sérome, des soins infirmiers prolongés pour une désunion, une reprise de cicatrice ou d'un excès résiduel peuvent entraîner des frais, un arrêt de travail plus long ou des déplacements. Renseignez-vous sur ce qui serait facturé et sur l'existence d'une assurance couvrant les complications.",
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
        interventionId: "arm-lift",
        kind: "recovery",
        locale: "fr",
        title: "Convalescence après un lifting des bras",
        summary:
          "Après une brachioplastie : premiers jours, manchons de compression, bras à ménager, reprise du travail et du sport, soins de cicatrice et signes d'alerte.",
        answer:
          "Les premières semaines, il faut ménager la cicatrice : bras surélevés au repos, manchons de compression portés 3 à 6 semaines, pas de bras au-dessus des épaules ni de charges pendant 3 à 4 semaines. Une activité de bureau reprend souvent entre 1 et 3 semaines, le sport vers 6 semaines. La cicatrice mûrit en 12 à 18 mois. Les consignes de votre chirurgien priment sur ces repères.",
        sections: [
          {
            heading: "Les premiers jours",
            paragraphs: [
              "La sortie a lieu le jour même ou le lendemain. Les bras sont gonflés et tiraillent à la face interne. Si des drains ont été posés, ils sont retirés en général après 24 à 48 heures.",
            ],
            bullets: [
              "Garder les bras surélevés sur des coussins au repos pour limiter le gonflement.",
              "Se lever et marcher dès que possible pour prévenir la thrombose.",
              "Prendre les antalgiques prescrits et bien s'hydrater.",
              "Prévoir de l'aide à domicile : s'habiller, se laver les cheveux ou porter un enfant sont difficiles les premiers jours.",
              "Choisir des vêtements amples, faciles à enfiler, sans lever les bras.",
            ],
          },
          {
            heading: "Semaine par semaine",
            paragraphs: [],
            bullets: [
              "Semaine 1 : gonflement et ecchymoses ; pansements, douche selon les consignes ; pas de bras au-dessus des épaules.",
              "Semaine 2 : retrait des fils non résorbables le cas échéant ; reprise d'une activité de bureau possible pour certains.",
              "Semaines 3 à 4 : élévation progressive des bras ; conduite lorsque les mouvements ne sont plus gênés et sans antalgiques sédatifs.",
              "Semaines 4 à 6 : arrêt progressif des manchons selon l'avis du chirurgien ; travail physique à discuter.",
              "À partir de 6 semaines : sport, natation et exercices de renforcement des bras, avec l'accord du chirurgien.",
            ],
          },
          {
            heading: "Les manchons de compression",
            paragraphs: [
              "Des manchons ou bandages élastiques sont en général portés jour et nuit pendant 3 à 6 semaines. Ils limitent l'œdème et soutiennent la peau. Ils doivent être ajustés sans serrer : une main froide, des fourmillements, une douleur ou des marques profondes doivent être signalés sans tarder.",
            ],
          },
          {
            heading: "Prendre soin de la cicatrice",
            paragraphs: [
              "La cicatrice reste rouge et ferme pendant plusieurs mois, parfois avec des démangeaisons. Évitez toute exposition au soleil pendant au moins un an, ou protégez-la par un vêtement et un écran solaire. Des massages et des plaques ou gels de silicone peuvent être conseillés après la cicatrisation complète.",
              "Le résultat définitif, silhouette et cicatrice, s'apprécie entre 12 et 18 mois. Une retouche ne se discute pas avant ce délai, sauf complication.",
            ],
          },
          {
            heading: "Signes qui doivent faire appeler",
            paragraphs: [
              "Contactez le chirurgien en cas de fièvre, de rougeur qui s'étend, de bras qui gonfle rapidement, de cicatrice qui s'ouvre ou de main froide et engourdie. En cas d'essoufflement ou de douleur thoracique, appelez le 15 ou le 112.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Avant de se décider ──
      {
        interventionId: "arm-lift",
        kind: "decision",
        locale: "fr",
        title: "Lifting des bras : avant de se décider",
        summary:
          "Brachioplastie : poids stable, accepter la cicatrice, après chirurgie bariatrique, dysmorphophobie, questions au chirurgien et délai légal de 15 jours.",
        answer:
          "La brachioplastie s'envisage chez un adulte au poids stable, gêné par un excès de peau des bras, qui accepte d'échanger ce relâchement contre une cicatrice longue. Après chirurgie bariatrique, on attend en général 12 à 18 mois et un bilan nutritionnel. En France, 15 jours au moins doivent séparer la remise du devis de l'intervention esthétique.",
        sections: [
          {
            heading: "Est-ce le bon moment ?",
            paragraphs: [
              "Votre poids devrait être stable depuis au moins 12 mois, à un niveau que vous pouvez maintenir. Une perte de poids en cours rend le résultat imprévisible et peut recréer un relâchement. Après chirurgie bariatrique, l'équipe qui vous suit peut vous aider à juger ce moment et à corriger d'éventuelles carences.",
              "Évitez de décider dans une période de bouleversement ou juste avant un événement important. Prévoyez plusieurs semaines pendant lesquelles vous aurez besoin d'aide au quotidien. La chirurgie esthétique est réservée aux adultes.",
            ],
          },
          {
            heading: "Accepter l'échange peau contre cicatrice",
            paragraphs: [
              "La brachioplastie remplace un excès de peau par une cicatrice, qui sera visible bras levés, en débardeur ou en maillot. Demandez à voir des photos de cicatrices à différents stades, y compris des cicatrices élargies, et à ce que le chirurgien dessine sur vous le trajet prévu.",
              "Selon votre cas, une brachioplastie courte, une liposuccion seule ou l'absence d'intervention peuvent être discutées. Le chirurgien doit vous dire honnêtement ce qui peut et ne peut pas changer.",
            ],
          },
          {
            heading: "Votre motivation et la dysmorphophobie",
            paragraphs: [
              "Demandez-vous ce qui vous gêne précisément, depuis combien de temps, et ce que vous attendez de l'intervention. Après une forte perte de poids, l'image du corps met parfois du temps à se réajuster : un accompagnement psychologique peut être utile, avec ou sans chirurgie.",
              "Certaines personnes souffrent d'une préoccupation envahissante pour un défaut que les autres remarquent à peine : c'est le trouble dysmorphique corporel, ou dysmorphophobie. La chirurgie ne le soulage pas et peut aggraver la détresse. Si vous vous reconnaissez dans cette description, parlez-en à votre médecin traitant ; des traitements efficaces existent. En cas d'idées suicidaires, le 3114 répond jour et nuit.",
            ],
          },
          {
            heading: "Questions à poser en consultation",
            paragraphs: [],
            bullets: [
              "Êtes-vous qualifié en chirurgie plastique, reconstructrice et esthétique, et pratiquez-vous souvent le remodelage après amaigrissement ?",
              "Quelle technique proposez-vous (classique, courte, extension au thorax) et où passera exactement la cicatrice ?",
              "Une liposuccion associée est-elle utile dans mon cas, et quels risques ajoute-t-elle ?",
              "Quels sont mes facteurs de risque (tabac, carences, poids) et comment les réduire ?",
              "Quelle anesthésie, dans quel établissement, avec ou sans drains, et combien de temps d'hospitalisation ?",
              "Comment prévenez-vous la thrombose, et qui joindre la nuit ou le week-end en cas de problème ?",
              "Que comprend le devis, une prise en charge est-elle envisageable, et que se passe-t-il en cas de retouche ?",
            ],
          },
          {
            heading: "Le délai de réflexion et le second avis",
            paragraphs: [
              "Pour une intervention à visée esthétique, le Code de la santé publique impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention, et aucun paiement autre que la consultation ne peut être exigé avant. Ce délai est un minimum : rien ne vous oblige à décider à son terme. Demander un second avis est toujours légitime.",
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
        interventionId: "arm-lift",
        kind: "alternatives",
        locale: "fr",
        title: "Alternatives au lifting des bras",
        summary:
          "Renforcement musculaire, liposuccion seule, brachioplastie courte, raffermissement non chirurgical ou ne rien faire : alternatives et limites.",
        answer:
          "Selon la quantité de peau et de graisse, les alternatives sont le renforcement musculaire, la liposuccion seule si la peau est élastique, la brachioplastie courte pour un petit excès près de l'aisselle, des techniques non chirurgicales pour un relâchement léger, ou ne rien faire. Aucune ne retire un excès de peau important.",
        sections: [
          {
            heading: "Activité physique et stabilité du poids",
            paragraphs: [
              "Le renforcement des muscles du bras améliore la tonicité et la silhouette, et la stabilité du poids évite d'aggraver le relâchement. Ces mesures ne font pas disparaître une peau distendue après une forte perte de poids.",
            ],
          },
          {
            heading: "Liposuccion seule",
            paragraphs: [
              "Lorsque le bras est surtout chargé en graisse et que la peau est encore élastique, une liposuccion peut affiner le bras avec de petites cicatrices. Si la peau est relâchée, elle risque au contraire de paraître plus flasque après l'aspiration.",
            ],
          },
          {
            heading: "Brachioplastie courte",
            paragraphs: [
              "Pour un excès de peau modéré limité au tiers supérieur du bras, une résection avec une cicatrice dans le creux de l'aisselle peut suffire. Elle ne corrige pas un relâchement qui s'étend jusqu'au coude et expose aussi à des risques (bride de l'aisselle, sérome, cicatrice visible).",
            ],
          },
          {
            heading: "Techniques non chirurgicales",
            paragraphs: [
              "La radiofréquence, les ultrasons focalisés ou certains lasers chauffent la peau pour la raffermir. L'effet est modeste, progressif, limité aux relâchements légers, et nécessite parfois plusieurs séances. Ces techniques ont leurs propres risques (brûlures, douleurs, irrégularités) et doivent être réalisées sous responsabilité médicale.",
            ],
          },
          {
            heading: "Ne rien faire",
            paragraphs: [
              "Choisir de ne pas intervenir est une option légitime. Des vêtements adaptés peuvent limiter les frottements. La réflexion peut être reprise plus tard, sans conséquence médicale, tant que la peau ne provoque pas d'irritations répétées.",
            ],
          },
        ],
        sources: [HAS, ANSM, SOFCPRE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "brachioplasty",
        locale: "fr",
        slug: "brachioplastie",
        term: "Brachioplastie",
        aliases: ["brachioplasties", "lifting des bras", "lifting du bras", "plastie brachiale", "lipobrachioplastie"],
        definition:
          "La brachioplastie est une intervention qui retire l'excès de peau et de graisse de la face interne du bras. Elle laisse une cicatrice qui va le plus souvent de l'aisselle au coude.",
        detail: [
          "Elle est surtout pratiquée après une perte de poids importante, notamment après chirurgie de l'obésité, quand la peau ne se rétracte plus. Une liposuccion lui est souvent associée.",
          "La version courte laisse une cicatrice limitée au creux de l'aisselle mais ne convient qu'aux petits excès. La cicatrice classique peut au contraire se prolonger sur le côté du thorax.",
          "Ses principaux risques sont une cicatrice élargie ou épaissie, une désunion, un sérome et, plus rarement, une lésion d'un nerf sensitif de l'avant-bras ou un lymphœdème.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "skin-laxity",
        locale: "fr",
        slug: "relachement-cutane",
        term: "Relâchement cutané",
        aliases: ["relachement cutane", "laxité cutanée", "laxite cutanee", "excès de peau", "exces de peau", "peau relâchée", "ptose cutanée"],
        definition:
          "Le relâchement cutané est la perte de fermeté et d'élasticité de la peau, qui se distend et pend. Il résulte du vieillissement, de variations de poids, de la grossesse ou d'une perte de poids importante.",
        detail: [
          "Une peau étirée longtemps perd une partie de ses fibres élastiques et de son collagène : elle ne se rétracte plus complètement, même après un amaigrissement. C'est fréquent après chirurgie bariatrique, aux bras, au ventre, aux cuisses ou aux seins.",
          "Le degré de relâchement oriente le choix du traitement : une liposuccion ne retend pas la peau et peut aggraver un relâchement ; un excès important relève d'une chirurgie qui retire la peau (brachioplastie, abdominoplastie, lifting des cuisses), au prix de cicatrices.",
          "Les techniques non chirurgicales de raffermissement n'ont qu'un effet modeste, limité aux relâchements légers.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },

  // ════════════════════════════════════ UNITED KINGDOM ════════════════════════════════════
  "en-gb": {
    intervention: {
      id: "arm-lift",
      locale: "en-gb",
      slug: "arm-lift",
      category: "body",
      title: "Arm lift (brachioplasty)",
      summary:
        "An arm lift removes loose skin from the upper arms, often after major weight loss, leaving a long scar: techniques, risks and recovery explained.",
      description: [
        "An arm lift, or brachioplasty, removes excess skin and fat from the inner side of the upper arm, between the armpit and the elbow, and tightens the remaining skin. It is used for loose, hanging skin that is most noticeable when the arm is raised, sometimes called \"bingo wings\".",
        "The most common reason is major weight loss, after weight-loss (bariatric) surgery or significant dieting: skin that has been stretched for years no longer shrinks back. Ageing, genetics and repeated weight changes can also cause milder laxity.",
        "The trade-off is a long scar. In the standard technique it runs along the inner arm from the armpit to the elbow, and may extend down the side of the chest when the loose skin continues onto the trunk. Surgeons usually place it in the groove on the inner arm, or slightly towards the back, so that it is less visible with the arm by your side. It is visible when the arm is raised or seen from the front, and it tends to widen or thicken.",
        "When the excess skin is small and close to the armpit, a short-scar (mini) arm lift with the scar hidden in the armpit may be enough. It does not treat laxity that extends to the elbow. Liposuction alone only suits an arm with excess fat and good-quality skin, because it does not remove skin.",
        "Liposuction is often combined with an arm lift in the same operation, to reduce fat and make it easier to remove the skin. The result is judged on the shape of the arm and on the scar, which takes 12 to 18 months to mature. It lasts as long as your weight stays stable, although the skin continues to age.",
      ],
      indications: [
        "Excess skin on the inner upper arm that bothers you cosmetically or practically (chafing, rashes, difficulty with clothing).",
        "Loose skin after major weight loss, particularly after bariatric surgery, with weight usually stable for at least 12 months.",
        "Moderate laxity related to age or weight changes, in someone who accepts the scar.",
        "Understanding and acceptance, after explanation, of a long scar visible with the arms raised.",
        "A specific, long-standing concern that is your own decision.",
        "Part of a staged body-contouring plan after weight loss (tummy tuck, thigh lift, breast lift), agreed with your surgeon.",
      ],
      contraindications: [
        "Weight that is not yet stable, or further weight loss planned.",
        "Being unwilling to accept the scar, which cannot be avoided with the standard technique.",
        "Uncorrected nutritional deficiencies after bariatric surgery (protein, iron, vitamins), which impair healing.",
        "Smoking or nicotine use, which considerably increase the risk of wound breakdown and skin loss: stopping is advised.",
        "A history of arm lymphoedema, armpit lymph node surgery or circulation problems in the arm, which need specific assessment.",
        "Heart or lung disease, diabetes or other long-term conditions that are not well controlled, or a bleeding disorder.",
        "Unrealistic expectations, pressure from someone else or excessive concern about a minor feature.",
        "Pregnancy or breastfeeding.",
      ],
      risks: [
        {
          name: "Bruising, swelling and discomfort",
          detail:
            "Common and expected: bruising, swelling of the arm and sometimes the forearm and hand, and a tight, pulling feeling for several weeks. Swelling can last a few months.",
        },
        {
          name: "Wide, raised or visible scars",
          detail:
            "Scars on the inner arm often widen, thicken (hypertrophic scarring), stay red for a long time or change colour. Keloid scars are less common. A scar can also move to a more visible position than planned. Silicone treatment, steroid injections or scar revision are sometimes offered.",
        },
        {
          name: "Delayed healing and wound breakdown",
          detail:
            "Part of the wound may open, often near the armpit or elbow where tension is greatest. It usually heals with dressings over a few weeks but leaves a wider scar. Smoking, diabetes and nutritional deficiencies increase the risk.",
        },
        {
          name: "Seroma and haematoma",
          detail:
            "Collections of fluid or blood under the skin, more likely with combined liposuction or after major weight loss. They may need draining with a needle and occasionally a return to theatre.",
        },
        {
          name: "Numbness and nerve injury",
          detail:
            "Numbness around the scar is common and usually temporary. A small sensory nerve running along the inner arm can be injured, leaving an area of numbness or pain in the forearm that may be long-lasting.",
        },
        {
          name: "Lymphoedema",
          detail:
            "Rare: persistent swelling of the forearm or hand because lymph drainage is disrupted, more of a concern with extensive surgery near the armpit or previous surgery in that area.",
        },
        {
          name: "Asymmetry, residual skin and contour irregularities",
          detail:
            "Small differences between the arms, remaining loose skin near the elbow, puckers at the ends of the scar (dog ears) or later loosening. A revision can be discussed once healing has settled, usually after 6 to 12 months.",
        },
        {
          name: "Infection and skin necrosis",
          detail:
            "Infection is uncommon and usually treated with antibiotics. Loss of skin at the wound edges (necrosis) is rare, more likely in smokers or under high tension, and may need prolonged wound care.",
        },
        {
          name: "Tight scar across the armpit",
          detail:
            "A scar crossing the armpit can contract into a tight band that limits raising the arm, and may need surgical correction.",
        },
        {
          name: "Deep vein thrombosis and pulmonary embolism",
          detail:
            "Rare but serious. The risk rises with longer operations, combined procedures and personal risk factors. It is reduced by moving early and, depending on your risk, compression stockings and blood-thinning injections.",
        },
        {
          name: "Anaesthetic risks",
          detail: "Discussed with the anaesthetist at your pre-operative assessment.",
        },
      ],
      procedure: {
        anaesthesia: "Usually general anaesthesia; local anaesthesia with sedation may be considered for a short-scar arm lift.",
        duration: "Around 1.5 to 3 hours, depending on how much skin is removed and whether liposuction is added.",
        hospitalStay:
          "Day case or one night in hospital, longer if combined with other procedures. Drains are sometimes left for 24 to 48 hours.",
      },
      recovery: [
        "Day 1: arms raised on pillows, a pulling feeling on the inner arm; you are encouraged to get up and walk the same evening or next day.",
        "Compression sleeves or bandages are usually worn day and night for 3 to 6 weeks, as your surgeon advises.",
        "Week 1: swelling and bruising, simple painkillers and dressings; avoid raising your arms above shoulder height or lifting.",
        "Week 2: non-dissolvable stitches removed if used; return to desk-based work often between 1 and 3 weeks.",
        "Weeks 3 to 4: gradually raise your arms further; still no heavy lifting or repeated wide movements.",
        "Week 6: return to exercise, especially arm workouts, once your surgeon agrees.",
        "The scar stays red and firm for several months: protect it from the sun and use massage or silicone if advised.",
        "Final result judged at 12 to 18 months, once the scar has matured.",
      ],
      alternatives: [
        "Doing nothing: a legitimate choice, which you can revisit later.",
        "Arm-strengthening exercise and a stable weight: these improve tone but do not remove excess skin.",
        "Liposuction alone, if the arm mainly has excess fat with elastic skin.",
        "A short-scar arm lift (scar in the armpit) for excess limited to the upper third of the arm.",
        "Non-surgical skin tightening (radiofrequency, focused ultrasound): a modest effect on mild laxity, not suitable for significant excess, with risks such as burns.",
      ],
      faq: [
        {
          question: "How long will the scar be?",
          answer:
            "With the standard technique it runs from the armpit to the elbow on the inner arm, and may extend down the side of the chest after major weight loss. It is less visible with your arms by your side but shows when they are raised. A short-scar arm lift leaves a scar in the armpit only, but suits small amounts of excess skin.",
        },
        {
          question: "Will the scar fade?",
          answer:
            "It stays red and firm for several months, then usually becomes paler and softer over 12 to 18 months. On the arm, scars widen or thicken fairly often. The final appearance depends on your skin, the tension, smoking and scar care, and no surgeon can predict it with certainty.",
        },
        {
          question: "How long after weight-loss surgery can I have an arm lift?",
          answer:
            "Surgeons usually wait until your weight has been stable for at least 12 months, often 12 to 18 months after bariatric surgery. A nutritional check (protein, iron, vitamins) is sensible beforehand, because deficiencies slow healing.",
        },
        {
          question: "Can liposuction be combined with an arm lift?",
          answer:
            "Yes, this is common: liposuction reduces fat in the arm and makes it easier to remove the skin. It can increase bruising, swelling and the risk of seroma. Your surgeon decides how much is appropriate depending on the fat and the quality of your skin.",
        },
        {
          question: "Can my arms be done at the same time as other areas?",
          answer:
            "Sometimes, but longer operations carry higher risks, including blood clots and bleeding. After major weight loss, body contouring is often carried out in stages a few months apart.",
        },
        {
          question: "When can I raise my arms and lift things?",
          answer:
            "You are usually advised not to raise your arms above shoulder height or lift anything heavy for 3 to 4 weeks, to avoid putting tension on the scar. Arm exercise is usually resumed at around 6 weeks, once your surgeon agrees.",
        },
        {
          question: "Is an arm lift available on the NHS?",
          answer:
            "Rarely. The NHS does not fund arm lifts for cosmetic reasons, and most local policies list them as procedures of limited clinical value. After major weight loss with significant functional problems, an individual funding request may be considered according to local criteria. Your GP or bariatric team can advise.",
        },
        {
          question: "How long should I wait before deciding?",
          answer:
            "There is no legal waiting period in the UK, but GMC guidance recommends at least two weeks between your consultation and agreeing to surgery. Use this time to think, ask questions and seek a second opinion if you wish.",
        },
        {
          question: "Who should carry out my arm lift?",
          answer:
            "A surgeon on the GMC Specialist Register in plastic surgery, ideally experienced in body contouring after weight loss, working in a hospital or clinic registered with the Care Quality Commission in England (or the equivalent regulator in Scotland, Wales or Northern Ireland). You can check the register on the GMC website.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risks ──
      {
        interventionId: "arm-lift",
        kind: "risks",
        locale: "en-gb",
        title: "Arm lift risks",
        summary:
          "Wide scars, wound breakdown, seroma, nerve injury, lymphoedema and blood clots: arm lift risks and when to seek urgent help.",
        answer:
          "The main drawback of an arm lift is the scar, which is long and often widens or thickens. Bruising, swelling and numbness are expected; wound breakdown, seroma or haematoma are less common, especially after major weight loss. Long-lasting nerve injury, lymphoedema and blood clots are rare but possible.",
        sections: [
          {
            heading: "Common and expected effects",
            paragraphs: ["These are normal after an arm lift and settle gradually over weeks."],
            bullets: [
              "Bruising of the arm, which may spread towards the elbow and forearm.",
              "Swelling of the arm and sometimes the hand, which can last a few months.",
              "A pulling feeling on the inner arm, especially when raising it.",
              "Numbness of the skin around the scar, usually temporary.",
              "A red, firm and sometimes itchy scar for several months.",
            ],
          },
          {
            heading: "The scar: a risk in its own right",
            paragraphs: [
              "The inner arm moves a lot and is under tension and friction. Scars there often become wide, thick or discoloured, and can drift to a more visible position than intended. Keloid scars, which spread beyond the wound and keep growing, are less common.",
              "Silicone sheets or gels, sun protection and sometimes steroid injections can improve the appearance. Scar revision can be discussed once the scar has matured, at least a year later, but improvement is not certain.",
            ],
          },
          {
            heading: "Less common complications",
            paragraphs: [
              "How likely these are depends on how much skin is removed, whether liposuction is added, your skin quality and your general health.",
            ],
            bullets: [
              "Partial wound breakdown, often near the armpit or elbow.",
              "Seroma (fluid collection) or haematoma, sometimes needing drainage or further surgery.",
              "Infection, usually treated with antibiotics.",
              "Asymmetry, remaining loose skin or puckers (dog ears) at the ends of the scar.",
              "A tight band across the armpit that limits arm movement.",
              "Loss of skin at the wound edges (necrosis), more likely in smokers.",
            ],
          },
          {
            heading: "Rare but serious complications",
            paragraphs: [
              "A sensory nerve on the inner arm can be injured, leaving long-lasting numbness or pain in the forearm. Lymphoedema, chronic swelling of the forearm or hand, is rare but difficult to treat. Deep vein thrombosis, which can lead to a pulmonary embolism, is rare; the risk rises when the arms are operated on together with other areas.",
            ],
          },
          {
            heading: "When to seek help urgently",
            paragraphs: [
              "Contact your surgeon's team promptly if something does not feel right; if you cannot reach them, call NHS 111. Call 999 if you have chest pain, sudden breathlessness or collapse.",
            ],
            bullets: [
              "Breathlessness, chest pain, coughing up blood or a racing heartbeat.",
              "An arm that rapidly swells, becomes tense, very painful or purple.",
              "A hand that is cold, pale, numb or not moving normally.",
              "Fever, spreading redness or a pus-like or foul-smelling discharge.",
              "A wound that opens widely or skin at the edges turning dark.",
              "A painful, warm or swollen calf on one side.",
            ],
          },
          {
            heading: "What increases the risk",
            paragraphs: ["Some factors can be changed and should be discussed at your consultation."],
            bullets: [
              "Smoking and nicotine, including replacement products depending on your surgeon's advice.",
              "Nutritional deficiencies after bariatric surgery, or anaemia.",
              "A still-high body mass index, or diabetes.",
              "Extensive liposuction or other procedures in the same operation.",
              "Previous surgery or radiotherapy to the armpit.",
              "Medicines or supplements that increase bleeding, such as aspirin, anti-inflammatory painkillers or anticoagulants.",
            ],
          },
        ],
        sources: [NHS, BAAPS, BAPRAS, RCS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Cost ──
      {
        interventionId: "arm-lift",
        kind: "cost",
        locale: "en-gb",
        title: "Arm lift cost",
        summary:
          "What an arm lift quote should include, what affects the price, NHS funding after major weight loss and the cost of complications and revisions.",
        answer:
          "The cost of an arm lift depends mainly on how much skin is removed, whether liposuction is added, the anaesthetic and the length of stay. We do not give price ranges: only a written, itemised quote after a consultation with the operating surgeon tells you the actual cost. The NHS rarely funds arm lifts, and not for cosmetic reasons.",
        sections: [
          {
            heading: "What a quote should include",
            paragraphs: ["Ask for a written quote that lists every item, or states clearly what is excluded."],
            bullets: [
              "The surgeon's fee, with the planned technique (standard, short-scar, with or without liposuction).",
              "The anaesthetist's fee, which may be billed separately.",
              "Hospital or clinic fees: theatre time, day case or overnight stay.",
              "Compression sleeves, dressings, medicines and any silicone scar products.",
              "Pre-operative tests, including blood tests after bariatric surgery if needed.",
              "Follow-up appointments and what happens if a revision or complication arises.",
            ],
          },
          {
            heading: "What affects the price",
            paragraphs: [
              "The amount of loose skin, whether the scar extends onto the chest, added liposuction, the length of the operation, the type of anaesthesia and an overnight stay all affect the quote. Combining an arm lift with another procedure changes the total cost, and the risks.",
              "Price alone does not tell you about quality or about the surgeon's experience in body contouring after weight loss.",
            ],
          },
          {
            heading: "NHS funding",
            paragraphs: [
              "The NHS does not usually fund cosmetic surgery, and arm lifts are generally listed among procedures of limited clinical value. After major weight loss, an individual funding request (IFR) may be considered when loose skin causes significant functional problems, such as recurrent skin infections, according to local criteria. Your GP or bariatric team can advise, but approval is uncommon.",
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
              "Draining a seroma, prolonged wound care after breakdown, scar revision or removing residual skin can lead to further costs, more time off work and extra travel. Ask what the quote covers, and whether insurance for complications is included or available. If you have surgery abroad, follow-up care at home may be harder to arrange.",
            ],
          },
        ],
        sources: [NHS, GMC, CQC, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Recovery ──
      {
        interventionId: "arm-lift",
        kind: "recovery",
        locale: "en-gb",
        title: "Arm lift recovery",
        summary:
          "After an arm lift: the first days, compression sleeves, protecting your arms, returning to work and exercise, scar care and warning signs.",
        answer:
          "For the first few weeks the scar needs protecting: arms raised when resting, compression sleeves for 3 to 6 weeks, and no lifting or raising your arms above shoulder height for 3 to 4 weeks. Desk-based work often resumes between 1 and 3 weeks and exercise at around 6 weeks. The scar matures over 12 to 18 months. Your surgeon's instructions take priority.",
        sections: [
          {
            heading: "The first few days",
            paragraphs: [
              "You usually go home the same day or the next. Your arms will be swollen and feel tight on the inner side. Drains, if used, are usually removed after 24 to 48 hours.",
            ],
            bullets: [
              "Rest with your arms raised on pillows to reduce swelling.",
              "Get up and walk as soon as you can to reduce the risk of blood clots.",
              "Take the painkillers prescribed and drink plenty of fluids.",
              "Arrange help at home: dressing, washing your hair or lifting a child are difficult at first.",
              "Wear loose clothes that open at the front so you do not have to raise your arms.",
            ],
          },
          {
            heading: "Week by week",
            paragraphs: [],
            bullets: [
              "Week 1: swelling and bruising; dressings, showering as advised; no arms above shoulder height.",
              "Week 2: non-dissolvable stitches removed if used; some people return to desk-based work.",
              "Weeks 3 to 4: gradually raise your arms further; drive once you can move freely and are not taking sedating painkillers.",
              "Weeks 4 to 6: stop the sleeves gradually as your surgeon advises; discuss returning to physical work.",
              "From 6 weeks: exercise, swimming and arm strengthening, once your surgeon agrees.",
            ],
          },
          {
            heading: "Compression sleeves",
            paragraphs: [
              "Elastic sleeves or bandages are usually worn day and night for 3 to 6 weeks. They help control swelling and support the skin. They should fit snugly but not too tightly: report a cold hand, pins and needles, pain or deep marks without delay.",
            ],
          },
          {
            heading: "Caring for your scar",
            paragraphs: [
              "The scar stays red and firm for several months and can be itchy. Keep it out of the sun for at least a year, or cover it with clothing and sunscreen. Massage and silicone sheets or gel may be recommended once the wound has fully healed.",
              "The final result, both shape and scar, is judged at 12 to 18 months. Revision is not usually considered before then unless there is a complication.",
            ],
          },
          {
            heading: "Warning signs",
            paragraphs: [
              "Contact your surgeon's team if you have a fever, spreading redness, an arm that swells quickly, a wound that opens or a cold, numb hand; if you cannot reach them, call NHS 111. Call 999 for chest pain or sudden breathlessness.",
            ],
          },
        ],
        sources: [NHS, BAPRAS, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Decision ──
      {
        interventionId: "arm-lift",
        kind: "decision",
        locale: "en-gb",
        title: "Arm lift: before you decide",
        summary:
          "Arm lift: stable weight, accepting the scar, timing after bariatric surgery, body dysmorphic disorder, questions to ask and the two-week cooling-off.",
        answer:
          "An arm lift is for adults with a stable weight who are bothered by loose skin on the upper arms and accept exchanging it for a long scar. After bariatric surgery, surgeons usually wait 12 to 18 months and check your nutrition. In the UK, GMC guidance recommends at least two weeks to reflect before agreeing to surgery.",
        sections: [
          {
            heading: "Is it the right time?",
            paragraphs: [
              "Your weight should have been stable for at least 12 months, at a level you can maintain. Ongoing weight loss makes the result unpredictable and can cause new laxity. After bariatric surgery, your bariatric team can help you judge the timing and correct any deficiencies.",
              "Avoid deciding during a period of upheaval or just before a big event, and plan for several weeks when you will need help at home. Cosmetic surgery is for adults only.",
            ],
          },
          {
            heading: "Accepting the skin-for-scar trade-off",
            paragraphs: [
              "An arm lift replaces loose skin with a scar that will show with your arms raised, in sleeveless tops or swimwear. Ask to see photos of scars at different stages, including scars that have widened, and ask the surgeon to mark the planned scar on you.",
              "Depending on your situation, a short-scar arm lift, liposuction alone or no surgery may be worth discussing. Your surgeon should be honest about what can and cannot change.",
            ],
          },
          {
            heading: "Your motivation and body dysmorphic disorder",
            paragraphs: [
              "Ask yourself what exactly bothers you, for how long, and what you expect from surgery. After major weight loss, body image can take time to adjust, and psychological support can help whether or not you have surgery.",
              "Some people have an intense, distressing preoccupation with a feature others barely notice: this is body dysmorphic disorder (BDD). Surgery does not relieve it and can make the distress worse. If this sounds familiar, speak to your GP; effective treatments are available through the NHS. If you are struggling to cope, Samaritans can be reached any time on 116 123.",
            ],
          },
          {
            heading: "Questions to ask at your consultation",
            paragraphs: [],
            bullets: [
              "Are you on the GMC Specialist Register in plastic surgery, and how often do you perform body contouring after weight loss?",
              "Which technique do you suggest (standard, short-scar, extension to the chest) and exactly where will the scar be?",
              "Would liposuction help in my case, and what extra risks does it add?",
              "What are my personal risk factors (smoking, nutrition, weight) and how can I reduce them?",
              "What anaesthetic, which hospital, will I have drains, and how long will I stay?",
              "How do you reduce the risk of blood clots, and who do I contact at night or at weekends?",
              "What does the quote include, and what happens if I need a revision?",
            ],
          },
          {
            heading: "Cooling-off and second opinions",
            paragraphs: [
              "There is no legal waiting period in the UK, but GMC guidance recommends that you have at least two weeks between your consultation and agreeing to surgery, and that the consultation is with the doctor who will operate. Take as long as you need, and seek a second opinion if you wish.",
            ],
          },
        ],
        sources: [GMC, NICE, RCS, BAAPS, { label: "Samaritans", url: "https://www.samaritans.org" }],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Alternatives ──
      {
        interventionId: "arm-lift",
        kind: "alternatives",
        locale: "en-gb",
        title: "Alternatives to an arm lift",
        summary:
          "Arm exercise, liposuction alone, a short-scar arm lift, non-surgical skin tightening or doing nothing: alternatives to an arm lift and their limits.",
        answer:
          "Depending on the amount of skin and fat, alternatives include strengthening exercise, liposuction alone if the skin is elastic, a short-scar arm lift for a small excess near the armpit, non-surgical treatments for mild laxity, or doing nothing. None of them removes a large amount of loose skin.",
        sections: [
          {
            heading: "Exercise and a stable weight",
            paragraphs: [
              "Strengthening the arm muscles improves tone and shape, and a stable weight avoids making laxity worse. These measures do not remove skin that has been stretched by major weight loss.",
            ],
          },
          {
            heading: "Liposuction alone",
            paragraphs: [
              "When the arm mainly carries excess fat and the skin is still elastic, liposuction can slim the arm with small scars. If the skin is loose, it may look looser after the fat is removed.",
            ],
          },
          {
            heading: "Short-scar arm lift",
            paragraphs: [
              "For moderate excess limited to the upper third of the arm, removing skin through a scar in the armpit may be enough. It does not treat laxity extending to the elbow and has its own risks, including a tight armpit scar, seroma and visible scarring.",
            ],
          },
          {
            heading: "Non-surgical skin tightening",
            paragraphs: [
              "Radiofrequency, focused ultrasound and some lasers heat the skin to tighten it. The effect is modest and gradual, limited to mild laxity, and may need several sessions. These treatments carry their own risks, such as burns, pain and irregularities, and should be carried out under medical supervision.",
            ],
          },
          {
            heading: "Doing nothing",
            paragraphs: [
              "Choosing not to have treatment is a legitimate option. Suitable clothing can reduce chafing. You can revisit the decision later without any medical consequence, as long as the skin is not causing repeated rashes or infections.",
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
        id: "brachioplasty",
        locale: "en-gb",
        slug: "brachioplasty",
        term: "Brachioplasty",
        aliases: ["brachioplasties", "arm lift", "arm lifts", "upper arm lift", "mini arm lift", "short-scar arm lift"],
        definition:
          "A brachioplasty is an operation that removes excess skin and fat from the inner upper arm. It usually leaves a scar running from the armpit to the elbow.",
        detail: [
          "It is mostly performed after major weight loss, particularly after bariatric surgery, when the skin no longer shrinks back. Liposuction is often combined with it.",
          "A short-scar version leaves a scar only in the armpit but suits small amounts of excess skin. The standard scar may instead extend down the side of the chest.",
          "The main risks are a wide or raised scar, wound breakdown and seroma and, less often, injury to a sensory nerve of the forearm or lymphoedema.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "skin-laxity",
        locale: "en-gb",
        slug: "skin-laxity",
        term: "Skin laxity",
        aliases: ["loose skin", "excess skin", "lax skin", "sagging skin", "skin redundancy"],
        definition:
          "Skin laxity is a loss of firmness and elasticity, causing the skin to stretch and sag. It results from ageing, weight changes, pregnancy or major weight loss.",
        detail: [
          "Skin that has been stretched for a long time loses some of its elastic fibres and collagen and cannot fully shrink back, even after weight loss. This is common after bariatric surgery, on the arms, abdomen, thighs and breasts.",
          "The degree of laxity guides treatment: liposuction does not tighten skin and can make laxity look worse, while significant excess skin needs surgery that removes it (arm lift, tummy tuck, thigh lift), at the cost of scars.",
          "Non-surgical skin-tightening treatments have only a modest effect, limited to mild laxity.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },
};
