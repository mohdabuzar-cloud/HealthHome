import { Link } from "react-router";
import { Users, TrendingUp, MessageSquare, ClipboardList } from "lucide-react";
import { MOCK_LEADS } from "../../data/mockData";

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  "New": { bg: "#DBEAFE", text: "#1D4ED8" },
  "Contacted": { bg: "#FEF3C7", text: "#B45309" },
  "Converted": { bg: "#D1FAE5", text: "#065F46" },
  "Not Qualified": { bg: "#F3F4F6", text: "#6B7280" },
};

const SOURCE_COLORS: Record<string, { bg: string; text: string }> = {
  "Chat": { bg: "#EDE9FE", text: "#7C3AED" },
  "Contact Form": { bg: "#F5EDD6", text: "#A8832E" },
  "Assessment Form": { bg: "#F5EDD6", text: "#A8832E" },
  "Referral": { bg: "#E6EAF0", text: "#1C2E4A" },
};

export function AdminDashboard() {
  const totalLeads = MOCK_LEADS.length;
  const todayLeads = MOCK_LEADS.filter(l => l.date === "2025-05-05").length;
  const chatLeads = MOCK_LEADS.filter(l => l.source === "Chat").length;
  const formLeads = MOCK_LEADS.filter(l => l.source !== "Chat").length;
  const converted = MOCK_LEADS.filter(l => l.status === "Converted").length;
  const conversionRate = ((converted / totalLeads) * 100).toFixed(1);

  const topCity = (() => {
    const counts: Record<string, number> = {};
    MOCK_LEADS.forEach(l => { counts[l.city] = (counts[l.city] || 0) + 1; });
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "Surrey";
  })();

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { icon: <Users size={20} color="#C49B3C" />, iconBg: "#F5EDD6", num: totalLeads, label: "Total Leads", sub: "+3 this week" },
          { icon: <TrendingUp size={20} color="#2D7D4F" />, iconBg: "#D1FAE5", num: todayLeads, label: "Leads Today", sub: "Updated just now" },
          { icon: <MessageSquare size={20} color="#7C3AED" />, iconBg: "#EDE9FE", num: chatLeads, label: "Chat Leads", sub: "AI conversations" },
          { icon: <ClipboardList size={20} color="#D97706" />, iconBg: "#FEF3C7", num: formLeads, label: "Form Submissions", sub: "Contact + booking" },
        ].map((card, i) => (
          <div key={i} className="bg-white rounded-xl p-5 shadow-sm border" style={{ borderColor: "#E8E4DC" }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: card.iconBg }}>
              {card.icon}
            </div>
            <p style={{ color: "#1A1A2E", fontWeight: 700, fontSize: 32 }}>{card.num}</p>
            <p style={{ color: "#718096", fontSize: 14 }}>{card.label}</p>
            <p className="mt-1" style={{ color: "#2D7D4F", fontSize: 12 }}>{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          { label: "Conversion Rate", value: `${conversionRate}%`, sub: "Leads → Contacted/Converted" },
          { label: "Avg Leads/Day", value: "3.2", sub: "This week" },
          { label: "Top City", value: topCity, sub: "Most leads from" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl p-5 shadow-sm border" style={{ borderColor: "#E8E4DC" }}>
            <p style={{ color: "#718096", fontSize: 13 }}>{stat.label}</p>
            <p style={{ color: "#1A1A2E", fontWeight: 700, fontSize: 24, marginTop: 4 }}>{stat.value}</p>
            <p style={{ color: "#718096", fontSize: 12, marginTop: 2 }}>{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Recent Leads Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden" style={{ borderColor: "#E8E4DC" }}>
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "#E8E4DC" }}>
          <h3 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 18 }}>Recent Leads</h3>
          <Link to="/admin/leads" style={{ color: "#C49B3C", fontSize: 14, fontWeight: 500 }}>View All →</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ background: "#F9F7F4", borderBottom: "1px solid #E8E4DC" }}>
                {["Name", "Phone", "Service", "City", "Source", "Date", "Status", "Action"].map(h => (
                  <th key={h} className="px-4 py-3 text-left" style={{ color: "#718096", fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MOCK_LEADS.slice(0, 10).map((lead, i) => (
                <tr key={lead.id} style={{ borderBottom: "1px solid #F3F4F6" }}>
                  <td className="px-4 py-3" style={{ color: "#1A1A2E", fontWeight: 500, fontSize: 14 }}>{lead.name}</td>
                  <td className="px-4 py-3" style={{ color: "#4A5568", fontSize: 13 }}>{lead.phone}</td>
                  <td className="px-4 py-3" style={{ color: "#4A5568", fontSize: 13 }}>{lead.service.split(" ").slice(0, 2).join(" ")}</td>
                  <td className="px-4 py-3" style={{ color: "#4A5568", fontSize: 13 }}>{lead.city}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: SOURCE_COLORS[lead.source]?.bg, color: SOURCE_COLORS[lead.source]?.text }}>
                      {lead.source}
                    </span>
                  </td>
                  <td className="px-4 py-3" style={{ color: "#718096", fontSize: 13 }}>{lead.date}</td>
                  <td className="px-4 py-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: STATUS_COLORS[lead.status]?.bg, color: STATUS_COLORS[lead.status]?.text }}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-xs hover:text-[#C49B3C] transition-colors" style={{ color: "#718096" }}>Mark Contacted</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
