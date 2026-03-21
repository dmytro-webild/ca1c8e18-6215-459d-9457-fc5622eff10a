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
import HeroLogo from '@/components/sections/hero/HeroLogo';
import { AlertCircle, Bot, HelpCircle, Info, Lightbulb, Rocket, Sparkles, Workflow, Zap, MessageSquare, TrendingUp, Shield, Phone, PhoneOff, Mic } from 'lucide-react';

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

  @keyframes float-up {
    0% {
      transform: translateY(0px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(-20px);
      opacity: 0;
    }
  }

  @keyframes rotate-phone {
    0%, 100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-5deg);
    }
    75% {
      transform: rotate(5deg);
    }
  }

  .animated-phone-icon {
    animation: rotate-phone 2s ease-in-out infinite;
  }

  .pulse-ring {
    animation: float-up 2s ease-in-out infinite;
  }

  @keyframes soundwave {
    0%, 100% {
      height: 0.5rem;
    }
    50% {
      height: 2rem;
    }
  }

  .soundwave-bar {
    animation: soundwave 0.6s ease-in-out infinite;
  }

  .soundwave-bar:nth-child(1) {
    animation-delay: 0s;
  }

  .soundwave-bar:nth-child(2) {
    animation-delay: 0.1s;
  }

  .soundwave-bar:nth-child(3) {
    animation-delay: 0.2s;
  }

  .soundwave-bar:nth-child(4) {
    animation-delay: 0.1s;
  }

  .soundwave-bar:nth-child(5) {
    animation-delay: 0s;
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
              { name: "Live Demo", id: "live-demo" },
              { name: "FAQ", id: "faq" }
            ]}
            button={{ text: "Kostenloses Erstgespräch", href: "https://calendly.com/voicelinkai/info" }}
            brandName="VoiceLinkAI"
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
            title="VoiceLinkAI – Professionelle Before/After Infografik"
            tag="Statistiken für Solarunternehmen"
            tagAnimation="blur-reveal"
            metrics={[
              { id: "1", value: "38%", description: "verpasste Anrufe ohne KI-Agent" },
              { id: "2", value: "€42.000", description: "monatlicher Umsatzverlust ohne KI" },
              { id: "3", value: "+31%", description: "Umsatzsteigerung mit VoiceLinkAI" },
              { id: "4", value: "100%", description: "DSGVO-konform und sicher" }
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

        <div id="live-demo" data-section="live-demo">
          <div className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-transparent via-background to-transparent">
            <div className="mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
              {/* Live Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/50">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">LIVE DEMO</span>
                </div>
              </div>

              {/* Main Headline */}
              <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Rufe den KI-Agent direkt an
              </h2>

              {/* Subheadline */}
              <p className="text-center text-base md:text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
                Überzeuge dich selbst – Live Demo mit unserem KI-Agenten Laura. Erlebe in Echtzeit, wie er Anrufe beantwortet, Fragen klärt und Termine bucht.
              </p>

              {/* Dark Card Container */}
              <div className="bg-card border border-accent/30 rounded-lg p-8 md:p-12 shadow-2xl mb-12">
                {/* AI Avatar with Pulse Rings and Soundwave */}
                <div className="flex justify-center mb-12">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                    {/* Animated pulse rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-accent/40 pulse-ring" style={{animationDelay: '0s'}}></div>
                    <div className="absolute inset-0 rounded-full border-2 border-accent/20 pulse-ring" style={{animationDelay: '0.5s'}}></div>
                    
                    {/* AI Avatar Circle */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-accent/40 to-accent/20 flex items-center justify-center border border-accent/50">
                      <Bot className="w-12 h-12 md:w-16 md:h-16 text-accent" />
                    </div>

                    {/* Soundwave Bars */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 flex gap-1">
                      <div className="w-1 bg-accent/80 rounded soundwave-bar" style={{animationDelay: '0s'}}></div>
                      <div className="w-1 bg-accent/80 rounded soundwave-bar" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1 bg-accent/80 rounded soundwave-bar" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-1 bg-accent/80 rounded soundwave-bar" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1 bg-accent/80 rounded soundwave-bar" style={{animationDelay: '0s'}}></div>
                    </div>
                  </div>
                </div>

                {/* Agent Name and Status */}
                <div className="text-center mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Laura</h3>
                  <p className="text-sm text-accent flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    Online • Bereit zum Gespräch
                  </p>
                </div>

                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  <div className="px-4 py-2 bg-background-accent/20 border border-accent/30 rounded-full text-sm text-foreground">
                    ✓ 24/7 verfügbar
                  </div>
                  <div className="px-4 py-2 bg-background-accent/20 border border-accent/30 rounded-full text-sm text-foreground">
                    ✓ Deutsche Sprache
                  </div>
                  <div className="px-4 py-2 bg-background-accent/20 border border-accent/30 rounded-full text-sm text-foreground">
                    ✓ Sofortige Antwort
                  </div>
                </div>

                {/* Phone Number Display */}
                <div className="text-center mb-10">
                  <p className="text-sm text-foreground/60 mb-3">Rufe jetzt an:</p>
                  <a href="tel:+49123456789" className="text-4xl md:text-5xl font-bold text-primary-cta hover:text-primary-cta/80 transition-colors">
                    +49 (123) 456789
                  </a>
                </div>

                {/* CTA Button with Phone Icon */}
                <div className="flex justify-center mb-10">
                  <button className="px-8 md:px-12 py-4 md:py-5 bg-primary-cta text-primary-cta-text rounded-lg font-semibold hover:bg-primary-cta/90 transition-all transform hover:scale-105 flex items-center gap-3 animated-phone-icon">
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                  </button>
                </div>

                {/* Status Info */}
                <p className="text-center text-sm text-foreground/60 border-t border-accent/20 pt-6">
                  Verfügbar täglich von 9:00 – 18:00 Uhr • Wartezeit: &lt; 2 Sekunden
                </p>
              </div>

              {/* Three Feature Columns Below Card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-background-accent/10 border border-accent/20 rounded-lg p-6 md:p-8">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Echter KI-Agent</h4>
                  <p className="text-sm text-foreground/70">Keine Aufnahme – ein echter intelligenter Agent, der versteht, was du sagst, und sinnvoll antwortet.</p>
                </div>
                <div className="bg-background-accent/10 border border-accent/20 rounded-lg p-6 md:p-8">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Hochwertige Konversation</h4>
                  <p className="text-sm text-foreground/70">Laura versteht Kontext, stellt Rückfragen und leitet komplexe Anfragen nahtlos an dein Team weiter.</p>
                </div>
                <div className="bg-background-accent/10 border border-accent/20 rounded-lg p-6 md:p-8">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">DSGVO-konform</h4>
                  <p className="text-sm text-foreground/70">Alle Daten werden nach deutschem und EU-Recht verarbeitet – keine Bedenken beim Datenschutz.</p>
                </div>
              </div>

              {/* Testimonial Quote Section */}
              <div className="bg-background-accent/10 border border-accent/20 rounded-lg p-8 md:p-10">
                <div className="text-center">
                  <p className="text-lg md:text-xl text-foreground mb-6 italic">
                    "Der Agent hat unseren Telefonverkehr um 60% reduziert. Das bedeutet für jedes Teamitglied fast 10 Stunden pro Woche zurück – Zeit, die wir jetzt in echte Kundenprojekte investieren."
                  </p>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-sm font-semibold text-accent">JK</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Jan Köhler</p>
                      <p className="text-sm text-foreground/70">Geschäftsführer, Solar-Tech GmbH</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Section */}
              <div className="mt-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Bereit für deine Live Demo?</h3>
                <p className="text-foreground/70 mb-6">Erlebe jetzt selbst, wie viel Zeit dein Team sparen kann.</p>
                <a href="https://calendly.com/voicelinkai/info" className="inline-block px-8 md:px-12 py-3 md:py-4 bg-primary-cta text-primary-cta-text rounded-lg font-semibold hover:bg-primary-cta/90 transition-all">
                  → Kostenloses Beratungsgespräch buchen
                </a>
              </div>
            </div>
          </div>
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
