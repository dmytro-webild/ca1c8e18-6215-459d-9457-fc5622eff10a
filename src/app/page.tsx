"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { AlertCircle, Bot, HelpCircle, Info, Lightbulb, Rocket, Sparkles, Workflow, Zap } from 'lucide-react';

export default function LandingPage() {
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
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Probleme", id: "problems" },
            { name: "Unsere Agenten", id: "agents" },
            { name: "So funktioniert's", id: "howitworks" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{
            text: "👉 Kostenloses Erstgespräch",            href: "https://calendly.com/voicelinkai/info"
          }}
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
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-modern-sleek-software-dashboard-interf-1774010018435-0a6597cd.png"
          imageAlt="VoiceLinkAI Solar Dashboard"
          mediaAnimation="blur-reveal"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="Was unsere KI-Agenten erreichen"
          tag="Bewährte Ergebnisse"
          tagAnimation="blur-reveal"
          metrics={[
            { id: "1", value: "24/7", description: "Erreichbarkeit für deine Kunden" },
            { id: "2", value: "< 30 Sek.", description: "Reaktionszeit auf jede Anfrage" },
            { id: "3", value: "120+", description: "Stunden pro Monat gespart" },
            { id: "4", value: "100%", description: "DSGVO-konform" }
          ]}
          metricsAnimation="blur-reveal"
          useInvertedBackground={true}
        />
      </div>

      <div id="problems" data-section="problems">
        <FeatureCardNineteen
          title="Was dich täglich Kapazität und Nerven kostet"
          description="Die sechs größten Zeitfresser in Solarunternehmen – und wie unsere KI-Agenten sie beheben"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Erkenne die Probleme"
          tagIcon={AlertCircle}
          tagAnimation="blur-reveal"
          features={[
            {
              id: 1,
              tag: "Telefonverkehr",              title: "Dein Telefon klingelt – und du weißt schon worum es geht",              subtitle: "Routineaufrufe kosten kostbare Zeit",              description: "Wie ist der Stand meiner Anlage? Wann kommt der Techniker? Ich bekomme keine Einspeisevergütung. Dieselben Fragen, zehnmal am Tag. Deine Mitarbeiter beantworten Routineanrufe, statt auf dem Dach zu stehen.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-illustration-showing-a-frustrated-sol-1774010017180-ab16cf36.png"
            },
            {
              id: 2,
              tag: "Terminkoordination",              title: "Terminkoordination frisst Stunden",              subtitle: "Manuelle Abstimmung ist ineffizient",              description: "Aufmaßtermin abstimmen, Installationstermin koordinieren, Wartungseinsatz einplanen – alles manuell. Drei E-Mails hin und her, zwei Rückrufe, einmal falsch eingetragen. Bei jedem einzelnen Auftrag.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-illustration-depicting-the-complexity-1774010017922-56bddc49.png"
            },
            {
              id: 3,
              tag: "Anfragenverwaltung",              title: "Anfragen bleiben tagelang liegen",              subtitle: "Überforderte Teams verlieren Geschäfte",              description: "Du hast mehr Anfragen als du bearbeiten kannst – aber die, die reinkommen, warten trotzdem 2–3 Tage. Der Interessent hat in der Zwischenzeit bereits bei der Konkurrenz unterschrieben.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-overflowing-inbox-visualization-showi-1774010017112-e64754b3.png"
            },
            {
              id: 4,
              tag: "Verwaltung",              title: "Jede Anlage bedeutet Berge an Verwaltung",              subtitle: "Papierkram nimmt überhand",              description: "Netzanmeldung, Marktstammdatenregister, BAFA-Antrag, Aufmaßbogen, Angebot, Auftragsbestätigung, Abnahmeprotokoll – für jede einzelne Anlage.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-visualization-of-excessive-paperwork-a-1774010019993-3cfe0bc8.png"
            },
            {
              id: 5,
              tag: "Nachfassen",              title: "Offene Angebote, die niemand nachfasst",              subtitle: "Verlorene Geschäftschancen",              description: "Du hast dutzende offene Angebote im System. Wer ist noch interessiert? Wer wartet seit zwei Wochen auf eine Nachfrage, die nie kam? Nachfassen passiert nur, wenn Zeit bleibt – und Zeit bleibt nie.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-illustration-showing-circular-loops-a-1774010017196-ba997d78.png"
            },
            {
              id: 6,
              tag: "Fachkräfte",              title: "Fachkräftemangel trifft dich doppelt",              subtitle: "Gute Mitarbeiter verschwenden Zeit",              description: "Du findest kaum gutes Personal – und die Mitarbeiter die du hast, verbringen 40% ihrer Zeit mit Aufgaben, die kein Mensch erledigen müsste. Das ist kein Personalproblem. Das ist ein Prozessproblem.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-illustration-showing-skilled-solar-te-1774010017383-a52df022.png"
            }
          ]}
        />
      </div>

      <div id="solution" data-section="solution">
        <TestimonialAboutCard
          tag="Unsere Lösung"
          tagIcon={Sparkles}
          tagAnimation="blur-reveal"
          title="KI-Agenten, die die Arbeit übernehmen"
          description="Damit dein Team das tut, wofür es wirklich gebraucht wird."
          subdescription="Wir bauen keine Software, die du dir selbst zusammenklicken musst. Wir liefern fertige KI-Agenten, die direkt in deinen Betrieb integriert werden – abgestimmt auf die konkreten Abläufe eines Solarunternehmens. Drei Agenten. Drei der größten Zeitfresser – automatisiert."
          icon={Zap}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-sophisticated-diagram-showing-seamless-1774010017346-e1338d62.png"
          imageAlt="Solution Integration"
          mediaAnimation="blur-reveal"
          useInvertedBackground={true}
        />
      </div>

      <div id="agents" data-section="agents">
        <ProductCardThree
          title="Die 3 KI-Agenten für dein Solarunternehmen"
          description="Jeder Agent automatisiert einen der größten Zeitfresser – speziell trainiert auf die Anforderungen von Solarunternehmen."
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Unsere Agenten"
          tagIcon={Bot}
          tagAnimation="blur-reveal"
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          carouselMode="buttons"
          products={[
            {
              id: "agent-1",              name: "KI-Telefonassistent",              price: "Dein Team ist auf dem Dach",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-modern-illustration-of-an-ai-voice-ass-1774010018958-c4a7e817.png",              imageAlt: "KI-Telefonassistent",              priceButtonProps: { text: "Mehr erfahren", href: "https://calendly.com/voicelinkai/info" }
            },
            {
              id: "agent-2",              name: "KI-Buchungsagent",              price: "Termine buchen sich selbst",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-booking-and-scheduling-interface-showi-1774010018912-03800597.png",              imageAlt: "KI-Buchungsagent",              priceButtonProps: { text: "Mehr erfahren", href: "https://calendly.com/voicelinkai/info" }
            },
            {
              id: "agent-3",              name: "KI-Chat-Agent",              price: "Website-Besucher werden zu Leads",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-website-chat-interface-showing-ai-chat-1774010018721-a0024f4c.png",              imageAlt: "KI-Chat-Agent",              priceButtonProps: { text: "Mehr erfahren", href: "https://calendly.com/voicelinkai/info" }
            }
          ]}
        />
      </div>

      <div id="howitworks" data-section="howitworks">
        <FeatureCardNineteen
          title="In 3 Schritten zu deinem KI-Agenten"
          description="Von der Analyse deiner Abläufe bis zur Live-Schaltung – wir begleiten dich durch den gesamten Prozess"
          textboxLayout="default"
          useInvertedBackground={true}
          tag="Unser Prozess"
          tagIcon={Workflow}
          tagAnimation="blur-reveal"
          features={[
            {
              id: 1,
              tag: "Schritt 1",              title: "Analyse deiner Abläufe",              subtitle: "Gemeinsame Bestandsaufnahme",              description: "Wir schauen gemeinsam, wo bei dir täglich die meiste Zeit verloren geht. Welche Anrufe kommen am häufigsten? Wie läuft deine Terminkoordination? Auf dieser Basis bauen wir deinen Agenten – nicht auf einer Vorlage, sondern auf deinen echten Prozessen.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-consultation-meeting-visualization-sho-1774010019320-185e5975.png"
            },
            {
              id: 2,
              tag: "Schritt 2",              title: "Training & Integration",              subtitle: "Spezifisch für dein Unternehmen",              description: "Wir trainieren den Agenten auf deine Produkte, typische Kundenfragen, Förderdetails und deine Sprache. Parallel integrieren wir ihn in dein CRM und deinen Kalender. Du musst nichts selbst einrichten.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/technical-integration-and-training-proce-1774010017773-f39f60ac.png"
            },
            {
              id: 3,
              tag: "Schritt 3",              title: "Live & optimieren",              subtitle: "Start meist in 1–2 Wochen",              description: "Dein Agent geht live – meist innerhalb von 1–2 Wochen nach dem Onboarding. Wir begleiten den Start, werten die ersten Gespräche aus und optimieren kontinuierlich.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-launch-and-optimization-moment-showing-1774010019600-abe6736b.png"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Über VoiceLinkAI"
          tagIcon={Info}
          tagAnimation="blur-reveal"
          title="Wir bauen fertige KI-Agenten für Solarunternehmen"
          description="Kein Baukasten. Keine Plattform. Keine Eigenarbeit."
          subdescription="Wir entwickeln fertige, einsatzbereite KI-Agenten für Solarunternehmen – kein Baukasten, keine Plattform, keine Eigenarbeit. Wir wissen, dass du keine Zeit hast, dich monatelang mit Softwareeinführungen zu beschäftigen. Deshalb übernehmen wir alles: Konzeption, Training auf deine Abläufe und Produkte, technische Integration in dein CRM und deinen Kalender, und laufende Optimierung. Unsere Kunden sind Solarunternehmen mit 3 bis 50 Mitarbeitern, die in der Auftragsspitze nicht zusammenbrechen wollen – und deren Team endlich wieder Zeit für die eigentliche Arbeit haben soll."
          icon={Lightbulb}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-diverse-team-of-ai-specialists-solar-i-1774010018835-1f0ee5d9.png"
          imageAlt="About Team"
          mediaAnimation="blur-reveal"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Häufige Fragen"
          description="Alles, was du über unsere KI-Agenten wissen musst"
          textboxLayout="default"
          useInvertedBackground={true}
          tag="FAQ"
          tagIcon={HelpCircle}
          tagAnimation="blur-reveal"
          faqsAnimation="blur-reveal"
          faqs={[
            {
              id: "1",              title: "Haben wir als Solarunternehmen nicht schon genug Anfragen – wozu brauchen wir KI?",              content: "Genau deshalb. Unsere Agenten sind nicht dafür da, noch mehr Anfragen zu generieren – sie sind dafür da, die Anfragen die du bereits hast schneller und professioneller zu bearbeiten, deinen After-Sales zu entlasten und deine Terminkoordination zu automatisieren. Das Ziel ist mehr Kapazität, nicht mehr Leads."
            },
            {
              id: "2",              title: "Was genau macht der Agent – und was nicht?",              content: "Der Agent übernimmt alle Routineaufgaben: Anrufe entgegennehmen, Standardfragen beantworten, Termine buchen, Interessenten qualifizieren. Komplexe Beratung, technische Problemlösung vor Ort und persönliche Kundenbeziehungen bleiben bei deinem Team."
            },
            {
              id: "3",              title: "Versteht der Agent auch Solarfachbegriffe?",              content: "Ja – weil wir ihn darauf trainieren. VNB-Anmeldung, Marktstammdatenregister, Einspeisevergütung, Wechselrichter, Speichersysteme, BAFA, Wallbox-Integration – dein Agent versteht die Sprache deiner Branche und deiner Kunden."
            },
            {
              id: "4",              title: "Wie schnell ist der Agent einsatzbereit?",              content: "In der Regel innerhalb von 1–2 Wochen nach dem Onboarding. Wir arbeiten effizient, damit du schnell Ergebnisse siehst."
            },
            {
              id: "5",              title: "Was kostet das?",              content: "Die Investition hängt davon ab, welche Agenten du einsetzt und wie komplex deine Prozesse sind. In einem kostenlosen Erstgespräch analysieren wir gemeinsam, welcher Agent den größten Hebel für dich hat – und was das konkret kostet."
            },
            {
              id: "6",              title: "Funktioniert das auch bei uns mit nur 5 Mitarbeitern?",              content: "Gerade dann. Kleine Teams spüren den Druck durch Routineaufgaben am stärksten. Ein KI-Agent ist wie ein zusätzlicher Mitarbeiter für alle Aufgaben, die keinen Menschen brauchen – ohne Personalkosten, ohne Einarbeitung."
            }
          ]}
        />
      </div>

      <div id="closing-cta" data-section="closing-cta">
        <ContactSplit
          tag="Bereit für Veränderung?"
          title="Dein Team sollte Anlagen bauen – nicht Anrufe beantworten"
          description="Lass uns gemeinsam herausfinden, wo bei dir täglich die meiste Zeit verloren geht – und welcher KI-Agent das ändert. Kostenlos, unverbindlich, direkt auf dein Unternehmen zugeschnitten."
          tagIcon={Rocket}
          tagAnimation="blur-reveal"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-inspiring-visualization-showing-a-sol-1774010018283-dee187fe.png"
          imageAlt="Closing CTA"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          inputPlaceholder="deine@email.de"
          buttonText="👉 Jetzt kostenlose Prozessanalyse buchen"
          termsText="Durch das Klicken auf den Button stimmst du zu, dass du auf die Calendly-Seite weitergeleitet wirst."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="VoiceLinkAI"
          columns={[
            {
              title: "Produkt",              items: [
                { label: "KI-Telefonassistent", href: "#agents" },
                { label: "KI-Buchungsagent", href: "#agents" },
                { label: "KI-Chat-Agent", href: "#agents" }
              ]
            },
            {
              title: "Unternehmen",              items: [
                { label: "Über uns", href: "#about" },
                { label: "So funktioniert's", href: "#howitworks" },
                { label: "Kontakt", href: "#closing-cta" }
              ]
            },
            {
              title: "Rechtliches",              items: [
                { label: "Impressum", href: "#" },
                { label: "Datenschutz", href: "#" },
                { label: "AGB", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 VoiceLinkAI. Diese Website steht in keiner Verbindung zu Facebook, Google oder Meta Platforms, Inc."
        />
      </div>
    </ThemeProvider>
  );
}