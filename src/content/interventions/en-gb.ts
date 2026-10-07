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
  {
    id: "hair-transplant",
    locale: "en-gb",
    slug: "hair-transplant",
    category: "hair",
    title: "Hair transplant",
    summary: "A hair transplant moves hair follicles to thinning areas. Who it suits, techniques, risks, regrowth and alternatives.",
    description: [
      "A hair transplant takes follicles from an area of the scalp where hair is resistant (back and sides) and implants them in thinning areas.",
      "Two techniques exist: removing follicles one by one (FUE) and taking a strip of scalp (FUT), which leaves a linear scar.",
      "A transplant does not treat the cause of hair loss: non-transplanted hair can keep thinning, which may call for additional treatment.",
    ],
    indications: [
      "Stable pattern hair loss with enough donor hair.",
      "After-effects of burns, injury or scarring.",
      "Realistic goals agreed with your practitioner.",
    ],
    contraindications: [
      "Active or undiagnosed hair loss: a medical assessment comes first.",
      "Not enough donor hair.",
      "Active scalp disease, or scarring or autoimmune hair loss that is not stable.",
      "Unrealistic expectations, especially in young patients whose hair loss is not yet stable.",
    ],
    risks: [
      { name: "Swelling of the forehead and face", detail: "Common in the first days, sometimes reaching the eyes." },
      { name: "Scabs, redness and folliculitis", detail: "Expected; infection is uncommon." },
      {
        name: "Transplanted hair shedding, then regrowth",
        detail: "Transplanted hairs fall out after a few weeks and regrow from 3 to 4 months.",
      },
      { name: "Variable graft survival", detail: "Not every graft regrows; a second session is sometimes needed." },
      {
        name: "Visible scars in the donor area",
        detail: "Small dots (FUE) or a line (FUT); temporary thinning can occur.",
      },
      { name: "Loss of existing hair around the transplant (shock loss)", detail: "Usually temporary." },
      { name: "An unnatural hairline", detail: "May need correction." },
      { name: "Anaesthetic risks", detail: "Assessed at your pre-operative anaesthetic review." },
    ],
    procedure: {
      anaesthesia: "Local anaesthetic, sometimes with light sedation.",
      duration: "One session takes several hours (often 4 to 8).",
      hospitalStay: "Day case.",
    },
    recovery: [
      "Dressing and scalp care as instructed for the first days.",
      "Scabs fall off within 1 to 2 weeks; many return to work after a few days.",
      "Transplanted hair sheds at about 2 to 4 weeks; regrowth starts at 3 to 4 months.",
      "The result is judged at 12 to 18 months.",
    ],
    alternatives: [
      "Medical treatments for hair loss (minoxidil, finasteride): variable effects and possible side effects, to discuss with a doctor.",
      "Scalp micropigmentation, hair systems or hairstyling.",
      "Doing nothing: a legitimate option.",
    ],
    faq: [
      {
        question: "Will transplanted hair fall out again?",
        answer: "Follicles taken from resistant areas generally keep that resistance, but non-transplanted hair can keep thinning.",
      },
      {
        question: "Is it available on the NHS?",
        answer: "Very rarely, mostly for reconstruction. Ask for a detailed written quote.",
      },
      {
        question: "Who can carry it out?",
        answer: "Check the practitioner's registration (for example with the GMC, NMC or GDC) and that the clinic is registered with the CQC in England before committing.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-08",
  },
  {
    id: "botulinum-toxin",
    locale: "en-gb",
    slug: "botulinum-toxin",
    category: "injectables",
    title: "Botulinum toxin (expression lines)",
    summary: "Botulinum toxin relaxes certain facial muscles to soften expression lines. Effects, risks and alternatives.",
    description: [
      "Botulinum toxin is a medicine injected in small amounts into certain facial muscles to reduce their movement and soften expression lines (forehead, between the brows, crow's feet).",
      "The effect appears within days, peaks at about 2 weeks and usually lasts 3 to 6 months before gradually wearing off.",
      "It is a prescription-only medicine: treatment follows a consultation with an examination and information about the risks.",
    ],
    indications: [
      "Expression lines of the upper face.",
      "A considered request after an examination by a trained prescriber.",
      "Realistic expectations: the effect is temporary and does not treat every line.",
    ],
    contraindications: [
      "Pregnancy and breastfeeding.",
      "Neuromuscular conditions (for example myasthenia gravis).",
      "Allergy to an ingredient, skin infection at the injection site.",
      "Certain medicines (including some antibiotics): tell your prescriber.",
    ],
    risks: [
      { name: "Bruising, redness and pain at the injection site", detail: "Common and short-lived." },
      { name: "Headache", detail: "Possible in the following days." },
      {
        name: "Drooping eyelid or eyebrow",
        detail: "Can happen if the toxin spreads; resolves as the effect wears off.",
      },
      { name: "Asymmetry or a frozen look", detail: "Depends on dose and areas; settles as the effect fades." },
      { name: "Reduced response over time", detail: "Uncommon, after many repeated treatments." },
      {
        name: "Spread to other parts of the body (swallowing or breathing problems)",
        detail: "Very rare, mostly with high doses; a medical emergency.",
      },
    ],
    procedure: {
      anaesthesia: "Usually none (sometimes a numbing cream or cold).",
      duration: "A few minutes.",
      hospitalStay: "None (in-clinic treatment).",
    },
    recovery: [
      "Normal activities resume straight away.",
      "Avoid massaging the area and intense exercise that day, as advised.",
      "The effect shows within 3 to 7 days and peaks at about 2 weeks.",
      "It gradually returns to baseline over 3 to 6 months.",
    ],
    alternatives: [
      "Skincare, sun protection and retinoids on medical advice.",
      "Hyaluronic acid or other treatments for other types of lines.",
      "Doing nothing: a legitimate option.",
    ],
    faq: [
      {
        question: "Are the results permanent?",
        answer: "No. The effect is temporary and wears off after a few months; treatment must be repeated if you want to keep it.",
      },
      {
        question: "Who can carry it out?",
        answer: "Check the practitioner's registration (for example with the GMC, NMC or GDC) and that the clinic is registered with the CQC in England before committing.",
      },
      {
        question: "Should I take time to decide?",
        answer: "Yes. UK professional standards recommend time to reflect after the consultation, and you should never feel pressured to book treatment on the day.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-08",
  },
  {
    id: "hyaluronic-fillers",
    locale: "en-gb",
    slug: "hyaluronic-acid-fillers",
    category: "injectables",
    title: "Hyaluronic acid fillers",
    summary: "Hyaluronic acid fillers add volume or soften folds in the face and lips. Effects, rare serious risks and alternatives.",
    description: [
      "Hyaluronic acid is a gel injected under the skin to fill a fold, restore volume (cheeks, lips, under-eyes) or refine a contour.",
      "The effect usually lasts 6 to 18 months depending on the product and area, then the body absorbs the gel.",
      "The product can be dissolved with an enzyme (hyaluronidase) if there is a complication or you are unhappy with the result.",
    ],
    indications: [
      "Folds, loss of volume or irregularities in the face.",
      "Lip volume or contour, as a considered request.",
      "Realistic expectations and acceptance that the effect is temporary.",
    ],
    contraindications: [
      "Pregnancy and breastfeeding.",
      "Active skin infection or skin disease in the area.",
      "Known allergy to an ingredient, autoimmune conditions that are not controlled.",
      "Bleeding disorders or blood-thinning treatment, to be assessed.",
    ],
    risks: [
      { name: "Bruising, swelling and pain", detail: "Common in the first days." },
      { name: "Lumps, irregularities and asymmetry", detail: "May need massage, dissolving or correction." },
      { name: "Infection", detail: "Uncommon; can form an abscess." },
      { name: "Delayed inflammatory reaction or granuloma", detail: "Rare; needs medical review." },
      {
        name: "Blocked blood vessel",
        detail: "Rare but serious: risk of skin loss and, very rarely, sight loss. Severe pain or pale skin is an emergency.",
      },
      {
        name: "An artificial look or over-correction",
        detail: "Depends on the amount injected; can be corrected by dissolving the product.",
      },
    ],
    procedure: {
      anaesthesia: "Numbing cream or a filler containing local anaesthetic.",
      duration: "Around 20 to 45 minutes.",
      hospitalStay: "None (in-clinic treatment).",
    },
    recovery: [
      "Redness, swelling and small bruises for the first days.",
      "Avoid intense exercise, saunas and sun for about 24 to 48 hours, as advised.",
      "The final result shows after about 2 weeks.",
      "A review may include a touch-up; the effect then fades over 6 to 18 months.",
    ],
    alternatives: [
      "Other fillers or fat transfer, with their own risks.",
      "Skincare, lasers or peels for some concerns.",
      "Doing nothing: a legitimate option.",
    ],
    faq: [
      {
        question: "Can the result be reversed?",
        answer: "Hyaluronic acid can be dissolved with an enzyme, which allows an unsatisfactory result or a complication to be corrected.",
      },
      {
        question: "Who can carry it out?",
        answer: "Check the practitioner's registration (for example with the GMC, NMC or GDC) and that the clinic is registered with the CQC in England before committing.",
      },
      {
        question: "Should I take time to decide?",
        answer: "Yes. UK professional standards recommend time to reflect after the consultation, and you should never feel pressured to book treatment on the day.",
      },
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-08",
  },
  {
    id: "brachioplasty",
    locale: "en-gb",
    slug: "arm-lift",
    category: "body",
    title: "Arm lift (brachioplasty)",
    summary: "An arm lift removes loose skin from the inner arm. A long scar, risks, recovery and alternatives.",
    description: [
      "Brachioplasty removes excess skin, and sometimes fat, from the inner arm, common after major weight loss.",
      "The scar is long and usually runs along the inner arm from the elbow to the armpit; it can stay visible.",
      "It is often considered after weight loss has stabilised, when the skin no longer has elasticity.",
    ],
    indications: [
      "Loose arm skin after major weight loss.",
      "A stable weight for several months.",
      "A long scar that you accept.",
    ],
    contraindications: [
      "Smoking: higher risk of healing problems.",
      "An unstable weight.",
      "Bleeding disorders or conditions that are not controlled.",
      "Mild excess skin: the scar may be out of proportion.",
    ],
    risks: [
      { name: "A long, widened or thickened scar", detail: "Matures over 12 to 18 months; it can stay visible." },
      { name: "Seroma and haematoma", detail: "Uncommon; may need draining." },
      { name: "Altered sensation in the forearm", detail: "Due to nearby nerves; often temporary." },
      { name: "Delayed healing, wound opening", detail: "More common in smokers." },
      { name: "Prolonged swelling, lymphoedema", detail: "Rare." },
      { name: "Asymmetry and infection", detail: "Uncommon." },
      { name: "Anaesthetic risks", detail: "Assessed at your pre-operative anaesthetic review." },
    ],
    procedure: {
      anaesthesia: "Usually general anaesthetic.",
      duration: "Around 2 to 3 hours.",
      hospitalStay: "Day case or one night.",
    },
    recovery: [
      "Compression sleeves for about 4 to 6 weeks.",
      "Arms raised for the first days.",
      "Desk work resumes after 1 to 2 weeks.",
      "Avoid lifting and exercise for about 6 weeks.",
    ],
    alternatives: [
      "Strength training and weight monitoring when the excess skin is mild.",
      "Liposuction alone, only if the skin is elastic.",
      "Doing nothing: a legitimate option.",
    ],
    faq: [
      {
        question: "Can the scar be hidden?",
        answer: "It is placed on the inner arm but is often visible when the arms are raised. Discuss its position with your surgeon before deciding.",
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
    id: "buttock-augmentation",
    locale: "en-gb",
    slug: "buttock-augmentation",
    category: "body",
    title: "Buttock augmentation",
    summary: "Buttock augmentation increases volume with implants or fat transfer. Important risks to understand before deciding.",
    description: [
      "Buttock augmentation increases volume or changes the shape of the buttocks, either with implants or with fat taken from elsewhere on the body (fat transfer).",
      "Injecting fat into the gluteal muscle carries a risk of fat embolism, which can be fatal. Plastic surgery societies advise injecting fat only under the skin, never into the muscle.",
      "Part of the transferred fat is reabsorbed, so the final volume is lower than the volume injected.",
    ],
    indications: [
      "A wish for more volume or a different shape, as a considered decision.",
      "A stable weight.",
      "Enough body fat if a fat transfer is planned.",
    ],
    contraindications: [
      "Smoking: higher risk of skin complications.",
      "An unstable weight or too little fat available for a transfer.",
      "Infections, bleeding disorders or conditions that are not controlled.",
      "Unrealistic expectations.",
    ],
    risks: [
      { name: "Fat embolism", detail: "Rare but can be fatal when fat is injected into muscle or near large veins." },
      { name: "Infection and seroma", detail: "Uncommon; may need draining or implant removal." },
      { name: "Fat reabsorption, asymmetry and irregularities", detail: "Common with fat transfer." },
      { name: "Wound opening (implants)", detail: "More likely in a pressure area." },
      { name: "Implant movement, capsule formation, pain", detail: "Possible with implants." },
      { name: "Nerve injury, including the sciatic nerve", detail: "Rare." },
      { name: "Anaesthetic risks", detail: "Assessed at your pre-operative anaesthetic review." },
    ],
    procedure: { anaesthesia: "General anaesthetic.", duration: "Around 2 to 4 hours.", hospitalStay: "One to two nights." },
    recovery: [
      "Avoid sitting directly on the buttocks for 2 to 3 weeks, as advised.",
      "A compression garment for several weeks.",
      "Desk work resumes after about 2 to 3 weeks.",
      "Avoid exercise for about 6 weeks; the final result takes several months.",
    ],
    alternatives: [
      "Targeted strength exercises.",
      "Implants alone when too little fat is available, with their own risks.",
      "Doing nothing: a legitimate option.",
    ],
    faq: [
      {
        question: "Why does the fat injection technique matter so much?",
        answer: "Because the risk of a serious complication depends on injection depth. Ask your surgeon where and how the fat will be injected.",
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
    id: "genioplasty",
    locale: "en-gb",
    slug: "chin-surgery",
    category: "face",
    title: "Chin surgery (genioplasty)",
    summary: "Chin surgery changes the size or position of the chin, with an implant or by moving the bone. Risks and recovery.",
    description: [
      "Genioplasty changes the profile of the chin: it can be projected forward with an implant, or the chin bone can be moved (osteotomy) to advance, set back or raise it.",
      "The incision is usually inside the mouth, sometimes under the chin.",
      "It is sometimes combined with rhinoplasty to balance the profile, after an assessment of the face and dental bite.",
    ],
    indications: [
      "A chin that seems too small, too long or set back compared with the rest of the face.",
      "A considered decision after assessment of the profile and teeth.",
      "Facial growth complete.",
    ],
    contraindications: [
      "Growth not yet complete.",
      "Active dental or mouth infection.",
      "Bleeding disorders or conditions that are not controlled.",
      "Unrealistic expectations.",
    ],
    risks: [
      { name: "Swelling and bruising", detail: "Common for several weeks." },
      { name: "Altered feeling in the lower lip and chin", detail: "Common, usually temporary, sometimes lasting." },
      { name: "Infection", detail: "Uncommon; more of a concern with an implant, which may need removal." },
      { name: "Implant movement or bone loss under the implant", detail: "Possible in the long term." },
      { name: "Asymmetry or an unsatisfactory result", detail: "A revision is sometimes needed." },
      { name: "Damage to tooth roots (osteotomy)", detail: "Rare." },
      { name: "Anaesthetic risks", detail: "Assessed at your pre-operative anaesthetic review." },
    ],
    procedure: {
      anaesthesia: "Usually general anaesthetic, sometimes local with sedation.",
      duration: "Around 1 hour.",
      hospitalStay: "Day case or one night.",
    },
    recovery: [
      "Soft food for the first days, careful mouth hygiene.",
      "A chin dressing for a few days.",
      "Desk work resumes after 1 to 2 weeks.",
      "Avoid sport for about 4 weeks; swelling settles over a few months.",
    ],
    alternatives: [
      "Hyaluronic acid to project the chin slightly, temporarily.",
      "Orthodontics or jaw surgery when the problem is dental or involves the wider jaw.",
      "Doing nothing: a legitimate option.",
    ],
    faq: [
      {
        question: "What is the difference between an implant and moving the bone?",
        answer: "An implant adds volume; an osteotomy moves your own bone and can also change chin height. The choice depends on your examination.",
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
    id: "breast-implant-removal",
    locale: "en-gb",
    slug: "breast-implant-removal",
    category: "breast",
    title: "Breast implant removal",
    summary: "Breast implant removal takes out the implants, with or without the capsule, sometimes with a lift. Reasons, risks and follow-up.",
    description: [
      "Breast implant removal (explant surgery) takes out the implants, with or without the scar capsule around them (capsulectomy).",
      "Reasons vary: a complication (capsule, rupture, pain), a change of plans or personal choice. An examination and imaging come first.",
      "The breast can change shape after removal. A breast lift may be added to improve shape, with extra scars.",
    ],
    indications: [
      "Capsule, rupture, movement or pain linked to the implant.",
      "A wish to remove the implants, as a considered decision.",
      "A suspected rare complication to be assessed by a specialist.",
    ],
    contraindications: [
      "An active infection that has not been treated.",
      "Bleeding disorders or conditions that are not controlled.",
      "Unrealistic expectations about the final shape.",
      "Smoking: higher risk of healing problems.",
    ],
    risks: [
      {
        name: "Loose skin, a deflated or sagging breast",
        detail: "The breast can lose volume and shape; a lift is sometimes needed.",
      },
      { name: "Seroma, haematoma, infection", detail: "Uncommon; may need draining or further surgery." },
      { name: "Visible scars, asymmetry", detail: "Mature over 12 to 18 months." },
      { name: "Change in nipple sensation", detail: "Temporary or lasting." },
      { name: "Risks of capsulectomy", detail: "Bleeding, pain and, more rarely, injury to nearby tissue." },
      { name: "Anaesthetic risks", detail: "Assessed at your pre-operative anaesthetic review." },
    ],
    procedure: {
      anaesthesia: "Usually general anaesthetic.",
      duration: "Around 1 to 3 hours depending on the technique.",
      hospitalStay: "Day case or one night.",
    },
    recovery: [
      "A support bra for several weeks.",
      "Desk work resumes after about a week.",
      "Avoid exercise and lifting for about 4 to 6 weeks.",
      "The final shape shows after several months.",
    ],
    alternatives: [
      "Monitoring with imaging when there are no symptoms.",
      "Replacing the implants.",
      "Doing nothing: a legitimate option.",
    ],
    faq: [
      {
        question: "Can the NHS fund removal?",
        answer: "In some cases, mainly for complications or implants placed through the NHS, under local criteria. Removal without a medical reason is generally not funded.",
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
    id: "thigh-lift",
    locale: "en-gb",
    slug: "thigh-lift",
    category: "body",
    title: "Thigh lift",
    summary: "A thigh lift removes loose skin from the inner thighs, often after weight loss. Scars and risks to know before deciding.",
    description: [
      "A thigh lift removes excess skin, and sometimes fat, from the inner or outer thigh, common after major weight loss.",
      "The scar sits in the groin crease and can run down the thigh depending on the technique.",
      "It is considered when weight is stable and the skin no longer has elasticity.",
    ],
    indications: [
      "Loose thigh skin after major weight loss.",
      "A stable weight for several months.",
      "Scars that you accept.",
    ],
    contraindications: [
      "Smoking: higher risk of healing problems.",
      "An unstable weight.",
      "Severe lymphatic or venous circulation problems.",
      "Bleeding disorders or conditions that are not controlled.",
    ],
    risks: [
      { name: "Delayed healing or wound opening", detail: "Common near the groin, more so in smokers." },
      { name: "Widened, thickened or visible scars", detail: "Mature over 12 to 18 months." },
      { name: "Seroma, haematoma, infection", detail: "Uncommon; may need draining." },
      { name: "Prolonged swelling or lymphocele", detail: "Possible, sometimes for months." },
      { name: "Blood clots and pulmonary embolism", detail: "Rare but serious; preventive measures are taken." },
      { name: "Asymmetry, pulling in the groin area", detail: "Possible." },
      { name: "Anaesthetic risks", detail: "Assessed at your pre-operative anaesthetic review." },
    ],
    procedure: { anaesthesia: "General anaesthetic.", duration: "Around 2 to 4 hours.", hospitalStay: "One to two nights." },
    recovery: [
      "A compression garment for several weeks.",
      "Early walking and legs raised when resting.",
      "Desk work resumes after 2 to 3 weeks.",
      "Avoid exercise for about 6 weeks.",
    ],
    alternatives: [
      "Liposuction alone, only if the skin is elastic.",
      "Exercise and weight monitoring when the excess skin is mild.",
      "Doing nothing: a legitimate option.",
    ],
    faq: [
      {
        question: "Will the scars be visible?",
        answer: "They are placed in creases but can run down the thigh and stay visible. Discuss their position with your surgeon before deciding.",
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
