import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Users, Building2, CheckCircle, ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { CITIES, SERVICES, LANGUAGES, PHONE_TEL, PHONE } from "../../data/constants";

interface FormData {
  whoNeedsCare: string;
  careRecipientName: string;
  relationship: string;
  fullName: string;
  phone: string;
  email: string;
  primaryService: string;
  city: string;
  currentSituation: string;
  hoursNeeded: string;
  additionalNotes: string;
  preferredDate: string;
  preferredTime: string;
  languagePreference: string;
  privacyConsent: boolean;
}

const initialForm: FormData = {
  whoNeedsCare: "",
  careRecipientName: "",
  relationship: "",
  fullName: "",
  phone: "",
  email: "",
  primaryService: "",
  city: "",
  currentSituation: "",
  hoursNeeded: "",
  additionalNotes: "",
  preferredDate: "",
  preferredTime: "",
  languagePreference: "English",
  privacyConsent: false,
};

export function BookAssessmentForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>(initialForm);

  const inputClass = "w-full px-4 py-3 rounded-lg border outline-none transition-all duration-150 focus:border-[#C49B3C] focus:ring-1 focus:ring-[#C49B3C]";
  const inputStyle = { borderColor: "#E8E4DC", background: "#fff", fontSize: 14, fontFamily: "Inter, sans-serif" };

  const goNext = () => { setDirection(1); setStep(s => s + 1); };
  const goBack = () => { setDirection(-1); setStep(s => s - 1); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];
  const maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8 px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: "#E8F5E9" }}
        >
          <CheckCircle size={44} color="#2D7D4F" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <h3 style={{ color: "#1A1A2E", fontWeight: 700, fontSize: 24 }}>Assessment Booking Confirmed!</h3>
          <p className="mt-3 mb-6 max-w-md mx-auto" style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7 }}>
            A coordinator will call you within 1 hour to confirm your appointment.
          </p>
          <div className="rounded-xl p-5 mb-6 text-left max-w-sm mx-auto" style={{ background: "#F9F7F4" }}>
            <p style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 14, marginBottom: 12 }}>What happens next:</p>
            <ol className="space-y-3">
              {[
                "We call to confirm your assessment appointment",
                "Our care coordinator meets with you",
                "Your personalized care plan is created within 24hrs"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#C49B3C", color: "#fff", fontSize: 12, fontWeight: 700 }}>{i + 1}</span>
                  <span style={{ color: "#4A5568", fontSize: 14 }}>{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="px-5 py-2.5 rounded-lg text-white" style={{ background: "#1C2E4A", fontWeight: 600, fontSize: 14 }}>
              Add to Calendar
            </button>
            <a href={`tel:${PHONE_TEL}`} className="px-5 py-2.5 rounded-lg border-2 text-center" style={{ borderColor: "#1C2E4A", color: "#1C2E4A", fontWeight: 500, fontSize: 14 }}>
              Call now if urgent: {PHONE}
            </a>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          {["About You", "About the Care", "Schedule"].map((label, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold"
                style={{
                  background: step > i + 1 ? "#2D7D4F" : step === i + 1 ? "#C49B3C" : "#E8E4DC",
                  color: step >= i + 1 ? "#fff" : "#718096"
                }}
              >
                {step > i + 1 ? "✓" : i + 1}
              </div>
              <span style={{ fontSize: 13, color: step === i + 1 ? "#1A1A2E" : "#718096", fontWeight: step === i + 1 ? 600 : 400 }}>
                {label}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full h-2 rounded-full" style={{ background: "#E8E4DC" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: "#C49B3C" }}
            animate={{ width: `${((step - 1) / 2) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        {step === 1 && (
          <motion.div key="step1" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
            <p style={{ color: "#718096", fontSize: 13, fontWeight: 500, marginBottom: 16 }}>Step 1 of 3 — About You</p>

            <div className="mb-5">
              <label className="block mb-3" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 15 }}>Who needs care? *</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { value: "myself", icon: <User size={22} />, label: "For myself" },
                  { value: "family_member", icon: <Users size={22} />, label: "For a family member" },
                  { value: "professional", icon: <Building2 size={22} />, label: "For a patient / client (I am a professional)" },
                ].map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setForm({ ...form, whoNeedsCare: opt.value })}
                    className="p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all hover:border-[#C49B3C]"
                    style={{
                      borderColor: form.whoNeedsCare === opt.value ? "#C49B3C" : "#E8E4DC",
                      background: form.whoNeedsCare === opt.value ? "#FDF8EF" : "#fff",
                      color: "#1A1A2E"
                    }}
                  >
                    <span style={{ color: form.whoNeedsCare === opt.value ? "#C49B3C" : "#718096" }}>{opt.icon}</span>
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {form.whoNeedsCare === "family_member" && (
              <div className="mb-4">
                <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Name of person needing care *</label>
                <input type="text" required className={inputClass} style={inputStyle} value={form.careRecipientName} onChange={e => setForm({ ...form, careRecipientName: e.target.value })} placeholder="Their full name" />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Your Full Name *</label>
                <input type="text" required className={inputClass} style={inputStyle} value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} placeholder="Your full name" />
              </div>
              <div>
                <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Phone *</label>
                <input type="tel" required className={inputClass} style={inputStyle} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="(604) 000-0000" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Email *</label>
              <input type="email" required className={inputClass} style={inputStyle} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
            </div>
            {form.whoNeedsCare === "family_member" && (
              <div className="mb-4">
                <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Your relationship to them</label>
                <select className={inputClass} style={{ ...inputStyle, cursor: "pointer" }} value={form.relationship} onChange={e => setForm({ ...form, relationship: e.target.value })}>
                  <option value="">Select relationship...</option>
                  <option>Spouse/Partner</option><option>Adult Child</option><option>Sibling</option>
                  <option>Parent</option><option>Other family</option><option>Legal guardian</option>
                </select>
              </div>
            )}
            <button
              type="button"
              onClick={goNext}
              disabled={!form.whoNeedsCare || !form.fullName || !form.phone || !form.email}
              className="w-full py-3.5 rounded-lg text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-95 disabled:opacity-50"
              style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}
            >
              Next: About the Care <ArrowRight size={18} />
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
            <p style={{ color: "#718096", fontSize: 13, fontWeight: 500, marginBottom: 16 }}>Step 2 of 3 — About the Care</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Primary service needed *</label>
                <select required className={inputClass} style={{ ...inputStyle, cursor: "pointer" }} value={form.primaryService} onChange={e => setForm({ ...form, primaryService: e.target.value })}>
                  <option value="">Select service...</option>
                  {SERVICES.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                  <option>Not sure</option>
                </select>
              </div>
              <div>
                <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>City *</label>
                <select required className={inputClass} style={{ ...inputStyle, cursor: "pointer" }} value={form.city} onChange={e => setForm({ ...form, city: e.target.value })}>
                  <option value="">Select city...</option>
                  {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-3" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 15 }}>Current situation *</label>
              <div className="space-y-2">
                {[
                  "Coming home from hospital or facility soon",
                  "Managing at home but need more support",
                  "Planning ahead for future needs",
                  "Urgent — need help as soon as possible"
                ].map(opt => (
                  <button key={opt} type="button" onClick={() => setForm({ ...form, currentSituation: opt })}
                    className="w-full px-4 py-3 rounded-xl border-2 text-left transition-all hover:border-[#C49B3C]"
                    style={{ borderColor: form.currentSituation === opt ? "#C49B3C" : "#E8E4DC", background: form.currentSituation === opt ? "#FDF8EF" : "#fff", color: "#1A1A2E", fontSize: 14 }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Hours needed</label>
              <select className={inputClass} style={{ ...inputStyle, cursor: "pointer" }} value={form.hoursNeeded} onChange={e => setForm({ ...form, hoursNeeded: e.target.value })}>
                <option value="">Not sure yet</option>
                <option>Few hours/week</option><option>Daily visits 1-4hrs</option>
                <option>Half days 4-6hrs</option><option>Full days 8+hrs</option>
                <option>Overnight</option><option>Live-in</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Additional notes</label>
              <textarea rows={3} className={inputClass} style={{ ...inputStyle, resize: "vertical" }} placeholder="Medical conditions, language preferences..." value={form.additionalNotes} onChange={e => setForm({ ...form, additionalNotes: e.target.value })} />
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={goBack} className="flex items-center gap-2 px-5 py-3 rounded-lg border hover:bg-gray-50 transition-colors" style={{ color: "#4A5568", borderColor: "#E8E4DC", fontWeight: 500, fontSize: 15 }}>
                <ArrowLeft size={18} /> Back
              </button>
              <button type="button" onClick={goNext} disabled={!form.primaryService || !form.city || !form.currentSituation}
                className="flex-1 py-3.5 rounded-lg text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-95 disabled:opacity-50"
                style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}
              >
                Next: Schedule <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.form key="step3" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }} onSubmit={handleSubmit}>
            <p style={{ color: "#718096", fontSize: 13, fontWeight: 500, marginBottom: 16 }}>Step 3 of 3 — Schedule & Preferences</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Preferred assessment date</label>
                <input type="date" min={minDate} max={maxDate} className={inputClass} style={inputStyle} value={form.preferredDate} onChange={e => setForm({ ...form, preferredDate: e.target.value })} />
              </div>
              <div>
                <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Preferred time</label>
                <select className={inputClass} style={{ ...inputStyle, cursor: "pointer" }} value={form.preferredTime} onChange={e => setForm({ ...form, preferredTime: e.target.value })}>
                  <option value="">Select time...</option>
                  <option>Morning 9am-12pm</option><option>Afternoon 12pm-3pm</option>
                  <option>Late afternoon 3pm-6pm</option><option>Evening 6pm-8pm</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Language preference</label>
              <select className={inputClass} style={{ ...inputStyle, cursor: "pointer" }} value={form.languagePreference} onChange={e => setForm({ ...form, languagePreference: e.target.value })}>
                {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
                <option>Other</option>
              </select>
            </div>
            <div className="flex items-start gap-3 mb-5">
              <input type="checkbox" id="privacy3" required checked={form.privacyConsent} onChange={e => setForm({ ...form, privacyConsent: e.target.checked })} className="mt-1" />
              <label htmlFor="privacy3" style={{ color: "#4A5568", fontSize: 13, lineHeight: 1.6 }}>
                I consent to being contacted by Advanced Home Health Care Services about my care inquiry. <a href="#" style={{ color: "#C49B3C" }}>Privacy Policy</a>
              </label>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={goBack} className="flex items-center gap-2 px-5 py-3 rounded-lg border hover:bg-gray-50 transition-colors" style={{ color: "#4A5568", borderColor: "#E8E4DC", fontWeight: 500, fontSize: 15 }}>
                <ArrowLeft size={18} /> Back
              </button>
              <button type="submit" className="flex-1 py-3.5 rounded-lg text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-95"
                style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}
              >
                <Calendar size={18} /> Book My Free Assessment
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
