import type { Locale } from "@/i18n/routing";
import type { FaqItem } from "../types";

/**
 * Page « Comment ça marche » : le parcours du patient sur la plateforme, de la
 * lecture des fiches à la consultation, et les questions fréquentes. Décrit le
 * fonctionnement réel du site (3 chirurgiens au plus, conservation 6 mois,
 * lien personnel de suppression) : à mettre à jour si ces règles changent.
 */
export interface HowItWorksStep {
  title: string;
  text: string;
}

export interface HowItWorksContent {
  title: string;
  description: string;
  lead: string;
  stepsTitle: string;
  steps: HowItWorksStep[];
  commitmentsTitle: string;
  commitments: string[];
  notForTitle: string;
  notFor: string[];
  faqTitle: string;
  faq: FaqItem[];
  ctaTitle: string;
  ctaText: string;
}

export const HOW_IT_WORKS: Record<Locale, HowItWorksContent> = {
  fr: {
    title: "Comment ça marche",
    description:
      "Le parcours sur Éclaira : s'informer, vérifier, demander une consultation à 3 chirurgiens vérifiés au plus, gratuitement et sans engagement.",
    lead: "Éclaira vous aide à comprendre une intervention, ses risques et son coût, puis à contacter des chirurgiens dont nous avons vérifié les qualifications. Le service est gratuit pour les patients, sans engagement, et ne remplace jamais une consultation médicale.",
    stepsTitle: "Le parcours, étape par étape",
    steps: [
      {
        title: "S'informer",
        text: "Lisez la fiche de l'intervention et ses sous-pages : risques, prix, convalescence, alternatives, et la page « avant de se décider ». Les guides pratiques couvrent ce qui est commun à toutes les interventions : préparation, anesthésie, cicatrices, droits du patient.",
      },
      {
        title: "Vérifier",
        text: "Consultez l'annuaire : chaque chirurgien affiché a été contrôlé auprès du registre officiel de son pays (qualification, absence de sanction, assurance, lieu d'exercice autorisé). La date du dernier contrôle est affichée sur sa fiche.",
      },
      {
        title: "Demander une consultation",
        text: "Remplissez le formulaire en quelques étapes : intervention, ville, délai, quelques questions de santé utiles au chirurgien, et le choix de 3 chirurgiens au plus. Vos données de santé sont chiffrées et hébergées chez un hébergeur certifié pour les données de santé (HDS).",
      },
      {
        title: "Être recontacté",
        text: "Seuls les chirurgiens que vous avez choisis reçoivent votre demande. Ils vous contactent pour proposer un rendez-vous. Vous recevez un e-mail de confirmation avec un lien personnel pour suivre ou supprimer votre demande à tout moment.",
      },
      {
        title: "Consulter et réfléchir",
        text: "La consultation est le moment d'examiner votre situation, de poser vos questions et de recevoir un devis détaillé. En France, la loi impose un délai de réflexion d'au moins 15 jours entre la remise du devis et l'intervention. Rien ne vous oblige à donner suite.",
      },
    ],
    commitmentsTitle: "Nos engagements",
    commitments: [
      "Gratuit pour les patients, sans engagement : vous ne payez rien à Éclaira, ni maintenant ni plus tard.",
      "Indépendance : les chirurgiens paient un abonnement fixe, sans commission sur les interventions ; aucun ne peut payer pour être mieux placé.",
      "Information prudente : aucune promesse de résultat, les risques sont toujours détaillés, chaque fiche est relue par un chirurgien qualifié avant d'être indexée.",
      "Vos données vous appartiennent : elles ne sont transmises qu'aux chirurgiens que vous choisissez, conservées 6 mois au plus, et supprimables à tout moment depuis votre lien personnel.",
      "Plateforme réservée aux adultes : aucune demande n'est acceptée avant 18 ans.",
    ],
    notForTitle: "Ce que la plateforme ne fait pas",
    notFor: [
      "Elle ne donne pas d'avis médical personnalisé et ne dit pas si une intervention vous convient : seul un chirurgien, après examen, peut le faire.",
      "Elle ne classe pas les chirurgiens les uns par rapport aux autres et n'affiche ni avant-après ni avis commerciaux.",
      "Elle ne vend pas d'intervention, ne propose pas de prix et ne prend aucune commission.",
      "Elle ne gère pas les urgences : en cas de problème après une opération, appelez votre chirurgien, ou le 15 ou le 112.",
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      {
        question: "Le service est-il vraiment gratuit ?",
        answer:
          "Oui. Le patient ne paie rien à Éclaira. La plateforme est financée par l'abonnement fixe des chirurgiens, qui ne dépend ni du nombre de demandes reçues ni des interventions réalisées. Les consultations et les interventions sont facturées par le chirurgien et l'établissement, selon leur devis.",
      },
      {
        question: "Suis-je engagé en envoyant une demande ?",
        answer:
          "Non. Une demande de consultation n'est ni une réservation ni un accord pour une intervention. Vous êtes libre de ne pas répondre aux chirurgiens, de refuser un rendez-vous ou de ne pas donner suite après la consultation. Vous pouvez supprimer votre demande à tout moment depuis le lien reçu par e-mail.",
      },
      {
        question: "Combien de chirurgiens puis-je contacter ?",
        answer:
          "Trois au plus par demande. Cette limite vous permet de comparer plusieurs avis sans être sollicité de toutes parts. Prendre deux avis avant une intervention esthétique est souvent utile, notamment quand les propositions diffèrent.",
      },
      {
        question: "Comment les chirurgiens sont-ils vérifiés ?",
        answer:
          "Avant toute publication, un administrateur contrôle l'identité et l'inscription du chirurgien au registre officiel de son pays (en France, l'Annuaire santé et l'Ordre des médecins), son titre de spécialiste, l'absence de sanction en cours, son attestation d'assurance professionnelle et l'autorisation de son lieu d'exercice. Ces contrôles sont refaits chaque année ; un chirurgien dont l'assurance expire disparaît de l'annuaire.",
      },
      {
        question: "Comment les chirurgiens sont-ils présentés dans l'annuaire ?",
        answer:
          "Selon des critères objectifs que vous choisissez : intervention, ville, langues parlées. L'ordre d'affichage ne dépend d'aucun paiement et n'exprime aucune préférence de notre part.",
      },
      {
        question: "Qui voit mes données de santé ?",
        answer:
          "Uniquement les chirurgiens que vous avez sélectionnés, et seulement après votre consentement explicite. Les données sont chiffrées et hébergées en France chez un hébergeur certifié HDS. Notre équipe n'y accède que pour des raisons techniques ou de sécurité. Elles ne sont jamais vendues ni utilisées à des fins publicitaires.",
      },
      {
        question: "Combien de temps mes données sont-elles conservées ?",
        answer:
          "Six mois au plus après l'envoi de la demande, puis elles sont supprimées automatiquement. Vous pouvez les supprimer plus tôt depuis votre lien personnel, ou exercer vos droits d'accès, de rectification et d'effacement en nous écrivant (voir la politique de confidentialité).",
      },
      {
        question: "Pourquoi le formulaire pose-t-il des questions de santé ?",
        answer:
          "Parce que certaines informations (tabac, grossesse, traitements, antécédents) changent la faisabilité ou la préparation d'une intervention. Les transmettre dès la demande permet au chirurgien de préparer une consultation utile. Elles ne remplacent pas l'examen ni la consultation d'anesthésie.",
      },
      {
        question: "Les prix sont-ils indiqués ?",
        answer:
          "Non, volontairement. Le prix d'une intervention dépend de votre situation, de la technique, de l'établissement et de la durée d'hospitalisation : seul un devis établi après consultation est fiable. Chaque fiche explique en revanche ce que contient un devis et ce qui fait varier le prix, et un guide est consacré au coût et au financement.",
      },
      {
        question: "Les contenus du site sont-ils fiables ?",
        answer:
          "Chaque fiche suit une charte éditoriale stricte : sources officielles et sociétés savantes, risques toujours présentés, aucune promesse. Elle est relue par un chirurgien qualifié dont le nom et la date de relecture sont affichés. Tant qu'une page n'a pas été relue, un bandeau le signale et elle n'est pas proposée aux moteurs de recherche.",
      },
      {
        question: "Puis-je demander une consultation pour une personne mineure ?",
        answer:
          "Non. La plateforme est réservée aux adultes. Pour un enfant ou un adolescent, la question d'une chirurgie (par exemple des oreilles décollées) se pose avec le médecin traitant ou un chirurgien en consultation classique.",
      },
      {
        question: "Je vis à l'étranger, puis-je consulter un chirurgien en France ?",
        answer:
          "Oui, vous pouvez choisir un chirurgien dans un autre pays couvert par la plateforme. Prévoyez toutefois le suivi après l'opération, les déplacements et la prise en charge d'une éventuelle complication : notre guide sur la chirurgie à l'étranger détaille ces points.",
      },
      {
        question: "Que faire si une consultation se passe mal ?",
        answer:
          "Vous n'avez aucune obligation envers le chirurgien. Si son comportement ou ses pratiques vous semblent contraires à ce que décrit notre charte (pression commerciale, paiement exigé avant la fin du délai de réflexion, promesse de résultat), signalez-le-nous : nous pouvons retirer un chirurgien de l'annuaire.",
      },
      {
        question: "Je suis chirurgien, comment rejoindre la plateforme ?",
        answer:
          "Déposez une candidature depuis la page « Rejoindre » : nous vérifions votre inscription et votre qualification avant toute publication.",
      },
    ],
    ctaTitle: "Prêt à en parler à un chirurgien ?",
    ctaText: "Une demande prend quelques minutes, ne vous engage à rien et peut être supprimée à tout moment.",
  },
  "en-gb": {
    title: "How it works",
    description:
      "How Éclaira works: read, check, then ask up to 3 verified surgeons for a consultation, free of charge and with no obligation.",
    lead: "Éclaira helps you understand a procedure, its risks and its cost, then contact surgeons whose qualifications we have checked. The service is free for patients, carries no obligation and never replaces a medical consultation.",
    stepsTitle: "Step by step",
    steps: [
      {
        title: "Read",
        text: "Start with the procedure page and its sections on risks, cost, recovery, alternatives and \"before you decide\". Our practical guides cover what all procedures have in common: preparation, anaesthesia, scars and your rights as a patient.",
      },
      {
        title: "Check",
        text: "Browse the directory: every surgeon listed has been checked against the official register (GMC specialist register in the UK), with no current sanctions, valid indemnity cover and a CQC-registered clinic in England. The date of the last check is shown on each profile.",
      },
      {
        title: "Ask for a consultation",
        text: "Fill in a short form: procedure, town, timeframe, a few health questions the surgeon needs, and up to 3 surgeons of your choice. Your health data is encrypted and stored with a certified health data host.",
      },
      {
        title: "Hear back",
        text: "Only the surgeons you chose receive your request, and they contact you to offer an appointment. You get a confirmation email with a personal link to follow or delete your request at any time.",
      },
      {
        title: "Consult and take your time",
        text: "The consultation is where your situation is assessed, your questions answered and a written quote provided. The GMC asks doctors to give you time to reflect, and a cooling-off period of at least two weeks before surgery is recommended. You are under no obligation to go ahead.",
      },
    ],
    commitmentsTitle: "Our commitments",
    commitments: [
      "Free for patients, no obligation: you pay Éclaira nothing, now or later.",
      "Independence: surgeons pay a fixed subscription, with no commission on procedures; none can pay to be shown higher.",
      "Careful information: no promised outcomes, risks always explained, and every page reviewed by a qualified surgeon before it is indexed.",
      "Your data stays yours: shared only with the surgeons you choose, kept for no more than 6 months, and deletable at any time from your personal link.",
      "Adults only: no request is accepted from anyone under 18.",
    ],
    notForTitle: "What we don't do",
    notFor: [
      "We don't give personal medical advice or tell you whether a procedure is right for you: only a surgeon can, after examining you.",
      "We don't rank surgeons against each other, and we show no before-and-after photos or promotional reviews.",
      "We don't sell procedures, quote prices or take commission.",
      "We don't handle emergencies: if something goes wrong after surgery, call your surgeon, NHS 111 or 999.",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        question: "Is the service really free?",
        answer:
          "Yes. Patients pay Éclaira nothing. The platform is funded by surgeons' fixed subscriptions, which don't depend on the number of requests or procedures. Consultations and surgery are charged by the surgeon and the clinic, as set out in their quote.",
      },
      {
        question: "Am I committing to anything by sending a request?",
        answer:
          "No. A consultation request is not a booking or an agreement to surgery. You're free not to reply, to decline an appointment or not to go ahead after the consultation. You can delete your request at any time from the link in your email.",
      },
      {
        question: "How many surgeons can I contact?",
        answer:
          "Up to three per request. That lets you compare opinions without being contacted by everyone. A second opinion before cosmetic surgery is often worthwhile, especially when proposals differ.",
      },
      {
        question: "How are surgeons checked?",
        answer:
          "Before any profile is published, an administrator checks the surgeon's identity and entry on the GMC specialist register, that there are no current sanctions or conditions, their indemnity cover and the registration of the clinic where they operate (CQC in England). These checks are repeated every year, and a surgeon whose cover lapses is removed from the directory.",
      },
      {
        question: "How are surgeons ordered in the directory?",
        answer:
          "By objective criteria you choose: procedure, town and languages spoken. The order never depends on payment and doesn't reflect any preference on our part.",
      },
      {
        question: "Who can see my health information?",
        answer:
          "Only the surgeons you select, and only after your explicit consent. Data is encrypted and stored with a certified health data host. Our team accesses it only for technical or security reasons. It is never sold or used for advertising.",
      },
      {
        question: "How long is my data kept?",
        answer:
          "For no more than six months after your request, after which it is deleted automatically. You can delete it sooner from your personal link, or exercise your rights of access, correction and erasure under UK GDPR by writing to us (see our privacy notice).",
      },
      {
        question: "Why does the form ask health questions?",
        answer:
          "Because some details (smoking, pregnancy, medication, medical history) affect whether and how a procedure can be done. Sharing them up front helps the surgeon prepare a useful consultation. They don't replace an examination or the pre-operative assessment.",
      },
      {
        question: "Why are there no prices?",
        answer:
          "On purpose. The cost of a procedure depends on your situation, the technique, the hospital and the length of stay, so only a written quote after a consultation is reliable. Each procedure page explains what a quote includes and what affects the price, and one of our guides covers cost and financing.",
      },
      {
        question: "Can I trust the information on the site?",
        answer:
          "Every page follows a strict editorial charter: official and professional sources, risks always covered, no promises. It is reviewed by a qualified surgeon whose name and review date are shown. Until a page has been reviewed, a banner says so and it is kept out of search engines.",
      },
      {
        question: "Can I request a consultation for someone under 18?",
        answer:
          "No. The platform is for adults only. For a child or teenager, any question about surgery (for example prominent ears) should start with their GP.",
      },
      {
        question: "Can I see a surgeon in another country?",
        answer:
          "You can choose a surgeon in another country covered by the platform. Plan carefully for aftercare, travel and how a complication would be handled once you are home: our guide to surgery abroad covers this in detail.",
      },
      {
        question: "What if a consultation doesn't feel right?",
        answer:
          "You owe the surgeon nothing. If their approach seems at odds with our charter (pressure to book, a deposit demanded straight away, promised results), tell us: we can remove a surgeon from the directory.",
      },
      {
        question: "I'm a surgeon. How do I join?",
        answer: "Apply from the \"Join\" page: we check your registration and specialist qualification before anything is published.",
      },
    ],
    ctaTitle: "Ready to talk to a surgeon?",
    ctaText: "A request takes a few minutes, commits you to nothing and can be deleted at any time.",
  },
};
