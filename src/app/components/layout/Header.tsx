import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Menu, X, ChevronDown, Plus } from "lucide-react";
import { PHONE, PHONE_TEL, EMAIL, SERVICES, CITIES } from "../../data/constants";

interface HeaderProps {
  onOpenChat?: () => void;
}

export function Header({ onOpenChat }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCitiesOpen, setMobileCitiesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const citiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isAdmin = location.pathname.startsWith("/admin");
  if (isAdmin) return null;

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#C49B3C" }}>
            <Plus size={18} color="#fff" strokeWidth={3} />
          </div>
          <span className="hidden sm:block" style={{ color: "#1C2E4A", fontWeight: 600, fontSize: 16 }}>
            1A Advanced Home Health
          </span>
          <span className="sm:hidden" style={{ color: "#1C2E4A", fontWeight: 600, fontSize: 15 }}>
            1A Health
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link to="/" className="nav-link" style={{ color: "#1A1A2E", fontSize: 15, fontWeight: 500 }}>Home</Link>

          {/* Services Dropdown */}
          <div ref={servicesRef} className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="flex items-center gap-1 nav-link" style={{ color: "#1A1A2E", fontSize: 15, fontWeight: 500 }}>
              Services <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-xl shadow-lg border p-4 grid grid-cols-2 gap-1"
                  style={{ borderColor: "#E8E4DC" }}
                >
                  {SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.id}`}
                      className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#F9F7F4] transition-colors"
                      style={{ color: "#1A1A2E", fontSize: 14 }}
                    >
                      <span>{s.name}</span>
                      {s.isNew && (
                        <span className="ml-2 px-2 py-0.5 rounded-full text-white" style={{ background: "#C49B3C", fontSize: 11 }}>New</span>
                      )}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cities Dropdown */}
          <div ref={citiesRef} className="relative" onMouseEnter={() => setCitiesOpen(true)} onMouseLeave={() => setCitiesOpen(false)}>
            <button className="flex items-center gap-1 nav-link" style={{ color: "#1A1A2E", fontSize: 15, fontWeight: 500 }}>
              Cities <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {citiesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-lg border p-4 grid grid-cols-2 gap-1"
                  style={{ borderColor: "#E8E4DC" }}
                >
                  {CITIES.map((city) => (
                    <Link
                      key={city}
                      to={`/home-care-${city.toLowerCase().replace(" ", "-")}`}
                      className="px-3 py-2 rounded-lg hover:bg-[#F9F7F4] transition-colors"
                      style={{ color: "#1A1A2E", fontSize: 14 }}
                    >
                      {city}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/about-us" className="nav-link" style={{ color: "#1A1A2E", fontSize: 15, fontWeight: 500 }}>About</Link>
          <Link to="/referral-partners" className="nav-link" style={{ color: "#1A1A2E", fontSize: 15, fontWeight: 500 }}>Referrals</Link>
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 hover:text-[#C49B3C] transition-colors"
            style={{ color: "#1C2E4A", fontWeight: 600, fontSize: 15 }}
            aria-label={`Email ${EMAIL}`}
            title={EMAIL}
          >
            <Mail size={16} />
            Email
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2"
            style={{ color: "#1C2E4A", fontWeight: 600, fontSize: 15 }}
          >
            <Phone size={16} />
            {PHONE}
          </a>
          <Link
            to="/booking"
            className="px-5 py-2.5 rounded-lg text-white transition-all duration-150 hover:opacity-90 active:scale-95"
            style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}
          >
            Free Assessment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} style={{ color: "#1C2E4A" }} /> : <Menu size={24} style={{ color: "#1C2E4A" }} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="flex justify-between items-center p-5 border-b">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#C49B3C" }}>
                  <Plus size={16} color="#fff" strokeWidth={3} />
                </div>
                <span style={{ color: "#1C2E4A", fontWeight: 600, fontSize: 15 }}>1A Advanced Home Health</span>
              </div>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={24} style={{ color: "#1C2E4A" }} />
              </button>
            </div>

            <div className="p-5 space-y-2">
              <Link to="/" className="block py-3 px-3 rounded-lg hover:bg-[#F9F7F4]" style={{ color: "#1A1A2E", fontSize: 17 }}>Home</Link>

              {/* Services Accordion */}
              <div>
                <button
                  className="w-full flex justify-between items-center py-3 px-3 rounded-lg hover:bg-[#F9F7F4]"
                  style={{ color: "#1A1A2E", fontSize: 17 }}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4"
                    >
                      {SERVICES.map((s) => (
                        <Link key={s.id} to={`/services/${s.id}`} className="block py-2 px-3 hover:text-[#C49B3C]" style={{ color: "#4A5568", fontSize: 15 }}>
                          {s.name}
                          {s.isNew && <span className="ml-2 px-1.5 py-0.5 rounded-full text-white text-xs" style={{ background: "#C49B3C" }}>New</span>}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Cities Accordion */}
              <div>
                <button
                  className="w-full flex justify-between items-center py-3 px-3 rounded-lg hover:bg-[#F9F7F4]"
                  style={{ color: "#1A1A2E", fontSize: 17 }}
                  onClick={() => setMobileCitiesOpen(!mobileCitiesOpen)}
                >
                  Cities <ChevronDown size={18} className={`transition-transform ${mobileCitiesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileCitiesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 grid grid-cols-2"
                    >
                      {CITIES.map((city) => (
                        <Link key={city} to={`/home-care-${city.toLowerCase().replace(" ", "-")}`} className="block py-2 px-3 hover:text-[#C49B3C]" style={{ color: "#4A5568", fontSize: 15 }}>
                          {city}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/about-us" className="block py-3 px-3 rounded-lg hover:bg-[#F9F7F4]" style={{ color: "#1A1A2E", fontSize: 17 }}>About</Link>
              <Link to="/referral-partners" className="block py-3 px-3 rounded-lg hover:bg-[#F9F7F4]" style={{ color: "#1A1A2E", fontSize: 17 }}>Referrals</Link>

              <div className="pt-6 space-y-3 border-t mt-4">
                <a href={`tel:${PHONE_TEL}`} className="block text-center py-3 rounded-lg" style={{ background: "#1C2E4A", color: "#fff", fontWeight: 600, fontSize: 18 }}>
                  📞 {PHONE}
                </a>
                <a href={`mailto:${EMAIL}`} className="block text-center py-3 rounded-lg border-2" style={{ borderColor: "#1C2E4A", color: "#1C2E4A", fontWeight: 600, fontSize: 15 }}>
                  Email Us
                </a>
                <Link to="/booking" className="block text-center py-3 rounded-lg text-white" style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}>
                  Get Free Assessment
                </Link>
                <a href="https://wa.me/12366160007" target="_blank" rel="noreferrer" className="block text-center py-3 rounded-lg border-2" style={{ borderColor: "#25D366", color: "#25D366", fontWeight: 500, fontSize: 15 }}>
                  WhatsApp Us
                </a>
                <button
                  onClick={() => { setMobileOpen(false); onOpenChat && onOpenChat(); }}
                  className="w-full text-center py-3 rounded-lg text-white"
                  style={{ background: "#2563EB", fontWeight: 500, fontSize: 15 }}
                >
                  Try AI Assistant
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
