"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import { Zap, Bot, Info, HelpCircle, Rocket } from 'lucide-react';

const navItems = [
  { name: "Home", id: "#hero" },
  { name: "Probleme", id: "#problems" },
  { name: "Agenten", id: "#agents" },
  { name: "So funktioniert's", id: "#howitworks" },
  { name: "FAQ", id: "#faq" },
  { name: "Kontakt", id: "#bottom-cta" }
];

export default function LandingPage() {
  return (
    <ThemeProvider>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={navItems}
          brandName="VoiceLinkAI"
          button={{ text: "Kostenloses Erstgespräch", href: "#bottom-cta" }}
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroBillboard title="KI-Agenten für Solarunternehmen" description="Wir automatisieren deine Routineaufgaben." />
      </div>
      <div id="problems" data-section="problems">
        <FeatureCardNineteen title="Deine Herausforderungen" features={[]} textboxLayout="default" />
      </div>
      <div id="solution" data-section="solution">
        <TestimonialAboutCard tag="Lösung" title="Intelligente Automation" description="Wir übernehmen deine Routineaufgaben." subdescription="." icon={Zap} imageSrc="/placeholder.png" />
      </div>
      <div id="agents" data-section="agents">
        <FeatureBento title="Unsere Agenten" description="Drei spezialisierte Agenten." animationType="blur-reveal" textboxLayout="default" useInvertedBackground={false} features={[]} />
      </div>
      <div id="howitworks" data-section="howitworks">
        <FeatureCardNineteen title="So funktioniert's" features={[]} textboxLayout="default" />
      </div>
      <div id="about" data-section="about">
        <TestimonialAboutCard tag="Über uns" title="VoiceLinkAI" description="Wir lieben Solarenergie." subdescription="." icon={Info} imageSrc="/placeholder.png" />
      </div>
      <div id="faq" data-section="faq">
        <FaqDouble title="Häufige Fragen" faqs={[]} faqsAnimation="blur-reveal" textboxLayout="default" />
      </div>
      <div id="bottom-cta" data-section="bottom-cta">
        <ContactSplit tag="Starten" title="Bereit für Veränderung?" description="Buche dein Erstgespräch." />
      </div>
      <div id="footer" data-section="footer">
        <FooterBaseCard columns={[]} />
      </div>
    </ThemeProvider>
  );
}