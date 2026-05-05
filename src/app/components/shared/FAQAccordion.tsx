import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-3" style={{ fontFamily: "Inter, sans-serif" }}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="rounded-xl border overflow-hidden"
          style={{ borderColor: "#E8E4DC", background: "#fff" }}
        >
          <button
            className="w-full flex justify-between items-center px-6 py-4 text-left"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <span style={{ color: "#1A1A2E", fontWeight: 600, fontSize: 16 }}>{item.question}</span>
            <ChevronDown
              size={20}
              style={{ color: "#C49B3C", flexShrink: 0, transform: openIdx === idx ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }}
            />
          </button>
          <AnimatePresence initial={false}>
            {openIdx === idx && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="px-6 pb-5">
                  <p style={{ color: "#4A5568", fontSize: 15, lineHeight: 1.7 }}>{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
