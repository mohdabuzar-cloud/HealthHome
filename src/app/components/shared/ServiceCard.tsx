import { Link } from "react-router";
import { Heart, Home, Activity, Users, Building2, UtensilsCrossed, Brain, RefreshCw, Flower2, Stethoscope, Moon, Shield, ArrowRight } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Heart, Home, Activity, Users, Building2, UtensilsCrossed, Brain, RefreshCw, Flower2, Stethoscope, Moon, Shield
};

interface ServiceCardProps {
  id: string;
  icon: string;
  name: string;
  description: string;
  isNew?: boolean;
  expanded?: boolean;
  checklist?: string[];
}

export function ServiceCard({ id, icon, name, description, isNew, expanded, checklist }: ServiceCardProps) {
  const Icon = ICON_MAP[icon] || Heart;
  return (
    <div
      className="p-6 rounded-xl border bg-white transition-all duration-200 hover:shadow-md group"
      style={{ borderColor: "#E8E4DC", fontFamily: "Inter, sans-serif" }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center" style={{ background: "#F5EDD6" }}>
          <Icon size={32} color="#C49B3C" />
        </div>
        {isNew && (
          <span className="px-2.5 py-1 rounded-full text-white" style={{ background: "#C49B3C", fontSize: 12, fontWeight: 500 }}>New</span>
        )}
      </div>
      <h4 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 18, marginBottom: 8 }}>{name}</h4>
      <p style={{ color: "#4A5568", fontSize: 14, lineHeight: 1.6 }}>{description}</p>

      {expanded && checklist && (
        <ul className="mt-4 space-y-1.5">
          {checklist.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span style={{ color: "#C49B3C", marginTop: 2 }}>✓</span>
              <span style={{ color: "#4A5568", fontSize: 14 }}>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        to={`/services/${id}`}
        className="inline-flex items-center gap-1.5 mt-4 hover:gap-2.5 transition-all duration-200"
        style={{ color: "#C49B3C", fontSize: 14, fontWeight: 500 }}
      >
        {expanded ? "Full details & FAQ" : "Learn more"} <ArrowRight size={14} />
      </Link>
    </div>
  );
}
