# COMPLETE BUILD PROMPT: Advanced Home Health — Website + AI System
# Company: 1A Advanced Home Health Care Services
# Reference Website: https://advancedhomehealth.ca
# Built By: MGrid Technologies
# Version: Final — All Phases Included

---

## IMPORTANT INSTRUCTION TO EMERGENT

Build everything in this prompt as one complete, connected system.
Do not skip any section. Do not simplify any form, page, or phase.
Every detail in this document is intentional and required.
This is a production-grade prototype — not a wireframe.

---

## PROJECT OVERVIEW

Build a complete, high-fidelity, fully responsive website and AI-powered
lead generation system for a home healthcare company operating across
Surrey, Vancouver, and the Lower Mainland of British Columbia, Canada.

This is not a generic template. It must feel calm, professional,
trustworthy, and family-centered. The website serves seniors, adult
children looking for care for aging parents, hospital discharge planners,
and referral partners.

The system has 7 integrated phases:
- Phase 1: Website (8 main pages)
- Phase 2: Forms (4 lead capture forms)
- Phase 3: Components Library (20 reusable components)
- Phase 4: AI Chat (OpenAI-powered intelligent lead capture)
- Phase 5: Voice Assistant (Speech-to-text + Text-to-speech)
- Phase 6: Tracking System (UTM + Event tracking + Analytics)
- Phase 7: Admin Dashboard (Lead management + Analytics + Chat logs)

Build the following 8 main pages in full:
1. Homepage
2. About Us
3. Services Hub
4. Service Page Template (Personal Care Services as example)
5. Contact Us
6. Care Process
7. Why Choose Us
8. Referral Partners

---

## TECH STACK

Framework:          Next.js 14 (App Router)
Language:           TypeScript
Styling:            Tailwind CSS
Component Library:  shadcn/ui
CMS:                Sanity (structure only — no live data for prototype)
Database:           Supabase (PostgreSQL — leads, chat logs, tracking events)
Fonts:              Inter (all weights) from Google Fonts
Icons:              Lucide React
Animations:         Framer Motion (subtle only)
Hosting Target:     Vercel
AI Chat Engine:     OpenAI GPT-4o (via API route)
Speech-to-Text:     OpenAI Whisper API
Text-to-Speech:     OpenAI TTS API
Analytics:          Google Analytics 4 (GA4) + Google Tag Manager (GTM)
Admin Auth:         Static — hardcoded credentials + localStorage session
Charts:             Recharts (admin dashboard analytics)

---

## DESIGN SYSTEM

### Color Palette

Primary Navy:       #1C2E4A  (headers, nav, primary buttons, admin sidebar)
Warm Gold:          #C49B3C  (accent, CTAs, hover states, icons)
Light Gold:         #F5EDD6  (soft section backgrounds, card highlights)
Off White:          #F9F7F4  (alternating section backgrounds)
Pure White:         #FFFFFF  (main page background, card backgrounds)
Dark Text:          #1A1A2E  (all headings)
Body Text:          #4A5568  (paragraphs, descriptions)
Muted Text:         #718096  (captions, labels, helper text)
Border:             #E8E4DC  (card borders, dividers)
Success Green:      #2D7D4F  (confirmations, checkmarks)
Danger Red:         #C53030  (errors, required field indicators)
Chat Blue:          #2563EB  (AI chat user bubble)
Chat Gray:          #F3F4F6  (AI chat bot bubble background)
Voice Active:       #EF4444  (mic button when recording — red pulse)
WhatsApp Green:     #25D366  (WhatsApp FAB)
Admin Purple:       #7C3AED  (admin dashboard accent)

### Typography

Font family: Inter (all weights via Google Fonts)

H1:   52px / 700 weight / line-height 1.2 / Dark Text / desktop
      36px / 700 weight / line-height 1.25 / mobile
H2:   40px / 600 weight / line-height 1.3 / Dark Text / desktop
      28px / 600 weight / mobile
H3:   26px / 600 weight / line-height 1.4 / Dark Text / desktop
      20px / 600 weight / mobile
H4:   20px / 600 weight / Dark Text
Body large:   18px / 400 weight / line-height 1.75 / Body Text
Body regular: 16px / 400 weight / line-height 1.7 / Body Text
Body small:   14px / 400 weight / Muted Text
Label:        13px / 500 weight / uppercase / letter-spacing 0.06em
Chat text:    14px / 400 weight / line-height 1.6

### Spacing System
Section padding: py-20 desktop, py-12 mobile
Container: max-w-7xl mx-auto px-6

### Border Radius
Cards:          rounded-xl (12px)
Buttons:        rounded-lg (8px)
Inputs:         rounded-lg (8px)
Chat bubbles:   rounded-2xl (16px)
Admin cards:    rounded-xl (12px)
Badges/pills:   rounded-full

### Shadows
Cards:          shadow-sm default, shadow-md on hover
Chat widget:    shadow-2xl
Admin sidebar:  shadow-lg
No heavy drop shadows — keep it clean

### Button Styles

Primary Button (Gold):
  Background: #C49B3C
  Text: #FFFFFF
  Padding: px-7 py-3.5
  Font: 15px / 600 weight
  Border radius: rounded-lg
  Hover: #A8832E, scale 1.02
  Active: scale 0.98

Secondary Button (Navy):
  Background: transparent
  Border: 2px solid #1C2E4A
  Text: #1C2E4A
  Hover: bg-[#1C2E4A] text-white

Ghost Button:
  Background: transparent
  Text: #C49B3C
  Hover: underline

Phone CTA Button:
  Background: #1C2E4A
  Text: #FFFFFF
  Left icon: Phone (Lucide)

### Card Style
Background: white
Border: 1px solid #E8E4DC
Border radius: rounded-xl
Padding: p-6
Hover: border-color #C49B3C, shadow-md, -translate-y-0.5
Transition: all 200ms ease

---

## GLOBAL NAVIGATION (HEADER)

Sticky header that changes from transparent to white with shadow on scroll.
Desktop shows full nav. Mobile shows hamburger.

### Desktop Header Layout
[Logo — left] .................. [Nav — center] .................. [Phone + CTA — right]

Logo:
  Text fallback: "1A Advanced Home Health" in Navy #1C2E4A, Inter 600.
  Small gold cross/plus icon before text.
  Reference: https://advancedhomehealth.ca for actual logo.

Navigation Links:
  Home | Services ▾ | Cities ▾ | About | Referrals | Blog
  Font: 15px / 500 / Dark Text
  Hover: #C49B3C with transition

Services Dropdown (mega menu on hover):
  2-column grid, white bg, rounded-xl, shadow-lg, border:
  Column 1:
    Personal Care Services
    Home Support Services
    Professional Nursing Care
    Companionship & Recreation
    Hospital Recovery Care
    Meal Preparation & Diet Planning
  Column 2:
    Dementia & Alzheimer's Care    → gold pill "New"
    Respite Care                   → gold pill "New"
    Palliative & End-of-Life Care  → gold pill "New"
    Post-Surgery Recovery          → gold pill "New"
    Overnight & Live-in Care       → gold pill "New"
    Veterans Home Care             → gold pill "New"

Cities Dropdown:
  2-column grid:
  Abbotsford | Burnaby | Coquitlam | Langley | Maple Ridge
  Mission | New Westminster | Richmond | Surrey | Vancouver

Right side of header:
  Phone: "(236) 616-0007" — Navy, phone icon, 15px/600
  CTA Button: "Free Assessment" — Primary Gold button

### Mobile Header
Logo left | Hamburger right (3 lines, Navy)
Full-screen slide-in drawer from right:
  All nav links stacked, 18px
  Services and Cities as accordions
  Phone number large at bottom
  "Get Free Assessment" Gold primary button
  "WhatsApp Us" ghost button below
  "Try AI Assistant" button (Chat Blue) — triggers chat widget

---

## GLOBAL FOOTER

### Top Strip (Navy #1C2E4A):
Large centered text: "Ready to talk? We're available 24 hours a day,
7 days a week, 365 days a year."
Two buttons: [Call (236) 616-0007] [Get Free Assessment]

### Main Footer Body (background: #162438):
Text: white / 70% opacity for secondary

Column 1 — Company:
  Logo (white version)
  Tagline: "Compassionate home care across BC's Lower Mainland."
  Phone: (236) 616-0007
  Email: nurse@advancedhomehealth.ca
  Facebook + Instagram icons (white, hover gold)
  Language selector (14 languages)

Column 2 — Our Services:
  Label: "OUR SERVICES" (gold 13px uppercase)
  All 12 services as links (white, hover gold)

Column 3 — Service Areas:
  Label: "SERVICE AREAS" (gold 13px uppercase)
  All 10 cities as links (white, hover gold)

Column 4 — Company:
  Label: "COMPANY" (gold 13px uppercase)
  About Us | Care Process | Why Choose Us | Referral Partners
  Careers | Blog | Contact Us | Booking

### Bottom Bar (background: #0F1E30):
Left: "© 2025 1A Advanced Home Health Care Services. All rights reserved."
Right: Privacy Policy | Terms of Service
Font: 13px muted

---

## FLOATING & STICKY ELEMENTS (All Pages — Fixed Global Positions)

### 1. WhatsApp FAB — BOTTOM LEFT
Position: fixed bottom-6 LEFT-6 (z-index: 50)
Style: circular 56px, background #25D366
Icon: WhatsApp (white, 24px)
Tooltip on hover: "Chat on WhatsApp"
On click: opens wa.me/12366160007 with prefilled message:
  "Hi, I'm interested in home care services. Can you help me?"
Animation: green pulse ring, 2-second loop
Label below button (12px white bg navy pill): "WhatsApp"

### 2. AI Chat Widget — BOTTOM RIGHT
Position: fixed bottom-6 RIGHT-6 (z-index: 50)
(Full specification in Phase 4 section below)

### 3. Voice Assistant Floating Button — ABOVE CHAT (RIGHT SIDE)
Position: fixed bottom-24 RIGHT-6 (z-index: 50)
(Sits directly above the chat widget button)
Style: circular 48px, background #1C2E4A (Navy)
Icon: Mic (Lucide, white, 20px)
Tooltip on hover: "Talk to our AI assistant"
Label below button (12px): "Voice"
When clicked: activates voice input, same AI pipeline as chat
When recording: button pulses red (#EF4444 ring animation)
(Full specification in Phase 5 section below)

### 4. Sticky Mobile Call Bar — BOTTOM (Mobile only, md:hidden)
Position: fixed bottom-0 left-0 right-0 (z-index: 60)
Height: 56px, background: #1C2E4A
Two equal buttons side by side:
  Left: [📞 Call Now] → tel:2366160007
  Right: [📋 Free Assessment] → /booking
Both white text, 15px/600

### 5. Language Banner — TOP (above header)
Slim banner, background: #F5EDD6
Text: "We speak your language. Select:" + 14 language flag buttons
Dismissable with X button. Font: 13px.

---

## PAGE 1: HOMEPAGE

URL: /
Title: "Home Care Services in Surrey & Lower Mainland BC | Advanced Home Health"
Meta: "Professional in-home care across Surrey, Vancouver, Coquitlam & 10 cities
in BC. Personal care, nursing, companionship & more. Available 24/7. Free assessment."

### SECTION 1 — HERO
Full viewport height desktop (min-h-screen), min-h-[600px] mobile.

Background:
  Left 60%: gradient #F9F7F4 to white
  Right 40%: caregiver with elderly person photo (warm, natural)
  Soft diagonal cut on left edge of photo

Content (left side, vertically centered):
  Gold pill badge: "Serving 10 Cities Across BC"
  H1: "Trusted Home Care, Right in the Comfort of Your Home."
  Subheading (18px, mt-4 mb-8):
    "We bring professional, compassionate care directly to your loved ones.
    Personal care, nursing, companionship, and more — available 24 hours
    a day, 365 days a year."
  CTA Row:
    Gold button: "Get a Free Assessment" → /booking
    Navy button: "📞 Call (236) 616-0007"
    Note (13px muted): "No commitment. A real person answers every call."
  Trust bar (grid grid-cols-2 md:grid-cols-4 gap-6, mt-8):
    "24/7"  → "Always Available"     → "Every day of the year"
    "10"    → "Cities Served"        → "Across Lower Mainland BC"
    "14"    → "Languages Spoken"     → "We speak your language"
    "100%"  → "Screened Caregivers"  → "Background checked & trained"
  Each trust item: large number/text in Gold, label 14px/600 Dark, sub 13px muted.

### SECTION 2 — SERVICES OVERVIEW
Background: #F9F7F4, py-20
Label: "WHAT WE OFFER" (gold uppercase 13px, centered)
H2 (centered): "Care Services Designed Around Your Needs"
Subtext (centered, 18px, max-w-2xl, mt-3 mb-12):
  "From personal hygiene assistance to professional nursing — we provide the
  right level of care for every stage of life."

Services Grid (grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6):
  12 service cards each with:
  - 48px Gold icon on 72px Light Gold circle
  - Service name (H4, 20px/600, mt-4)
  - One-line description (14px/400, mt-2)
  - "Learn more →" link (Gold)

  1. Personal Care Services — "Bathing, grooming, hygiene, and daily personal assistance."
  2. Home Support Services — "Cleaning, laundry, linen changes, pet care, household tasks."
  3. Professional Nursing Care — "Medication management, health monitoring, skilled nursing at home."
  4. Companionship & Recreation — "Conversation, games, crafts, reading, and social engagement."
  5. Hospital Recovery Care — "Transitional care after discharge — schedule, appointments, rehabilitation."
  6. Meal Preparation & Diet Planning — "Nutritious meals tailored to dietary needs and restrictions."
  7. Dementia & Alzheimer's Care [New] — "Specialized memory care — safe, structured, compassionate."
  8. Respite Care [New] — "Temporary relief for family caregivers — planned or short-notice."
  9. Palliative & End-of-Life Care [New] — "Comfort-focused care for those approaching end of life."
  10. Post-Surgery Recovery [New] — "In-home recovery after surgery — mobility, medication, daily care."
  11. Overnight & Live-in Care [New] — "Around-the-clock care for those needing 24-hour presence."
  12. Veterans Home Care [New] — "Dedicated care for veterans including VAC-funded options."

Below grid: "View all services →" link (Navy, hover Gold)

### SECTION 3 — WHY CHOOSE US
Background: White, py-20
Layout: Left text (50%) | Right photo (50%)

Left column:
  Label: "WHY FAMILIES CHOOSE US" (gold uppercase 13px)
  H2: "Care You Can Trust. People You Can Rely On."
  Body (18px, mt-4 mb-8): Intro paragraph about being a care partner not agency.
  4 trust points (space-y-6, mt-8):
    Each: Gold checkmark icon | Bold title (16px/600) | Body (15px/400)
    1. "Rigorously Screened Caregivers" + detail
    2. "Personalized Care Plans" + detail
    3. "Multilingual Team — 14 Languages" + detail
    4. "Care Starting Within 48 Hours" + detail
  Ghost Gold link: "Learn More About Our Standards" → /why-choose-us

### SECTION 4 — HOW CARE WORKS
Background: #F9F7F4, py-20
Label: "THE PROCESS" (gold uppercase 13px, centered)
H2 (centered): "How Care Starts — 3 Simple Steps"
Subtext (centered, 18px, max-w-xl, mt-3 mb-16)

Steps (grid grid-cols-1 md:grid-cols-3 gap-8):
  Dashed gold connecting line between steps (desktop only, absolute)
  Step 1: Phone icon | "01" | "Free Assessment Call" | detail | "Response within 1 hour" badge
  Step 2: ClipboardList icon | "02" | "Your Personalized Care Plan" | detail | "Within 24-48 hours" badge
  Step 3: Heart icon | "03" | "Care Begins" | detail | "Caregiver matched in 48 hours" badge

CTA below (centered, mt-12): Gold button "Book Your Free Assessment" → /booking

### SECTION 5 — GOOGLE REVIEWS
Background: White, py-20
Label: "WHAT FAMILIES SAY" (gold, centered)
H2 (centered): "Trusted by Families Across the Lower Mainland"
Star rating bar: 5 gold stars | "4.9 out of 5" | "(Based on Google Reviews)"

Reviews grid (grid grid-cols-1 md:grid-cols-3 gap-6):
  3 review cards:
    Review 1: "The caregivers have been absolutely wonderful with my mother.
    Professional, kind, and always on time."
    — Sarah M., Surrey, BC, March 2025

    Review 2: "After my father's surgery, they arranged care within 24 hours.
    The level of attention has been exceptional."
    — David K., Vancouver, BC, February 2025

    Review 3: "They matched us with a caregiver who speaks Punjabi — it made
    all the difference for our family."
    — Harpreet S., Coquitlam, BC, January 2025

Ghost Gold link: "Read All Reviews on Google →"

### SECTION 6 — CITIES WE SERVE
Background: Navy #1C2E4A, py-16
Label: "WHERE WE WORK" (gold, centered)
H2 (white, centered): "Home Care Across These Communities"
Subtext (white/70%, 16px, centered)

Cities grid (grid grid-cols-2 md:grid-cols-5 gap-4):
  10 cards: white/10 bg, border white/20, rounded-xl, p-5, text-center
  Hover: border-[#C49B3C], bg-white/15
  MapPin icon (Gold, 20px) + city name (white, 16px/600)
  Whole card is a link to /home-care-[city]

### SECTION 7 — FAQ SNIPPET
Background: #F9F7F4, py-20
Label: "COMMON QUESTIONS" (gold uppercase, centered)
H2 (centered): "Answers for Families Just Getting Started"

Layout: Left accordions (60%) | Right "Still have questions?" card (40%)

5 FAQ accordions (same component, Framer Motion expand):
  Q1: "How quickly can care start?"
  Q2: "Do I need to sign a long-term contract?"
  Q3: "How do you select and screen your caregivers?"
  Q4: "What areas do you serve?"
  Q5: "What is the cost of home care in BC?"

Right card (white, gold border-2, rounded-xl, p-8):
  H3: "Still have questions?"
  Body: "Our care coordinators are available 24/7."
  Phone: "(236) 616-0007" (22px/700 Navy)
  Buttons: "See All FAQs" (Navy) | "Chat With AI" → triggers chat widget (Gold)

### SECTION 8 — URGENT CALLBACK FORM STRIP
Background: Navy #1C2E4A, py-16
Layout: Left text (45%) | Right urgent callback form (55%)

Left text:
  H2 (white, 36px): "Need Care Quickly?"
  Body (white/80%): We call back within one hour during business hours.
  Trust note (gold, 14px): "✓ No commitment · ✓ Free assessment · ✓ Real person calls back"

Right: Urgent Callback Form (see FORMS section)

### SECTION 9 — FINAL CTA BANNER
Background: #F5EDD6, py-16, text-center
H2: "Compassionate Care Is Just One Call Away."
Body (18px, max-w-xl mx-auto, mt-3 mb-8): Reassuring paragraph.
Buttons (centered, flex gap-4 flex-wrap justify-center):
  Gold: "Book a Free Assessment" → /booking
  Navy: "📞 Call (236) 616-0007"
Below buttons (13px muted): "Available 24 hours · 7 days a week · 14 languages spoken"

---

## PAGE 2: ABOUT US

URL: /about-us
Title: "About Advanced Home Health | Home Care in Surrey & Lower Mainland BC"

### HERO (Standard inner page hero):
Background: Navy #1C2E4A, py-24
Breadcrumb: "Home / About Us" (white/60%, 13px)
H1 (white, 52px): "Committed to Care. Built on Trust."
Subheading (white/80%, 18px): Team description and 24/7 service statement.

### SECTION 2 — OUR STORY
Background: White, py-20
Layout: Right image (40%) | Left text (60%)
Label: "OUR STORY" (gold, uppercase 13px)
H2: "Why We Started Advanced Home Health"
3 body paragraphs (18px, space-y-4):
  Para 1: Company founding story and belief in dignified home care.
  Para 2: Scale — 10 cities, 14 languages, team diversity.
  Para 3: "We are not a staffing agency. We are your care partner."

### SECTION 3 — OUR VALUES
Background: #F9F7F4, py-20
Label: "WHAT GUIDES US" (gold, centered)
H2 (centered): "Our Core Values"

4 value cards (grid grid-cols-1 md:grid-cols-4 gap-6):
  1. Heart icon | "Compassion" | Every client treated with dignity.
  2. Shield icon | "Trust" | Earned through transparency and consistency.
  3. Users icon | "Family-Centered" | We work with families, not just for clients.
  4. Star icon | "Excellence" | Highest professional standards, continuous improvement.

### SECTION 4 — OUR TEAM
Background: White, py-20
Label: "THE PEOPLE BEHIND THE CARE" (gold, centered)
H2 (centered): "Meet Our Leadership Team"

Team cards (grid grid-cols-1 md:grid-cols-3 gap-8):
  Each: 96px circular photo placeholder | Name (H4) | Title (gold, 14px) | Bio

### SECTION 5 — CREDENTIALS STATS STRIP
Background: Navy, py-16
Stats (grid grid-cols-2 md:grid-cols-4, text-center):
  "10+" Cities Served | "14" Languages | "24/7" Availability | "100%" Screened

### SECTION 6 — CTA
Standard CTA strip (reuse component)

---

## PAGE 3: SERVICES HUB

URL: /services
Title: "Home Care Services in Surrey & Lower Mainland BC | All Services"

### HERO
H1: "Comprehensive Home Care Services for Every Need"
Subheading: Full range of in-home services description.

### SECTION 2 — SERVICES INTRO
Background: White, py-16, centered max-w-3xl
Body (18px): Intro on choosing the right care.
2 info boxes side by side (grid grid-cols-1 md:grid-cols-2 gap-6):
  Box 1 (bg-[#F5EDD6]): Not sure what care? → Call Us button (Navy)
  Box 2 (bg-[#F9F7F4]): Ready to get started? → Book Assessment button (Gold)

### SECTION 3 — CORE SERVICES
Background: #F9F7F4, py-20
Label: "CORE SERVICES" (gold uppercase)
H2: "Our Core Home Care Services"
6-card expanded grid: same cards but with 4-item checklist per card,
"Full details & FAQ →" link (Gold)

### SECTION 4 — SPECIALIZED SERVICES
Background: White, py-20
Label: "SPECIALIZED CARE" (gold uppercase)
H2: "Specialized Care Services"
6-card grid with "Now Available" gold badge on each card

### SECTION 5 — FAQ + CTA STRIP (reuse components)

---

## PAGE 4: SERVICE PAGE TEMPLATE
## (Example: Personal Care Services)

URL: /services/personal-care
Title: "Personal Care Services in Surrey & Lower Mainland BC | Advanced Home Health"
Meta: "Professional personal care at home — bathing, grooming, hygiene, and daily
assistance. Serving Surrey, Vancouver, Coquitlam & 10 BC cities. Free assessment."

### SECTION 1 — SERVICE HERO
Background: Navy, py-20
Breadcrumb: "Home / Services / Personal Care Services"
Left content (60%):
  Gold label pill: "Personal Care Services"
  H1 (white): "Personal Care Services in Surrey & the Lower Mainland"
  Subheading (white/80%, 18px): Respectful, dignified personal assistance description.
  CTAs: "Request This Service" (Gold) | "📞 Call (236) 616-0007" (white ghost)
  Trust note (white/60%, 13px): Screened caregivers · 48hr start · 7 days/week

Right (40%):
  White card, rounded-2xl, p-6, shadow-lg — "Quick Service Facts":
  Clock icon: "Hours: Flexible — hourly or full-day"
  MapPin: "Cities: All 10 service areas"
  Users: "Who: Seniors, adults, post-surgery"
  Calendar: "Start: Within 48 hours"

### SECTION 2 — WHAT IS THIS SERVICE
Background: White, py-20
Layout: Left text (60%) | Right sticky summary card (40%)

Left: Label, H2 "What Is Personal Care?", 3 body paragraphs, then
H3 "Who Is Personal Care For?" with 6-item 2-column grid (Gold check + text)

Right sticky card (top-24, gold border-2):
  "Ready to get started?" | Body | Gold button "Book Free Assessment"
  Divider | Phone 22px/700 Navy | "Available 24/7"
  3 trust badges: Shield "Background Checked" | Award "Trained" | Clock "48hr Start"

### SECTION 3 — SIGNS YOU MAY NEED THIS
Background: #F9F7F4, py-20
H2: "Signs It May Be Time to Get Help"
8 sign cards (grid grid-cols-1 md:grid-cols-2 gap-4):
  Each: AlertCircle (Gold) + bold title + body description
  Signs: bathing difficulty, hygiene decline, caregiver fatigue, hospitalization,
  mobility challenges, incontinence, skin integrity, isolation/withdrawal.

### SECTION 4 — WHAT'S INCLUDED
Background: White, py-20
H2 (centered): "What Our Personal Care Service Covers"
Two-column checklist:
  Left — "Daily Personal Assistance":
    bathing/showering, bed baths, oral hygiene, hair/grooming, skin care,
    nail care, dressing, incontinence care, transfer assistance
  Right — "Routine & Mobility Support":
    morning/evening routine, medication reminders, mobility assistance,
    fall prevention, positioning, exercise encouragement, range of motion,
    observation and reporting

### SECTION 5 — CAREGIVER STANDARDS
Background: Navy, py-16
H2 (white, centered): "Who Provides Your Personal Care"
3 cards (white/10 bg):
  UserCheck: "Background Verified" | GraduationCap: "Professionally Trained"
  Eye: "Supervised & Supported"

### SECTION 6 — AVAILABLE IN YOUR CITY
Background: #F9F7F4, py-20
H2: "Personal Care Services Available In Your Community"
10-city grid (light background variant, links to /home-care-[city])

### SECTION 7 — RELATED SERVICES
Background: White, py-16
H2: "You May Also Need"
3 related service cards: Home Support | Nursing Care | Companionship

### SECTION 8 — SERVICE FAQ
Background: #F9F7F4, py-20
H2: "Questions About Personal Care Services"
7 FAQ accordion items with detailed answers covering:
  what's included, visit length, same caregiver, government funding,
  refusing a caregiver, how quickly care starts, language availability

### SECTION 9 — SERVICE REVIEWS
Background: White, py-20
H2: "What Families Say About Our Personal Care"
2 review cards (side by side, service-specific quotes)

### SECTION 10 — FINAL CTA
Reuse CTA strip with: "Ready to Begin Personal Care Services?"

---

## PAGE 5: CONTACT US

URL: /contact
Title: "Contact Advanced Home Health | Surrey & Lower Mainland BC"

### HERO
H1: "Get in Touch — We're Here 24/7"
Subheading: Question, urgent help, or free assessment booking.

### SECTION 2 — CONTACT OPTIONS + FORM
Background: White, py-20
Layout: Left info (40%) | Right general contact form (60%)

Left — Contact Info:
  H3: "Ways to Reach Us"
  4 contact blocks (border-b, space-y-6):
    Phone: "(236) 616-0007" (22px/700 Navy) | "Available 24 hours · 7 days"
    WhatsApp: message link + "Open WhatsApp →"
    Email: nurse@advancedhomehealth.ca + "We respond within 2-4 hours"
    Office Hours: Mon-Fri 8am-8pm, Sat-Sun 9am-6pm, Care coord 24/7
  Social: Facebook + Instagram icons

Right: General Contact Form (see FORMS section)

### SECTION 3 — CITIES
Background: #F9F7F4, py-16
H2: "We Serve These Communities"
City cards grid (compact variant)

---

## PAGE 6: CARE PROCESS

URL: /care-process
Title: "How Our Home Care Process Works | Advanced Home Health BC"

### HERO
H1: "How Care Works — Simple, Transparent, Fast"
Subheading: From first call to first visit — here's what to expect.

### SECTION 2 — TIMELINE
Background: White, py-20
H2 (centered): "Your Care Journey — Step by Step"
Subtext (centered, max-w-2xl)

Vertical timeline (max-w-3xl mx-auto):
  Center vertical line, alternating cards left/right (mobile: all right)
  6 steps:
    Step 1 — Phone icon | "Your First Call or Inquiry" | Response within 1 hour
    Step 2 — Home icon | "Free In-Home Assessment" | Scheduled within 24-48 hours
    Step 3 — ClipboardList | "Your Personalized Care Plan" | Within 24hrs of assessment
    Step 4 — UserCheck | "Caregiver Matching" | Matching within 24-48 hours
    Step 5 — Play icon | "Care Begins" | First visit confirmed in advance
    Step 6 — RefreshCw | "Ongoing Review & Adjustments" | Monthly minimum

  Each step card: step label (gold uppercase), number (circle), icon, title, body, duration badge

### SECTION 3 — PROCESS FAQ
Background: #F9F7F4, py-20
H2 (centered): "What Families Ask About Getting Started"
5 accordions: doctor referral, assessment details, caregiver matching,
wrong caregiver fit, monitoring care quality

### SECTION 4 — CTA (reuse strip)

---

## PAGE 7: WHY CHOOSE US

URL: /why-choose-us
Title: "Why Choose Advanced Home Health | Surrey & BC Lower Mainland"

### HERO
H1: "Why Families Across BC Choose Advanced Home Health"
Subheading: Options exist — here's what makes us different.

### SECTION 2 — DIFFERENTIATORS
Background: White, py-20
3 alternating layout blocks (image/text swap):

  Block 1 (image left, text right):
    H3: "Every Caregiver Is Rigorously Screened Before They Enter Your Home"
    Intro text + 6-item checklist:
      Criminal record + vulnerable sector check
      Professional reference verification (minimum 2)
      Identity and eligibility confirmation
      Health and immunization verification
      Skills and competency assessment
      Orientation and onboarding training

  Block 2 (image right, text left):
    H3: "Care Plans Built Around Your Loved One — Not Our Convenience"
    Body paragraphs on free in-home assessment and tailored planning.

  Block 3 (image left, text right):
    H3: "We Speak Your Language — Literally"
    Body on 14 languages and cultural care importance.

### SECTION 3 — STATS STRIP
Reuse Navy stats strip (10+ cities, 14 languages, 24/7, 100% screened)

### SECTION 4 — COMPARISON TABLE
Background: #F9F7F4, py-20
H2 (centered): "How We Compare"

Table (white, rounded-xl, shadow-sm):
  Headers: Feature | Advanced Home Health | Staffing Agencies | Independent Caregivers
  Rows:
    Background checks       | ✅ Always   | ⚠️ Sometimes | ❌ Varies
    Clinical oversight      | ✅ Yes      | ❌ No         | ❌ No
    Care plan included      | ✅ Free     | ❌ No         | ❌ No
    Caregiver replacement   | ✅ Free     | ⚠️ Sometimes | ❌ Difficult
    24/7 support line       | ✅ Always   | ⚠️ Limited   | ❌ No
    Multilingual            | ✅ 14 lang  | ⚠️ Limited   | ⚠️ Varies
    Liability insurance     | ✅ Fully    | ⚠️ Varies    | ❌ No

  ✅ Green circle check | ⚠️ Amber warning circle | ❌ Red X circle

### SECTION 5 — REVIEWS + CTA (reuse components)

---

## PAGE 8: REFERRAL PARTNERS

URL: /referral-partners
Title: "Refer a Patient to Advanced Home Health | BC Home Care Referral Partners"
Meta: "Hospital discharge planners, social workers, and case managers — refer patients
for professional home care in Surrey, Vancouver & Lower Mainland BC."

### HERO (Navy, py-24)
H1 (white): "Referring a Patient to Home Care?"
Subheading (white/80%): Seamless hospital-to-home transition, 2-hour follow-up.
Info strip below H1 (white/10 bg, rounded-xl, p-5, inline-flex gap-6):
  "Dedicated referral line: (236) 616-0007 ext. 2"
  "Referral response: within 2 hours guaranteed"
  "Urgent discharge: same-day assessment available"

### SECTION 2 — WHO THIS IS FOR
Background: White, py-20
H2: "We Work With Healthcare & Community Professionals"
Roles grid (grid grid-cols-2 md:grid-cols-3 gap-4):
  Hospital Discharge Planners | Social Workers | Case Managers
  Community Health Nurses | Long-Term Care Facilities | Family Physicians

### SECTION 3 — SERVICES FOR REFERRED PATIENTS
Background: #F9F7F4, py-20
H2: "Services Available for Referred Patients"
2-column checklist: all 12 services + extra capabilities:
  24-hour care coverage | bilingual matching | clinical supervisor oversight
  regular reporting | VAC-funded coordination

### SECTION 4 — REFERRAL FORM
Background: White, py-20
H2 (centered): "Submit a Referral"
Referral form centered (max-w-2xl mx-auto) — see FORMS section

### SECTION 5 — POST-REFERRAL PROCESS
Background: Navy, py-16
H2 (white, centered): "What Happens After You Refer"
4-step cards (grid grid-cols-1 md:grid-cols-4):
  Step 1: "You Submit" | Step 2: "We Confirm" | Step 3: "We Assess" | Step 4: "Care Begins"

---

## FORMS SPECIFICATION

### FORM 1: URGENT CALLBACK FORM
Used in: Homepage Section 8
Style: Compact inline, 2-column desktop, stacked mobile
Input style: white bg, border-white/30, rounded-lg, py-3 px-4,
text-white placeholder-white/50, focus:border-[#C49B3C]

Fields:
  Row 1 (grid-cols-2 gap-4):
    Full Name* (text) — "Your full name"
    Phone Number* (tel) — "(604) 000-0000"
  Row 2:
    City* (select): Select city... | Abbotsford | Burnaby | Coquitlam | Langley
    | Maple Ridge | Mission | New Westminster | Richmond | Surrey | Vancouver | Other
  Row 3:
    Care needed (textarea, rows=2, optional): "e.g., Mum needs help after hip surgery..."
  Submit (w-full Gold): "Request Callback Now"
  Note (13px white/60% centered): "We aim to call back within 1 hour during business hours."

Success state:
  Green checkmark | "Thank you — we will call you shortly."
  "We will call from (236) 616-0007."

### FORM 2: GENERAL CONTACT FORM
Used in: Contact Us page
Input style: white bg, border-[#E8E4DC], rounded-lg, py-3 px-4,
focus:border-[#C49B3C] focus:ring-1

Fields:
  Row 1 (grid-cols-2 gap-4):
    Full Name* (text) | Phone Number* (tel)
  Row 2 (grid-cols-2 gap-4):
    Email Address* (email) | Best Time to Call (select):
    Anytime | Morning 8am-12pm | Afternoon 12pm-5pm | Evening 5pm-8pm
  Row 3 (grid-cols-2 gap-4):
    City* (select — 10 cities + Other)
    Service Needed (select): Not sure yet | Personal Care | Home Support |
    Nursing Care | Companionship | Hospital Recovery | Meal Preparation |
    Dementia Care | Respite Care | Palliative Care | Post-Surgery Recovery |
    Live-in Care | Veterans Care | Multiple services
  Row 4:
    Message* (textarea rows=4): "Tell us about your situation..."
  Row 5:
    How did you hear about us? (select):
    Google Search | Google Maps | Facebook | Instagram | Referral | Healthcare provider | Other
  Privacy checkbox (required): consent to contact + privacy statement
  Submit (w-full Gold): "Send My Inquiry"
  Note (13px muted centered): "No commitment · Free assessment available · Response within 2-4 hours"

Success state (Navy border, rounded-xl, p-6):
  CheckCircle (Green 40px) | "Message received!" | Contact timeline message
  "If urgent, call (236) 616-0007"

### FORM 3: BOOK FREE ASSESSMENT (3-STEP)
Used in: /booking page + all "Book Free Assessment" CTAs
Style: Multi-step with progress indicator (3 numbered steps, Gold active)

STEP 1 — "Step 1 of 3 — About You":
  Who needs care? (radio card buttons):
    Card A: User icon | "For myself"
    Card B: Users icon | "For a family member"
    Card C: Building icon | "For a patient / client (I am a professional)"
  If "family member" → show: Name of person needing care* (text)
  Your full name* (text) | Phone* (tel) | Email* (email)
  Relationship (select — if family member):
    Spouse/Partner | Adult Child | Sibling | Parent | Other family | Legal guardian
  "Next: About the Care →" (Gold primary)

STEP 2 — "Step 2 of 3 — About the Care":
  Primary service needed* (select — all 12 + "Not sure")
  City* (select — 10 cities + Other)
  Current situation* (radio cards):
    "Coming home from hospital or facility soon"
    "Managing at home but need more support"
    "Planning ahead for future needs"
    "Urgent — need help as soon as possible"
  Hours needed (select):
    Not sure yet | Few hours/week | Daily visits 1-4hrs | Half days 4-6hrs
    Full days 8+hrs | Overnight | Live-in
  Additional notes (textarea rows=3): "Medical conditions, language preferences..."
  "← Back" ghost | "Next: Schedule →" Gold

STEP 3 — "Step 3 of 3 — Schedule & Preferences":
  Preferred assessment date (date picker — min tomorrow, max 30 days)
  Preferred time (select):
    Morning 9am-12pm | Afternoon 12pm-3pm | Late afternoon 3pm-6pm | Evening 6pm-8pm
  Language preference (select — 14 languages):
    English | Punjabi | Hindi | Mandarin | Cantonese | Tagalog | Persian | Korean
    Spanish | French | Arabic | Portuguese | Russian | German | Other
  Privacy checkbox (required — same consent text)
  "Book My Free Assessment" (w-full Gold)

Success state (animated Framer Motion checkmark):
  Large checkmark (scale-in animation)
  "Assessment Booking Confirmed!"
  "A coordinator will call you within 1 hour to confirm your appointment."
  "What happens next:" 3-step mini-timeline
  "Add to Calendar" button (Navy) | "Call now if urgent: (236) 616-0007"

### FORM 4: REFERRAL PARTNER FORM
Used in: /referral-partners page
Style: White card max-w-2xl mx-auto, rounded-xl, p-8, shadow-sm, border

Section "About You" (H4 with border-b separator):
  Row 1 (grid-cols-2): Full Name* | Professional Title / Role*
  Row 2 (grid-cols-2): Organization / Facility Name* | Phone Number*
  Row 3: Professional Email*

Section "About the Patient" (H4, border-b):
  Confidentiality note (13px italic muted)
  Row 1 (grid-cols-2): Patient Full Name* | City*
  Row 2 (grid-cols-2): Service Required* | Urgency*:
    Urgent — within 24 hours | Standard — within 3-5 days | Planning ahead
  Row 3 (grid-cols-2): Estimated start/discharge date | Patient language preference
  Row 4: Clinical notes (textarea rows=4)
  Consent checkbox (required): patient/SDM consent statement
  Submit (w-full Gold): "Submit Referral"
  Note (13px muted): "We follow up within 2 hours. Urgent: (236) 616-0007 — referral coordinator."

Success state:
  CheckCircle (Green) | "Referral Submitted"
  "Our referral coordinator will contact you at [phone] within 2 hours."

---

## PHASE 4: AI CHAT (Intelligence + Conversion Layer)

### Purpose
Turn website visitors into qualified leads using guided AI conversation.
The AI is not a general chatbot — it follows a strict structured conversation
flow designed to understand the visitor's care need, classify it, and capture
lead information. Every conversation ends with a lead stored in the database.

### Chat Widget UI — BOTTOM RIGHT (fixed bottom-6 right-6)

#### Chat Toggle Button (collapsed state):
  Circle 60px, background Navy #1C2E4A
  Icon: MessageSquare (Lucide, white, 24px)
  Badge: Red dot (top-right, 8px) — shows when first message is pending
  Tooltip: "Chat with our AI Care Guide"
  Label below (12px, white bg navy pill): "AI Assistant"
  Hover: scale 1.05, shadow-lg

#### Chat Window (expanded state — Framer Motion slide-up + fade):
  Width: 360px desktop, 100vw mobile (as bottom sheet)
  Height: 520px desktop, 65vh mobile
  Background: white
  Border radius: rounded-2xl (top), squared bottom-right (sits above toggle)
  Shadow: shadow-2xl
  z-index: 55

#### Chat Header:
  Background: Navy #1C2E4A
  Padding: px-4 py-3
  Left: Green dot (8px, pulsing) + "AI Care Guide" (16px/600 white)
  Sub: "Typically replies instantly" (12px white/70%)
  Right: Mic icon (white, 20px) — activates voice input (Phase 5)
         X icon (white, 20px) — closes widget
  Note below header (gold bg, 12px, px-3 py-1.5):
    "🤖 AI assistant — not a clinician. Complex medical questions
    will be routed to our care team."

#### Chat Messages Area:
  Background: #F9F7F4
  Padding: p-4
  Overflow-y: auto
  flex flex-col gap-3

  Bot bubble:
    Background: white | border | rounded-2xl rounded-tl-sm
    Padding: px-4 py-3 | max-w-[85%] | self-start
    Font: 14px/400 Body Text
    Bot avatar: 28px Navy circle with "AI" text (12px/600 gold)

  User bubble:
    Background: Chat Blue #2563EB
    Color: white | rounded-2xl rounded-tr-sm
    Padding: px-4 py-3 | max-w-[85%] | self-end
    Font: 14px/400

  Typing indicator (3 dots bouncing animation):
    Shown while AI is generating response

  Quick reply chips (below bot message when applicable):
    Horizontal scroll row of pill buttons
    Background: white | border-[#C49B3C] | text-[#A8832E]
    Rounded-full, px-3 py-1.5, 13px/500
    Tap to send that text as user message

#### Chat Input Row:
  Background: white
  Border-top: 1px solid #E8E4DC
  Padding: px-3 py-2
  Layout: [Mic button] [Text input — flex-1] [Send button]

  Mic button (inside chat, left of input):
    Circle 36px, border, background white
    Icon: Mic (Lucide, Navy, 18px)
    When recording: background #EF4444, icon white, pulse ring
    Tooltip: "Tap to speak"

  Text input:
    Background: #F9F7F4 | rounded-full | px-4 py-2 | 14px
    Placeholder: "Type your message..." (changes to "Listening..." when mic active)
    No border — contained look

  Send button:
    Circle 36px, background Navy #1C2E4A
    Icon: Send (Lucide, white, 16px)
    Hover: background #C49B3C

#### Initial State (first open):
  Bot sends greeting after 500ms delay:
  "👋 Hello! I'm your AI Care Guide for Advanced Home Health.
  I'm here to help you understand your care options and find the right
  support for your loved one. May I ask — who needs care?"

  Quick reply chips: "For myself" | "For a family member" | "I'm a referral partner"

### AI Conversation Flow (Structured Logic)

The AI follows a strict conversation structure. Backend system prompt enforces this.
AI must NEVER go off-topic. If asked about unrelated topics, politely redirect.

#### FLOW STATE MACHINE:

STATE 1 — WHO NEEDS CARE:
  AI asks: "Who is the care for?"
  Captures: care_recipient (self / family_member / referral)
  Quick replies: "For myself" | "For a family member" | "For a patient (referral)"
  → Advance to STATE 2

STATE 2 — SITUATION:
  AI asks: "Could you tell me a bit about the current situation?
  For example, are you coming home from hospital, managing at home,
  or planning ahead?"
  Captures: situation (post_hospital / managing_at_home / planning / urgent)
  Quick replies: "Coming home from hospital" | "Managing at home" | "Planning ahead" | "It's urgent"
  → Advance to STATE 3

STATE 3 — SERVICE CLASSIFICATION:
  AI asks: "What kind of help is needed most right now?"
  Captures: service_type (personal_care / nursing / home_support / companionship /
  hospital_recovery / meal_prep / dementia / respite / palliative /
  post_surgery / live_in / veterans / not_sure)
  Quick replies: "Personal care & hygiene" | "Medical / nursing care" | "Companionship" |
  "Help at home (cleaning, meals)" | "Not sure yet"
  → Advance to STATE 4

STATE 4 — CONDITION (contextual):
  AI asks ONE relevant follow-up based on service classification:
  If dementia: "Is memory loss or confusion a concern?"
  If nursing: "Are there specific medical conditions we should know about?"
  If post-hospital: "What type of procedure or condition are they recovering from?"
  If urgent: "How soon is care needed — within 24 hours?"
  Captures: condition_notes
  → Advance to STATE 5

STATE 5 — CITY:
  AI asks: "Which city or area are you located in?
  We serve 10 cities across the Lower Mainland."
  Captures: city
  Quick replies: "Surrey" | "Vancouver" | "Coquitlam" | "Burnaby" | "Richmond" |
  "Langley" | "Abbotsford" | "Maple Ridge" | "Mission" | "New Westminster"
  → Advance to STATE 6

STATE 6 — LEAD CAPTURE (Name):
  AI says: "Great, I can see that [service] care in [city] is something
  we can definitely help with. To connect you with our care coordinator,
  may I get your name?"
  Captures: lead_name
  → Advance to STATE 7

STATE 7 — LEAD CAPTURE (Phone):
  AI says: "Thank you, [name]. What is the best phone number for our
  care coordinator to reach you?"
  Captures: lead_phone
  Validate: must look like a phone number
  → Advance to STATE 8

STATE 8 — CONFIRMATION + SAVE:
  AI says: "Perfect. Here's a summary of what I've captured:
  📋 Name: [name]
  📱 Phone: [phone]
  📍 City: [city]
  🏥 Service: [service]
  Our care coordinator will call you within 1 hour during business hours.
  Is there anything else you'd like to share before we connect you?"
  Optional: captures any_additional_notes from user's reply
  → SAVE LEAD TO DATABASE → Advance to STATE 9

STATE 9 — CLOSE:
  AI says: "You're all set, [name]! 🎉 We'll be in touch very soon.
  If you need immediate help, you can also call us directly at (236) 616-0007.
  Is there anything else I can answer for you about our services?"
  Show: "📞 Call Now" button chip | "See Our Services" link chip

FALLBACK STATE (if AI cannot classify):
  "I want to make sure I connect you with the right person.
  Would you prefer to call us directly at (236) 616-0007,
  or would you like to leave your number and we'll call you?"

### Backend API Route (/api/chat)
Method: POST
Request body: { messages: Message[], sessionId: string, utmData: object }
Response: { reply: string, state: string, quickReplies: string[] }

System prompt enforced on every call:
  "You are a professional AI Care Guide for Advanced Home Health Care Services,
  a home care company in British Columbia, Canada. You must:
  1. Follow the structured conversation flow — do not skip states.
  2. Be warm, calm, and compassionate in tone — speak to worried families.
  3. Never give medical advice, diagnoses, or clinical recommendations.
  4. Never present yourself as a nurse, doctor, or care professional.
  5. Always redirect unrelated questions politely back to home care needs.
  6. Collect: care recipient, situation, service type, condition notes, city, name, phone.
  7. When lead data is complete, confirm the summary and indicate lead is ready to save.
  8. If user seems distressed, acknowledge their feelings warmly before proceeding.
  9. Speak in plain English — never use healthcare jargon.
  10. You can answer basic questions about services, cities, process, and pricing range
      but do not guarantee specific costs or make clinical promises."

### Lead Storage (Supabase — chat_leads table)
Schema:
  id (uuid, primary key, auto)
  session_id (text)
  lead_name (text)
  lead_phone (text)
  city (text)
  service_type (text)
  situation (text)
  condition_notes (text)
  additional_notes (text)
  utm_source (text)
  utm_medium (text)
  utm_campaign (text)
  conversation_log (jsonb — full message array)
  created_at (timestamp)
  status (text, default 'new') — new | contacted | converted | not_qualified

### Chat Session Tracking
Each chat session has a unique sessionId (UUID generated client-side, stored in
sessionStorage). This sessionId links the chat to the tracking events in Phase 6.

---

## PHASE 5: VOICE ASSISTANT (Accessibility Layer)

### Purpose
Allow elderly users and users with accessibility needs to interact using voice
instead of typing. Voice input and voice output are both supported.
Same AI conversation logic as Phase 4 — voice is just an alternate input/output layer.

### Two Voice Entry Points

#### Entry Point A — Floating Voice Button (outside chat, above chat widget):
Position: fixed bottom-24 right-6 (directly above chat widget button)
Style: Circle 48px, background Navy #1C2E4A
Icon: Mic (Lucide, white, 20px)
Tooltip: "Talk to our AI assistant"
Label below (12px): "Voice"
Behavior:
  Click → opens chat widget if not already open
  Immediately activates mic recording
  Shows "Listening..." status in chat window
  On recording start → button turns red #EF4444 with pulse ring
  On recording stop → sends audio to Whisper → reply via TTS

#### Entry Point B — Mic Button Inside Chat Widget:
Position: Left side of chat input row
Style: Circle 36px, border, white background
Icon: Mic (Lucide, Navy, 18px)
Behavior: Same as Entry Point A but within the existing chat window

### Voice Flow

Step 1 — Mic Activation:
  User taps mic button (either entry point)
  Browser requests microphone permission (first time only)
  Button changes to red pulse state
  Chat input placeholder changes to "Listening..."
  Audio recording begins (MediaRecorder API)

Step 2 — Recording:
  Max recording time: 30 seconds
  User can stop early by tapping mic again (toggle)
  Visual: waveform animation in chat input area while recording
  Waveform: simple animated bars in Gold color, 5 bars, varying height

Step 3 — Speech to Text (Whisper):
  On stop → audio blob sent to /api/voice/transcribe
  API route sends audio to OpenAI Whisper API
  Whisper returns transcribed text
  Transcribed text appears in chat input field briefly (500ms)
  Then auto-sends as a user message

Step 4 — AI Processing:
  Same /api/chat route as text chat (Phase 4)
  Full conversation context maintained
  AI generates text response

Step 5 — Text to Speech Output:
  AI response text sent to /api/voice/speak
  API route sends text to OpenAI TTS API (voice: "nova" — warm female voice)
  TTS returns audio stream
  Audio auto-plays in browser
  While audio plays: speaker icon animates (pulse) in chat header
  User can tap to stop audio playback

### Voice UX Details
  Show transcription in real-time (if partial transcription available)
  Show "AI is thinking..." animation between transcription and response
  Voice output auto-plays by default (can be toggled off with speaker icon)
  Session setting: "Voice responses: ON/OFF" toggle in chat header
  Fallback: if mic permission denied → show message "Voice unavailable —
  please type your message below" and hide mic buttons

### Backend API Routes
  POST /api/voice/transcribe — accepts audio blob, returns { text: string }
  POST /api/voice/speak — accepts { text: string }, returns audio stream

---

## PHASE 6: TRACKING SYSTEM (Data Layer)

### Purpose
Track everything users do on the website — where they came from, what they
interacted with, and what actions they took. All data stored in Supabase
AND sent to Google Analytics 4.

### UTM Parameter Capture
On every page load, capture UTM parameters from URL:
  utm_source  (e.g., google, facebook, email)
  utm_medium  (e.g., cpc, organic, referral)
  utm_campaign (e.g., surrey-personal-care, june-ads)
  utm_content (e.g., hero-banner, cta-button)
  utm_term    (e.g., home-care-surrey)

Store captured UTM data in:
  1. sessionStorage (persists through session)
  2. Supabase tracking_events table
  3. Pass to GA4 via dataLayer

If no UTM params: infer source from document.referrer:
  Google.com → source: "google", medium: "organic"
  Facebook.com → source: "facebook", medium: "social"
  Direct (empty referrer) → source: "direct"

### Event Tracking — 8 Events

EVENT 1: page_view
  Trigger: Every page load
  Data: { page_path, page_title, referrer, utm_source, utm_medium,
          utm_campaign, session_id, timestamp }

EVENT 2: chat_started
  Trigger: Chat widget first opened
  Data: { session_id, trigger_location (floating_button / mobile_nav / faq_card),
          utm_source, timestamp }

EVENT 3: chat_message_sent
  Trigger: User sends a message in chat
  Data: { session_id, message_count, current_state, timestamp }

EVENT 4: chat_lead_created
  Trigger: Lead successfully saved after Phase 4 State 8
  Data: { session_id, lead_id, city, service_type, utm_source,
          utm_medium, utm_campaign, timestamp }

EVENT 5: voice_activated
  Trigger: Mic button tapped
  Data: { session_id, entry_point (floating / inside_chat), timestamp }

EVENT 6: form_submitted
  Trigger: Any form successfully submitted
  Data: { session_id, form_type (urgent_callback / general_contact /
          book_assessment / referral), city, service, utm_source,
          utm_campaign, timestamp }

EVENT 7: call_clicked
  Trigger: Phone number link clicked anywhere on site
  Data: { session_id, click_location (header / hero / cta_strip /
          contact_page / sticky_bar / chat_widget), utm_source, timestamp }

EVENT 8: whatsapp_clicked
  Trigger: WhatsApp FAB or link clicked
  Data: { session_id, utm_source, timestamp }

### Dual Data Storage

For every event:
  1. Push to GA4 via GTM dataLayer:
     window.dataLayer.push({ event: 'event_name', ...eventData })

  2. Save to Supabase tracking_events table:
     Schema: id (uuid) | session_id | event_name | event_data (jsonb) |
             utm_source | utm_medium | utm_campaign | page_path | timestamp

### Supabase Schema Summary

Table: chat_leads
  id, session_id, lead_name, lead_phone, city, service_type,
  situation, condition_notes, additional_notes, utm_source,
  utm_medium, utm_campaign, conversation_log (jsonb), status, created_at

Table: form_leads
  id, session_id, form_type, full_name, phone, email, city,
  service_needed, message, urgency, utm_source, utm_medium,
  utm_campaign, status (new/contacted/converted), created_at

Table: tracking_events
  id, session_id, event_name, event_data (jsonb), utm_source,
  utm_medium, utm_campaign, page_path, created_at

---

## PHASE 7: ADMIN DASHBOARD (Control + Visibility Layer)

### Purpose
Give the business a single central dashboard to see all leads,
track performance, view chat conversations, and manage follow-ups.

### Authentication — STATIC (No backend auth)
URL: /admin/login

Static login page — hardcoded credentials checked client-side only.
On successful login → set localStorage key: "ahh_admin_auth" = "true"
Protected routes: check localStorage on mount, redirect to /admin/login if not set.
Logout: clear localStorage key, redirect to /admin/login.

#### Login Page Design (/admin/login):
Full viewport, centered card.
Background: Navy #1C2E4A with subtle pattern.

Card (white, rounded-2xl, p-10, shadow-2xl, max-w-md mx-auto):
  Logo (centered)
  H3 (24px/600, centered): "Admin Access"
  Subtext (14px muted, centered): "Advanced Home Health — Staff Only"

  Form (space-y-4, mt-8):
    Username field:
      Label: "Username" | Input: text | Placeholder: "Enter username"
    Password field:
      Label: "Password" | Input: password | Placeholder: "Enter password"
      Show/hide password toggle icon (Eye / EyeOff, Lucide)

  Error state (if wrong credentials):
    Red border on inputs
    Error message below: "Incorrect username or password. Please try again."
    Style: text-red-600, 14px, mt-2

  Login button (w-full Gold primary): "Sign In"

  Hardcoded credentials (check client-side):
    Username: admin
    Password: adv2025!

  Footer note (13px muted, text-center, mt-6):
    "Having trouble? Contact your system administrator."

### Admin Layout (/admin/*)
Protected routes: all /admin/* paths check localStorage auth.

Layout: Fixed left sidebar (240px) + main content area (flex-1)
Sidebar background: Navy #1C2E4A

#### Sidebar:
Top: Logo (white) + "Admin Panel" label (gold, 12px uppercase)
Divider

Navigation items (space-y-1, px-3):
  Each item: icon + label, py-2.5 px-3 rounded-lg, white/70% text
  Active state: bg-white/15, text-white, gold left border (2px)
  Hover: bg-white/10

  Dashboard icon | "Dashboard" → /admin
  Users icon | "All Leads" → /admin/leads
  MessageSquare icon | "Chat Logs" → /admin/chats
  BarChart icon | "Analytics" → /admin/analytics
  Settings icon | "Settings" → /admin/settings

Bottom:
  User info: "Admin" (white, 14px/500)
  LogOut button: ghost, white/70%, hover white, logs out

#### Top Bar (all admin pages):
Height 64px, white, border-b, px-6
Left: Page title (H4, 20px/600)
Right: Refresh button (Lucide RefreshCw) + Last updated time (13px muted)
       + "View Website" link → opens advancedhomehealth.ca in new tab

### Admin Page 1: Dashboard (/admin)

#### Overview Cards Row (grid grid-cols-2 md:grid-cols-4 gap-4):
Each card: white, rounded-xl, p-5, shadow-sm, border

Card 1 — Total Leads:
  Icon: Users (bg-[#F5EDD6] rounded-lg p-2, Gold icon)
  Number: large (32px/700 Dark Text) — count from all leads tables
  Label: "Total Leads" (14px muted)
  Sub: "+X this week" (13px green or red with arrow)

Card 2 — Leads Today:
  Icon: TrendingUp (bg-[#E8F5E9], green icon)
  Same structure — count today's leads

Card 3 — Chat Leads:
  Icon: MessageSquare (bg-[#EDE9FE], purple icon)
  Count of chat-sourced leads

Card 4 — Form Submissions:
  Icon: ClipboardList (bg-[#FEF3C7], amber icon)
  Count of form-sourced leads

#### Recent Leads Table (mt-8):
Card (white, rounded-xl, shadow-sm, border):
Header: "Recent Leads" (18px/600) + "View All" link (Gold, right)

Table:
  Headers: Name | Phone | Service | City | Source | Date | Status | Action
  Rows (latest 10 leads, combined from chat_leads + form_leads):
    Status badges:
      "New" → bg-blue-100 text-blue-700
      "Contacted" → bg-amber-100 text-amber-700
      "Converted" → bg-green-100 text-green-700
      "Not Qualified" → bg-gray-100 text-gray-600
    Source badges:
      "Chat" → bg-purple-100 text-purple-700
      "Form" → bg-gold-100 text-gold-700 (use [#F5EDD6] text-[#A8832E])
      "Referral Form" → bg-navy-100 (use [#E6EAF0] text-[#1C2E4A])
    Action: "Mark Contacted" button (small, ghost) + dropdown menu

#### Quick Stats Row (mt-6, grid grid-cols-3 gap-4):
  Conversion rate (total leads → contacted/converted)
  Avg leads per day (this week)
  Top city (most leads from)

### Admin Page 2: All Leads (/admin/leads)

Full leads management table with filtering and search.

#### Filters Bar (white card, p-4, mb-4, flex flex-wrap gap-3):
  Search input: "Search by name or phone..." (text, w-48)
  Filter — Status: All | New | Contacted | Converted | Not Qualified
  Filter — Source: All | Chat | Contact Form | Assessment Form | Referral
  Filter — Service: All | dropdown all 12 services
  Filter — City: All | dropdown all 10 cities
  Filter — Date range: From date | To date
  "Clear Filters" ghost button

#### Leads Table (white, rounded-xl, shadow-sm):
Column headers (sortable — click to sort ascending/descending):
  [ ] checkbox | Name | Phone | Email | Service | City | Source |
  Date | Status | Actions

Row actions (Actions column — dropdown menu):
  Mark as Contacted
  Mark as Converted
  Mark as Not Qualified
  View Chat Log (if chat lead) → opens chat log modal
  Delete (red text, with confirmation modal)

Bulk actions (shown when checkboxes selected):
  "Mark Selected as Contacted" | "Export Selected (CSV)" | "Delete Selected"

Pagination: 20 rows per page, prev/next buttons, "Showing X-Y of Z leads"

#### Lead Detail Modal (slide-in from right, 400px):
  Triggered by clicking lead name
  Full lead details:
    Contact info (name, phone, email)
    Care details (service, city, situation, condition notes)
    Source info (utm_source, utm_medium, utm_campaign)
    Chat or form type
    Additional notes
    Status selector (change status)
    "Call Now" button → tel: link
  Chat log preview if chat lead

### Admin Page 3: Chat Logs (/admin/chats)

#### Chat Sessions List (left panel, 35%):
Scrollable list of chat sessions:
  Each item: session date | first message preview | status badge | lead badge
  Lead badge (Green "Lead") shows if this chat resulted in a lead
  Click → loads conversation in right panel

#### Conversation View (right panel, 65%):
  Full chat transcript styled like the actual chat widget
  Bot messages (left, white bubble) | User messages (right, blue bubble)
  Timestamps on each message
  At bottom: lead capture summary card (if lead was created)
    Name, phone, city, service, status
  "View Full Lead" link → opens lead detail modal
  Voice indicator (mic icon) on messages that came via voice input

#### Chat Stats Bar (top, white card):
  Total sessions | Sessions with leads | Conversion rate from chat
  Average messages per session | Most common service requested

### Admin Page 4: Analytics (/admin/analytics)

#### Date Range Selector (top):
  Preset: Today | This week | This month | Last month | Custom range

#### Charts Row 1 (grid grid-cols-1 md:grid-cols-2 gap-6, mt-6):

  Chart A — Leads Over Time (Line Chart, Recharts):
    X-axis: dates | Y-axis: lead count
    Two lines: Chat leads (Navy) + Form leads (Gold)
    Tooltip: date + counts

  Chart B — Leads by Source (Pie/Donut Chart, Recharts):
    Segments: Organic Search | Google Ads | Facebook | Direct | Other
    Legend below chart | Hover shows count + percentage

#### Charts Row 2 (grid grid-cols-1 md:grid-cols-3 gap-6, mt-6):

  Chart C — Leads by Service (Horizontal Bar Chart, Recharts):
    All 12 services | Bars in Gold | Sorted by count descending

  Chart D — Leads by City (Horizontal Bar Chart, Recharts):
    All 10 cities | Bars in Navy

  Chart E — Lead Status Breakdown (Stacked Bar or Pie, Recharts):
    New vs Contacted vs Converted vs Not Qualified
    Colors: Blue | Amber | Green | Gray

#### Events Table (mt-6):
  Title: "Tracking Events Log"
  Table: Event name | Count | Last triggered | Trend (up/down arrow)
  Events: page_view | chat_started | chat_message_sent | chat_lead_created |
          voice_activated | form_submitted | call_clicked | whatsapp_clicked

#### UTM Performance Table (mt-6):
  Title: "Traffic Sources"
  Table: Source | Medium | Campaign | Sessions | Leads | Conversion Rate
  Sorted by leads descending

### Admin Page 5: Settings (/admin/settings)

Simple static settings page with informational cards:

  Card 1 — Contact Info:
    Phone, email, WhatsApp — view only (displayed, no edit in prototype)

  Card 2 — Chat System Status:
    AI Chat: Active ✅ | Voice: Active ✅
    OpenAI model: GPT-4o

  Card 3 — Tracking Status:
    GA4: Connected ✅ | GTM: Connected ✅ | Supabase: Connected ✅

  Card 4 — Admin Access:
    Current user: Admin | Last login: [date]
    Logout button (Red, small)

---

## COMPLETE SYSTEM INTEGRATION FLOW

This is how all phases connect into one unified system.
Build with this flow in mind — every action chains to the next.

```
USER VISITS WEBSITE (any page)
        ↓
PHASE 6: UTM parameters captured → stored in sessionStorage + Supabase + GA4
        ↓
PAGE_VIEW event fires → tracking_events table + GA4 dataLayer
        ↓
USER INTERACTS — three pathways:

PATHWAY A: CHAT
  User opens chat widget (or voice button)
  ↓ chat_started event → tracking + GA4
  User messages → /api/chat → OpenAI GPT-4o → structured response
  (If voice): audio → /api/voice/transcribe → Whisper → text → /api/chat
  (If voice output): text → /api/voice/speak → TTS → audio plays
  ↓ chat_message_sent event per message → tracking
  AI follows state machine → collects: situation, service, city, name, phone
  ↓ Lead data complete → saved to Supabase chat_leads table
  ↓ chat_lead_created event → tracking + GA4

PATHWAY B: FORM
  User fills form (any of 4 forms)
  ↓ form_submitted event → tracking + GA4
  Form data → /api/forms → saved to Supabase form_leads table
  UTM data attached from sessionStorage
  Success state shown to user

PATHWAY C: DIRECT CALL
  User clicks phone number
  ↓ call_clicked event → tracking + GA4
  Tel: link opens → user calls

        ↓ (from all pathways)
ALL DATA IN SUPABASE (chat_leads + form_leads + tracking_events)
        ↓
PHASE 7: ADMIN DASHBOARD reads from Supabase
  Dashboard shows counts, charts, lead tables
  Admin views chat logs, filters leads, updates status
  Analytics charts show source performance
  Business team follows up → marks leads contacted → tracks conversions
        ↓
BUSINESS OUTCOME: Qualified lead converted to care client
```

---

## GLOBAL COMPONENTS LIBRARY (20 Components)

1.  SectionLabel — uppercase gold 13px, letter-spacing 0.06em
2.  PageHero — Navy bg, breadcrumb, H1, subheading (inner pages)
3.  ServiceCard — icon, name, description, optional New badge, link
4.  CityCard — two variants: light bg and Navy bg
5.  TestimonialCard — stars, quote, reviewer, city, date, Google logo
6.  FAQAccordion — Framer Motion height animation, chevron rotation 180°
7.  CTAStrip — two variants: Light Gold (standard) and Navy (dark)
8.  TrustBadge — icon + title + sublabel (hero sections)
9.  StepCard — number circle, icon, title, body, duration badge
10. ChecklistItem — Gold checkmark circle + text (15px)
11. FormInput — label, input, required indicator, error state, helper text
12. FormSelect — styled dropdown matching FormInput
13. FormTextarea — styled textarea matching FormInput
14. SuccessState — checkmark animation, confirmation text, next steps
15. BreadcrumbNav — breadcrumbs with JSON-LD schema markup
16. StickyMobileBar — fixed bottom, phone + CTA, md:hidden
17. WhatsAppFAB — fixed bottom-left, green circle, pulse animation
18. VoiceFAB — fixed above chat (bottom-right), Navy circle, mic icon
19. ChatWidget — full Phase 4 UI: toggle, header, messages, input row
20. AdminTable — sortable, filterable, paginated data table (admin only)

---

## RESPONSIVE BREAKPOINTS

Mobile:   0px – 767px   (Tailwind: default/sm) — DESIGN FIRST
Tablet:   768px – 1023px (Tailwind: md)
Desktop:  1024px – 1279px (Tailwind: lg)
Wide:     1280px+        (Tailwind: xl) — container caps at 1280px

Mobile-first rules:
  All grids → single column on mobile
  Hero → text stacked above image
  H1 max → 36px
  Service cards → full width
  Chat widget → full-width bottom sheet (100vw, 65vh)
  Voice FAB + Chat FAB → slightly larger touch targets (64px)
  Sticky mobile call bar → always visible, z-60
  Admin dashboard → sidebar collapses to hamburger drawer
  Admin charts → stacked vertically

---

## ANIMATIONS & INTERACTIONS

All via Framer Motion. Subtle — this is a healthcare site.

1.  Page sections: fade-up on scroll (y: 20→0, opacity 0→1, 0.4s, ease-out)
2.  Card hover: -translate-y-1, shadow-md, border → gold, 200ms
3.  FAQ accordion: height animation, ease-out, 250ms
4.  Chat widget open: slide-up + fade-in, ease-out, 300ms (desktop)
                      slide-up from bottom as sheet (mobile), 350ms
5.  Chat messages: fade-in with slight slide-left (bot) or slide-right (user)
6.  Voice recording: red pulse ring, 1s loop (while recording)
7.  Voice waveform: 5 bars, varying heights, Gold color, 800ms loop
8.  Form success: scale-in checkmark + fade-in text, 400ms
9.  WhatsApp FAB: green pulse ring, 2s loop
10. Step numbers: count-up animation when scrolled into view
11. Stats numbers: count-up animation on scroll (e.g., 0→4.9 stars)
12. Mobile nav drawer: slide from right, 300ms ease-out
13. Mega menu: fade-down, 200ms ease-out
14. Admin table rows: fade-in on filter change
15. Admin charts: animated on load (Recharts built-in animations on)
16. Progress bar (multi-step form): smooth width transition between steps
17. Button hover: scale 1.02, 150ms | Button active: scale 0.98, 100ms
18. Lead status badge: color transition when status changes, 300ms
19. Typing indicator (chat): 3 dots bouncing, staggered 200ms delay each
20. Tab/step transitions: slide left/right based on forward/back direction

---

## SEO & TECHNICAL REQUIREMENTS

Every page must have:
  Unique <title> tag (as specified per page)
  Unique meta description (as specified per page)
  Canonical URL tag
  Open Graph tags: og:title, og:description, og:image, og:type, og:url
  Twitter card tags

Heading hierarchy:
  One H1 per page — never more
  H2 for major sections
  H3 for sub-sections
  Never skip levels (no H1 → H3)

Schema markup (JSON-LD in document <head>):
  Homepage:       LocalBusiness + Organization + FAQPage + BreadcrumbList
  Service pages:  Service + FAQPage + LocalBusiness + BreadcrumbList
  City pages:     LocalBusiness (areaServed) + FAQPage + BreadcrumbList
  About Us:       Organization + Person (team members)
  Care Process:   HowTo + BreadcrumbList
  Contact:        LocalBusiness + BreadcrumbList
  All pages:      BreadcrumbList

Images:
  All images: descriptive alt text
  Use next/image for all (automatic optimization)
  Lazy load all below-fold images
  Set aspect-ratio on all images (prevents CLS)

Performance:
  Minimize Cumulative Layout Shift (CLS) — no layout shifts on image load
  Prefetch internal navigation links
  Admin dashboard: lazy load charts (import dynamically)

Accessibility:
  All form inputs have associated <label> elements
  Color contrast minimum 4.5:1 on all text
  All interactive elements keyboard-navigable
  Visible focus states on all interactive elements
  ARIA labels on all icon-only buttons
  Phone number links use tel: protocol
  Chat widget: ARIA role="dialog" aria-label="AI Care Guide"
  Voice button: aria-label="Activate voice assistant" aria-pressed state

---

## LANGUAGE & TONE RULES (All Pages & Chat AI)

Never use clinical or medical jargon
Write as if speaking to a worried adult child looking for help for their parent
Active voice always ("We help" not "Help is provided")
Sentences under 25 words
Avoid starting two consecutive sentences with "We"
Always name the city somewhere in the first paragraph (service & city pages)
All button text action-oriented ("Book Free Assessment" not "Submit")
Emergency/urgent scenarios: calm and reassuring, never alarming
Never say "elderly" — use "seniors" or "older adults"
Never say "patient" for home care clients — use "client" or "your loved one"
AI chat same rules — warm, human, never clinical

---