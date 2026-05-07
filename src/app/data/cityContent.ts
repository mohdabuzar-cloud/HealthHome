export interface CityContent {
  slug: string;
  name: string;
  heroTitle: string;
  heroBody: string;
  heroCardTitle: string;
  heroCardBody: string;
  introTitle: string;
  introParagraphs: string[];
  highlights: Array<{
    title: string;
    body: string;
    icon: "shield" | "clock" | "languages" | "family";
  }>;
  serviceIntro: string;
  featuredServiceIds: string[];
  careSituations: string[];
  neighborhoodsTitle: string;
  neighborhoodsIntro: string;
  neighborhoods: string[];
  processTitle: string;
  processBody: string;
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
  nearbyCities: string[];
}

export const CITY_CONTENT: Record<string, CityContent> = {
  abbotsford: {
    slug: "abbotsford",
    name: "Abbotsford",
    heroTitle: "Home Care Services for Families Across Abbotsford",
    heroBody:
      "We support seniors and families throughout Abbotsford with dependable in-home care, flexible scheduling, and clear communication. From daily support to more complex care routines, our team helps families stay organized without rushing important decisions.",
    heroCardTitle: "Practical support for growing family care needs",
    heroCardBody:
      "Abbotsford families often need care that can start gently, then scale as routines, mobility, or health needs change.",
    introTitle: "Home Care That Fits the Pace of Life in Abbotsford",
    introParagraphs: [
      "In Abbotsford, many families are balancing work, farming schedules, church commitments, and multigenerational caregiving. That usually means care has to be reliable, flexible, and easy to coordinate.",
      "Some clients need help after a hospital stay. Others need a steadier routine with bathing, meals, transfers, companionship, or medication reminders. We build each care plan around the home environment, the family schedule, and the kind of support that will actually reduce stress.",
    ],
    highlights: [
      { title: "Flexible family scheduling", body: "Care can be arranged around early mornings, evening check-ins, and shared family caregiving routines.", icon: "clock" },
      { title: "Support for rural and urban households", body: "We understand that Abbotsford care needs can vary widely depending on distance, driving time, and family availability.", icon: "family" },
      { title: "Consistent caregiver standards", body: "Every caregiver is screened, matched thoughtfully, and supported by our care coordination team.", icon: "shield" },
      { title: "Language-aware matching", body: "Families can request a caregiver who supports communication needs and cultural comfort at home.", icon: "languages" },
    ],
    serviceIntro:
      "Families in Abbotsford commonly ask for a mix of personal care, household support, recovery help, and companionship. These service pages connect directly to the care types most often requested locally.",
    featuredServiceIds: ["personal-care", "home-support", "hospital-recovery", "companionship", "meal-preparation", "respite-care"],
    careSituations: [
      "A parent who is still living at home but beginning to struggle with bathing, dressing, or meal routines.",
      "A loved one returning home after a hospital stay who needs steady support for the first few weeks.",
      "Family caregivers who need respite so responsibilities can remain sustainable over time.",
      "An older adult who is becoming isolated and benefits from regular companionship and structure.",
    ],
    neighborhoodsTitle: "Areas We Commonly Support Around Abbotsford",
    neighborhoodsIntro:
      "Care requests come from established neighbourhoods, newer family areas, and homes where seniors want to remain close to their community, church, and routines.",
    neighborhoods: ["Central Abbotsford", "Clearbrook", "Clayburn", "Auguston", "Matsqui", "McMillan", "Bateman", "West Abbotsford"],
    processTitle: "A Straightforward Start to Care in Abbotsford",
    processBody:
      "We begin with a practical conversation about the home, the family schedule, and what kind of support will feel helpful right away. That keeps the first steps calm and organized.",
    faqItems: [
      { question: "How quickly can care start in Abbotsford?", answer: "In many cases, care can begin within 48 hours of your assessment. Urgent family situations and post-discharge requests are reviewed as quickly as possible." },
      { question: "Can you help if our family shares caregiving responsibilities?", answer: "Yes. Many Abbotsford families divide responsibilities between adult children, spouses, and extended family. We can build a schedule that supports that shared approach." },
      { question: "Do you offer short visits as well as longer shifts?", answer: "Yes. We can recommend a care plan that starts with shorter visits or expands into longer daytime, overnight, or live-in support if needed." },
      { question: "Can you help with meals and home routines as well as personal care?", answer: "Absolutely. Many clients need a combination of personal care, home support, meal preparation, and companionship in one coordinated plan." },
    ],
    nearbyCities: ["Mission", "Langley", "Maple Ridge", "Surrey", "Vancouver"],
  },
  burnaby: {
    slug: "burnaby",
    name: "Burnaby",
    heroTitle: "Home Care in Burnaby for Busy Families and Aging Parents",
    heroBody:
      "Burnaby families often need care that is organized, responsive, and easy to coordinate across work schedules, condo living, and medical appointments. We provide in-home support that helps older adults stay comfortable while families stay informed.",
    heroCardTitle: "Support that works in condos, houses, and shared family homes",
    heroCardBody:
      "Burnaby care plans are often built around apartment routines, elevator access, parking logistics, and family members living in different parts of the city.",
    introTitle: "Coordinated Home Care for Daily Life in Burnaby",
    introParagraphs: [
      "In Burnaby, families are often juggling long commutes, rotating work schedules, and care decisions for parents who want to remain in familiar surroundings. That means care has to be dependable and easy to manage.",
      "Some households need a caregiver for morning routines and mobility support. Others need companionship, meal help, nursing oversight, or a smoother transition home after hospital care. We design each plan around what daily life actually looks like in the home.",
    ],
    highlights: [
      { title: "Well-suited for apartment living", body: "We understand the realities of timing, building access, concierge coordination, and shared household routines.", icon: "family" },
      { title: "Strong post-discharge planning", body: "Families often call us after a hospital stay when they need more structure than relatives can manage alone.", icon: "clock" },
      { title: "Clear communication with adult children", body: "When family members live across Burnaby, Vancouver, or Coquitlam, updates matter. We help keep everyone aligned.", icon: "shield" },
      { title: "Multilingual comfort at home", body: "Burnaby families often ask for language-sensitive care that feels familiar and respectful.", icon: "languages" },
    ],
    serviceIntro:
      "In Burnaby, we often see demand for support that blends personal care, nursing follow-up, companionship, and home help. These linked service pages cover the combinations local families ask for most.",
    featuredServiceIds: ["personal-care", "nursing-care", "hospital-recovery", "companionship", "dementia-care", "meal-preparation"],
    careSituations: [
      "A parent in a Burnaby condo who needs assistance with bathing, dressing, and safe mobility.",
      "A loved one who has been discharged home and needs temporary recovery support with medication and daily routines.",
      "A senior who is physically stable but increasingly isolated and benefits from companionship and structure.",
      "Families coordinating care across siblings who live in Burnaby, Vancouver, and surrounding cities.",
    ],
    neighborhoodsTitle: "Neighbourhoods We Commonly Serve in Burnaby",
    neighborhoodsIntro:
      "Support is often requested in high-rise communities, established residential neighbourhoods, and multigenerational homes throughout Burnaby.",
    neighborhoods: ["Metrotown", "Brentwood", "Edmonds", "Deer Lake", "North Burnaby", "South Slope", "Capitol Hill", "Lougheed"],
    processTitle: "Getting Started with Care in Burnaby",
    processBody:
      "Our first step is to understand the daily routine, mobility needs, and whether the home setup calls for help with stairs, building access, transportation, or medication routines.",
    faqItems: [
      { question: "Do you provide home care across all parts of Burnaby?", answer: "Yes. We support clients throughout Burnaby and coordinate schedules based on the location, care needs, and visit frequency." },
      { question: "Can you help after a discharge from hospital or rehab?", answer: "Yes. Post-hospital recovery is one of the common reasons Burnaby families contact us. We can help with safety, routine support, and coordination at home." },
      { question: "Can family members receive updates if they live outside the home?", answer: "Yes. We regularly support families where adult children live separately and want clear communication about how care is going." },
      { question: "Is Burnaby home care only for seniors?", answer: "No. We also support adults recovering from surgery, illness, or mobility changes who need short-term or ongoing help at home." },
    ],
    nearbyCities: ["Vancouver", "New Westminster", "Coquitlam", "Richmond", "Surrey"],
  },
  coquitlam: {
    slug: "coquitlam",
    name: "Coquitlam",
    heroTitle: "Personalized Home Care Services in Coquitlam",
    heroBody:
      "We help Coquitlam families arrange dependable in-home care that respects routines, language needs, and the pace of family life. Whether support starts gradually or begins after a hospital stay, we make the process easier to manage.",
    heroCardTitle: "Thoughtful care for multigenerational households",
    heroCardBody:
      "Coquitlam families often want support that fits around extended family involvement, cultural preferences, and changing mobility needs.",
    introTitle: "Support That Feels Personal in Coquitlam",
    introParagraphs: [
      "Coquitlam households often rely on a mix of family support and professional care. That can work very well when responsibilities are clearly shared and the care plan is built around the home rather than around a fixed agency routine.",
      "We help with personal care, dementia support, companionship, home support, and recovery planning. Many Coquitlam clients need care that feels steady and relationship-based rather than rushed.",
    ],
    highlights: [
      { title: "Strong dementia and family support", body: "Coquitlam families often call when memory loss or confusion starts affecting daily routines at home.", icon: "family" },
      { title: "Culturally aware matching", body: "We help match care in ways that feel familiar, respectful, and easier for seniors to accept.", icon: "languages" },
      { title: "Flexible support over time", body: "Plans can begin with companionship or light help and grow as mobility or care needs increase.", icon: "clock" },
      { title: "Trusted caregiver standards", body: "Families get screened caregivers and clear care coordination from the start.", icon: "shield" },
    ],
    serviceIntro:
      "Families in Coquitlam often need a combination of dementia support, personal care, companionship, and home help. These linked service pages reflect the most common local care pathways.",
    featuredServiceIds: ["dementia-care", "personal-care", "companionship", "home-support", "respite-care", "live-in-care"],
    careSituations: [
      "A loved one with early dementia who needs more structure and reassurance at home.",
      "An older adult who is safe at home for now but needs help with hygiene, mobility, and medication reminders.",
      "Family caregivers who want regular respite without feeling disconnected from the care plan.",
      "A household where language and personality fit are just as important as care skills.",
    ],
    neighborhoodsTitle: "Communities We Support Across Coquitlam",
    neighborhoodsIntro:
      "Requests often come from family homes, retirement communities, and quiet residential areas where seniors want to remain near loved ones and familiar routines.",
    neighborhoods: ["Westwood Plateau", "Burke Mountain", "Maillardville", "Coquitlam Centre", "Austin Heights", "Ranch Park", "River Springs", "Cape Horn"],
    processTitle: "How Care Usually Begins in Coquitlam",
    processBody:
      "The first conversation is often about what the family is already doing, where the strain is building, and what support would feel most helpful without overwhelming the senior.",
    faqItems: [
      { question: "Do you provide dementia care in Coquitlam?", answer: "Yes. Dementia and memory-care support is one of the most common reasons families in Coquitlam reach out to us." },
      { question: "Can we start with just a few visits each week?", answer: "Yes. Many families begin with lighter support and increase the schedule only if it becomes necessary." },
      { question: "Can you match a caregiver by language or cultural fit?", answer: "We do our best to match by communication needs, cultural comfort, and personality as well as care skills." },
      { question: "Do you support family caregivers who need breaks?", answer: "Yes. Respite care is a common request in Coquitlam, especially when family members are managing care alongside work and parenting." },
    ],
    nearbyCities: ["Burnaby", "New Westminster", "Maple Ridge", "Surrey", "Vancouver"],
  },
  langley: {
    slug: "langley",
    name: "Langley",
    heroTitle: "Home Care in Langley That Works Around Family Routines",
    heroBody:
      "Langley families often need care that is practical, dependable, and flexible enough to fit changing routines. We provide in-home support for seniors, older adults, and families who want calm, organized help at the right level.",
    heroCardTitle: "Care that adapts as needs change",
    heroCardBody:
      "Families in Langley often start with light support and then build toward more hands-on personal care, respite, or overnight help over time.",
    introTitle: "Reliable In-Home Support for Langley Families",
    introParagraphs: [
      "In Langley, many families want a care plan that feels steady and easy to manage without making home life feel clinical. That can mean support with hygiene, meals, mobility, medication reminders, or companionship.",
      "We also hear from families who need help after surgery, during caregiver burnout, or when a loved one can no longer manage safely at home alone. The goal is always to reduce pressure while preserving dignity.",
    ],
    highlights: [
      { title: "Good fit for gradual care starts", body: "Many Langley families begin with a few visits per week and adjust after seeing what really helps.", icon: "clock" },
      { title: "Support for caregiver burnout", body: "Respite and shared-care planning are common needs when family members have been carrying the load for too long.", icon: "family" },
      { title: "Screened, dependable team", body: "We focus on consistency, thoughtful matching, and professional standards from the beginning.", icon: "shield" },
      { title: "Respectful communication at home", body: "Language and household comfort matter, especially when care is being introduced slowly.", icon: "languages" },
    ],
    serviceIntro:
      "Langley families often need care that combines hands-on daily support with relief for family caregivers. The linked services below reflect those common local needs.",
    featuredServiceIds: ["personal-care", "home-support", "respite-care", "post-surgery", "companionship", "live-in-care"],
    careSituations: [
      "An older adult who is still at home but no longer managing morning or evening routines safely.",
      "A family caregiver who needs dependable relief while still staying involved in the plan.",
      "A loved one recovering from surgery who needs short-term support before returning to normal routines.",
      "A senior who is mostly independent but benefits from companionship and practical weekly support.",
    ],
    neighborhoodsTitle: "Where We Commonly Help in Langley",
    neighborhoodsIntro:
      "We support families in central neighbourhoods, larger residential communities, and homes where family caregivers want reliable in-home backup.",
    neighborhoods: ["Willoughby", "Walnut Grove", "Brookswood", "Murrayville", "Fort Langley", "Aldergrove", "Langley City", "Salmon River"],
    processTitle: "A Practical Start to Care in Langley",
    processBody:
      "We focus first on what the family is managing now, where the stress points are, and what type of support will make the biggest immediate difference at home.",
    faqItems: [
      { question: "Can we start with companionship or light support only?", answer: "Yes. Many Langley families prefer to introduce care gradually, starting with lighter visits before adding more hands-on support." },
      { question: "Do you offer respite care in Langley?", answer: "Yes. Respite support is one of the most common reasons families in Langley contact us." },
      { question: "Can care be adjusted if needs increase later?", answer: "Absolutely. We can update the care plan, increase visits, or add other services as the situation changes." },
      { question: "Do you help after surgery or a short hospital stay?", answer: "Yes. We often support clients in Langley with mobility, meals, medication routines, and personal care during recovery." },
    ],
    nearbyCities: ["Surrey", "Abbotsford", "Maple Ridge", "Mission", "Vancouver"],
  },
  "maple-ridge": {
    slug: "maple-ridge",
    name: "Maple Ridge",
    heroTitle: "Home Care Services in Maple Ridge with a Personal Touch",
    heroBody:
      "We help Maple Ridge families arrange home care that feels warm, organized, and sustainable. Whether the need is immediate or still developing, our team helps older adults stay safe and comfortable at home.",
    heroCardTitle: "Support for everyday routines and long-term care changes",
    heroCardBody:
      "Maple Ridge families often call when daily routines are becoming harder to manage or when a caregiver needs regular support to keep going.",
    introTitle: "Support for Real Family Life in Maple Ridge",
    introParagraphs: [
      "Home care in Maple Ridge is often about preserving normal routines while reducing stress on the people already helping. That might mean support with personal care, meal preparation, mobility, companionship, or recovery after illness.",
      "We work with seniors, spouses, and adult children who want dependable care without feeling like they are handing everything over. Clear planning and consistency matter just as much as the hands-on service itself.",
    ],
    highlights: [
      { title: "Care that supports family involvement", body: "We help build a plan that works alongside the support already being provided by relatives.", icon: "family" },
      { title: "Good fit for evolving care needs", body: "Many Maple Ridge clients begin with practical support and later add personal care, overnight help, or respite.", icon: "clock" },
      { title: "Reliable caregiver standards", body: "Families can expect screened caregivers and strong communication from the start.", icon: "shield" },
      { title: "Comfort-focused matching", body: "We look at personality, communication style, and household comfort in addition to care tasks.", icon: "languages" },
    ],
    serviceIntro:
      "Maple Ridge families often look for a blend of practical support, companionship, respite, and care after health changes. These linked services reflect those common requests.",
    featuredServiceIds: ["home-support", "personal-care", "companionship", "respite-care", "hospital-recovery", "meal-preparation"],
    careSituations: [
      "A senior who is staying at home but struggling with meals, laundry, and personal routines.",
      "A spouse or adult child who needs regular support so caregiving remains sustainable.",
      "A loved one who needs more supervision after illness or changes in mobility.",
      "A family trying to avoid a rushed move into higher-support living before exploring home care first.",
    ],
    neighborhoodsTitle: "Communities We Serve Around Maple Ridge",
    neighborhoodsIntro:
      "We support clients across established family areas, quieter neighbourhoods, and homes where care needs are growing but independence still matters deeply.",
    neighborhoods: ["Albion", "Hammond", "Silver Valley", "Cottonwood", "Kanaka Creek", "Whonnock", "West Maple Ridge", "Yennadon"],
    processTitle: "How Families Usually Begin Care in Maple Ridge",
    processBody:
      "We start by understanding what is becoming difficult at home, who is already helping, and how to bring in support without making routines feel overwhelming.",
    faqItems: [
      { question: "Can you help us avoid moving too quickly into facility care?", answer: "Yes. Many Maple Ridge families contact us to explore what meaningful home support can look like before making a larger transition." },
      { question: "Do you offer respite for family caregivers?", answer: "Yes. Respite is one of the most common requests we receive in Maple Ridge." },
      { question: "Can care include both companionship and practical help?", answer: "Absolutely. Many care plans combine social support with meals, light housekeeping, reminders, and assistance around the home." },
      { question: "How quickly can services start in Maple Ridge?", answer: "In many cases, care can begin within 48 hours after the assessment, depending on the type of support and schedule needed." },
    ],
    nearbyCities: ["Mission", "Langley", "Surrey", "Coquitlam", "Burnaby"],
  },
  mission: {
    slug: "mission",
    name: "Mission",
    heroTitle: "Mission Home Care Services for Seniors and Family Caregivers",
    heroBody:
      "We provide dependable in-home care in Mission for families who want practical support, consistent routines, and the flexibility to adjust care over time. Our role is to make daily life feel more manageable without taking away dignity.",
    heroCardTitle: "Calm support for homes where routines matter",
    heroCardBody:
      "Mission families often need care that feels steady, familiar, and easy to coordinate across family members and changing health needs.",
    introTitle: "Dependable Care at Home in Mission",
    introParagraphs: [
      "Families in Mission often want home care that feels personal and low-pressure. That can include help with bathing, dressing, mobility, meal routines, companionship, or respite for a spouse or adult child.",
      "We also support clients who are returning home after a hospital stay or who need more structure because routines have become difficult to manage safely. The care plan is shaped around the home, not around a generic schedule.",
    ],
    highlights: [
      { title: "Strong support for shared family care", body: "We regularly work alongside family members who remain actively involved in the daily routine.", icon: "family" },
      { title: "Flexible scheduling for practical needs", body: "Mission families often ask for a mix of morning help, daytime visits, and check-ins that can change over time.", icon: "clock" },
      { title: "Professional standards without pressure", body: "Our process is organized, but the experience remains calm and family-centered.", icon: "shield" },
      { title: "Comfort and communication matter", body: "Matching by communication style and household comfort can make care easier to accept.", icon: "languages" },
    ],
    serviceIntro:
      "Mission families often need care that combines practical support, caregiver relief, and help after health changes. These service links reflect the most common local requests.",
    featuredServiceIds: ["personal-care", "home-support", "respite-care", "hospital-recovery", "companionship", "live-in-care"],
    careSituations: [
      "A loved one who is no longer managing morning and evening routines confidently.",
      "A family caregiver who needs regular breaks to keep care stable at home.",
      "A senior coming home from hospital and needing support for the first stage of recovery.",
      "An older adult who would benefit from structured companionship and practical household help.",
    ],
    neighborhoodsTitle: "Areas We Commonly Support in Mission",
    neighborhoodsIntro:
      "We help clients in central neighbourhoods, family homes, and more spread-out residential areas where reliable scheduling matters.",
    neighborhoods: ["Mission Central", "Cedar Valley", "Hatzic", "Stave Falls", "Silverdale", "Ferndale", "Cherry Hill", "West Heights"],
    processTitle: "Starting Home Care in Mission",
    processBody:
      "The first step is understanding what tasks are becoming difficult, who in the family is already helping, and where professional support will make home life noticeably easier.",
    faqItems: [
      { question: "Do you support families outside the busiest parts of Mission?", answer: "Yes. We review location and scheduling needs carefully so the care plan works reliably for the home and the family." },
      { question: "Can you provide respite care in Mission?", answer: "Yes. Respite is a key service for families in Mission who are balancing work, caregiving, and other responsibilities." },
      { question: "Can care begin after a sudden change in health?", answer: "Yes. If a loved one has had a recent hospital stay or health setback, we can help assess the right next steps quickly." },
      { question: "Do you only help with medical needs?", answer: "No. Many Mission clients need practical day-to-day support, companionship, and home routines more than clinical care." },
    ],
    nearbyCities: ["Abbotsford", "Maple Ridge", "Langley", "Surrey", "Coquitlam"],
  },
  "new-westminster": {
    slug: "new-westminster",
    name: "New Westminster",
    heroTitle: "Home Care in New Westminster for Seniors Living at Home",
    heroBody:
      "We help New Westminster families arrange compassionate, well-organized home care for seniors and older adults who want to remain in familiar surroundings. Support can begin lightly or start after a major health change.",
    heroCardTitle: "Support that works in compact homes and apartment living",
    heroCardBody:
      "New Westminster families often need care that fits apartments, older homes, and schedules shared across family members in nearby cities.",
    introTitle: "Practical Home Support for Daily Life in New Westminster",
    introParagraphs: [
      "In New Westminster, many families are supporting loved ones in apartments, condos, and established neighbourhood homes where routine and familiarity matter a great deal. That often means care has to be calm, flexible, and easy to coordinate.",
      "We support clients with personal care, post-hospital recovery, companionship, meal preparation, respite, and help around the home. The goal is to reduce risk and stress without making home feel less like home.",
    ],
    highlights: [
      { title: "Well-suited for apartment and condo routines", body: "Building access, elevator timing, and efficient visits are often part of the planning.", icon: "family" },
      { title: "Helpful after hospital discharge", body: "New Westminster families often call when a loved one is coming home and needs practical recovery support.", icon: "clock" },
      { title: "Consistent caregiver quality", body: "Our team focuses on screening, thoughtful matching, and clear coordination.", icon: "shield" },
      { title: "Communication that feels respectful", body: "Language and comfort at home are considered along with the care tasks themselves.", icon: "languages" },
    ],
    serviceIntro:
      "Common needs in New Westminster include personal support, post-hospital help, companionship, and meal or household routines. These service pages help families explore those options in more detail.",
    featuredServiceIds: ["hospital-recovery", "personal-care", "companionship", "meal-preparation", "home-support", "nursing-care"],
    careSituations: [
      "A loved one returning home after a hospital stay who needs help re-establishing safe routines.",
      "An older adult in an apartment who needs assistance with mobility, bathing, and meal support.",
      "A senior who is increasingly isolated and benefits from companionship and regular structure.",
      "Family members living in Burnaby or Vancouver who want support closer to the client's home in New Westminster.",
    ],
    neighborhoodsTitle: "Neighbourhoods We Commonly Serve in New Westminster",
    neighborhoodsIntro:
      "We support clients in apartment communities, established residential areas, and homes where family members want reliable local care instead of constant commuting.",
    neighborhoods: ["Uptown", "Downtown", "Sapperton", "Queensborough", "Connaught Heights", "Glenbrooke North", "West End", "Brow of the Hill"],
    processTitle: "How Care Typically Begins in New Westminster",
    processBody:
      "We start by understanding the home setup, the health situation, and what kind of support will make daily life safer and more manageable right away.",
    faqItems: [
      { question: "Do you provide post-hospital home care in New Westminster?", answer: "Yes. Recovery support after discharge is one of the most common reasons local families contact us." },
      { question: "Can care work well in apartments or condo buildings?", answer: "Yes. We regularly support clients in apartments and coordinate visits around building access and practical routines." },
      { question: "Do you offer companionship as well as personal care?", answer: "Absolutely. Many New Westminster care plans combine social support with personal routines, meals, and mobility help." },
      { question: "Can my family still stay closely involved?", answer: "Yes. We often support families where adult children or relatives remain involved but need dependable in-home help." },
    ],
    nearbyCities: ["Burnaby", "Coquitlam", "Surrey", "Richmond", "Vancouver"],
  },
  richmond: {
    slug: "richmond",
    name: "Richmond",
    heroTitle: "Richmond Home Care Services with Language and Cultural Fit in Mind",
    heroBody:
      "We provide home care in Richmond for families who want dependable support, strong communication, and care that feels culturally comfortable at home. Our plans are built around daily routines, family involvement, and practical needs.",
    heroCardTitle: "A strong fit for multilingual and multigenerational households",
    heroCardBody:
      "Richmond families often care deeply about communication, cultural comfort, food routines, and a caregiver match that feels natural in the home.",
    introTitle: "Home Care in Richmond That Respects Daily Routine and Comfort",
    introParagraphs: [
      "In Richmond, families often want care that supports both health and household harmony. That can mean help with personal care, companionship, meals, routines, and recovery, but it also means respecting communication preferences and family roles.",
      "We help clients who need gradual support as well as families facing more urgent situations after hospitalization, cognitive decline, or caregiver burnout. The right caregiver match matters just as much as the task list.",
    ],
    highlights: [
      { title: "Multilingual caregiver matching", body: "Richmond families frequently request support that feels easier and more natural in the preferred spoken language.", icon: "languages" },
      { title: "Respect for family-led care decisions", body: "We understand that decisions are often made collaboratively across generations.", icon: "family" },
      { title: "Reliable support after health changes", body: "Care can begin after surgery, hospitalization, or when mobility and routine become harder to manage.", icon: "clock" },
      { title: "Strong trust and screening standards", body: "Families can expect a professional process and consistent communication from our team.", icon: "shield" },
    ],
    serviceIntro:
      "In Richmond, common requests often include personal care, meal support, companionship, recovery care, and dementia-related help. These service pages connect directly to those needs.",
    featuredServiceIds: ["personal-care", "meal-preparation", "companionship", "dementia-care", "hospital-recovery", "nursing-care"],
    careSituations: [
      "A senior who is more comfortable receiving support from someone who speaks their preferred language.",
      "A family that wants practical daily help but also values cultural familiarity and respectful communication.",
      "A loved one returning home after a hospital stay and needing structure around meals, medication, and mobility.",
      "An adult child coordinating care across siblings while trying to keep a parent at home comfortably.",
    ],
    neighborhoodsTitle: "Neighbourhoods We Commonly Serve in Richmond",
    neighborhoodsIntro:
      "We support clients throughout Richmond in apartments, townhomes, and family homes where routine, food preferences, and communication style all matter.",
    neighborhoods: ["Steveston", "Broadmoor", "Terra Nova", "Brighouse", "Ironwood", "Seafair", "West Cambie", "Thompson"],
    processTitle: "How Care Begins in Richmond",
    processBody:
      "We begin by learning how the household works day to day, who is involved in decisions, and what kind of caregiver match will feel both practical and comfortable.",
    faqItems: [
      { question: "Can you match a caregiver by language in Richmond?", answer: "We do our best to match by language and communication comfort whenever possible. That is a common request from Richmond families." },
      { question: "Do you help with meals and routine support as well as personal care?", answer: "Yes. Many Richmond clients need a blended care plan that includes food routines, companionship, mobility help, and personal care." },
      { question: "Is dementia care available in Richmond?", answer: "Yes. We support families dealing with memory loss, confusion, wandering concerns, and changing routines at home." },
      { question: "Can family members stay closely involved in the care plan?", answer: "Absolutely. We regularly work with families who want to remain very involved while bringing in professional support." },
    ],
    nearbyCities: ["Vancouver", "Burnaby", "New Westminster", "Surrey", "Coquitlam"],
  },
  surrey: {
    slug: "surrey",
    name: "Surrey",
    heroTitle: "Trusted Home Care Services in Surrey for Seniors and Families",
    heroBody:
      "We help Surrey families arrange dependable in-home care with clear communication, fast response times, and support that adapts as needs change. Whether the concern is daily routines, dementia, recovery, or family caregiver burnout, we build the care plan around the household.",
    heroCardTitle: "One of our busiest family care communities",
    heroCardBody:
      "Surrey families often reach out for a mix of personal care, companionship, dementia support, and practical help that can begin quickly.",
    introTitle: "Home Care in Surrey Built Around Real Family Needs",
    introParagraphs: [
      "Surrey families often manage care across multiple households, work schedules, and generations. That means home care has to feel organized, responsive, and easy to adjust without creating extra confusion.",
      "We support seniors who want to remain at home with dignity and families who need reliable help with bathing, mobility, routines, companionship, meals, or recovery after illness. Many of our Surrey clients begin with one service and add more only when it makes sense.",
    ],
    highlights: [
      { title: "Fast local response", body: "Surrey is one of the areas where families most often call us for urgent support after discharge or sudden change.", icon: "clock" },
      { title: "Strong support for family caregivers", body: "We regularly help households where adult children and spouses are carrying a large share of care.", icon: "family" },
      { title: "Trusted caregiver matching", body: "Families want both competence and comfort. We focus on screening, fit, and clear communication.", icon: "shield" },
      { title: "Multilingual household support", body: "Surrey families often value care that respects language and cultural comfort in the home.", icon: "languages" },
    ],
    serviceIntro:
      "Surrey families commonly ask for blended care plans across personal support, dementia care, respite, and recovery. These service pages create stronger internal links around those local needs.",
    featuredServiceIds: ["personal-care", "dementia-care", "respite-care", "companionship", "hospital-recovery", "live-in-care"],
    careSituations: [
      "A parent who needs help with daily routines but wants to remain in their own home.",
      "A family that needs urgent support after hospitalization or a health setback.",
      "A household where dementia or memory loss is beginning to affect safety and consistency.",
      "A caregiver who needs structured respite to prevent burnout and keep care stable long-term.",
    ],
    neighborhoodsTitle: "Where We Provide Home Care Across Surrey",
    neighborhoodsIntro:
      "We support families across larger suburban neighbourhoods, busy multigenerational households, and homes where seniors want consistent help without leaving their community.",
    neighborhoods: ["Fleetwood", "Guildford", "Newton", "Cloverdale", "South Surrey", "Whalley", "Fraser Heights", "Panorama Ridge"],
    processTitle: "How Families Usually Start Care in Surrey",
    processBody:
      "We begin by understanding the immediate pressure points, the longer-term goals, and what kind of support will create relief without making the transition feel abrupt.",
    faqItems: [
      { question: "How quickly can home care start in Surrey?", answer: "Surrey is one of our busiest service areas, and in many cases care can begin within 48 hours after the assessment. Urgent cases are reviewed as quickly as possible." },
      { question: "Do you provide dementia support in Surrey?", answer: "Yes. Dementia and memory-related support is one of the most common reasons Surrey families contact us." },
      { question: "Can you help if our family needs a mix of services?", answer: "Absolutely. Many Surrey care plans combine personal care, companionship, home support, respite, and recovery help under one plan." },
      { question: "Can we request a caregiver who speaks our language?", answer: "We do our best to match by communication style, language, and household comfort whenever possible." },
    ],
    nearbyCities: ["Langley", "Burnaby", "Richmond", "Coquitlam", "Vancouver"],
  },
  vancouver: {
    slug: "vancouver",
    name: "Vancouver",
    heroTitle: "Professional Home Care Services in Vancouver",
    heroBody:
      "We provide in-home care across Vancouver for seniors and families who want dependable support, thoughtful communication, and a plan that can work in apartments, heritage homes, and fast-moving city schedules. Our approach stays calm, personal, and practical.",
    heroCardTitle: "Ideal for families balancing distance, work, and care",
    heroCardBody:
      "Vancouver families often need support that keeps a loved one safe at home while adult children manage work, travel, and caregiving from different parts of the city.",
    introTitle: "Home Care That Works for Vancouver Families",
    introParagraphs: [
      "In Vancouver, many families are trying to coordinate support across demanding work schedules, apartment living, medical appointments, and adult children who may not live nearby. That means home care needs to be organized and easy to trust.",
      "We support seniors who need personal care, companionship, mobility help, meal routines, recovery support, or more structured daily oversight. The goal is to make home life safer and more manageable without losing warmth or dignity.",
    ],
    highlights: [
      { title: "Efficient support in urban homes", body: "We regularly plan care around apartments, parking, elevators, and time-sensitive city routines.", icon: "clock" },
      { title: "Helpful for families living apart", body: "Many Vancouver clients have adult children who want updates and reliability even when they cannot be present every day.", icon: "family" },
      { title: "Consistent professional standards", body: "Screening, clear communication, and caregiver matching all matter when families are placing trust in outside help.", icon: "shield" },
      { title: "Language-sensitive care options", body: "We support households where communication style and cultural comfort are central to a successful care match.", icon: "languages" },
    ],
    serviceIntro:
      "Vancouver families frequently look for care that blends practical daily support with companionship, recovery help, and flexible scheduling. These linked service pages support that local search structure.",
    featuredServiceIds: ["personal-care", "companionship", "nursing-care", "hospital-recovery", "meal-preparation", "live-in-care"],
    careSituations: [
      "A senior in a Vancouver apartment who needs daily support but wants to remain independent at home.",
      "An adult child who lives across the city and needs a reliable care partner for a parent.",
      "A loved one who has come home after surgery or hospital treatment and needs structure for recovery.",
      "A family looking for a more stable alternative to piecing together support informally week by week.",
    ],
    neighborhoodsTitle: "Areas We Commonly Support in Vancouver",
    neighborhoodsIntro:
      "We provide home care across Vancouver in apartments, townhomes, and detached homes where seniors want familiar routines and families want more peace of mind.",
    neighborhoods: ["Kitsilano", "Marpole", "Mount Pleasant", "Kerrisdale", "Dunbar", "East Vancouver", "West End", "Fraserview"],
    processTitle: "How Care Usually Begins in Vancouver",
    processBody:
      "The first conversation focuses on the home setup, the family schedule, and what type of help will make the biggest difference right away without overcomplicating the plan.",
    faqItems: [
      { question: "Do you provide home care throughout Vancouver?", answer: "Yes. We support clients across Vancouver and coordinate based on the care plan, location, and schedule needed." },
      { question: "Can you help if family members do not live nearby?", answer: "Yes. That is a common reason Vancouver families reach out. We help create structure and clear communication when relatives cannot be present every day." },
      { question: "Do you offer professional nursing support in Vancouver?", answer: "Yes. Nursing care is available for clients who need more clinical support at home in addition to everyday care routines." },
      { question: "Can care begin after a hospital stay in Vancouver?", answer: "Absolutely. Post-hospital recovery is one of the most common pathways into care for Vancouver families." },
    ],
    nearbyCities: ["Burnaby", "Richmond", "New Westminster", "Surrey", "Coquitlam"],
  },
};

