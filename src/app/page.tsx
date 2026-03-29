"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Info, Bot, Headset, Settings, BarChart, Phone, Clock, TrendingDown, Zap, BarChart3, CheckCircle } from 'lucide-react';

const navItems = [
  { name: "Home", id: "/" },
  { name: "Über uns", id: "/about" },
  { name: "Agenten", id: "/agents" },
  { name: "Kontakt", id: "/contact" }
];

export default function LandingPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="reveal-blur" borderRadius="pill" contentWidth="medium" sizing="medium" background="noiseDiagonalGradient" cardStyle="glass-elevated" primaryButtonStyle="primary-glow" secondaryButtonStyle="glass" headingFontWeight="semibold">
      <div id="nav" data-section="nav" className="bg-[#0a0f1e] text-white">
        <NavbarLayoutFloatingInline navItems={navItems} button={{ text: "Starten", href: "/contact" }} />
      </div>
      <div id="hero" data-section="hero" className="bg-[#0a0f1e] text-white">
        <HeroBillboard title="VoiceLinkAI: Solar-Automation der nächsten Generation" description="Setzen Sie hyper-intelligente KI-Agenten ein, die 24/7 die Lead-Qualifizierung, Terminbuchung und Kundenbetreuung übernehmen. Speziell entwickelt für Solarunternehmen." background={{ variant: "sparkles-gradient" }} />
      </div>
      <div id="product-visual" data-section="product-visual" className="bg-[#0a0f1e] text-white">
        <FeatureBento 
          title="VoiceLinkAI Infografik: Leistung im Vergleich"
          description="Erleben Sie den Unterschied zwischen manuellem Workflow und vollautomatisierter KI-Agentur-Unterstützung."
          animationType="slide-up"
          textboxLayout="split-description"
          useInvertedBackground={true}
          features={[
            { title: "Ohne VoiceLinkAI", description: "Reaktionszeiten von > 2 Stunden, hohe Abbruchraten, manuelle Admin-Last.", bentoComponent: '3d-task-list', title: "Manueller Betrieb", items: [{ icon: Clock, label: "Reaktionszeit > 2h", time: "Slow" }, { icon: Settings, label: "Admin-Aufwand", time: "Hoch" }, { icon: Phone, label: "Lead-Verlust", time: "Riskant" }] },
            { title: "Mit VoiceLinkAI", description: "Reaktionszeit in Sekunden, 24/7 Präsenz, CRM-Integration, volle Automatisierung.", bentoComponent: '3d-task-list', title: "KI-gestützte Performance", items: [{ icon: Zap, label: "Reaktionszeit < 5s", time: "Instant" }, { icon: BarChart3, label: "Admin-Aufwand", time: "Zero" }, { icon: CheckCircle, label: "Lead-Qualifizierung", time: "Automated" }] }
          ]}
        />
      </div>
      <div id="metrics" data-section="metrics" className="bg-[#0a0f1e] text-white">
        <MetricCardFourteen 
          title="VoiceLinkAI – Kein Anruf bleibt mehr unbeantwortet." 
          tag="Impact"
          metrics={[
            { id: "missed", value: "38%", description: "Reduzierte verpasste Anrufe" },
            { id: "revenue", value: "4.200 €", description: "Monatlich zurückgewonnener Umsatz" },
            { id: "growth", value: "+31%", description: "Umsatzwachstum durch KI-Agenten" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>
      <div id="problems" data-section="problems" className="bg-[#0a0f1e] text-white">
        <FeatureCardNineteen title="Der Solar-Flaschenhals" description="Ihr Team verliert wertvolle Zeit mit Admin-Aufgaben statt Verkaufsabschlüssen." textboxLayout="default" features={[
            { id: 1, tag: "Problem", title: "Reaktionszeit", subtitle: "Langsames Handeln mindert Konversion", description: "Lange Wartezeiten bei Leads führen oft zur Konkurrenz." },
            { id: 2, tag: "Problem", title: "Termin-Chaos", subtitle: "Manueller Organisationsaufwand", description: "Stundenlanges Kalender-Ping-Pong statt aktiver Vertrieb." },
            { id: 3, tag: "Problem", title: "Support-Last", subtitle: "Wiederkehrende Kundenanfragen", description: "Hohes Anrufaufkommen blockiert Ihre Techniker." }
        ]} useInvertedBackground={true} />
      </div>
      <div id="solution" data-section="solution" className="bg-[#0a0f1e] text-white">
        <TestimonialAboutCard tag="Die Zukunft der Solar-Branche" title="Intelligente KI-Agenten" description="VoiceLinkAI lässt sich direkt in Ihr CRM integrieren und automatisiert Ihre gesamte Kommunikation." subdescription="Unsere Modelle verstehen Fachbegriffe der Solarindustrie, Projektnuancen und regulatorische Vorgaben." icon={Bot} imageSrc="https://images.unsplash.com/photo-1574807583823-3112a2080a2d?q=80&w=1000" useInvertedBackground={false} mediaAnimation="blur-reveal" />
      </div>
      <div id="agents" data-section="agents" className="bg-[#0a0f1e] text-white">
        <FeatureBento title="Was wir automatisieren" description="Spezialisierte Agenten für jeden Bereich Ihres Unternehmens." animationType="slide-up" textboxLayout="split-description" useInvertedBackground={true} features={[
            { title: "Kundenaquise", description: "Sofortige Rückrufe für neue Leads", bentoComponent: 'reveal-icon', icon: Headset },
            { title: "Intelligente Buchung", description: "Echtzeit-Kalenderverwaltung", bentoComponent: 'reveal-icon', icon: Settings },
            { title: "Analytik", description: "Live-Dashboard für Agenten-Performance", bentoComponent: 'reveal-icon', icon: BarChart }
        ]} />
      </div>
      <div id="howitworks" data-section="howitworks" className="bg-[#0a0f1e] text-white">
        <FeatureCardNineteen title="Schnelle Implementierung" description="In 3 einfachen Schritten startklar." textboxLayout="split" features={[
            { id: 1, tag: "Schritt 1", title: "Analyse", subtitle: "Bedarf ermitteln", description: "Wir erfassen Ihren gesamten Verkaufsprozess." },
            { id: 2, tag: "Schritt 2", title: "Integration", subtitle: "Tools verbinden", description: "API-Verknüpfung mit CRM und Kalender." },
            { id: 3, tag: "Schritt 3", title: "Deployment", subtitle: "Go-Live", description: "Ihre Agenten übernehmen sofort die Lead-Betreuung." }
        ]} useInvertedBackground={false} />
      </div>
      <div id="about" data-section="about" className="bg-[#0a0f1e] text-white">
        <TestimonialAboutCard tag="Über uns" title="VoiceLinkAI" description="Wir sind Spezialisten für Solar-Automatisierung und entwickeln Tools, damit Installateure schneller skalieren können als je zuvor." subdescription="Unsere Entwickler arbeiten eng mit Branchenexperten zusammen." icon={Info} imageSrc="https://images.unsplash.com/photo-1509391366560-2aa8c3632568?q=80&w=1000" useInvertedBackground={true} mediaAnimation="opacity" />
      </div>
      <div id="faq" data-section="faq" className="bg-[#0a0f1e] text-white">
        <FaqDouble title="Häufige Fragen" description="Antworten für Ihren schnellen Start." faqs={[
            { id: "1", title: "Ist alles DSGVO-konform?", content: "Ja, die gesamte Datenverarbeitung entspricht strikt der DSGVO." },
            { id: "2", title: "Wie schnell erfolgt die Einrichtung?", content: "Ihre KI-Agenten sind meist innerhalb von 1–2 Wochen einsatzbereit." }
        ]} faqsAnimation="slide-up" textboxLayout="default" useInvertedBackground={false} />
      </div>
      <div id="bottom-cta" data-section="bottom-cta" className="bg-[#0a0f1e] text-white">
        <ContactSplit tag="Kontakt" title="Bereit für die Solar-Skalierung?" description="Gestalten Sie die Zukunft der Solar-Automatisierung." background={{ variant: "sparkles-gradient" }} useInvertedBackground={true} mediaAnimation="slide-up" />
      </div>
      <div id="footer" data-section="footer" className="bg-[#0a0f1e] text-white">
        <FooterBaseCard columns={[{ title: "Produkt", items: [{ label: "Agenten", href: "#" }] }, { title: "Unternehmen", items: [{ label: "Über uns", href: "/about" }, { label: "Rechtliches", href: "/impressum" }] }]} copyrightText="© 2025 VoiceLinkAI. Alle Rechte vorbehalten." />
      </div>
    </ThemeProvider>
  );
}
