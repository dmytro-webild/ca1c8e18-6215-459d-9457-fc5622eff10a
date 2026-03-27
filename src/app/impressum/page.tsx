"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import LegalSection from '@/components/legal/LegalSection';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

const navItems = [
  { name: "Home", id: "/" },
  { name: "Probleme", id: "/#problems" },
  { name: "Agenten", id: "/#agents" },
  { name: "So funktioniert's", id: "/#howitworks" },
  { name: "FAQ", id: "/#faq" },
  { name: "Über uns", id: "/uber-uns" },
  { name: "Services", id: "/services" },
  { name: "Kontakt", id: "/contact" }
];

export default function ImpressumPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
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
            {
              heading: "Angaben gemäß § 5 TMG",              content: { text: "VoiceLinkAI \nVertreten durch: Florian Schüßler \nMax-Mustermann-Straße 1 \n12345 Berlin" }
            },
            {
              heading: "Kontakt",              content: { text: "E-Mail: kontakt@voicelink.ai \nTelefon: +49 (0) 123 456789" }
            },
            {
              heading: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",              content: { text: "Florian Schüßler \nMax-Mustermann-Straße 1 \n12345 Berlin" }
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="VoiceLinkAI"
          columns={[
            { title: "Produkt", items: [{ label: "KI-Telefonassistent", href: "/#agents" }, { label: "KI-Buchungsagent", href: "/#agents" }, { label: "KI-Chat-Agent", href: "/#agents" }] },
            { title: "Unternehmen", items: [{ label: "Über uns", href: "/uber-uns" }, { label: "So funktioniert's", href: "/#howitworks" }, { label: "Kontakt", href: "/contact" }] },
            { title: "Rechtliches", items: [{ label: "Impressum", href: "/impressum" }, { label: "Datenschutz", href: "/#" }, { label: "AGB", href: "/#" }] }
          ]}
          copyrightText="© 2025 VoiceLinkAI"
        />
      </div>
    </ThemeProvider>
  );
}