import { useRef, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { LanguageBanner } from "./components/layout/LanguageBanner";
import { WhatsAppFAB } from "./components/floating/WhatsAppFAB";
import { ChatWidget, ChatWidgetHandle } from "./components/floating/ChatWidget";
import { StickyMobileBar } from "./components/floating/StickyMobileBar";

export function RootLayout() {
  const chatRef = useRef<ChatWidgetHandle>(null);
  const location = useLocation();

  const openChat = () => {
    chatRef.current?.openChat();
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "Inter, sans-serif" }}>
      <LanguageBanner />
      <Header onOpenChat={openChat} />
      <main className="flex-1 pt-0">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFAB />
      <ChatWidget ref={chatRef} />
      <StickyMobileBar />
    </div>
  );
}
