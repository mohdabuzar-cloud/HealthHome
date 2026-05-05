import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { CITIES, SERVICES, LANGUAGES, PHONE } from "../../data/constants";

export function ReferralForm() {
  const [submitted, setSubmitted] = useState(false);
  const [consented, setConsented] = useState(false);
  const [form, setForm] = useState({
    fullName: "", title: "", organization: "", phone: "", email: "",
    patientName: "", patientCity: "", serviceRequired: "", urgency: "",
    startDate: "", patientLanguage: "", clinicalNotes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consented) return;
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border outline-none transition-all duration-150 focus:border-[#C49B3C] focus:ring-1 focus:ring-[#C49B3C]";
  const inputStyle = { borderColor: "#E8E4DC", background: "#fff", fontSize: 14, fontFamily: "Inter, sans-serif" };

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-10">
        <CheckCircle size={48} color="#2D7D4F" className="mb-4" />
        <h3 style={{ color: "#1A1A2E", fontWeight: 700, fontSize: 22 }}>Referral Submitted</h3>
        <p className="mt-2" style={{ color: "#4A5568", fontSize: 15 }}>
          Our referral coordinator will contact you at {form.phone} within 2 hours.
        </p>
        <p className="mt-2" style={{ color: "#718096", fontSize: 13 }}>
          Urgent referrals: {PHONE} — referral coordinator
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* About You */}
      <div>
        <h4 className="pb-3 mb-4 border-b" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 17, borderColor: "#E8E4DC" }}>About You</h4>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Full Name *</label>
              <input type="text" required className={inputClass} style={inputStyle} value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} placeholder="Your full name" />
            </div>
            <div>
              <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Professional Title / Role *</label>
              <input type="text" required className={inputClass} style={inputStyle} value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="e.g., Discharge Planner" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Organization / Facility *</label>
              <input type="text" required className={inputClass} style={inputStyle} value={form.organization} onChange={e => setForm({ ...form, organization: e.target.value })} placeholder="Organization name" />
            </div>
            <div>
              <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Phone Number *</label>
              <input type="tel" required className={inputClass} style={inputStyle} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="(604) 000-0000" />
            </div>
          </div>
          <div>
            <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Professional Email *</label>
            <input type="email" required className={inputClass} style={inputStyle} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@organization.com" />
          </div>
        </div>
      </div>

      {/* About the Patient */}
      <div>
        <h4 className="pb-3 mb-4 border-b" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 17, borderColor: "#E8E4DC" }}>About the Patient</h4>
        <p className="mb-4 italic" style={{ color: "#718096", fontSize: 13 }}>
          All patient information is kept strictly confidential and used solely for coordinating care services.
        </p>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Patient Full Name *</label>
              <input type="text" required className={inputClass} style={inputStyle} value={form.patientName} onChange={e => setForm({ ...form, patientName: e.target.value })} placeholder="Patient's full name" />
            </div>
            <div>
              <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>City *</label>
              <select required className={inputClass} style={{ ...inputStyle, cursor: "pointer" }} value={form.patientCity} onChange={e => setForm({ ...form, patientCity: e.target.value })}>
                <option value="">Select city...</option>
                {CITIES.map(c => <option key={c}>{c}</option>)}
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Service Required *</label>
              <select required className={inputClass} style={{ ...inputStyle, cursor: "pointer" }} value={form.serviceRequired} onChange={e => setForm({ ...form, serviceRequired: e.target.value })}>
                <option value="">Select service...</option>
                {SERVICES.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Urgency *</label>
              <select required className={inputClass} style={{ ...inputStyle, cursor: "pointer" }} value={form.urgency} onChange={e => setForm({ ...form, urgency: e.target.value })}>
                <option value="">Select urgency...</option>
                <option>Urgent — within 24 hours</option>
                <option>Standard — within 3-5 days</option>
                <option>Planning ahead</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Estimated Start / Discharge Date</label>
              <input type="date" className={inputClass} style={inputStyle} value={form.startDate} onChange={e => setForm({ ...form, startDate: e.target.value })} />
            </div>
            <div>
              <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Patient Language Preference</label>
              <select className={inputClass} style={{ ...inputStyle, cursor: "pointer" }} value={form.patientLanguage} onChange={e => setForm({ ...form, patientLanguage: e.target.value })}>
                <option value="">Select language...</option>
                {LANGUAGES.map(l => <option key={l}>{l}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Clinical Notes</label>
            <textarea rows={4} className={inputClass} style={{ ...inputStyle, resize: "vertical" }} placeholder="Relevant medical history, care requirements, special needs..." value={form.clinicalNotes} onChange={e => setForm({ ...form, clinicalNotes: e.target.value })} />
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" id="referral-consent" required checked={consented} onChange={e => setConsented(e.target.checked)} className="mt-1" />
        <label htmlFor="referral-consent" style={{ color: "#4A5568", fontSize: 13, lineHeight: 1.6 }}>
          I confirm that I have obtained consent from the patient or their substitute decision-maker to share this information with Advanced Home Health Care Services for the purpose of coordinating care.
        </label>
      </div>

      <button type="submit" className="w-full py-3.5 rounded-lg text-white transition-all hover:opacity-90 active:scale-95"
        style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}
      >
        Submit Referral
      </button>
      <p className="text-center" style={{ color: "#718096", fontSize: 13 }}>
        We follow up within 2 hours. Urgent: {PHONE} — referral coordinator.
      </p>
    </form>
  );
}
