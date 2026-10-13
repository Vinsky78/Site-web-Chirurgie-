import type { Source } from "../types";
import type { Dossier } from "./types";

/** Lifting des seins (mastopexie) : fiche, sous-pages et lexique (fr, en-gb). Brouillon à relire par le comité médical. */

const REVIEW = { status: "draft" } as const;
const UPDATED_AT = "2026-10-13";

// ───────────── Sources France ─────────────
const FR_LEGIFRANCE: Source = {
  label: "Code de la santé publique, article L6322-2 (devis et délai de réflexion en chirurgie esthétique) — Légifrance",
  url: "https://www.legifrance.gouv.fr",
};
const FR_HAS: Source = { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" };
const FR_HAS_DEPISTAGE: Source = {
  label: "Haute Autorité de santé (HAS) — dépistage du cancer du sein",
  url: "https://www.has-sante.fr",
};
const FR_ANSM: Source = {
  label: "ANSM — dossier implants mammaires (surveillance, information des patientes)",
  url: "https://ansm.sante.fr",
};
const FR_SOFCPRE: Source = {
  label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)",
  url: "https://www.sofcpre.fr",
};
const FR_AMELI: Source = {
  label: "Assurance maladie — ameli.fr (prise en charge, accord préalable, dépistage organisé du cancer du sein)",
  url: "https://www.ameli.fr",
};
const FR_ANNUAIRE: Source = {
  label: "Annuaire santé (vérification des professionnels inscrits au RPPS)",
  url: "https://annuaire.sante.fr",
};
const FR_SFAR: Source = { label: "Société française d'anesthésie et de réanimation (SFAR)", url: "https://sfar.org" };
const FR_3114: Source = { label: "3114 — numéro national de prévention du suicide", url: "https://3114.fr" };

// ───────────── Sources Royaume-Uni ─────────────
const UK_NHS: Source = { label: "NHS: cosmetic procedures, breast lift and breast screening", url: "https://www.nhs.uk" };
const UK_GMC: Source = {
  label: "General Medical Council: medical register and guidance for doctors who perform cosmetic interventions",
  url: "https://www.gmc-uk.org",
};
const UK_CQC: Source = { label: "Care Quality Commission: find a registered hospital or clinic", url: "https://www.cqc.org.uk" };
const UK_BAAPS: Source = { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" };
const UK_BAPRAS: Source = {
  label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)",
  url: "https://www.bapras.org.uk",
};
const UK_RCS: Source = {
  label: "Royal College of Surgeons of England: professional standards and certification in cosmetic surgery",
  url: "https://www.rcseng.ac.uk",
};
const UK_MHRA: Source = {
  label: "Medicines and Healthcare products Regulatory Agency (MHRA): breast implants and medical device reporting",
  url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
};
const UK_SAMARITANS: Source = { label: "Samaritans (116 123)", url: "https://www.samaritans.org" };

export const dossier: Dossier = {
  // ═════════════════════════════════════════ FRANCE ═════════════════════════════════════════
  fr: {
    intervention: {
      id: "breast-lift",
      locale: "fr",
      slug: "lifting-des-seins",
      category: "breast",
      title: "Lifting des seins (mastopexie)",
      summary:
        "La mastopexie remonte et remodèle des seins tombants (ptose). Techniques, cicatrices, association à un implant, risques et suites.",
      description: [
        "Le lifting des seins, ou mastopexie, est une intervention de chirurgie plastique qui corrige la ptose mammaire, c'est-à-dire la descente du sein et de l'aréole. Le chirurgien retire l'excédent de peau, remodèle la glande et remonte l'aréole et le mamelon à une hauteur plus haute sur le thorax. Le volume du sein est en principe conservé : la mastopexie ne réduit pas et n'augmente pas la poitrine de façon notable.",
        "La ptose est classée en degrés selon la position du mamelon par rapport au sillon sous le sein : légère (mamelon au niveau du sillon), modérée (mamelon sous le sillon) ou sévère (mamelon au point le plus bas du sein, orienté vers le bas). On parle de pseudoptose lorsque le mamelon reste au-dessus du sillon mais que la glande est descendue en dessous. Le degré de ptose, la qualité de la peau et le volume souhaité orientent le choix de la technique.",
        "Les cicatrices sont inévitables et dépendent de la quantité de peau à retirer : autour de l'aréole seule (péri-aréolaire) pour une ptose légère, autour de l'aréole et verticalement jusqu'au sillon (cicatrice verticale, dite « en sucette ») pour une ptose modérée, ou en T inversé (autour de l'aréole, verticale et dans le sillon sous le sein) pour une ptose importante. Elles sont rouges les premiers mois puis s'éclaircissent en 12 à 18 mois environ, de façon variable selon les personnes.",
        "Lorsque le sein a aussi perdu du volume, la mastopexie peut être associée à la pose d'un implant, dans le même temps opératoire ou en deux temps. Cette association cumule les risques des deux interventions et expose à un taux de retouche plus élevé ; elle implique aussi le suivi propre aux implants, détaillé dans notre fiche augmentation mammaire. À l'inverse, une poitrine volumineuse et tombante relève plutôt d'une réduction mammaire.",
        "La mastopexie ne rend pas sa fermeté à la peau et ne fait pas disparaître les vergetures. Elle ne remplit pas le haut du sein de façon durable sans implant ou lipofilling. Elle ne protège pas non plus contre l'évolution naturelle : le résultat se maintient plusieurs années, mais la pesanteur, le vieillissement de la peau, une grossesse ou une variation de poids entraînent souvent une récidive partielle de la ptose avec le temps.",
      ],
      indications: [
        "Seins tombants (ptose) jugés gênants par la personne elle-même, quel qu'en soit le degré.",
        "Descente et vidange des seins après grossesse, allaitement ou perte de poids importante.",
        "Aréoles placées bas, orientées vers le bas ou élargies par l'étirement de la peau.",
        "Asymétrie de hauteur ou de forme entre les deux seins.",
        "Symétrisation de l'autre sein après une reconstruction mammaire.",
      ],
      contraindications: [
        "Âge inférieur à 18 ans pour une indication esthétique.",
        "Grossesse ou allaitement en cours, ou dans les mois qui suivent leur fin.",
        "Tabagisme actif non interrompu : il augmente nettement le risque de nécrose de l'aréole et de défaut de cicatrisation.",
        "Lésion du sein non explorée ou bilan d'imagerie non réalisé alors qu'il est indiqué selon l'âge et les antécédents.",
        "Perte de poids en cours ou poids instable : mieux vaut attendre une stabilisation.",
        "Diabète, troubles de la coagulation ou maladies chroniques non équilibrés.",
        "Attentes irréalistes (absence de cicatrice, fermeté définitive) ou demande motivée par la pression d'un tiers.",
        "Préoccupation excessive pour un défaut minime ou à peine visible.",
      ],
      risks: [
        {
          name: "Douleurs, gonflement et ecchymoses",
          detail:
            "Suites attendues : tension et sensibilité des seins les premiers jours, œdème et bleus qui régressent en quelques semaines. La forme définitive n'apparaît qu'après plusieurs mois.",
        },
        {
          name: "Modification de la sensibilité de l'aréole et du mamelon",
          detail:
            "Diminution ou, plus rarement, augmentation de la sensibilité, fréquente au début. Elle s'améliore souvent en quelques mois, mais une perte de sensibilité peut persister durablement.",
        },
        {
          name: "Cicatrices visibles, élargies ou épaisses",
          detail:
            "Les cicatrices peuvent s'élargir, notamment autour de l'aréole, ou devenir épaisses et rouges (cicatrice hypertrophique, plus rarement chéloïde). Elles peuvent nécessiter des soins ou une retouche.",
        },
        {
          name: "Retard de cicatrisation",
          detail:
            "Petite ouverture de la cicatrice, le plus souvent à la jonction du T sous le sein, qui cicatrise en général avec des soins locaux en quelques semaines. Plus fréquent chez les fumeuses et en cas de surpoids ou de diabète.",
        },
        {
          name: "Hématome",
          detail:
            "Collection de sang, peu fréquente, survenant surtout dans les premières heures ou les premiers jours. Un hématome important impose une reprise au bloc opératoire.",
        },
        {
          name: "Infection",
          detail:
            "Peu fréquente ; se traduit par rougeur, chaleur, écoulement ou fièvre. Elle est traitée par antibiotiques et parfois par un drainage ; en cas d'implant associé, elle peut imposer son retrait.",
        },
        {
          name: "Asymétrie et irrégularités de forme",
          detail:
            "Une petite différence entre les deux seins est fréquente, d'autant qu'une asymétrie existait souvent avant. Une différence de hauteur ou de forme des aréoles, ou un excédent de peau au bout des cicatrices, peut justifier une retouche.",
        },
        {
          name: "Récidive de la ptose",
          detail:
            "Avec le temps, la peau continue de se relâcher : une redescente partielle du sein est habituelle au fil des années, plus rapide en cas de peau fine, de grossesse ou de variation de poids.",
        },
        {
          name: "Nécrose de l'aréole ou du mamelon",
          detail:
            "Complication rare mais grave : une partie ou la totalité de l'aréole perd son apport sanguin. Le risque augmente avec le tabac, les ptoses importantes, l'association à un implant et les antécédents de chirurgie du sein. Elle peut nécessiter des soins prolongés et une reconstruction.",
        },
        {
          name: "Nécrose de la graisse (cytostéatonécrose)",
          detail:
            "Zones de graisse qui meurent et forment des nodules fermes, parfois visibles sur les examens d'imagerie. Elles doivent être signalées lors des mammographies et peuvent nécessiter des examens complémentaires.",
        },
        {
          name: "Risques cumulés en cas d'implant associé",
          detail:
            "L'ajout d'un implant expose en plus à la coque, à la rupture, au déplacement de l'implant et, rarement, au LAGC-AIM, ainsi qu'à un taux de réintervention plus élevé que chacune des interventions seule.",
        },
        {
          name: "Thrombose veineuse et risques liés à l'anesthésie",
          detail:
            "Rares : phlébite ou embolie pulmonaire, prévenues par le lever précoce et parfois un traitement anticoagulant ; risques anesthésiques évalués lors de la consultation d'anesthésie obligatoire.",
        },
      ],
      procedure: {
        anaesthesia: "Anesthésie générale.",
        duration: "Environ 1 h 30 à 3 heures selon la technique, davantage si un implant est associé.",
        hospitalStay: "Ambulatoire ou une nuit d'hospitalisation.",
      },
      recovery: [
        "J0-J1 : retour à domicile le jour même ou le lendemain, avec un soutien-gorge de maintien ; des drains peuvent être laissés quelques heures ou jours.",
        "Semaine 1 : douleurs modérées soulagées par les antalgiques prescrits, bras le long du corps, pas de port de charges ; soins des cicatrices selon les consignes.",
        "Vers J8-J15 : premier contrôle, retrait éventuel des fils ; reprise d'un travail de bureau souvent possible après 1 à 2 semaines.",
        "Semaines 2 à 4 : reprise progressive de la conduite et des activités quotidiennes ; soutien-gorge de maintien jour et nuit pendant 4 à 6 semaines environ.",
        "Vers 6 semaines : reprise du sport, en commençant par les activités sans impact, selon l'avis du chirurgien.",
        "3 à 6 mois : le gonflement a disparu et le sein a pris sa forme, avec une légère redescente attendue après l'intervention.",
        "12 à 18 mois : cicatrices matures, à protéger du soleil pendant au moins un an ; le résultat est alors stabilisé.",
      ],
      alternatives: [
        "Ne rien faire : une option légitime ; la ptose n'est pas une maladie et la décision peut être réévaluée plus tard.",
        "Un soutien-gorge bien ajusté, qui modifie la silhouette sans aucun risque médical, de façon réversible.",
        "Une augmentation mammaire seule (implant ou lipofilling), qui peut suffire en cas de pseudoptose ou de ptose légère avec perte de volume ; elle a ses propres risques.",
        "Une réduction mammaire lorsque les seins sont à la fois volumineux et tombants.",
        "Les techniques non chirurgicales (fils tenseurs, radiofréquence) : effet limité et transitoire sur une ptose, peu de données, et des risques propres (infection, irrégularités).",
      ],
      faq: [
        {
          question: "Est-ce douloureux ?",
          answer:
            "Les douleurs sont en général modérées, à type de tension ou de courbatures, surtout les premiers jours. Elles sont soulagées par les antalgiques prescrits. Elles sont souvent plus marquées si un implant est associé.",
        },
        {
          question: "Quelles cicatrices vais-je avoir ?",
          answer:
            "Cela dépend du degré de ptose : autour de l'aréole seule, autour de l'aréole et verticale, ou en T inversé. Elles s'estompent avec le temps mais restent visibles de près. Demandez au chirurgien quel tracé il propose dans votre cas et pourquoi.",
        },
        {
          question: "Combien de temps dure le résultat ?",
          answer:
            "Le résultat se maintient plusieurs années, mais les seins continuent de vieillir. Une redescente partielle est habituelle avec le temps, plus rapide en cas de grossesse, de variation de poids ou de peau fine.",
        },
        {
          question: "Pourrai-je allaiter après une mastopexie ?",
          answer:
            "La glande et les canaux sont le plus souvent préservés, et l'allaitement reste possible dans beaucoup de cas, sans que ce soit certain. Une grossesse ultérieure peut aussi faire redescendre les seins : si un projet de grossesse est proche, il est souvent conseillé d'attendre.",
        },
        {
          question: "Faut-il faire une mammographie avant l'intervention ?",
          answer:
            "Un bilan d'imagerie du sein (mammographie, échographie) est souvent demandé avant l'intervention, selon l'âge, en général à partir de 35 à 40 ans, et selon les antécédents personnels et familiaux. Le dépistage organisé du cancer du sein reste à suivre après, entre 50 et 74 ans ; signalez l'intervention au radiologue.",
        },
        {
          question: "Faut-il arrêter de fumer ?",
          answer:
            "Oui. Le tabac augmente nettement le risque de nécrose de l'aréole et de problèmes de cicatrisation. Un arrêt complet plusieurs semaines avant et après l'intervention est demandé ; votre médecin peut vous aider à arrêter.",
        },
        {
          question: "Peut-on associer un implant ?",
          answer:
            "Oui, si le sein a perdu du volume. Les risques des deux interventions s'additionnent et le taux de retouche est plus élevé ; certains chirurgiens préfèrent opérer en deux temps. Consultez notre fiche augmentation mammaire pour les risques et le suivi propres aux implants.",
        },
        {
          question: "La mastopexie est-elle remboursée ?",
          answer:
            "Une mastopexie purement esthétique n'est pas prise en charge par l'Assurance maladie. Certaines situations, comme la symétrisation après une reconstruction pour cancer ou une asymétrie importante, peuvent l'être, sous conditions et après accord préalable.",
        },
        {
          question: "Quel est le délai de réflexion ?",
          answer:
            "En France, un délai minimal de 15 jours est imposé entre la remise du devis détaillé et l'intervention. Aucun paiement autre que les honoraires de consultation ne peut être exigé avant la fin de ce délai.",
        },
        {
          question: "Quel chirurgien consulter ?",
          answer:
            "Un chirurgien qualifié en chirurgie plastique, reconstructrice et esthétique. Vous pouvez vérifier sa qualification sur l'Annuaire santé ou auprès de l'Ordre des médecins, et vous assurer que l'établissement est autorisé par l'ARS.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ───────────── Risques ─────────────
      {
        interventionId: "breast-lift",
        kind: "risks",
        locale: "fr",
        title: "Lifting des seins : les risques",
        summary:
          "Cicatrices, sensibilité, asymétrie, nécrose de l'aréole, récidive, risques cumulés avec un implant : les risques de la mastopexie et les signes d'alerte.",
        answer:
          "Le lifting des seins laisse toujours des cicatrices et modifie souvent, au moins temporairement, la sensibilité de l'aréole. Les complications comme l'hématome, l'infection ou les retards de cicatrisation sont peu fréquentes ; la nécrose de l'aréole est rare mais grave, favorisée par le tabac. L'association à un implant cumule les risques des deux interventions.",
        sections: [
          {
            heading: "Les suites attendues",
            paragraphs: [],
            bullets: [
              "Douleurs modérées, tension et sensibilité des seins les premiers jours.",
              "Gonflement et ecchymoses qui régressent en quelques semaines ; seins plus hauts et plus fermes au début.",
              "Sensibilité de l'aréole et du mamelon diminuée, souvent transitoire.",
              "Cicatrices rouges et parfois épaisses les premiers mois, qui s'éclaircissent progressivement.",
            ],
          },
          {
            heading: "Les complications peu fréquentes",
            paragraphs: [],
            bullets: [
              "Hématome, surtout dans les premières heures ou les premiers jours ; il peut nécessiter une reprise au bloc.",
              "Infection, traitée par antibiotiques et parfois par drainage.",
              "Retard de cicatrisation, souvent à la jonction du T sous le sein, qui guérit en général avec des soins locaux.",
              "Cicatrices élargies, notamment autour de l'aréole, ou hypertrophiques.",
              "Asymétrie de forme, de volume ou de hauteur des aréoles, petits excédents de peau au bout des cicatrices : une retouche peut être proposée.",
              "Nodules liés à une nécrose de la graisse, à signaler lors des examens d'imagerie.",
            ],
          },
          {
            heading: "Les complications rares mais graves",
            paragraphs: [
              "La nécrose de l'aréole ou du mamelon survient lorsque l'apport sanguin est insuffisant. Elle est rare, mais son risque augmente nettement avec le tabac (y compris la nicotine des substituts selon certains chirurgiens), les ptoses importantes qui imposent de remonter l'aréole sur une grande distance, l'association à un implant et les antécédents de chirurgie ou de radiothérapie du sein. Elle peut être partielle ou totale et nécessiter des soins prolongés, puis une reconstruction de l'aréole.",
              "Comme toute chirurgie sous anesthésie générale, la mastopexie expose rarement à une thrombose veineuse (phlébite, embolie pulmonaire) et aux risques anesthésiques, évalués lors de la consultation d'anesthésie obligatoire.",
            ],
          },
          {
            heading: "Si un implant est associé",
            paragraphs: [
              "La mastopexie avec implant cumule les risques des deux gestes : à ceux du lifting s'ajoutent la coque périprothétique, la rupture ou le déplacement de l'implant, et rarement le lymphome associé aux implants (LAGC-AIM). Le taux de retouche est plus élevé que pour chaque intervention seule, et l'implant impose un suivi pendant toute sa durée de port. Notre fiche augmentation mammaire détaille ces risques.",
            ],
          },
          {
            heading: "Avec le temps : récidive et dépistage",
            paragraphs: [
              "Une redescente partielle du sein est habituelle au fil des années : elle fait partie de l'évolution normale et n'est pas une complication. Une grossesse ou une variation de poids l'accélère.",
              "La mastopexie ne gêne pas le dépistage du cancer du sein, mais les cicatrices internes peuvent laisser des images sur la mammographie. Signalez toujours l'intervention au radiologue et poursuivez le dépistage recommandé pour votre âge.",
            ],
          },
          {
            heading: "Quand appeler sans attendre",
            paragraphs: [
              "Contactez votre chirurgien rapidement en cas de sein qui gonfle brutalement d'un seul côté, de douleur qui augmente, de fièvre, de rougeur, d'écoulement ou d'ouverture de la cicatrice, ou si l'aréole devient sombre, violacée ou froide.",
              "Appelez le 15 ou le 112 en cas d'essoufflement brutal, de douleur thoracique, de crachats sanglants ou de malaise.",
            ],
          },
          {
            heading: "Ce qui augmente les risques",
            paragraphs: [],
            bullets: [
              "Tabac et nicotine, à arrêter plusieurs semaines avant et après l'intervention.",
              "Surpoids important, diabète ou maladies chroniques non équilibrés.",
              "Ptose sévère, seins très volumineux, association à un implant.",
              "Antécédents de chirurgie ou de radiothérapie du sein.",
              "Prise de médicaments ou de compléments qui favorisent les saignements, à signaler avant l'intervention.",
            ],
          },
        ],
        sources: [FR_HAS, FR_SOFCPRE, FR_ANSM, FR_SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ───────────── Coût ─────────────
      {
        interventionId: "breast-lift",
        kind: "cost",
        locale: "fr",
        title: "Prix d'un lifting des seins",
        summary:
          "Contenu d'un devis de mastopexie, ce qui fait varier le prix (technique, implant), cas de prise en charge, coût des retouches et des complications.",
        answer:
          "Le coût d'un lifting des seins dépend de la technique, de l'association éventuelle à un implant, du chirurgien, de l'anesthésie et de l'établissement. Nous n'indiquons pas de prix : seul un devis détaillé et daté permet de le connaître. Une mastopexie purement esthétique n'est pas remboursée par l'Assurance maladie.",
        sections: [
          {
            heading: "Ce que contient un devis",
            paragraphs: ["Un devis détaillé et daté est obligatoire. Vérifiez qu'il précise :"],
            bullets: [
              "Les honoraires du chirurgien et de l'anesthésiste.",
              "Les frais de l'établissement (bloc opératoire, séjour ambulatoire ou nuit).",
              "Le prix de l'implant s'il est associé, avec la marque, le modèle et le type de surface.",
              "Le soutien-gorge de maintien, les pansements et les médicaments.",
              "Les examens préalables éventuels (mammographie, échographie).",
              "Les consultations de suivi et les conditions en cas de retouche ou de complication.",
            ],
          },
          {
            heading: "Ce qui fait varier le prix",
            paragraphs: [],
            bullets: [
              "Le degré de ptose et la technique choisie (péri-aréolaire, verticale, en T inversé), qui influencent la durée de l'intervention.",
              "L'association à un implant ou à un lipofilling, qui allonge l'intervention et ajoute le coût de l'implant et de son suivi.",
              "La durée du séjour (ambulatoire ou nuit d'hospitalisation) et le type d'établissement.",
              "Le secteur et les dépassements d'honoraires du chirurgien et de l'anesthésiste.",
              "La région et l'organisation du suivi postopératoire.",
            ],
          },
          {
            heading: "Les règles applicables en France",
            paragraphs: [
              "L'article L6322-2 du Code de la santé publique impose un délai minimal de 15 jours entre la remise du devis et l'intervention. Aucune somme autre que les honoraires de consultation ne peut être exigée avant la fin de ce délai.",
              "Une intervention purement esthétique est soumise à la TVA et n'est pas prise en charge par l'Assurance maladie.",
            ],
          },
          {
            heading: "Quand l'Assurance maladie peut intervenir",
            paragraphs: [
              "La symétrisation de l'autre sein dans le cadre d'une reconstruction après cancer du sein est prise en charge. Certaines asymétries importantes ou malformations du sein peuvent aussi relever d'une prise en charge, après demande d'accord préalable et selon des critères précis évalués par le médecin-conseil.",
              "Même dans ces situations, des dépassements d'honoraires restent possibles selon le secteur du chirurgien et de l'anesthésiste. Votre complémentaire santé peut en couvrir une partie : renseignez-vous avant.",
            ],
          },
          {
            heading: "Retouches, complications et coût dans la durée",
            paragraphs: [
              "Une retouche (asymétrie, cicatrice, excédent de peau) est parfois nécessaire. Demandez avant l'intervention si elle serait facturée et dans quelles conditions. Les soins d'une complication et une éventuelle reprise peuvent entraîner des frais supplémentaires.",
              "Si un implant est associé, il faut anticiper le coût du suivi et des réinterventions futures, en règle générale à votre charge. Certains chirurgiens ou établissements proposent une assurance complications : lisez ce qu'elle couvre réellement (honoraires, anesthésie, séjour) et sa durée.",
            ],
          },
          {
            heading: "Points de vigilance",
            paragraphs: [
              "Un prix très bas doit inciter à vérifier ce qui est inclus, la qualification du chirurgien (Annuaire santé, Ordre des médecins), l'autorisation de l'établissement par l'ARS et l'organisation du suivi. Méfiez-vous de toute demande d'acompte avant la fin du délai légal et des propositions de crédit faites en consultation.",
            ],
          },
        ],
        sources: [FR_LEGIFRANCE, FR_AMELI, FR_ANNUAIRE, FR_SOFCPRE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ───────────── Convalescence ─────────────
      {
        interventionId: "breast-lift",
        kind: "recovery",
        locale: "fr",
        title: "Convalescence après un lifting des seins",
        summary:
          "Premiers jours, soutien-gorge, reprise du travail et du sport, soin des cicatrices et signes d'alerte après un lifting des seins (mastopexie).",
        answer:
          "Après une mastopexie, le retour à domicile se fait le jour même ou le lendemain. Un travail de bureau reprend souvent après 1 à 2 semaines et le sport vers 6 semaines. La forme se stabilise en 3 à 6 mois et les cicatrices mûrissent en 12 à 18 mois.",
        sections: [
          {
            heading: "Les premiers jours",
            paragraphs: [
              "Les douleurs sont en général modérées, à type de tension. Les seins sont gonflés, hauts et fermes. Des drains peuvent être laissés quelques heures ou quelques jours.",
            ],
            bullets: [
              "Porter le soutien-gorge de maintien jour et nuit, selon la durée indiquée (souvent 4 à 6 semaines).",
              "Garder les bras près du corps, ne pas porter de charges ni lever les bras au-dessus de la tête.",
              "Prendre les antalgiques prescrits ; éviter aspirine et anti-inflammatoires sans avis médical.",
              "Marcher tôt et souvent pour limiter le risque de phlébite.",
              "Respecter les consignes de douche et de pansements.",
            ],
          },
          {
            heading: "Les deux premières semaines",
            paragraphs: [
              "Un premier contrôle a lieu en général entre J8 et J15, avec retrait éventuel des fils. Un travail de bureau reprend souvent après 1 à 2 semaines ; un métier physique demande davantage. La conduite reprend lorsque les mouvements des bras sont aisés et sans douleur, selon l'avis du chirurgien.",
            ],
          },
          {
            heading: "Sport, sommeil et tabac",
            paragraphs: [
              "La marche est possible dès les premiers jours. Le sport reprend vers 6 semaines, en commençant par les activités sans impact ; la course, la musculation des bras et la natation viennent ensuite, selon les consignes. Dormir sur le dos est conseillé les premières semaines.",
              "L'arrêt du tabac doit être maintenu pendant toute la cicatrisation : il protège l'aréole et les cicatrices.",
            ],
          },
          {
            heading: "Le soin des cicatrices",
            paragraphs: [
              "Les cicatrices sont rouges et parfois épaisses les premiers mois, puis s'éclaircissent. Elles doivent être protégées du soleil pendant au moins un an. Le chirurgien peut conseiller des massages, des pansements siliconés ou d'autres soins. Une petite ouverture de la cicatrice sous le sein est possible et guérit le plus souvent avec des soins locaux.",
            ],
          },
          {
            heading: "Le résultat et le suivi",
            paragraphs: [
              "Le gonflement disparaît en quelques semaines à quelques mois ; le sein descend légèrement et s'assouplit, ce qui est attendu. La forme se stabilise en 3 à 6 mois, les cicatrices en 12 à 18 mois. Des consultations de contrôle sont prévues dans l'année.",
              "Signalez l'intervention lors de vos futures mammographies et poursuivez le dépistage recommandé pour votre âge. Si un implant a été associé, un suivi régulier est nécessaire tant qu'il est en place.",
            ],
          },
          {
            heading: "Signes d'alerte",
            paragraphs: [
              "Contactez rapidement votre chirurgien en cas de gonflement brutal d'un sein, de douleur croissante, de fièvre, de rougeur, d'écoulement de la cicatrice ou si l'aréole devient sombre ou violacée. En cas d'essoufflement brutal, de douleur thoracique ou de malaise, appelez le 15 ou le 112.",
            ],
          },
        ],
        sources: [FR_HAS, FR_SOFCPRE, FR_SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ───────────── Décision ─────────────
      {
        interventionId: "breast-lift",
        kind: "decision",
        locale: "fr",
        title: "Lifting des seins : avant de se décider",
        summary:
          "Grossesse, poids, cicatrices, implant ou non, motivations et questions à poser avant un lifting des seins, délai légal de 15 jours.",
        answer:
          "Un lifting des seins s'envisage à l'âge adulte, avec un poids stable, idéalement sans projet de grossesse proche, et en acceptant des cicatrices permanentes. La demande doit venir de vous. Prenez le temps de consulter, éventuellement deux chirurgiens, et utilisez le délai légal de 15 jours.",
        sections: [
          {
            heading: "Est-ce le bon moment ?",
            paragraphs: [],
            bullets: [
              "Âge : notre plateforme s'adresse uniquement aux personnes majeures ; une indication esthétique n'est pas retenue avant 18 ans.",
              "Grossesse et allaitement : attendre la fin de l'allaitement et quelques mois ensuite ; une grossesse ultérieure peut faire redescendre les seins.",
              "Poids : une perte de poids en cours ou prévue modifiera le résultat ; mieux vaut attendre une stabilisation.",
              "Tabac : un arrêt complet plusieurs semaines avant et après est indispensable.",
              "Santé du sein : un bilan d'imagerie peut être demandé avant, selon l'âge (souvent à partir de 35 à 40 ans) et les antécédents.",
            ],
          },
          {
            heading: "Accepter les cicatrices et l'évolution",
            paragraphs: [
              "La mastopexie échange une ptose contre des cicatrices permanentes, dont l'étendue dépend du degré de ptose. Demandez à voir le tracé prévu. Le résultat n'est pas définitif : les seins continueront de vieillir et une redescente partielle est habituelle avec le temps.",
            ],
          },
          {
            heading: "Avec ou sans implant ?",
            paragraphs: [
              "Si vous souhaitez aussi plus de volume, un implant peut être associé. Cela cumule les risques, augmente le taux de retouche et engage sur un suivi à long terme ; certains chirurgiens préfèrent opérer en deux temps. Lisez notre fiche augmentation mammaire avant de décider.",
            ],
          },
          {
            heading: "Une demande qui vient de vous",
            paragraphs: [
              "La décision doit répondre à votre propre souhait, et non à celui d'un partenaire, de l'entourage ou à des images retouchées.",
              "Si votre apparence vous occupe plusieurs heures par jour, vous fait éviter des situations, ou si vous restez insatisfaite après de précédentes interventions, il peut s'agir d'un trouble dysmorphique corporel (dysmorphophobie). La chirurgie soulage alors rarement ; parlez-en à votre médecin traitant, à un psychologue ou à un psychiatre. En cas d'idées suicidaires, appelez le 3114.",
            ],
          },
          {
            heading: "Questions à poser en consultation",
            paragraphs: [],
            bullets: [
              "Êtes-vous qualifié en chirurgie plastique, reconstructrice et esthétique ? (vérifiable sur l'Annuaire santé ou auprès de l'Ordre des médecins)",
              "Quel est le degré de ma ptose et quelle technique, avec quelles cicatrices, proposez-vous ?",
              "Un implant est-il utile dans mon cas ? En un ou deux temps ?",
              "Quels sont mes risques personnels, notamment de nécrose de l'aréole ?",
              "Quels examens faut-il faire avant (mammographie, échographie) ?",
              "Que se passera-t-il en cas de grossesse ou de variation de poids ?",
              "Qui joindre en urgence, et comment sont prises en charge les retouches ?",
            ],
          },
          {
            heading: "Deuxième avis et délai de réflexion",
            paragraphs: [
              "Demander un deuxième avis est courant et légitime. En France, un délai minimal de 15 jours sépare la remise du devis détaillé et daté de l'intervention ; aucun paiement autre que les honoraires de consultation ne peut être exigé avant. Reporter ou renoncer reste possible à tout moment.",
            ],
          },
        ],
        sources: [FR_LEGIFRANCE, FR_HAS_DEPISTAGE, FR_SOFCPRE, FR_ANNUAIRE, FR_3114],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ───────────── Alternatives ─────────────
      {
        interventionId: "breast-lift",
        kind: "alternatives",
        locale: "fr",
        title: "Alternatives au lifting des seins",
        summary:
          "Soutien-gorge adapté, augmentation seule, réduction mammaire, techniques non chirurgicales ou ne rien faire : alternatives à la mastopexie et leurs limites.",
        answer:
          "Selon le degré de ptose et le volume des seins, les alternatives sont un soutien-gorge bien ajusté, une augmentation mammaire seule, une réduction mammaire ou ne rien faire. Aucune technique non chirurgicale ne corrige durablement une ptose nette. Chaque option chirurgicale a ses propres risques.",
        sections: [
          {
            heading: "Ne rien faire",
            paragraphs: [
              "La ptose mammaire n'est pas une maladie. Ne pas opérer est une option légitime, qui n'expose à aucun risque médical, et la décision peut être réévaluée plus tard, par exemple après une dernière grossesse ou une stabilisation du poids.",
            ],
          },
          {
            heading: "Un soutien-gorge bien ajusté",
            paragraphs: [
              "Un soutien-gorge adapté, conseillé par une personne formée, relève la poitrine et change la silhouette de façon réversible. Il ne modifie pas la peau mais ne comporte aucun risque.",
            ],
          },
          {
            heading: "Une augmentation mammaire seule",
            paragraphs: [
              "En cas de pseudoptose ou de ptose légère avec perte de volume, un implant ou un lipofilling peut redonner du galbe sans cicatrice de lifting. Il ne remonte pas réellement l'aréole et peut accentuer une ptose plus marquée. Les implants ont leurs propres risques (coque, rupture, réinterventions) et imposent un suivi ; le lipofilling donne un gain plus modeste.",
            ],
          },
          {
            heading: "Une réduction mammaire",
            paragraphs: [
              "Lorsque les seins sont à la fois volumineux et tombants, une réduction mammaire remonte et allège la poitrine. Elle laisse des cicatrices comparables et peut, sous conditions, être prise en charge par l'Assurance maladie.",
            ],
          },
          {
            heading: "Les techniques non chirurgicales",
            paragraphs: [
              "Fils tenseurs, radiofréquence ou autres appareils sont parfois présentés pour raffermir la poitrine. Leur effet sur une ptose est limité et transitoire, et les données sont peu nombreuses. Ils ont leurs propres risques : infection, irrégularités, fils palpables. Les crèmes et exercices ne remontent pas un sein tombant, même si renforcer les pectoraux peut améliorer le maintien.",
            ],
          },
          {
            heading: "Comparaison honnête",
            paragraphs: [],
            bullets: [
              "Mastopexie : remonte réellement le sein et l'aréole ; cicatrices permanentes, récidive partielle avec le temps.",
              "Augmentation seule : volume et galbe ; ne corrige pas une ptose nette, risques et suivi des implants.",
              "Réduction : adaptée aux seins volumineux ; cicatrices comparables, perte de volume.",
              "Techniques non chirurgicales : effet limité et transitoire ; risques propres.",
              "Soutien-gorge ou ne rien faire : aucun risque ; aucune modification permanente.",
            ],
          },
        ],
        sources: [FR_HAS, FR_SOFCPRE, FR_ANSM, FR_AMELI],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "breast-ptosis",
        locale: "fr",
        slug: "ptose-mammaire",
        term: "Ptose mammaire",
        aliases: ["ptoses mammaires", "ptose des seins", "seins tombants", "pseudoptose mammaire"],
        definition:
          "La ptose mammaire est la descente du sein et de l'aréole sur le thorax, liée au relâchement de la peau et des tissus de soutien. Elle est corrigée chirurgicalement par une mastopexie (lifting des seins).",
        detail: [
          "On classe la ptose selon la position du mamelon par rapport au sillon situé sous le sein : légère lorsque le mamelon est au niveau du sillon, modérée lorsqu'il est en dessous, sévère lorsqu'il se trouve au point le plus bas du sein et regarde vers le bas. On parle de pseudoptose lorsque le mamelon reste au-dessus du sillon mais que la glande est descendue en dessous.",
          "La ptose est favorisée par l'âge, les grossesses et l'allaitement, les variations de poids, le volume des seins, la qualité de la peau et le tabac. Ce n'est pas une maladie : sa correction relève d'un choix personnel.",
          "Le degré de ptose oriente la technique et l'étendue des cicatrices : péri-aréolaire, verticale ou en T inversé. Une ptose légère avec perte de volume peut parfois être améliorée par une augmentation mammaire seule.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "areola",
        locale: "fr",
        slug: "areole",
        term: "Aréole",
        aliases: ["aréoles", "areole", "areoles", "aréole mammaire", "complexe aréolo-mamelonnaire", "plaque aréolo-mamelonnaire"],
        definition:
          "L'aréole est la zone de peau pigmentée, de forme circulaire, qui entoure le mamelon. Avec le mamelon, elle forme le complexe aréolo-mamelonnaire.",
        detail: [
          "Sa taille, sa couleur et sa forme varient beaucoup d'une personne à l'autre. Elle contient de petites glandes (tubercules de Montgomery) et des fibres nerveuses qui lui donnent sa sensibilité.",
          "En chirurgie mammaire, l'aréole est souvent déplacée ou réduite, notamment lors d'un lifting des seins ou d'une réduction mammaire. Elle reste reliée à un pédicule de tissu qui assure sa vascularisation et une partie de sa sensibilité ; celle-ci peut être modifiée, parfois durablement.",
          "Une complication rare mais grave est la nécrose de l'aréole, lorsque l'apport sanguin devient insuffisant ; le tabac en augmente nettement le risque. Une aréole qui devient sombre, violacée ou froide après une intervention doit faire contacter le chirurgien sans attendre.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },

  // ═════════════════════════════════════════ UNITED KINGDOM ═════════════════════════════════════════
  "en-gb": {
    intervention: {
      id: "breast-lift",
      locale: "en-gb",
      slug: "breast-lift",
      category: "breast",
      title: "Breast lift (mastopexy)",
      summary:
        "A breast lift (mastopexy) raises and reshapes sagging breasts. Techniques, scars, combining with implants, risks, recovery and UK rules.",
      description: [
        "A breast lift, or mastopexy, is a plastic surgery operation to correct breast ptosis: sagging of the breast and of the nipple and areola. The surgeon removes excess skin, reshapes the breast tissue and moves the nipple and areola higher on the chest. Breast volume is broadly kept the same: a mastopexy does not noticeably enlarge or reduce the breasts.",
        "Ptosis is graded by where the nipple sits compared with the fold under the breast: mild (nipple level with the fold), moderate (nipple below the fold) or severe (nipple at the lowest point of the breast, pointing downwards). In pseudoptosis the nipple stays above the fold but the breast tissue has dropped below it. The grade, skin quality and the volume you want guide the choice of technique.",
        "Scars cannot be avoided and depend on how much skin needs to be removed: around the areola only (periareolar) for mild sagging; around the areola and down to the fold (vertical or 'lollipop' scar) for moderate sagging; or an inverted T, also called an anchor scar, which adds a scar along the fold, for more marked sagging. Scars are red for the first months and usually fade over 12 to 18 months, although this varies from person to person.",
        "If the breast has also lost volume, a lift can be combined with a breast implant, either in the same operation or in two stages. Combining the two adds the risks of both operations and leads to a higher revision rate; it also brings the long-term follow-up that implants need, described on our breast augmentation page. Large, heavy breasts that sag are usually better treated by a breast reduction.",
        "A breast lift does not restore skin elasticity or remove stretch marks, and without an implant or fat transfer it does not give lasting fullness to the upper breast. It does not stop natural ageing either: the result usually lasts several years, but gravity, ageing skin, pregnancy and weight changes commonly lead to some sagging returning over time.",
      ],
      indications: [
        "Sagging breasts (ptosis) that bother you, whatever the grade.",
        "Breasts that have dropped and emptied after pregnancy, breastfeeding or major weight loss.",
        "Nipples and areolae that sit low, point downwards or have been stretched.",
        "A difference in height or shape between the two breasts.",
        "Matching the other breast after breast reconstruction.",
      ],
      contraindications: [
        "Being under 18, for a cosmetic procedure.",
        "Current pregnancy or breastfeeding, or the months just after.",
        "Smoking or vaping nicotine that you cannot stop: it markedly increases the risk of nipple and areola tissue loss and wound problems.",
        "A breast lump that has not been investigated, or missing breast imaging when it is advised for your age or history.",
        "Ongoing weight loss or an unstable weight: it is usually better to wait until your weight has settled.",
        "Poorly controlled diabetes, bleeding disorders or other long-term conditions.",
        "Unrealistic expectations (no scars, permanently firm breasts) or a request driven by pressure from someone else.",
        "Excessive concern about a minor or barely visible difference.",
      ],
      risks: [
        {
          name: "Pain, swelling and bruising",
          detail:
            "Expected after surgery: tightness and tenderness for the first few days, with oedema and bruising that settle over a few weeks. The final shape takes several months to appear.",
        },
        {
          name: "Changes in nipple and areola sensation",
          detail:
            "Reduced or, less often, increased sensation is common at first. It often improves over several months, but some loss of feeling can be permanent.",
        },
        {
          name: "Visible, stretched or thickened scars",
          detail:
            "Scars may widen, particularly around the areola, or become raised and red (hypertrophic scars, or more rarely keloid scars). They may need treatment or revision.",
        },
        {
          name: "Delayed wound healing",
          detail:
            "A small area where the wound opens, most often where the vertical and horizontal scars meet under the breast. It usually heals with dressings over a few weeks, and is more common in people who smoke, are overweight or have diabetes.",
        },
        {
          name: "Haematoma",
          detail:
            "A collection of blood, uncommon, usually within the first hours or days. A large haematoma needs a return to theatre.",
        },
        {
          name: "Infection",
          detail:
            "Uncommon; signs are redness, warmth, discharge or fever. It is treated with antibiotics and sometimes drainage; if an implant was used, it may have to be removed.",
        },
        {
          name: "Asymmetry and irregular shape",
          detail:
            "Small differences between the breasts are common, often because they were present beforehand. Differences in nipple height or shape, or small folds of skin at the ends of the scars ('dog ears'), may need revision surgery.",
        },
        {
          name: "Sagging returning over time",
          detail:
            "Skin keeps ageing, so some drop is usual over the years. It happens sooner with thin skin, pregnancy or weight changes.",
        },
        {
          name: "Loss of nipple or areola tissue (necrosis)",
          detail:
            "Rare but serious: part or all of the areola loses its blood supply. The risk is higher with smoking, severe sagging, combined implant surgery and previous breast surgery. It can need prolonged wound care and later reconstruction.",
        },
        {
          name: "Fat necrosis",
          detail:
            "Areas of fatty tissue die and form firm lumps, which can show on breast imaging. Mention your surgery at every mammogram; further tests are sometimes needed.",
        },
        {
          name: "Added risks when an implant is used",
          detail:
            "An implant adds capsular contracture, rupture, implant movement and, rarely, BIA-ALCL, and a higher chance of further surgery than either operation alone.",
        },
        {
          name: "Blood clots and anaesthetic risks",
          detail:
            "Rare: deep vein thrombosis or pulmonary embolism, reduced by moving early and sometimes blood-thinning injections; anaesthetic risks are assessed before surgery by the anaesthetist.",
        },
      ],
      procedure: {
        anaesthesia: "General anaesthesia.",
        duration: "About 1.5 to 3 hours depending on the technique, longer if an implant is added.",
        hospitalStay: "Day surgery or one night in hospital.",
      },
      recovery: [
        "Day 0-1: home the same day or the next day, wearing a support bra; drains are sometimes left in for a few hours or days.",
        "Week 1: moderate pain eased by prescribed painkillers, arms kept close to the body, no lifting; wound care as instructed.",
        "Around days 7-14: first check-up and removal of any stitches; desk-based work is often possible after 1 to 2 weeks.",
        "Weeks 2-4: gradual return to driving and daily activities; support bra day and night for about 4 to 6 weeks.",
        "Around 6 weeks: return to sport, starting with low-impact exercise, as advised by your surgeon.",
        "3-6 months: swelling has gone and the breasts have settled, with some expected softening and drop after surgery.",
        "12-18 months: scars have matured; protect them from the sun for at least a year. The result is now settled.",
      ],
      alternatives: [
        "Doing nothing: a valid choice; sagging is not a disease and you can reconsider later.",
        "A well-fitted bra, which changes your outline with no medical risk and is fully reversible.",
        "Breast augmentation alone (implants or fat transfer), which may be enough for pseudoptosis or mild sagging with volume loss; it has its own risks.",
        "Breast reduction when the breasts are both large and sagging.",
        "Non-surgical treatments (thread lifts, radiofrequency): limited, temporary effect on sagging, little evidence, and their own risks (infection, irregularities).",
      ],
      faq: [
        {
          question: "Does a breast lift hurt?",
          answer:
            "Pain is usually moderate, felt as tightness or aching, mainly in the first few days, and is controlled with prescribed painkillers. It is often greater if an implant is added.",
        },
        {
          question: "What scars will I have?",
          answer:
            "It depends on how much your breasts have dropped: around the areola only, around the areola and vertical, or an anchor (inverted T) scar. They fade over time but remain visible close up. Ask your surgeon which pattern they suggest for you and why.",
        },
        {
          question: "How long does the result last?",
          answer:
            "Usually several years, but your breasts will keep ageing. Some sagging tends to return over time, sooner after pregnancy, weight changes or with thin skin.",
        },
        {
          question: "Can I breastfeed after a breast lift?",
          answer:
            "The milk ducts and breast tissue are usually kept connected, so breastfeeding is often still possible, but this cannot be guaranteed. A later pregnancy may also cause the breasts to drop again, so many surgeons suggest waiting if you plan a pregnancy soon.",
        },
        {
          question: "Do I need a mammogram first?",
          answer:
            "Your surgeon may ask for breast imaging before surgery depending on your age, often from around 35 to 40, and on your personal and family history. Keep attending NHS breast screening when invited (from 50 to 71) and tell the radiographer about your surgery.",
        },
        {
          question: "Do I need to stop smoking?",
          answer:
            "Yes. Smoking and nicotine markedly increase the risk of areola tissue loss and wound problems. You will be asked to stop completely for several weeks before and after surgery. Your GP or local NHS stop smoking service can help.",
        },
        {
          question: "Can an implant be added at the same time?",
          answer:
            "Yes, if your breasts have lost volume. The risks of both operations add up and revision rates are higher; some surgeons prefer two separate stages. See our breast augmentation page for the risks and follow-up that implants need.",
        },
        {
          question: "Can I have a breast lift on the NHS?",
          answer:
            "Rarely. The NHS does not usually fund cosmetic breast surgery. A lift to match the other breast after cancer reconstruction is part of NHS reconstructive care; other cases need an individual funding request, which is seldom approved.",
        },
        {
          question: "Is there a cooling-off period?",
          answer:
            "There is no legal cooling-off period in the UK, but the General Medical Council expects surgeons to give you time to reflect, and two weeks between consultation and surgery is the recommended minimum.",
        },
        {
          question: "Which surgeon should I see?",
          answer:
            "A surgeon on the GMC specialist register in plastic surgery. You can check this on the GMC register online, check that the hospital or clinic is registered with the CQC (in England), and ask whether the surgeon holds Royal College of Surgeons certification in cosmetic breast surgery, which is voluntary.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ───────────── Risks ─────────────
      {
        interventionId: "breast-lift",
        kind: "risks",
        locale: "en-gb",
        title: "Breast lift risks",
        summary:
          "Scars, nipple sensation, asymmetry, areola tissue loss, recurrence and added implant risks: breast lift complications and when to get help.",
        answer:
          "A breast lift always leaves scars and often changes nipple sensation, at least for a while. Complications such as haematoma, infection or delayed healing are uncommon; loss of areola tissue is rare but serious, and much more likely in smokers. Adding an implant combines the risks of both operations.",
        sections: [
          {
            heading: "What to expect",
            paragraphs: [],
            bullets: [
              "Moderate pain, tightness and tenderness for the first few days.",
              "Swelling and bruising that settle over a few weeks; breasts sit high and feel firm at first.",
              "Reduced nipple and areola sensation, often temporary.",
              "Red, sometimes raised scars for the first months, which then fade.",
            ],
          },
          {
            heading: "Less common complications",
            paragraphs: [],
            bullets: [
              "Haematoma, usually in the first hours or days; it may need a return to theatre.",
              "Infection, treated with antibiotics and sometimes drainage.",
              "Delayed wound healing, often where the scars meet under the breast, which usually heals with dressings.",
              "Stretched scars, particularly around the areola, or hypertrophic scars.",
              "Asymmetry of shape, size or nipple height, or small folds of skin at the ends of the scars: revision may be offered.",
              "Lumps from fat necrosis, to be mentioned at any breast imaging.",
            ],
          },
          {
            heading: "Rare but serious complications",
            paragraphs: [
              "Nipple or areola necrosis happens when the blood supply is not enough. It is rare, but the risk rises sharply with smoking and nicotine, severe sagging where the nipple has to be moved a long way, combined implant surgery, and previous breast surgery or radiotherapy. It can be partial or complete and may need prolonged wound care followed by nipple reconstruction.",
              "As with any operation under general anaesthesia, there is a small risk of blood clots (deep vein thrombosis, pulmonary embolism) and of anaesthetic complications, assessed before surgery.",
            ],
          },
          {
            heading: "If an implant is added",
            paragraphs: [
              "A lift with an implant (augmentation-mastopexy) combines the risks of both: capsular contracture, implant rupture or movement and, rarely, breast implant-associated anaplastic large cell lymphoma (BIA-ALCL) are added to the risks of the lift. Revision rates are higher than for either operation alone, and the implant needs follow-up for as long as it is in place. Your implant should be recorded on the Breast and Cosmetic Implant Registry. Our breast augmentation page covers these risks in detail.",
            ],
          },
          {
            heading: "Over time: recurrence and screening",
            paragraphs: [
              "Some sagging returning over the years is part of normal ageing, not a complication. Pregnancy and weight changes speed it up.",
              "A breast lift does not prevent breast screening, but internal scarring can show on mammograms. Always tell the radiographer about your surgery and keep attending NHS breast screening when invited.",
            ],
          },
          {
            heading: "When to call straight away",
            paragraphs: [
              "Contact your surgeon or clinic promptly if one breast suddenly swells, if pain is getting worse, or if you have a fever, redness, discharge or a wound opening, or if the nipple or areola turns dark, purple or cold. Out of hours, call NHS 111.",
              "Call 999 if you have sudden breathlessness, chest pain, are coughing up blood or feel faint.",
            ],
          },
          {
            heading: "What increases the risks",
            paragraphs: [],
            bullets: [
              "Smoking and nicotine products, which should be stopped for several weeks before and after surgery.",
              "Significant overweight, poorly controlled diabetes or other long-term conditions.",
              "Severe sagging, very large breasts or combined implant surgery.",
              "Previous breast surgery or radiotherapy.",
              "Medicines or supplements that increase bleeding, which must be mentioned before surgery.",
            ],
          },
        ],
        sources: [UK_NHS, UK_BAAPS, UK_BAPRAS, UK_MHRA],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ───────────── Cost ─────────────
      {
        interventionId: "breast-lift",
        kind: "cost",
        locale: "en-gb",
        title: "Breast lift cost",
        summary:
          "What a breast lift quote should include, what changes the price (technique, implants), NHS funding rules, revision and complication costs.",
        answer:
          "The cost of a breast lift depends on the technique, whether an implant is added, the surgeon, the anaesthetist and the hospital. We do not publish prices: only a written, itemised quote can tell you. The NHS does not usually fund a cosmetic breast lift.",
        sections: [
          {
            heading: "What a quote should include",
            paragraphs: ["Ask for a written, itemised quote that states:"],
            bullets: [
              "The surgeon's and anaesthetist's fees.",
              "Hospital or clinic charges (theatre time, day case or overnight stay).",
              "The implant, if one is added, with manufacturer, model and surface type.",
              "The support bra, dressings and medicines.",
              "Any tests beforehand, such as a mammogram or ultrasound.",
              "Follow-up appointments, and what happens if you need revision surgery or treatment for a complication.",
            ],
          },
          {
            heading: "What affects the price",
            paragraphs: [],
            bullets: [
              "How much your breasts have dropped and the technique (periareolar, vertical or anchor), which affect operating time.",
              "Adding an implant or fat transfer, which lengthens surgery and adds the cost of the implant and its follow-up.",
              "Day surgery or an overnight stay, and the type of hospital.",
              "The surgeon's and anaesthetist's experience and fees.",
              "Location, and how aftercare is organised.",
            ],
          },
          {
            heading: "NHS funding",
            paragraphs: [
              "The NHS does not usually fund cosmetic breast surgery. Many local NHS commissioners list mastopexy among procedures of limited clinical value, so it is offered only in exceptional circumstances through an individual funding request (IFR), which is seldom approved.",
              "Surgery to the other breast to improve symmetry after breast cancer reconstruction is part of NHS reconstructive care. Ask your GP or breast team if you think your situation may qualify.",
            ],
          },
          {
            heading: "Revisions, complications and long-term costs",
            paragraphs: [
              "Revision surgery (for asymmetry, scars or excess skin) is sometimes needed. Ask before surgery whether it would be charged and on what terms. Treating a complication can also cost more; the NHS will treat emergencies, but corrective cosmetic surgery is usually private.",
              "If an implant is added, plan for the cost of follow-up and future implant surgery. Some providers include complication cover or an aftercare package: read exactly what it covers (fees, anaesthesia, hospital stay) and for how long.",
            ],
          },
          {
            heading: "Points to watch",
            paragraphs: [
              "A very low price is a reason to check what is included, the surgeon's GMC specialist registration, the clinic's CQC registration and how aftercare works. Be wary of pressure to pay a deposit at the first consultation, time-limited discounts or finance arranged on the spot: GMC guidance says doctors must not use such tactics.",
            ],
          },
        ],
        sources: [UK_NHS, UK_GMC, UK_CQC, UK_BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ───────────── Recovery ─────────────
      {
        interventionId: "breast-lift",
        kind: "recovery",
        locale: "en-gb",
        title: "Recovery after a breast lift",
        summary:
          "First days, support bra, return to work, driving and exercise, scar care and warning signs after a breast lift (mastopexy).",
        answer:
          "Most people go home the same day or the next morning after a breast lift. Desk-based work often resumes after 1 to 2 weeks and exercise at around 6 weeks. The shape settles over 3 to 6 months and scars mature over 12 to 18 months.",
        sections: [
          {
            heading: "The first few days",
            paragraphs: [
              "Pain is usually moderate, felt as tightness. Your breasts will be swollen, high and firm. Drains are sometimes left in for a few hours or days.",
            ],
            bullets: [
              "Wear the support bra day and night for as long as advised (often 4 to 6 weeks).",
              "Keep your arms close to your body; avoid lifting and reaching above your head.",
              "Take the painkillers prescribed; avoid aspirin and anti-inflammatories unless your surgeon agrees.",
              "Walk early and often to reduce the risk of blood clots.",
              "Follow the advice on showering and dressings.",
            ],
          },
          {
            heading: "The first two weeks",
            paragraphs: [
              "Your first check is usually between 7 and 14 days, when any stitches are removed. Desk-based work often resumes after 1 to 2 weeks; physical jobs need longer. Drive again only when you can move your arms freely and perform an emergency stop, and check your insurer's conditions.",
            ],
          },
          {
            heading: "Exercise, sleep and smoking",
            paragraphs: [
              "Walking is encouraged from the first days. Return to exercise at around 6 weeks, starting with low-impact activity; running, upper-body weights and swimming follow as advised. Sleeping on your back is recommended for the first few weeks.",
              "Stay off cigarettes and nicotine for the whole healing period: it protects the areola and the scars.",
            ],
          },
          {
            heading: "Caring for your scars",
            paragraphs: [
              "Scars are red and sometimes raised for the first months, then fade. Protect them from the sun for at least a year. Your surgeon may suggest massage, silicone gel or sheets. A small wound opening under the breast is possible and usually heals with dressings.",
            ],
          },
          {
            heading: "The result and follow-up",
            paragraphs: [
              "Swelling settles over weeks to months; the breasts drop slightly and soften, which is expected. The shape settles over 3 to 6 months and scars over 12 to 18 months. Follow-up appointments are usually planned during the first year.",
              "Mention your surgery at future mammograms and keep attending NHS breast screening when invited. If an implant was added, it needs follow-up for as long as it is in place.",
            ],
          },
          {
            heading: "Warning signs",
            paragraphs: [
              "Contact your surgeon promptly if one breast suddenly swells, pain increases, or you have a fever, redness, discharge, or a nipple that turns dark or purple. Out of hours, call NHS 111. Call 999 for sudden breathlessness, chest pain or collapse.",
            ],
          },
        ],
        sources: [UK_NHS, UK_BAAPS, UK_BAPRAS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ───────────── Decision ─────────────
      {
        interventionId: "breast-lift",
        kind: "decision",
        locale: "en-gb",
        title: "Breast lift: before you decide",
        summary:
          "Pregnancy, weight, scars, implants or not, your motives and questions to ask before a breast lift, plus the two-week cooling-off period.",
        answer:
          "A breast lift is usually considered as an adult, at a stable weight, ideally with no pregnancy planned soon, and accepting permanent scars. The decision should be yours alone. Take your time, consider a second opinion, and allow at least two weeks between consultation and surgery, as the GMC recommends.",
        sections: [
          {
            heading: "Is this the right time?",
            paragraphs: [],
            bullets: [
              "Age: our platform is for adults only; cosmetic surgery is not offered under 18.",
              "Pregnancy and breastfeeding: wait until you have finished breastfeeding and for some months afterwards; a later pregnancy can make the breasts drop again.",
              "Weight: ongoing or planned weight loss will change the result, so wait until your weight is stable.",
              "Smoking: stopping completely for several weeks before and after is essential.",
              "Breast health: your surgeon may ask for imaging first, depending on your age (often from around 35 to 40) and history.",
            ],
          },
          {
            heading: "Accepting scars and change",
            paragraphs: [
              "A breast lift trades sagging for permanent scars, whose extent depends on how much your breasts have dropped. Ask to see the planned scar pattern. The result is not permanent: your breasts will keep ageing and some drop is usual over time.",
            ],
          },
          {
            heading: "With or without an implant?",
            paragraphs: [
              "If you also want more volume, an implant can be added. This combines the risks, increases the chance of revision and commits you to long-term follow-up; some surgeons prefer two stages. Read our breast augmentation page before deciding.",
            ],
          },
          {
            heading: "A decision that is yours",
            paragraphs: [
              "The decision should reflect your own wishes, not those of a partner, friends or edited images on social media.",
              "If worries about your appearance take up hours each day, make you avoid situations, or remain after previous procedures, this may be body dysmorphic disorder. Surgery rarely helps in that case; talk to your GP, who can refer you for support. If you are struggling or having thoughts of suicide, you can call Samaritans free on 116 123 at any time.",
            ],
          },
          {
            heading: "Questions to ask at your consultation",
            paragraphs: [],
            bullets: [
              "Are you on the GMC specialist register in plastic surgery, and do you hold RCS certification in cosmetic breast surgery?",
              "How much have my breasts dropped, and which technique and scars do you suggest?",
              "Would an implant help in my case? In one stage or two?",
              "What are my personal risks, especially of areola tissue loss?",
              "Do I need a mammogram or ultrasound first?",
              "What would happen after a pregnancy or weight change?",
              "Who do I contact in an emergency, and how are revisions handled and charged?",
              "Is the hospital or clinic registered with the CQC?",
            ],
          },
          {
            heading: "Second opinion and cooling-off period",
            paragraphs: [
              "A second opinion is common and reasonable. There is no legal cooling-off period in the UK, but GMC guidance expects surgeons to give you time to reflect, and at least two weeks between consultation and surgery is recommended. You should see the operating surgeon, not only a salesperson or coordinator. You can postpone or change your mind at any time.",
            ],
          },
        ],
        sources: [UK_GMC, UK_RCS, UK_CQC, UK_NHS, UK_SAMARITANS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ───────────── Alternatives ─────────────
      {
        interventionId: "breast-lift",
        kind: "alternatives",
        locale: "en-gb",
        title: "Alternatives to a breast lift",
        summary:
          "A well-fitted bra, augmentation alone, breast reduction, non-surgical treatments or doing nothing: alternatives to a breast lift and their limits.",
        answer:
          "Depending on how much your breasts have dropped and their size, alternatives include a well-fitted bra, breast augmentation alone, breast reduction or doing nothing. No non-surgical treatment lastingly corrects clear sagging. Each surgical option has its own risks.",
        sections: [
          {
            heading: "Doing nothing",
            paragraphs: [
              "Sagging breasts are not a medical problem. Not having surgery is a valid choice with no medical risk, and you can reconsider later, for example after your last pregnancy or once your weight is stable.",
            ],
          },
          {
            heading: "A well-fitted bra",
            paragraphs: [
              "A professionally fitted bra lifts the breasts and changes your outline in a fully reversible way. It does not change the skin, but carries no risk.",
            ],
          },
          {
            heading: "Breast augmentation alone",
            paragraphs: [
              "For pseudoptosis or mild sagging with volume loss, an implant or fat transfer can restore fullness without breast lift scars. It does not truly raise the nipple and can make more marked sagging look worse. Implants have their own risks (capsular contracture, rupture, further operations) and need follow-up; fat transfer gives a more modest increase.",
            ],
          },
          {
            heading: "Breast reduction",
            paragraphs: [
              "When breasts are both large and sagging, a breast reduction lifts and lightens them. Scars are similar. NHS funding is possible in some areas when strict criteria are met.",
            ],
          },
          {
            heading: "Non-surgical treatments",
            paragraphs: [
              "Thread lifts, radiofrequency and other devices are sometimes marketed for firming the breasts. Their effect on sagging is limited and temporary, and evidence is limited. They have their own risks, including infection, irregularities and palpable threads, and the practitioners offering them are not always medically qualified. Creams and exercises do not lift a sagging breast, although strengthening the chest muscles may improve posture.",
            ],
          },
          {
            heading: "An honest comparison",
            paragraphs: [],
            bullets: [
              "Breast lift: genuinely raises the breast and nipple; permanent scars, some sagging returns over time.",
              "Augmentation alone: adds volume and fullness; does not correct clear sagging, implant risks and follow-up.",
              "Reduction: suited to large breasts; similar scars, smaller breasts.",
              "Non-surgical treatments: limited, temporary effect; their own risks.",
              "A bra or doing nothing: no risk; no permanent change.",
            ],
          },
        ],
        sources: [UK_NHS, UK_BAAPS, UK_BAPRAS, UK_MHRA],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "breast-ptosis",
        locale: "en-gb",
        slug: "breast-ptosis",
        term: "Breast ptosis",
        aliases: ["sagging breasts", "drooping breasts", "mammary ptosis", "breast pseudoptosis"],
        definition:
          "Breast ptosis is the sagging of the breast and nipple on the chest, caused by stretching of the skin and supporting tissues. It is corrected surgically by a mastopexy (breast lift).",
        detail: [
          "Ptosis is graded by where the nipple sits compared with the fold under the breast: mild when the nipple is level with the fold, moderate when it is below, and severe when it sits at the lowest point of the breast and points downwards. In pseudoptosis the nipple stays above the fold but the breast tissue has dropped below it.",
          "Ageing, pregnancy and breastfeeding, weight changes, breast size, skin quality and smoking all contribute. It is not a disease: whether to correct it is a personal choice.",
          "The grade guides the technique and the length of the scars: periareolar, vertical or anchor (inverted T). Mild sagging with volume loss can sometimes be improved by breast augmentation alone.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "areola",
        locale: "en-gb",
        slug: "areola",
        term: "Areola",
        aliases: ["areolae", "areolas", "nipple-areola complex", "nipple areola complex"],
        definition:
          "The areola is the round, darker area of skin surrounding the nipple. Together with the nipple it forms the nipple-areola complex.",
        detail: [
          "Its size, colour and shape vary widely between people. It contains small glands (Montgomery's tubercles) and nerve fibres that give it sensation.",
          "In breast surgery, the areola is often moved or made smaller, particularly during a breast lift or breast reduction. It stays attached to a stalk of tissue (pedicle) that keeps its blood supply and some of its sensation, which may change, sometimes permanently.",
          "A rare but serious complication is areola necrosis, when the blood supply becomes insufficient; smoking markedly increases the risk. A nipple or areola that turns dark, purple or cold after surgery needs urgent contact with your surgeon.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },
};
