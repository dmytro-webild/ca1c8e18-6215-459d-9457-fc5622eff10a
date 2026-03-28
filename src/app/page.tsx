"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import { AlertCircle, Bot, HelpCircle, Info, Lightbulb, Rocket, Sparkles, Workflow, Zap, MessageSquare, TrendingUp, Shield, CheckCircle, Headphones, Calendar, Phone } from 'lucide-react';

const animatedBorderStyle = `
  [data-section] {
    border: 1px solid rgba(249, 115, 22, 0.3);
  }
`;

export default function LandingPage() {
  return (
    <>
      <style>{animatedBorderStyle}</style>
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
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Impressum", id: "impressum" },
              { name: "Probleme", id: "problems" },
              { name: "Agenten", id: "agents" },
              { name: "So funktioniert's", id: "howitworks" },
              { name: "FAQ", id: "faq" }
            ]}
            button={{ text: "Kostenloses Erstgespräch", href: "https://calendly.com/voicelinkai/info" }}
            brandName="VoicelinkSolarAi"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboard
            title="Voller Auftragskalender. Überlastetes Team. Kunden, die trotzdem warten."
            description="Die meisten Solarunternehmen haben kein Problem mit zu wenig Anfragen – sie haben ein Problem damit, sie ordentlich zu bearbeiten. Kunden warten tagelang auf Rückmeldung, dein Team versinkt in Routineaufgaben, und nach der Installation ruft jeder zweite Kunde wegen Kleinigkeiten an. Wir automatisieren genau diese Prozesse – mit KI-Agenten, die deinem Team die Arbeit abnehmen, die keinen Menschen braucht."
            background={{ variant: "radial-gradient" }}
            tag="KI-Automation für Solarunternehmen"
            tagIcon={Zap}
            tagAnimation="blur-reveal"
            buttons={[
              { text: "👉 Kostenloses Erstgespräch buchen", href: "https://calendly.com/voicelinkai/info" }
            ]}
            buttonAnimation="slide-up"
            avatars={[
              { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/professional-headshot-photo-of-a-friendl-1774010020721-9f765162.png", alt: "Zufriedener Kunde" },
              { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/professional-headshot-photo-of-a-solar-e-1774010016981-df83bd1d.png", alt: "Solarunternehmen Gründer" },
              { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/professional-headshot-photo-of-a-female--1774010022527-7f7e2a18.png", alt: "Team Lead" },
              { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/professional-headshot-photo-of-a-senior--1774010017132-8d1af2da.png", alt: "Geschäftsführer" }
            ]}
            avatarText="✓ DSGVO-konform  ✓ In 1–2 Wochen live  ✓ Keine IT-Kenntnisse nötig"
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-modern-sleek-software-dashboard-interf-1774010018435-0a6597cd.png?_wi=1"
            imageAlt="VoiceLinkAI Solar Dashboard"
            mediaAnimation="blur-reveal"
          />
        </div>
        
        <div id="impressum" data-section="impressum">
          <div className="w-full max-w-4xl mx-auto py-20 px-6 text-center">
            <div className="flex flex-col items-center gap-4">
              <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/uploaded-1774438142804-lhst1ilk.png" alt="VoiceLinkAI Logo" className="w-24 h-24" />
              <h2 className="text-3xl font-bold">VoiceLinkAI</h2>
              <p className="text-gray-400">Automatisierte KI-Prozesse für Solarunternehmen</p>
            </div>
          </div>
        </div>

        <div id="problems" data-section="problems">
          <FeatureCardNineteen
            title="Was dich täglich Kapazität und Nerven kostet"
            description="Die sechs größten Zeitfresser in Solarunternehmen"
            textboxLayout="default"
            useInvertedBackground={false}
            tag="Erkenne die Probleme"
            tagIcon={AlertCircle}
            tagAnimation="blur-reveal"
            features={[
              { id: 1, tag: "Telefonverkehr", title: "Dein Telefon klingelt", subtitle: "Routineaufrufe", description: "Wie ist der Stand meiner Anlage? Dieselben Fragen, zehnmal am Tag.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-illustration-showing-a-frustrated-sol-1774010017180-ab16cf36.png" }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="VoiceLinkAI"
            columns={[
              { title: "Produkt", items: [{ label: "KI-Telefonassistent", href: "#" }] },
              { title: "Unternehmen", items: [{ label: "Über uns", href: "#" }] },
              { title: "Rechtliches", items: [{ label: "Impressum", href: "#" }] }
            ]}
          />
        </div>
      </ThemeProvider>
    </>
  );
}
