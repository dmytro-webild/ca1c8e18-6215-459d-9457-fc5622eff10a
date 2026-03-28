"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import LegalSection from '@/components/legal/LegalSection';

export default function ImpressumPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Leistungen", id: "/services" },
    { name: "Kontakt", id: "/contact" },
    { name: "Impressum", id: "/impressum" },
    { name: "Datenschutz", id: "/datenschutz" }
  ];

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
        <div className="pt-24">
            <LegalSection
                layout="page"
                title="Impressum"
                sections={[
                    { heading: "Angaben gemäß § 5 TMG", content: { type: "paragraph", text: "SIXEIGHT VISUALS\n[Adresse einfügen]\n[PLZ Ort einfügen]" } },
                    { heading: "Kontakt", content: { type: "paragraph", text: "E-Mail: [E-Mail einfügen]\nTelefon: [Telefon einfügen]" } }
                ]}
            />
        </div>
    </ThemeProvider>
  );
}