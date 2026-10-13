import type { Source } from "../types";
import type { Dossier } from "./types";

/** Lifting du visage (lifting cervico-facial) : fiche, sous-pages et lexique (fr, en-gb). Brouillon à relire par le comité médical. */

// ─────────────────────────── Sources France ───────────────────────────
const HAS: Source = { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" };
const SOFCPRE: Source = {
  label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)",
  url: "https://www.sofcpre.fr",
};
const SFORL: Source = {
  label: "Société française d'ORL et de chirurgie de la face et du cou (SFORL)",
  url: "https://www.sforl.org",
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
const ANSM: Source = {
  label: "Agence nationale de sécurité du médicament et des produits de santé (ANSM) — dispositifs médicaux, produits de comblement",
  url: "https://ansm.sante.fr",
};
const N3114: Source = { label: "3114 — numéro national de prévention du suicide", url: "https://3114.fr" };

// ─────────────────────────── Sources Royaume-Uni ───────────────────────────
const NHS: Source = { label: "NHS: cosmetic procedures, facelift", url: "https://www.nhs.uk" };
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
  label: "Royal College of Surgeons of England: professional standards and certification in cosmetic surgery",
  url: "https://www.rcseng.ac.uk",
};
const MHRA: Source = {
  label: "Medicines and Healthcare products Regulatory Agency (MHRA): medical devices and Yellow Card reporting",
  url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
};

const REVIEW = { status: "draft" } as const;
const UPDATED_AT = "2026-10-13";
const FR = { interventionId: "facelift", locale: "fr", medicalReview: REVIEW, updatedAt: UPDATED_AT } as const;
const GB = { interventionId: "facelift", locale: "en-gb", medicalReview: REVIEW, updatedAt: UPDATED_AT } as const;

export const dossier: Dossier = {
  // ═══════════════════════════════ FRANCE ═══════════════════════════════
  fr: {
    intervention: {
      id: "facelift",
      locale: "fr",
      slug: "lifting-du-visage",
      category: "face",
      title: "Lifting du visage (lifting cervico-facial)",
      summary:
        "Le lifting cervico-facial repositionne les tissus relâchés du bas du visage et du cou. Techniques, cicatrices, risques, convalescence et limites.",
      description: [
        "Le lifting du visage, ou lifting cervico-facial, est une intervention qui vise à corriger le relâchement des tissus du bas du visage et du cou : bajoues, ovale du visage moins net, plis entre le nez et la bouche accentués, peau et bandes musculaires du cou relâchées. Il ne s'agit pas seulement de tendre la peau : l'intervention agit surtout sur les plans plus profonds.",
        "La plupart des techniques actuelles repositionnent le SMAS, une couche fibro-musculaire située sous la graisse du visage, qui est remise en tension ou partiellement retirée, puis la peau est redrapée sans traction excessive et l'excédent est retiré. Selon les besoins, le chirurgien peut proposer un lifting cervico-facial complet, un mini-lifting (décollement plus limité, pour un relâchement modéré du bas du visage), un lifting centré sur le cou, avec parfois un rapprochement des muscles du cou (platysma) par une petite incision sous le menton, ou un lifting temporal ou frontal pour le haut du visage.",
        "Le lifting est souvent associé à d'autres gestes réalisés pendant la même intervention : chirurgie des paupières (blépharoplastie), lipofilling (réinjection de la graisse du patient pour restaurer des volumes perdus), liposuccion du cou. Ces associations allongent l'intervention et doivent être discutées une à une, avec leurs propres risques.",
        "Les cicatrices suivent le contour de l'oreille : elles débutent en général dans les cheveux ou à la limite du cuir chevelu au niveau de la tempe, descendent devant l'oreille, contournent le lobe puis remontent derrière l'oreille vers le cuir chevelu de la nuque. Un mini-lifting laisse une cicatrice plus courte. Ces cicatrices deviennent le plus souvent discrètes avec le temps, mais elles sont définitives et leur qualité varie d'une personne à l'autre.",
        "Le lifting ne modifie pas la qualité de la peau : il n'efface pas les ridules fines, les taches ou les rides autour de la bouche, qui relèvent d'autres traitements. Il ne corrige pas non plus les rides du front ou de la patte d'oie, ni la perte de volume des pommettes sans geste complémentaire. L'objectif est un aspect reposé et cohérent, pas un changement de visage.",
        "Le résultat est durable mais pas définitif : le vieillissement se poursuit après l'intervention, à un rythme qui dépend de la génétique, de la qualité de la peau, du tabac, de l'exposition au soleil et des variations de poids. Beaucoup de personnes en gardent un bénéfice visible pendant plusieurs années, sans qu'une durée précise puisse être promise.",
      ],
      indications: [
        "Relâchement de l'ovale du visage avec bajoues, visible et gênant pour la personne.",
        "Relâchement de la peau du cou, bandes musculaires verticales (cordes du platysma) ou angle entre le cou et le menton effacé.",
        "Plis marqués entre le nez et la bouche ou à partir des coins de la bouche, liés à la descente des tissus.",
        "Gêne persistante, réfléchie depuis un certain temps, chez un adulte en bonne santé à un poids stable.",
        "Récidive d'un relâchement après un premier lifting, à évaluer au cas par cas (lifting secondaire).",
      ],
      contraindications: [
        "Attentes irréalistes, par exemple retrouver le visage de ses 20 ans ou un résultat identique à une photo.",
        "Demande motivée par la pression d'un conjoint, de l'entourage ou d'un contexte professionnel plutôt que par un souhait personnel.",
        "Préoccupation excessive pour un défaut minime ou invisible pour les autres, qui doit faire évoquer un trouble dysmorphique corporel.",
        "Tabagisme actif non arrêté (cigarette, vapotage avec nicotine) : risque nettement accru de nécrose cutanée et de mauvaise cicatrisation.",
        "Hypertension artérielle non équilibrée, qui augmente fortement le risque d'hématome.",
        "Diabète, maladie cardiaque ou pulmonaire, ou autre pathologie chronique non équilibrée.",
        "Troubles de la coagulation, ou traitement anticoagulant qui ne peut être interrompu.",
        "Perte de poids importante en cours ou prévue, qui compromettrait le résultat.",
      ],
      risks: [
        {
          name: "Œdème, ecchymoses et sensation de tiraillement",
          detail:
            "Suites attendues. Le gonflement et les bleus du visage et du cou sont maximaux les deux à trois premiers jours puis régressent en deux à trois semaines ; un léger gonflement résiduel peut persister plusieurs semaines.",
        },
        {
          name: "Engourdissement des joues et des oreilles",
          detail:
            "Très fréquent. La sensibilité de la peau décollée et du pourtour des oreilles est diminuée pendant plusieurs semaines à plusieurs mois et revient progressivement. Une lésion du nerf sensitif de l'oreille (grand nerf auriculaire) peut laisser une insensibilité durable du lobe, plus rarement.",
        },
        {
          name: "Hématome",
          detail:
            "C'est la complication la plus fréquente du lifting. Il survient surtout dans les 24 à 48 premières heures, plus souvent chez l'homme et chez les personnes hypertendues. Un hématome important et rapidement croissant impose une reprise urgente au bloc pour évacuer le sang, car il menace la vitalité de la peau et peut, au niveau du cou, gêner la respiration.",
        },
        {
          name: "Nécrose cutanée",
          detail:
            "Souffrance d'une zone de peau, le plus souvent derrière l'oreille, qui peut aboutir à une croûte puis à une cicatrice de moins bonne qualité. Le risque est nettement plus élevé chez les fumeurs et en cas d'hématome.",
        },
        {
          name: "Cicatrices visibles ou de mauvaise qualité",
          detail:
            "Les cicatrices autour de l'oreille peuvent s'élargir, s'épaissir (cicatrice hypertrophique), rester rouges plusieurs mois ou se pigmenter. Une déformation du lobe de l'oreille (lobe attiré vers le bas) ou un déplacement de la ligne des cheveux sur la tempe ou derrière l'oreille sont possibles et peuvent nécessiter une retouche.",
        },
        {
          name: "Alopécie localisée",
          detail:
            "Perte de cheveux le long des cicatrices situées dans le cuir chevelu, au niveau des tempes ou de la nuque. Elle est souvent temporaire, mais peut être définitive sur une zone limitée.",
        },
        {
          name: "Infection",
          detail:
            "Rare grâce à la bonne vascularisation du visage ; elle se traite le plus souvent par antibiotiques, parfois par un drainage.",
        },
        {
          name: "Asymétrie, relâchement précoce ou résultat jugé insuffisant",
          detail:
            "Aucun visage n'est totalement symétrique, avant comme après l'intervention. Un relâchement peut réapparaître plus tôt que prévu, notamment au niveau du cou, et conduire à une retouche, généralement pas avant plusieurs mois.",
        },
        {
          name: "Lésion d'une branche motrice du nerf facial",
          detail:
            "Rare. Elle entraîne une faiblesse d'une partie des muscles du visage (sourcil, coin de la bouche, par exemple). Elle est le plus souvent temporaire et récupère en quelques semaines à quelques mois ; une atteinte définitive est exceptionnelle.",
        },
        {
          name: "Complications de la glande parotide",
          detail:
            "Rares : une collection de salive sous la peau (sialocèle) ou une fistule peuvent survenir lorsque la glande située devant l'oreille est touchée ; elles se traitent le plus souvent par ponctions et pansement compressif.",
        },
        {
          name: "Thrombose veineuse et embolie pulmonaire",
          detail:
            "Rares mais graves, comme après toute intervention de plusieurs heures sous anesthésie générale. La prévention repose sur l'évaluation du risque individuel, le lever précoce et, si besoin, un traitement anticoagulant préventif.",
        },
        {
          name: "Risques liés à l'anesthésie",
          detail:
            "Évalués lors de la consultation d'anesthésie obligatoire, qui a lieu au moins quelques jours avant l'intervention.",
        },
      ],
      procedure: {
        anaesthesia: "Le plus souvent anesthésie générale ; parfois anesthésie locale avec sédation, notamment pour un mini-lifting.",
        duration: "Environ 2 à 4 heures, davantage en cas de gestes associés (paupières, lipofilling).",
        hospitalStay: "En général une nuit d'hospitalisation ; parfois en ambulatoire pour un geste limité.",
      },
      recovery: [
        "Jour 1 : pansement légèrement compressif autour du visage et du cou, parfois drains ; repos tête surélevée, surveillance du risque d'hématome, contrôle de la tension artérielle et des douleurs, en général modérées.",
        "Jours 2 à 3 : retrait du pansement et des éventuels drains ; gonflement et ecchymoses au maximum ; un bandeau ou une mentonnière peut être conseillé quelques jours ou semaines.",
        "Semaine 1 : retrait des premiers fils devant l'oreille vers le cinquième au septième jour ; douche et shampoing doux le plus souvent autorisés après accord du chirurgien ; éviter de tourner brusquement la tête et de se pencher en avant.",
        "Semaine 2 : retrait des derniers fils ou agrafes derrière l'oreille et dans le cuir chevelu ; les ecchymoses s'estompent et peuvent être camouflées par du maquillage.",
        "Deux à trois semaines : reprise d'une activité professionnelle sans contact avec le public pour beaucoup de personnes ; vie sociale possible, avec un visage encore un peu gonflé et tendu.",
        "Quatre à six semaines : reprise progressive du sport, des efforts et des activités qui augmentent la tension artérielle, selon l'avis du chirurgien ; protection solaire stricte des cicatrices pendant au moins un an.",
        "Trois à six mois : la sensibilité des joues et des oreilles revient progressivement ; les cicatrices sont encore rosées.",
        "Six à douze mois : résultat stabilisé et cicatrices en voie de maturation ; une éventuelle retouche ne s'envisage qu'à ce stade.",
      ],
      alternatives: [
        "Ne rien faire, ou reporter : le relâchement du visage n'est pas une maladie et la décision peut être revue plus tard, sans perte de chance.",
        "Injections d'acide hyaluronique : elles restaurent certains volumes (pommettes, sillons) sans opération, mais ne retendent pas la peau du cou ni les bajoues importantes ; effet temporaire, risques propres dont l'occlusion vasculaire, rare mais grave.",
        "Toxine botulique : agit sur les rides d'expression et parfois sur les bandes du cou, sans effet sur le relâchement des tissus ; effet de quelques mois.",
        "Fils tenseurs : permettent un effet de remontée modeste avec une convalescence courte, mais l'effet est limité et transitoire ; risques de fils palpables ou visibles, d'irrégularités, d'infection ou de douleurs.",
        "Lipofilling ou chirurgie des paupières seuls : peuvent répondre à une perte de volume ou à un excès de peau des paupières sans lifting, quand le relâchement du bas du visage est modéré.",
      ],
      faq: [
        {
          question: "Le lifting est-il douloureux ?",
          answer:
            "Les douleurs sont en général modérées et soulagées par des antalgiques simples. La sensation de tension et d'engourdissement du visage et du cou est plus gênante que la douleur elle-même. Une douleur forte et d'un seul côté doit faire contacter rapidement le chirurgien, car elle peut signaler un hématome.",
        },
        {
          question: "À partir de quel âge peut-on envisager un lifting ?",
          answer:
            "Il n'y a pas d'âge fixe : c'est le degré de relâchement, l'état de santé et les attentes qui comptent. Le lifting est le plus souvent réalisé entre 45 et 70 ans, mais l'âge seul ne contre-indique pas l'intervention. La plateforme s'adresse uniquement aux adultes.",
        },
        {
          question: "Les cicatrices se voient-elles ?",
          answer:
            "Elles suivent le contour de l'oreille et se prolongent dans les cheveux. Elles deviennent souvent discrètes après plusieurs mois, mais restent visibles de près, en particulier avec les cheveux attachés. Leur qualité dépend de la peau, de la cicatrisation et de l'absence de tension excessive.",
        },
        {
          question: "Combien de temps dure le résultat ?",
          answer:
            "Le lifting remonte les tissus mais n'arrête pas le vieillissement, qui continue après l'intervention. Le bénéfice reste en général visible plusieurs années ; sa durée varie selon la peau, la génétique, le tabac, le soleil et le poids. Aucune durée ne peut être promise.",
        },
        {
          question: "Faut-il arrêter de fumer ?",
          answer:
            "Oui. Le tabac et la nicotine réduisent l'apport de sang à la peau décollée et augmentent nettement le risque de nécrose cutanée et de mauvaise cicatrisation. Un arrêt complet est demandé plusieurs semaines avant et après l'intervention ; certains chirurgiens refusent d'opérer une personne qui fume.",
        },
        {
          question: "Les fils tenseurs remplacent-ils un lifting ?",
          answer:
            "Non. Ils peuvent donner un effet de remontée modeste et temporaire en cas de relâchement léger, avec une convalescence courte, mais ils n'agissent pas sur les plans profonds ni sur l'excès de peau. Ils comportent aussi des risques (fils visibles ou palpables, infection, irrégularités).",
        },
        {
          question: "Le lifting est-il remboursé ?",
          answer:
            "Non, lorsqu'il est réalisé dans un but esthétique, il n'est pas pris en charge par l'Assurance maladie. Une chirurgie du visage peut être prise en charge dans un contexte réparateur, par exemple après une paralysie faciale ou un traumatisme, selon les critères de l'Assurance maladie.",
        },
        {
          question: "Combien de temps faut-il attendre entre le devis et l'intervention ?",
          answer:
            "En France, un délai minimal de 15 jours doit séparer la remise du devis détaillé et l'intervention (article L6322-2 du Code de la santé publique). Aucune somme autre que celle de la consultation ne peut être exigée avant la fin de ce délai.",
        },
        {
          question: "Quel chirurgien consulter et comment vérifier sa qualification ?",
          answer:
            "Le lifting est réalisé par des chirurgiens qualifiés en chirurgie plastique, reconstructrice et esthétique, en ORL et chirurgie cervico-faciale ou en chirurgie maxillo-faciale. Vous pouvez vérifier son inscription et sa spécialité sur l'Annuaire santé (annuaire.sante.fr) ou auprès du Conseil national de l'Ordre des médecins, et vous assurer que l'établissement est autorisé par l'ARS.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risques ──
      {
        ...FR,
        kind: "risks",
        title: "Lifting du visage : les risques",
        summary:
          "Hématome, nécrose cutanée, cicatrices, alopécie, atteinte du nerf facial : les risques du lifting cervico-facial et les signes qui doivent alerter.",
        answer:
          "Gonflement, ecchymoses et engourdissement sont des suites attendues du lifting. L'hématome est la complication la plus fréquente, surtout chez l'homme et la personne hypertendue ; le tabac expose à la nécrose cutanée. Une lésion du nerf facial est rare et le plus souvent temporaire.",
        sections: [
          {
            heading: "Les suites fréquentes et attendues",
            paragraphs: [
              "Ces manifestations font partie de la cicatrisation normale et diminuent au fil des semaines.",
            ],
            bullets: [
              "Gonflement du visage et du cou, maximal vers le deuxième ou troisième jour.",
              "Ecchymoses pouvant descendre vers le cou et le haut du thorax.",
              "Sensation de tension, de visage « cartonné », gêne pour mastiquer ou tourner la tête les premiers jours.",
              "Engourdissement des joues, du cou et du pourtour des oreilles pendant plusieurs semaines à plusieurs mois.",
              "Petites irrégularités de surface ou zones indurées, qui s'assouplissent en général en quelques semaines.",
            ],
          },
          {
            heading: "L'hématome, complication la plus fréquente",
            paragraphs: [
              "Un saignement sous la peau décollée peut former un hématome, le plus souvent dans les 24 à 48 heures suivant l'intervention. Le risque est plus élevé chez l'homme, en cas d'hypertension artérielle, de prise d'aspirine, d'anti-inflammatoires, d'anticoagulants ou de certains compléments alimentaires, et en cas d'efforts, de toux ou de vomissements.",
              "Un petit hématome peut être ponctionné ou se résorber. Un hématome volumineux et rapidement croissant nécessite une reprise au bloc en urgence : non traité, il compromet la vitalité de la peau et peut, au niveau du cou, gêner la respiration. C'est pourquoi la tension artérielle est surveillée de près après l'opération.",
            ],
          },
          {
            heading: "Les complications moins fréquentes",
            paragraphs: [
              "Leur fréquence dépend de la technique, de l'étendue du décollement et de l'état de santé de chacun.",
            ],
            bullets: [
              "Nécrose cutanée, le plus souvent derrière l'oreille, favorisée par le tabac et l'hématome.",
              "Cicatrices élargies, épaissies ou pigmentées ; déformation du lobe de l'oreille.",
              "Alopécie localisée le long des cicatrices du cuir chevelu, souvent temporaire.",
              "Déplacement de la ligne des cheveux au niveau des tempes ou de la nuque.",
              "Insensibilité durable du lobe de l'oreille par atteinte du grand nerf auriculaire.",
              "Infection, rare, traitée par antibiotiques et parfois drainage.",
              "Asymétrie ou relâchement précoce, surtout au niveau du cou, pouvant conduire à une retouche.",
            ],
          },
          {
            heading: "Les complications rares mais graves",
            paragraphs: [
              "Une lésion d'une branche motrice du nerf facial peut entraîner une faiblesse d'une partie du visage, par exemple du coin de la bouche ou du sourcil. Elle est rare et récupère le plus souvent en quelques semaines à quelques mois ; une paralysie définitive est exceptionnelle.",
              "Comme toute intervention de plusieurs heures, le lifting expose à un risque rare de phlébite et d'embolie pulmonaire, ainsi qu'aux risques de l'anesthésie, évalués lors de la consultation d'anesthésie obligatoire.",
            ],
          },
          {
            heading: "Quand appeler sans attendre",
            paragraphs: [
              "Contactez immédiatement le chirurgien ou l'équipe qui vous a opéré si l'un de ces signes apparaît. En cas de difficulté à respirer, de douleur dans la poitrine, de malaise ou de gonflement rapide du cou, appelez le 15 (SAMU) ou le 112.",
            ],
            bullets: [
              "Gonflement qui augmente rapidement, surtout d'un seul côté, avec douleur croissante et peau tendue.",
              "Saignement qui imbibe le pansement ou ne s'arrête pas.",
              "Peau qui devient noire, violacée ou très pâle, en particulier derrière l'oreille.",
              "Fièvre, rougeur qui s'étend, écoulement purulent.",
              "Asymétrie brutale du sourire ou impossibilité de fermer un œil.",
              "Mollet gonflé et douloureux, essoufflement.",
            ],
          },
          {
            heading: "Les facteurs qui augmentent les risques",
            paragraphs: [
              "Plusieurs facteurs peuvent être corrigés avant l'intervention et doivent être abordés en consultation.",
            ],
            bullets: [
              "Tabac et nicotine sous toutes leurs formes : arrêt complet plusieurs semaines avant et après.",
              "Hypertension artérielle : elle doit être bien équilibrée avant l'opération.",
              "Médicaments et compléments qui fluidifient le sang, à signaler et à arrêter selon les consignes médicales.",
              "Lifting antérieur, qui rend l'intervention plus délicate.",
              "Diabète ou autre maladie chronique non équilibrée.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFORL, SFAR],
      },
      // ── Coût ──
      {
        ...FR,
        kind: "cost",
        title: "Prix d'un lifting du visage",
        summary:
          "Ce que contient un devis de lifting cervico-facial, ce qui fait varier le prix, règles françaises (devis, délai de 15 jours) et coût des complications.",
        answer:
          "Le coût d'un lifting dépend de la technique, des gestes associés, du chirurgien, de l'anesthésie et de l'établissement. Nous n'indiquons pas de montant : seul un devis détaillé et daté, remis après consultation, permet de le connaître. Le lifting esthétique n'est pas remboursé par l'Assurance maladie.",
        sections: [
          {
            heading: "Ce que contient un devis",
            paragraphs: [
              "En France, un devis détaillé et daté doit vous être remis avant toute intervention de chirurgie esthétique. Vérifiez qu'il précise chacun des postes suivants, ou qu'il indique clairement ceux qui n'y figurent pas.",
            ],
            bullets: [
              "Honoraires du chirurgien.",
              "Honoraires de l'anesthésiste, parfois facturés séparément.",
              "Frais de l'établissement : bloc opératoire, nuit d'hospitalisation, chambre.",
              "Pansements, mentonnière ou bandeau de contention, médicaments, examens préopératoires.",
              "Consultations de suivi après l'intervention.",
              "TVA, applicable aux actes à visée purement esthétique.",
            ],
          },
          {
            heading: "Ce qui fait varier le prix",
            paragraphs: [
              "Deux devis de lifting peuvent difficilement être comparés sans regarder ce qu'ils recouvrent exactement.",
            ],
            bullets: [
              "Étendue de l'intervention : mini-lifting, lifting cervico-facial complet, lifting du cou isolé.",
              "Gestes associés : chirurgie des paupières, lipofilling, liposuccion du cou.",
              "Durée de l'intervention et type d'anesthésie.",
              "Hospitalisation en ambulatoire ou avec nuit, type de chambre.",
              "Lifting secondaire, souvent plus complexe qu'une première intervention.",
              "Lieu d'exercice et établissement.",
            ],
          },
          {
            heading: "Prise en charge par l'Assurance maladie",
            paragraphs: [
              "Un lifting réalisé dans un but esthétique n'est pas pris en charge. Certaines interventions de chirurgie du visage relèvent en revanche de la chirurgie réparatrice, par exemple après une paralysie faciale, un traumatisme ou un cancer ; elles peuvent alors être prises en charge selon les critères de l'Assurance maladie, parfois après accord préalable.",
              "En cas de doute sur le caractère réparateur de votre situation, interrogez le chirurgien et votre caisse d'Assurance maladie avant de vous engager.",
            ],
          },
          {
            heading: "Le coût des complications et des retouches",
            paragraphs: [
              "Une reprise au bloc pour hématome, le traitement d'une nécrose cutanée ou une retouche de cicatrice peuvent entraîner des frais supplémentaires : nouveaux frais d'établissement et d'anesthésie, voire honoraires. Demandez par écrit ce qui est prévu dans ces situations avant de signer.",
              "Certains chirurgiens ou établissements proposent une assurance complications facultative. Lisez attentivement ce qu'elle couvre, ses exclusions et sa durée.",
            ],
          },
          {
            heading: "Les règles à connaître",
            paragraphs: [
              "Un délai de réflexion minimal de 15 jours doit séparer la remise du devis et l'intervention (article L6322-2 du Code de la santé publique). Aucun paiement autre que la consultation ne peut être exigé avant la fin de ce délai.",
              "La consultation d'anesthésie est obligatoire et l'intervention doit avoir lieu dans un établissement autorisé par l'Agence régionale de santé (ARS). Méfiez-vous d'un prix nettement inférieur aux autres devis sans explication claire.",
            ],
          },
        ],
        sources: [LEGIFRANCE_L6322_2, AMELI, SOFCPRE],
      },
      // ── Convalescence ──
      {
        ...FR,
        kind: "recovery",
        title: "Convalescence après un lifting du visage",
        summary:
          "Les étapes de la convalescence après un lifting cervico-facial : premiers jours, retrait des fils, reprise du travail et du sport, résultat définitif.",
        answer:
          "La plupart des personnes reprennent une vie sociale et un travail sans contact avec le public après deux à trois semaines. Le sport reprend vers quatre à six semaines. Le gonflement résiduel et l'engourdissement mettent plusieurs mois à disparaître ; le résultat se stabilise entre six et douze mois.",
        sections: [
          {
            heading: "Les premières 48 heures",
            paragraphs: [
              "Le visage est entouré d'un pansement légèrement compressif, parfois avec des drains. Le repos se fait tête surélevée. L'équipe surveille la tension artérielle, les douleurs et l'apparition d'un hématome, qui survient surtout pendant cette période.",
            ],
            bullets: [
              "Éviter les efforts, la toux forcée, les nausées non traitées et tout ce qui fait monter la tension.",
              "Appliquer du froid selon les consignes.",
              "Prendre uniquement les médicaments prescrits, sans aspirine ni anti-inflammatoires sans avis médical.",
            ],
          },
          {
            heading: "La première semaine",
            paragraphs: [
              "Le pansement et les drains sont retirés vers le deuxième ou troisième jour. Le gonflement et les ecchymoses sont au maximum puis commencent à diminuer. Les premiers fils, devant l'oreille, sont retirés vers le cinquième au septième jour.",
              "Dormir sur le dos, tête surélevée, et éviter de tourner brusquement la tête ou de se pencher en avant. Une alimentation molle peut être plus confortable les premiers jours.",
            ],
          },
          {
            heading: "De la deuxième à la sixième semaine",
            paragraphs: [
              "Les derniers fils ou agrafes, derrière l'oreille et dans le cuir chevelu, sont retirés vers la deuxième semaine. Les ecchymoses s'estompent et peuvent être camouflées par du maquillage après accord du chirurgien.",
            ],
            bullets: [
              "Reprise du travail sans contact avec le public : souvent après deux à trois semaines.",
              "Conduite : lorsque vous pouvez tourner la tête sans gêne et ne prenez plus de médicaments qui altèrent la vigilance.",
              "Sport et efforts : reprise progressive vers quatre à six semaines.",
              "Coloration des cheveux, sauna, hammam : à éviter plusieurs semaines, selon les consignes.",
            ],
          },
          {
            heading: "Les cicatrices et le soleil",
            paragraphs: [
              "Les cicatrices restent rosées plusieurs mois avant de s'éclaircir. Une protection solaire stricte (écran, chapeau) est recommandée pendant au moins un an pour limiter leur pigmentation.",
              "Le chirurgien peut conseiller des massages ou des soins locaux. Une cicatrice qui s'épaissit, démange ou s'élargit doit lui être montrée.",
            ],
          },
          {
            heading: "Le résultat à long terme",
            paragraphs: [
              "L'engourdissement des joues et des oreilles régresse en plusieurs mois. Le visage s'assouplit et le résultat se stabilise entre six et douze mois.",
              "Le vieillissement continue ensuite. Protéger sa peau du soleil, ne pas fumer et garder un poids stable aident à préserver le bénéfice de l'intervention.",
            ],
          },
          {
            heading: "Les signes qui doivent faire appeler",
            paragraphs: [
              "Un gonflement brutal et douloureux d'un côté, une peau qui noircit derrière l'oreille, de la fièvre ou une asymétrie soudaine du visage doivent faire contacter le chirurgien sans attendre. En cas de difficulté à respirer ou de malaise, appelez le 15 ou le 112.",
            ],
          },
        ],
        sources: [SOFCPRE, HAS, SFAR],
      },
      // ── Décision ──
      {
        ...FR,
        kind: "decision",
        title: "Lifting du visage : avant de se décider",
        summary:
          "Questions à poser en consultation, choix du chirurgien, délai de réflexion de 15 jours et points à vérifier avant un lifting cervico-facial.",
        answer:
          "Un lifting se décide après au moins une consultation approfondie, en connaissant ses limites et ses risques. En France, 15 jours minimum doivent séparer la remise du devis et l'intervention. Prenez ce temps pour comparer, poser vos questions et vérifier la qualification du chirurgien.",
        sections: [
          {
            heading: "Clarifier ce que vous attendez",
            paragraphs: [
              "Le lifting corrige le relâchement du bas du visage et du cou ; il ne change ni la qualité de la peau, ni les rides fines, ni l'expression du visage. Une attente précise et réaliste, par exemple un ovale plus net ou un cou moins relâché, facilite le dialogue avec le chirurgien.",
              "Interrogez-vous aussi sur le moment : une période de deuil, de séparation ou de stress intense n'est pas propice à une décision de ce type.",
            ],
          },
          {
            heading: "Choisir le chirurgien et l'établissement",
            paragraphs: [
              "Le lifting relève de chirurgiens qualifiés en chirurgie plastique, reconstructrice et esthétique, en ORL et chirurgie cervico-faciale ou en chirurgie maxillo-faciale. Vérifiez leur inscription et leur spécialité sur l'Annuaire santé ou auprès de l'Ordre des médecins.",
              "L'établissement doit être autorisé par l'ARS pour la chirurgie esthétique, et une consultation d'anesthésie est obligatoire.",
            ],
          },
          {
            heading: "Les questions à poser en consultation",
            paragraphs: ["N'hésitez pas à noter vos questions à l'avance et les réponses obtenues."],
            bullets: [
              "Quelle technique me proposez-vous (SMAS, mini-lifting, lifting du cou) et pourquoi ?",
              "Des gestes associés sont-ils utiles dans mon cas, et quels risques ajoutent-ils ?",
              "Où seront les cicatrices et à quoi ressembleront-elles ?",
              "Quels sont mes risques particuliers, notamment d'hématome ou de nécrose cutanée ?",
              "Combien d'interventions de ce type réalisez-vous, et dans quel établissement ?",
              "Comment se passe le suivi, et qui contacter la nuit ou le week-end ?",
              "Que se passe-t-il, y compris financièrement, en cas de complication ou de retouche ?",
            ],
          },
          {
            heading: "Le délai de réflexion",
            paragraphs: [
              "En France, un délai minimal de 15 jours doit séparer la remise du devis détaillé et l'intervention (article L6322-2 du Code de la santé publique). Aucun paiement autre que la consultation ne peut être exigé avant la fin de ce délai.",
              "Ce délai est un minimum : rien n'empêche de prendre davantage de temps, de revoir le chirurgien ou de demander un second avis.",
            ],
          },
          {
            heading: "Quand la préoccupation devient envahissante",
            paragraphs: [
              "Il est courant d'être gêné par les signes du vieillissement. Si cette préoccupation occupe une grande partie de vos pensées, vous fait éviter les autres ou porte sur des détails que votre entourage ne remarque pas, il peut s'agir d'un trouble dysmorphique corporel. Une chirurgie n'apporte alors en général pas de soulagement durable ; en parler à votre médecin traitant est une première étape utile.",
              "Si vous traversez une période de grande détresse ou avez des idées suicidaires, le 3114 est joignable gratuitement, 24 heures sur 24.",
            ],
          },
        ],
        sources: [LEGIFRANCE_L6322_2, ANNUAIRE_SANTE, SOFCPRE, N3114],
      },
      // ── Alternatives ──
      {
        ...FR,
        kind: "alternatives",
        title: "Alternatives au lifting du visage",
        summary:
          "Injections, toxine botulique, fils tenseurs, lipofilling ou ne rien faire : ce que permettent les alternatives au lifting et leurs limites.",
        answer:
          "Les injections, la toxine botulique et les fils tenseurs peuvent améliorer certains signes de vieillissement sans chirurgie, mais ils ne corrigent pas un relâchement important du bas du visage et du cou. Leur effet est temporaire et ils ont leurs propres risques. Ne rien faire reste une option légitime.",
        sections: [
          {
            heading: "Ne rien faire, ou attendre",
            paragraphs: [
              "Le relâchement du visage n'est pas une maladie. Choisir de ne pas intervenir, ou de reporter la décision, n'expose à aucune perte de chance et peut être revu plus tard.",
            ],
          },
          {
            heading: "Les injections d'acide hyaluronique",
            paragraphs: [
              "Elles restaurent des volumes perdus (pommettes, sillons, contour de la mâchoire) et peuvent améliorer l'aspect de l'ovale lorsque le relâchement est léger. Leur effet est temporaire, de quelques mois à environ un an ou plus selon le produit et la zone.",
              "Elles ont leurs propres risques : ecchymoses, nodules, infection et, rarement, occlusion d'un vaisseau pouvant entraîner une nécrose de la peau ou, exceptionnellement, une atteinte de la vision. Elles doivent être réalisées par un médecin.",
            ],
          },
          {
            heading: "La toxine botulique",
            paragraphs: [
              "Elle détend certains muscles et agit sur les rides d'expression, et parfois sur les bandes verticales du cou. Elle ne retend pas les tissus relâchés. Son effet dure quelques mois ; une asymétrie ou une chute temporaire de la paupière sont possibles.",
            ],
          },
          {
            heading: "Les fils tenseurs",
            paragraphs: [
              "Introduits sous la peau, ils permettent un effet de remontée modeste avec une convalescence courte. L'effet est limité et transitoire, et ne remplace pas un lifting en cas de relâchement marqué ou d'excès de peau du cou.",
            ],
            bullets: [
              "Fils palpables ou visibles, capitons et irrégularités.",
              "Douleurs, infection, parfois nécessité de retirer un fil.",
              "Asymétrie et effet qui s'estompe en quelques mois.",
            ],
          },
          {
            heading: "Les gestes chirurgicaux plus limités",
            paragraphs: [
              "Selon la gêne principale, une chirurgie des paupières, un lipofilling du visage ou une liposuccion du cou peuvent répondre au besoin sans lifting complet. Les techniques dites de remodelage par énergie (radiofréquence, ultrasons focalisés) ont un effet modeste et variable sur la fermeté de la peau. Ces options doivent être discutées avec un chirurgien qualifié, qui peut expliquer ce qu'elles permettent dans votre cas.",
            ],
          },
        ],
        sources: [HAS, ANSM, SOFCPRE],
      },
    ],
    glossary: [
      {
        id: "smas",
        locale: "fr",
        slug: "smas",
        term: "SMAS",
        aliases: [
          "système musculo-aponévrotique superficiel",
          "système musculoaponévrotique superficiel",
          "systeme musculo-aponevrotique superficiel",
          "lifting du SMAS",
        ],
        definition:
          "Le SMAS (système musculo-aponévrotique superficiel) est une fine couche fibreuse et musculaire située sous la peau et la graisse du visage, en continuité avec le muscle du cou (platysma). Il est la structure principale repositionnée lors de la plupart des liftings.",
        detail: [
          "Avec l'âge, le SMAS se relâche et descend, entraînant les tissus qui le recouvrent : c'est l'une des causes des bajoues, de l'ovale moins net et du relâchement du cou. Le remettre en tension permet de repositionner les volumes en profondeur, sans tirer excessivement sur la peau.",
          "Selon les techniques, le chirurgien peut plicaturer le SMAS (le replier et le suturer), en retirer une bande, ou le décoller plus largement avant de le repositionner. Plus le décollement est profond et étendu, plus l'effet peut être marqué, mais plus la proximité avec les branches du nerf facial demande de précision.",
          "Les liftings qui ne traitent que la peau donnent en général un effet moins durable et une cicatrice plus exposée à la tension. Le choix de la technique se discute en consultation selon l'anatomie et les attentes.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "facial-nerve",
        locale: "fr",
        slug: "nerf-facial",
        term: "Nerf facial",
        aliases: ["nerfs faciaux", "branches du nerf facial", "septième nerf crânien"],
        definition:
          "Le nerf facial est le nerf qui commande les muscles des expressions du visage : fermer les yeux, lever les sourcils, sourire. Il sort du crâne sous l'oreille et se divise en plusieurs branches qui traversent la joue sous le SMAS.",
        detail: [
          "Pendant un lifting, certaines branches du nerf facial passent à proximité de la zone opérée. Une lésion est rare ; elle se traduit par une faiblesse d'une partie du visage, par exemple une difficulté à lever un sourcil ou une asymétrie du sourire.",
          "Le plus souvent, l'atteinte est due à un étirement, à l'œdème ou à l'anesthésie locale, et récupère en quelques semaines à quelques mois. Une atteinte définitive est exceptionnelle. Il ne faut pas la confondre avec l'engourdissement de la peau, très fréquent, qui relève des nerfs de la sensibilité.",
          "Une asymétrie brutale du visage ou une difficulté à fermer un œil après l'intervention doit être signalée rapidement au chirurgien.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },

  // ═══════════════════════════════ UNITED KINGDOM ═══════════════════════════════
  "en-gb": {
    intervention: {
      id: "facelift",
      locale: "en-gb",
      slug: "facelift",
      category: "face",
      title: "Facelift",
      summary:
        "A facelift lifts sagging tissue in the lower face and neck. Techniques, scars, risks, recovery and what the operation cannot do.",
      description: [
        "A facelift (rhytidectomy) is surgery to improve sagging in the lower face and neck: jowls, a less defined jawline, deep folds between the nose and mouth, and loose skin or bands in the neck. It is not simply a matter of pulling the skin tight; most of the work is done on the deeper layers.",
        "Most modern techniques reposition the SMAS, a fibrous and muscular layer lying beneath the facial fat. It is tightened or partly removed, and the skin is then re-draped without excessive tension and the excess trimmed. Depending on your needs, a surgeon may suggest a full face and neck lift, a mini facelift (less extensive, for moderate sagging of the lower face), a neck lift, sometimes with tightening of the neck muscle (platysma) through a small cut under the chin, or a brow or temple lift for the upper face.",
        "A facelift is often combined with other procedures during the same operation, such as eyelid surgery (blepharoplasty), fat transfer (using your own fat to restore lost volume) or neck liposuction. Each addition lengthens the operation and carries its own risks, so discuss them one by one.",
        "The scars follow the outline of the ear: they usually start in or at the edge of the hairline at the temple, run down in front of the ear, around the earlobe and back up behind the ear into the hair at the nape of the neck. A mini facelift leaves a shorter scar. The scars usually fade and become less noticeable over time, but they are permanent and their quality varies from person to person.",
        "A facelift does not change the quality of your skin. It does not remove fine lines, pigmentation or wrinkles around the mouth, nor does it treat forehead lines or crow's feet, or restore volume to the cheeks without an additional procedure. The aim is a rested, consistent look, not a different face.",
        "The result is long-lasting but not permanent. Your face will continue to age after surgery, at a pace that depends on genetics, skin quality, smoking, sun exposure and changes in weight. Many people keep a visible benefit for several years, but no specific duration can be promised.",
      ],
      indications: [
        "Sagging along the jawline with jowls that you find bothersome.",
        "Loose skin in the neck, vertical neck bands or a blurred angle between the neck and chin.",
        "Deep folds between the nose and mouth or from the corners of the mouth caused by descending tissue.",
        "A concern you have thought about for some time, in a healthy adult at a stable weight.",
        "Recurrent sagging after a previous facelift, assessed case by case (secondary facelift).",
      ],
      contraindications: [
        "Unrealistic expectations, such as looking the way you did at 20 or exactly like a photograph.",
        "Pressure from a partner, family, friends or work rather than your own wish.",
        "Excessive worry about a minor flaw that others do not notice, which may point to body dysmorphic disorder.",
        "Continued smoking or nicotine use (including vaping and nicotine replacement): it greatly increases the risk of skin loss and poor healing.",
        "Uncontrolled high blood pressure, which strongly increases the risk of haematoma.",
        "Diabetes, heart or lung disease, or another long-term condition that is not well controlled.",
        "Bleeding disorders, or blood-thinning treatment that cannot be stopped safely.",
        "Significant weight loss under way or planned, which would affect the result.",
      ],
      risks: [
        {
          name: "Swelling, bruising and tightness",
          detail:
            "Expected. Swelling and bruising of the face and neck peak in the first two to three days and settle over two to three weeks; some mild swelling can last several weeks.",
        },
        {
          name: "Numbness of the cheeks and ears",
          detail:
            "Very common. Sensation in the lifted skin and around the ears is reduced for weeks to months and gradually returns. Injury to the sensory nerve of the ear (great auricular nerve) can, less often, leave the earlobe permanently numb.",
        },
        {
          name: "Haematoma",
          detail:
            "The most common complication of a facelift. It usually occurs in the first 24 to 48 hours and is more frequent in men and in people with high blood pressure. A large, rapidly expanding haematoma needs an urgent return to theatre to remove the blood, because it threatens the blood supply to the skin and, in the neck, can affect breathing.",
        },
        {
          name: "Skin necrosis (skin loss)",
          detail:
            "Part of the skin, most often behind the ear, may lose its blood supply, form a scab and heal with a poorer scar. The risk is much higher in smokers and after a haematoma.",
        },
        {
          name: "Visible or poor-quality scars",
          detail:
            "Scars around the ear can widen, thicken (hypertrophic scars), stay red for months or change colour. The earlobe can be pulled downwards, or the hairline at the temple or behind the ear can shift, and further surgery may be needed.",
        },
        {
          name: "Localised hair loss",
          detail:
            "Hair can thin along scars in the scalp at the temples or behind the ears. It is often temporary but can be permanent over a small area.",
        },
        {
          name: "Infection",
          detail: "Rare, because the face has a good blood supply; usually treated with antibiotics and occasionally drainage.",
        },
        {
          name: "Asymmetry, early recurrence or an unsatisfactory result",
          detail:
            "No face is entirely symmetrical, before or after surgery. Sagging can return sooner than expected, especially in the neck, and may lead to revision surgery, usually not for several months.",
        },
        {
          name: "Injury to a branch of the facial nerve",
          detail:
            "Rare. It causes weakness of part of the face, such as the eyebrow or the corner of the mouth. It is usually temporary, recovering over weeks to months; permanent weakness is very rare.",
        },
        {
          name: "Salivary gland problems",
          detail:
            "Rare: a collection of saliva under the skin (sialocele) or a fistula can occur if the parotid gland in front of the ear is affected; usually managed with drainage and a pressure dressing.",
        },
        {
          name: "Blood clots (DVT and pulmonary embolism)",
          detail:
            "Rare but serious, as after any operation lasting several hours under general anaesthetic. Prevention relies on assessing your individual risk, getting up early and, where needed, preventive blood-thinning medication.",
        },
        {
          name: "Anaesthetic risks",
          detail: "Assessed at your pre-operative assessment by the anaesthetist.",
        },
      ],
      procedure: {
        anaesthesia: "Usually general anaesthetic; sometimes local anaesthetic with sedation, particularly for a mini facelift.",
        duration: "Around 2 to 4 hours, longer when combined with other procedures such as eyelid surgery or fat transfer.",
        hospitalStay: "Usually one night in hospital; sometimes a day case for a limited procedure.",
      },
      recovery: [
        "Day 1: a light pressure dressing around the face and neck, sometimes with drains; rest with your head raised while staff monitor for haematoma, blood pressure and pain, which is usually moderate.",
        "Days 2 to 3: dressing and any drains removed; swelling and bruising at their peak; a chin strap or support garment may be advised for a few days or weeks.",
        "Week 1: first stitches in front of the ear removed at around 5 to 7 days; gentle showering and hair washing usually allowed once your surgeon agrees; avoid turning your head sharply or bending forward.",
        "Week 2: remaining stitches or clips behind the ear and in the scalp removed; bruising fades and can usually be covered with make-up.",
        "Two to three weeks: many people return to work that does not involve meeting the public and resume social activities, with the face still slightly swollen and tight.",
        "Four to six weeks: gradual return to exercise, heavy lifting and activities that raise blood pressure, as advised by your surgeon; strict sun protection of the scars for at least a year.",
        "Three to six months: feeling returns gradually to the cheeks and ears; the scars are still pink.",
        "Six to twelve months: the result settles and the scars mature; any revision is only considered at this stage.",
      ],
      alternatives: [
        "Doing nothing, or waiting: facial ageing is not an illness, and you can revisit the decision later with no loss of opportunity.",
        "Dermal fillers (hyaluronic acid): can restore some volume in the cheeks and folds without surgery but cannot tighten loose neck skin or marked jowls; temporary, with their own risks, including rare but serious blockage of a blood vessel.",
        "Botulinum toxin: softens expression lines and sometimes neck bands but does not lift sagging tissue; lasts a few months.",
        "Thread lift: a modest lift with a short recovery, but the effect is limited and temporary; risks include visible or palpable threads, puckering, infection and pain.",
        "Fat transfer or eyelid surgery alone: may address volume loss or excess eyelid skin without a facelift when lower-face sagging is moderate.",
      ],
      faq: [
        {
          question: "Does a facelift hurt?",
          answer:
            "Pain is usually moderate and controlled with simple painkillers. The tightness and numbness of the face and neck tend to bother people more than the pain itself. Severe pain on one side should prompt an urgent call to your surgeon, as it can be a sign of haematoma.",
        },
        {
          question: "What is the right age for a facelift?",
          answer:
            "There is no set age: what matters is the degree of sagging, your general health and your expectations. Most facelifts are performed between the ages of 45 and 70, but age alone does not rule out surgery. This platform is for adults only.",
        },
        {
          question: "Will the scars show?",
          answer:
            "They follow the outline of the ear and extend into the hair. They usually become much less noticeable after several months but remain visible close up, especially with hair tied back. Their quality depends on your skin, how you heal and the tension on the wound.",
        },
        {
          question: "How long does a facelift last?",
          answer:
            "A facelift lifts tissue but does not stop ageing, which continues after surgery. The benefit generally remains visible for several years; how long varies with skin type, genetics, smoking, sun exposure and weight. No duration can be promised.",
        },
        {
          question: "Do I need to stop smoking?",
          answer:
            "Yes. Tobacco and nicotine reduce blood flow to the lifted skin and greatly increase the risk of skin loss and poor healing. You will be asked to stop completely for several weeks before and after surgery, and some surgeons will not operate on people who smoke.",
        },
        {
          question: "Can a thread lift replace a facelift?",
          answer:
            "No. Threads can give a modest, temporary lift for mild sagging with a short recovery, but they do not address the deeper layers or excess skin. They also carry risks, such as visible or palpable threads, infection and irregularities.",
        },
        {
          question: "Is a facelift available on the NHS?",
          answer:
            "A cosmetic facelift is not funded by the NHS. Facial surgery may be available on the NHS for reconstructive reasons, for example after facial palsy, injury or cancer, according to local criteria; an individual funding request is sometimes needed.",
        },
        {
          question: "How long should I wait before going ahead?",
          answer:
            "There is no legal cooling-off period in the UK, but GMC guidance for doctors who perform cosmetic interventions recommends giving you time to reflect; a period of at least two weeks between consultation and surgery is widely recommended. You should not be pressured into booking or paying a deposit on the day.",
        },
        {
          question: "Who should perform my facelift and how can I check?",
          answer:
            "Look for a surgeon on the GMC Specialist Register in plastic surgery, otolaryngology (ENT) or oral and maxillofacial surgery, working in a hospital or clinic registered with the Care Quality Commission in England (or the equivalent regulator in Scotland, Wales or Northern Ireland). You can check the GMC register online; Royal College of Surgeons certification in cosmetic surgery is an additional, voluntary standard.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risks ──
      {
        ...GB,
        kind: "risks",
        title: "Facelift risks",
        summary:
          "Haematoma, skin loss, scarring, hair loss and facial nerve injury: the risks of a facelift and the warning signs that need urgent attention.",
        answer:
          "Swelling, bruising and numbness are expected after a facelift. Haematoma is the most common complication, especially in men and people with high blood pressure, and smoking increases the risk of skin loss. Facial nerve injury is rare and usually temporary.",
        sections: [
          {
            heading: "Common, expected effects",
            paragraphs: ["These are part of normal healing and ease over the following weeks."],
            bullets: [
              "Swelling of the face and neck, peaking around day two or three.",
              "Bruising, which can track down to the neck and upper chest.",
              "Tightness, a stiff feeling in the face, and discomfort chewing or turning your head at first.",
              "Numbness of the cheeks, neck and around the ears for weeks to months.",
              "Small lumps or firm areas under the skin, which usually soften over a few weeks.",
            ],
          },
          {
            heading: "Haematoma: the most common complication",
            paragraphs: [
              "Bleeding under the lifted skin can form a haematoma, usually within 24 to 48 hours of surgery. The risk is higher in men, in people with high blood pressure, with aspirin, anti-inflammatories, blood thinners or some herbal supplements, and with straining, coughing or vomiting.",
              "A small haematoma may be drained with a needle or settle on its own. A large, rapidly expanding one needs an urgent return to theatre: left untreated, it threatens the blood supply to the skin and, in the neck, can affect breathing. This is why your blood pressure is closely monitored after surgery.",
            ],
          },
          {
            heading: "Less common complications",
            paragraphs: ["How often these occur depends on the technique, the extent of surgery and your health."],
            bullets: [
              "Skin necrosis, most often behind the ear, made more likely by smoking and haematoma.",
              "Wide, thick or discoloured scars; a pulled-down earlobe.",
              "Localised hair loss along scalp scars, often temporary.",
              "A shift in the hairline at the temples or behind the ears.",
              "Permanent numbness of the earlobe from injury to the great auricular nerve.",
              "Infection, which is rare and treated with antibiotics and sometimes drainage.",
              "Asymmetry or early return of sagging, especially in the neck, which may lead to revision.",
            ],
          },
          {
            heading: "Rare but serious complications",
            paragraphs: [
              "Injury to a branch of the facial nerve can cause weakness of part of the face, such as the corner of the mouth or the eyebrow. It is rare and usually recovers over weeks to months; permanent paralysis is very rare.",
              "As with any operation lasting several hours, there is a rare risk of deep vein thrombosis and pulmonary embolism, as well as anaesthetic risks, which are assessed before surgery.",
            ],
          },
          {
            heading: "When to seek help urgently",
            paragraphs: [
              "Contact your surgeon or the hospital's emergency number straight away if you notice any of these signs. If you have difficulty breathing, chest pain, collapse or rapid swelling of the neck, call 999. For other urgent concerns out of hours, you can call NHS 111.",
            ],
            bullets: [
              "Swelling that increases quickly, especially on one side, with worsening pain and tight skin.",
              "Bleeding that soaks the dressing or does not stop.",
              "Skin that turns black, purple or very pale, particularly behind the ear.",
              "Fever, spreading redness or discharge of pus.",
              "Sudden asymmetry of your smile or being unable to close one eye.",
              "A swollen, painful calf or breathlessness.",
            ],
          },
          {
            heading: "Factors that increase risk",
            paragraphs: ["Several of these can be addressed before surgery and should be discussed at consultation."],
            bullets: [
              "Smoking and any form of nicotine: stop completely for several weeks before and after.",
              "High blood pressure: it should be well controlled before surgery.",
              "Medicines and supplements that thin the blood, which you should declare and stop only as advised.",
              "A previous facelift, which makes surgery more demanding.",
              "Diabetes or another poorly controlled long-term condition.",
            ],
          },
        ],
        sources: [NHS, BAAPS, BAPRAS, RCS],
      },
      // ── Cost ──
      {
        ...GB,
        kind: "cost",
        title: "Facelift cost",
        summary:
          "What a UK facelift quote should include, what makes the price vary, NHS funding rules and how complications or revisions affect costs.",
        answer:
          "The cost of a facelift depends on the technique, any combined procedures, the surgeon, the anaesthetic and the hospital. We do not give figures: only a detailed written quote after consultation can tell you the price. Cosmetic facelifts are not funded by the NHS.",
        sections: [
          {
            heading: "What a quote should include",
            paragraphs: [
              "Ask for a written, itemised quote and check that it covers each of the following, or states clearly what is excluded.",
            ],
            bullets: [
              "Surgeon's fee.",
              "Anaesthetist's fee, sometimes billed separately.",
              "Hospital charges: theatre time, overnight stay and room.",
              "Dressings, chin strap or support garment, medicines and pre-operative tests.",
              "Follow-up appointments and how long aftercare lasts.",
            ],
          },
          {
            heading: "What makes the price vary",
            paragraphs: ["Two facelift quotes are hard to compare without knowing exactly what each one covers."],
            bullets: [
              "Extent of surgery: mini facelift, full face and neck lift, or neck lift alone.",
              "Combined procedures: eyelid surgery, fat transfer, neck liposuction.",
              "Length of the operation and type of anaesthetic.",
              "Day case or overnight stay.",
              "Secondary facelift, which is often more complex.",
              "Location and the hospital or clinic.",
            ],
          },
          {
            heading: "NHS funding",
            paragraphs: [
              "The NHS does not usually fund cosmetic surgery, and a facelift for ageing is not available on the NHS. Facial surgery may be funded for reconstructive reasons, such as facial palsy, injury or cancer, according to local commissioning criteria.",
              "Where a procedure falls outside routine criteria, your clinician can sometimes submit an individual funding request (IFR), which is approved only in exceptional circumstances.",
            ],
          },
          {
            heading: "The cost of complications and revisions",
            paragraphs: [
              "A return to theatre for haematoma, treatment of skin loss or scar revision may involve extra charges for the hospital, anaesthetist or surgeon. Ask in writing what is included if complications occur, and for how long.",
              "Some providers include or sell complication insurance. Check what it covers, its exclusions and its duration. If you have surgery abroad, complications treated after your return may not be covered and NHS care is limited to what is clinically necessary.",
            ],
          },
          {
            heading: "Protecting yourself",
            paragraphs: [
              "Be wary of time-limited discounts, pressure to pay a deposit at the first appointment, or a price much lower than other quotes without a clear explanation. GMC guidance says doctors must not pressure patients into cosmetic interventions or use promotional tactics that encourage hasty decisions.",
              "Check that your surgeon is on the GMC Specialist Register and that the hospital or clinic is registered with the CQC in England, or the equivalent regulator elsewhere in the UK.",
            ],
          },
        ],
        sources: [NHS, GMC, CQC],
      },
      // ── Recovery ──
      {
        ...GB,
        kind: "recovery",
        title: "Recovery after a facelift",
        summary:
          "Facelift recovery step by step: the first days, stitch removal, returning to work and exercise, scar care and when the result settles.",
        answer:
          "Most people return to social life and work that does not involve meeting the public after two to three weeks. Exercise can usually resume at four to six weeks. Residual swelling and numbness take several months to settle, and the result stabilises between six and twelve months.",
        sections: [
          {
            heading: "The first 48 hours",
            paragraphs: [
              "Your face will be wrapped in a light pressure dressing, sometimes with drains. You rest with your head raised while staff monitor your blood pressure, pain and any sign of haematoma, which is most likely during this period.",
            ],
            bullets: [
              "Avoid straining, forceful coughing, untreated nausea and anything that raises blood pressure.",
              "Use cold compresses as advised.",
              "Take only the medicines prescribed, avoiding aspirin and anti-inflammatories unless your doctor agrees.",
            ],
          },
          {
            heading: "The first week",
            paragraphs: [
              "The dressing and any drains come off around day two or three. Swelling and bruising peak and then start to ease. The first stitches, in front of the ear, are removed at around five to seven days.",
              "Sleep on your back with your head raised, and avoid turning your head sharply or bending forward. Soft foods can be more comfortable for the first few days.",
            ],
          },
          {
            heading: "Weeks two to six",
            paragraphs: [
              "The remaining stitches or clips behind the ear and in the scalp are removed around the second week. Bruising fades and can be covered with make-up once your surgeon agrees.",
            ],
            bullets: [
              "Work without public contact: often after two to three weeks.",
              "Driving: once you can turn your head comfortably and are not taking medicines that cause drowsiness; check with your insurer.",
              "Exercise and heavy lifting: gradual return at four to six weeks.",
              "Hair colouring, saunas and steam rooms: avoid for several weeks, as advised.",
            ],
          },
          {
            heading: "Scars and sun protection",
            paragraphs: [
              "Scars stay pink for several months before fading. Strict sun protection, with sunscreen and a hat, is advised for at least a year to reduce discolouration.",
              "Your surgeon may recommend massage or scar products. Show them any scar that thickens, itches or widens.",
            ],
          },
          {
            heading: "The longer term",
            paragraphs: [
              "Numbness of the cheeks and ears improves over several months. The face softens and the result settles between six and twelve months.",
              "Ageing continues afterwards. Protecting your skin from the sun, not smoking and keeping a stable weight help preserve the benefit.",
            ],
          },
          {
            heading: "Warning signs",
            paragraphs: [
              "Sudden painful swelling on one side, skin darkening behind the ear, fever or sudden facial asymmetry need an urgent call to your surgeon. If you have difficulty breathing or collapse, call 999; for other urgent concerns, NHS 111 can advise.",
            ],
          },
        ],
        sources: [NHS, BAAPS, BAPRAS],
      },
      // ── Decision ──
      {
        ...GB,
        kind: "decision",
        title: "Facelift: before you decide",
        summary:
          "Questions to ask at consultation, choosing a surgeon, the recommended two-week cooling-off period and what to check before a facelift.",
        answer:
          "A facelift should be decided after at least one thorough consultation, knowing its limits and risks. There is no legal cooling-off period in the UK, but GMC guidance supports time to reflect and two weeks is widely recommended. Use that time to compare, ask questions and check your surgeon's registration.",
        sections: [
          {
            heading: "Be clear about what you hope for",
            paragraphs: [
              "A facelift improves sagging in the lower face and neck; it does not change skin quality, fine lines or your expressions. A specific, realistic goal, such as a firmer jawline or a less loose neck, makes the conversation with your surgeon easier.",
              "Think about timing, too: bereavement, a break-up or a period of intense stress is not a good moment for a decision like this.",
            ],
          },
          {
            heading: "Choosing a surgeon and hospital",
            paragraphs: [
              "Facelifts are performed by surgeons on the GMC Specialist Register in plastic surgery, otolaryngology (ENT) or oral and maxillofacial surgery. Check the register online, and ask about Royal College of Surgeons certification in cosmetic surgery, which is voluntary.",
              "In England, the hospital or clinic must be registered with the Care Quality Commission; Healthcare Improvement Scotland, Healthcare Inspectorate Wales and the RQIA in Northern Ireland play the same role.",
            ],
          },
          {
            heading: "Questions to ask at consultation",
            paragraphs: ["It helps to write your questions down in advance and note the answers."],
            bullets: [
              "Which technique do you recommend (SMAS lift, mini facelift, neck lift) and why?",
              "Would any combined procedures help in my case, and what risks do they add?",
              "Where will the scars be and what will they look like?",
              "What are my particular risks, especially of haematoma or skin loss?",
              "How many facelifts do you perform, and where?",
              "What does aftercare involve, and who do I call at night or at weekends?",
              "What happens, including costs, if there is a complication or I need a revision?",
            ],
          },
          {
            heading: "The cooling-off period",
            paragraphs: [
              "UK law does not set a cooling-off period, but GMC guidance on cosmetic interventions says you should have time to reflect before agreeing, and the doctor carrying out the procedure should seek your consent themselves. A gap of at least two weeks between consultation and surgery is widely recommended.",
              "You should not be asked to pay a non-refundable deposit or book surgery on the day of your first consultation. Taking longer, seeing the surgeon again or getting a second opinion is always acceptable.",
            ],
          },
          {
            heading: "When worry becomes overwhelming",
            paragraphs: [
              "It is common to be bothered by signs of ageing. If the concern takes up much of your time, makes you avoid other people or focuses on details others do not notice, it may be body dysmorphic disorder. Surgery rarely brings lasting relief in that situation; talking to your GP is a useful first step.",
              "If you are in distress or having thoughts of suicide, you can call Samaritans free on 116 123, at any time, or contact NHS 111.",
            ],
          },
        ],
        sources: [GMC, CQC, RCS, NHS],
      },
      // ── Alternatives ──
      {
        ...GB,
        kind: "alternatives",
        title: "Alternatives to a facelift",
        summary:
          "Fillers, botulinum toxin, thread lifts, fat transfer or doing nothing: what non-surgical and smaller options can achieve, and their limits.",
        answer:
          "Fillers, botulinum toxin and thread lifts can improve some signs of ageing without major surgery, but they cannot correct marked sagging of the lower face and neck. Their effects are temporary and they carry their own risks. Doing nothing remains a legitimate choice.",
        sections: [
          {
            heading: "Doing nothing, or waiting",
            paragraphs: [
              "Facial ageing is not an illness. Choosing not to have treatment, or putting the decision off, involves no loss of opportunity and can be revisited later.",
            ],
          },
          {
            heading: "Dermal fillers",
            paragraphs: [
              "Hyaluronic acid fillers restore lost volume in the cheeks, folds or jawline and may improve mild sagging. The effect is temporary, from several months to around a year or more depending on the product and area.",
              "Risks include bruising, lumps, infection and, rarely, blockage of a blood vessel that can cause skin loss or, very rarely, loss of vision. In the UK, dermal fillers are largely unregulated for practitioners, so choose a registered healthcare professional and check who would manage a complication.",
            ],
          },
          {
            heading: "Botulinum toxin",
            paragraphs: [
              "A prescription-only medicine that relaxes certain muscles, softening expression lines and sometimes neck bands. It does not lift sagging tissue. The effect lasts a few months; temporary asymmetry or a drooping eyelid can occur.",
            ],
          },
          {
            heading: "Thread lifts",
            paragraphs: [
              "Threads placed under the skin can give a modest lift with a short recovery. The effect is limited and temporary, and threads do not replace a facelift when sagging is marked or there is loose neck skin.",
            ],
            bullets: [
              "Visible or palpable threads, puckering and irregularities.",
              "Pain, infection, and sometimes the need to remove a thread.",
              "Asymmetry, and an effect that fades over months.",
            ],
          },
          {
            heading: "Smaller surgical procedures and energy devices",
            paragraphs: [
              "Depending on your main concern, eyelid surgery, facial fat transfer or neck liposuction may meet your needs without a full facelift. Energy-based treatments (radiofrequency, focused ultrasound) have a modest and variable effect on skin firmness. Discuss these options with a qualified surgeon who can explain what they could achieve for you. Problems with medical devices can be reported to the MHRA through the Yellow Card scheme.",
            ],
          },
        ],
        sources: [NHS, MHRA, BAAPS],
      },
    ],
    glossary: [
      {
        id: "smas",
        locale: "en-gb",
        slug: "smas",
        term: "SMAS",
        aliases: [
          "superficial musculoaponeurotic system",
          "superficial musculo-aponeurotic system",
          "SMAS facelift",
          "SMAS lift",
        ],
        definition:
          "The SMAS (superficial musculoaponeurotic system) is a thin fibrous and muscular layer beneath the skin and fat of the face, continuous with the neck muscle (platysma). It is the main structure repositioned in most facelifts.",
        detail: [
          "With age, the SMAS loosens and descends, carrying the overlying tissue with it: this contributes to jowls, a less defined jawline and a loose neck. Tightening it repositions tissue at a deeper level without pulling excessively on the skin.",
          "Depending on the technique, the surgeon may fold and stitch the SMAS (plication), remove a strip of it, or lift it more widely before repositioning it. Deeper, more extensive techniques may give a stronger effect but require great precision because the branches of the facial nerve lie close by.",
          "Skin-only lifts generally last less well and place more tension on the scar. The choice of technique is discussed at consultation, based on your anatomy and expectations.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "facial-nerve",
        locale: "en-gb",
        slug: "facial-nerve",
        term: "Facial nerve",
        aliases: ["facial nerves", "facial nerve branches", "seventh cranial nerve", "cranial nerve VII"],
        definition:
          "The facial nerve controls the muscles of facial expression, allowing you to close your eyes, raise your eyebrows and smile. It leaves the skull below the ear and divides into several branches that run through the cheek beneath the SMAS.",
        detail: [
          "During a facelift, some branches of the facial nerve lie close to the area being operated on. Injury is rare; it shows as weakness of part of the face, such as difficulty raising one eyebrow or an uneven smile.",
          "Most cases are caused by stretching, swelling or local anaesthetic and recover over weeks to months. Permanent weakness is very rare. It should not be confused with numbness of the skin, which is very common and involves the sensory nerves.",
          "Sudden facial asymmetry or difficulty closing an eye after surgery should be reported to your surgeon promptly.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },
};
