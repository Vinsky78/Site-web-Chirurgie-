import type { Locale } from "@/i18n/routing";
import type { Guide } from "../../types";

/** Image du corps et attentes réalistes : guide pratique (fr, en-gb). Brouillon à relire par le comité médical. */
export const guide: Record<Locale, Guide> = {
  fr: {
    id: "body-image-and-expectations",
    locale: "fr",
    slug: "image-du-corps-et-attentes-realistes",
    title: "Image du corps et attentes réalistes",
    summary:
      "Motivations, réseaux sociaux et filtres, attentes réalistes, dysmorphophobie, moment de vie et adaptation à sa nouvelle image après l'opération.",
    answer:
      "Une chirurgie esthétique peut modifier une partie du corps qui vous gêne, mais elle ne change ni votre vie, ni vos relations, ni la façon dont les autres vous regardent. Elle a le plus de chances de vous satisfaire si vous la souhaitez pour vous-même, avec des attentes précises et réalistes, à un moment de vie stable. Les images retouchées et les filtres des réseaux sociaux faussent souvent la perception de ce qui est possible. Si la préoccupation pour votre apparence occupe beaucoup de place dans vos journées, il peut s'agir d'une dysmorphophobie : dans ce cas, un médecin ou un psychologue est le premier interlocuteur, et un chirurgien peut, et doit, refuser d'opérer.",
    steps: [
      {
        heading: "Clarifier ses motivations",
        paragraphs: [
          "Avant de consulter, il est utile de savoir pourquoi vous envisagez cette intervention. Une motivation personnelle, ancienne et précise (une gêne que vous ressentez depuis longtemps, sur une zone définie) est en général associée à une satisfaction plus fréquente qu'un projet motivé par le regard ou la demande de quelqu'un d'autre.",
          "Prenez le temps d'y réfléchir par écrit. Il n'y a pas de bonne ou de mauvaise réponse, mais certaines réponses invitent à prendre plus de temps.",
        ],
        bullets: [
          "Depuis combien de temps cette zone me gêne-t-elle ?",
          "Le ferais-je si personne ne le remarquait jamais ?",
          "Quelqu'un me pousse-t-il à le faire (partenaire, famille, entourage) ?",
          "Qu'est-ce que j'espère concrètement changer dans ma vie ensuite ?",
          "Ai-je déjà pensé à une autre intervention juste après celle-ci ?",
          "Comment me sentirais-je si le résultat était seulement une amélioration partielle ?",
        ],
      },
      {
        heading: "Réseaux sociaux, filtres et images retouchées",
        paragraphs: [
          "Les photos publiées sur les réseaux sociaux sont souvent retouchées, filtrées, prises sous un angle et une lumière flatteurs, ou issues d'applications qui modifient le visage en temps réel. Se comparer à ces images, ou à sa propre photo filtrée, peut créer des attentes impossibles à atteindre par la chirurgie.",
          "En France, les images commerciales dont le corps a été retouché doivent porter la mention « photographie retouchée ». Les photos avant-après publiées par des praticiens ne donnent qu'une idée partielle et ne reflètent pas ce que vous obtiendrez.",
        ],
        bullets: [
          "Limiter le temps passé sur les comptes qui vous font vous sentir moins bien.",
          "Ne pas apporter en consultation une photo filtrée de vous comme objectif.",
          "Se méfier des contenus d'influenceurs rémunérés ou d'avant-après sans contexte.",
          "Demander au chirurgien des photos de patients à un an, avec leur accord, plutôt que les plus flatteuses.",
        ],
      },
      {
        heading: "Avoir des attentes réalistes",
        paragraphs: [
          "La chirurgie modifie une forme ; elle ne transforme pas votre identité. Le résultat dépend de votre anatomie de départ, de la qualité de votre peau, de votre cicatrisation et d'éléments qu'aucun chirurgien ne maîtrise complètement. Une amélioration est l'objectif raisonnable, pas un idéal.",
          "Un bon signe en consultation : vous pouvez décrire précisément ce qui vous gêne et ce que vous souhaitez, et vous comprenez les cicatrices, les risques et les limites de l'intervention.",
        ],
        bullets: [
          "Toute intervention laisse des cicatrices définitives.",
          "Une asymétrie peut persister : le corps n'est jamais totalement symétrique.",
          "Le résultat définitif demande des mois, parfois plus d'un an.",
          "Le corps continue de vieillir et de changer avec le poids, une grossesse ou le temps.",
          "Une retouche est parfois nécessaire, sans garantie d'amélioration.",
        ],
      },
      {
        heading: "La dysmorphophobie : savoir la reconnaître",
        paragraphs: [
          "La dysmorphophobie, ou trouble dysmorphique corporel, est un trouble psychique dans lequel une personne est préoccupée de façon excessive par un ou plusieurs défauts de son apparence, souvent peu ou pas visibles pour les autres. Elle est plus fréquente chez les personnes qui consultent en chirurgie esthétique que dans la population générale.",
          "Ce trouble se soigne, notamment par des thérapies cognitives et comportementales et parfois un traitement médicamenteux. En revanche, la chirurgie améliore rarement la souffrance : la préoccupation persiste souvent ou se déplace vers une autre zone.",
        ],
        bullets: [
          "Penser à ce défaut une heure ou plus par jour, au point d'être gêné(e) dans sa vie.",
          "Vérifier très souvent dans le miroir, ou au contraire éviter tout miroir et toute photo.",
          "Cacher la zone avec des vêtements, du maquillage, une posture.",
          "Demander souvent à l'entourage d'être rassuré(e), sans que cela apaise.",
          "Éviter des sorties, le travail ou les relations à cause de son apparence.",
          "Avoir déjà eu des interventions sans en être satisfait(e).",
        ],
      },
      {
        heading: "Qui consulter, et pourquoi un chirurgien peut refuser",
        paragraphs: [
          "Si vous vous reconnaissez dans plusieurs de ces signes, parlez-en d'abord à votre médecin traitant, qui peut vous orienter vers un psychiatre ou un psychologue. Le dispositif Mon soutien psy permet un remboursement de séances chez un psychologue partenaire. Ce n'est pas un jugement : c'est une façon de prendre soin de vous.",
          "Lors de la consultation, le chirurgien évalue aussi votre motivation et votre état psychologique. S'il pense que l'intervention ne vous apportera pas de bénéfice ou risque d'aggraver votre souffrance, il peut et doit refuser d'opérer, ou vous proposer d'abord un avis spécialisé. Un refus est un acte de protection, pas un rejet.",
          "Si vous avez des idées suicidaires ou si vous êtes inquiet(e) pour un proche, appelez le 3114, numéro national de prévention du suicide, gratuit et joignable à toute heure. En cas de danger immédiat, appelez le 15 ou le 112.",
        ],
      },
      {
        heading: "Choisir le bon moment de vie",
        paragraphs: [
          "Une période difficile peut donner envie de changer quelque chose de visible. Mais pendant une rupture, un deuil, une perte d'emploi, une dépression ou juste après un accouchement, les décisions importantes sont plus difficiles à prendre sereinement et la convalescence plus dure à vivre.",
          "Si votre projet est né récemment, dans un contexte de ce type, laissez-vous du temps. Un projet qui tient encore plusieurs mois plus tard, dans une période plus calme, repose en général sur des bases plus solides.",
        ],
        bullets: [
          "Le projet a-t-il commencé après un événement marquant récent ?",
          "Mon poids est-il stable ? Ai-je un projet de grossesse ?",
          "Ai-je le temps et le soutien nécessaires pour une convalescence de plusieurs semaines ?",
        ],
      },
      {
        heading: "Le rôle de l'entourage",
        paragraphs: [
          "Le soutien de vos proches compte, surtout pendant la convalescence. En parler à une personne de confiance peut aussi aider à clarifier votre projet. En revanche, la décision doit rester la vôtre : ni une pression pour opérer, ni une opposition systématique ne devraient la dicter.",
          "Prévoyez que certaines personnes réagissent peu, mal, ou pas du tout comme vous l'imaginiez. Vous êtes libre de choisir à qui vous en parlez, et ce que vous en dites.",
        ],
      },
      {
        heading: "Après l'opération : s'adapter à sa nouvelle image",
        paragraphs: [
          "Les premières semaines, le gonflement, les ecchymoses et les cicatrices rendent le résultat difficile à juger. Il est fréquent de ressentir de la fatigue, du doute, voire de la tristesse ou des regrets passagers : c'est souvent lié à la convalescence et s'atténue avec le temps.",
          "S'approprier une nouvelle image demande aussi du temps, même quand le résultat correspond à ce que vous souhaitiez. Si la tristesse persiste au-delà de quelques semaines, si vous dormez mal ou n'arrivez plus à reprendre vos activités, parlez-en à votre chirurgien ou à votre médecin traitant.",
        ],
        bullets: [
          "Éviter de juger le résultat avant plusieurs mois.",
          "Se comparer à ses propres photos avant l'intervention, prises dans les mêmes conditions, plutôt qu'à d'autres personnes.",
          "Garder les consultations de suivi, même si tout va bien.",
          "Ne pas planifier une nouvelle intervention dans la foulée.",
        ],
      },
    ],
    warningSigns: [
      "Penser à son apparence une heure ou plus par jour, au point d'en souffrir.",
      "Éviter le travail, les sorties ou les relations à cause d'un défaut que les autres voient peu.",
      "Avoir eu plusieurs interventions sans jamais être satisfait(e).",
      "Envisager l'opération surtout pour plaire à quelqu'un ou sauver une relation.",
      "Un projet né juste après une rupture, un deuil ou un événement très difficile.",
      "Une tristesse, une anxiété ou des troubles du sommeil qui durent après l'opération.",
      "Des idées suicidaires : appeler le 3114, ou le 15 ou le 112 en cas de danger immédiat.",
    ],
    resources: [
      { label: "3114 – numéro national de prévention du suicide", url: "https://3114.fr" },
      { label: "Assurance maladie (ameli) – Mon soutien psy", url: "https://www.ameli.fr" },
      { label: "Psycom – information sur la santé mentale", url: "https://www.psycom.org" },
      { label: "Santé publique France", url: "https://www.santepubliquefrance.fr" },
      { label: "Haute Autorité de santé (HAS)", url: "https://www.has-sante.fr" },
      { label: "Société française de chirurgie plastique, reconstructrice et esthétique (SOFCPRE)", url: "https://www.sofcpre.fr" },
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
      "buttock-augmentation",
      "labiaplasty",
      "genioplasty",
      "brow-lift",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  "en-gb": {
    id: "body-image-and-expectations",
    locale: "en-gb",
    slug: "body-image-and-realistic-expectations",
    title: "Body image and realistic expectations",
    summary:
      "Your reasons, social media and filters, realistic expectations, body dysmorphic disorder, timing, and adjusting to how you look after surgery.",
    answer:
      "Cosmetic surgery can change a part of your body that bothers you, but it will not change your life, your relationships or how other people see you. You are more likely to be satisfied if you want it for yourself, with clear and realistic expectations, at a settled time in your life. Edited images and social media filters often distort what is possible. If worrying about your appearance takes up a lot of your day, it may be body dysmorphic disorder (BDD): your GP is the right first step, and a surgeon can, and should, decline to operate.",
    steps: [
      {
        heading: "Be clear about your reasons",
        paragraphs: [
          "Before your consultation, it helps to know why you are considering surgery. A personal, long-standing and specific reason (something that has bothered you for a long time, in a clearly defined area) tends to be linked with greater satisfaction than a plan driven by someone else's opinion or wishes.",
          "Take time to write your thoughts down. There are no right or wrong answers, but some answers suggest giving yourself more time.",
        ],
        bullets: [
          "How long has this area bothered me?",
          "Would I still do it if nobody ever noticed?",
          "Is anyone pushing me towards it (partner, family, friends)?",
          "What exactly do I hope will change in my life afterwards?",
          "Am I already thinking about another procedure straight after this one?",
          "How would I feel if the result were only a partial improvement?",
        ],
      },
      {
        heading: "Social media, filters and edited images",
        paragraphs: [
          "Photos on social media are often edited, filtered, taken from flattering angles and lighting, or created with apps that change faces in real time. Comparing yourself with these images, or with a filtered photo of yourself, can create expectations surgery cannot meet.",
          "UK advertising rules ban cosmetic surgery adverts aimed at under-18s and restrict misleading filters in beauty advertising. Before-and-after photos posted by clinics give only part of the picture and do not show what you will get.",
        ],
        bullets: [
          "Limit time on accounts that leave you feeling worse about yourself.",
          "Do not bring a filtered photo of yourself to your consultation as a goal.",
          "Be wary of paid influencer content and before-and-after photos with no context.",
          "Ask your surgeon for photos of patients at one year, shared with consent, not just the most flattering ones.",
        ],
      },
      {
        heading: "Keep your expectations realistic",
        paragraphs: [
          "Surgery changes a shape; it does not change who you are. The outcome depends on your starting anatomy, your skin quality, how you heal and factors no surgeon fully controls. Improvement is a reasonable aim, not an ideal.",
          "A good sign at consultation: you can describe precisely what bothers you and what you would like, and you understand the scars, risks and limits of the procedure.",
        ],
        bullets: [
          "Every operation leaves permanent scars.",
          "Some asymmetry may remain: no body is completely symmetrical.",
          "The final result takes months, sometimes more than a year.",
          "Your body will keep ageing and changing with weight, pregnancy and time.",
          "Further surgery is sometimes needed, with no certainty of a better result.",
        ],
      },
      {
        heading: "Recognising body dysmorphic disorder",
        paragraphs: [
          "Body dysmorphic disorder (BDD) is a mental health condition in which a person spends a lot of time worrying about flaws in their appearance that are often unnoticeable, or barely noticeable, to others. It is more common among people seeking cosmetic surgery than in the general population.",
          "BDD can be treated, mainly with cognitive behavioural therapy and sometimes medication, as recommended by NICE. Surgery, on the other hand, rarely relieves the distress: the worry often stays or moves to another part of the body.",
        ],
        bullets: [
          "Thinking about the flaw for an hour or more a day, to the point that it affects your life.",
          "Checking mirrors very often, or avoiding mirrors and photos altogether.",
          "Hiding the area with clothes, make-up or posture.",
          "Often asking others for reassurance, without it helping.",
          "Avoiding going out, work or relationships because of your appearance.",
          "Having had previous procedures without feeling satisfied.",
        ],
      },
      {
        heading: "Who to talk to, and why a surgeon may say no",
        paragraphs: [
          "If several of these signs sound familiar, talk to your GP first. You can also refer yourself to NHS Talking Therapies in England for psychological support. This is not a judgement: it is a way of looking after yourself.",
          "GMC guidance asks doctors offering cosmetic interventions to consider your psychological needs and reasons for wanting treatment. If a surgeon believes surgery will not help you or may make your distress worse, they can and should decline, or suggest a specialist opinion first. Being turned down is meant to protect you, not to reject you.",
          "If you are having thoughts of suicide or are worried about someone, you can call Samaritans free on 116 123, at any time. If you or someone else is in immediate danger, call 999; for urgent mental health help you can also call NHS 111.",
        ],
      },
      {
        heading: "Choosing the right time in your life",
        paragraphs: [
          "A difficult period can make you want to change something visible. But during a break-up, a bereavement, a job loss, depression or soon after having a baby, big decisions are harder to make calmly and recovery is harder to cope with.",
          "If your plan started recently in circumstances like these, give yourself time. A wish that is still there several months later, in a calmer period, usually rests on firmer ground.",
        ],
        bullets: [
          "Did the idea start after a recent major life event?",
          "Is my weight stable? Am I planning a pregnancy?",
          "Do I have the time and support for a recovery lasting several weeks?",
        ],
      },
      {
        heading: "The role of family and friends",
        paragraphs: [
          "Support from people close to you matters, especially during recovery, and talking to someone you trust can help clarify your plans. But the decision should be yours: neither pressure to have surgery nor automatic opposition should make it for you.",
          "Be prepared for some people to react little, badly or differently from how you imagined. You are free to choose who you tell and what you say.",
        ],
      },
      {
        heading: "After surgery: adjusting to how you look",
        paragraphs: [
          "In the first weeks, swelling, bruising and scars make the result hard to judge. Tiredness, doubt, low mood or short-lived regret are common: they are often part of recovery and usually ease with time.",
          "Getting used to a new appearance takes time too, even when the result is what you wanted. If low mood lasts more than a few weeks, if you are sleeping badly or cannot get back to your usual activities, talk to your surgeon or GP.",
        ],
        bullets: [
          "Avoid judging the result for several months.",
          "Compare with your own pre-operative photos taken in the same conditions, not with other people.",
          "Keep your follow-up appointments, even if all is well.",
          "Do not plan another procedure straight away.",
        ],
      },
    ],
    warningSigns: [
      "Thinking about your appearance for an hour or more a day, to the point of distress.",
      "Avoiding work, social life or relationships because of a flaw others barely notice.",
      "Having had several procedures without ever feeling satisfied.",
      "Considering surgery mainly to please someone or to save a relationship.",
      "A plan that started just after a break-up, a bereavement or another very difficult event.",
      "Low mood, anxiety or poor sleep that lasts after surgery.",
      "Thoughts of suicide: call Samaritans on 116 123, or 999 if you are in immediate danger.",
    ],
    resources: [
      { label: "NHS – body dysmorphic disorder (BDD)", url: "https://www.nhs.uk" },
      { label: "Samaritans – 116 123", url: "https://www.samaritans.org" },
      { label: "NICE – obsessive-compulsive disorder and body dysmorphic disorder", url: "https://www.nice.org.uk" },
      { label: "Mind", url: "https://www.mind.org.uk" },
      { label: "General Medical Council (GMC) – guidance on cosmetic interventions", url: "https://www.gmc-uk.org" },
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
      "buttock-augmentation",
      "labiaplasty",
      "genioplasty",
      "brow-lift",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
};
