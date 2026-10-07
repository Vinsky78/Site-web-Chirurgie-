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
];
