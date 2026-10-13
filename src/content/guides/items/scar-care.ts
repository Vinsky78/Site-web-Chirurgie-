import type { Locale } from "@/i18n/routing";
import type { Guide } from "../../types";

/** Prendre soin de ses cicatrices : guide pratique (fr, en-gb). Brouillon à relire par le comité médical. */
export const guide: Record<Locale, Guide> = {
  fr: {
    id: "scar-care",
    locale: "fr",
    slug: "prendre-soin-de-ses-cicatrices",
    title: "Prendre soin de ses cicatrices",
    summary:
      "Étapes de la cicatrisation, soins, massage, soleil, silicone, cicatrices hypertrophiques et chéloïdes : comment accompagner une cicatrice pendant 12 à 18 mois.",
    answer:
      "Toute intervention chirurgicale laisse une cicatrice définitive ; le chirurgien cherche à la placer dans un endroit discret, mais son aspect final dépend aussi de votre peau et de la façon dont elle cicatrise. Une cicatrice évolue pendant 12 à 18 mois : rouge et parfois en relief les premiers mois, elle s'éclaircit et s'assouplit ensuite. Garder les plaies propres, ne pas fumer, éviter le soleil, masser et utiliser du silicone quand le chirurgien l'autorise peuvent aider. Si une cicatrice devient épaisse, douloureuse ou s'étend, des traitements existent : parlez-en tôt au chirurgien.",
    steps: [
      {
        heading: "Comprendre les étapes de la cicatrisation",
        paragraphs: [
          "La cicatrisation se fait en plusieurs phases. Les premiers jours, la plaie se referme. Pendant les semaines suivantes, le corps fabrique du collagène : la cicatrice devient souvent rouge, ferme, parfois un peu gonflée et sensible, et peut démanger. C'est à ce moment qu'elle paraît le moins belle, ce qui inquiète souvent à tort.",
          "Ensuite commence la phase de maturation, qui dure en général 12 à 18 mois, parfois plus. La cicatrice s'aplatit, s'assouplit et pâlit progressivement pour devenir plus claire que la peau voisine. Son aspect définitif ne peut donc être jugé qu'après un an environ.",
        ],
        bullets: [
          "0 à 3 semaines : fermeture de la plaie, fils ou bandelettes en place, soins locaux.",
          "1 à 3 mois : cicatrice rouge, ferme, parfois épaissie ou qui démange : c'est habituel.",
          "3 à 12 mois : assouplissement et éclaircissement progressifs.",
          "12 à 18 mois : aspect proche de l'aspect définitif.",
        ],
      },
      {
        heading: "Les soins des premières semaines",
        paragraphs: [
          "Tant que la plaie n'est pas complètement fermée, l'objectif est d'éviter l'infection et de ne pas mettre la cicatrice en tension. Suivez les consignes de pansement de votre chirurgien ou de l'infirmière.",
        ],
        bullets: [
          "Se laver les mains avant tout soin ; nettoyer seulement comme indiqué sur l'ordonnance.",
          "Ne pas arracher les croûtes ni retirer les bandelettes adhésives avant la date prévue.",
          "Éviter bains, piscine, mer, sauna et hammam jusqu'à cicatrisation complète.",
          "Éviter les mouvements et les efforts qui étirent la cicatrice (porter, lever les bras, se pencher selon la zone).",
          "Porter la gaine ou le soutien-gorge prescrit, qui limite aussi la tension.",
          "Ne pas fumer : le tabac retarde la cicatrisation et augmente le risque de désunion.",
        ],
      },
      {
        heading: "Masser la cicatrice, quand le chirurgien l'autorise",
        paragraphs: [
          "Une fois la plaie bien fermée et les fils retirés, souvent après deux à quatre semaines, le chirurgien peut conseiller de masser la cicatrice. Le massage aide à l'assouplir, à éviter qu'elle n'adhère aux tissus en dessous et à diminuer les démangeaisons. Ne commencez pas avant son accord, car un massage trop précoce peut rouvrir la plaie.",
        ],
        bullets: [
          "Mains propres, avec une crème hydratante neutre et sans parfum.",
          "Pressions fermes avec la pulpe des doigts, en petits cercles, puis en pinçant et roulant doucement la peau.",
          "Quelques minutes, deux à trois fois par jour, pendant plusieurs mois.",
          "Arrêter et demander conseil si la cicatrice saigne, suinte ou devient très douloureuse.",
          "Un kinésithérapeute peut vous montrer les gestes ou proposer des techniques adaptées.",
        ],
      },
      {
        heading: "Protéger la cicatrice du soleil",
        paragraphs: [
          "Une cicatrice récente exposée au soleil peut foncer durablement (hyperpigmentation), surtout sur les peaux mates ou foncées. Cette coloration est parfois difficile à faire disparaître.",
          "La protection est recommandée pendant au moins 12 mois, ou jusqu'à ce que la cicatrice soit devenue blanche.",
        ],
        bullets: [
          "Couvrir la cicatrice par un vêtement ou un pansement opaque en priorité.",
          "Sinon, crème solaire à indice très élevé (SPF 50+), renouvelée toutes les deux heures et après la baignade, une fois la plaie fermée.",
          "Éviter les cabines de bronzage.",
          "Ne pas oublier les cicatrices du visage, plus exposées toute l'année.",
        ],
      },
      {
        heading: "Les plaques et gels de silicone",
        paragraphs: [
          "Les plaques et gels de silicone sont parmi les moyens les plus utilisés pour prévenir ou améliorer une cicatrice épaisse. Ils maintiennent l'hydratation de la cicatrice et pourraient réduire la production excessive de collagène.",
          "Ils s'appliquent seulement sur une peau complètement fermée, sur avis du chirurgien, et demandent de la régularité pour avoir un effet.",
        ],
        bullets: [
          "Gel : en couche fine, une à deux fois par jour, laisser sécher avant de s'habiller.",
          "Plaque : à porter de nombreuses heures par jour (souvent au moins 12 heures), en augmentant progressivement la durée.",
          "Laver la plaque à l'eau et au savon doux, la remplacer quand elle n'adhère plus.",
          "Durée habituelle : au moins deux à trois mois, parfois davantage.",
          "Arrêter en cas de rougeur, d'irritation ou de bouton sous la plaque, et en parler au chirurgien.",
        ],
      },
      {
        heading: "Cicatrices hypertrophiques et chéloïdes",
        paragraphs: [
          "Une cicatrice hypertrophique est épaisse, rouge, en relief, parfois douloureuse ou qui démange, mais elle reste dans les limites de la plaie. Elle apparaît en général dans les premiers mois et s'améliore souvent, au moins en partie, avec le temps et les soins.",
          "Une chéloïde est une cicatrice qui continue de grossir et déborde au-delà de la plaie d'origine, sur la peau saine. Elle ne régresse pas spontanément et a tendance à récidiver après traitement. Elle est plus fréquente sur certaines zones (lobes d'oreilles, haut du thorax, épaules, haut du dos).",
        ],
      },
      {
        heading: "Connaître les facteurs de risque",
        paragraphs: [
          "Certains facteurs augmentent le risque de cicatrice épaisse ou élargie. Les connaître permet d'en parler avec le chirurgien avant l'intervention et d'adapter la prévention.",
        ],
        bullets: [
          "Tabac, qui diminue l'oxygénation des tissus.",
          "Peau foncée ou mate, plus souvent concernée par les chéloïdes et les taches pigmentées.",
          "Antécédent personnel ou familial de chéloïde : à signaler impérativement en consultation.",
          "Tension sur la cicatrice : zones qui bougent beaucoup, peau très tendue, efforts trop précoces.",
          "Infection, hématome ou désunion de la plaie, qui retardent la cicatrisation.",
          "Âge jeune, grossesse, variations hormonales.",
          "Diabète mal équilibré ou certains traitements, comme les corticoïdes au long cours.",
        ],
      },
      {
        heading: "Les traitements possibles en cas de mauvaise cicatrice",
        paragraphs: [
          "Si une cicatrice s'épaissit, s'élargit, reste très rouge ou douloureuse, parlez-en au chirurgien sans attendre la fin de la maturation : un traitement débuté tôt est souvent plus efficace. Le choix dépend du type de cicatrice et de sa localisation.",
          "Une reprise chirurgicale de la cicatrice n'est en général envisagée qu'après sa maturation, soit au moins 12 mois, sauf complication. Elle ne fait pas disparaître la cicatrice : elle cherche à la rendre plus fine ou mieux placée, et la cicatrice peut récidiver, en particulier pour les chéloïdes.",
        ],
        bullets: [
          "Silicone et vêtements compressifs.",
          "Injections de corticoïdes dans la cicatrice, souvent répétées à quelques semaines d'intervalle.",
          "Lasers, pour la rougeur ou le relief, réalisés par un médecin.",
          "Cryothérapie (froid) pour certaines cicatrices épaisses.",
          "Reprise chirurgicale, parfois associée à d'autres traitements, notamment pour les chéloïdes.",
        ],
      },
      {
        heading: "Ce que l'on peut raisonnablement attendre",
        paragraphs: [
          "Une cicatrice ne disparaît jamais complètement. Dans de nombreux cas, elle devient une ligne fine, plate et plus claire que la peau, discrète dans les plis ou sous les sous-vêtements. Chez certaines personnes, elle reste plus visible malgré des soins bien conduits, car la cicatrisation dépend en partie de facteurs que l'on ne contrôle pas.",
          "Demandez au chirurgien, avant l'intervention, où seront placées les cicatrices, quelle sera leur longueur et à quoi elles ressemblent habituellement chez ses patients à un an.",
        ],
      },
    ],
    warningSigns: [
      "Rougeur qui s'étend autour de la cicatrice, chaleur ou gonflement croissant.",
      "Écoulement de pus, odeur désagréable ou fièvre à 38 °C ou plus.",
      "Cicatrice qui s'ouvre, même partiellement.",
      "Peau qui devient sombre, violacée ou noire le long de la cicatrice.",
      "Cicatrice qui grossit et déborde de la plaie d'origine, ou devient très douloureuse.",
      "Saignement qui ne s'arrête pas après compression : appeler le chirurgien, ou le 15 ou le 112 s'il est abondant.",
    ],
    resources: [
      { label: "Société française de chirurgie plastique, reconstructrice et esthétique (SOFCPRE)", url: "https://www.sofcpre.fr" },
      { label: "Société française de dermatologie", url: "https://www.sfdermato.org" },
      { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" },
      { label: "Assurance maladie (ameli)", url: "https://www.ameli.fr" },
    ],
    interventions: [
      "abdominoplasty",
      "breast-augmentation",
      "breast-lift",
      "breast-reduction",
      "facelift",
      "blepharoplasty",
      "otoplasty",
      "gynecomastia",
      "rhinoplasty",
      "liposuction",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  "en-gb": {
    id: "scar-care",
    locale: "en-gb",
    slug: "caring-for-your-scars",
    title: "Caring for your scars",
    summary:
      "How scars heal, early care, massage, sun protection, silicone, hypertrophic and keloid scars: how to look after a scar over 12 to 18 months.",
    answer:
      "Every operation leaves a permanent scar; your surgeon will try to place it where it is less visible, but how it looks in the end also depends on your skin and how it heals. A scar keeps changing for 12 to 18 months: red and sometimes raised at first, it then fades and softens. Keeping wounds clean, not smoking, avoiding the sun, and massage and silicone once your surgeon agrees can all help. If a scar becomes thick, painful or starts to spread, treatments are available: raise it with your surgeon early.",
    steps: [
      {
        heading: "Understand how scars heal",
        paragraphs: [
          "Healing happens in stages. In the first days the wound closes. Over the following weeks the body lays down collagen: the scar often becomes red, firm, sometimes slightly raised and tender, and may itch. This is when it looks its worst, which often causes needless worry.",
          "Then comes the maturation phase, which usually lasts 12 to 18 months, sometimes longer. The scar gradually flattens, softens and fades, ending up paler than the surrounding skin. Its final appearance can only be judged after about a year.",
        ],
        bullets: [
          "0 to 3 weeks: wound closing, stitches or strips in place, wound care.",
          "1 to 3 months: red, firm, sometimes thickened or itchy scar: this is usual.",
          "3 to 12 months: gradual softening and fading.",
          "12 to 18 months: close to its final appearance.",
        ],
      },
      {
        heading: "Care in the first few weeks",
        paragraphs: [
          "Until the wound has fully closed, the aim is to prevent infection and avoid stretching the scar. Follow the dressing instructions from your surgeon or nurse.",
        ],
        bullets: [
          "Wash your hands before any wound care; clean only as instructed.",
          "Do not pick scabs or remove adhesive strips before the planned date.",
          "Avoid baths, swimming, the sea, saunas and steam rooms until fully healed.",
          "Avoid movements and effort that stretch the scar (lifting, raising your arms, bending, depending on the area).",
          "Wear your prescribed garment or support bra, which also reduces tension.",
          "Do not smoke: it slows healing and increases the risk of the wound opening.",
        ],
      },
      {
        heading: "Massage your scar once your surgeon agrees",
        paragraphs: [
          "Once the wound has fully closed and the stitches are out, often after two to four weeks, your surgeon may suggest scar massage. It helps soften the scar, stops it sticking to the tissues underneath and can ease itching. Do not start before they agree, as massaging too early can reopen the wound.",
        ],
        bullets: [
          "Clean hands and a plain, unperfumed moisturiser.",
          "Firm pressure with your fingertips in small circles, then gently pinching and rolling the skin.",
          "A few minutes, two to three times a day, for several months.",
          "Stop and ask for advice if the scar bleeds, weeps or becomes very painful.",
          "A physiotherapist can show you techniques suited to your scar.",
        ],
      },
      {
        heading: "Protect your scar from the sun",
        paragraphs: [
          "A new scar exposed to the sun can darken permanently (hyperpigmentation), especially on olive, brown or black skin. This discolouration can be hard to fade.",
          "Protection is recommended for at least 12 months, or until the scar has turned pale.",
        ],
        bullets: [
          "Cover the scar with clothing or an opaque dressing first and foremost.",
          "Otherwise, a high-protection sunscreen (SPF 50) reapplied every two hours and after swimming, once the wound has closed.",
          "Avoid sunbeds.",
          "Remember facial scars, which are exposed all year round.",
        ],
      },
      {
        heading: "Silicone sheets and gels",
        paragraphs: [
          "Silicone sheets and gels are among the most widely used ways to prevent or improve thick scars. They keep the scar hydrated and may reduce excess collagen production.",
          "Use them only on fully closed skin, on your surgeon's advice, and consistently, as they need regular use to work.",
        ],
        bullets: [
          "Gel: a thin layer once or twice a day, left to dry before dressing.",
          "Sheet: worn for many hours a day (often at least 12), building up the time gradually.",
          "Wash the sheet with water and mild soap and replace it when it no longer sticks.",
          "Usual duration: at least two to three months, sometimes longer.",
          "Stop if you get redness, irritation or spots under the sheet, and tell your surgeon.",
        ],
      },
      {
        heading: "Hypertrophic and keloid scars",
        paragraphs: [
          "A hypertrophic scar is thick, red and raised, sometimes painful or itchy, but stays within the edges of the original wound. It usually appears in the first months and often improves, at least partly, with time and treatment.",
          "A keloid scar keeps growing and spreads beyond the original wound onto healthy skin. It does not go away on its own and tends to come back after treatment. Keloids are more common in certain areas (earlobes, upper chest, shoulders, upper back).",
        ],
      },
      {
        heading: "Know the risk factors",
        paragraphs: [
          "Some factors increase the risk of a thick or stretched scar. Knowing them lets you discuss prevention with your surgeon before the operation.",
        ],
        bullets: [
          "Smoking, which reduces oxygen supply to the tissues.",
          "Brown or black skin, more often affected by keloids and pigment changes.",
          "A personal or family history of keloids: always mention it at your consultation.",
          "Tension on the scar: areas that move a lot, very tight skin, returning to effort too soon.",
          "Infection, haematoma or wound breakdown, which delay healing.",
          "Younger age, pregnancy and hormonal changes.",
          "Poorly controlled diabetes or some medicines, such as long-term steroids.",
        ],
      },
      {
        heading: "Treatment options for a problem scar",
        paragraphs: [
          "If a scar thickens, widens, stays very red or painful, see your surgeon without waiting for it to mature: treatment started early often works better. The choice depends on the type of scar and where it is. Your GP can also refer you to a dermatologist.",
          "Scar revision surgery is usually only considered once the scar has matured, at least 12 months on, unless there is a complication. It does not remove the scar: it aims to make it finer or better placed, and the scar can come back, particularly with keloids.",
        ],
        bullets: [
          "Silicone and pressure garments.",
          "Steroid injections into the scar, often repeated a few weeks apart.",
          "Laser treatment for redness or raised scars, carried out by a doctor.",
          "Cryotherapy (freezing) for some thick scars.",
          "Revision surgery, sometimes combined with other treatments, particularly for keloids.",
        ],
      },
      {
        heading: "What you can reasonably expect",
        paragraphs: [
          "A scar never disappears completely. In many cases it becomes a fine, flat line paler than the surrounding skin, hidden in a natural crease or under underwear. For some people it stays more visible despite careful aftercare, because healing partly depends on factors no one can control.",
          "Before the operation, ask your surgeon where the scars will be, how long they will be and what they typically look like in their patients after a year.",
        ],
      },
    ],
    warningSigns: [
      "Redness spreading around the scar, heat or increasing swelling.",
      "Pus, an unpleasant smell or a temperature of 38°C or above.",
      "A scar that opens, even partly.",
      "Skin along the scar turning dark, purple or black.",
      "A scar that grows beyond the original wound or becomes very painful.",
      "Bleeding that does not stop with pressure: call your surgeon or NHS 111, or 999 if it is heavy.",
    ],
    resources: [
      { label: "NHS – scars and keloids", url: "https://www.nhs.uk" },
      { label: "British Association of Dermatologists", url: "https://www.bad.org.uk" },
      { label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)", url: "https://www.bapras.org.uk" },
      { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" },
    ],
    interventions: [
      "abdominoplasty",
      "breast-augmentation",
      "breast-lift",
      "breast-reduction",
      "facelift",
      "blepharoplasty",
      "otoplasty",
      "gynecomastia",
      "rhinoplasty",
      "liposuction",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
};
