import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { CITIES, SERVICES, PHONE } from "../../data/constants";

export function GeneralContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    fullName: "", phone: "", email: "", bestTime: "",
    city: "", serviceNeeded: "", message: "", howHeard: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border outline-none transition-colors";
  const inputStyle = { borderColor: "#E8E4DC", background: "#fff", fontSize: 14, fontFamily: "Inter, sans-serif" };

  if (submitted) {
    return (
      <div className="p-8 rounded-xl border-2 flex flex-col items-center text-center" style={{ borderColor: "#1C2E4A" }}>
        <CheckCircle size={44} color="#2D7D4F" className="mb-4" />
        <h3 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 22 }}>Message received!</h3>
        <p className="mt-2" style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7 }}>
          A care coordinator will reach out to you within 2–4 hours.
        </p>
        <p className="mt-3" style={{ color: "#C49B3C", fontWeight: 600, fontSize: 14 }}>
          If urgent, call {PHONE}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Full Name *</label>
          <input type="text" required className={inputClass} style={inputStyle} value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} placeholder="Your full name" />
        </div>
        <div>
          <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Phone Number *</label>
          <input type="tel" required className={inputClass} style={inputStyle} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="(604) 000-0000" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Email Address *</label>
          <input type="email" required className={inputClass} style={inputStyle} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
        </div>
        <div>
          <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Best Time to Call</label>
          <select className={inputClass} style={{ ...inputStyle, cursor: "pointer" }} value={form.bestTime} onChange={e => setForm({ ...form, bestTime: e.target.value })}>
            <option value="">Anytime</option>
            <option>Morning 8am-12pm</option>
            <option>Afternoon 12pm-5pm</option>
            <option>Evening 5pm-8pm</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>City *</label>
          <select required className={inputClass} style={{ ...inputStyle, cursor: "pointer" }} value={form.city} onChange={e => setForm({ ...form, city: e.target.value })}>
            <option value="">Select city...</option>
            {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Service Needed</label>
          <select className={inputClass} style={{ ...inputStyle, cursor: "pointer" }} value={form.serviceNeeded} onChange={e => setForm({ ...form, serviceNeeded: e.target.value })}>
            <option value="">Not sure yet</option>
            {SERVICES.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
            <option>Multiple services</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Message *</label>
        <textarea required rows={4} className={inputClass} style={{ ...inputStyle, resize: "vertical" }} placeholder="Tell us about your situation..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
      </div>
      <div>
        <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>How did you hear about us?</label>
        <select className={inputClass} style={{ ...inputStyle, cursor: "pointer" }} value={form.howHeard} onChange={e => setForm({ ...form, howHeard: e.target.value })}>
          <option value="">Select...</option>
          <option>Google Search</option>
          <option>Google Maps</option>
          <option>Facebook</option>
          <option>Instagram</option>
          <option>Referral</option>
          <option>Healthcare provider</option>
          <option>Other</option>
        </select>
      </div>
      <div className="flex items-start gap-3">
        <input type="checkbox" id="privacy" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-1" required />
        <label htmlFor="privacy" style={{ color: "#4A5568", fontSize: 13, lineHeight: 1.6 }}>
          I consent to being contacted by Advanced Home Health Care Services about my care inquiry. Your privacy is protected and your information will never be shared. <a href="#" style={{ color: "#C49B3C" }}>Privacy Policy</a>
        </label>
      </div>
      <button
        type="submit"
        className="w-full py-3.5 rounded-lg text-white transition-all hover:opacity-90 active:scale-95"
        style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}
      >
        Send My Inquiry
      </button>
      <p className="text-center" style={{ color: "#718096", fontSize: 13 }}>
        No commitment · Free assessment available · Response within 2-4 hours
      </p>
    </form>
  );
}
