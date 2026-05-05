import { Link } from "react-router";
import { Phone, ClipboardList } from "lucide-react";
import { PHONE_TEL } from "../../data/constants";

export function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-60 md:hidden flex" style={{ height: 56 }}>
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex-1 flex items-center justify-center gap-2 text-white"
        style={{ background: "#1C2E4A", fontWeight: 600, fontSize: 15, borderRight: "1px solid rgba(255,255,255,0.2)" }}
      >
        <Phone size={18} /> Call Now
      </a>
      <Link
        to="/booking"
        className="flex-1 flex items-center justify-center gap-2 text-white"
        style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}
      >
        <ClipboardList size={18} /> Free Assessment
      </Link>
    </div>
  );
}
