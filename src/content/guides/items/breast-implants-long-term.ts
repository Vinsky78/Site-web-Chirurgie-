import type { Locale } from "@/i18n/routing";
import type { Guide } from "../../types";

/** Vivre avec des implants mammaires : guide pratique (fr, en-gb). Brouillon à relire par le comité médical. */
export const guide: Record<Locale, Guide> = {
  fr: {
    id: "breast-implants-long-term",
    locale: "fr",
    slug: "vivre-avec-des-implants-mammaires",
    title: "Vivre avec des implants mammaires",
    summary:
      "Durée de vie, suivi, rupture, coque, LAGC-AIM, carte d'implant, mammographie, grossesse : ce qu'il faut savoir pour vivre avec des implants au fil des années.",
    answer:
      "Les implants mammaires ne sont pas des dispositifs définitifs : beaucoup de femmes auront une ou plusieurs nouvelles interventions au cours de leur vie, pour une rupture, une coque, un changement de forme de la poitrine ou par choix. Il n'est pas nécessaire de les changer à date fixe s'il n'y a aucun problème, mais un suivi régulier est recommandé. Conservez votre carte d'implant, signalez vos implants avant toute mammographie et consultez si un sein change de volume, de forme ou de consistance, ou si une grosseur apparaît. Le LAGC-AIM, un lymphome rare lié surtout aux implants texturés, se manifeste le plus souvent par un gonflement tardif d'un sein.",
    steps: [
      {
        heading: "Des implants qui ne sont pas posés à vie",
        paragraphs: [
          "Un implant mammaire est un dispositif médical : une enveloppe en silicone remplie de gel de silicone ou, plus rarement en France, de sérum physiologique. Il s'use avec le temps et le risque de complication augmente avec les années. Il n'existe pas de « date de péremption » : certains implants restent en place très longtemps sans problème, d'autres doivent être retirés ou changés au bout de quelques années.",
          "Il est donc prudent de considérer, dès la décision, qu'une nouvelle intervention sera probablement nécessaire un jour. Cela a des conséquences sur le budget, l'organisation et le choix de départ (taille, position, type d'implant). Les autorités sanitaires ne recommandent pas de changer des implants à date fixe s'ils ne posent aucun problème.",
        ],
        bullets: [
          "Raisons fréquentes d'une nouvelle intervention : coque, rupture, déplacement de l'implant, changement de la poitrine avec l'âge, la grossesse ou le poids, souhait de changer de taille ou de retirer les implants.",
          "Le retrait sans remplacement (explantation) est possible ; il peut laisser une poitrine plus vide ou relâchée et nécessiter parfois un lifting des seins.",
          "Demandez au chirurgien, avant la pose, ce que deviendrait votre poitrine si les implants devaient un jour être retirés.",
        ],
      },
      {
        heading: "Le suivi régulier et l'imagerie",
        paragraphs: [
          "Après les consultations post-opératoires des premiers mois, un suivi clinique régulier est recommandé, souvent une fois par an, par le chirurgien, votre gynécologue, une sage-femme ou votre médecin traitant. L'examen permet de vérifier la souplesse, la forme et la symétrie des seins et de repérer une anomalie.",
          "L'échographie est l'examen le plus utilisé pour vérifier l'état d'un implant et rechercher un épanchement. L'IRM est demandée en cas de doute, notamment pour confirmer une rupture. Le rythme des examens d'imagerie dépend de votre âge, de vos antécédents et des recommandations en vigueur : demandez à votre chirurgien un calendrier de suivi personnalisé.",
        ],
        bullets: [
          "Pratiquer l'autopalpation et connaître l'aspect habituel de vos seins.",
          "Signaler la présence d'implants à chaque médecin qui vous examine.",
          "Consulter en dehors du calendrier prévu dès qu'un changement apparaît, sans attendre la visite annuelle.",
          "Garder les comptes rendus d'imagerie pour pouvoir les comparer d'une année à l'autre.",
        ],
      },
      {
        heading: "Reconnaître une rupture",
        paragraphs: [
          "Avec un implant en gel de silicone, la rupture est souvent silencieuse : le gel reste en général contenu dans la capsule de tissu que le corps forme autour de l'implant, et rien ne se voit. Elle est alors découverte lors d'une échographie ou d'une IRM. Parfois, le gel sort de la capsule et peut migrer vers les tissus voisins ou les ganglions de l'aisselle.",
          "Avec un implant en sérum physiologique, la rupture se voit rapidement : le sein se dégonfle en quelques jours, le sérum étant absorbé sans danger par le corps.",
          "Une rupture n'est pas une urgence vitale, mais elle conduit en général à recommander le retrait ou le changement de l'implant. Parlez-en avec votre chirurgien.",
        ],
        bullets: [
          "Changement de forme ou de volume d'un sein.",
          "Petite grosseur dans le sein ou l'aisselle.",
          "Douleur, sensibilité, sensation de brûlure ou de picotement.",
          "Durcissement du sein.",
          "Parfois aucun symptôme : c'est l'intérêt du suivi.",
        ],
      },
      {
        heading: "La coque (contracture capsulaire)",
        paragraphs: [
          "Le corps entoure toujours un implant d'une fine membrane appelée capsule. Chez certaines femmes, cette capsule s'épaissit et se rétracte : c'est la coque. Elle peut apparaître dans les mois qui suivent la pose ou des années plus tard. C'est l'une des causes les plus fréquentes de nouvelle intervention.",
          "On la décrit souvent en quatre stades (classification de Baker) : sein souple et d'aspect normal, sein un peu ferme, sein ferme et déformé, puis sein dur, déformé et douloureux. Les stades avancés se traitent en général par une intervention : retrait de la capsule et changement d'implant, parfois avec changement de loge.",
        ],
        bullets: [
          "Sein qui devient plus ferme, plus rond ou remonte.",
          "Asymétrie qui s'installe progressivement.",
          "Inconfort, douleur ou tiraillement.",
          "Une coque peut récidiver après traitement.",
        ],
      },
      {
        heading: "Le LAGC-AIM (BIA-ALCL) : un lymphome rare",
        paragraphs: [
          "Le lymphome anaplasique à grandes cellules associé aux implants mammaires (LAGC-AIM, ou BIA-ALCL en anglais) n'est pas un cancer du sein : c'est un lymphome, un cancer du système immunitaire, qui se développe dans la capsule autour de l'implant. Il est rare et survient surtout avec des implants texturés, en particulier macrotexturés. En France, l'ANSM a retiré du marché en 2019 plusieurs implants macrotexturés et à surface recouverte de polyuréthane.",
          "Il apparaît en général plusieurs années après la pose. Le signe le plus fréquent est un gonflement important et tardif d'un sein, dû à un épanchement de liquide autour de l'implant ; plus rarement, une masse dans le sein ou l'aisselle. Le diagnostic repose sur une échographie et l'analyse du liquide prélevé par ponction. Diagnostiqué tôt, il est le plus souvent traité par le retrait de l'implant et de toute la capsule.",
          "Les autorités ne recommandent pas de retirer des implants texturés qui ne posent aucun problème, mais un suivi attentif et une consultation rapide en cas de symptôme. D'autres tumeurs très rares au contact de la capsule ont été signalées et font l'objet d'une surveillance.",
        ],
        bullets: [
          "Savoir si vos implants sont lisses, microtexturés ou macrotexturés : c'est indiqué sur la carte d'implant.",
          "Consulter rapidement en cas de gonflement d'un sein survenant plus d'un an après la pose.",
          "Demander, en cas d'épanchement, une ponction avec analyse adaptée.",
        ],
      },
      {
        heading: "La carte d'implant et la traçabilité",
        paragraphs: [
          "Après la pose, vous devez recevoir une carte d'implant et un document d'information indiquant le fabricant, le modèle, le numéro de lot ou de série, la date et le lieu de l'intervention. L'établissement conserve aussi ces informations dans votre dossier. Cette traçabilité permet de vous retrouver si une alerte de sécurité concerne votre modèle d'implant.",
          "En France, l'ANSM surveille la sécurité des implants mammaires et publie les informations destinées aux porteuses. Les effets indésirables peuvent être déclarés par les professionnels comme par les patientes sur le portail de signalement des événements sanitaires indésirables.",
        ],
        bullets: [
          "Ranger la carte avec vos papiers importants et en garder une photo.",
          "Si vous n'avez pas reçu de carte, la demander au chirurgien ou à l'établissement.",
          "Demander le compte rendu opératoire, qui précise la voie d'abord et la position de l'implant (devant ou derrière le muscle).",
          "Prévenir l'établissement en cas de changement d'adresse, pour pouvoir être contactée en cas d'alerte.",
        ],
      },
      {
        heading: "Mammographie et dépistage du cancer du sein",
        paragraphs: [
          "Les implants n'empêchent pas le dépistage du cancer du sein, mais ils peuvent masquer une partie du tissu mammaire sur les clichés. Le radiologue utilise des incidences spécifiques (déplacement de l'implant) et complète souvent par une échographie. Le risque que la compression abîme l'implant est faible, mais il faut toujours prévenir.",
          "En France, le dépistage organisé s'adresse aux femmes de 50 à 74 ans, avec une mammographie tous les deux ans. Les porteuses d'implants y ont accès comme les autres. Un suivi plus précoce ou plus rapproché peut être proposé selon vos antécédents.",
        ],
        bullets: [
          "Signaler vos implants à la prise de rendez-vous et au manipulateur radio.",
          "Apporter la carte d'implant et les clichés précédents.",
          "Continuer l'autopalpation : une grosseur reste à faire vérifier, avec ou sans implant.",
        ],
      },
      {
        heading: "Grossesse et allaitement",
        paragraphs: [
          "Les implants n'empêchent pas d'être enceinte. L'allaitement est souvent possible, en particulier quand l'incision a été faite dans le sillon sous le sein ou dans l'aisselle et que l'implant est placé derrière le muscle ; une incision autour de l'aréole peut davantage gêner l'allaitement. Les données disponibles ne montrent pas de risque pour l'enfant lié aux implants en silicone, mais ce point reste suivi.",
          "La grossesse et l'allaitement modifient le volume et la tenue de la poitrine. Après la fin de l'allaitement, les seins peuvent être plus relâchés, ce qui conduit parfois à envisager un lifting ou un changement d'implants. Mieux vaut attendre plusieurs mois après l'arrêt de l'allaitement avant toute décision.",
        ],
      },
      {
        heading: "Symptômes généraux rapportés par certaines porteuses",
        paragraphs: [
          "Certaines femmes porteuses d'implants décrivent des symptômes diffus : fatigue, douleurs articulaires ou musculaires, troubles de la concentration, troubles du sommeil, éruptions cutanées. On parle parfois de « maladie des implants mammaires » (breast implant illness). À ce jour, il n'existe pas de définition médicale reconnue ni de lien de cause à effet démontré entre les implants et ces symptômes, qui peuvent avoir d'autres causes. Des études sont en cours.",
          "Ces symptômes sont réels pour les personnes qui les vivent et méritent d'être pris au sérieux. Parlez-en à votre médecin, qui recherchera d'autres causes. Certaines femmes rapportent une amélioration après le retrait des implants, d'autres non : la décision d'un retrait se discute au cas par cas avec le chirurgien.",
        ],
      },
      {
        heading: "Changer ou retirer ses implants : qui paie ?",
        paragraphs: [
          "Le changement ou le retrait d'implants posés pour raison esthétique est en général à votre charge, comme la pose initiale. Lorsqu'il existe une complication médicale (rupture, coque importante, infection, suspicion de LAGC-AIM), l'Assurance maladie peut prendre en charge tout ou partie de l'acte de retrait, selon la situation ; la pose de nouveaux implants à visée esthétique reste en principe à votre charge.",
          "Renseignez-vous auprès du chirurgien et de votre caisse avant l'intervention, et demandez un devis détaillé, avec le délai de réflexion de 15 jours qui s'applique aussi à une nouvelle intervention esthétique.",
        ],
        bullets: [
          "Le fabricant propose-t-il une garantie en cas de rupture, et que couvre-t-elle exactement ?",
          "Que prévoit mon chirurgien en cas de complication dans les premières années ?",
          "Une assurance complémentaire ou une assurance complications couvre-t-elle une partie des frais ?",
        ],
      },
    ],
    warningSigns: [
      "Gonflement important d'un sein, apparu plus d'un an après la pose : consulter rapidement.",
      "Grosseur dans le sein, sous l'implant ou dans l'aisselle.",
      "Sein qui change de forme, de volume ou devient dur, douloureux ou déformé.",
      "Rougeur, chaleur, douleur et fièvre, même des années après la pose : appeler le chirurgien rapidement.",
      "Peau qui s'amincit, laisse deviner l'implant ou s'ouvre.",
      "Écoulement par le mamelon, rétraction du mamelon ou modification de la peau du sein.",
      "Douleur thoracique brutale ou difficulté à respirer : appeler le 15 ou le 112.",
    ],
    resources: [
      { label: "ANSM – implants mammaires : informations pour les porteuses", url: "https://ansm.sante.fr" },
      { label: "Institut national du cancer (INCa) – LAGC-AIM et dépistage", url: "https://www.e-cancer.fr" },
      { label: "Portail de signalement des événements sanitaires indésirables", url: "https://signalement.social-sante.gouv.fr" },
      { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" },
      { label: "Société française de chirurgie plastique, reconstructrice et esthétique (SOFCPRE)", url: "https://www.sofcpre.fr" },
      { label: "Assurance maladie (ameli) – dépistage du cancer du sein", url: "https://www.ameli.fr" },
    ],
    interventions: ["breast-augmentation", "breast-implant-revision", "breast-lift", "fat-grafting"],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  "en-gb": {
    id: "breast-implants-long-term",
    locale: "en-gb",
    slug: "living-with-breast-implants",
    title: "Living with breast implants",
    summary:
      "Lifespan, check-ups, rupture, capsular contracture, BIA-ALCL, implant card and registry, screening, pregnancy: living with breast implants over the years.",
    answer:
      "Breast implants are not lifetime devices: many women will have one or more further operations during their life, because of rupture, capsular contracture, changes in breast shape or simply by choice. You do not need to replace them at a fixed date if there is no problem, but you should keep an eye on them. Keep your implant card, ask for your details to be added to the Breast and Cosmetic Implant Registry, tell staff about your implants before any mammogram, and see a doctor if a breast changes in size, shape or feel or you notice a lump. BIA-ALCL, a rare lymphoma linked mainly to textured implants, most often shows up as late swelling of one breast.",
    steps: [
      {
        heading: "Implants are not for life",
        paragraphs: [
          "A breast implant is a medical device: a silicone shell filled with silicone gel or, less often, saline (salt water). It wears over time and the risk of complications rises with the years. There is no expiry date: some implants stay in place for a very long time without problems, while others need removing or replacing after a few years.",
          "It is sensible to assume from the outset that you will probably need another operation one day. This affects your budget, your plans and your initial choices (size, position, type of implant). The MHRA does not recommend replacing implants at a set interval if they are not causing problems.",
        ],
        bullets: [
          "Common reasons for further surgery: capsular contracture, rupture, implant moving, breasts changing with age, pregnancy or weight, wanting a different size or wanting implants removed.",
          "Removal without replacement (explant surgery) is possible; it can leave the breasts emptier or looser and sometimes calls for a breast lift.",
          "Before surgery, ask your surgeon what your breasts would look like if the implants had to come out one day.",
        ],
      },
      {
        heading: "Regular checks and scans",
        paragraphs: [
          "After the follow-up appointments of the first months, keep up regular checks: your surgeon may offer reviews, and your GP can examine you if you have concerns. Checking your breasts lets you spot changes in softness, shape or symmetry early.",
          "In the UK, routine scans are not usually recommended for women with implants and no symptoms. Ultrasound is the most common test if a problem is suspected, for example to look for fluid or a rupture; an MRI scan may be used if there is doubt. Ask your surgeon what follow-up they offer and how long it is included.",
        ],
        bullets: [
          "Get to know how your breasts normally look and feel and check them regularly.",
          "Tell any doctor who examines you that you have implants.",
          "See your surgeon or GP as soon as you notice a change, rather than waiting for a planned review.",
          "Keep copies of scan reports so they can be compared over time.",
        ],
      },
      {
        heading: "Recognising a rupture",
        paragraphs: [
          "With a silicone gel implant, rupture is often silent: the gel usually stays inside the capsule of tissue the body forms around the implant, and nothing shows. It is then found on an ultrasound or MRI scan. Sometimes the gel escapes from the capsule and can move into nearby tissue or the lymph nodes in the armpit.",
          "With a saline implant, rupture is obvious: the breast deflates within a few days, as the body safely absorbs the salt water.",
          "A rupture is not a medical emergency, but removal or replacement of the implant is usually advised. Discuss it with your surgeon.",
        ],
        bullets: [
          "A change in the shape or size of a breast.",
          "A small lump in the breast or armpit.",
          "Pain, tenderness, burning or tingling.",
          "A breast that becomes harder.",
          "Sometimes no symptoms at all: this is why checks matter.",
        ],
      },
      {
        heading: "Capsular contracture",
        paragraphs: [
          "The body always forms a thin layer of tissue, called a capsule, around an implant. In some women this capsule thickens and tightens: this is capsular contracture. It can appear in the months after surgery or years later, and is one of the most common reasons for further surgery.",
          "It is often described in four grades (the Baker scale): soft and normal-looking, slightly firm, firm and visibly misshapen, then hard, misshapen and painful. Higher grades are usually treated with surgery: removing the capsule and replacing the implant, sometimes in a different pocket.",
        ],
        bullets: [
          "A breast that becomes firmer, rounder or sits higher.",
          "Asymmetry that develops gradually.",
          "Discomfort, pain or a feeling of tightness.",
          "Contracture can come back after treatment.",
        ],
      },
      {
        heading: "BIA-ALCL: a rare lymphoma",
        paragraphs: [
          "Breast implant-associated anaplastic large cell lymphoma (BIA-ALCL) is not breast cancer: it is a lymphoma, a cancer of the immune system, that develops in the capsule around the implant. It is rare and occurs mainly with textured implants, particularly macro-textured ones. Some macro-textured implants were withdrawn from the European market in 2018 and 2019.",
          "It usually appears several years after surgery. The most common sign is significant late swelling of one breast caused by fluid collecting around the implant; less often, a lump in the breast or armpit. Diagnosis relies on an ultrasound and testing a sample of the fluid. Found early, it is most often treated by removing the implant and the whole capsule.",
          "The MHRA does not recommend removing textured implants that are not causing problems, but advises staying alert and seeking advice promptly if symptoms appear. Other very rare tumours in the capsule have been reported and are being monitored.",
        ],
        bullets: [
          "Find out whether your implants are smooth, micro-textured or macro-textured: it is on your implant card.",
          "See your surgeon or GP promptly if a breast swells more than a year after surgery.",
          "If there is fluid around the implant, ask for it to be sampled and tested for BIA-ALCL.",
        ],
      },
      {
        heading: "Your implant card and the national registry",
        paragraphs: [
          "After surgery you should receive an implant card and information showing the manufacturer, model, batch or serial number, and the date and place of the operation. The hospital also keeps this in your records. This traceability means you can be contacted if a safety alert affects your implant.",
          "In England, the Breast and Cosmetic Implant Registry (BCIR) records details of breast implant operations carried out in NHS and private hospitals, with your consent. It helps identify patients if there is a problem with a particular implant. Ask your hospital to add your details. Problems with implants can also be reported to the MHRA through the Yellow Card scheme, by patients as well as professionals.",
        ],
        bullets: [
          "Keep the card with your important documents and take a photo of it.",
          "If you did not receive one, ask your surgeon or hospital for it.",
          "Ask for your operation note, which records the incision and whether the implant is above or below the muscle.",
          "Tell the hospital if you move house, so they can reach you in the event of an alert.",
        ],
      },
      {
        heading: "Mammograms and breast screening",
        paragraphs: [
          "Implants do not stop you being screened for breast cancer, but they can hide some breast tissue on the images. Radiographers use special views that move the implant aside, and an ultrasound may be added. The risk of the compression damaging an implant is low, but always tell them.",
          "In England, the NHS Breast Screening Programme invites women aged 50 to 71 for a mammogram every three years. Women with implants can still attend; let the screening unit know when you book, as some units arrange appointments differently. Earlier or more frequent checks may be offered depending on your family history.",
        ],
        bullets: [
          "Mention your implants when booking and again to the radiographer.",
          "Bring your implant card and details of previous imaging if possible.",
          "Keep checking your breasts: any lump needs to be looked at, with or without implants.",
        ],
      },
      {
        heading: "Pregnancy and breastfeeding",
        paragraphs: [
          "Implants do not stop you getting pregnant. Breastfeeding is often possible, especially if the incision was made in the fold under the breast or in the armpit and the implant sits behind the muscle; an incision around the areola is more likely to affect breastfeeding. Available evidence does not show a risk to the baby from silicone implants, but this continues to be monitored.",
          "Pregnancy and breastfeeding change the size and support of the breasts. Afterwards they may be looser, which sometimes leads women to consider a breast lift or new implants. It is better to wait several months after stopping breastfeeding before making any decision.",
        ],
      },
      {
        heading: "Whole-body symptoms reported by some women",
        paragraphs: [
          "Some women with implants describe wide-ranging symptoms: tiredness, joint or muscle pain, poor concentration, sleep problems, rashes. This is sometimes called breast implant illness. At present there is no recognised medical definition and no proven cause-and-effect link between implants and these symptoms, which can have other causes. Research is ongoing.",
          "These symptoms are real for the people who experience them and deserve to be taken seriously. Talk to your GP, who will look for other causes. Some women report feeling better after implant removal and others do not: whether to remove implants should be discussed case by case with your surgeon.",
        ],
      },
      {
        heading: "Replacing or removing implants: who pays?",
        paragraphs: [
          "Replacing or removing implants placed for cosmetic reasons is usually at your own expense, like the original operation. The NHS may remove implants when there is a clear medical need, such as a confirmed rupture causing problems, severe contracture, infection or suspected BIA-ALCL, depending on local policy; it does not normally replace cosmetic implants.",
          "Check with your surgeon before your first operation what happens if you need further surgery, and ask for a detailed written quote for any revision, with a two-week cooling-off period as recommended by the GMC.",
        ],
        bullets: [
          "Does the manufacturer offer a warranty for rupture, and what exactly does it cover?",
          "What does my surgeon offer if there is a complication in the first few years?",
          "Would a cosmetic surgery complications insurance policy cover part of the cost?",
        ],
      },
    ],
    warningSigns: [
      "Significant swelling of one breast more than a year after surgery: see your surgeon or GP promptly.",
      "A lump in the breast, around the implant or in the armpit.",
      "A breast that changes shape or size or becomes hard, painful or misshapen.",
      "Redness, heat, pain and a temperature, even years after surgery: contact your surgeon promptly or call NHS 111.",
      "Skin that thins, shows the outline of the implant or breaks open.",
      "Nipple discharge, an inverted nipple or changes to the skin of the breast.",
      "Sudden chest pain or difficulty breathing: call 999.",
    ],
    resources: [
      { label: "MHRA – breast implants: information for patients", url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency" },
      { label: "NHS England – Breast and Cosmetic Implant Registry", url: "https://digital.nhs.uk" },
      { label: "MHRA Yellow Card scheme", url: "https://yellowcard.mhra.gov.uk" },
      { label: "NHS – breast implants and breast screening", url: "https://www.nhs.uk" },
      { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" },
      { label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)", url: "https://www.bapras.org.uk" },
    ],
    interventions: ["breast-augmentation", "breast-implant-revision", "breast-lift", "fat-grafting"],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
};
