import { useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router";
import { LayoutDashboard, Users, MessageSquare, BarChart2, Settings, LogOut, Plus, ExternalLink, RefreshCw } from "lucide-react";
import { ADMIN_AUTH_KEY } from "../../data/constants";

const NAV_ITEMS = [
  { icon: <LayoutDashboard size={18} />, label: "Dashboard", to: "/admin" },
  { icon: <Users size={18} />, label: "All Leads", to: "/admin/leads" },
  { icon: <MessageSquare size={18} />, label: "Chat Logs", to: "/admin/chats" },
  { icon: <BarChart2 size={18} />, label: "Analytics", to: "/admin/analytics" },
  { icon: <Settings size={18} />, label: "Settings", to: "/admin/settings" },
];

export function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const auth = localStorage.getItem(ADMIN_AUTH_KEY);
    if (!auth) navigate("/admin/login");
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem(ADMIN_AUTH_KEY);
    navigate("/admin/login");
  };

  const getTitle = () => {
    const path = location.pathname;
    if (path === "/admin") return "Dashboard";
    if (path === "/admin/leads") return "All Leads";
    if (path === "/admin/chats") return "Chat Logs";
    if (path === "/admin/analytics") return "Analytics";
    if (path === "/admin/settings") return "Settings";
    return "Admin";
  };

  return (
    <div className="flex min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 bottom-0 w-60 flex flex-col z-30" style={{ background: "#1C2E4A" }}>
        {/* Logo */}
        <div className="px-4 py-5 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#C49B3C" }}>
              <Plus size={16} color="#fff" strokeWidth={3} />
            </div>
            <span style={{ color: "#fff", fontWeight: 600, fontSize: 13 }}>1A Advanced Home Health</span>
          </div>
          <p style={{ color: "#C49B3C", fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", paddingLeft: 40 }}>Admin Panel</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV_ITEMS.map(item => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center gap-3 py-2.5 px-3 rounded-lg transition-colors"
                style={{
                  background: isActive ? "rgba(255,255,255,0.13)" : "transparent",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.7)",
                  borderLeft: isActive ? "2px solid #C49B3C" : "2px solid transparent"
                }}
              >
                {item.icon}
                <span style={{ fontSize: 14, fontWeight: isActive ? 600 : 400 }}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="px-4 py-4 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p style={{ color: "#fff", fontSize: 14, fontWeight: 500, marginBottom: 8 }}>Admin</p>
          <button
            onClick={logout}
            className="flex items-center gap-2 hover:text-white transition-colors"
            style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 ml-60 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-20 h-16 flex items-center justify-between px-6 border-b bg-white" style={{ borderColor: "#E8E4DC" }}>
          <h4 style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 20 }}>{getTitle()}</h4>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 text-sm hover:text-[#C49B3C] transition-colors" style={{ color: "#718096" }}>
              <RefreshCw size={15} /> Refresh
            </button>
            <span style={{ color: "#718096", fontSize: 12 }}>Updated: {new Date().toLocaleTimeString()}</span>
            <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm" style={{ color: "#C49B3C", fontWeight: 500 }}>
              <ExternalLink size={15} /> View Website
            </a>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6" style={{ background: "#F9F7F4" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
