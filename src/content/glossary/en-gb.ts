import type { GlossaryTerm } from "../types";

/**
 * United Kingdom glossary (en-gb). Localised, not translated: UK regulation
 * and NHS context. Plain-language, factual definitions written to the
 * editorial charter. Status "draft" until reviewed by a qualified surgeon.
 */
export const glossaryEnGb: GlossaryTerm[] = [
  {
    id: "seroma",
    locale: "en-gb",
    slug: "seroma",
    term: "Seroma",
    aliases: ["seromas", "seromata"],
    definition:
      "A seroma is a collection of clear fluid that builds up under the skin in the space left where tissue was lifted during surgery. It is fairly common after a tummy tuck.",
    detail: [
      "A seroma usually appears in the days or weeks after the operation as a soft, sometimes sloshing swelling. It is not usually painful in itself but can feel tight or uncomfortable.",
      "A small seroma may be reabsorbed by the body on its own. A larger one is usually drained with a needle in clinic, sometimes more than once; occasionally further surgery is needed. Wearing the support garment you are given and avoiding strenuous activity help to reduce the risk.",
      "Contact your surgeon's team promptly if a swelling keeps growing, becomes red or hot, or you develop a fever. Out of hours, you can call NHS 111.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "haematoma",
    locale: "en-gb",
    slug: "haematoma",
    term: "Haematoma",
    aliases: ["haematomas", "hematoma", "hematomas"],
    definition:
      "A haematoma is a collection of blood that pools in the tissues after bleeding. After surgery it shows as a firm, tense and often bluish swelling in one area.",
    detail: [
      "Haematomas after surgery are uncommon. They tend to develop in the first hours or days, particularly with exertion, high blood pressure, or medicines and supplements that thin the blood, such as aspirin, anti-inflammatory painkillers or anticoagulants.",
      "A small haematoma may settle by itself. A large or rapidly growing one usually needs a return to theatre to remove the blood and stop the bleeding; after breast augmentation this can mean temporarily removing the implant.",
      "Tell your surgeon about every medicine and supplement you take before the operation. Contact the surgical team urgently if you notice a painful swelling on one side, or call NHS 111 if you cannot reach them.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "oedema",
    locale: "en-gb",
    slug: "swelling-oedema",
    term: "Swelling (oedema)",
    aliases: ["oedema", "edema", "swelling", "swellings"],
    definition:
      "Oedema is swelling of the tissues caused by a build-up of fluid, a normal reaction of the body to surgery. It is expected after most operations and goes down gradually.",
    detail: [
      "Swelling usually peaks two to three days after surgery and then settles over several weeks, often with bruising. After rhinoplasty, swelling at the tip of the nose can last for months, which is why the final result takes time to appear.",
      "Keeping the treated area raised, using cold compresses as advised and wearing any compression garment you are given can help.",
      "Sudden, very painful or one-sided swelling, or swelling with a fever, is not ordinary oedema. Contact your surgeon's team or call NHS 111.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "capsular-contracture",
    locale: "en-gb",
    slug: "capsular-contracture",
    term: "Capsular contracture",
    aliases: ["capsular contractures"],
    definition:
      "Capsular contracture is the thickening and tightening of the layer of scar tissue that the body naturally forms around a breast implant. It can make the breast feel hard, painful or look misshapen.",
    detail: [
      "A thin capsule around an implant is normal. Contracture happens when this capsule tightens and squeezes the implant. It is graded from 1 (soft, natural-looking breast) to 4 (hard, painful and visibly distorted) on the Baker scale.",
      "It can appear months or years after surgery. The causes are not fully understood; bleeding, low-grade infection and radiotherapy increase the risk.",
      "Troublesome contracture is usually treated with further surgery to remove the capsule (capsulectomy) and replace the implant, sometimes in a different pocket. It can come back.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "bia-alcl",
    locale: "en-gb",
    slug: "bia-alcl",
    term: "BIA-ALCL (breast implant-associated anaplastic large cell lymphoma)",
    aliases: ["BIA-ALCL", "anaplastic large cell lymphoma", "ALCL"],
    definition:
      "BIA-ALCL is a rare cancer of the immune system that develops in the scar capsule or fluid around a breast implant. It is mostly linked to textured implants.",
    detail: [
      "It most often shows as a late swelling of the breast, years after the implant was placed, caused by fluid around the implant; less often as a lump or capsular contracture. Diagnosis involves an ultrasound scan and testing of the fluid.",
      "When found early, it is usually treated by removing the implant and the whole capsule. In the UK, the Medicines and Healthcare products Regulatory Agency (MHRA) collects reports of cases.",
      "Removing implants that cause no symptoms is not recommended. However, any late swelling, lump or change in a breast with an implant should be reported to your surgeon or GP.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "general-anaesthesia",
    locale: "en-gb",
    slug: "general-anaesthetic",
    term: "General anaesthetic",
    aliases: ["general anaesthesia", "general anesthesia", "general anesthetic"],
    definition:
      "A general anaesthetic is a medicine-induced, controlled state of unconsciousness that lasts for the whole operation. It is given and monitored by an anaesthetist, a doctor specialising in anaesthesia.",
    detail: [
      "Before planned surgery you will have a pre-operative assessment, where your health, medicines, allergies and past reactions to anaesthesia are reviewed and fasting instructions are explained.",
      "Common side effects such as sickness, a sore throat, shivering and drowsiness usually pass quickly. Serious complications are rare in healthy people, but the risk is never zero and rises with some medical conditions, a higher BMI and smoking.",
      "Depending on the operation, other options may be offered: local anaesthetic, a regional block or sedation.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "day-surgery",
    locale: "en-gb",
    slug: "day-case-surgery",
    term: "Day-case surgery",
    aliases: ["day case", "day-case", "day surgery"],
    definition:
      "Day-case surgery means you go home on the same day as your operation, without an overnight stay. It is used for procedures whose recovery is predictable and can be managed safely at home.",
    detail: [
      "You are discharged only once the team has checked that you are fully awake, your pain is controlled and there is no bleeding. Discharge is not automatic, and you may be kept overnight if needed.",
      "After an anaesthetic you should not drive, should be taken home by a responsible adult and should not be alone for the first night. You should be given written instructions, medicines and a contact number available around the clock.",
      "Whether day-case surgery suits you depends on the procedure, your health, how far you live from the hospital and who can support you at home.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "deep-vein-thrombosis",
    locale: "en-gb",
    slug: "dvt",
    term: "Deep vein thrombosis (DVT)",
    aliases: ["DVT", "deep vein thrombosis", "blood clot", "blood clots"],
    definition:
      "Deep vein thrombosis (DVT) is a blood clot in a deep vein, usually in the leg. The clot can travel to the lungs and cause a pulmonary embolism.",
    detail: [
      "The risk rises with longer operations, immobility, some procedures such as a tummy tuck, a higher BMI, smoking, the combined contraceptive pill or HRT, and a personal or family history of clots.",
      "Prevention includes walking early after surgery, compression stockings and, depending on your assessed risk, blood-thinning injections for days or weeks.",
      "Pain, swelling, warmth or redness in one calf needs urgent medical advice: contact your surgical team or call NHS 111. Sudden breathlessness, chest pain or coughing up blood is an emergency: call 999.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "hypertrophic-scar",
    locale: "en-gb",
    slug: "hypertrophic-scar",
    term: "Hypertrophic scar",
    aliases: ["hypertrophic scars", "hypertrophic scarring", "keloid", "keloids"],
    definition:
      "A hypertrophic scar is a thick, raised, red and sometimes itchy scar that stays within the line of the original wound. It differs from a keloid scar, which spreads beyond the wound and is more likely to come back after treatment.",
    detail: [
      "Every scar changes over 12 to 18 months: it is often pink and firm at first, then softens and fades. A hypertrophic scar usually appears within the first weeks and may improve with time.",
      "Factors that make it more likely include tension on the wound, areas that move a lot, infection or slow healing, and individual tendency, which is more common in darker skin.",
      "Treatments include massage, silicone gel or sheets, pressure, steroid injections and, less often, further surgery. None can make a scar disappear completely.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "diastasis",
    locale: "en-gb",
    slug: "diastasis-recti",
    term: "Diastasis recti",
    aliases: ["diastasis", "separated abdominal muscles", "abdominal separation", "muscle separation"],
    definition:
      "Diastasis recti is a widening of the gap between the two vertical muscles at the front of the abdomen. It is common after pregnancy.",
    detail: [
      "During pregnancy the band of tissue joining the two rectus muscles stretches. In some women the gap stays after birth, with a tummy that bulges when straining, and sometimes back pain or an associated hernia.",
      "Mild separation often improves with specialist physiotherapy, which may be available through the NHS via your GP. When the gap is large and persistent, it can be repaired surgically by stitching the muscles together, usually during a tummy tuck, which is rarely funded by the NHS.",
      "Repair is generally considered once your weight is stable and you no longer plan a pregnancy.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "septorhinoplasty",
    locale: "en-gb",
    slug: "septorhinoplasty",
    term: "Septorhinoplasty",
    aliases: ["septorhinoplasties", "septoplasty", "deviated septum"],
    definition:
      "Septorhinoplasty combines rhinoplasty, which changes the shape of the nose, with septoplasty, which straightens the wall between the nostrils. It aims to address both appearance and breathing in one operation.",
    detail: [
      "The septum divides the two sides of the nose. When it is bent, from injury or from birth, it can block airflow and make breathing through the nose difficult.",
      "The NHS may fund surgery to correct a documented breathing problem, but cosmetic changes to the shape of the nose are not usually available on the NHS. In private care, your quote should make clear what each part covers.",
      "Risks and recovery are similar to rhinoplasty, with an added risk of ongoing breathing difficulty or, rarely, a hole in the septum.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "cooling-off-period",
    locale: "en-gb",
    slug: "cooling-off-period",
    term: "Cooling-off period",
    aliases: ["cooling-off periods", "cooling off period", "cooling-off"],
    definition:
      "A cooling-off period is time set aside between your consultation and agreeing to surgery, so you can reflect without pressure. UK professional standards recommend at least two weeks.",
    detail: [
      "Guidance from the General Medical Council and the Royal College of Surgeons says you should have time to consider the information you have been given and should not be rushed into a decision. A two-stage consultation is recommended, ideally with the surgeon who will operate.",
      "You should not be asked to pay a non-refundable deposit or sign up to surgery on the day of a first consultation. You can change your mind, ask further questions or seek a second opinion.",
      "Time-limited discounts or pressure to book quickly are warning signs, and the Advertising Standards Authority restricts such sales tactics for cosmetic procedures.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "body-dysmorphic-disorder",
    locale: "en-gb",
    slug: "body-dysmorphic-disorder",
    term: "Body dysmorphic disorder (BDD)",
    aliases: ["body dysmorphic disorder", "BDD", "excessive worry"],
    definition:
      "Body dysmorphic disorder (BDD) is an intense, persistent worry about a minor or invisible flaw in appearance. It is a recognised mental health condition that can be treated.",
    detail: [
      "It often involves repeated checking in mirrors, comparing yourself with others, avoiding situations and significant distress. It is more common among people seeking cosmetic surgery than in the general population.",
      "Surgery does not usually relieve the worry, which often moves to another feature, and dissatisfaction afterwards is common. For this reason a surgeon may suggest postponing or not performing an operation.",
      "Cognitive behavioural therapy and, in some cases, medication are effective. You can speak to your GP or refer yourself to NHS Talking Therapies in England.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "breast-implant",
    locale: "en-gb",
    slug: "breast-implant",
    term: "Breast implant",
    aliases: ["breast implants", "implant", "implants"],
    definition:
      "A breast implant is a medical device placed behind the breast tissue or the chest muscle to increase breast size or rebuild the breast. It has a silicone shell filled with silicone gel or saline.",
    detail: [
      "Implants vary in shape (round or teardrop), size, projection and surface (smooth or textured). In the UK they are regulated as medical devices by the MHRA.",
      "Implants do not last a lifetime: the chance of wear, rupture or capsular contracture rises over time, and further surgery during your life is likely. Regular check-ups are needed for as long as you have implants.",
      "Your surgeon should give you written information about the implant and record it on the Breast and Cosmetic Implant Registry, so you can be contacted if a safety issue arises. Keep the implant details you are given.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
  {
    id: "lipofilling",
    locale: "en-gb",
    slug: "fat-transfer",
    term: "Fat transfer (lipofilling)",
    aliases: ["fat transfer", "lipofilling", "fat grafting", "autologous fat transfer"],
    definition:
      "Fat transfer involves removing fat from one part of the body by liposuction, preparing it and injecting it into another area. It can add volume or smooth irregularities without an implant.",
    detail: [
      "It is used for the breasts, face and buttocks, and to correct the effects of previous surgery. You need enough spare fat at the donor site.",
      "Part of the injected fat is reabsorbed over the following months, so more than one session may be needed. The increase in volume is usually more modest than with an implant.",
      "Risks include bruising, lumpiness, oil cysts or small areas of fat necrosis, which can make breast imaging harder to interpret, and occasionally infection. Fat embolism is very rare but serious, particularly with injections into the buttocks.",
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
];
