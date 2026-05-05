import { motion } from "motion/react";
import { Link, useParams } from "react-router";
import { AlertCircle, Clock, MapPin, Users, Calendar, UserCheck, GraduationCap, Eye, Phone } from "lucide-react";
import { SectionLabel } from "../components/shared/SectionLabel";
import { FAQAccordion } from "../components/shared/FAQAccordion";
import { CTAStrip } from "../components/shared/CTAStrip";
import { TestimonialCard } from "../components/shared/TestimonialCard";
import { SERVICES, CITIES, PHONE, PHONE_TEL } from "../data/constants";

const SERVICE_IMAGE = "https://images.unsplash.com/photo-1765896387387-0538bc9f997e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMGhvbWUlMjB2aXNpdCUyMGVsZGVybHklMjBwYXRpZW50fGVufDF8fHx8MTc3Nzk2MjYzN3ww&ixlib=rb-4.1.0&q=80&w=1080";

const FAQ_ITEMS = [
  { question: "What exactly is included in this service?", answer: "Our service includes a comprehensive range of support based on your loved one's individual care plan, developed during the free assessment. We cover all aspects discussed and documented with you." },
  { question: "How long does each visit last?", answer: "Visit length is flexible — from 2-hour minimum visits up to full-day or live-in arrangements. We work around your schedule and the level of support needed." },
  { question: "Will my loved one have the same caregiver each time?", answer: "We strive to provide consistency and will assign a primary caregiver. In cases of absence, we ensure you're introduced to the relief caregiver in advance." },
  { question: "Is this service covered by government funding?", answer: "Some services may be partially covered through BC's health authority programs or veterans' programs. Our care coordinators can help you explore available funding options during the assessment." },
  { question: "What if we're not happy with our caregiver?", answer: "We'll rematch you promptly, at no additional cost. Your comfort and confidence in your caregiver is non-negotiable to us." },
  { question: "How quickly can care start?", answer: "After your free assessment, care can typically begin within 48 hours. For urgent situations, we can often arrange faster placement." },
  { question: "Can the caregiver speak our language?", answer: "We serve clients in 14 languages and do our best to match caregivers by language. Please let us know your preference during the assessment." },
];

export function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES.find(s => s.id === serviceId) || SERVICES[0];

  const relatedServices = SERVICES.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* SERVICE HERO */}
      <section className="py-20 px-6" style={{ background: "#1C2E4A" }}>
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span>{service.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Left content */}
            <div className="lg:col-span-3">
              <span className="inline-block px-3 py-1.5 rounded-full mb-5 text-white" style={{ background: "#C49B3C", fontSize: 13, fontWeight: 500 }}>
                {service.name}
              </span>
              <h1 style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.2 }}>
                {service.name} in Surrey & the Lower Mainland
              </h1>
              <p className="mt-4" style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, lineHeight: 1.75 }}>
                Respectful, dignified support delivered by trained and screened caregivers in your own home. Available across 10 cities in BC.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link to="/booking" className="px-6 py-3 rounded-lg text-white transition-all hover:opacity-90" style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}>
                  Request This Service
                </Link>
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors" style={{ fontWeight: 500, fontSize: 15 }}>
                  <Phone size={17} /> Call {PHONE}
                </a>
              </div>
              <p className="mt-4" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>
                Screened caregivers · 48hr start · Available 7 days a week
              </p>
            </div>

            {/* Quick Facts Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 17, marginBottom: 16 }}>Quick Service Facts</h3>
                {[
                  { icon: <Clock size={18} color="#C49B3C" />, label: "Hours", value: "Flexible — hourly or full-day" },
                  { icon: <MapPin size={18} color="#C49B3C" />, label: "Cities", value: "All 10 service areas" },
                  { icon: <Users size={18} color="#C49B3C" />, label: "Who", value: "Seniors, adults, post-surgery" },
                  { icon: <Calendar size={18} color="#C49B3C" />, label: "Start", value: "Within 48 hours" },
                ].map((fact, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b" style={{ borderColor: "#E8E4DC" }}>
                    {fact.icon}
                    <div>
                      <p style={{ color: "#718096", fontSize: 12 }}>{fact.label}</p>
                      <p style={{ color: "#1A1A2E", fontWeight: 500, fontSize: 14 }}>{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS THIS SERVICE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="lg:col-span-3">
            <SectionLabel>Overview</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 36px)" }}>What Is {service.name}?</h2>
            <div className="space-y-4 mt-5">
              <p style={{ color: "#4A5568", fontSize: 16, lineHeight: 1.75 }}>
                {service.name} involves professional, compassionate support for daily living activities that a senior or adult may no longer be able to manage independently. Our caregivers are trained to deliver this support with dignity and respect.
              </p>
              <p style={{ color: "#4A5568", fontSize: 16, lineHeight: 1.75 }}>
                Each care plan is built around the individual — their preferences, routines, health needs, and cultural background. No two care plans are the same, because no two people are the same.
              </p>
              <p style={{ color: "#4A5568", fontSize: 16, lineHeight: 1.75 }}>
                Services are available across all 10 cities in the Lower Mainland, with caregivers available 7 days a week, including evenings and overnight.
              </p>
            </div>

            <h3 className="mt-8 mb-4" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 20 }}>Who Is This Service For?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Seniors living independently at home",
                "Adults recovering from surgery or illness",
                "Clients with chronic health conditions",
                "Those with mobility challenges",
                "Clients recently discharged from hospital",
                "Adults with cognitive decline or dementia",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#F5EDD6" }}>
                    <span style={{ color: "#C49B3C", fontSize: 12 }}>✓</span>
                  </span>
                  <span style={{ color: "#4A5568", fontSize: 14 }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sticky CTA Card */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 p-6 rounded-xl border-2 bg-white" style={{ borderColor: "#C49B3C" }}>
              <h3 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 19 }}>Ready to get started?</h3>
              <p className="mt-2 mb-5" style={{ color: "#4A5568", fontSize: 14, lineHeight: 1.6 }}>
                Book a free, no-obligation assessment with one of our care coordinators.
              </p>
              <Link to="/booking" className="block text-center py-3.5 rounded-lg text-white hover:opacity-90 transition-opacity" style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}>
                Book Free Assessment
              </Link>
              <div className="my-4 border-t" style={{ borderColor: "#E8E4DC" }} />
              <a href={`tel:${PHONE_TEL}`} className="block text-center" style={{ color: "#1C2E4A", fontWeight: 700, fontSize: 22 }}>{PHONE}</a>
              <p className="text-center mt-1" style={{ color: "#718096", fontSize: 12 }}>Available 24/7</p>
              <div className="flex justify-around mt-4 pt-4 border-t" style={{ borderColor: "#E8E4DC" }}>
                {[
                  { icon: <UserCheck size={16} />, label: "Background Checked" },
                  { icon: <GraduationCap size={16} />, label: "Trained" },
                  { icon: <Clock size={16} />, label: "48hr Start" },
                ].map((badge, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <span style={{ color: "#C49B3C" }}>{badge.icon}</span>
                    <span style={{ color: "#718096", fontSize: 11, textAlign: "center" }}>{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNS YOU MAY NEED */}
      <section className="py-20 px-6" style={{ background: "#F9F7F4" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <h2 className="mb-8" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 36px)" }}>Signs It May Be Time to Get Help</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Difficulty with bathing or grooming", detail: "Noticing reduced hygiene standards or reluctance to bathe may indicate physical difficulty." },
              { title: "Changes in hygiene or appearance", detail: "Wearing soiled clothing repeatedly or skipping personal care routines are common early signs." },
              { title: "Family caregiver burnout", detail: "If family members are stretched thin and showing signs of exhaustion, professional support can provide relief." },
              { title: "Recent hospitalization or surgery", detail: "Recovery at home is safer and faster with professional support for mobility, medication, and daily care." },
              { title: "Mobility challenges", detail: "Difficulty getting in and out of bed, chairs, or the bathroom increases fall risk and the need for assistance." },
              { title: "Incontinence concerns", detail: "Bladder or bowel control issues require sensitive, professional management to maintain dignity and health." },
              { title: "Skin integrity issues", detail: "Pressure sores, wounds, or skin breakdown require professional monitoring and care." },
              { title: "Social withdrawal or isolation", detail: "Withdrawal from activities and relationships can indicate depression or cognitive decline needing attention." },
            ].map((sign, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex gap-3 p-4 rounded-xl bg-white border" style={{ borderColor: "#E8E4DC" }}>
                <AlertCircle size={20} color="#C49B3C" className="flex-shrink-0 mt-0.5" />
                <div>
                  <p style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 14 }}>{sign.title}</p>
                  <p style={{ color: "#4A5568", fontSize: 13, lineHeight: 1.6, marginTop: 2 }}>{sign.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-10" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 36px)" }}>
            What Our {service.name} Covers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="mb-5 pb-3 border-b" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 18, borderColor: "#E8E4DC" }}>Daily Personal Assistance</h3>
              <ul className="space-y-3">
                {["Bathing and showering assistance", "Bed baths when needed", "Oral hygiene support", "Hair care and grooming", "Skin care and moisturizing", "Nail care", "Dressing and undressing", "Incontinence care and management", "Transfer and positioning assistance"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#F5EDD6" }}>
                      <span style={{ color: "#C49B3C", fontSize: 12 }}>✓</span>
                    </span>
                    <span style={{ color: "#4A5568", fontSize: 14 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-5 pb-3 border-b" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 18, borderColor: "#E8E4DC" }}>Routine & Mobility Support</h3>
              <ul className="space-y-3">
                {["Morning and evening routine assistance", "Medication reminders", "Mobility assistance and transfers", "Fall prevention strategies", "Repositioning and pressure care", "Exercise encouragement", "Range of motion activities", "Health observation and family reporting"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#F5EDD6" }}>
                      <span style={{ color: "#C49B3C", fontSize: 12 }}>✓</span>
                    </span>
                    <span style={{ color: "#4A5568", fontSize: 14 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CAREGIVER STANDARDS */}
      <section className="py-16 px-6" style={{ background: "#1C2E4A" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-8" style={{ color: "#fff", fontWeight: 600, fontSize: "clamp(22px, 3.5vw, 34px)" }}>
            Who Provides Your {service.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <UserCheck size={32} />, title: "Background Verified", detail: "Criminal record check, vulnerable sector screening, and identity verification completed before employment." },
              { icon: <GraduationCap size={32} />, title: "Professionally Trained", detail: "Skills assessment, competency testing, and comprehensive orientation training for all caregivers." },
              { icon: <Eye size={32} />, title: "Supervised & Supported", detail: "Regular check-ins, clinical oversight, and ongoing support ensure consistent, high-quality care." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "#F5EDD6", color: "#C49B3C" }}>
                  {item.icon}
                </div>
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: 17 }}>{item.title}</h3>
                <p className="mt-2" style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.6 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="py-20 px-6" style={{ background: "#F9F7F4" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-8" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(22px, 3.5vw, 34px)" }}>
            {service.name} Available In Your Community
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {CITIES.map(city => (
              <Link key={city} to={`/home-care-${city.toLowerCase().replace(" ", "-")}`}
                className="p-4 rounded-xl border text-center hover:border-[#C49B3C] hover:shadow-sm transition-all"
                style={{ background: "#fff", borderColor: "#E8E4DC" }}>
                <p style={{ color: "#1A1A2E", fontWeight: 500, fontSize: 14 }}>{city}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-8" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(22px, 3.5vw, 34px)" }}>You May Also Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map(s => (
              <div key={s.id} className="p-5 rounded-xl border hover:border-[#C49B3C] hover:shadow-sm transition-all bg-white" style={{ borderColor: "#E8E4DC" }}>
                <h4 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 16 }}>{s.name}</h4>
                <p className="mt-2 mb-3" style={{ color: "#4A5568", fontSize: 13, lineHeight: 1.5 }}>{s.description}</p>
                <Link to={`/services/${s.id}`} style={{ color: "#C49B3C", fontSize: 13, fontWeight: 500 }}>Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: "#F9F7F4" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-8" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(22px, 3.5vw, 34px)" }}>
            Questions About {service.name}
          </h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-8" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(22px, 3.5vw, 34px)" }}>
            What Families Say About Our {service.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <TestimonialCard
              quote="The personal care support has been exceptional. The caregiver is always on time, professional, and treats my mother with such kindness."
              name="Karen L."
              city="Surrey, BC"
              date="April 2025"
            />
            <TestimonialCard
              quote="We were nervous about having someone come into our home, but they made us feel completely at ease from day one. Highly recommend."
              name="Tom & Janet W."
              city="Vancouver, BC"
              date="March 2025"
            />
          </div>
        </div>
      </section>

      <CTAStrip title={`Ready to Begin ${service.name}?`} />
    </div>
  );
}
