import type { Source } from "../types";
import type { Dossier } from "./types";

// ─── Sources France ───
const HAS: Source = { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" };
const SOFCPRE: Source = {
  label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)",
  url: "https://www.sofcpre.fr",
};
const SFO: Source = { label: "Société française d'ophtalmologie (SFO)", url: "https://www.sfo-online.fr" };
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
  label: "Agence nationale de sécurité du médicament et des produits de santé (ANSM) : toxine botulique",
  url: "https://ansm.sante.fr",
};
const N3114: Source = { label: "3114 — numéro national de prévention du suicide", url: "https://3114.fr" };

// ─── Sources Royaume-Uni ───
const NHS: Source = { label: "NHS: brow lift, eyelid surgery and cosmetic procedures", url: "https://www.nhs.uk" };
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
const BOPSS: Source = { label: "British Oculoplastic Surgery Society (BOPSS)", url: "https://www.bopss.co.uk" };
const MHRA: Source = {
  label: "Medicines and Healthcare products Regulatory Agency (MHRA): botulinum toxin",
  url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
};
const SAMARITANS: Source = { label: "Samaritans (116 123)", url: "https://www.samaritans.org" };

const REVIEW = { status: "draft" } as const;
const UPDATED_AT = "2026-10-13";

/** Lifting frontal (lifting des sourcils) : fiche, sous-pages et lexique (fr, en-gb). Brouillon à relire par le comité médical. */
export const dossier: Dossier = {
  // ════════════════════════════════════ FRANCE ════════════════════════════════════
  fr: {
    intervention: {
      id: "brow-lift",
      locale: "fr",
      slug: "lifting-frontal",
      category: "face",
      title: "Lifting frontal (lifting des sourcils)",
      summary:
        "Le lifting frontal remonte des sourcils tombants et atténue les rides du front. Techniques, lien avec les paupières, risques et convalescence.",
      description: [
        "Le lifting frontal, aussi appelé lifting des sourcils ou lifting du front, repositionne vers le haut des sourcils descendus avec l'âge et retend les tissus du front. Il agit sur la partie haute du visage : sourcils tombants ou affaissés sur leur partie externe (la « queue » du sourcil), regard qui paraît fatigué, triste ou sévère, rides horizontales du front et rides du lion entre les sourcils.",
        "Plusieurs techniques existent. La voie endoscopique, la plus utilisée aujourd'hui, passe par trois à cinq incisions de un à deux centimètres cachées dans le cuir chevelu : le chirurgien décolle les tissus du front à l'aide d'une caméra fine (endoscope), libère les attaches du sourcil puis le fixe plus haut par des fils, de petites vis ou des dispositifs résorbables. La voie temporale, par de courtes incisions au-dessus des tempes, remonte surtout la partie externe du sourcil.",
        "La voie coronale, plus ancienne, utilise une incision d'une oreille à l'autre au sommet du crâne et retire une bande de cuir chevelu ; elle donne un effet marqué mais recule la ligne d'implantation des cheveux et laisse une longue cicatrice. Une variante place l'incision juste à la lisière des cheveux, pour les fronts hauts dont on ne veut pas allonger la hauteur. D'autres gestes plus limités existent : incision directement au-dessus du sourcil (cicatrice visible, parfois proposée chez l'homme ou en cas de paralysie faciale) ou fixation du sourcil par la voie de la paupière supérieure lors d'une blépharoplastie.",
        "Le lifting frontal est étroitement lié à la blépharoplastie supérieure (chirurgie des paupières). Un sourcil descendu repousse la peau vers la paupière et donne l'impression d'un excès de paupière : retirer cette peau sans traiter le sourcil peut alors abaisser encore le sourcil et donner un résultat décevant. L'examen de la position du sourcil fait donc partie de toute consultation pour les paupières supérieures, et les deux interventions sont souvent discutées ensemble.",
        "Le lifting frontal ne traite ni le bas du visage ni le cou (relevant du lifting cervico-facial), ni les cernes ou les poches sous les yeux, ni la qualité de la peau. Un résultat trop marqué peut donner un air étonné ou figé : l'objectif est un repositionnement mesuré, pas une transformation du regard.",
        "Le résultat est durable mais pas définitif : le vieillissement se poursuit et les sourcils peuvent redescendre en partie avec les années, plus ou moins selon la technique, la fixation et la qualité des tissus. Aucune durée précise ne peut être promise.",
      ],
      indications: [
        "Sourcils descendus ou affaissés sur leur partie externe, donnant un regard fatigué, triste ou sévère.",
        "Impression d'excès de peau des paupières supérieures liée en réalité, en tout ou partie, à la descente du sourcil.",
        "Rides horizontales du front et rides du lion marquées, en complément d'autres traitements.",
        "Asymétrie de hauteur des sourcils gênante.",
        "Sourcil tombant à la suite d'une paralysie faciale, situation à finalité réparatrice évaluée au cas par cas.",
        "Demande précise, exprimée par la personne elle-même et stable dans le temps.",
      ],
      contraindications: [
        "Attentes irréalistes, recherche d'une transformation du regard ou demande motivée par la pression d'un tiers.",
        "Préoccupation excessive pour un défaut minime ou invisible, qui doit être évoquée avec le chirurgien.",
        "Front très haut ou cheveux clairsemés pour certaines techniques (coronale notamment), qui reculent la ligne des cheveux ou exposent les cicatrices : une autre voie est alors à discuter.",
        "Sécheresse oculaire importante ou difficulté à fermer les yeux, à évaluer avant toute chirurgie de la région des yeux.",
        "Tabagisme actif, qui augmente le risque de mauvaise cicatrisation du cuir chevelu : un arrêt est recommandé.",
        "Troubles de la coagulation, traitements anticoagulants ou antiagrégants non adaptés.",
        "Maladies chroniques non équilibrées (hypertension, diabète, maladie cardiaque).",
        "Grossesse ou allaitement en cours.",
      ],
      risks: [
        {
          name: "Œdème, ecchymoses et maux de tête",
          detail:
            "Fréquents et attendus : le gonflement du front descend souvent vers les paupières et le haut des joues, avec des bleus autour des yeux pendant une à deux semaines. Une sensation de tension ou des maux de tête sont fréquents les premiers jours.",
        },
        {
          name: "Perte de sensibilité du front et du cuir chevelu",
          detail:
            "Très fréquente : engourdissement du front et du cuir chevelu en arrière des incisions, parfois accompagné de démangeaisons ou de picotements lors de la récupération. Elle régresse le plus souvent en quelques semaines à quelques mois ; une diminution durable de la sensibilité est possible, surtout après une voie coronale.",
        },
        {
          name: "Atteinte du rameau frontal du nerf facial",
          detail:
            "Rare mais propre à cette chirurgie : la branche du nerf facial qui commande le muscle du front passe près de la tempe. Une atteinte se traduit par une difficulté à lever un sourcil et une asymétrie du front. Elle est le plus souvent transitoire et récupère en quelques semaines à quelques mois ; une paralysie définitive est très rare.",
        },
        {
          name: "Alopécie sur cicatrice et modification de la ligne des cheveux",
          detail:
            "Une perte de cheveux peut survenir le long des incisions du cuir chevelu, le plus souvent temporaire ; elle est parfois définitive et laisse une cicatrice plus visible. La voie coronale recule la ligne d'implantation des cheveux et allonge le front.",
        },
        {
          name: "Asymétrie, correction excessive ou insuffisante",
          detail:
            "Les sourcils peuvent rester à des hauteurs différentes, être remontés trop haut (air étonné) ou pas assez. Une partie de l'asymétrie s'atténue avec la résorption de l'œdème ; une retouche peut être discutée après stabilisation, en général plusieurs mois plus tard.",
        },
        {
          name: "Récidive de la descente des sourcils",
          detail:
            "Les sourcils peuvent redescendre partiellement dans les mois ou les années qui suivent, notamment si la fixation lâche ou si les tissus sont lourds.",
        },
        {
          name: "Hématome",
          detail:
            "Collection de sang sous le cuir chevelu ou le front, peu fréquente ; un gonflement rapide, tendu et douloureux d'un côté doit faire appeler le chirurgien, car une évacuation peut être nécessaire.",
        },
        {
          name: "Cicatrices et problèmes de cicatrisation",
          detail:
            "Cicatrices élargies, visibles si les cheveux sont courts ou clairsemés ; cicatrice apparente sur le front ou au-dessus du sourcil avec les voies directes. Rarement, souffrance de la peau du cuir chevelu, favorisée par le tabac.",
        },
        {
          name: "Dispositifs de fixation sensibles ou palpables",
          detail:
            "Les vis, fils ou dispositifs résorbables utilisés pour fixer le sourcil peuvent être perçus au toucher pendant quelques mois, ou plus rarement nécessiter un retrait.",
        },
        {
          name: "Infection",
          detail: "Rare ; le plus souvent traitée par des soins locaux et des antibiotiques.",
        },
        {
          name: "Troubles de fermeture des yeux et sécheresse oculaire",
          detail:
            "Surtout lorsque le lifting est associé à une blépharoplastie supérieure : une fermeture incomplète des paupières, en général transitoire, peut entraîner une sécheresse ou une irritation de l'œil qui doit être signalée.",
        },
        {
          name: "Risques liés à l'anesthésie",
          detail: "À évaluer lors de la consultation d'anesthésie obligatoire.",
        },
      ],
      procedure: {
        anaesthesia:
          "Anesthésie générale le plus souvent ; anesthésie locale associée à une sédation possible pour les techniques limitées (voie temporale, voie palpébrale).",
        duration:
          "Environ 1 à 2 heures selon la technique, davantage en cas d'association à une blépharoplastie ou à un lifting du visage.",
        hospitalStay:
          "Le plus souvent en ambulatoire ; une nuit d'hospitalisation peut être proposée selon la technique et les gestes associés.",
      },
      recovery: [
        "Jours 1 à 2 : bandeau ou pansement autour de la tête, tête surélevée pour dormir, compresses froides ; sensation de tension du front et maux de tête soulagés par des antalgiques.",
        "Jours 2 à 3 : l'œdème descend vers les paupières et les joues ; les bleus autour des yeux sont souvent les plus visibles à ce moment. Lavage des cheveux généralement autorisé après 48 heures, avec un shampoing doux.",
        "Jours 7 à 14 : retrait des fils ou agrafes du cuir chevelu ; les bleus s'estompent.",
        "Reprise d'une activité sociale et d'un travail de bureau souvent après 10 à 14 jours, selon l'œdème et les gestes associés.",
        "Semaines 3 à 6 : reprise progressive du sport, avec l'accord du chirurgien ; éviter les efforts violents, les sèche-cheveux très chauds et les colorations capillaires pendant la période indiquée par le chirurgien.",
        "Mois 1 à 6 : retour progressif de la sensibilité du front et du cuir chevelu, avec parfois des démangeaisons ; les sourcils prennent leur position définitive.",
        "Résultat apprécié vers 3 à 6 mois ; les cicatrices continuent de s'affiner pendant 12 à 18 mois.",
      ],
      alternatives: [
        "Ne rien faire : une option légitime, à reconsidérer après un temps de réflexion.",
        "Injections de toxine botulique (médecine esthétique) : en relâchant certains muscles qui abaissent le sourcil, elles peuvent le remonter légèrement et atténuer les rides du front ; effet temporaire, de l'ordre de quelques mois, à renouveler, avec des risques propres (chute de la paupière ou du sourcil, asymétrie).",
        "Injections d'acide hyaluronique ou de graisse autour du sourcil : soutien modeste du volume, effet temporaire pour l'acide hyaluronique, risques propres.",
        "Blépharoplastie supérieure seule, si l'excès de peau des paupières est réel et que le sourcil est bien positionné.",
        "Techniques d'énergie (radiofréquence, ultrasons focalisés) : effet de tension limité et variable, sans repositionnement comparable à la chirurgie.",
      ],
      faq: [
        {
          question: "Quelle est la différence entre un lifting frontal et une blépharoplastie ?",
          answer:
            "La blépharoplastie supérieure retire l'excès de peau et parfois de graisse des paupières. Le lifting frontal remonte le sourcil lui-même. Un sourcil descendu peut imiter un excès de paupière : dans ce cas, la blépharoplastie seule ne suffit pas et peut même abaisser le sourcil. Le chirurgien examine les deux zones avant de proposer l'une, l'autre ou leur association.",
        },
        {
          question: "Les cicatrices se voient-elles ?",
          answer:
            "Avec la voie endoscopique ou temporale, les incisions sont courtes et cachées dans le cuir chevelu. La voie coronale laisse une longue cicatrice dans les cheveux ; les voies placées à la lisière des cheveux, sur le front ou au-dessus du sourcil laissent une cicatrice plus exposée. Une perte de cheveux le long de la cicatrice est possible et peut la rendre plus visible.",
        },
        {
          question: "La toxine botulique peut-elle remplacer l'intervention ?",
          answer:
            "Elle peut remonter légèrement la queue du sourcil et atténuer les rides du front, sans chirurgie, mais son effet est temporaire et doit être renouvelé. Elle ne corrige pas une descente importante du sourcil. Elle doit être injectée par un médecin, avec un produit autorisé.",
        },
        {
          question: "Vais-je perdre la sensibilité du front ?",
          answer:
            "Un engourdissement du front et du cuir chevelu est très fréquent après l'intervention. La sensibilité revient le plus souvent progressivement en quelques mois, avec parfois des démangeaisons. Une diminution durable est possible, plus souvent après une voie coronale.",
        },
        {
          question: "Pourrai-je encore lever les sourcils ?",
          answer:
            "En règle générale, oui. Une faiblesse du muscle du front d'un côté peut survenir si le rameau frontal du nerf facial a été étiré ou touché ; elle est rare et le plus souvent transitoire. Si le chirurgien a affaibli certains muscles responsables des rides du lion, le froncement des sourcils peut être moins marqué.",
        },
        {
          question: "Combien de temps dure le résultat ?",
          answer:
            "Le résultat est durable mais le vieillissement continue, et les sourcils peuvent redescendre en partie avec les années. La tenue dépend de la technique, de la fixation, de la qualité des tissus et de facteurs personnels comme le tabac ou l'exposition au soleil.",
        },
        {
          question: "Le lifting frontal est-il remboursé ?",
          answer:
            "Non lorsqu'il est réalisé à visée esthétique. Dans certaines situations médicales, comme une paralysie faciale ou un sourcil tombant qui gêne la vision, une prise en charge peut être discutée ; le chirurgien vous indique si une demande d'accord préalable est nécessaire.",
        },
        {
          question: "Quel est le délai entre la consultation et l'intervention ?",
          answer:
            "En France, la loi impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention à visée esthétique. Aucun paiement ne peut être exigé avant la fin de ce délai, en dehors des honoraires de consultation. Une consultation d'anesthésie est obligatoire.",
        },
        {
          question: "Quel chirurgien consulter ?",
          answer:
            "Un chirurgien qualifié en chirurgie plastique, reconstructrice et esthétique, ou selon les cas un chirurgien d'une spécialité de la face formé à cette intervention (ophtalmologiste spécialisé en chirurgie des paupières, chirurgien ORL et cervico-facial, chirurgien maxillo-facial). Vous pouvez vérifier sa qualification sur l'Annuaire santé. L'intervention doit avoir lieu dans un établissement autorisé par l'ARS.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risques ──
      {
        interventionId: "brow-lift",
        kind: "risks",
        locale: "fr",
        title: "Lifting frontal : les risques",
        summary:
          "Engourdissement, atteinte du nerf facial, perte de cheveux sur cicatrice, asymétrie : les risques du lifting frontal et les signes d'alerte.",
        answer:
          "Gonflement, bleus autour des yeux et engourdissement du front et du cuir chevelu sont attendus. Asymétrie, récidive, hématome ou perte de cheveux le long de la cicatrice sont moins fréquents. Une atteinte du rameau frontal du nerf facial, qui empêche de lever un sourcil, est rare et le plus souvent transitoire.",
        sections: [
          {
            heading: "Les suites fréquentes et attendues",
            paragraphs: [
              "Ces manifestations sont des suites normales de l'intervention et diminuent en quelques jours à quelques semaines.",
            ],
            bullets: [
              "Gonflement du front qui descend vers les paupières et les joues dans les jours suivants.",
              "Ecchymoses autour des yeux, parfois marquées, pendant une à deux semaines.",
              "Sensation de tension du front, maux de tête les premiers jours.",
              "Engourdissement du front et du cuir chevelu en arrière des incisions.",
              "Démangeaisons ou picotements lors de la récupération de la sensibilité.",
              "Croûtes le long des incisions du cuir chevelu.",
            ],
          },
          {
            heading: "Les complications moins fréquentes",
            paragraphs: [
              "Leur fréquence dépend de la technique choisie, des gestes associés et de votre état de santé.",
            ],
            bullets: [
              "Asymétrie de hauteur des sourcils, correction insuffisante ou excessive (air étonné).",
              "Redescente partielle des sourcils dans les mois ou années qui suivent.",
              "Alopécie (perte de cheveux) le long des cicatrices, le plus souvent temporaire, parfois définitive.",
              "Recul de la ligne des cheveux et allongement du front avec la voie coronale.",
              "Hématome sous le cuir chevelu, pouvant nécessiter une évacuation.",
              "Dispositifs de fixation perçus au toucher, plus rarement à retirer.",
              "Cicatrices élargies ou visibles, notamment avec les voies sur le front ou au-dessus du sourcil.",
              "Diminution durable de la sensibilité du cuir chevelu, surtout après une voie coronale.",
            ],
          },
          {
            heading: "L'atteinte du rameau frontal du nerf facial",
            paragraphs: [
              "Le nerf facial commande les muscles de l'expression. Sa branche frontale (ou temporale) croise la tempe pour rejoindre le muscle du front, à proximité de la zone opérée lors des voies temporale, endoscopique et coronale. Une atteinte, rare, se traduit par une difficulté à lever le sourcil et à plisser le front d'un côté, avec une asymétrie visible.",
              "Le plus souvent, elle est due à un étirement ou à l'œdème et récupère en quelques semaines à quelques mois. Une paralysie définitive est très rare ; elle peut alors faire discuter des traitements complémentaires. Il ne faut pas la confondre avec l'engourdissement de la peau, très fréquent, qui relève des nerfs de la sensibilité (nerfs supra-orbitaires et supra-trochléaires).",
            ],
          },
          {
            heading: "Les complications rares mais graves",
            paragraphs: [
              "Une souffrance de la peau du cuir chevelu, une infection profonde ou un hématome important sont rares et imposent une prise en charge rapide. Lorsque l'intervention est associée à une chirurgie des paupières, une fermeture incomplète des yeux peut exposer la cornée à une irritation ou à une ulcération : elle doit être surveillée. Comme toute chirurgie sous anesthésie générale, l'intervention comporte des risques anesthésiques, évalués lors de la consultation obligatoire avec l'anesthésiste.",
            ],
          },
          {
            heading: "Quand appeler sans attendre",
            paragraphs: [
              "Contactez rapidement le chirurgien ou l'équipe qui vous a opéré en cas de signe inhabituel. En cas de malaise, de difficulté à respirer ou de baisse brutale de la vision, appelez le 15 (SAMU) ou le 112.",
            ],
            bullets: [
              "Gonflement rapide, tendu et douloureux du front ou du cuir chevelu, surtout d'un seul côté.",
              "Douleur qui augmente au lieu de diminuer, fièvre, rougeur qui s'étend ou écoulement purulent.",
              "Baisse de la vision, douleur de l'œil ou impossibilité de fermer complètement les yeux.",
              "Asymétrie brutale du visage ou impossibilité de lever un sourcil.",
              "Peau du cuir chevelu qui devient sombre ou noirâtre.",
            ],
          },
          {
            heading: "Les facteurs qui augmentent les risques",
            paragraphs: ["Certains facteurs sont modifiables et doivent être discutés en consultation."],
            bullets: [
              "Tabac, qui altère la circulation dans le cuir chevelu et la cicatrisation.",
              "Hypertension mal équilibrée, qui favorise l'hématome.",
              "Médicaments ou compléments qui favorisent le saignement (aspirine, anti-inflammatoires, anticoagulants, certains compléments).",
              "Cheveux fins ou clairsemés, qui rendent les cicatrices et une éventuelle alopécie plus visibles.",
              "Association de plusieurs gestes (blépharoplastie, lifting du visage), qui allonge l'intervention.",
            ],
          },
          {
            heading: "Retouches",
            paragraphs: [
              "Une asymétrie persistante, une correction insuffisante ou une cicatrice élargie peuvent justifier une retouche. Elle n'est envisagée qu'après stabilisation, en général plusieurs mois après l'intervention. Une correction excessive est plus difficile à corriger qu'une correction insuffisante, d'où l'intérêt d'un repositionnement mesuré. Demandez avant de vous engager quelles conditions sont prévues, y compris sur le plan financier.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFO, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Prix ──
      {
        interventionId: "brow-lift",
        kind: "cost",
        locale: "fr",
        title: "Prix d'un lifting frontal",
        summary:
          "Ce que contient un devis de lifting frontal, ce qui fait varier le prix (technique, anesthésie, gestes associés) et les rares cas de prise en charge.",
        answer:
          "Le coût d'un lifting frontal dépend surtout de la technique, du type d'anesthésie, de l'établissement et des gestes associés, comme une blépharoplastie. Nous n'indiquons pas de fourchette de prix : seul un devis détaillé et daté, remis après consultation, permet de connaître le montant. À visée esthétique, il n'est pas remboursé.",
        sections: [
          {
            heading: "Ce que contient un devis",
            paragraphs: [
              "En France, un devis détaillé et daté doit être remis avant toute intervention de chirurgie esthétique. Vérifiez qu'il précise les postes suivants, ou ceux qui n'y figurent pas.",
            ],
            bullets: [
              "Honoraires du chirurgien, avec la technique prévue (endoscopique, temporale, coronale, autre).",
              "Honoraires de l'anesthésiste (parfois facturés séparément).",
              "Frais de l'établissement : bloc opératoire, ambulatoire ou nuit d'hospitalisation.",
              "Dispositifs de fixation éventuels (vis, dispositifs résorbables) et matériel d'endoscopie.",
              "Pansements, bandeau et médicaments.",
              "Consultations de suivi et conditions prévues en cas de retouche ou de complication.",
            ],
          },
          {
            heading: "Ce qui fait varier le prix",
            paragraphs: [
              "La technique (une voie endoscopique nécessite un matériel spécifique), la durée de l'intervention, le type d'anesthésie, la nécessité d'une nuit d'hospitalisation et l'association à d'autres gestes (blépharoplastie supérieure, lifting du visage, traitement des rides du lion) pèsent sur le devis. Opérer plusieurs zones en une séance modifie le coût global mais aussi la durée de l'intervention et des suites.",
              "Le prix ne renseigne pas à lui seul sur la qualité. Une technique présentée comme plus récente n'est pas nécessairement plus adaptée à votre anatomie.",
            ],
          },
          {
            heading: "Les règles applicables en France",
            paragraphs: [
              "Le Code de la santé publique (article L6322-2) impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention à visée esthétique. Aucune somme autre que les honoraires de consultation ne peut être exigée avant la fin de ce délai.",
              "Les actes à visée purement esthétique sont soumis à la TVA. L'intervention doit avoir lieu dans un établissement autorisé par l'ARS, et une consultation d'anesthésie préalable est obligatoire.",
            ],
          },
          {
            heading: "Quand l'Assurance maladie peut intervenir",
            paragraphs: [
              "Un lifting frontal à visée esthétique n'est pas pris en charge. Dans certaines situations médicales, par exemple un sourcil tombant à la suite d'une paralysie faciale ou une descente du sourcil qui réduit le champ visuel, une prise en charge peut être discutée. Elle repose sur un examen médical documenté et peut nécessiter une demande d'accord préalable ; le chirurgien vous indique si votre situation répond aux critères. Des dépassements d'honoraires restent possibles selon le secteur du chirurgien.",
              "Lorsqu'un lifting frontal est associé à une blépharoplastie prise en charge pour gêne visuelle, la partie esthétique reste à votre charge : demandez un devis qui distingue clairement les deux parties.",
            ],
          },
          {
            heading: "Le coût des complications et des retouches",
            paragraphs: [
              "Une retouche pour asymétrie, l'évacuation d'un hématome ou le retrait d'un dispositif de fixation peuvent entraîner des frais, un arrêt de travail plus long ou des déplacements. Renseignez-vous sur ce qui serait facturé et sur l'existence d'une assurance couvrant les complications.",
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
        interventionId: "brow-lift",
        kind: "recovery",
        locale: "fr",
        title: "Convalescence après un lifting frontal",
        summary:
          "Après un lifting frontal : premiers jours, bleus autour des yeux, retrait des fils, reprise du travail et du sport, sensibilité et signes d'alerte.",
        answer:
          "Les premiers jours sont marqués par un gonflement qui descend vers les yeux, des bleus et une sensation de tension du front. Les fils ou agrafes sont retirés vers 7 à 14 jours, et une vie sociale reprend souvent après 10 à 14 jours. L'engourdissement du cuir chevelu peut durer plusieurs mois. Les consignes de votre chirurgien priment sur ces repères.",
        sections: [
          {
            heading: "Les premiers jours",
            paragraphs: [
              "La sortie a lieu le plus souvent le jour même ou le lendemain. Un bandeau ou un pansement entoure parfois la tête pendant 24 à 48 heures. Le front est tendu et engourdi ; le gonflement descend vers les paupières dans les jours qui suivent, et les bleus autour des yeux sont souvent plus visibles au deuxième ou troisième jour qu'au premier.",
            ],
            bullets: [
              "Dormir la tête surélevée et appliquer des compresses froides selon les consignes.",
              "Prendre les antalgiques prescrits ; éviter l'aspirine et les anti-inflammatoires sauf avis contraire.",
              "Éviter de se pencher en avant, de porter des charges et de faire des efforts.",
              "Prévoir une personne pour le retour à domicile et la première nuit.",
            ],
          },
          {
            heading: "Semaine par semaine",
            paragraphs: [],
            bullets: [
              "Semaine 1 : gonflement et bleus maximaux puis en diminution ; lavage des cheveux généralement autorisé après 48 heures, avec un shampoing doux et sans frotter les incisions.",
              "Semaine 2 : retrait des fils ou agrafes du cuir chevelu entre 7 et 14 jours ; les bleus s'estompent et peuvent être camouflés par du maquillage une fois les plaies cicatrisées.",
              "Semaines 2 à 3 : reprise d'une activité sociale et d'un travail de bureau pour beaucoup de personnes.",
              "Semaines 3 à 6 : reprise progressive du sport, d'abord doux, avec l'accord du chirurgien.",
              "Mois 1 à 6 : retour progressif de la sensibilité, souvent accompagné de démangeaisons ; position définitive des sourcils.",
            ],
          },
          {
            heading: "Cheveux, soins et soleil",
            paragraphs: [
              "Les colorations, permanentes, sèche-cheveux très chauds et lisseurs sont à éviter sur le cuir chevelu engourdi pendant la période indiquée par le chirurgien, car le risque de brûlure passe inaperçu. Une chute de cheveux temporaire autour des incisions est possible ; les cheveux repoussent le plus souvent en quelques mois.",
              "Protégez les cicatrices du front et des tempes du soleil pendant plusieurs mois. La conduite reprend lorsque le gonflement ne gêne plus la vision et sans antalgiques sédatifs.",
            ],
          },
          {
            heading: "Les mois suivants",
            paragraphs: [
              "Le résultat est apprécié vers 3 à 6 mois, une fois l'œdème résorbé ; une légère redescente des sourcils dans les premières semaines est fréquente et souvent anticipée par le chirurgien. Les cicatrices s'affinent pendant 12 à 18 mois. Une retouche ne se discute pas avant stabilisation.",
            ],
          },
          {
            heading: "Signes qui doivent faire appeler",
            paragraphs: [
              "Contactez le chirurgien en cas de gonflement rapide et douloureux d'un côté, de fièvre, de rougeur qui s'étend, d'écoulement purulent, d'impossibilité de lever un sourcil ou de fermer les yeux. En cas de baisse brutale de la vision, de malaise ou de difficulté à respirer, appelez le 15 ou le 112.",
            ],
          },
        ],
        sources: [HAS, SOFCPRE, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Avant de se décider ──
      {
        interventionId: "brow-lift",
        kind: "decision",
        locale: "fr",
        title: "Lifting frontal : avant de se décider",
        summary:
          "Lifting frontal : sourcil ou paupière, choix de la technique, attentes, dysmorphophobie, questions à poser et délai légal de 15 jours.",
        answer:
          "Le lifting frontal s'envisage chez un adulte dont les sourcils sont réellement descendus, après un examen qui distingue ce qui relève du sourcil et ce qui relève de la paupière. Le choix de la technique dépend de la hauteur du front, des cheveux et de l'effet recherché. En France, un délai minimal de 15 jours sépare la remise du devis de l'intervention.",
        sections: [
          {
            heading: "Sourcil ou paupière : bien identifier la cause",
            paragraphs: [
              "Beaucoup de personnes consultent pour des « paupières lourdes ». Le chirurgien observe la position du sourcil au repos, front relâché : s'il est descendu, il pousse la peau vers la paupière. Une blépharoplastie supérieure seule peut alors abaisser encore le sourcil. À l'inverse, un sourcil bien placé ne justifie pas de lifting frontal.",
              "Certaines personnes compensent inconsciemment en levant les sourcils en permanence, ce qui creuse les rides du front : relâcher le front pendant l'examen permet de mesurer la descente réelle.",
            ],
          },
          {
            heading: "Choisir une technique",
            paragraphs: [
              "La voie endoscopique laisse de petites cicatrices dans les cheveux et convient à beaucoup de fronts de hauteur normale. La voie temporale cible la queue du sourcil. La voie coronale donne un effet plus marqué mais recule la ligne des cheveux et laisse une longue cicatrice ; elle est plutôt réservée aux fronts courts. Une incision à la lisière des cheveux permet de traiter un front haut sans l'allonger, au prix d'une cicatrice plus exposée. Les voies directe et palpébrale ont des indications plus limitées.",
              "Demandez pourquoi une technique vous est proposée plutôt qu'une autre, et quelles en sont les conséquences sur les cicatrices, la ligne des cheveux et la sensibilité.",
            ],
          },
          {
            heading: "Vos attentes et la dysmorphophobie",
            paragraphs: [
              "Demandez-vous ce qui vous gêne précisément, depuis combien de temps, et ce que vous attendez de l'intervention. Un résultat trop marqué peut donner un air étonné ; des photographies et un examen dans le miroir aident à se représenter un changement réaliste. Une décision prise sous la pression d'un proche ou des réseaux sociaux expose davantage à la déception.",
              "Certaines personnes souffrent d'une préoccupation envahissante pour un défaut que les autres remarquent à peine : c'est le trouble dysmorphique corporel, ou dysmorphophobie. La chirurgie ne le soulage pas et peut aggraver la détresse. Si vous vous reconnaissez dans cette description, parlez-en à votre médecin traitant ; des traitements efficaces existent. En cas d'idées suicidaires, le 3114 répond jour et nuit.",
            ],
          },
          {
            heading: "Le déroulé, de la consultation au suivi",
            paragraphs: [],
            bullets: [
              "Première consultation : examen du front, des sourcils, des paupières et des yeux, photographies, discussion des techniques et des risques, remise d'un devis détaillé.",
              "Une seconde consultation est souvent proposée avant de confirmer ; un examen ophtalmologique peut être demandé en cas de sécheresse oculaire ou de chirurgie des paupières associée.",
              "Consultation d'anesthésie obligatoire, au plus tard quelques jours avant l'intervention.",
              "Intervention, le plus souvent en ambulatoire.",
              "Contrôles à quelques jours, au retrait des fils, puis à plusieurs mois pour évaluer le résultat.",
            ],
          },
          {
            heading: "Questions à poser en consultation",
            paragraphs: [],
            bullets: [
              "Quelle est votre qualification, et combien de liftings frontaux réalisez-vous ? (vérifiable sur l'Annuaire santé)",
              "Mes sourcils sont-ils réellement descendus, ou le problème vient-il surtout des paupières ?",
              "Quelle technique proposez-vous, et quel effet aura-t-elle sur ma ligne de cheveux et mes cicatrices ?",
              "Comment le sourcil sera-t-il fixé, et le dispositif sera-t-il perceptible ?",
              "Quel est le risque d'atteinte du nerf facial et de perte de sensibilité dans mon cas ?",
              "Faut-il associer une blépharoplastie, et dans quel ordre ?",
              "Qui joindre la nuit ou le week-end en cas de problème ?",
              "Que comprend le devis, et que se passe-t-il en cas d'asymétrie, de retouche ou de complication ?",
            ],
          },
          {
            heading: "Le délai de réflexion et le second avis",
            paragraphs: [
              "Le Code de la santé publique impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention à visée esthétique, et aucun paiement autre que la consultation ne peut être exigé avant. Ce délai est un minimum : rien ne vous oblige à décider à son terme. Demander un second avis est toujours légitime. La chirurgie esthétique est réservée aux adultes.",
            ],
          },
        ],
        sources: [LEGIFRANCE_L6322_2, HAS, ANNUAIRE_SANTE, SOFCPRE, N3114],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Alternatives ──
      {
        interventionId: "brow-lift",
        kind: "alternatives",
        locale: "fr",
        title: "Alternatives au lifting frontal",
        summary:
          "Toxine botulique, acide hyaluronique, blépharoplastie seule, techniques d'énergie ou ne rien faire : alternatives au lifting frontal et leurs limites.",
        answer:
          "Selon la situation, les alternatives sont les injections de toxine botulique, qui remontent légèrement le sourcil et atténuent les rides de façon temporaire, les injections de produits de comblement, une blépharoplastie supérieure seule si le sourcil est bien placé, les techniques d'énergie, ou ne rien faire. Aucune ne repositionne durablement un sourcil très descendu.",
        sections: [
          {
            heading: "La toxine botulique",
            paragraphs: [
              "La toxine botulique est un médicament injecté qui relâche temporairement les muscles. Injectée dans certains muscles qui tirent le sourcil vers le bas, elle peut remonter légèrement sa partie externe ; injectée dans le front et entre les sourcils, elle atténue les rides horizontales et les rides du lion. L'effet apparaît en quelques jours, dure en général quelques mois et nécessite des injections répétées.",
              "Ses risques propres comprennent des bleus aux points d'injection, des maux de tête, une asymétrie et, rarement, une chute temporaire de la paupière ou du sourcil si le produit diffuse. Une injection mal placée dans le front peut au contraire abaisser le sourcil. En France, elle relève de la médecine esthétique et doit être injectée par un médecin, avec un produit autorisé.",
            ],
          },
          {
            heading: "Les produits de comblement",
            paragraphs: [
              "Des injections d'acide hyaluronique ou de graisse sous la queue du sourcil ou à la tempe peuvent redonner un soutien modeste lorsque la perte de volume contribue à l'affaissement. L'acide hyaluronique se résorbe en quelques mois. Ces injections comportent des risques propres, dont, rarement, l'obstruction d'un vaisseau pouvant entraîner une nécrose de la peau ou, exceptionnellement, une atteinte de la vision.",
            ],
          },
          {
            heading: "La blépharoplastie supérieure seule",
            paragraphs: [
              "Si le sourcil est bien positionné et que la gêne vient d'un réel excès de peau des paupières, une blépharoplastie supérieure seule peut suffire. C'est l'examen de la position du sourcil qui permet de trancher ; une blépharoplastie réalisée alors que le sourcil est descendu peut accentuer cette descente.",
            ],
          },
          {
            heading: "Les techniques d'énergie et les fils tenseurs",
            paragraphs: [
              "La radiofréquence ou les ultrasons focalisés cherchent à retendre légèrement la peau par la chaleur ; l'effet sur la position du sourcil est limité et variable, et plusieurs séances peuvent être nécessaires. Les fils tenseurs donnent un effet modeste et temporaire, avec des risques propres (fils visibles ou palpables, irrégularités, infection). Ces techniques doivent être réalisées sous responsabilité médicale.",
            ],
          },
          {
            heading: "Ne rien faire",
            paragraphs: [
              "Choisir de ne pas intervenir est une option légitime. La réflexion peut être reprise plus tard sans conséquence médicale, sauf lorsque la descente du sourcil gêne la vision, ce qui doit être signalé à un médecin.",
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
        id: "endoscopic-surgery",
        locale: "fr",
        slug: "chirurgie-endoscopique",
        term: "Chirurgie endoscopique",
        aliases: [
          "endoscopie",
          "voie endoscopique",
          "technique endoscopique",
          "endoscope",
          "lifting endoscopique",
          "assistance endoscopique",
        ],
        definition:
          "La chirurgie endoscopique est réalisée par de petites incisions à travers lesquelles le chirurgien introduit une caméra fine (endoscope) et des instruments adaptés. Il opère en suivant l'image sur un écran, sans ouvrir largement la zone.",
        detail: [
          "En chirurgie esthétique, elle est surtout utilisée pour le lifting frontal : trois à cinq incisions de un à deux centimètres, cachées dans le cuir chevelu, permettent de décoller les tissus du front et de remonter les sourcils. Elle peut aussi être utilisée pour certaines interventions du visage ou du sein.",
          "Les cicatrices sont plus courtes qu'avec une voie ouverte, mais les risques propres à l'intervention (atteinte nerveuse, hématome, asymétrie) restent présents. Elle demande un matériel spécifique et une formation du chirurgien, et n'est pas adaptée à toutes les situations.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "frontal-nerve-branch",
        locale: "fr",
        slug: "rameau-frontal-du-nerf-facial",
        term: "Rameau frontal du nerf facial",
        aliases: [
          "rameau frontal",
          "branche frontale du nerf facial",
          "branche temporale du nerf facial",
          "rameau temporal du nerf facial",
          "nerf frontal moteur",
        ],
        definition:
          "Le rameau frontal est la branche du nerf facial qui commande le muscle du front, celui qui permet de lever les sourcils et de plisser le front. Il croise la région de la tempe, à proximité des zones opérées lors d'un lifting frontal ou d'un lifting du visage.",
        detail: [
          "Une atteinte, rare, se traduit par une difficulté à lever le sourcil d'un côté et par une asymétrie du front. Elle est le plus souvent due à un étirement ou à l'œdème et récupère en quelques semaines à quelques mois ; une paralysie définitive est très rare.",
          "Il ne faut pas la confondre avec l'engourdissement du front et du cuir chevelu, très fréquent après un lifting frontal, qui relève des nerfs de la sensibilité. Une asymétrie brutale du visage après l'intervention doit être signalée au chirurgien.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },

  // ═══════════════════════════════ UNITED KINGDOM ═══════════════════════════════
  "en-gb": {
    intervention: {
      id: "brow-lift",
      locale: "en-gb",
      slug: "brow-lift",
      category: "face",
      title: "Brow lift (forehead lift)",
      summary:
        "A brow lift raises low or drooping eyebrows and softens forehead lines. Techniques, the link with eyelid surgery, risks and recovery.",
      description: [
        "A brow lift, also called a forehead lift, raises eyebrows that have dropped with age and tightens the tissues of the forehead. It treats the upper third of the face: low or heavy brows, a drooping outer tail of the brow, a tired, sad or stern look, horizontal forehead lines and frown lines between the brows.",
        "There are several techniques. The endoscopic approach, the most widely used today, works through three to five cuts of 1 to 2 cm hidden in the scalp: the surgeon uses a thin camera (endoscope) to free the tissues of the forehead and the attachments of the brow, then secures the brow higher with stitches, small screws or dissolvable devices. A temporal (lateral) brow lift uses short cuts in the hair above the temples and mainly lifts the outer part of the brow.",
        "The older coronal approach uses a cut running from ear to ear across the top of the head and removes a strip of scalp. It gives a strong lift but moves the hairline back and leaves a long scar. A variation places the cut just along the hairline, for people with a high forehead who do not want it made longer. More limited options include a direct brow lift through a cut just above the eyebrow (visible scar, sometimes offered to men or after facial palsy) and stabilising the brow through the upper eyelid crease during eyelid surgery.",
        "A brow lift is closely linked to upper eyelid surgery (blepharoplasty). A low brow pushes skin down onto the eyelid and can look like excess eyelid skin: removing that skin without treating the brow may pull the brow lower still and give a disappointing result. Assessing brow position is therefore part of every upper eyelid consultation, and the two procedures are often discussed together.",
        "A brow lift does not treat the lower face or neck (which is the role of a facelift), dark circles or bags under the eyes, or skin quality. Over-lifting can create a surprised or fixed look: the aim is a measured repositioning, not a different expression.",
        "The result is long-lasting but not permanent: ageing continues and the brows may gradually drop a little over the years, depending on the technique, the fixation and your tissues. No specific duration can be promised.",
      ],
      indications: [
        "Low or drooping eyebrows, particularly at the outer end, giving a tired, sad or stern look.",
        "Apparent excess upper eyelid skin that is partly or wholly caused by a low brow.",
        "Marked forehead lines and frown lines, alongside other treatments.",
        "Noticeable difference in height between the two brows.",
        "Brow droop after facial palsy, assessed case by case as a reconstructive need.",
        "A clear request that comes from you, and has been stable over time.",
      ],
      contraindications: [
        "Unrealistic expectations, wanting a dramatically different look, or pressure from someone else.",
        "Excessive preoccupation with a minor or invisible flaw, which should be discussed with the surgeon.",
        "A very high forehead or thinning hair for some techniques (particularly coronal), which move the hairline back or leave scars exposed: another approach should be considered.",
        "Significant dry eye or difficulty closing the eyes, which needs assessment before any surgery around the eyes.",
        "Smoking, which increases the risk of poor healing of the scalp: stopping is strongly advised.",
        "Bleeding disorders, or anticoagulant or antiplatelet medicines that have not been reviewed.",
        "Poorly controlled long-term conditions (high blood pressure, diabetes, heart disease).",
        "Pregnancy or breastfeeding.",
      ],
      risks: [
        {
          name: "Swelling, bruising and headache",
          detail:
            "Common and expected: swelling of the forehead often moves down to the eyelids and upper cheeks, with bruising around the eyes for one to two weeks. A feeling of tightness and headaches are common in the first few days.",
        },
        {
          name: "Numbness of the forehead and scalp",
          detail:
            "Very common: numbness of the forehead and the scalp behind the incisions, sometimes with itching or tingling as feeling returns. It usually improves over weeks to months; some lasting reduction in sensation is possible, especially after a coronal lift.",
        },
        {
          name: "Injury to the frontal branch of the facial nerve",
          detail:
            "Uncommon but specific to this operation: the branch of the facial nerve that moves the forehead muscle runs across the temple. Injury causes difficulty raising one eyebrow and an uneven forehead. It is usually temporary and recovers over weeks to months; permanent weakness is very rare.",
        },
        {
          name: "Hair loss along the scar and hairline changes",
          detail:
            "Hair may thin or fall out along the scalp incisions, usually temporarily but sometimes permanently, which can make the scar more visible. A coronal lift moves the hairline back and lengthens the forehead.",
        },
        {
          name: "Asymmetry, over- or under-correction",
          detail:
            "The brows may end up at different heights, too high (a surprised look) or not high enough. Some asymmetry settles as swelling goes down; revision may be discussed once things have settled, usually several months later.",
        },
        {
          name: "Brows dropping again",
          detail:
            "The brows may partly drop again in the months or years after surgery, particularly if the fixation loosens or the tissues are heavy.",
        },
        {
          name: "Haematoma",
          detail:
            "A collection of blood under the scalp or forehead, uncommon. Rapid, tense, painful swelling on one side needs urgent review because it may need to be drained.",
        },
        {
          name: "Scarring and healing problems",
          detail:
            "Scars may widen and show if hair is short or thin; forehead or above-brow approaches leave a more visible scar. Rarely, part of the scalp skin may heal poorly, which is more likely in smokers.",
        },
        {
          name: "Tender or palpable fixation devices",
          detail:
            "Screws, stitches or dissolvable devices used to secure the brow may be felt for a few months, or less often need to be removed.",
        },
        {
          name: "Infection",
          detail: "Rare; usually treated with wound care and antibiotics.",
        },
        {
          name: "Difficulty closing the eyes and dry eye",
          detail:
            "Mainly when combined with upper eyelid surgery: incomplete eye closure, usually temporary, can cause dryness or irritation of the eye that should be reported.",
        },
        {
          name: "Risks of anaesthesia",
          detail: "Discussed with your anaesthetist before the operation.",
        },
      ],
      procedure: {
        anaesthesia:
          "Usually general anaesthesia; local anaesthesia with sedation may be possible for more limited techniques (temporal or eyelid-crease approaches).",
        duration:
          "Around 1 to 2 hours depending on the technique, longer if combined with eyelid surgery or a facelift.",
        hospitalStay: "Usually a day case; an overnight stay may be suggested depending on the technique and any combined procedures.",
      },
      recovery: [
        "Days 1 to 2: a headband or dressing around the head, sleeping with your head raised, cold compresses; tightness and headache eased by painkillers.",
        "Days 2 to 3: swelling moves down towards the eyelids and cheeks, and bruising around the eyes is often most visible now. Hair washing is usually allowed after 48 hours with a mild shampoo.",
        "Days 7 to 14: stitches or clips in the scalp are removed; bruising fades.",
        "Return to social activities and desk-based work often after 10 to 14 days, depending on swelling and any combined procedures.",
        "Weeks 3 to 6: gradual return to exercise with your surgeon's agreement; avoid strenuous effort, very hot hairdryers and hair colouring for as long as your surgeon advises.",
        "Months 1 to 6: feeling gradually returns to the forehead and scalp, sometimes with itching; the brows settle into their final position.",
        "The result is usually judged at 3 to 6 months; scars continue to fade for 12 to 18 months.",
      ],
      alternatives: [
        "No treatment: a legitimate choice, which you can revisit later.",
        "Botulinum toxin injections (a non-surgical cosmetic treatment): by relaxing some of the muscles that pull the brow down, they can lift it slightly and soften forehead lines; the effect is temporary, lasting a few months, needs repeating and has its own risks (drooping eyelid or brow, asymmetry).",
        "Hyaluronic acid filler or fat transfer around the brow: modest support of volume, temporary in the case of filler, with its own risks.",
        "Upper eyelid surgery alone, if there is genuine excess eyelid skin and the brow is well positioned.",
        "Energy-based treatments (radiofrequency, focused ultrasound): limited and variable tightening, with no repositioning comparable to surgery.",
      ],
      faq: [
        {
          question: "What is the difference between a brow lift and eyelid surgery?",
          answer:
            "Upper eyelid surgery removes excess skin, and sometimes fat, from the eyelids. A brow lift raises the eyebrow itself. A low brow can look like excess eyelid skin: in that case eyelid surgery alone is not enough and can even pull the brow lower. Your surgeon should examine both areas before suggesting one, the other or both.",
        },
        {
          question: "Will the scars show?",
          answer:
            "With endoscopic or temporal techniques the cuts are short and hidden in the scalp. A coronal lift leaves a long scar within the hair; hairline, forehead and above-brow approaches leave a more exposed scar. Hair loss along a scar is possible and can make it more noticeable.",
        },
        {
          question: "Can botulinum toxin replace surgery?",
          answer:
            "It can lift the tail of the brow slightly and soften forehead lines without surgery, but the effect is temporary and must be repeated. It does not correct a significantly low brow. It is a prescription-only medicine: a qualified prescriber should assess you in person before it is used.",
        },
        {
          question: "Will my forehead feel numb?",
          answer:
            "Numbness of the forehead and scalp is very common after surgery. Feeling usually returns gradually over a few months, sometimes with itching. Some lasting reduction is possible, more often after a coronal lift.",
        },
        {
          question: "Will I still be able to raise my eyebrows?",
          answer:
            "Generally, yes. Weakness of the forehead muscle on one side can occur if the frontal branch of the facial nerve is stretched or injured; this is uncommon and usually temporary. If your surgeon weakens some of the frown muscles, frowning may be less pronounced.",
        },
        {
          question: "How long does the result last?",
          answer:
            "The result is long-lasting, but ageing continues and the brows may drop a little over the years. How long it lasts depends on the technique, the fixation, your tissues and factors such as smoking and sun exposure.",
        },
        {
          question: "Is a brow lift available on the NHS?",
          answer:
            "Not for cosmetic reasons. It may be considered in specific circumstances, such as brow droop after facial palsy or a low brow that blocks your vision, according to local criteria and sometimes through an individual funding request. Your GP can advise.",
        },
        {
          question: "How long should I wait between consultation and surgery?",
          answer:
            "There is no legal waiting period in the UK, but GMC guidance says you should have time to reflect, and professional standards recommend at least two weeks between your consultation and agreeing to surgery.",
        },
        {
          question: "Who should perform a brow lift?",
          answer:
            "A surgeon on the GMC Specialist Register with specific training and experience in brow surgery, usually a plastic surgeon, an oculoplastic surgeon (an eye surgeon specialising in eyelid and brow surgery) or a facial plastic surgeon. The hospital or clinic should be registered with the CQC in England, or the equivalent regulator elsewhere in the UK.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risks ──
      {
        interventionId: "brow-lift",
        kind: "risks",
        locale: "en-gb",
        title: "Brow lift: risks and complications",
        summary:
          "Numbness, facial nerve injury, hair loss along the scar, asymmetry: the risks of a brow lift and the warning signs to act on.",
        answer:
          "Swelling, bruising around the eyes and numbness of the forehead and scalp are expected. Asymmetry, the brows dropping again, haematoma or hair loss along the scar are less common. Injury to the frontal branch of the facial nerve, which affects raising the eyebrow, is uncommon and usually temporary.",
        sections: [
          {
            heading: "Common and expected effects",
            paragraphs: ["These are normal after surgery and improve over days to weeks."],
            bullets: [
              "Swelling of the forehead that moves down to the eyelids and cheeks over the first days.",
              "Bruising around the eyes, sometimes marked, for one to two weeks.",
              "A tight feeling in the forehead and headaches for the first few days.",
              "Numbness of the forehead and of the scalp behind the incisions.",
              "Itching or tingling as feeling returns.",
              "Crusting along the scalp incisions.",
            ],
          },
          {
            heading: "Less common complications",
            paragraphs: ["How often they happen depends on the technique, any combined procedures and your health."],
            bullets: [
              "Uneven brows, too little lift or too much (a surprised look).",
              "The brows partly dropping again over months or years.",
              "Hair loss (alopecia) along the scars, usually temporary, sometimes permanent.",
              "A higher hairline and longer forehead after a coronal lift.",
              "Haematoma under the scalp, which may need draining.",
              "Fixation devices that can be felt, occasionally needing removal.",
              "Wide or visible scars, particularly with forehead or above-brow approaches.",
              "Lasting reduced sensation of the scalp, mainly after a coronal lift.",
            ],
          },
          {
            heading: "Injury to the frontal branch of the facial nerve",
            paragraphs: [
              "The facial nerve controls the muscles of facial expression. Its frontal (temporal) branch crosses the temple to reach the forehead muscle, close to where the surgeon works in temporal, endoscopic and coronal lifts. Injury is uncommon and shows as difficulty raising the eyebrow and wrinkling the forehead on one side, with visible asymmetry.",
              "Most cases are caused by stretching or swelling and recover over weeks to months. Permanent weakness is very rare and may lead to discussion of further treatment. It should not be confused with numbness of the skin, which is very common and involves the sensory nerves (the supraorbital and supratrochlear nerves).",
            ],
          },
          {
            heading: "Rare but serious complications",
            paragraphs: [
              "Poor healing of part of the scalp, deep infection or a large haematoma are rare and need prompt treatment. When combined with eyelid surgery, incomplete eye closure can expose the surface of the eye to irritation or ulceration and must be monitored. As with any operation under general anaesthesia, there are anaesthetic risks, which your anaesthetist will discuss with you.",
            ],
          },
          {
            heading: "When to get help straight away",
            paragraphs: [
              "Contact your surgeon's team promptly if something does not seem right; out of hours, call NHS 111. Call 999 if you collapse, have difficulty breathing or suddenly lose vision.",
            ],
            bullets: [
              "Rapid, tense, painful swelling of the forehead or scalp, especially on one side.",
              "Pain that is getting worse rather than better, fever, spreading redness or pus.",
              "Reduced vision, eye pain or being unable to close your eyes fully.",
              "Sudden facial asymmetry or being unable to raise an eyebrow.",
              "Scalp skin turning dark or black.",
            ],
          },
          {
            heading: "Factors that increase risk",
            paragraphs: ["Some of these can be changed and should be discussed at consultation."],
            bullets: [
              "Smoking and vaping nicotine, which reduce blood flow to the scalp and impair healing.",
              "Poorly controlled blood pressure, which increases the risk of haematoma.",
              "Medicines or supplements that increase bleeding (aspirin, anti-inflammatories, anticoagulants, some herbal supplements).",
              "Fine or thinning hair, which makes scars and any hair loss more visible.",
              "Combining several procedures (eyelid surgery, facelift), which lengthens the operation.",
            ],
          },
          {
            heading: "Revision surgery",
            paragraphs: [
              "Persistent asymmetry, too little lift or a wide scar may justify revision, usually only once things have settled several months after surgery. Over-correction is harder to fix than under-correction, which is why a measured lift is preferred. Before going ahead, ask what the arrangements are for revision, including costs.",
            ],
          },
        ],
        sources: [NHS, BAAPS, BAPRAS, BOPSS, RCS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Cost ──
      {
        interventionId: "brow-lift",
        kind: "cost",
        locale: "en-gb",
        title: "Brow lift cost",
        summary:
          "What a brow lift quote should include, what affects the price (technique, anaesthesia, combined surgery), NHS funding rules and complication costs.",
        answer:
          "The cost of a brow lift depends mainly on the technique, the type of anaesthesia, the hospital and any combined procedures such as eyelid surgery. We do not give price ranges: only a written, itemised quote after a consultation with the operating surgeon tells you the actual cost. The NHS does not fund brow lifts for cosmetic reasons.",
        sections: [
          {
            heading: "What a quote should include",
            paragraphs: ["Ask for a written quote that lists every item, or states clearly what is excluded."],
            bullets: [
              "The surgeon's fee, with the planned technique (endoscopic, temporal, coronal or other).",
              "The anaesthetist's fee, which may be billed separately.",
              "Hospital or clinic fees: theatre time, day case or overnight stay.",
              "Any fixation devices (screws, dissolvable devices) and endoscopic equipment.",
              "Dressings, headband and medicines.",
              "Follow-up appointments and what happens if a revision or complication arises.",
            ],
          },
          {
            heading: "What affects the price",
            paragraphs: [
              "The technique (endoscopic surgery needs specific equipment), the length of the operation, the type of anaesthesia, whether you stay overnight and whether other procedures are combined (upper eyelid surgery, facelift, treatment of frown muscles) all affect the quote. Combining procedures changes the total cost, but also the length of surgery and recovery.",
              "Price alone does not tell you about quality. A technique marketed as newer is not necessarily more suitable for your anatomy.",
            ],
          },
          {
            heading: "NHS funding",
            paragraphs: [
              "The NHS does not usually fund cosmetic surgery, and brow lifts are generally treated as a procedure of limited clinical value. In specific medical circumstances, such as brow droop after facial palsy or a low brow that significantly blocks the field of vision, treatment may be considered according to local criteria, sometimes through an individual funding request (IFR). Your GP or an eye specialist can advise whether you might meet them.",
              "If a brow lift is combined with eyelid surgery funded for visual reasons, any cosmetic element is usually paid for separately: ask for this to be set out clearly.",
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
              "Revising uneven brows, draining a haematoma or removing a fixation device can lead to further costs, more time off work and extra travel. Ask what the quote covers, and whether insurance for complications is included or available. If you have surgery abroad, follow-up care at home may be harder to arrange.",
            ],
          },
        ],
        sources: [NHS, GMC, CQC, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Recovery ──
      {
        interventionId: "brow-lift",
        kind: "recovery",
        locale: "en-gb",
        title: "Recovery after a brow lift",
        summary:
          "Recovery after a brow lift: the first days, bruising around the eyes, stitch removal, returning to work and exercise, numbness and warning signs.",
        answer:
          "The first days bring swelling that moves down towards the eyes, bruising and a tight forehead. Stitches or clips come out at around 7 to 14 days, and many people feel ready to be seen socially after 10 to 14 days. Scalp numbness can last several months. Always follow your own surgeon's instructions.",
        sections: [
          {
            heading: "The first few days",
            paragraphs: [
              "Most people go home the same day or the next morning. A headband or dressing may be worn for 24 to 48 hours. The forehead feels tight and numb; swelling moves down to the eyelids over the following days, and bruising around the eyes is often more visible on the second or third day than on the first.",
            ],
            bullets: [
              "Sleep with your head raised and use cold compresses as advised.",
              "Take the painkillers prescribed; avoid aspirin and anti-inflammatories unless told otherwise.",
              "Avoid bending forward, lifting and strenuous effort.",
              "Arrange for someone to take you home and stay with you the first night.",
            ],
          },
          {
            heading: "Week by week",
            paragraphs: [],
            bullets: [
              "Week 1: swelling and bruising peak then ease; hair washing is usually allowed after 48 hours with a mild shampoo, without rubbing the incisions.",
              "Week 2: scalp stitches or clips are removed between 7 and 14 days; bruising fades and can be covered with make-up once the wounds have healed.",
              "Weeks 2 to 3: many people return to social activities and desk-based work.",
              "Weeks 3 to 6: gradual return to exercise, starting gently, with your surgeon's agreement.",
              "Months 1 to 6: feeling gradually returns, often with itching; the brows settle into their final position.",
            ],
          },
          {
            heading: "Hair care and sun",
            paragraphs: [
              "Avoid hair colouring, perms, very hot hairdryers and straighteners on the numb scalp for as long as your surgeon advises, because burns may go unnoticed. Temporary hair shedding around the incisions is possible; hair usually grows back within a few months.",
              "Protect scars on the forehead and temples from the sun for several months. Drive only once swelling no longer affects your vision and you are not taking sedating painkillers; check your insurer's conditions.",
            ],
          },
          {
            heading: "The following months",
            paragraphs: [
              "The result is usually judged at 3 to 6 months, once swelling has settled; a slight drop of the brows in the first weeks is common and often allowed for by the surgeon. Scars fade over 12 to 18 months. Revision is not considered until things have settled.",
            ],
          },
          {
            heading: "Warning signs",
            paragraphs: [
              "Contact your surgeon's team if you have rapid, painful swelling on one side, a fever, spreading redness, pus, or cannot raise an eyebrow or close your eyes; out of hours, call NHS 111. Call 999 if you suddenly lose vision, collapse or have difficulty breathing.",
            ],
          },
        ],
        sources: [NHS, BAAPS, BAPRAS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Before you decide ──
      {
        interventionId: "brow-lift",
        kind: "decision",
        locale: "en-gb",
        title: "Brow lift: before you decide",
        summary:
          "Deciding on a brow lift: brow or eyelid, choosing a technique, expectations, body dysmorphic disorder, questions to ask and cooling-off.",
        answer:
          "A brow lift tends to suit adults whose brows have genuinely dropped, after an examination that separates what is due to the brow from what is due to the eyelid. The technique depends on your forehead height, your hair and the effect you want. There is no legal waiting period in the UK, but professional guidance recommends at least two weeks to reflect.",
        sections: [
          {
            heading: "Brow or eyelid: finding the real cause",
            paragraphs: [
              "Many people seek advice for 'heavy eyelids'. The surgeon looks at the position of the brow at rest with the forehead relaxed: if it is low, it pushes skin down onto the eyelid. Upper eyelid surgery alone may then lower the brow further. Conversely, a well-positioned brow does not need lifting.",
              "Some people unconsciously raise their brows all the time to compensate, which deepens forehead lines: relaxing the forehead during the examination shows how far the brow has really dropped.",
            ],
          },
          {
            heading: "Choosing a technique",
            paragraphs: [
              "An endoscopic lift leaves small scars in the hair and suits many foreheads of average height. A temporal lift targets the tail of the brow. A coronal lift gives a stronger effect but moves the hairline back and leaves a long scar, so it tends to be reserved for short foreheads. A hairline incision can treat a high forehead without lengthening it, at the cost of a more exposed scar. Direct and eyelid-crease approaches have narrower uses.",
              "Ask why a technique is being suggested for you rather than another, and how it will affect your scars, hairline and sensation.",
            ],
          },
          {
            heading: "Your expectations and body dysmorphic disorder",
            paragraphs: [
              "Think about what exactly bothers you, for how long, and what you expect to change. Over-lifting can create a surprised look; photographs and looking in the mirror with the surgeon help picture a realistic change. A decision made because of pressure from others or social media is more likely to lead to disappointment.",
              "Body dysmorphic disorder (BDD) is a mental health condition in which a person spends a lot of time worrying about flaws in their appearance that others barely notice. Surgery does not usually relieve BDD and can make distress worse. If this sounds familiar, speak to your GP; effective treatments are available. If you are struggling to cope, Samaritans can be reached any time on 116 123.",
            ],
          },
          {
            heading: "What happens, from consultation to follow-up",
            paragraphs: [],
            bullets: [
              "First consultation with the operating surgeon: examination of the forehead, brows, eyelids and eyes, photographs, discussion of techniques and risks, and a written quote.",
              "A second consultation before you commit is good practice; an eye assessment may be requested if you have dry eye or are having eyelid surgery too.",
              "Pre-operative assessment, including a review of your anaesthetic and medicines.",
              "Surgery, usually as a day case.",
              "Check-ups after a few days, at stitch removal and again after several months to assess the result.",
            ],
          },
          {
            heading: "Questions to ask your surgeon",
            paragraphs: [],
            bullets: [
              "Are you on the GMC Specialist Register, and how many brow lifts do you perform? Do you hold the Royal College of Surgeons' cosmetic surgery certification?",
              "Are my brows really low, or is the problem mainly my eyelids?",
              "Which technique do you suggest, and how will it affect my hairline and scars?",
              "How will the brow be secured, and will I be able to feel the device?",
              "What is the risk of facial nerve injury and numbness in my case?",
              "Should eyelid surgery be combined, and in what order?",
              "Is the hospital registered with the CQC, and who do I contact at night or at weekends?",
              "What does the quote include, and what happens if the result is uneven or I need a revision?",
            ],
          },
          {
            heading: "Cooling-off and second opinions",
            paragraphs: [
              "UK law sets no statutory waiting period, but GMC guidance recommends that you have time to reflect, and professional standards advise at least two weeks between consultation and agreeing to surgery. The consultation should be with the operating surgeon, not only a sales adviser. A surgeon who discourages a second opinion is a warning sign. Cosmetic surgery is for adults: reputable UK surgeons do not perform cosmetic brow lifts on under-18s.",
            ],
          },
        ],
        sources: [NHS, GMC, RCS, CQC, SAMARITANS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Alternatives ──
      {
        interventionId: "brow-lift",
        kind: "alternatives",
        locale: "en-gb",
        title: "Alternatives to a brow lift",
        summary:
          "Botulinum toxin, fillers, eyelid surgery alone, energy-based treatments or doing nothing: alternatives to a brow lift with their limits and risks.",
        answer:
          "Depending on your situation, alternatives include botulinum toxin injections, which lift the brow slightly and soften lines for a few months, dermal fillers, upper eyelid surgery alone if the brow is well positioned, energy-based treatments, or no treatment. None of them lastingly repositions a significantly low brow.",
        sections: [
          {
            heading: "Botulinum toxin",
            paragraphs: [
              "Botulinum toxin is an injected medicine that temporarily relaxes muscles. Injected into some of the muscles that pull the brow down, it can lift the outer brow slightly; injected into the forehead and between the brows, it softens horizontal lines and frown lines. The effect starts within days, usually lasts a few months and needs repeat treatment.",
              "Its risks include bruising, headache, asymmetry and, uncommonly, a temporary droop of the eyelid or brow if the product spreads. Poorly placed forehead injections can lower the brow instead. In the UK it is a prescription-only medicine: a qualified prescriber should assess you face to face, and it is illegal to give it for cosmetic purposes to under-18s in England.",
            ],
          },
          {
            heading: "Dermal fillers",
            paragraphs: [
              "Hyaluronic acid filler or fat transfer under the tail of the brow or at the temple can give modest support where volume loss contributes to drooping. Hyaluronic acid is absorbed over months. These injections have their own risks, including, rarely, blockage of a blood vessel that can cause skin damage or, very rarely, sight loss. Dermal fillers are not licensed as medicines in the UK, so choose an experienced, medically qualified practitioner.",
            ],
          },
          {
            heading: "Upper eyelid surgery alone",
            paragraphs: [
              "If the brow is well positioned and the problem is genuine excess eyelid skin, upper eyelid surgery alone may be enough. Examining brow position is what decides this; eyelid surgery performed when the brow is low can make the brow drop further.",
            ],
          },
          {
            heading: "Energy-based treatments and thread lifts",
            paragraphs: [
              "Radiofrequency and focused ultrasound aim to tighten skin slightly using heat; the effect on brow position is limited and variable, and several sessions may be needed. Thread lifts give a modest, temporary effect with their own risks (visible or palpable threads, dimpling, infection). These treatments should be carried out under medical responsibility.",
            ],
          },
          {
            heading: "No treatment",
            paragraphs: [
              "Choosing not to have treatment is a legitimate option. You can revisit the decision later without any medical consequence, except when a low brow affects your vision, which should be checked by a doctor or optometrist.",
            ],
          },
        ],
        sources: [NHS, MHRA, BAAPS, BOPSS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "endoscopic-surgery",
        locale: "en-gb",
        slug: "endoscopic-surgery",
        term: "Endoscopic surgery",
        aliases: [
          "endoscopy",
          "endoscopic approach",
          "endoscopic technique",
          "endoscope",
          "endoscopic brow lift",
          "endoscopically assisted",
        ],
        definition:
          "Endoscopic surgery is carried out through small cuts through which the surgeon passes a thin camera (endoscope) and specially designed instruments. The surgeon operates while watching the image on a screen, without opening the area widely.",
        detail: [
          "In cosmetic surgery it is mainly used for brow lifts: three to five cuts of 1 to 2 cm, hidden in the scalp, allow the surgeon to free the forehead tissues and raise the brows. It may also be used in some facial or breast procedures.",
          "The scars are shorter than with an open approach, but the risks of the operation itself (nerve injury, haematoma, asymmetry) remain. It needs specific equipment and training, and it is not suitable for every situation.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "frontal-nerve-branch",
        locale: "en-gb",
        slug: "frontal-branch-of-the-facial-nerve",
        term: "Frontal branch of the facial nerve",
        aliases: [
          "frontal branch",
          "temporal branch of the facial nerve",
          "frontotemporal branch",
          "temporal branch",
          "frontal nerve branch",
        ],
        definition:
          "The frontal branch is the part of the facial nerve that moves the forehead muscle, allowing you to raise your eyebrows and wrinkle your forehead. It crosses the temple, close to the areas operated on during a brow lift or facelift.",
        detail: [
          "Injury is uncommon and shows as difficulty raising one eyebrow and an uneven forehead. It is usually caused by stretching or swelling and recovers over weeks to months; permanent weakness is very rare.",
          "It should not be confused with numbness of the forehead and scalp, which is very common after a brow lift and involves the sensory nerves. Sudden facial asymmetry after surgery should be reported to your surgeon.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },
};
