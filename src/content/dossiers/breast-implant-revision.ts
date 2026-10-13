import type { Source } from "../types";
import type { Dossier } from "./types";

// ─── Sources France ───
const HAS: Source = { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" };
const ANSM: Source = {
  label: "Agence nationale de sécurité du médicament et des produits de santé (ANSM) : implants mammaires, LAGC-AIM, matériovigilance",
  url: "https://ansm.sante.fr",
};
const INCA: Source = {
  label: "Institut national du cancer (INCa) : lymphome anaplasique à grandes cellules associé à un implant mammaire",
  url: "https://www.e-cancer.fr",
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

// ─── Sources Royaume-Uni ───
const NHS: Source = { label: "NHS: breast implants, breast implant problems and removal", url: "https://www.nhs.uk" };
const MHRA: Source = {
  label: "Medicines and Healthcare products Regulatory Agency (MHRA): breast implant safety, BIA-ALCL and Yellow Card reporting",
  url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
};
const BCIR: Source = { label: "Breast and Cosmetic Implant Registry (NHS England)" };
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

/** Changement ou retrait d'implants mammaires : fiche, sous-pages et lexique (fr, en-gb). Brouillon à relire par le comité médical. */
export const dossier: Dossier = {
  // ════════════════════════════════════ FRANCE ════════════════════════════════════
  fr: {
    intervention: {
      id: "breast-implant-revision",
      locale: "fr",
      slug: "changement-retrait-implants-mammaires",
      category: "breast",
      title: "Changement ou retrait d'implants mammaires",
      summary:
        "Remplacer ou retirer des implants mammaires : coque, rupture, LAGC-AIM, souhait de retrait, capsulectomie, aspect des seins après et suivi.",
      description: [
        "Une intervention sur des implants mammaires déjà en place peut consister à les remplacer par de nouveaux implants, ou à les retirer sans les remplacer (explantation). Elle peut s'accompagner d'un geste sur la capsule, cette enveloppe de tissu cicatriciel que l'organisme forme naturellement autour de tout implant : ouverture (capsulotomie), retrait partiel ou retrait complet (capsulectomie). Elle peut aussi être associée à un lifting des seins (mastopexie) ou à un transfert de graisse (lipofilling).",
        "Les raisons sont variées : durcissement et déformation du sein lié à une coque (contracture capsulaire), rupture ou suintement d'un implant, déplacement ou rotation de l'implant, plis visibles, sein qui a changé avec le temps, grossesse ou perte de poids, suspicion ou diagnostic de lymphome anaplasique à grandes cellules associé aux implants mammaires (LAGC-AIM), implant concerné par une alerte sanitaire, ou simplement le souhait de ne plus avoir d'implants ou de changer de volume.",
        "Les implants mammaires ne sont pas des dispositifs à vie : une ou plusieurs réinterventions au cours de la vie sont fréquentes. En revanche, un implant qui ne pose pas de problème et qui n'est pas concerné par une alerte n'a pas, selon les autorités sanitaires, à être changé systématiquement à une date fixe. Le suivi clinique et par imagerie permet de repérer une rupture ou une anomalie.",
        "Certaines personnes attribuent à leurs implants des symptômes généraux (fatigue, douleurs articulaires, troubles de la concentration, etc.), regroupés sous l'expression anglaise « breast implant illness ». Ces symptômes rapportés sont pris au sérieux et étudiés, mais aucun lien de causalité avec les implants n'est établi à ce jour, et l'amélioration après retrait n'est pas prévisible. Ils justifient un bilan médical complet pour ne pas passer à côté d'une autre cause.",
        "Après un retrait sans remplacement, l'aspect des seins dépend du volume des implants, de leur ancienneté, de l'épaisseur des tissus et de l'élasticité de la peau : seins plus petits, parfois plus petits qu'avant la pose, relâchés, aplatis, avec des plis ou une asymétrie. Un lifting ou un lipofilling, dans le même temps ou plus tard, peuvent être discutés. Une réintervention est souvent plus complexe qu'une première pose : elle demande un chirurgien expérimenté et une information détaillée.",
      ],
      indications: [
        "Coque (contracture capsulaire) gênante : sein dur, déformé ou douloureux.",
        "Rupture ou suspicion de rupture d'un implant, confirmée ou à confirmer par imagerie.",
        "Suspicion ou diagnostic de LAGC-AIM, par exemple devant un épanchement autour de l'implant (sérome tardif) ou une masse : le retrait de l'implant et de toute la capsule fait alors partie du traitement.",
        "Implant concerné par une alerte ou une recommandation des autorités sanitaires (par exemple les implants PIP).",
        "Déplacement, rotation, plis visibles ou palpables, asymétrie ou sein qui « tombe » au-dessus de l'implant.",
        "Souhait de changer de volume, de type d'implant, ou de ne plus avoir d'implants.",
        "Symptômes généraux que la personne attribue à ses implants, après un bilan médical et une information honnête sur les incertitudes.",
      ],
      contraindications: [
        "Attentes irréalistes sur l'aspect des seins après un retrait, ou sur la disparition certaine de symptômes généraux.",
        "Demande motivée par la pression d'un tiers, ou préoccupation excessive pour un défaut minime, à évoquer avec le chirurgien.",
        "Infection en cours ou maladie générale non équilibrée (diabète, maladie cardiaque ou respiratoire), qui conduit à différer une intervention programmée.",
        "Tabagisme actif, qui augmente le risque de complications de cicatrisation, notamment si un lifting est associé : un arrêt est recommandé.",
        "Grossesse ou allaitement en cours pour une intervention à visée esthétique (une urgence médicale reste prise en charge).",
        "Antécédents de thrombose ou troubles de la coagulation non évalués.",
      ],
      risks: [
        {
          name: "Douleurs, ecchymoses et gonflement",
          detail:
            "Fréquents et attendus pendant quelques jours à quelques semaines ; plus marqués après une capsulectomie complète ou un lifting associé.",
        },
        {
          name: "Hématome",
          detail:
            "Saignement qui s'accumule dans la loge de l'implant, peu fréquent, en général dans les premières heures ou les premiers jours. Il peut nécessiter une reprise au bloc. Le risque est plus élevé après une capsulectomie, car la capsule est décollée de la paroi du thorax.",
        },
        {
          name: "Sérome",
          detail:
            "Accumulation de liquide dans l'espace laissé par l'implant ou la capsule. Un drain est parfois mis en place ; une ponction peut être nécessaire. Un sérome tardif, survenant des mois ou des années après une pose d'implant, doit toujours être exploré.",
        },
        {
          name: "Infection",
          detail:
            "Peu fréquente ; traitée par antibiotiques et parfois par une reprise. Une infection autour d'un nouvel implant peut imposer son retrait temporaire.",
        },
        {
          name: "Aspect des seins après un retrait",
          detail:
            "Perte de volume, relâchement, aspect aplati ou creusé, plis de peau, asymétrie. Les seins peuvent paraître plus petits qu'avant la pose initiale, car les tissus s'amincissent avec le temps. Un lifting ou un lipofilling peuvent être proposés, avec leurs propres risques et cicatrices.",
        },
        {
          name: "Récidive de coque et nouvelle réintervention",
          detail:
            "Après un changement d'implants, une nouvelle coque peut se former, ainsi qu'une rupture ou un déplacement à terme. Le risque de réintervention est plus élevé après une chirurgie secondaire qu'après une première pose.",
        },
        {
          name: "Troubles de la sensibilité et cicatrices",
          detail:
            "Diminution ou modification de la sensibilité du mamelon et de la peau, le plus souvent transitoire, parfois durable. Les cicatrices peuvent s'élargir ou s'épaissir, surtout si un lifting est associé.",
        },
        {
          name: "Lésion de la paroi du thorax",
          detail:
            "Rare : lorsque la capsule adhère aux côtes, en particulier pour un implant placé derrière le muscle, son retrait complet peut léser la plèvre (enveloppe du poumon) et provoquer un pneumothorax, qui nécessite une prise en charge spécifique.",
        },
        {
          name: "Silicone résiduel",
          detail:
            "Après une rupture d'implant en gel de silicone, des fragments de gel peuvent rester dans les tissus ou dans les ganglions de l'aisselle, malgré un nettoyage soigneux. Ils peuvent former de petits nodules (siliconomes), le plus souvent sans gravité.",
        },
        {
          name: "Thrombose veineuse et risques liés à l'anesthésie",
          detail:
            "La thrombose veineuse et l'embolie pulmonaire sont rares mais graves, plus probables en cas d'intervention longue ou de gestes associés. Les risques de l'anesthésie sont évalués lors de la consultation d'anesthésie obligatoire.",
        },
      ],
      procedure: {
        anaesthesia: "Anesthésie générale dans la très grande majorité des cas.",
        duration:
          "Environ 1 à 3 heures selon le geste : simple changement d'implants, capsulectomie complète, lifting ou lipofilling associés.",
        hospitalStay:
          "Souvent en ambulatoire ; une nuit d'hospitalisation peut être proposée après une capsulectomie complète, un lifting associé ou si des drains sont posés.",
      },
      recovery: [
        "Jour 1 : douleurs de la poitrine comparables à des tiraillements, éventuellement drains, lever dès le soir ou le lendemain.",
        "Soutien-gorge de maintien ou bandage porté jour et nuit en général 4 à 6 semaines, selon les consignes du chirurgien.",
        "Semaine 1 : antalgiques, pansements, retrait des drains éventuels après quelques jours ; éviter de lever les bras au-dessus des épaules et de porter des charges.",
        "Reprise d'une activité de bureau souvent après 1 à 2 semaines, plus tard pour un travail physique ou après un lifting associé.",
        "Semaines 3 à 6 : reprise progressive des activités ; sport sollicitant les pectoraux et les bras après 6 semaines en général, avec l'accord du chirurgien.",
        "Après un retrait sans remplacement, la peau se rétracte en partie pendant plusieurs mois : l'aspect se stabilise en général entre 3 et 6 mois, parfois davantage.",
        "Résultat d'un changement d'implants apprécié après 3 à 6 mois ; cicatrices qui continuent d'évoluer pendant 12 à 18 mois.",
        "Suivi clinique régulier et imagerie si de nouveaux implants sont posés, tant qu'ils restent en place.",
      ],
      alternatives: [
        "Surveillance sans intervention : légitime si l'implant est intact, sans coque gênante, sans signe d'alerte et sans recommandation sanitaire de retrait.",
        "Retrait sans remplacement, avec ou sans capsulectomie, en acceptant un changement d'aspect des seins.",
        "Retrait associé à un lifting des seins, dans le même temps ou dans un second temps.",
        "Retrait associé à un lipofilling pour restaurer une partie du volume, souvent en plusieurs séances.",
        "Remplacement par de nouveaux implants, éventuellement d'un autre type, d'un autre volume ou placés dans une autre loge.",
      ],
      faq: [
        {
          question: "Faut-il changer ses implants tous les 10 ans ?",
          answer:
            "Pas systématiquement. Les implants ne sont pas éternels et le risque de rupture augmente avec le temps, mais un implant intact et sans complication n'a pas à être changé à une date fixe. C'est le suivi régulier, clinique et par imagerie, qui permet de décider. Une alerte sanitaire concernant votre modèle d'implant peut modifier cette recommandation.",
        },
        {
          question: "Comment savoir si mon implant est rompu ?",
          answer:
            "Une rupture passe souvent inaperçue, surtout avec les implants en gel de silicone cohésif. Elle peut se manifester par un changement de forme, un durcissement, une douleur ou une boule. Le diagnostic repose sur l'échographie et, si besoin, l'IRM. Un implant rempli de sérum physiologique qui se rompt se dégonfle en général rapidement et visiblement.",
        },
        {
          question: "Faut-il retirer la capsule (capsulectomie) ?",
          answer:
            "Pas toujours. La capsulectomie complète est indiquée en cas de LAGC-AIM, et souvent discutée en cas de coque, de capsule épaissie ou calcifiée, ou de rupture d'un implant en silicone. Elle augmente la durée de l'intervention et certains risques (saignement, rarement lésion de la plèvre). Le chirurgien doit vous expliquer pourquoi il la propose ou non dans votre cas.",
        },
        {
          question: "Faut-il retirer des implants texturés par précaution à cause du LAGC-AIM ?",
          answer:
            "En l'absence de symptôme, les autorités sanitaires françaises ne recommandent pas de retirer les implants à titre préventif, y compris texturés, mais insistent sur un suivi régulier. Un gonflement du sein, un épanchement, une masse ou une modification de la peau doivent faire consulter. La décision de retrait se discute avec le chirurgien.",
        },
        {
          question: "Le retrait des implants fera-t-il disparaître mes symptômes ?",
          answer:
            "Personne ne peut le garantir. Certaines personnes décrivent une amélioration après le retrait, d'autres non, et aucun lien de causalité entre les implants et ces symptômes généraux n'est établi à ce jour. Un bilan médical avec votre médecin traitant est utile pour rechercher d'autres causes. Le souhait de retrait reste légitime en soi.",
        },
        {
          question: "À quoi ressembleront mes seins après le retrait ?",
          answer:
            "Ils seront plus petits, souvent plus relâchés ou aplatis, parfois plus petits qu'avant la pose, avec un risque de plis ou d'asymétrie. Le résultat dépend du volume des implants, de leur ancienneté, de vos tissus et de votre peau. Un lifting ou un lipofilling peuvent être associés ou proposés plus tard.",
        },
        {
          question: "Où trouver les informations sur mes implants ?",
          answer:
            "Sur la carte d'implant et le document de traçabilité remis après la pose, qui indiquent le fabricant, le modèle, le volume et le numéro de lot. Si vous ne les avez plus, l'établissement où vous avez été opérée doit pouvoir les retrouver. Ces informations sont essentielles pour préparer la réintervention.",
        },
        {
          question: "Est-ce pris en charge par l'Assurance maladie ?",
          answer:
            "Le retrait d'implants pour une raison médicale (rupture, coque importante, LAGC-AIM, alerte sanitaire) peut être pris en charge, même si la pose initiale était esthétique, selon les conditions en vigueur. Le remplacement par de nouveaux implants à visée esthétique reste en général à votre charge. Faites préciser la répartition sur le devis.",
        },
        {
          question: "Quel chirurgien consulter ?",
          answer:
            "Un chirurgien qualifié en chirurgie plastique, reconstructrice et esthétique, opérant dans un établissement autorisé par l'ARS, et habitué aux réinterventions mammaires. Vous pouvez vérifier son inscription sur l'Annuaire santé. Il est souvent utile d'apporter les comptes rendus de la première intervention.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risques ──
      {
        interventionId: "breast-implant-revision",
        kind: "risks",
        locale: "fr",
        title: "Changement ou retrait d'implants mammaires : les risques",
        summary:
          "Hématome, sérome, infection, aspect des seins après retrait, récidive de coque, capsulectomie : les risques d'une réintervention sur implants.",
        answer:
          "Une réintervention sur des implants est une vraie chirurgie, souvent plus complexe qu'une première pose. Douleurs et ecchymoses sont attendues ; hématome, sérome ou infection sont peu fréquents. Après un retrait, les seins peuvent être relâchés ou asymétriques. Après un changement, une nouvelle coque ou une nouvelle intervention restent possibles. La capsulectomie complète ajoute des risques propres.",
        sections: [
          {
            heading: "Les suites fréquentes et attendues",
            paragraphs: ["Ces manifestations diminuent progressivement en quelques jours à quelques semaines."],
            bullets: [
              "Douleurs et tiraillements de la poitrine, plus marqués si l'implant était placé derrière le muscle ou si la capsule est retirée.",
              "Ecchymoses et gonflement des seins.",
              "Écoulement par les drains lorsqu'ils sont posés.",
              "Engourdissement ou hypersensibilité de la peau et des mamelons, le plus souvent transitoires.",
              "Gêne pour lever les bras pendant quelques jours.",
            ],
          },
          {
            heading: "Les complications moins fréquentes",
            paragraphs: [
              "Leur fréquence dépend du geste réalisé (simple changement, capsulectomie, lifting associé), de l'état des tissus et de votre santé.",
            ],
            bullets: [
              "Hématome, qui peut imposer une reprise au bloc dans les premières heures ou les premiers jours.",
              "Sérome, plus probable quand un espace important est laissé après le retrait de l'implant et de la capsule.",
              "Infection, parfois avec retrait temporaire d'un nouvel implant.",
              "Récidive de coque, rupture ou déplacement d'un nouvel implant au fil des années.",
              "Cicatrices élargies, épaissies ou pigmentées, surtout en cas de lifting associé.",
              "Retard de cicatrisation, plus fréquent chez les fumeuses.",
            ],
          },
          {
            heading: "L'aspect des seins après un retrait",
            paragraphs: [
              "Le retrait sans remplacement laisse des seins plus petits. Selon le volume et l'ancienneté des implants, la peau peut rester relâchée, la glande aplatie, avec des plis, une ptose (sein qui tombe) ou une asymétrie. Les tissus ont pu s'amincir sous la pression de l'implant : le volume est parfois inférieur à celui d'avant la pose.",
              "La peau se rétracte en partie pendant plusieurs mois. Un lifting ou un lipofilling peuvent être réalisés dans le même temps ou plus tard ; ils ajoutent des cicatrices, des risques propres et, pour le lipofilling, souvent plusieurs séances. Demandez à voir des explications illustrées et à discuter du scénario le plus probable dans votre cas, sans promesse.",
            ],
          },
          {
            heading: "Les risques propres à la capsulectomie",
            paragraphs: [
              "Retirer toute la capsule allonge l'intervention et augmente le risque de saignement et de sérome. Lorsque la capsule adhère aux côtes, notamment pour un implant placé derrière le muscle, son retrait peut léser la plèvre et provoquer un pneumothorax (air autour du poumon), complication rare. Une capsule très fine peut être difficile à retirer complètement.",
              "En cas de LAGC-AIM, la capsulectomie complète, idéalement en monobloc avec l'implant, fait partie du traitement. Dans les autres situations, son intérêt doit être mis en balance avec ses risques.",
            ],
          },
          {
            heading: "Les complications rares mais graves",
            paragraphs: [
              "La thrombose veineuse profonde (caillot dans une veine de la jambe) peut se compliquer d'embolie pulmonaire. Une infection sévère reste exceptionnelle. Les risques de l'anesthésie générale sont évalués lors de la consultation d'anesthésie.",
            ],
          },
          {
            heading: "Quand appeler sans attendre",
            paragraphs: [
              "Contactez rapidement le chirurgien ou l'équipe qui vous a opérée en cas de signe inhabituel. En cas d'essoufflement brutal, de douleur dans la poitrine ou de malaise, appelez le 15 (SAMU) ou le 112.",
            ],
            bullets: [
              "Sein qui gonfle rapidement, devient tendu, très douloureux ou violacé, surtout d'un seul côté.",
              "Fièvre, rougeur qui s'étend, écoulement purulent ou mauvaise odeur de la cicatrice.",
              "Essoufflement, douleur thoracique, difficulté à respirer.",
              "Mollet douloureux, chaud ou gonflé d'un seul côté.",
              "Plus tard : gonflement du sein, épanchement, masse ou ganglion dans l'aisselle, même des années après.",
            ],
          },
        ],
        sources: [ANSM, INCA, SOFCPRE, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Prix ──
      {
        interventionId: "breast-implant-revision",
        kind: "cost",
        locale: "fr",
        title: "Prix d'un changement ou d'un retrait d'implants mammaires",
        summary:
          "Devis d'un changement ou retrait d'implants : postes, ce qui fait varier le prix, prise en charge du retrait pour raison médicale, garanties.",
        answer:
          "Le coût dépend du geste (simple retrait, changement, capsulectomie, lifting ou lipofilling associés), des implants choisis, de l'anesthésie et de l'établissement. Nous n'indiquons pas de fourchette de prix : seul un devis détaillé remis après consultation fixe le montant. Un retrait pour raison médicale peut être pris en charge par l'Assurance maladie ; le remplacement esthétique reste en général à votre charge.",
        sections: [
          {
            heading: "Ce que contient un devis",
            paragraphs: [
              "En France, un devis détaillé et daté doit être remis avant toute intervention de chirurgie esthétique. Vérifiez qu'il précise les postes suivants, ou ceux qui n'y figurent pas.",
            ],
            bullets: [
              "Honoraires du chirurgien, avec la description des gestes (retrait, capsulectomie, nouveaux implants, lifting, lipofilling).",
              "Honoraires de l'anesthésiste.",
              "Frais de l'établissement : bloc opératoire, ambulatoire ou nuit d'hospitalisation.",
              "Prix des nouveaux implants, avec leur marque et leur modèle.",
              "Examen de la capsule au laboratoire (anatomopathologie), soutien-gorge de maintien, pansements, médicaments.",
              "Imagerie préopératoire et consultations de suivi.",
            ],
          },
          {
            heading: "Ce qui fait varier le prix",
            paragraphs: [
              "Le type de geste pèse le plus : une capsulectomie complète, un lifting ou un lipofilling allongent l'intervention et peuvent imposer une nuit d'hospitalisation. Le type et le modèle des implants, la nécessité de drains, l'imagerie préalable et la complexité liée à des interventions antérieures modifient aussi le devis.",
              "Un prix bas ne renseigne pas sur la qualité, et un geste plus étendu n'est pas toujours plus adapté. Demandez pourquoi chaque geste est proposé.",
            ],
          },
          {
            heading: "Quand l'Assurance maladie peut intervenir",
            paragraphs: [
              "Le retrait d'implants justifié par une raison médicale (rupture, coque importante, infection, LAGC-AIM, recommandation sanitaire comme pour les implants PIP) peut être pris en charge, même si la pose initiale était esthétique, selon les conditions en vigueur et parfois après accord préalable. Des dépassements d'honoraires restent possibles selon le secteur du chirurgien.",
              "La pose de nouveaux implants à visée esthétique et un éventuel lifting esthétique restent en général à votre charge. Après une reconstruction mammaire liée à un cancer, les règles de prise en charge sont différentes. Demandez un devis qui distingue clairement la partie prise en charge et la partie esthétique.",
            ],
          },
          {
            heading: "Garanties des fabricants et règles françaises",
            paragraphs: [
              "Certains fabricants prévoient des programmes de garantie couvrant tout ou partie du remplacement d'un implant rompu, voire certains frais, pendant une durée et selon des conditions variables. Retrouvez votre carte d'implant et demandez à votre chirurgien de vérifier ce qui s'applique.",
              "Le Code de la santé publique (article L6322-2) impose un délai minimal de 15 jours entre la remise du devis et une intervention esthétique, sans paiement exigé avant hors consultation. Les actes à visée purement esthétique sont soumis à la TVA. L'intervention doit avoir lieu dans un établissement autorisé par l'ARS, après une consultation d'anesthésie.",
            ],
          },
          {
            heading: "Le coût des complications et des réinterventions",
            paragraphs: [
              "Une reprise pour hématome, la prise en charge d'une infection ou une nouvelle intervention pour coque peuvent entraîner des frais, un arrêt de travail plus long ou des déplacements. Renseignez-vous sur ce qui serait facturé et sur l'existence d'une assurance couvrant les complications.",
              "Méfiez-vous des pressions à décider vite, des acomptes demandés avant la fin du délai légal et des devis qui ne détaillent pas les gestes prévus.",
            ],
          },
        ],
        sources: [LEGIFRANCE_L6322_2, AMELI, ANSM, ANNUAIRE_SANTE],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Convalescence ──
      {
        interventionId: "breast-implant-revision",
        kind: "recovery",
        locale: "fr",
        title: "Convalescence après un changement ou un retrait d'implants",
        summary:
          "Après un changement ou retrait d'implants : premiers jours, drains, soutien-gorge, reprise du travail et du sport, évolution des seins, suivi.",
        answer:
          "Les premiers jours sont marqués par des tiraillements et parfois des drains. Un soutien-gorge de maintien est porté en général 4 à 6 semaines, et une activité de bureau reprend souvent après 1 à 2 semaines. Après un retrait, l'aspect des seins évolue pendant plusieurs mois. Les consignes de votre chirurgien priment sur ces repères.",
        sections: [
          {
            heading: "Les premiers jours",
            paragraphs: [
              "La sortie a lieu le jour même ou le lendemain. La poitrine est sensible et gonflée ; les douleurs sont en général contrôlées par les antalgiques prescrits. Si des drains ont été posés, ils sont retirés après quelques jours, quand l'écoulement diminue.",
            ],
            bullets: [
              "Se lever et marcher dès que possible pour limiter le risque de thrombose.",
              "Éviter de lever les bras au-dessus des épaules et de porter des charges.",
              "Dormir sur le dos, buste légèrement surélevé.",
              "Prévoir une personne pour le retour à domicile et la première nuit.",
            ],
          },
          {
            heading: "Semaine par semaine",
            paragraphs: [],
            bullets: [
              "Semaine 1 : repos relatif, pansements, douche selon les consignes, premier contrôle.",
              "Semaine 2 : reprise d'une activité de bureau souvent possible ; conduite quand les mouvements ne sont plus gênés et sans antalgiques sédatifs.",
              "Semaines 3 à 4 : ecchymoses estompées, marche rapide et activités douces.",
              "Semaines 6 et au-delà : sport, natation et port de charges avec l'accord du chirurgien ; soutien-gorge à armatures selon ses consignes.",
              "Mois 3 à 6 : stabilisation progressive de l'aspect des seins.",
            ],
          },
          {
            heading: "Après un retrait : l'évolution des seins",
            paragraphs: [
              "Juste après un retrait, les seins peuvent paraître vides, aplatis ou plissés. La peau et la glande se réadaptent en partie pendant 3 à 6 mois, parfois davantage. Il est souvent conseillé d'attendre cette période avant de décider d'un lifting ou d'un lipofilling en second temps.",
              "Ce changement d'image corporelle peut être difficile à vivre, même quand le retrait était souhaité. En parler avec le chirurgien, votre médecin ou un proche peut aider.",
            ],
          },
          {
            heading: "Le résultat de la capsule et le suivi",
            paragraphs: [
              "La capsule retirée est en général analysée au laboratoire (anatomopathologie), surtout en cas de sérome, de masse ou de suspicion de LAGC-AIM. Le résultat vous est communiqué lors d'une consultation de suivi.",
              "Si de nouveaux implants ont été posés, conservez la nouvelle carte d'implant et poursuivez un suivi clinique régulier, avec imagerie selon les recommandations, tant qu'ils restent en place. Signalez aux radiologues que vous portez des implants lors des mammographies.",
            ],
          },
          {
            heading: "Signes qui doivent faire appeler",
            paragraphs: [
              "Contactez le chirurgien en cas de sein qui gonfle rapidement ou devient violacé, de fièvre, de rougeur qui s'étend ou d'écoulement de la cicatrice. En cas d'essoufflement, de douleur thoracique ou de malaise, appelez le 15 ou le 112.",
            ],
          },
        ],
        sources: [SOFCPRE, ANSM, SFAR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Avant de se décider ──
      {
        interventionId: "breast-implant-revision",
        kind: "decision",
        locale: "fr",
        title: "Changer ou retirer ses implants : avant de se décider",
        summary:
          "Changer ou retirer ses implants : raisons, imagerie, carte d'implant, registre, symptômes rapportés, questions au chirurgien, délai de 15 jours.",
        answer:
          "La décision dépend de la raison (coque, rupture, alerte sanitaire, LAGC-AIM, souhait personnel), de l'état des implants à l'imagerie, de vos tissus et de vos attentes. Sauf urgence médicale, prenez le temps : en France, au moins 15 jours doivent séparer le devis d'une intervention esthétique, et un second avis est toujours légitime.",
        sections: [
          {
            heading: "Comprendre la raison de l'intervention",
            paragraphs: [
              "Une coque gênante, une rupture confirmée ou un implant concerné par une recommandation des autorités sont des raisons médicales. Un changement de volume ou le souhait de ne plus avoir d'implants sont des choix personnels tout aussi légitimes, mais qui ne présentent pas d'urgence.",
              "Un épanchement ou un gonflement du sein survenant longtemps après la pose, une masse ou un ganglion doivent être explorés rapidement (échographie, ponction avec analyse du liquide), car ils peuvent révéler un LAGC-AIM, rare. Dans ce cas, la prise en charge relève d'une équipe spécialisée et n'est pas un choix esthétique.",
            ],
          },
          {
            heading: "Imagerie, carte d'implant et registre",
            paragraphs: [
              "Avant de décider, un bilan d'imagerie est en général réalisé : échographie, parfois mammographie et IRM, qui reste l'examen de référence pour rechercher une rupture d'implant en silicone. Le chirurgien doit connaître le type d'implant en place (fabricant, modèle, surface lisse ou texturée, contenu, volume, loge).",
              "Retrouvez votre carte d'implant et le document de traçabilité remis après la pose. En France, la traçabilité des implants mammaires est obligatoire et un registre national des implants mammaires est mis en place sous l'égide de l'ANSM afin de mieux suivre ces dispositifs et de pouvoir contacter les patientes en cas d'alerte. Demandez si vos nouveaux implants y seront enregistrés. Tout incident peut être déclaré à l'ANSM.",
            ],
          },
          {
            heading: "Symptômes généraux et « breast implant illness »",
            paragraphs: [
              "Fatigue, douleurs articulaires ou musculaires, troubles de la concentration ou du sommeil : certaines personnes attribuent ces symptômes à leurs implants. Ils sont réels pour celles qui les vivent et font l'objet d'études, mais aucun lien de causalité avec les implants n'est établi à ce jour. Ils peuvent avoir d'autres causes qu'il est important de rechercher avec votre médecin traitant.",
              "Le retrait peut être choisi dans ce contexte, en sachant que l'amélioration n'est pas prévisible. Un chirurgien sérieux vous informe de ces incertitudes sans minimiser vos symptômes ni promettre leur disparition.",
            ],
          },
          {
            heading: "Vos attentes et votre motivation",
            paragraphs: [
              "Imaginez concrètement l'aspect probable de vos seins après un retrait, et demandez si un lifting ou un lipofilling seraient nécessaires pour vous convenir. Après un changement, gardez à l'esprit qu'un nouvel implant demandera lui aussi un suivi et sans doute une nouvelle intervention un jour.",
              "Certaines personnes souffrent d'une préoccupation envahissante pour un défaut que les autres remarquent à peine : c'est le trouble dysmorphique corporel, ou dysmorphophobie. La chirurgie ne le soulage pas et peut aggraver la détresse ; si vous vous reconnaissez dans cette description, parlez-en à votre médecin traitant. En cas d'idées suicidaires, le 3114 répond jour et nuit.",
            ],
          },
          {
            heading: "Questions à poser en consultation",
            paragraphs: [],
            bullets: [
              "Êtes-vous qualifié en chirurgie plastique, reconstructrice et esthétique, et pratiquez-vous souvent des réinterventions sur implants ?",
              "Quel est l'état de mes implants à l'imagerie, et quelle raison justifie l'intervention ?",
              "Proposez-vous une capsulectomie complète, partielle ou aucune, et pourquoi ? Quels risques supplémentaires ?",
              "À quoi ressembleront probablement mes seins après un retrait ? Un lifting ou un lipofilling seront-ils nécessaires, et quand ?",
              "La capsule sera-t-elle analysée au laboratoire ?",
              "Si je change d'implants, quel type et pourquoi ? Seront-ils enregistrés et recevrai-je une carte d'implant ?",
              "Quelle partie peut être prise en charge, et que se passe-t-il en cas de complication ?",
            ],
          },
          {
            heading: "Le délai de réflexion et le second avis",
            paragraphs: [
              "Le Code de la santé publique impose un délai minimal de 15 jours entre la remise du devis détaillé et une intervention esthétique, et aucun paiement autre que la consultation ne peut être exigé avant. Ce délai est un minimum. En cas de LAGC-AIM ou de complication aiguë, la prise en charge médicale suit d'autres règles. Demander un second avis est toujours légitime.",
            ],
          },
        ],
        sources: [
          ANSM,
          LEGIFRANCE_L6322_2,
          HAS,
          ANNUAIRE_SANTE,
          { label: "3114 — numéro national de prévention du suicide", url: "https://3114.fr" },
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Alternatives ──
      {
        interventionId: "breast-implant-revision",
        kind: "alternatives",
        locale: "fr",
        title: "Changer ou retirer ses implants : les options",
        summary:
          "Surveillance, retrait seul, retrait avec lifting ou lipofilling, nouveaux implants : les options face à des implants mammaires, limites et risques.",
        answer:
          "Selon la situation, les options sont la surveillance d'un implant intact, le retrait seul avec ou sans capsulectomie, le retrait associé à un lifting ou à un lipofilling, ou le remplacement par de nouveaux implants. En cas de LAGC-AIM, le retrait de l'implant et de la capsule fait partie du traitement et n'est pas une option parmi d'autres.",
        sections: [
          {
            heading: "Surveiller sans opérer",
            paragraphs: [
              "Si l'implant est intact à l'imagerie, sans coque gênante, sans symptôme et sans recommandation sanitaire de retrait, la surveillance est une option raisonnable. Elle repose sur un examen clinique régulier, l'autopalpation et une imagerie selon les recommandations ou en cas de changement. Un implant rompu en silicone est en général retiré, mais le moment de l'intervention se discute.",
            ],
          },
          {
            heading: "Retrait seul",
            paragraphs: [
              "Le retrait sans remplacement supprime les risques liés à l'implant à l'avenir (coque, rupture, nouvelle intervention pour l'implant). Il laisse des seins plus petits, souvent relâchés. Il peut se faire avec ou sans capsulectomie selon la situation. C'est l'option la plus simple sur le plan chirurgical lorsque les tissus sont de bonne qualité et que le volume des implants était modeste.",
            ],
          },
          {
            heading: "Retrait avec lifting ou lipofilling",
            paragraphs: [
              "Un lifting des seins (mastopexie) remonte la glande et retire l'excédent de peau, au prix de cicatrices autour de l'aréole et parfois verticales ou dans le sillon. Il peut être réalisé dans le même temps ou quelques mois après le retrait, ce qui permet d'évaluer la rétraction de la peau.",
              "Le lipofilling prélève de la graisse par liposuccion (ventre, cuisses) pour la réinjecter dans les seins. Il restaure une partie du volume, mais une partie de la graisse se résorbe et plusieurs séances sont souvent nécessaires. Il suppose des réserves de graisse suffisantes et un suivi par imagerie du sein.",
            ],
          },
          {
            heading: "Nouveaux implants",
            paragraphs: [
              "Le remplacement permet de conserver ou de modifier le volume. Le chirurgien peut proposer un autre type d'implant, un autre volume ou une autre loge (devant ou derrière le muscle), parfois un renfort par une matrice. Le nouvel implant expose aux mêmes risques à long terme (coque, rupture, LAGC-AIM rare) et demandera un suivi.",
            ],
          },
          {
            heading: "Prendre le temps",
            paragraphs: [
              "Hors urgence médicale, rien n'oblige à décider vite. Le choix entre ces options peut évoluer, et il est possible de procéder en deux temps : retrait d'abord, puis réévaluation quelques mois plus tard.",
            ],
          },
        ],
        sources: [ANSM, SOFCPRE, HAS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "capsulectomy",
        locale: "fr",
        slug: "capsulectomie",
        term: "Capsulectomie",
        aliases: [
          "capsulectomies",
          "capsulectomie totale",
          "capsulectomie complète",
          "capsulectomie partielle",
          "capsulectomie en bloc",
          "capsulectomie en monobloc",
          "capsulotomie",
        ],
        definition:
          "La capsulectomie est le retrait chirurgical de la capsule, l'enveloppe de tissu cicatriciel que l'organisme forme autour d'un implant mammaire. Elle peut être complète ou partielle et accompagne souvent un retrait ou un changement d'implant.",
        detail: [
          "La capsule se forme autour de tout implant. Elle est en général fine et souple ; elle peut s'épaissir, se rétracter (coque) ou se calcifier. La capsulotomie consiste seulement à l'inciser pour libérer l'implant, sans la retirer.",
          "La capsulectomie complète, idéalement en monobloc avec l'implant, est indiquée en cas de lymphome anaplasique à grandes cellules associé aux implants (LAGC-AIM). Elle est souvent discutée en cas de coque, de capsule épaissie ou calcifiée ou de rupture d'un implant en silicone.",
          "Elle allonge l'intervention et augmente le risque de saignement et de sérome. Lorsque la capsule adhère aux côtes, son retrait peut, rarement, léser la plèvre et provoquer un pneumothorax. La capsule retirée est en général analysée au laboratoire.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "implant-rupture",
        locale: "fr",
        slug: "rupture-d-implant-mammaire",
        term: "Rupture d'implant mammaire",
        aliases: [
          "rupture d'implant",
          "ruptures d'implant",
          "rupture de prothèse mammaire",
          "rupture intracapsulaire",
          "rupture extracapsulaire",
          "implant rompu",
          "implants rompus",
          "suintement",
        ],
        definition:
          "La rupture d'implant mammaire est une déchirure ou une fissure de l'enveloppe de l'implant, qui laisse s'échapper son contenu. Elle devient plus probable avec l'ancienneté de l'implant et passe souvent inaperçue.",
        detail: [
          "Avec un implant en gel de silicone, le gel reste le plus souvent contenu dans la capsule (rupture intracapsulaire) ; il peut parfois la traverser (rupture extracapsulaire) et migrer vers les tissus voisins ou les ganglions de l'aisselle. Avec un implant rempli de sérum physiologique, le liquide est résorbé par l'organisme et le sein se dégonfle.",
          "Les signes possibles sont un changement de forme ou de volume, un durcissement, une douleur ou une boule, mais beaucoup de ruptures sont silencieuses. Le diagnostic repose sur l'échographie et l'IRM, d'où l'intérêt d'un suivi régulier.",
          "Un implant en silicone rompu est en général retiré ou remplacé, souvent avec tout ou partie de la capsule. Certains fabricants prévoient des garanties : conservez votre carte d'implant. Une rupture peut être déclarée à l'ANSM.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },

  // ════════════════════════════════════ UNITED KINGDOM ════════════════════════════════════
  "en-gb": {
    intervention: {
      id: "breast-implant-revision",
      locale: "en-gb",
      slug: "breast-implant-removal-and-revision",
      category: "breast",
      title: "Breast implant removal and revision",
      summary:
        "Replacing or removing breast implants: capsular contracture, rupture, BIA-ALCL, choosing removal, capsulectomy, how breasts look after, follow-up.",
      description: [
        "Surgery on existing breast implants can mean replacing them with new implants (revision or exchange) or removing them without replacement (explant surgery). It may include surgery on the capsule, the layer of scar tissue the body naturally forms around any implant: releasing it (capsulotomy), removing part of it, or removing all of it (capsulectomy). It can also be combined with a breast uplift (mastopexy) or fat transfer.",
        "People have this surgery for many reasons: hardening and distortion of the breast from capsular contracture, a ruptured or leaking implant, an implant that has moved or rotated, visible rippling, changes in the breast over time, after pregnancy or weight loss, suspected or confirmed breast implant-associated anaplastic large cell lymphoma (BIA-ALCL), an implant affected by a safety alert, or simply wanting a different size or no longer wanting implants.",
        "Breast implants are not lifetime devices, and many people need one or more further operations over their lives. However, the MHRA and NHS advise that an implant that is not causing problems and is not subject to a safety alert does not need to be replaced routinely at a set time. Check-ups and imaging when needed help identify a rupture or other problem.",
        "Some people link a range of general symptoms, such as fatigue, joint pain or difficulty concentrating, to their implants, often described as 'breast implant illness'. These reported symptoms are taken seriously and are being studied, but a causal link with implants has not been established, and it is not possible to predict whether removal will help. They deserve a full medical assessment so that other causes are not missed.",
        "After removal without replacement, how the breasts look depends on the size and age of the implants, the thickness of the breast tissue and how elastic the skin is. Breasts are smaller, sometimes smaller than before augmentation, and may look looser, flatter, creased or uneven. An uplift or fat transfer, at the same time or later, can be discussed. Revision is often more complex than first-time augmentation and needs an experienced surgeon and detailed information.",
      ],
      indications: [
        "Troublesome capsular contracture: a breast that is hard, misshapen or painful.",
        "Confirmed or suspected implant rupture, assessed with imaging.",
        "Suspected or confirmed BIA-ALCL, for example a late fluid collection around the implant or a lump: removing the implant and the whole capsule is part of treatment.",
        "An implant affected by a safety alert or regulator advice (for example PIP implants).",
        "An implant that has moved or rotated, visible or palpable rippling, asymmetry, or breast tissue that has dropped over the implant.",
        "Wanting a different size or type of implant, or no longer wanting implants.",
        "General symptoms that a person attributes to their implants, after a medical assessment and honest discussion of the uncertainties.",
      ],
      contraindications: [
        "Unrealistic expectations about how the breasts will look after removal, or about symptoms definitely resolving.",
        "A request driven by pressure from someone else, or excessive concern about a minor feature, which should be discussed with the surgeon.",
        "Active infection or a long-term condition that is not well controlled (diabetes, heart or lung disease), which means planned surgery should be postponed.",
        "Smoking or nicotine use, which increase the risk of wound-healing problems, especially with an uplift: stopping is advised.",
        "Pregnancy or breastfeeding, for elective cosmetic surgery (urgent medical problems are still treated).",
        "A history of blood clots or a bleeding disorder that has not been assessed.",
      ],
      risks: [
        {
          name: "Pain, bruising and swelling",
          detail:
            "Common and expected for days to weeks; more marked after a full capsulectomy or a combined uplift.",
        },
        {
          name: "Haematoma",
          detail:
            "Bleeding that collects in the implant pocket, uncommon, usually in the first hours or days. It may need a return to theatre. The risk is higher after capsulectomy, because the capsule is separated from the chest wall.",
        },
        {
          name: "Seroma",
          detail:
            "A collection of fluid in the space left by the implant or capsule. A drain is sometimes used and the fluid may need draining with a needle. A late seroma, appearing months or years after implants are placed, should always be investigated.",
        },
        {
          name: "Infection",
          detail:
            "Uncommon; treated with antibiotics and sometimes further surgery. Infection around a new implant may mean it has to be removed for a time.",
        },
        {
          name: "How the breasts look after removal",
          detail:
            "Loss of volume, looseness, a flattened or hollow look, skin creases and asymmetry. Breasts may look smaller than before the original augmentation, because the tissues thin over time. An uplift or fat transfer may be offered, with their own risks and scars.",
        },
        {
          name: "Recurrent contracture and further surgery",
          detail:
            "After implant exchange, capsular contracture can come back, and new implants can rupture or move in time. The chance of needing another operation is higher after revision surgery than after first-time augmentation.",
        },
        {
          name: "Changes in sensation and scarring",
          detail:
            "Reduced or altered sensation of the nipple and skin, usually temporary but sometimes permanent. Scars may stretch or thicken, especially if an uplift is added.",
        },
        {
          name: "Injury to the chest wall",
          detail:
            "Rare: when the capsule is stuck to the ribs, particularly with implants under the muscle, removing it completely can injure the lining of the lung (pleura) and cause a pneumothorax (collapsed lung), which needs specific treatment.",
        },
        {
          name: "Residual silicone",
          detail:
            "After a silicone gel implant ruptures, some gel may remain in the tissues or in lymph nodes in the armpit despite careful cleaning. It can form small lumps (siliconomas), which are usually harmless.",
        },
        {
          name: "Blood clots and anaesthetic risks",
          detail:
            "Deep vein thrombosis and pulmonary embolism are rare but serious, and more likely with longer or combined procedures. Anaesthetic risks are discussed with the anaesthetist at your pre-operative assessment.",
        },
      ],
      procedure: {
        anaesthesia: "General anaesthesia in almost all cases.",
        duration:
          "Around 1 to 3 hours, depending on whether it is a simple exchange, a full capsulectomy, or combined with an uplift or fat transfer.",
        hospitalStay:
          "Often a day case; an overnight stay may be advised after a full capsulectomy, a combined uplift or if drains are used.",
      },
      recovery: [
        "Day 1: a tight, sore chest, possibly drains; you are encouraged to get up the same evening or next day.",
        "A supportive bra or bandage is usually worn day and night for 4 to 6 weeks, as your surgeon advises.",
        "Week 1: painkillers, dressings, drains removed after a few days if used; avoid lifting your arms above your shoulders or carrying heavy loads.",
        "Return to desk-based work often after 1 to 2 weeks; later for physical jobs or after a combined uplift.",
        "Weeks 3 to 6: gradually build up activity; exercise using the chest and arms usually after 6 weeks, once your surgeon agrees.",
        "After removal without replacement, the skin partly contracts over several months: the breasts usually settle between 3 and 6 months, sometimes longer.",
        "After implant exchange, the result is assessed after 3 to 6 months; scars continue to mature for 12 to 18 months.",
        "Regular check-ups, with imaging when needed, for as long as new implants are in place.",
      ],
      alternatives: [
        "Monitoring without surgery: reasonable if the implant is intact, without troublesome contracture, warning signs or safety advice to remove it.",
        "Removal without replacement, with or without capsulectomy, accepting a change in breast appearance.",
        "Removal combined with a breast uplift, at the same time or later.",
        "Removal combined with fat transfer to restore some volume, often over several sessions.",
        "Replacement with new implants, possibly of a different type or size, or placed in a different pocket.",
      ],
      faq: [
        {
          question: "Do breast implants need replacing every 10 years?",
          answer:
            "Not routinely. Implants do not last forever and the chance of rupture increases with time, but the MHRA and NHS advise that an implant without problems does not need to be replaced at a set point. Check-ups and imaging when there are symptoms guide the decision. A safety alert about your implant model may change this advice.",
        },
        {
          question: "How would I know if my implant has ruptured?",
          answer:
            "A rupture often causes no symptoms, especially with cohesive silicone gel implants. It may cause a change in shape, hardening, pain or a lump. Ultrasound and, if needed, MRI are used to diagnose it. A saline implant that ruptures usually deflates quickly and visibly.",
        },
        {
          question: "Does the capsule need to be removed?",
          answer:
            "Not always. A total capsulectomy is needed for BIA-ALCL and is often discussed for contracture, a thick or calcified capsule, or a ruptured silicone implant. It lengthens the operation and adds risks such as bleeding and, rarely, injury to the lining of the lung. Your surgeon should explain why they do or do not recommend it for you.",
        },
        {
          question: "Should textured implants be removed as a precaution because of BIA-ALCL?",
          answer:
            "The MHRA does not recommend removing implants that are not causing problems, including textured implants, but advises being aware of symptoms. Swelling of the breast, a fluid collection, a lump or skin changes, even years after surgery, should be checked by a doctor. Any decision to remove implants should be made with your surgeon.",
        },
        {
          question: "Will removing my implants make my symptoms go away?",
          answer:
            "No one can promise that. Some people report feeling better after removal and others do not, and a causal link between implants and these general symptoms has not been established. Seeing your GP to look for other causes is worthwhile. Wanting your implants removed is a legitimate choice in itself.",
        },
        {
          question: "What will my breasts look like after removal?",
          answer:
            "They will be smaller, often looser or flatter, sometimes smaller than before augmentation, and may have creases or be uneven. The result depends on the size and age of the implants and on your tissue and skin. An uplift or fat transfer can be combined or offered later.",
        },
        {
          question: "Where can I find details of my implants?",
          answer:
            "On the implant card or passport you were given, which records the manufacturer, model, size and batch number. If you no longer have it, the hospital or clinic where you had surgery should hold the details, and your implants may be on the Breast and Cosmetic Implant Registry. This information is essential for planning revision surgery.",
        },
        {
          question: "Is implant removal available on the NHS?",
          answer:
            "If you had cosmetic implants privately, the NHS may remove them when there is a clear medical need, for example rupture causing problems or suspected BIA-ALCL, according to local policy. The NHS does not usually replace cosmetic implants. Your GP can advise, and your original provider may have a duty of aftercare.",
        },
        {
          question: "Who should carry out my revision surgery?",
          answer:
            "A surgeon on the GMC Specialist Register in plastic surgery, with experience of revision breast surgery, working in a hospital or clinic registered with the Care Quality Commission in England (or the equivalent regulator elsewhere in the UK). Bring any operation notes and implant details from your first surgery.",
        },
      ],
      medicalReview: REVIEW,
      updatedAt: UPDATED_AT,
    },
    subpages: [
      // ── Risks ──
      {
        interventionId: "breast-implant-revision",
        kind: "risks",
        locale: "en-gb",
        title: "Breast implant removal and revision risks",
        summary:
          "Haematoma, seroma, infection, breast appearance after removal, recurrent contracture and capsulectomy: the risks of breast implant revision.",
        answer:
          "Implant revision or removal is real surgery and often more complex than first-time augmentation. Pain and bruising are expected; haematoma, seroma or infection are uncommon. After removal, breasts may look loose or uneven. After exchange, contracture or further surgery remain possible. A full capsulectomy adds its own risks.",
        sections: [
          {
            heading: "Common and expected effects",
            paragraphs: ["These settle gradually over days to weeks."],
            bullets: [
              "A sore, tight chest, more marked if the implant was under the muscle or the capsule is removed.",
              "Bruising and swelling of the breasts.",
              "Fluid in the drains if they are used.",
              "Numbness or increased sensitivity of the skin and nipples, usually temporary.",
              "Difficulty raising your arms for a few days.",
            ],
          },
          {
            heading: "Less common complications",
            paragraphs: [
              "How likely these are depends on what is done (simple exchange, capsulectomy, combined uplift), the condition of your tissues and your general health.",
            ],
            bullets: [
              "Haematoma, which may need a return to theatre in the first hours or days.",
              "Seroma, more likely when a large space is left after removing the implant and capsule.",
              "Infection, sometimes with temporary removal of a new implant.",
              "Recurrent contracture, rupture or movement of a new implant over the years.",
              "Stretched, raised or discoloured scars, especially with an uplift.",
              "Delayed wound healing, more common in people who smoke.",
            ],
          },
          {
            heading: "How the breasts look after removal",
            paragraphs: [
              "Removing implants without replacing them leaves smaller breasts. Depending on the size and age of the implants, the skin may stay loose and the breast tissue flattened, with creases, drooping (ptosis) or asymmetry. The tissues may have thinned under the pressure of the implant, so the breasts can be smaller than before augmentation.",
              "The skin partly contracts over several months. An uplift or fat transfer can be done at the same time or later; they add scars, their own risks and, with fat transfer, often several sessions. Ask your surgeon to discuss the most likely outcome in your case, without promises.",
            ],
          },
          {
            heading: "Risks specific to capsulectomy",
            paragraphs: [
              "Removing the whole capsule lengthens the operation and increases the risk of bleeding and seroma. When the capsule is stuck to the ribs, especially with implants under the muscle, removing it can injure the pleura and cause a pneumothorax, which is rare. A very thin capsule can be difficult to remove completely.",
              "For BIA-ALCL, total capsulectomy, ideally removing the implant and capsule in one piece (en bloc), is part of treatment. In other situations its benefits need to be weighed against its risks.",
            ],
          },
          {
            heading: "Rare but serious complications",
            paragraphs: [
              "Deep vein thrombosis, a clot in a leg vein, can travel to the lungs (pulmonary embolism). Severe infection is very rare. The risks of general anaesthesia are assessed before surgery by the anaesthetist.",
            ],
          },
          {
            heading: "When to seek help urgently",
            paragraphs: [
              "Contact your surgeon's team promptly if something does not feel right; if you cannot reach them, call NHS 111. Call 999 for sudden breathlessness, chest pain or collapse.",
            ],
            bullets: [
              "A breast that swells quickly, becomes tense, very painful or purple, especially on one side.",
              "Fever, spreading redness, pus or an unpleasant smell from the wound.",
              "Breathlessness, chest pain or difficulty breathing.",
              "A painful, warm or swollen calf on one side.",
              "Later on: swelling of the breast, a fluid collection, a lump or a swollen gland in the armpit, even years later.",
            ],
          },
        ],
        sources: [NHS, MHRA, BAPRAS, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Cost ──
      {
        interventionId: "breast-implant-revision",
        kind: "cost",
        locale: "en-gb",
        title: "Breast implant removal and revision cost",
        summary:
          "What a quote for implant removal or revision should include, what affects the price, NHS funding, manufacturer warranties and complications.",
        answer:
          "The cost depends on what is done (simple removal, exchange, capsulectomy, combined uplift or fat transfer), the implants chosen, the anaesthetic and the hospital. We do not give price ranges: only a written, itemised quote after a consultation with the operating surgeon tells you the actual cost. The NHS may remove implants for a clear medical reason but does not usually replace cosmetic implants.",
        sections: [
          {
            heading: "What a quote should include",
            paragraphs: ["Ask for a written quote that lists every item, or states clearly what is excluded."],
            bullets: [
              "The surgeon's fee, describing each step (removal, capsulectomy, new implants, uplift, fat transfer).",
              "The anaesthetist's fee, which may be billed separately.",
              "Hospital or clinic fees: theatre time, day case or overnight stay.",
              "The cost of new implants, with their manufacturer and model.",
              "Laboratory examination of the capsule (histology), supportive bra, dressings and medicines.",
              "Pre-operative imaging and follow-up appointments.",
            ],
          },
          {
            heading: "What affects the price",
            paragraphs: [
              "The extent of surgery matters most: a total capsulectomy, uplift or fat transfer lengthens the operation and may mean an overnight stay. The type of implant, the need for drains, pre-operative imaging and the complexity from previous operations also affect the quote.",
              "Price alone does not tell you about quality, and more extensive surgery is not always more suitable. Ask why each step is recommended.",
            ],
          },
          {
            heading: "NHS funding",
            paragraphs: [
              "If your implants were placed privately for cosmetic reasons, the NHS may remove them when there is a clear medical need, such as rupture causing problems, severe contracture, infection or suspected BIA-ALCL, according to local policy. The NHS does not usually replace cosmetic implants, and an uplift for cosmetic reasons is generally treated as a procedure of limited clinical value, considered only through an individual funding request in exceptional cases.",
              "Implants placed as part of NHS breast reconstruction after cancer follow different rules. Your GP can advise on referral.",
            ],
          },
          {
            heading: "Warranties and aftercare",
            paragraphs: [
              "Some implant manufacturers run warranty programmes that cover part or all of the cost of replacing a ruptured implant, and sometimes other costs, for a set period and under specific conditions. Find your implant card or passport and ask your surgeon to check what applies.",
              "Your original provider may also have aftercare obligations. Professional standards say you should not be pressured into booking; time-limited discounts or package deals are a warning sign. Check whether any deposit is refundable and be cautious about finance offered at the consultation.",
            ],
          },
          {
            heading: "The cost of complications and further surgery",
            paragraphs: [
              "A return to theatre for haematoma, treatment of an infection or another operation for contracture can lead to further costs, more time off work and travel. Ask what the quote covers and whether insurance for complications is included or available. If you had surgery abroad, revision at home may be harder to arrange and the NHS will only treat clear medical problems.",
            ],
          },
        ],
        sources: [NHS, GMC, CQC, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Recovery ──
      {
        interventionId: "breast-implant-revision",
        kind: "recovery",
        locale: "en-gb",
        title: "Recovery after breast implant removal or revision",
        summary:
          "Recovery after implant removal or revision: first days, drains, supportive bra, return to work and exercise, how breasts settle, follow-up.",
        answer:
          "The first days bring a tight, sore chest and sometimes drains. A supportive bra is usually worn for 4 to 6 weeks, and many people return to desk-based work after 1 to 2 weeks. After removal, the breasts continue to change for several months. Always follow your own surgeon's instructions.",
        sections: [
          {
            heading: "The first few days",
            paragraphs: [
              "Most people go home the same day or the next morning. The chest is tender and swollen; pain is usually controlled with the painkillers prescribed. If drains were used, they are removed after a few days once the fluid reduces.",
            ],
            bullets: [
              "Get up and walk as soon as you can to reduce the risk of blood clots.",
              "Avoid lifting your arms above your shoulders or carrying heavy loads.",
              "Sleep on your back, slightly propped up.",
              "Arrange for someone to take you home and stay with you the first night.",
            ],
          },
          {
            heading: "Week by week",
            paragraphs: [],
            bullets: [
              "Week 1: take it easy, dressings, showering as advised, first check-up.",
              "Week 2: desk-based work often possible; driving once you can move freely and are not taking sedating painkillers (check your insurer's conditions).",
              "Weeks 3 to 4: bruising fades; brisk walking and gentle activity.",
              "Week 6 onwards: exercise, swimming and lifting once your surgeon agrees; underwired bras as advised.",
              "Months 3 to 6: the breasts gradually settle.",
            ],
          },
          {
            heading: "After removal: how the breasts change",
            paragraphs: [
              "Straight after removal, the breasts may look empty, flat or creased. The skin and breast tissue partly adapt over 3 to 6 months, sometimes longer. Surgeons often suggest waiting for this before deciding on a later uplift or fat transfer.",
              "This change in body image can be hard, even when removal was your choice. Talking to your surgeon, your GP or someone close to you can help.",
            ],
          },
          {
            heading: "Capsule results and follow-up",
            paragraphs: [
              "The removed capsule is usually sent to the laboratory for examination (histology), particularly if there was fluid, a lump or suspected BIA-ALCL. Results are discussed at a follow-up appointment.",
              "If new implants were placed, keep the new implant card, ask for them to be recorded on the Breast and Cosmetic Implant Registry and continue check-ups for as long as they are in place. Tell the radiographer you have implants when you attend NHS breast screening.",
            ],
          },
          {
            heading: "Warning signs",
            paragraphs: [
              "Contact your surgeon's team if a breast swells quickly or turns purple, or if you develop a fever, spreading redness or discharge from the wound; out of hours, call NHS 111. Call 999 for breathlessness, chest pain or collapse.",
            ],
          },
        ],
        sources: [NHS, BAPRAS, BCIR],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Before you decide ──
      {
        interventionId: "breast-implant-revision",
        kind: "decision",
        locale: "en-gb",
        title: "Breast implant removal or revision: before you decide",
        summary:
          "Deciding on implant removal or revision: reasons, imaging, implant card, the registry, reported symptoms, questions to ask, two-week reflection.",
        answer:
          "The decision depends on the reason (contracture, rupture, safety alert, BIA-ALCL, personal choice), what imaging shows, your tissues and your expectations. Unless there is an urgent medical problem, take your time: professional guidance recommends at least two weeks between consultation and agreeing to cosmetic surgery, and a second opinion is always reasonable.",
        sections: [
          {
            heading: "Understanding the reason for surgery",
            paragraphs: [
              "Troublesome contracture, a confirmed rupture or an implant covered by regulator advice are medical reasons. Wanting a different size or no longer wanting implants are equally legitimate personal choices, but they are not urgent.",
              "Swelling or a fluid collection appearing long after surgery, a lump or a swollen gland should be checked promptly (ultrasound, and testing a sample of the fluid), because they can rarely be caused by BIA-ALCL. In that case, care is led by a specialist team and is not a cosmetic decision.",
            ],
          },
          {
            heading: "Imaging, your implant card and the registry",
            paragraphs: [
              "Before deciding, imaging is usually arranged: ultrasound, sometimes mammography, and MRI, which is the most accurate test for rupture of a silicone implant. Your surgeon needs to know what implants you have (manufacturer, model, smooth or textured surface, filling, size, and whether they are above or below the muscle).",
              "Find your implant card or passport. Since 2016, implants placed in England have been recorded on the Breast and Cosmetic Implant Registry, with your consent, so that you can be traced if a safety issue arises; ask for any new implants to be recorded. Problems with implants can be reported to the MHRA through the Yellow Card scheme.",
            ],
          },
          {
            heading: "General symptoms and 'breast implant illness'",
            paragraphs: [
              "Fatigue, joint or muscle pain, poor concentration or sleep problems: some people link these to their implants. The symptoms are real for those who experience them and are being studied, but a causal link with implants has not been established. They can have other causes, which your GP can help look for.",
              "You may choose removal in this situation, knowing that improvement cannot be predicted. A responsible surgeon explains these uncertainties without dismissing your symptoms or promising they will go.",
            ],
          },
          {
            heading: "Expectations and motivation",
            paragraphs: [
              "Picture realistically how your breasts are likely to look after removal, and ask whether an uplift or fat transfer would be needed for you to be comfortable. After exchange, remember that new implants will also need follow-up and probably further surgery one day.",
              "Body dysmorphic disorder (BDD) is a mental health condition in which a person spends a lot of time worrying about flaws in their appearance that others barely notice. Surgery does not usually relieve BDD and can make distress worse. If this sounds familiar, speak to your GP; effective treatments are available. If you are struggling to cope, Samaritans can be reached any time on 116 123.",
            ],
          },
          {
            heading: "Questions to ask your surgeon",
            paragraphs: [],
            bullets: [
              "Are you on the GMC Specialist Register in plastic surgery, and how often do you carry out implant revision or removal?",
              "What does my imaging show, and what is the reason for surgery?",
              "Do you recommend total, partial or no capsulectomy, and why? What extra risks does it carry?",
              "How are my breasts likely to look after removal? Would I need an uplift or fat transfer, and when?",
              "Will the capsule be sent for laboratory examination?",
              "If I have new implants, which type and why? Will they be recorded on the registry, and will I receive an implant card?",
              "What does the quote include, could any of it be funded, and what happens if I have a complication?",
            ],
          },
          {
            heading: "Cooling-off and second opinions",
            paragraphs: [
              "UK law sets no statutory waiting period, but GMC guidance recommends that you have time to reflect, and professional standards advise at least two weeks between consultation and agreeing to cosmetic surgery. The consultation should be with the operating surgeon. Urgent medical situations, such as suspected BIA-ALCL, follow a different pathway. A surgeon who discourages a second opinion is a warning sign.",
            ],
          },
        ],
        sources: [MHRA, BCIR, GMC, RCS, { label: "Samaritans", url: "https://www.samaritans.org" }],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      // ── Alternatives ──
      {
        interventionId: "breast-implant-revision",
        kind: "alternatives",
        locale: "en-gb",
        title: "Breast implant removal or revision: your options",
        summary:
          "Monitoring, removal alone, removal with an uplift or fat transfer, or new implants: the options for existing breast implants, limits and risks.",
        answer:
          "Depending on your situation, the options are monitoring an intact implant, removal alone with or without capsulectomy, removal combined with an uplift or fat transfer, or replacement with new implants. For BIA-ALCL, removing the implant and capsule is part of treatment rather than one option among others.",
        sections: [
          {
            heading: "Monitoring without surgery",
            paragraphs: [
              "If imaging shows the implant is intact, with no troublesome contracture, no symptoms and no regulator advice to remove it, monitoring is a reasonable option. It relies on regular check-ups, being breast aware and imaging when something changes. A ruptured silicone implant is usually removed, but the timing can be discussed.",
            ],
          },
          {
            heading: "Removal alone",
            paragraphs: [
              "Removal without replacement ends future implant-related risks such as contracture, rupture and further implant surgery. It leaves smaller, often looser breasts. It may be done with or without capsulectomy depending on the situation. It is the simplest surgical option when the tissues are in good condition and the implants were modest in size.",
            ],
          },
          {
            heading: "Removal with an uplift or fat transfer",
            paragraphs: [
              "A breast uplift (mastopexy) lifts the breast tissue and removes excess skin, at the cost of scars around the areola and sometimes vertically or in the crease beneath the breast. It can be done at the same time as removal or a few months later, once the skin has had time to contract.",
              "Fat transfer takes fat by liposuction (from the tummy or thighs, for example) and injects it into the breasts. It restores some volume, but part of the fat is reabsorbed and several sessions are often needed. It requires enough fat to harvest and follow-up imaging of the breasts.",
            ],
          },
          {
            heading: "New implants",
            paragraphs: [
              "Replacement keeps or changes the breast size. Your surgeon may suggest a different type or size of implant, a different pocket (above or below the muscle) or, sometimes, a supporting mesh or matrix. New implants carry the same long-term risks (contracture, rupture, rare BIA-ALCL) and need follow-up.",
            ],
          },
          {
            heading: "Taking your time",
            paragraphs: [
              "Unless there is an urgent medical problem, there is no need to decide quickly. Your preference may change, and surgery can be staged: removal first, then a review a few months later.",
            ],
          },
        ],
        sources: [NHS, MHRA, NICE, BAAPS],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
    glossary: [
      {
        id: "capsulectomy",
        locale: "en-gb",
        slug: "capsulectomy",
        term: "Capsulectomy",
        aliases: [
          "capsulectomies",
          "total capsulectomy",
          "partial capsulectomy",
          "en bloc capsulectomy",
          "en-bloc capsulectomy",
          "capsulotomy",
        ],
        definition:
          "A capsulectomy is surgery to remove the capsule, the layer of scar tissue the body forms around a breast implant. It can be total or partial and is often done when an implant is removed or replaced.",
        detail: [
          "A capsule forms around every implant. It is usually thin and soft, but it can thicken, tighten (capsular contracture) or calcify. A capsulotomy only cuts the capsule to release the implant, without removing it.",
          "A total capsulectomy, ideally removing the implant and capsule in one piece (en bloc), is needed for breast implant-associated anaplastic large cell lymphoma (BIA-ALCL). It is often discussed for contracture, a thick or calcified capsule, or a ruptured silicone implant.",
          "It lengthens the operation and increases the risk of bleeding and seroma. When the capsule is stuck to the ribs, removing it can rarely injure the lining of the lung and cause a pneumothorax. The removed capsule is usually examined in the laboratory.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
      {
        id: "implant-rupture",
        locale: "en-gb",
        slug: "breast-implant-rupture",
        term: "Breast implant rupture",
        aliases: [
          "implant rupture",
          "ruptured implant",
          "ruptured implants",
          "ruptured breast implant",
          "intracapsular rupture",
          "extracapsular rupture",
          "silent rupture",
          "gel bleed",
        ],
        definition:
          "Breast implant rupture is a tear or split in the implant's outer shell that lets its contents escape. It becomes more likely as an implant ages and often causes no symptoms.",
        detail: [
          "With a silicone gel implant, the gel usually stays within the capsule (intracapsular rupture); sometimes it passes through it (extracapsular rupture) and moves into nearby tissue or lymph nodes in the armpit. With a saline implant, the body absorbs the fluid and the breast deflates.",
          "Possible signs include a change in shape or size, hardening, pain or a lump, but many ruptures are 'silent'. Ultrasound and MRI are used to diagnose it, which is why follow-up matters.",
          "A ruptured silicone implant is usually removed or replaced, often with some or all of the capsule. Some manufacturers offer warranties, so keep your implant card. Ruptures can be reported to the MHRA through the Yellow Card scheme.",
        ],
        medicalReview: REVIEW,
        updatedAt: UPDATED_AT,
      },
    ],
  },
};
