import { motion } from "motion/react";
import { Phone, Home, ClipboardList, UserCheck, Play, RefreshCw } from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { SectionLabel } from "../components/shared/SectionLabel";
import { FAQAccordion } from "../components/shared/FAQAccordion";
import { CTAStrip } from "../components/shared/CTAStrip";

const STEPS = [
  { icon: <Phone size={28} color="#C49B3C" />, label: "Step 1", num: "01", title: "Your First Call or Inquiry", detail: "Reach out by phone, form, or chat. A care coordinator responds within 1 hour during business hours. We'll listen, ask the right questions, and help you understand your options.", badge: "Response within 1 hour" },
  { icon: <Home size={28} color="#C49B3C" />, label: "Step 2", num: "02", title: "Free In-Home Assessment", detail: "A care coordinator visits your home to meet your loved one, understand their daily life, and identify exactly what support is needed. This assessment is completely free with no obligation.", badge: "Scheduled within 24-48 hours" },
  { icon: <ClipboardList size={28} color="#C49B3C" />, label: "Step 3", num: "03", title: "Your Personalized Care Plan", detail: "Based on the assessment, we create a detailed care plan covering every aspect of your loved one's care. You review and approve it before anything begins.", badge: "Within 24hrs of assessment" },
  { icon: <UserCheck size={28} color="#C49B3C" />, label: "Step 4", num: "04", title: "Caregiver Matching", detail: "We match your loved one with a caregiver based on care needs, language preference, personality, and availability. You meet the caregiver before care begins.", badge: "Matching within 24-48 hours" },
  { icon: <Play size={28} color="#C49B3C" />, label: "Step 5", num: "05", title: "Care Begins", detail: "Your caregiver arrives for the first visit, fully briefed and prepared. We follow up with you after the first visit to make sure everything is going perfectly.", badge: "First visit confirmed in advance" },
  { icon: <RefreshCw size={28} color="#C49B3C" />, label: "Step 6", num: "06", title: "Ongoing Review & Adjustments", detail: "Care needs evolve. We conduct regular reviews — at minimum monthly — to ensure the care plan remains aligned with your loved one's needs. You can request changes at any time.", badge: "Monthly minimum review" },
];

const FAQ_ITEMS = [
  { question: "Do I need a doctor's referral to start care?", answer: "No. You can contact us directly — no referral is required. If you have medical documentation or notes from your doctor, they can be helpful but are not mandatory." },
  { question: "What happens during the in-home assessment?", answer: "A care coordinator visits your home and has a friendly conversation with you and your loved one. We discuss daily routines, health needs, preferences, and what a typical day looks like. The goal is to understand the whole person, not just their care needs." },
  { question: "How do you match caregivers to clients?", answer: "We consider care skills, certifications, language ability, cultural background, personality, and availability. We introduce the caregiver to you before care begins and welcome your feedback." },
  { question: "What if we don't get along with our caregiver?", answer: "We'll rematch you promptly, at no cost. A good caregiver relationship is foundational to quality care, and we take it seriously." },
  { question: "How do you monitor care quality over time?", answer: "We use a combination of regular care coordinator check-ins, caregiver reports, and family feedback. We also encourage families to reach out anytime with concerns or updates." },
];

export function CareProcessPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Care Process" }]}
        title="How Care Works — Simple, Transparent, Fast"
        subtitle="From your first call to your first visit — here's exactly what to expect when you choose Advanced Home Health."
      />

      {/* TIMELINE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-center mb-16">
            <SectionLabel centered>The Journey</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>Your Care Journey — Step by Step</h2>
            <p className="mt-3 max-w-2xl mx-auto" style={{ color: "#4A5568", fontSize: 16, lineHeight: 1.75 }}>
              We've designed our process to be as straightforward as possible. Most families have a caregiver in place within a few days of their first call.
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2" style={{ background: "#E8E4DC" }} />

            <div className="space-y-12">
              {STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 p-6 rounded-xl border bg-white shadow-sm ${i % 2 === 0 ? "md:text-right" : ""}`} style={{ borderColor: "#E8E4DC" }}>
                    <p style={{ color: "#C49B3C", fontWeight: 700, fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase" }}>{step.label}</p>
                    <p style={{ color: "#C49B3C", fontWeight: 700, fontSize: 32 }}>{step.num}</p>
                    <h3 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 19 }}>{step.title}</h3>
                    <p className="mt-2" style={{ color: "#4A5568", fontSize: 14, lineHeight: 1.7 }}>{step.detail}</p>
                    <span className="inline-block mt-3 px-3 py-1 rounded-full" style={{ background: "#F5EDD6", color: "#A8832E", fontSize: 12, fontWeight: 500 }}>{step.badge}</span>
                  </div>

                  {/* Center icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center border-4 border-white shadow-md" style={{ background: "#F5EDD6" }}>
                      {step.icon}
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: "#F9F7F4" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-center mb-12">
            <SectionLabel centered>Common Questions</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>What Families Ask About Getting Started</h2>
          </motion.div>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
