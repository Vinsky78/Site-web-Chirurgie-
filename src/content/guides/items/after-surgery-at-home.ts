import type { Locale } from "@/i18n/routing";
import type { Guide } from "../../types";

/** Les premiers jours à la maison après l'opération : guide pratique (fr, en-gb). Brouillon à relire par le comité médical. */
export const guide: Record<Locale, Guide> = {
  fr: {
    id: "after-surgery-at-home",
    locale: "fr",
    slug: "premiers-jours-a-la-maison-apres-l-operation",
    title: "Les premiers jours à la maison après l'opération",
    summary:
      "Douleur, pansements, douche, sommeil, marche, gaine, reprise du travail et moral : repères pratiques pour les premiers jours après une chirurgie esthétique.",
    answer:
      "Les premiers jours à la maison sont surtout faits de repos, de marche régulière et du respect des consignes écrites du chirurgien. Gonflement, bleus, tiraillements et douleur soulagée par les antalgiques prescrits sont attendus et diminuent progressivement. Une fièvre, une douleur qui augmente, un gonflement important d'un seul côté ou une douleur du mollet doivent faire appeler le chirurgien sans attendre ; un essoufflement brutal ou une douleur dans la poitrine, le 15 ou le 112. Un passage à vide dans les jours qui suivent est fréquent et ne préjuge pas du résultat final.",
    steps: [
      {
        heading: "Gérer la douleur avec les médicaments prescrits",
        paragraphs: [
          "La douleur est en général plus marquée les deux à trois premiers jours, puis diminue. Elle varie beaucoup selon l'intervention : une abdominoplastie ou une augmentation mammaire sous le muscle sont souvent plus inconfortables qu'une blépharoplastie.",
          "Prenez les antalgiques prescrits à heures régulières au début, plutôt que d'attendre que la douleur soit forte. N'ajoutez pas d'autres médicaments, en particulier de l'aspirine ou des anti-inflammatoires, sans l'accord du chirurgien : ils peuvent favoriser un saignement.",
        ],
        bullets: [
          "Noter les heures de prise pour éviter les oublis ou les doublons.",
          "Certains antalgiques constipent : boire, manger des fibres, demander un laxatif si besoin.",
          "Appliquer du froid (poche protégée par un linge) seulement si le chirurgien l'a conseillé, jamais directement sur la peau.",
          "Ne pas boire d'alcool avec les antalgiques.",
        ],
      },
      {
        heading: "Pansements, drains et douche",
        paragraphs: [
          "Suivez exactement les consignes de l'ordonnance de sortie : certains pansements restent en place jusqu'au premier contrôle, d'autres sont refaits par une infirmière à domicile. Ne retirez pas vous-même les bandelettes adhésives ni les fils, sauf indication.",
          "Si vous rentrez avec un drain (petit tuyau qui évacue le sang et la lymphe), notez la quantité recueillie chaque jour si on vous l'a demandé. Le drain est retiré par l'équipe soignante, en général après quelques jours.",
          "La douche est souvent autorisée après 24 à 48 heures, selon le type de pansement. Le bain, la piscine, la mer, le sauna et le hammam sont en général à éviter pendant plusieurs semaines, jusqu'à cicatrisation complète.",
        ],
        bullets: [
          "Se laver les mains avant de toucher un pansement.",
          "Sécher en tamponnant, sans frotter les cicatrices.",
          "Ne pas appliquer de crème, d'huile ou d'antiseptique non prescrit sur les plaies.",
          "Garder le drain fixé et éviter de tirer dessus.",
        ],
      },
      {
        heading: "Dormir et se positionner",
        paragraphs: [
          "La position recommandée dépend de l'intervention. Après une chirurgie du visage, du nez ou des paupières, dormir la tête surélevée (deux oreillers ou un coussin incliné) aide à limiter le gonflement. Après une chirurgie mammaire, on conseille souvent de dormir sur le dos. Après une abdominoplastie, une position légèrement fléchie (dos surélevé, genoux soutenus par un coussin) réduit la tension sur la cicatrice.",
          "Pour se lever, passez par le côté en vous aidant des bras, sans faire travailler les abdominaux si votre ventre a été opéré.",
        ],
      },
      {
        heading: "Marcher pour prévenir la phlébite",
        paragraphs: [
          "Après une opération, le sang circule moins bien dans les jambes et un caillot peut se former dans une veine (thrombose veineuse profonde ou phlébite), puis migrer vers les poumons (embolie pulmonaire). Le risque est plus élevé après une chirurgie du corps, une intervention longue, sous contraception hormonale ou en cas d'antécédent.",
          "Le repos ne veut pas dire rester allongé toute la journée. Marcher un peu dans le logement plusieurs fois par jour, dès le retour, est l'une des mesures de prévention les plus importantes.",
        ],
        bullets: [
          "Quelques minutes de marche toutes les une à deux heures en journée.",
          "Bouger les pieds et les chevilles régulièrement quand vous êtes assis(e) ou allongé(e).",
          "Porter les bas de contention et faire les injections anticoagulantes s'ils ont été prescrits, jusqu'au bout.",
          "Éviter les longs trajets en voiture, en train ou en avion les premières semaines sans avis du chirurgien.",
        ],
      },
      {
        heading: "Manger, boire et porter la gaine",
        paragraphs: [
          "Une alimentation équilibrée, riche en protéines, fruits et légumes, et une hydratation suffisante aident la cicatrisation et limitent la constipation. Évitez de saler beaucoup, ce qui accentue le gonflement. Le tabac reste interdit jusqu'à la cicatrisation.",
          "Après une liposuccion, une abdominoplastie ou une chirurgie mammaire, une gaine, un panty ou un soutien-gorge de maintien sont souvent prescrits, jour et nuit, pendant plusieurs semaines (souvent 4 à 6). Ils limitent le gonflement et soutiennent les tissus.",
        ],
        bullets: [
          "Retirer la gaine uniquement pour la douche, sauf autre consigne.",
          "Signaler une gaine qui serre au point de marquer, de faire mal ou de gêner la respiration.",
          "Protéger la peau sous les coutures avec un tissu fin si elle s'irrite.",
        ],
      },
      {
        heading: "Calendrier indicatif de reprise",
        paragraphs: [
          "Les délais varient selon l'intervention, votre état de santé et votre métier. Seul votre chirurgien peut fixer les vôtres ; les repères ci-dessous sont indicatifs.",
        ],
        bullets: [
          "Conduite : pas avant d'avoir arrêté les antalgiques qui endorment et de pouvoir freiner brusquement et tourner la tête sans gêne, souvent une à deux semaines, davantage après une abdominoplastie. Vérifiez aussi votre contrat d'assurance.",
          "Travail de bureau : souvent une à trois semaines selon l'intervention.",
          "Travail physique, port de charges, ménage lourd : en général pas avant plusieurs semaines.",
          "Marche active : progressivement dès la première semaine.",
          "Sport doux : souvent après trois à quatre semaines ; sport intense, natation ou exercices abdominaux : souvent après six semaines ou plus.",
          "Exposition au soleil des cicatrices : à éviter plusieurs mois.",
        ],
      },
      {
        heading: "Les rendez-vous de contrôle",
        paragraphs: [
          "Un premier contrôle a souvent lieu dans la première ou la deuxième semaine (retrait des fils ou des drains, vérification des cicatrices), puis d'autres à un mois, trois mois et un an environ. Allez-y même si tout semble aller bien : ils permettent de repérer tôt un sérome, une infection ou un retard de cicatrisation.",
          "Notez vos questions entre deux rendez-vous et prenez des photos datées si une zone vous inquiète : cela aide l'équipe à juger de l'évolution.",
        ],
      },
      {
        heading: "Le moral : un passage à vide fréquent",
        paragraphs: [
          "Beaucoup de personnes ressentent de la tristesse, de l'irritabilité, du doute ou du regret dans les jours qui suivent : fatigue, douleur, perte d'autonomie et gonflement qui déforme temporairement la zone opérée y contribuent. Ce passage à vide est courant et s'atténue en général en une à deux semaines.",
          "Le résultat ne peut pas être jugé avant plusieurs semaines, voire plusieurs mois. Si la tristesse persiste, s'aggrave ou s'accompagne d'idées noires, parlez-en à votre chirurgien ou à votre médecin traitant. En cas de détresse, le 3114 (numéro national de prévention du suicide) répond jour et nuit.",
        ],
      },
      {
        heading: "Qui appeler",
        paragraphs: [
          "Avant de quitter l'établissement, vérifiez que vous avez un numéro joignable à toute heure : celui du chirurgien ou de l'établissement. Gardez à portée de main le compte rendu opératoire et l'ordonnance de sortie.",
        ],
        bullets: [
          "Question ou symptôme inhabituel : le chirurgien ou l'établissement.",
          "Chirurgien injoignable et symptôme inquiétant : le médecin de garde ou le 15.",
          "Urgence vitale (essoufflement brutal, douleur dans la poitrine, saignement abondant, malaise) : le 15 ou le 112.",
        ],
      },
    ],
    warningSigns: [
      "Essoufflement brutal, douleur dans la poitrine, crachats de sang ou malaise : appeler le 15 ou le 112.",
      "Fièvre à 38 °C ou plus, ou frissons.",
      "Douleur qui augmente au lieu de diminuer, ou qui n'est plus soulagée par les antalgiques prescrits.",
      "Gonflement important, dur ou tendu d'un seul côté (possible hématome).",
      "Douleur, rougeur ou gonflement d'un mollet.",
      "Rougeur qui s'étend, chaleur, écoulement purulent ou malodorant, cicatrice qui s'ouvre.",
      "Peau qui devient sombre, violacée ou noire près de la cicatrice.",
      "Saignement abondant ou qui ne s'arrête pas.",
    ],
    resources: [
      { label: "Assurance maladie (ameli) – après une opération", url: "https://www.ameli.fr" },
      { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" },
      { label: "Société française de chirurgie plastique, reconstructrice et esthétique (SOFCPRE)", url: "https://www.sofcpre.fr" },
      { label: "Société française d'anesthésie et de réanimation (SFAR)", url: "https://sfar.org" },
      { label: "3114 – numéro national de prévention du suicide", url: "https://3114.fr" },
    ],
    interventions: [
      "abdominoplasty",
      "breast-augmentation",
      "rhinoplasty",
      "liposuction",
      "facelift",
      "blepharoplasty",
      "breast-lift",
      "breast-reduction",
      "gynecomastia",
      "otoplasty",
      "fat-grafting",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  "en-gb": {
    id: "after-surgery-at-home",
    locale: "en-gb",
    slug: "first-days-at-home-after-surgery",
    title: "The first days at home after surgery",
    summary:
      "Pain relief, dressings, showering, sleep, walking, garments, returning to work and low mood: practical pointers for the first days after cosmetic surgery.",
    answer:
      "The first days at home are mostly about rest, regular short walks and following your surgeon's written instructions. Swelling, bruising, tightness and pain controlled by the prescribed painkillers are expected and ease gradually. A fever, pain that is getting worse, marked swelling on one side or pain in one calf mean you should call your surgeon promptly; sudden breathlessness or chest pain mean calling 999. Feeling low in the days after surgery is common and says nothing about the final result.",
    steps: [
      {
        heading: "Manage pain with the medicines you were prescribed",
        paragraphs: [
          "Pain is usually worst for the first two to three days, then eases. It varies a lot between operations: a tummy tuck or breast augmentation under the muscle is often more uncomfortable than eyelid surgery.",
          "Take your prescribed painkillers at regular times at first, rather than waiting until the pain is bad. Do not add other medicines, particularly aspirin or anti-inflammatories such as ibuprofen, without your surgeon's agreement: they can increase bleeding.",
        ],
        bullets: [
          "Write down when you take each dose to avoid missing or doubling up.",
          "Some painkillers cause constipation: drink plenty, eat fibre and ask about a laxative if needed.",
          "Use a cold pack (wrapped in a cloth) only if your surgeon recommends it, never directly on the skin.",
          "Do not drink alcohol while taking painkillers.",
        ],
      },
      {
        heading: "Dressings, drains and showering",
        paragraphs: [
          "Follow your discharge instructions exactly: some dressings stay on until your first check, others are changed by a practice or community nurse. Do not remove adhesive strips or stitches yourself unless told to.",
          "If you go home with a drain (a small tube that removes blood and fluid), record the amount collected each day if asked. The clinical team removes it, usually after a few days.",
          "Showering is often allowed after 24 to 48 hours, depending on the dressing. Baths, swimming pools, the sea, saunas and steam rooms are usually off-limits for several weeks, until the wounds have fully healed.",
        ],
        bullets: [
          "Wash your hands before touching a dressing.",
          "Pat dry rather than rubbing your scars.",
          "Do not apply creams, oils or antiseptics that were not prescribed.",
          "Keep the drain secured and avoid pulling on it.",
        ],
      },
      {
        heading: "Sleeping and positioning",
        paragraphs: [
          "The recommended position depends on the operation. After face, nose or eyelid surgery, sleeping with your head raised (two pillows or a wedge) helps limit swelling. After breast surgery you are often advised to sleep on your back. After a tummy tuck, a slightly bent position (back raised, knees supported on a pillow) reduces tension on the scar.",
          "To get out of bed, roll onto your side and push up with your arms, without using your stomach muscles if your abdomen was operated on.",
        ],
      },
      {
        heading: "Keep walking to prevent blood clots",
        paragraphs: [
          "After surgery, blood flows more slowly in the legs and a clot can form in a deep vein (deep vein thrombosis, DVT), then travel to the lungs (pulmonary embolism). The risk is higher after body surgery, long operations, if you take the combined pill or HRT, or if you have had a clot before.",
          "Resting does not mean lying down all day. Walking around your home several times a day from the day you get back is one of the most important ways to lower the risk.",
        ],
        bullets: [
          "A few minutes' walk every one to two hours during the day.",
          "Move your feet and ankles regularly when sitting or lying down.",
          "Wear compression stockings and complete any blood-thinning injections you were prescribed.",
          "Avoid long car, train or plane journeys in the first weeks without your surgeon's advice.",
        ],
      },
      {
        heading: "Eating, drinking and wearing your garment",
        paragraphs: [
          "A balanced diet with enough protein, fruit and vegetables, plus plenty of fluids, supports healing and helps prevent constipation. Go easy on salt, which can make swelling worse. Smoking remains off-limits until you have healed.",
          "After liposuction, a tummy tuck or breast surgery, a compression garment or support bra is often prescribed day and night for several weeks (often 4 to 6). It limits swelling and supports the tissues.",
        ],
        bullets: [
          "Take the garment off only to shower, unless told otherwise.",
          "Tell your surgeon if it is so tight that it leaves deep marks, hurts or affects your breathing.",
          "Protect skin under seams with a thin layer of fabric if it gets sore.",
        ],
      },
      {
        heading: "A rough timetable for getting back to normal",
        paragraphs: [
          "Timings vary with the operation, your health and your job. Only your surgeon can set yours; the points below are a general guide.",
        ],
        bullets: [
          "Driving: not until you have stopped painkillers that cause drowsiness and can do an emergency stop and turn your head comfortably, often one to two weeks, longer after a tummy tuck. Check your insurance policy too.",
          "Desk work: often one to three weeks depending on the operation.",
          "Physical work, lifting, heavy housework: usually not for several weeks.",
          "Brisk walking: built up gradually from the first week.",
          "Gentle exercise: often after three to four weeks; intense exercise, swimming or core work: often after six weeks or more.",
          "Sun on your scars: avoid for several months.",
        ],
      },
      {
        heading: "Follow-up appointments",
        paragraphs: [
          "A first check often takes place in the first or second week (removal of stitches or drains, wound check), then further visits at around one month, three months and a year. Go even if everything seems fine: they help pick up a seroma, infection or slow healing early.",
          "Write down questions between appointments and take dated photos of anything that worries you: it helps the team judge how things are changing.",
        ],
      },
      {
        heading: "Your mood: feeling low is common",
        paragraphs: [
          "Many people feel tearful, irritable, doubtful or regretful in the days after surgery: tiredness, pain, depending on others and swelling that temporarily distorts the area all play a part. This dip is common and usually lifts within one to two weeks.",
          "The result cannot be judged for several weeks or even months. If low mood persists, gets worse or comes with thoughts of harming yourself, talk to your surgeon or GP. If you are struggling, Samaritans can be reached any time on 116 123, and in a crisis you can call NHS 111 or 999.",
        ],
      },
      {
        heading: "Who to call",
        paragraphs: [
          "Before leaving hospital, check that you have a number you can call at any time: your surgeon's or the hospital's. Keep your operation note and discharge letter to hand.",
        ],
        bullets: [
          "A question or an unusual symptom: your surgeon or hospital.",
          "Surgeon unreachable and a worrying symptom: NHS 111, by phone or online.",
          "Emergency (sudden breathlessness, chest pain, heavy bleeding, collapse): 999.",
        ],
      },
    ],
    warningSigns: [
      "Sudden breathlessness, chest pain, coughing up blood or collapse: call 999.",
      "A temperature of 38°C or above, or shivering.",
      "Pain that is getting worse instead of better, or no longer relieved by your prescribed medicines.",
      "Marked, hard or tense swelling on one side (possible haematoma).",
      "Pain, redness or swelling in one calf.",
      "Spreading redness, heat, pus or foul-smelling discharge, or a wound that opens.",
      "Skin near the scar turning dark, purple or black.",
      "Heavy bleeding or bleeding that will not stop.",
    ],
    resources: [
      { label: "NHS – recovering from surgery and NHS 111", url: "https://www.nhs.uk" },
      { label: "Royal College of Surgeons of England – recovering from surgery", url: "https://www.rcseng.ac.uk" },
      { label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)", url: "https://www.bapras.org.uk" },
      { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" },
      { label: "Samaritans", url: "https://www.samaritans.org" },
    ],
    interventions: [
      "abdominoplasty",
      "breast-augmentation",
      "rhinoplasty",
      "liposuction",
      "facelift",
      "blepharoplasty",
      "breast-lift",
      "breast-reduction",
      "gynecomastia",
      "otoplasty",
      "fat-grafting",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
};
