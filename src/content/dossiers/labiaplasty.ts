import type { Source } from "../types";
import type { Dossier } from "./types";

// ─── Sources France ───
const HAS: Source = { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" };
const SOFCPRE: Source = {
  label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)",
  url: "https://www.sofcpre.fr",
};
const CNGOF: Source = {
  label: "Collège national des gynécologues et obstétriciens français (CNGOF)",
  url: "https://cngof.fr",
};
const SFAR: Source = { label: "Société française d'anesthésie et de réanimation (SFAR)", url: "https://sfar.org" };
const LEGIFRANCE_L6322_2: Source = {
  label: "Code de la santé publique, article L6322-2 (devis et délai de réflexion en chirurgie esthétique) — Légifrance",
  url: "https://www.legifrance.gouv.fr",
};
const LEGIFRANCE_MUTILATIONS: Source = {
  label: "Code civil (article 16-3, consentement et intégrité du corps) et Code pénal (violences ayant entraîné une mutilation) — Légifrance",
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
const N3114: Source = { label: "3114 — numéro national de prévention du suicide", url: "https://3114.fr" };

// ─── Sources Royaume-Uni ───
const NHS: Source = { label: "NHS: labiaplasty (cosmetic surgery) and vulval health", url: "https://www.nhs.uk" };
const RCOG: Source = {
  label: "Royal College of Obstetricians and Gynaecologists (RCOG): ethical considerations in female genital cosmetic surgery",
  url: "https://www.rcog.org.uk",
};
const BRITSPAG: Source = {
  label: "British Society for Paediatric and Adolescent Gynaecology (BritSPAG): guidance on labial surgery in young people",
  url: "https://www.britspag.org",
};
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
const MHRA: Source = {
  label: "Medicines and Healthcare products Regulatory Agency (MHRA)",
  url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
};
const SAMARITANS: Source = { label: "Samaritans (116 123, free, 24 hours a day)", url: "https://www.samaritans.org" };

const REVIEW = { status: "draft" } as const;
const UPDATED_AT = "2026-10-13";

/** Nymphoplastie (labiaplasty) : fiche, sous-pages et lexique (fr, en-gb). Brouillon à relire par le comité médical. */
export const dossier: Dossier = {
  // ════════════════════════════════════ FRANCE ════════════════════════════════════
  fr: {
    intervention: {
      id: "labiaplasty",
      locale: "fr",
      slug: "nymphoplastie",
      category: "body",
      title: "Nymphoplastie (réduction des petites lèvres)",
      summary:
        "La nymphoplastie réduit des petites lèvres jugées gênantes. Diversité anatomique, motifs, techniques, risques et convalescence, pour les adultes.",
      description: [
        "La nymphoplastie, ou réduction des petites lèvres (en anglais labiaplasty), est une intervention qui diminue la taille d'une ou des deux petites lèvres de la vulve, les replis de peau fine situés à l'intérieur des grandes lèvres. Elle est demandée par des femmes adultes qui ressentent une gêne physique (frottements, irritations, inconfort dans certains vêtements ou lors du sport ou des rapports) ou une gêne liée à l'apparence.",
        "Il est important de le rappeler d'emblée : l'anatomie de la vulve est très variable d'une femme à l'autre. Des petites lèvres qui dépassent des grandes lèvres, de taille, de forme ou de couleur différentes, ou asymétriques entre elles, sont fréquentes et parfaitement normales. Leur aspect évolue aussi avec la puberté, les grossesses, les variations hormonales et l'âge. Les images diffusées par les réseaux sociaux, la pornographie ou certaines publicités, souvent retouchées ou sélectionnées, montrent une vulve standardisée qui ne reflète pas cette diversité.",
        "Plusieurs techniques existent. La résection linéaire (ou « en bordure ») retire le bord libre de la petite lèvre ; la résection cunéiforme retire un triangle de tissu dans la partie centrale et rapproche les berges, en préservant le bord naturel ; d'autres variantes (désépidermisation, résections en Z ou combinées) sont adaptées à chaque anatomie. Une réduction du capuchon du clitoris est parfois associée. Les fils sont en général résorbables.",
        "La nymphoplastie est une intervention chirurgicale sur une zone sensible, riche en nerfs et en vaisseaux. Elle comporte des risques réels, dont certains sont difficiles à corriger : résection trop importante, cicatrice douloureuse, modification de la sensibilité, asymétrie. Elle ne doit pas être confondue avec les actes vendus sous le nom de « rajeunissement vaginal », qui concernent le vagin et dont l'intérêt n'est pas démontré.",
        "Réalisée chez une femme adulte, à sa demande, après une information complète et un consentement libre et éclairé, la nymphoplastie n'a rien à voir avec une mutilation sexuelle. À l'inverse, toute atteinte aux organes génitaux d'une mineure sans nécessité médicale, ou pratiquée sans le consentement de la personne, est interdite par la loi française et punie pénalement. Ce dossier s'adresse aux personnes majeures.",
      ],
      indications: [
        "Gêne fonctionnelle persistante liée au volume des petites lèvres : frottements, irritations ou douleurs dans les vêtements, à la marche, au vélo, lors du sport ou des rapports.",
        "Difficultés d'hygiène ou irritations à répétition attribuées au volume des petites lèvres, après avoir écarté une autre cause (dermatose, infection).",
        "Asymétrie importante ou modification après un accouchement (déchirure, cicatrice), un traumatisme ou une maladie.",
        "Gêne esthétique ancienne, stable, exprimée par la femme elle-même, après une information sur la diversité anatomique normale.",
        "Femme adulte, en bonne santé, ayant des attentes réalistes et ayant pris le temps de la réflexion.",
      ],
      contraindications: [
        "Personne mineure : la chirurgie esthétique génitale n'est pas proposée, d'autant que l'anatomie évolue jusqu'à l'âge adulte.",
        "Demande formulée sous la pression d'un partenaire, d'un proche ou de l'entourage.",
        "Préoccupation envahissante pour un aspect jugé normal par le médecin, évocatrice d'une dysmorphophobie, qui doit d'abord être évaluée.",
        "Douleurs vulvaires ou douleurs pendant les rapports d'une autre origine (vulvodynie, vaginisme, dermatose), que la chirurgie ne traiterait pas.",
        "Infection génitale en cours ou maladie de peau de la vulve non traitée (lichen scléreux, par exemple).",
        "Grossesse en cours ou accouchement récent : il est conseillé d'attendre que les tissus aient récupéré.",
        "Tabagisme actif, troubles de la coagulation ou maladie chronique non équilibrée, qui augmentent les risques de cicatrisation.",
      ],
      risks: [
        {
          name: "Douleurs, œdème et ecchymoses",
          detail:
            "Fréquents et attendus : la vulve gonfle nettement pendant une à deux semaines, avec des bleus et une sensibilité à la marche ou en position assise. L'œdème peut persister plusieurs semaines de façon plus discrète.",
        },
        {
          name: "Hématome",
          detail:
            "Accumulation de sang sous la cicatrice, peu fréquente ; un gonflement rapide, tendu et douloureux, surtout d'un seul côté, doit faire appeler. Il peut nécessiter une reprise au bloc opératoire.",
        },
        {
          name: "Désunion de la cicatrice",
          detail:
            "Ouverture partielle de la suture, plus souvent décrite après une résection cunéiforme. Elle peut cicatriser seule ou laisser une encoche ou un orifice dans la lèvre, qui nécessite parfois une reprise.",
        },
        {
          name: "Infection",
          detail:
            "Peu fréquente malgré la proximité des zones naturellement colonisées ; elle se traduit par une rougeur qui s'étend, de la fièvre, un écoulement malodorant, et se traite le plus souvent par des soins locaux et des antibiotiques.",
        },
        {
          name: "Résection excessive",
          detail:
            "Le retrait d'une trop grande quantité de tissu est la complication la plus redoutée, car elle est difficile, voire impossible, à corriger complètement : sécheresse, inconfort, cicatrice tendue, vestibule moins protégé, aspect jugé artificiel.",
        },
        {
          name: "Asymétrie, irrégularités et insatisfaction",
          detail:
            "Différence entre les deux côtés, bord irrégulier ou festonné, petit excédent persistant, contraste de couleur entre les lèvres et le capuchon du clitoris. Une retouche peut être discutée après cicatrisation complète, plusieurs mois plus tard.",
        },
        {
          name: "Cicatrice sensible et douleurs pendant les rapports",
          detail:
            "La cicatrice peut rester sensible, épaissie ou tirailler, et entraîner des douleurs lors des rapports (dyspareunie), le plus souvent temporaires mais parfois durables.",
        },
        {
          name: "Modification de la sensibilité",
          detail:
            "Diminution ou au contraire hypersensibilité de la zone, généralement transitoire. Une atteinte durable de la sensibilité, en particulier si le capuchon du clitoris est opéré, est possible même si elle est rare.",
        },
        {
          name: "Troubles urinaires transitoires",
          detail:
            "Brûlures en urinant les premiers jours, jet dévié par l'œdème ; une rétention urinaire passagère est possible, plus rarement.",
        },
        {
          name: "Risques liés à l'anesthésie",
          detail: "À évaluer lors de la consultation d'anesthésie obligatoire.",
        },
      ],
      procedure: {
        anaesthesia:
          "Anesthésie locale, éventuellement associée à une sédation, ou anesthésie générale selon l'étendue du geste et le choix de la patiente.",
        duration: "Environ 45 minutes à 1 heure 30, davantage si une réduction du capuchon du clitoris est associée.",
        hospitalStay: "En ambulatoire le plus souvent, avec sortie le jour même.",
      },
      recovery: [
        "Jour 1 : gonflement, sensibilité et petits saignements ; poche de glace protégée et antalgiques simples, repos allongé une bonne partie de la journée.",
        "Semaine 1 : œdème maximal les 2 à 4 premiers jours ; toilette à l'eau tiède après chaque passage aux toilettes, séchage en tamponnant, sous-vêtements en coton amples.",
        "Reprise d'une activité de bureau souvent après 5 à 10 jours, si la position assise est tolérée ; plus tard pour un travail physique.",
        "Semaines 2 à 3 : le gonflement diminue nettement ; les fils résorbables tombent en général en 2 à 4 semaines.",
        "Pas de bain, de piscine ni de tampons pendant environ 4 semaines ; rapports sexuels en général après 4 à 6 semaines, quand la cicatrice n'est plus sensible.",
        "Vélo, équitation, sports de frottement et pantalons serrés à éviter pendant environ 6 semaines, avec l'accord du chirurgien.",
        "Aspect final apprécié après 3 à 6 mois, le temps que la cicatrice s'assouplisse et que l'œdème résiduel disparaisse.",
      ],
      alternatives: [
        "Ne rien faire, après avoir été informée de la diversité anatomique normale : une option légitime, qui peut être reconsidérée plus tard.",
        "Mesures simples contre les frottements : sous-vêtements en coton bien coupés, vêtements de sport adaptés, produits d'hygiène doux, lubrifiant lors des rapports.",
        "Prise en charge d'une autre cause d'irritation ou de douleur (mycose, dermatose, vulvodynie) par un médecin, un gynécologue ou une sage-femme.",
        "Accompagnement psychologique ou sexologique lorsque la gêne porte surtout sur l'image de soi ou la vie intime.",
        "Les actes dits de « rajeunissement vaginal » (laser, radiofréquence) ne sont pas une alternative : ils concernent une autre zone et leur efficacité comme leur sécurité ne sont pas établies.",
      ],
      faq: [
        {
          question: "Mes petites lèvres sont-elles « normales » ?",
          answer:
            "Très probablement. La taille, la forme, la couleur et la symétrie des petites lèvres varient énormément d'une femme à l'autre, et il est fréquent qu'elles dépassent des grandes lèvres. Il n'existe pas de norme esthétique médicale. Un médecin, un gynécologue ou une sage-femme peut vous examiner et vous rassurer, ou rechercher une cause à une gêne.",
        },
        {
          question: "La nymphoplastie est-elle douloureuse ?",
          answer:
            "L'intervention elle-même se fait sous anesthésie. Les suites sont inconfortables pendant quelques jours, surtout en position assise et en urinant, et sont en général soulagées par des antalgiques simples et le froid. Une douleur qui augmente, surtout avec un gonflement d'un seul côté, doit être signalée sans attendre.",
        },
        {
          question: "Quelle différence entre résection linéaire et résection cunéiforme ?",
          answer:
            "La résection linéaire retire le bord libre de la lèvre : elle est simple et permet de traiter un bord foncé ou irrégulier, mais modifie l'aspect du bord naturel. La résection cunéiforme retire un triangle de tissu au centre et préserve le bord, avec un risque un peu plus élevé de désunion de la cicatrice. Le choix dépend de votre anatomie et de vos attentes, et doit être expliqué par le chirurgien.",
        },
        {
          question: "L'intervention modifie-t-elle la sensibilité ou la vie sexuelle ?",
          answer:
            "Chez la plupart des femmes, la sensibilité se rétablit après la cicatrisation. Des troubles transitoires sont fréquents, et une gêne ou des douleurs durables pendant les rapports sont possibles, plus rarement. Aucun bénéfice sur le plaisir sexuel ne peut être promis.",
        },
        {
          question: "Peut-on avoir un enfant après une nymphoplastie ?",
          answer:
            "Oui, l'intervention ne concerne pas le vagin et ne gêne pas en principe un accouchement par voie naturelle. Une grossesse et un accouchement peuvent en revanche modifier à nouveau l'aspect de la vulve ; certaines femmes préfèrent attendre la fin de leurs projets de grossesse.",
        },
        {
          question: "S'agit-il d'une mutilation sexuelle ?",
          answer:
            "Non. Une nymphoplastie est un acte médical demandé par une femme adulte, informée et consentante, pour un motif qui lui est propre. Les mutilations sexuelles féminines sont des atteintes imposées, le plus souvent à des enfants, sans motif médical : elles sont interdites et punies par la loi. Si vous êtes concernée ou inquiète pour une enfant, le 119 et les professionnels de santé peuvent vous aider.",
        },
        {
          question: "Est-elle remboursée par l'Assurance maladie ?",
          answer:
            "Non lorsqu'elle est réalisée à visée esthétique. Une prise en charge peut être discutée dans des situations médicales précises (malformation, séquelle d'accouchement ou de traumatisme, gêne fonctionnelle documentée), en général après une demande d'accord préalable.",
        },
        {
          question: "Quel délai entre la consultation et l'intervention ?",
          answer:
            "En France, la loi impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention esthétique. Aucun paiement ne peut être exigé avant la fin de ce délai, en dehors des honoraires de consultation. Une consultation d'anesthésie est obligatoire.",
        },
        {
          question: "Quel médecin consulter ?",
          answer:
            "Un chirurgien qualifié en chirurgie plastique, reconstructrice et esthétique, ou un gynécologue-obstétricien formé à cette chirurgie, opérant dans un établissement autorisé par l'ARS. Vous pouvez vérifier sa qualification sur l'Annuaire santé. Pour une première question sur l'aspect de votre vulve, votre médecin traitant, votre gynécologue ou une sage-femme sont de bons interlocuteurs.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risques ──
      {
        interventionId: "labiaplasty",
        kind: "risks",
        locale: "fr",
        title: "Nymphoplastie : les risques",
        summary:
          "Œdème, hématome, désunion, résection excessive, sensibilité, douleurs pendant les rapports : les risques de la nymphoplastie et les signes d'alerte.",
        answer:
          "La nymphoplastie est une chirurgie d'une zone sensible et très vascularisée. Gonflement, ecchymoses et inconfort sont attendus. Hématome, désunion de la cicatrice, infection ou asymétrie sont moins fréquents. La complication la plus redoutée est une résection excessive, difficile à corriger ; des troubles durables de la sensibilité ou des douleurs pendant les rapports sont possibles, plus rarement.",
        sections: [
          {
            heading: "Les suites fréquentes et attendues",
            paragraphs: [
              "Ces manifestations sont des suites normales de l'intervention. Elles diminuent progressivement en une à trois semaines.",
            ],
            bullets: [
              "Gonflement marqué de la vulve, maximal les 2 à 4 premiers jours.",
              "Ecchymoses, parfois étendues aux grandes lèvres et au pubis.",
              "Sensibilité ou douleurs en position assise, à la marche et en urinant.",
              "Petits saignements ou suintements pendant quelques jours.",
              "Sensation de tiraillement des fils, démangeaisons pendant la cicatrisation.",
              "Sensibilité modifiée de la zone, le plus souvent transitoire.",
            ],
          },
          {
            heading: "Les complications moins fréquentes",
            paragraphs: [
              "Leur fréquence dépend de la technique, de l'anatomie de départ, de l'expérience du chirurgien et du respect des consignes après l'opération.",
            ],
            bullets: [
              "Hématome, qui peut nécessiter une reprise au bloc opératoire.",
              "Désunion partielle de la cicatrice, plus souvent décrite après une résection cunéiforme, pouvant laisser une encoche ou un orifice.",
              "Infection, le plus souvent traitée par des soins locaux et des antibiotiques.",
              "Asymétrie, bord irrégulier, petit excédent persistant, contraste de couleur avec le capuchon du clitoris.",
              "Cicatrice épaissie, sensible ou qui tiraille.",
              "Rétention urinaire passagère.",
            ],
          },
          {
            heading: "Les complications plus graves ou durables",
            paragraphs: [
              "Une résection excessive, c'est-à-dire le retrait d'une trop grande quantité de petite lèvre, est difficile voire impossible à corriger complètement. Elle peut entraîner sécheresse, inconfort, cicatrice tendue, irritations de l'entrée du vagin et une insatisfaction importante. C'est pourquoi la prudence dans la quantité retirée est essentielle.",
              "Des douleurs pendant les rapports (dyspareunie), une hypersensibilité ou au contraire une perte de sensibilité durable sont possibles, plus rarement, en particulier lorsque le capuchon du clitoris est opéré. Comme pour toute chirurgie, les complications liées à l'anesthésie et la thrombose veineuse restent exceptionnelles mais existent.",
            ],
          },
          {
            heading: "Quand appeler sans attendre",
            paragraphs: [
              "Contactez rapidement le chirurgien ou l'équipe qui vous a opérée en cas de signe inhabituel. En cas de malaise, d'essoufflement ou de douleur dans la poitrine, appelez le 15 (SAMU) ou le 112.",
            ],
            bullets: [
              "Gonflement rapide, tendu et douloureux, surtout d'un seul côté.",
              "Saignement abondant qui ne s'arrête pas après une compression douce de 10 minutes.",
              "Fièvre, rougeur qui s'étend, écoulement purulent ou malodorant.",
              "Impossibilité d'uriner ou douleur qui augmente au lieu de diminuer.",
              "Cicatrice qui s'ouvre ou zone qui noircit.",
              "Mollet douloureux et gonflé d'un seul côté, essoufflement, douleur thoracique.",
            ],
          },
          {
            heading: "Les facteurs qui augmentent les risques",
            paragraphs: ["Certains sont modifiables et doivent être discutés en consultation."],
            bullets: [
              "Tabac, qui retarde la cicatrisation et favorise la désunion.",
              "Médicaments ou compléments qui favorisent le saignement (aspirine, anti-inflammatoires, anticoagulants, certains compléments).",
              "Reprise trop précoce des rapports, du sport, du vélo ou port de vêtements serrés.",
              "Diabète ou maladie de peau de la vulve non équilibrés.",
              "Gestes associés (réduction du capuchon du clitoris, autre chirurgie le même jour).",
            ],
          },
          {
            heading: "Retouches",
            paragraphs: [
              "Un petit excédent, une asymétrie ou une encoche peuvent justifier une retouche, qui n'est envisagée qu'après cicatrisation complète, en général pas avant plusieurs mois. Une résection excessive se corrige en revanche très difficilement. Demandez avant de vous engager quelles conditions sont prévues, y compris sur le plan financier.",
            ],
          },
        ],
        sources: [SOFCPRE, CNGOF, HAS, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Prix ──
      {
        interventionId: "labiaplasty",
        kind: "cost",
        locale: "fr",
        title: "Prix d'une nymphoplastie",
        summary:
          "Ce que contient un devis de nymphoplastie, ce qui fait varier le prix, règles françaises, accord préalable en cas de motif médical et coût des retouches.",
        answer:
          "Le coût d'une nymphoplastie dépend surtout de la technique, des gestes associés (capuchon du clitoris), du type d'anesthésie et de l'établissement. Nous n'indiquons pas de fourchette de prix : seul un devis détaillé et daté, remis après consultation, permet de connaître le montant. À visée esthétique, elle n'est pas remboursée.",
        sections: [
          {
            heading: "Ce que contient un devis",
            paragraphs: [
              "En France, un devis détaillé et daté doit être remis avant toute intervention de chirurgie esthétique. Vérifiez qu'il précise les postes suivants, ou ceux qui n'y figurent pas.",
            ],
            bullets: [
              "Honoraires du chirurgien, avec la technique prévue et les gestes associés éventuels.",
              "Honoraires de l'anesthésiste, si une sédation ou une anesthésie générale est prévue.",
              "Frais de l'établissement : bloc opératoire et prise en charge ambulatoire.",
              "Médicaments, produits de soins et protections pour les premiers jours.",
              "Consultations de suivi.",
              "Conditions prévues en cas de retouche ou de complication.",
            ],
          },
          {
            heading: "Ce qui fait varier le prix",
            paragraphs: [
              "La technique (résection linéaire, cunéiforme ou combinée), l'association d'une réduction du capuchon du clitoris, la durée de l'intervention, le type d'anesthésie (locale, sédation ou générale) et l'établissement pèsent sur le devis.",
              "Le prix ne renseigne pas à lui seul sur la qualité. Une technique présentée comme plus récente, ou l'usage d'un laser pour inciser, n'est pas nécessairement plus adapté à votre situation.",
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
              "Une nymphoplastie à visée esthétique n'est pas prise en charge. Dans certaines situations médicales précises, comme une malformation, une séquelle d'accouchement ou de traumatisme, ou une gêne fonctionnelle importante et documentée, une prise en charge peut être discutée ; elle suppose en général une demande d'accord préalable examinée par le médecin-conseil. Des dépassements d'honoraires restent possibles selon le secteur du chirurgien.",
              "Si un geste esthétique est réalisé en même temps qu'un geste remboursé, demandez un devis qui distingue clairement les deux parties.",
            ],
          },
          {
            heading: "Le coût des complications et des retouches",
            paragraphs: [
              "La reprise d'un hématome, d'une désunion ou une retouche pour asymétrie peuvent entraîner des frais, un arrêt de travail plus long et des déplacements. Renseignez-vous sur ce qui serait facturé et sur l'existence d'une assurance couvrant les complications.",
              "Méfiez-vous des pressions à décider vite, des acomptes demandés avant la fin du délai légal, des crédits proposés en consultation, des prix très bas sans détail des postes et des publicités qui présentent une vulve « idéale ».",
            ],
          },
        ],
        sources: [LEGIFRANCE_L6322_2, AMELI, ANNUAIRE_SANTE, SOFCPRE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Convalescence ──
      {
        interventionId: "labiaplasty",
        kind: "recovery",
        locale: "fr",
        title: "Convalescence après une nymphoplastie",
        summary:
          "Après une nymphoplastie : gonflement des premiers jours, hygiène, reprise du travail, des rapports et du sport, aspect final entre 3 et 6 mois.",
        answer:
          "Les premiers jours sont marqués par un gonflement important et une gêne en position assise. Une activité de bureau reprend souvent après 5 à 10 jours. Bains, piscine et tampons sont évités environ 4 semaines, et les rapports reprennent en général après 4 à 6 semaines. L'aspect final s'apprécie après 3 à 6 mois. Les consignes de votre chirurgien priment sur ces repères.",
        sections: [
          {
            heading: "Les premiers jours",
            paragraphs: [
              "La sortie a lieu le plus souvent le jour même. La vulve est gonflée, sensible et peut saigner un peu. Le gonflement est maximal entre le deuxième et le quatrième jour, puis diminue.",
            ],
            bullets: [
              "Rester au repos, allongée une bonne partie du temps, les deux ou trois premiers jours.",
              "Appliquer du froid par périodes courtes, toujours à travers un linge, si le chirurgien le conseille.",
              "Prendre les antalgiques prescrits et éviter l'aspirine et les anti-inflammatoires sauf avis contraire.",
              "Uriner en versant de l'eau tiède sur la vulve pour limiter les brûlures.",
              "Marcher un peu plusieurs fois par jour pour limiter le risque de thrombose.",
              "Prévoir une personne pour le retour à domicile.",
            ],
          },
          {
            heading: "Hygiène et soins de la cicatrice",
            paragraphs: [
              "Une toilette douce à l'eau tiède, éventuellement avec un savon doux prescrit, est en général conseillée après chaque passage aux toilettes, suivie d'un séchage en tamponnant. Les sous-vêtements en coton amples et les protections externes sont préférables. Les fils résorbables tombent seuls en deux à quatre semaines ; il ne faut pas tirer dessus. La douche est possible rapidement, mais les bains, la piscine et le hammam sont évités environ quatre semaines.",
            ],
          },
          {
            heading: "Semaine par semaine",
            paragraphs: [],
            bullets: [
              "Semaine 1 : gonflement et ecchymoses importants, gêne en position assise ; repos et soins locaux.",
              "Semaines 1 à 2 : reprise d'un travail de bureau souvent possible entre 5 et 10 jours, avec un coussin si besoin.",
              "Semaines 2 à 3 : le gonflement diminue nettement, les fils commencent à tomber ; marche normale.",
              "Semaine 4 : bains, piscine et tampons généralement à nouveau possibles si la cicatrisation est complète.",
              "Semaines 4 à 6 : reprise des rapports lorsque la cicatrice n'est plus sensible, avec douceur et lubrifiant.",
              "Après 6 semaines : vélo, équitation, sports de frottement et vêtements serrés, avec l'accord du chirurgien.",
            ],
          },
          {
            heading: "Les mois suivants",
            paragraphs: [
              "Un léger gonflement résiduel, une cicatrice un peu ferme ou une sensibilité modifiée sont fréquents pendant les premiers mois. La cicatrice s'assouplit progressivement.",
              "L'aspect final n'est apprécié qu'entre trois et six mois. Une retouche, si elle est nécessaire, ne se discute pas avant ce délai. Le suivi prévoit en général une consultation dans les premières semaines puis à quelques mois.",
            ],
          },
          {
            heading: "Signes qui doivent faire appeler",
            paragraphs: [
              "Contactez le chirurgien en cas de gonflement rapide et tendu d'un côté, de saignement abondant, de fièvre, d'écoulement malodorant, de cicatrice qui s'ouvre ou d'impossibilité d'uriner. En cas d'essoufflement, de douleur thoracique ou de malaise, appelez le 15 ou le 112.",
            ],
          },
        ],
        sources: [SOFCPRE, CNGOF, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Avant de se décider ──
      {
        interventionId: "labiaplasty",
        kind: "decision",
        locale: "fr",
        title: "Nymphoplastie : avant de se décider",
        summary:
          "Nymphoplastie : diversité anatomique, influence des images, gêne fonctionnelle ou esthétique, dysmorphophobie, cadre légal et questions à poser.",
        answer:
          "Avant d'envisager une nymphoplastie, il est utile de savoir que l'aspect des petites lèvres varie énormément et que des lèvres qui dépassent sont fréquentes et normales. Distinguer une gêne physique d'une inquiétude liée à l'apparence aide à choisir la bonne réponse. L'intervention est réservée aux adultes. En France, un délai minimal de 15 jours sépare la remise du devis de l'intervention : prenez ce temps, et un second avis si vous le souhaitez.",
        sections: [
          {
            heading: "Une grande diversité normale",
            paragraphs: [
              "Les petites lèvres peuvent mesurer de quelques millimètres à plusieurs centimètres, être fines ou épaisses, plus foncées sur leur bord, plissées ou lisses, et différentes l'une de l'autre. Toutes ces variations sont normales. Leur aspect change aussi avec les hormones, les grossesses et l'âge.",
              "Les images que l'on voit sur les réseaux sociaux, dans la pornographie ou dans certaines publicités sont souvent retouchées ou sélectionnées, et donnent l'impression d'une norme qui n'existe pas. Un examen par un médecin, un gynécologue ou une sage-femme permet souvent de se rassurer.",
            ],
          },
          {
            heading: "Gêne fonctionnelle ou demande esthétique ?",
            paragraphs: [
              "Une gêne physique (frottements, irritations, douleurs au sport, au vélo ou pendant les rapports) mérite d'être examinée : une autre cause, comme une mycose, une maladie de peau de la vulve ou une vulvodynie, doit être écartée, et des mesures simples peuvent parfois suffire.",
              "Une gêne liée à l'apparence est tout aussi légitime à exprimer, mais elle appelle d'autres questions : depuis quand, à quoi vous comparez-vous, l'avis d'un partenaire ou d'un proche joue-t-il un rôle ? Une décision prise sous la pression d'autrui expose davantage à la déception. La chirurgie ne garantit pas une amélioration de la vie sexuelle ou de la confiance en soi.",
            ],
          },
          {
            heading: "La dysmorphophobie",
            paragraphs: [
              "Certaines personnes souffrent d'une préoccupation envahissante pour une partie du corps que les autres jugent normale : c'est le trouble dysmorphique corporel, ou dysmorphophobie. Les organes génitaux peuvent en être l'objet. La chirurgie ne le soulage pas et peut aggraver la détresse.",
              "Si vous passez beaucoup de temps à y penser, vérifiez souvent votre apparence ou évitez l'intimité à cause de cette inquiétude, parlez-en à votre médecin traitant ; des traitements efficaces existent. En cas d'idées suicidaires, le 3114 répond jour et nuit.",
            ],
          },
          {
            heading: "Le cadre légal et le consentement",
            paragraphs: [
              "La nymphoplastie est un acte médical réalisé chez une femme adulte, à sa demande, après une information complète et un consentement libre et éclairé. Elle se distingue clairement des mutilations sexuelles féminines, qui sont des atteintes imposées sans motif médical et sont punies par la loi française, y compris lorsqu'elles sont commises à l'étranger sur une personne résidant en France.",
              "Aucun acte esthétique sur les organes génitaux ne doit être pratiqué sur une mineure, ni sur une personne qui n'y consent pas librement. Ce site s'adresse exclusivement aux personnes majeures.",
            ],
          },
          {
            heading: "Questions à poser en consultation",
            paragraphs: [],
            bullets: [
              "Êtes-vous qualifié en chirurgie plastique ou en gynécologie, et combien de nymphoplasties réalisez-vous ? (qualification vérifiable sur l'Annuaire santé)",
              "Mon anatomie est-elle dans les variations normales, et que pouvez-vous réellement changer ?",
              "Quelle technique proposez-vous (résection linéaire, cunéiforme ou autre), et pourquoi dans mon cas ?",
              "Quelle quantité de tissu prévoyez-vous de retirer, et comment évitez-vous une résection excessive ?",
              "Le capuchon du clitoris est-il concerné, et quels en sont les risques propres ?",
              "Quelle anesthésie, dans quel établissement, et qui joindre la nuit ou le week-end en cas de problème ?",
              "Quand pourrai-je reprendre le travail, le sport et les rapports ?",
              "Que comprend le devis, et que se passe-t-il en cas de retouche ou de complication ?",
            ],
          },
          {
            heading: "Le délai de réflexion et le second avis",
            paragraphs: [
              "Le Code de la santé publique impose un délai minimal de 15 jours entre la remise du devis détaillé et l'intervention, et aucun paiement autre que la consultation ne peut être exigé avant. Ce délai est un minimum : rien ne vous oblige à décider à son terme. Demander un second avis, par exemple auprès d'un gynécologue, est toujours légitime.",
            ],
          },
        ],
        sources: [LEGIFRANCE_L6322_2, LEGIFRANCE_MUTILATIONS, HAS, ANNUAIRE_SANTE, CNGOF, N3114],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Alternatives ──
      {
        interventionId: "labiaplasty",
        kind: "alternatives",
        locale: "fr",
        title: "Alternatives à la nymphoplastie",
        summary:
          "Information sur la diversité normale, mesures contre les frottements, soins d'une autre cause, accompagnement psychologique ou ne rien faire.",
        answer:
          "Selon la gêne ressentie, les alternatives sont une information et un examen rassurants, des mesures simples contre les frottements, le traitement d'une autre cause d'irritation ou de douleur, un accompagnement psychologique ou sexologique, ou ne rien faire. Les actes dits de « rajeunissement vaginal » par laser ou radiofréquence ne sont pas une alternative à la nymphoplastie.",
        sections: [
          {
            heading: "S'informer et se faire examiner",
            paragraphs: [
              "Beaucoup de femmes qui consultent ont une anatomie dans les variations normales. Une consultation avec un médecin, un gynécologue ou une sage-femme, avec des explications et parfois des schémas ou des photographies montrant la diversité des vulves, suffit souvent à apaiser l'inquiétude.",
            ],
          },
          {
            heading: "Mesures simples contre les frottements",
            paragraphs: [
              "Lorsque la gêne est surtout mécanique, quelques adaptations peuvent la réduire : sous-vêtements en coton bien ajustés, vêtements de sport sans couture centrale, selle de vélo adaptée, toilette douce sans produits irritants, crème protectrice ou lubrifiant lors des rapports.",
            ],
          },
          {
            heading: "Traiter une autre cause",
            paragraphs: [
              "Des irritations, des démangeaisons ou des douleurs peuvent être dues à une mycose, une infection, une maladie de peau de la vulve (lichen scléreux, eczéma) ou une vulvodynie. Elles relèvent d'un traitement médical spécifique, et une chirurgie ne les ferait pas disparaître.",
            ],
          },
          {
            heading: "Accompagnement psychologique ou sexologique",
            paragraphs: [
              "Lorsque la gêne porte surtout sur l'image de soi, la peur du regard d'un partenaire ou des difficultés dans la vie intime, un accompagnement par un psychologue, un sexologue ou un médecin formé peut aider, seul ou avant de reconsidérer une chirurgie.",
            ],
          },
          {
            heading: "Les techniques non chirurgicales présentées comme alternatives",
            paragraphs: [
              "Les traitements par laser, radiofréquence ou injections présentés comme un « rajeunissement » ou un « embellissement » intime concernent surtout le vagin et ne réduisent pas les petites lèvres. Leur efficacité et leur sécurité ne sont pas établies, et des brûlures, cicatrices ou douleurs ont été signalées. Les autorités sanitaires appellent à la prudence.",
            ],
          },
          {
            heading: "Ne rien faire",
            paragraphs: [
              "Choisir de ne pas intervenir est une option légitime. Une inquiétude liée à l'apparence peut évoluer avec le temps et l'information, et la réflexion peut être reprise plus tard sans conséquence médicale.",
            ],
          },
        ],
        sources: [HAS, CNGOF, ANSM, SOFCPRE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "labia-minora",
        locale: "fr",
        slug: "petites-levres",
        term: "Petites lèvres",
        aliases: ["petite lèvre", "petites levres", "petite levre", "nymphes", "lèvres internes", "labia minora"],
        definition:
          "Les petites lèvres sont les deux replis de peau fine et souple situés à l'intérieur des grandes lèvres de la vulve. Elles entourent et protègent l'entrée du vagin et l'orifice de l'urètre, et se rejoignent en avant pour former le capuchon du clitoris.",
        detail: [
          "Elles sont riches en vaisseaux et en terminaisons nerveuses, ce qui explique leur rôle dans la sensibilité et leur tendance à gonfler et à saigner après une chirurgie.",
          "Leur taille, leur forme, leur épaisseur et leur couleur varient beaucoup d'une femme à l'autre, et il est fréquent qu'elles dépassent des grandes lèvres ou soient asymétriques. Ces variations sont normales. Leur aspect évolue avec la puberté, les grossesses, les hormones et l'âge.",
          "La réduction chirurgicale des petites lèvres s'appelle la nymphoplastie. Elle n'est envisagée que chez une femme adulte, en cas de gêne persistante, après information sur cette diversité normale.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "wedge-resection",
        locale: "fr",
        slug: "resection-cuneiforme",
        term: "Résection cunéiforme",
        aliases: ["résections cunéiformes", "resection cuneiforme", "résection en coin", "résection en V", "wedge resection"],
        definition:
          "Une résection cunéiforme consiste à retirer un fragment de tissu en forme de coin (de triangle), puis à rapprocher et suturer les deux berges. En nymphoplastie, elle réduit la petite lèvre en retirant un triangle dans sa partie centrale.",
        detail: [
          "Son intérêt est de préserver le bord libre naturel de la petite lèvre, avec sa couleur et son aspect, et de placer la cicatrice perpendiculairement au bord, de façon souvent peu visible.",
          "Elle s'oppose à la résection linéaire, qui retire le bord de la lèvre sur toute sa longueur. Le choix entre les deux dépend de l'anatomie et des attentes, et il existe de nombreuses variantes.",
          "Le principal risque spécifique est la désunion de la suture, qui peut laisser une encoche ou un orifice dans la lèvre et nécessiter une reprise. Le terme est aussi employé dans d'autres domaines de la chirurgie pour toute ablation en forme de coin.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },

  // ════════════════════════════════════ UNITED KINGDOM ════════════════════════════════════
  "en-gb": {
    intervention: {
      id: "labiaplasty",
      locale: "en-gb",
      slug: "labiaplasty",
      category: "body",
      title: "Labiaplasty",
      summary:
        "Labiaplasty reduces the inner labia. Normal variation, reasons, techniques, risks, recovery and NHS rules explained, for adults only.",
      description: [
        "Labiaplasty, sometimes called labia reduction, is an operation to reduce the size of one or both of the inner lips of the vulva (the labia minora), the folds of thin skin inside the outer lips. It is requested by adult women who experience physical discomfort, such as rubbing, irritation or pain in tight clothing, during exercise, cycling or sex, or who are unhappy with the appearance.",
        "It is worth saying from the outset that vulvas vary enormously. Inner labia that extend beyond the outer labia, that differ in size, shape or colour, or that are uneven are common and entirely normal. Their appearance also changes with puberty, pregnancy, hormones and age. Images on social media, in pornography and in some advertising are often edited or selected, and show a narrow ideal that does not reflect this diversity.",
        "There are several techniques. An edge (trim) resection removes the free edge of the labium; a wedge resection removes a triangle of tissue from the middle and joins the edges, preserving the natural border; other variations, such as de-epithelialisation or combined approaches, are tailored to each anatomy. Reduction of the clitoral hood is sometimes carried out at the same time. Stitches are usually dissolvable.",
        "Labiaplasty is surgery on a sensitive area with a rich nerve and blood supply. It carries real risks, some of which are hard to correct: removing too much tissue, a painful scar, changes in sensation and asymmetry. It should not be confused with treatments marketed as 'vaginal rejuvenation', which concern the vagina and whose benefits have not been shown.",
        "On the NHS, labiaplasty is offered only in exceptional circumstances, and the Royal College of Obstetricians and Gynaecologists (RCOG) and the British Society for Paediatric and Adolescent Gynaecology (BritSPAG) take a cautious approach. Female genital mutilation is a serious crime in the UK, and genital surgery for non-medical reasons on anyone under 18, or without free and informed consent, is not acceptable. This information is intended for adults.",
      ],
      indications: [
        "Persistent physical discomfort linked to the size of the inner labia: rubbing, irritation or pain in clothing, when walking, cycling, exercising or during sex.",
        "Recurrent irritation or difficulty with hygiene attributed to the labia, once other causes such as a skin condition or infection have been ruled out.",
        "Marked asymmetry, or changes after childbirth (a tear or scar), injury or illness.",
        "A long-standing concern about appearance that is the woman's own, after information about the wide range of normal anatomy.",
        "An adult in good health with realistic expectations who has taken time to reflect.",
      ],
      contraindications: [
        "Being under 18: cosmetic genital surgery is not appropriate, not least because the labia continue to develop into adulthood.",
        "A request driven by pressure from a partner, relative or anyone else.",
        "An intense preoccupation with an appearance the doctor considers normal, which may suggest body dysmorphic disorder and should be assessed first.",
        "Vulval pain or pain during sex from another cause (vulvodynia, vaginismus, a skin condition), which surgery would not treat.",
        "A current genital infection or an untreated vulval skin condition such as lichen sclerosus.",
        "Pregnancy or a recent birth: it is usually advised to wait until the tissues have recovered.",
        "Smoking, a bleeding disorder or a poorly controlled long-term condition, which increase the risk of healing problems.",
      ],
      risks: [
        {
          name: "Pain, swelling and bruising",
          detail:
            "Common and expected: the vulva swells considerably for one to two weeks, with bruising and soreness when walking or sitting. Milder swelling can last several weeks.",
        },
        {
          name: "Haematoma",
          detail:
            "A collection of blood under the wound is uncommon; rapid, tense, painful swelling, especially on one side, needs prompt attention and may require a return to theatre.",
        },
        {
          name: "Wound breakdown",
          detail:
            "Partial opening of the wound, more often reported after a wedge resection. It may heal by itself or leave a notch or hole in the labium, which sometimes needs further surgery.",
        },
        {
          name: "Infection",
          detail:
            "Uncommon; signs include spreading redness, fever or a foul-smelling discharge. It is usually treated with wound care and antibiotics.",
        },
        {
          name: "Over-resection",
          detail:
            "Removing too much tissue is the most feared complication because it is difficult, sometimes impossible, to correct fully: dryness, discomfort, a tight scar, less protection of the vaginal entrance and an appearance that may feel unnatural.",
        },
        {
          name: "Asymmetry, irregularity and dissatisfaction",
          detail:
            "Differences between the sides, an uneven or scalloped edge, some remaining excess, or a colour contrast between the labia and the clitoral hood. A revision can be considered once healing is complete, several months later.",
        },
        {
          name: "Sensitive scar and pain during sex",
          detail:
            "The scar can remain tender, thickened or tight, and cause pain during sex (dyspareunia), usually temporary but sometimes long-lasting.",
        },
        {
          name: "Changes in sensation",
          detail:
            "Reduced or increased sensitivity, usually temporary. Long-term loss of sensation is possible though rare, particularly if the clitoral hood is operated on.",
        },
        {
          name: "Temporary urinary problems",
          detail:
            "Stinging when passing urine in the first days and a misdirected stream due to swelling; temporary difficulty passing urine is less common.",
        },
        {
          name: "Anaesthetic risks",
          detail: "Discussed with the anaesthetist at your pre-operative assessment.",
        },
      ],
      procedure: {
        anaesthesia:
          "Local anaesthesia, sometimes with sedation, or general anaesthesia depending on the extent of surgery and your preference.",
        duration: "Around 45 minutes to 1 hour 30 minutes, longer if the clitoral hood is also reduced.",
        hospitalStay: "Usually a day case, going home the same day.",
      },
      recovery: [
        "Day 1: swelling, soreness and light bleeding; a wrapped ice pack and simple painkillers, resting lying down for much of the day.",
        "Week 1: swelling peaks in the first 2 to 4 days; rinse with lukewarm water after using the toilet, pat dry and wear loose cotton underwear.",
        "Return to desk-based work often after 5 to 10 days, if sitting is comfortable; later for physical jobs.",
        "Weeks 2 to 3: swelling settles noticeably; dissolvable stitches usually fall out within 2 to 4 weeks.",
        "No baths, swimming or tampons for about 4 weeks; sex usually after 4 to 6 weeks, once the scar is no longer tender.",
        "Avoid cycling, horse riding, activities that cause friction and tight trousers for around 6 weeks, as your surgeon advises.",
        "Final appearance judged after 3 to 6 months, once the scar has softened and residual swelling has gone.",
      ],
      alternatives: [
        "Doing nothing, after information about the wide range of normal anatomy: a legitimate choice, which you can revisit later.",
        "Simple measures to reduce rubbing: well-fitting cotton underwear, suitable sportswear, gentle washing products and lubricant during sex.",
        "Treatment of another cause of irritation or pain (thrush, a skin condition, vulvodynia) by a GP, gynaecologist or sexual health clinic.",
        "Psychological or psychosexual support when the concern is mainly about body image or intimacy.",
        "So-called 'vaginal rejuvenation' treatments (laser, radiofrequency) are not an alternative: they concern a different area and their effectiveness and safety are not established.",
      ],
      faq: [
        {
          question: "Are my labia normal?",
          answer:
            "Very probably. The size, shape, colour and symmetry of the inner labia vary enormously, and it is common for them to extend beyond the outer labia. There is no medical standard for how a vulva should look. A GP, practice nurse, gynaecologist or sexual health clinic can examine you, reassure you or look for another cause of discomfort.",
        },
        {
          question: "Does labiaplasty hurt?",
          answer:
            "The operation is carried out under anaesthetic. Afterwards it is uncomfortable for a few days, especially when sitting and passing urine, and this is usually eased with simple painkillers and cold packs. Pain that gets worse, particularly with swelling on one side, should be reported straight away.",
        },
        {
          question: "What is the difference between a trim and a wedge resection?",
          answer:
            "A trim (edge) resection removes the free edge of the labium: it is straightforward and can remove a darker or irregular edge, but changes the natural border. A wedge resection removes a triangle from the middle and keeps the edge, with a slightly higher risk of the wound opening. The choice depends on your anatomy and expectations, and your surgeon should explain it.",
        },
        {
          question: "Will it affect sensation or my sex life?",
          answer:
            "For most women, sensation returns once healing is complete. Temporary changes are common, and long-term discomfort or pain during sex is possible, though less common. No improvement in sexual pleasure can be promised.",
        },
        {
          question: "Is labiaplasty available on the NHS?",
          answer:
            "Only exceptionally. The NHS does not offer labiaplasty for cosmetic reasons. It may be considered for specific medical problems, such as an abnormality, damage from childbirth or injury, or significant documented symptoms, after assessment by a gynaecologist and according to local criteria. The NHS does not usually carry out labiaplasty on girls under 18.",
        },
        {
          question: "Is labiaplasty the same as female genital mutilation?",
          answer:
            "No. Labiaplasty is a medical procedure chosen by an informed, consenting adult for her own reasons. Female genital mutilation is harm imposed without medical reason, usually on children; it is illegal in the UK, including when carried out abroad. If you are affected or worried about a girl, the NSPCC FGM helpline (0800 028 3550), the police or your GP can help.",
        },
        {
          question: "Can I have children afterwards?",
          answer:
            "Yes. The operation does not involve the vagina and should not usually affect a vaginal birth. Pregnancy and childbirth can, however, change the appearance of the vulva again, so some women prefer to wait until their family is complete.",
        },
        {
          question: "How long should I wait before deciding?",
          answer:
            "There is no legal waiting period in the UK, but GMC guidance recommends at least two weeks between your consultation and agreeing to surgery. Use this time to think, ask questions and seek a second opinion if you wish.",
        },
        {
          question: "Who should carry out my labiaplasty?",
          answer:
            "A surgeon on the GMC Specialist Register in plastic surgery or in obstetrics and gynaecology, with specific experience of this operation, working in a hospital or clinic registered with the Care Quality Commission in England (or the equivalent regulator in Scotland, Wales or Northern Ireland). For a first question about how your vulva looks, your GP or a sexual health clinic is a good place to start.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risks ──
      {
        interventionId: "labiaplasty",
        kind: "risks",
        locale: "en-gb",
        title: "Labiaplasty risks",
        summary:
          "Swelling, haematoma, wound breakdown, over-resection, sensation changes and pain during sex: labiaplasty risks and when to seek help.",
        answer:
          "Labiaplasty is surgery on a sensitive area with a rich blood supply. Swelling, bruising and discomfort are expected. Haematoma, wound breakdown, infection and asymmetry are less common. The most feared complication is removing too much tissue, which is hard to correct; long-term changes in sensation or pain during sex are possible, though less common.",
        sections: [
          {
            heading: "Common and expected effects",
            paragraphs: ["These are normal after labiaplasty and settle gradually over one to three weeks."],
            bullets: [
              "Marked swelling of the vulva, peaking in the first 2 to 4 days.",
              "Bruising, sometimes spreading to the outer labia and pubic area.",
              "Soreness when sitting, walking and passing urine.",
              "Light bleeding or oozing for a few days.",
              "A pulling feeling from the stitches and itching as the wound heals.",
              "Changes in sensation, usually temporary.",
            ],
          },
          {
            heading: "Less common complications",
            paragraphs: [
              "How likely these are depends on the technique, your anatomy, the surgeon's experience and how closely aftercare advice is followed.",
            ],
            bullets: [
              "Haematoma, which may need a return to theatre.",
              "Partial wound breakdown, more often reported after a wedge resection, which can leave a notch or hole.",
              "Infection, usually treated with wound care and antibiotics.",
              "Asymmetry, an uneven edge, some remaining excess, or a colour contrast with the clitoral hood.",
              "A thickened, tender or tight scar.",
              "Temporary difficulty passing urine.",
            ],
          },
          {
            heading: "More serious or long-lasting complications",
            paragraphs: [
              "Over-resection, removing too much of the inner labia, is difficult and sometimes impossible to correct fully. It can lead to dryness, discomfort, a tight scar, irritation at the vaginal entrance and significant distress. This is why a cautious approach to the amount removed matters.",
              "Pain during sex (dyspareunia), increased sensitivity or long-term loss of sensation are possible, though less common, particularly when the clitoral hood is operated on. As with any surgery, anaesthetic complications and blood clots are very rare but can happen.",
            ],
          },
          {
            heading: "When to seek help urgently",
            paragraphs: [
              "Contact your surgeon's team promptly if something does not feel right; if you cannot reach them, call NHS 111. Call 999 if you have chest pain, sudden breathlessness or collapse.",
            ],
            bullets: [
              "Rapid, tense and painful swelling, especially on one side.",
              "Heavy bleeding that does not stop after 10 minutes of gentle pressure.",
              "Fever, spreading redness or a pus-like or foul-smelling discharge.",
              "Being unable to pass urine, or pain that is getting worse rather than better.",
              "The wound opening or an area of skin turning dark.",
              "A painful, swollen calf on one side, breathlessness or chest pain.",
            ],
          },
          {
            heading: "What increases the risk",
            paragraphs: ["Some factors can be changed and should be discussed at your consultation."],
            bullets: [
              "Smoking or nicotine use, which slow healing and make wound breakdown more likely.",
              "Medicines or supplements that increase bleeding, such as aspirin, anti-inflammatory painkillers or anticoagulants.",
              "Returning too early to sex, exercise, cycling or tight clothing.",
              "Poorly controlled diabetes or an untreated vulval skin condition.",
              "Additional procedures, such as clitoral hood reduction or other surgery on the same day.",
            ],
          },
          {
            heading: "Revision surgery",
            paragraphs: [
              "Remaining excess, asymmetry or a notch may be improved with a revision, which is only considered once healing is complete, usually after several months. Over-resection, by contrast, is very difficult to correct. Ask before you commit what would happen, and what you would pay, if a revision were needed.",
            ],
          },
        ],
        sources: [NHS, RCOG, BAAPS, BAPRAS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Cost ──
      {
        interventionId: "labiaplasty",
        kind: "cost",
        locale: "en-gb",
        title: "Labiaplasty cost",
        summary:
          "What a labiaplasty quote should include, what affects the price, why the NHS funds it only exceptionally, and the cost of complications.",
        answer:
          "The cost of labiaplasty depends mainly on the technique, any additional procedures such as clitoral hood reduction, the type of anaesthesia and the hospital. We do not give price ranges: only a written, itemised quote after a consultation with the operating surgeon tells you the actual cost. The NHS does not fund labiaplasty for cosmetic reasons.",
        sections: [
          {
            heading: "What a quote should include",
            paragraphs: ["Ask for a written quote that lists every item, or states clearly what is excluded."],
            bullets: [
              "The surgeon's fee, with the planned technique and any additional procedures.",
              "The anaesthetist's fee, if sedation or general anaesthesia is planned.",
              "Hospital or clinic fees for theatre time and day-case care.",
              "Medicines, wound-care products and pads for the first days.",
              "Follow-up appointments.",
              "What happens if a revision or complication arises.",
            ],
          },
          {
            heading: "What affects the price",
            paragraphs: [
              "The technique (trim, wedge or combined), whether the clitoral hood is also reduced, the length of the operation, the type of anaesthesia and the hospital all affect the quote.",
              "Price alone does not tell you about quality. A technique marketed as newer, or the use of a laser to cut, is not necessarily more suitable for you.",
            ],
          },
          {
            heading: "NHS funding",
            paragraphs: [
              "The NHS does not fund labiaplasty for cosmetic reasons, and it is offered only exceptionally. It may be considered for specific medical problems, such as a congenital abnormality, damage from childbirth or injury, or significant symptoms that persist despite other measures, after assessment by a gynaecologist. Local commissioning policies often treat it as a procedure of limited clinical value, so an individual funding request (IFR) may be needed. Your GP can advise.",
              "In line with RCOG and BritSPAG guidance, the NHS does not usually offer labiaplasty to girls under 18, as the labia are still developing.",
            ],
          },
          {
            heading: "Paying privately: points to check",
            paragraphs: [
              "Professional standards say you should not be pressured into booking, and time-limited discounts, package deals or advertising that presents an 'ideal' vulva are warning signs. The consultation should be with the operating surgeon, and you should have time to reflect before paying a deposit. Check whether any deposit is refundable.",
              "Be cautious about finance arranged at the consultation: you remain committed to the repayments even if you are unhappy with the result or need further treatment.",
            ],
          },
          {
            heading: "The cost of complications and revisions",
            paragraphs: [
              "Treating a haematoma or wound breakdown, or revising an asymmetry, can lead to further costs, more time off work and extra travel. Ask what the quote covers, and whether insurance for complications is included or available. If you have surgery abroad, follow-up care at home may be harder to arrange.",
            ],
          },
        ],
        sources: [NHS, GMC, CQC, BRITSPAG],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Recovery ──
      {
        interventionId: "labiaplasty",
        kind: "recovery",
        locale: "en-gb",
        title: "Recovery after labiaplasty",
        summary:
          "After labiaplasty: early swelling, hygiene, returning to work, sex and exercise week by week, final appearance at 3 to 6 months and warning signs.",
        answer:
          "The first few days involve marked swelling and discomfort when sitting. Desk-based work often resumes after 5 to 10 days. Baths, swimming and tampons are avoided for about 4 weeks, and sex usually resumes after 4 to 6 weeks. The final appearance is judged after 3 to 6 months. Always follow your surgeon's advice over these general timings.",
        sections: [
          {
            heading: "The first few days",
            paragraphs: [
              "Most women go home the same day. The vulva is swollen, sore and may bleed a little. Swelling is greatest between the second and fourth days and then settles.",
            ],
            bullets: [
              "Rest, lying down for much of the time, for the first two or three days.",
              "Use a cold pack for short periods, always wrapped in a cloth, if your surgeon recommends it.",
              "Take the painkillers you are given and avoid aspirin and anti-inflammatory painkillers unless told otherwise.",
              "Pour lukewarm water over the vulva while passing urine to reduce stinging.",
              "Walk gently several times a day to reduce the risk of blood clots.",
              "Arrange for someone to take you home.",
            ],
          },
          {
            heading: "Hygiene and wound care",
            paragraphs: [
              "Gentle rinsing with lukewarm water after using the toilet, followed by patting dry, is usually advised. Loose cotton underwear and sanitary pads are preferable. Dissolvable stitches fall out by themselves within two to four weeks; do not pull at them. Showering is usually allowed early, but baths, swimming and saunas are avoided for about four weeks.",
            ],
          },
          {
            heading: "Week by week",
            paragraphs: [],
            bullets: [
              "Week 1: marked swelling and bruising, discomfort when sitting; rest and wound care.",
              "Weeks 1 to 2: desk-based work is often possible after 5 to 10 days, with a cushion if needed.",
              "Weeks 2 to 3: swelling settles noticeably and stitches start to dissolve; normal walking.",
              "Week 4: baths, swimming and tampons usually possible again once fully healed.",
              "Weeks 4 to 6: resume sex once the scar is no longer tender, gently and with lubricant.",
              "After 6 weeks: cycling, horse riding, activities that cause friction and tight clothing, once your surgeon agrees.",
            ],
          },
          {
            heading: "The following months",
            paragraphs: [
              "Mild residual swelling, a slightly firm scar or altered sensitivity are common for the first few months. The scar softens gradually.",
              "The final appearance can only be judged after three to six months, and any revision should not be discussed before then. Follow-up usually includes an appointment in the first few weeks and another a few months later.",
            ],
          },
          {
            heading: "When to seek help",
            paragraphs: [
              "Contact your surgeon's team if you have rapid, tense swelling on one side, heavy bleeding, fever, a foul-smelling discharge, an opening wound or cannot pass urine; if you cannot reach them, call NHS 111. Call 999 for chest pain, sudden breathlessness or collapse.",
            ],
          },
        ],
        sources: [NHS, RCOG, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Decision ──
      {
        interventionId: "labiaplasty",
        kind: "decision",
        locale: "en-gb",
        title: "Labiaplasty: before you decide",
        summary:
          "Labiaplasty: normal variation, the influence of images, physical versus cosmetic concerns, body dysmorphic disorder, the law and questions to ask.",
        answer:
          "Before considering labiaplasty, it helps to know that the inner labia vary enormously and that labia which extend beyond the outer lips are common and normal. Separating physical discomfort from worry about appearance helps you find the right approach. The operation is for adults only. There is no legal waiting period in the UK, but GMC guidance recommends at least two weeks to reflect.",
        sections: [
          {
            heading: "A wide range of normal",
            paragraphs: [
              "Inner labia can measure from a few millimetres to several centimetres, be thin or thick, darker at the edge, wrinkled or smooth, and differ from one side to the other. All of this is normal. Their appearance also changes with hormones, pregnancy and age.",
              "Images on social media, in pornography and in some advertising are often edited or selected and suggest a norm that does not exist. An examination by a GP, practice nurse, gynaecologist or sexual health clinic is often reassuring.",
            ],
          },
          {
            heading: "Physical discomfort or cosmetic concern?",
            paragraphs: [
              "Physical symptoms, such as rubbing, irritation or pain during exercise, cycling or sex, deserve to be examined: another cause, such as thrush, a vulval skin condition or vulvodynia, should be ruled out, and simple measures are sometimes enough.",
              "A concern about appearance is equally valid to raise, but it calls for different questions: how long have you felt this way, what are you comparing yourself with, and is a partner's or anyone else's opinion playing a part? A decision made under pressure is more likely to lead to disappointment. Surgery cannot guarantee a better sex life or more confidence.",
            ],
          },
          {
            heading: "Body dysmorphic disorder",
            paragraphs: [
              "Some people have an intense, distressing preoccupation with a part of their body that others consider normal: this is body dysmorphic disorder (BDD), and it can involve the genitals. Surgery does not relieve it and can make distress worse. The RCOG advises that women seeking genital cosmetic surgery should have the opportunity to discuss their concerns and be offered psychological assessment where appropriate.",
              "If you spend a lot of time thinking about it, check your appearance often or avoid intimacy because of this worry, talk to your GP; effective treatments are available on the NHS. If you are struggling or having thoughts of suicide, Samaritans are available on 116 123, day and night.",
            ],
          },
          {
            heading: "The law and consent",
            paragraphs: [
              "Labiaplasty is a medical procedure carried out on an adult woman, at her own request, after full information and free and informed consent. It is clearly distinct from female genital mutilation, which is harm imposed without medical reason and is a serious criminal offence under UK law, including when carried out abroad on a UK national or resident.",
              "No cosmetic genital procedure should be carried out on anyone under 18, or on anyone who does not freely consent. BritSPAG advises against labial surgery in girls for cosmetic reasons. This website is for adults only.",
            ],
          },
          {
            heading: "Questions to ask at your consultation",
            paragraphs: [],
            bullets: [
              "Are you on the GMC Specialist Register, and how many labiaplasties do you carry out?",
              "Is my anatomy within the normal range, and what can you realistically change?",
              "Which technique do you suggest (trim, wedge or another), and why in my case?",
              "How much tissue do you plan to remove, and how do you avoid removing too much?",
              "Will the clitoral hood be involved, and what are the specific risks?",
              "What anaesthetic, which hospital, and who do I contact at night or at weekends if there is a problem?",
              "When can I return to work, exercise and sex?",
              "What does the quote include, and what happens if I need a revision or have a complication?",
            ],
          },
          {
            heading: "Time to reflect and a second opinion",
            paragraphs: [
              "There is no legal cooling-off period in the UK, but GMC guidance recommends at least two weeks between the consultation and agreeing to surgery, and the consultation should be with the surgeon who will operate. You should never feel rushed. Seeking a second opinion, for example from a gynaecologist, is always reasonable.",
            ],
          },
        ],
        sources: [GMC, RCOG, BRITSPAG, NHS, RCS, SAMARITANS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Alternatives ──
      {
        interventionId: "labiaplasty",
        kind: "alternatives",
        locale: "en-gb",
        title: "Alternatives to labiaplasty",
        summary:
          "Reassurance about normal variation, simple measures against rubbing, treating another cause, psychological support or doing nothing.",
        answer:
          "Depending on the concern, alternatives include information and a reassuring examination, simple measures to reduce rubbing, treatment of another cause of irritation or pain, psychological or psychosexual support, or doing nothing. Laser or radiofrequency treatments marketed as 'vaginal rejuvenation' are not an alternative to labiaplasty.",
        sections: [
          {
            heading: "Information and examination",
            paragraphs: [
              "Many women who seek labiaplasty have anatomy within the normal range. A consultation with a GP, practice nurse, gynaecologist or sexual health clinic, with explanation and sometimes images showing the diversity of vulvas, is often enough to ease the worry. The RCOG encourages this approach before any surgery is considered.",
            ],
          },
          {
            heading: "Simple measures to reduce rubbing",
            paragraphs: [
              "When the problem is mainly mechanical, a few changes can help: well-fitting cotton underwear, sportswear without a central seam, a suitable bicycle saddle, gentle washing without perfumed products, a barrier cream, and lubricant during sex.",
            ],
          },
          {
            heading: "Treating another cause",
            paragraphs: [
              "Irritation, itching or pain may be caused by thrush, an infection, a vulval skin condition such as lichen sclerosus or eczema, or vulvodynia. These need specific medical treatment, and surgery would not make them go away.",
            ],
          },
          {
            heading: "Psychological and psychosexual support",
            paragraphs: [
              "When the concern is mainly about body image, fear of a partner's opinion or difficulties with intimacy, support from a psychologist, psychosexual therapist or trained doctor can help, either on its own or before reconsidering surgery. Your GP can refer you or tell you about NHS talking therapies.",
            ],
          },
          {
            heading: "Non-surgical treatments marketed as alternatives",
            paragraphs: [
              "Laser, radiofrequency or injectable treatments promoted as intimate 'rejuvenation' or 'enhancement' mainly target the vagina and do not reduce the inner labia. Their effectiveness and safety are not established, and burns, scarring and pain have been reported. Regulators and professional bodies urge caution; problems with medical devices can be reported to the MHRA through the Yellow Card scheme.",
            ],
          },
          {
            heading: "Doing nothing",
            paragraphs: [
              "Choosing not to have surgery is a legitimate option. Worries about appearance can change with time and information, and you can revisit the decision later with no medical consequence.",
            ],
          },
        ],
        sources: [NHS, RCOG, MHRA, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "labia-minora",
        locale: "en-gb",
        slug: "labia-minora",
        term: "Labia minora",
        aliases: ["inner labia", "inner lips", "labium minus", "labia minor", "vaginal lips"],
        definition:
          "The labia minora are the two folds of thin, soft skin inside the outer lips (labia majora) of the vulva. They surround and protect the vaginal opening and the urethra, and join at the front to form the clitoral hood.",
        detail: [
          "They have a rich blood and nerve supply, which explains their role in sensation and why they swell and bleed easily after surgery.",
          "Their size, shape, thickness and colour vary greatly between women, and it is common for them to extend beyond the outer lips or to be uneven. This variation is normal. Their appearance changes with puberty, pregnancy, hormones and age.",
          "Surgical reduction of the labia minora is called labiaplasty. It is only considered in adults with persistent concerns, after information about this normal variation.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "wedge-resection",
        locale: "en-gb",
        slug: "wedge-resection",
        term: "Wedge resection",
        aliases: ["wedge resections", "wedge excision", "V-wedge", "central wedge resection", "wedge labiaplasty"],
        definition:
          "A wedge resection removes a wedge-shaped (triangular) piece of tissue and then brings the two edges together with stitches. In labiaplasty, it reduces the labium by removing a triangle from its central part.",
        detail: [
          "Its advantage is that it preserves the natural free edge of the labium, with its colour and texture, and places the scar across the labium, where it is often less visible.",
          "It differs from a trim (edge) resection, which removes the edge of the labium along its length. The choice depends on anatomy and expectations, and there are many variations.",
          "The main specific risk is wound breakdown, which can leave a notch or hole in the labium and may need further surgery. The term is also used in other areas of surgery for any wedge-shaped removal of tissue.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },
};
