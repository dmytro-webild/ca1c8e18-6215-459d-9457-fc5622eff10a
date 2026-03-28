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
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "/" },
            { name: "Impressum", id: "/impressum" }
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
              heading: "Angaben gemäß § 5 TMG",              
              content: { 
                type: "paragraph", 
                text: "VoiceLinkAI, vertreten durch die Geschäftsführung, Musterstraße 1, 12345 Musterstadt."
              }
            },
            {
              heading: "Kontakt",              
              content: { 
                type: "paragraph", 
                text: "E-Mail: kontakt@voicelinkai.de"
              }
            },
            {
              heading: "Umsatzsteuer-ID",              
              content: { 
                type: "paragraph", 
                text: "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE123456789"
              }
            }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="VoiceLinkAI"
          columns={[
            { title: "Produkt", items: [{ label: "KI-Telefonassistent", href: "#" }] },
            { title: "Unternehmen", items: [{ label: "Über uns", href: "#" }] },
            { title: "Rechtliches", items: [{ label: "Impressum", href: "/impressum" }] }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}