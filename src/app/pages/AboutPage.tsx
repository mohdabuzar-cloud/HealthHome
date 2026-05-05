import { motion } from "motion/react";
import { Heart, Shield, Users, Star } from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { SectionLabel } from "../components/shared/SectionLabel";
import { CTAStrip } from "../components/shared/CTAStrip";

const STORY_IMAGE = "https://images.unsplash.com/photo-1646663133945-db03f563076a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjYXJlJTIwc2VuaW9yJTIwcGFyZW50JTIwYWR1bHQlMjBjaGlsZHxlbnwxfHx8fDE3Nzc5NjI2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const TEAM_IMAGE = "https://images.unsplash.com/photo-1685575002792-a3a916964539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaGVhbHRoY2FyZSUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzc3OTYyNjM4fDA&ixlib=rb-4.1.0&q=80&w=1080";

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4 } };

export function AboutPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
        title="Committed to Care. Built on Trust."
        subtitle="We are a team of passionate care professionals dedicated to providing dignified, personalized home care across BC's Lower Mainland. Available 24 hours a day, 7 days a week."
      />

      {/* OUR STORY */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <SectionLabel>Our Story</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>Why We Started Advanced Home Health</h2>
            <div className="space-y-5 mt-6">
              <p style={{ color: "#4A5568", fontSize: 17, lineHeight: 1.75 }}>
                Advanced Home Health Care Services was founded on a simple but powerful belief: every senior deserves to live with dignity in the comfort of their own home. Our founders experienced firsthand the challenges families face when a loved one needs more support — the confusion, the worry, and the difficulty finding reliable care.
              </p>
              <p style={{ color: "#4A5568", fontSize: 17, lineHeight: 1.75 }}>
                Today, we serve families across 10 communities in BC's Lower Mainland. Our team speaks 14 languages and reflects the rich diversity of the communities we serve. We match caregivers not just by skill, but by language, culture, and personality.
              </p>
              <p style={{ color: "#4A5568", fontSize: 17, lineHeight: 1.75 }}>
                We are not a staffing agency. We are your care partner — involved in every step, accountable for every visit, and committed to every family we serve.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <img src={STORY_IMAGE} alt="Family caring for senior parent" className="w-full rounded-2xl shadow-lg object-cover" style={{ height: 480 }} />
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-6" style={{ background: "#F9F7F4" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionLabel centered>What Guides Us</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Heart size={32} color="#C49B3C" />, title: "Compassion", desc: "Every client is treated with warmth, dignity, and the same care we would give to our own family." },
              { icon: <Shield size={32} color="#C49B3C" />, title: "Trust", desc: "We earn your trust through transparency, consistency, and accountability in every interaction." },
              { icon: <Users size={32} color="#C49B3C" />, title: "Family-Centered", desc: "We work with families, not just for clients. You are kept informed and involved every step of the way." },
              { icon: <Star size={32} color="#C49B3C" />, title: "Excellence", desc: "We hold ourselves to the highest professional standards and continuously improve the care we deliver." },
            ].map((val, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white border text-center transition-all hover:shadow-md hover:-translate-y-0.5" style={{ borderColor: "#E8E4DC" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "#F5EDD6" }}>
                  {val.icon}
                </div>
                <h3 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 19 }}>{val.title}</h3>
                <p className="mt-2" style={{ color: "#4A5568", fontSize: 14, lineHeight: 1.7 }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <SectionLabel centered>The People Behind the Care</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>Meet Our Leadership Team</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Amara Singh", title: "Clinical Director", bio: "15+ years in community health nursing. Leads our clinical oversight program and caregiver training." },
              { name: "Michael Chen", title: "Director of Operations", bio: "Former hospital administrator with expertise in care coordination and service delivery across large regions." },
              { name: "Fatima Al-Hassan", title: "Care Coordinator Lead", bio: "Bilingual coordinator fluent in Arabic and English, specializing in bridging cultural care gaps for families." },
            ].map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-6 rounded-xl border bg-white hover:shadow-md transition-all" style={{ borderColor: "#E8E4DC" }}>
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4" style={{ borderColor: "#F5EDD6" }}>
                  <img src={TEAM_IMAGE} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 17 }}>{member.name}</h4>
                <p style={{ color: "#C49B3C", fontSize: 13, fontWeight: 500, marginTop: 4 }}>{member.title}</p>
                <p className="mt-3" style={{ color: "#4A5568", fontSize: 14, lineHeight: 1.6 }}>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      <CTAStrip />
    </div>
  );
}
