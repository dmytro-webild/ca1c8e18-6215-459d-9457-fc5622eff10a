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
import { Zap, Info, Bot, Headset, Settings, BarChart, Phone, Clock, TrendingDown, Sun, CheckCircle, ShieldCheck } from 'lucide-react';

const navItems = [
  { name: "Home", id: "/" },
  { name: "About", id: "/about" },
  { name: "Agents", id: "/agents" },
  { name: "Contact", id: "/contact" }
];

export default function LandingPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="reveal-blur" borderRadius="pill" contentWidth="medium" sizing="medium" background="noiseDiagonalGradient" cardStyle="glass-elevated" primaryButtonStyle="primary-glow" secondaryButtonStyle="glass" headingFontWeight="semibold">
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline navItems={navItems} button={{ text: "Get Started", href: "/contact" }} />
      </div>
      <div id="hero" data-section="hero">
        <HeroBillboard title="VoiceLinkAI: Next-Gen Solar Automation" description="Deploy hyper-intelligent AI agents that handle lead qualification, appointment booking, and customer support 24/7. Built specifically for solar installers." background={{ variant: "sparkles-gradient" }} />
      </div>
      <div id="pain" data-section="pain">
        <FeatureCardNineteen title="The Solar Bottleneck" description="Your team is trapped in admin tasks instead of closing deals." textboxLayout="default" features={[
            { id: 1, tag: "Problem", title: "Lead Response Time", subtitle: "Slow response kills conversion", description: "Waiting hours to call back leads means your competitors win." },
            { id: 2, tag: "Problem", title: "Appointment Chaos", subtitle: "Manual scheduling overhead", description: "Staff spends hours on the phone coordinating calendars instead of selling." },
            { id: 3, tag: "Problem", title: "Support Burdens", subtitle: "Repetitive customer queries", description: "High call volume distracts your team from complex installations." }
        ]} useInvertedBackground={true} />
      </div>
      <div id="solution" data-section="solution">
        <TestimonialAboutCard tag="The Solution" title="Intelligent AI Agents" description="VoiceLinkAI integrates directly with your existing CRM to automate your entire communication workflow." subdescription="Our models understand solar terminology, project nuances, and local regulations." icon={Bot} videoSrc="https://www.youtube.com/watch?v=dQw4w9WgXcQ&_wi=1" useInvertedBackground={false} mediaAnimation="blur-reveal" />
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
      <div id="agents" data-section="agents">
        <FeatureBento title="What We Automate" description="Specialized agents for every part of your business." animationType="slide-up" textboxLayout="split-description" useInvertedBackground={true} features={[
            { title: "Customer Outreach", description: "Instant callbacks for new leads", bentoComponent: 'reveal-icon', icon: Headset },
            { title: "Smart Booking", description: "Real-time calendar management", bentoComponent: 'reveal-icon', icon: Settings },
            { title: "Analytics", description: "Real-time dashboard for agent performance", bentoComponent: 'reveal-icon', icon: BarChart }
        ]} />
      </div>
      <div id="howitworks" data-section="howitworks">
        <FeatureCardNineteen title="Fast Deployment" description="Get started in 3 simple steps." textboxLayout="split" features={[
            { id: 1, tag: "Step 1", title: "Discovery", subtitle: "Define your needs", description: "We map your current sales process." },
            { id: 2, tag: "Step 2", title: "Integration", subtitle: "Connect your tools", description: "API integration with your CRM and calendar." },
            { id: 3, tag: "Step 3", title: "Deployment", subtitle: "Go live", description: "Our agents start handling your leads immediately." }
        ]} useInvertedBackground={false} />
      </div>
      <div id="metrics" data-section="metrics">
        <MetricCardFourteen 
          title="VoiceLinkAI – Impact Summary" 
          tag="Performance"
          metrics={[
            { id: "missed", value: "38%", description: "Missed calls reduced" },
            { id: "revenue", value: "4.200 €", description: "Monthly lost revenue recovered" },
            { id: "growth", value: "+31%", description: "Increased revenue with AI agents" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>
      <div id="about" data-section="about">
        <TestimonialAboutCard tag="About Us" title="VoiceLinkAI" description="We are solar automation specialists building tools to empower installers to scale faster than ever." subdescription="Our engineers work alongside solar industry experts." icon={Info} imageSrc="https://images.unsplash.com/photo-1509391366560-2aa8c3632568?q=80&w=1000" useInvertedBackground={true} mediaAnimation="opacity" />
      </div>
      <div id="faq" data-section="faq">
        <FaqDouble title="Common Questions" description="Get the answers you need to get started." faqs={[
            { id: "1", title: "Is it GDPR compliant?", content: "Yes, all our data processing is fully GDPR compliant." },
            { id: "2", title: "How fast can we set it up?", content: "We can usually have your agents live within 1–2 weeks." },
            { id: "3", title: "Does it integrate with existing CRM?", content: "Yes, we integrate with all major CRM platforms." }
        ]} faqsAnimation="slide-up" textboxLayout="default" useInvertedBackground={false} />
      </div>
      <div id="bottom-cta" data-section="bottom-cta">
        <ContactSplit tag="Final CTA" title="Ready to scale your solar business?" description="Join the future of solar installation automation." background={{ variant: "sparkles-gradient" }} useInvertedBackground={true} mediaAnimation="slide-up" />
      </div>
      <div id="footer" data-section="footer">
        <FooterBaseCard columns={[{ title: "Product", items: [{ label: "Agents", href: "/agents" }, { label: "Pricing", href: "/pricing" }] }, { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Legal", href: "/impressum" }] }]} copyrightText="© 2025 VoiceLinkAI. All rights reserved." />
      </div>
    </ThemeProvider>
  );
}