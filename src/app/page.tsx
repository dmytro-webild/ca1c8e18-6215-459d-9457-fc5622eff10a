"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Zap, Info } from 'lucide-react';

const navItems = [
  { name: "Home", id: "/" },
  { name: "About", id: "/about" },
  { name: "Contact", id: "/contact" },
  { name: "Services", id: "/services" }
];

export default function LandingPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline navItems={navItems} button={{ text: "Get Started", href: "/contact" }} />
      </div>
      <div id="hero" data-section="hero">
        <HeroBillboard title="KI-Agenten" description="Automatisierung für Solar" background={{ variant: "plain" }} />
      </div>
      <div id="problems" data-section="problems">
        <FeatureCardNineteen title="Probleme" description="Herausforderungen." textboxLayout="default" features={[]} useInvertedBackground={false} />
      </div>
      <div id="solution" data-section="solution">
        <TestimonialAboutCard tag="Lösung" title="Automation" description="Wir helfen dir." subdescription="." icon={Zap} videoSrc="https://www.youtube.com/watch?v=dQw4w9WgXcQ" useInvertedBackground={false} mediaAnimation="none" />
      </div>
      <div id="agents" data-section="agents">
        <FeatureBento title="Agenten" description="Agentenliste" animationType="blur-reveal" textboxLayout="default" useInvertedBackground={false} features={[]} />
      </div>
      <div id="howitworks" data-section="howitworks">
        <FeatureCardNineteen title="So funktioniert's" description="Schritt für Schritt." textboxLayout="default" features={[]} useInvertedBackground={false} />
      </div>
      <div id="about" data-section="about">
        <TestimonialAboutCard tag="Über uns" title="VoiceLinkAI" description="Expertise." subdescription="." icon={Info} videoSrc="https://www.youtube.com/watch?v=dQw4w9WgXcQ" useInvertedBackground={false} mediaAnimation="none" />
      </div>
      <div id="faq" data-section="faq">
        <FaqDouble title="FAQ" description="Fragen." faqs={[]} faqsAnimation="blur-reveal" textboxLayout="default" useInvertedBackground={false} />
      </div>
      <div id="bottom-cta" data-section="bottom-cta">
        <ContactSplit tag="CTA" title="Starte jetzt" description="Buche Gespräch." background={{ variant: "plain" }} useInvertedBackground={false} mediaAnimation="none" />
      </div>
      <div id="footer" data-section="footer">
        <FooterBaseCard columns={[]} />
      </div>
    </ThemeProvider>
  );
}