import { motion } from "motion/react";
import { Link } from "react-router";
import { Phone } from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { SectionLabel } from "../components/shared/SectionLabel";
import { ServiceCard } from "../components/shared/ServiceCard";
import { CTAStrip } from "../components/shared/CTAStrip";
import { FAQAccordion } from "../components/shared/FAQAccordion";
import { SERVICES, PHONE, PHONE_TEL } from "../data/constants";

const coreServices = SERVICES.slice(0, 6);
const specializedServices = SERVICES.slice(6);

const CHECKLIST: Record<string, string[]> = {
  "personal-care": ["Bathing & grooming assistance", "Oral hygiene & hair care", "Dressing & skin care", "Incontinence care"],
  "home-support": ["Vacuuming, mopping & dusting", "Laundry & ironing", "Linen changes & organization", "Pet care assistance"],
  "nursing-care": ["Medication management", "Wound care & dressings", "Vital signs monitoring", "Health progress reporting"],
  "companionship": ["Conversation & emotional support", "Games, puzzles & crafts", "Reading & entertainment", "Escorted outings"],
  "hospital-recovery": ["Transport to appointments", "Rehabilitation support", "Medication schedule management", "Coordination with care team"],
  "meal-preparation": ["Personalized meal planning", "Grocery shopping assistance", "Dietary restriction compliance", "Nutrition monitoring"],
};

const FAQ_ITEMS = [
  { question: "How do I know which service is right for us?", answer: "Our free in-home assessment helps us understand your loved one's exact needs and recommend the right combination of services. There's no obligation — just a helpful, friendly conversation." },
  { question: "Can I get multiple services at once?", answer: "Absolutely. Many of our clients receive a combination of personal care, home support, and companionship. We create a single, coordinated care plan that covers everything." },
  { question: "Are your caregivers trained for specialized conditions?", answer: "Yes. Our caregivers receive specialized training for dementia care, palliative care, post-surgery recovery, and other conditions. We match caregivers to clients based on both skills and personality." },
];

export function ServicesPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        title="Comprehensive Home Care Services for Every Need"
        subtitle="From personal hygiene assistance to professional nursing and specialized dementia care — we have the right service for every stage of life."
      />

      {/* INTRO */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p style={{ color: "#4A5568", fontSize: 17, lineHeight: 1.75 }}>
            Choosing the right type of home care can feel overwhelming. Our team is here to guide you through every option and match your loved one with the right level of support — starting with a free assessment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="p-5 rounded-xl text-center" style={{ background: "#F5EDD6" }}>
              <p style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 15 }}>Not sure what care you need?</p>
              <p className="mt-1 mb-3" style={{ color: "#4A5568", fontSize: 13 }}>Talk to a care coordinator — they'll help you figure it out.</p>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white" style={{ background: "#1C2E4A", fontWeight: 500, fontSize: 14 }}>
                <Phone size={16} /> Call Us
              </a>
            </div>
            <div className="p-5 rounded-xl text-center" style={{ background: "#F9F7F4" }}>
              <p style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 15 }}>Ready to get started?</p>
              <p className="mt-1 mb-3" style={{ color: "#4A5568", fontSize: 13 }}>Book a free, no-obligation in-home assessment today.</p>
              <Link to="/booking" className="inline-block px-4 py-2 rounded-lg text-white" style={{ background: "#C49B3C", fontWeight: 500, fontSize: 14 }}>
                Book Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-20 px-6" style={{ background: "#F9F7F4" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mb-10">
            <SectionLabel>Core Services</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>Our Core Home Care Services</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, i) => (
              <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <ServiceCard {...service} expanded checklist={CHECKLIST[service.id]} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZED SERVICES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mb-10">
            <SectionLabel>Specialized Care</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>Specialized Care Services</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((service, i) => (
              <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <div className="relative">
                  <div className="absolute -top-2 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-white text-xs font-medium" style={{ background: "#C49B3C" }}>Now Available</span>
                  </div>
                  <ServiceCard {...service} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: "#F9F7F4" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-center mb-10">
            <SectionLabel centered>Common Questions</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>Questions About Our Services</h2>
          </motion.div>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
