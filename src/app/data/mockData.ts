export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  service: string;
  city: string;
  source: "Chat" | "Contact Form" | "Assessment Form" | "Referral";
  status: "New" | "Contacted" | "Converted" | "Not Qualified";
  date: string;
  situation?: string;
  conditionNotes?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  additionalNotes?: string;
  conversationLog?: ChatMessage[];
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  isVoice?: boolean;
}

export interface ChatSession {
  id: string;
  date: string;
  firstMessage: string;
  status: "Active" | "Closed";
  hasLead: boolean;
  lead?: Partial<Lead>;
  messages: ChatMessage[];
}

export const MOCK_LEADS: Lead[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    phone: "(604) 555-0123",
    email: "sarah.m@email.com",
    service: "Personal Care Services",
    city: "Surrey",
    source: "Chat",
    status: "New",
    date: "2025-05-05",
    situation: "Managing at home but need more support",
    utmSource: "google",
    utmMedium: "organic",
  },
  {
    id: "2",
    name: "David Chen",
    phone: "(604) 555-0234",
    email: "dchen@email.com",
    service: "Professional Nursing Care",
    city: "Vancouver",
    source: "Contact Form",
    status: "Contacted",
    date: "2025-05-04",
    utmSource: "google",
    utmMedium: "cpc",
    utmCampaign: "surrey-nursing",
  },
  {
    id: "3",
    name: "Harpreet Sandhu",
    phone: "(778) 555-0345",
    email: "h.sandhu@email.com",
    service: "Dementia & Alzheimer's Care",
    city: "Coquitlam",
    source: "Assessment Form",
    status: "Converted",
    date: "2025-05-03",
    utmSource: "facebook",
    utmMedium: "social",
  },
  {
    id: "4",
    name: "Linda Tran",
    phone: "(604) 555-0456",
    service: "Home Support Services",
    city: "Burnaby",
    source: "Chat",
    status: "New",
    date: "2025-05-04",
    utmSource: "direct",
  },
  {
    id: "5",
    name: "Michael O'Brien",
    phone: "(604) 555-0567",
    email: "mobrien@email.com",
    service: "Hospital Recovery Care",
    city: "Richmond",
    source: "Referral",
    status: "Contacted",
    date: "2025-05-02",
    utmSource: "referral",
  },
  {
    id: "6",
    name: "Mei Lin",
    phone: "(778) 555-0678",
    service: "Meal Preparation & Diet Planning",
    city: "Surrey",
    source: "Contact Form",
    status: "New",
    date: "2025-05-05",
    utmSource: "google",
    utmMedium: "organic",
  },
  {
    id: "7",
    name: "Robert Johansson",
    phone: "(604) 555-0789",
    email: "rjohansson@email.com",
    service: "Veterans Home Care",
    city: "Langley",
    source: "Assessment Form",
    status: "Converted",
    date: "2025-04-30",
    utmSource: "google",
    utmMedium: "cpc",
    utmCampaign: "veterans-care",
  },
  {
    id: "8",
    name: "Amina Hassan",
    phone: "(778) 555-0890",
    service: "Palliative & End-of-Life Care",
    city: "New Westminster",
    source: "Chat",
    status: "Not Qualified",
    date: "2025-04-29",
    utmSource: "facebook",
    utmMedium: "social",
  },
  {
    id: "9",
    name: "James Park",
    phone: "(604) 555-0901",
    email: "jpark@email.com",
    service: "Respite Care",
    city: "Maple Ridge",
    source: "Contact Form",
    status: "New",
    date: "2025-05-05",
    utmSource: "direct",
  },
  {
    id: "10",
    name: "Gloria Fernandez",
    phone: "(778) 555-1012",
    service: "Companionship & Recreation",
    city: "Abbotsford",
    source: "Chat",
    status: "Contacted",
    date: "2025-05-01",
    utmSource: "google",
    utmMedium: "organic",
  },
];

export const MOCK_CHAT_SESSIONS: ChatSession[] = [
  {
    id: "sess-001",
    date: "2025-05-05T10:23:00",
    firstMessage: "For a family member",
    status: "Closed",
    hasLead: true,
    lead: { name: "Sarah Mitchell", phone: "(604) 555-0123", service: "Personal Care Services", city: "Surrey", status: "New" },
    messages: [
      { role: "assistant", content: "👋 Hello! I'm your AI Care Guide for Advanced Home Health. I'm here to help you understand your care options and find the right support for your loved one. May I ask — who needs care?", timestamp: "10:23:01" },
      { role: "user", content: "For a family member", timestamp: "10:23:45" },
      { role: "assistant", content: "Thank you for reaching out. I'd love to help. Could you tell me a bit about the current situation? For example, are you coming home from hospital, managing at home, or planning ahead?", timestamp: "10:23:47" },
      { role: "user", content: "She's managing at home but struggling with daily tasks", timestamp: "10:24:30" },
      { role: "assistant", content: "I understand — it can be a gradual process realizing that extra support is needed. What kind of help is needed most right now?", timestamp: "10:24:32" },
      { role: "user", content: "Personal care & hygiene", timestamp: "10:25:10" },
      { role: "assistant", content: "Which city or area are you located in? We serve 10 cities across the Lower Mainland.", timestamp: "10:25:12" },
      { role: "user", content: "Surrey", timestamp: "10:25:45" },
      { role: "assistant", content: "Great, I can see that personal care in Surrey is something we can definitely help with. To connect you with our care coordinator, may I get your name?", timestamp: "10:25:47" },
      { role: "user", content: "Sarah Mitchell", timestamp: "10:26:20" },
      { role: "assistant", content: "Thank you, Sarah. What is the best phone number for our care coordinator to reach you?", timestamp: "10:26:22" },
      { role: "user", content: "(604) 555-0123", timestamp: "10:26:55" },
      { role: "assistant", content: "Perfect. Here's a summary of what I've captured:\n📋 Name: Sarah Mitchell\n📱 Phone: (604) 555-0123\n📍 City: Surrey\n🏥 Service: Personal Care Services\n\nOur care coordinator will call you within 1 hour during business hours. Is there anything else you'd like to share?", timestamp: "10:26:57" },
      { role: "user", content: "No, that's all. Thank you!", timestamp: "10:27:30" },
      { role: "assistant", content: "You're all set, Sarah! 🎉 We'll be in touch very soon. If you need immediate help, you can also call us directly at (236) 616-0007. Is there anything else I can answer for you about our services?", timestamp: "10:27:32" },
    ],
  },
  {
    id: "sess-002",
    date: "2025-05-04T14:45:00",
    firstMessage: "I need help for my dad who just got out of hospital",
    status: "Closed",
    hasLead: true,
    lead: { name: "Linda Tran", phone: "(604) 555-0456", service: "Home Support Services", city: "Burnaby", status: "New" },
    messages: [
      { role: "assistant", content: "👋 Hello! I'm your AI Care Guide for Advanced Home Health. Who needs care?", timestamp: "14:45:01" },
      { role: "user", content: "I need help for my dad who just got out of hospital", timestamp: "14:45:30" },
      { role: "assistant", content: "I understand — coming home from hospital can be overwhelming for the whole family. Could you tell me more about the current situation?", timestamp: "14:45:32" },
    ],
  },
  {
    id: "sess-003",
    date: "2025-05-03T09:12:00",
    firstMessage: "For myself",
    status: "Closed",
    hasLead: false,
    messages: [
      { role: "assistant", content: "👋 Hello! I'm your AI Care Guide. Who needs care?", timestamp: "09:12:01" },
      { role: "user", content: "For myself", timestamp: "09:12:45" },
      { role: "assistant", content: "Of course! I'd be happy to help you explore care options. Could you tell me about your current situation?", timestamp: "09:12:47" },
      { role: "user", content: "Just browsing for now", timestamp: "09:13:15" },
    ],
  },
];

export const MOCK_ANALYTICS = {
  leadsOverTime: [
    { date: "Apr 29", chat: 2, form: 3 },
    { date: "Apr 30", chat: 4, form: 2 },
    { date: "May 1", chat: 3, form: 5 },
    { date: "May 2", chat: 5, form: 4 },
    { date: "May 3", chat: 6, form: 3 },
    { date: "May 4", chat: 4, form: 6 },
    { date: "May 5", chat: 7, form: 5 },
  ],
  leadsBySource: [
    { name: "Organic Search", value: 42, color: "#1C2E4A" },
    { name: "Google Ads", value: 28, color: "#C49B3C" },
    { name: "Facebook", value: 15, color: "#2563EB" },
    { name: "Direct", value: 10, color: "#2D7D4F" },
    { name: "Other", value: 5, color: "#718096" },
  ],
  leadsByService: [
    { service: "Personal Care", count: 18 },
    { service: "Home Support", count: 14 },
    { service: "Nursing Care", count: 12 },
    { service: "Dementia Care", count: 10 },
    { service: "Hospital Recovery", count: 9 },
    { service: "Companionship", count: 8 },
    { service: "Respite Care", count: 7 },
    { service: "Post-Surgery", count: 6 },
    { service: "Live-in Care", count: 5 },
    { service: "Palliative Care", count: 4 },
    { service: "Veterans Care", count: 3 },
    { service: "Meal Preparation", count: 4 },
  ],
  leadsByCity: [
    { city: "Surrey", count: 24 },
    { city: "Vancouver", count: 18 },
    { city: "Coquitlam", count: 12 },
    { city: "Burnaby", count: 10 },
    { city: "Richmond", count: 9 },
    { city: "Langley", count: 8 },
    { city: "Abbotsford", count: 6 },
    { city: "Maple Ridge", count: 5 },
    { city: "New Westminster", count: 4 },
    { city: "Mission", count: 4 },
  ],
  statusBreakdown: [
    { name: "New", value: 45, color: "#3B82F6" },
    { name: "Contacted", value: 30, color: "#F59E0B" },
    { name: "Converted", value: 20, color: "#10B981" },
    { name: "Not Qualified", value: 5, color: "#9CA3AF" },
  ],
  trackingEvents: [
    { event: "page_view", count: 1842, lastTriggered: "2025-05-05 10:45", trend: "up" },
    { event: "chat_started", count: 234, lastTriggered: "2025-05-05 10:23", trend: "up" },
    { event: "chat_message_sent", count: 1456, lastTriggered: "2025-05-05 10:27", trend: "up" },
    { event: "chat_lead_created", count: 89, lastTriggered: "2025-05-05 10:27", trend: "up" },
    { event: "voice_activated", count: 45, lastTriggered: "2025-05-04 16:30", trend: "down" },
    { event: "form_submitted", count: 167, lastTriggered: "2025-05-05 09:55", trend: "up" },
    { event: "call_clicked", count: 312, lastTriggered: "2025-05-05 10:40", trend: "up" },
    { event: "whatsapp_clicked", count: 78, lastTriggered: "2025-05-05 10:15", trend: "up" },
  ],
  utmPerformance: [
    { source: "google", medium: "organic", campaign: "(none)", sessions: 842, leads: 42, rate: "4.99%" },
    { source: "google", medium: "cpc", campaign: "surrey-personal-care", sessions: 423, leads: 28, rate: "6.62%" },
    { source: "facebook", medium: "social", campaign: "june-ads", sessions: 234, leads: 15, rate: "6.41%" },
    { source: "direct", medium: "(none)", campaign: "(none)", sessions: 198, leads: 10, rate: "5.05%" },
    { source: "google", medium: "cpc", campaign: "veterans-care", sessions: 145, leads: 8, rate: "5.52%" },
  ],
};
