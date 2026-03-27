"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import LegalSection from '@/components/legal/LegalSection';
import FooterCard from '@/components/sections/footer/FooterCard';

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
        <NavbarStyleApple
          navItems={navItems}
          brandName="VoiceLink.ai"
        />
      </div>
      <div className="pt-24">
        <LegalSection
          layout="page"
          title="Impressum"
          sections={[
            {
              heading: "Angaben gemäß § 5 TMG",              content: { text: "VoiceLinkAI GmbH\nMusterstraße 1\n12345 Musterstadt\n\nVertreten durch:\nFlorian Schüßler", type: "paragraph" }
            },
            {
              heading: "Kontakt",              content: { text: "E-Mail: info@voicelinkai.de", type: "paragraph" }
            },
            {
              heading: "Registereintrag",              content: { text: "Eintragung im Handelsregister.\nRegistergericht: Amtsgericht Musterstadt\nRegisternummer: HRB 123456", type: "paragraph" }
            }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterCard
          logoText="VoiceLinkAI"
        />
      </div>
    </ThemeProvider>
  );
}