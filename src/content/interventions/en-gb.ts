import type { Intervention } from "../types";

/**
 * United Kingdom content (en-gb). Localised, not translated: UK regulation
 * (GMC, CQC, CAP Code) and NHS context differ from France.
 * Status "draft" until reviewed by a qualified surgeon.
 */
export const interventionsEnGb: Intervention[] = [
  {
    id: "rhinoplasty",
    locale: "en-gb",
    slug: "rhinoplasty",
    category: "face",
    title: "Rhinoplasty (nose reshaping)",
    summary:
      "Rhinoplasty changes the shape of the nose. What the operation involves, its risks, recovery and the questions to ask your surgeon.",
    description: [
      "Rhinoplasty is surgery to change the shape or proportions of the nose: a bump, the tip, its width, length or angle.",
      "When it also corrects a breathing problem, such as a deviated septum, it is called septorhinoplasty. Cosmetic rhinoplasty is not usually available on the NHS.",
      "The final result takes many months to appear, because swelling at the tip settles slowly.",
    ],
    indications: [
      "A persistent concern about the shape of your nose that you have had for some time.",
      "Injury or congenital differences.",
      "Associated breathing problems, to be assessed by the surgeon.",
    ],
    contraindications: [
      "Facial growth not yet complete.",
      "Unrealistic expectations or pressure from someone else.",
      "Excessive worry about a minor or invisible difference (discuss this with your surgeon).",
      "Some bleeding disorders or uncontrolled medical conditions.",
    ],
    risks: [
      { name: "Swelling and bruising", detail: "Common and expected for the first weeks, especially around the eyes." },
      { name: "Bleeding", detail: "Uncommon; occasionally needs further treatment." },
      { name: "Infection", detail: "Rare; usually treated with antibiotics." },
      { name: "Breathing difficulty", detail: "May develop or persist and require treatment or further surgery." },
      {
        name: "Unsatisfactory result or asymmetry",
        detail: "Some people need revision surgery, usually not before at least a year of healing.",
      },
      { name: "Altered sensation", detail: "Numbness of the nasal tip, usually temporary." },
      { name: "Anaesthetic risks", detail: "Assessed at your pre-operative anaesthetic review." },
    ],
    procedure: {
      anaesthesia: "Usually general anaesthetic.",
      duration: "Around 1 to 3 hours depending on complexity.",
      hospitalStay: "Day case or one night in hospital.",
    },
    recovery: [
      "A splint on the nose for about a week.",
      "Most people return to desk work after 10 to 14 days.",
      "Avoid contact sport and glasses resting on the nose for several weeks, as advised by your surgeon.",
      "The result settles between 6 and 12 months.",
    ],
    alternatives: [
      "Non-surgical rhinoplasty with dermal filler: can smooth some irregularities but cannot make the nose smaller; temporary, with its own risks including rare but serious vascular complications.",
      "Doing nothing is a legitimate choice, worth revisiting after time to reflect.",
    ],
    faq: [
      {
        question: "How long should I wait between consultation and surgery?",
        answer:
          "Professional standards in the UK recommend a cooling-off period of at least two weeks between your consultation and agreeing to surgery, so you have time to reflect.",
      },
      {
        question: "Who should perform my rhinoplasty?",
        answer:
          "A surgeon on the GMC Specialist Register in plastic surgery or ENT, working in a hospital registered with the Care Quality Commission (or the equivalent regulator in Scotland, Wales or Northern Ireland).",
      },
      {
        question: "Can I see the result in advance?",
        answer: "Computer simulations can help explain what you want, but they are never a guarantee of the outcome.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "abdominoplasty",
    locale: "en-gb",
    slug: "tummy-tuck",
    category: "body",
    title: "Tummy tuck (abdominoplasty)",
    summary:
      "A tummy tuck removes excess skin from the abdomen and can repair separated muscles. Who it suits, its risks, scarring and recovery.",
    description: [
      "A tummy tuck removes excess skin and fat from the lower abdomen and can tighten separated abdominal muscles (diastasis), which is common after pregnancy.",
      "It leaves a horizontal scar above the pubic area, usually hidden by underwear, and often a scar around the belly button.",
      "It is not a weight-loss treatment. It should be considered at a stable weight and when you no longer plan a pregnancy.",
      "Tummy tucks are rarely available on the NHS, and only where strict local criteria are met.",
    ],
    indications: [
      "Excess lower abdominal skin after pregnancy or major weight loss.",
      "Separated abdominal muscles.",
      "Stable weight for several months.",
    ],
    contraindications: [
      "Smoking: it greatly increases the risk of wound-healing problems. You will be asked to stop before and after surgery.",
      "Planned pregnancy in the near future.",
      "Ongoing weight loss.",
      "History of blood clots that has not been assessed.",
    ],
    risks: [
      { name: "Seroma", detail: "Fluid collecting under the skin, fairly common; may need draining." },
      { name: "Wound-healing problems", detail: "More frequent in smokers, people with diabetes or a higher BMI." },
      {
        name: "Blood clots (DVT and pulmonary embolism)",
        detail: "Rare but serious; reduced by early walking, compression stockings and sometimes blood-thinning injections.",
      },
      { name: "Bleeding and infection", detail: "Uncommon; may require further surgery." },
      { name: "Scarring", detail: "Matures over 12 to 18 months and may widen, thicken or stay visible." },
      { name: "Numbness", detail: "Of the lower abdomen, often partial and long-lasting." },
      { name: "Anaesthetic risks", detail: "Assessed at your pre-operative anaesthetic review." },
    ],
    procedure: {
      anaesthesia: "General anaesthetic.",
      duration: "Around 2 to 4 hours.",
      hospitalStay: "Usually one to three nights.",
    },
    recovery: [
      "A support garment for several weeks.",
      "Pain and walking slightly bent forward for the first days.",
      "Two to four weeks off work depending on your job.",
      "Gradual return to exercise and heavy lifting after 6 to 8 weeks, as advised by your surgeon.",
    ],
    alternatives: [
      "Mini tummy tuck when the excess is limited to below the belly button.",
      "Specialist physiotherapy for mild muscle separation.",
      "Liposuction alone, only if the skin has good elasticity.",
    ],
    faq: [
      {
        question: "Do I need to stop smoking?",
        answer:
          "Yes. Smoking is a major risk factor for complications. Surgeons usually ask you to stop completely for several weeks before and after surgery.",
      },
      {
        question: "Can I get pregnant after a tummy tuck?",
        answer: "Yes, but a later pregnancy may change the result. It is usually better to wait until your family is complete.",
      },
      {
        question: "Is there a cooling-off period?",
        answer:
          "UK professional standards recommend at least two weeks between consultation and agreeing to surgery.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "breast-augmentation",
    locale: "en-gb",
    slug: "breast-augmentation",
    category: "breast",
    title: "Breast augmentation",
    summary:
      "Breast augmentation increases breast size with implants or fat transfer. Implant types, risks and long-term follow-up.",
    description: [
      "Breast augmentation increases the size or changes the shape of the breasts, most often with implants, sometimes with fat transfer.",
      "Implants do not last a lifetime: you should expect regular check-ups and possibly further surgery during your life.",
      "Your surgeon should give you written information about your implant and record it on the Breast and Cosmetic Implant Registry, which tracks implants in the UK.",
    ],
    indications: [
      "Breasts you feel are too small.",
      "Loss of volume after pregnancy, breastfeeding or weight loss.",
      "Breast asymmetry or congenital differences.",
    ],
    contraindications: [
      "Under 18 for cosmetic reasons.",
      "Current pregnancy or breastfeeding.",
      "An unexplained breast lump: imaging may be needed first.",
      "Unrealistic expectations or pressure from someone else.",
    ],
    risks: [
      {
        name: "Capsular contracture",
        detail: "Hardening of the scar tissue around the implant; can cause pain, change of shape and further surgery.",
      },
      { name: "Implant rupture or wear", detail: "Risk increases over time; the implant then needs replacing." },
      {
        name: "Breast implant-associated anaplastic large cell lymphoma (BIA-ALCL)",
        detail: "A rare cancer of the immune system, mostly linked to textured implants. Report any late swelling of a breast.",
      },
      { name: "Bleeding and infection", detail: "Uncommon; may require temporary removal of the implant." },
      { name: "Change in sensation", detail: "Of the nipples or skin, sometimes permanent." },
      { name: "Cosmetic issues", detail: "Asymmetry, implant movement, visibility or rippling." },
      {
        name: "Systemic symptoms (“breast implant illness”)",
        detail: "Fatigue and joint pain reported by some people; a causal link remains debated.",
      },
      { name: "Anaesthetic risks", detail: "Assessed at your pre-operative anaesthetic review." },
    ],
    procedure: {
      anaesthesia: "General anaesthetic.",
      duration: "Around 1 to 2 hours.",
      hospitalStay: "Day case or one night in hospital.",
    },
    recovery: [
      "A supportive bra day and night for several weeks.",
      "Muscle pain for the first days, especially if the implant sits under the muscle.",
      "About one week off work depending on your job.",
      "Upper-body exercise from around six weeks, as advised by your surgeon.",
      "Regular check-ups for as long as you have implants.",
    ],
    alternatives: [
      "Fat transfer to the breasts: a more modest increase, without an implant, if you have enough fat to harvest.",
      "Doing nothing is a legitimate choice, worth revisiting after time to reflect.",
    ],
    faq: [
      {
        question: "Will my implants need replacing?",
        answer:
          "They are not permanent. Replacement is considered if a complication occurs or the implant wears, not on a fixed schedule.",
      },
      {
        question: "Can I breastfeed with implants?",
        answer: "Most people can, but some incision sites may affect it. Discuss this with your surgeon if you plan a pregnancy.",
      },
      {
        question: "Is there a cooling-off period?",
        answer:
          "UK professional standards recommend at least two weeks between consultation and agreeing to surgery.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "blepharoplasty",
    locale: "en-gb",
    slug: "eyelid-surgery",
    category: "face",
    title: "Eyelid surgery (blepharoplasty)",
    summary: "Eyelid surgery removes excess skin or fat from the eyelids. Who it suits, its risks, recovery and alternatives.",
    description: [
      "Blepharoplasty removes excess skin, and sometimes muscle or fat, from the upper eyelids, lower eyelids or both.",
      "Scars are placed in the natural crease of the upper lid and just below the lashes on the lower lid, or inside the lid. They are usually discreet once mature.",
      "When excess upper-lid skin blocks part of your vision, the operation can have a functional purpose, assessed through an eye examination.",
    ],
    indications: [
      "Excess skin of the upper eyelid, with or without an effect on vision.",
      "Bags or excess skin of the lower eyelid.",
      "Drooping lids that may actually be ptosis (a muscle problem), which your surgeon will assess.",
    ],
    contraindications: [
      "Significant dry eye or untreated eye disease.",
      "Some thyroid conditions that are not controlled.",
      "Uncontrolled high blood pressure or bleeding disorders.",
      "Unrealistic expectations.",
    ],
    risks: [
      { name: "Swelling and bruising", detail: "Common and expected for the first 10 to 15 days." },
      { name: "Dry, irritated eyes", detail: "Common for a short time; occasionally lasting and needing treatment." },
      { name: "Asymmetry or an unsatisfactory result", detail: "A revision is sometimes needed." },
      { name: "Difficulty closing the eye fully", detail: "Usually temporary; rarely long-lasting." },
      { name: "Ectropion (lower lid pulling away from the eye)", detail: "Uncommon; may need further surgery." },
      {
        name: "Bleeding and infection",
        detail: "Uncommon. Bleeding behind the eye is very rare but an emergency that can threaten sight.",
      },
      { name: "Anaesthetic risks", detail: "Assessed at your pre-operative anaesthetic review." },
    ],
    procedure: {
      anaesthesia: "Local anaesthetic with sedation, or general anaesthetic.",
      duration: "Around 1 to 2 hours.",
      hospitalStay: "Usually a day case.",
    },
    recovery: [
      "Cold compresses for the first days; stitches usually removed after 5 to 7 days.",
      "Sunglasses are advised; avoid contact lenses for about 2 weeks.",
      "Desk work often resumes after 7 to 10 days.",
      "Sport and heavy exertion resume after 3 to 4 weeks, as advised.",
    ],
    alternatives: [
      "Brow lift when the excess is due to the position of the brow.",
      "Non-surgical treatments for mild irregularities, with limited and temporary effects.",
      "Doing nothing: a legitimate option, worth revisiting after a period of reflection.",
    ],
    faq: [
      {
        question: "Can the NHS fund it?",
        answer: "Only in limited cases where the upper lids significantly affect vision and strict local criteria are met. The cosmetic part is not funded.",
      },
      {
        question: "Is there a cooling-off period?",
        answer: "UK professional standards recommend at least two weeks between consultation and agreeing to surgery.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-08",
  },
  {
    id: "facelift",
    locale: "en-gb",
    slug: "facelift",
    category: "face",
    title: "Facelift",
    summary: "A facelift tightens the skin and tissues of the face and neck. Who it suits, its risks, scarring, recovery and alternatives.",
    description: [
      "A facelift (rhytidectomy) tightens the deeper tissues, redrapes the skin and removes excess skin from the lower face and neck.",
      "Scars are hidden in the creases in front of and behind the ear and in the hairline.",
      "It does not change skin quality or fine lines, and it does not stop ageing. The result continues to evolve over time.",
    ],
    indications: [
      "Sagging of the lower face and neck.",
      "Excess skin of the neck.",
      "A considered, long-standing wish and general health suitable for surgery.",
    ],
    contraindications: [
      "Smoking: it greatly increases the risk of skin loss.",
      "Uncontrolled high blood pressure and unsuitable blood-thinning treatment.",
      "Chronic conditions that are not controlled, bleeding disorders.",
      "Unrealistic expectations of the result.",
    ],
    risks: [
      {
        name: "Haematoma",
        detail: "The most common complication, more often with high blood pressure; may need urgent further surgery.",
      },
      { name: "Facial nerve injury", detail: "Usually temporary; rarely long-lasting." },
      { name: "Skin loss and delayed healing", detail: "More common in smokers." },
      {
        name: "Visible, widened or thickened scars",
        detail: "Mature over 12 to 18 months; a revision is sometimes offered.",
      },
      { name: "Numbness and hair loss near the scars", detail: "Often temporary." },
      { name: "Asymmetry and infection", detail: "Uncommon." },
      { name: "Anaesthetic risks", detail: "Assessed at your pre-operative anaesthetic review." },
    ],
    procedure: {
      anaesthesia: "General anaesthetic, or local with sedation depending on the extent.",
      duration: "Around 3 to 5 hours.",
      hospitalStay: "Day case or one to two nights.",
    },
    recovery: [
      "A compressive dressing for the first days, then a head band.",
      "Swelling and bruising for 2 to 3 weeks.",
      "Return to social life often after 3 to 4 weeks.",
      "Avoid sun and strenuous activity for several weeks; the result settles over several months.",
    ],
    alternatives: [
      "A limited lift (mini-facelift) when sagging is moderate.",
      "Non-surgical treatments (injections, lasers, ultrasound): more limited and temporary effects, with their own risks.",
      "Doing nothing: a legitimate option, worth revisiting after a period of reflection.",
    ],
    faq: [
      {
        question: "What age is right for a facelift?",
        answer: "There is no fixed age: it depends on tissue laxity and general health, assessed by your surgeon.",
      },
      {
        question: "Do I need to stop smoking?",
        answer: "Yes. Surgeons usually ask you to stop completely for several weeks before and after surgery.",
      },
      {
        question: "Is there a cooling-off period?",
        answer: "UK professional standards recommend at least two weeks between consultation and agreeing to surgery.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-08",
  },
  {
    id: "otoplasty",
    locale: "en-gb",
    slug: "ear-pinning",
    category: "face",
    title: "Ear pinning (otoplasty)",
    summary: "Ear pinning brings prominent ears closer to the head and reshapes the ear. Who it suits, its risks, recovery and alternatives.",
    description: [
      "Otoplasty corrects prominent or unusually shaped ears by reshaping the cartilage and bringing the ear closer to the head.",
      "The scar sits in the crease behind the ear and is usually discreet.",
      "In children, surgery is considered once the ear is close to adult size, with a parent's consent. This site's request form is for adults only.",
    ],
    indications: [
      "Prominent or uneven ears that cause distress.",
      "A difference in ear shape.",
      "After-effects of injury, to be assessed by your surgeon.",
    ],
    contraindications: [
      "Local skin or ear infection.",
      "Known tendency to keloid scarring.",
      "Bleeding disorders that have not been assessed.",
      "Unrealistic expectations.",
    ],
    risks: [
      { name: "Haematoma", detail: "Uncommon; may need further surgery." },
      { name: "Infection of the cartilage or skin", detail: "Uncommon; treated with antibiotics, sometimes surgery." },
      { name: "Partial recurrence", detail: "The ears may move out again to some extent." },
      { name: "Over-correction or an unnatural look", detail: "A revision is sometimes needed." },
      { name: "Asymmetry", detail: "Slight asymmetry is common and natural." },
      { name: "Thickened scar, altered sensation", detail: "Usually temporary." },
      { name: "Anaesthetic risks", detail: "Assessed at your pre-operative anaesthetic review." },
    ],
    procedure: {
      anaesthesia: "Local or general anaesthetic depending on age and the case.",
      duration: "Around 1 to 2 hours.",
      hospitalStay: "Day case.",
    },
    recovery: [
      "A compressive head dressing for a few days.",
      "A head band worn day and night, then at night only for several weeks.",
      "Normal activities resume after about a week.",
      "Avoid contact sports for about a month.",
    ],
    alternatives: [
      "Ear moulding in newborns (non-surgical, only in the first weeks of life).",
      "Hairstyle or accessories, without changing the ear.",
      "Doing nothing: a legitimate option.",
    ],
    faq: [
      {
        question: "Can the NHS fund it?",
        answer: "Sometimes, mainly for children and depending on local criteria. Ask before any surgery.",
      },
      {
        question: "Is there a cooling-off period?",
        answer: "UK professional standards recommend at least two weeks between consultation and agreeing to surgery.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-08",
  },
  {
    id: "liposuction",
    locale: "en-gb",
    slug: "liposuction",
    category: "body",
    title: "Liposuction",
    summary: "Liposuction removes localised pockets of fat. It is not a treatment for obesity. Who it suits, its risks and recovery.",
    description: [
      "Liposuction removes localised pockets of fat (tummy, hips, thighs, chin…) through small incisions using thin cannulas.",
      "It is not a weight-loss method or a treatment for obesity: it changes contour, not body mass.",
      "The result depends on skin elasticity. Loose skin may need another technique, alone or combined.",
    ],
    indications: [
      "Localised fat that does not respond to diet and exercise.",
      "Stable weight and skin with good elasticity.",
      "A considered wish and general health suitable for surgery.",
    ],
    contraindications: [
      "Obesity or an unstable weight: surgery is not a treatment.",
      "Very loose skin, to be assessed by your surgeon.",
      "Heart disease, bleeding disorders or other conditions that are not controlled.",
      "Pregnancy or a planned pregnancy soon, for the tummy area.",
    ],
    risks: [
      {
        name: "Contour irregularities and rippling",
        detail: "Possible; a revision is sometimes discussed after several months.",
      },
      { name: "Swelling, bruising and pain", detail: "Expected for several weeks." },
      {
        name: "Fluid collection (seroma), haematoma, infection",
        detail: "Uncommon; may need draining or further surgery.",
      },
      { name: "Altered sensation, pigmentation marks", detail: "Often temporary, sometimes lasting." },
      { name: "Blood clots and pulmonary embolism", detail: "Rare but serious; preventive measures are taken." },
      {
        name: "Serious complications from large volumes",
        detail: "Rare: the volume removed is limited for safety (fluid imbalance, fat embolism, organ injury).",
      },
      { name: "Anaesthetic risks", detail: "Assessed at your pre-operative anaesthetic review." },
    ],
    procedure: {
      anaesthesia: "Local or general anaesthetic depending on extent.",
      duration: "Around 1 to 3 hours depending on areas.",
      hospitalStay: "Day case or one night.",
    },
    recovery: [
      "A compression garment worn for several weeks (often 4 to 6).",
      "Desk work resumes after a few days to 2 weeks.",
      "Exercise resumes gradually after about 4 weeks.",
      "Swelling settles over 3 months; the result is judged at about 6 months.",
    ],
    alternatives: [
      "Lifestyle changes: diet and exercise with appropriate support.",
      "Non-surgical fat treatments (cooling, ultrasound): more modest effects with their own limits.",
      "Doing nothing: a legitimate option.",
    ],
    faq: [
      {
        question: "Will liposuction make me lose weight?",
        answer: "No. It reshapes an area, and the volume removed is limited for safety.",
      },
      {
        question: "Can the fat come back?",
        answer: "Fat cells that are removed do not return, but remaining fat can increase if you gain weight.",
      },
      {
        question: "Is there a cooling-off period?",
        answer: "UK professional standards recommend at least two weeks between consultation and agreeing to surgery.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-08",
  },
  {
    id: "breast-reduction",
    locale: "en-gb",
    slug: "breast-reduction",
    category: "breast",
    title: "Breast reduction",
    summary: "Breast reduction reduces breast volume and lifts the breasts. Who it suits, scars, risks, breastfeeding and recovery.",
    description: [
      "Breast reduction removes some of the breast tissue and skin to reduce volume, lifting the nipple.",
      "Scars go around the areola, down vertically and, depending on the technique, along the crease under the breast.",
      "It is often offered for physical discomfort: back and neck pain, soreness under the breasts and limits on activity.",
    ],
    indications: [
      "Large breasts causing pain or lasting discomfort.",
      "Breast growth complete and a stable weight.",
      "A considered decision after your surgeon's assessment.",
    ],
    contraindications: [
      "Smoking: higher risk of healing problems.",
      "An unstable weight.",
      "Pregnancy or breastfeeding, or planned breastfeeding soon.",
      "Conditions that are not controlled; breast history to be assessed (imaging beforehand).",
    ],
    risks: [
      { name: "Visible, thickened or widened scars", detail: "Mature over 12 to 18 months." },
      { name: "Change in nipple sensation", detail: "Temporary or lasting, sometimes complete loss of sensation." },
      { name: "Difficulty or inability to breastfeed", detail: "Breastfeeding may be reduced or not possible." },
      { name: "Delayed wound healing", detail: "Especially at the junction of scars, more common in smokers." },
      { name: "Poor blood supply to the nipple or areola", detail: "Rare; can lead to tissue loss." },
      { name: "Asymmetry, haematoma, infection", detail: "Uncommon; further surgery is sometimes needed." },
      { name: "Anaesthetic risks", detail: "Assessed at your pre-operative anaesthetic review." },
    ],
    procedure: { anaesthesia: "General anaesthetic.", duration: "Around 2 to 4 hours.", hospitalStay: "One to two nights." },
    recovery: [
      "A support bra worn day and night for several weeks.",
      "Around 2 to 3 weeks off work.",
      "Avoid lifting and exercise for about 6 weeks.",
      "The result settles over several months.",
    ],
    alternatives: [
      "Supervised weight loss when volume is partly related to weight.",
      "A properly fitted bra, physiotherapy and pain management.",
      "Liposuction alone, in a few cases.",
      "Doing nothing: a legitimate option.",
    ],
    faq: [
      {
        question: "Can the NHS fund it?",
        answer: "Sometimes, in line with strict local criteria that look at symptoms, size and body weight.",
      },
      {
        question: "Will I be able to breastfeed?",
        answer: "It may be possible in some cases but is not guaranteed. Discuss it with your surgeon before deciding.",
      },
      {
        question: "Is there a cooling-off period?",
        answer: "UK professional standards recommend at least two weeks between consultation and agreeing to surgery.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-08",
  },
  {
    id: "mastopexy",
    locale: "en-gb",
    slug: "breast-lift",
    category: "breast",
    title: "Breast lift (mastopexy)",
    summary: "A breast lift raises sagging breasts by removing excess skin, with little change in volume. Who it suits, its risks and recovery.",
    description: [
      "Mastopexy lifts the breast and nipple by removing excess skin and reshaping the breast tissue. Volume changes little.",
      "Scars go around the areola and, depending on how much the breast sags, down vertically and sometimes under the breast.",
      "It can be combined with implants if you also want more volume.",
    ],
    indications: [
      "Sagging breasts (ptosis) after pregnancy, breastfeeding or weight loss.",
      "A stable weight and complete breast growth.",
      "A considered decision, with the scars accepted.",
    ],
    contraindications: [
      "A planned pregnancy or breastfeeding soon: it can change the result.",
      "Smoking: higher risk of healing problems.",
      "An unstable weight.",
      "Breast history that has not been assessed (imaging beforehand).",
    ],
    risks: [
      { name: "Visible, thickened or widened scars", detail: "Mature over 12 to 18 months." },
      { name: "Sagging may return", detail: "The breast can drop again with time, pregnancy or weight change." },
      { name: "Change in nipple sensation", detail: "Temporary or lasting." },
      { name: "Breastfeeding difficulties", detail: "Possible." },
      { name: "Asymmetry", detail: "Mild asymmetry is common and sometimes needs correcting." },
      {
        name: "Poor blood supply to the areola, haematoma, infection",
        detail: "Uncommon; further surgery is sometimes needed.",
      },
      { name: "Anaesthetic risks", detail: "Assessed at your pre-operative anaesthetic review." },
    ],
    procedure: { anaesthesia: "General anaesthetic.", duration: "Around 2 to 3 hours.", hospitalStay: "Day case or one night." },
    recovery: [
      "A support bra worn for several weeks.",
      "Desk work resumes after 1 to 2 weeks.",
      "Avoid exercise and lifting for about 4 to 6 weeks.",
      "Scars and final shape take several months.",
    ],
    alternatives: [
      "A properly fitted bra, without changing breast shape.",
      "Implants alone, when sagging is slight and volume is wanted.",
      "Doing nothing: a legitimate option.",
    ],
    faq: [
      {
        question: "Can I get pregnant after a breast lift?",
        answer: "Yes, but pregnancy or breastfeeding can change the result. Waiting is often advised.",
      },
      {
        question: "Is there a cooling-off period?",
        answer: "UK professional standards recommend at least two weeks between consultation and agreeing to surgery.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-08",
  },
  {
    id: "gynecomastia",
    locale: "en-gb",
    slug: "gynaecomastia-surgery",
    category: "breast",
    title: "Gynaecomastia surgery (male breast reduction)",
    summary: "Gynaecomastia surgery reduces enlarged breasts in men. Medical checks, risks, recovery and alternatives.",
    description: [
      "Gynaecomastia is an enlargement of breast tissue in men, common in adolescence and adulthood.",
      "Surgery removes glandular tissue and sometimes fat (liposuction), through a small incision around the areola.",
      "A medical assessment always comes first: possible causes (medicines, hormone problems, illness) need to be looked for and treated.",
    ],
    indications: [
      "Persistent, stable gynaecomastia causing physical or emotional distress.",
      "Medical assessment done and a cause looked for.",
      "A stable weight.",
    ],
    contraindications: [
      "A cause that has not been explored or treated.",
      "Gynaecomastia that is still changing or may settle on its own.",
      "Use of substances that maintain gynaecomastia.",
      "Bleeding disorders or conditions that are not controlled.",
    ],
    risks: [
      { name: "Haematoma and seroma", detail: "Uncommon; may need draining." },
      { name: "Contour irregularities, asymmetry", detail: "A revision is sometimes considered." },
      { name: "Altered nipple sensation", detail: "Usually temporary." },
      { name: "Residual loose skin", detail: "Possible when the skin has poor elasticity." },
      { name: "Visible scar, infection", detail: "Uncommon." },
      { name: "Anaesthetic risks", detail: "Assessed at your pre-operative anaesthetic review." },
    ],
    procedure: {
      anaesthesia: "General anaesthetic, or local with sedation.",
      duration: "Around 1 to 2 hours.",
      hospitalStay: "Usually a day case.",
    },
    recovery: [
      "A compression garment worn for several weeks.",
      "Desk work resumes after about a week.",
      "Avoid exercise and heavy exertion for about 4 weeks.",
      "The result settles over several months.",
    ],
    alternatives: [
      "Watchful waiting: some cases settle on their own, especially in adolescents.",
      "Treating the cause (a medicine, a hormone problem) when there is one.",
      "Doing nothing: a legitimate option.",
    ],
    faq: [
      {
        question: "Can the NHS fund it?",
        answer: "Only in limited cases and under strict local criteria, usually after a medical assessment.",
      },
      {
        question: "Is there a cooling-off period?",
        answer: "UK professional standards recommend at least two weeks between consultation and agreeing to surgery.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-08",
  },
];
