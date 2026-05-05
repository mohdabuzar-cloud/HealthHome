import { motion } from "motion/react";
import { Phone, Mail, MessageSquare, Clock, Facebook, Instagram, MapPin } from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { SectionLabel } from "../components/shared/SectionLabel";
import { GeneralContactForm } from "../components/forms/GeneralContactForm";
import { CTAStrip } from "../components/shared/CTAStrip";
import { PHONE, PHONE_TEL, EMAIL, WHATSAPP_URL, CITIES } from "../data/constants";
import { Link } from "react-router";

export function ContactPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
        title="Get in Touch — We're Here 24/7"
        subtitle="Have a question, need urgent help, or ready to book a free assessment? We're available 24 hours a day, 7 days a week."
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="lg:col-span-2">
            <h3 className="mb-6" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 22 }}>Ways to Reach Us</h3>
            <div className="space-y-6">
              <div className="pb-6 border-b" style={{ borderColor: "#E8E4DC" }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "#F5EDD6" }}>
                    <Phone size={20} color="#C49B3C" />
                  </div>
                  <p style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 14 }}>Phone</p>
                </div>
                <a href={`tel:${PHONE_TEL}`} style={{ color: "#1C2E4A", fontWeight: 700, fontSize: 22 }}>{PHONE}</a>
                <p style={{ color: "#718096", fontSize: 13, marginTop: 4 }}>Available 24 hours · 7 days a week</p>
              </div>

              <div className="pb-6 border-b" style={{ borderColor: "#E8E4DC" }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "#E8F5E9" }}>
                    <MessageSquare size={20} color="#25D366" />
                  </div>
                  <p style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 14 }}>WhatsApp</p>
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline" style={{ color: "#25D366", fontSize: 14, fontWeight: 500 }}>
                  Open WhatsApp →
                </a>
                <p style={{ color: "#718096", fontSize: 13, marginTop: 2 }}>Quick message, fast reply</p>
              </div>

              <div className="pb-6 border-b" style={{ borderColor: "#E8E4DC" }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "#EEF2FF" }}>
                    <Mail size={20} color="#6366F1" />
                  </div>
                  <p style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 14 }}>Email</p>
                </div>
                <a href={`mailto:${EMAIL}`} style={{ color: "#1C2E4A", fontSize: 14 }}>{EMAIL}</a>
                <p style={{ color: "#718096", fontSize: 13, marginTop: 2 }}>We respond within 2-4 hours</p>
              </div>

              <div className="pb-6 border-b" style={{ borderColor: "#E8E4DC" }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "#FEF3C7" }}>
                    <Clock size={20} color="#D97706" />
                  </div>
                  <p style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 14 }}>Office Hours</p>
                </div>
                <div className="space-y-1" style={{ fontSize: 13, color: "#4A5568" }}>
                  <p>Mon–Fri: 8:00am – 8:00pm</p>
                  <p>Sat–Sun: 9:00am – 6:00pm</p>
                  <p style={{ color: "#C49B3C", fontWeight: 500 }}>Care coordinators: Available 24/7</p>
                </div>
              </div>

              <div className="flex gap-3">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center border hover:bg-[#F9F7F4] transition-colors" style={{ borderColor: "#E8E4DC" }}>
                  <Facebook size={20} color="#1C2E4A" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center border hover:bg-[#F9F7F4] transition-colors" style={{ borderColor: "#E8E4DC" }}>
                  <Instagram size={20} color="#1C2E4A" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="lg:col-span-3">
            <h3 className="mb-6" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 22 }}>Send Us a Message</h3>
            <GeneralContactForm />
          </motion.div>
        </div>
      </section>

      {/* CITIES */}
      <section className="py-16 px-6" style={{ background: "#F9F7F4" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <SectionLabel>Our Coverage Area</SectionLabel>
            <h2 className="mb-8" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(22px, 3.5vw, 34px)" }}>We Serve These Communities</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {CITIES.map(city => (
              <Link key={city} to={`/home-care-${city.toLowerCase().replace(" ", "-")}`}
                className="flex items-center gap-2 p-4 rounded-xl border bg-white hover:border-[#C49B3C] hover:shadow-sm transition-all"
                style={{ borderColor: "#E8E4DC" }}>
                <MapPin size={16} color="#C49B3C" />
                <span style={{ color: "#1A1A2E", fontSize: 14, fontWeight: 500 }}>{city}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
