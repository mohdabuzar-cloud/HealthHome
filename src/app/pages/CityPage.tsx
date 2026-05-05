import { Link, useLocation, useParams } from "react-router";
import { motion } from "motion/react";
import {
  CheckCircle,
  Clock,
  HeartHandshake,
  Home,
  Languages,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { SectionLabel } from "../components/shared/SectionLabel";
import { ServiceCard } from "../components/shared/ServiceCard";
import { FAQAccordion } from "../components/shared/FAQAccordion";
import { CTAStrip } from "../components/shared/CTAStrip";
import { SERVICES, CITIES, PHONE, PHONE_TEL } from "../data/constants";

const CITY_HERO_IMAGE =
  "https://images.unsplash.com/photo-1765896387387-0538bc9f997e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMGhvbWUlMjB2aXNpdCUyMGVsZGVybHklMjBwYXRpZW50fGVufDF8fHx8MTc3Nzk2MjYzN3ww&ixlib=rb-4.1.0&q=80&w=1080";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

const citySlug = (city: string) => city.toLowerCase().replace(" ", "-");

const cityFromSlug = (slug?: string) => {
  if (!slug) return "Surrey";
  return CITIES.find((city) => citySlug(city) === slug.toLowerCase()) || "Surrey";
};

const nearbyCities = (activeCity: string) => CITIES.filter((city) => city !== activeCity).slice(0, 5);

export function CityPage() {
  const { city } = useParams<{ city: string }>();
  const location = useLocation();
  const pathCity = location.pathname.replace(/^\/home-care-/, "");
  const activeCity = cityFromSlug(city || pathCity);
  const relatedCities = nearbyCities(activeCity);

  const faqItems = [
    {
      question: `How quickly can home care start in ${activeCity}?`,
      answer: `In most cases, care in ${activeCity} can begin within 48 hours after your free assessment. For urgent discharge or short-notice family situations, our coordinator will discuss the fastest available options.`,
    },
    {
      question: `Do you provide all services in ${activeCity}?`,
      answer: `Yes. Families in ${activeCity} can request personal care, home support, nursing care, companionship, respite care, dementia care, post-surgery recovery, overnight care, and other services listed on this site.`,
    },
    {
      question: "Can we choose a caregiver who speaks our language?",
      answer: "We do our best to match by language, culture, care needs, and personality. Our team supports 14 languages across the Lower Mainland.",
    },
    {
      question: "Is there a long-term contract?",
      answer: "No. Care plans are flexible. You can adjust hours, services, or schedules as your loved one's needs change.",
    },
  ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <section className="relative overflow-hidden px-6 py-20" style={{ background: "#1C2E4A" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <nav className="mb-6 flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span>Home Care {activeCity}</span>
            </nav>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-5"
              style={{ background: "rgba(196,155,60,0.16)", border: "1px solid rgba(196,155,60,0.55)", color: "#F5EDD6", fontSize: 13, fontWeight: 500 }}
            >
              <MapPin size={14} /> Serving {activeCity}, BC
            </span>
            <h1 style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(30px, 4.5vw, 52px)", lineHeight: 1.2 }}>
              Trusted Home Care Services in {activeCity}
            </h1>
            <p className="mt-4 max-w-2xl" style={{ color: "rgba(255,255,255,0.82)", fontSize: 18, lineHeight: 1.75 }}>
              Compassionate in-home support for seniors and families in {activeCity}. Get personal care, nursing support, companionship, respite care, and help at home from screened caregivers.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/booking" className="px-7 py-3.5 rounded-lg text-white hover:opacity-90 active:scale-95 transition-all" style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}>
                Book Free Assessment
              </Link>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors" style={{ fontWeight: 600, fontSize: 15 }}>
                <Phone size={17} /> Call {PHONE}
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "24/7", label: "Care support" },
                { value: "48hr", label: "Typical start" },
                { value: "14", label: "Languages" },
                { value: "100%", label: "Screened team" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <p style={{ color: "#C49B3C", fontWeight: 700, fontSize: 24 }}>{item.value}</p>
                  <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 12 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }} className="hidden lg:block">
            <div className="relative h-[520px] overflow-hidden rounded-2xl shadow-2xl">
              <img src={CITY_HERO_IMAGE} alt={`Caregiver providing home care in ${activeCity}`} className="h-full w-full object-cover" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white p-5 shadow-lg">
                <p style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 16 }}>Local care coordination for {activeCity}</p>
                <p className="mt-1" style={{ color: "#4A5568", fontSize: 14, lineHeight: 1.6 }}>
                  A real coordinator helps you choose the right care plan and match.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <motion.div {...fadeUp}>
            <SectionLabel>Care Close to Home</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>
              Home Care Built Around Daily Life in {activeCity}
            </h2>
            <div className="space-y-4 mt-5">
              <p style={{ color: "#4A5568", fontSize: 17, lineHeight: 1.75 }}>
                Families in {activeCity} often need care that is practical, consistent, and easy to adjust. We help with morning routines, medication reminders, meals, mobility, companionship, and personal support.
              </p>
              <p style={{ color: "#4A5568", fontSize: 17, lineHeight: 1.75 }}>
                Every care plan starts with a free assessment. We listen to your loved one's routines, health needs, language preferences, and family schedule before care begins.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <ShieldCheck size={22} color="#C49B3C" />, title: "Screened Caregivers", body: "Background checked, trained, and matched to your needs." },
              { icon: <Clock size={22} color="#C49B3C" />, title: "Flexible Scheduling", body: "Hourly, daily, overnight, and live-in options available." },
              { icon: <Languages size={22} color="#C49B3C" />, title: "Multilingual Support", body: "Language-aware matching across 14 supported languages." },
              { icon: <HeartHandshake size={22} color="#C49B3C" />, title: "Family Updates", body: "Clear communication so families know what is happening." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border bg-white p-5" style={{ borderColor: "#E8E4DC" }}>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-3" style={{ background: "#F5EDD6" }}>
                  {item.icon}
                </div>
                <h3 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 17 }}>{item.title}</h3>
                <p className="mt-2" style={{ color: "#4A5568", fontSize: 14, lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#F9F7F4" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-10">
            <SectionLabel>Services in {activeCity}</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 38px)" }}>
              Support for Every Stage of Care
            </h2>
            <p className="mt-3 max-w-2xl" style={{ color: "#4A5568", fontSize: 17, lineHeight: 1.75 }}>
              Choose one service or combine several into a single care plan for your loved one in {activeCity}.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div key={service.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.03 }}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div {...fadeUp} className="lg:col-span-2">
            <SectionLabel>How It Starts</SectionLabel>
            <h2 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 36px)" }}>
              A Simple Path to Care in {activeCity}
            </h2>
            <p className="mt-3" style={{ color: "#4A5568", fontSize: 16, lineHeight: 1.75 }}>
              We keep the process clear so your family can make decisions without pressure.
            </p>
          </motion.div>
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: <Phone size={24} />, step: "01", title: "Call or Book", body: "Tell us what is happening and what support is needed." },
              { icon: <Home size={24} />, step: "02", title: "Free Assessment", body: `A coordinator learns about your loved one's care needs in ${activeCity}.` },
              { icon: <Users size={24} />, step: "03", title: "Care Begins", body: "We match a caregiver and review the plan with your family." },
            ].map((item, index) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.08 }} className="rounded-xl border bg-white p-6" style={{ borderColor: "#E8E4DC" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "#F5EDD6", color: "#C49B3C" }}>
                  {item.icon}
                </div>
                <p style={{ color: "#C49B3C", fontWeight: 700, fontSize: 24 }}>{item.step}</p>
                <h3 className="mt-1" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 18 }}>{item.title}</h3>
                <p className="mt-2" style={{ color: "#4A5568", fontSize: 14, lineHeight: 1.65 }}>{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#F9F7F4" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div {...fadeUp} className="lg:col-span-3">
            <SectionLabel>Questions About {activeCity}</SectionLabel>
            <h2 className="mb-8" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 36px)" }}>
              Common Questions From Local Families
            </h2>
            <FAQAccordion items={faqItems} />
          </motion.div>
          <motion.div {...fadeUp} className="lg:col-span-2">
            <div className="rounded-xl border-2 bg-white p-7 sticky top-24" style={{ borderColor: "#C49B3C" }}>
              <h3 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 22 }}>Need care in {activeCity}?</h3>
              <p className="mt-2 mb-5" style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7 }}>
                Speak with a care coordinator today. There is no commitment, and the assessment is free.
              </p>
              <Link to="/booking" className="block text-center py-3.5 rounded-lg text-white" style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}>
                Book Free Assessment
              </Link>
              <a href={`tel:${PHONE_TEL}`} className="mt-4 flex items-center justify-center gap-2 py-3.5 rounded-lg border-2" style={{ borderColor: "#1C2E4A", color: "#1C2E4A", fontWeight: 600, fontSize: 15 }}>
                <Phone size={17} /> {PHONE}
              </a>
              <div className="mt-5 pt-5 border-t space-y-2" style={{ borderColor: "#E8E4DC" }}>
                {["No long-term contract required", "Care plans can change over time", "Same team standards across all cities"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} color="#2D7D4F" />
                    <span style={{ color: "#4A5568", fontSize: 13 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: "#1C2E4A" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-8">
            <SectionLabel centered>Nearby Service Areas</SectionLabel>
            <h2 style={{ color: "#fff", fontWeight: 600, fontSize: "clamp(24px, 3.5vw, 36px)" }}>
              Home Care Across the Lower Mainland
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {relatedCities.map((nearbyCity) => (
              <Link
                key={nearbyCity}
                to={`/home-care-${citySlug(nearbyCity)}`}
                className="rounded-xl border p-5 text-center transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.15)" }}
              >
                <MapPin size={20} color="#C49B3C" className="mx-auto mb-2" />
                <span style={{ color: "#fff", fontWeight: 600, fontSize: 15 }}>{nearbyCity}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip title={`Ready to Arrange Home Care in ${activeCity}?`} />
    </div>
  );
}
