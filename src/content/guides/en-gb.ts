import type { Guide } from "../types";

/**
 * Cross-cutting guides for the UK market (en-gb). A market adaptation, not a
 * translation: UK law, NHS services and UK regulators. Phase 1 editorial
 * charter: factual and neutral, no promise of results, no ranking of doctors,
 * clinics or countries. Status "draft" until reviewed by a qualified surgeon.
 */
export const guidesEnGb: Guide[] = [
  {
    id: "choosing-a-surgeon",
    locale: "en-gb",
    slug: "choosing-a-surgeon",
    title: "Choosing a cosmetic surgeon",
    summary:
      "How to check a surgeon's registration and specialty on the GMC register, the clinic's CQC status and insurance before cosmetic surgery.",
    answer:
      "Choose a surgeon on things you can check: registration with a licence to practise on the GMC register, an entry on the GMC Specialist Register in plastic surgery (or a specialty relevant to the area being treated), a hospital or clinic registered with the appropriate regulator, and indemnity cover. Price, social media following and how quickly you can be booked in tell you nothing about safety. This platform never presents one surgeon as superior to another: it helps you check, not rank.",
    steps: [
      {
        heading: "Check the GMC register",
        paragraphs: [
          "Every doctor practising in the UK must be registered with the General Medical Council (GMC) and hold a licence to practise. You can search the GMC's online register free of charge by name or GMC reference number.",
          "In the UK, any registered doctor can legally perform cosmetic surgery; there is no protected title of 'cosmetic surgeon'. Look for an entry on the GMC Specialist Register, most often in plastic surgery. Some procedures in a specific area may also be carried out by surgeons on the Specialist Register in another relevant specialty, for example ear, nose and throat (ENT) surgery for the nose.",
        ],
        bullets: [
          "Name and GMC number match the ones on your paperwork.",
          "Specialist Register entry shown on the GMC register, not only on the surgeon's own website.",
          "Be cautious about titles such as 'cosmetic expert' with no matching specialist registration.",
        ],
      },
      {
        heading: "Check where the operation will take place",
        paragraphs: [
          "In England, independent hospitals and clinics carrying out surgery must be registered with the Care Quality Commission (CQC), which publishes inspection reports and ratings on its website. In Scotland the regulator is Healthcare Improvement Scotland, in Wales Healthcare Inspectorate Wales, and in Northern Ireland the Regulation and Quality Improvement Authority.",
          "Ask for the name and address of the hospital, and read its most recent inspection report.",
        ],
      },
      {
        heading: "Check indemnity and aftercare",
        paragraphs: [
          "Doctors practising in the UK are required to have adequate insurance or indemnity cover. You can ask the surgeon how they are covered.",
          "Ask how aftercare is organised: scheduled follow-up appointments, a number you can call at night and at weekends, and what happens, including cost, if a complication or revision surgery is needed.",
        ],
      },
      {
        heading: "Judge the consultation itself",
        paragraphs: [
          "Your consultation should be with the surgeon who will operate, not with a sales adviser or patient coordinator. It should include an examination and a discussion of the technique, the risks, the alternatives (including not having surgery) and the expected recovery.",
          "A surgeon may advise against an operation or suggest something more limited than you had in mind. That is part of their role, not a bad sign.",
        ],
      },
      {
        heading: "Do not choose on price or social media",
        paragraphs: [
          "A price well below the usual range may leave out things such as the anaesthetist's fee, an overnight stay, aftercare or revision surgery. A high price is not a measure of quality either.",
          "Follower counts, theatre videos and edited photos are not safety criteria. Be wary of time-limited discounts, prize draws or package deals: professional guidance for doctors says cosmetic interventions should not be marketed in ways that put pressure on people to decide quickly.",
        ],
      },
      {
        heading: "Get more than one opinion if you need to",
        paragraphs: [
          "Seeing two appropriately registered surgeons lets you compare explanations, proposals and how your questions are received. Expect to pay a consultation fee for each.",
          "This guide applies to every procedure covered on the platform, whether it concerns the face, the body or the breasts.",
        ],
      },
      {
        heading: "A step-by-step checklist",
        paragraphs: [
          "These checks take around 20 minutes, are free and can all be done online. Note what you find as you go, so you can come back to it during your cooling-off period.",
        ],
        bullets: [
          "Step 1: find the surgeon's full name and GMC reference number on their website, letters or quote.",
          "Step 2: search the GMC register. Check that the doctor is registered with a licence to practise, and look for any conditions, undertakings or warnings shown on the entry.",
          "Step 3: check the Specialist Register entry matches the area being treated. Plastic surgery covers the full range of cosmetic procedures; other surgical specialties cover their own area, for example ophthalmology for eyelids, ENT for the nose or ears, and oral and maxillofacial surgery for some facial procedures.",
          "Step 4: see whether the surgeon holds the Royal College of Surgeons of England's certification in cosmetic surgery. It is voluntary, so its absence is not a red flag in itself, but it is an extra check of training and practice for a given procedure group.",
          "Step 5: ask for the exact name and address of the hospital or clinic, check its registration with the CQC (or Healthcare Improvement Scotland, Healthcare Inspectorate Wales or RQIA in Northern Ireland) and read its latest inspection report.",
          "Step 6: ask for the anaesthetist's name and check them on the GMC register too.",
          "Step 7: ask how the surgeon's indemnity cover is provided. A refusal to answer is a signal to take seriously.",
        ],
      },
      {
        heading: "Sales tactics to be wary of",
        paragraphs: [
          "GMC guidance says doctors offering cosmetic interventions must not use promotional tactics that put pressure on people, and advertising is overseen by the Advertising Standards Authority. Some selling practices should make you cautious, however polished the website or clinic looks.",
        ],
        bullets: [
          "Time-limited discounts, prize draws, competitions or paid referral schemes.",
          "Bundles of several procedures presented as a saving.",
          "First contact only with a 'patient coordinator' or agency that will not name the surgeon.",
          "Repeated follow-up calls or messages after a simple enquiry.",
          "Before-and-after photos taken in different conditions, or that look edited.",
          "Assessment offered only from photos or by video call, with no face-to-face examination before a quote.",
          "Payment requested in cash, to an overseas account or with no receipt.",
        ],
      },
      {
        heading: "What changes with the procedure",
        paragraphs: [
          "The basic checks are the same for every procedure, but a few points apply to particular areas.",
        ],
        bullets: [
          "Breast augmentation: ask which make and model of implant is planned, and whether your details will be recorded on the Breast and Cosmetic Implant Registry in England.",
          "Breast reduction, breast uplift and gynaecomastia: these are rarely funded on the NHS and only under strict local criteria; your GP can tell you whether a referral is worth considering.",
          "Gynaecomastia: a medical assessment first (by your GP, sometimes with blood tests) helps look for a hormonal or medicine-related cause.",
          "Eyelid surgery: an eye examination beforehand may be needed, especially if you have dry eyes.",
          "Liposuction and fat transfer: ask what volume is planned, in which areas, and whether an overnight stay is advised for that volume.",
          "Facelift and tummy tuck: ask about the surgeon's approach to smoking and vaping, which increase the risk of poor skin healing.",
        ],
      },
      {
        heading: "Examples of common situations",
        paragraphs: [
          "A few situations people often face, and how to approach them.",
        ],
        bullets: [
          "You found a surgeon on social media: check the GMC register and Specialist Register entry before booking, as you would for anyone else.",
          "The clinic offers a first appointment with a nurse or coordinator: ask to see the operating surgeon before any quote is issued.",
          "Two appropriately registered surgeons suggest different techniques: ask each why they would not use the other option; both views may be reasonable.",
          "The hospital has not been confirmed when you receive the quote: wait until it is named before committing.",
        ],
      },
    ],
    warningSigns: [
      "The surgeon is not on the GMC register or has no relevant Specialist Register entry.",
      "You do not meet the operating surgeon until the day of surgery.",
      "The clinic cannot tell you which regulator it is registered with.",
      "A discount depends on booking or paying a deposit quickly.",
      "Risks are played down or questions are avoided.",
      "There is no follow-up plan or out-of-hours contact.",
      "You are offered surgery on the same day as your first consultation.",
      "The surgeon's name is only given after you pay a deposit.",
      "First contact is only through messaging with a sales coordinator.",
    ],
    resources: [
      { label: "General Medical Council – check a doctor's registration", url: "https://www.gmc-uk.org" },
      { label: "Care Quality Commission (CQC) – find and check a service", url: "https://www.cqc.org.uk" },
      { label: "NHS – cosmetic procedures", url: "https://www.nhs.uk" },
      { label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)", url: "https://www.bapras.org.uk" },
      { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" },
      { label: "Royal College of Surgeons of England", url: "https://www.rcseng.ac.uk" },
      { label: "Advertising Standards Authority (ASA)", url: "https://www.asa.org.uk" },
      { label: "Healthcare Inspectorate Wales (HIW)", url: "https://www.hiw.org.uk" },
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
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  {
    id: "surgery-abroad",
    locale: "en-gb",
    slug: "surgery-abroad",
    title: "Cosmetic surgery abroad: what to compare",
    summary:
      "Legal framework, aftercare, language, complications, flying home: the factual points to check before having cosmetic surgery outside the UK.",
    answer:
      "Having cosmetic surgery abroad is possible, but the legal framework, aftercare arrangements and handling of complications differ from country to country. The key points are checking the surgeon on that country's official register, the language of the consultation, how long you will stay, the journey home and what happens if something goes wrong once you are back. The NHS will treat urgent complications, but it does not usually fund corrective cosmetic surgery. This guide does not recommend any destination and does not rank countries or clinics.",
    steps: [
      {
        heading: "Understand the country's legal framework",
        paragraphs: [
          "UK safeguards, such as GMC registration, regulation of hospitals by the CQC or its equivalents and UK consumer law, do not apply to a clinic in another country. Each country has its own rules on surgeons' qualifications, facility licensing, advertising and cooling-off periods.",
          "If there is a dispute, it will usually be governed by the law and courts of the country where you had surgery, which can make it harder to seek redress.",
        ],
        bullets: [
          "Which official register can be used to check the surgeon?",
          "Is there a legal or recommended interval between the quote and surgery?",
          "Is the surgeon insured, and does the cover apply to overseas patients?",
        ],
      },
      {
        heading: "Check the consultation and language",
        paragraphs: [
          "A consultation with the surgeon who will operate, and not only an exchange of photos with an agent, is needed to assess whether surgery is suitable. An assessment by the anaesthetist should also be planned.",
          "Make sure you fully understand the explanations, the consent form and the aftercare instructions. Ask for written documents in English and for a medical interpreter if needed.",
        ],
      },
      {
        heading: "Plan your stay and the journey home",
        paragraphs: [
          "After surgery, long flights and long car or coach journeys increase the risk of deep vein thrombosis (DVT) and pulmonary embolism. The risk is higher after body surgery such as a tummy tuck.",
          "How long to wait before flying depends on the procedure and your health; UK professional bodies generally advise waiting at least several days, and longer after some procedures. Agree this with the surgeon before booking flights, and allow extra time in case of complications. Compression stockings, keeping hydrated and moving during the journey are usual precautions, to be adapted on medical advice.",
        ],
      },
      {
        heading: "Arrange aftercare and complication management",
        paragraphs: [
          "Complications can appear after you get home: infection, haematoma, wound breakdown, seroma after a tummy tuck, or a problem with a breast implant. Ask who will provide follow-up, how to contact the surgeon, and whether revision surgery is offered locally and on what terms (travel, accommodation and surgical costs).",
          "If you develop an urgent problem in the UK, the NHS will treat you. A UK surgeon or the NHS is not obliged to take over routine follow-up or carry out corrective cosmetic surgery after an operation done abroad.",
        ],
      },
      {
        heading: "Know the limits of health cover",
        paragraphs: [
          "The UK Global Health Insurance Card (GHIC), or a valid UK European Health Insurance Card (EHIC), covers medically necessary state healthcare during a temporary stay in the EU and some other countries. It does not cover travelling abroad specifically for treatment, and cosmetic surgery is not covered.",
          "The S2 route for planned treatment in the EU, Switzerland and some other countries only applies to treatment that would be available on the NHS and is approved in advance; cosmetic surgery is not eligible. Check whether your travel insurance excludes complications of elective surgery: many policies do.",
        ],
      },
      {
        heading: "Collect your documents before you leave",
        paragraphs: [
          "Before travelling home, ask for the operation note, the anaesthetic record, your prescriptions, wound-care instructions and, after breast augmentation, the implant details (manufacturer, model and batch or lot number). Any doctor who sees you later will need them.",
          "Let your GP know about your plans and your date of return.",
        ],
      },
      {
        heading: "A realistic length of stay for each procedure",
        paragraphs: [
          "Agree how long to stay with the surgeon before booking, based on the procedure, your health and the length of the journey home. The orders of magnitude below are commonly cited as a rough guide only; they do not replace your surgeon's advice and should be extended if there is a complication or if several procedures are combined.",
          "Allow time before surgery too: a face-to-face consultation with the surgeon, an anaesthetic assessment and any tests, usually at least one to two days before the operation.",
        ],
        bullets: [
          "Eyelid surgery, ear correction (otoplasty): a check and stitch removal are often planned towards the end of the first week; otherwise, arrange stitch removal at home before you go.",
          "Rhinoplasty: the splint usually comes off after about a week, so staying that long makes the first check easier.",
          "Breast augmentation, breast uplift, breast reduction, gynaecomastia surgery, limited liposuction: a stay of at least a week before flying is often suggested.",
          "Tummy tuck, facelift, extensive liposuction, buttock fat transfer or combined procedures: a longer stay, in the region of ten days to two weeks, is often suggested.",
          "In every case: build in a few spare days and book a flexible ticket.",
        ],
      },
      {
        heading: "The flight home and the risk of blood clots",
        paragraphs: [
          "Surgery, reduced mobility and several hours sitting down add up to a higher risk of deep vein thrombosis (DVT) and pulmonary embolism. The risk is greater after long or body procedures (tummy tuck, extensive liposuction, combined operations).",
          "Tell the surgeon and anaesthetist about any risk factor: the combined contraceptive pill or HRT, smoking, being overweight, a personal or family history of clots, or a bleeding or clotting disorder. Preventive blood-thinning injections may be prescribed; ask for a prescription and a letter so you can carry them in your hand luggage.",
        ],
        bullets: [
          "Properly fitted compression stockings, on medical advice.",
          "Walk for a few minutes regularly and flex your ankles while seated.",
          "Drink water regularly and avoid alcohol.",
          "Choose an aisle seat if you can.",
          "Breathlessness, chest pain or calf pain during or after the flight: tell the cabin crew, or call 999 once you land.",
        ],
      },
      {
        heading: "Insurance and unexpected costs",
        paragraphs: [
          "Many travel insurance policies exclude treatment related to planned surgery. Read the terms before you travel and ask the insurer to confirm in writing, naming the procedure.",
          "Some clinics and insurers sell specific cosmetic surgery complications cover. Check what it really includes: corrective surgery abroad or in the UK, travel and accommodation, repatriation, how long cover lasts after the operation, and exclusions (dissatisfaction with the outcome, smoking, not following instructions).",
        ],
        bullets: [
          "Extra hotel nights and meals if your return is delayed.",
          "Changing your return flight, and possibly a companion's.",
          "Compression garments, dressings and medicines to buy at home.",
          "Private follow-up appointments or nursing care in the UK.",
          "Another trip if corrective surgery has to be done abroad.",
        ],
      },
      {
        heading: "Follow-up once you are home",
        paragraphs: [
          "Arrange follow-up before you leave. Your GP practice may not be able to provide routine aftercare such as dressings or stitch removal after private surgery, so ask in advance and, if needed, book a private nurse or clinic. Agree with the surgeon how you will contact them (secure messaging, phone) and when remote check-ups will take place.",
          "A UK surgeon may agree to see you privately for an opinion, but is not obliged to take over your care. Corrective cosmetic surgery after an operation abroad is not usually funded by the NHS.",
        ],
        bullets: [
          "Operation note and anaesthetic record, in English if possible.",
          "Discharge letter with instructions, the date for stitch removal and how long to wear compression garments.",
          "Prescriptions, including any blood-thinning injections and how long to continue them.",
          "Implant details after breast augmentation (manufacturer, model, batch or lot number).",
          "Direct contact details for the surgeon and clinic, and itemised invoices.",
        ],
      },
    ],
    warningSigns: [
      "An all-inclusive package sold by an agent with no prior consultation with the surgeon.",
      "The surgeon cannot be checked on an official register in that country.",
      "Surgery is scheduled for the day after you arrive, with no time to reflect.",
      "Your return flight is booked very soon after the operation.",
      "Several major procedures are offered in one session to shorten your stay.",
      "No medical records are provided when you are discharged.",
      "There is no plan for complications after you return home.",
      "Full payment is required upfront by bank transfer, with no written contract.",
      "Documents are only provided in a language you do not understand.",
      "The insurance you are sold excludes the very procedure you are having, and nobody tells you.",
    ],
    resources: [
      { label: "NHS – cosmetic surgery abroad", url: "https://www.nhs.uk" },
      { label: "GOV.UK – foreign travel advice and healthcare abroad", url: "https://www.gov.uk" },
      { label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)", url: "https://www.bapras.org.uk" },
      { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" },
      { label: "Royal College of Surgeons of England", url: "https://www.rcseng.ac.uk" },
      { label: "Citizens Advice", url: "https://www.citizensadvice.org.uk" },
      { label: "Medicines and Healthcare products Regulatory Agency (MHRA)", url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency" },
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
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  {
    id: "preparing-consultation",
    locale: "en-gb",
    slug: "preparing-for-your-consultation",
    title: "Preparing for your cosmetic surgery consultation",
    summary:
      "Questions to ask, medical history, photos and the anaesthetic assessment: how to prepare for your first cosmetic surgery consultation.",
    answer:
      "A well-prepared consultation helps you get clear answers and make an informed decision. Write down what you hope for, your medical history and your medicines, prepare questions about the technique, risks, recovery and cost, and consider bringing someone with you. Before surgery under general anaesthetic you will also have a pre-operative assessment with the anaesthetic team.",
    steps: [
      {
        heading: "Be clear about what you want",
        paragraphs: [
          "Describe in your own words what bothers you and what you hope the procedure will change. The surgeon will assess whether your expectations are achievable and explain the limits of surgery.",
          "Example photos can help explain an idea, but no surgeon can reproduce the outcome achieved on someone else: every body is different.",
        ],
      },
      {
        heading: "Gather your medical history",
        paragraphs: [
          "The surgeon needs complete information to assess your risks. Prepare a written list and bring any relevant letters or reports. You can ask your GP practice for a summary of your records.",
        ],
        bullets: [
          "Long-term conditions (diabetes, high blood pressure, bleeding disorders, autoimmune conditions).",
          "Current medicines, including blood thinners, aspirin, hormonal contraception or HRT, supplements and herbal remedies.",
          "Known allergies, including to medicines, latex or dressings.",
          "Previous operations and anaesthetics, and any complications.",
          "Smoking or vaping, alcohol, recent weight changes, plans for pregnancy.",
          "Personal or family history of DVT or pulmonary embolism.",
          "Any history of mental health conditions, which can be discussed in confidence.",
        ],
      },
      {
        heading: "Prepare your questions",
        paragraphs: [
          "It is easy to forget a question once you are in the room. A written list helps you cover the essentials and note the answers.",
        ],
        bullets: [
          "Are you on the GMC Specialist Register, and how often do you perform this procedure?",
          "Which technique do you suggest for me, and why?",
          "What are the common risks, and the serious ones even if rare?",
          "How long is the recovery and time off work?",
          "Where will the operation take place, and how long will I stay in?",
          "What happens if there is a complication or I am unhappy with the outcome? Is revision surgery charged?",
          "What are the alternatives, including not having surgery?",
        ],
      },
      {
        heading: "Medical photographs",
        paragraphs: [
          "The surgeon will usually take photographs of the area for your medical record. They are used to plan surgery and track progress. You can ask how they are stored and who can see them; your written consent is needed for any other use.",
          "For rhinoplasty, front and side views of the face are usual; for a tummy tuck or breast augmentation, photographs of the torso.",
        ],
      },
      {
        heading: "The anaesthetic assessment",
        paragraphs: [
          "Before planned surgery you will have a pre-operative assessment, often with a nurse and, where needed, an anaesthetist. It checks your fitness for anaesthesia, chooses the appropriate technique and gives instructions (fasting, stopping certain medicines, stopping smoking).",
          "Bring the same list of medicines and medical history, and any recent test results.",
        ],
      },
      {
        heading: "Bring someone and take your time",
        paragraphs: [
          "A trusted person can help you remember information and ask questions you might not think of. You can also take notes.",
          "You do not have to decide anything on the day. There is no statutory cooling-off period in the UK, but professional standards recommend at least two weeks between the consultation and agreeing to surgery. You can ask for a second consultation before deciding.",
        ],
      },
      {
        heading: "Detailed questions, by topic",
        paragraphs: [
          "Alongside the general questions, these more detailed ones help you understand what to expect in practice. Pick the ones that apply to you.",
        ],
        bullets: [
          "Suitability: what about my anatomy makes this procedure suitable, or limits what it can achieve?",
          "Technique: where will the scars be, how long will they be, and how long will they take to fade?",
          "Anaesthesia: general anaesthetic, local, or local with sedation? Day case or overnight stay?",
          "Risks: which complications do you see most often with this procedure, and how do you manage them?",
          "Recovery: when can I drive, work, lift things or a child, and exercise? How long will I wear a compression garment?",
          "Longer term: when will the outcome settle, and how might it change with age, pregnancy or weight change?",
          "Aftercare: how many follow-up appointments are included, and who do I call at night or at weekends?",
          "Cost: what is not included in the quote? What are the terms if revision surgery is needed?",
        ],
      },
      {
        heading: "Questions for particular procedures",
        paragraphs: [
          "Some procedures raise specific questions that are worth preparing in advance.",
        ],
        bullets: [
          "Breast augmentation: which type and make of implant, what monitoring is advised, what is the risk of BIA-ALCL (a rare lymphoma linked to implants), and how long might the implants last?",
          "Breast uplift, breast reduction: how might it affect breastfeeding and nipple sensation? Could I meet NHS criteria in my area?",
          "Gynaecomastia: has a possible medical or medicine-related cause been looked for? How much is gland and how much is fat?",
          "Eyelid surgery: do I need an eye test first? What is the risk of dry eyes or eyelids not closing fully?",
          "Facelift: where will the scars run around the ears? What is the risk to the facial nerves?",
          "Liposuction, fat transfer: what volume is planned? How much of the transferred fat may be reabsorbed? Will more than one session be needed?",
          "Ear correction (otoplasty): how long will I wear a headband, during the day and at night?",
        ],
      },
      {
        heading: "What to bring",
        paragraphs: [
          "Get a folder ready the day before. Anything that tells the surgeon about your health makes it less likely that something is missed.",
        ],
        bullets: [
          "Photo ID.",
          "A list of your medicines and doses, or your repeat prescription slip; the NHS App can show your medicines and some of your record.",
          "Letters or operation notes from previous surgery and anaesthetics.",
          "Recent blood test results and, for breast surgery, any recent mammogram or ultrasound report.",
          "Your implant details if you already have breast implants.",
          "A letter from your GP or specialist if a health condition is being treated.",
          "Your list of questions and something to note the answers.",
        ],
      },
      {
        heading: "What you should leave with",
        paragraphs: [
          "At the end of the consultation, check that you have what you need to think it over at home, without relying on memory.",
        ],
        bullets: [
          "A written, dated quote listing what is included.",
          "Written information about the procedure, recovery and risks.",
          "The consent form to read at home, rather than sign on the spot.",
          "Contact details for questions that occur to you later.",
          "Details of the pre-operative assessment and, ideally, a second consultation before you commit.",
        ],
      },
    ],
    warningSigns: [
      "The consultation lasts a few minutes and includes no examination.",
      "Questions about risks get vague or reassuring answers without detail.",
      "You are pressed to sign or set a date on the day.",
      "Nobody asks about your medical history or medicines.",
      "You only meet a sales adviser or coordinator, not the surgeon.",
      "The outcome is presented as certain using other patients' photos.",
      "You leave the consultation with nothing in writing.",
    ],
    resources: [
      { label: "NHS – cosmetic procedures: questions to ask", url: "https://www.nhs.uk" },
      { label: "General Medical Council – check a doctor's registration", url: "https://www.gmc-uk.org" },
      { label: "Royal College of Surgeons of England – cosmetic surgery", url: "https://www.rcseng.ac.uk" },
      { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" },
      { label: "Care Quality Commission (CQC)", url: "https://www.cqc.org.uk" },
      { label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)", url: "https://www.bapras.org.uk" },
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
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  {
    id: "quote-and-cooling-off",
    locale: "en-gb",
    slug: "quotes-and-cooling-off",
    title: "Quotes and cooling-off periods for cosmetic surgery",
    summary:
      "What a written quote should include, the recommended two-week cooling-off period, deposits, cancellation and care with finance in the UK.",
    answer:
      "In the UK there is no statutory waiting period before cosmetic surgery, but professional standards recommend a cooling-off period of at least two weeks between the consultation and agreeing to go ahead. Ask for a written quote listing everything that is included before you commit. Read the deposit and cancellation terms carefully, and do not let a finance offer or a deadline make the decision for you.",
    steps: [
      {
        heading: "What the quote should include",
        paragraphs: [
          "Unlike in some other countries, UK law does not set out the content of a cosmetic surgery quote. A clear written quote nonetheless lets you see who will operate, what will be done, where, and at what total cost.",
        ],
        bullets: [
          "Name and GMC number of the surgeon and, where relevant, the anaesthetist.",
          "A precise description of the procedure and technique.",
          "Type of anaesthetic and name of the hospital or clinic.",
          "Breakdown of surgeon's and anaesthetist's fees, hospital stay, implants, garments and medicines.",
          "Follow-up appointments included, and the cost of any revision surgery.",
          "Total price, date of the quote and how long it is valid.",
        ],
      },
      {
        heading: "The recommended cooling-off period",
        paragraphs: [
          "Professional standards for cosmetic surgery recommend at least two weeks between the consultation and the decision to go ahead, so that you have time to reflect. GMC guidance for doctors who offer cosmetic interventions also says patients should be given time to consider the information before deciding.",
          "Use this time to reread what you were given, ask follow-up questions, get another opinion if you wish and plan your recovery (time off work, help at home, childcare).",
        ],
      },
      {
        heading: "Deposits and payments",
        paragraphs: [
          "Some providers ask for a deposit to book a date. Before paying anything beyond the consultation fee, check in writing whether it is refundable, in what circumstances and within what time.",
          "Be wary of a deposit requested on the day of the first consultation, or of a discount that only applies if you pay quickly. Cosmetic surgery is not usually available on the NHS; if part of a procedure may be clinically needed (for example breathing problems with the nose), discuss NHS referral with your GP.",
        ],
      },
      {
        heading: "Cancelling or postponing",
        paragraphs: [
          "Check the cancellation and rescheduling terms before you sign. If you agreed the contract online, by phone or away from the provider's premises, consumer law may give you a 14-day right to cancel; Citizens Advice and GOV.UK explain how consumer rights apply.",
          "If your health changes (infection, fever, a new condition, pregnancy), tell the surgeon: surgery may need to be postponed for your safety.",
        ],
      },
      {
        heading: "Taking care with finance",
        paragraphs: [
          "A loan or credit agreement commits you for months or years, however your recovery goes. Check the annual percentage rate (APR), the total amount repayable and the monthly payments, and check that the lender is authorised by the Financial Conduct Authority.",
          "Regulated credit agreements usually give you a 14-day right to withdraw. Be cautious about finance arranged on the spot by the clinic or an agent, and do not let a credit deal speed up your decision.",
        ],
      },
      {
        heading: "Keep everything in writing",
        paragraphs: [
          "Keep the signed quote, the information leaflets, the consent form and all correspondence. They will be useful if there is a question about billing or a complication. If a complaint about an independent provider cannot be resolved directly, the provider's complaints procedure should explain the next step, which may be the Independent Sector Complaints Adjudication Service (ISCAS) where the provider subscribes to it.",
          "The same points apply to every cosmetic procedure, whether on the face, the body or the breasts.",
        ],
      },
      {
        heading: "What a clear quote looks like",
        paragraphs: [
          "A well-built quote can be read line by line without verbal explanation. These are the headings you would expect to see; the anaesthetist sometimes bills separately, in which case ask for their quote too.",
        ],
        bullets: [
          "Who: surgeon (name, GMC number), anaesthetist, hospital or clinic (name, address).",
          "What: name of the procedure, area(s) treated and planned technique.",
          "Surgeon's fee and anaesthetist's fee, each on its own line.",
          "Hospital charges: theatre, recovery, room, day case or number of nights.",
          "Devices and supplies: implants (make, model), compression garment if supplied.",
          "Aftercare: number of follow-up appointments included and over what period.",
          "Revision policy: what is charged if further surgery is needed, and for how long the policy applies.",
          "Total price, date issued, how long it is valid, and the deposit and cancellation terms.",
        ],
      },
      {
        heading: "Extra costs that are easy to overlook",
        paragraphs: [
          "Some costs do not appear on the surgeon's quote because they are not the surgeon's to charge. Ask for a list so you can judge the real cost.",
        ],
        bullets: [
          "Compression garment or post-surgery bra, if not supplied.",
          "Medicines, dressings and nursing care at home.",
          "Pre-operative tests (blood tests, scans) and the pre-assessment appointment.",
          "Massage or physiotherapy sometimes suggested after liposuction or a tummy tuck.",
          "Travel, accommodation and a companion if the hospital is far away.",
          "Time off work: check with your employer whether sick pay applies after elective cosmetic surgery.",
          "Possible revision surgery: hospital and anaesthetic fees are often charged even when the surgeon waives their own fee.",
        ],
      },
      {
        heading: "Deposits: what to check",
        paragraphs: [
          "If you are asked for a deposit to book a date, get the terms in writing: how much, when it becomes non-refundable and what happens if the surgeon postpones or you are unwell. Under the Consumer Rights Act 2015, contract terms must be fair; a provider can generally keep a reasonable amount to cover costs actually incurred, but a term allowing it to keep a disproportionate sum may be challenged. Citizens Advice can explain your position.",
          "Pay by a traceable method and always ask for a receipt. Paying by credit card can give extra protection in some circumstances under section 75 of the Consumer Credit Act.",
        ],
      },
      {
        heading: "A typical timeline, from quote to surgery",
        paragraphs: [
          "This shows the usual sequence; your surgeon may suggest a longer interval, and you can always ask for one.",
        ],
        bullets: [
          "Day 0: first consultation with the surgeon. You leave with written information and a quote; only the consultation fee is paid.",
          "Weeks 1 to 2: reread the documents, send questions in writing, get a second opinion if you wish, plan your recovery.",
          "After at least two weeks: second consultation with the surgeon if offered, then a decision and signature of consent.",
          "A few days before: pre-operative assessment, reminder of instructions (fasting, stopping smoking, medicines to pause), confirming who will take you home.",
          "On the day: you can still change your mind; the financial consequences are those set out in writing.",
        ],
      },
    ],
    warningSigns: [
      "A non-refundable deposit is requested at the first consultation.",
      "The quote does not break down fees, anaesthesia or hospital costs.",
      "The quote has no date or does not name the hospital.",
      "A surgery date less than two weeks after the consultation is pushed on you.",
      "A discount is tied to deciding or paying quickly.",
      "Finance is offered before the consultation has even ended.",
      "The quote lists costs 'to be confirmed' without detail.",
      "You are not allowed to take the quote home to read it.",
    ],
    resources: [
      { label: "NHS – cosmetic procedures", url: "https://www.nhs.uk" },
      { label: "General Medical Council – guidance for doctors offering cosmetic interventions", url: "https://www.gmc-uk.org" },
      { label: "Royal College of Surgeons of England – professional standards for cosmetic surgery", url: "https://www.rcseng.ac.uk" },
      { label: "GOV.UK – consumer rights and credit", url: "https://www.gov.uk" },
      { label: "Citizens Advice", url: "https://www.citizensadvice.org.uk" },
      { label: "Financial Conduct Authority (FCA) – check a lender", url: "https://www.fca.org.uk" },
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
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  {
    id: "warning-signs-after-surgery",
    locale: "en-gb",
    slug: "warning-signs-after-surgery",
    title: "Warning signs after cosmetic surgery",
    summary:
      "Fever, worsening pain, swelling on one side, calf pain, breathlessness: the signs after surgery that mean you should get help without waiting.",
    answer:
      "Some effects are expected after surgery, such as swelling, bruising and discomfort that gradually eases. Other signs mean you should contact your surgeon promptly: fever, pain that is getting worse instead of better, marked swelling on one side, or discharge from the wound. Sudden breathlessness, chest pain or collapse are emergencies: call 999. If you cannot reach your surgeon and it is not an emergency, call NHS 111.",
    steps: [
      {
        heading: "Expected effects versus warning signs",
        paragraphs: [
          "In the days after surgery, swelling, bruising, tightness and pain controlled by the prescribed painkillers are usual. They should gradually improve.",
          "A symptom that is getting worse, starts suddenly or does not match what your surgeon described should prompt a call, even outside clinic hours.",
        ],
      },
      {
        heading: "Signs that mean calling 999",
        paragraphs: [
          "After surgery there is a risk of deep vein thrombosis (DVT) and pulmonary embolism, particularly after body surgery such as a tummy tuck. Some signs are life-threatening emergencies.",
        ],
        bullets: [
          "Sudden breathlessness or difficulty breathing.",
          "Chest pain, especially if it is worse when you breathe in.",
          "Coughing up blood, fainting or collapse.",
          "Heavy bleeding that does not stop.",
          "An allergic reaction with swelling of the face, lips or throat.",
        ],
      },
      {
        heading: "Signs that mean contacting your surgeon promptly",
        paragraphs: [
          "These signs are not always serious, but they need medical advice the same day. If you cannot reach your surgeon or the hospital, call NHS 111, or 999 if it feels like an emergency.",
        ],
        bullets: [
          "A temperature of 38°C or above, or shivering.",
          "Pain that is getting worse, or is no longer relieved by your prescribed medicines.",
          "Marked, hard or tense swelling on one side, for example one breast after breast augmentation: this may be a haematoma.",
          "Pain, redness or swelling in one calf.",
          "Spreading redness, heat, or pus or foul-smelling discharge from the wound.",
          "A wound that opens, or skin that darkens or changes colour.",
          "A nosebleed that will not stop after rhinoplasty.",
        ],
      },
      {
        heading: "Who to call",
        paragraphs: [
          "Your surgeon or hospital should give you a number that can be reached at any time. Keep it with you and save it in your phone before the operation.",
          "In an emergency, call 999. If it is not an emergency and you cannot reach your surgeon, NHS 111 can advise you by phone or online. Your GP can also examine you. The NHS will treat urgent complications of private or overseas cosmetic surgery.",
        ],
      },
      {
        heading: "Keep your documents to hand",
        paragraphs: [
          "A doctor who sees you urgently needs to know what was done. Keep the paperwork from your operation together and easy to find.",
        ],
        bullets: [
          "Operation note and anaesthetic record.",
          "Prescriptions and a list of medicines you are taking.",
          "Implant details (manufacturer, model, batch or lot number) after breast augmentation.",
          "Contact details for your surgeon and hospital.",
        ],
      },
      {
        heading: "Reporting a problem",
        paragraphs: [
          "Problems with medical devices such as breast implants can be reported by patients as well as health professionals to the Medicines and Healthcare products Regulatory Agency (MHRA) through its Yellow Card scheme. In England, breast implant operations should be recorded on the national Breast and Cosmetic Implant Registry, which helps trace patients if a safety issue arises.",
          "Attend your planned follow-up appointments even if all seems well: they help spot problems early.",
        ],
      },
      {
        heading: "In the first few hours",
        paragraphs: [
          "Most early complications, such as a haematoma (a collection of blood), appear in the first 24 to 48 hours. That is why you are asked not to be alone on the first night after day surgery.",
        ],
        bullets: [
          "Bleeding that soaks through the dressing or quickly fills a drain.",
          "Rapid, tense, painful swelling on one side: face or neck after a facelift, a breast after breast surgery, the chest after gynaecomastia surgery.",
          "Loss of vision, severe eye pain, or an eye that swells and becomes hard after eyelid surgery: rare but urgent, call 999.",
          "Severe pain not relieved by the prescribed medicines.",
          "Nausea or vomiting that stops you drinking or taking your medicines.",
          "Being unable to pass urine, unusual drowsiness or confusion.",
        ],
      },
      {
        heading: "In the first few days",
        paragraphs: [
          "From around day two to day ten, infection, wound-healing problems and blood clots are the main things to watch for.",
        ],
        bullets: [
          "Fever, shivering, redness spreading around a wound, cloudy or foul-smelling discharge.",
          "Pain or swelling in one calf, or breathlessness: possible DVT or pulmonary embolism.",
          "Skin turning purple, grey or black, especially after a tummy tuck, facelift or breast surgery, and particularly in people who smoke.",
          "Breathlessness, confusion or a pinpoint red rash after liposuction or fat transfer: rare, call 999.",
          "Increasing pain in one ear under the headband after ear correction.",
          "A wound that opens or a stitch working its way out.",
        ],
      },
      {
        heading: "In the following weeks and months",
        paragraphs: [
          "Some signs appear later. They are rarely emergencies but are a reason to see your surgeon.",
        ],
        bullets: [
          "Swelling that comes back, fluctuates or feels like fluid under the skin (seroma), after a tummy tuck or liposuction.",
          "A breast that hardens, changes shape or swells months or years after implant surgery: this needs to be checked to find the cause.",
          "A scar that thickens, stays red and itches beyond a few months.",
          "Worsening asymmetry, lumps or dents after liposuction.",
          "Dry, irritated eyes or an eyelid that does not close fully after eyelid surgery.",
          "Persistent low mood, overwhelming regret or withdrawing from others: talk to your surgeon or GP.",
        ],
      },
      {
        heading: "What to note before you call",
        paragraphs: [
          "A few precise details help the doctor assess the situation faster, especially over the phone.",
        ],
        bullets: [
          "Date and type of operation, and the surgeon's name.",
          "When the symptom started and how it has changed since.",
          "Your temperature, which side is affected and how the wound looks.",
          "How much fluid has collected, and its colour, if you have a drain.",
          "Medicines you have taken and when you last took them.",
          "A photo of the area, if your surgeon has given you a secure way to send it.",
        ],
      },
    ],
    warningSigns: [
      "Sudden breathlessness or chest pain: call 999.",
      "A temperature of 38°C or above, or shivering.",
      "Pain that is getting worse instead of better.",
      "Marked, hard swelling on one side.",
      "Pain, redness or swelling in one calf.",
      "Pus, spreading redness or a wound that opens.",
      "Heavy or persistent bleeding.",
      "Loss of vision or severe eye pain after eyelid surgery: call 999.",
      "Rapid swelling on one side of the face or neck after a facelift.",
      "Confusion, unusual drowsiness or breathlessness after liposuction or fat transfer.",
    ],
    resources: [
      { label: "NHS 111 and NHS health advice", url: "https://www.nhs.uk" },
      { label: "GOV.UK – MHRA and reporting problems with medical devices", url: "https://www.gov.uk" },
      { label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)", url: "https://www.bapras.org.uk" },
      { label: "Care Quality Commission (CQC)", url: "https://www.cqc.org.uk" },
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
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
  {
    id: "right-time",
    locale: "en-gb",
    slug: "is-it-the-right-time",
    title: "Cosmetic surgery: is it the right time?",
    summary:
      "Your own motivation, outside pressure, life events, stable weight, pregnancy plans and body dysmorphic disorder: questions to ask yourself first.",
    answer:
      "The right time for cosmetic surgery is when the wish comes from you, has been stable for a long time, and your health, weight and personal circumstances allow a calm recovery. A decision made under pressure from someone else, soon after a difficult event or before a planned pregnancy is worth postponing. An intense preoccupation with a minor or invisible flaw may be a sign of body dysmorphic disorder (BDD), for which help is available. This platform is for adults aged 18 and over only.",
    steps: [
      {
        heading: "Look at your motivation",
        paragraphs: [
          "A long-standing, specific wish that comes from you (a concern about one area of the body) is a sounder starting point than a wish that appeared recently or depends on how others see you.",
          "Surgery can change a shape; it does not resolve relationship difficulties, a general loss of confidence or problems at work. It helps to ask yourself what exactly you expect the procedure to change.",
        ],
        bullets: [
          "How long has this concern been with you?",
          "Would you want this if nobody else mentioned it?",
          "What, specifically, do you expect from the procedure?",
        ],
      },
      {
        heading: "Spot outside pressure",
        paragraphs: [
          "Comments from a partner, friends or family, comparison with filtered images on social media and marketing messages can all push you towards a decision you may regret.",
          "A careful surgeon will want to know who the operation is for and why. They may decline to operate if they think the wish does not come from you.",
        ],
      },
      {
        heading: "Consider what is happening in your life",
        paragraphs: [
          "A break-up, bereavement, job loss or a period of intense stress is not a good time for this kind of decision. It is usually advisable to wait until things have settled.",
          "Think about practical arrangements too: time off work, help with daily tasks, childcare, and not being able to lift heavy things after a tummy tuck.",
        ],
      },
      {
        heading: "Weight, pregnancy and breastfeeding",
        paragraphs: [
          "A stable weight for several months is usually advised before body surgery: a large change in weight after a tummy tuck can alter the outcome.",
          "Pregnancy after a tummy tuck can stretch the abdominal wall again, so surgeons often advise waiting until you have completed your family. After breast augmentation, pregnancy and breastfeeding change breast size and shape; discuss breastfeeding with implants with your surgeon.",
        ],
      },
      {
        heading: "Body dysmorphic disorder: recognising the signs",
        paragraphs: [
          "Body dysmorphic disorder (BDD) is a mental health condition in which a person spends a lot of time worrying about a flaw in their appearance that others often cannot see or consider minor. It is not vanity, and it can be treated.",
          "For people with BDD, surgery usually does not relieve the distress, and the worry often moves to another part of the body. A surgeon may raise this with you and suggest talking to a professional.",
        ],
        bullets: [
          "Thoughts about appearance taking up hours each day.",
          "Repeatedly checking mirrors, or avoiding them altogether.",
          "Avoiding going out, photographs or social situations.",
          "Seeking repeated procedures without lasting satisfaction.",
        ],
      },
      {
        heading: "Where to get help",
        paragraphs: [
          "Your GP can listen and refer you for assessment and treatment. In England you can also refer yourself to NHS Talking Therapies for some common mental health problems, without seeing a GP first.",
          "If you are in distress or having thoughts of suicide, you can call Samaritans free on 116 123, at any time. If you feel at immediate risk, call 999 or go to A&E.",
        ],
      },
      {
        heading: "Age and maturity",
        paragraphs: [
          "This platform is for adults aged 18 and over only. Some procedures, such as rhinoplasty, also require facial growth to be complete.",
          "Postponing a decision is never a failure. A procedure you still want after several months of reflection rests on firmer ground.",
        ],
      },
      {
        heading: "Life situations, case by case",
        paragraphs: [
          "Some periods are not a good time, either because your body has not settled or because the decision may be made for the wrong reasons. These general pointers are to discuss with your surgeon.",
        ],
        bullets: [
          "Pregnancy or breastfeeding: cosmetic surgery is postponed. After pregnancy, many surgeons advise waiting several months after you stop breastfeeding for the breasts and abdomen to settle.",
          "Losing weight, through diet or after weight-loss (bariatric) surgery: surgeons usually advise waiting until your weight has been stable for several months, which often means a year or more after bariatric surgery.",
          "A break-up, bereavement or job loss: waiting until things have settled lets you check the wish is still there.",
          "A health condition that is not well controlled (diabetes, high blood pressure), or smoking or vaping: postponing while this is addressed reduces risk.",
          "A fixed-date event (wedding, holiday, new job): allow plenty of time, as swelling and bruising can last several weeks and a complication can slow recovery.",
          "Summer and holidays: sun on scars and swimming are usually discouraged for several weeks.",
        ],
      },
      {
        heading: "Age, beyond turning 18",
        paragraphs: [
          "Being 18 or over is a condition for using this platform, but it is not the only age-related question. In young adults, some areas may still be changing: the shape of the nose, breast size, or gynaecomastia that began in adolescence, which often settles on its own and is worth a medical assessment. Ear correction is often carried out in childhood, but it remains possible in adulthood.",
          "Later in life, general health matters more than age itself: other conditions, current medicines, and how well you are likely to cope with anaesthesia and recovery. The pre-operative assessment takes this into account.",
        ],
      },
      {
        heading: "Give yourself a decision timeline",
        paragraphs: [
          "It can help to set yourself a few steps before deciding: write down what bothers you, revisit it a few months later, have a consultation, then let the cooling-off period run without any date pressure.",
          "You may feel the time is right when most of the following are true.",
        ],
        bullets: [
          "The wish has been stable for a long time and comes from you.",
          "Your weight is stable and no pregnancy is planned in the coming months.",
          "Your health is well controlled and you can stop smoking if asked.",
          "Your recovery is planned: time off work, help at home, childcare.",
          "Paying for it will not put your finances under strain.",
          "You can explain in your own words what the procedure can and cannot change.",
        ],
      },
    ],
    warningSigns: [
      "The wish appeared after comments from a partner, friends or family.",
      "The decision closely follows a break-up, bereavement or crisis.",
      "Worry about a flaw takes up a large part of your day.",
      "You expect the procedure to change your life or your relationships.",
      "You are in the middle of losing a lot of weight or planning a pregnancy soon.",
      "You have already had several procedures without feeling satisfied.",
      "You want to fit the operation in just before a fixed-date event, with no margin.",
      "Paying for the procedure would put your finances under strain.",
    ],
    resources: [
      { label: "NHS – body dysmorphic disorder (BDD)", url: "https://www.nhs.uk" },
      { label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)", url: "https://www.bapras.org.uk" },
      { label: "Royal College of Surgeons of England – cosmetic surgery", url: "https://www.rcseng.ac.uk" },
      { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" },
      { label: "Samaritans – call 116 123", url: "https://www.samaritans.org" },
      { label: "Mind – mental health information", url: "https://www.mind.org.uk" },
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
    ],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-13",
  },
];
