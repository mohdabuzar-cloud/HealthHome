import { useState } from "react";
import { Search, X, ChevronUp, ChevronDown } from "lucide-react";
import { MOCK_LEADS, Lead } from "../../data/mockData";
import { CITIES, SERVICES } from "../../data/constants";

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

export function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>(MOCK_LEADS);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterSource, setFilterSource] = useState("All");
  const [filterCity, setFilterCity] = useState("All");
  const [filterService, setFilterService] = useState("All");
  const [sortField, setSortField] = useState<keyof Lead>("date");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const PAGE_SIZE = 20;

  const filtered = leads.filter(l => {
    const matchSearch = !search || l.name.toLowerCase().includes(search.toLowerCase()) || l.phone.includes(search);
    const matchStatus = filterStatus === "All" || l.status === filterStatus;
    const matchSource = filterSource === "All" || l.source === filterSource;
    const matchCity = filterCity === "All" || l.city === filterCity;
    const matchService = filterService === "All" || l.service.includes(filterService);
    return matchSearch && matchStatus && matchSource && matchCity && matchService;
  }).sort((a, b) => {
    const av = a[sortField] || "";
    const bv = b[sortField] || "";
    return sortDir === "asc" ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
  });

  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const toggleSort = (field: keyof Lead) => {
    if (sortField === field) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortField(field); setSortDir("asc"); }
  };

  const SortIcon = ({ field }: { field: keyof Lead }) => (
    <span className="ml-1">
      {sortField === field ? (sortDir === "asc" ? <ChevronUp size={12} /> : <ChevronDown size={12} />) : <ChevronDown size={12} style={{ opacity: 0.3 }} />}
    </span>
  );

  const updateStatus = (id: string, status: Lead["status"]) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
    if (selectedLead?.id === id) setSelectedLead(prev => prev ? { ...prev, status } : null);
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Filters */}
      <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border flex flex-wrap gap-3 items-center" style={{ borderColor: "#E8E4DC" }}>
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#718096" }} />
          <input
            type="text"
            placeholder="Search by name or phone..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            className="pl-9 pr-3 py-2 rounded-lg border outline-none text-sm"
            style={{ borderColor: "#E8E4DC", width: 200, fontSize: 13 }}
          />
        </div>
        <select className="px-3 py-2 rounded-lg border text-sm outline-none" style={{ borderColor: "#E8E4DC", fontSize: 13 }} value={filterStatus} onChange={e => { setFilterStatus(e.target.value); setPage(1); }}>
          {["All", "New", "Contacted", "Converted", "Not Qualified"].map(s => <option key={s}>{s}</option>)}
        </select>
        <select className="px-3 py-2 rounded-lg border text-sm outline-none" style={{ borderColor: "#E8E4DC", fontSize: 13 }} value={filterSource} onChange={e => { setFilterSource(e.target.value); setPage(1); }}>
          {["All", "Chat", "Contact Form", "Assessment Form", "Referral"].map(s => <option key={s}>{s}</option>)}
        </select>
        <select className="px-3 py-2 rounded-lg border text-sm outline-none" style={{ borderColor: "#E8E4DC", fontSize: 13 }} value={filterCity} onChange={e => { setFilterCity(e.target.value); setPage(1); }}>
          <option>All</option>
          {CITIES.map(c => <option key={c}>{c}</option>)}
        </select>
        <select className="px-3 py-2 rounded-lg border text-sm outline-none" style={{ borderColor: "#E8E4DC", fontSize: 13 }} value={filterService} onChange={e => { setFilterService(e.target.value); setPage(1); }}>
          <option>All</option>
          {SERVICES.map(s => <option key={s.id} value={s.name.split(" ").slice(0, 2).join(" ")}>{s.name}</option>)}
        </select>
        {(search || filterStatus !== "All" || filterSource !== "All" || filterCity !== "All" || filterService !== "All") && (
          <button onClick={() => { setSearch(""); setFilterStatus("All"); setFilterSource("All"); setFilterCity("All"); setFilterService("All"); setPage(1); }}
            className="flex items-center gap-1 text-sm hover:text-red-600 transition-colors" style={{ color: "#718096" }}>
            <X size={14} /> Clear Filters
          </button>
        )}
        {selectedIds.length > 0 && (
          <div className="flex gap-2 ml-auto">
            <button onClick={() => setSelectedIds([])} className="px-3 py-2 text-xs rounded-lg border" style={{ borderColor: "#E8E4DC", color: "#718096" }}>Clear Selection ({selectedIds.length})</button>
            <button className="px-3 py-2 text-xs rounded-lg text-white" style={{ background: "#C49B3C" }}>Mark Contacted</button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden" style={{ borderColor: "#E8E4DC" }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ background: "#F9F7F4", borderBottom: "1px solid #E8E4DC" }}>
                <th className="px-4 py-3">
                  <input type="checkbox" onChange={e => setSelectedIds(e.target.checked ? paged.map(l => l.id) : [])} checked={selectedIds.length === paged.length && paged.length > 0} />
                </th>
                {([["Name", "name"], ["Phone", "phone"], ["Service", "service"], ["City", "city"], ["Source", "source"], ["Date", "date"], ["Status", "status"]] as [string, keyof Lead][]).map(([label, field]) => (
                  <th key={field} className="px-4 py-3 text-left cursor-pointer hover:bg-[#F5EDD6] transition-colors" onClick={() => toggleSort(field)}
                    style={{ color: "#718096", fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em", userSelect: "none" }}>
                    <span className="flex items-center">{label}<SortIcon field={field} /></span>
                  </th>
                ))}
                <th className="px-4 py-3 text-left" style={{ color: "#718096", fontSize: 12, fontWeight: 500, textTransform: "uppercase" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paged.map(lead => (
                <tr key={lead.id} style={{ borderBottom: "1px solid #F3F4F6" }} className="hover:bg-[#F9F7F4] transition-colors">
                  <td className="px-4 py-3">
                    <input type="checkbox" checked={selectedIds.includes(lead.id)} onChange={e => setSelectedIds(prev => e.target.checked ? [...prev, lead.id] : prev.filter(id => id !== lead.id))} />
                  </td>
                  <td className="px-4 py-3">
                    <button onClick={() => setSelectedLead(lead)} style={{ color: "#1C2E4A", fontWeight: 600, fontSize: 14 }} className="hover:text-[#C49B3C] transition-colors">
                      {lead.name}
                    </button>
                  </td>
                  <td className="px-4 py-3" style={{ color: "#4A5568", fontSize: 13 }}>{lead.phone}</td>
                  <td className="px-4 py-3" style={{ color: "#4A5568", fontSize: 13 }}>{lead.service.split(" ").slice(0, 3).join(" ")}</td>
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
                    <div className="flex gap-2">
                      <button onClick={() => updateStatus(lead.id, "Contacted")} className="text-xs px-2 py-1 rounded border hover:bg-[#F5EDD6] transition-colors" style={{ borderColor: "#E8E4DC", color: "#718096" }}>
                        Contacted
                      </button>
                      <button onClick={() => updateStatus(lead.id, "Converted")} className="text-xs px-2 py-1 rounded border hover:bg-[#D1FAE5] transition-colors" style={{ borderColor: "#E8E4DC", color: "#718096" }}>
                        Converted
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-3 flex items-center justify-between border-t" style={{ borderColor: "#E8E4DC" }}>
          <p style={{ color: "#718096", fontSize: 13 }}>
            Showing {Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length} leads
          </p>
          <div className="flex items-center gap-2">
            <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="px-3 py-1.5 rounded-lg border text-sm disabled:opacity-40" style={{ borderColor: "#E8E4DC", color: "#1A1A2E" }}>← Prev</button>
            <span style={{ fontSize: 13, color: "#718096" }}>Page {page} of {totalPages}</span>
            <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)} className="px-3 py-1.5 rounded-lg border text-sm disabled:opacity-40" style={{ borderColor: "#E8E4DC", color: "#1A1A2E" }}>Next →</button>
          </div>
        </div>
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex" onClick={() => setSelectedLead(null)}>
          <div className="flex-1" />
          <div className="w-full max-w-sm bg-white shadow-2xl overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="p-6 border-b flex items-center justify-between" style={{ borderColor: "#E8E4DC" }}>
              <h3 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 18 }}>Lead Details</h3>
              <button onClick={() => setSelectedLead(null)} style={{ color: "#718096" }}><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p style={{ color: "#718096", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>Contact</p>
                <p style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 16, marginTop: 4 }}>{selectedLead.name}</p>
                <a href={`tel:${selectedLead.phone}`} style={{ color: "#C49B3C", fontSize: 15 }}>{selectedLead.phone}</a>
                {selectedLead.email && <p style={{ color: "#4A5568", fontSize: 13 }}>{selectedLead.email}</p>}
              </div>
              <div>
                <p style={{ color: "#718096", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>Care Details</p>
                <div className="mt-2 space-y-1" style={{ fontSize: 13, color: "#4A5568" }}>
                  <p><span className="font-medium">Service:</span> {selectedLead.service}</p>
                  <p><span className="font-medium">City:</span> {selectedLead.city}</p>
                  <p><span className="font-medium">Source:</span> {selectedLead.source}</p>
                  <p><span className="font-medium">Date:</span> {selectedLead.date}</p>
                </div>
              </div>
              <div>
                <p style={{ color: "#718096", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>UTM Data</p>
                <div className="mt-2 space-y-1" style={{ fontSize: 13, color: "#4A5568" }}>
                  <p><span className="font-medium">Source:</span> {selectedLead.utmSource || "direct"}</p>
                  <p><span className="font-medium">Medium:</span> {selectedLead.utmMedium || "none"}</p>
                  <p><span className="font-medium">Campaign:</span> {selectedLead.utmCampaign || "none"}</p>
                </div>
              </div>
              <div>
                <p style={{ color: "#718096", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>Status</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(["New", "Contacted", "Converted", "Not Qualified"] as Lead["status"][]).map(s => (
                    <button key={s} onClick={() => updateStatus(selectedLead.id, s)}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all"
                      style={{
                        background: selectedLead.status === s ? STATUS_COLORS[s]?.bg : "#fff",
                        color: STATUS_COLORS[s]?.text,
                        borderColor: STATUS_COLORS[s]?.bg,
                        opacity: selectedLead.status === s ? 1 : 0.7
                      }}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <a href={`tel:${selectedLead.phone.replace(/\D/g, "")}`}
                className="block text-center py-3 rounded-lg text-white mt-4" style={{ background: "#1C2E4A", fontWeight: 600, fontSize: 14 }}>
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
