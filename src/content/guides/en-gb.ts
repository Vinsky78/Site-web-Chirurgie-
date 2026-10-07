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
          "This guide applies to every procedure covered on the platform: rhinoplasty, tummy tuck (abdominoplasty) and breast augmentation.",
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
    ],
    resources: [
      { label: "General Medical Council – check a doctor's registration", url: "https://www.gmc-uk.org" },
      { label: "Care Quality Commission (CQC) – find and check a service", url: "https://www.cqc.org.uk" },
      { label: "NHS – cosmetic procedures", url: "https://www.nhs.uk" },
      { label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)", url: "https://www.bapras.org.uk" },
      { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" },
      { label: "Royal College of Surgeons of England", url: "https://www.rcseng.ac.uk" },
    ],
    interventions: ["rhinoplasty", "abdominoplasty", "breast-augmentation"],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
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
    ],
    warningSigns: [
      "An all-inclusive package sold by an agent with no prior consultation with the surgeon.",
      "The surgeon cannot be checked on an official register in that country.",
      "Surgery is scheduled for the day after you arrive, with no time to reflect.",
      "Your return flight is booked very soon after the operation.",
      "Several major procedures are offered in one session to shorten your stay.",
      "No medical records are provided when you are discharged.",
      "There is no plan for complications after you return home.",
    ],
    resources: [
      { label: "NHS – cosmetic surgery abroad", url: "https://www.nhs.uk" },
      { label: "GOV.UK – foreign travel advice and healthcare abroad", url: "https://www.gov.uk" },
      { label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)", url: "https://www.bapras.org.uk" },
      { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" },
      { label: "Royal College of Surgeons of England", url: "https://www.rcseng.ac.uk" },
    ],
    interventions: ["abdominoplasty", "breast-augmentation", "rhinoplasty"],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
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
    ],
    warningSigns: [
      "The consultation lasts a few minutes and includes no examination.",
      "Questions about risks get vague or reassuring answers without detail.",
      "You are pressed to sign or set a date on the day.",
      "Nobody asks about your medical history or medicines.",
      "You only meet a sales adviser or coordinator, not the surgeon.",
      "The outcome is presented as certain using other patients' photos.",
    ],
    resources: [
      { label: "NHS – cosmetic procedures: questions to ask", url: "https://www.nhs.uk" },
      { label: "General Medical Council – check a doctor's registration", url: "https://www.gmc-uk.org" },
      { label: "Royal College of Surgeons of England – cosmetic surgery", url: "https://www.rcseng.ac.uk" },
      { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" },
    ],
    interventions: ["rhinoplasty", "abdominoplasty", "breast-augmentation"],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
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
          "The same points apply to rhinoplasty, tummy tuck and breast augmentation.",
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
    ],
    resources: [
      { label: "NHS – cosmetic procedures", url: "https://www.nhs.uk" },
      { label: "General Medical Council – guidance for doctors offering cosmetic interventions", url: "https://www.gmc-uk.org" },
      { label: "Royal College of Surgeons of England – professional standards for cosmetic surgery", url: "https://www.rcseng.ac.uk" },
      { label: "GOV.UK – consumer rights and credit", url: "https://www.gov.uk" },
    ],
    interventions: ["rhinoplasty", "abdominoplasty", "breast-augmentation"],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
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
    ],
    warningSigns: [
      "Sudden breathlessness or chest pain: call 999.",
      "A temperature of 38°C or above, or shivering.",
      "Pain that is getting worse instead of better.",
      "Marked, hard swelling on one side.",
      "Pain, redness or swelling in one calf.",
      "Pus, spreading redness or a wound that opens.",
      "Heavy or persistent bleeding.",
    ],
    resources: [
      { label: "NHS 111 and NHS health advice", url: "https://www.nhs.uk" },
      { label: "GOV.UK – MHRA and reporting problems with medical devices", url: "https://www.gov.uk" },
      { label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)", url: "https://www.bapras.org.uk" },
      { label: "Care Quality Commission (CQC)", url: "https://www.cqc.org.uk" },
    ],
    interventions: ["abdominoplasty", "breast-augmentation", "rhinoplasty"],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
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
    ],
    warningSigns: [
      "The wish appeared after comments from a partner, friends or family.",
      "The decision closely follows a break-up, bereavement or crisis.",
      "Worry about a flaw takes up a large part of your day.",
      "You expect the procedure to change your life or your relationships.",
      "You are in the middle of losing a lot of weight or planning a pregnancy soon.",
      "You have already had several procedures without feeling satisfied.",
    ],
    resources: [
      { label: "NHS – body dysmorphic disorder (BDD)", url: "https://www.nhs.uk" },
      { label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)", url: "https://www.bapras.org.uk" },
      { label: "Royal College of Surgeons of England – cosmetic surgery", url: "https://www.rcseng.ac.uk" },
      { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" },
    ],
    interventions: ["rhinoplasty", "abdominoplasty", "breast-augmentation"],
    medicalReview: { status: "draft" },
    updatedAt: "2026-10-07",
  },
];
