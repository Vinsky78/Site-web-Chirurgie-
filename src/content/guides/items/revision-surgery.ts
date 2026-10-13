import type { Locale } from "@/i18n/routing";
import type { Guide } from "../../types";

/** Insatisfaction et retouche chirurgicale : guide pratique (fr, en-gb). Brouillon à relire par le comité médical. */
export const guide: Record<Locale, Guide> = {
  fr: {
    id: "revision-surgery",
    locale: "fr",
    slug: "insatisfaction-et-retouche-chirurgicale",
    title: "Insatisfait du résultat : retouche et recours",
    summary:
      "Quand juger un résultat, parler à son chirurgien, retouche et frais, deuxième avis, médiation, CCI et assurance : que faire si le résultat déçoit.",
    answer:
      "Un résultat de chirurgie esthétique ne se juge pas avant la fin du gonflement, soit plusieurs mois, parfois un an ou plus selon l'intervention. Si vous êtes déçu(e), commencez par en parler à votre chirurgien, photos à l'appui : une retouche est parfois prévue, mais ses conditions et son coût doivent être vérifiés. Vous pouvez demander votre dossier médical et un deuxième avis à tout moment. En cas de désaccord ou de dommage, des recours existent : réclamation et médiation dans l'établissement, conciliation, commission de conciliation et d'indemnisation (CCI), assurance du chirurgien. Une chirurgie secondaire est souvent plus complexe que la première : elle demande du temps et de la prudence.",
    steps: [
      {
        heading: "Attendre le bon moment pour juger le résultat",
        paragraphs: [
          "Après une intervention, le gonflement (œdème), les bleus, la fermeté des tissus et la position encore provisoire des implants ou des tissus modifient l'aspect pendant des semaines ou des mois. Beaucoup de patients traversent une phase de doute ou de déception, parfois appelée « coup de blues post-opératoire », alors que le résultat n'est pas encore installé.",
          "Les délais varient selon l'intervention et selon chaque personne. Ils sont indicatifs : demandez à votre chirurgien à partir de quand votre résultat pourra être évalué.",
        ],
        bullets: [
          "Rhinoplastie : le gonflement de la pointe peut persister 12 mois ou plus.",
          "Augmentation mammaire : les implants descendent et s'assouplissent en général en trois à six mois.",
          "Lifting des seins, réduction mammaire : forme stabilisée vers six mois à un an.",
          "Liposuccion : résultat jugé en général après six mois, parfois plus.",
          "Abdominoplastie, liftings du corps, des bras ou des cuisses : six mois à un an, cicatrices jusqu'à 18 mois.",
          "Lifting du visage, blépharoplastie : plusieurs mois pour un aspect stabilisé.",
          "Lipofilling : une partie de la graisse greffée est résorbée dans les premiers mois ; le volume se juge vers trois à six mois.",
        ],
      },
      {
        heading: "Distinguer une complication d'une insatisfaction",
        paragraphs: [
          "Une complication (infection, hématome, nécrose, coque, désunion, asymétrie importante liée à un problème technique) se prend en charge sans attendre : contactez votre chirurgien dès les premiers signes. L'insatisfaction esthétique, elle, porte sur un résultat qui ne correspond pas à ce que vous espériez, sans problème médical.",
          "Les deux situations n'ont pas les mêmes conséquences pour la suite, notamment pour la prise en charge des frais et les recours. Il est utile de savoir dans laquelle vous vous trouvez, ce que le chirurgien peut vous expliquer.",
        ],
      },
      {
        heading: "En parler d'abord avec son chirurgien",
        paragraphs: [
          "Le chirurgien qui vous a opéré(e) connaît votre intervention et votre anatomie. Il a l'obligation de vous suivre après l'intervention et de vous informer. La plupart des difficultés se règlent par le dialogue. Allez à tous les rendez-vous de suivi, même si tout semble aller bien.",
        ],
        bullets: [
          "Prendre des photos régulières, avec la même lumière et le même angle, pour suivre l'évolution.",
          "Noter précisément ce qui vous gêne : asymétrie, forme, volume, cicatrice, sensation.",
          "Relire le compte rendu de consultation et le devis : ce qui avait été annoncé et ce qui ne l'était pas.",
          "Demander un rendez-vous dédié pour en parler, éventuellement accompagné(e).",
          "Poser les questions : est-ce encore en évolution ? Est-ce corrigeable ? Comment, quand, avec quels risques ?",
          "Garder une trace écrite des échanges (courriels, courriers, comptes rendus).",
        ],
      },
      {
        heading: "Retouche prévue ou non au devis, et qui paie",
        paragraphs: [
          "Certaines interventions comportent un risque connu de retouche, par exemple la rhinoplastie, le lipofilling ou certaines asymétries mammaires. Avant de vous faire opérer, demandez quelle est la politique du chirurgien et faites-la préciser par écrit dans le devis ou un document joint.",
          "Une retouche n'est presque jamais entièrement gratuite : même si le chirurgien renonce à ses honoraires, les frais d'anesthésie, de clinique, de matériel (implants) et de vêtements de contention peuvent rester à votre charge. Une retouche esthétique est une nouvelle intervention : elle donne lieu à un nouveau devis et au délai de réflexion de 15 jours.",
        ],
        bullets: [
          "Dans quel délai une retouche est-elle envisagée, et dans quel cas ?",
          "Quels frais sont inclus, lesquels restent à ma charge (anesthésiste, établissement, implants) ?",
          "Que se passe-t-il si la retouche est due à une complication ?",
          "Une assurance complications a-t-elle été proposée ou souscrite ?",
          "En cas de complication, l'Assurance maladie peut prendre en charge certains soins ; la correction d'un résultat purement esthétique reste en principe à votre charge.",
        ],
      },
      {
        heading: "Demander son dossier et un deuxième avis",
        paragraphs: [
          "Vous avez le droit d'accéder à votre dossier médical : comptes rendus de consultation et opératoire, photos, devis, références des implants. La demande se fait par écrit au chirurgien ou à l'établissement ; les documents doivent être communiqués dans les huit jours, ou deux mois s'ils datent de plus de cinq ans.",
          "Un deuxième avis auprès d'un autre chirurgien qualifié en chirurgie plastique, reconstructrice et esthétique est un droit. Il permet de savoir si une correction est possible et raisonnable. Choisissez un praticien expérimenté dans les chirurgies secondaires de la zone concernée et vérifiez sa qualification sur l'Annuaire santé ou auprès de l'Ordre des médecins.",
        ],
        bullets: [
          "Apporter le dossier complet, les photos avant et après, la carte d'implant le cas échéant.",
          "Demander au deuxième chirurgien ce qui peut être amélioré, ce qui ne le peut pas, et avec quels risques.",
          "Se méfier d'une promesse de correction totale ou d'une pression pour réopérer vite.",
        ],
      },
      {
        heading: "Les recours en France",
        paragraphs: [
          "Si le dialogue ne suffit pas, plusieurs démarches sont possibles, de la plus simple à la plus formelle. Elles ne s'excluent pas et peuvent se faire sans avocat, même si l'aide d'une association ou d'un avocat spécialisé peut être utile.",
          "Attention : un accident médical sans faute (aléa thérapeutique) survenu lors d'un acte à visée purement esthétique n'est en principe pas indemnisé par la solidarité nationale (ONIAM). L'indemnisation passe alors par l'assurance du chirurgien ou de l'établissement si une faute est reconnue. Le délai pour agir en responsabilité médicale est en général de dix ans à compter de la consolidation du dommage.",
        ],
        bullets: [
          "Réclamation écrite au chirurgien puis à la direction de l'établissement.",
          "Commission des usagers (CDU) de l'établissement et médiateur médical, qui peuvent vous recevoir.",
          "Conciliation auprès du conseil départemental de l'Ordre des médecins, et éventuellement plainte devant sa chambre disciplinaire.",
          "Commission de conciliation et d'indemnisation (CCI) : démarche gratuite, avec expertise, pour les dommages qui atteignent un seuil de gravité.",
          "Déclaration à l'assurance en responsabilité civile professionnelle du chirurgien ou de l'établissement, obligatoire pour tous les praticiens.",
          "Action en justice devant le tribunal en cas d'échec des autres démarches.",
          "Signalement d'un incident lié à un implant ou à un produit sur le portail de signalement des événements sanitaires indésirables.",
        ],
      },
      {
        heading: "Pourquoi une chirurgie secondaire est plus complexe",
        paragraphs: [
          "Une deuxième intervention sur la même zone est en général plus difficile que la première. Les tissus ont cicatrisé à l'intérieur (fibrose), la circulation sanguine a été modifiée, il reste parfois moins de peau, de cartilage ou de graisse disponibles. L'intervention peut être plus longue, les suites plus importantes et les risques un peu plus élevés.",
          "Il faut en général attendre que les tissus soient bien cicatrisés, souvent au moins 6 à 12 mois, parfois davantage, sauf complication qui impose d'intervenir plus tôt. Le résultat d'une retouche est souvent une amélioration, rarement un retour à l'état d'avant ni à l'idéal espéré. Parfois, le chirurgien conseille de ne pas réopérer, car le bénéfice attendu ne justifie pas le risque.",
        ],
        bullets: [
          "Rhinoplastie secondaire : manque de cartilage, parfois prélevé ailleurs (oreille, côte).",
          "Implants : changement de loge, capsulectomie, lifting associé.",
          "Liposuccion : irrégularités souvent corrigées par lipofilling, avec des limites.",
          "Cicatrices : reprise envisagée après maturation, au moins un an.",
        ],
      },
      {
        heading: "Prendre soin de soi pendant cette période",
        paragraphs: [
          "Être déçu(e) d'un résultat peut être très éprouvant : sentiment de culpabilité, colère, isolement, peur du regard des autres. Ces réactions sont fréquentes. Parlez-en à votre entourage ou à votre médecin traitant, qui peut vous orienter vers un psychologue.",
          "Si l'insatisfaction persiste malgré un résultat jugé correct par plusieurs chirurgiens, ou si vous enchaînez les interventions sans jamais être satisfait(e), il peut s'agir d'une dysmorphophobie, qui se prend en charge avec un professionnel de santé mentale. En cas de détresse ou d'idées suicidaires, le 3114 répond 24 h/24.",
        ],
      },
    ],
    warningSigns: [
      "Rougeur, chaleur, écoulement ou fièvre à 38 °C ou plus : appeler le chirurgien sans attendre.",
      "Peau qui devient sombre, violacée ou noire, ou cicatrice qui s'ouvre.",
      "Gonflement brutal et douloureux d'un côté, par exemple d'un sein : risque d'hématome.",
      "Sein qui durcit, se déforme ou gonfle tardivement chez une porteuse d'implants.",
      "Douleur dans la poitrine, essoufflement ou douleur d'un mollet : appeler le 15 ou le 112.",
      "Chirurgien qui ne répond plus, refuse de vous revoir ou de vous remettre votre dossier.",
      "Pression pour réopérer très vite, avant la fin du gonflement, ou promesse de corriger « totalement ».",
      "Tristesse durable, isolement ou idées noires liés au résultat : en parler à un médecin ; le 3114 en cas d'idées suicidaires.",
    ],
    resources: [
      { label: "Commissions de conciliation et d'indemnisation (CCI) et ONIAM", url: "https://www.oniam.fr" },
      { label: "Conseil national de l'Ordre des médecins", url: "https://www.conseil-national.medecin.fr" },
      { label: "Service-public.fr – accès au dossier médical et recours", url: "https://www.service-public.fr" },
      { label: "France Assos Santé – Santé Info Droits", url: "https://www.france-assos-sante.org" },
      { label: "Annuaire santé – vérifier la qualification d'un médecin", url: "https://annuaire.sante.fr" },
      { label: "Société française de chirurgie plastique, reconstructrice et esthétique (SOFCPRE)", url: "https://www.sofcpre.fr" },
      { label: "Portail de signalement des événements sanitaires indésirables", url: "https://signalement.social-sante.gouv.fr" },
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
    id: "revision-surgery",
    locale: "en-gb",
    slug: "unhappy-with-results-revision-surgery",
    title: "Unhappy with your result: revision and complaints",
    summary:
      "When to judge a result, talking to your surgeon, revision costs, second opinions, complaints to the clinic, ISCAS, GMC, CQC and PHSO: what to do next.",
    answer:
      "A cosmetic surgery result cannot be judged until the swelling has settled, which takes several months and sometimes a year or more depending on the procedure. If you are disappointed, start by talking to your surgeon, with photos: revision is sometimes included, but check the terms and cost. You can ask for your records and a second opinion at any time. If you cannot resolve things, you can complain formally to the clinic, then to the Independent Sector Complaints Adjudication Service (ISCAS) if the provider is a member, or to the Parliamentary and Health Service Ombudsman for NHS-funded care; concerns about a doctor can go to the GMC. Revision surgery is often more complex than the first operation and needs time and care.",
    steps: [
      {
        heading: "Wait for the right time to judge your result",
        paragraphs: [
          "After surgery, swelling (oedema), bruising, firm tissue and implants or tissue that have not yet settled change how things look for weeks or months. Many people go through a phase of doubt or disappointment, sometimes called the post-operative blues, before the result has settled.",
          "Timescales vary by procedure and from person to person. These are rough guides: ask your surgeon when your result can fairly be assessed.",
        ],
        bullets: [
          "Rhinoplasty: swelling of the tip can last 12 months or more.",
          "Breast augmentation: implants usually drop and soften over three to six months.",
          "Breast lift or reduction: shape usually settles at six months to a year.",
          "Liposuction: usually judged after six months, sometimes longer.",
          "Tummy tuck and arm, thigh or body lifts: six months to a year, scars up to 18 months.",
          "Facelift and eyelid surgery: several months to look settled.",
          "Fat transfer: some of the grafted fat is absorbed in the first months; volume is judged at around three to six months.",
        ],
      },
      {
        heading: "A complication or a disappointing result?",
        paragraphs: [
          "A complication (infection, haematoma, skin necrosis, capsular contracture, wound breakdown, marked asymmetry due to a technical problem) needs prompt attention: contact your surgeon at the first signs. Cosmetic dissatisfaction means the result is not what you hoped for, without a medical problem.",
          "The two situations lead to different options, especially for costs and complaints. Your surgeon can help you understand which applies to you.",
        ],
      },
      {
        heading: "Talk to your surgeon first",
        paragraphs: [
          "The surgeon who operated on you knows your procedure and your anatomy. The GMC expects cosmetic surgeons to provide continuity of care after surgery and to respond honestly to concerns. Most problems are resolved by talking. Attend every follow-up appointment, even if all seems well.",
        ],
        bullets: [
          "Take regular photos, in the same light and from the same angle, to track changes.",
          "Write down exactly what bothers you: asymmetry, shape, size, scars, sensation.",
          "Reread your consultation letter and quote: what was discussed and what was not.",
          "Ask for a dedicated appointment to talk it through; you can bring someone with you.",
          "Ask: is this still changing? Can it be improved? How, when and with what risks?",
          "Keep a written record of all communication (emails, letters, clinic notes).",
        ],
      },
      {
        heading: "Is revision included, and who pays?",
        paragraphs: [
          "Some procedures carry a known chance of needing revision, such as rhinoplasty, fat transfer or some breast asymmetries. Before surgery, ask about your surgeon's revision policy and get it in writing in your quote or terms and conditions.",
          "Revision is rarely completely free: even if the surgeon waives their fee, anaesthetist, hospital, implant and garment costs may still apply. A revision is a new operation, with a new quote and, as the GMC recommends, time to reflect before going ahead.",
        ],
        bullets: [
          "Within what time frame is revision offered, and in which situations?",
          "Which costs are included and which are not (anaesthetist, hospital, implants)?",
          "What happens if revision is needed because of a complication?",
          "Was complications insurance offered or taken out?",
          "The NHS treats emergencies and serious complications, but does not normally fund surgery to improve a cosmetic result.",
        ],
      },
      {
        heading: "Ask for your records and a second opinion",
        paragraphs: [
          "You have the right to see your medical records: consultation letters, operation notes, photos, quotes and implant details. Make a written subject access request to the clinic or surgeon; under UK data protection law they normally have one month to respond, usually free of charge.",
          "You can seek a second opinion from another surgeon on the GMC specialist register in plastic surgery. It helps you find out whether improvement is possible and sensible. Look for a surgeon experienced in secondary surgery on the area concerned, and check their registration on the GMC register and the hospital's CQC registration.",
        ],
        bullets: [
          "Bring your full records, before and after photos and your implant card if you have one.",
          "Ask what can be improved, what cannot, and the risks involved.",
          "Be wary of promises of a complete fix or pressure to operate again quickly.",
        ],
      },
      {
        heading: "Complaints and redress in the UK",
        paragraphs: [
          "If talking does not resolve things, there are several steps, from informal to formal. Private clinics must have a complaints procedure: ask for it in writing.",
          "The route depends on who provided and funded your care, and where you live. In Scotland, Wales and Northern Ireland, different regulators and ombudsmen apply (for example Healthcare Improvement Scotland and the Scottish Public Services Ombudsman, Healthcare Inspectorate Wales and the Public Services Ombudsman for Wales, the RQIA and the Northern Ireland Public Services Ombudsman).",
        ],
        bullets: [
          "Complain in writing to the clinic or hospital, following its complaints procedure (local resolution).",
          "Private care: if the provider subscribes to the Independent Sector Complaints Adjudication Service (ISCAS), you can ask ISCAS for an independent review once the provider's process is complete.",
          "NHS-funded care in England, including NHS patients treated in private hospitals: the Parliamentary and Health Service Ombudsman (PHSO).",
          "Care Quality Commission (CQC): it does not resolve individual complaints, but you can share your experience, which informs its inspections.",
          "General Medical Council (GMC): for serious concerns about a doctor's fitness to practise.",
          "Clinical negligence claim: doctors must hold indemnity cover; seek advice from a specialist solicitor, as there is usually a three-year time limit from when you became aware of the harm.",
          "Report problems with an implant or medical device to the MHRA through the Yellow Card scheme.",
        ],
      },
      {
        heading: "Why revision surgery is more complex",
        paragraphs: [
          "A second operation on the same area is usually harder than the first. Internal scar tissue has formed, blood supply has changed, and there may be less skin, cartilage or fat to work with. The operation may take longer, recovery may be harder and risks somewhat higher.",
          "It is usually necessary to wait until the tissues have fully healed, often at least 6 to 12 months and sometimes longer, unless a complication needs earlier treatment. Revision usually aims to improve things; it rarely restores how you were before or delivers the ideal you hoped for. Sometimes a surgeon will advise against further surgery because the expected benefit does not justify the risk.",
        ],
        bullets: [
          "Secondary rhinoplasty: often a lack of cartilage, sometimes taken from the ear or a rib.",
          "Implants: changing the pocket, removing the capsule, sometimes with a breast lift.",
          "Liposuction: irregularities are often treated with fat transfer, within limits.",
          "Scars: revision considered once the scar has matured, at least a year on.",
        ],
      },
      {
        heading: "Look after yourself during this time",
        paragraphs: [
          "Being unhappy with a result can be very hard: guilt, anger, isolation, worry about how others see you. These reactions are common. Talk to people close to you or your GP, who can refer you to talking therapies.",
          "If dissatisfaction continues even though several surgeons consider the result reasonable, or you keep having procedures without ever feeling satisfied, it may be body dysmorphic disorder, which is treated with mental health support. If you are in distress or having thoughts of suicide, Samaritans are available day and night on 116 123.",
        ],
      },
    ],
    warningSigns: [
      "Redness, heat, discharge or a temperature of 38°C or above: contact your surgeon straight away.",
      "Skin turning dark, purple or black, or a wound that opens.",
      "Sudden painful swelling on one side, for example of a breast: possible haematoma.",
      "A breast that hardens, changes shape or swells late on in someone with implants.",
      "Chest pain, breathlessness or calf pain: call 999.",
      "A surgeon or clinic that stops responding, refuses to see you or will not release your records.",
      "Pressure to have further surgery quickly, before swelling settles, or promises of a complete fix.",
      "Lasting low mood, withdrawing from others or dark thoughts linked to your result: see your GP or call NHS 111; Samaritans on 116 123.",
    ],
    resources: [
      { label: "Independent Sector Complaints Adjudication Service (ISCAS)", url: "https://iscas.cedr.com" },
      { label: "Parliamentary and Health Service Ombudsman (PHSO)", url: "https://www.ombudsman.org.uk" },
      { label: "General Medical Council (GMC) – check a doctor and raise a concern", url: "https://www.gmc-uk.org" },
      { label: "Care Quality Commission (CQC) – share your experience", url: "https://www.cqc.org.uk" },
      { label: "Information Commissioner's Office (ICO) – your right of access", url: "https://ico.org.uk" },
      { label: "MHRA Yellow Card scheme", url: "https://yellowcard.mhra.gov.uk" },
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
