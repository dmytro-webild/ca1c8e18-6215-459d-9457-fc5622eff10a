"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import LegalSection from '@/components/legal/LegalSection';

const navItems = [
  { name: "Home", id: "/" },
  { name: "Leistungen", id: "/services" },
  { name: "Preise", id: "/pricing" },
  { name: "Über uns", id: "/uber-uns" },
  { name: "Kontakt", id: "/contact" },
  { name: "Live Testing", id: "/live-testing" },
  { name: "Impressum", id: "/impressum" },
  { name: "Datenschutz", id: "/datenschutz" }
];

export default function ImpressumPage() {
  return (
    <ThemeProvider 
        defaultButtonVariant="text-stagger" 
        defaultTextAnimation="reveal-blur" 
        borderRadius="rounded" 
        contentWidth="small" 
        sizing="mediumLarge" 
        background="none" 
        cardStyle="gradient-bordered" 
        primaryButtonStyle="flat" 
        secondaryButtonStyle="layered" 
        headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={navItems}
            brandName="VoiceLink.ai"
            className="h-[70px] bg-[#222222] w-full fixed top-0 z-50"
            button={{ text: "Kostenloses Erstgespräch", href: "https://calendly.com/voicelinkai/info" }}
          />
      </div>
      <LegalSection 
        layout="page"
        title="Impressum"
        sections={[
          { heading: "Angaben gemäß § 5 TMG", content: { type: "paragraph", text: "SIXEIGHT VISUALS\n[Adresse einfügen]\n[PLZ Ort]" } },
          { heading: "Kontakt", content: { type: "paragraph", text: "E-Mail: info@sixeightvisuals.de" } }
        ]}
      />
    </ThemeProvider>
  );
}