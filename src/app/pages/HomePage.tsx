import { useState, useRef } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Phone, MapPin, Star, CheckCircle, ChevronRight } from "lucide-react";
import { SectionLabel } from "../components/shared/SectionLabel";
import { ServiceCard } from "../components/shared/ServiceCard";
import { TestimonialCard } from "../components/shared/TestimonialCard";
import { FAQAccordion } from "../components/shared/FAQAccordion";
import { CTAStrip } from "../components/shared/CTAStrip";
import { UrgentCallbackForm } from "../components/forms/UrgentCallbackForm";
import { SERVICES, CITIES, PHONE, PHONE_TEL } from "../data/constants";

const HERO_IMAGE = "https://images.unsplash.com/photo-1773227059522-acc3ae46abdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZ2l2ZXIlMjBlbGRlcmx5JTIwc2VuaW9yJTIwaG9tZSUyMGNhcmV8ZW58MXx8fHwxNzc3OTYyNjM3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const WHY_IMAGE = "https://images.unsplash.com/photo-1765896387387-0538bc9f997e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMGhvbWUlMjB2aXNpdCUyMGVsZGVybHklMjBwYXRpZW50fGVufDF8fHx8MTc3Nzk2MjYzN3ww&ixlib=rb-4.1.0&q=80&w=1080";

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4 } };

const FAQ_ITEMS = [
  { question: "How quickly can care start?", answer: "In most cases, we can begin care within 48 hours of your initial consultation. For urgent situations — such as hospital discharge — we may be able to arrange same-day or next-day care. A care coordinator will discuss your timeline during the free assessment." },
  { question: "Do I need to sign a long-term contract?", answer: "No. We believe in flexible care that meets your needs. We offer care without long-term contracts. You can adjust, pause, or discontinue services with reasonable notice. We earn your trust every visit." },
  { question: "How do you select and screen your caregivers?", answer: "Every caregiver goes through a rigorous screening process including a criminal record and vulnerable sector check, professional reference verification, identity and eligibility confirmation, skills assessment, and comprehensive orientation training." },
  { question: "What areas do you serve?", answer: "We serve 10 communities across the Lower Mainland of British Columbia: Surrey, Vancouver, Coquitlam, Burnaby, Richmond, Langley, Abbotsford, Maple Ridge, Mission, and New Westminster." },
  { question: "What is the cost of home care in BC?", answer: "Home care costs vary based on the level of care needed, hours per day or week, and type of service. We provide a free, no-obligation assessment and detailed pricing during your consultation. Some services may be partially covered by government programs." },
];

export function HomePage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#F9F7F4" }}>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-14 pb-24 lg:pt-16 lg:pb-20">
          {/* Left */}
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: "#F5EDD6", border: "1px solid #C49B3C" }}>
              <MapPin size={14} color="#C49B3C" />
              <span style={{ color: "#A8832E", fontSize: 13, fontWeight: 500 }}>Serving 10 Cities Across BC</span>
            </span>
            <h1 style={{ color: "#1A1A2E", fontWeight: 700, fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.2 }}>
              Trusted Home Care, Right in the Comfort of Your Home.
            </h1>
            <p className="mt-4 mb-8" style={{ color: "#4A5568", fontSize: 18, lineHeight: 1.75 }}>
              We bring professional, compassionate care directly to your loved ones. Personal care, nursing, companionship, and more — available 24 hours a day, 365 days a year.
            </p>
            <div className="flex flex-wrap gap-3 mb-3">
              <Link to="/booking" className="px-7 py-3.5 rounded-lg text-white hover:opacity-90 active:scale-95 transition-all" style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}>
                Get a Free Assessment
              </Link>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 px-7 py-3.5 rounded-lg text-white transition-all hover:opacity-90" style={{ background: "#1C2E4A", fontWeight: 600, fontSize: 15 }}>
                <Phone size={17} /> Call {PHONE}
              </a>
            </div>
            <p style={{ color: "#718096", fontSize: 13 }}>No commitment. A real person answers every call.</p>

            {/* Trust Bar */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t" style={{ borderColor: "#E8E4DC" }}>
              {[
                { stat: "24/7", label: "Always Available", sub: "Every day of the year" },
                { stat: "10", label: "Cities Served", sub: "Across Lower Mainland BC" },
                { stat: "14", label: "Languages Spoken", sub: "We speak your language" },
                { stat: "100%", label: "Screened Caregivers", sub: "Background checked & trained" },
              ].map((item, i) => (
                <div key={i}>
                  <p style={{ color: "#C49B3C", fontWeight: 700, fontSize: 26 }}>{item.stat}</p>
                  <p style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 13, marginTop: 2 }}>{item.label}</p>
                  <p style={{ color: "#718096", fontSize: 12 }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: 560 }}>
              <img src={HERO_IMAGE} alt="Compassionate caregiver assisting an elderly person at home" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(249,247,244,0.2) 0%, transparent 40%)" }} />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 px-4 py-3 rounded-xl shadow-lg flex items-center gap-3" style={{ background: "#fff" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#F5EDD6" }}>
                  <CheckCircle size={20} color="#2D7D4F" />
                </div>
                <div>
                  <p style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 13 }}>Care starts in 48 hours</p>
                  <p style={{ color: "#718096", fontSize: 11 }}>After your free assessment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 px-6" style={{ background: "#F9F7F4" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionLabel centered>What We Offer</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(26px, 4vw, 40px)" }}>Care Services Designed Around Your Needs</h2>
            <p className="mt-3 max-w-2xl mx-auto" style={{ color: "#4A5568", fontSize: 18, lineHeight: 1.75 }}>
              From personal hygiene assistance to professional nursing — we provide the right level of care for every stage of life.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="inline-flex items-center gap-2 hover:text-[#C49B3C] transition-colors" style={{ color: "#1C2E4A", fontWeight: 500, fontSize: 15 }}>
              View all services <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <SectionLabel>Why Families Choose Us</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>Care You Can Trust. People You Can Rely On.</h2>
            <p className="mt-4 mb-8" style={{ color: "#4A5568", fontSize: 18, lineHeight: 1.75 }}>
              We are not just a care agency — we are your care partner. Every decision we make centers on the dignity, safety, and well-being of your loved one.
            </p>
            <div className="space-y-6">
              {[
                { title: "Rigorously Screened Caregivers", detail: "Every caregiver passes a criminal record check, vulnerable sector screening, and professional reference verification before entering your home." },
                { title: "Personalized Care Plans", detail: "We create a detailed care plan specific to your loved one's needs, preferences, and health requirements — not a one-size-fits-all approach." },
                { title: "Multilingual Team — 14 Languages", detail: "Our diverse team speaks 14 languages so your loved one receives care in their own language, supporting dignity and cultural connection." },
                { title: "Care Starting Within 48 Hours", detail: "After your free assessment, we can typically have a matched caregiver begin within 48 hours. Urgent situations can be accommodated faster." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ background: "#F5EDD6" }}>
                    <CheckCircle size={16} color="#C49B3C" />
                  </div>
                  <div>
                    <p style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 15 }}>{item.title}</p>
                    <p style={{ color: "#4A5568", fontSize: 14, lineHeight: 1.6, marginTop: 4 }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/why-choose-us" className="inline-flex items-center gap-2 mt-6 hover:underline" style={{ color: "#C49B3C", fontWeight: 500, fontSize: 15 }}>
              Learn More About Our Standards <ChevronRight size={16} />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <img src={WHY_IMAGE} alt="Professional caregiver providing home care to an elderly person" className="w-full rounded-2xl shadow-lg object-cover" style={{ height: 520 }} />
          </motion.div>
        </div>
      </section>

      {/* HOW CARE WORKS */}
      <section className="py-20 px-6" style={{ background: "#F9F7F4" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <SectionLabel centered>The Process</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>How Care Starts — 3 Simple Steps</h2>
            <p className="mt-3 max-w-xl mx-auto" style={{ color: "#4A5568", fontSize: 18, lineHeight: 1.75 }}>
              Getting started is easier than you think. We handle every detail so you can focus on your loved one.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { num: "01", icon: "📞", title: "Free Assessment Call", detail: "Call or submit an inquiry. A care coordinator will reach out within 1 hour to understand your needs and answer questions.", badge: "Response within 1 hour" },
              { num: "02", icon: "📋", title: "Your Personalized Care Plan", detail: "We conduct a free in-home assessment and create a detailed care plan tailored to your loved one's unique needs and preferences.", badge: "Within 24-48 hours" },
              { num: "03", icon: "💙", title: "Care Begins", detail: "Your matched caregiver arrives for the first visit, fully briefed on the care plan. We follow up to ensure everything is going perfectly.", badge: "Caregiver matched in 48 hours" },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-8 rounded-xl bg-white border relative" style={{ borderColor: "#E8E4DC" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl" style={{ background: "#F5EDD6" }}>
                  {step.icon}
                </div>
                <p style={{ color: "#C49B3C", fontWeight: 700, fontSize: 28 }}>{step.num}</p>
                <h3 className="mt-2 mb-3" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 19 }}>{step.title}</h3>
                <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7 }}>{step.detail}</p>
                <span className="inline-block mt-4 px-3 py-1 rounded-full" style={{ background: "#F5EDD6", color: "#A8832E", fontSize: 12, fontWeight: 500 }}>{step.badge}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/booking" className="px-7 py-3.5 rounded-lg text-white hover:opacity-90 transition-opacity" style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}>
              Book Your Free Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-8">
            <SectionLabel centered>What Families Say</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>Trusted by Families Across the Lower Mainland</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#C49B3C" color="#C49B3C" />)}</div>
              <span style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 16 }}>4.9 out of 5</span>
              <span style={{ color: "#718096", fontSize: 14 }}>(Based on Google Reviews)</span>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "The caregivers have been absolutely wonderful with my mother. Professional, kind, and always on time. Our family has peace of mind knowing she is in good hands.", name: "Sarah M.", city: "Surrey, BC", date: "March 2025" },
              { quote: "After my father's surgery, they arranged care within 24 hours. The level of attention and professionalism has been exceptional throughout.", name: "David K.", city: "Vancouver, BC", date: "February 2025" },
              { quote: "They matched us with a caregiver who speaks Punjabi — it made all the difference for our family. My grandmother feels comfortable and respected.", name: "Harpreet S.", city: "Coquitlam, BC", date: "January 2025" },
            ].map((review, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <TestimonialCard {...review} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline" style={{ color: "#C49B3C", fontSize: 15, fontWeight: 500 }}>
              Read All Reviews on Google <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="py-16 px-6" style={{ background: "#1C2E4A" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-10">
            <SectionLabel centered>Where We Work</SectionLabel>
            <h2 style={{ color: "#fff", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>Home Care Across These Communities</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, marginTop: 8 }}>Serving families across the Lower Mainland of British Columbia</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {CITIES.map((city, i) => (
              <motion.div key={city} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                <Link
                  to={`/home-care-${city.toLowerCase().replace(" ", "-")}`}
                  className="flex flex-col items-center gap-2 p-5 rounded-xl border text-center transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.15)" }}
                >
                  <MapPin size={20} color="#C49B3C" />
                  <span style={{ color: "#fff", fontWeight: 600, fontSize: 15 }}>{city}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: "#F9F7F4" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionLabel centered>Common Questions</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>Answers for Families Just Getting Started</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <FAQAccordion items={FAQ_ITEMS} />
            </div>
            <div className="lg:col-span-2">
              <div className="p-8 rounded-xl bg-white border-2 sticky top-24" style={{ borderColor: "#C49B3C" }}>
                <h3 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 22 }}>Still have questions?</h3>
                <p className="mt-2 mb-5" style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7 }}>Our care coordinators are available 24/7 to help you understand your options.</p>
                <a href={`tel:${PHONE_TEL}`} className="block text-center mb-4" style={{ color: "#1C2E4A", fontWeight: 700, fontSize: 22 }}>
                  {PHONE}
                </a>
                <div className="flex flex-col gap-2">
                  <Link to="/contact" className="block text-center py-3 rounded-lg border-2 hover:bg-[#1C2E4A] hover:text-white transition-colors" style={{ borderColor: "#1C2E4A", color: "#1C2E4A", fontWeight: 500, fontSize: 14 }}>
                    See All FAQs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* URGENT CALLBACK */}
      <section className="py-16 px-6" style={{ background: "#1C2E4A" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <h2 style={{ color: "#fff", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 36px)" }}>Need Care Quickly?</h2>
            <p className="mt-3 mb-5" style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, lineHeight: 1.75 }}>
              Leave your details and we'll call you back within one hour during business hours. No obligation, just a helpful conversation.
            </p>
            <div className="flex flex-wrap gap-2" style={{ color: "#C49B3C", fontSize: 14, fontWeight: 500 }}>
              <span>✓ No commitment</span>
              <span>·</span>
              <span>✓ Free assessment</span>
              <span>·</span>
              <span>✓ Real person calls back</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <UrgentCallbackForm />
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTAStrip />
    </div>
  );
}
