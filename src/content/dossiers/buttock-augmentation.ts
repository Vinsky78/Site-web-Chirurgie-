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
  label: "Agence nationale de sécurité du médicament et des produits de santé (ANSM) : implants, produits de comblement et mises en garde",
  url: "https://ansm.sante.fr",
};

// ─── Sources Royaume-Uni ───
const NHS: Source = { label: "NHS: buttock augmentation, fillers and cosmetic procedures", url: "https://www.nhs.uk" };
const GMC: Source = {
  label: "General Medical Council: medical register and guidance for doctors who perform cosmetic interventions",
  url: "https://www.gmc-uk.org",
};
const CQC: Source = { label: "Care Quality Commission: find a registered hospital or clinic", url: "https://www.cqc.org.uk" };
const BAAPS: Source = {
  label: "British Association of Aesthetic Plastic Surgeons (BAAPS): safety guidance on the Brazilian butt lift",
  url: "https://baaps.org.uk",
};
const BAPRAS: Source = {
  label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)",
  url: "https://www.bapras.org.uk",
};
const RCS: Source = {
  label: "Royal College of Surgeons of England: professional standards for cosmetic surgery",
  url: "https://www.rcseng.ac.uk",
};
const MHRA: Source = {
  label: "Medicines and Healthcare products Regulatory Agency (MHRA): medical devices, implants and fillers",
  url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
};

const REVIEW = { status: "draft" } as const;
const UPDATED_AT = "2026-10-13";

/** Augmentation des fesses (lipofilling fessier « BBL », implants) : fiche, sous-pages et lexique (fr, en-gb). Brouillon à relire par le comité médical. */
export const dossier: Dossier = {
  // ════════════════════════════════════ FRANCE ════════════════════════════════════
  fr: {
    intervention: {
      id: "buttock-augmentation",
      locale: "fr",
      slug: "augmentation-des-fesses",
      category: "body",
      title: "Augmentation des fesses (lipofilling fessier, implants)",
      summary:
        "Lipofilling fessier (« BBL ») ou implants : techniques, risque rare mais grave d'embolie graisseuse, injections à proscrire, convalescence.",
      description: [
        "L'augmentation des fesses (ou glutéoplastie d'augmentation) vise à augmenter le volume ou à modifier le galbe des fesses. Deux techniques chirurgicales principales existent : le lipofilling fessier, souvent appelé « BBL » (de l'anglais Brazilian butt lift), qui utilise la graisse de la personne, et la pose d'implants fessiers en silicone.",
        "Le lipofilling fessier se déroule en deux temps pendant la même intervention : une liposuccion prélève de la graisse sur d'autres zones (ventre, flancs, dos, cuisses), puis cette graisse, préparée, est réinjectée dans les fesses avec des canules. Le galbe obtenu associe donc l'affinement des zones prélevées et l'ajout de volume. Une partie de la graisse injectée ne survit pas et se résorbe dans les premiers mois : le volume final est inférieur au volume observé juste après l'intervention.",
        "Le lipofilling fessier comporte un risque rare mais potentiellement mortel : l'embolie graisseuse, lorsque de la graisse pénètre dans les grosses veines situées dans et sous le muscle fessier, puis migre vers les poumons. Ce risque est principalement lié aux injections réalisées dans le muscle ou sous celui-ci. Les sociétés savantes de chirurgie plastique, dont la BAAPS britannique, ont émis des alertes et recommandent de n'injecter la graisse que dans le plan sous-cutané, au-dessus du muscle, sans jamais pénétrer dans le muscle ; l'échographie peropératoire est de plus en plus utilisée pour contrôler la position de la canule.",
        "Les implants fessiers sont des prothèses en silicone souple mais solide (non remplies de gel liquide comme les implants mammaires), introduites le plus souvent par une incision dans le sillon entre les fesses et placées dans le muscle ou sous son enveloppe (fascia). Ils conviennent surtout aux personnes minces, qui n'ont pas assez de graisse à prélever. Ils exposent à des complications propres : désunion de la cicatrice, infection, déplacement, implant palpable ou visible, et réinterventions.",
        "Les injections de produits de comblement dans les fesses ne sont pas une alternative anodine. L'injection de silicone liquide est interdite et a provoqué des complications graves, parfois mortelles, notamment lorsqu'elle est réalisée par des personnes qui ne sont pas médecins, hors de tout cadre médical. En France, l'ANSM a émis des mises en garde contre l'injection d'acide hyaluronique en grande quantité pour augmenter le volume des fesses. Une augmentation des fesses est un acte chirurgical : elle doit être réalisée par un chirurgien qualifié, dans un établissement autorisé.",
      ],
      indications: [
        "Fesses jugées plates, peu projetées ou disproportionnées par rapport au reste de la silhouette, gêne exprimée par la personne elle-même et stable dans le temps.",
        "Asymétrie des fesses ou creux localisés (par exemple sur les côtés des hanches).",
        "Pour le lipofilling : réserve de graisse suffisante sur d'autres zones, poids stable depuis plusieurs mois.",
        "Pour les implants : silhouette mince, avec trop peu de graisse à prélever pour un lipofilling.",
        "Séquelles de traumatisme, de chirurgie ou certaines lipodystrophies (perte de graisse liée à une maladie ou à un traitement), à évaluer avec le chirurgien.",
        "Adulte en bonne santé, informé des risques propres à chaque technique.",
      ],
      contraindications: [
        "Attentes irréalistes, demande inspirée par des images retouchées ou motivée par la pression d'un tiers ou des réseaux sociaux.",
        "Préoccupation excessive pour un défaut minime ou invisible, qui doit être évoquée avec le chirurgien.",
        "Pour le lipofilling : graisse insuffisante à prélever, ou perte de poids importante prévue.",
        "Antécédents de thrombose veineuse ou d'embolie pulmonaire non évalués, troubles de la coagulation.",
        "Pathologies cardiaques, respiratoires, diabète ou autres maladies chroniques non équilibrées.",
        "Tabagisme actif, qui augmente le risque de complications de cicatrisation, d'infection et de thrombose : un arrêt est recommandé.",
        "Infection cutanée en cours dans la région des fesses ou du pli interfessier.",
        "Présence de produits injectés auparavant dans les fesses (silicone, produits de comblement), qui impose un bilan spécialisé avant toute nouvelle intervention.",
        "Grossesse ou allaitement en cours.",
      ],
      risks: [
        {
          name: "Ecchymoses, œdème et douleurs",
          detail:
            "Fréquents et attendus, sur les fesses comme sur les zones de prélèvement : bleus étendus, gonflement et douleurs pendant plusieurs semaines, gêne marquée en position assise.",
        },
        {
          name: "Résorption de la graisse et résultat insuffisant",
          detail:
            "Après un lipofilling, une partie de la graisse injectée ne survit pas et se résorbe dans les premiers mois, de façon variable d'une personne à l'autre et parfois de manière asymétrique. Le volume final peut être jugé insuffisant ; une nouvelle séance ne se discute qu'après stabilisation.",
        },
        {
          name: "Irrégularités, kystes huileux et nodules",
          detail:
            "Bosses, creux ou zones indurées, sur les fesses comme aux zones de liposuccion. De la graisse qui ne survit pas peut former des kystes huileux ou des nodules (cytostéatonécrose), parfois douloureux, qui peuvent nécessiter un traitement.",
        },
        {
          name: "Infection et désunion de cicatrice",
          detail:
            "Peu fréquentes après un lipofilling. Plus fréquentes avec les implants fessiers, dont l'incision se situe dans une zone de frottements, proche de l'anus : une désunion de la cicatrice ou une infection peut obliger à retirer l'implant.",
        },
        {
          name: "Sérome et hématome",
          detail:
            "Accumulation de liquide ou de sang, autour d'un implant ou aux zones de prélèvement ; peut nécessiter des ponctions, plus rarement une reprise chirurgicale.",
        },
        {
          name: "Complications propres aux implants",
          detail:
            "Déplacement ou rotation de l'implant, asymétrie, implant palpable ou visible, coque (durcissement de la cicatrice interne autour de l'implant), douleurs prolongées en position assise, plus rarement rupture. Ces complications peuvent conduire à une réintervention ou au retrait de l'implant.",
        },
        {
          name: "Atteinte nerveuse",
          detail:
            "Troubles de la sensibilité de la peau, le plus souvent transitoires. Une irritation ou une atteinte du nerf sciatique, qui passe sous le muscle fessier, est rare mais possible, notamment avec les implants ou des injections profondes.",
        },
        {
          name: "Thrombose veineuse et embolie pulmonaire",
          detail:
            "Rares mais graves. Le risque augmente avec la durée de l'intervention, la position sur le ventre, l'immobilité après l'opération et certains facteurs personnels ; il est prévenu par un lever précoce, des bas de contention et, selon le cas, un traitement anticoagulant.",
        },
        {
          name: "Embolie graisseuse",
          detail:
            "Rare mais potentiellement mortelle. Lors d'un lipofilling, de la graisse injectée dans ou sous le muscle peut pénétrer dans les grosses veines fessières et migrer brutalement vers les poumons, parfois pendant l'intervention. Une forme retardée, dans les heures ou les jours suivants, se manifeste par un essoufflement, une confusion ou de petites taches rouges sur la peau. Les sociétés savantes recommandent une injection uniquement sous-cutanée pour réduire ce risque.",
        },
        {
          name: "Complications liées à la liposuccion associée",
          detail:
            "Les risques propres à la liposuccion s'ajoutent : irrégularités et relâchement aux zones prélevées, déséquilibres liquidiens en cas de grand volume, exceptionnellement perforation d'un organe.",
        },
        {
          name: "Risques liés à l'anesthésie",
          detail: "À évaluer lors de la consultation d'anesthésie obligatoire.",
        },
      ],
      procedure: {
        anaesthesia: "Anesthésie générale le plus souvent.",
        duration:
          "Environ 2 à 4 heures pour un lipofilling fessier, selon le nombre de zones de prélèvement ; souvent 1 à 3 heures pour des implants.",
        hospitalStay:
          "En ambulatoire ou avec une nuit d'hospitalisation, selon la technique, le volume de liposuccion et l'état de santé.",
      },
      recovery: [
        "Jours 1 à 3 : douleurs et gonflement des fesses et des zones de prélèvement, écoulement par les incisions de liposuccion ; lever et marche dès le soir ou le lendemain pour limiter le risque de thrombose.",
        "Position assise directe sur les fesses à éviter en général 2 à 3 semaines, parfois davantage, selon les consignes : on s'assoit sur l'arrière des cuisses ou avec un coussin adapté, et on dort sur le ventre ou sur le côté.",
        "Gaine de compression sur les zones de liposuccion, portée en général plusieurs semaines ; elle ne doit pas comprimer fortement les fesses après un lipofilling.",
        "Semaines 1 à 2 : ecchymoses importantes ; reprise d'une activité de bureau souvent après 2 semaines si l'on peut éviter de rester assis longtemps, plus tard pour un travail physique.",
        "Semaines 3 à 6 : reprise progressive de la position assise prolongée et des trajets en voiture ; surveillance attentive de la cicatrice après des implants.",
        "Sport intensif après 6 semaines environ, plus tard pour les exercices qui sollicitent fortement les fessiers après des implants, avec l'accord du chirurgien.",
        "Après un lipofilling, le volume diminue pendant les premiers mois, le temps que la graisse non viable se résorbe : le résultat se stabilise entre 6 et 12 mois.",
        "Après des implants, le galbe s'assouplit progressivement ; le résultat est apprécié après plusieurs mois et un suivi de l'implant est nécessaire au long cours.",
      ],
      alternatives: [
        "Ne rien faire : une option légitime, à reconsidérer après un temps de réflexion.",
        "Renforcement musculaire ciblé des fessiers : effet modeste mais réel sur le galbe, sans les risques d'une chirurgie.",
        "Vêtements galbants ou rembourrages amovibles.",
        "Liposuccion seule des hanches, des flancs ou du bas du dos, qui peut accentuer la courbe des fesses sans y injecter de graisse.",
        "Choix entre lipofilling et implants selon la réserve de graisse, chacun ayant ses propres risques.",
        "À proscrire : injections de silicone liquide (interdites) ; injections de produits de comblement en grande quantité dans les fesses, qui font l'objet de mises en garde de l'ANSM ; toute injection réalisée par une personne qui n'est pas médecin.",
      ],
      faq: [
        {
          question: "Qu'est-ce que le « BBL » ?",
          answer:
            "« BBL » vient de l'anglais Brazilian butt lift. Ce n'est pas un lifting : il s'agit d'un lipofilling fessier, qui associe une liposuccion de zones comme le ventre ou les flancs et la réinjection de cette graisse dans les fesses. C'est un acte chirurgical, sous anesthésie générale le plus souvent, avec des risques propres.",
        },
        {
          question: "Le lipofilling fessier est-il dangereux ?",
          answer:
            "Comme toute chirurgie, il comporte des risques. Le plus grave est l'embolie graisseuse, rare mais potentiellement mortelle, principalement liée à l'injection de graisse dans ou sous le muscle fessier. Les sociétés savantes recommandent une injection uniquement dans le plan sous-cutané, au-dessus du muscle. Demandez au chirurgien comment il s'en assure, par exemple par un contrôle échographique.",
        },
        {
          question: "Lipofilling ou implants : comment choisir ?",
          answer:
            "Le lipofilling suppose d'avoir assez de graisse à prélever ; il affine aussi les zones de prélèvement, mais une partie du volume se résorbe. Les implants conviennent aux personnes minces ; ils donnent un volume prévisible mais exposent à des complications propres (désunion de cicatrice, infection, déplacement) et à des réinterventions. Le chirurgien vous explique ce qui est possible dans votre cas.",
        },
        {
          question: "Les injections d'acide hyaluronique dans les fesses sont-elles une alternative ?",
          answer:
            "Non, elles ne sont pas une alternative anodine. En France, l'ANSM a émis des mises en garde contre l'injection d'acide hyaluronique en grande quantité pour augmenter le volume des fesses. Les injections de silicone liquide sont interdites et ont causé des complications graves, parfois mortelles. N'acceptez jamais d'injection par une personne qui n'est pas médecin, ni en dehors d'un cadre médical.",
        },
        {
          question: "Combien de temps sans s'asseoir ?",
          answer:
            "En général 2 à 3 semaines sans s'asseoir directement sur les fesses, parfois davantage, pour ne pas comprimer la graisse greffée ou la cicatrice des implants. Un coussin placé sous l'arrière des cuisses peut être conseillé. La durée exacte dépend des consignes de votre chirurgien.",
        },
        {
          question: "Le résultat est-il définitif ?",
          answer:
            "La graisse qui a survécu au-delà de quelques mois se comporte comme la graisse du reste du corps : elle varie avec le poids. Les implants ne sont pas garantis à vie et peuvent nécessiter une réintervention. Le vieillissement de la peau continue dans tous les cas.",
        },
        {
          question: "Peut-on faire un lipofilling fessier à l'étranger ?",
          answer:
            "C'est possible, mais des complications graves et des décès ont été rapportés après des interventions réalisées à l'étranger, parfois à un rythme élevé et avec un suivi limité. Le voyage de retour, souvent en position assise prolongée, augmente le risque de thrombose. Vérifiez la qualification du chirurgien et prévoyez le suivi en France avant de vous engager.",
        },
        {
          question: "Est-ce remboursé par l'Assurance maladie ?",
          answer:
            "Non lorsqu'elle est réalisée à visée esthétique. Dans de rares situations de reconstruction (séquelles de traumatisme, malformation, certaines lipodystrophies), une prise en charge peut être discutée ; elle nécessite en général une demande d'accord préalable.",
        },
        {
          question: "Quel est le délai entre la consultation et l'intervention ?",
          answer:
            "En France, la loi impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention. Aucun paiement ne peut être exigé avant la fin de ce délai, en dehors des honoraires de consultation. Une consultation d'anesthésie est obligatoire.",
        },
        {
          question: "Quel chirurgien consulter ?",
          answer:
            "Un chirurgien qualifié en chirurgie plastique, reconstructrice et esthétique, opérant dans un établissement autorisé par l'ARS. Vous pouvez vérifier son inscription et sa qualification sur l'Annuaire santé. Une augmentation des fesses ne doit jamais être réalisée dans un salon, à domicile ou par une personne qui n'est pas médecin.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risques ──
      {
        interventionId: "buttock-augmentation",
        kind: "risks",
        locale: "fr",
        title: "Augmentation des fesses : les risques",
        summary:
          "Embolie graisseuse, thrombose, infection, complications des implants, injections illégales : les risques de l'augmentation des fesses.",
        answer:
          "Ecchymoses, douleurs et gêne en position assise sont attendues. Résorption de la graisse, irrégularités, infection ou complications des implants sont moins fréquentes. Le lipofilling fessier expose à un risque rare mais potentiellement mortel d'embolie graisseuse, surtout en cas d'injection dans ou sous le muscle : les sociétés savantes recommandent une injection uniquement sous-cutanée.",
        sections: [
          {
            heading: "Les suites fréquentes et attendues",
            paragraphs: [
              "Ces manifestations sont des suites normales de l'intervention et diminuent en quelques semaines.",
            ],
            bullets: [
              "Ecchymoses étendues sur les fesses et les zones de liposuccion.",
              "Gonflement (œdème) pendant plusieurs semaines, qui donne d'abord un volume supérieur au résultat final après un lipofilling.",
              "Douleurs et gêne importante en position assise ou couchée sur le dos.",
              "Écoulement de liquide teinté de sang par les incisions de liposuccion pendant 24 à 48 heures.",
              "Engourdissement ou hypersensibilité de la peau, le plus souvent transitoires.",
              "Zones indurées au toucher pendant les premiers mois.",
            ],
          },
          {
            heading: "Les complications moins fréquentes",
            paragraphs: [
              "Leur fréquence dépend de la technique, du volume injecté ou de la taille de l'implant, et de votre état de santé.",
            ],
            bullets: [
              "Lipofilling : résorption importante ou asymétrique de la graisse, irrégularités, kystes huileux ou nodules (cytostéatonécrose).",
              "Implants : désunion de la cicatrice du pli interfessier, infection pouvant imposer le retrait de l'implant, sérome.",
              "Implants : déplacement ou rotation, implant palpable ou visible, coque, douleurs prolongées en position assise.",
              "Irrégularités ou relâchement de la peau aux zones de liposuccion.",
              "Hématome nécessitant parfois une reprise.",
              "Cicatrices épaissies ou pigmentées.",
            ],
          },
          {
            heading: "L'embolie graisseuse : le risque grave propre au lipofilling fessier",
            paragraphs: [
              "Sous le muscle grand fessier passent de grosses veines. Si de la graisse est injectée dans le muscle ou sous lui, une canule peut léser une de ces veines et de la graisse peut y pénétrer, puis migrer brutalement vers le cœur et les poumons. Cette embolie graisseuse massive peut survenir pendant l'intervention ou peu après et entraîner un arrêt cardiorespiratoire. Une forme retardée, le syndrome d'embolie graisseuse, peut apparaître dans les heures ou les jours suivants (essoufflement, confusion, petites taches rouges sur la peau).",
              "Cette complication est rare, mais des décès ont été rapportés dans plusieurs pays. Les sociétés savantes de chirurgie plastique, dont la BAAPS au Royaume-Uni, ont émis des alertes et recommandent d'injecter la graisse uniquement dans le plan sous-cutané, au-dessus du muscle, sans jamais pénétrer dans le muscle, avec des canules adaptées. L'échographie peropératoire permet de contrôler la position de la canule. N'hésitez pas à demander au chirurgien quelle technique il utilise.",
            ],
          },
          {
            heading: "Les autres complications rares mais graves",
            paragraphs: [
              "La thrombose veineuse profonde (caillot dans une veine de la jambe) peut se compliquer d'embolie pulmonaire ; la durée de l'intervention, la position sur le ventre et l'immobilité augmentent ce risque. Une infection sévère, une atteinte du nerf sciatique ou, exceptionnellement, la perforation d'un organe pendant la liposuccion sont également possibles.",
            ],
          },
          {
            heading: "Injections dans les fesses : les dangers à connaître",
            paragraphs: [
              "Les injections de silicone liquide sont interdites. Réalisées le plus souvent par des personnes qui ne sont pas médecins, dans des lieux non médicaux, elles ont provoqué des embolies, des infections graves, des déformations durables et des décès. Les produits illégaux peuvent migrer et sont très difficiles, voire impossibles, à retirer complètement.",
              "En France, l'ANSM a émis des mises en garde contre l'injection d'acide hyaluronique en grande quantité pour augmenter le volume des fesses : infections, nodules, migration du produit et embolie font partie des risques. Toute injection dans les fesses doit être discutée avec un médecin qualifié ; n'acceptez jamais une injection proposée à domicile, dans un salon ou via les réseaux sociaux.",
            ],
          },
          {
            heading: "Quand appeler sans attendre",
            paragraphs: [
              "Contactez rapidement le chirurgien ou l'équipe qui vous a opéré en cas de signe inhabituel. En cas d'essoufflement, de douleur dans la poitrine, de malaise, de confusion ou de perte de connaissance, appelez le 15 (SAMU) ou le 112.",
            ],
            bullets: [
              "Essoufflement, douleur thoracique, toux avec crachats sanglants, palpitations, malaise.",
              "Confusion, somnolence inhabituelle, petites taches rouges sur la peau du thorax ou du cou.",
              "Mollet douloureux, chaud ou gonflé d'un seul côté.",
              "Fièvre, rougeur qui s'étend, écoulement purulent ou cicatrice qui s'ouvre.",
              "Douleur des fesses qui augmente au lieu de diminuer, gonflement rapide et tendu d'un côté.",
              "Douleur irradiant dans la jambe, faiblesse ou engourdissement du pied.",
            ],
          },
          {
            heading: "Les facteurs qui augmentent les risques",
            paragraphs: ["Certains facteurs sont modifiables et doivent être discutés en consultation."],
            bullets: [
              "Injection de graisse dans ou sous le muscle, volumes très importants, intervention longue ou associée à d'autres gestes.",
              "Intervention réalisée hors d'un établissement autorisé, par une personne non qualifiée ou à un rythme élevé.",
              "Tabac, surpoids important, contraception œstroprogestative ou traitement hormonal (risque de thrombose).",
              "Antécédents personnels ou familiaux de thrombose ou d'embolie.",
              "Voyage long en position assise peu après l'intervention.",
              "Produits injectés auparavant dans les fesses.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, ANSM, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Prix ──
      {
        interventionId: "buttock-augmentation",
        kind: "cost",
        locale: "fr",
        title: "Prix d'une augmentation des fesses",
        summary:
          "Ce que contient un devis d'augmentation des fesses, ce qui fait varier le prix (technique, implants, anesthésie), règles françaises et prise en charge.",
        answer:
          "Le coût d'une augmentation des fesses dépend surtout de la technique (lipofilling ou implants), du nombre de zones de liposuccion, de l'anesthésie et de l'établissement. Nous n'indiquons pas de fourchette de prix : seul un devis détaillé et daté, remis après consultation, permet de connaître le montant. À visée esthétique, elle n'est pas remboursée.",
        sections: [
          {
            heading: "Ce que contient un devis",
            paragraphs: [
              "En France, un devis détaillé et daté doit être remis avant toute intervention de chirurgie esthétique. Vérifiez qu'il précise les postes suivants, ou ceux qui n'y figurent pas.",
            ],
            bullets: [
              "Honoraires du chirurgien, avec la technique et les zones de prélèvement.",
              "Honoraires de l'anesthésiste (parfois facturés séparément).",
              "Frais de l'établissement : bloc opératoire, ambulatoire ou nuit d'hospitalisation.",
              "Prix des implants, avec leur marque, leur modèle et leur traçabilité, le cas échéant.",
              "Gaine de compression, coussin, bas de contention, pansements et médicaments.",
              "Consultations de suivi et conditions prévues en cas de nouvelle séance, de retouche ou de complication.",
            ],
          },
          {
            heading: "Ce qui fait varier le prix",
            paragraphs: [
              "La technique choisie, le nombre et l'étendue des zones de liposuccion, la durée de l'intervention, l'utilisation d'une échographie peropératoire, le type d'implant et la nécessité d'une nuit d'hospitalisation pèsent sur le devis.",
              "Le prix ne renseigne pas à lui seul sur la qualité. Un prix très bas peut traduire un temps opératoire réduit, un établissement non adapté ou un suivi limité : pour une intervention exposée à des complications graves, ces points comptent.",
            ],
          },
          {
            heading: "Les règles applicables en France",
            paragraphs: [
              "Le Code de la santé publique (article L6322-2) impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention. Aucune somme autre que les honoraires de consultation ne peut être exigée avant la fin de ce délai.",
              "Les actes à visée purement esthétique sont soumis à la TVA. L'intervention doit avoir lieu dans un établissement autorisé par l'ARS, et une consultation d'anesthésie préalable est obligatoire. Les implants doivent être des dispositifs médicaux conformes, et leur référence doit vous être remise.",
            ],
          },
          {
            heading: "Quand l'Assurance maladie peut intervenir",
            paragraphs: [
              "Une augmentation des fesses à visée esthétique n'est pas prise en charge. Dans de rares situations de reconstruction (séquelles de traumatisme ou de chirurgie, malformation, certaines lipodystrophies), une prise en charge peut être discutée ; elle suppose en général une demande d'accord préalable. Des dépassements d'honoraires restent possibles selon le secteur du chirurgien.",
              "La prise en charge des complications d'une chirurgie esthétique par l'Assurance maladie dépend de la situation ; renseignez-vous avant l'intervention.",
            ],
          },
          {
            heading: "Le coût des complications, des retouches et des injections illégales",
            paragraphs: [
              "Une nouvelle séance de lipofilling, le traitement d'une infection, le retrait ou le changement d'un implant peuvent entraîner des frais, un arrêt de travail plus long ou des déplacements. Renseignez-vous sur ce qui serait facturé et sur l'existence d'une assurance couvrant les complications.",
              "Les complications d'injections illégales (silicone, produits non autorisés) peuvent nécessiter des traitements longs et coûteux, sans garantie de réparation. Méfiez-vous des prix très bas, des forfaits avec voyage, des acomptes demandés avant la fin du délai légal et des crédits proposés en consultation.",
            ],
          },
        ],
        sources: [LEGIFRANCE_L6322_2, AMELI, ANNUAIRE_SANTE, ANSM],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Convalescence ──
      {
        interventionId: "buttock-augmentation",
        kind: "recovery",
        locale: "fr",
        title: "Convalescence après une augmentation des fesses",
        summary:
          "Après une augmentation des fesses : semaines sans s'asseoir, sommeil sur le ventre, gaine, reprise du travail et du sport, résultat et signes d'alerte.",
        answer:
          "Les premières semaines imposent d'éviter de s'asseoir directement sur les fesses, en général 2 à 3 semaines, et de dormir sur le ventre ou le côté. Une activité de bureau reprend souvent après 2 semaines si l'on peut limiter la position assise. Le résultat d'un lipofilling se stabilise entre 6 et 12 mois. Les consignes de votre chirurgien priment.",
        sections: [
          {
            heading: "Les premiers jours",
            paragraphs: [
              "La sortie a lieu le jour même ou le lendemain. Les fesses et les zones de liposuccion sont gonflées et douloureuses ; les incisions de liposuccion laissent s'écouler du liquide pendant 24 à 48 heures.",
            ],
            bullets: [
              "Se lever et marcher dès que possible, plusieurs fois par jour, pour limiter le risque de thrombose.",
              "Bien s'hydrater et prendre les antalgiques et, si prescrit, le traitement anticoagulant.",
              "Porter la gaine de compression et les bas de contention prescrits.",
              "Prévoir une personne pour le retour à domicile, en position allongée ou semi-allongée si possible, et pour la première nuit.",
            ],
          },
          {
            heading: "Semaines 1 à 3 : protéger les fesses",
            paragraphs: [
              "Après un lipofilling, la graisse greffée doit se revasculariser : une pression prolongée peut compromettre sa survie. Après des implants, la pression et les frottements fragilisent la cicatrice du pli interfessier.",
            ],
            bullets: [
              "Éviter de s'asseoir directement sur les fesses, en général 2 à 3 semaines ; utiliser si conseillé un coussin placé sous l'arrière des cuisses.",
              "Dormir sur le ventre ou sur le côté.",
              "Pour les besoins de la vie courante (toilettes, repas), limiter le temps assis.",
              "Soins de la cicatrice selon les consignes après des implants, avec une hygiène soigneuse.",
              "Douche généralement autorisée après 24 à 48 heures ; bains et piscine après cicatrisation complète.",
            ],
          },
          {
            heading: "Reprise du travail et des activités",
            paragraphs: [],
            bullets: [
              "Travail de bureau : souvent après 2 semaines, avec la possibilité de se lever ou de travailler debout ; plus tard pour un travail physique.",
              "Trajets en voiture : en passager et courts au début ; conduite lorsque la position assise est tolérée et sans antalgiques sédatifs.",
              "Voyage long, en avion notamment : à discuter avec le chirurgien, en raison du risque de thrombose.",
              "Marche quotidienne dès les premiers jours ; activités douces vers la 4e semaine.",
              "Sport intensif : en général après 6 semaines ; exercices sollicitant fortement les fessiers plus tard après des implants.",
              "Soleil et UV : protéger les cicatrices pendant plusieurs mois.",
            ],
          },
          {
            heading: "Les mois suivants",
            paragraphs: [
              "Après un lipofilling, le volume diminue pendant les premiers mois, à mesure que l'œdème se résorbe et que la graisse non viable disparaît. Le résultat se stabilise entre 6 et 12 mois ; une nouvelle séance ne se discute pas avant ce délai. Un poids stable aide à conserver le volume obtenu.",
              "Après des implants, le galbe s'assouplit progressivement. Un suivi régulier de l'implant est nécessaire, et toute douleur, déformation ou modification du volume doit être signalée.",
            ],
          },
          {
            heading: "Signes qui doivent faire appeler",
            paragraphs: [
              "Contactez le chirurgien en cas de fièvre, de rougeur qui s'étend, de cicatrice qui s'ouvre, de gonflement rapide d'un côté ou de mollet douloureux. En cas d'essoufflement, de douleur thoracique, de confusion ou de malaise, appelez le 15 ou le 112.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Avant de se décider ──
      {
        interventionId: "buttock-augmentation",
        kind: "decision",
        locale: "fr",
        title: "Augmentation des fesses : avant de se décider",
        summary:
          "Augmentation des fesses : lipofilling ou implants, image corporelle, dysmorphophobie, questions à poser au chirurgien et délai légal de 15 jours.",
        answer:
          "L'augmentation des fesses s'envisage chez un adulte en bonne santé, au poids stable, informé des risques propres à chaque technique, dont l'embolie graisseuse pour le lipofilling. Choisissez un chirurgien qualifié qui injecte uniquement en sous-cutané. En France, un délai minimal de 15 jours doit séparer la remise du devis de l'intervention.",
        sections: [
          {
            heading: "Est-ce le bon moment ?",
            paragraphs: [
              "Votre poids devrait être stable depuis plusieurs mois. Une perte de poids importante prévue rend un lipofilling imprévisible et peut réduire la graisse disponible ; une grossesse future peut modifier le résultat.",
              "Prévoyez plusieurs semaines pendant lesquelles vous ne pourrez pas vous asseoir normalement : travail, garde d'enfants, transports. Évitez de décider dans une période de bouleversement. La chirurgie esthétique est réservée aux adultes.",
            ],
          },
          {
            heading: "Lipofilling ou implants : ce qui est réaliste",
            paragraphs: [
              "Le volume possible par lipofilling dépend de la graisse disponible et de ce que la peau peut accueillir en sécurité ; une partie se résorbe, et plusieurs séances sont parfois nécessaires. Les implants donnent un volume plus prévisible mais exposent à des complications propres et à des réinterventions au cours de la vie.",
              "Les images diffusées sur les réseaux sociaux sont souvent retouchées ou prises sous un angle favorable, et certaines silhouettes ne sont pas atteignables en sécurité. Demandez au chirurgien ce qui peut et ne peut pas changer dans votre cas, et pourquoi il fixe une limite au volume.",
            ],
          },
          {
            heading: "Votre motivation et la dysmorphophobie",
            paragraphs: [
              "Demandez-vous ce qui vous gêne précisément, depuis combien de temps, et ce que vous attendez de l'intervention. Une décision prise sous la pression d'un proche, d'une tendance ou des réseaux sociaux expose davantage à la déception.",
              "Certaines personnes souffrent d'une préoccupation envahissante pour un défaut que les autres remarquent à peine : c'est le trouble dysmorphique corporel, ou dysmorphophobie, qui peut porter sur la silhouette. La chirurgie ne le soulage pas et peut aggraver la détresse. Si vous vous reconnaissez dans cette description, parlez-en à votre médecin traitant ; des traitements efficaces existent. En cas d'idées suicidaires, le 3114 répond jour et nuit.",
            ],
          },
          {
            heading: "Questions à poser en consultation",
            paragraphs: [],
            bullets: [
              "Êtes-vous qualifié en chirurgie plastique, reconstructrice et esthétique ? (vérifiable sur l'Annuaire santé)",
              "Dans quel plan injectez-vous la graisse ? Vous assurez-vous de rester au-dessus du muscle, par exemple par un contrôle échographique ?",
              "Quel volume prévoyez-vous, et pourquoi pas davantage en une séance ?",
              "Lipofilling ou implants : pourquoi cette technique dans mon cas, et quels en sont les risques propres ?",
              "Quels implants utilisez-vous, et que se passe-t-il en cas de désunion de cicatrice ou d'infection ?",
              "Quelle anesthésie, dans quel établissement, et comment prévenez-vous la thrombose ?",
              "Qui joindre la nuit ou le week-end en cas de problème, et que comprend le devis en cas de nouvelle séance ou de complication ?",
            ],
          },
          {
            heading: "Signaux d'alerte avant de vous engager",
            paragraphs: [],
            bullets: [
              "Injections proposées par une personne qui n'est pas médecin, à domicile, dans un salon ou via les réseaux sociaux.",
              "Promesse d'un volume important sans chirurgie, ou injection de « produit » dont on ne vous donne ni le nom ni la traçabilité.",
              "Absence de consultation avec le chirurgien lui-même avant le jour de l'intervention.",
              "Pression pour réserver vite, acompte demandé avant la fin du délai légal, forfait avec voyage et retour rapide.",
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
        interventionId: "buttock-augmentation",
        kind: "alternatives",
        locale: "fr",
        title: "Alternatives à l'augmentation des fesses",
        summary:
          "Renforcement musculaire, liposuccion seule, vêtements galbants ou ne rien faire ; injections à proscrire : alternatives à l'augmentation des fesses.",
        answer:
          "Selon la situation, les alternatives sont le renforcement musculaire des fessiers, une liposuccion seule des zones voisines pour accentuer la courbe, des vêtements galbants, ou ne rien faire. Les injections de silicone liquide sont interdites, et les injections de produits de comblement en grande quantité dans les fesses font l'objet de mises en garde de l'ANSM.",
        sections: [
          {
            heading: "Renforcement musculaire",
            paragraphs: [
              "Un travail régulier et ciblé des muscles fessiers peut améliorer le galbe et la tonicité, de façon modeste et progressive, sans les risques d'une chirurgie. L'effet dépend de la morphologie et s'estompe si l'entraînement cesse. Un professionnel du sport ou un kinésithérapeute peut proposer un programme adapté.",
            ],
          },
          {
            heading: "Liposuccion seule des zones voisines",
            paragraphs: [
              "Une liposuccion des hanches, des flancs ou du bas du dos peut accentuer la courbe entre la taille et les fesses sans y injecter de graisse. Elle évite le risque d'embolie graisseuse lié à l'injection fessière, mais garde les risques propres à la liposuccion.",
            ],
          },
          {
            heading: "Lipofilling ou implants : l'autre technique",
            paragraphs: [
              "Lorsque l'une des deux techniques ne convient pas, l'autre peut être discutée : implants en l'absence de graisse suffisante, lipofilling si l'on souhaite éviter un corps étranger. Chacune a ses propres risques, détaillés lors de la consultation.",
            ],
          },
          {
            heading: "Injections dans les fesses : à proscrire",
            paragraphs: [
              "Les injections de silicone liquide sont interdites et ont causé des complications graves et des décès, le plus souvent lorsqu'elles étaient réalisées par des personnes qui ne sont pas médecins. Les produits injectés illégalement peuvent migrer et sont très difficiles à retirer.",
              "En France, l'ANSM a émis des mises en garde contre l'injection d'acide hyaluronique en grande quantité pour augmenter le volume des fesses, en raison des risques d'infection, de nodules, de migration et d'embolie. Ces injections ne sont pas une alternative simple à la chirurgie ; n'acceptez jamais une injection hors d'un cadre médical.",
            ],
          },
          {
            heading: "Vêtements galbants et ne rien faire",
            paragraphs: [
              "Des vêtements galbants ou des rembourrages amovibles modifient la silhouette sans intervention médicale. Choisir de ne pas intervenir est une option légitime : la gêne peut évoluer avec le temps, et la réflexion peut être reprise plus tard sans conséquence médicale.",
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
        id: "gluteal-fat-embolism",
        locale: "fr",
        slug: "embolie-graisseuse-fessiere",
        term: "Embolie graisseuse fessière",
        aliases: [
          "embolie graisseuse après lipofilling fessier",
          "embolie graisseuse après BBL",
          "embolie graisseuse massive",
          "syndrome d'embolie graisseuse",
        ],
        definition:
          "L'embolie graisseuse fessière est le passage de graisse dans les veines de la région fessière lors d'un lipofilling, puis sa migration vers les poumons. Rare mais potentiellement mortelle, elle est principalement liée aux injections dans ou sous le muscle fessier.",
        detail: [
          "De grosses veines passent sous le muscle grand fessier. Si une canule pénètre dans le muscle ou sous lui, elle peut léser une de ces veines, et la graisse injectée peut y entrer et rejoindre brutalement le cœur et les poumons, parfois pendant l'intervention.",
          "Une forme retardée, le syndrome d'embolie graisseuse, peut survenir dans les heures ou les jours suivants : essoufflement, confusion, petites taches rouges sur la peau. Ces signes imposent d'appeler le 15 ou le 112.",
          "Les sociétés savantes, dont la BAAPS, recommandent de n'injecter la graisse que dans le plan sous-cutané, au-dessus du muscle ; l'échographie peropératoire aide à contrôler la position de la canule.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "buttock-implant",
        locale: "fr",
        slug: "implant-fessier",
        term: "Implant fessier",
        aliases: ["implants fessiers", "prothèse fessière", "prothèses fessières", "prothese fessiere", "implant glutéal"],
        definition:
          "Un implant fessier est une prothèse en silicone souple mais solide, placée chirurgicalement dans la fesse pour en augmenter le volume. Il est surtout proposé aux personnes minces qui n'ont pas assez de graisse pour un lipofilling.",
        detail: [
          "Contrairement à la plupart des implants mammaires, il n'est pas rempli de gel : il est fait d'un élastomère de silicone plein, conçu pour supporter la pression de la position assise. Il est introduit le plus souvent par une incision dans le pli interfessier et placé dans le muscle ou sous son enveloppe.",
          "Les complications propres comprennent la désunion de la cicatrice, l'infection pouvant imposer son retrait, le sérome, le déplacement, un implant palpable ou visible et la coque. Il n'est pas garanti à vie et nécessite un suivi.",
          "Les implants sont des dispositifs médicaux surveillés par l'ANSM ; leur marque et leur référence doivent figurer dans les documents remis après l'intervention.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },

  // ════════════════════════════════════ UNITED KINGDOM ════════════════════════════════════
  "en-gb": {
    intervention: {
      id: "buttock-augmentation",
      locale: "en-gb",
      slug: "buttock-augmentation",
      category: "body",
      title: "Buttock augmentation (Brazilian butt lift, implants)",
      summary:
        "Brazilian butt lift (BBL) or buttock implants: techniques, the rare but serious risk of fat embolism, injections to avoid and recovery explained.",
      description: [
        "Buttock augmentation aims to increase the volume of the buttocks or change their shape. There are two main surgical techniques: buttock fat transfer, widely known as the Brazilian butt lift (BBL), which uses your own fat, and silicone buttock implants.",
        "A BBL is done in two stages during the same operation. Fat is removed by liposuction from other areas, such as the tummy, flanks, back or thighs, then prepared and injected into the buttocks through cannulas. The new shape therefore combines slimming of the donor areas with added volume. Part of the injected fat does not survive and is reabsorbed over the first months, so the final volume is smaller than it looks straight after surgery.",
        "The BBL carries a rare but potentially fatal risk: fat embolism, when fat enters the large veins lying in and beneath the gluteal muscle and travels to the lungs. The risk is mainly linked to injecting into or below the muscle. The British Association of Aesthetic Plastic Surgeons (BAAPS) and other professional bodies have issued safety warnings and advise that fat should only be injected into the layer under the skin, above the muscle, never into it. Ultrasound guidance during surgery is increasingly used to check where the cannula is.",
        "Buttock implants are made of soft but solid silicone, unlike most breast implants, which are filled with gel. They are usually inserted through a cut in the crease between the buttocks and placed within the muscle or beneath its covering layer (fascia). They mainly suit slim people without enough fat to transfer, and carry their own complications: wound breakdown, infection, implants moving, implants that can be felt or seen, and further surgery.",
        "Injecting fillers into the buttocks is not a simple alternative. Liquid silicone injections are dangerous and have caused serious injuries and deaths, particularly when given by people who are not doctors, outside any medical setting. BAAPS and the NHS warn against so-called non-surgical or liquid BBL using large volumes of dermal filler. Buttock augmentation is surgery and should be carried out by a qualified surgeon in a registered hospital.",
      ],
      indications: [
        "Buttocks that you feel are flat, lack projection or are out of proportion with the rest of your figure, as a long-standing concern that is your own decision.",
        "Asymmetry of the buttocks or localised hollows, for example at the sides of the hips.",
        "For a BBL: enough spare fat in other areas and a weight that has been stable for several months.",
        "For implants: a slim build with too little fat to transfer.",
        "The effects of injury, previous surgery or some forms of lipodystrophy (loss of fat due to a condition or treatment), assessed by a specialist.",
        "A healthy adult who understands the specific risks of each technique.",
      ],
      contraindications: [
        "Unrealistic expectations, or a request based on edited images or driven by pressure from others or social media.",
        "Excessive concern about a minor or barely visible feature, which should be discussed with the surgeon.",
        "For a BBL: too little fat to transfer, or significant weight loss planned.",
        "A history of blood clots that has not been assessed, or a bleeding disorder.",
        "Heart or lung disease, diabetes or other long-term conditions that are not well controlled.",
        "Smoking or nicotine use, which increase the risk of wound problems, infection and blood clots: stopping is advised.",
        "A skin infection around the buttocks or the crease between them.",
        "Previous injections into the buttocks (silicone or fillers), which need specialist assessment before any further procedure.",
        "Pregnancy or breastfeeding.",
      ],
      risks: [
        {
          name: "Bruising, swelling and pain",
          detail:
            "Common and expected, on the buttocks and the donor areas: widespread bruising, swelling and pain for several weeks, with marked discomfort when sitting.",
        },
        {
          name: "Fat reabsorption and a smaller result than hoped",
          detail:
            "After a BBL, part of the injected fat does not survive and is reabsorbed over the first months, to a degree that varies between people and sometimes between sides. The final volume may feel insufficient; a further session is only considered once things have settled.",
        },
        {
          name: "Unevenness, oil cysts and lumps",
          detail:
            "Lumps, dents or firm areas, on the buttocks or the liposuction areas. Fat that does not survive can form oil cysts or lumps (fat necrosis), which are sometimes painful and may need treatment.",
        },
        {
          name: "Infection and wound breakdown",
          detail:
            "Uncommon after a BBL. More common with buttock implants, because the incision lies in an area of friction close to the back passage: wound breakdown or infection can mean the implant has to be removed.",
        },
        {
          name: "Seroma and haematoma",
          detail:
            "Collections of fluid or blood around an implant or in the donor areas; they may need draining with a needle and occasionally further surgery.",
        },
        {
          name: "Implant complications",
          detail:
            "The implant moving or rotating, asymmetry, an implant that can be felt or seen, capsular contracture (the scar tissue around it tightening), lasting pain when sitting and, more rarely, rupture. These may lead to further surgery or removal of the implant.",
        },
        {
          name: "Nerve problems",
          detail:
            "Changes in skin sensation, usually temporary. Irritation of or injury to the sciatic nerve, which runs beneath the gluteal muscle, is rare but possible, particularly with implants or deep injections.",
        },
        {
          name: "Deep vein thrombosis and pulmonary embolism",
          detail:
            "Rare but serious. The risk rises with longer operations, lying face down, immobility afterwards and personal risk factors. It is reduced by moving early, compression stockings and, in some cases, blood-thinning injections.",
        },
        {
          name: "Fat embolism",
          detail:
            "Rare but potentially fatal. During a BBL, fat injected into or beneath the muscle can enter the large gluteal veins and travel suddenly to the lungs, sometimes during the operation. A delayed form, within hours or days, causes breathlessness, confusion or a pinpoint red rash. Professional bodies advise injecting only under the skin, above the muscle, to reduce this risk.",
        },
        {
          name: "Complications of the liposuction",
          detail:
            "The risks of liposuction also apply: unevenness or loose skin in the donor areas, fluid imbalance with large volumes and, very rarely, perforation of an internal organ.",
        },
        {
          name: "Anaesthetic risks",
          detail: "Discussed with the anaesthetist at your pre-operative assessment.",
        },
      ],
      procedure: {
        anaesthesia: "Usually general anaesthesia.",
        duration:
          "Around 2 to 4 hours for a BBL, depending on the number of donor areas; often 1 to 3 hours for implants.",
        hospitalStay:
          "A day case or an overnight stay, depending on the technique, the amount of liposuction and your general health.",
      },
      recovery: [
        "Days 1 to 3: pain and swelling of the buttocks and donor areas, fluid leaking from the liposuction entry points; you are encouraged to walk the same evening or next day to reduce the risk of blood clots.",
        "Sitting directly on your buttocks is usually avoided for 2 to 3 weeks, sometimes longer: you sit on the backs of your thighs or on a suitable cushion, and sleep on your front or side.",
        "A compression garment is worn over the liposuction areas, usually for several weeks; after a BBL it should not press firmly on the buttocks.",
        "Weeks 1 to 2: marked bruising; return to desk-based work often after 2 weeks if you can avoid long periods of sitting, later for physical jobs.",
        "Weeks 3 to 6: gradually build up longer periods of sitting and car journeys; keep a close eye on the wound after implants.",
        "Strenuous exercise after around 6 weeks, and later for exercises that work the buttocks hard after implants, once your surgeon agrees.",
        "After a BBL, volume decreases over the first months as fat that has not survived is reabsorbed: the result usually settles between 6 and 12 months.",
        "After implants, the shape softens gradually; the result is judged after several months and long-term follow-up of the implant is needed.",
      ],
      alternatives: [
        "Doing nothing: a legitimate choice, which you can revisit later.",
        "Targeted strength training for the gluteal muscles: a modest but real effect on shape, with no surgical risk.",
        "Shaping garments or removable padding.",
        "Liposuction alone of the hips, flanks or lower back, which can accentuate the curve of the buttocks without injecting fat into them.",
        "Choosing between a BBL and implants depending on how much spare fat you have; each has its own risks.",
        "To avoid: liquid silicone injections; large-volume filler injections into the buttocks (\"liquid\" or \"non-surgical\" BBL), which BAAPS warns against; any injection given by someone who is not a doctor.",
      ],
      faq: [
        {
          question: "What is a Brazilian butt lift?",
          answer:
            "Despite the name, it is not a lift. A BBL is buttock fat transfer: fat is removed by liposuction from areas such as the tummy or flanks and injected into the buttocks. It is surgery, usually under general anaesthesia, with its own specific risks.",
        },
        {
          question: "Is a BBL dangerous?",
          answer:
            "Like any operation, it carries risks. The most serious is fat embolism, which is rare but potentially fatal and mainly linked to injecting fat into or beneath the gluteal muscle. BAAPS and other professional bodies have issued safety guidance advising injection only into the layer under the skin, above the muscle. Ask your surgeon how they make sure of this, for example with ultrasound guidance.",
        },
        {
          question: "BBL or implants: how do I choose?",
          answer:
            "A BBL needs enough spare fat; it also slims the donor areas, but some of the volume is reabsorbed. Implants suit slimmer people and give a more predictable volume, but carry their own complications, such as wound breakdown, infection and the implant moving, and may need further surgery. Your surgeon can explain what is possible for you.",
        },
        {
          question: "Is a \"non-surgical\" or \"liquid\" BBL with fillers a safer option?",
          answer:
            "No. Injecting large volumes of filler into the buttocks is not a simple alternative to surgery, and BAAPS has warned against it because of risks including infection, lumps, filler moving and embolism. Liquid silicone injections have caused serious injuries and deaths. Never accept injections from someone who is not a doctor or outside a regulated medical setting.",
        },
        {
          question: "How long will I be unable to sit?",
          answer:
            "Usually 2 to 3 weeks without sitting directly on your buttocks, sometimes longer, to avoid pressing on the transferred fat or the implant wound. A cushion under the backs of your thighs may be advised. Your surgeon will tell you exactly how long.",
        },
        {
          question: "Are the results permanent?",
          answer:
            "Fat that has survived beyond a few months behaves like fat elsewhere in your body and changes with your weight. Implants are not lifetime devices and may need replacing or removing. Your skin continues to age in either case.",
        },
        {
          question: "Should I have a BBL abroad?",
          answer:
            "Serious complications and deaths have been reported after cosmetic surgery abroad, including BBLs, sometimes carried out at high volume with limited follow-up. The flight home, sitting for long periods, increases the risk of blood clots. The NHS advises checking the surgeon's qualifications and planning aftercare before you travel; follow-up and treatment of complications at home may be harder to arrange.",
        },
        {
          question: "Is buttock augmentation available on the NHS?",
          answer:
            "Not for cosmetic reasons. In rare reconstructive situations, such as after injury or for some forms of lipodystrophy, a referral may be considered, sometimes through an individual funding request, according to local criteria.",
        },
        {
          question: "How long should I wait before deciding?",
          answer:
            "There is no legal waiting period in the UK, but professional guidance recommends at least two weeks between your consultation and agreeing to surgery. Use this time to think, ask questions and seek a second opinion if you wish.",
        },
        {
          question: "Who should carry out my buttock augmentation?",
          answer:
            "A surgeon on the GMC Specialist Register in plastic surgery, working in a hospital or clinic registered with the Care Quality Commission in England (or the equivalent regulator in Scotland, Wales or Northern Ireland). You can check the register on the GMC website. Buttock augmentation should never be carried out in a salon, at home or by someone who is not a doctor.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risks ──
      {
        interventionId: "buttock-augmentation",
        kind: "risks",
        locale: "en-gb",
        title: "Buttock augmentation risks",
        summary:
          "Fat embolism, blood clots, infection, implant complications and unregulated injections: buttock augmentation risks and when to seek urgent help.",
        answer:
          "Bruising, pain and discomfort when sitting are expected. Fat reabsorption, unevenness, infection or implant complications are less common. A BBL carries a rare but potentially fatal risk of fat embolism, mainly when fat is injected into or beneath the muscle: BAAPS and other professional bodies advise injecting only under the skin.",
        sections: [
          {
            heading: "Common and expected effects",
            paragraphs: ["These are normal after surgery and settle gradually over weeks."],
            bullets: [
              "Widespread bruising on the buttocks and liposuction areas.",
              "Swelling for several weeks, which at first makes a BBL look larger than the final result.",
              "Pain and marked discomfort when sitting or lying on your back.",
              "Blood-stained fluid leaking from the liposuction entry points for 24 to 48 hours.",
              "Numbness or increased sensitivity of the skin, usually temporary.",
              "Firm areas under the skin for the first few months.",
            ],
          },
          {
            heading: "Less common complications",
            paragraphs: [
              "How likely these are depends on the technique, the volume injected or the implant size, and your general health.",
            ],
            bullets: [
              "BBL: significant or uneven reabsorption of fat, lumps, oil cysts or fat necrosis.",
              "Implants: breakdown of the wound in the buttock crease, infection that may mean removing the implant, seroma.",
              "Implants: moving or rotating, an implant that can be felt or seen, capsular contracture, lasting pain when sitting.",
              "Unevenness or loose skin in the liposuction areas.",
              "Haematoma, sometimes needing further surgery.",
              "Scars that become raised, darker or lighter.",
            ],
          },
          {
            heading: "Fat embolism: the serious risk specific to the BBL",
            paragraphs: [
              "Large veins run beneath the gluteus maximus muscle. If fat is injected into or below the muscle, a cannula can damage one of these veins and fat can enter it, travelling suddenly to the heart and lungs. This massive fat embolism can happen during or shortly after surgery and cause cardiac arrest. A delayed form, fat embolism syndrome, can develop over hours or days, with breathlessness, confusion and a pinpoint red rash.",
              "It is rare, but deaths have been reported in several countries, including among UK patients. BAAPS has issued safety warnings and guidance advising its members to inject fat only into the layer beneath the skin, above the muscle, never into it, using suitable cannulas, with ultrasound guidance to check the cannula's position. Ask your surgeon which technique they use.",
            ],
          },
          {
            heading: "Other rare but serious complications",
            paragraphs: [
              "Deep vein thrombosis, a clot in a leg vein, can travel to the lungs (pulmonary embolism); long operations, lying face down and immobility increase this risk. Severe infection, sciatic nerve injury and, very rarely, perforation of an internal organ during liposuction are also possible.",
            ],
          },
          {
            heading: "Injections into the buttocks: the dangers",
            paragraphs: [
              "Liquid silicone injections, often given by people who are not doctors in non-medical settings, have caused embolism, severe infection, lasting disfigurement and deaths. Illegally injected products can migrate and are very difficult or impossible to remove completely.",
              "So-called non-surgical or liquid BBLs use large volumes of dermal filler. BAAPS and the NHS warn against them because of risks including infection, lumps, migration and embolism. In the UK, dermal fillers have been largely unregulated, and the government has announced plans to restrict higher-risk non-surgical procedures; until then, never accept buttock injections at home, in a salon or through social media.",
            ],
          },
          {
            heading: "When to seek help urgently",
            paragraphs: [
              "Contact your surgeon's team promptly if something does not feel right; if you cannot reach them, call NHS 111. Call 999 if you have chest pain, sudden breathlessness, collapse or confusion.",
            ],
            bullets: [
              "Breathlessness, chest pain, coughing up blood, a racing heartbeat or feeling faint.",
              "Confusion, unusual drowsiness or a pinpoint red rash on the chest or neck.",
              "A painful, warm or swollen calf on one side.",
              "Fever, spreading redness, discharge or a wound that opens.",
              "Buttock pain that gets worse rather than better, or rapid, tense swelling on one side.",
              "Pain shooting down the leg, weakness or numbness in the foot.",
            ],
          },
          {
            heading: "What increases the risk",
            paragraphs: ["Some factors can be changed and should be discussed at your consultation."],
            bullets: [
              "Injecting fat into or beneath the muscle, very large volumes, long operations or combined procedures.",
              "Surgery outside a registered hospital, by someone without the right qualifications, or at high volume.",
              "Smoking, a high body mass index, the combined contraceptive pill or hormone therapy (blood clot risk).",
              "A personal or family history of blood clots.",
              "A long journey sitting down soon after surgery.",
              "Products previously injected into the buttocks.",
            ],
          },
        ],
        sources: [NHS, BAAPS, BAPRAS, RCS, MHRA],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Cost ──
      {
        interventionId: "buttock-augmentation",
        kind: "cost",
        locale: "en-gb",
        title: "Buttock augmentation cost",
        summary:
          "What a buttock augmentation quote should include, what affects the price (technique, implants, anaesthesia), NHS rules and the cost of complications.",
        answer:
          "The cost of buttock augmentation depends mainly on the technique (BBL or implants), the number of liposuction areas, the anaesthesia and the hospital. We do not give price ranges: only a written, itemised quote after a consultation with the operating surgeon tells you the actual cost. The NHS does not fund it for cosmetic reasons.",
        sections: [
          {
            heading: "What a quote should include",
            paragraphs: ["Ask for a written quote that lists every item, or states clearly what is excluded."],
            bullets: [
              "The surgeon's fee, with the technique and the donor areas.",
              "The anaesthetist's fee, which may be billed separately.",
              "Hospital or clinic fees: theatre time, day case or overnight stay.",
              "The implants, with their manufacturer and model, if used.",
              "Compression garments, a cushion, stockings, dressings and medicines.",
              "Follow-up appointments and what happens if a further session, revision or complication arises.",
            ],
          },
          {
            heading: "What affects the price",
            paragraphs: [
              "The technique, the number and size of the liposuction areas, the length of the operation, the use of ultrasound guidance, the type of implant and whether you stay overnight all affect the quote.",
              "Price alone does not tell you about quality. A very low price may mean less operating time, an unsuitable setting or limited aftercare, which matters for an operation with rare but serious risks.",
            ],
          },
          {
            heading: "NHS funding",
            paragraphs: [
              "The NHS does not usually fund cosmetic surgery, and buttock augmentation for appearance is not available. In rare reconstructive situations, such as after injury or for some forms of lipodystrophy, a referral may be considered, sometimes through an individual funding request (IFR), according to local criteria. Your GP can advise.",
              "The NHS will treat emergencies, including complications of private or overseas surgery, but correcting an unsatisfactory cosmetic result is not usually funded.",
            ],
          },
          {
            heading: "Paying privately: points to check",
            paragraphs: [
              "Professional standards say you should not be pressured into booking, and time-limited discounts or package deals are a warning sign. The consultation should be with the operating surgeon, and you should have time to reflect before paying a deposit. Check whether any deposit is refundable.",
              "Be cautious about finance offered at the consultation and about packages that bundle surgery abroad with flights and hotels: you remain committed to repayments even if you need further treatment.",
            ],
          },
          {
            heading: "The cost of complications and revisions",
            paragraphs: [
              "A further fat transfer session, treating an infection, or removing or replacing an implant can lead to further costs, more time off work and extra travel. Ask what the quote covers, and whether insurance for complications is included or available.",
              "Complications of unregulated injections (silicone or large-volume fillers) can need long and costly treatment, without any guarantee that the damage can be repaired.",
            ],
          },
        ],
        sources: [NHS, GMC, CQC, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Recovery ──
      {
        interventionId: "buttock-augmentation",
        kind: "recovery",
        locale: "en-gb",
        title: "Recovery after buttock augmentation",
        summary:
          "Recovery after buttock augmentation: weeks without sitting, sleeping on your front, garments, returning to work and exercise, and warning signs.",
        answer:
          "In the first weeks you avoid sitting directly on your buttocks, usually for 2 to 3 weeks, and sleep on your front or side. Many people return to desk-based work after about 2 weeks if they can limit sitting. The result of a BBL settles between 6 and 12 months. Always follow your own surgeon's instructions.",
        sections: [
          {
            heading: "The first few days",
            paragraphs: [
              "You go home the same day or the next. The buttocks and liposuction areas are swollen and painful, and the entry points leak fluid for 24 to 48 hours.",
            ],
            bullets: [
              "Get up and walk as soon as you can, several times a day, to reduce the risk of blood clots.",
              "Drink plenty of fluids and take the painkillers and any blood-thinning injections prescribed.",
              "Wear your compression garment and any stockings you are given.",
              "Arrange for someone to take you home, lying down or reclined if possible, and to stay with you the first night.",
            ],
          },
          {
            heading: "Weeks 1 to 3: protecting your buttocks",
            paragraphs: [
              "After a BBL the transferred fat needs to develop a new blood supply, and prolonged pressure can reduce how much survives. After implants, pressure and friction put strain on the wound in the buttock crease.",
            ],
            bullets: [
              "Avoid sitting directly on your buttocks, usually for 2 to 3 weeks; use a cushion under the backs of your thighs if advised.",
              "Sleep on your front or side.",
              "Keep sitting to a minimum for everyday needs such as meals and the toilet.",
              "Care for the wound as instructed after implants, with careful hygiene.",
              "Showering usually allowed after 24 to 48 hours; baths and swimming once the wounds have fully healed.",
            ],
          },
          {
            heading: "Returning to work and activity",
            paragraphs: [],
            bullets: [
              "Desk-based work: often after 2 weeks if you can stand or move around; later for physical jobs.",
              "Car journeys: short trips as a passenger at first; driving once you can sit comfortably and are not taking sedating painkillers, and check your insurer's conditions.",
              "Long journeys, particularly flights: discuss with your surgeon because of the risk of blood clots.",
              "Daily walking from the first days; gentle activity from around week 4.",
              "Strenuous exercise: usually after 6 weeks, and later for exercises that work the buttocks hard after implants.",
              "Sun: protect the scars for several months.",
            ],
          },
          {
            heading: "The following months",
            paragraphs: [
              "After a BBL, volume decreases over the first months as swelling settles and fat that has not survived is reabsorbed. The result usually settles between 6 and 12 months, and a further session is not considered before then. Keeping your weight stable helps maintain the volume.",
              "After implants, the shape softens gradually. Regular follow-up is needed, and any pain, change in shape or volume should be reported.",
            ],
          },
          {
            heading: "Warning signs",
            paragraphs: [
              "Contact your surgeon's team if you develop a fever, spreading redness, a wound that opens, rapid swelling on one side or a painful calf; out of hours, call NHS 111. Call 999 for chest pain, breathlessness, confusion or collapse.",
            ],
          },
        ],
        sources: [NHS, BAAPS, BAPRAS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Before you decide ──
      {
        interventionId: "buttock-augmentation",
        kind: "decision",
        locale: "en-gb",
        title: "Buttock augmentation: before you decide",
        summary:
          "Deciding on buttock augmentation: BBL or implants, body image, body dysmorphic disorder, questions to ask and the two-week cooling-off period.",
        answer:
          "Buttock augmentation tends to suit healthy adults with a stable weight who understand the specific risks of each technique, including fat embolism with a BBL. Choose a qualified surgeon who injects only under the skin. There is no legal waiting period in the UK, but professional guidance recommends at least two weeks before agreeing to surgery.",
        sections: [
          {
            heading: "Is it the right time?",
            paragraphs: [
              "Your weight should have been stable for several months. Planned weight loss makes a BBL unpredictable and may reduce the fat available; a future pregnancy can change the result.",
              "Plan for several weeks when you cannot sit normally: work, childcare and travel all need thinking through. Avoid deciding during a period of upheaval. Cosmetic surgery is for adults: reputable surgeons in the UK do not perform cosmetic buttock augmentation on under-18s.",
            ],
          },
          {
            heading: "BBL or implants: what is realistic",
            paragraphs: [
              "How much volume a BBL can add depends on the fat available and on what the tissues can safely accept; some is reabsorbed, and more than one session is sometimes needed. Implants give a more predictable volume but carry their own complications and the possibility of further surgery over your lifetime.",
              "Images on social media are often edited or taken from flattering angles, and some shapes cannot be achieved safely. Ask your surgeon what can and cannot change for you, and why they set a limit on volume.",
            ],
          },
          {
            heading: "Your motivation and body dysmorphic disorder",
            paragraphs: [
              "Think about what exactly bothers you, for how long, and what you expect to change. A decision made because of pressure from others, a trend or social media is more likely to lead to disappointment.",
              "Body dysmorphic disorder (BDD) is a mental health condition in which a person spends a lot of time worrying about flaws in their appearance that others barely notice; body shape can be involved. Surgery does not usually relieve BDD and can make distress worse. If this sounds familiar, speak to your GP; effective treatments are available. If you are struggling to cope, Samaritans can be reached any time on 116 123.",
            ],
          },
          {
            heading: "Questions to ask your surgeon",
            paragraphs: [],
            bullets: [
              "Are you on the GMC Specialist Register in plastic surgery? Do you hold the Royal College of Surgeons' cosmetic surgery certification?",
              "Which layer do you inject the fat into? How do you make sure you stay above the muscle, for example with ultrasound guidance?",
              "How much volume do you plan, and why not more in one session?",
              "BBL or implants: why this technique for me, and what are its specific risks?",
              "Which implants do you use, and what happens if the wound breaks down or becomes infected?",
              "What anaesthetic will I have, where, and how do you reduce the risk of blood clots? Is the hospital registered with the CQC?",
              "Who do I contact at night or at weekends, and what does the quote include if I need a further session or have a complication?",
            ],
          },
          {
            heading: "Warning signs before you commit",
            paragraphs: [],
            bullets: [
              "Injections offered by someone who is not a doctor, at home, in a salon or through social media.",
              "Promises of a large increase without surgery, or a \"product\" whose name and batch you are not given.",
              "No consultation with the operating surgeon before the day of surgery.",
              "Pressure to book quickly, time-limited discounts, or travel packages with a quick return home.",
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
        interventionId: "buttock-augmentation",
        kind: "alternatives",
        locale: "en-gb",
        title: "Alternatives to buttock augmentation",
        summary:
          "Strength training, liposuction alone, shaping garments or doing nothing, and injections to avoid: alternatives to buttock augmentation.",
        answer:
          "Depending on your situation, alternatives include strength training for the gluteal muscles, liposuction alone of nearby areas to accentuate the curve, shaping garments, or no treatment. Liquid silicone injections are dangerous, and BAAPS warns against so-called liquid or non-surgical BBLs using large volumes of filler.",
        sections: [
          {
            heading: "Strength training",
            paragraphs: [
              "Regular, targeted exercise for the gluteal muscles can improve shape and firmness, modestly and gradually, with no surgical risk. The effect depends on your build and fades if you stop. A qualified trainer or physiotherapist can suggest a suitable programme.",
            ],
          },
          {
            heading: "Liposuction alone of nearby areas",
            paragraphs: [
              "Liposuction of the hips, flanks or lower back can accentuate the curve between the waist and the buttocks without injecting fat into them. It avoids the fat embolism risk linked to buttock injection, but carries the usual risks of liposuction.",
            ],
          },
          {
            heading: "BBL or implants: the other technique",
            paragraphs: [
              "When one technique is not suitable, the other may be discussed: implants if there is not enough fat, a BBL if you would rather avoid a foreign body. Each has its own risks, which your surgeon should explain.",
            ],
          },
          {
            heading: "Injections into the buttocks: to avoid",
            paragraphs: [
              "Liquid silicone injections have caused serious injuries and deaths, mostly when given by people who are not doctors. Illegally injected products can migrate and are very difficult to remove.",
              "So-called liquid or non-surgical BBLs inject large volumes of dermal filler into the buttocks. BAAPS and the NHS warn against them because of risks including infection, lumps, migration and embolism. They are not a simple substitute for surgery; never accept injections outside a regulated medical setting.",
            ],
          },
          {
            heading: "Shaping garments and doing nothing",
            paragraphs: [
              "Shaping garments or removable padding change your silhouette with no medical risk. Choosing not to have treatment is a legitimate decision: how you feel about your shape may change over time, and you can revisit the question later without any medical consequence.",
            ],
          },
        ],
        sources: [NHS, BAAPS, MHRA],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "gluteal-fat-embolism",
        locale: "en-gb",
        slug: "gluteal-fat-embolism",
        term: "Gluteal fat embolism",
        aliases: ["fat embolism after a BBL", "BBL fat embolism", "macroscopic fat embolism", "fat embolism syndrome"],
        definition:
          "Gluteal fat embolism is when fat enters the veins of the buttock area during fat transfer and travels to the lungs. It is rare but potentially fatal, and mainly linked to injecting into or beneath the gluteal muscle.",
        detail: [
          "Large veins run beneath the gluteus maximus muscle. If a cannula enters or passes below the muscle, it can damage one of these veins, and injected fat can enter it and reach the heart and lungs suddenly, sometimes during the operation.",
          "A delayed form, fat embolism syndrome, can develop over hours or days: breathlessness, confusion and a pinpoint red rash. These signs need an immediate 999 call.",
          "BAAPS and other professional bodies advise injecting fat only into the layer beneath the skin, above the muscle; ultrasound guidance helps check the cannula's position.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "buttock-implant",
        locale: "en-gb",
        slug: "buttock-implant",
        term: "Buttock implant",
        aliases: ["buttock implants", "gluteal implant", "gluteal implants", "bum implant", "bum implants"],
        definition:
          "A buttock implant is a soft but solid silicone device placed surgically in the buttock to increase its volume. It is mainly used for slim people without enough fat for a Brazilian butt lift.",
        detail: [
          "Unlike most breast implants, it is not filled with gel: it is made of solid silicone elastomer, designed to withstand the pressure of sitting. It is usually inserted through a cut in the buttock crease and placed within the muscle or beneath its covering layer.",
          "Specific complications include wound breakdown, infection that may mean removal, seroma, the implant moving, an implant that can be felt or seen, and capsular contracture. It is not a lifetime device and needs follow-up.",
          "Implants are medical devices regulated by the MHRA. You should be given the manufacturer and model, and suspected problems can be reported through the Yellow Card scheme.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },
};
