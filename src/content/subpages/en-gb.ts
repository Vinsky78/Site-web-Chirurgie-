import type { InterventionSubpage, Source } from "../types";

/**
 * United Kingdom sub-pages (en-gb). Market adaptation, not translation:
 * UK regulators (GMC, CQC, MHRA), NHS context and professional standards.
 * No price figures: no verified data. Status "draft" until reviewed by a
 * qualified surgeon.
 */

const NHS: Source = { label: "NHS: cosmetic procedures and surgery", url: "https://www.nhs.uk" };
const GMC: Source = {
  label: "General Medical Council: medical register and guidance for doctors who perform cosmetic interventions",
  url: "https://www.gmc-uk.org",
};
const CQC: Source = { label: "Care Quality Commission: find a registered hospital or clinic", url: "https://www.cqc.org.uk" };
const MHRA: Source = {
  label: "Medicines and Healthcare products Regulatory Agency (MHRA): medical devices and reporting",
  url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
};
const BAAPS: Source = { label: "British Association of Aesthetic Plastic Surgeons (BAAPS)", url: "https://baaps.org.uk" };
const BAPRAS: Source = {
  label: "British Association of Plastic, Reconstructive and Aesthetic Surgeons (BAPRAS)",
  url: "https://www.bapras.org.uk",
};
const RCS: Source = {
  label: "Royal College of Surgeons of England: professional standards for cosmetic surgery",
  url: "https://www.rcseng.ac.uk",
};
const BCIR: Source = { label: "Breast and Cosmetic Implant Registry (NHS)" };
const ASA: Source = { label: "Advertising Standards Authority: CAP Code", url: "https://www.asa.org.uk" };
const BDDF: Source = { label: "BDD Foundation", url: "https://bddfoundation.org" };

const COMMON = {
  locale: "en-gb",
  medicalReview: { status: "draft" },
  updatedAt: "2026-10-07",
} as const;

export const subpagesEnGb: InterventionSubpage[] = [
  /* ------------------------------------------------------------------ */
  /* RHINOPLASTY                                                          */
  /* ------------------------------------------------------------------ */
  {
    ...COMMON,
    interventionId: "rhinoplasty",
    kind: "risks",
    title: "Rhinoplasty risks",
    summary:
      "Common and rare complications of rhinoplasty, what is normal during healing, when to seek help and when revision surgery is considered.",
    answer:
      "Swelling, bruising and a blocked nose are expected after rhinoplasty and settle over weeks to months. Less common problems include bleeding, infection, breathing difficulty and a result that is uneven or not what you hoped for. Some people need revision surgery, which is usually not considered until the nose has healed for at least a year.",
    sections: [
      {
        heading: "Expected effects of healing",
        paragraphs: [
          "Almost everyone has swelling and bruising around the nose and eyes for the first one to two weeks. The nose usually feels blocked, and you may have a light bloodstained discharge for a few days.",
          "Swelling of the nasal tip settles slowly and can take 12 months or longer, particularly with thicker skin or after revision surgery. The shape you see in the first months is not the final result.",
        ],
      },
      {
        heading: "Less common complications",
        paragraphs: ["These happen to a minority of patients. Your surgeon should explain how often they see them in their own practice."],
        bullets: [
          "Nosebleeds, occasionally needing packing or a return to theatre.",
          "Infection, usually treated with antibiotics.",
          "Breathing difficulty that appears or persists, sometimes needing further treatment.",
          "Numbness of the nasal tip or upper front teeth, usually temporary.",
          "Asymmetry, irregularities you can feel or see, or a shape that does not match what was discussed.",
          "Visible small blood vessels or changes in skin texture.",
        ],
      },
      {
        heading: "Rare but serious complications",
        paragraphs: [
          "Rare complications include a hole in the septum (septal perforation), a change in sense of smell, a collection of blood in the septum (septal haematoma) that needs urgent drainage, and the general risks of a general anaesthetic, such as a reaction to medicines or a blood clot. Very rarely, injury to structures near the nose has been reported.",
        ],
      },
      {
        heading: "When to seek help",
        paragraphs: [
          "Contact your surgeon or the hospital's 24-hour number first: they know what was done and are responsible for your aftercare. If you cannot reach them, call NHS 111. Call 999 for an emergency.",
        ],
        bullets: [
          "Heavy bleeding that does not stop after 10 to 15 minutes of gentle pressure, sitting upright: seek urgent help.",
          "Fever, increasing redness, worsening pain or a foul-smelling discharge.",
          "A painful swelling inside the nose that blocks both sides.",
          "Changes in vision, severe headache or clear watery fluid draining from the nose: call 999.",
          "Breathlessness or chest pain: call 999.",
        ],
      },
      {
        heading: "Revision surgery",
        paragraphs: [
          "If the result is uneven or breathing is affected, a revision may be considered. Surgeons generally wait at least 12 months so that swelling has settled. Revision is often more complex than the first operation. Ask before surgery what your surgeon's policy is and whether revision costs would be covered.",
        ],
      },
      {
        heading: "Factors that increase risk",
        paragraphs: ["Discuss these openly at your consultation so they can be taken into account."],
        bullets: [
          "Smoking or vaping nicotine, which slows healing.",
          "Previous nasal surgery or injury.",
          "Blood-thinning medicines, some supplements and bleeding disorders.",
          "Thick or very thin nasal skin.",
          "Expectations that do not match what surgery can realistically do.",
        ],
      },
    ],
    sources: [NHS, BAAPS, BAPRAS, RCS, GMC],
  },
  {
    ...COMMON,
    interventionId: "rhinoplasty",
    kind: "cost",
    title: "How much does a rhinoplasty cost?",
    summary:
      "What a rhinoplasty quote in the UK should include, when the NHS may fund nasal surgery, and what happens to costs if complications occur.",
    answer:
      "The cost of a private rhinoplasty in the UK varies with the surgeon, the hospital, the complexity of the operation and what aftercare is included, so we do not publish price figures. Ask for a written quote that lists everything included. Cosmetic rhinoplasty is not usually available on the NHS; surgery for breathing problems may be, under local criteria.",
    sections: [
      {
        heading: "What a quote should include",
        paragraphs: [
          "A clear quote lets you compare like with like. Ask for it in writing and check what is excluded as well as what is included.",
        ],
        bullets: [
          "The surgeon's fee and the name of the surgeon who will operate.",
          "The anaesthetist's fee.",
          "Hospital fees: theatre time, overnight stay if needed, medicines and dressings.",
          "Pre-operative consultations and any tests.",
          "Splints, follow-up appointments and removal of stitches or packing.",
          "How long aftercare is included for, and what happens if you need to be readmitted.",
          "The revision policy: in which situations further surgery is included, and what you would still pay.",
        ],
      },
      {
        heading: "NHS funding",
        paragraphs: [
          "The NHS does not usually fund rhinoplasty for cosmetic reasons. Septoplasty or functional septorhinoplasty may be funded when there is a documented breathing problem, after a significant injury or for congenital conditions, but each local area sets its own criteria and approval is not automatic.",
          "If your main concern is breathing, start with your GP, who can refer you to an ENT specialist.",
        ],
      },
      {
        heading: "If complications occur",
        paragraphs: [
          "The NHS will treat emergencies, such as heavy bleeding or a serious infection, whoever performed the surgery. It will not usually fund revision of private cosmetic surgery to improve appearance. Check whether your package includes treatment of complications and whether the surgeon holds medical indemnity cover, which doctors in the UK are required to have.",
        ],
      },
      {
        heading: "Finance, discounts and packages",
        paragraphs: [
          "Be cautious about finance agreements arranged by the clinic: they can put pressure on you to commit before you have had time to reflect, and you remain liable for repayments even if you change your mind about the result. Read the terms and cancellation rights carefully.",
          "GMC guidance says doctors must not use time-limited discounts or offers of financial incentives to encourage people to have cosmetic procedures, and the CAP Code, enforced by the Advertising Standards Authority, restricts irresponsible advertising of cosmetic surgery. A deal that expires quickly is a reason to slow down.",
          "Low-cost packages abroad can leave you without local follow-up if problems arise after you return. Read our guide on having surgery abroad before booking.",
        ],
      },
    ],
    sources: [NHS, GMC, ASA, BAAPS, CQC],
  },
  {
    ...COMMON,
    interventionId: "rhinoplasty",
    kind: "recovery",
    title: "Recovery after rhinoplasty",
    summary:
      "Rhinoplasty recovery week by week: splint, swelling, return to work, exercise and flying, follow-up and warning signs to act on.",
    answer:
      "Most people wear a splint for about a week and return to desk work after 10 to 14 days, once the worst bruising has faded. Contact sport is usually avoided for around six weeks or longer. Swelling settles gradually and the final shape can take a year or more to appear.",
    sections: [
      {
        heading: "The first week",
        paragraphs: [
          "You may go home the same day or after one night. Expect a blocked nose, swelling and bruising around the eyes, and some discomfort that is usually controlled with simple painkillers prescribed or recommended by the hospital.",
        ],
        bullets: [
          "Sleep with your head raised on extra pillows.",
          "Avoid blowing your nose, bending over and straining.",
          "Sneeze with your mouth open.",
          "Do not take aspirin or anti-inflammatory medicines unless your surgeon agrees.",
          "The splint and any internal splints are usually removed at around one week.",
        ],
      },
      {
        heading: "Weeks two to six",
        paragraphs: [
          "Bruising fades over two to three weeks. Many people return to office work at 10 to 14 days; jobs with physical exertion may need longer. Light walking is encouraged from the start; more strenuous exercise is reintroduced gradually, as your surgeon advises.",
          "Glasses resting on the bridge of the nose may need to be avoided or supported for several weeks, especially if the nasal bones were moved.",
        ],
      },
      {
        heading: "Flying and driving",
        paragraphs: [
          "Surgeons usually advise avoiding flying for at least one to two weeks, because pressure changes can cause discomfort or bleeding. Ask before booking travel. Do not drive until you are off strong painkillers and can react quickly; check with your insurer.",
        ],
      },
      {
        heading: "Scars and the final result",
        paragraphs: [
          "With an open rhinoplasty there is a small scar across the skin between the nostrils, which usually fades well. Closed rhinoplasty leaves scars inside the nose only. Swelling of the tip can last 12 months or longer, and minor changes may continue beyond that.",
        ],
      },
      {
        heading: "Follow-up",
        paragraphs: [
          "You should have follow-up appointments with your surgeon or their team, usually at one week and again over the following months. Ask before surgery how long follow-up is included and who to contact out of hours.",
        ],
      },
      {
        heading: "Warning signs",
        paragraphs: ["Contact your surgeon or the hospital without delay, or NHS 111 if you cannot reach them. Call 999 in an emergency."],
        bullets: [
          "Bleeding that does not stop with pressure.",
          "Fever, spreading redness or worsening pain.",
          "Swelling inside the nose that blocks both sides.",
          "Changes in vision, severe headache, chest pain or breathlessness: call 999.",
        ],
      },
    ],
    sources: [NHS, BAAPS, BAPRAS, RCS],
  },
  {
    ...COMMON,
    interventionId: "rhinoplasty",
    kind: "decision",
    title: "Rhinoplasty: before you decide",
    summary:
      "Is rhinoplasty right for you? Timing, motivation, signs of body dysmorphic disorder, questions to ask your surgeon and the two-week cooling-off.",
    answer:
      "Rhinoplasty is a personal decision that is usually considered once facial growth is complete, and only from 18 for cosmetic reasons. It tends to suit people with a long-standing, specific concern who are doing it for themselves. Take time: UK professional standards recommend at least two weeks between consultation and agreeing to surgery, and a second opinion is always reasonable.",
    sections: [
      {
        heading: "Is it the right time?",
        paragraphs: [
          "The nose continues to develop into the late teens. Reputable surgeons in the UK do not perform cosmetic rhinoplasty on under-18s. Functional or reconstructive surgery in younger patients is a separate decision made with specialist teams.",
          "Avoid deciding during a period of upheaval, such as a bereavement or relationship breakdown, or just before an important event.",
        ],
      },
      {
        heading: "Your own motivation",
        paragraphs: [
          "Ask yourself what exactly bothers you, how long it has bothered you, and what you expect to change in your life afterwards. Surgery can change the shape of the nose; it cannot guarantee changes in confidence, relationships or work. A decision made because of pressure from a partner, friends or social media filters is more likely to lead to disappointment.",
        ],
      },
      {
        heading: "Body dysmorphic disorder",
        paragraphs: [
          "The nose is one of the features most often involved in body dysmorphic disorder (BDD), a mental health condition in which a person spends a lot of time worrying about flaws that others barely notice. Cosmetic surgery does not usually relieve BDD and may make distress worse.",
          "Possible signs include checking mirrors for long periods or avoiding them completely, comparing yourself constantly, hiding the feature, and the worry interfering with work, study or relationships. If this sounds familiar, speak to your GP. The NHS and the BDD Foundation provide information and support, and effective treatments exist. A surgeon may ask you questions to screen for BDD; this is good practice, not a judgement.",
        ],
      },
      {
        heading: "Questions to ask your surgeon",
        paragraphs: [],
        bullets: [
          "Are you on the GMC Specialist Register, and in which speciality (plastic surgery or ENT)?",
          "How many rhinoplasties do you perform each year, and how often do your patients need revision?",
          "Where will I be operated on, and is the hospital registered with the CQC (or the regulator in Scotland, Wales or Northern Ireland)?",
          "What can and cannot be changed in my case?",
          "Who looks after me if there is a problem at night or at the weekend?",
          "What is included in the quote, including revisions?",
        ],
      },
      {
        heading: "Cooling-off and second opinions",
        paragraphs: [
          "There is no statutory waiting period in UK law, but professional standards recommend a cooling-off period of at least two weeks between your consultation and agreeing to surgery. The consultation should be with the operating surgeon, not only with a sales adviser. You are free to seek a second opinion, and a surgeon who discourages this is a warning sign.",
        ],
      },
    ],
    sources: [NHS, BDDF, GMC, RCS, CQC],
  },
  {
    ...COMMON,
    interventionId: "rhinoplasty",
    kind: "alternatives",
    title: "Alternatives to rhinoplasty",
    summary:
      "Options other than rhinoplasty: dermal filler, septoplasty for breathing, make-up and doing nothing, with the limits and risks of each.",
    answer:
      "Depending on your concern, alternatives include dermal filler (non-surgical rhinoplasty), surgery only on the septum for breathing problems, camouflage with make-up, or choosing not to have treatment. Each has limits: filler cannot make a nose smaller and carries rare but serious risks. Doing nothing is a legitimate choice.",
    sections: [
      {
        heading: "Dermal filler (non-surgical rhinoplasty)",
        paragraphs: [
          "Hyaluronic acid filler can be injected to smooth a small bump, raise a low bridge or improve some irregularities. It cannot reduce the size of the nose, narrow it or correct breathing. The effect is temporary, usually lasting months, so repeat treatments are needed.",
          "The nose has a delicate blood supply. Filler can rarely block a blood vessel, causing skin damage and, very rarely, loss of vision. Treatment should be carried out by a medically qualified practitioner who can recognise and manage this emergency. In England it is illegal to give dermal filler for cosmetic purposes to anyone under 18, under the Botulinum Toxin and Cosmetic Fillers (Children) Act 2021.",
        ],
      },
      {
        heading: "Septoplasty for breathing problems",
        paragraphs: [
          "If your main problem is a blocked nose from a deviated septum, septoplasty straightens the internal wall of the nose without changing its outward shape. It may be available on the NHS when local criteria are met. Your GP can refer you to an ENT specialist for assessment.",
        ],
      },
      {
        heading: "Other surgical options",
        paragraphs: [
          "Sometimes a more limited operation, such as reshaping only the tip, can address a specific concern. In some faces, the balance of features is influenced by the chin; chin surgery or implants are sometimes discussed. These are still operations with their own risks.",
        ],
      },
      {
        heading: "Make-up and camouflage",
        paragraphs: [
          "Contouring techniques can change how the nose appears in photos and day to day, with no medical risk. Being aware that phone cameras and filters distort facial proportions can also change how you see your nose.",
        ],
      },
      {
        heading: "Doing nothing",
        paragraphs: [
          "Choosing not to have treatment, or waiting, is a legitimate decision. Concerns about appearance can change over time. If worry about your nose is causing significant distress, talking to your GP may help, including about body dysmorphic disorder.",
        ],
      },
      {
        heading: "Getting balanced advice",
        paragraphs: [
          "A consultation with a surgeon on the GMC Specialist Register should include a discussion of non-surgical options and of not having treatment, not only of surgery. If you are considering filler, ask who will inject it, what their medical qualification is, which product will be used and what they would do if a complication occurred. Non-surgical cosmetic treatments are less tightly regulated than surgery in much of the UK, so these checks matter.",
        ],
      },
    ],
    sources: [NHS, MHRA, BAAPS, BAPRAS, GMC],
  },

  /* ------------------------------------------------------------------ */
  /* TUMMY TUCK (ABDOMINOPLASTY)                                          */
  /* ------------------------------------------------------------------ */
  {
    ...COMMON,
    interventionId: "abdominoplasty",
    kind: "risks",
    title: "Tummy tuck risks",
    summary:
      "Tummy tuck complications explained: seroma, wound healing, blood clots, scarring, numbness, when to call for help and who is at higher risk.",
    answer:
      "A tummy tuck is a major operation. Fluid collecting under the skin (seroma) and wound-healing problems are among the more common complications, and blood clots in the legs or lungs are rare but serious. Smoking, diabetes and a higher body mass index increase the risk of complications.",
    sections: [
      {
        heading: "Expected effects of healing",
        paragraphs: [
          "Pain, swelling, bruising and tightness across the abdomen are expected. You will probably walk slightly bent forward for the first days. Numbness of the skin below the belly button is very common and may last many months or be permanent in part.",
        ],
      },
      {
        heading: "More common complications",
        paragraphs: [],
        bullets: [
          "Seroma: fluid collecting under the skin, sometimes needing to be drained with a needle, occasionally repeatedly.",
          "Delayed wound healing, particularly at the centre of the scar, which may need dressings for several weeks.",
          "Scars that widen, thicken (hypertrophic or keloid scars) or remain red for longer than expected.",
          "Small bulges of skin at the ends of the scar (\"dog ears\"), sometimes corrected later under local anaesthetic.",
        ],
      },
      {
        heading: "Rare but serious complications",
        paragraphs: [
          "Blood clots in the leg veins (deep vein thrombosis) can travel to the lungs (pulmonary embolism), which can be life-threatening. The risk is reduced by early walking, compression stockings and sometimes blood-thinning injections. Other rare complications include significant bleeding needing a return to theatre, serious infection, loss of skin or of the belly button due to poor blood supply, and the risks of a general anaesthetic.",
        ],
      },
      {
        heading: "When to seek help",
        paragraphs: [
          "Contact your surgeon or the hospital's 24-hour number first. If you cannot reach them, call NHS 111. Call 999 in an emergency.",
        ],
        bullets: [
          "Sudden breathlessness, chest pain or coughing up blood: call 999.",
          "Pain, swelling or warmth in one calf.",
          "Fever, spreading redness, pus or a wound that opens.",
          "Rapidly increasing swelling or bruising on one side.",
          "Skin that becomes dark or black along the wound.",
        ],
      },
      {
        heading: "Revision surgery",
        paragraphs: [
          "Some people have a further procedure to improve the scar, remove dog ears or treat a persistent seroma. Revisions are usually considered once the tissues have settled, often after 6 to 12 months. Ask your surgeon how often they carry out revisions and what their policy is on costs.",
        ],
      },
      {
        heading: "Factors that increase risk",
        paragraphs: [],
        bullets: [
          "Smoking or nicotine use in any form: surgeons ask you to stop for several weeks before and after surgery.",
          "A higher body mass index and diabetes.",
          "Previous abdominal surgery or scars.",
          "A personal or family history of blood clots.",
          "Combining a tummy tuck with other procedures in the same operation, which lengthens anaesthesia.",
        ],
      },
    ],
    sources: [NHS, BAAPS, BAPRAS, RCS, GMC],
  },
  {
    ...COMMON,
    interventionId: "abdominoplasty",
    kind: "cost",
    title: "How much does a tummy tuck cost?",
    summary:
      "What a UK tummy tuck quote should cover, when the NHS may fund surgery to remove excess skin, and how complications affect costs.",
    answer:
      "The cost of a private tummy tuck in the UK depends on the extent of surgery, the hospital stay, the surgeon and the aftercare included, so we do not publish price figures. Ask for a detailed written quote. NHS funding is rare and only available where strict local criteria are met.",
    sections: [
      {
        heading: "What a quote should include",
        paragraphs: ["A tummy tuck often involves one or more nights in hospital, so check carefully what the quote covers."],
        bullets: [
          "The surgeon's and anaesthetist's fees, with the operating surgeon named.",
          "Hospital fees: theatre, overnight stays, medicines, dressings and drains.",
          "Compression garments and stockings, and any blood-thinning injections.",
          "Follow-up appointments and seroma drainage if needed.",
          "What happens, and who pays, if you need to stay longer or return to theatre.",
          "The revision policy, for example for scar revision or dog ears.",
        ],
      },
      {
        heading: "NHS funding",
        paragraphs: [
          "Tummy tucks for cosmetic reasons are not available on the NHS. In some areas, removal of a large overhanging apron of skin (panniculectomy) may be funded after major weight loss when it causes recurrent skin infections or significant functional problems. Each local area sets its own criteria, which often include a stable weight for a set period. Your GP can explain whether a referral is possible.",
        ],
      },
      {
        heading: "If complications occur",
        paragraphs: [
          "The NHS will treat emergencies, such as a blood clot or a serious infection, regardless of where the surgery took place. It does not usually fund revisions of private cosmetic surgery. Ask whether your package includes treatment of complications and readmission, and for how long.",
        ],
      },
      {
        heading: "Finance, discounts and packages",
        paragraphs: [
          "Finance agreements offered through clinics can make it harder to take time over your decision, and repayments continue whatever the outcome. Check the interest, the total amount repayable and your cancellation rights.",
          "GMC guidance says doctors must not use time-limited discounts or financial incentives to encourage people to have cosmetic procedures, and the CAP Code restricts irresponsible advertising. Combined \"package\" deals with other procedures add to the length of anaesthesia and may increase risk.",
          "Low-cost tummy tucks abroad are a frequent reason for people needing NHS care after their return, often for wound problems. Read our guide on having surgery abroad before booking.",
        ],
      },
      {
        heading: "Comparing quotes",
        paragraphs: [
          "When comparing quotes, compare what is included rather than the total alone. Check that the surgeon is on the GMC Specialist Register and that the hospital is registered with the Care Quality Commission in England, Healthcare Improvement Scotland, Healthcare Inspectorate Wales or the Regulation and Quality Improvement Authority in Northern Ireland. A deposit should not be required before you have had time to reflect after meeting the operating surgeon.",
        ],
      },
    ],
    sources: [NHS, GMC, ASA, BAAPS, CQC],
  },
  {
    ...COMMON,
    interventionId: "abdominoplasty",
    kind: "recovery",
    title: "Recovery after a tummy tuck",
    summary:
      "Tummy tuck recovery: hospital stay, drains and garments, time off work, exercise, flying, scar healing and warning signs to watch for.",
    answer:
      "Most people stay in hospital for one to three nights, then wear a support garment for several weeks. Two to four weeks off work is common, depending on your job, and exercise and heavy lifting are usually reintroduced after six to eight weeks. The scar matures over 12 to 18 months.",
    sections: [
      {
        heading: "In hospital and the first week",
        paragraphs: [
          "You may have drains to remove fluid for a few days. You will be encouraged to walk early, slightly bent forward, to reduce the risk of blood clots. You may be given compression stockings and blood-thinning injections.",
        ],
        bullets: [
          "Rest with your knees slightly bent and your back raised.",
          "Take painkillers as prescribed.",
          "Walk gently several times a day.",
          "You will need help at home for the first days, especially with children.",
        ],
      },
      {
        heading: "Weeks two to eight",
        paragraphs: [
          "You will usually wear a support garment day and night for around six weeks. Desk work can often resume after two to four weeks; physical jobs need longer. Avoid lifting anything heavy, including children and shopping, until your surgeon agrees, often around six weeks. Exercise is reintroduced gradually, starting with walking. If your muscles were repaired, abdominal exercises are usually delayed further.",
          "Do not drive until you can wear a seatbelt comfortably, brake suddenly and turn without pain. Check with your insurer.",
        ],
      },
      {
        heading: "Flying",
        paragraphs: [
          "Long journeys, and flights in particular, increase the risk of blood clots after abdominal surgery. Many surgeons advise avoiding long-haul flights for several weeks. Ask for specific advice before booking any travel, and do not plan surgery just before or after a long flight.",
        ],
      },
      {
        heading: "Scars",
        paragraphs: [
          "The main scar runs low across the abdomen and is usually designed to sit under underwear. There is often a scar around the belly button. Scars are usually red and raised for several months before fading. Protect them from the sun and follow your surgeon's advice on scar care.",
        ],
      },
      {
        heading: "Follow-up",
        paragraphs: [
          "Follow-up appointments check the wound and look for seroma. Ask before surgery how many appointments are included, who removes stitches or drains, and who to contact out of hours.",
        ],
      },
      {
        heading: "Warning signs",
        paragraphs: ["Contact your surgeon or the hospital urgently, or NHS 111 if you cannot reach them. Call 999 in an emergency."],
        bullets: [
          "Breathlessness, chest pain or coughing up blood: call 999.",
          "A painful, swollen or warm calf.",
          "Fever, pus, spreading redness or a wound that opens.",
          "Skin turning dark along the scar.",
        ],
      },
    ],
    sources: [NHS, BAAPS, BAPRAS, RCS],
  },
  {
    ...COMMON,
    interventionId: "abdominoplasty",
    kind: "decision",
    title: "Tummy tuck: before you decide",
    summary:
      "Deciding on a tummy tuck: stable weight, future pregnancies, motivation, body dysmorphic disorder, questions to ask and the cooling-off period.",
    answer:
      "A tummy tuck is usually considered once your weight has been stable for several months and you no longer plan a pregnancy. It is not a weight-loss treatment and is only for adults. Take time to reflect: UK professional standards recommend at least two weeks between consultation and agreeing to surgery.",
    sections: [
      {
        heading: "Is it the right time?",
        paragraphs: [
          "Your weight should have been stable for several months, ideally at a level you can maintain. Further weight loss after surgery can loosen the skin again, and weight gain can stretch the scar.",
          "A later pregnancy can stretch the skin and muscles again. Most surgeons suggest waiting until your family is complete, and at least several months after giving birth or stopping breastfeeding.",
          "Cosmetic surgery is for adults: reputable surgeons in the UK do not perform a cosmetic tummy tuck under 18.",
        ],
      },
      {
        heading: "Your health",
        paragraphs: [
          "Smoking, diabetes, a high body mass index and a history of blood clots all increase the risk of complications. You will be asked to stop smoking and nicotine products for several weeks before and after surgery. Some surgeons will not operate above a certain body mass index.",
        ],
      },
      {
        heading: "Your own motivation",
        paragraphs: [
          "Think about what you want to change and why. A tummy tuck can remove loose skin and tighten muscles; it does not remove stretch marks above the area removed and leaves a long, permanent scar. It will not change your weight much. Make the decision for yourself, not because of pressure from others.",
        ],
      },
      {
        heading: "Body dysmorphic disorder",
        paragraphs: [
          "Body dysmorphic disorder (BDD) is a mental health condition in which worry about appearance takes up a lot of time and causes distress, often about features others barely notice. Surgery does not usually help and can make things worse. If you check, compare or hide your body for hours a day, or it stops you doing things, speak to your GP. The NHS and the BDD Foundation have information and support.",
        ],
      },
      {
        heading: "Questions to ask your surgeon",
        paragraphs: [],
        bullets: [
          "Are you on the GMC Specialist Register in plastic surgery?",
          "Do I need a full tummy tuck, a mini tummy tuck or another procedure?",
          "Will my muscles be repaired, and how does that change recovery?",
          "Where will the scar be, and how long will it be?",
          "Is the hospital registered with the CQC (or the regulator in Scotland, Wales or Northern Ireland), and does it have overnight medical cover?",
          "How are blood clots prevented?",
          "What does the quote include if I need further treatment?",
        ],
      },
      {
        heading: "Cooling-off and second opinions",
        paragraphs: [
          "UK law does not set a waiting period, but professional standards recommend at least two weeks between consultation and agreeing to surgery. Your consultation should be with the operating surgeon. You can always ask for a second opinion.",
        ],
      },
    ],
    sources: [NHS, BDDF, GMC, RCS, CQC],
  },
  {
    ...COMMON,
    interventionId: "abdominoplasty",
    kind: "alternatives",
    title: "Alternatives to a tummy tuck",
    summary:
      "Options other than a tummy tuck: mini tummy tuck, liposuction, physiotherapy for muscle separation, non-surgical treatments and doing nothing.",
    answer:
      "Depending on whether your concern is loose skin, fat or separated muscles, alternatives include a mini tummy tuck, liposuction, specialist physiotherapy, non-surgical fat reduction or no treatment. None of these removes significant loose skin the way a full tummy tuck does, and each has its own limits and risks.",
    sections: [
      {
        heading: "Mini tummy tuck",
        paragraphs: [
          "When excess skin is limited to below the belly button, a mini tummy tuck removes a smaller area with a shorter scar and usually a quicker recovery. It does not address loose skin above the belly button and is still an operation with surgical risks.",
        ],
      },
      {
        heading: "Liposuction",
        paragraphs: [
          "Liposuction removes fat but not skin. It may suit people with good skin elasticity and localised fat. If the skin is loose, liposuction alone can make it look looser. Risks include irregular contours, numbness, fluid collection and, rarely, serious complications.",
        ],
      },
      {
        heading: "Physiotherapy for muscle separation",
        paragraphs: [
          "Separation of the abdominal muscles after pregnancy (diastasis recti) often improves in the months after birth. A specialist women's health physiotherapist can advise on exercises, and your GP can refer you. Physiotherapy cannot remove excess skin, and a wide separation may not close fully.",
        ],
      },
      {
        heading: "Non-surgical treatments",
        paragraphs: [
          "Treatments such as fat freezing (cryolipolysis) and skin-tightening devices can reduce small amounts of fat or slightly tighten skin. Effects are modest and vary between people. Fat freezing can rarely cause a paradoxical increase in fat in the treated area, which may need surgery to correct. Many of these treatments are not regulated in the same way as surgery, so check who carries them out and in which setting.",
        ],
      },
      {
        heading: "Weight management and doing nothing",
        paragraphs: [
          "If you are still losing weight, reaching a stable weight first is usually advised, and it may change what treatment, if any, you need. Choosing not to have treatment is a legitimate decision. If excess skin after major weight loss causes recurring infections or functional problems, speak to your GP about whether NHS assessment is possible.",
        ],
      },
      {
        heading: "Comparing options",
        paragraphs: [
          "The right option depends on what bothers you most: loose skin, fat, muscle separation or a combination. A surgeon on the GMC Specialist Register in plastic surgery should examine you and explain which concerns each option can and cannot address, including the option of not having treatment. Non-surgical treatments should be described with the same honesty about limits and risks as surgery.",
        ],
      },
    ],
    sources: [NHS, BAAPS, BAPRAS, MHRA],
  },

  /* ------------------------------------------------------------------ */
  /* BREAST AUGMENTATION                                                  */
  /* ------------------------------------------------------------------ */
  {
    ...COMMON,
    interventionId: "breast-augmentation",
    kind: "risks",
    title: "Breast augmentation risks",
    summary:
      "Breast implant risks: capsular contracture, rupture, BIA-ALCL, reported systemic symptoms, the implant registry and when to seek help.",
    answer:
      "Breast implants are not lifelong devices, and many people need further surgery at some point. The most common reason is capsular contracture, a hardening of the scar tissue around the implant; rupture becomes more likely with time. A rare cancer called BIA-ALCL has been linked mainly to textured implants, and the MHRA monitors reports of it.",
    sections: [
      {
        heading: "Expected effects of healing",
        paragraphs: [
          "Swelling, tightness and discomfort are expected, especially if the implant is placed under the muscle. The breasts may sit high at first and settle over several weeks to months. Nipple and skin sensation can change.",
        ],
      },
      {
        heading: "Common and less common complications",
        paragraphs: [],
        bullets: [
          "Capsular contracture: the scar tissue around the implant tightens, making the breast feel hard, look distorted or become painful. It can occur at any time and is a common reason for further surgery.",
          "Implant rupture or leakage: more likely as implants age. Silicone rupture may cause no symptoms and is often detected on a scan.",
          "Bleeding (haematoma) or infection, which may need a return to theatre and sometimes temporary removal of the implant.",
          "Changes in nipple or breast sensation, which may be permanent.",
          "Asymmetry, implant movement, visible rippling or creasing.",
          "Effects on breastfeeding for some people.",
        ],
      },
      {
        heading: "BIA-ALCL and other rare conditions",
        paragraphs: [
          "Breast implant-associated anaplastic large cell lymphoma (BIA-ALCL) is a rare cancer of the immune system that develops in the scar tissue around an implant. It has been associated mainly with textured implants and usually appears years after surgery, most often as swelling of one breast due to fluid, or a lump. When found early it is usually treated by removing the implant and the capsule. The MHRA does not recommend removing implants without symptoms, but any new swelling or lump should be checked.",
          "Some people with implants report symptoms such as fatigue, joint pain or difficulty concentrating, sometimes called breast implant illness. It is not a recognised diagnosis and a causal link has not been established, but these reports are being studied. Discuss any symptoms with your surgeon or GP.",
        ],
      },
      {
        heading: "Implants are not lifelong",
        paragraphs: [
          "Implants do not need to be replaced on a fixed schedule, but the chance of a problem increases over time. You should plan for regular check-ups and the possibility of further surgery and its cost during your life. Breast screening is still possible with implants: tell the radiographer.",
        ],
      },
      {
        heading: "Registry, implant records and reporting",
        paragraphs: [
          "Ask your surgeon to record your implant on the Breast and Cosmetic Implant Registry, which helps trace patients if a safety issue is identified. You should also be given written details of your implant (manufacturer, model, size and batch), sometimes called an implant card or passport. Keep it safe. Problems with an implant can be reported to the MHRA through the Yellow Card scheme.",
        ],
      },
      {
        heading: "When to seek help",
        paragraphs: ["Contact your surgeon first, or NHS 111 if you cannot reach them. Call 999 in an emergency."],
        bullets: [
          "Sudden, painful swelling of one breast in the days after surgery.",
          "Fever, redness, discharge or a wound that opens.",
          "New swelling, a lump or a change in shape, even years later.",
          "Breathlessness or chest pain: call 999.",
        ],
      },
    ],
    sources: [MHRA, BCIR, NHS, BAAPS, BAPRAS],
  },
  {
    ...COMMON,
    interventionId: "breast-augmentation",
    kind: "cost",
    title: "How much does a breast augmentation cost?",
    summary:
      "What a UK breast augmentation quote should include, why long-term implant costs matter, NHS funding limits and cautions about deals.",
    answer:
      "The cost of a private breast augmentation in the UK depends on the surgeon, the hospital, the implant and the aftercare included, so we do not publish price figures. Because implants are not lifelong, also consider the cost of future check-ups, scans and possible further surgery. NHS funding for cosmetic augmentation is very rare.",
    sections: [
      {
        heading: "What a quote should include",
        paragraphs: ["Ask for a written quote and check what it excludes as well as what it includes."],
        bullets: [
          "The surgeon's and anaesthetist's fees, with the operating surgeon named.",
          "Hospital fees, including theatre, any overnight stay and medicines.",
          "The implants themselves: manufacturer, type and whether a replacement is covered by any manufacturer warranty.",
          "Post-operative bras or garments.",
          "Follow-up appointments and for how long they are included.",
          "Treatment of early complications and the revision policy, including what you would pay.",
          "Registration on the Breast and Cosmetic Implant Registry.",
        ],
      },
      {
        heading: "Long-term costs",
        paragraphs: [
          "Over a lifetime, many people with implants need further surgery, for example for capsular contracture, rupture or a change in breast shape. Scans to check implants may also be needed. A manufacturer warranty, where one exists, may cover the implant but not the surgeon's or hospital's fees. Factor this into your decision.",
        ],
      },
      {
        heading: "NHS funding",
        paragraphs: [
          "The NHS does not fund breast augmentation for cosmetic reasons. Surgery may be considered in exceptional circumstances, such as significant congenital asymmetry or absence of breast tissue, and breast reconstruction after cancer is a separate NHS service. Local criteria apply and approval is not automatic.",
        ],
      },
      {
        heading: "If complications occur",
        paragraphs: [
          "The NHS will treat emergencies, such as a severe infection, regardless of who carried out the surgery. It does not usually replace or revise implants fitted privately for cosmetic reasons. In the event of a safety concern about a specific implant, any NHS guidance would be published by the MHRA and the Department of Health.",
        ],
      },
      {
        heading: "Finance, discounts and packages",
        paragraphs: [
          "Finance agreements arranged through a clinic can encourage quick decisions, and repayments continue whatever happens. GMC guidance says doctors must not use time-limited discounts or financial incentives to encourage cosmetic procedures, and the CAP Code restricts irresponsible advertising, including advertising aimed at under-18s.",
          "Low-cost packages abroad may leave you without a surgeon to see if problems arise later, and your implant may not be recorded on the UK registry. Read our guide on having surgery abroad before booking.",
        ],
      },
      {
        heading: "Comparing quotes",
        paragraphs: [
          "When comparing quotes, compare what is included rather than the total alone. Check that the surgeon is on the GMC Specialist Register and that the hospital is registered with the Care Quality Commission in England, Healthcare Improvement Scotland, Healthcare Inspectorate Wales or the Regulation and Quality Improvement Authority in Northern Ireland. A deposit should not be required before you have had time to reflect after meeting the operating surgeon.",
        ],
      },
    ],
    sources: [NHS, GMC, ASA, MHRA, BAAPS],
  },
  {
    ...COMMON,
    interventionId: "breast-augmentation",
    kind: "recovery",
    title: "Recovery after breast augmentation",
    summary:
      "Breast augmentation recovery: the first week, support bra, return to work and exercise, flying, scars, long-term check-ups and warning signs.",
    answer:
      "Most people go home the same day or the next, and return to desk work after about one to two weeks. A supportive bra is usually worn day and night for several weeks, and upper-body exercise is reintroduced from around six weeks. Implants settle into their final position over a few months, and you will need check-ups for as long as you have them.",
    sections: [
      {
        heading: "The first week",
        paragraphs: [
          "Expect tightness, swelling and aching, especially if the implants were placed under the chest muscle. Pain is usually managed with prescribed painkillers. You may find it easier to sleep on your back with your upper body raised.",
        ],
        bullets: [
          "Wear the supportive bra as advised.",
          "Avoid lifting your arms above your head and lifting anything heavy.",
          "Walk gently to keep your circulation moving.",
          "Keep wounds clean and dry, following your hospital's instructions.",
        ],
      },
      {
        heading: "Weeks two to six",
        paragraphs: [
          "Many people return to desk work after one to two weeks; physical jobs need longer. Avoid lifting, pushing and upper-body exercise for around six weeks, then build up gradually as your surgeon advises. Do not drive until you can wear a seatbelt comfortably and steer and brake suddenly without pain.",
        ],
      },
      {
        heading: "Flying",
        paragraphs: [
          "Flying with breast implants is safe once you have recovered. After surgery, ask your surgeon how long to wait before flying, especially on long-haul flights, because of the general risk of blood clots after an operation.",
        ],
      },
      {
        heading: "Scars and settling",
        paragraphs: [
          "Scars are usually in the fold under the breast, around the areola or in the armpit, depending on the technique. They tend to be red for several months before fading. The breasts often look high and firm at first and settle over three to six months.",
        ],
      },
      {
        heading: "Long-term follow-up",
        paragraphs: [
          "Check your breasts regularly and attend NHS breast screening when invited, telling the radiographer you have implants. See your surgeon or GP if you notice a change in shape, firmness, swelling or a lump at any time, even many years later. Keep your implant details and confirm your implant was entered on the Breast and Cosmetic Implant Registry.",
        ],
      },
      {
        heading: "Warning signs",
        paragraphs: ["Contact your surgeon urgently, or NHS 111 if you cannot reach them. Call 999 in an emergency."],
        bullets: [
          "Rapid, painful swelling of one breast.",
          "Fever, redness, discharge or a wound that opens.",
          "Late swelling of a breast, months or years after surgery.",
          "Breathlessness or chest pain: call 999.",
        ],
      },
    ],
    sources: [NHS, MHRA, BAAPS, BAPRAS, BCIR],
  },
  {
    ...COMMON,
    interventionId: "breast-augmentation",
    kind: "decision",
    title: "Breast augmentation: before you decide",
    summary:
      "Deciding on breast implants: age, pregnancy plans, long-term commitment, motivation, body dysmorphic disorder, questions and cooling-off.",
    answer:
      "Breast augmentation is a long-term commitment: implants need monitoring and may need further surgery during your life. It is only for adults for cosmetic reasons, and it is worth considering future pregnancy and breastfeeding plans. UK professional standards recommend at least two weeks between consultation and agreeing to surgery.",
    sections: [
      {
        heading: "Is it the right time?",
        paragraphs: [
          "Breasts continue to develop into the late teens and early twenties. Reputable surgeons in the UK do not perform cosmetic breast augmentation on under-18s.",
          "Pregnancy and breastfeeding change breast size and shape, which can affect the result. Many people wait until after having children, or at least several months after stopping breastfeeding. Your weight should also be stable.",
        ],
      },
      {
        heading: "A long-term commitment",
        paragraphs: [
          "Choosing implants means accepting regular check-ups, the possibility of further operations and their cost, and a small risk of rare conditions such as BIA-ALCL. Ask yourself whether you are prepared for this over decades, not only for the first year.",
        ],
      },
      {
        heading: "Your own motivation",
        paragraphs: [
          "Consider what you hope will change and why. Implants change breast size and shape; they do not guarantee changes in confidence or relationships. Decisions made under pressure from a partner, others or social media are more likely to lead to regret.",
        ],
      },
      {
        heading: "Body dysmorphic disorder",
        paragraphs: [
          "Body dysmorphic disorder (BDD) is a mental health condition in which worry about appearance causes significant distress and takes up a lot of time. Cosmetic surgery does not usually relieve it. Signs include constant checking or avoiding mirrors, comparing yourself with others and the worry interfering with daily life. Speak to your GP if this sounds familiar; the NHS and the BDD Foundation offer information and support.",
        ],
      },
      {
        heading: "Questions to ask your surgeon",
        paragraphs: [],
        bullets: [
          "Are you on the GMC Specialist Register in plastic surgery?",
          "Which implant do you recommend for me (type, surface, shape, size), and why?",
          "Will the implant sit above or below the muscle, and where will the scars be?",
          "How often do your patients need further surgery?",
          "Will my implant be recorded on the Breast and Cosmetic Implant Registry, and will I receive my implant details?",
          "Is the hospital registered with the CQC (or the regulator in Scotland, Wales or Northern Ireland)?",
          "What follow-up is included, and what happens if I need revision?",
        ],
      },
      {
        heading: "Cooling-off and second opinions",
        paragraphs: [
          "There is no legal waiting period in the UK, but professional standards recommend a cooling-off period of at least two weeks between your consultation and agreeing to surgery. You should meet the operating surgeon before you decide. A second opinion is always reasonable.",
        ],
      },
    ],
    sources: [NHS, BDDF, GMC, RCS, BCIR],
  },
  {
    ...COMMON,
    interventionId: "breast-augmentation",
    kind: "alternatives",
    title: "Alternatives to breast augmentation",
    summary:
      "Options other than breast implants: fat transfer, breast lift, padded bras and external forms, and doing nothing, with limits and risks.",
    answer:
      "Alternatives to implants include fat transfer to the breasts, a breast lift if the main concern is sagging, padded bras or external breast forms, and choosing not to have treatment. Fat transfer gives a more modest increase and has its own risks. Injectable fillers are not recommended for breast enlargement.",
    sections: [
      {
        heading: "Fat transfer",
        paragraphs: [
          "Fat is taken by liposuction from another area, such as the abdomen or thighs, processed and injected into the breasts. It can give a modest increase in size and requires enough fat to harvest. Some of the fat is reabsorbed, so more than one session may be needed.",
          "Risks include lumps from fat that does not survive (fat necrosis), cysts, irregularities and the risks of liposuction. Changes in the breast after fat transfer can sometimes make breast imaging more complex, so tell the radiographer about previous treatment.",
        ],
      },
      {
        heading: "Breast lift (mastopexy)",
        paragraphs: [
          "If your main concern is drooping or loss of shape after pregnancy or weight loss, a breast lift reshapes the breast and raises the nipple without adding an implant. It leaves scars around the areola and often below it, and is an operation with surgical risks. Sometimes a lift is combined with an implant.",
        ],
      },
      {
        heading: "Padded bras and external breast forms",
        paragraphs: [
          "Padded or push-up bras and silicone forms worn inside a bra change the shape under clothes, with no medical risk and no commitment. They can be a way to explore whether a change in size matters to you.",
        ],
      },
      {
        heading: "Treatments to avoid",
        paragraphs: [
          "Injectable fillers for breast enlargement are not recommended by UK professional bodies, because of concerns about lumps, infection and interference with breast imaging. Be cautious about creams, pills or devices claiming to enlarge the breasts: there is no reliable evidence that they work.",
        ],
      },
      {
        heading: "Doing nothing",
        paragraphs: [
          "Choosing not to have treatment, or waiting, is a legitimate decision. Breast size and shape change naturally with age, weight, pregnancy and breastfeeding. If worry about your breasts is causing significant distress, talk to your GP.",
        ],
      },
      {
        heading: "Comparing options",
        paragraphs: [
          "Each option involves a trade-off between the size of the change, scarring, recovery and long-term follow-up. Fat transfer avoids an implant but gives a smaller change; a lift changes shape rather than volume; implants give the largest change but need lifelong monitoring. A surgeon on the GMC Specialist Register in plastic surgery should discuss all of these with you, including not having treatment.",
        ],
      },
    ],
    sources: [NHS, BAAPS, BAPRAS, MHRA],
  },
];
