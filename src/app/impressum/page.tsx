"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

const navItems = [
  { name: "Home", id: "/" },
  { name: "Probleme", id: "/#problems" },
  { name: "Agenten", id: "/#agents" },
  { name: "So funktioniert's", id: "/#howitworks" },
  { name: "FAQ", id: "/#faq" },
  { name: "Kontakt", id: "/contact" }
];

export default function ImpressumPage() {
  return (
    <ThemeProvider>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={navItems}
          brandName="VoiceLink.ai"
          button={{ text: "Kostenloses Erstgespräch", href: "https://calendly.com/voicelinkai/info" }}
        />
      </div>
      <div id="impressum" data-section="impressum" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Impressum</h1>
          <p className="text-gray-400">VoiceLinkAI GmbH, Musterstraße 1, 12345 Musterstadt.</p>
        </div>
      </div>
    </ThemeProvider>
  );
}