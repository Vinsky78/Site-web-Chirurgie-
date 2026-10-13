import type { Locale } from "@/i18n/routing";
import type { Guide } from "../../types";

/** L'anesthésie en chirurgie esthétique : guide pratique (fr, en-gb). Brouillon à relire par le comité médical. */
export const guide: Record<Locale, Guide> = {
  fr: {
    id: "anaesthesia",
    locale: "fr",
    slug: "anesthesie-en-chirurgie-esthetique",
    title: "L'anesthésie en chirurgie esthétique",
    summary:
      "Anesthésie générale, locale ou sédation, consultation d'anesthésie, jeûne, sortie en ambulatoire et risques : ce qu'il faut savoir et préparer.",
    answer:
      "En chirurgie esthétique, l'anesthésie peut être générale, locorégionale, locale ou associer une anesthésie locale à une sédation, selon l'intervention, votre santé et l'avis de l'anesthésiste. En France, une consultation d'anesthésie avec un médecin anesthésiste-réanimateur est obligatoire avant toute intervention programmée, au moins 48 heures avant sauf urgence. Elle sert à évaluer vos risques, choisir la technique et vous donner des consignes précises (jeûne, médicaments, sortie). Les effets secondaires fréquents sont le plus souvent passagers ; les complications graves sont rares mais existent, et c'est pour les prévenir que les consignes doivent être suivies à la lettre.",
    steps: [
      {
        heading: "Les différents types d'anesthésie",
        paragraphs: [
          "L'anesthésie générale endort complètement : vous ne ressentez rien et ne gardez aucun souvenir de l'intervention. Une aide à la respiration (masque laryngé ou sonde d'intubation) est mise en place pendant le sommeil. Elle est habituelle pour une abdominoplastie, une augmentation mammaire, une réduction mammaire ou un lifting complet.",
          "L'anesthésie locale insensibilise uniquement la zone opérée par une injection ; vous restez éveillé. L'anesthésie locorégionale endort une région plus large (un bras, la moitié inférieure du corps) en injectant le produit près d'un nerf ou dans le dos. La sédation, souvent appelée « anesthésie vigile », associe une anesthésie locale à des médicaments relaxants injectés dans une veine : vous êtes somnolent mais respirez seul.",
          "Le choix ne revient ni au seul patient ni au seul chirurgien : il est décidé avec l'anesthésiste, qui tient compte de la durée de l'intervention, de la zone opérée et de votre état de santé.",
        ],
        bullets: [
          "Anesthésie locale, parfois avec sédation : souvent utilisée pour une blépharoplastie, une otoplastie de l'adulte ou une liposuccion limitée.",
          "Anesthésie générale : fréquente pour les interventions longues ou portant sur plusieurs zones.",
          "Même sous anesthésie locale avec sédation, une surveillance par une équipe d'anesthésie est nécessaire.",
        ],
      },
      {
        heading: "La consultation d'anesthésie : obligatoire et utile",
        paragraphs: [
          "En France, le Code de la santé publique impose une consultation d'anesthésie plusieurs jours avant toute intervention programmée, en pratique au moins 48 heures avant, sauf urgence. Elle est réalisée par un médecin anesthésiste-réanimateur, distinct du chirurgien. Une visite pré-anesthésique a lieu en plus dans les heures qui précèdent l'intervention.",
          "L'anesthésiste vous pose des questions précises et peut prescrire des examens (prise de sang, électrocardiogramme) selon votre âge et vos antécédents. Il vous explique la technique proposée, ses risques et les consignes à suivre, et recueille votre consentement.",
        ],
        bullets: [
          "Vos maladies (cœur, poumons, diabète, hypertension, apnée du sommeil, troubles de la coagulation, reflux).",
          "Vos anesthésies précédentes et leurs suites (nausées importantes, réveil difficile, problème d'intubation), et celles de votre famille.",
          "Vos allergies connues (médicaments, latex, antiseptiques, aliments).",
          "Votre consommation de tabac, d'alcool, de cannabis ou d'autres substances : répondez honnêtement, c'est une question de sécurité.",
          "L'état de vos dents (dents fragiles, couronnes, appareil amovible).",
          "Une éventuelle grossesse ou un allaitement.",
        ],
      },
      {
        heading: "Les médicaments et produits à signaler",
        paragraphs: [
          "Apportez la liste complète de vos traitements, y compris ce que vous prenez sans ordonnance. Certains médicaments doivent être arrêtés ou adaptés avant l'intervention, d'autres au contraire ne doivent surtout pas être interrompus. N'arrêtez jamais un traitement de vous-même : seul le médecin qui le prescrit, en lien avec l'anesthésiste, peut le modifier.",
        ],
        bullets: [
          "Anticoagulants et antiagrégants plaquettaires (aspirine comprise).",
          "Anti-inflammatoires, souvent à éviter avant une chirurgie car ils augmentent le saignement.",
          "Traitements du diabète et traitements injectables pour la perte de poids (agonistes du GLP-1) : ils peuvent ralentir la vidange de l'estomac et modifier les consignes de jeûne.",
          "Contraception hormonale ou traitement hormonal, à cause du risque de phlébite.",
          "Antidépresseurs, anxiolytiques, somnifères, traitements de l'épilepsie.",
          "Compléments alimentaires et plantes (ginkgo, millepertuis, ail en gélules, oméga-3 à forte dose, vitamine E).",
        ],
      },
      {
        heading: "Le jeûne avant l'anesthésie",
        paragraphs: [
          "Être à jeun limite le risque que le contenu de l'estomac remonte et passe dans les poumons pendant l'anesthésie (inhalation), une complication grave. Cette règle s'applique aussi en cas d'anesthésie locale avec sédation, car une anesthésie générale peut devenir nécessaire.",
          "Les délais sont fixés par l'anesthésiste et vous sont remis par écrit. À titre indicatif, il est souvent demandé de ne plus manger environ six heures avant, et de ne plus boire de liquides clairs (eau, thé ou café sans lait, jus sans pulpe) environ deux heures avant. Suivez toujours les consignes qui vous ont été données, même si elles diffèrent de ces repères.",
        ],
        bullets: [
          "Ne pas fumer le jour de l'intervention ; idéalement, arrêter plusieurs semaines avant.",
          "Pas d'alcool la veille.",
          "Prendre le matin uniquement les médicaments autorisés par l'anesthésiste, avec une petite gorgée d'eau.",
          "Retirer vernis, bijoux, piercings, lentilles de contact et maquillage.",
          "Prévenir l'équipe si vous avez mangé ou bu par erreur : l'intervention pourra être décalée, ce qui est plus sûr que de le taire.",
        ],
      },
      {
        heading: "La chirurgie ambulatoire et les conditions de sortie",
        paragraphs: [
          "Beaucoup d'interventions esthétiques se font en ambulatoire : vous entrez et sortez le même jour. La sortie est autorisée par un médecin après vérification de votre état (réveil complet, douleur contrôlée, capacité à boire, absence de saignement ou de nausées importantes).",
          "Les médicaments de l'anesthésie diminuent la vigilance et les réflexes pendant plusieurs heures, parfois davantage. C'est pourquoi un accompagnant est exigé pour le retour et pour la nuit qui suit.",
        ],
        bullets: [
          "Organiser à l'avance le retour avec un adulte : vous ne pouvez pas conduire ni rentrer seul en transports.",
          "Prévoir qu'une personne reste avec vous la nuit suivant l'intervention.",
          "Ne pas conduire, ne pas utiliser d'appareil dangereux et ne pas prendre de décision importante dans les 24 heures, ou plus longtemps si l'anesthésiste le précise.",
          "Ne pas boire d'alcool ni prendre de somnifère non prescrit ce soir-là.",
          "Garder près de vous le numéro à appeler en cas de problème, remis à la sortie.",
        ],
      },
      {
        heading: "Les suites fréquentes et les risques",
        paragraphs: [
          "Les effets les plus fréquents sont passagers : nausées et vomissements, mal de gorge ou voix enrouée après l'intubation, frissons, somnolence, maux de tête, douleur au point de perfusion. Des médicaments préventifs peuvent être proposés si vous avez déjà eu des nausées après une anesthésie.",
          "Moins souvent, une dent peut être abîmée lors de la mise en place de l'aide respiratoire, ou une réaction allergique peut survenir ; une allergie grave (choc anaphylactique) est rare mais reconnue et traitée immédiatement par l'équipe. Les complications graves (inhalation, trouble cardiaque ou respiratoire, lésion nerveuse après anesthésie locorégionale, toxicité des produits d'anesthésie locale utilisés en grande quantité, par exemple lors d'une liposuccion étendue) sont rares.",
          "La sécurité repose sur une évaluation préalable soignée, une surveillance continue pendant l'intervention et en salle de réveil, et le respect des consignes par le patient.",
        ],
      },
      {
        heading: "Calendrier indicatif",
        paragraphs: [
          "Ce calendrier est donné à titre d'exemple ; votre chirurgien et votre anesthésiste peuvent en fixer un autre.",
        ],
        bullets: [
          "Dès le devis : demander le nom de l'établissement et la date de la consultation d'anesthésie.",
          "Plusieurs semaines avant : arrêter le tabac, faire le point sur vos traitements avec votre médecin traitant.",
          "Au moins 48 heures avant (souvent bien plus tôt) : consultation d'anesthésie, avec vos ordonnances, résultats d'examens et carte de groupe sanguin si vous en avez une.",
          "La veille : vérifier les horaires de jeûne, préparer le retour et la nuit accompagnée.",
          "Le jour J : venir à jeun selon les consignes, sans bijoux ni maquillage, avec la liste de vos médicaments.",
          "Les 24 heures suivantes : repos, pas de conduite, présence d'un adulte.",
        ],
      },
    ],
    warningSigns: [
      "Difficulté à respirer, essoufflement ou douleur dans la poitrine : appelez le 15 ou le 112.",
      "Gonflement du visage, des lèvres ou de la langue, plaques sur la peau avec malaise : appelez le 15 ou le 112.",
      "Somnolence qui s'aggrave, confusion ou difficulté à rester éveillé après le retour à domicile.",
      "Vomissements répétés qui empêchent de boire ou de prendre les médicaments.",
      "Mollet douloureux, chaud ou gonflé.",
      "Fièvre élevée ou frissons importants dans les jours qui suivent.",
      "Impossibilité d'uriner plusieurs heures après une anesthésie locorégionale.",
      "Mal de tête intense, aggravé en position debout, après une anesthésie dans le dos.",
    ],
    resources: [
      { label: "Société française d'anesthésie et de réanimation (SFAR)", url: "https://sfar.org" },
      { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" },
      { label: "Légifrance – Code de la santé publique", url: "https://www.legifrance.gouv.fr" },
      { label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)", url: "https://www.sofcpre.fr" },
      { label: "ameli – Assurance maladie", url: "https://www.ameli.fr" },
    ],
    interventions: [
      "rhinoplasty",
      "abdominoplasty",
      "breast-augmentation",
      "liposuction",
      "blepharoplasty",
      "facelift",
      "otoplasty",
      "breast-lift",
      "breast-reduction",
      "gynecomastia",
      "fat-grafting",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  "en-gb": {
    id: "anaesthesia",
    locale: "en-gb",
    slug: "anaesthesia-for-cosmetic-surgery",
    title: "Anaesthesia for cosmetic surgery",
    summary:
      "General, local and regional anaesthesia, sedation, pre-assessment, fasting, going home the same day and the risks: what to know and prepare.",
    answer:
      "Cosmetic surgery may be done under general anaesthesia, regional anaesthesia, local anaesthesia, or local anaesthesia with sedation, depending on the procedure, your health and the anaesthetist's assessment. In the UK, anaesthetists are doctors registered with the GMC who have specialist training in anaesthesia; they are separate from your surgeon. Before your operation you should have a pre-assessment, and you should have the chance to discuss the anaesthetic with the anaesthetist, who will give you instructions on fasting, medicines and going home. Common side effects usually pass quickly; serious complications are rare but do happen, which is why following the instructions closely matters.",
    steps: [
      {
        heading: "Types of anaesthesia",
        paragraphs: [
          "A general anaesthetic puts you into a state of controlled unconsciousness: you feel nothing and will not remember the operation. A breathing device (a laryngeal mask or a breathing tube) is placed once you are asleep. It is usual for a tummy tuck, breast augmentation, breast reduction or a full facelift.",
          "A local anaesthetic numbs only the area being operated on, and you stay awake. A regional anaesthetic numbs a larger area, such as an arm or the lower half of the body, by injecting near a nerve or into the back. Sedation uses medicines given into a vein to make you relaxed and drowsy alongside a local anaesthetic; you keep breathing on your own.",
          "The choice is made together with the anaesthetist, who takes into account the length of the operation, the area treated and your general health.",
        ],
        bullets: [
          "Local anaesthetic, sometimes with sedation: often used for eyelid surgery, adult ear correction or limited liposuction.",
          "General anaesthetic: common for longer operations or those involving several areas.",
          "Sedation should be given and monitored by a trained team, even when the procedure itself seems minor.",
        ],
      },
      {
        heading: "Pre-assessment and meeting your anaesthetist",
        paragraphs: [
          "Most hospitals and clinics run a pre-operative assessment, in person or by phone, a few days or weeks before surgery. A nurse or doctor checks your health, may arrange tests (blood tests, an ECG) and gives you written instructions. You will usually meet your anaesthetist on the day of surgery, before the operation; if you have health problems or worries, ask to speak to them earlier.",
          "In the UK there is no fixed legal minimum interval between pre-assessment and surgery, but you should never feel rushed into consenting to an anaesthetic. The anaesthetist should explain the plan, the risks and the alternatives, and answer your questions.",
        ],
        bullets: [
          "Your medical conditions (heart, lungs, diabetes, high blood pressure, sleep apnoea, bleeding disorders, reflux).",
          "Previous anaesthetics and how you reacted (severe sickness, slow recovery, difficulty with a breathing tube), and any problems in your family.",
          "Allergies (medicines, latex, antiseptics, foods).",
          "Smoking, vaping, alcohol, cannabis or other drug use: answer honestly, it affects your safety.",
          "Loose or crowned teeth, dentures or a brace.",
          "Pregnancy or breastfeeding.",
        ],
      },
      {
        heading: "Medicines and supplements to mention",
        paragraphs: [
          "Bring a full list of everything you take, including medicines bought over the counter. Some need to be stopped or adjusted before surgery; others must not be stopped. Never stop a prescribed medicine on your own: the prescriber and the anaesthetist will advise you.",
        ],
        bullets: [
          "Blood thinners (anticoagulants and antiplatelets, including aspirin).",
          "Anti-inflammatory painkillers such as ibuprofen, which can increase bleeding.",
          "Diabetes medicines and weight-loss injections (GLP-1 medicines): they can slow stomach emptying and change your fasting instructions.",
          "The combined contraceptive pill or hormone replacement therapy, because of the risk of blood clots.",
          "Antidepressants, sleeping tablets, medicines for anxiety or epilepsy.",
          "Herbal remedies and supplements (ginkgo, St John's wort, garlic capsules, high-dose fish oil, vitamin E).",
        ],
      },
      {
        heading: "Fasting ('nil by mouth')",
        paragraphs: [
          "An empty stomach reduces the risk of stomach contents being breathed into the lungs during anaesthesia, which is a serious complication. This also applies to sedation, because a general anaesthetic may become necessary.",
          "Your hospital will give you written fasting times. As a general guide, you are often asked to stop eating about six hours before, and to stop clear fluids (water, black tea or coffee, squash) about two hours before; some hospitals allow sips of water until shortly before. Always follow the instructions you have been given.",
        ],
        bullets: [
          "Do not smoke or vape on the day of surgery; ideally stop several weeks before.",
          "No alcohol the day before.",
          "On the morning, take only the medicines you were told to take, with a small sip of water.",
          "Remove nail varnish, jewellery, piercings, contact lenses and make-up.",
          "Tell the team if you have eaten or drunk by mistake: delaying the operation is safer than keeping quiet.",
        ],
      },
      {
        heading: "Day surgery and going home",
        paragraphs: [
          "Many cosmetic procedures are done as day cases. You can go home once staff are satisfied that you are fully awake, your pain is controlled, you can drink, and there is no significant bleeding or sickness.",
          "Anaesthetic drugs affect your alertness, judgement and reflexes for some time afterwards. This is why you need a responsible adult to take you home and stay with you.",
        ],
        bullets: [
          "Arrange in advance for an adult to collect you: you cannot drive or travel home alone on public transport.",
          "Have someone stay with you for at least 24 hours, or as advised.",
          "For at least 24 hours (longer if advised), do not drive, operate machinery, sign legal documents or make important decisions.",
          "Check with your insurer about driving after surgery: you must be able to control the car safely, including an emergency stop.",
          "No alcohol or unprescribed sleeping tablets that evening.",
          "Keep the hospital's contact number close by.",
        ],
      },
      {
        heading: "Common side effects and risks",
        paragraphs: [
          "Common, usually short-lived effects include feeling sick or vomiting, a sore throat or hoarse voice after a breathing tube, shivering, drowsiness, headache and bruising where the drip was placed. Anti-sickness medicines can be given if you have been sick after a previous anaesthetic.",
          "Less commonly, a tooth can be damaged when the breathing device is placed, or an allergic reaction can occur; a severe allergic reaction (anaphylaxis) is rare and is treated immediately. Serious complications, such as breathing in stomach contents, heart or breathing problems, nerve damage after regional anaesthesia, or toxicity from large amounts of local anaesthetic (for example in extensive liposuction), are rare.",
          "The Royal College of Anaesthetists publishes patient leaflets explaining these risks in more detail, which you can read before your appointment.",
        ],
      },
      {
        heading: "Indicative timeline",
        paragraphs: [
          "This is an example only; your surgeon and anaesthetist may give you a different plan.",
        ],
        bullets: [
          "When you book: ask where the operation will take place and how pre-assessment is organised.",
          "Several weeks before: stop smoking and review your medicines with your GP or prescriber.",
          "Days or weeks before: pre-assessment, bringing your medicine list and any recent test results.",
          "The day before: check your fasting times and confirm who will take you home and stay with you.",
          "On the day: arrive fasted as instructed, without jewellery or make-up, and meet your anaesthetist.",
          "The next 24 hours: rest, no driving, an adult with you.",
        ],
      },
    ],
    warningSigns: [
      "Difficulty breathing, breathlessness or chest pain: call 999.",
      "Swelling of the face, lips or tongue, or a rash with feeling faint: call 999.",
      "Drowsiness that is getting worse, confusion or difficulty staying awake after you get home.",
      "Repeated vomiting that stops you drinking or keeping medicines down.",
      "A painful, warm or swollen calf.",
      "High temperature or shivering in the days after surgery: contact your clinic or NHS 111.",
      "Being unable to pass urine for several hours after a regional anaesthetic.",
      "A severe headache that is worse when you stand up, after an injection in the back.",
    ],
    resources: [
      { label: "Royal College of Anaesthetists – patient information", url: "https://www.rcoa.ac.uk" },
      { label: "NHS – general anaesthesia and local anaesthesia", url: "https://www.nhs.uk" },
      { label: "General Medical Council (GMC) – medical register", url: "https://www.gmc-uk.org" },
      { label: "Care Quality Commission (CQC)", url: "https://www.cqc.org.uk" },
      { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" },
    ],
    interventions: [
      "rhinoplasty",
      "abdominoplasty",
      "breast-augmentation",
      "liposuction",
      "blepharoplasty",
      "facelift",
      "otoplasty",
      "breast-lift",
      "breast-reduction",
      "gynecomastia",
      "fat-grafting",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
};
