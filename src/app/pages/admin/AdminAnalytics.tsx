import { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { MOCK_ANALYTICS } from "../../data/mockData";

const DATE_RANGES = ["Today", "This week", "This month", "Last month"];

export function AdminAnalytics() {
  const [dateRange, setDateRange] = useState("This week");

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Date Range */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {DATE_RANGES.map(r => (
          <button key={r} onClick={() => setDateRange(r)}
            className="px-4 py-2 rounded-lg text-sm transition-colors"
            style={{
              background: dateRange === r ? "#1C2E4A" : "#fff",
              color: dateRange === r ? "#fff" : "#4A5568",
              border: `1px solid ${dateRange === r ? "#1C2E4A" : "#E8E4DC"}`,
              fontWeight: dateRange === r ? 600 : 400
            }}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Leads Over Time */}
        <div className="bg-white rounded-xl p-5 shadow-sm border" style={{ borderColor: "#E8E4DC" }}>
          <h3 className="mb-4" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 16 }}>Leads Over Time</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={MOCK_ANALYTICS.leadsOverTime}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#718096" }} />
              <YAxis tick={{ fontSize: 12, fill: "#718096" }} />
              <Tooltip contentStyle={{ fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="chat" stroke="#1C2E4A" strokeWidth={2} dot={{ r: 4 }} name="Chat Leads" />
              <Line type="monotone" dataKey="form" stroke="#C49B3C" strokeWidth={2} dot={{ r: 4 }} name="Form Leads" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Leads by Source */}
        <div className="bg-white rounded-xl p-5 shadow-sm border" style={{ borderColor: "#E8E4DC" }}>
          <h3 className="mb-4" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 16 }}>Leads by Source</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={MOCK_ANALYTICS.leadsBySource} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} innerRadius={50} paddingAngle={3}>
                {MOCK_ANALYTICS.leadsBySource.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ fontSize: 12 }} formatter={(v, n) => [`${v} leads`, n]} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* By Service */}
        <div className="bg-white rounded-xl p-5 shadow-sm border" style={{ borderColor: "#E8E4DC" }}>
          <h3 className="mb-4" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 16 }}>Leads by Service</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={MOCK_ANALYTICS.leadsByService} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis type="number" tick={{ fontSize: 11 }} />
              <YAxis dataKey="service" type="category" tick={{ fontSize: 11, fill: "#718096" }} width={90} />
              <Tooltip contentStyle={{ fontSize: 12 }} />
              <Bar dataKey="count" fill="#C49B3C" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* By City */}
        <div className="bg-white rounded-xl p-5 shadow-sm border" style={{ borderColor: "#E8E4DC" }}>
          <h3 className="mb-4" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 16 }}>Leads by City</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={MOCK_ANALYTICS.leadsByCity} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis type="number" tick={{ fontSize: 11 }} />
              <YAxis dataKey="city" type="category" tick={{ fontSize: 11, fill: "#718096" }} width={90} />
              <Tooltip contentStyle={{ fontSize: 12 }} />
              <Bar dataKey="count" fill="#1C2E4A" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Status Breakdown */}
        <div className="bg-white rounded-xl p-5 shadow-sm border" style={{ borderColor: "#E8E4DC" }}>
          <h3 className="mb-4" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 16 }}>Lead Status</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={MOCK_ANALYTICS.statusBreakdown} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} paddingAngle={3}>
                {MOCK_ANALYTICS.statusBreakdown.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tracking Events */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden mb-6" style={{ borderColor: "#E8E4DC" }}>
        <div className="px-5 py-4 border-b" style={{ borderColor: "#E8E4DC" }}>
          <h3 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 16 }}>Tracking Events Log</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr style={{ background: "#F9F7F4", borderBottom: "1px solid #E8E4DC" }}>
              {["Event Name", "Count", "Last Triggered", "Trend"].map(h => (
                <th key={h} className="px-5 py-3 text-left" style={{ color: "#718096", fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOCK_ANALYTICS.trackingEvents.map((event, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #F3F4F6" }}>
                <td className="px-5 py-3" style={{ color: "#1A1A2E", fontFamily: "monospace", fontSize: 13 }}>{event.event}</td>
                <td className="px-5 py-3" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 14 }}>{event.count.toLocaleString()}</td>
                <td className="px-5 py-3" style={{ color: "#718096", fontSize: 13 }}>{event.lastTriggered}</td>
                <td className="px-5 py-3">
                  {event.trend === "up"
                    ? <TrendingUp size={18} color="#2D7D4F" />
                    : <TrendingDown size={18} color="#C53030" />
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* UTM Performance */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden" style={{ borderColor: "#E8E4DC" }}>
        <div className="px-5 py-4 border-b" style={{ borderColor: "#E8E4DC" }}>
          <h3 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 16 }}>Traffic Sources</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr style={{ background: "#F9F7F4", borderBottom: "1px solid #E8E4DC" }}>
              {["Source", "Medium", "Campaign", "Sessions", "Leads", "Conversion Rate"].map(h => (
                <th key={h} className="px-5 py-3 text-left" style={{ color: "#718096", fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOCK_ANALYTICS.utmPerformance.map((row, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #F3F4F6" }}>
                <td className="px-5 py-3" style={{ color: "#1A1A2E", fontWeight: 500, fontSize: 13 }}>{row.source}</td>
                <td className="px-5 py-3" style={{ color: "#4A5568", fontSize: 13 }}>{row.medium}</td>
                <td className="px-5 py-3" style={{ color: "#4A5568", fontSize: 13 }}>{row.campaign}</td>
                <td className="px-5 py-3" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 13 }}>{row.sessions}</td>
                <td className="px-5 py-3" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 13 }}>{row.leads}</td>
                <td className="px-5 py-3">
                  <span className="px-2 py-1 rounded-full text-xs font-medium" style={{ background: "#D1FAE5", color: "#065F46" }}>{row.rate}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
