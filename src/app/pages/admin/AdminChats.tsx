import { useState } from "react";
import { MessageSquare, Mic } from "lucide-react";
import { MOCK_CHAT_SESSIONS, ChatSession } from "../../data/mockData";

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  "New": { bg: "#DBEAFE", text: "#1D4ED8" },
  "Contacted": { bg: "#FEF3C7", text: "#B45309" },
  "Converted": { bg: "#D1FAE5", text: "#065F46" },
  "Not Qualified": { bg: "#F3F4F6", text: "#6B7280" },
};

export function AdminChats() {
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(MOCK_CHAT_SESSIONS[0]);

  const totalSessions = MOCK_CHAT_SESSIONS.length;
  const sessionsWithLeads = MOCK_CHAT_SESSIONS.filter(s => s.hasLead).length;
  const convRate = ((sessionsWithLeads / totalSessions) * 100).toFixed(0);
  const avgMessages = (MOCK_CHAT_SESSIONS.reduce((acc, s) => acc + s.messages.length, 0) / totalSessions).toFixed(1);

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Sessions", value: totalSessions },
          { label: "Sessions With Leads", value: sessionsWithLeads },
          { label: "Conversion from Chat", value: `${convRate}%` },
          { label: "Avg Messages/Session", value: avgMessages },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl p-4 shadow-sm border" style={{ borderColor: "#E8E4DC" }}>
            <p style={{ color: "#718096", fontSize: 13 }}>{stat.label}</p>
            <p style={{ color: "#1A1A2E", fontWeight: 700, fontSize: 24, marginTop: 3 }}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-4 h-[600px]">
        {/* Session List */}
        <div className="w-80 flex-shrink-0 bg-white rounded-xl border shadow-sm overflow-hidden flex flex-col" style={{ borderColor: "#E8E4DC" }}>
          <div className="px-4 py-3 border-b" style={{ borderColor: "#E8E4DC" }}>
            <h3 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 15 }}>Chat Sessions</h3>
          </div>
          <div className="flex-1 overflow-y-auto">
            {MOCK_CHAT_SESSIONS.map(session => (
              <button
                key={session.id}
                onClick={() => setSelectedSession(session)}
                className="w-full text-left px-4 py-3 border-b hover:bg-[#F9F7F4] transition-colors"
                style={{
                  borderColor: "#F3F4F6",
                  background: selectedSession?.id === session.id ? "#F5EDD6" : "transparent"
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span style={{ color: "#718096", fontSize: 11 }}>
                    {new Date(session.date).toLocaleDateString()} {new Date(session.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                  <div className="flex gap-1">
                    {session.hasLead && <span className="px-1.5 py-0.5 rounded-full text-white" style={{ background: "#2D7D4F", fontSize: 10 }}>Lead</span>}
                    <span className="px-1.5 py-0.5 rounded-full" style={{ background: "#F3F4F6", color: "#718096", fontSize: 10 }}>{session.status}</span>
                  </div>
                </div>
                <p className="truncate" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>{session.firstMessage}</p>
                <p style={{ color: "#718096", fontSize: 12, marginTop: 1 }}>{session.messages.length} messages</p>
              </button>
            ))}
          </div>
        </div>

        {/* Conversation View */}
        <div className="flex-1 bg-white rounded-xl border shadow-sm overflow-hidden flex flex-col" style={{ borderColor: "#E8E4DC" }}>
          {selectedSession ? (
            <>
              <div className="px-5 py-4 border-b flex items-center justify-between" style={{ borderColor: "#E8E4DC" }}>
                <div className="flex items-center gap-2">
                  <MessageSquare size={18} style={{ color: "#C49B3C" }} />
                  <span style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 15 }}>
                    Session {selectedSession.id} — {new Date(selectedSession.date).toLocaleDateString()}
                  </span>
                </div>
                {selectedSession.hasLead && <span className="px-2 py-1 rounded-full text-white text-xs" style={{ background: "#2D7D4F" }}>Lead Captured</span>}
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ background: "#F9F7F4" }}>
                {selectedSession.messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.role === "assistant" && (
                      <div className="flex items-start gap-2 max-w-[75%]">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#1C2E4A" }}>
                          <span style={{ color: "#C49B3C", fontSize: 9, fontWeight: 700 }}>AI</span>
                        </div>
                        <div>
                          <div className="px-4 py-3 rounded-2xl rounded-tl-sm border" style={{ background: "#fff", borderColor: "#E8E4DC", fontSize: 13, color: "#4A5568", lineHeight: 1.5, whiteSpace: "pre-line" }}>
                            {msg.content}
                          </div>
                          <span style={{ color: "#718096", fontSize: 11, marginLeft: 4 }}>{msg.timestamp}</span>
                        </div>
                      </div>
                    )}
                    {msg.role === "user" && (
                      <div className="max-w-[75%]">
                        <div className="flex items-center justify-end gap-2 mb-1">
                          {msg.isVoice && <Mic size={12} style={{ color: "#718096" }} />}
                        </div>
                        <div className="px-4 py-3 rounded-2xl rounded-tr-sm" style={{ background: "#2563EB", color: "#fff", fontSize: 13, lineHeight: 1.5 }}>
                          {msg.content}
                        </div>
                        <div className="text-right mt-1"><span style={{ color: "#718096", fontSize: 11 }}>{msg.timestamp}</span></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Lead Summary */}
              {selectedSession.hasLead && selectedSession.lead && (
                <div className="px-5 py-4 border-t" style={{ borderColor: "#E8E4DC" }}>
                  <p style={{ color: "#718096", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Lead Captured</p>
                  <div className="flex flex-wrap gap-3 items-center">
                    <span style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 14 }}>{selectedSession.lead.name}</span>
                    <span style={{ color: "#4A5568", fontSize: 13 }}>{selectedSession.lead.phone}</span>
                    <span style={{ color: "#4A5568", fontSize: 13 }}>{selectedSession.lead.service}</span>
                    <span style={{ color: "#4A5568", fontSize: 13 }}>{selectedSession.lead.city}</span>
                    {selectedSession.lead.status && (
                      <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: STATUS_COLORS[selectedSession.lead.status]?.bg, color: STATUS_COLORS[selectedSession.lead.status]?.text }}>
                        {selectedSession.lead.status}
                      </span>
                    )}
                    <button style={{ color: "#C49B3C", fontSize: 13, fontWeight: 500 }}>View Full Lead →</button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p style={{ color: "#718096", fontSize: 15 }}>Select a conversation to view</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
