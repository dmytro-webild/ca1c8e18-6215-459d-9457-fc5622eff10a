"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { Sparkles, Users, Zap, Award, Target, Heart, Headphones, MessageSquare, Calendar, Volume2 } from 'lucide-react';

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

export default function AboutPage() {
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
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={standardNavItems}
            button={{ text: "Kostenloses Erstgespräch", href: "https://calendly.com/voicelinkai/info" }}
            brandName="VoiceLinkAI"
          />
        </div>

        {/* Hero Section */}
        <div id="about" data-section="about" className="about-hero-section">
          <div className="about-hero-container">
            <div className="about-hero-tag">
              <Sparkles size={16} />
              <span>Über VoiceLinkAI</span>
            </div>
            <h1 className="about-hero-title">Wir bauen KI-Agenten für Solarunternehmen</h1>
            <p className="about-hero-description">
              Nicht für den Massenmarkt. Nicht als Plattform. Sondern als fertige, einsatzbereite Lösung, speziell für die Anforderungen von Solarunternehmen.
            </p>
          </div>
        </div>

        {/* Main 2-Column Section */}
        <div className="about-main-section">
          <div className="about-main-container">
            {/* Left Column - Content */}
            <div className="about-content-left">
              <div className="about-section-badge">
                <span>Unser Ansatz</span>
              </div>
              
              <h2 className="about-content-headline">
                Automatisierung, die wirklich funktioniert
              </h2>

              <div className="about-content-body">
                <p className="about-body-paragraph">
                  Du kennst das: Dein Team hat zu tun. Es hat viel zu tun. Aber <strong>40% der Zeit</strong> verschwinden in Aufgaben, die keinen Menschen brauchen – Routineanrufe, Terminkoordination, Anfragenverwaltung, Papierkram.
                </p>

                <p className="about-body-paragraph">
                  Wir bauen KI-Agenten, die genau diese Aufgaben übernehmen. Nicht als Baukasten, den du dir selbst zusammenklicken musst. Nicht als Plattform, auf die du dein ganzes Geschäft migrieren müsstest. Sondern als <strong>fertige Agenten, die direkt in deine bestehenden Prozesse passen</strong> – trainiert auf die Anforderungen von Solarunternehmen.
                </p>

                <div className="about-quote-block">
                  "Die meisten Tools versprechen alles. Wir versprechen eines: Dass dein Team endlich wieder Zeit für die Arbeit hat, die nur ein Mensch machen kann."
                </div>

                <div className="about-founder-info">
                  <div className="about-founder-avatar">👨‍💼</div>
                  <div className="about-founder-text">
                    <div className="about-founder-name">Marcus Weber</div>
                    <div className="about-founder-title">Gründer & CEO</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Floating Stat Cards */}
            <div className="about-stats-right">
              <div className="about-stat-card">
                <Users size={40} className="about-stat-icon" />
                <div className="about-stat-value">50+</div>
                <div className="about-stat-label">Solarunternehmen vertrauen uns bereits – vom 3-Mann-Team bis 50 Mitarbeiter</div>
              </div>

              <div className="about-stat-card">
                <Award size={40} className="about-stat-icon" />
                <div className="about-stat-value">+31%</div>
                <div className="about-stat-label">Durchschnittliche Kapazitätssteigerung im ersten Monat</div>
              </div>

              <div className="about-stat-card">
                <Zap size={40} className="about-stat-icon" />
                <div className="about-stat-value">1–2 Wo.</div>
                <div className="about-stat-label">Zeit bis dein Agent live ist – ohne IT-Kenntnisse, DSGVO-konform</div>
              </div>
            </div>
          </div>
        </div>

        {/* Live AI Agent Call Section */}
        <div id="call-agent" data-section="call-agent" className="live-call-section">
          <div className="live-call-container">
            {/* Content Side */}
            <div className="live-call-content">
              <div className="live-call-badge">
                <div className="live-call-badge-dot" />
                <span>Live AI Agent</span>
              </div>
              <h2 className="live-call-headline">
                Teste unseren KI-Agenten jetzt live
              </h2>
              <p className="live-call-subheadline">
                Dein virtueller Assistent beantwortet Fragen, bucht Termine und qualifiziert Interessenten – rund um die Uhr. Warme Leads für dein Team. Zufriedene Kunden. Kein Anruf verloren.
              </p>
              
              <div className="live-call-features">
                <div className="live-call-feature">
                  <Headphones className="live-call-feature-icon" />
                  <div className="live-call-feature-text">
                    <div className="live-call-feature-title">24/7 Live Support</div>
                    <div className="live-call-feature-desc">Rufe den Agenten an und erlebe ihn selbst</div>
                  </div>
                </div>
                
                <div className="live-call-feature">
                  <MessageSquare className="live-call-feature-icon" />
                  <div className="live-call-feature-text">
                    <div className="live-call-feature-title">Intelligente Qualifizierung</div>
                    <div className="live-call-feature-desc">Agent stellt die richtigen Fragen und sammelt Daten</div>
                  </div>
                </div>
                
                <div className="live-call-feature">
                  <Calendar className="live-call-feature-icon" />
                  <div className="live-call-feature-text">
                    <div className="live-call-feature-title">Automatische Terminbuchung</div>
                    <div className="live-call-feature-desc">Termine landen direkt in deinem Kalender</div>
                  </div>
                </div>
              </div>
              
              <a href="tel:+4901234567890" className="live-call-cta hidden md:inline-block">
                👉 Jetzt anrufen
              </a>
            </div>
            
            {/* Visual Side */}
            <div className="live-call-visual">
              <div className="live-call-pulse-rings">
                <div className="live-call-pulse-ring" />
                <div className="live-call-pulse-ring" />
              </div>
              
              <div style={{
                position: 'relative',
                zIndex: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem'
              }}>
                <div className="live-call-avatar">🤖</div>
                
                <div className="live-call-agent-info">
                  <div className="live-call-agent-name">VoiceLink Agent</div>
                  <div className="live-call-agent-status">Bereit für deinen Anruf</div>
                </div>
                
                <div className="live-call-sound-bars">
                  <div className="live-call-sound-bar" />
                  <div className="live-call-sound-bar" />
                  <div className="live-call-sound-bar" />
                  <div className="live-call-sound-bar" />
                  <div className="live-call-sound-bar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}