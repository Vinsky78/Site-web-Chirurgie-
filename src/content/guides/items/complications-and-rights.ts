import type { Locale } from "@/i18n/routing";
import type { Guide } from "../../types";

/** En cas de complication : vos droits et recours : guide pratique (fr, en-gb). Brouillon à relire par le comité médical. */
export const guide: Record<Locale, Guide> = {
  fr: {
    id: "complications-and-rights",
    locale: "fr",
    slug: "complication-droits-et-recours",
    title: "En cas de complication : vos droits et recours",
    summary:
      "Contacter le chirurgien, obtenir son dossier médical, signaler un événement, saisir la CCI ou l'Ordre : les étapes et les interlocuteurs en France.",
    answer:
      "Face à une complication, la priorité est votre santé : contactez d'abord le chirurgien qui vous a opéré, ou le 15 en cas d'urgence. Vous avez ensuite le droit d'obtenir votre dossier médical, de demander un deuxième avis et de signaler un événement indésirable aux autorités sanitaires. Si un désaccord persiste, plusieurs voies existent : dialogue et médiation dans l'établissement, conciliation auprès de l'Ordre des médecins, commission de conciliation et d'indemnisation (CCI), puis éventuellement la justice. Ce guide donne des repères généraux et ne remplace pas l'avis d'un avocat ou d'une association d'usagers, notamment sur les délais.",
    steps: [
      {
        heading: "D'abord : se soigner et prévenir le chirurgien",
        paragraphs: [
          "Une suite inhabituelle (saignement, infection, cicatrice qui s'ouvre, asymétrie importante, douleur qui augmente) doit être signalée sans attendre au chirurgien ou à l'établissement, avec le numéro remis à la sortie. Le chirurgien reste responsable de votre suivi et doit vous recevoir. En cas d'urgence vitale, appelez le 15 ou le 112.",
          "Une complication n'est pas forcément une faute : toute intervention comporte des risques, même réalisée dans les règles. Mais vous avez droit à une information claire sur ce qui s'est passé. Depuis la loi du 4 mars 2002, tout professionnel ou établissement doit informer le patient d'un dommage lié aux soins, au plus tard dans les quinze jours suivant sa découverte ou la demande du patient.",
        ],
        bullets: [
          "Noter la date d'apparition des symptômes et leur évolution.",
          "Prendre des photos datées de la zone concernée.",
          "Demander un compte rendu écrit de chaque consultation de contrôle.",
          "Ne pas interrompre de vous-même un traitement prescrit.",
        ],
      },
      {
        heading: "Garder et rassembler tous les documents",
        paragraphs: [
          "Les documents remis avant et après l'intervention sont essentiels pour comprendre ce qui s'est passé et, si besoin, faire valoir vos droits. Conservez-les sans limite de durée, avec des copies.",
        ],
        bullets: [
          "Devis daté et signé, consentement éclairé, documents d'information remis.",
          "Compte rendu opératoire, compte rendu d'hospitalisation, lettre de sortie.",
          "Carte ou passeport d'implant le cas échéant (marque, référence, numéro de lot).",
          "Ordonnances, factures, arrêts de travail, justificatifs de frais liés à la complication.",
          "Échanges écrits avec le chirurgien ou la clinique (courriels, messages, courriers).",
          "Photos avant l'intervention et pendant l'évolution.",
        ],
      },
      {
        heading: "Accéder à son dossier médical",
        paragraphs: [
          "Vous avez un droit d'accès direct à votre dossier médical, sans avoir à justifier votre demande. Adressez-la par écrit au professionnel ou au directeur de l'établissement, de préférence en lettre recommandée avec avis de réception, avec une copie de votre pièce d'identité.",
          "Les informations doivent être communiquées au plus tard dans les huit jours suivant la demande (et pas avant un délai de réflexion de 48 heures), ou dans les deux mois si elles datent de plus de cinq ans. La consultation sur place est gratuite ; des frais de copie et d'envoi peuvent être demandés.",
        ],
        bullets: [
          "Préciser les pièces voulues (compte rendu opératoire, feuille d'anesthésie, traçabilité des implants, prescriptions).",
          "Indiquer le mode de communication souhaité : remise en main propre, envoi postal ou consultation sur place.",
          "Conserver la preuve de l'envoi et relancer par écrit si le délai est dépassé.",
        ],
      },
      {
        heading: "Demander un deuxième avis",
        paragraphs: [
          "Vous pouvez consulter un autre chirurgien qualifié pour faire évaluer la complication et les options de traitement, avec votre dossier. Cela ne nécessite pas l'accord du premier chirurgien. Les honoraires de cette consultation sont à prévoir.",
          "Une reprise chirurgicale ne doit pas être décidée dans l'urgence, sauf nécessité médicale : le délai de réflexion de 15 jours s'applique à une nouvelle intervention esthétique, et un devis détaillé doit vous être remis.",
        ],
      },
      {
        heading: "Signaler un événement indésirable",
        paragraphs: [
          "Tout patient peut signaler un effet indésirable lié à un médicament, à un dispositif médical (implant mammaire, produit de comblement) ou un événement indésirable lié aux soins sur le portail de signalement du ministère chargé de la santé. Ces signalements sont analysés par les autorités sanitaires, dont l'ANSM, et servent à repérer des problèmes sur un produit ou une pratique.",
          "Ce signalement est distinct d'une demande d'indemnisation : il ne règle pas votre situation personnelle, mais il est utile à la sécurité de tous.",
        ],
        bullets: [
          "Indiquer si possible la marque, la référence et le numéro de lot du dispositif.",
          "Décrire les faits de façon chronologique.",
          "Conserver l'accusé de réception du signalement.",
        ],
      },
      {
        heading: "Dialogue, médiation et Ordre des médecins",
        paragraphs: [
          "Dans un établissement de santé, vous pouvez adresser une réclamation écrite à la direction. La commission des usagers (CDU) veille au respect de vos droits et peut organiser une rencontre avec un médiateur médical ou non médical.",
          "Si vous estimez qu'un médecin a manqué à ses obligations déontologiques (information, consentement, suivi, publicité), vous pouvez porter plainte auprès du conseil départemental de l'Ordre des médecins où il est inscrit. Une réunion de conciliation est alors organisée ; en l'absence d'accord, la plainte est transmise à la chambre disciplinaire. Cette procédure peut aboutir à une sanction du médecin, mais pas à une indemnisation.",
        ],
      },
      {
        heading: "La CCI, l'ONIAM et l'assurance du praticien",
        paragraphs: [
          "Les commissions de conciliation et d'indemnisation des accidents médicaux (CCI) permettent de demander une indemnisation sans passer par un tribunal. La saisine est gratuite et ne nécessite pas d'avocat. Pour être examinée sur l'indemnisation, la demande doit atteindre un seuil de gravité défini par la loi (par exemple une incapacité importante ou un arrêt d'activité prolongé) ; en dessous, la CCI peut proposer une conciliation.",
          "Si une expertise retient une faute, l'indemnisation est à la charge de l'assureur en responsabilité civile professionnelle du chirurgien ou de l'établissement. Attention : un accident médical sans faute (aléa thérapeutique) survenu lors d'un acte à visée purement esthétique n'est en principe pas indemnisé par la solidarité nationale via l'ONIAM, contrairement à d'autres actes de soins. C'est un point à faire préciser par un professionnel du droit.",
          "Vous pouvez demander au chirurgien les coordonnées de son assureur. Votre propre assurance (protection juridique, contrat individuel accident) peut aussi prévoir une aide.",
        ],
      },
      {
        heading: "Se faire accompagner et respecter les délais",
        paragraphs: [
          "Les règles de responsabilité médicale et les délais pour agir (prescription) sont techniques. En matière de responsabilité médicale, le délai est en principe de dix ans à compter de la consolidation du dommage, mais il peut varier selon les situations : vérifiez-le avec un avocat ou un juriste avant de laisser passer du temps.",
          "Des associations agréées d'usagers du système de santé et la ligne Santé Info Droits de France Assos Santé informent gratuitement sur vos droits. Une consultation juridique peut aussi être prise en charge par votre protection juridique.",
        ],
        bullets: [
          "Ne pas signer de transaction ou de renonciation à recours sans l'avoir fait relire.",
          "Faire toutes les démarches importantes par écrit, avec accusé de réception.",
          "Se faire accompagner lors d'une expertise par un médecin-conseil de victimes si possible.",
        ],
      },
    ],
    warningSigns: [
      "Saignement abondant, gonflement rapide et douloureux d'une zone opérée : contactez le chirurgien immédiatement ou le 15.",
      "Fièvre, rougeur qui s'étend, écoulement purulent ou odeur au niveau d'une cicatrice.",
      "Essoufflement, douleur thoracique ou mollet douloureux et gonflé : appelez le 15 ou le 112.",
      "Peau qui devient noire, violacée ou froide autour de la zone opérée.",
      "Douleur qui augmente au lieu de diminuer avec les jours.",
      "Cicatrice qui s'ouvre ou implant visible.",
      "Chirurgien ou clinique injoignable alors que vous présentez un symptôme inquiétant : consultez un médecin ou les urgences sans attendre.",
    ],
    resources: [
      { label: "Portail de signalement des événements sanitaires indésirables", url: "https://signalement.social-sante.gouv.fr" },
      { label: "ONIAM – Office national d'indemnisation des accidents médicaux (et CCI)", url: "https://www.oniam.fr" },
      { label: "Conseil national de l'Ordre des médecins", url: "https://www.conseil-national.medecin.fr" },
      { label: "Service-public.fr – dossier médical et recours", url: "https://www.service-public.fr" },
      { label: "ANSM – Agence nationale de sécurité du médicament et des produits de santé", url: "https://ansm.sante.fr" },
      { label: "France Assos Santé – Santé Info Droits", url: "https://www.france-assos-sante.org" },
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
    id: "complications-and-rights",
    locale: "en-gb",
    slug: "if-something-goes-wrong",
    title: "If something goes wrong: your rights",
    summary:
      "Contacting your surgeon, getting your records, complaining, raising concerns with the GMC or CQC, and reporting implant problems in the UK.",
    answer:
      "If you have a problem after cosmetic surgery, your health comes first: contact the surgeon or clinic that treated you, or call 999 in an emergency. You have the right to see your health records, to get a second opinion, and to complain to the provider. If the complaint is not resolved, the next step depends on who provided the care: an independent adjudication scheme for many private providers, or the Ombudsman for NHS-funded care. You can also raise concerns about a doctor with the GMC, share your experience with the CQC, and report problems with implants or fillers through the MHRA's Yellow Card scheme. This guide gives general information only and is not legal advice.",
    steps: [
      {
        heading: "First: get care and tell your surgeon",
        paragraphs: [
          "Report anything unexpected (bleeding, signs of infection, a wound opening, marked asymmetry, increasing pain) to your surgeon or clinic straight away, using the contact number you were given. Your surgeon remains responsible for your aftercare. In an emergency call 999; for urgent advice when your clinic cannot be reached, contact NHS 111.",
          "A complication is not necessarily anyone's fault: every operation carries risks even when done properly. But you are entitled to an honest explanation. Healthcare professionals in the UK have a professional duty of candour, which means telling you openly when something has gone wrong with your care.",
        ],
        bullets: [
          "Note when symptoms started and how they have changed.",
          "Take dated photos of the area.",
          "Ask for a written summary after each follow-up appointment.",
          "Do not stop prescribed medicines on your own.",
        ],
      },
      {
        heading: "Keep every document",
        paragraphs: [
          "The paperwork from before and after your operation helps explain what happened and supports a complaint or claim if needed. Keep originals and copies.",
        ],
        bullets: [
          "Quote, consent form and any information leaflets you were given.",
          "Operation note, discharge letter and aftercare instructions.",
          "Implant card (manufacturer, model, batch or lot number), if you have an implant.",
          "Prescriptions, receipts, sick notes and records of costs caused by the complication.",
          "Emails, messages and letters with the surgeon or clinic.",
          "Photos from before surgery and during recovery.",
        ],
      },
      {
        heading: "Access your health records",
        paragraphs: [
          "Under UK data protection law you can ask for a copy of your health records by making a subject access request to the clinic or hospital. It is usually free, and the organisation should normally respond within one month, although this can be extended in some cases.",
          "Ask in writing, keep a copy of your request, and say clearly which records you want.",
        ],
        bullets: [
          "Operation note, anaesthetic record and implant traceability details.",
          "Consultation notes and photographs taken by the clinic.",
          "Prescriptions and follow-up notes.",
          "If the deadline passes without a reply, you can raise a concern with the Information Commissioner's Office (ICO).",
        ],
      },
      {
        heading: "Get a second opinion",
        paragraphs: [
          "You can see another suitably qualified surgeon to assess the problem and your options, taking your records with you. You do not need your original surgeon's permission. Expect to pay a consultation fee if it is private; your GP can also assess you and refer you to NHS services when there is a medical need.",
          "Unless it is urgent, do not rush into corrective surgery. The GMC's guidance on cosmetic interventions recommends a two-week cooling-off period before any cosmetic procedure.",
        ],
      },
      {
        heading: "Complain to the provider",
        paragraphs: [
          "Start with the clinic or hospital's own complaints procedure, which it should give you on request. Put your complaint in writing, describe what happened, what you are unhappy about and what outcome you want (an explanation, an apology, corrective treatment, a refund).",
          "If a private provider does not resolve your complaint, check whether it subscribes to the Independent Sector Complaints Adjudication Service (ISCAS), which can review complaints about many independent healthcare providers. The Parliamentary and Health Service Ombudsman (PHSO) deals with complaints about NHS care in England, including NHS-funded treatment in private hospitals, but not purely private cosmetic treatment. Scotland, Wales and Northern Ireland have their own public services ombudsmen.",
        ],
        bullets: [
          "Complain as soon as you can; NHS complaints usually need to be made within 12 months.",
          "Keep a record of all phone calls (date, person, what was said).",
          "Ask for a written final response before escalating.",
        ],
      },
      {
        heading: "Raise concerns with regulators",
        paragraphs: [
          "If you think a doctor's conduct or practice puts patients at risk, you can raise a concern with the General Medical Council (GMC). The GMC looks at whether a doctor is fit to practise; it cannot award compensation or resolve individual complaints about treatment outcomes.",
          "In England you can tell the Care Quality Commission (CQC) about your experience of a clinic or hospital. The CQC does not investigate individual complaints, but it uses this information to decide when and where to inspect.",
        ],
      },
      {
        heading: "Report problems with implants, fillers or medicines",
        paragraphs: [
          "The MHRA's Yellow Card scheme lets anyone report a suspected problem with a medical device (such as a breast implant or dermal filler) or a side effect of a medicine (such as botulinum toxin). Reports help the regulator identify safety issues with products.",
          "A Yellow Card report does not resolve your own case or lead to compensation, but it contributes to everyone's safety.",
        ],
        bullets: [
          "Include the product name, manufacturer and batch number if you have them.",
          "Describe what happened in date order.",
        ],
      },
      {
        heading: "Legal advice and time limits",
        paragraphs: [
          "If you are considering a claim for compensation, speak to a solicitor who specialises in clinical negligence. Time limits apply; in England and Wales a claim generally has to be started within three years of the injury or of when you became aware of it, but there are exceptions and the rules differ in Scotland and Northern Ireland. Get advice early rather than wait.",
          "Check whether your home or other insurance includes legal expenses cover. Charities and advice services can also explain your options. This guide does not give personal legal advice.",
        ],
        bullets: [
          "Do not sign a settlement or a waiver without independent advice.",
          "Keep everything in writing where possible.",
        ],
      },
    ],
    warningSigns: [
      "Heavy bleeding or rapid, painful swelling of an operated area: contact your surgeon immediately or call 999.",
      "A high temperature, spreading redness, pus or a bad smell from a wound.",
      "Breathlessness, chest pain, or a painful, swollen calf: call 999.",
      "Skin around the treated area turning dark, purple, pale or cold.",
      "Pain that gets worse instead of better over the days after surgery.",
      "A wound opening or an implant becoming visible.",
      "Your surgeon or clinic cannot be reached while you have worrying symptoms: contact NHS 111 or go to A&E.",
    ],
    resources: [
      { label: "Parliamentary and Health Service Ombudsman (PHSO)", url: "https://www.ombudsman.org.uk" },
      { label: "General Medical Council (GMC) – raising a concern", url: "https://www.gmc-uk.org" },
      { label: "Care Quality Commission (CQC) – share your experience", url: "https://www.cqc.org.uk" },
      { label: "MHRA Yellow Card scheme", url: "https://yellowcard.mhra.gov.uk" },
      { label: "Information Commissioner's Office (ICO) – your right of access", url: "https://ico.org.uk" },
      { label: "NHS – how to complain", url: "https://www.nhs.uk" },
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
