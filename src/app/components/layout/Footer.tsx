import { Link } from "react-router";
import { Phone, Mail, Facebook, Instagram, Plus } from "lucide-react";
import { PHONE, PHONE_TEL, EMAIL, SERVICES, CITIES, LANGUAGES } from "../../data/constants";

export function Footer() {
  return (
    <footer style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Top CTA Strip */}
      <div className="py-16 text-center px-6" style={{ background: "#1C2E4A" }}>
        <p className="mb-6" style={{ color: "#fff", fontSize: 22, fontWeight: 600, maxWidth: 600, margin: "0 auto 24px" }}>
          Ready to talk? We're available 24 hours a day, 7 days a week, 365 days a year.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-white border-2 border-white hover:bg-white transition-colors"
            style={{ fontWeight: 600, fontSize: 15, color: "#fff" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#1C2E4A"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
          >
            <Phone size={18} /> Call {PHONE}
          </a>
          <Link
            to="/booking"
            className="px-6 py-3 rounded-lg text-white"
            style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}
          >
            Get Free Assessment
          </Link>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="py-16 px-6" style={{ background: "#162438" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#C49B3C" }}>
                <Plus size={18} color="#fff" strokeWidth={3} />
              </div>
              <span style={{ color: "#fff", fontWeight: 600, fontSize: 16 }}>1A Advanced Home Health</span>
            </div>
            <p className="mb-5" style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7 }}>
              Compassionate home care across BC's Lower Mainland.
            </p>
            <div className="space-y-2 mb-5">
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:opacity-80" style={{ color: "#fff", fontSize: 14 }}>
                <Phone size={15} style={{ color: "#C49B3C" }} /> {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:opacity-80" style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                <Mail size={15} style={{ color: "#C49B3C" }} /> {EMAIL}
              </a>
            </div>
            <div className="flex gap-3 mb-5">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity" style={{ background: "rgba(255,255,255,0.1)" }}>
                <Facebook size={18} color="#fff" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity" style={{ background: "rgba(255,255,255,0.1)" }}>
                <Instagram size={18} color="#fff" />
              </a>
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 8 }}>We speak your language:</p>
              <select className="w-full px-3 py-2 rounded-lg text-sm" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
                {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <p className="mb-4" style={{ color: "#C49B3C", fontSize: 13, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>Our Services</p>
            <ul className="space-y-2">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`} className="hover:opacity-80 transition-opacity" style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <p className="mb-4" style={{ color: "#C49B3C", fontSize: 13, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>Service Areas</p>
            <ul className="space-y-2">
              {CITIES.map(city => (
                <li key={city}>
                  <Link to={`/home-care-${city.toLowerCase().replace(" ", "-")}`} className="hover:opacity-80 transition-opacity" style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <p className="mb-4" style={{ color: "#C49B3C", fontSize: 13, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>Company</p>
            <ul className="space-y-2">
              {[
                { label: "About Us", to: "/about-us" },
                { label: "Care Process", to: "/care-process" },
                { label: "Why Choose Us", to: "/why-choose-us" },
                { label: "Referral Partners", to: "/referral-partners" },
                { label: "Contact Us", to: "/contact" },
                { label: "Book Assessment", to: "/booking" },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:opacity-80 transition-opacity" style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 px-6" style={{ background: "#0F1E30" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
            © 2025 1A Advanced Home Health Care Services. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }} className="hover:text-white">Privacy Policy</a>
            <a href="#" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }} className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
