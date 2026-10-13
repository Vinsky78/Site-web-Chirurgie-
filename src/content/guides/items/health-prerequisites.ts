import type { Locale } from "@/i18n/routing";
import type { Guide } from "../../types";

/** Conditions de santé avant une chirurgie esthétique : guide pratique (fr, en-gb). Brouillon à relire par le comité médical. */
export const guide: Record<Locale, Guide> = {
  fr: {
    id: "health-prerequisites",
    locale: "fr",
    slug: "conditions-de-sante-avant-une-chirurgie-esthetique",
    title: "Les conditions de santé avant une chirurgie esthétique",
    summary:
      "Tabac, poids, diabète, tension, coagulation, médicaments, grossesse, bilan : ce qui doit être réglé et signalé avant une chirurgie esthétique.",
    answer:
      "Une chirurgie esthétique n'est pas une urgence : elle se programme quand l'état de santé le permet, pour réduire le risque de complications. Les points les plus importants sont l'arrêt du tabac et du vapotage plusieurs semaines avant et après, un poids stable, un diabète et une tension bien équilibrés, l'absence de trouble de la coagulation non pris en charge et la liste complète de vos médicaments et compléments. La grossesse, l'allaitement et certains antécédents imposent d'attendre. Le chirurgien et l'anesthésiste peuvent reporter ou refuser une intervention si le risque leur paraît trop élevé : être honnête avec eux protège avant tout votre santé.",
    steps: [
      {
        heading: "Pourquoi l'état de santé compte autant",
        paragraphs: [
          "En chirurgie esthétique, l'intervention n'est pas médicalement nécessaire. Le rapport entre le bénéfice attendu et les risques doit donc être particulièrement favorable. Un problème de santé mal contrôlé peut augmenter le risque d'infection, d'hématome, de phlébite, de mauvaise cicatrisation ou de complication liée à l'anesthésie.",
          "La bonne nouvelle est que beaucoup de ces facteurs se corrigent : arrêter de fumer, stabiliser son poids, équilibrer un diabète ou une tension, adapter un traitement. Prendre quelques semaines ou quelques mois pour se préparer est souvent la décision la plus prudente.",
        ],
        bullets: [
          "Le chirurgien évalue la faisabilité de l'intervention et les risques liés à la zone opérée.",
          "Le médecin anesthésiste évalue les risques liés à l'anesthésie, lors d'une consultation obligatoire en France, réalisée plusieurs jours avant l'intervention.",
          "Votre médecin traitant connaît vos antécédents : il peut aider à faire le point et à équilibrer un traitement.",
          "Chacun d'eux peut demander un report, des examens ou l'avis d'un spécialiste.",
        ],
      },
      {
        heading: "Tabac et vapotage : arrêter avant et après",
        paragraphs: [
          "Le tabac est l'un des principaux facteurs de complications évitables en chirurgie esthétique. La nicotine resserre les petits vaisseaux et le monoxyde de carbone diminue l'oxygène apporté aux tissus. Résultat : la peau et les tissus décollés pendant l'intervention sont moins bien irrigués. Le risque de nécrose (mort d'une partie de la peau), de désunion de la cicatrice, d'infection et de cicatrice élargie augmente nettement, en particulier pour l'abdominoplastie, le lifting du visage, le lifting des seins et la réduction mammaire.",
          "La plupart des chirurgiens demandent un arrêt complet plusieurs semaines avant l'intervention, souvent au moins quatre à six semaines, et jusqu'à cicatrisation complète après, soit en général plusieurs semaines. Certains refusent d'opérer une personne qui continue de fumer, notamment pour les interventions à grand décollement.",
          "La cigarette électronique, les sachets de nicotine et les substituts nicotiniques contiennent souvent de la nicotine, qui garde son effet sur les vaisseaux. Demandez à votre chirurgien ce qu'il autorise : beaucoup demandent l'arrêt de toute source de nicotine. Le cannabis fumé pose aussi problème, pour les vaisseaux comme pour l'anesthésie.",
        ],
        bullets: [
          "Fixer une date d'arrêt dès la décision prise, pas la semaine précédant l'intervention.",
          "Se faire aider : médecin traitant, pharmacien, Tabac Info Service (39 89).",
          "Dire au chirurgien et à l'anesthésiste si vous fumez ou vapotez encore, même un peu : ils peuvent adapter le projet.",
          "Ne pas reprendre après l'intervention avant l'accord du chirurgien, même pour « une seule cigarette ».",
          "Un dépistage de la nicotine (test urinaire) est parfois demandé avant certaines interventions.",
        ],
      },
      {
        heading: "Un poids stable et un IMC raisonnable",
        paragraphs: [
          "L'indice de masse corporelle (IMC) est le poids en kilos divisé par la taille en mètres au carré. Plus il est élevé, plus le risque de complications augmente : infection, sérome, désunion, phlébite et embolie pulmonaire, difficultés d'anesthésie. Beaucoup de chirurgiens considèrent que le risque augmente nettement au-delà d'un IMC d'environ 30, et certains fixent un seuil au-delà duquel ils n'opèrent pas pour certaines interventions.",
          "La stabilité du poids compte autant que le chiffre. Une perte ou une prise de poids importante après l'intervention modifie le résultat, en particulier après une abdominoplastie, une liposuccion, un lifting du corps ou une chirurgie des seins. Il est en général conseillé d'avoir un poids stable depuis plusieurs mois avant de se faire opérer.",
        ],
        bullets: [
          "Si vous êtes en train de perdre du poids, attendre d'avoir atteint votre objectif et de vous y être stabilisé(e).",
          "Après une chirurgie de l'obésité (sleeve, bypass), on attend en général que le poids soit stable depuis au moins 12 mois, souvent 12 à 18 mois après l'opération, avec un bilan nutritionnel (carences en fer, vitamines, protéines).",
          "La liposuccion n'est pas un traitement du surpoids : elle traite des amas localisés.",
          "Les médicaments pour perdre du poids, comme les analogues du GLP-1 (sémaglutide et apparentés), doivent être signalés : ils ralentissent la vidange de l'estomac, ce qui compte pour l'anesthésie, et l'équipe vous dira s'il faut les interrompre et quand.",
        ],
      },
      {
        heading: "Diabète, hypertension et autres maladies chroniques",
        paragraphs: [
          "Un diabète mal équilibré augmente le risque d'infection et ralentit la cicatrisation. Le chirurgien ou l'anesthésiste peut demander une hémoglobine glyquée (HbA1c) récente et reporter l'intervention si le diabète n'est pas contrôlé. L'organisation des médicaments et de l'insuline le jour de l'intervention doit être prévue à l'avance.",
          "Une hypertension non contrôlée augmente le risque de saignement et d'hématome, en particulier après un lifting du visage, et le risque cardiovasculaire pendant l'anesthésie. La tension doit être bien équilibrée avant l'intervention ; ne modifiez jamais votre traitement de vous-même.",
          "D'autres maladies chroniques demandent une évaluation, parfois avec le spécialiste qui vous suit. Elles ne contre-indiquent pas toujours la chirurgie, mais elles doivent être stables.",
        ],
        bullets: [
          "Maladie du cœur ou des poumons, asthme, apnée du sommeil (avec ou sans appareil).",
          "Maladie des reins, du foie ou de la thyroïde.",
          "Maladie auto-immune ou inflammatoire, traitement immunosuppresseur ou biothérapie.",
          "Corticoïdes au long cours, qui ralentissent la cicatrisation.",
          "Antécédent de cancer, en particulier du sein avant une chirurgie mammaire.",
          "Infection en cours (dentaire, urinaire, cutanée, respiratoire) : elle peut imposer un report, surtout avant la pose d'un implant.",
          "Allergies connues : antibiotiques, latex, pansements, produits d'anesthésie.",
        ],
      },
      {
        heading: "Troubles de la coagulation et risque de phlébite",
        paragraphs: [
          "Deux risques opposés doivent être évalués : saigner trop (hématome, hémorragie) et faire un caillot (phlébite, embolie pulmonaire). Une intervention longue, une anesthésie générale, l'immobilité et certaines interventions comme l'abdominoplastie ou le lifting du corps augmentent le risque de caillot.",
          "L'anesthésiste et le chirurgien évaluent ce risque à partir de vos antécédents. Selon le cas, ils prescrivent des bas de contention, une injection d'anticoagulant après l'intervention et un lever précoce.",
        ],
        bullets: [
          "Saignements faciles : bleus fréquents sans raison, saignement prolongé après une coupure, une extraction dentaire ou une précédente opération, règles très abondantes.",
          "Maladie connue de la coagulation (maladie de Willebrand, hémophilie, autre).",
          "Antécédent personnel de phlébite ou d'embolie pulmonaire.",
          "Antécédent familial de phlébite ou thrombophilie connue dans la famille.",
          "Varices importantes, insuffisance veineuse, voyage long prévu juste avant ou après l'intervention.",
        ],
      },
      {
        heading: "Médicaments et compléments à signaler",
        paragraphs: [
          "Apportez la liste complète de ce que vous prenez, y compris ce qui est acheté sans ordonnance, les produits « naturels » et les compléments alimentaires. Certains augmentent le saignement, d'autres interagissent avec l'anesthésie ou augmentent le risque de caillot.",
          "Règle essentielle : n'arrêtez jamais un traitement prescrit (anticoagulant, antiagrégant, antihypertenseur, antidépresseur, antiépileptique, etc.) sans l'avis du médecin qui le prescrit et de l'anesthésiste. Un arrêt brutal peut être dangereux. C'est à l'équipe d'organiser un éventuel arrêt ou relais.",
        ],
        bullets: [
          "Anticoagulants et antiagrégants plaquettaires (dont l'aspirine, même à petite dose) : arrêt ou relais à organiser par les médecins, jamais seul(e).",
          "Anti-inflammatoires (ibuprofène, kétoprofène, naproxène…) : souvent à éviter dans les jours qui précèdent, selon la consigne de l'équipe.",
          "Compléments qui peuvent favoriser le saignement : ginkgo, oméga-3 et huiles de poisson, ail en gélules, ginseng, vitamine E à forte dose, curcuma, entre autres. Ils sont souvent à arrêter environ deux semaines avant, sur consigne.",
          "Millepertuis : il interagit avec de nombreux médicaments, dont certains utilisés pendant l'anesthésie.",
          "Pilule œstroprogestative, traitement hormonal de la ménopause, certains traitements hormonaux : ils augmentent le risque de thrombose ; l'équipe dira s'il faut les suspendre et prévoir une autre contraception.",
          "Isotrétinoïne (traitement de l'acné) : elle peut gêner la cicatrisation ; le chirurgien peut demander d'attendre plusieurs mois après l'arrêt.",
          "Analogues du GLP-1, corticoïdes, immunosuppresseurs, antidépresseurs et anxiolytiques : à signaler systématiquement.",
          "Drogues et produits récréatifs : à signaler aussi, car ils interagissent avec l'anesthésie. L'information reste couverte par le secret médical.",
        ],
      },
      {
        heading: "Alcool",
        paragraphs: [
          "L'alcool favorise le saignement, perturbe l'effet de certains médicaments et peut gêner la récupération. Une consommation régulière importante a aussi des effets sur le foie, la coagulation et le risque de sevrage pendant l'hospitalisation.",
        ],
        bullets: [
          "Éviter l'alcool dans les jours qui précèdent l'intervention et pendant la période où vous prenez des antalgiques.",
          "Dire honnêtement à l'anesthésiste combien vous buvez habituellement : un sevrage non anticipé peut être dangereux.",
          "Ne pas boire d'alcool le soir de la sortie, surtout avec des médicaments contre la douleur ou pour dormir.",
        ],
      },
      {
        heading: "Grossesse, allaitement et projet d'enfant",
        paragraphs: [
          "La chirurgie esthétique n'est pas réalisée pendant la grossesse. Un test de grossesse peut être demandé avant l'intervention. Après un accouchement, le corps continue de changer pendant plusieurs mois : il est conseillé d'attendre que le poids et la silhouette se soient stabilisés.",
          "Pour la chirurgie des seins, on attend en général plusieurs mois après la fin de l'allaitement, souvent environ six mois, pour que la poitrine retrouve sa forme stable. Pour l'abdominoplastie, il est recommandé d'avoir terminé ses grossesses, car une grossesse ultérieure peut distendre à nouveau la paroi.",
        ],
        bullets: [
          "Parlez de votre projet d'enfant au chirurgien : il peut conseiller d'attendre.",
          "Certaines interventions (réduction mammaire, lifting des seins, implants) peuvent avoir un effet sur l'allaitement futur : demandez des explications.",
          "Si vous découvrez une grossesse après avoir programmé l'intervention, prévenez l'équipe sans attendre.",
        ],
      },
      {
        heading: "Santé mentale et antécédents psychiatriques",
        paragraphs: [
          "Un antécédent de dépression, d'anxiété ou un autre trouble psychique n'empêche pas nécessairement une chirurgie esthétique, mais il doit être connu de l'équipe. Une période de fragilité (deuil, séparation, épisode dépressif récent) n'est pas le bon moment pour une décision de ce type. Les traitements doivent être signalés, car certains interagissent avec l'anesthésie et ne doivent pas être arrêtés brutalement.",
          "Une préoccupation très envahissante pour un défaut que les autres remarquent peu ou pas peut correspondre à une dysmorphophobie (trouble dysmorphique corporel). Dans ce cas, la chirurgie améliore rarement le mal-être et un accompagnement par un médecin ou un psychologue est plus adapté. Un antécédent de trouble du comportement alimentaire est aussi à mentionner. En cas de détresse ou d'idées suicidaires, le 3114 répond 24 h/24.",
        ],
      },
      {
        heading: "Le bilan préopératoire",
        paragraphs: [
          "Il n'existe pas de bilan identique pour tout le monde : les examens dépendent de votre âge, de votre santé, de l'intervention et de l'anesthésie. Le chirurgien et l'anesthésiste les prescrivent ; les faire suffisamment tôt laisse le temps de traiter une anomalie.",
          "En France, la consultation d'anesthésie est obligatoire avant toute intervention programmée sous anesthésie générale ou locorégionale, plusieurs jours avant. Une courte visite a lieu à nouveau avant l'intervention.",
        ],
        bullets: [
          "Prise de sang selon les cas : numération, coagulation, glycémie ou HbA1c, fonction rénale, groupe sanguin.",
          "Électrocardiogramme selon l'âge et les antécédents, parfois avis d'un cardiologue.",
          "Avant une chirurgie des seins : examen clinique et, selon l'âge et les antécédents, mammographie et/ou échographie.",
          "Test de grossesse si nécessaire.",
          "Bilan nutritionnel après une chirurgie de l'obésité.",
          "Photos préopératoires, qui font partie du dossier médical.",
          "Apporter vos comptes rendus d'opérations antérieures, vos ordonnances et vos derniers résultats d'examens.",
        ],
      },
      {
        heading: "Être honnête avec le chirurgien et l'anesthésiste",
        paragraphs: [
          "Il peut être tentant de minimiser une consommation de tabac, un poids, un traitement ou un antécédent par peur d'un refus. C'est pourtant s'exposer à un risque inutile : l'équipe ne peut se protéger que de ce qu'elle connaît. Ce que vous dites est couvert par le secret médical.",
          "Un report ou un refus n'est pas un jugement : c'est une décision de prudence. Si un chirurgien accepte de vous opérer sans poser de questions sur votre santé, c'est au contraire un signal d'alerte.",
        ],
        bullets: [
          "Ai-je un facteur qui augmente mes risques pour cette intervention ? Lequel peut être corrigé ?",
          "Quels médicaments ou compléments dois-je arrêter, quand, et qui organise le relais ?",
          "Combien de temps avant et après dois-je arrêter de fumer ou de vapoter ?",
          "Quels examens dois-je faire, et dans quel délai ?",
          "Mon intervention se fera-t-elle en ambulatoire ou avec une nuit d'hospitalisation, compte tenu de ma santé ?",
          "Quelles mesures sont prévues contre la phlébite dans mon cas ?",
        ],
      },
    ],
    warningSigns: [
      "Fièvre, toux, infection urinaire, dentaire ou de la peau dans les jours qui précèdent l'intervention : prévenir l'équipe, un report peut être nécessaire.",
      "Douleur ou gonflement d'un mollet, essoufflement inhabituel ou douleur dans la poitrine : appeler le 15 ou le 112 sans attendre.",
      "Grossesse découverte ou suspectée après la programmation de l'intervention.",
      "Nouveau médicament, antibiotique ou complément commencé depuis la consultation d'anesthésie.",
      "Reprise du tabac, du vapotage ou de la nicotine avant l'intervention : le signaler, même si vous craignez un report.",
      "Plaie, bouton infecté, coup de soleil ou irritation sur la zone à opérer.",
      "Malaise, palpitations ou tension très élevée constatée à domicile : consulter votre médecin rapidement.",
    ],
    resources: [
      { label: "Société française d'anesthésie et de réanimation (SFAR)", url: "https://sfar.org" },
      { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" },
      { label: "Société française de chirurgie plastique, reconstructrice et esthétique (SOFCPRE)", url: "https://www.sofcpre.fr" },
      { label: "Tabac Info Service (39 89)", url: "https://www.tabac-info-service.fr" },
      { label: "ANSM – médicaments et produits de santé", url: "https://ansm.sante.fr" },
      { label: "Assurance maladie (ameli)", url: "https://www.ameli.fr" },
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
      "arm-lift",
      "thigh-lift",
      "body-lift",
      "buttock-augmentation",
      "labiaplasty",
      "breast-implant-revision",
      "brow-lift",
      "genioplasty",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  "en-gb": {
    id: "health-prerequisites",
    locale: "en-gb",
    slug: "health-checks-before-cosmetic-surgery",
    title: "Your health before cosmetic surgery",
    summary:
      "Smoking, weight, diabetes, blood pressure, clotting, medicines, pregnancy and pre-op tests: what to sort out and disclose before cosmetic surgery.",
    answer:
      "Cosmetic surgery is never urgent: it should be planned for when your health allows, to lower the risk of complications. The key points are stopping smoking and vaping for several weeks before and after, a stable weight, well-controlled diabetes and blood pressure, any bleeding or clotting problem being managed, and a full list of your medicines and supplements. Pregnancy, breastfeeding and some medical histories mean waiting. Your surgeon and anaesthetist may postpone or decline surgery if the risk seems too high: being open with them protects your health first and foremost.",
    steps: [
      {
        heading: "Why your health matters so much",
        paragraphs: [
          "Cosmetic surgery is not medically necessary, so the balance between the expected benefit and the risks needs to be clearly favourable. A poorly controlled health problem can increase the risk of infection, haematoma, blood clots, poor wound healing and anaesthetic complications.",
          "The good news is that many of these factors can be improved: stopping smoking, stabilising your weight, getting diabetes or blood pressure under control, adjusting a medicine. Taking a few weeks or months to prepare is often the most sensible decision.",
        ],
        bullets: [
          "Your surgeon assesses whether the operation is suitable and the risks linked to the area treated.",
          "An anaesthetist, often with a pre-operative assessment nurse, assesses the risks of the anaesthetic.",
          "Your GP knows your medical history: the GMC expects cosmetic surgeons to ask your permission to contact your GP, and it is wise to agree.",
          "Any of them may ask for a delay, further tests or a specialist opinion.",
        ],
      },
      {
        heading: "Smoking and vaping: stop before and after",
        paragraphs: [
          "Smoking is one of the main avoidable causes of complications in cosmetic surgery. Nicotine narrows small blood vessels and carbon monoxide reduces the oxygen reaching the tissues. Skin and tissue that have been lifted during surgery get less blood. The risk of skin necrosis (part of the skin dying), wound breakdown, infection and wide scars rises sharply, particularly after a tummy tuck, facelift, breast lift or breast reduction.",
          "Most surgeons ask you to stop completely several weeks before surgery, often at least four to six weeks, and until you have fully healed afterwards, usually several more weeks. Some will not operate on anyone who still smokes, especially for procedures that lift large areas of skin.",
          "E-cigarettes, nicotine pouches and nicotine replacement products usually contain nicotine, which still affects blood vessels. Ask your surgeon what is acceptable: many ask you to stop all nicotine. Smoking cannabis is also a problem, both for blood supply and for the anaesthetic.",
        ],
        bullets: [
          "Set a quit date as soon as you decide to go ahead, not the week before surgery.",
          "Get support: your GP, your pharmacist or your local NHS Stop Smoking Service.",
          "Tell your surgeon and anaesthetist if you still smoke or vape, even occasionally: they can adjust the plan.",
          "Do not restart after surgery until your surgeon agrees, not even for one cigarette.",
          "Some surgeons ask for a urine nicotine (cotinine) test before certain procedures.",
        ],
      },
      {
        heading: "A stable weight and a reasonable BMI",
        paragraphs: [
          "Body mass index (BMI) is your weight in kilograms divided by your height in metres squared. The higher it is, the higher the risk of complications: infection, seroma, wound breakdown, blood clots and anaesthetic difficulties. Many surgeons consider that risks rise noticeably above a BMI of about 30, and some set a limit above which they will not perform certain procedures.",
          "A stable weight matters as much as the number. Losing or gaining a lot of weight after surgery changes the result, particularly after a tummy tuck, liposuction, body lift or breast surgery. It is usually advised to have kept a stable weight for several months before surgery.",
        ],
        bullets: [
          "If you are losing weight, wait until you reach your goal and have stayed there.",
          "After weight-loss surgery (gastric sleeve or bypass), surgeons usually wait until your weight has been stable for at least 12 months, often 12 to 18 months after the operation, with a nutritional check (iron, vitamins, protein).",
          "Liposuction does not treat being overweight: it treats localised fat deposits.",
          "Weight-loss injections such as GLP-1 medicines (semaglutide and similar) must be mentioned: they slow stomach emptying, which matters for the anaesthetic, and the team will tell you whether and when to pause them.",
        ],
      },
      {
        heading: "Diabetes, high blood pressure and other long-term conditions",
        paragraphs: [
          "Poorly controlled diabetes increases the risk of infection and slows healing. Your surgeon or anaesthetist may ask for a recent HbA1c blood test and postpone surgery if your diabetes is not well controlled. How you take your tablets or insulin on the day of surgery needs to be planned in advance.",
          "Uncontrolled high blood pressure increases the risk of bleeding and haematoma, particularly after a facelift, and the cardiovascular risk during anaesthesia. Your blood pressure should be well controlled beforehand; never change your treatment on your own.",
          "Other long-term conditions need assessment, sometimes with your specialist. They do not always rule surgery out, but they need to be stable.",
        ],
        bullets: [
          "Heart or lung disease, asthma, sleep apnoea (with or without a CPAP machine).",
          "Kidney, liver or thyroid conditions.",
          "Autoimmune or inflammatory conditions, immunosuppressants or biologic treatments.",
          "Long-term steroids, which slow healing.",
          "A history of cancer, especially breast cancer before breast surgery.",
          "A current infection (dental, urinary, skin, chest): this may mean postponing, especially before an implant is placed.",
          "Known allergies: antibiotics, latex, dressings, anaesthetic drugs.",
        ],
      },
      {
        heading: "Bleeding disorders and blood clot risk",
        paragraphs: [
          "Two opposite risks need to be assessed: bleeding too much (haematoma, haemorrhage) and forming a clot (deep vein thrombosis, pulmonary embolism). Long operations, general anaesthesia, lying still and some procedures such as a tummy tuck or body lift increase the clot risk.",
          "Your anaesthetist and surgeon assess this risk from your history. Depending on your situation, they may prescribe compression stockings, blood-thinning injections after surgery and getting up early.",
        ],
        bullets: [
          "Bleeding easily: frequent unexplained bruises, prolonged bleeding after a cut, a tooth extraction or previous surgery, very heavy periods.",
          "A known bleeding disorder (von Willebrand disease, haemophilia or another).",
          "A personal history of DVT or pulmonary embolism.",
          "A family history of blood clots or a known inherited clotting tendency (thrombophilia).",
          "Severe varicose veins, or a long-haul flight planned just before or after surgery.",
        ],
      },
      {
        heading: "Medicines and supplements to mention",
        paragraphs: [
          "Bring a full list of everything you take, including over-the-counter products, herbal remedies and supplements. Some increase bleeding, others interact with the anaesthetic or increase the risk of clots.",
          "The golden rule: never stop a prescribed medicine (blood thinner, antiplatelet, blood pressure tablet, antidepressant, epilepsy medicine and so on) without advice from the doctor who prescribes it and the anaesthetist. Stopping suddenly can be dangerous. It is the team's job to plan any pause or bridging treatment.",
        ],
        bullets: [
          "Anticoagulants and antiplatelets (including aspirin, even low-dose): any pause must be planned by your doctors, never on your own.",
          "Anti-inflammatory painkillers (ibuprofen, naproxen and others): often avoided in the days before, as instructed by the team.",
          "Supplements that can increase bleeding: ginkgo, omega-3 and fish oils, garlic capsules, ginseng, high-dose vitamin E, turmeric and others. They are often stopped about two weeks before, on instruction.",
          "St John's wort: it interacts with many medicines, including some used during anaesthesia.",
          "The combined contraceptive pill, HRT and some other hormone treatments increase the risk of clots; the team will say whether to pause them and what contraception to use instead.",
          "Isotretinoin (for acne) may affect healing; your surgeon may ask you to wait several months after stopping it.",
          "GLP-1 medicines, steroids, immunosuppressants, antidepressants and anti-anxiety medicines: always mention them.",
          "Recreational drugs: mention these too, as they interact with anaesthesia. What you say is confidential.",
        ],
      },
      {
        heading: "Alcohol",
        paragraphs: [
          "Alcohol increases bleeding, interferes with some medicines and can slow recovery. Regular heavy drinking also affects the liver, blood clotting and the risk of withdrawal symptoms while in hospital.",
        ],
        bullets: [
          "Avoid alcohol in the days before surgery and while you are taking painkillers.",
          "Tell the anaesthetist honestly how much you usually drink: unplanned withdrawal can be dangerous.",
          "Do not drink alcohol on the evening you go home, especially with painkillers or sleeping tablets.",
        ],
      },
      {
        heading: "Pregnancy, breastfeeding and plans for children",
        paragraphs: [
          "Cosmetic surgery is not carried out during pregnancy, and you may be asked for a pregnancy test beforehand. After giving birth, the body keeps changing for several months: it is advisable to wait until your weight and shape have settled.",
          "For breast surgery, surgeons usually wait several months after you stop breastfeeding, often around six, so that the breasts reach a stable shape. For a tummy tuck, it is advisable to have finished having children, as a later pregnancy can stretch the abdominal wall again.",
        ],
        bullets: [
          "Tell your surgeon about any plans for children: they may advise waiting.",
          "Some procedures (breast reduction, breast lift, implants) can affect future breastfeeding: ask for an explanation.",
          "If you find out you are pregnant after booking surgery, tell the team straight away.",
        ],
      },
      {
        heading: "Mental health and psychiatric history",
        paragraphs: [
          "A history of depression, anxiety or another mental health condition does not necessarily rule out cosmetic surgery, but the team needs to know. A vulnerable period (bereavement, a relationship ending, a recent episode of depression) is not the right time for this kind of decision. Mention your medicines, as some interact with anaesthesia and must not be stopped suddenly.",
          "A very intrusive preoccupation with a flaw that others barely notice, or do not notice at all, may be body dysmorphic disorder (BDD). In that case surgery rarely eases the distress and support from your GP or a psychologist is more helpful. A history of an eating disorder is also worth mentioning. If you are in distress or having thoughts of suicide, Samaritans are available day and night on 116 123.",
        ],
      },
      {
        heading: "Pre-operative assessment and tests",
        paragraphs: [
          "There is no one-size-fits-all set of tests: they depend on your age, health, the procedure and the type of anaesthetic, in line with NICE guidance on routine pre-operative tests. Having them done early leaves time to deal with anything unexpected.",
          "Most hospitals hold a pre-operative assessment, in person or by phone, with a nurse and, where needed, the anaesthetist. You will also see the anaesthetist on the day of surgery.",
        ],
        bullets: [
          "Blood tests where needed: full blood count, clotting, blood sugar or HbA1c, kidney function, blood group.",
          "ECG depending on age and history, sometimes a cardiology opinion.",
          "Before breast surgery: a breast examination and, depending on age and history, a mammogram and/or ultrasound.",
          "Pregnancy test where relevant.",
          "Nutritional check after weight-loss surgery.",
          "MRSA screening swabs, which many UK hospitals carry out before surgery.",
          "Bring letters from previous operations, your prescriptions and recent test results.",
        ],
      },
      {
        heading: "Be honest with your surgeon and anaesthetist",
        paragraphs: [
          "It can be tempting to play down your smoking, weight, a medicine or a past condition for fear of being turned down. But this simply means taking a risk you did not need to take: the team can only guard against what they know about. What you tell them is confidential.",
          "Being postponed or declined is not a judgement: it is a safety decision. If a surgeon agrees to operate without asking about your health, that is a warning sign in itself.",
        ],
        bullets: [
          "Do I have anything that increases my risk for this operation? What can be improved?",
          "Which medicines or supplements should I stop, when, and who will plan any replacement?",
          "How long before and after should I stop smoking or vaping?",
          "What tests do I need, and by when?",
          "Given my health, will this be a day case or will I stay overnight?",
          "What will be done to reduce my risk of blood clots?",
        ],
      },
    ],
    warningSigns: [
      "A temperature, cough, or a urinary, dental or skin infection in the days before surgery: tell the team, as surgery may need to be postponed.",
      "Pain or swelling in a calf, unusual breathlessness or chest pain: call 999 straight away.",
      "Finding out, or suspecting, that you are pregnant after booking surgery.",
      "Starting a new medicine, antibiotic or supplement since your pre-operative assessment.",
      "Going back to smoking, vaping or nicotine before surgery: say so, even if you are worried about a delay.",
      "A wound, infected spot, sunburn or skin irritation on the area to be operated on.",
      "Feeling faint, palpitations or very high blood pressure readings at home: see your GP or call NHS 111.",
    ],
    resources: [
      { label: "NHS – preparing for surgery", url: "https://www.nhs.uk" },
      { label: "Royal College of Anaesthetists – information for patients", url: "https://www.rcoa.ac.uk" },
      { label: "NICE – routine preoperative tests for elective surgery", url: "https://www.nice.org.uk" },
      { label: "General Medical Council (GMC) – guidance on cosmetic interventions", url: "https://www.gmc-uk.org" },
      { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" },
      { label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)", url: "https://www.bapras.org.uk" },
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
      "arm-lift",
      "thigh-lift",
      "body-lift",
      "buttock-augmentation",
      "labiaplasty",
      "breast-implant-revision",
      "brow-lift",
      "genioplasty",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
};
