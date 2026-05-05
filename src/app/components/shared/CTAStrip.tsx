import { Link } from "react-router";
import { Phone } from "lucide-react";
import { PHONE, PHONE_TEL } from "../../data/constants";

interface CTAStripProps {
  variant?: "light" | "dark";
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryTo?: string;
}

export function CTAStrip({
  variant = "light",
  title = "Compassionate Care Is Just One Call Away.",
  body = "Reach out today for a free, no-commitment assessment. A real care coordinator will walk you through everything.",
  primaryLabel = "Book a Free Assessment",
  primaryTo = "/booking",
}: CTAStripProps) {
  const isDark = variant === "dark";
  return (
    <section
      className="py-16 px-6 text-center"
      style={{ background: isDark ? "#1C2E4A" : "#F5EDD6", fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 style={{ color: isDark ? "#fff" : "#1A1A2E", fontWeight: 600, fontSize: 36 }}>{title}</h2>
        <p className="mt-3 mb-8 max-w-xl mx-auto" style={{ color: isDark ? "rgba(255,255,255,0.8)" : "#4A5568", fontSize: 18, lineHeight: 1.75 }}>
          {body}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to={primaryTo}
            className="px-7 py-3.5 rounded-lg text-white transition-all duration-150 hover:opacity-90 active:scale-95"
            style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}
          >
            {primaryLabel}
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg text-white"
            style={{ background: "#1C2E4A", fontWeight: 600, fontSize: 15 }}
          >
            <Phone size={17} /> Call {PHONE}
          </a>
        </div>
        <p className="mt-4" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "#718096", fontSize: 13 }}>
          Available 24 hours · 7 days a week · 14 languages spoken
        </p>
      </div>
    </section>
  );
}
