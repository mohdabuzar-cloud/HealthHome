import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { CITIES, PHONE } from "../../data/constants";

export function UrgentCallbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "", careNotes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: 8,
    padding: "12px 16px",
    color: "#fff",
    fontSize: 14,
    width: "100%",
    outline: "none",
    fontFamily: "Inter, sans-serif"
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-8">
        <CheckCircle size={48} color="#2D7D4F" className="mb-3" />
        <h3 style={{ color: "#fff", fontWeight: 600, fontSize: 20 }}>Thank you — we will call you shortly.</h3>
        <p className="mt-2" style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>We will call from {PHONE}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Your full name"
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="(604) 000-0000"
            required
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            style={inputStyle}
          />
        </div>
      </div>
      <select
        required
        value={form.city}
        onChange={e => setForm({ ...form, city: e.target.value })}
        style={{ ...inputStyle, cursor: "pointer" }}
      >
        <option value="">Select city...</option>
        {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
        <option value="Other">Other</option>
      </select>
      <textarea
        placeholder="e.g., Mum needs help after hip surgery..."
        rows={2}
        value={form.careNotes}
        onChange={e => setForm({ ...form, careNotes: e.target.value })}
        style={{ ...inputStyle, resize: "vertical" }}
      />
      <button
        type="submit"
        className="w-full py-3.5 rounded-lg text-white transition-all hover:opacity-90 active:scale-95"
        style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}
      >
        Request Callback Now
      </button>
      <p className="text-center" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>
        We aim to call back within 1 hour during business hours.
      </p>
    </form>
  );
}
