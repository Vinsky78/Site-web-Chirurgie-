import type { Source } from "../types";
import type { Dossier } from "./types";

// ─── Sources France ───
const HAS: Source = { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" };
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
const NHS: Source = { label: "NHS: liposuction and cosmetic procedures", url: "https://www.nhs.uk" };
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
const NICE: Source = { label: "National Institute for Health and Care Excellence (NICE)", url: "https://www.nice.org.uk" };

const REVIEW = { status: "draft" } as const;
const UPDATED_AT = "2026-10-13";

/** Liposuccion : fiche, sous-pages et lexique (fr, en-gb). Brouillon à relire par le comité médical. */
export const dossier: Dossier = {
  // ════════════════════════════════════ FRANCE ════════════════════════════════════
  fr: {
    intervention: {
      id: "liposuction",
      locale: "fr",
      slug: "liposuccion",
      category: "body",
      title: "Liposuccion",
      summary:
        "La liposuccion retire des amas de graisse localisés résistants. Ce n'est pas un amaigrissement : techniques, risques, gaine et convalescence.",
      description: [
        "La liposuccion, aussi appelée liposculpture ou lipoaspiration, consiste à aspirer des amas de graisse localisés à l'aide de fines canules introduites sous la peau par de petites incisions. Elle s'adresse aux surcharges qui résistent à une alimentation équilibrée et à l'activité physique : ventre, hanches, « culotte de cheval », face interne des cuisses et des genoux, bras, dos, menton.",
        "La technique la plus répandue est la liposuccion tumescente : la zone est d'abord infiltrée avec une solution contenant un anesthésique local et un vasoconstricteur, qui limite le saignement et la douleur. Des variantes utilisent une assistance mécanique (canule vibrante), des ultrasons ou un laser pour faciliter le décollement de la graisse ; elles ne dispensent pas des mêmes précautions et comportent leurs propres risques, notamment de brûlure.",
        "Les incisions mesurent quelques millimètres et sont placées si possible dans des plis naturels. Elles laissent de petites cicatrices généralement discrètes, mais qui peuvent rester visibles ou se pigmenter.",
        "La liposuccion n'est pas une méthode d'amaigrissement ni un traitement de l'obésité. Le volume aspiré en une séance est limité, car les risques augmentent nettement avec les grands volumes. Elle ne traite pas la cellulite, ne retend pas une peau relâchée et n'enlève pas les vergetures : si la peau manque d'élasticité, elle peut au contraire paraître plus flasque après l'intervention.",
        "Les cellules graisseuses retirées ne se reconstituent pas, mais celles qui restent peuvent grossir. Le résultat se maintient tant que le poids reste stable ; une prise de poids peut se répartir sur d'autres zones. Le résultat définitif n'est apprécié qu'après plusieurs mois, le temps que l'œdème se résorbe et que la peau se rétracte.",
      ],
      indications: [
        "Amas graisseux localisés, disproportionnés et résistants aux mesures d'hygiène de vie, chez une personne proche de son poids habituel.",
        "Poids stable depuis plusieurs mois.",
        "Peau de bonne qualité, suffisamment élastique pour se rétracter après l'aspiration.",
        "Demande précise, exprimée par la personne elle-même et stable dans le temps.",
        "Certaines situations médicales (lipome, lipodystrophie), à évaluer avec le chirurgien.",
        "Temps de liposuccion associé à une autre intervention (abdominoplastie, réduction mammaire, gynécomastie), selon les cas.",
      ],
      contraindications: [
        "Attente d'une perte de poids importante ou obésité non stabilisée : la liposuccion n'est pas un traitement du surpoids.",
        "Attentes irréalistes ou demande motivée par la pression d'un tiers.",
        "Préoccupation excessive pour un défaut minime ou invisible, qui doit être évoquée avec le chirurgien.",
        "Peau très relâchée, pour laquelle une intervention retirant l'excédent cutané est plus adaptée.",
        "Antécédents de thrombose veineuse ou d'embolie pulmonaire non évalués, troubles de la coagulation.",
        "Pathologies cardiaques, respiratoires, diabète ou autres maladies chroniques non équilibrées.",
        "Tabagisme actif, qui augmente le risque de complications de cicatrisation et de thrombose : un arrêt est recommandé.",
        "Grossesse ou allaitement en cours.",
      ],
      risks: [
        {
          name: "Ecchymoses, œdème et douleurs",
          detail:
            "Fréquents et attendus : bleus étendus, gonflement et sensation de courbature pendant plusieurs semaines. L'œdème peut persister plusieurs mois, surtout aux jambes.",
        },
        {
          name: "Troubles de la sensibilité",
          detail:
            "Engourdissement ou au contraire hypersensibilité de la peau des zones traitées, le plus souvent transitoires sur quelques semaines à quelques mois.",
        },
        {
          name: "Irrégularités et asymétries",
          detail:
            "Creux, bosses, aspect ondulé ou différence entre les deux côtés, plus fréquents en cas d'aspiration trop superficielle ou trop importante. Une retouche peut être discutée après stabilisation, au moins 6 mois plus tard, mais ne corrige pas toujours complètement.",
        },
        {
          name: "Relâchement cutané",
          detail:
            "Si la peau est peu élastique, elle peut ne pas se rétracter et paraître plus flasque après l'aspiration de la graisse.",
        },
        {
          name: "Sérome et hématome",
          detail:
            "Accumulation de liquide ou de sang sous la peau, peu fréquente ; peut nécessiter une ou plusieurs ponctions, plus rarement une reprise.",
        },
        {
          name: "Infection",
          detail:
            "Rare ; le plus souvent traitée par antibiotiques. Une infection sévère, exceptionnelle, peut s'étendre rapidement et impose une prise en charge urgente.",
        },
        {
          name: "Brûlures et lésions cutanées",
          detail:
            "Possibles avec les techniques assistées par ultrasons ou par laser, ou en cas de frottement des canules au niveau des incisions ; elles peuvent laisser une cicatrice ou une pigmentation.",
        },
        {
          name: "Thrombose veineuse et embolie pulmonaire",
          detail:
            "Rares mais graves. Le risque augmente avec la durée de l'intervention, les grands volumes, les associations de gestes et certains facteurs personnels ; il est prévenu par un lever précoce, des bas de contention et, selon le cas, un traitement anticoagulant.",
        },
        {
          name: "Embolie graisseuse",
          detail:
            "Très rare mais potentiellement mortelle : des particules de graisse passent dans la circulation et atteignent les poumons ou le cerveau. Elle se manifeste par un essoufflement, une confusion ou de petites taches rouges sur la peau, en général dans les heures ou les jours qui suivent.",
        },
        {
          name: "Perforation d'un organe",
          detail:
            "Exceptionnelle mais grave : une canule peut traverser la paroi de l'abdomen ou du thorax et léser l'intestin ou le poumon. Le risque est plus élevé en cas de hernie ou de cicatrice abdominale ; il justifie un examen soigneux avant l'intervention.",
        },
        {
          name: "Complications liées aux grands volumes et aux produits injectés",
          detail:
            "L'aspiration de volumes importants expose à des déséquilibres des liquides de l'organisme et à une perte de sang. Une quantité excessive d'anesthésique local dans la solution d'infiltration peut provoquer une intoxication (malaise, troubles du rythme cardiaque).",
        },
        {
          name: "Risques liés à l'anesthésie",
          detail: "À évaluer lors de la consultation d'anesthésie obligatoire.",
        },
      ],
      procedure: {
        anaesthesia:
          "Anesthésie générale le plus souvent ; anesthésie locale (tumescente), éventuellement associée à une sédation, pour les zones limitées.",
        duration: "Environ 1 à 3 heures selon le nombre de zones et le volume aspiré.",
        hospitalStay:
          "Le plus souvent en ambulatoire ; une nuit d'hospitalisation peut être proposée en cas de volume important ou de plusieurs zones traitées.",
      },
      recovery: [
        "Jour 1 : écoulement de liquide d'infiltration teinté de sang par les incisions pendant 24 à 48 heures, courbatures, lever et marche dès le soir ou le lendemain.",
        "Gaine de compression portée jour et nuit en général 3 à 6 semaines, selon les consignes du chirurgien.",
        "Semaine 1 : ecchymoses et gonflement importants ; antalgiques simples, pansements des incisions, douche généralement autorisée après 24 à 48 heures.",
        "Reprise d'une activité de bureau souvent après 1 à 2 semaines, plus tard pour un travail physique ou en cas de zones étendues.",
        "Semaines 3 à 4 : les ecchymoses ont en général disparu ; reprise progressive de la marche rapide et d'activités douces.",
        "Sport intensif après 4 à 6 semaines, avec l'accord du chirurgien ; exposition des cicatrices au soleil à éviter pendant plusieurs mois.",
        "Des massages ou drainages peuvent être conseillés ; des zones indurées ou irrégulières au toucher sont fréquentes pendant les premiers mois.",
        "Résultat stabilisé entre 6 et 12 mois, une fois l'œdème résorbé et la peau rétractée.",
      ],
      alternatives: [
        "Ne rien faire : une option légitime, à reconsidérer après un temps de réflexion.",
        "Alimentation équilibrée et activité physique régulière : elles agissent sur le poids global mais ne ciblent pas une zone précise.",
        "Cryolipolyse et autres techniques non chirurgicales (radiofréquence, ultrasons focalisés) : effet plus modeste, plusieurs séances parfois nécessaires, risques propres (brûlures, douleurs, et pour la cryolipolyse une augmentation paradoxale du volume graisseux, rare).",
        "Injections lipolytiques (par exemple pour le double menton) : réservées à de petites zones, efficacité limitée, risques propres (douleur, œdème, atteinte nerveuse rare) ; à ne réaliser qu'avec un produit autorisé, par un médecin.",
        "Intervention retirant la peau (abdominoplastie, lifting des cuisses ou des bras) si le relâchement cutané domine.",
      ],
      faq: [
        {
          question: "La liposuccion fait-elle maigrir ?",
          answer:
            "Non. Elle retire des amas de graisse localisés et modifie la silhouette, mais le poids change peu. Elle ne remplace pas une perte de poids et ne traite pas l'obésité.",
        },
        {
          question: "Est-ce douloureux ?",
          answer:
            "Les suites ressemblent souvent à de fortes courbatures, avec une sensibilité au toucher pendant une à deux semaines. Les douleurs sont en général contrôlées par des antalgiques simples. Une douleur qui augmente au lieu de diminuer doit être signalée au chirurgien.",
        },
        {
          question: "Quelle quantité de graisse peut-on retirer ?",
          answer:
            "Elle est limitée, et le chirurgien la fixe selon votre poids, votre état de santé et les zones traitées. Les sociétés savantes recommandent de ne pas aspirer de grands volumes en une seule séance, car les risques (déséquilibres liquidiens, thrombose, embolie) augmentent avec le volume. Une hospitalisation de surveillance peut alors être nécessaire.",
        },
        {
          question: "Le résultat est-il définitif ?",
          answer:
            "Les cellules graisseuses aspirées ne repoussent pas, mais celles qui restent peuvent augmenter de volume en cas de prise de poids. Le vieillissement de la peau continue. Le résultat se maintient d'autant mieux que le poids reste stable.",
        },
        {
          question: "La liposuccion supprime-t-elle la cellulite ou la peau qui pend ?",
          answer:
            "Non. Elle ne traite pas la cellulite ni les vergetures et ne retend pas une peau relâchée. Si la peau manque d'élasticité, elle peut même paraître plus flasque après l'intervention ; une autre chirurgie est alors à discuter.",
        },
        {
          question: "Combien de temps faut-il porter la gaine de compression ?",
          answer:
            "En général 3 à 6 semaines, jour et nuit les premières semaines. Elle limite l'œdème et aide la peau à se réappliquer. La durée exacte dépend des zones traitées et des consignes de votre chirurgien.",
        },
        {
          question: "Peut-on faire une liposuccion avant une grossesse ?",
          answer:
            "C'est possible, mais une grossesse ultérieure et les variations de poids qui l'accompagnent peuvent modifier le résultat. Il est souvent conseillé d'attendre la fin des projets de grossesse et de ne pas opérer pendant la grossesse ou l'allaitement.",
        },
        {
          question: "Est-elle remboursée par l'Assurance maladie ?",
          answer:
            "Non lorsqu'elle est réalisée à visée esthétique. Dans certaines situations médicales précises, une prise en charge peut être discutée ; elle nécessite en général une demande d'accord préalable.",
        },
        {
          question: "Quel est le délai entre la consultation et l'intervention ?",
          answer:
            "En France, la loi impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention. Aucun paiement ne peut être exigé avant la fin de ce délai, en dehors des honoraires de consultation. Une consultation d'anesthésie est obligatoire.",
        },
        {
          question: "Quel chirurgien consulter ?",
          answer:
            "Un chirurgien qualifié en chirurgie plastique, reconstructrice et esthétique, opérant dans un établissement autorisé par l'ARS. Vous pouvez vérifier son inscription et sa qualification sur l'Annuaire santé ou l'annuaire de l'Ordre des médecins. La liposuccion est un acte chirurgical : elle ne doit pas être réalisée en dehors d'un bloc opératoire autorisé.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risques ──
      {
        interventionId: "liposuction",
        kind: "risks",
        locale: "fr",
        title: "Liposuccion : les risques",
        summary:
          "Suites fréquentes, irrégularités, thrombose, embolie graisseuse, perforation : les risques de la liposuccion et les signes qui doivent faire appeler.",
        answer:
          "La liposuccion est une véritable intervention chirurgicale. Ecchymoses, gonflement et troubles de la sensibilité sont attendus ; irrégularités, sérome ou infection sont moins fréquents. Des complications rares mais graves existent (thrombose, embolie graisseuse, perforation d'un organe), et leur risque augmente avec les grands volumes et les associations de gestes.",
        sections: [
          {
            heading: "Les suites fréquentes et attendues",
            paragraphs: [
              "Ces manifestations sont des suites normales de l'intervention. Elles diminuent progressivement en quelques semaines.",
            ],
            bullets: [
              "Ecchymoses parfois étendues, qui s'estompent en deux à quatre semaines.",
              "Gonflement (œdème), qui peut persister plusieurs mois, notamment aux chevilles après une liposuccion des jambes.",
              "Courbatures et sensibilité au toucher pendant une à deux semaines.",
              "Écoulement de liquide teinté de sang par les incisions pendant 24 à 48 heures.",
              "Engourdissement ou hypersensibilité de la peau, le plus souvent transitoires.",
              "Zones indurées au toucher pendant les premiers mois.",
            ],
          },
          {
            heading: "Les complications moins fréquentes",
            paragraphs: [
              "Leur fréquence dépend de la technique, du volume aspiré, de la qualité de la peau et de votre état de santé.",
            ],
            bullets: [
              "Irrégularités, creux ou aspect ondulé de la peau, asymétries entre les deux côtés.",
              "Peau qui ne se rétracte pas et paraît plus relâchée, surtout si elle était peu élastique.",
              "Sérome (accumulation de liquide) ou hématome, nécessitant parfois des ponctions.",
              "Infection, le plus souvent traitée par antibiotiques.",
              "Brûlure cutanée avec les techniques assistées par ultrasons ou laser.",
              "Cicatrices d'incision pigmentées ou épaissies.",
            ],
          },
          {
            heading: "Les complications rares mais graves",
            paragraphs: [
              "La thrombose veineuse profonde (caillot dans une veine de la jambe) peut se compliquer d'embolie pulmonaire. L'embolie graisseuse, très rare, survient lorsque des particules de graisse migrent dans la circulation vers les poumons ou le cerveau. Exceptionnellement, une canule peut perforer la paroi de l'abdomen ou du thorax et léser un organe (intestin, poumon).",
              "D'autres complications graves sont liées aux grands volumes : perte de sang, déséquilibre des liquides de l'organisme, intoxication par l'anesthésique local de la solution d'infiltration. Ces risques ont conduit les sociétés savantes à recommander de limiter le volume aspiré en une séance et de surveiller plus longtemps les patients après une aspiration importante.",
            ],
          },
          {
            heading: "Quand appeler sans attendre",
            paragraphs: [
              "Contactez rapidement le chirurgien ou l'équipe qui vous a opéré en cas de signe inhabituel. En cas d'essoufflement, de douleur dans la poitrine, de malaise, de confusion ou de douleur abdominale intense, appelez le 15 (SAMU) ou le 112.",
            ],
            bullets: [
              "Essoufflement, douleur thoracique, toux avec crachats sanglants, palpitations.",
              "Confusion, somnolence inhabituelle, petites taches rouges sur la peau du thorax ou du cou.",
              "Douleur abdominale intense ou qui augmente, ventre dur, vomissements, fièvre.",
              "Mollet douloureux, chaud ou gonflé d'un seul côté.",
              "Fièvre, rougeur qui s'étend, peau qui noircit ou douleur disproportionnée.",
              "Gonflement rapide et tendu d'une zone traitée.",
            ],
          },
          {
            heading: "Les facteurs qui augmentent les risques",
            paragraphs: ["Certains facteurs sont modifiables et doivent être discutés en consultation."],
            bullets: [
              "Volume aspiré important, nombreuses zones traitées en une séance ou association avec une autre intervention.",
              "Tabac, surpoids important, contraception œstroprogestative ou traitement hormonal (risque de thrombose).",
              "Antécédents personnels ou familiaux de thrombose ou d'embolie.",
              "Hernie, éventration ou cicatrices abdominales, qui augmentent le risque de perforation.",
              "Médicaments qui favorisent le saignement (aspirine, anti-inflammatoires, anticoagulants, certains compléments).",
            ],
          },
          {
            heading: "Retouches",
            paragraphs: [
              "Une irrégularité ou une asymétrie peut justifier une retouche, par une nouvelle aspiration ou une réinjection de graisse. Elle n'est envisagée qu'après stabilisation, au moins 6 mois après l'intervention, et ne corrige pas toujours complètement. Demandez avant de vous engager quelles conditions sont prévues, y compris sur le plan financier.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFAR, ANSM],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Prix ──
      {
        interventionId: "liposuction",
        kind: "cost",
        locale: "fr",
        title: "Prix d'une liposuccion",
        summary:
          "Ce que contient un devis de liposuccion, ce qui fait varier le prix (zones, volume, anesthésie), règles françaises et rares cas de prise en charge.",
        answer:
          "Le coût d'une liposuccion dépend surtout du nombre de zones, du volume à aspirer, du type d'anesthésie et de l'établissement. Nous n'indiquons pas de fourchette de prix : seul un devis détaillé et daté, remis après consultation, permet de connaître le montant. À visée esthétique, elle n'est pas remboursée.",
        sections: [
          {
            heading: "Ce que contient un devis",
            paragraphs: [
              "En France, un devis détaillé et daté doit être remis avant toute intervention de chirurgie esthétique. Vérifiez qu'il précise les postes suivants, ou ceux qui n'y figurent pas.",
            ],
            bullets: [
              "Honoraires du chirurgien, avec la liste des zones traitées.",
              "Honoraires de l'anesthésiste (parfois facturés séparément).",
              "Frais de l'établissement : bloc opératoire, ambulatoire ou nuit d'hospitalisation.",
              "Gaine de compression, bas de contention, pansements et médicaments.",
              "Examens préopératoires éventuels.",
              "Consultations de suivi et conditions prévues en cas de retouche ou de complication.",
            ],
          },
          {
            heading: "Ce qui fait varier le prix",
            paragraphs: [
              "Le nombre et l'étendue des zones, le volume prévu, la durée de l'intervention, le type d'anesthésie (locale ou générale), la technique utilisée (assistance mécanique, ultrasons, laser) et la nécessité d'une nuit d'hospitalisation pèsent sur le devis. Une liposuccion associée à une autre intervention modifie aussi le coût global.",
              "Le prix ne renseigne pas à lui seul sur la qualité. Une technique présentée comme plus récente n'est pas nécessairement plus adaptée à votre situation.",
            ],
          },
          {
            heading: "Les règles applicables en France",
            paragraphs: [
              "Le Code de la santé publique (article L6322-2) impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention. Aucune somme autre que les honoraires de consultation ne peut être exigée avant la fin de ce délai.",
              "Les actes à visée purement esthétique sont soumis à la TVA. L'intervention doit avoir lieu dans un établissement autorisé par l'ARS, et une consultation d'anesthésie préalable est obligatoire.",
            ],
          },
          {
            heading: "Quand l'Assurance maladie peut intervenir",
            paragraphs: [
              "Une liposuccion à visée esthétique n'est pas prise en charge. Dans certaines situations médicales précises (par exemple certains lipomes ou lipodystrophies), une prise en charge peut être discutée ; elle suppose en général une demande d'accord préalable. Des dépassements d'honoraires restent possibles selon le secteur du chirurgien.",
              "Lorsqu'une liposuccion est associée à une intervention remboursée, le temps esthétique reste à votre charge : demandez un devis qui distingue clairement les deux parties.",
            ],
          },
          {
            heading: "Le coût des complications et des retouches",
            paragraphs: [
              "Une retouche pour irrégularité, une ponction de sérome ou la prise en charge d'une complication peuvent entraîner des frais, un arrêt de travail plus long ou des déplacements. Renseignez-vous sur ce qui serait facturé et sur l'existence d'une assurance couvrant les complications.",
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
        interventionId: "liposuction",
        kind: "recovery",
        locale: "fr",
        title: "Convalescence après une liposuccion",
        summary:
          "Après une liposuccion : premiers jours, gaine de compression, reprise du travail et du sport, massages, résultat entre 6 et 12 mois et signes d'alerte.",
        answer:
          "Les premiers jours sont marqués par des courbatures, des ecchymoses et un écoulement par les incisions. La gaine de compression est portée en général 3 à 6 semaines, et une activité de bureau reprend souvent après 1 à 2 semaines. Le résultat se stabilise entre 6 et 12 mois. Les consignes de votre chirurgien priment sur ces repères.",
        sections: [
          {
            heading: "Les premiers jours",
            paragraphs: [
              "La sortie a lieu le plus souvent le jour même. Le liquide d'infiltration s'écoule par les incisions pendant 24 à 48 heures : c'est normal, des protections absorbantes sont prévues. Les zones traitées sont gonflées et sensibles.",
            ],
            bullets: [
              "Se lever et marcher dès que possible pour limiter le risque de thrombose.",
              "Bien s'hydrater et prendre les antalgiques prescrits.",
              "Porter la gaine de compression et, si prescrits, les bas de contention.",
              "Prévoir une personne pour le retour à domicile et la première nuit.",
            ],
          },
          {
            heading: "La gaine de compression",
            paragraphs: [
              "La gaine est portée jour et nuit les premières semaines, puis parfois seulement le jour, pour une durée totale de 3 à 6 semaines en général. Elle limite l'œdème et les ecchymoses et aide la peau à se réappliquer. Elle doit être ajustée sans serrer excessivement : des fourmillements, une douleur ou des marques profondes doivent être signalés.",
            ],
          },
          {
            heading: "Reprise du travail et des activités",
            paragraphs: [],
            bullets: [
              "Travail de bureau : souvent après 1 à 2 semaines.",
              "Travail physique : plus tard, selon les zones traitées et l'avis du chirurgien.",
              "Conduite : lorsque les mouvements ne sont plus gênés et sans antalgiques sédatifs.",
              "Marche quotidienne dès les premiers jours ; activités douces vers la 3e ou 4e semaine.",
              "Sport intensif et natation : en général après 4 à 6 semaines et cicatrisation des incisions.",
              "Soleil et UV : protéger les zones ecchymotiques et les cicatrices pendant plusieurs mois.",
            ],
          },
          {
            heading: "Les mois suivants",
            paragraphs: [
              "L'œdème diminue lentement et la peau se rétracte progressivement. Des zones indurées, des petites bosses ou une sensibilité modifiée sont fréquentes pendant les premiers mois. Des massages ou des drainages peuvent être conseillés par le chirurgien.",
              "Le résultat définitif n'est apprécié qu'entre 6 et 12 mois. Une retouche ne se discute pas avant ce délai.",
            ],
          },
          {
            heading: "Signes qui doivent faire appeler",
            paragraphs: [
              "Contactez le chirurgien en cas de fièvre, de rougeur qui s'étend, de gonflement rapide d'une zone ou de mollet douloureux. En cas d'essoufflement, de douleur thoracique, de confusion ou de douleur abdominale intense, appelez le 15 ou le 112.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Avant de se décider ──
      {
        interventionId: "liposuction",
        kind: "decision",
        locale: "fr",
        title: "Liposuccion : avant de se décider",
        summary:
          "Liposuccion : poids stable, qualité de la peau, motivation, dysmorphophobie, questions à poser au chirurgien et délai légal de 15 jours.",
        answer:
          "La liposuccion s'envisage chez un adulte proche de son poids habituel, stable depuis plusieurs mois, avec des amas localisés et une peau de bonne qualité. Ce n'est pas une méthode d'amaigrissement. En France, un délai minimal de 15 jours doit séparer la remise du devis de l'intervention : prenez ce temps, et un second avis si vous le souhaitez.",
        sections: [
          {
            heading: "Est-ce le bon moment ?",
            paragraphs: [
              "Votre poids devrait être stable depuis plusieurs mois, à un niveau que vous pouvez maintenir. Une perte de poids en cours ou prévue rend le résultat imprévisible ; une prise de poids ultérieure peut se reporter sur d'autres zones.",
              "Une grossesse future peut modifier le résultat. Évitez de décider dans une période de bouleversement ou juste avant un événement important. La chirurgie esthétique est réservée aux adultes.",
            ],
          },
          {
            heading: "La qualité de la peau et vos attentes",
            paragraphs: [
              "La liposuccion retire de la graisse mais pas de peau. Une peau élastique se rétracte en général bien ; une peau relâchée, marquée de vergetures ou après une forte perte de poids risque de paraître plus flasque. Le chirurgien doit vous dire honnêtement si une autre intervention serait plus adaptée.",
              "Elle ne traite pas la cellulite et n'améliore pas la santé générale comme le ferait une perte de poids. Demandez ce qui peut et ne peut pas changer dans votre cas.",
            ],
          },
          {
            heading: "Votre motivation et la dysmorphophobie",
            paragraphs: [
              "Demandez-vous ce qui vous gêne précisément, depuis combien de temps, et ce que vous attendez de l'intervention. Une décision prise sous la pression d'un proche ou des réseaux sociaux expose davantage à la déception.",
              "Certaines personnes souffrent d'une préoccupation envahissante pour un défaut que les autres remarquent à peine : c'est le trouble dysmorphique corporel, ou dysmorphophobie, qui touche souvent la silhouette. La chirurgie ne le soulage pas et peut aggraver la détresse. Si vous vous reconnaissez dans cette description, parlez-en à votre médecin traitant ; des traitements efficaces existent. En cas d'idées suicidaires, le 3114 répond jour et nuit.",
            ],
          },
          {
            heading: "Questions à poser en consultation",
            paragraphs: [],
            bullets: [
              "Êtes-vous qualifié en chirurgie plastique, reconstructrice et esthétique ? (vérifiable sur l'Annuaire santé)",
              "Quel volume prévoyez-vous d'aspirer, sur quelles zones, et pourquoi pas davantage en une séance ?",
              "Quelle technique utiliserez-vous et quels en sont les risques propres ?",
              "Ma peau se rétractera-t-elle, ou une autre intervention serait-elle plus adaptée ?",
              "Quelle anesthésie, dans quel établissement, et serai-je hospitalisé une nuit ?",
              "Comment prévenez-vous la thrombose, et qui joindre la nuit ou le week-end en cas de problème ?",
              "Que comprend le devis, et que se passe-t-il en cas de retouche ou de complication ?",
            ],
          },
          {
            heading: "Le délai de réflexion et le second avis",
            paragraphs: [
              "Le Code de la santé publique impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention, et aucun paiement autre que la consultation ne peut être exigé avant. Ce délai est un minimum : rien ne vous oblige à décider à son terme. Demander un second avis est toujours légitime.",
            ],
          },
        ],
        sources: [LEGIFRANCE_L6322_2, HAS, ANNUAIRE_SANTE, SOFCPRE, { label: "3114 — numéro national de prévention du suicide", url: "https://3114.fr" }],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Alternatives ──
      {
        interventionId: "liposuction",
        kind: "alternatives",
        locale: "fr",
        title: "Alternatives à la liposuccion",
        summary:
          "Hygiène de vie, cryolipolyse, injections lipolytiques, abdominoplastie ou ne rien faire : alternatives à la liposuccion, limites et risques.",
        answer:
          "Selon la situation, les alternatives sont l'alimentation et l'activité physique, les techniques non chirurgicales de réduction de la graisse (cryolipolyse, radiofréquence, ultrasons focalisés), les injections lipolytiques pour de petites zones, une intervention retirant la peau si le relâchement domine, ou ne rien faire. Les techniques non chirurgicales ont un effet plus modeste et leurs propres risques.",
        sections: [
          {
            heading: "Hygiène de vie",
            paragraphs: [
              "Une alimentation équilibrée et une activité physique régulière réduisent la masse grasse globale et ont des bénéfices pour la santé que la liposuccion n'a pas. Elles ne permettent pas de cibler une zone précise, et certains amas localisés y résistent. En cas de surpoids important, un accompagnement médical est plus adapté qu'une chirurgie de la silhouette.",
            ],
          },
          {
            heading: "Cryolipolyse et techniques non chirurgicales",
            paragraphs: [
              "La cryolipolyse refroidit la graisse pour la détruire partiellement ; la radiofréquence, les ultrasons focalisés ou le laser externe agissent par la chaleur. L'effet est plus modeste qu'une liposuccion, apparaît en quelques semaines à quelques mois et nécessite parfois plusieurs séances.",
              "Ces techniques ne sont pas sans effets indésirables : douleurs, engourdissement, brûlures, et pour la cryolipolyse une augmentation paradoxale et durable du volume graisseux, rare, qui peut nécessiter une chirurgie. Elles doivent être réalisées sous responsabilité médicale.",
            ],
          },
          {
            heading: "Injections lipolytiques",
            paragraphs: [
              "Certains produits injectables détruisent la graisse sur de très petites zones, comme le double menton. Plusieurs séances sont nécessaires et l'efficacité est limitée. Les risques comprennent douleur, œdème, induration et, rarement, une atteinte d'un nerf. Seuls des produits autorisés, injectés par un médecin, doivent être utilisés.",
            ],
          },
          {
            heading: "Chirurgies retirant la peau",
            paragraphs: [
              "Si le relâchement cutané domine, une abdominoplastie, un lifting des cuisses ou des bras retire l'excédent de peau, au prix de cicatrices plus longues et d'une convalescence plus lourde. Une liposuccion peut leur être associée.",
            ],
          },
          {
            heading: "Ne rien faire",
            paragraphs: [
              "Choisir de ne pas intervenir est une option légitime. Une gêne liée à la silhouette peut évoluer avec le temps, et la réflexion peut être reprise plus tard sans conséquence médicale.",
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
        id: "cannula",
        locale: "fr",
        slug: "canule",
        term: "Canule",
        aliases: ["canules", "microcanule", "microcanules", "canule d'aspiration", "canules d'aspiration"],
        definition:
          "Une canule est un fin tube métallique creux, à bout mousse, introduit sous la peau par une petite incision. En liposuccion, elle sert à infiltrer la solution tumescente puis à aspirer la graisse.",
        detail: [
          "Les canules existent en plusieurs diamètres et longueurs. Les plus fines (microcanules) permettent un travail plus précis, notamment près de la surface ou sur de petites zones ; les plus larges retirent davantage de graisse mais exposent plus aux irrégularités.",
          "La canule est déplacée en éventail dans la graisse, reliée à un système d'aspiration. Certaines sont vibrantes ou associées à des ultrasons ou à un laser pour faciliter le décollement de la graisse.",
          "Un passage trop superficiel peut créer des creux ou un aspect ondulé. Exceptionnellement, une canule peut traverser la paroi de l'abdomen ou du thorax et léser un organe, ce qui justifie un examen soigneux avant l'intervention.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "compression-garment",
        locale: "fr",
        slug: "gaine-de-compression",
        term: "Gaine de compression",
        aliases: [
          "gaines de compression",
          "gaine de contention",
          "gaines de contention",
          "vêtement de compression",
          "vêtements de compression",
          "vetement de compression",
          "panty de contention",
        ],
        definition:
          "Une gaine de compression est un vêtement élastique ajusté, porté après certaines chirurgies du corps. Elle exerce une pression régulière qui limite l'œdème et aide la peau à se réappliquer.",
        detail: [
          "Elle est prescrite notamment après une liposuccion, une abdominoplastie ou un lifting des cuisses. Elle est en général portée jour et nuit les premières semaines, puis parfois seulement le jour, pour une durée totale de quelques semaines fixée par le chirurgien.",
          "La gaine doit être à la bonne taille : trop lâche, elle est peu utile ; trop serrée, elle peut gêner la circulation ou marquer la peau. Il est utile d'en prévoir deux pour pouvoir les laver.",
          "Des fourmillements, une douleur, une peau froide ou des marques profondes sous la gaine doivent être signalés au chirurgien. La gaine ne remplace pas les bas de contention éventuellement prescrits pour prévenir la thrombose.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },

  // ════════════════════════════════════ UNITED KINGDOM ════════════════════════════════════
  "en-gb": {
    intervention: {
      id: "liposuction",
      locale: "en-gb",
      slug: "liposuction",
      category: "body",
      title: "Liposuction",
      summary:
        "Liposuction removes stubborn areas of fat. It is not a weight-loss treatment: techniques, risks, compression garments and recovery explained.",
      description: [
        "Liposuction, sometimes called lipo or liposculpture, removes localised areas of fat using thin metal tubes (cannulas) passed under the skin through small cuts. It is used for fat that does not respond to diet and exercise, commonly on the tummy, hips, outer and inner thighs, knees, upper arms, back and under the chin.",
        "Most surgeons use the tumescent technique: the area is first filled with a large volume of fluid containing local anaesthetic and adrenaline, which reduces bleeding and discomfort. Some variants use a vibrating cannula (power-assisted), ultrasound or laser energy to loosen the fat. These need the same precautions and carry their own risks, such as burns.",
        "The cuts are usually a few millimetres long and placed in natural creases where possible. They tend to leave small scars that fade, but they can remain visible or become darker or lighter than the surrounding skin.",
        "Liposuction is not a weight-loss treatment or a treatment for obesity. The amount of fat that can be removed safely in one session is limited, because the risks rise considerably with larger volumes. It does not treat cellulite, tighten loose skin or remove stretch marks; if your skin is not elastic, it may look looser afterwards.",
        "Fat cells that are removed do not grow back, but the remaining ones can get bigger if you gain weight, and the weight may go to other areas. The final result takes several months to appear as swelling settles and the skin contracts, and it lasts as long as your weight stays stable.",
      ],
      indications: [
        "Localised, disproportionate fat that has not responded to diet and exercise, in someone close to their usual weight.",
        "Weight stable for several months.",
        "Good skin quality, with enough elasticity to contract after the fat is removed.",
        "A specific, long-standing concern that is your own decision.",
        "Some medical conditions, such as lipomas or lipodystrophy, assessed by a specialist.",
        "As part of another operation, such as a tummy tuck, breast reduction or male breast reduction.",
      ],
      contraindications: [
        "Expecting significant weight loss, or obesity that is not yet stable: liposuction does not treat excess weight.",
        "Unrealistic expectations or a request driven by pressure from someone else.",
        "Excessive concern about a minor or barely visible feature, which should be discussed with the surgeon.",
        "Very loose skin, for which surgery that removes skin is usually more suitable.",
        "A history of blood clots that has not been assessed, or a bleeding disorder.",
        "Heart or lung disease, diabetes or other long-term conditions that are not well controlled.",
        "Smoking or nicotine use, which increase the risk of wound problems and blood clots: stopping is advised.",
        "Pregnancy or breastfeeding.",
      ],
      risks: [
        {
          name: "Bruising, swelling and soreness",
          detail:
            "Common and expected: widespread bruising, swelling and an ache similar to severe muscle stiffness for several weeks. Swelling can last several months, especially in the legs.",
        },
        {
          name: "Changes in sensation",
          detail:
            "Numbness or increased sensitivity of the treated skin, usually temporary over weeks to months.",
        },
        {
          name: "Uneven contour and asymmetry",
          detail:
            "Dents, lumps, a rippled look or differences between sides, more likely if fat is removed too close to the surface or in large amounts. A revision can be considered once healing has settled, usually after at least six months, but may not fully correct the problem.",
        },
        {
          name: "Loose skin",
          detail: "If the skin has poor elasticity, it may not contract and can look looser after the fat is removed.",
        },
        {
          name: "Seroma and haematoma",
          detail:
            "Collections of fluid or blood under the skin are uncommon; they may need draining with a needle and occasionally further surgery.",
        },
        {
          name: "Infection",
          detail:
            "Rare and usually treated with antibiotics. A severe, rapidly spreading infection is very rare and needs urgent treatment.",
        },
        {
          name: "Burns and skin damage",
          detail:
            "Possible with ultrasound- or laser-assisted techniques, or from friction at the entry points; they can leave a scar or a patch of discoloured skin.",
        },
        {
          name: "Deep vein thrombosis and pulmonary embolism",
          detail:
            "Rare but serious. The risk rises with longer operations, large volumes, combined procedures and personal risk factors. It is reduced by moving early, compression stockings and, in some cases, blood-thinning injections.",
        },
        {
          name: "Fat embolism",
          detail:
            "Very rare but potentially fatal: particles of fat enter the bloodstream and reach the lungs or brain. Signs include breathlessness, confusion or a pinpoint red rash, usually within hours to days of surgery.",
        },
        {
          name: "Perforation of an internal organ",
          detail:
            "Very rare but serious: a cannula passes through the wall of the abdomen or chest and injures the bowel or lung. The risk is higher with a hernia or previous abdominal scars, which is why a careful examination before surgery matters.",
        },
        {
          name: "Problems linked to large volumes and the infiltration fluid",
          detail:
            "Removing large amounts can cause blood loss and imbalances in the body's fluids. Too much local anaesthetic in the tumescent fluid can cause toxicity, with symptoms such as dizziness, a metallic taste or an irregular heartbeat.",
        },
        {
          name: "Anaesthetic risks",
          detail: "Discussed with the anaesthetist at your pre-operative assessment.",
        },
      ],
      procedure: {
        anaesthesia:
          "Usually general anaesthesia; local (tumescent) anaesthesia, sometimes with sedation, for smaller areas.",
        duration: "Around 1 to 3 hours, depending on the number of areas and the volume removed.",
        hospitalStay:
          "Usually a day case; an overnight stay may be advised when a larger volume is removed or several areas are treated.",
      },
      recovery: [
        "Day 1: blood-stained fluid leaks from the entry points for 24 to 48 hours; you feel stiff and sore and are encouraged to walk the same evening or next day.",
        "A compression garment is usually worn day and night for 3 to 6 weeks, as your surgeon advises.",
        "Week 1: marked bruising and swelling; simple painkillers, dressings on the entry points, and showering usually allowed after 24 to 48 hours.",
        "Return to desk-based work often after 1 to 2 weeks; later for physical jobs or if large areas were treated.",
        "Weeks 3 to 4: bruising has usually faded; gradually build up brisk walking and gentle activity.",
        "Strenuous exercise after 4 to 6 weeks, once your surgeon agrees; protect the scars from the sun for several months.",
        "Massage or lymphatic drainage may be suggested; firm or uneven areas under the skin are common for the first few months.",
        "Final result usually seen between 6 and 12 months, once the swelling has gone and the skin has contracted.",
      ],
      alternatives: [
        "Doing nothing: a legitimate choice, which you can revisit later.",
        "A balanced diet and regular exercise: these reduce overall body fat but cannot target one area.",
        "Fat freezing (cryolipolysis) and other non-surgical treatments (radiofrequency, focused ultrasound): a more modest effect, sometimes several sessions, and their own risks, including burns, pain and, rarely after fat freezing, a paradoxical increase in fat.",
        "Fat-dissolving injections, for example under the chin: only for small areas, limited effect, with risks such as pain, swelling and rarely nerve injury; they should be given by a qualified prescriber using a licensed product.",
        "Surgery that removes skin (tummy tuck, thigh or arm lift) when loose skin is the main concern.",
      ],
      faq: [
        {
          question: "Will liposuction help me lose weight?",
          answer:
            "No. It removes localised fat and changes your shape, but your weight changes very little. It is not a substitute for weight loss and does not treat obesity.",
        },
        {
          question: "Does it hurt?",
          answer:
            "Afterwards most people describe an ache like severe muscle stiffness, with tenderness for one to two weeks. This is usually managed with simple painkillers. Pain that gets worse rather than better should be reported to your surgeon.",
        },
        {
          question: "How much fat can be removed?",
          answer:
            "The amount is limited and is set by your surgeon according to your weight, health and the areas treated. Professional bodies advise against removing large volumes in one session because the risks, including fluid imbalance, blood clots and fat embolism, rise with the volume. An overnight stay may be recommended after a larger procedure.",
        },
        {
          question: "Are the results permanent?",
          answer:
            "Removed fat cells do not grow back, but the remaining ones can enlarge if you gain weight, and your skin continues to age. Results are more likely to last if your weight stays stable.",
        },
        {
          question: "Will it get rid of cellulite or loose skin?",
          answer:
            "No. Liposuction does not treat cellulite or stretch marks and does not tighten loose skin. If your skin lacks elasticity it may look looser afterwards, and a different operation may be more suitable.",
        },
        {
          question: "How long do I need to wear a compression garment?",
          answer:
            "Usually 3 to 6 weeks, day and night at first. It helps control swelling and supports the skin as it settles. Your surgeon will tell you exactly how long, depending on the areas treated.",
        },
        {
          question: "Can I have liposuction before having children?",
          answer:
            "You can, but pregnancy and the weight changes that come with it may alter the result. Many surgeons suggest waiting until your family is complete. Surgery is not carried out during pregnancy or breastfeeding.",
        },
        {
          question: "Is liposuction available on the NHS?",
          answer:
            "Not for cosmetic reasons. The NHS rarely funds liposuction; in specific medical circumstances, a referral may be considered, sometimes through an individual funding request, according to local criteria.",
        },
        {
          question: "How long should I wait before deciding?",
          answer:
            "There is no legal waiting period in the UK, but professional guidance recommends at least two weeks between your consultation and agreeing to surgery. Use this time to think, ask questions and seek a second opinion if you wish.",
        },
        {
          question: "Who should carry out my liposuction?",
          answer:
            "A surgeon on the GMC Specialist Register in plastic surgery, working in a hospital or clinic registered with the Care Quality Commission in England (or the equivalent regulator in Scotland, Wales or Northern Ireland). You can check the register on the GMC website. Liposuction is surgery and should take place in a properly equipped operating theatre.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risks ──
      {
        interventionId: "liposuction",
        kind: "risks",
        locale: "en-gb",
        title: "Liposuction risks",
        summary:
          "Common side effects, uneven contour, blood clots, fat embolism and organ perforation: liposuction risks and when to seek urgent help.",
        answer:
          "Liposuction is real surgery. Bruising, swelling and numbness are expected; uneven contour, seroma or infection are less common. Rare but serious complications include blood clots, fat embolism and perforation of an internal organ, and the risk rises with larger volumes and combined procedures.",
        sections: [
          {
            heading: "Common and expected effects",
            paragraphs: ["These are normal after liposuction and settle gradually over weeks."],
            bullets: [
              "Bruising, sometimes extensive, fading over two to four weeks.",
              "Swelling, which can last several months, particularly around the ankles after leg liposuction.",
              "Stiffness and tenderness for one to two weeks.",
              "Blood-stained fluid leaking from the entry points for 24 to 48 hours.",
              "Numbness or increased sensitivity of the skin, usually temporary.",
              "Firm areas under the skin for the first few months.",
            ],
          },
          {
            heading: "Less common complications",
            paragraphs: [
              "How likely these are depends on the technique, the volume removed, your skin quality and your general health.",
            ],
            bullets: [
              "Dents, lumps or rippling of the skin, and differences between the two sides.",
              "Skin that does not contract and looks looser, especially if it had poor elasticity.",
              "Seroma (fluid collection) or haematoma, sometimes needing drainage.",
              "Infection, usually treated with antibiotics.",
              "Skin burns with ultrasound- or laser-assisted techniques.",
              "Entry-point scars that become darker, lighter or raised.",
            ],
          },
          {
            heading: "Rare but serious complications",
            paragraphs: [
              "Deep vein thrombosis, a clot in a leg vein, can travel to the lungs (pulmonary embolism). Fat embolism, which is very rare, happens when particles of fat travel through the bloodstream to the lungs or brain. Very rarely, a cannula can pass through the wall of the abdomen or chest and damage the bowel or a lung.",
              "Other serious problems are linked to large volumes: blood loss, fluid imbalance and toxicity from the local anaesthetic in the tumescent fluid. For these reasons professional bodies advise limiting the amount removed in one session and monitoring patients for longer after larger procedures.",
            ],
          },
          {
            heading: "When to seek help urgently",
            paragraphs: [
              "Contact your surgeon's team promptly if something does not feel right; if you cannot reach them, call NHS 111. Call 999 if you have chest pain, sudden breathlessness, collapse, confusion or severe abdominal pain.",
            ],
            bullets: [
              "Breathlessness, chest pain, coughing up blood or a racing heartbeat.",
              "Confusion, unusual drowsiness or a pinpoint red rash on the chest or neck.",
              "Severe or worsening tummy pain, a rigid abdomen, vomiting or fever.",
              "A painful, warm or swollen calf on one side.",
              "Fever, spreading redness, darkening skin or pain out of proportion.",
              "A treated area that rapidly becomes swollen and tense.",
            ],
          },
          {
            heading: "What increases the risk",
            paragraphs: ["Some factors can be changed and should be discussed at your consultation."],
            bullets: [
              "Large volumes, many areas treated at once, or liposuction combined with another operation.",
              "Smoking, a high body mass index, the combined contraceptive pill or hormone therapy (blood clot risk).",
              "A personal or family history of blood clots.",
              "A hernia or previous abdominal surgery, which increase the risk of perforation.",
              "Medicines or supplements that increase bleeding, such as aspirin, anti-inflammatory painkillers or anticoagulants.",
            ],
          },
          {
            heading: "Revision surgery",
            paragraphs: [
              "Uneven areas may be improved with further liposuction or fat transfer. This is only considered once healing has settled, usually at least six months later, and may not fully correct the problem. Ask before you commit what would happen, and what you would pay, if a revision were needed.",
            ],
          },
        ],
        sources: [NHS, BAAPS, BAPRAS, RCS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Cost ──
      {
        interventionId: "liposuction",
        kind: "cost",
        locale: "en-gb",
        title: "Liposuction cost",
        summary:
          "What a liposuction quote should include, what affects the price (areas, volume, anaesthesia), NHS funding rules and the cost of complications.",
        answer:
          "The cost of liposuction depends mainly on the number of areas, the volume to be removed, the type of anaesthesia and the hospital. We do not give price ranges: only a written, itemised quote after a consultation with the operating surgeon tells you the actual cost. The NHS does not fund liposuction for cosmetic reasons.",
        sections: [
          {
            heading: "What a quote should include",
            paragraphs: [
              "Ask for a written quote that lists every item, or states clearly what is excluded.",
            ],
            bullets: [
              "The surgeon's fee, with the areas to be treated.",
              "The anaesthetist's fee, which may be billed separately.",
              "Hospital or clinic fees: theatre time, day case or overnight stay.",
              "Compression garments, stockings, dressings and medicines.",
              "Any pre-operative tests.",
              "Follow-up appointments and what happens if a revision or complication arises.",
            ],
          },
          {
            heading: "What affects the price",
            paragraphs: [
              "The number and size of the areas, the planned volume, the length of the operation, the type of anaesthesia, the technique (power-, ultrasound- or laser-assisted) and whether you stay overnight all affect the quote. Combining liposuction with another procedure changes the total cost.",
              "Price alone does not tell you about quality. A technique marketed as newer is not necessarily more suitable for you.",
            ],
          },
          {
            heading: "NHS funding",
            paragraphs: [
              "The NHS does not usually fund cosmetic surgery, and liposuction is generally treated as a procedure of limited clinical value. In specific medical circumstances, such as certain lipomas or lipodystrophy, a referral may be considered, sometimes through an individual funding request (IFR), according to local criteria. Your GP can advise.",
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
              "Draining a seroma, revising an uneven area or treating a complication can lead to further costs, more time off work and extra travel. Ask what the quote covers, and whether insurance for complications is included or available. If you have surgery abroad, follow-up care at home may be harder to arrange.",
            ],
          },
        ],
        sources: [NHS, GMC, CQC, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Recovery ──
      {
        interventionId: "liposuction",
        kind: "recovery",
        locale: "en-gb",
        title: "Recovery after liposuction",
        summary:
          "Recovery after liposuction: the first days, compression garments, returning to work and exercise, massage, final result and warning signs.",
        answer:
          "The first days bring stiffness, bruising and leaking from the entry points. A compression garment is usually worn for 3 to 6 weeks, and many people return to desk-based work after 1 to 2 weeks. The result settles between 6 and 12 months. Always follow your own surgeon's instructions.",
        sections: [
          {
            heading: "The first few days",
            paragraphs: [
              "Most people go home the same day. Fluid from the tumescent infiltration leaks from the entry points for 24 to 48 hours; this is normal, and absorbent pads are provided. The treated areas are swollen and tender.",
            ],
            bullets: [
              "Get up and walk as soon as you can to reduce the risk of blood clots.",
              "Drink plenty of fluids and take the painkillers prescribed.",
              "Wear your compression garment and any stockings you are given.",
              "Arrange for someone to take you home and stay with you the first night.",
            ],
          },
          {
            heading: "Your compression garment",
            paragraphs: [
              "The garment is usually worn day and night for the first weeks, then sometimes during the day only, for 3 to 6 weeks in total. It helps control swelling and bruising and supports the skin. It should fit firmly but not painfully: report tingling, pain or deep marks to your surgeon's team.",
            ],
          },
          {
            heading: "Returning to work and activity",
            paragraphs: [],
            bullets: [
              "Desk-based work: often after 1 to 2 weeks.",
              "Physical work: later, depending on the areas treated and your surgeon's advice.",
              "Driving: once you can move freely and are not taking sedating painkillers; check your insurer's conditions.",
              "Daily walking from the first days; gentle activity from around weeks 3 to 4.",
              "Strenuous exercise and swimming: usually after 4 to 6 weeks, once the entry points have healed.",
              "Sun: protect bruised areas and scars for several months.",
            ],
          },
          {
            heading: "The following months",
            paragraphs: [
              "Swelling goes down slowly and the skin gradually contracts. Firm areas, small lumps or altered sensation are common for the first few months. Your surgeon may suggest massage or lymphatic drainage.",
              "The final result is usually seen between 6 and 12 months. Revision is not considered before then.",
            ],
          },
          {
            heading: "Warning signs",
            paragraphs: [
              "Contact your surgeon's team if you develop a fever, spreading redness, rapid swelling of a treated area or a painful calf; out of hours, call NHS 111. Call 999 for chest pain, breathlessness, confusion or severe abdominal pain.",
            ],
          },
        ],
        sources: [NHS, BAAPS, BAPRAS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Before you decide ──
      {
        interventionId: "liposuction",
        kind: "decision",
        locale: "en-gb",
        title: "Liposuction: before you decide",
        summary:
          "Deciding on liposuction: stable weight, skin quality, motivation, body dysmorphic disorder, questions to ask and the two-week cooling-off period.",
        answer:
          "Liposuction tends to suit adults close to their usual weight, stable for several months, with localised fat and good skin quality. It is not a weight-loss treatment. There is no legal waiting period in the UK, but professional guidance recommends at least two weeks between consultation and agreeing to surgery, and a second opinion is always reasonable.",
        sections: [
          {
            heading: "Is it the right time?",
            paragraphs: [
              "Your weight should have been stable for several months, at a level you can maintain. If you are still losing weight the result is unpredictable, and weight gained later may go to other areas.",
              "A future pregnancy can change the result. Avoid deciding during a period of upheaval or just before an important event. Cosmetic surgery is for adults: reputable surgeons in the UK do not perform cosmetic liposuction on under-18s.",
            ],
          },
          {
            heading: "Skin quality and expectations",
            paragraphs: [
              "Liposuction removes fat, not skin. Elastic skin usually contracts well; loose skin, skin with stretch marks or skin after major weight loss may look looser. Your surgeon should tell you honestly if another operation would suit you more.",
              "It does not treat cellulite and does not bring the health benefits of weight loss. Ask what can and cannot change in your case.",
            ],
          },
          {
            heading: "Your motivation and body dysmorphic disorder",
            paragraphs: [
              "Think about what exactly bothers you, for how long, and what you expect to change. A decision made because of pressure from others or social media is more likely to lead to disappointment.",
              "Body dysmorphic disorder (BDD) is a mental health condition in which a person spends a lot of time worrying about flaws in their appearance that others barely notice; body shape is often involved. Surgery does not usually relieve BDD and can make distress worse. If this sounds familiar, speak to your GP; effective treatments are available. If you are struggling to cope, Samaritans can be reached any time on 116 123.",
            ],
          },
          {
            heading: "Questions to ask your surgeon",
            paragraphs: [],
            bullets: [
              "Are you on the GMC Specialist Register in plastic surgery? Do you hold the Royal College of Surgeons' cosmetic surgery certification?",
              "How much fat do you plan to remove, from which areas, and why not more in one session?",
              "Which technique will you use, and what are its specific risks?",
              "Will my skin contract, or would another operation suit me more?",
              "What anaesthetic will I have, where, and will I stay overnight? Is the hospital registered with the CQC?",
              "How do you reduce the risk of blood clots, and who do I contact at night or at weekends?",
              "What does the quote include, and what happens if I need a revision or have a complication?",
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
        interventionId: "liposuction",
        kind: "alternatives",
        locale: "en-gb",
        title: "Alternatives to liposuction",
        summary:
          "Lifestyle changes, fat freezing, fat-dissolving injections, a tummy tuck or doing nothing: alternatives to liposuction with their limits and risks.",
        answer:
          "Depending on your situation, alternatives include diet and exercise, non-surgical fat reduction (fat freezing, radiofrequency, focused ultrasound), fat-dissolving injections for small areas, surgery that removes skin if looseness is the main issue, or no treatment. Non-surgical options have a more modest effect and their own risks.",
        sections: [
          {
            heading: "Lifestyle changes",
            paragraphs: [
              "A balanced diet and regular exercise reduce overall body fat and bring health benefits that liposuction does not. They cannot target one area, and some localised fat persists. If you are carrying significant excess weight, NHS weight management support is more appropriate than body-contouring surgery.",
            ],
          },
          {
            heading: "Fat freezing and other non-surgical treatments",
            paragraphs: [
              "Fat freezing (cryolipolysis) cools fat to destroy part of it; radiofrequency, focused ultrasound and external laser use heat. The effect is more modest than liposuction, appears over weeks to months and may need several sessions.",
              "Side effects include pain, numbness and burns. Rarely, fat freezing causes paradoxical adipose hyperplasia, a firm and lasting increase in fat in the treated area that may need surgery. Many of these treatments are offered outside hospitals with little regulation, so check who is treating you and what training they have.",
            ],
          },
          {
            heading: "Fat-dissolving injections",
            paragraphs: [
              "Some injectable products break down fat in very small areas, such as under the chin. Several sessions are needed and the effect is limited. Risks include pain, swelling, firmness and, rarely, nerve injury. They should only be given by a qualified prescriber using a licensed product.",
            ],
          },
          {
            heading: "Surgery that removes skin",
            paragraphs: [
              "If loose skin is the main concern, a tummy tuck or a thigh or arm lift removes excess skin, at the cost of longer scars and a longer recovery. Liposuction may be combined with these operations.",
            ],
          },
          {
            heading: "Doing nothing",
            paragraphs: [
              "Choosing not to have treatment is a legitimate decision. How you feel about your shape may change over time, and you can revisit the question later without any medical consequence.",
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
        id: "cannula",
        locale: "en-gb",
        slug: "cannula",
        term: "Cannula",
        aliases: ["cannulas", "cannulae", "microcannula", "microcannulas", "liposuction cannula"],
        definition:
          "A cannula is a thin, hollow metal tube with a blunt tip that is passed under the skin through a small cut. In liposuction it is used to inject the tumescent fluid and then to suction out fat.",
        detail: [
          "Cannulas come in different widths and lengths. Finer ones (microcannulas) allow more precise work near the surface or in small areas; wider ones remove more fat but make uneven results more likely.",
          "The surgeon moves the cannula back and forth in a fan pattern through the fat, connected to a suction device. Some cannulas vibrate or deliver ultrasound or laser energy to help loosen the fat.",
          "Working too close to the surface can leave dents or rippling. Very rarely, a cannula can pass through the wall of the abdomen or chest and injure an internal organ, which is why a careful examination before surgery matters. In general medicine the word also refers to a small plastic tube placed in a vein.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "compression-garment",
        locale: "en-gb",
        slug: "compression-garment",
        term: "Compression garment",
        aliases: ["compression garments", "support garment", "support garments", "compression wear", "post-surgical garment"],
        definition:
          "A compression garment is a close-fitting elastic garment worn after some body operations. It applies even pressure to reduce swelling and help the skin settle onto the underlying tissues.",
        detail: [
          "It is commonly prescribed after liposuction, a tummy tuck or a thigh lift. It is usually worn day and night for the first weeks, then sometimes during the day only, for a total of several weeks set by your surgeon.",
          "The fit matters: too loose and it does little; too tight and it can restrict circulation or mark the skin. Having two allows one to be washed.",
          "Tell your surgeon's team about tingling, pain, cold skin or deep marks under the garment. It does not replace any compression stockings you are given to reduce the risk of blood clots.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },
};
