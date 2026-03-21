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
import FeatureBento from '@/components/sections/feature/FeatureBento';
import { AlertCircle, Bot, HelpCircle, Info, Lightbulb, Rocket, Sparkles, Workflow, Zap, MessageSquare, TrendingUp, Shield } from 'lucide-react';

const animatedBorderStyle = `
  @keyframes glowing-orange-pulse {
    0%, 100% {
      box-shadow: 0 0 8px rgba(255, 140, 0, 0.4), 0 0 12px rgba(255, 165, 0, 0.2), inset 0 0 8px rgba(255, 140, 0, 0.1);
      border-color: rgba(255, 140, 0, 0.5);
    }
    50% {
      box-shadow: 0 0 20px rgba(255, 140, 0, 0.7), 0 0 30px rgba(255, 165, 0, 0.4), inset 0 0 12px rgba(255, 140, 0, 0.2);
      border-color: rgba(255, 140, 0, 0.8);
    }
  }

  [data-section] {
    border: 1px solid rgba(255, 140, 0, 0.3);
    animation: glowing-orange-pulse 3.5s ease-in-out infinite;
  }

  [data-section] [class*="card"],
  [data-section] [class*="Card"],
  div[data-section] > div > [class*="card"],
  div[data-section] > div > [class*="Card"] {
    border: 1px solid rgba(255, 140, 0, 0.3);
    animation: glowing-orange-pulse 3.5s ease-in-out infinite;
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
              { name: "Probleme", id: "problems" },
              { name: "Agenten", id: "agents" },
              { name: "So funktioniert's", id: "howitworks" },
              { name: "FAQ", id: "faq" }
            ]}
            button={{ text: "Kostenloses Erstgespräch", href: "https://calendly.com/voicelinkai/info" }}
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
            title="VoiceLinkAI – Infografik zu Statistiken"
            tag="Professionelle Ergebnisse für Solarunternehmen"
            tagAnimation="blur-reveal"
            metrics={[
              { id: "1", value: "+31%", description: "Umsatzsteigerung mit KI-Agent" },
              { id: "2", value: "100%", description: "DSGVO-konform und sicher" },
              { id: "3", value: "+31%", description: "Effizienzsteigerung im Team" },
              { id: "4", value: "100%", description: "Automatisierte Prozesse" }
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
                tag: "Telefonverkehr",                title: "Dein Telefon klingelt – und du weißt schon worum es geht",                subtitle: "Routineaufrufe kosten kostbare Zeit",                description: "Wie ist der Stand meiner Anlage? Wann kommt der Techniker? Ich bekomme keine Einspeisevergütung. Dieselben Fragen, zehnmal am Tag. Deine Mitarbeiter beantworten Routineanrufe, statt auf dem Dach zu stehen.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-illustration-showing-a-frustrated-sol-1774010017180-ab16cf36.png"
              },
              {
                id: 2,
                tag: "Terminkoordination",                title: "Terminkoordination frisst Stunden",                subtitle: "Manuelle Abstimmung ist ineffizient",                description: "Aufmaßtermin abstimmen, Installationstermin koordinieren, Wartungseinsatz einplanen – alles manuell. Drei E-Mails hin und her, zwei Rückrufe, einmal falsch eingetragen. Bei jedem einzelnen Auftrag.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-illustration-depicting-the-complexity-1774010017922-56bddc49.png"
              },
              {
                id: 3,
                tag: "Anfragenverwaltung",                title: "Anfragen bleiben tagelang liegen",                subtitle: "Überforderte Teams verlieren Geschäfte",                description: "Du hast mehr Anfragen als du bearbeiten kannst – aber die, die reinkommen, warten trotzdem 2–3 Tage. Der Interessent hat in der Zwischenzeit bereits bei der Konkurrenz unterschrieben.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-overflowing-inbox-visualization-showi-1774010017112-e64754b3.png"
              },
              {
                id: 4,
                tag: "Verwaltung",                title: "Jede Anlage bedeutet Berge an Verwaltung",                subtitle: "Papierkram nimmt überhand",                description: "Netzanmeldung, Marktstammdatenregister, BAFA-Antrag, Aufmaßbogen, Angebot, Auftragsbestätigung, Abnahmeprotokoll – für jede einzelne Anlage.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-visualization-of-excessive-paperwork-a-1774010019993-3cfe0bc8.png"
              },
              {
                id: 5,
                tag: "Nachfassen",                title: "Offene Angebote, die niemand nachfasst",                subtitle: "Verlorene Geschäftschancen",                description: "Du hast dutzende offene Angebote im System. Wer ist noch interessiert? Wer wartet seit zwei Wochen auf eine Nachfrage, die nie kam? Nachfassen passiert nur, wenn Zeit bleibt – und Zeit bleibt nie.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-illustration-showing-circular-loops-a-1774010017196-ba997d78.png"
              },
              {
                id: 6,
                tag: "Fachkräfte",                title: "Fachkräftemangel trifft dich doppelt",                subtitle: "Gute Mitarbeiter verschwenden Zeit",                description: "Du findest kaum gutes Personal – und die Mitarbeiter die du hast, verbringen 40% ihrer Zeit mit Aufgaben, die kein Mensch erledigen müsste. Das ist kein Personalproblem. Das ist ein Prozessproblem.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-illustration-showing-skilled-solar-te-1774010017383-a52df022.png"
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
          <FeatureBento
            title="Die 3 KI-Agenten für dein Solarunternehmen"
            description="Jeder Agent automatisiert einen der größten Zeitfresser – speziell trainiert auf die Anforderungen von Solarunternehmen. Das KI-Chat-Agent wird als professionelle Produktvisualisierung mit Website-Mockup, Chat-Widget-Konversation und Live-Performance-Metriken präsentiert."
            textboxLayout="default"
            useInvertedBackground={false}
            tag="Unsere Agenten – welcher passt zu deinem Bottleneck?"
            tagIcon={Bot}
            tagAnimation="blur-reveal"
            animationType="blur-reveal"
            features={[
              {
                title: "KI-Telefonassistent",                description: "Dein Team ist auf dem Dach. Der Agent beantwortet Routineanrufe, bucht Termine und qualifiziert Interessenten – 24/7, ohne dass jemand abheben muss. 💡 Höchste ROI: Handles 60% of routine call volume, frees up 8-12 hours/week per employee.",                button: { text: "Mehr erfahren", href: "https://calendly.com/voicelinkai/info" },
                bentoComponent: "phone",                statusIcon: Zap,
                alertIcon: AlertCircle,
                alertTitle: "Agent aktiv",                alertMessage: "Bearbeitet eingehende Anrufe",                apps: [
                  { name: "Call Handler", icon: MessageSquare },
                  { name: "CRM Link", icon: Info },
                  { name: "Calendar", icon: Lightbulb },
                  { name: "Reports", icon: TrendingUp },
                  { name: "Security", icon: Shield },
                  { name: "Analytics", icon: TrendingUp },
                  { name: "Integration", icon: Zap },
                  { name: "Support", icon: HelpCircle }
                ]
              },
              {
                title: "KI-Buchungsagent",                description: "Termine buchen sich selbst. Der Agent koordiniert automatisch Aufmaßtermine, Installationen und Wartungen – direkt in deinen Kalender, ohne manuelle Abstimmung. 💡 ROI für große Teams: Eliminates 40% of scheduling back-and-forth emails.",                button: { text: "Mehr erfahren", href: "https://calendly.com/voicelinkai/info" },
                bentoComponent: "timeline",                heading: "Booking Timeline",                subheading: "Automated scheduling",                items: [
                  { label: "Customer Request", detail: "Inquiry received" },
                  { label: "Calendar Check", detail: "Availability verified" },
                  { label: "Booking Confirmed", detail: "Appointment scheduled" }
                ],
                completedLabel: "All steps optimized"
              },
              {
                title: "KI-Chat-Agent",                description: "Website-Besucher werden zu Leads. Der Agent qualifiziert Interessenten in Echtzeit, sammelt Daten und übergibt warme Leads an dein Team – mit vollständigen Projektinformationen. 💡 Best for lead generation: Converts 35% more website visitors into qualified inquiries.",                button: { text: "Mehr erfahren", href: "https://calendly.com/voicelinkai/info" },
                bentoComponent: "chat",                aiIcon: Bot,
                userIcon: MessageSquare,
                exchanges: [
                  {
                    userMessage: "Ich interessiere mich für eine Solaranlage für mein Einfamilienhaus",                    aiResponse: "Sehr gerne! Wie groß ist Ihr Dach ungefähr, und wie viel Strom verbrauchen Sie monatlich?"
                  },
                  {
                    userMessage: "Etwa 30qm nach Süden, Verbrauch ca. 4000kWh pro Jahr",                    aiResponse: "Perfekt! Das ist optimal für eine 8-10kW Anlage. Sollen wir einen kostenlosen Aufmaßtermin vereinbaren?"
                  },
                  {
                    userMessage: "Ja, gerne! Wann passt es denn?",                    aiResponse: "Nächste Woche? Montag oder Dienstag, morgens oder nachmittags?"
                  }
                ],
                placeholder: "Geben Sie Ihre Frage ein..."
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
                tag: "Schritt 1",                title: "Analyse deiner Abläufe",                subtitle: "Gemeinsame Bestandsaufnahme",                description: "Wir schauen gemeinsam, wo bei dir täglich die meiste Zeit verloren geht. Welche Anrufe kommen am häufigsten? Wie läuft deine Terminkoordination? Auf dieser Basis bauen wir deinen Agenten – nicht auf einer Vorlage, sondern auf deinen echten Prozessen.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-consultation-meeting-visualization-sho-1774010019320-185e5975.png"
              },
              {
                id: 2,
                tag: "Schritt 2",                title: "Training & Integration",                subtitle: "Spezifisch für dein Unternehmen",                description: "Wir trainieren den Agenten auf deine Produkte, typische Kundenfragen, Förderdetails und deine Sprache. Parallel integrieren wir ihn in dein CRM und deinen Kalender. Du musst nichts selbst einrichten.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/technical-integration-and-training-proce-1774010017773-f39f60ac.png"
              },
              {
                id: 3,
                tag: "Schritt 3",                title: "Live & optimieren",                subtitle: "Start meist in 1–2 Wochen",                description: "Dein Agent geht live – meist innerhalb von 1–2 Wochen nach dem Onboarding. Wir begleiten den Start, werten die ersten Gespräche aus und optimieren kontinuierlich.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-launch-and-optimization-moment-showing-1774010019600-abe6736b.png"
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
                id: "1",                title: "Haben wir als Solarunternehmen nicht schon genug Anfragen – wozu brauchen wir KI?",                content: "Genau deshalb. Unsere Agenten sind nicht dafür da, noch mehr Anfragen zu generieren – sie sind dafür da, die Anfragen die du bereits hast schneller und professioneller zu bearbeiten, deinen After-Sales zu entlasten und deine Terminkoordination zu automatisieren. Das Ziel ist mehr Kapazität, nicht mehr Leads."
              },
              {
                id: "2",                title: "Was genau macht der Agent – und was nicht?",                content: "Der Agent übernimmt alle Routineaufgaben: Anrufe entgegennehmen, Standardfragen beantworten, Termine buchen, Interessenten qualifizieren. Komplexe Beratung, technische Problemlösung vor Ort und persönliche Kundenbeziehungen bleiben bei deinem Team."
              },
              {
                id: "3",                title: "Versteht der Agent auch Solarfachbegriffe?",                content: "Ja – weil wir ihn darauf trainieren. VNB-Anmeldung, Marktstammdatenregister, Einspeisevergütung, Wechselrichter, Speichersysteme, BAFA, Wallbox-Integration – dein Agent versteht die Sprache deiner Branche und deiner Kunden."
              },
              {
                id: "4",                title: "Wie schnell ist der Agent einsatzbereit?",                content: "In der Regel innerhalb von 1–2 Wochen nach dem Onboarding. Wir arbeiten effizient, damit du schnell Ergebnisse siehst."
              },
              {
                id: "5",                title: "Was kostet das?",                content: "Die Investition hängt davon ab, welche Agenten du einsetzt und wie komplex deine Prozesse sind. In einem kostenlosen Erstgespräch analysieren wir gemeinsam, welcher Agent den größten Hebel für dich hat – und was das konkret kostet."
              },
              {
                id: "6",                title: "Funktioniert das auch bei uns mit nur 5 Mitarbeitern?",                content: "Gerade dann. Kleine Teams spüren den Druck durch Routineaufgaben am stärksten. Ein KI-Agent ist wie ein zusätzlicher Mitarbeiter für alle Aufgaben, die keinen Menschen brauchen – ohne Personalkosten, ohne Einarbeitung."
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
            buttonText="👉 Prozessanalyse-Termin buchen"
            termsText="Kostenlos, unverbindlich, 15 Min. Analyse"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="VoiceLinkAI"
            columns={[
              {
                title: "Produkt",                items: [
                  { label: "KI-Telefonassistent", href: "#agents" },
                  { label: "KI-Buchungsagent", href: "#agents" },
                  { label: "KI-Chat-Agent", href: "#agents" }
                ]
              },
              {
                title: "Unternehmen",                items: [
                  { label: "Über uns", href: "#about" },
                  { label: "So funktioniert's", href: "#howitworks" },
                  { label: "Kontakt", href: "#closing-cta" }
                ]
              },
              {
                title: "Rechtliches",                items: [
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
    </>
  );
}