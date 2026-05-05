import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Plus } from "lucide-react";
import { ADMIN_USERNAME, ADMIN_PASSWORD, ADMIN_AUTH_KEY } from "../../data/constants";

export function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem(ADMIN_AUTH_KEY, "true");
      navigate("/admin");
    } else {
      setError(true);
    }
  };

  const inputStyle = {
    borderColor: error ? "#C53030" : "#E8E4DC",
    background: "#fff",
    fontSize: 14,
    fontFamily: "Inter, sans-serif"
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#1C2E4A", fontFamily: "Inter, sans-serif" }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      <div className="relative w-full max-w-md bg-white rounded-2xl p-10 shadow-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#C49B3C" }}>
              <Plus size={22} color="#fff" strokeWidth={3} />
            </div>
            <span style={{ color: "#1C2E4A", fontWeight: 700, fontSize: 18 }}>1A Advanced Home Health</span>
          </div>
        </div>

        <h3 className="text-center" style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 22 }}>Admin Access</h3>
        <p className="text-center mt-1 mb-8" style={{ color: "#718096", fontSize: 14 }}>Advanced Home Health — Staff Only</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Username</label>
            <input
              type="text"
              value={username}
              onChange={e => { setUsername(e.target.value); setError(false); }}
              placeholder="Enter username"
              required
              className="w-full px-4 py-3 rounded-lg border outline-none focus:border-[#C49B3C] transition-colors"
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block mb-1.5" style={{ color: "#1A1A2E", fontSize: 13, fontWeight: 500 }}>Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => { setPassword(e.target.value); setError(false); }}
                placeholder="Enter password"
                required
                className="w-full px-4 py-3 rounded-lg border outline-none focus:border-[#C49B3C] transition-colors pr-11"
                style={inputStyle}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} color="#718096" /> : <Eye size={18} color="#718096" />}
              </button>
            </div>
            {error && <p className="mt-1.5" style={{ color: "#C53030", fontSize: 13 }}>Incorrect username or password. Please try again.</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-lg text-white mt-2 hover:opacity-90 transition-opacity active:scale-95"
            style={{ background: "#C49B3C", fontWeight: 600, fontSize: 15 }}
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-6" style={{ color: "#718096", fontSize: 13 }}>
          Having trouble? Contact your system administrator.
        </p>
      </div>
    </div>
  );
}
