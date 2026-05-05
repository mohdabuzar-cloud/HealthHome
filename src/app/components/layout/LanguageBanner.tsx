import { useState } from "react";
import { X } from "lucide-react";
import { LANGUAGES } from "../../data/constants";

const PRIMARY_LANGUAGES = LANGUAGES.slice(0, 8);
const REMAINING_COUNT = LANGUAGES.length - PRIMARY_LANGUAGES.length;

export function LanguageBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div
      className="relative w-full border-y px-4 py-3"
      style={{ background: "#F8F1DE", borderColor: "#E8D9AF" }}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 pr-10">
        <span style={{ color: "#C49B3C", fontSize: 16, fontWeight: 500 }}>
          We speak your language. Select:
        </span>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {PRIMARY_LANGUAGES.map((lang) => (
            <button
              key={lang}
              title={lang}
              className="rounded-full px-4 py-1.5 transition-colors hover:bg-[#FFF7E8]"
              style={{
                background: "#FFFFFF",
                border: "1px solid #F1E6C9",
                color: "#C49B3C",
                fontSize: 14,
                lineHeight: 1,
              }}
            >
              {lang}
            </button>
          ))}

          {REMAINING_COUNT > 0 && (
            <button
              title={LANGUAGES.slice(PRIMARY_LANGUAGES.length).join(", ")}
              className="rounded-full px-4 py-1.5 transition-colors hover:bg-[#FFF7E8]"
              style={{
                background: "#FFFFFF",
                border: "1px solid #F1E6C9",
                color: "#C49B3C",
                fontSize: 14,
                lineHeight: 1,
              }}
            >
              +{REMAINING_COUNT} more
            </button>
          )}
        </div>
      </div>

      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss banner"
        className="absolute right-6 top-1/2 -translate-y-1/2"
      >
        <X size={16} style={{ color: "#C49B3C" }} />
      </button>
    </div>
  );
}
