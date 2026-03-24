"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import { Sparkles, PlayCircle, Mic, CalendarDays, MessageCircle, Database } from 'lucide-react';
import React from 'react';

const standardNavItems = [
  { name: "Home", id: "/" },
  { name: "Probleme", id: "/#problems" },
  { name: "Agenten", id: "/#agents" },
  { name: "So funktioniert's", id: "/#howitworks" },
  { name: "Live Testing", id: "/live-testing" },
  { name: "FAQ", id: "/#faq" },
  { name: "Über uns", id: "/uber-uns" },
  { name: "Services", id: "/services" },
  { name: "Kontakt", id: "/contact" }
];

const liveTestingSectionStyle = `
  @keyframes glowing-orange-pulse {
    0%, 100% {
      box-shadow: 0 0 8px rgba(249, 115, 22, 0.4), 0 0 12px rgba(249, 115, 22, 0.2), inset 0 0 8px rgba(249, 115, 22, 0.1);
      border-color: rgba(249, 115, 22, 0.5);
    }
    50% {
      box-shadow: 0 0 20px rgba(249, 115, 22, 0.7), 0 0 30px rgba(249, 115, 22, 0.4), inset 0 0 12px rgba(249, 115, 22, 0.2);
      border-color: rgba(249, 115, 22, 0.8);
    }
  }

  [data-section] {
    border: 1px solid rgba(249, 115, 22, 0.3);
    animation: glowing-orange-pulse 3.5s ease-in-out infinite;
  }
  /* Ensure other components also get some styling */
  [data-section] [class*="card"],
  [data-section] [class*="Card"],
  div[data-section] > div > [class*="card"],
  div[data-section] > div > [class*="Card"] {
    border: 1px solid rgba(249, 115, 22, 0.3);
    animation: glowing-orange-pulse 3.5s ease-in-out infinite;
  }
`;

export default function LiveTestingPage() {
  return (
    <>
      <style>{liveTestingSectionStyle}</style>
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
            navItems={standardNavItems}
            button={{ text: "Kostenloses Erstgespräch", href: "https://calendly.com/voicelinkai/info" }}
            brandName="VoiceLinkAI"
          />
        </div>

        <div id="live-testing-hero" data-section="live-testing-hero">
          <FeatureCardTwentySeven
            title="Erlebe unsere KI-Agenten live in Aktion"
            description="Verfolge in Echtzeit, wie unsere Agenten Anrufe bearbeiten, Termine buchen und Leads qualifizieren. Transparenz, Performance und Kontrolle – alles auf einen Blick."
            textboxLayout="default"
            useInvertedBackground={true}
            tag="Live Testing"
            tagIcon={PlayCircle}
            tagAnimation="blur-reveal"
            animationType="blur-reveal"
            gridVariant="two-items-per-row"
            features={[
              {
                id: "1",                title: "Echtzeit-Anrufsimulation",                description: "Höre, wie unser Agent einen Kundenanruf bearbeitet und Anfragen löst.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-microphone-icon-with-sound-waves-in-t-1774010018042-5f65a12d.png",                imageAlt: "Microphone icon"
              },
              {
                id: "2",                title: "Automatisierte Terminbuchung",                description: "Beobachte, wie ein Terminvorschlag erfolgreich in den Kalender eingetragen wird."                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-calendar-icon-with-a-check-mark-to-sy-1774010019010-38439366.png",                imageAlt: "Calendar icon with check mark"
              },
              {
                id: "3",                title: "Lead-Qualifizierung im Chat",                description: "Sieh dir an, wie der Agent relevante Informationen von Interessenten sammelt."                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-chat-bubble-icon-with-a-question-mark-1774010017163-9533f8e0.png",                imageAlt: "Chat bubble icon"
              },
              {
                id: "4",                title: "Datenintegration ins CRM",                description: "Verfolge, wie die gesammelten Daten direkt in euer System übertragen werden."                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-database-icon-representing-data-integr-1774010017415-430c6b16.png",                imageAlt: "Database icon"
              }
            ]}
          />
        </div>
      </ThemeProvider>
    </>
  );
}
