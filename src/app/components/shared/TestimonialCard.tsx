import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  city: string;
  date: string;
}

export function TestimonialCard({ quote, name, city, date }: TestimonialCardProps) {
  return (
    <div
      className="p-6 rounded-xl border bg-white transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
      style={{ borderColor: "#E8E4DC", fontFamily: "Inter, sans-serif" }}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="#C49B3C" color="#C49B3C" />
        ))}
      </div>
      <p className="mb-4" style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7 }}>"{quote}"</p>
      <div className="flex items-center justify-between">
        <div>
          <p style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 14 }}>— {name}</p>
          <p style={{ color: "#718096", fontSize: 13 }}>{city}</p>
        </div>
        <div>
          <p style={{ color: "#718096", fontSize: 12 }}>{date}</p>
          <div className="flex items-center gap-1 mt-1">
            <div className="w-4 h-4 rounded-full bg-[#4285F4] flex items-center justify-center">
              <span style={{ color: "#fff", fontSize: 9, fontWeight: 700 }}>G</span>
            </div>
            <span style={{ color: "#718096", fontSize: 11 }}>Google Review</span>
          </div>
        </div>
      </div>
    </div>
  );
}
