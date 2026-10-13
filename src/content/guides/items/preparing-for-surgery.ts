import type { Locale } from "@/i18n/routing";
import type { Guide } from "../../types";

/** Se préparer à une chirurgie esthétique : guide pratique (fr, en-gb). Brouillon à relire par le comité médical. */
export const guide: Record<Locale, Guide> = {
  fr: {
    id: "preparing-for-surgery",
    locale: "fr",
    slug: "se-preparer-a-une-chirurgie-esthetique",
    title: "Se préparer à une chirurgie esthétique",
    summary:
      "Tabac, médicaments, consultation d'anesthésie, jeûne, douche, retour à domicile : ce qu'il faut organiser dans les semaines et les jours avant l'opération.",
    answer:
      "Une bonne préparation réduit certains risques et rend les suites plus simples. Les points essentiels sont l'arrêt du tabac plusieurs semaines avant, la liste complète de vos médicaments et compléments à montrer au chirurgien et à l'anesthésiste, la consultation d'anesthésie obligatoire en France et le respect strict des consignes de jeûne et d'hygiène. Il faut aussi organiser à l'avance le trajet de retour, une présence à la maison les premiers jours et l'arrêt de travail. Ne modifiez jamais un traitement de votre propre initiative : chaque arrêt ou maintien se décide avec un médecin.",
    steps: [
      {
        heading: "Arrêter le tabac le plus tôt possible",
        paragraphs: [
          "Le tabac diminue l'apport d'oxygène aux tissus. Il augmente le risque de mauvaise cicatrisation, d'infection, de souffrance de la peau (nécrose) et de complications respiratoires pendant l'anesthésie. Ce risque est particulièrement important pour les interventions qui décollent la peau, comme l'abdominoplastie, le lifting ou la plastie mammaire.",
          "Les chirurgiens demandent en général un arrêt complet au moins 4 à 6 semaines avant l'opération et jusqu'à la cicatrisation, soit plusieurs semaines après. Certains refusent d'opérer un patient qui continue de fumer. La cigarette électronique et les substituts nicotiniques contiennent de la nicotine, qui resserre aussi les vaisseaux : demandez au chirurgien ce qu'il accepte.",
        ],
        bullets: [
          "Fixer une date d'arrêt dès que l'intervention est décidée.",
          "Se faire aider : médecin traitant, pharmacien, Tabac info service (39 89).",
          "Signaler honnêtement toute consommation restante, y compris de cannabis.",
          "Limiter l'alcool dans les jours qui précèdent.",
        ],
      },
      {
        heading: "Faire la liste de vos médicaments et compléments",
        paragraphs: [
          "Certains produits augmentent le risque de saignement ou de caillot, ou interagissent avec l'anesthésie. Apportez à la consultation la liste complète de ce que vous prenez, y compris ce qui est vendu sans ordonnance.",
          "C'est le chirurgien, l'anesthésiste ou le médecin qui vous suit qui décide s'il faut arrêter, remplacer ou poursuivre un traitement, et à quelle date. N'arrêtez jamais seul un anticoagulant, un antiagrégant prescrit pour le cœur, un antidépresseur ou un traitement chronique : l'arrêt brutal peut être dangereux.",
        ],
        bullets: [
          "Aspirine et anti-inflammatoires (ibuprofène, kétoprofène…) : souvent à éviter avant l'opération, sur avis médical.",
          "Anticoagulants et antiagrégants : décision obligatoirement médicale.",
          "Contraception hormonale ou traitement hormonal de la ménopause : à signaler, car ils augmentent le risque de phlébite.",
          "Compléments et plantes (ginkgo, ail, oméga-3, vitamine E, millepertuis, ginseng…) : à signaler, certains favorisent le saignement.",
          "Traitements du diabète, de l'hypertension, de la thyroïde, médicaments amaigrissants injectables : consignes spécifiques à demander.",
          "Allergies connues (médicaments, latex, pansements) : à mentionner.",
        ],
      },
      {
        heading: "La consultation d'anesthésie et les examens",
        paragraphs: [
          "En France, la consultation d'anesthésie est obligatoire pour toute intervention programmée sous anesthésie générale ou locorégionale. Elle a lieu plusieurs jours avant l'opération, en principe au moins 48 heures avant, avec un médecin anesthésiste-réanimateur. Il évalue votre état de santé, explique le type d'anesthésie et donne les consignes de jeûne et de traitement.",
          "Selon votre âge, vos antécédents et l'intervention, des examens peuvent être demandés : prise de sang, électrocardiogramme, mammographie ou échographie avant une chirurgie mammaire, test de grossesse. Le chirurgien peut aussi prendre des photographies médicales, qui restent dans votre dossier.",
        ],
        bullets: [
          "Apporter : ordonnances en cours, résultats d'examens, carnet de santé, compte rendu d'interventions ou d'anesthésies passées.",
          "Signaler : apnée du sommeil, problèmes de coagulation, antécédent de phlébite ou d'embolie, réaction à une anesthésie précédente.",
          "Demander par écrit les consignes de jeûne, de traitement et l'heure d'arrivée.",
        ],
      },
      {
        heading: "Préparer la maison et faire les achats avant",
        paragraphs: [
          "Les premiers jours, se baisser, porter ou lever les bras peut être difficile selon l'intervention. Mieux vaut que tout soit prêt avant de partir.",
        ],
        bullets: [
          "Médicaments prescrits (antalgiques, éventuelles injections anticoagulantes) retirés en pharmacie avant l'opération.",
          "Gaine, panty ou soutien-gorge postopératoire à la bonne taille, si le chirurgien l'a prescrit.",
          "Pansements et produits de soin indiqués sur l'ordonnance, thermomètre.",
          "Coussins ou oreillers supplémentaires pour dormir surélevé(e) ou sur le dos.",
          "Vêtements amples qui s'ouvrent devant, chaussures sans lacets.",
          "Repas simples préparés ou congelés, bouteilles d'eau, objets du quotidien rangés à hauteur de main.",
          "Tapis glissants retirés, passage dégagé jusqu'à la salle de bains.",
        ],
      },
      {
        heading: "Organiser le retour et l'aide à domicile",
        paragraphs: [
          "Après une anesthésie, vous ne pouvez pas conduire pour rentrer chez vous, ni prendre seul(e) les transports. En chirurgie ambulatoire, la sortie le jour même n'est autorisée que si un adulte vous raccompagne et, en règle générale, reste avec vous la première nuit.",
          "Prévoyez une aide pour les premiers jours, plus longtemps après une abdominoplastie ou si vous avez de jeunes enfants à porter. Organisez à l'avance la garde des enfants et des animaux.",
        ],
        bullets: [
          "Accompagnant pour la sortie et la première nuit confirmé.",
          "Aide pour les courses, le ménage et les enfants pendant au moins quelques jours.",
          "Numéro du chirurgien et de l'établissement enregistré dans votre téléphone.",
          "Rendez-vous de contrôle notés dans l'agenda.",
        ],
      },
      {
        heading: "Anticiper l'arrêt de travail",
        paragraphs: [
          "La durée d'arrêt dépend de l'intervention et de votre métier : quelques jours pour un geste limité, souvent deux à trois semaines ou plus après une abdominoplastie ou une chirurgie mammaire, davantage pour un travail physique. Parlez-en avec le chirurgien dès la consultation.",
          "Pour une chirurgie purement esthétique, l'arrêt de travail peut ne pas être indemnisé par l'Assurance maladie : renseignez-vous auprès de votre caisse et de votre employeur. Vous pouvez aussi poser des congés.",
        ],
      },
      {
        heading: "La veille et le matin : jeûne et douche",
        paragraphs: [
          "Le jeûne évite que le contenu de l'estomac passe dans les poumons pendant l'anesthésie. À titre indicatif, il est souvent demandé de ne plus manger dans les 6 heures qui précèdent et de ne boire que des liquides clairs (eau, thé ou café sans lait) jusqu'à 2 heures avant. Seules les consignes écrites de votre anesthésiste font foi.",
          "La douche préopératoire réduit le risque d'infection. Elle se fait la veille et/ou le matin, souvent avec un savon antiseptique prescrit, en lavant aussi les cheveux et en insistant sur la zone opérée, le nombril et les plis.",
        ],
        bullets: [
          "Ne pas fumer, ne pas mâcher de chewing-gum ni sucer de bonbon le matin.",
          "Ne pas raser la zone opérée vous-même, sauf consigne contraire.",
          "Retirer vernis, faux ongles, maquillage, bijoux et piercings.",
          "Prévenir l'établissement en cas de fièvre, rhume, lésion de peau ou règles inattendues qui vous inquiètent.",
        ],
      },
      {
        heading: "La valise pour l'établissement",
        paragraphs: [
          "Même pour une hospitalisation de jour, prévoyez quelques affaires. L'établissement vous indique ce qui est fourni.",
        ],
        bullets: [
          "Pièce d'identité, carte Vitale, carte de mutuelle, devis signé et consentement.",
          "Ordonnances, résultats d'examens, documents de la consultation d'anesthésie.",
          "Vos traitements habituels dans leur boîte d'origine.",
          "Vêtements amples et confortables pour la sortie, gaine ou soutien-gorge si demandé.",
          "Lunettes plutôt que lentilles, chargeur de téléphone.",
          "Coordonnées de la personne qui vient vous chercher.",
        ],
      },
    ],
    warningSigns: [
      "Fièvre, toux, infection ou plaie sur la zone à opérer dans les jours qui précèdent : prévenir le chirurgien, l'intervention peut devoir être reportée.",
      "Douleur, rougeur ou gonflement d'un mollet avant l'opération, surtout sous contraception hormonale : consulter rapidement.",
      "Essoufflement brutal ou douleur dans la poitrine : appeler le 15 ou le 112.",
      "Oubli de signaler un médicament anticoagulant ou un complément : prévenir l'équipe avant l'intervention.",
      "Grossesse possible : le signaler avant toute anesthésie.",
      "Doute sur les consignes de jeûne ou de traitement : appeler l'établissement plutôt que deviner.",
    ],
    resources: [
      { label: "Société française d'anesthésie et de réanimation (SFAR)", url: "https://sfar.org" },
      { label: "Société française de chirurgie plastique, reconstructrice et esthétique (SOFCPRE)", url: "https://www.sofcpre.fr" },
      { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" },
      { label: "Assurance maladie (ameli)", url: "https://www.ameli.fr" },
      { label: "Tabac info service", url: "https://www.tabac-info-service.fr" },
    ],
    interventions: [
      "abdominoplasty",
      "breast-augmentation",
      "rhinoplasty",
      "liposuction",
      "facelift",
      "breast-lift",
      "breast-reduction",
      "blepharoplasty",
      "gynecomastia",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  "en-gb": {
    id: "preparing-for-surgery",
    locale: "en-gb",
    slug: "preparing-for-cosmetic-surgery",
    title: "Preparing for cosmetic surgery",
    summary:
      "Smoking, medicines, pre-operative assessment, fasting, showering, getting home: what to organise in the weeks and days before your operation.",
    answer:
      "Good preparation lowers some risks and makes recovery easier. The key points are stopping smoking several weeks beforehand, giving your surgeon and anaesthetist a complete list of your medicines and supplements, attending your pre-operative assessment and following fasting and hygiene instructions exactly. You also need to arrange in advance how you will get home, who will stay with you for the first days and time off work. Never stop or change a medicine on your own: every decision to stop or continue a treatment should be made with a doctor.",
    steps: [
      {
        heading: "Stop smoking as early as you can",
        paragraphs: [
          "Smoking reduces the oxygen reaching your tissues. It increases the risk of poor wound healing, infection, skin loss (necrosis) and breathing problems during anaesthesia. The risk is particularly high for operations that lift the skin, such as a tummy tuck, facelift or breast lift.",
          "Surgeons usually ask you to stop completely at least 4 to 6 weeks before surgery and until your wounds have healed, which means several weeks afterwards. Some will not operate on someone who still smokes. Vapes and nicotine replacement also contain nicotine, which narrows blood vessels too: ask your surgeon what they accept.",
        ],
        bullets: [
          "Set a quit date as soon as the operation is decided.",
          "Get support: your GP, a pharmacist or a local NHS Stop Smoking Service.",
          "Be honest about anything you still use, including cannabis.",
          "Cut down on alcohol in the days before surgery.",
        ],
      },
      {
        heading: "List your medicines and supplements",
        paragraphs: [
          "Some products increase the risk of bleeding or blood clots, or interact with anaesthesia. Bring a complete list of everything you take to your consultation, including anything bought over the counter.",
          "Your surgeon, anaesthetist or the doctor who prescribes your treatment decides whether to stop, switch or continue a medicine, and when. Never stop an anticoagulant, a heart medicine such as clopidogrel, an antidepressant or any long-term treatment on your own: stopping suddenly can be dangerous.",
        ],
        bullets: [
          "Aspirin and anti-inflammatories (ibuprofen, naproxen…): often avoided before surgery, on medical advice.",
          "Anticoagulants and antiplatelet medicines: the decision must be medical.",
          "Combined contraceptive pill or HRT: tell your surgeon, as they increase the risk of DVT.",
          "Herbal remedies and supplements (ginkgo, garlic, fish oil, vitamin E, St John's wort, ginseng…): mention them, as some increase bleeding.",
          "Diabetes, blood pressure or thyroid medicines, and weight-loss injections: ask for specific instructions.",
          "Known allergies (medicines, latex, dressings): mention them.",
        ],
      },
      {
        heading: "Pre-operative assessment and tests",
        paragraphs: [
          "Before a planned operation under anaesthetic, your hospital will arrange a pre-operative assessment, usually with a nurse and sometimes with the anaesthetist. It checks that you are fit for surgery, explains the anaesthetic and gives you instructions about fasting and medicines.",
          "Depending on your age, health and the operation, tests may be needed: blood tests, an ECG, a breast scan before breast surgery, or a pregnancy test. Your surgeon may also take medical photographs, which are kept in your records.",
        ],
        bullets: [
          "Bring: your current prescriptions, test results and details of any previous operations or anaesthetics.",
          "Mention: sleep apnoea, bleeding problems, a past DVT or pulmonary embolism, or a reaction to a previous anaesthetic.",
          "Ask for fasting, medicine and arrival instructions in writing.",
        ],
      },
      {
        heading: "Prepare your home and shop in advance",
        paragraphs: [
          "For the first few days, bending, lifting or raising your arms may be difficult, depending on the operation. It helps to have everything ready before you go in.",
        ],
        bullets: [
          "Prescribed medicines (painkillers, any blood-thinning injections) collected before the operation.",
          "Compression garment or post-surgery bra in the right size, if your surgeon has asked for one.",
          "Dressings and wound-care products listed by the hospital, and a thermometer.",
          "Extra pillows so you can sleep propped up or on your back.",
          "Loose clothes that open at the front and slip-on shoes.",
          "Simple meals prepared or frozen, water to hand, everyday items stored at waist height.",
          "Loose rugs removed and a clear path to the bathroom.",
        ],
      },
      {
        heading: "Arrange your journey home and help at home",
        paragraphs: [
          "After an anaesthetic you must not drive yourself home or travel alone on public transport. After day surgery you will usually only be discharged if a responsible adult takes you home and stays with you for the first night.",
          "Arrange help for the first days, and for longer after a tummy tuck or if you have young children to lift. Organise childcare and pet care in advance.",
        ],
        bullets: [
          "Someone confirmed to collect you and stay the first night.",
          "Help with shopping, housework and children for at least a few days.",
          "Your surgeon's and hospital's numbers saved in your phone.",
          "Follow-up appointments in your diary.",
        ],
      },
      {
        heading: "Plan time off work",
        paragraphs: [
          "How long you need depends on the operation and your job: a few days for a minor procedure, often two to three weeks or more after a tummy tuck or breast surgery, and longer for physical work. Discuss it with your surgeon at the consultation.",
          "Your employer's sick pay policy may not cover elective cosmetic surgery, and you may need to use annual leave. Check with your employer before booking. Your surgeon or hospital can provide a fit note if needed.",
        ],
      },
      {
        heading: "The day before and the morning: fasting and showering",
        paragraphs: [
          "Fasting stops the contents of your stomach getting into your lungs during anaesthesia. As a general guide, you are often asked not to eat for 6 hours beforehand and to drink only clear fluids (water, black tea or coffee) until 2 hours before. Only the written instructions from your hospital count.",
          "Showering before surgery reduces the risk of infection. Shower the day before and/or on the morning, using any antiseptic wash you were given, washing your hair and paying attention to the area to be operated on, the belly button and skin folds.",
        ],
        bullets: [
          "No smoking, chewing gum or sweets on the morning.",
          "Do not shave the operation area yourself unless told to.",
          "Remove nail varnish, false nails, make-up, jewellery and piercings.",
          "Tell the hospital if you have a fever, a cold or a skin problem near the operation site.",
        ],
      },
      {
        heading: "Your hospital bag",
        paragraphs: [
          "Even for day surgery, take a few things with you. The hospital will tell you what it provides.",
        ],
        bullets: [
          "Photo ID, your signed consent form and treatment plan.",
          "Prescriptions, test results and pre-assessment paperwork.",
          "Your usual medicines in their original packaging.",
          "Loose, comfortable clothes for going home, and your garment or bra if requested.",
          "Glasses instead of contact lenses, and a phone charger.",
          "Contact details for the person collecting you.",
        ],
      },
    ],
    warningSigns: [
      "Fever, a cough, an infection or a wound near the operation site in the days before: tell your surgeon, as surgery may need to be postponed.",
      "Pain, redness or swelling in one calf before surgery, especially if you take the pill or HRT: seek advice promptly.",
      "Sudden breathlessness or chest pain: call 999.",
      "You forgot to mention an anticoagulant or supplement: tell the team before the operation.",
      "You might be pregnant: say so before any anaesthetic.",
      "You are unsure about fasting or medicine instructions: call the hospital rather than guess, or NHS 111 out of hours.",
    ],
    resources: [
      { label: "NHS – preparing for surgery and stopping smoking", url: "https://www.nhs.uk" },
      { label: "Royal College of Anaesthetists", url: "https://www.rcoa.ac.uk" },
      { label: "Royal College of Surgeons of England", url: "https://www.rcseng.ac.uk" },
      { label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)", url: "https://www.bapras.org.uk" },
      { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" },
    ],
    interventions: [
      "abdominoplasty",
      "breast-augmentation",
      "rhinoplasty",
      "liposuction",
      "facelift",
      "breast-lift",
      "breast-reduction",
      "blepharoplasty",
      "gynecomastia",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
};
