import type { Locale } from "@/i18n/routing";
import type { Guide } from "../../types";

/** Associer plusieurs interventions : guide pratique (fr, en-gb). Brouillon à relire par le comité médical. */
export const guide: Record<Locale, Guide> = {
  fr: {
    id: "combining-procedures",
    locale: "fr",
    slug: "associer-plusieurs-interventions",
    title: "Associer plusieurs interventions en une fois",
    summary:
      "Abdominoplastie et seins, nez et menton, liposuccion et lifting : bénéfices, risques accrus, convalescence et critères pour opérer en un ou plusieurs temps.",
    answer:
      "Associer plusieurs interventions au cours d'une même anesthésie est possible et parfois cohérent, par exemple abdominoplastie et chirurgie des seins après une grossesse, rhinoplastie et génioplastie pour équilibrer le profil, ou lifting du visage et chirurgie des paupières. Cela évite une seconde anesthésie et une seconde convalescence. Mais une opération plus longue augmente certains risques, en particulier la phlébite et l'embolie pulmonaire, les saignements et les difficultés de cicatrisation, et la convalescence est plus lourde. La décision dépend de votre état de santé, de la durée totale prévue et de l'organisation possible après l'opération ; découper le projet en plusieurs temps est souvent une option raisonnable.",
    steps: [
      {
        heading: "Les associations les plus fréquentes",
        paragraphs: [
          "Certaines interventions sont souvent réalisées ensemble parce qu'elles concernent des zones voisines ou un même objectif. Le fait qu'une association soit courante ne signifie pas qu'elle convient à tout le monde : elle se discute au cas par cas.",
        ],
        bullets: [
          "Après grossesse (souvent appelé « mommy makeover ») : abdominoplastie associée à un lifting des seins, une augmentation ou une réduction mammaire, parfois une liposuccion.",
          "Profil du visage : rhinoplastie et génioplastie (chirurgie du menton).",
          "Rajeunissement du visage : lifting cervico-facial, blépharoplastie, lifting des sourcils, parfois lipofilling.",
          "Silhouette : liposuccion associée à une abdominoplastie ou à un lifting des cuisses ou des bras.",
          "Après une perte de poids massive : plusieurs liftings corporels, presque toujours répartis en plusieurs temps.",
          "Seins : lifting associé à la pose d'implants, ou changement d'implants avec reprise du lifting.",
        ],
      },
      {
        heading: "Les bénéfices possibles",
        paragraphs: [
          "Regrouper plusieurs gestes peut avoir de vrais avantages, à condition que la sécurité ne soit pas compromise. Ces bénéfices sont à mettre en balance avec les inconvénients décrits plus bas.",
        ],
        bullets: [
          "Une seule anesthésie et une seule hospitalisation au lieu de deux ou plus.",
          "Une seule période d'arrêt et de convalescence à organiser.",
          "Un résultat d'ensemble plus harmonieux quand les zones sont liées (nez et menton, ventre et seins).",
          "Un coût global parfois moindre que celui des interventions réalisées séparément, sans que ce soit la règle.",
        ],
      },
      {
        heading: "La durée opératoire : une limite essentielle",
        paragraphs: [
          "Chaque intervention ajoutée allonge le temps passé sous anesthésie. Or plusieurs études associent une durée opératoire longue à un risque plus élevé de complications : refroidissement du corps (hypothermie), pertes de sang, infections, complications liées à la position sur la table et à l'anesthésie.",
          "Il n'existe pas de durée maximale unique valable pour tous. Le chirurgien et l'anesthésiste fixent une limite selon votre âge, votre état de santé et les gestes prévus. Demandez quelle est la durée totale estimée et ce qui serait fait si elle venait à dépasser ce qui était prévu.",
        ],
        bullets: [
          "Quelle est la durée totale estimée de l'opération ?",
          "Les gestes seront-ils réalisés par la même équipe ou par deux équipes en parallèle ?",
          "Que se passe-t-il si l'opération prend plus de temps : arrêt après la première intervention ?",
          "Faut-il prévoir une ou plusieurs nuits d'hospitalisation, voire une surveillance renforcée ?",
        ],
      },
      {
        heading: "Un risque thromboembolique accru",
        paragraphs: [
          "La phlébite (caillot dans une veine, le plus souvent de la jambe) et l'embolie pulmonaire (caillot qui migre vers les poumons) sont des complications rares mais graves. Leur risque augmente avec la durée de l'opération, l'immobilité après l'intervention et certaines associations, en particulier l'abdominoplastie associée à d'autres gestes sur le corps.",
          "L'équipe évalue votre risque personnel avant l'intervention et adapte la prévention : lever précoce, bas de contention, dispositifs de compression des jambes pendant l'opération, parfois injections d'anticoagulant pendant plusieurs jours.",
        ],
        bullets: [
          "Signaler tout antécédent personnel ou familial de phlébite, d'embolie ou de trouble de la coagulation.",
          "Signaler la contraception hormonale ou un traitement hormonal : il peut être nécessaire de l'adapter.",
          "Le tabac, le surpoids et un voyage long juste avant ou après l'opération augmentent aussi le risque.",
          "Se lever et marcher dès que l'équipe l'autorise, même un peu, plusieurs fois par jour.",
        ],
      },
      {
        heading: "Une convalescence plus lourde",
        paragraphs: [
          "Les suites de plusieurs interventions s'additionnent : douleurs sur plusieurs zones, fatigue plus marquée, gonflement plus important, plusieurs pansements, drains ou vêtements de compression. Certaines consignes peuvent être difficiles à concilier, par exemple rester penché en avant après une abdominoplastie tout en limitant l'usage des bras après une chirurgie des seins.",
          "L'autonomie est souvent réduite plus longtemps : prévoyez une aide à domicile pendant les premiers jours, voire les premières semaines, et un arrêt d'activité plus long que pour une seule intervention.",
        ],
        bullets: [
          "Une personne présente à la maison au moins les premiers jours.",
          "Une organisation pour les enfants, notamment s'il ne faut pas les porter.",
          "Un retour au travail et au sport plus tardif.",
          "Un risque de complication qui porte sur plusieurs zones à la fois, avec parfois une reprise sur l'une d'elles.",
        ],
      },
      {
        heading: "Les critères pour décider",
        paragraphs: [
          "La décision d'associer des interventions se prend avec le chirurgien et l'anesthésiste, après un examen complet. Certains éléments penchent en faveur d'une seule opération, d'autres en faveur de plusieurs temps.",
        ],
        bullets: [
          "Votre état de santé général : âge, poids stable, maladies chroniques, tension, diabète.",
          "Le tabac : l'arrêt est fortement recommandé, d'autant plus en cas d'interventions associées.",
          "La durée et l'étendue totales des gestes prévus.",
          "Le volume de graisse retiré en cas de liposuccion et la surface décollée.",
          "Votre risque thromboembolique personnel.",
          "La possibilité d'être aidé(e) et de vous arrêter suffisamment longtemps.",
          "Vos priorités : quelle zone compte le plus pour vous, si vous deviez n'en traiter qu'une ?",
        ],
      },
      {
        heading: "Découper le projet en plusieurs temps",
        paragraphs: [
          "Réaliser les interventions en plusieurs étapes, espacées de plusieurs mois, est souvent plus prudent quand le projet est étendu, par exemple après une perte de poids massive. Chaque opération est plus courte, la convalescence plus légère, et chaque étape permet de vérifier la cicatrisation et le résultat avant la suivante.",
          "L'inconvénient est de passer par plusieurs anesthésies et plusieurs convalescences. En France, chaque intervention fait l'objet de son propre devis détaillé et du délai de réflexion de 15 jours. Demandez un plan d'ensemble écrit, avec l'ordre des étapes et le délai prévu entre elles.",
        ],
      },
      {
        heading: "Les questions à poser en consultation",
        paragraphs: [
          "N'hésitez pas à demander au chirurgien pourquoi il propose d'associer ou de séparer les interventions. Un chirurgien peut refuser une association qu'il juge trop risquée pour vous : c'est un gage de prudence, pas un manque de souplesse.",
        ],
        bullets: [
          "Pourquoi associer ces interventions dans mon cas ? Quelles alternatives ?",
          "Quels risques supplémentaires par rapport à chaque intervention seule ?",
          "Quelle prévention de la phlébite et de l'embolie est prévue pour moi ?",
          "Combien de nuits d'hospitalisation, et dans quel établissement ?",
          "Combien de temps faut-il prévoir sans travailler, sans conduire, sans porter de charges ?",
          "Que se passe-t-il si une complication survient sur l'une des zones ?",
          "Le devis détaille-t-il chaque intervention séparément ?",
        ],
      },
    ],
    warningSigns: [
      "Douleur, gonflement ou chaleur d'un mollet ou d'une jambe : appeler le chirurgien rapidement.",
      "Essoufflement brutal, douleur dans la poitrine, toux avec du sang ou malaise : appeler le 15 ou le 112.",
      "Saignement abondant ou gonflement rapide et douloureux d'une zone opérée.",
      "Fièvre à 38 °C ou plus, rougeur qui s'étend, écoulement de pus.",
      "Peau qui devient sombre, violacée ou noire près d'une cicatrice.",
      "Grande fatigue, pâleur ou vertiges persistants qui peuvent traduire une perte de sang importante.",
      "Proposition d'ajouter une intervention au dernier moment, sans devis ni délai de réflexion.",
    ],
    resources: [
      { label: "Société française de chirurgie plastique, reconstructrice et esthétique (SOFCPRE)", url: "https://www.sofcpre.fr" },
      { label: "Société française d'anesthésie et de réanimation (SFAR)", url: "https://sfar.org" },
      { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" },
      { label: "Assurance maladie (ameli)", url: "https://www.ameli.fr" },
      { label: "Légifrance – Code de la santé publique", url: "https://www.legifrance.gouv.fr" },
      { label: "Annuaire santé", url: "https://annuaire.sante.fr" },
    ],
    interventions: [
      "abdominoplasty",
      "breast-augmentation",
      "breast-lift",
      "breast-reduction",
      "liposuction",
      "rhinoplasty",
      "genioplasty",
      "facelift",
      "blepharoplasty",
      "brow-lift",
      "fat-grafting",
      "arm-lift",
      "thigh-lift",
      "body-lift",
      "buttock-augmentation",
      "breast-implant-revision",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  "en-gb": {
    id: "combining-procedures",
    locale: "en-gb",
    slug: "combining-cosmetic-procedures",
    title: "Combining several procedures in one operation",
    summary:
      "Tummy tuck with breast surgery, nose and chin, liposuction with a lift: benefits, added risks, recovery and how to decide between one or several stages.",
    answer:
      "Having several procedures under one anaesthetic is possible and sometimes makes sense, for example a tummy tuck with breast surgery after pregnancy, rhinoplasty with chin surgery to balance the profile, or a facelift with eyelid surgery. It avoids a second anaesthetic and a second recovery. But a longer operation increases some risks, particularly blood clots in the legs or lungs, bleeding and wound-healing problems, and recovery is harder. The decision depends on your health, the total operating time and the support you will have afterwards; splitting the plan into stages is often a sensible option.",
    steps: [
      {
        heading: "Common combinations",
        paragraphs: [
          "Some procedures are often done together because they involve neighbouring areas or the same goal. A common combination is not right for everyone: it should be discussed case by case.",
        ],
        bullets: [
          "After pregnancy (often called a \"mummy makeover\"): tummy tuck with a breast lift, augmentation or reduction, sometimes with liposuction.",
          "Facial profile: rhinoplasty and genioplasty (chin surgery).",
          "Facial rejuvenation: facelift, blepharoplasty, brow lift, sometimes fat transfer.",
          "Body contouring: liposuction with a tummy tuck, thigh lift or arm lift.",
          "After massive weight loss: several body lifts, almost always carried out in stages.",
          "Breasts: a lift combined with implants, or implant exchange with a repeat lift.",
        ],
      },
      {
        heading: "Possible benefits",
        paragraphs: [
          "Combining procedures can have real advantages, provided safety is not compromised. Weigh them against the drawbacks described below.",
        ],
        bullets: [
          "One anaesthetic and one hospital stay instead of two or more.",
          "One period of time off work and recovery to plan.",
          "A more balanced overall result when the areas are linked (nose and chin, tummy and breasts).",
          "Sometimes a lower overall cost than separate operations, although this is not always the case.",
        ],
      },
      {
        heading: "Operating time: a key limit",
        paragraphs: [
          "Each added procedure lengthens the time under anaesthesia. Several studies link longer operations to a higher risk of complications: the body cooling down (hypothermia), blood loss, infection, and problems related to positioning and anaesthesia.",
          "There is no single maximum time that applies to everyone. The surgeon and anaesthetist set a limit based on your age, health and the planned procedures. Ask what the total estimated time is and what would happen if it ran longer than planned.",
        ],
        bullets: [
          "What is the total estimated operating time?",
          "Will one team operate, or two teams at the same time?",
          "What happens if the operation runs long: would you stop after the first procedure?",
          "How many nights in hospital, and is closer monitoring needed?",
        ],
      },
      {
        heading: "A higher risk of blood clots",
        paragraphs: [
          "Deep vein thrombosis (a clot in a vein, usually in the leg) and pulmonary embolism (a clot that travels to the lungs) are rare but serious complications. The risk rises with longer operations, immobility afterwards and certain combinations, particularly a tummy tuck combined with other body procedures.",
          "Your team should assess your individual risk before surgery and tailor prevention, in line with NICE guidance on venous thromboembolism: getting up early, compression stockings, leg compression devices during surgery and sometimes blood-thinning injections for several days.",
        ],
        bullets: [
          "Mention any personal or family history of DVT, embolism or clotting disorder.",
          "Mention hormonal contraception or HRT: it may need to be adjusted.",
          "Smoking, a raised BMI and long-haul travel just before or after surgery also increase the risk.",
          "Get up and walk as soon as the team allows, even a little, several times a day.",
        ],
      },
      {
        heading: "A harder recovery",
        paragraphs: [
          "The after-effects of several procedures add up: pain in more than one area, more tiredness, more swelling, several dressings, drains or garments. Some instructions can clash, for example staying bent forward after a tummy tuck while limiting arm use after breast surgery.",
          "You are likely to be less independent for longer: plan for help at home for the first days, perhaps weeks, and more time off than for a single procedure.",
        ],
        bullets: [
          "Someone at home with you, at least for the first few days.",
          "Childcare arrangements, especially if you cannot lift children.",
          "A later return to work and exercise.",
          "Complications that can affect several areas at once, sometimes needing further surgery on one of them.",
        ],
      },
      {
        heading: "How to decide",
        paragraphs: [
          "The decision to combine procedures is made with your surgeon and anaesthetist after a full assessment. Some factors favour a single operation, others favour stages.",
        ],
        bullets: [
          "Your general health: age, stable weight, long-term conditions, blood pressure, diabetes.",
          "Smoking: stopping is strongly recommended, all the more so for combined procedures.",
          "The total length and extent of surgery.",
          "The volume of fat removed with liposuction and the area of tissue lifted.",
          "Your individual clotting risk.",
          "Whether you will have help and can take enough time off.",
          "Your priorities: which area matters most to you if you could only treat one?",
        ],
      },
      {
        heading: "Splitting the plan into stages",
        paragraphs: [
          "Having procedures in stages, several months apart, is often safer when the plan is extensive, for example after massive weight loss. Each operation is shorter, each recovery lighter, and each stage lets you check healing and the result before the next one.",
          "The downside is more than one anaesthetic and recovery. Each stage should have its own written quote and its own cooling-off period of at least two weeks, as the GMC recommends. Ask for an overall written plan with the order of stages and the expected gap between them.",
        ],
      },
      {
        heading: "Questions to ask at your consultation",
        paragraphs: [
          "Feel free to ask your surgeon why they suggest combining or separating procedures. A surgeon may decline a combination they consider too risky for you: that is a sign of caution, not inflexibility.",
        ],
        bullets: [
          "Why combine these procedures in my case? What are the alternatives?",
          "What extra risks are there compared with each procedure on its own?",
          "What blood clot prevention is planned for me?",
          "How many nights in hospital, and in which hospital?",
          "How long will I be unable to work, drive or lift?",
          "What happens if there is a complication in one area?",
          "Does the quote list each procedure separately?",
        ],
      },
    ],
    warningSigns: [
      "Pain, swelling or warmth in a calf or leg: contact your surgeon promptly.",
      "Sudden breathlessness, chest pain, coughing up blood or collapse: call 999.",
      "Heavy bleeding or rapid, painful swelling of an operated area.",
      "A temperature of 38°C or above, spreading redness or pus.",
      "Skin near a scar turning dark, purple or black.",
      "Marked tiredness, paleness or persistent dizziness, which can be a sign of significant blood loss.",
      "Being offered an extra procedure at the last minute, without a written quote or time to think.",
    ],
    resources: [
      { label: "NHS – cosmetic procedures", url: "https://www.nhs.uk" },
      { label: "NICE – venous thromboembolism guidance", url: "https://www.nice.org.uk" },
      { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" },
      { label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)", url: "https://www.bapras.org.uk" },
      { label: "Royal College of Surgeons of England", url: "https://www.rcseng.ac.uk" },
      { label: "General Medical Council (GMC)", url: "https://www.gmc-uk.org" },
      { label: "Care Quality Commission (CQC)", url: "https://www.cqc.org.uk" },
    ],
    interventions: [
      "abdominoplasty",
      "breast-augmentation",
      "breast-lift",
      "breast-reduction",
      "liposuction",
      "rhinoplasty",
      "genioplasty",
      "facelift",
      "blepharoplasty",
      "brow-lift",
      "fat-grafting",
      "arm-lift",
      "thigh-lift",
      "body-lift",
      "buttock-augmentation",
      "breast-implant-revision",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
};
