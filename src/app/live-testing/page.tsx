"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import { Sparkles, PlayCircle, Mic, CalendarDays, MessageCircle, Database } from 'lucide-react';
import React from 'react';

const consistentNavItems = [
  { name: "Home", id: "/" },
  { name: "Probleme", id: "/#problems" },
  { name: "Agenten", id: "/#agents" },
  { name: "So funktioniert's", id: "/#howitworks" },
  { name: "Live Testing", id: "/live-testing" },
  { name: "FAQ", id: "/#faq" },
  { name: "Über uns", id: "/uber-uns" },
  { name: "VoiceLinkAI", id: "/about" },
  { name: "Services", id: "/services" },
  { name: "Kontakt", id: "/contact" }
];


export default function LiveTestingPage() {
  return (
    <>
      
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
        {/* Picture over navigation bar */}
        <div className="relative w-full bg-[#0a0f1e] py-2 flex justify-end px-4">
          <img
            src="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/uploaded-1774610235649-b1wh8qy6.png"
            alt="VoiceLinkAI Logo"
            className="h-12 w-auto object-contain"
          />
        </div>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={consistentNavItems}
            button={{ text: "Kostenloses Erstgespräch", href: "https://calendly.com/voicelinkai/info" }}
            brandName="🤖 VoiceLinkAI"
          />
        </div>

        <div id="live-testing-hero" data-section="live-testing-hero">
          <FeatureCardMedia
            title="Erlebe unsere KI-Agenten live in Aktion"
            description="Verfolge in Echtzeit, wie unsere Agenten Anrufe bearbeiten, Termine buchen und Leads qualifizieren. Transparenz, Performance und Kontrolle – alles auf einen Blick."
            textboxLayout="default"
            useInvertedBackground={true}
            tag="Live Testing"
            tagIcon={PlayCircle}
            tagAnimation="blur-reveal"
            animationType="blur-reveal"
            features={[
              {
                id: "1",                title: "Echtzeit-Anrufsimulation",                description: "Höre, wie unser Agent einen Kundenanruf bearbeitet und Anfragen löst.",                tag: "Anrufsimulation",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-microphone-icon-with-sound-waves-in-t-1774010018042-5f65a12d.png",                imageAlt: "Microphone icon"
              },
              {
                id: "2",                title: "Automatisierte Terminbuchung",                description: "Beobachte, wie ein Terminvorschlag erfolgreich in den Kalender eingetragen wird.",                tag: "Terminbuchung",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-calendar-icon-with-a-check-mark-to-sy-1774010019010-38439366.png",                imageAlt: "Calendar icon with check mark"
              },
              {
                id: "3",                title: "Lead-Qualifizierung im Chat",                description: "Sieh dir an, wie der Agent relevante Informationen von Interessenten sammelt.",                tag: "Lead-Qualifizierung",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-chat-bubble-icon-with-a-question-mark-1774010017163-9533f8e0.png",                imageAlt: "Chat bubble icon"
              },
              {
                id: "4",                title: "Datenintegration ins CRM",                description: "Verfolge, wie die gesammelten Daten direkt in euer System übertragen werden.",                tag: "Datenintegration",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-database-icon-representing-data-integr-1774010017415-430c6b16.png",                imageAlt: "Database icon"
              }
            ]}
          />
        </div>
      </ThemeProvider>
    </>
  );
}
