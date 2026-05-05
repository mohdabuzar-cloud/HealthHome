import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { BookAssessmentForm } from "../components/forms/BookAssessmentForm";

export function BookingPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Book Free Assessment" }]}
        title="Book Your Free Care Assessment"
        subtitle="No commitment, no obligation. A care coordinator will meet with you to understand your needs and create a personalized care plan."
      />

      <section className="py-20 px-6" style={{ background: "#F9F7F4" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border" style={{ borderColor: "#E8E4DC" }}>
              <BookAssessmentForm />
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <div className="bg-white rounded-xl p-6 border shadow-sm sticky top-24" style={{ borderColor: "#E8E4DC" }}>
              <h3 className="mb-4" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 18 }}>What to expect</h3>
              <div className="space-y-4">
                {[
                  { icon: "📞", title: "Coordinator call within 1 hour", detail: "A real person calls to confirm your booking and answer any questions." },
                  { icon: "🏠", title: "In-home visit at your convenience", detail: "We come to you at a time that works best for your family." },
                  { icon: "📋", title: "Personalized care plan", detail: "Created specifically for your loved one's needs and preferences." },
                  { icon: "💙", title: "No obligation", detail: "The assessment is completely free. There's no pressure to commit." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 14 }}>{item.title}</p>
                      <p style={{ color: "#718096", fontSize: 13, lineHeight: 1.5 }}>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t space-y-2" style={{ borderColor: "#E8E4DC" }}>
                {["No commitment required", "Free, no-obligation assessment", "Care starts within 48 hours", "14 languages available"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle size={16} color="#2D7D4F" />
                    <span style={{ color: "#4A5568", fontSize: 13 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
