import type { Source } from "../types";
import type { Dossier } from "./types";

// ─── Sources France ───
const HAS: Source = { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" };
const SOFCPRE: Source = {
  label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)",
  url: "https://www.sofcpre.fr",
};
const SFSCMFCO: Source = {
  label: "Société française de stomatologie, chirurgie maxillo-faciale et chirurgie orale (SFSCMFCO)",
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
  label: "Agence nationale de sécurité du médicament et des produits de santé (ANSM) : dispositifs médicaux implantables",
  url: "https://ansm.sante.fr",
};
const N3114: Source = { label: "3114 — numéro national de prévention du suicide", url: "https://3114.fr" };

// ─── Sources Royaume-Uni ───
const NHS: Source = { label: "NHS: cosmetic procedures and jaw surgery", url: "https://www.nhs.uk" };
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
const BAOMS: Source = {
  label: "British Association of Oral and Maxillofacial Surgeons (BAOMS)",
  url: "https://www.baoms.org.uk",
};
const BOS: Source = { label: "British Orthodontic Society", url: "https://www.bos.org.uk" };
const RCS: Source = {
  label: "Royal College of Surgeons of England: professional standards for cosmetic surgery",
  url: "https://www.rcseng.ac.uk",
};
const MHRA: Source = {
  label: "Medicines and Healthcare products Regulatory Agency (MHRA): medical devices and Yellow Card reporting",
  url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
};
const SAMARITANS: Source = { label: "Samaritans", url: "https://www.samaritans.org" };

const REVIEW = { status: "draft" } as const;
const UPDATED_AT = "2026-10-13";

/** Génioplastie (chirurgie du menton) : fiche, sous-pages et lexique (fr, en-gb). Brouillon à relire par le comité médical. */
export const dossier: Dossier = {
  // ════════════════════════════════════ FRANCE ════════════════════════════════════
  fr: {
    intervention: {
      id: "genioplasty",
      locale: "fr",
      slug: "genioplastie",
      category: "face",
      title: "Génioplastie (chirurgie du menton)",
      summary:
        "La génioplastie modifie la projection ou la hauteur du menton, par ostéotomie ou implant. Bilan, techniques, risques et convalescence.",
      description: [
        "La génioplastie, ou chirurgie du menton, modifie la position, la projection, la hauteur ou la largeur du menton. Elle peut avancer un menton jugé fuyant (rétrogénie), reculer ou réduire un menton jugé trop proéminent, corriger une asymétrie ou modifier la hauteur du bas du visage.",
        "La technique de référence pour les déplacements osseux est la génioplastie par ostéotomie : par une incision à l'intérieur de la bouche, entre la lèvre inférieure et la gencive, le chirurgien coupe horizontalement la partie basse de la mâchoire, sous les racines des dents. Ce fragment osseux est avancé, reculé, raccourci, allongé ou recentré, puis fixé par de petites plaques et vis en titane, qui sont le plus souvent laissées en place.",
        "Une autre option consiste à poser un implant de menton, en silicone ou en polyéthylène poreux, par une incision dans la bouche ou sous le menton. L'implant permet surtout d'augmenter la projection ; il ne permet pas de raccourcir, d'allonger ni de recentrer le menton. C'est un dispositif médical implantable, qui expose à des risques propres (infection, déplacement, usure de l'os sous l'implant).",
        "La réduction du menton se fait par ostéotomie (recul ou raccourcissement du fragment) ou par un rabotage de l'os. Retirer de l'os sans tenir compte des tissus mous peut faire tomber la peau et le muscle du menton : la technique doit être choisie avec soin.",
        "Avant toute décision, un bilan précise si le problème vient du menton seul ou de la position de toute la mâchoire. Un menton fuyant est parfois le signe d'une mâchoire inférieure en retrait avec un décalage des dents (trouble de l'occlusion). Dans ce cas, un traitement orthodontique associé à une chirurgie des mâchoires (chirurgie orthognathique) peut être plus adapté qu'une génioplastie isolée, qui masquerait le décalage sans le corriger.",
        "La génioplastie est souvent associée à une rhinoplastie, car le nez et le menton sont jugés ensemble sur le profil : on parle alors de profiloplastie. Elle peut aussi être combinée à une liposuccion du cou ou à une chirurgie des mâchoires. Le résultat définitif s'apprécie après plusieurs mois, une fois le gonflement résorbé.",
      ],
      indications: [
        "Menton jugé fuyant (rétrogénie) chez un adulte dont l'occlusion dentaire est satisfaisante ou déjà prise en charge.",
        "Menton jugé trop proéminent, trop haut ou trop bas, après un bilan clinique et radiographique.",
        "Asymétrie du menton, dans le cadre d'une analyse globale du visage.",
        "Harmonisation du profil en association avec une rhinoplastie (profiloplastie).",
        "Complément d'une chirurgie orthognathique, lorsque le menton reste en retrait ou décentré après correction des mâchoires.",
        "Séquelles de traumatisme ou de malformation de la face, à évaluer avec une équipe spécialisée.",
        "Demande précise, exprimée par la personne elle-même et stable dans le temps, chez un adulte dont la croissance du visage est terminée.",
      ],
      contraindications: [
        "Décalage des mâchoires avec trouble de l'occlusion non évalué : un avis orthodontique et maxillo-facial est nécessaire avant de décider.",
        "Attentes irréalistes ou demande motivée par la pression d'un tiers.",
        "Préoccupation excessive pour un défaut minime ou invisible, qui doit être évoquée avec le chirurgien.",
        "Infection dentaire ou des gencives non traitée, mauvaise hygiène bucco-dentaire.",
        "Racines dentaires très longues ou os trop fin, qui limitent la possibilité d'une ostéotomie (évalué sur la radiographie).",
        "Tabagisme actif, qui augmente le risque d'infection, de mauvaise cicatrisation de la muqueuse et de l'os : un arrêt est recommandé.",
        "Troubles de la coagulation, maladies chroniques non équilibrées, certains traitements fragilisant l'os.",
        "Grossesse ou allaitement en cours.",
      ],
      risks: [
        {
          name: "Gonflement, ecchymoses et douleurs",
          detail:
            "Fréquents et attendus : le menton, la lèvre inférieure et parfois le cou sont gonflés et sensibles, avec des bleus qui peuvent descendre vers le cou. Le gonflement principal diminue en deux à trois semaines ; un œdème discret persiste plusieurs mois.",
        },
        {
          name: "Engourdissement de la lèvre inférieure et du menton (atteinte du nerf mentonnier)",
          detail:
            "Le nerf mentonnier, qui donne la sensibilité de la lèvre inférieure, du menton et de la gencive, passe tout près de la zone opérée. Après une ostéotomie, un engourdissement ou des fourmillements sont très fréquents et le plus souvent transitoires, sur quelques semaines à quelques mois. Une diminution de sensibilité peut persister chez une minorité de patients ; une perte complète et définitive est rare. Le risque existe aussi, à moindre degré, avec un implant.",
        },
        {
          name: "Infection",
          detail:
            "Peu fréquente, favorisée par l'incision dans la bouche et le tabac. Elle est le plus souvent traitée par antibiotiques. L'infection d'un implant peut imposer son retrait, avec une nouvelle pose éventuelle plusieurs mois plus tard. Une plaque ou une vis infectée peut aussi devoir être retirée.",
        },
        {
          name: "Asymétrie, irrégularités et résultat insuffisant ou excessif",
          detail:
            "Le menton peut être légèrement décentré, la correction jugée trop faible ou trop forte, ou une marche osseuse palpable ou visible apparaître sur les côtés de la mâchoire. Une retouche peut se discuter après stabilisation, en général au moins 6 mois plus tard.",
        },
        {
          name: "Déplacement ou mobilité de l'implant",
          detail:
            "Un implant peut se déplacer, tourner ou devenir palpable, surtout dans les premières semaines. Il peut aussi provoquer une usure de l'os sous-jacent au fil des années. Un repositionnement ou un retrait peut être nécessaire.",
        },
        {
          name: "Lésion des racines dentaires",
          detail:
            "Rare : une coupe osseuse trop proche des racines des dents de devant peut les léser et provoquer une perte de vitalité d'une dent, qui nécessite alors un traitement dentaire. La radiographie préopératoire aide à placer la coupe à distance.",
        },
        {
          name: "Hématome et désunion de la cicatrice dans la bouche",
          detail:
            "Un hématome (accumulation de sang) peut nécessiter une évacuation. La cicatrice intrabuccale peut s'ouvrir partiellement, surtout en cas de tension, de tabac ou de mauvaise hygiène ; elle cicatrise le plus souvent avec des soins locaux.",
        },
        {
          name: "Modification de la lèvre inférieure et du muscle du menton",
          detail:
            "Après décollement des tissus, la lèvre inférieure peut paraître plus basse, montrer davantage les dents du bas ou se fermer moins facilement, et le muscle du menton peut se contracter de façon inhabituelle. Le plus souvent transitoire, ce phénomène peut persister et justifier une reprise.",
        },
        {
          name: "Matériel visible, palpable ou gênant",
          detail:
            "Les plaques et vis en titane sont en général bien tolérées, mais elles peuvent être senties sous la peau fine ou gêner ; un retrait peut alors être proposé lors d'une seconde intervention courte.",
        },
        {
          name: "Défaut de consolidation et résorption osseuse",
          detail:
            "Rares : le fragment osseux peut mal se consolider, ou l'os peut se résorber partiellement et diminuer la correction obtenue. Une gêne pour respirer liée à un gonflement important du plancher de la bouche est exceptionnelle mais impose un appel au 15.",
        },
        {
          name: "Risques liés à l'anesthésie",
          detail: "À évaluer lors de la consultation d'anesthésie obligatoire.",
        },
      ],
      procedure: {
        anaesthesia:
          "Anesthésie générale le plus souvent pour une ostéotomie ; anesthésie locale, éventuellement avec sédation, possible pour certaines poses d'implant.",
        duration:
          "Environ 1 à 2 heures pour une génioplastie isolée ; davantage en cas d'association avec une rhinoplastie ou une chirurgie des mâchoires.",
        hospitalStay:
          "Le plus souvent en ambulatoire ou avec une nuit d'hospitalisation ; plus long en cas de chirurgie des mâchoires associée.",
      },
      recovery: [
        "Jour 1 : pansement compressif ou bandage adhésif autour du menton, gonflement et engourdissement de la lèvre inférieure, alimentation liquide ou mixée, froid sur la zone.",
        "Semaine 1 : alimentation molle et tiède, bains de bouche après chaque repas, brossage doux des dents en évitant la cicatrice ; pansement retiré en général entre le 2e et le 7e jour.",
        "Fils dans la bouche le plus souvent résorbables, qui tombent seuls en une à trois semaines.",
        "Reprise d'une activité de bureau souvent après 1 à 2 semaines, selon le gonflement et l'association éventuelle avec une rhinoplastie.",
        "Semaines 2 à 3 : le gonflement visible a nettement diminué ; retour progressif à une alimentation normale, en évitant les aliments durs à mastiquer devant.",
        "Sport doux après 3 à 4 semaines ; sports de contact et activités à risque de choc au visage après 6 à 8 semaines en cas d'ostéotomie, le temps que l'os consolide, avec l'accord du chirurgien.",
        "Engourdissement de la lèvre inférieure et du menton qui régresse le plus souvent en quelques semaines à quelques mois.",
        "Résultat apprécié entre 3 et 6 mois, et jusqu'à un an pour la récupération de la sensibilité et l'affinement des contours.",
      ],
      alternatives: [
        "Ne rien faire : une option légitime, à reconsidérer après un temps de réflexion.",
        "Injections d'acide hyaluronique : augmentent temporairement la projection d'un menton modérément fuyant ; effet transitoire, risques propres (bosses, infection, et rarement obstruction d'un vaisseau).",
        "Lipofilling (greffe de graisse) : apport modéré de volume, résultat partiellement résorbé et variable.",
        "Orthodontie associée à une chirurgie des mâchoires (chirurgie orthognathique) lorsque le menton fuyant traduit un décalage des mâchoires avec trouble de l'occlusion.",
        "Rhinoplastie seule : chez certains, réduire un nez proéminent suffit à rééquilibrer le profil.",
        "Liposuccion du cou ou injections lipolytiques lorsque la gêne vient surtout d'un double menton graisseux plutôt que de l'os.",
      ],
      faq: [
        {
          question: "Vaut-il mieux une ostéotomie ou un implant de menton ?",
          answer:
            "Cela dépend de la correction souhaitée et de votre anatomie. L'ostéotomie permet d'avancer, de reculer, de raccourcir, d'allonger ou de recentrer le menton en utilisant votre propre os, sans corps étranger, mais c'est une intervention osseuse avec un risque plus marqué d'engourdissement de la lèvre. L'implant est plus simple mais ne fait qu'augmenter la projection, et il expose à l'infection, au déplacement et à l'usure de l'os. Demandez au chirurgien pourquoi il propose l'une ou l'autre dans votre cas.",
        },
        {
          question: "Pourquoi le chirurgien demande-t-il une radiographie et un avis orthodontique ?",
          answer:
            "La radiographie (panoramique dentaire et souvent téléradiographie de profil, parfois scanner) montre la position des racines des dents, du nerf mentonnier et l'épaisseur de l'os, ce qui guide la coupe. L'examen de l'occlusion, c'est-à-dire la façon dont les dents du haut et du bas s'emboîtent, permet de repérer un décalage des mâchoires. En cas de décalage, un avis orthodontique est recommandé : une chirurgie des mâchoires peut alors être plus adaptée qu'une génioplastie seule.",
        },
        {
          question: "Vais-je perdre la sensibilité de la lèvre inférieure ?",
          answer:
            "Un engourdissement de la lèvre inférieure et du menton est très fréquent après une ostéotomie, car le nerf mentonnier est étiré pendant l'intervention. Il régresse le plus souvent en quelques semaines à quelques mois. Une diminution de sensibilité peut persister chez certains patients ; une perte complète et définitive est rare. Demandez au chirurgien comment il protège ce nerf.",
        },
        {
          question: "Peut-on faire la génioplastie en même temps qu'une rhinoplastie ?",
          answer:
            "Oui, c'est fréquent : on parle de profiloplastie. Associer les deux gestes permet une seule anesthésie et une seule convalescence, mais allonge l'intervention et cumule les suites des deux opérations. Le chirurgien évalue si l'association est raisonnable dans votre situation.",
        },
        {
          question: "Y aura-t-il une cicatrice visible ?",
          answer:
            "Par la voie intrabuccale, la plus courante, la cicatrice est cachée à l'intérieur de la lèvre inférieure. Certains implants sont posés par une courte incision sous le menton, qui laisse une cicatrice généralement discrète dans le pli naturel.",
        },
        {
          question: "Les plaques et vis doivent-elles être retirées ?",
          answer:
            "En général non : le titane est bien toléré et le matériel est laissé en place. Un retrait peut être proposé s'il est palpable, gênant ou infecté, au cours d'une intervention courte.",
        },
        {
          question: "Est-elle remboursée par l'Assurance maladie ?",
          answer:
            "Non lorsqu'elle est réalisée à visée esthétique. Lorsqu'elle s'inscrit dans le traitement d'une malformation, d'une séquelle de traumatisme ou d'un décalage des mâchoires avec retentissement fonctionnel, une prise en charge peut être discutée, éventuellement après demande d'accord préalable. Des dépassements d'honoraires restent possibles.",
        },
        {
          question: "Quel est le délai entre la consultation et l'intervention ?",
          answer:
            "En France, la loi impose un délai minimal de 15 jours entre la remise du devis détaillé et une intervention de chirurgie esthétique. Aucun paiement ne peut être exigé avant la fin de ce délai, en dehors des honoraires de consultation. Une consultation d'anesthésie est obligatoire.",
        },
        {
          question: "Quel chirurgien consulter ?",
          answer:
            "La génioplastie est pratiquée par des chirurgiens maxillo-faciaux et par des chirurgiens qualifiés en chirurgie plastique, reconstructrice et esthétique, dans un établissement autorisé par l'ARS. Vous pouvez vérifier l'inscription et la qualification du praticien sur l'Annuaire santé. En cas de décalage des mâchoires, une équipe associant chirurgien maxillo-facial et orthodontiste est préférable.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risques ──
      {
        interventionId: "genioplasty",
        kind: "risks",
        locale: "fr",
        title: "Génioplastie : les risques",
        summary:
          "Engourdissement de la lèvre (nerf mentonnier), infection d'implant, asymétrie, déplacement, dents : les risques de la génioplastie et les signes d'alerte.",
        answer:
          "Gonflement, ecchymoses et engourdissement de la lèvre inférieure sont attendus après une génioplastie. L'atteinte du nerf mentonnier est le risque le plus caractéristique : le plus souvent transitoire, elle peut parfois persister. L'infection et le déplacement d'un implant, l'asymétrie, la lésion d'une racine dentaire ou une modification de la lèvre inférieure sont moins fréquents.",
        sections: [
          {
            heading: "Les suites fréquentes et attendues",
            paragraphs: [
              "Ces manifestations sont des suites normales de l'intervention et diminuent progressivement en quelques semaines.",
            ],
            bullets: [
              "Gonflement du menton, de la lèvre inférieure et parfois du cou, maximal vers le 2e ou 3e jour.",
              "Ecchymoses qui peuvent descendre vers le cou, et s'estompent en deux à trois semaines.",
              "Engourdissement ou fourmillements de la lèvre inférieure, du menton et de la gencive.",
              "Gêne pour mastiquer, parler ou sourire les premiers jours.",
              "Sensation de raideur du menton et de la lèvre pendant plusieurs semaines.",
            ],
          },
          {
            heading: "Le nerf mentonnier et la sensibilité",
            paragraphs: [
              "Le nerf mentonnier sort de l'os de la mâchoire de chaque côté, sous les prémolaires, et donne la sensibilité de la lèvre inférieure et du menton. Il est repéré et protégé pendant l'intervention, mais il est inévitablement étiré lors d'une ostéotomie. La plupart des patients ont un engourdissement temporaire, qui régresse sur quelques semaines à quelques mois, parfois jusqu'à un an.",
              "Chez une minorité, une diminution de sensibilité, des picotements ou une sensation désagréable persistent. Une perte complète et définitive est rare. Elle n'empêche pas de bouger la lèvre, car la motricité dépend d'un autre nerf, mais elle peut gêner pour boire, embrasser ou se rendre compte d'une trace d'aliment sur la lèvre.",
            ],
          },
          {
            heading: "Les complications moins fréquentes",
            paragraphs: [
              "Leur fréquence dépend de la technique (ostéotomie ou implant), de l'anatomie, du tabac et de l'hygiène bucco-dentaire.",
            ],
            bullets: [
              "Infection, plus redoutée avec un implant, qui peut imposer son retrait.",
              "Déplacement, rotation ou mobilité de l'implant ; usure de l'os sous l'implant à long terme.",
              "Asymétrie, correction insuffisante ou excessive, marche osseuse palpable sur les côtés de la mâchoire.",
              "Hématome ou ouverture partielle de la cicatrice dans la bouche.",
              "Lèvre inférieure qui paraît plus basse, montre davantage les dents du bas ou ferme moins bien ; contraction inhabituelle du muscle du menton.",
              "Plaques ou vis palpables ou gênantes, nécessitant parfois un retrait.",
            ],
          },
          {
            heading: "Les complications rares mais graves",
            paragraphs: [
              "Une coupe trop proche des racines peut léser une dent de devant et lui faire perdre sa vitalité. L'os peut se consolider mal ou se résorber partiellement. Un gonflement important ou un hématome du plancher de la bouche peut exceptionnellement gêner la respiration. Comme toute chirurgie sous anesthésie générale, la génioplastie comporte un risque, rare, de thrombose veineuse et de complication anesthésique.",
            ],
          },
          {
            heading: "Quand appeler sans attendre",
            paragraphs: [
              "Contactez rapidement le chirurgien ou l'équipe qui vous a opéré en cas de signe inhabituel. En cas de gêne pour respirer ou avaler, de gonflement rapide sous la langue ou dans le cou, d'essoufflement ou de douleur dans la poitrine, appelez le 15 (SAMU) ou le 112.",
            ],
            bullets: [
              "Difficulté à respirer ou à avaler, voix modifiée, gonflement rapide du plancher de la bouche ou du cou.",
              "Gonflement d'un seul côté qui augmente brutalement, saignement abondant par la bouche.",
              "Fièvre, rougeur ou chaleur du menton, écoulement de pus ou mauvais goût persistant dans la bouche.",
              "Cicatrice dans la bouche qui s'ouvre largement, implant ou plaque visible.",
              "Douleur qui augmente après les premiers jours au lieu de diminuer.",
              "Mollet douloureux, chaud ou gonflé d'un seul côté.",
            ],
          },
          {
            heading: "Les facteurs qui augmentent les risques",
            paragraphs: ["Certains facteurs sont modifiables et doivent être discutés en consultation."],
            bullets: [
              "Tabac et vapotage, qui gênent la cicatrisation de la muqueuse et de l'os.",
              "Caries, infection dentaire ou maladie des gencives non traitées.",
              "Déplacement osseux important, ou association avec une autre intervention qui allonge la durée opératoire.",
              "Médicaments qui favorisent le saignement (aspirine, anti-inflammatoires, anticoagulants, certains compléments).",
              "Antécédent d'infection ou de rejet d'un implant.",
            ],
          },
          {
            heading: "Retouches",
            paragraphs: [
              "Une asymétrie, une correction insuffisante, un implant déplacé ou un matériel gênant peuvent justifier une reprise. Elle n'est en général envisagée qu'après stabilisation, au moins 6 mois après l'intervention, sauf urgence (infection, implant exposé). Demandez avant de vous engager quelles conditions sont prévues, y compris sur le plan financier.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFSCMFCO, ANSM, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Prix ──
      {
        interventionId: "genioplasty",
        kind: "cost",
        locale: "fr",
        title: "Prix d'une génioplastie",
        summary:
          "Ce que contient un devis de génioplastie, ce qui fait varier le prix (technique, implant, bilan, association), règles françaises et prise en charge.",
        answer:
          "Le coût d'une génioplastie dépend surtout de la technique (ostéotomie ou implant), du bilan nécessaire, de l'anesthésie, de l'établissement et d'une éventuelle association avec une rhinoplastie. Nous n'indiquons pas de fourchette de prix : seul un devis détaillé et daté, remis après consultation, permet de connaître le montant. À visée esthétique, elle n'est pas remboursée.",
        sections: [
          {
            heading: "Ce que contient un devis",
            paragraphs: [
              "En France, un devis détaillé et daté doit être remis avant toute intervention de chirurgie esthétique. Vérifiez qu'il précise les postes suivants, ou ceux qui n'y figurent pas.",
            ],
            bullets: [
              "Honoraires du chirurgien, avec la technique prévue (ostéotomie, implant, réduction).",
              "Honoraires de l'anesthésiste (parfois facturés séparément).",
              "Frais de l'établissement : bloc opératoire, ambulatoire ou nuit d'hospitalisation.",
              "Matériel : plaques et vis d'ostéosynthèse, ou implant de menton (avec sa référence).",
              "Examens préopératoires : radiographies dentaires, téléradiographie, parfois scanner.",
              "Consultations de suivi et conditions prévues en cas de retouche, de retrait d'implant ou de matériel.",
            ],
          },
          {
            heading: "Ce qui fait varier le prix",
            paragraphs: [
              "La technique, l'ampleur du déplacement, la durée de l'intervention, le type d'anesthésie, le type d'implant et la nécessité d'une nuit d'hospitalisation pèsent sur le devis. Une association avec une rhinoplastie (profiloplastie) ou une liposuccion du cou modifie le coût global, mais permet de mutualiser certains frais d'établissement et d'anesthésie.",
              "Le bilan orthodontique et, si nécessaire, un traitement orthodontique ou des soins dentaires préalables sont facturés à part. Le prix ne renseigne pas à lui seul sur la qualité.",
            ],
          },
          {
            heading: "Les règles applicables en France",
            paragraphs: [
              "Le Code de la santé publique (article L6322-2) impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention. Aucune somme autre que les honoraires de consultation ne peut être exigée avant la fin de ce délai.",
              "Les actes à visée purement esthétique sont soumis à la TVA. L'intervention doit avoir lieu dans un établissement autorisé par l'ARS, et une consultation d'anesthésie préalable est obligatoire. En cas de pose d'implant, vous devez recevoir les informations permettant d'identifier le dispositif.",
            ],
          },
          {
            heading: "Quand l'Assurance maladie peut intervenir",
            paragraphs: [
              "Une génioplastie à visée esthétique n'est pas prise en charge. Lorsqu'elle fait partie du traitement d'un décalage des mâchoires avec trouble fonctionnel, d'une malformation ou d'une séquelle de traumatisme, une prise en charge peut être discutée, éventuellement après demande d'accord préalable. Des dépassements d'honoraires restent possibles selon le secteur du chirurgien.",
              "Le traitement orthodontique de l'adulte est en général peu ou pas remboursé par l'Assurance maladie ; renseignez-vous auprès de votre complémentaire santé. Si la génioplastie est associée à une intervention remboursée, demandez un devis qui distingue clairement la part esthétique.",
            ],
          },
          {
            heading: "Le coût des complications et des retouches",
            paragraphs: [
              "Un retrait d'implant infecté, une reprise pour asymétrie, un retrait de plaque ou un traitement dentaire après lésion d'une racine peuvent entraîner des frais, un arrêt de travail plus long et des déplacements. Renseignez-vous sur ce qui serait facturé et sur l'existence d'une assurance couvrant les complications.",
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
        interventionId: "genioplasty",
        kind: "recovery",
        locale: "fr",
        title: "Convalescence après une génioplastie",
        summary:
          "Après une génioplastie : pansement, alimentation molle, hygiène de la bouche, reprise du travail et du sport, sensibilité de la lèvre et signes d'alerte.",
        answer:
          "Les premiers jours sont marqués par un gonflement du menton, un engourdissement de la lèvre inférieure et une alimentation liquide puis molle. Une activité de bureau reprend souvent après 1 à 2 semaines, les sports de contact après 6 à 8 semaines en cas d'ostéotomie. Le résultat s'apprécie entre 3 et 6 mois. Les consignes de votre chirurgien priment sur ces repères.",
        sections: [
          {
            heading: "Les premiers jours",
            paragraphs: [
              "Un pansement compressif ou un bandage adhésif maintient le menton et limite le gonflement ; il est retiré en général entre le 2e et le 7e jour. La lèvre inférieure est engourdie et gonflée, ce qui peut gêner pour boire et parler.",
            ],
            bullets: [
              "Dormir la tête surélevée et appliquer du froid, protégé, sur le menton.",
              "Prendre les antalgiques et, si prescrits, les antibiotiques.",
              "Boire à la paille ou au verre avec précaution, la lèvre étant moins sensible.",
              "Prévoir une personne pour le retour à domicile et la première nuit.",
            ],
          },
          {
            heading: "Alimentation et hygiène de la bouche",
            paragraphs: [
              "L'alimentation est liquide ou mixée les premiers jours, puis molle et tiède pendant une à deux semaines, avant un retour progressif à la normale. Évitez de croquer avec les dents de devant (pomme, pain dur) tant que le chirurgien ne l'a pas autorisé.",
              "Des bains de bouche sont prescrits après chaque repas. Brossez les dents avec une brosse souple en évitant la cicatrice. Le tabac et le vapotage sont à proscrire, car ils favorisent l'infection et l'ouverture de la cicatrice.",
            ],
          },
          {
            heading: "Reprise du travail et des activités",
            paragraphs: [],
            bullets: [
              "Travail de bureau : souvent après 1 à 2 semaines, davantage si une rhinoplastie a été associée.",
              "Conduite : lorsque vous n'êtes plus sous antalgiques sédatifs.",
              "Marche quotidienne dès les premiers jours ; sport doux après 3 à 4 semaines.",
              "Sports de contact, sports de raquette ou activités à risque de choc au visage : en général après 6 à 8 semaines en cas d'ostéotomie, avec l'accord du chirurgien.",
              "Soins dentaires programmés : prévenez votre dentiste et attendez l'avis du chirurgien.",
              "Soleil : protéger les ecchymoses et une éventuelle cicatrice sous le menton pendant plusieurs mois.",
            ],
          },
          {
            heading: "Les mois suivants",
            paragraphs: [
              "Le gonflement visible diminue nettement en deux à trois semaines, mais un œdème discret persiste plusieurs mois et masque l'affinement des contours. La sensibilité de la lèvre et du menton revient progressivement, souvent avec des fourmillements, sur quelques semaines à un an.",
              "Le résultat s'apprécie entre 3 et 6 mois. Une retouche ne se discute pas avant ce délai, sauf complication. Une consultation de contrôle avec radiographie est souvent prévue après une ostéotomie pour vérifier la consolidation.",
            ],
          },
          {
            heading: "Signes qui doivent faire appeler",
            paragraphs: [
              "Contactez le chirurgien en cas de fièvre, d'écoulement de pus, de gonflement qui augmente d'un seul côté, de cicatrice qui s'ouvre ou d'implant qui bouge. En cas de difficulté à respirer ou à avaler, de gonflement rapide sous la langue ou dans le cou, d'essoufflement ou de douleur thoracique, appelez le 15 ou le 112.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFSCMFCO, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Avant de se décider ──
      {
        interventionId: "genioplasty",
        kind: "decision",
        locale: "fr",
        title: "Génioplastie : avant de se décider",
        summary:
          "Génioplastie : bilan radiographique et dentaire, avis orthodontique, profiloplastie, motivation, questions à poser et délai légal de 15 jours.",
        answer:
          "La génioplastie s'envisage chez un adulte dont la croissance du visage est terminée, après un bilan qui vérifie que le problème vient du menton et non d'un décalage des mâchoires. Une radiographie, un examen de l'occlusion dentaire et, si besoin, un avis orthodontique précèdent la décision. En France, un délai minimal de 15 jours doit séparer la remise du devis de l'intervention.",
        sections: [
          {
            heading: "Le bilan avant l'intervention",
            paragraphs: [
              "Le chirurgien analyse le visage de face et de profil, souvent sur photographies standardisées, en tenant compte du nez, des lèvres et du cou. Il examine les dents, les gencives et la façon dont les mâchoires s'emboîtent (l'occlusion).",
            ],
            bullets: [
              "Radiographie panoramique dentaire, pour repérer les racines des dents et le trajet du nerf mentonnier.",
              "Téléradiographie de profil, qui mesure la position des mâchoires et du menton.",
              "Parfois un scanner ou un cone beam (scanner dentaire), surtout en cas d'asymétrie.",
              "Avis orthodontique en cas de décalage des mâchoires ou de trouble de l'occlusion.",
              "Soins dentaires préalables si une infection ou une maladie des gencives est présente.",
            ],
          },
          {
            heading: "Menton seul ou décalage des mâchoires ?",
            paragraphs: [
              "Un menton qui paraît fuyant peut être dû au menton lui-même, avec une occlusion normale, ou à une mâchoire inférieure en retrait, souvent avec des dents du bas qui ne s'emboîtent pas correctement sous celles du haut. Dans ce second cas, une génioplastie isolée améliore l'apparence du profil mais ne corrige ni l'occlusion ni la mastication.",
              "Un traitement orthodontique associé à une chirurgie des mâchoires peut alors être proposé. Il est plus long et plus lourd, mais traite la cause. Une génioplastie peut aussi lui être associée. Prenez le temps de comprendre les options avant de choisir.",
            ],
          },
          {
            heading: "La profiloplastie : nez et menton ensemble",
            paragraphs: [
              "Le nez et le menton sont jugés ensemble sur le profil : un menton en retrait peut donner l'impression d'un nez plus grand, et inversement. C'est pourquoi la génioplastie est souvent discutée en même temps qu'une rhinoplastie. Associer les deux réduit le nombre d'anesthésies, mais cumule les suites et allonge l'intervention. Une simulation sur photographie peut aider à visualiser un objectif, sans valeur de promesse.",
            ],
          },
          {
            heading: "Votre motivation et la dysmorphophobie",
            paragraphs: [
              "Demandez-vous ce qui vous gêne précisément, depuis combien de temps, et ce que vous attendez de l'intervention. Une décision prise sous la pression d'un proche, des réseaux sociaux ou des filtres photo expose davantage à la déception.",
              "Certaines personnes souffrent d'une préoccupation envahissante pour un défaut que les autres remarquent à peine : c'est le trouble dysmorphique corporel, ou dysmorphophobie, qui touche souvent le visage. La chirurgie ne le soulage pas et peut aggraver la détresse. Si vous vous reconnaissez dans cette description, parlez-en à votre médecin traitant ; des traitements efficaces existent. En cas d'idées suicidaires, le 3114 répond jour et nuit.",
            ],
          },
          {
            heading: "Questions à poser en consultation",
            paragraphs: [],
            bullets: [
              "Êtes-vous chirurgien maxillo-facial ou qualifié en chirurgie plastique, reconstructrice et esthétique ? (vérifiable sur l'Annuaire santé)",
              "Mon problème vient-il du menton seul ou d'un décalage des mâchoires ? Faut-il un avis orthodontique ?",
              "Pourquoi une ostéotomie plutôt qu'un implant, ou l'inverse, dans mon cas ?",
              "Quel est le risque d'engourdissement durable de la lèvre, et comment protégez-vous le nerf mentonnier ?",
              "Quel implant utilisez-vous, et que se passe-t-il s'il s'infecte ou se déplace ?",
              "Une rhinoplastie associée est-elle utile, et quelles en seraient les conséquences sur la convalescence ?",
              "Quelle anesthésie, dans quel établissement, et qui joindre la nuit ou le week-end en cas de problème ?",
              "Que comprend le devis, et que se passe-t-il en cas de retouche, de retrait d'implant ou de plaque ?",
            ],
          },
          {
            heading: "Le délai de réflexion et le second avis",
            paragraphs: [
              "Le Code de la santé publique impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention, et aucun paiement autre que la consultation ne peut être exigé avant. Ce délai est un minimum : rien ne vous oblige à décider à son terme. Demander un second avis, par exemple auprès d'un chirurgien maxillo-facial si un décalage des mâchoires est possible, est toujours légitime.",
            ],
          },
        ],
        sources: [LEGIFRANCE_L6322_2, HAS, ANNUAIRE_SANTE, SFSCMFCO, SOFCPRE, N3114],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Alternatives ──
      {
        interventionId: "genioplasty",
        kind: "alternatives",
        locale: "fr",
        title: "Alternatives à la génioplastie",
        summary:
          "Acide hyaluronique, lipofilling, orthodontie et chirurgie des mâchoires, rhinoplastie seule ou ne rien faire : alternatives à la génioplastie.",
        answer:
          "Selon la situation, les alternatives sont les injections d'acide hyaluronique ou le lipofilling pour un apport de volume modéré, un traitement orthodontique avec chirurgie des mâchoires si le menton fuyant traduit un décalage des mâchoires, une rhinoplastie seule pour rééquilibrer le profil, un traitement du double menton graisseux, ou ne rien faire.",
        sections: [
          {
            heading: "Injections d'acide hyaluronique",
            paragraphs: [
              "Un produit de comblement injecté sur le menton augmente la projection de façon modérée, sans chirurgie. L'effet est transitoire, de quelques mois à environ un an selon le produit, et des injections répétées sont nécessaires. Il ne permet pas de réduire ni de raccourcir le menton.",
              "Les risques comprennent bleus, bosses, infection et, rarement, l'obstruction d'un vaisseau par le produit, qui peut abîmer la peau. Seuls des produits marqués CE, injectés par un médecin, doivent être utilisés.",
            ],
          },
          {
            heading: "Lipofilling",
            paragraphs: [
              "La graisse prélevée par liposuccion sur une autre zone peut être réinjectée sur le menton. L'apport de volume est modéré, une partie de la graisse se résorbe et plusieurs séances peuvent être nécessaires. C'est une intervention, avec ses propres suites et risques, sur la zone de prélèvement comme sur le menton.",
            ],
          },
          {
            heading: "Orthodontie et chirurgie des mâchoires",
            paragraphs: [
              "Lorsque le menton fuyant traduit une mâchoire inférieure en retrait avec un trouble de l'occlusion, un traitement orthodontique suivi d'une chirurgie orthognathique (déplacement de la mâchoire) corrige la cause. Le parcours dure souvent plus d'un an, la chirurgie est plus lourde et comporte ses propres risques, notamment pour la sensibilité de la lèvre. Une génioplastie peut lui être associée si besoin.",
            ],
          },
          {
            heading: "Rhinoplastie seule ou traitement du cou",
            paragraphs: [
              "Chez certaines personnes, réduire un nez proéminent suffit à rééquilibrer le profil. Si la gêne vient surtout d'un double menton graisseux, une liposuccion du cou ou des injections lipolytiques peuvent être plus adaptées qu'une modification de l'os.",
            ],
          },
          {
            heading: "Ne rien faire",
            paragraphs: [
              "Choisir de ne pas intervenir est une option légitime. La perception de son profil peut évoluer avec le temps, et la réflexion peut être reprise plus tard sans conséquence médicale.",
            ],
          },
        ],
        sources: [HAS, ANSM, SOFCPRE, SFSCMFCO],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "osteotomy",
        locale: "fr",
        slug: "osteotomie",
        term: "Ostéotomie",
        aliases: ["ostéotomies", "osteotomie", "osteotomies", "ostéotomie du menton", "génioplastie osseuse", "genioplastie osseuse"],
        definition:
          "Une ostéotomie est une coupe chirurgicale d'un os, réalisée pour en modifier la forme, la longueur ou la position. Le fragment déplacé est ensuite fixé, souvent par des plaques et des vis, le temps que l'os consolide.",
        detail: [
          "En chirurgie du visage, l'ostéotomie est utilisée pour la génioplastie (coupe horizontale du menton sous les racines des dents), pour la chirurgie des mâchoires (chirurgie orthognathique) et pour certaines rhinoplasties, où les os du nez sont coupés pour les rapprocher ou les redresser.",
          "Dans une génioplastie, le fragment osseux peut être avancé, reculé, raccourci, allongé ou recentré. Il est fixé par de petites plaques et vis en titane, généralement laissées en place. La consolidation de l'os prend en général six semaines environ, ce qui explique les précautions vis-à-vis des chocs pendant cette période.",
          "Les risques propres comprennent l'atteinte d'un nerf voisin (le nerf mentonnier pour le menton), la lésion des racines dentaires, l'asymétrie et, rarement, un défaut de consolidation.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "mental-nerve",
        locale: "fr",
        slug: "nerf-mentonnier",
        term: "Nerf mentonnier",
        aliases: ["nerfs mentonniers", "trou mentonnier", "foramen mentonnier", "atteinte du nerf mentonnier"],
        definition:
          "Le nerf mentonnier est un nerf de la sensibilité qui sort de la mâchoire inférieure de chaque côté, sous les prémolaires. Il donne la sensibilité de la lèvre inférieure, du menton et de la gencive voisine.",
        detail: [
          "C'est une branche terminale du nerf qui parcourt l'intérieur de la mâchoire inférieure (nerf alvéolaire inférieur). Il émerge par un petit orifice de l'os, le trou mentonnier, que le chirurgien repère sur la radiographie et pendant l'intervention.",
          "Lors d'une génioplastie, d'une pose d'implant de menton ou d'une chirurgie des mâchoires, il peut être étiré ou comprimé. Un engourdissement ou des fourmillements de la lèvre inférieure et du menton en résultent fréquemment ; ils régressent le plus souvent en quelques semaines à quelques mois.",
          "Une diminution de sensibilité peut persister chez certains patients, et une perte complète définitive est rare. Le nerf mentonnier ne commande pas les mouvements de la lèvre, qui dépendent du nerf facial : une atteinte ne paralyse donc pas la lèvre, mais modifie la sensation.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },

  // ════════════════════════════════════ UNITED KINGDOM ════════════════════════════════════
  "en-gb": {
    intervention: {
      id: "genioplasty",
      locale: "en-gb",
      slug: "chin-surgery-genioplasty",
      category: "face",
      title: "Chin surgery (genioplasty)",
      summary:
        "Genioplasty changes the projection or height of the chin using a bone cut or an implant. Assessment, techniques, risks and recovery explained.",
      description: [
        "Genioplasty, or chin surgery, changes the position, projection, height or width of the chin. It can bring forward a receding chin, reduce or set back a prominent chin, correct asymmetry or change the height of the lower face.",
        "For moving bone, the standard technique is a sliding genioplasty: through a cut inside the mouth, between the lower lip and the gum, the surgeon makes a horizontal cut (osteotomy) through the lower part of the jaw, below the tooth roots. The piece of bone is moved forwards, backwards, up, down or to the side, then held with small titanium plates and screws, which are usually left in place.",
        "Another option is a chin implant, made of solid silicone or porous polyethylene, inserted through the mouth or through a small cut under the chin. An implant mainly increases projection; it cannot shorten, lengthen or re-centre the chin. It is an implanted medical device with its own risks, such as infection, movement and wearing away of the bone beneath it.",
        "Chin reduction is done either with an osteotomy, setting back or shortening the bone, or by shaving the bone. Removing bone without supporting the overlying soft tissues can cause the chin skin and muscle to sag, so the technique needs careful planning.",
        "Before deciding, an assessment establishes whether the issue lies in the chin alone or in the position of the whole jaw. A receding chin is sometimes a sign that the lower jaw sits too far back, with the teeth not meeting properly (malocclusion). In that case, orthodontic treatment combined with jaw surgery (orthognathic surgery) may be more appropriate than a genioplasty alone, which would disguise the problem without correcting it.",
        "Genioplasty is often combined with a nose job (rhinoplasty), because the nose and chin are judged together in profile; this is sometimes called profileplasty. It can also be combined with neck liposuction or jaw surgery. The final result takes several months to appear as swelling settles.",
      ],
      indications: [
        "A receding chin in an adult whose bite is satisfactory or has already been treated.",
        "A chin that is too prominent, too long or too short, after clinical and X-ray assessment.",
        "Asymmetry of the chin, as part of an assessment of the whole face.",
        "Balancing the profile alongside rhinoplasty (profileplasty).",
        "As an addition to jaw surgery, when the chin remains set back or off-centre after the jaws have been corrected.",
        "The effects of facial injury or a congenital condition, assessed by a specialist team.",
        "A specific, long-standing concern that is your own decision, in an adult whose facial growth is complete.",
      ],
      contraindications: [
        "A jaw discrepancy with a bite problem that has not been assessed: an orthodontic and maxillofacial opinion is needed first.",
        "Unrealistic expectations or a request driven by pressure from someone else.",
        "Excessive concern about a minor or barely visible feature, which should be discussed with the surgeon.",
        "Untreated tooth or gum infection, or poor oral hygiene.",
        "Very long tooth roots or thin bone that limit the scope for an osteotomy (assessed on X-ray).",
        "Smoking or nicotine use, which increase the risk of infection and poor healing of the gum and bone: stopping is advised.",
        "Bleeding disorders, poorly controlled long-term conditions or some medicines that weaken bone.",
        "Pregnancy or breastfeeding.",
      ],
      risks: [
        {
          name: "Swelling, bruising and discomfort",
          detail:
            "Common and expected: the chin, lower lip and sometimes the neck are swollen and tender, and bruising may track down into the neck. Most visible swelling settles over two to three weeks; some subtle swelling lasts several months.",
        },
        {
          name: "Numbness of the lower lip and chin (mental nerve injury)",
          detail:
            "The mental nerve, which supplies feeling to the lower lip, chin and nearby gum, runs very close to the operated area. After an osteotomy, numbness or tingling is very common and usually temporary, lasting weeks to months. Reduced sensation can persist in a minority of patients; complete, permanent loss is rare. The risk also exists, to a lesser degree, with an implant.",
        },
        {
          name: "Infection",
          detail:
            "Uncommon, and more likely with a cut inside the mouth and with smoking. It is usually treated with antibiotics. An infected implant may need to be removed, with the option of replacing it some months later. An infected plate or screw may also need removing.",
        },
        {
          name: "Asymmetry, contour irregularity and under- or over-correction",
          detail:
            "The chin may sit slightly off-centre, the change may be less or more than expected, or a step in the bone may be felt or seen along the jawline. A revision can be considered once healing has settled, usually after at least six months.",
        },
        {
          name: "Implant movement",
          detail:
            "An implant can shift, rotate or become easy to feel, especially in the first few weeks. Over the years it can also wear away some of the underlying bone. Repositioning or removal may be needed.",
        },
        {
          name: "Damage to tooth roots",
          detail:
            "Rare: a bone cut too close to the roots of the front teeth can damage them and cause a tooth to lose its nerve supply, needing dental treatment. The pre-operative X-ray helps the surgeon keep the cut at a safe distance.",
        },
        {
          name: "Haematoma and wound breakdown inside the mouth",
          detail:
            "A collection of blood (haematoma) may need draining. The wound inside the lip can partly open, especially with tension, smoking or poor oral hygiene; it usually heals with mouthwashes and local care.",
        },
        {
          name: "Changes to the lower lip and chin muscle",
          detail:
            "After the soft tissues are lifted off the bone, the lower lip may sit lower, show more of the lower teeth or close less easily, and the chin muscle may tighten unusually. This is usually temporary but can persist and need further surgery.",
        },
        {
          name: "Plates or screws that can be felt",
          detail:
            "Titanium plates and screws are usually well tolerated, but they can sometimes be felt under thin skin or cause discomfort; they can then be removed in a short second procedure.",
        },
        {
          name: "Poor bone healing and bone resorption",
          detail:
            "Rarely, the bone segment heals poorly, or the bone partly resorbs and reduces the correction. Swelling of the floor of the mouth severe enough to affect breathing is very rare but is an emergency: call 999.",
        },
        {
          name: "Anaesthetic risks",
          detail: "Discussed with the anaesthetist at your pre-operative assessment.",
        },
      ],
      procedure: {
        anaesthesia:
          "Usually general anaesthesia for an osteotomy; local anaesthesia, sometimes with sedation, may be possible for some implant procedures.",
        duration:
          "Around 1 to 2 hours for genioplasty alone; longer if combined with rhinoplasty or jaw surgery.",
        hospitalStay:
          "Usually a day case or one night in hospital; longer if combined with jaw surgery.",
      },
      recovery: [
        "Day 1: a pressure dressing or tape around the chin, swelling and numbness of the lower lip, a liquid or blended diet and cold compresses.",
        "Week 1: soft, lukewarm food, mouthwash after every meal and gentle tooth brushing away from the wound; the dressing usually comes off between days 2 and 7.",
        "Stitches inside the mouth are usually dissolvable and fall out within one to three weeks.",
        "Return to desk-based work often after 1 to 2 weeks, depending on swelling and whether rhinoplasty was combined.",
        "Weeks 2 to 3: visible swelling has gone down noticeably; gradually return to a normal diet, avoiding biting into hard food with the front teeth.",
        "Gentle exercise after 3 to 4 weeks; contact sports and activities with a risk of a blow to the face after 6 to 8 weeks following an osteotomy, while the bone heals, once your surgeon agrees.",
        "Numbness of the lower lip and chin usually improves over weeks to months.",
        "Final result usually judged between 3 and 6 months, and up to a year for sensation to recover and contours to refine.",
      ],
      alternatives: [
        "Doing nothing: a legitimate choice, which you can revisit later.",
        "Hyaluronic acid dermal fillers: a temporary increase in projection for a mildly receding chin; their own risks include lumps, infection and, rarely, a blocked blood vessel.",
        "Fat transfer: a modest increase in volume, with part of the fat reabsorbed and variable results.",
        "Orthodontics combined with jaw surgery (orthognathic surgery) when a receding chin reflects a jaw discrepancy with a bite problem.",
        "Rhinoplasty alone: for some people, reducing a prominent nose is enough to balance the profile.",
        "Neck liposuction or fat-dissolving injections when the concern is mainly a fatty double chin rather than the bone.",
      ],
      faq: [
        {
          question: "Is an osteotomy or a chin implant more suitable?",
          answer:
            "It depends on the change you want and your anatomy. An osteotomy can move the chin forwards, backwards, up, down or sideways using your own bone, with no foreign material, but it is bone surgery with a greater risk of lip numbness. An implant is simpler but only increases projection, and it carries risks of infection, movement and bone wear. Ask your surgeon why they recommend one or the other in your case.",
        },
        {
          question: "Why does the surgeon want X-rays and an orthodontic opinion?",
          answer:
            "X-rays, usually a panoramic dental X-ray (OPG) and often a lateral skull X-ray (cephalogram), sometimes a CT or cone beam scan, show the position of the tooth roots and the mental nerve and the thickness of the bone, which guides the cut. Checking your bite shows whether the jaws are out of line. If they are, an orthodontic opinion is advised, as jaw surgery may be more appropriate than a genioplasty alone.",
        },
        {
          question: "Will I lose feeling in my lower lip?",
          answer:
            "Numbness of the lower lip and chin is very common after an osteotomy, because the mental nerve is stretched during surgery. It usually improves over weeks to months. Reduced sensation can persist in some patients; complete, permanent loss is rare. Ask your surgeon how they protect this nerve.",
        },
        {
          question: "Can genioplasty be done at the same time as rhinoplasty?",
          answer:
            "Yes, this is common and is sometimes called profileplasty. Combining them means one anaesthetic and one recovery period, but the operation takes longer and you recover from both procedures at once. Your surgeon will assess whether combining them is reasonable for you.",
        },
        {
          question: "Will there be a visible scar?",
          answer:
            "With the approach through the mouth, which is most common, the scar is hidden inside the lower lip. Some implants are placed through a short cut under the chin, which usually leaves a discreet scar in the natural crease.",
        },
        {
          question: "Do the plates and screws need to come out?",
          answer:
            "Usually not: titanium is well tolerated and the hardware is normally left in place. Removal may be offered if it can be felt, causes discomfort or becomes infected, in a short procedure.",
        },
        {
          question: "Is chin surgery available on the NHS?",
          answer:
            "Not for cosmetic reasons. Genioplasty may be carried out on the NHS as part of treatment for a significant jaw discrepancy with functional problems, a congenital condition or facial injury, usually within an orthodontic and maxillofacial pathway and according to local criteria.",
        },
        {
          question: "How long should I wait before deciding?",
          answer:
            "There is no legal waiting period in the UK, but professional guidance recommends at least two weeks between your consultation and agreeing to surgery. Use this time to think, ask questions and seek a second opinion if you wish.",
        },
        {
          question: "Who should carry out my chin surgery?",
          answer:
            "Genioplasty is performed by oral and maxillofacial surgeons and by plastic surgeons. Check that your surgeon is on the GMC Specialist Register in oral and maxillofacial surgery or plastic surgery, and that the hospital or clinic is registered with the Care Quality Commission in England (or the equivalent regulator in Scotland, Wales or Northern Ireland). If your jaws may be out of line, a team including a maxillofacial surgeon and an orthodontist is preferable.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risks ──
      {
        interventionId: "genioplasty",
        kind: "risks",
        locale: "en-gb",
        title: "Chin surgery risks",
        summary:
          "Lip numbness (mental nerve), implant infection, asymmetry, implant movement and tooth damage: the risks of genioplasty and when to seek urgent help.",
        answer:
          "Swelling, bruising and numbness of the lower lip are expected after genioplasty. Mental nerve injury is the most characteristic risk: usually temporary, it can sometimes persist. Implant infection or movement, asymmetry, damage to a tooth root and changes to the lower lip are less common.",
        sections: [
          {
            heading: "Common and expected effects",
            paragraphs: ["These are normal after chin surgery and settle gradually over weeks."],
            bullets: [
              "Swelling of the chin, lower lip and sometimes the neck, at its worst around days 2 to 3.",
              "Bruising that may track down into the neck, fading over two to three weeks.",
              "Numbness or tingling of the lower lip, chin and gum.",
              "Difficulty chewing, speaking or smiling for the first few days.",
              "A feeling of stiffness in the chin and lip for several weeks.",
            ],
          },
          {
            heading: "The mental nerve and sensation",
            paragraphs: [
              "The mental nerve leaves the jawbone on each side, below the premolar teeth, and supplies feeling to the lower lip and chin. Surgeons identify and protect it, but it is inevitably stretched during an osteotomy. Most patients have temporary numbness that improves over weeks to months, sometimes up to a year.",
              "In a minority, reduced feeling, tingling or an unpleasant sensation persists. Complete, permanent loss is rare. It does not stop the lip from moving, because movement depends on a different nerve, but it can make drinking, kissing or noticing food on the lip more difficult.",
            ],
          },
          {
            heading: "Less common complications",
            paragraphs: [
              "How likely these are depends on the technique (osteotomy or implant), your anatomy, smoking and oral hygiene.",
            ],
            bullets: [
              "Infection, a particular concern with implants, which may need to be removed.",
              "Implant movement, rotation or looseness; wear of the bone beneath an implant over time.",
              "Asymmetry, under- or over-correction, or a step in the bone along the jawline.",
              "Haematoma or partial opening of the wound inside the mouth.",
              "A lower lip that sits lower, shows more of the lower teeth or closes less easily; unusual tightening of the chin muscle.",
              "Plates or screws that can be felt or cause discomfort, sometimes needing removal.",
            ],
          },
          {
            heading: "Rare but serious complications",
            paragraphs: [
              "A cut too close to the tooth roots can damage a front tooth so that it loses its nerve supply. The bone may heal poorly or partly resorb. Very rarely, major swelling or a haematoma in the floor of the mouth can affect breathing. As with any surgery under general anaesthesia, there is a small risk of blood clots and anaesthetic complications.",
            ],
          },
          {
            heading: "When to seek help urgently",
            paragraphs: [
              "Contact your surgeon's team promptly if something does not feel right; if you cannot reach them, call NHS 111. Call 999 if you have difficulty breathing or swallowing, rapid swelling under the tongue or in the neck, chest pain or sudden breathlessness.",
            ],
            bullets: [
              "Difficulty breathing or swallowing, a change in your voice, rapid swelling of the floor of the mouth or neck.",
              "Swelling on one side that suddenly increases, or heavy bleeding from the mouth.",
              "Fever, redness or warmth of the chin, pus or a persistent bad taste in the mouth.",
              "A wound inside the mouth that opens widely, or an implant or plate that becomes visible.",
              "Pain that gets worse after the first few days rather than better.",
              "A painful, warm or swollen calf on one side.",
            ],
          },
          {
            heading: "What increases the risk",
            paragraphs: ["Some factors can be changed and should be discussed at your consultation."],
            bullets: [
              "Smoking and vaping, which impair healing of the gum and bone.",
              "Untreated tooth decay, dental infection or gum disease.",
              "A large bone movement, or combining genioplasty with another operation, which lengthens surgery.",
              "Medicines or supplements that increase bleeding, such as aspirin, anti-inflammatory painkillers or anticoagulants.",
              "A previous implant infection or rejection.",
            ],
          },
          {
            heading: "Revision surgery",
            paragraphs: [
              "Asymmetry, under-correction, a displaced implant or troublesome hardware may justify further surgery. This is usually only considered once healing has settled, at least six months later, unless there is an urgent problem such as infection or an exposed implant. Ask before you commit what would happen, and what you would pay, if a revision were needed.",
            ],
          },
        ],
        sources: [NHS, BAOMS, BAPRAS, BAAPS, MHRA],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Cost ──
      {
        interventionId: "genioplasty",
        kind: "cost",
        locale: "en-gb",
        title: "Chin surgery cost",
        summary:
          "What a genioplasty quote should include, what affects the price (technique, implant, X-rays, combined surgery), NHS funding and complication costs.",
        answer:
          "The cost of chin surgery depends mainly on the technique (osteotomy or implant), the assessment needed, the anaesthetic, the hospital and whether it is combined with rhinoplasty. We do not give price ranges: only a written, itemised quote after a consultation with the operating surgeon tells you the actual cost. The NHS does not fund genioplasty for cosmetic reasons.",
        sections: [
          {
            heading: "What a quote should include",
            paragraphs: ["Ask for a written quote that lists every item, or states clearly what is excluded."],
            bullets: [
              "The surgeon's fee, with the planned technique (osteotomy, implant or reduction).",
              "The anaesthetist's fee, which may be billed separately.",
              "Hospital or clinic fees: theatre time, day case or overnight stay.",
              "Hardware: titanium plates and screws, or the chin implant (with its make and model).",
              "Pre-operative imaging: dental X-rays, cephalogram and sometimes a CT or cone beam scan.",
              "Follow-up appointments and what happens if a revision, implant removal or hardware removal is needed.",
            ],
          },
          {
            heading: "What affects the price",
            paragraphs: [
              "The technique, the size of the movement, the length of the operation, the type of anaesthetic, the implant chosen and whether you stay overnight all affect the quote. Combining genioplasty with rhinoplasty (profileplasty) or neck liposuction changes the total, although some theatre and anaesthetic costs are shared.",
              "An orthodontic assessment, and any orthodontic or dental treatment needed beforehand, are charged separately. Price alone does not tell you about quality.",
            ],
          },
          {
            heading: "NHS funding",
            paragraphs: [
              "The NHS does not usually fund cosmetic surgery, and chin surgery for appearance alone is not routinely available. Genioplasty may be funded as part of treatment for a significant jaw discrepancy with functional problems, a congenital condition or facial injury, usually within a combined orthodontic and maxillofacial pathway, according to local criteria. In exceptional cases an individual funding request (IFR) may be considered. Your GP or dentist can advise.",
            ],
          },
          {
            heading: "Paying privately: points to check",
            paragraphs: [
              "Professional standards say you should not be pressured into booking, and time-limited discounts or package deals are a warning sign. The consultation should be with the operating surgeon, and you should have time to reflect before paying a deposit. Check whether any deposit is refundable, and ask for the implant details to be recorded so it can be traced.",
              "Be cautious about finance offered at the consultation: you remain committed to the repayments even if you are unhappy with the result or need further treatment.",
            ],
          },
          {
            heading: "The cost of complications and revisions",
            paragraphs: [
              "Removing an infected implant, revising asymmetry, removing a plate or treating a tooth after root damage can lead to further costs, more time off work and extra travel. Ask what the quote covers, and whether insurance for complications is included or available. If you have surgery abroad, follow-up care at home may be harder to arrange.",
            ],
          },
        ],
        sources: [NHS, GMC, CQC, BAOMS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Recovery ──
      {
        interventionId: "genioplasty",
        kind: "recovery",
        locale: "en-gb",
        title: "Recovery after chin surgery",
        summary:
          "Recovery after genioplasty: dressings, soft diet, mouth care, returning to work and sport, lip sensation and the warning signs to act on.",
        answer:
          "The first days bring chin swelling, numbness of the lower lip and a liquid then soft diet. Many people return to desk-based work after 1 to 2 weeks, and to contact sports after 6 to 8 weeks following an osteotomy. The result is usually judged between 3 and 6 months. Always follow your own surgeon's instructions.",
        sections: [
          {
            heading: "The first few days",
            paragraphs: [
              "A pressure dressing or tape supports the chin and limits swelling; it usually comes off between days 2 and 7. The lower lip is numb and swollen, which can make drinking and speaking awkward.",
            ],
            bullets: [
              "Sleep with your head raised and apply wrapped cold packs to the chin.",
              "Take the painkillers and any antibiotics prescribed.",
              "Drink carefully, as your lip has less feeling than usual.",
              "Arrange for someone to take you home and stay with you the first night.",
            ],
          },
          {
            heading: "Eating and mouth care",
            paragraphs: [
              "Your diet is liquid or blended for the first days, then soft and lukewarm for one to two weeks, before gradually returning to normal. Avoid biting into hard food with your front teeth (an apple, crusty bread) until your surgeon says it is fine.",
              "Mouthwash is usually prescribed after every meal. Brush your teeth with a soft brush, keeping away from the wound. Avoid smoking and vaping, which increase the risk of infection and wound breakdown.",
            ],
          },
          {
            heading: "Returning to work and activity",
            paragraphs: [],
            bullets: [
              "Desk-based work: often after 1 to 2 weeks, longer if rhinoplasty was combined.",
              "Driving: once you are no longer taking sedating painkillers; check your insurer's conditions.",
              "Daily walking from the first days; gentle exercise after 3 to 4 weeks.",
              "Contact sports, racquet sports or anything with a risk of a blow to the face: usually after 6 to 8 weeks following an osteotomy, once your surgeon agrees.",
              "Planned dental treatment: let your dentist know and wait for your surgeon's advice.",
              "Sun: protect bruising and any scar under the chin for several months.",
            ],
          },
          {
            heading: "The following months",
            paragraphs: [
              "Visible swelling goes down noticeably over two to three weeks, but subtle swelling lasts several months and masks the final contour. Feeling in the lip and chin returns gradually, often with tingling, over weeks to a year.",
              "The result is usually judged between 3 and 6 months. Revision is not considered before then unless there is a complication. A follow-up X-ray is often arranged after an osteotomy to check that the bone has healed.",
            ],
          },
          {
            heading: "Warning signs",
            paragraphs: [
              "Contact your surgeon's team if you develop a fever, pus, swelling that increases on one side, a wound that opens or an implant that moves; out of hours, call NHS 111. Call 999 for difficulty breathing or swallowing, rapid swelling under the tongue or in the neck, chest pain or breathlessness.",
            ],
          },
        ],
        sources: [NHS, BAOMS, BAPRAS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Before you decide ──
      {
        interventionId: "genioplasty",
        kind: "decision",
        locale: "en-gb",
        title: "Chin surgery: before you decide",
        summary:
          "Deciding on genioplasty: X-rays and bite assessment, orthodontic opinion, profileplasty, motivation, questions to ask and the two-week cooling-off period.",
        answer:
          "Genioplasty tends to suit adults whose facial growth is complete, after an assessment confirming that the issue lies in the chin rather than a jaw discrepancy. X-rays, a check of your bite and, if needed, an orthodontic opinion come before any decision. There is no legal waiting period in the UK, but professional guidance recommends at least two weeks between consultation and agreeing to surgery.",
        sections: [
          {
            heading: "The assessment before surgery",
            paragraphs: [
              "Your surgeon assesses your face from the front and in profile, often with standardised photographs, taking the nose, lips and neck into account. They examine your teeth and gums and how your jaws meet (your bite, or occlusion).",
            ],
            bullets: [
              "A panoramic dental X-ray (OPG) to locate the tooth roots and the course of the mental nerve.",
              "A lateral cephalogram, a side-on X-ray that measures the position of the jaws and chin.",
              "Sometimes a CT or cone beam scan, particularly for asymmetry.",
              "An orthodontic opinion if the jaws are out of line or the teeth do not meet properly.",
              "Dental treatment first if there is infection or gum disease.",
            ],
          },
          {
            heading: "The chin alone, or the whole jaw?",
            paragraphs: [
              "A chin that looks receding may be due to the chin itself, with a normal bite, or to a lower jaw that sits too far back, often with the lower teeth sitting behind the upper teeth. In the second case, a genioplasty alone improves the look of the profile but does not correct the bite or chewing.",
              "Orthodontic treatment combined with jaw surgery may then be offered. It takes longer and is a bigger undertaking, but it treats the cause, and a genioplasty can be added if needed. Take time to understand the options before choosing.",
            ],
          },
          {
            heading: "Profileplasty: nose and chin together",
            paragraphs: [
              "The nose and chin are judged together in profile: a receding chin can make the nose look larger, and vice versa. This is why genioplasty is often discussed alongside rhinoplasty. Combining them means fewer anaesthetics but a longer operation and a combined recovery. Computer imaging can help illustrate a goal, but it is not a promise of the outcome.",
            ],
          },
          {
            heading: "Your motivation and body dysmorphic disorder",
            paragraphs: [
              "Think about what exactly bothers you, for how long, and what you expect to change. A decision made because of pressure from others, social media or photo filters is more likely to lead to disappointment.",
              "Body dysmorphic disorder (BDD) is a mental health condition in which a person spends a lot of time worrying about flaws in their appearance that others barely notice; the face is often involved. Surgery does not usually relieve BDD and can make distress worse. If this sounds familiar, speak to your GP; effective treatments are available. If you are struggling to cope, Samaritans can be reached any time on 116 123.",
            ],
          },
          {
            heading: "Questions to ask your surgeon",
            paragraphs: [],
            bullets: [
              "Are you on the GMC Specialist Register in oral and maxillofacial surgery or plastic surgery? Do you hold the Royal College of Surgeons' cosmetic surgery certification?",
              "Is my concern the chin alone or a jaw discrepancy? Do I need an orthodontic opinion?",
              "Why an osteotomy rather than an implant, or the other way round, in my case?",
              "What is the risk of lasting lip numbness, and how do you protect the mental nerve?",
              "Which implant do you use, and what happens if it becomes infected or moves?",
              "Would combining rhinoplasty help, and how would it affect my recovery?",
              "What anaesthetic will I have, where, and is the hospital registered with the CQC? Who do I contact at night or at weekends?",
              "What does the quote include, and what happens if I need a revision or implant or plate removal?",
            ],
          },
          {
            heading: "Cooling-off and second opinions",
            paragraphs: [
              "UK law sets no statutory waiting period, but GMC guidance recommends that you have time to reflect, and professional standards advise at least two weeks between consultation and agreeing to surgery. The consultation should be with the operating surgeon, not only a sales adviser. A second opinion, for example from a maxillofacial surgeon if your jaws may be out of line, is always reasonable.",
            ],
          },
        ],
        sources: [NHS, GMC, RCS, CQC, BOS, SAMARITANS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Alternatives ──
      {
        interventionId: "genioplasty",
        kind: "alternatives",
        locale: "en-gb",
        title: "Alternatives to chin surgery",
        summary:
          "Dermal fillers, fat transfer, orthodontics with jaw surgery, rhinoplasty alone or doing nothing: alternatives to genioplasty with their limits and risks.",
        answer:
          "Depending on your situation, alternatives include hyaluronic acid fillers or fat transfer for a modest increase in volume, orthodontics with jaw surgery if a receding chin reflects a jaw discrepancy, rhinoplasty alone to balance the profile, treatment of a fatty double chin, or no treatment.",
        sections: [
          {
            heading: "Dermal fillers",
            paragraphs: [
              "A hyaluronic acid filler injected into the chin gives a modest increase in projection without surgery. The effect is temporary, lasting from a few months to around a year depending on the product, and repeat treatments are needed. Fillers cannot reduce or shorten the chin.",
              "Risks include bruising, lumps, infection and, rarely, a blocked blood vessel that can damage the skin. In the UK, fillers are often given outside medical settings with little regulation, so check who is treating you, their training and the product used. Problems can be reported through the MHRA Yellow Card scheme.",
            ],
          },
          {
            heading: "Fat transfer",
            paragraphs: [
              "Fat taken by liposuction from another area can be injected into the chin. The increase in volume is modest, some of the fat is reabsorbed and more than one session may be needed. It is a procedure with its own recovery and risks, at both the donor site and the chin.",
            ],
          },
          {
            heading: "Orthodontics and jaw surgery",
            paragraphs: [
              "When a receding chin reflects a lower jaw that sits too far back with a bite problem, orthodontic treatment followed by orthognathic surgery (moving the jaw) corrects the cause. The pathway often takes more than a year, and the surgery is bigger, with its own risks, including to lip sensation. A genioplasty can be added if needed.",
            ],
          },
          {
            heading: "Rhinoplasty alone or treating the neck",
            paragraphs: [
              "For some people, reducing a prominent nose is enough to balance the profile. If the concern is mainly a fatty double chin, neck liposuction or fat-dissolving injections may be more suitable than changing the bone.",
            ],
          },
          {
            heading: "Doing nothing",
            paragraphs: [
              "Choosing not to have treatment is a legitimate decision. How you feel about your profile may change over time, and you can revisit the question later without any medical consequence.",
            ],
          },
        ],
        sources: [NHS, MHRA, BAAPS, BOS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "osteotomy",
        locale: "en-gb",
        slug: "osteotomy",
        term: "Osteotomy",
        aliases: ["osteotomies", "bone cut", "sliding genioplasty", "chin osteotomy", "osseous genioplasty"],
        definition:
          "An osteotomy is a surgical cut through a bone to change its shape, length or position. The moved segment is then held in place, often with plates and screws, while the bone heals.",
        detail: [
          "In facial surgery, osteotomies are used in genioplasty (a horizontal cut through the chin below the tooth roots), in jaw surgery (orthognathic surgery) and in some rhinoplasties, where the nasal bones are cut to narrow or straighten them.",
          "In a sliding genioplasty, the bone segment can be moved forwards, backwards, up, down or to the side. It is fixed with small titanium plates and screws, usually left in place. Bone healing generally takes around six weeks, which is why a blow to the face should be avoided during that period.",
          "Specific risks include injury to a nearby nerve (the mental nerve in the chin), damage to tooth roots, asymmetry and, rarely, poor bone healing.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "mental-nerve",
        locale: "en-gb",
        slug: "mental-nerve",
        term: "Mental nerve",
        aliases: ["mental nerves", "mental foramen", "mental nerve injury", "lip numbness"],
        definition:
          "The mental nerve is a sensory nerve that leaves the lower jaw on each side, below the premolar teeth. It supplies feeling to the lower lip, the chin and the nearby gum.",
        detail: [
          "It is the end branch of the nerve that runs inside the lower jaw (the inferior alveolar nerve). It comes out through a small opening in the bone, the mental foramen, which the surgeon identifies on X-ray and during the operation. The name comes from the Latin for chin, not from the mind.",
          "During genioplasty, chin implant placement or jaw surgery, it can be stretched or compressed. Numbness or tingling of the lower lip and chin is a common result and usually improves over weeks to months.",
          "Reduced sensation can persist in some patients, and complete permanent loss is rare. The mental nerve does not control lip movement, which depends on the facial nerve, so an injury does not paralyse the lip but changes how it feels.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },
};
