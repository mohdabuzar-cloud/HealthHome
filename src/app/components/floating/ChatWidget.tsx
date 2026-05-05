import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Mic, Send, MicOff } from "lucide-react";
import { PHONE, PHONE_TEL, CITIES, SERVICES } from "../../data/constants";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  quickReplies?: string[];
}

type ChatState = "WHO_NEEDS_CARE" | "SITUATION" | "SERVICE" | "CONDITION" | "CITY" | "NAME" | "PHONE" | "CONFIRM" | "CLOSED";

interface LeadData {
  careRecipient?: string;
  situation?: string;
  serviceType?: string;
  conditionNotes?: string;
  city?: string;
  name?: string;
  phone?: string;
}

export interface ChatWidgetHandle {
  openChat: () => void;
}

const getBotResponse = (state: ChatState, leadData: LeadData, userMessage: string): { reply: string; nextState: ChatState; quickReplies?: string[] } => {
  switch (state) {
    case "WHO_NEEDS_CARE":
      return {
        reply: "Thank you for reaching out. Could you tell me a bit about the current situation? Are you coming home from hospital, managing at home, or planning ahead?",
        nextState: "SITUATION",
        quickReplies: ["Coming home from hospital", "Managing at home", "Planning ahead", "It's urgent"]
      };
    case "SITUATION":
      return {
        reply: "I understand. What kind of help is needed most right now?",
        nextState: "SERVICE",
        quickReplies: ["Personal care & hygiene", "Medical / nursing care", "Companionship", "Help at home (cleaning, meals)", "Not sure yet"]
      };
    case "SERVICE": {
      let followUp = "Are there any specific medical conditions or circumstances we should know about?";
      if (userMessage.toLowerCase().includes("dementia") || userMessage.toLowerCase().includes("memory")) {
        followUp = "Is memory loss or confusion a primary concern?";
      } else if (userMessage.toLowerCase().includes("nursing") || userMessage.toLowerCase().includes("medical")) {
        followUp = "Are there specific medical conditions we should know about?";
      } else if (userMessage.toLowerCase().includes("hospital")) {
        followUp = "What type of procedure or condition are they recovering from?";
      }
      return { reply: followUp, nextState: "CONDITION" };
    }
    case "CONDITION":
      return {
        reply: "Which city or area are you located in? We serve 10 cities across the Lower Mainland.",
        nextState: "CITY",
        quickReplies: ["Surrey", "Vancouver", "Coquitlam", "Burnaby", "Richmond", "Langley", "Abbotsford", "New Westminster"]
      };
    case "CITY":
      return {
        reply: `Great, I can see that care in ${userMessage} is something we can definitely help with. To connect you with our care coordinator, may I get your name?`,
        nextState: "NAME"
      };
    case "NAME":
      return {
        reply: `Thank you, ${userMessage}. What is the best phone number for our care coordinator to reach you?`,
        nextState: "PHONE"
      };
    case "PHONE": {
      const name = leadData.name || "you";
      const city = leadData.city || "your area";
      const service = leadData.serviceType || "care";
      return {
        reply: `Perfect. Here's a summary of what I've captured:\n📋 Name: ${name}\n📱 Phone: ${userMessage}\n📍 City: ${city}\n🏥 Service: ${service}\n\nOur care coordinator will call you within 1 hour during business hours. Is there anything else you'd like to share before we connect you?`,
        nextState: "CONFIRM"
      };
    }
    case "CONFIRM": {
      const name = leadData.name || "there";
      return {
        reply: `You're all set, ${name}! 🎉 We'll be in touch very soon. If you need immediate help, you can also call us directly at ${PHONE}. Is there anything else I can answer for you about our services?`,
        nextState: "CLOSED",
        quickReplies: [`📞 Call ${PHONE}`, "See Our Services"]
      };
    }
    default:
      return {
        reply: `I want to make sure I connect you with the right person. Would you prefer to call us directly at ${PHONE}, or would you like to leave your number and we'll call you?`,
        nextState: "CLOSED"
      };
  }
};

export const ChatWidget = forwardRef<ChatWidgetHandle, object>(function ChatWidget(_, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [state, setState] = useState<ChatState>("WHO_NEEDS_CARE");
  const [leadData, setLeadData] = useState<LeadData>({});
  const [isRecording, setIsRecording] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasGreeted = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    openChat: () => setIsOpen(true)
  }));

  useEffect(() => {
    if (isOpen && !hasGreeted.current) {
      hasGreeted.current = true;
      setTimeout(() => {
        setMessages([{
          role: "assistant",
          content: "👋 Hello! I'm your AI Care Guide for Advanced Home Health. I'm here to help you understand your care options and find the right support for your loved one. May I ask — who needs care?",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          quickReplies: ["For myself", "For a family member", "I'm a referral partner"]
        }]);
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatMessage = {
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Update lead data
    const newLeadData = { ...leadData };
    if (state === "WHO_NEEDS_CARE") newLeadData.careRecipient = text;
    if (state === "SITUATION") newLeadData.situation = text;
    if (state === "SERVICE") newLeadData.serviceType = text;
    if (state === "CONDITION") newLeadData.conditionNotes = text;
    if (state === "CITY") newLeadData.city = text;
    if (state === "NAME") newLeadData.name = text;
    if (state === "PHONE") newLeadData.phone = text;
    setLeadData(newLeadData);

    const { reply, nextState, quickReplies } = getBotResponse(state, newLeadData, text);
    setState(nextState);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        quickReplies
      }]);
    }, 1000 + Math.random() * 800);
  };

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      setInput("Voice input transcribed here...");
    } else {
      setIsRecording(true);
    }
  };

  return (
    <>
      {/* Voice FAB — above chat */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-[96px] right-6 z-50"
          >
            <div className="relative">
              {isRecording && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "#EF4444" }}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
              <button
                onClick={() => { setIsOpen(true); setTimeout(() => setIsRecording(true), 300); }}
                className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                style={{ background: isRecording ? "#EF4444" : "#1C2E4A" }}
                aria-label="Activate voice assistant"
                title="Talk to our AI assistant"
              >
                <Mic size={20} color="#fff" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat toggle button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1">
        <div className="relative">
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 z-10" />
          )}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg"
            style={{ background: "#1C2E4A" }}
            aria-label="Chat with our AI Care Guide"
            title="Chat with our AI Care Guide"
            >
              {isOpen ? <X size={24} color="#fff" /> : <MessageSquare size={24} color="#fff" />}
            </motion.button>
          </div>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-[88px] right-6 z-55 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{
              width: 360,
              height: 520,
              maxWidth: "calc(100vw - 24px)",
              maxHeight: "65vh",
              fontFamily: "Inter, sans-serif",
              zIndex: 55
            }}
            role="dialog"
            aria-label="AI Care Guide"
          >
            {/* Header */}
            <div className="px-4 py-3 flex items-center justify-between" style={{ background: "#1C2E4A" }}>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div>
                  <p style={{ color: "#fff", fontWeight: 600, fontSize: 16 }}>AI Care Guide</p>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>Typically replies instantly</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  className="p-1.5 rounded-lg hover:bg-white/10"
                  aria-label={voiceEnabled ? "Disable voice" : "Enable voice"}
                >
                  {voiceEnabled ? <Mic size={18} color="#fff" /> : <MicOff size={18} color="rgba(255,255,255,0.5)" />}
                </button>
                <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg hover:bg-white/10" aria-label="Close chat">
                  <X size={18} color="#fff" />
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="px-3 py-1.5 flex items-center gap-2" style={{ background: "#C49B3C" }}>
              <span style={{ fontSize: 11, color: "#fff" }}>🤖 AI assistant — not a clinician. Complex medical questions will be routed to our care team.</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" style={{ background: "#F9F7F4" }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="flex items-start gap-2">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#1C2E4A" }}>
                        <span style={{ color: "#C49B3C", fontSize: 10, fontWeight: 700 }}>AI</span>
                      </div>
                      <div
                        className="px-4 py-3 rounded-2xl rounded-tl-sm border max-w-[85%]"
                        style={{ background: "#fff", fontSize: 14, color: "#4A5568", lineHeight: 1.6, borderColor: "#E8E4DC", whiteSpace: "pre-line" }}
                      >
                        {msg.content}
                      </div>
                    </div>
                  )}
                  {msg.role === "user" && (
                    <div
                      className="px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%]"
                      style={{ background: "#2563EB", color: "#fff", fontSize: 14, lineHeight: 1.6 }}
                    >
                      {msg.content}
                    </div>
                  )}
                  <span className={`mt-1 ${msg.role === "user" ? "mr-1" : "ml-9"}`} style={{ color: "#718096", fontSize: 11 }}>{msg.timestamp}</span>

                  {/* Quick replies */}
                  {msg.role === "assistant" && msg.quickReplies && i === messages.length - 1 && !isTyping && (
                    <div className="ml-9 mt-2 flex flex-wrap gap-1.5">
                      {msg.quickReplies.map((qr, qi) => (
                        <button
                          key={qi}
                          onClick={() => sendMessage(qr)}
                          className="px-3 py-1.5 rounded-full border hover:bg-[#F5EDD6] transition-colors"
                          style={{ fontSize: 13, fontWeight: 500, color: "#A8832E", borderColor: "#C49B3C", background: "#fff" }}
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "#1C2E4A" }}>
                    <span style={{ color: "#C49B3C", fontSize: 10, fontWeight: 700 }}>AI</span>
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-tl-sm border" style={{ background: "#fff", borderColor: "#E8E4DC" }}>
                    <div className="flex gap-1">
                      {[0, 1, 2].map(i => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: "#718096" }}
                          animate={{ y: [-3, 0, -3] }}
                          transition={{ duration: 0.6, delay: i * 0.2, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input row */}
            <div className="px-3 py-2 flex items-center gap-2 border-t bg-white" style={{ borderColor: "#E8E4DC" }}>
              <button
                onClick={toggleRecording}
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors"
                style={{
                  background: isRecording ? "#EF4444" : "#fff",
                  borderColor: isRecording ? "#EF4444" : "#E8E4DC"
                }}
                aria-label="Tap to speak"
                title="Tap to speak"
              >
                <Mic size={16} color={isRecording ? "#fff" : "#1C2E4A"} />
              </button>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendMessage(input)}
                placeholder={isRecording ? "Listening..." : "Type your message..."}
                className="flex-1 px-4 py-2 rounded-full outline-none"
                style={{ background: "#F9F7F4", fontSize: 14, color: "#1A1A2E" }}
              />
              <button
                onClick={() => sendMessage(input)}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ background: "#1C2E4A" }}
                aria-label="Send message"
              >
                <Send size={15} color="#fff" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
