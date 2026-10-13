import type { Locale } from "@/i18n/routing";
import type { Guide } from "../../types";

/** Médecine esthétique ou chirurgie : comprendre la différence : guide pratique (fr, en-gb). Brouillon à relire par le comité médical. */
export const guide: Record<Locale, Guide> = {
  fr: {
    id: "aesthetic-medicine-vs-surgery",
    locale: "fr",
    slug: "medecine-esthetique-ou-chirurgie",
    title: "Médecine esthétique ou chirurgie : comprendre la différence",
    summary:
      "Injections, lasers, peelings, cryolipolyse face à la chirurgie : ce que chaque approche peut faire, ses risques, qui peut la pratiquer en France.",
    answer:
      "La médecine esthétique regroupe des actes sans incision chirurgicale (injections d'acide hyaluronique ou de toxine botulique, lasers, peelings, fils tenseurs, cryolipolyse, radiofréquence) dont les effets sont en général plus modestes et temporaires que ceux d'une chirurgie. Ces actes ne sont pas anodins : les injections peuvent entraîner des complications vasculaires, rares mais graves. En France, les injections sont des actes médicaux réservés aux médecins ; leur réalisation par des non-médecins est illégale et dangereuse. La chirurgie est plus adaptée quand il faut retirer de la peau en excès, modifier une structure (os, cartilage, muscle) ou obtenir un changement durable.",
    steps: [
      {
        heading: "Les principaux actes de médecine esthétique",
        paragraphs: [
          "Ces techniques se pratiquent le plus souvent en cabinet, sans anesthésie générale, avec une reprise des activités rapide. Elles agissent sur la surface de la peau, les rides, les volumes ou de petits amas graisseux.",
        ],
        bullets: [
          "Toxine botulique : un médicament injecté qui relâche certains muscles du visage pour atténuer les rides d'expression (front, rides du lion, pattes d'oie). Effet d'environ quelques mois.",
          "Acide hyaluronique : un produit de comblement (dispositif médical) injecté pour combler un sillon, redonner du volume ou corriger légèrement un profil de nez. Effet de plusieurs mois à plus d'un an selon le produit et la zone.",
          "Lasers et lumière pulsée : traitement de taches, de petits vaisseaux, de la texture de la peau ou épilation.",
          "Peelings : application d'un produit qui exfolie la peau à des profondeurs variables.",
          "Fils tenseurs : fils résorbables introduits sous la peau pour un effet de soutien léger et temporaire.",
          "Cryolipolyse et radiofréquence : techniques externes qui visent de petits amas graisseux ou un léger raffermissement cutané.",
        ],
      },
      {
        heading: "Ce qu'elles peuvent et ne peuvent pas faire",
        paragraphs: [
          "Ces actes peuvent atténuer des rides, restaurer un peu de volume, améliorer l'aspect de la peau ou réduire modestement un petit amas graisseux. L'effet est progressif et le plus souvent temporaire, ce qui impose des séances répétées pour l'entretenir.",
          "Ils ne peuvent pas retirer un excès de peau important, réparer un muscle abdominal écarté, retendre profondément le visage et le cou, réduire une poitrine ou corriger durablement une bosse osseuse du nez. Une injection de nez ne fait qu'ajouter du volume : elle peut camoufler une irrégularité, jamais réduire la taille du nez.",
        ],
        bullets: [
          "Se méfier de toute présentation d'une injection comme « alternative au lifting » sans nuance.",
          "La cryolipolyse ne remplace ni une liposuccion ni une perte de poids.",
          "Les injections de comblement dans les seins ou les fesses ne sont pas recommandées.",
        ],
      },
      {
        heading: "Des risques propres aux injections",
        paragraphs: [
          "Les suites fréquentes sont des rougeurs, des bleus, un gonflement ou une petite douleur au point d'injection pendant quelques jours. Avec la toxine botulique, une paupière ou un sourcil peut tomber temporairement si le produit diffuse vers un muscle voisin.",
          "La complication la plus redoutée des produits de comblement est l'injection accidentelle dans un vaisseau ou la compression d'une artère. Elle peut provoquer une nécrose de la peau (mort des tissus) et, beaucoup plus rarement, une perte de la vue si l'artère touchée communique avec celles de l'œil. Le nez, la région entre les sourcils et le sillon nasogénien sont des zones à risque. Un médecin formé sait reconnaître ces signes et dispose d'un traitement d'urgence (hyaluronidase, une enzyme qui dissout l'acide hyaluronique).",
          "D'autres complications sont possibles : infection, nodules ou granulomes parfois tardifs, migration du produit, réaction allergique. Les produits non conformes ou contrefaits exposent à des risques supplémentaires, dont des réactions graves ou un botulisme lié à une toxine mal dosée.",
        ],
      },
      {
        heading: "Qui a le droit d'injecter en France",
        paragraphs: [
          "En France, l'injection d'acide hyaluronique et de toxine botulique est un acte médical réservé aux médecins (et, pour certaines zones, aux chirurgiens-dentistes dans leur domaine). Une injection réalisée par une esthéticienne, un « injecteur » autoproclamé ou une personne rencontrée sur les réseaux sociaux relève de l'exercice illégal de la médecine.",
          "L'ANSM et la DGCCRF ont publié des alertes répétées sur les injections pratiquées par des non-médecins, souvent à domicile ou dans des lieux non adaptés, avec des produits achetés en ligne, parfois non conformes ou contrefaits, et sur les stylos injecteurs sans aiguille. Ces pratiques ont entraîné des infections, des nécroses et des séquelles.",
        ],
        bullets: [
          "Vérifier le nom du médecin dans l'Annuaire santé avant le rendez-vous.",
          "Demander le nom commercial, la référence et le numéro de lot du produit, et la carte de traçabilité.",
          "Refuser une injection à domicile, lors d'une « soirée » ou dans un institut de beauté.",
          "Se méfier des prix très bas et des produits proposés par messagerie.",
          "Signaler toute pratique douteuse à l'ANSM ou sur le portail de signalement.",
        ],
      },
      {
        heading: "Durée et coût cumulés",
        paragraphs: [
          "Un acte de médecine esthétique coûte en général moins cher qu'une chirurgie lors d'une séance, mais son effet est temporaire. Sur plusieurs années, la répétition des séances d'entretien peut représenter une dépense comparable, voire supérieure, à une intervention chirurgicale. Ces actes à visée esthétique ne sont pas remboursés par l'Assurance maladie.",
          "Comparez donc sur la durée : nombre de séances prévisibles par an, durée d'effet annoncée pour chaque produit, coût des retouches et de la prise en charge d'une éventuelle complication.",
        ],
        bullets: [
          "Demander un devis écrit précisant le produit, la quantité et le nombre de séances envisagé.",
          "Interroger le médecin sur ce qui se passe si le résultat ne convient pas ou si une complication survient.",
        ],
      },
      {
        heading: "Quand la chirurgie est plus adaptée",
        paragraphs: [
          "La chirurgie est en général plus pertinente quand le problème tient à un excès de peau, à un relâchement profond, à une structure osseuse ou cartilagineuse, ou à un volume important à retirer ou à repositionner. Elle comporte davantage de contraintes (anesthésie, cicatrices, convalescence) mais vise un changement plus durable.",
          "À l'inverse, une injection peut suffire pour une ride d'expression isolée ou une perte de volume modérée. Un chirurgien plasticien ou un médecin qualifié peut vous expliquer honnêtement les deux options, y compris celle de ne rien faire.",
        ],
        bullets: [
          "Paupières : excès de peau marqué ou poches graisseuses → blépharoplastie plutôt qu'injection.",
          "Visage et cou : relâchement important → lifting plutôt que fils tenseurs.",
          "Ventre : excès de peau ou muscles écartés → abdominoplastie plutôt que cryolipolyse.",
          "Nez : bosse, nez trop long ou trouble respiratoire → rhinoplastie plutôt que comblement.",
          "Perte de volume du visage : lipofilling ou acide hyaluronique, à discuter avec le praticien.",
        ],
      },
      {
        heading: "Préparer sa consultation",
        paragraphs: [
          "Les règles de prudence valent pour la médecine esthétique comme pour la chirurgie : consultation préalable, information sur les risques, devis, temps de réflexion.",
        ],
        bullets: [
          "Signaler vos traitements (anticoagulants, aspirine), maladies auto-immunes, allergies, grossesse ou allaitement.",
          "Mentionner les injections antérieures, y compris celles dont vous ignorez le produit.",
          "Demander ce qui sera fait en cas de complication vasculaire et si le cabinet dispose d'hyaluronidase.",
          "Prendre le temps de réfléchir ; ne pas accepter une injection décidée dans la précipitation.",
        ],
      },
    ],
    warningSigns: [
      "Douleur intense, peau qui blanchit, devient marbrée, violacée ou froide pendant ou après une injection de comblement : contactez immédiatement le médecin injecteur ou le 15.",
      "Trouble de la vision, perte de la vue ou douleur à l'œil après une injection au visage : appelez le 15 ou le 112 sans attendre.",
      "Difficulté à avaler, à parler ou à respirer, faiblesse musculaire ou vision double après une injection de toxine botulique : appelez le 15 ou le 112.",
      "Gonflement du visage, des lèvres ou de la langue avec malaise : appelez le 15 ou le 112.",
      "Rougeur, chaleur, douleur croissante ou fièvre dans les jours qui suivent : signe possible d'infection.",
      "Nodule douloureux ou gonflement qui apparaît des semaines ou des mois après une injection.",
      "Brûlure, cloque ou plaie après un laser, un peeling ou une cryolipolyse.",
    ],
    resources: [
      { label: "ANSM – Agence nationale de sécurité du médicament et des produits de santé", url: "https://ansm.sante.fr" },
      { label: "DGCCRF – Direction générale de la concurrence, de la consommation et de la répression des fraudes", url: "https://www.economie.gouv.fr/dgccrf" },
      { label: "Annuaire santé (RPPS)", url: "https://annuaire.sante.fr" },
      { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" },
      { label: "Portail de signalement des événements sanitaires indésirables", url: "https://signalement.social-sante.gouv.fr" },
      { label: "Société française de chirurgie plastique reconstructrice et esthétique (SOFCPRE)", url: "https://www.sofcpre.fr" },
    ],
    interventions: [
      "rhinoplasty",
      "blepharoplasty",
      "facelift",
      "liposuction",
      "abdominoplasty",
      "fat-grafting",
      "breast-augmentation",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  "en-gb": {
    id: "aesthetic-medicine-vs-surgery",
    locale: "en-gb",
    slug: "non-surgical-treatments-or-surgery",
    title: "Non-surgical treatments or surgery?",
    summary:
      "Fillers, Botox, lasers, peels and fat freezing compared with surgery: what each can do, the risks, and who can treat you in the UK.",
    answer:
      "Non-surgical cosmetic treatments include injections of dermal filler or botulinum toxin, lasers, chemical peels, thread lifts, fat freezing and radiofrequency. Their effects are generally more modest and temporary than surgery, and they are not without risk: fillers can cause rare but serious complications such as blocked blood vessels. In the UK, botulinum toxin is a prescription-only medicine, but dermal fillers are not, and many people who inject are not healthcare professionals; a licensing scheme for non-surgical cosmetic procedures in England is still being developed. Surgery is usually more suitable when excess skin needs removing, a structure such as bone or cartilage needs changing, or a longer-lasting change is the aim.",
    steps: [
      {
        heading: "The main non-surgical treatments",
        paragraphs: [
          "These treatments are usually done in a clinic, without a general anaesthetic, and most people return to normal activities quickly. They work on the skin surface, lines, volume or small areas of fat.",
        ],
        bullets: [
          "Botulinum toxin (often called by the brand name Botox): a medicine injected to relax certain facial muscles and soften expression lines on the forehead, between the brows and around the eyes. Effects usually last a few months.",
          "Dermal fillers, most often hyaluronic acid: injected to fill lines, restore volume or slightly change the profile of the nose. Effects last from several months to over a year depending on the product and area.",
          "Lasers and intense pulsed light: for pigmentation, small blood vessels, skin texture or hair removal.",
          "Chemical peels: a solution applied to remove outer layers of skin to varying depths.",
          "Thread lifts: dissolvable threads placed under the skin for a mild, temporary lifting effect.",
          "Fat freezing (cryolipolysis) and radiofrequency: external treatments aimed at small fat bulges or mild skin tightening.",
        ],
      },
      {
        heading: "What they can and cannot do",
        paragraphs: [
          "These treatments can soften lines, add some volume, improve skin quality or modestly reduce a small fat bulge. Effects build up gradually and are usually temporary, so repeat treatments are needed to maintain them.",
          "They cannot remove significant excess skin, repair separated tummy muscles, lift the deep tissues of the face and neck, reduce breast size, or permanently remove a bony hump on the nose. A 'non-surgical nose job' only adds volume: it can disguise an irregularity but never make the nose smaller.",
        ],
        bullets: [
          "Be wary of fillers marketed as a straightforward 'alternative to a facelift'.",
          "Fat freezing does not replace liposuction or weight loss.",
          "Filler injections into the breasts or buttocks are not recommended and carry serious risks.",
        ],
      },
      {
        heading: "Risks specific to injections",
        paragraphs: [
          "Common effects include redness, bruising, swelling and tenderness at the injection site for a few days. With botulinum toxin, an eyelid or eyebrow can droop temporarily if the product spreads to a nearby muscle.",
          "The most serious filler complication is accidental injection into, or compression of, a blood vessel. This can cause skin death (necrosis) and, much more rarely, loss of sight if the affected artery connects with those supplying the eye. The nose, the area between the eyebrows and the lines from nose to mouth are higher-risk areas. A trained practitioner should recognise the signs and have emergency treatment available (hyaluronidase, an enzyme that dissolves hyaluronic acid filler).",
          "Other complications include infection, lumps or granulomas that can appear late, filler moving from where it was placed, and allergic reactions. Unlicensed or fake products add further risk; UK health authorities have reported cases of botulism linked to cosmetic botulinum toxin injections.",
        ],
      },
      {
        heading: "Who can treat you in the UK",
        paragraphs: [
          "Botulinum toxin is a prescription-only medicine: it must be prescribed by a doctor, dentist, nurse or pharmacist prescriber after a face-to-face consultation, although someone else may administer it. Dermal fillers are not prescription-only, so at present people without a healthcare qualification can legally inject them in much of the UK. In England it is illegal to give botulinum toxin or fillers for cosmetic purposes to anyone under 18.",
          "The Health and Care Act 2022 gave the government powers to introduce a licensing scheme for non-surgical cosmetic procedures in England, and plans have been announced to restrict the higher-risk procedures to qualified healthcare professionals in regulated settings. Until these rules are in force, it is up to you to check who is treating you. Scotland, Wales and Northern Ireland have their own arrangements.",
        ],
        bullets: [
          "Ask about the practitioner's professional registration and check it on the GMC, NMC, GDC or GPhC register.",
          "Save Face and the Joint Council for Cosmetic Practitioners (JCCP) run voluntary registers accredited by the Professional Standards Authority; being listed is a useful check, not a guarantee.",
          "Ask the name, manufacturer and batch number of the product, and keep the record.",
          "Avoid treatments at home, at 'parties' or in settings without proper hygiene.",
          "Be wary of very low prices and products offered through social media.",
        ],
      },
      {
        heading: "Duration and cumulative cost",
        paragraphs: [
          "A single non-surgical treatment usually costs less than surgery, but the effect is temporary. Over several years, regular maintenance sessions can add up to a cost similar to, or higher than, an operation. The NHS does not fund cosmetic injections or treatments.",
          "Compare over time: how many sessions a year you are likely to need, how long each product is expected to last, and the cost of top-ups and of treating any complication.",
        ],
        bullets: [
          "Ask for a written plan showing the product, amount and expected number of sessions.",
          "Ask what happens, and what it costs, if you are unhappy with the result or a complication occurs.",
        ],
      },
      {
        heading: "When surgery is more suitable",
        paragraphs: [
          "Surgery is generally more appropriate when the issue is excess skin, deep sagging, bone or cartilage structure, or a significant volume to remove or reposition. It involves more (anaesthesia, scars, recovery time) but aims for a longer-lasting change.",
          "On the other hand, an injection may be enough for an isolated expression line or moderate volume loss. A plastic surgeon or suitably qualified doctor can explain both options honestly, including doing nothing.",
        ],
        bullets: [
          "Eyelids: marked excess skin or fat bags → eyelid surgery rather than injections.",
          "Face and neck: significant sagging → facelift rather than a thread lift.",
          "Tummy: excess skin or separated muscles → tummy tuck rather than fat freezing.",
          "Nose: a hump, a long nose or breathing problems → rhinoplasty rather than filler.",
          "Facial volume loss: fat transfer or hyaluronic acid filler, to be discussed with the practitioner.",
        ],
      },
      {
        heading: "Preparing for your consultation",
        paragraphs: [
          "The same principles apply as for surgery: a proper consultation, information about risks, a written plan and time to think. Professional guidance for doctors recommends a cooling-off period before cosmetic procedures.",
        ],
        bullets: [
          "Mention blood thinners or aspirin, autoimmune conditions, allergies, pregnancy or breastfeeding.",
          "Tell them about previous injections, including any where you do not know the product.",
          "Ask what they would do if a blood vessel were blocked, and whether hyaluronidase is kept on site.",
          "Take time to decide; do not agree to treatment on the spot.",
        ],
      },
    ],
    warningSigns: [
      "Severe pain, or skin turning pale, blotchy, purple or cold during or after a filler injection: contact the practitioner immediately or call 999.",
      "Blurred vision, loss of vision or eye pain after a facial injection: call 999 straight away.",
      "Difficulty swallowing, speaking or breathing, muscle weakness or double vision after botulinum toxin: call 999.",
      "Swelling of the face, lips or tongue with feeling faint: call 999.",
      "Redness, warmth, increasing pain or a high temperature in the following days: contact the practitioner or NHS 111.",
      "A painful lump or swelling appearing weeks or months after an injection.",
      "A burn, blister or open wound after a laser, peel or fat freezing.",
    ],
    resources: [
      { label: "NHS – cosmetic procedures", url: "https://www.nhs.uk" },
      { label: "Medicines and Healthcare products Regulatory Agency (MHRA)", url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency" },
      { label: "MHRA Yellow Card scheme", url: "https://yellowcard.mhra.gov.uk" },
      { label: "Joint Council for Cosmetic Practitioners (JCCP)", url: "https://www.jccp.org.uk" },
      { label: "Save Face", url: "https://www.saveface.co.uk" },
      { label: "General Medical Council (GMC)", url: "https://www.gmc-uk.org" },
    ],
    interventions: [
      "rhinoplasty",
      "blepharoplasty",
      "facelift",
      "liposuction",
      "abdominoplasty",
      "fat-grafting",
      "breast-augmentation",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
};
