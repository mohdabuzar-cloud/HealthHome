import { useNavigate } from "react-router";
import { CheckCircle } from "lucide-react";
import { ADMIN_AUTH_KEY, PHONE, EMAIL } from "../../data/constants";

const StatusBadge = ({ ok = true }: { ok?: boolean }) => (
  <span className="flex items-center gap-1" style={{ color: ok ? "#2D7D4F" : "#C53030", fontSize: 13 }}>
    <CheckCircle size={14} /> {ok ? "Active" : "Inactive"}
  </span>
);

export function AdminSettings() {
  const navigate = useNavigate();
  const loginDate = new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="max-w-2xl space-y-6" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* Contact Info */}
      <div className="bg-white rounded-xl p-6 shadow-sm border" style={{ borderColor: "#E8E4DC" }}>
        <h3 className="mb-4 pb-3 border-b" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 17, borderColor: "#E8E4DC" }}>Contact Information</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span style={{ color: "#718096", fontSize: 14 }}>Phone</span>
            <span style={{ color: "#1A1A2E", fontWeight: 500, fontSize: 14 }}>{PHONE}</span>
          </div>
          <div className="flex justify-between items-center">
            <span style={{ color: "#718096", fontSize: 14 }}>Email</span>
            <span style={{ color: "#1A1A2E", fontWeight: 500, fontSize: 14 }}>{EMAIL}</span>
          </div>
          <div className="flex justify-between items-center">
            <span style={{ color: "#718096", fontSize: 14 }}>WhatsApp</span>
            <span style={{ color: "#1A1A2E", fontWeight: 500, fontSize: 14 }}>+1 {PHONE}</span>
          </div>
        </div>
      </div>

      {/* Chat System Status */}
      <div className="bg-white rounded-xl p-6 shadow-sm border" style={{ borderColor: "#E8E4DC" }}>
        <h3 className="mb-4 pb-3 border-b" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 17, borderColor: "#E8E4DC" }}>Chat System Status</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span style={{ color: "#718096", fontSize: 14 }}>AI Chat</span>
            <StatusBadge ok />
          </div>
          <div className="flex justify-between items-center">
            <span style={{ color: "#718096", fontSize: 14 }}>Voice Assistant</span>
            <StatusBadge ok />
          </div>
          <div className="flex justify-between items-center">
            <span style={{ color: "#718096", fontSize: 14 }}>OpenAI Model</span>
            <span style={{ color: "#1A1A2E", fontWeight: 500, fontSize: 14 }}>GPT-4o</span>
          </div>
        </div>
      </div>

      {/* Tracking Status */}
      <div className="bg-white rounded-xl p-6 shadow-sm border" style={{ borderColor: "#E8E4DC" }}>
        <h3 className="mb-4 pb-3 border-b" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 17, borderColor: "#E8E4DC" }}>Tracking & Analytics</h3>
        <div className="space-y-3">
          {[
            { label: "Google Analytics 4 (GA4)", ok: true },
            { label: "Google Tag Manager (GTM)", ok: true },
            { label: "Supabase Database", ok: true },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center">
              <span style={{ color: "#718096", fontSize: 14 }}>{item.label}</span>
              <StatusBadge ok={item.ok} />
            </div>
          ))}
        </div>
      </div>

      {/* Admin Access */}
      <div className="bg-white rounded-xl p-6 shadow-sm border" style={{ borderColor: "#E8E4DC" }}>
        <h3 className="mb-4 pb-3 border-b" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 17, borderColor: "#E8E4DC" }}>Admin Access</h3>
        <div className="space-y-3 mb-5">
          <div className="flex justify-between items-center">
            <span style={{ color: "#718096", fontSize: 14 }}>Current User</span>
            <span style={{ color: "#1A1A2E", fontWeight: 500, fontSize: 14 }}>Admin</span>
          </div>
          <div className="flex justify-between items-center">
            <span style={{ color: "#718096", fontSize: 14 }}>Last Login</span>
            <span style={{ color: "#1A1A2E", fontWeight: 500, fontSize: 14 }}>{loginDate}</span>
          </div>
        </div>
        <button
          onClick={() => { localStorage.removeItem(ADMIN_AUTH_KEY); navigate("/admin/login"); }}
          className="px-4 py-2 rounded-lg text-white text-sm"
          style={{ background: "#C53030" }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
