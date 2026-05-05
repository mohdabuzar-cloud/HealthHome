import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { SectionLabel } from "../components/shared/SectionLabel";
import { ReferralForm } from "../components/forms/ReferralForm";
import { CTAStrip } from "../components/shared/CTAStrip";
import { SERVICES, PHONE, PHONE_TEL } from "../data/constants";

const PARTNER_ROLES = [
  "Hospital Discharge Planners",
  "Social Workers",
  "Case Managers",
  "Community Health Nurses",
  "Long-Term Care Facilities",
  "Family Physicians",
];

const POST_REFERRAL_STEPS = [
  { step: "01", title: "You Submit", detail: "Complete our secure referral form. We acknowledge receipt within 15 minutes." },
  { step: "02", title: "We Confirm", detail: "Our referral coordinator contacts you within 2 hours to confirm details and ask clarifying questions." },
  { step: "03", title: "We Assess", detail: "A care coordinator contacts the patient or family to conduct the free in-home assessment." },
  { step: "04", title: "Care Begins", detail: "Matched caregiver begins within 48 hours. You receive a care commencement confirmation." },
];

export function ReferralPartnersPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Hero */}
      <section className="py-24 px-6" style={{ background: "#1C2E4A" }}>
        <div className="max-w-7xl mx-auto">
          <nav className="mb-6 flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            <a href="/" className="hover:text-white">Home</a>
            <span>/</span>
            <span>Referral Partners</span>
          </nav>
          <h1 style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.2 }}>
            Referring a Patient to Home Care?
          </h1>
          <p className="mt-4 max-w-2xl" style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, lineHeight: 1.75 }}>
            We specialize in seamless hospital-to-home transitions. Our referral coordinator follows up within 2 hours — for urgent discharges, same-day assessment is available.
          </p>

          {/* Info Strip */}
          <div className="mt-8 inline-flex flex-wrap gap-6 px-5 py-4 rounded-xl" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
            {[
              { label: "Dedicated referral line", value: `${PHONE} ext. 2` },
              { label: "Referral response", value: "Within 2 hours guaranteed" },
              { label: "Urgent discharge", value: "Same-day assessment available" },
            ].map((item, i) => (
              <div key={i}>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.label}</p>
                <p style={{ color: "#C49B3C", fontWeight: 600, fontSize: 14, marginTop: 2 }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <SectionLabel>Who We Work With</SectionLabel>
            <h2 className="mb-8" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>We Work With Healthcare & Community Professionals</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {PARTNER_ROLES.map((role, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}
                className="p-5 rounded-xl border text-center font-medium" style={{ borderColor: "#E8E4DC", background: "#F9F7F4", color: "#1A1A2E", fontSize: 15 }}>
                {role}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES FOR REFERRED PATIENTS */}
      <section className="py-20 px-6" style={{ background: "#F9F7F4" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <SectionLabel>Our Capabilities</SectionLabel>
            <h2 className="mb-8" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>Services Available for Referred Patients</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="mb-4" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 16 }}>All Standard Services</h4>
              <ul className="space-y-2">
                {SERVICES.map(s => (
                  <li key={s.id} className="flex items-center gap-2" style={{ color: "#4A5568", fontSize: 14 }}>
                    <span style={{ color: "#C49B3C" }}>✓</span> {s.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 16 }}>Additional Capabilities</h4>
              <ul className="space-y-2">
                {[
                  "24-hour care coverage and live-in support",
                  "Bilingual caregiver matching (14 languages)",
                  "Clinical supervisor oversight and reporting",
                  "Regular progress reports to referring professionals",
                  "VAC-funded care coordination for veterans",
                  "Rapid discharge response (48hr or less)",
                  "Coordination with hospital care teams",
                  "Post-discharge medication management",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2" style={{ color: "#4A5568", fontSize: 14 }}>
                    <span style={{ color: "#C49B3C" }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REFERRAL FORM */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-center mb-8">
            <SectionLabel centered>Submit a Referral</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>Refer a Patient</h2>
          </motion.div>
          <div className="p-8 rounded-xl border shadow-sm" style={{ borderColor: "#E8E4DC" }}>
            <ReferralForm />
          </div>
        </div>
      </section>

      {/* POST-REFERRAL PROCESS */}
      <section className="py-16 px-6" style={{ background: "#1C2E4A" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-10" style={{ color: "#fff", fontWeight: 600, fontSize: "clamp(22px, 3.5vw, 34px)" }}>
            What Happens After You Refer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {POST_REFERRAL_STEPS.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.1 }}
                className="p-6 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p style={{ color: "#C49B3C", fontWeight: 700, fontSize: 28 }}>{step.step}</p>
                <h3 className="mt-2" style={{ color: "#fff", fontWeight: 600, fontSize: 17 }}>{step.title}</h3>
                <p className="mt-2" style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.6 }}>{step.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15 }}>Have an urgent referral? Call our dedicated line directly:</p>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 mt-3" style={{ color: "#C49B3C", fontWeight: 700, fontSize: 22 }}>
              <Phone size={22} /> {PHONE} ext. 2
            </a>
          </div>
        </div>
      </section>

      <CTAStrip title="Ready to Refer a Patient?" body="Our referral coordinator is ready to work with you. Submit a referral online or call us directly for urgent situations." primaryLabel="Submit a Referral" primaryTo="/referral-partners#form" />
    </div>
  );
}
