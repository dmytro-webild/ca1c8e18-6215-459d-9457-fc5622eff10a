"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import LegalSection from '@/components/legal/LegalSection';

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

const tosContent = [
  {
    heading: "1. Geltungsbereich",    content: [{ type: "paragraph", text: "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen VoiceLinkAI und unseren Kunden, die unsere KI-Agenten-Lösungen in Anspruch nehmen." }]
  },
  {
    heading: "2. Vertragsgegenstand",    content: [{ type: "paragraph", text: "VoiceLinkAI stellt Solarunternehmen spezialisierte KI-Agenten zur Automatisierung von Telefonie-, Termin- und Qualifizierungsprozessen bereit. Die Erbringung der Leistungen erfolgt gemäß der individuellen Leistungsbeschreibung im jeweiligen Angebot." }]
  },
  {
    heading: "3. Pflichten des Kunden",    content: [
      { 
        type: "list", 
        items: [
          "Der Kunde stellt sicher, dass alle notwendigen Zugangsdaten und Schnittstellen korrekt bereitgestellt werden.",          "Der Kunde ist für die Einhaltung datenschutzrechtlicher Vorgaben in seinem eigenen Betrieb verantwortlich.",          "Der Kunde verpflichtet sich, die KI-Agenten nur bestimmungsgemäß zu nutzen."
        ] 
      }
    ]
  },
  {
    heading: "4. Haftung",    content: [{ type: "paragraph", text: "VoiceLinkAI haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit. Eine Haftung für entgangenen Gewinn ist ausgeschlossen." }]
  }
];

export default function TermsOfServicePage() {
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
      <main className="pt-24">
        <LegalSection
          layout="page"
          title="Allgemeine Geschäftsbedingungen"
          subtitle="Terms of Service für VoiceLinkAI Kunden"
          sections={tosContent}
        />
      </main>
    </ThemeProvider>
  );
}