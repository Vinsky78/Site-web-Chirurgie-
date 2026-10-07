import type { Locale } from "@/i18n/routing";

/**
 * Guides pratiques pour le patient. Même charte que les fiches : information
 * factuelle, aucune promesse. Brouillon (noindex, exclu du sitemap et de
 * llms.txt) tant qu'une relecture juridique et médicale n'a pas eu lieu.
 */
export const GUIDE_IDS = ["choose-surgeon", "prepare-consultation", "quote-and-consent", "prepare-and-recover"] as const;
export type GuideId = (typeof GUIDE_IDS)[number];

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Guide {
  id: GuideId;
  locale: Locale;
  slug: string;
  title: string;
  /** Résumé factuel, aussi utilisé comme meta description. */
  summary: string;
  sections: GuideSection[];
  reviewed: boolean;
  updatedAt: string;
}

const guidesFr: Guide[] = [
  {
    id: "choose-surgeon",
    locale: "fr",
    slug: "choisir-son-chirurgien",
    title: "Comment choisir son chirurgien",
    summary: "Les vérifications à faire avant de s'engager : inscription à l'Ordre, qualification, établissement et signaux d'alerte.",
    sections: [
      {
        heading: "Vérifier l'inscription et la qualification",
        paragraphs: [
          "En France, tout médecin doit être inscrit à l'Ordre des médecins. L'annuaire public de l'Ordre permet de contrôler l'inscription et la spécialité.",
          "Pour la chirurgie esthétique, la qualification attendue est celle de chirurgie plastique, reconstructrice et esthétique. Demandez-la clairement lors de la consultation.",
        ],
      },
      {
        heading: "Vérifier l'établissement",
        paragraphs: ["L'intervention doit avoir lieu dans un établissement de santé autorisé, avec une équipe d'anesthésie. Un cabinet seul n'est pas adapté à une anesthésie générale."],
      },
      {
        heading: "Ce qu'un bon échange doit comporter",
        paragraphs: ["Une consultation individualisée, de la place pour vos questions et une information claire sur les limites et les risques."],
        bullets: [
          "Examen de votre situation, de vos antécédents et de vos attentes.",
          "Explication des techniques possibles, de leurs risques et des alternatives, dont ne rien faire.",
          "Remise d'un devis écrit et détaillé, sans pression pour décider.",
        ],
      },
      {
        heading: "Signaux d'alerte",
        paragraphs: ["Méfiez-vous de ce qui vise à accélérer votre décision ou à minimiser les risques."],
        bullets: [
          "Promesse de résultat ou images avant/après utilisées comme argument commercial.",
          "Démarchage, offre à durée limitée ou tarif très inférieur à la normale.",
          "Impossibilité de savoir qui opère, qui endort et qui assure le suivi.",
          "Intervention à l'étranger sans organisation claire du suivi et des complications.",
        ],
      },
    ],
    reviewed: false,
    updatedAt: "2026-10-08",
  },
  {
    id: "prepare-consultation",
    locale: "fr",
    slug: "preparer-sa-consultation",
    title: "Préparer sa consultation : les questions à poser",
    summary: "Une liste de questions pour tirer parti de la consultation, et les documents à apporter.",
    sections: [
      {
        heading: "Avant le rendez-vous",
        paragraphs: ["Notez ce qui vous gêne et ce que vous espérez, avec vos propres mots. Un projet clair aide le chirurgien à vous répondre honnêtement."],
        bullets: [
          "La liste de vos médicaments, compléments et allergies.",
          "Vos antécédents médicaux et chirurgicaux, y compris sur la zone concernée.",
          "Votre situation personnelle : projet de grossesse, tabagisme, variations de poids.",
        ],
      },
      {
        heading: "Les questions à poser",
        paragraphs: ["Vous pouvez imprimer cette liste ou la garder sur votre téléphone."],
        bullets: [
          "Quelle technique proposez-vous pour moi, et pourquoi ?",
          "Quelles sont vos qualifications et votre expérience pour cette intervention ?",
          "Quels sont les risques, dans mon cas précisément ?",
          "Quel résultat est réaliste, et quelles sont ses limites ?",
          "Où seront les cicatrices et comment évoluent-elles ?",
          "Quel type d'anesthésie, quelle durée, quelle hospitalisation ?",
          "Combien de temps de convalescence et d'arrêt de travail prévoir ?",
          "Quel est le coût total : honoraires, anesthésiste, établissement, suivi ?",
          "Que se passe-t-il en cas de complication ou de retouche nécessaire ?",
          "Quelles alternatives existent, y compris ne pas opérer ?",
        ],
      },
      {
        heading: "Après la consultation",
        paragraphs: ["Prenez le temps de relire le devis et vos notes. Vous pouvez consulter un second chirurgien : c'est une démarche normale."],
      },
    ],
    reviewed: false,
    updatedAt: "2026-10-08",
  },
  {
    id: "quote-and-consent",
    locale: "fr",
    slug: "devis-delai-de-reflexion-consentement",
    title: "Devis, délai de réflexion et consentement en France",
    summary: "Ce que la loi impose avant une chirurgie esthétique : devis détaillé, délai de 15 jours et consentement éclairé.",
    sections: [
      {
        heading: "Le devis détaillé",
        paragraphs: ["Avant une intervention de chirurgie esthétique, le chirurgien doit vous remettre un devis détaillé écrit, avec les honoraires et les frais."],
      },
      {
        heading: "Le délai de réflexion de 15 jours",
        paragraphs: [
          "Un délai minimal de 15 jours doit s'écouler entre la remise du devis et l'intervention. Aucun paiement ne peut être exigé avant la fin de ce délai, en dehors des honoraires de consultation.",
          "Ce délai vous appartient : il est fait pour réfléchir, poser de nouvelles questions et, si besoin, demander un second avis.",
        ],
      },
      {
        heading: "Le consentement éclairé",
        paragraphs: ["Vous devez recevoir une information claire sur l'intervention, ses risques, ses alternatives et ses suites, puis donner votre accord par écrit. Vous pouvez le retirer tant que l'intervention n'a pas eu lieu."],
      },
      {
        heading: "Les injections",
        paragraphs: ["Le délai légal de 15 jours vise la chirurgie esthétique. Pour les injections, il n'est généralement pas imposé, mais un devis écrit détaillé et un temps de réflexion restent recommandés."],
      },
    ],
    reviewed: false,
    updatedAt: "2026-10-08",
  },
  {
    id: "prepare-and-recover",
    locale: "fr",
    slug: "se-preparer-et-recuperer",
    title: "Se préparer à l'intervention et récupérer",
    summary: "Les bons réflexes avant l'opération, pendant la convalescence, et les signes qui doivent faire appeler l'équipe.",
    sections: [
      {
        heading: "Avant l'intervention",
        paragraphs: ["Suivez les consignes de votre chirurgien et de l'anesthésiste. Une consultation d'anesthésie est obligatoire avant une anesthésie générale."],
        bullets: [
          "Arrêtez le tabac comme demandé : il ralentit la cicatrisation et augmente les complications.",
          "Signalez tous vos médicaments, notamment anticoagulants, aspirine et compléments.",
          "Organisez votre retour et la présence d'un proche les premiers jours.",
          "Préparez votre domicile : repas, vêtements adaptés, repos.",
        ],
      },
      {
        heading: "Pendant la convalescence",
        paragraphs: ["Respectez le repos, les soins et les rendez-vous de suivi. Le résultat définitif demande souvent plusieurs mois, selon l'intervention."],
        bullets: ["Évitez les efforts et le soleil sur les cicatrices selon les consignes.", "Portez le vêtement de contention ou le pansement prescrit.", "Ne comparez pas votre évolution à celle des autres."],
      },
      {
        heading: "Quand contacter l'équipe ou les urgences",
        paragraphs: ["Contactez rapidement l'équipe, ou les urgences si elle est injoignable, en cas de :"],
        bullets: [
          "Fièvre, rougeur qui s'étend ou écoulement inhabituel d'une cicatrice.",
          "Douleur qui augmente au lieu de diminuer, gonflement brutal d'un côté.",
          "Saignement important.",
          "Essoufflement, douleur dans la poitrine ou mollet douloureux et gonflé.",
        ],
      },
    ],
    reviewed: false,
    updatedAt: "2026-10-08",
  },
];

const guidesEnGb: Guide[] = [
  {
    id: "choose-surgeon",
    locale: "en-gb",
    slug: "choosing-a-surgeon",
    title: "How to choose a surgeon",
    summary: "The checks to make before committing: registration, specialist training, the clinic and warning signs.",
    sections: [
      {
        heading: "Check registration and training",
        paragraphs: [
          "In the UK, surgeons must be registered with the General Medical Council (GMC). The online register shows whether a doctor is on the specialist register, for example in plastic surgery.",
          "Ask about their specific training and experience in the procedure you are considering. Membership of a professional association, such as BAPRAS or BAAPS, can be an additional point to check.",
        ],
      },
      {
        heading: "Check the clinic",
        paragraphs: ["In England, independent clinics must be registered with the Care Quality Commission (CQC). Check the latest inspection report. Surgery under general anaesthetic needs a proper hospital setting and an anaesthetist."],
      },
      {
        heading: "What a good consultation includes",
        paragraphs: ["An individual assessment, room for your questions and a clear explanation of the limits and risks."],
        bullets: [
          "An examination of your situation, history and expectations.",
          "An explanation of the options, their risks and alternatives, including doing nothing.",
          "A written, itemised quote, with no pressure to decide.",
        ],
      },
      {
        heading: "Warning signs",
        paragraphs: ["Be cautious of anything that rushes your decision or plays down the risks."],
        bullets: [
          "Promises of results, or before-and-after images used as a sales tool.",
          "Cold calling, time-limited deals or prices far below the norm.",
          "No clear answer on who operates, who gives the anaesthetic and who handles follow-up.",
          "Surgery abroad without clear arrangements for aftercare and complications.",
        ],
      },
    ],
    reviewed: false,
    updatedAt: "2026-10-08",
  },
  {
    id: "prepare-consultation",
    locale: "en-gb",
    slug: "preparing-for-your-consultation",
    title: "Preparing for your consultation: questions to ask",
    summary: "A list of questions to make the most of your consultation, and what to bring.",
    sections: [
      {
        heading: "Before the appointment",
        paragraphs: ["Write down what bothers you and what you hope for, in your own words. A clear goal helps the surgeon give you an honest answer."],
        bullets: [
          "A list of your medicines, supplements and allergies.",
          "Your medical and surgical history, including the area concerned.",
          "Your personal situation: plans for pregnancy, smoking, weight changes.",
        ],
      },
      {
        heading: "Questions to ask",
        paragraphs: ["You can print this list or keep it on your phone."],
        bullets: [
          "Which technique do you recommend for me, and why?",
          "What are your qualifications and experience with this procedure?",
          "What are the risks in my particular case?",
          "What result is realistic, and what are its limits?",
          "Where will the scars be and how do they change over time?",
          "What type of anaesthetic, how long, and what hospital stay?",
          "How much recovery time and time off work should I plan?",
          "What is the total cost: surgeon, anaesthetist, hospital, aftercare?",
          "What happens if there is a complication or I need a revision?",
          "What alternatives are there, including not having surgery?",
        ],
      },
      {
        heading: "After the consultation",
        paragraphs: ["Take time to re-read the quote and your notes. Seeking a second opinion is a normal thing to do."],
      },
    ],
    reviewed: false,
    updatedAt: "2026-10-08",
  },
  {
    id: "quote-and-consent",
    locale: "en-gb",
    slug: "quotes-cooling-off-and-consent",
    title: "Quotes, cooling-off and consent in the UK",
    summary: "What professional standards expect before cosmetic surgery: an itemised quote, time to reflect and informed consent.",
    sections: [
      {
        heading: "The itemised quote",
        paragraphs: ["Before surgery you should receive a clear, written quote that sets out the fees and any additional costs."],
      },
      {
        heading: "Time to reflect",
        paragraphs: [
          "There is no single statutory cooling-off period, but UK professional standards recommend at least two weeks between the consultation and agreeing to surgery.",
          "That time is yours: use it to think, ask more questions and, if you wish, seek a second opinion.",
        ],
      },
      {
        heading: "Informed consent",
        paragraphs: ["You should be given clear information about the procedure, its risks, the alternatives and the recovery, and give your consent in writing. You can withdraw it at any point before the procedure."],
      },
      {
        heading: "Injectable treatments",
        paragraphs: ["Injectables follow different rules from surgery. Take time to decide and check the practitioner's registration; you should never feel pressured to book treatment on the day."],
      },
    ],
    reviewed: false,
    updatedAt: "2026-10-08",
  },
  {
    id: "prepare-and-recover",
    locale: "en-gb",
    slug: "preparing-and-recovering",
    title: "Preparing for surgery and recovering",
    summary: "Good habits before the operation, during recovery, and the signs that mean you should call the team.",
    sections: [
      {
        heading: "Before surgery",
        paragraphs: ["Follow the instructions from your surgeon and anaesthetist. You will have a pre-operative assessment before a general anaesthetic."],
        bullets: [
          "Stop smoking as asked: it slows healing and raises the risk of complications.",
          "Tell the team about all your medicines, especially blood thinners, aspirin and supplements.",
          "Arrange your journey home and have someone with you for the first days.",
          "Prepare your home: meals, suitable clothes, rest.",
        ],
      },
      {
        heading: "During recovery",
        paragraphs: ["Follow the rest, care and follow-up appointments. The final result often takes several months, depending on the procedure."],
        bullets: ["Avoid strain and sun on your scars as advised.", "Wear the compression garment or dressing you are given.", "Do not compare your progress with other people's."],
      },
      {
        heading: "When to contact the team or emergency services",
        paragraphs: ["Contact the team quickly, or emergency services if they cannot be reached, if you have:"],
        bullets: [
          "A fever, spreading redness or unusual discharge from a wound.",
          "Pain that increases instead of easing, or sudden swelling on one side.",
          "Heavy bleeding.",
          "Shortness of breath, chest pain or a painful, swollen calf.",
        ],
      },
    ],
    reviewed: false,
    updatedAt: "2026-10-08",
  },
];

const byLocale: Record<Locale, Guide[]> = { fr: guidesFr, "en-gb": guidesEnGb };

export function getGuides(locale: Locale): Guide[] {
  return byLocale[locale];
}

export function getGuideBySlug(locale: Locale, slug: string): Guide | undefined {
  return byLocale[locale].find((g) => g.slug === slug);
}

export function getGuideAlternateSlugs(id: GuideId): Partial<Record<Locale, string>> {
  const result: Partial<Record<Locale, string>> = {};
  for (const [locale, items] of Object.entries(byLocale) as [Locale, Guide[]][]) {
    const match = items.find((g) => g.id === id);
    if (match) result[locale] = match.slug;
  }
  return result;
}

export function isGuideIndexable(guide: Guide): boolean {
  return guide.reviewed;
}
