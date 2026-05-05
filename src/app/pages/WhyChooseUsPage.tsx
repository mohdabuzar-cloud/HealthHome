import { motion } from "motion/react";
import { CheckCircle, CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { SectionLabel } from "../components/shared/SectionLabel";
import { TestimonialCard } from "../components/shared/TestimonialCard";
import { CTAStrip } from "../components/shared/CTAStrip";

const SCREENING_IMAGE = "https://images.unsplash.com/photo-1631815590058-860e4f83c1e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZ2l2ZXIlMjBiYWNrZ3JvdW5kJTIwY2hlY2slMjBwcm9mZXNzaW9uYWwlMjBzY3JlZW5pbmd8ZW58MXx8fHwxNzc3OTYyNjQxfDA&ixlib=rb-4.1.0&q=80&w=1080";
const CARE_PLAN_IMAGE = "https://images.unsplash.com/photo-1758691462321-9b6c98c40f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbGl6ZWQlMjBjYXJlJTIwcGxhbiUyMHNlbmlvciUyMHdlbGxuZXNzfGVufDF8fHx8MTc3Nzk2MjY0MXww&ixlib=rb-4.1.0&q=80&w=1080";
const LANGUAGE_IMAGE = "https://images.unsplash.com/photo-1723649388532-358b56dda065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aWxpbmd1YWwlMjBkaXZlcnNlJTIwaGVhbHRoY2FyZSUyMHN0YWZmfGVufDF8fHx8MTc3Nzk2MjY0Mnww&ixlib=rb-4.1.0&q=80&w=1080";

const COMPARISON = [
  { feature: "Background checks", us: "✅ Always", agencies: "⚠️ Sometimes", independent: "❌ Varies" },
  { feature: "Clinical oversight", us: "✅ Yes", agencies: "❌ No", independent: "❌ No" },
  { feature: "Care plan included", us: "✅ Free", agencies: "❌ No", independent: "❌ No" },
  { feature: "Caregiver replacement", us: "✅ Free", agencies: "⚠️ Sometimes", independent: "❌ Difficult" },
  { feature: "24/7 support line", us: "✅ Always", agencies: "⚠️ Limited", independent: "❌ No" },
  { feature: "Multilingual", us: "✅ 14 languages", agencies: "⚠️ Limited", independent: "⚠️ Varies" },
  { feature: "Liability insurance", us: "✅ Fully covered", agencies: "⚠️ Varies", independent: "❌ No" },
];

const renderStatus = (value: string) => {
  if (value.startsWith("✅")) return <span className="flex items-center gap-1.5"><CheckCircle size={16} color="#2D7D4F" /><span style={{ color: "#1A1A2E", fontSize: 13 }}>{value.replace("✅ ", "")}</span></span>;
  if (value.startsWith("⚠️")) return <span className="flex items-center gap-1.5"><AlertCircle size={16} color="#D97706" /><span style={{ color: "#4A5568", fontSize: 13 }}>{value.replace("⚠️ ", "")}</span></span>;
  return <span className="flex items-center gap-1.5"><XCircle size={16} color="#C53030" /><span style={{ color: "#718096", fontSize: 13 }}>{value.replace("❌ ", "")}</span></span>;
};

export function WhyChooseUsPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Why Choose Us" }]}
        title="Why Families Across BC Choose Advanced Home Health"
        subtitle="Many options exist for home care. Here's what makes us genuinely different — and why it matters for your loved one."
      />

      {/* DIFFERENTIATORS */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* Block 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <img src={SCREENING_IMAGE} alt="Professional caregiver screening process" className="w-full rounded-2xl shadow-lg object-cover" style={{ height: 440 }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <SectionLabel>Safety First</SectionLabel>
              <h3 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(20px, 3vw, 28px)" }}>Every Caregiver Is Rigorously Screened Before They Enter Your Home</h3>
              <p className="mt-4 mb-5" style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.75 }}>
                Your loved one's safety is not negotiable. Every caregiver who joins our team goes through a comprehensive screening process before their first visit.
              </p>
              <ul className="space-y-3">
                {[
                  "Criminal record + vulnerable sector check",
                  "Professional reference verification (minimum 2)",
                  "Identity and eligibility confirmation",
                  "Health and immunization verification",
                  "Skills and competency assessment",
                  "Full orientation and onboarding training",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} color="#C49B3C" className="flex-shrink-0 mt-0.5" />
                    <span style={{ color: "#4A5568", fontSize: 15 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Block 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <SectionLabel>Tailored to You</SectionLabel>
              <h3 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(20px, 3vw, 28px)" }}>Care Plans Built Around Your Loved One — Not Our Convenience</h3>
              <p className="mt-4" style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.75 }}>
                We conduct a free in-home assessment before any care begins. This is a real conversation — not a form to fill out. We meet your loved one, understand their routines, preferences, and health needs, and build a plan around them.
              </p>
              <p className="mt-4" style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.75 }}>
                The care plan is reviewed with you before it starts. You approve every detail. And as needs change, the plan changes too — we review it at minimum monthly.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <img src={CARE_PLAN_IMAGE} alt="Personalized care plan being created with family" className="w-full rounded-2xl shadow-lg object-cover" style={{ height: 440 }} />
            </motion.div>
          </div>

          {/* Block 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <img src={LANGUAGE_IMAGE} alt="Diverse multilingual care team" className="w-full rounded-2xl shadow-lg object-cover" style={{ height: 440 }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <SectionLabel>Cultural Care</SectionLabel>
              <h3 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(20px, 3vw, 28px)" }}>We Speak Your Language — Literally</h3>
              <p className="mt-4" style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.75 }}>
                Our team speaks 14 languages, reflecting the cultural diversity of the Lower Mainland. When a senior can communicate in their own language, they feel safer, more comfortable, and more cared for.
              </p>
              <p className="mt-4" style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.75 }}>
                Cultural care isn't just language — it's understanding dietary traditions, religious observances, communication styles, and family dynamics. We train our caregivers to honor these differences.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* STATS STRIP */}
      <section className="py-16 px-6" style={{ background: "#1C2E4A" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "10+", label: "Cities Served" },
            { stat: "14", label: "Languages Spoken" },
            { stat: "24/7", label: "Availability" },
            { stat: "100%", label: "Screened Caregivers" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.1 }}>
              <p style={{ color: "#C49B3C", fontWeight: 700, fontSize: 40 }}>{item.stat}</p>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, marginTop: 4 }}>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 px-6" style={{ background: "#F9F7F4" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-center mb-10">
            <SectionLabel centered>The Comparison</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>How We Compare</h2>
          </motion.div>
          <div className="rounded-xl overflow-hidden shadow-sm border" style={{ borderColor: "#E8E4DC" }}>
            <table className="w-full">
              <thead>
                <tr style={{ background: "#1C2E4A" }}>
                  <th className="px-5 py-4 text-left" style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 500 }}>Feature</th>
                  <th className="px-5 py-4 text-left" style={{ color: "#C49B3C", fontSize: 13, fontWeight: 600 }}>Advanced Home Health</th>
                  <th className="px-5 py-4 text-left" style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 500 }}>Staffing Agencies</th>
                  <th className="px-5 py-4 text-left" style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 500 }}>Independent Caregivers</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F9F7F4", borderBottom: "1px solid #E8E4DC" }}>
                    <td className="px-5 py-4" style={{ color: "#1A1A2E", fontWeight: 500, fontSize: 14 }}>{row.feature}</td>
                    <td className="px-5 py-4">{renderStatus(row.us)}</td>
                    <td className="px-5 py-4">{renderStatus(row.agencies)}</td>
                    <td className="px-5 py-4">{renderStatus(row.independent)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-8" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(22px, 3.5vw, 34px)" }}>What Families Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard quote="From the first call, they treated us with respect and took the time to understand exactly what my dad needed. The caregiver they matched us with has been wonderful." name="Jennifer T." city="Burnaby, BC" date="April 2025" />
            <TestimonialCard quote="I was skeptical at first, but the screening process they described gave me confidence. Our caregiver is professional, reliable, and treats Mom like family." name="Mark D." city="Surrey, BC" date="March 2025" />
            <TestimonialCard quote="Having a Mandarin-speaking caregiver made such a difference. My grandmother opened up in a way she never did with English-only staff." name="Lisa C." city="Richmond, BC" date="February 2025" />
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
