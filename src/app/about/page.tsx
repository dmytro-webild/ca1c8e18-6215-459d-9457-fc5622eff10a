"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { Sparkles, Users, Zap, Award, Headphones, MessageSquare, Calendar } from 'lucide-react';

const navItems = [
  { name: "Home", id: "/" },
  { name: "Probleme", id: "/#problems" },
  { name: "Agenten", id: "/#agents" },
  { name: "So funktioniert's", id: "/#howitworks" },
  { name: "FAQ", id: "/#faq" },
  { name: "Kontakt", id: "/contact" }
];

export default function AboutPage() {
  return (
    <ThemeProvider>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={navItems}
          brandName="VoiceLink.ai"
          button={{ text: "Kostenloses Erstgespräch", href: "https://calendly.com/voicelinkai/info" }}
        />
      </div>
      <div id="about" data-section="about" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Über uns</h1>
          <p className="text-lg text-gray-400">Wir bauen KI-Agenten für Solarunternehmen, um Routineaufgaben zu automatisieren.</p>
        </div>
      </div>
    </ThemeProvider>
  );
}