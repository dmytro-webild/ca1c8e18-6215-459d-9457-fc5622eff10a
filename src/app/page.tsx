"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Bot, Phone, Clock, TrendingDown } from 'lucide-react';

const navItems = [
  { name: "Home", id: "/" },
  { name: "Über uns", id: "/about" },
  { name: "Kontakt", id: "/contact" }
];

export default function LandingPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="reveal-blur" borderRadius="pill" contentWidth="medium" sizing="medium" background="noiseDiagonalGradient" cardStyle="glass-elevated" primaryButtonStyle="primary-glow" secondaryButtonStyle="glass" headingFontWeight="semibold">
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline navItems={navItems} button={{ text: "Jetzt starten", href: "/contact" }} />
      </div>
      <div id="hero" data-section="hero">
        <HeroBillboard title="VoiceLinkAI: KI-Telefonassistenten für deutsche Solarfirmen" description="Automatisieren Sie die Lead-Qualifizierung und Terminbuchung mit spezialisierten KI-Agenten, die genau wie Ihre besten Mitarbeiter kommunizieren." background={{ variant: "sparkles-gradient" }} />
      </div>
      <div id="pain" data-section="pain">
        <FeatureCardNineteen title="Wachstumsbremse erkannt" description="Viele Solar-Betriebe verlieren wertvolle Leads durch langsame Erreichbarkeit." textboxLayout="default" features={[
            { id: 1, tag: "Problem", title: "Reaktionszeit", subtitle: "Jede Minute zählt", description: "Lange Wartezeiten führen dazu, dass potenzielle Kunden zum Wettbewerb abwandern." },
            { id: 2, tag: "Problem", title: "Terminkoordination", subtitle: "Zeitfresser im Büro", description: "Manuelle Terminfindung raubt Ihren Vertrieblern die Zeit für den Abschluss." },
            { id: 3, tag: "Problem", title: "Support-Last", subtitle: "Fokus verloren", description: "Wiederkehrende Kundenanfragen halten Sie vom Kerngeschäft ab." }
        ]} useInvertedBackground={true} />
      </div>
      <div id="solution" data-section="solution">
        <TestimonialAboutCard tag="Die Lösung" title="KI-Agenten für den Solarsektor" description="Unsere KI-Telefonassistenten sind speziell auf Photovoltaik-Begriffe trainiert und integrieren sich nahtlos in Ihren Kalender und Ihr CRM." subdescription="Maximale Professionalität, 24/7 erreichbar, 100% DSGVO-konform." icon={Bot} imageSrc="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000" useInvertedBackground={false} mediaAnimation="blur-reveal" />
      </div>
      <div id="product-visual" data-section="product-visual">
        <FeatureBento 
          title="KI-Telefonassistent für Solar-Experten" 
          description="Maximale Erreichbarkeit rund um die Uhr mit nahtloser Integration in Ihren Workflow."
          animationType="slide-up"
          textboxLayout="split-description"
          useInvertedBackground={true}
          features={[
            { title: "24/7 Service", description: "Kein Anruf geht verloren", bentoComponent: 'reveal-icon', icon: Phone },
            { title: "Schnelle Antworten", description: "Sofortige Reaktion auf Anfragen", bentoComponent: 'reveal-icon', icon: Clock },
            { title: "Routine-Entlastung", description: "Weniger Call-Volumen für Ihr Team", bentoComponent: 'reveal-icon', icon: TrendingDown },
            { title: "Solar-Spezialist", description: "Versteht Kundenfragen zu Photovoltaik & Speicher", bentoComponent: 'reveal-icon', icon: Bot }
          ]}
        />
      </div>
      <div id="metrics" data-section="metrics">
        <MetricCardFourteen 
          title="Warum unsere Kunden wechseln" 
          tag="Ergebnisse"
          metrics={[
            { id: "missed", value: "40%", description: "Reduktion verpasster Leads" },
            { id: "revenue", value: "3.500 €", description: "Mehrumsatz/Monat pro Vertriebler" },
            { id: "growth", value: "+25%", description: "Steigerung der Terminquote" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>
      <div id="faq" data-section="faq">
        <FaqDouble title="Häufige Fragen" description="Alles, was Sie über VoiceLinkAI wissen müssen." faqs={[
            { id: "1", title: "Ist die KI DSGVO-konform?", content: "Ja, unsere Server stehen in Deutschland und wir arbeiten zu 100% DSGVO-konform." },
            { id: "2", title: "Wie lange dauert die Einrichtung?", content: "Innerhalb von 1–2 Wochen sind Ihre persönlichen KI-Agenten einsatzbereit." },
            { id: "3", title: "Integriert es in mein CRM?", content: "Unsere Schnittstellen verbinden sich mit gängigen Tools wie Pipedrive, Salesforce und HubSpot." }
        ]} faqsAnimation="slide-up" textboxLayout="default" useInvertedBackground={false} />
      </div>
      <div id="bottom-cta" data-section="bottom-cta">
        <ContactSplit tag="Jetzt starten" title="Bereit für 24/7 Erreichbarkeit?" description="Sichern Sie sich Ihren Wettbewerbsvorteil im Solarmarkt mit VoiceLinkAI." background={{ variant: "sparkles-gradient" }} useInvertedBackground={true} mediaAnimation="slide-up" />
      </div>
      <div id="footer" data-section="footer">
        <FooterBaseCard 
          copyrightText="© 2025 VoiceLinkAI" 
          columns={[
            { title: "Produkt", items: [{ label: "Features", href: "#" }, { label: "Integrationen", href: "#" }, { label: "Preise", href: "#" }] },
            { title: "Unternehmen", items: [{ label: "Über uns", href: "/about" }, { label: "Karriere", href: "#" }, { label: "Kontakt", href: "/contact" }] },
            { title: "Rechtliches", items: [{ label: "Datenschutz", href: "#" }, { label: "Impressum", href: "/impressum" }] }
          ]} 
        />
      </div>
    </ThemeProvider>
  );
}