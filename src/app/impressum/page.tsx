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
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "/" },
            { name: "Impressum", id: "impressum" }
          ]}
          brandName="VoiceLinkAI"
        />
      </div>

      <div id="legal" data-section="legal">
        <LegalSection
          layout="page"
          title="Impressum"
          sections={[
            {
              heading: "Angaben gemäß § 5 TMG",              content: {
                type: "paragraph",                text: "VoiceLinkAI, Musterstraße 1, 12345 Berlin, E-Mail: kontakt@voicelink.ai"
              }
            },
            {
              heading: "Verantwortlich für den Inhalt",              content: {
                type: "paragraph",                text: "VoiceLinkAI, Musterstraße 1, 12345 Berlin"
              }
            },
            {
              heading: "Haftungsausschluss",              content: {
                type: "paragraph",                text: "Wir übernehmen keine Haftung für die Inhalte externer Links."
              }
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="VoiceLinkAI"
          columns={[
            { title: "Rechtliches", items: [{ label: "Impressum", href: "/impressum" }] }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}