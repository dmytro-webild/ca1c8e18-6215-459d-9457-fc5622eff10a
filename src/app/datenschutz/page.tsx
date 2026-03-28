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

export default function DatenschutzPage() {
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
        title="Datenschutzerklärung"
        sections={[
          { heading: "Verantwortlicher", content: { type: "paragraph", text: "Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen." } },
          { heading: "Datenerhebung", content: { type: "list", items: ["Wir erheben Daten gemäß DSGVO", "Keine Weitergabe an Dritte"] } }
        ]}
      />
    </ThemeProvider>
  );
}