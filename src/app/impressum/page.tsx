"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import LegalSection from '@/components/legal/LegalSection';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function ImpressumPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="solid"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "/" },
            { name: "Probleme", id: "/#problems" },
            { name: "Agenten", id: "/#agents" },
            { name: "So funktioniert's", id: "/#howitworks" }
          ]}
          brandName="VoiceLinkAI"
        />
      </div>

      <div id="impressum" data-section="impressum">
        <LegalSection
          layout="page"
          title="Impressum"
          sections={[
            {
              heading: "Angaben gemäß § 5 TMG",              content: { type: "paragraph", text: "VoiceLinkAI, Musterstraße 1, 12345 Musterstadt, Deutschland." }
            },
            {
              heading: "Kontakt",              content: { type: "list", items: ["E-Mail: kontakt@voicelinkai.de", "Telefon: +49 123 456 789"] }
            },
            {
              heading: "Verantwortlich für den Inhalt",              content: { type: "numbered-list", items: ["Max Mustermann"] }
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="VoiceLinkAI"
          columns={[
            { title: "Produkt", items: [{ label: "KI-Telefonassistent", href: "/#agents" }] },
            { title: "Unternehmen", items: [{ label: "Über uns", href: "/#" }] },
            { title: "Rechtliches", items: [{ label: "Impressum", href: "/impressum" }] }
          ]}
          copyrightText="© 2025 VoiceLinkAI"
        />
      </div>
    </ThemeProvider>
  );
}