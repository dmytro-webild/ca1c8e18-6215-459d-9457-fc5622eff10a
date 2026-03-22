"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { Sparkles, Users, Zap, Award, Target, Heart, Headphones, MessageSquare, Calendar, Volume2 } from 'lucide-react';

const aboutSectionStyle = `
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

  @keyframes blink-dot {
    0%, 49%, 100% {
      opacity: 1;
    }
    50%, 99% {
      opacity: 0.3;
    }
  }

  @keyframes float-up {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  [data-section] {
    border: 1px solid rgba(255, 140, 0, 0.3);
    animation: glowing-orange-pulse 3.5s ease-in-out infinite;
  }

  .about-hero-section {
    width: 100%;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, rgba(15, 20, 25, 0.8), rgba(26, 32, 45, 0.9));
  }

  .about-hero-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  .about-hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    margin: 0 auto 1.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 140, 0, 0.1);
    border: 1px solid rgba(255, 140, 0, 0.3);
    border-radius: 20px;
    font-size: 0.875rem;
    color: #ff8c00;
    font-weight: 600;
  }

  .about-hero-tag svg {
    width: 16px;
    height: 16px;
  }

  .about-hero-title {
    font-size: 3rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .about-hero-description {
    font-size: 1.25rem;
    color: #b8bec8;
    max-width: 800px;
    margin: 0 auto 4rem;
    line-height: 1.6;
  }

  /* 2-Column Layout */
  .about-main-section {
    width: 100%;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #0f1419 0%, #1a202d 50%, #16213e 100%);
  }

  .about-main-container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .about-content-left {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    animation: float-up 0.8s ease-out;
  }

  .about-section-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    padding: 0.5rem 1rem;
    background: rgba(255, 140, 0, 0.1);
    border: 1px solid rgba(255, 140, 0, 0.3);
    border-radius: 20px;
    font-size: 0.875rem;
    color: #ff8c00;
    font-weight: 600;
    position: relative;
  }

  .about-section-badge::before {
    content: '';
    width: 6px;
    height: 6px;
    background: #ff8c00;
    border-radius: 50%;
    margin-right: 0.25rem;
    animation: blink-dot 1.5s ease-in-out infinite;
  }

  .about-section-badge svg {
    width: 16px;
    height: 16px;
  }

  .about-content-headline {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.3;
  }

  .about-content-body {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .about-body-paragraph {
    font-size: 1rem;
    color: #b8bec8;
    line-height: 1.7;
  }

  .about-body-paragraph strong {
    color: #ff8c00;
    font-weight: 700;
  }

  .about-quote-block {
    padding: 2rem;
    background: rgba(26, 32, 45, 0.6);
    border-left: 4px solid #ff8c00;
    border-radius: 8px;
    font-size: 1.125rem;
    color: #ffffff;
    font-style: italic;
    line-height: 1.7;
  }

  .about-founder-info {
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(26, 32, 45, 0.4);
    border: 1px solid rgba(255, 140, 0, 0.2);
    border-radius: 8px;
    align-items: center;
  }

  .about-founder-avatar {
    width: 60px;
    height: 60px;
    min-width: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff8c00, #ffa500);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 0 20px rgba(255, 140, 0, 0.3);
  }

  .about-founder-text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .about-founder-name {
    font-weight: 700;
    color: #ffffff;
  }

  .about-founder-title {
    font-size: 0.875rem;
    color: #b8bec8;
  }

  /* Floating Stat Cards */
  .about-stats-right {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-height: 500px;
  }

  .about-stat-card {
    position: relative;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(26, 32, 45, 0.8), rgba(15, 20, 25, 0.9));
    border: 1px solid rgba(255, 140, 0, 0.3);
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(255, 140, 0, 0.2);
    animation: float-card 3s ease-in-out infinite;
    transition: all 0.3s ease;
  }

  .about-stat-card:hover {
    border-color: rgba(255, 140, 0, 0.6);
    box-shadow: 0 0 30px rgba(255, 140, 0, 0.4);
    transform: scale(1.02);
  }

  .about-stat-card:nth-child(1) {
    animation-delay: 0s;
    transform: translateY(-20px);
  }

  .about-stat-card:nth-child(2) {
    animation-delay: 0.5s;
    transform: translateY(0px);
  }

  .about-stat-card:nth-child(3) {
    animation-delay: 1s;
    transform: translateY(20px);
  }

  .about-stat-card:nth-child(4) {
    animation-delay: 0s;
    transform: translateY(-20px);
  }

  @keyframes float-card {
    0%, 100% {
      transform: translateY(var(--float-offset, 0px));
    }
    50% {
      transform: translateY(calc(var(--float-offset, 0px) + 10px));
    }
  }

  .about-stat-card:nth-child(1) {
    --float-offset: -20px;
  }

  .about-stat-card:nth-child(2) {
    --float-offset: 0px;
  }

  .about-stat-card:nth-child(3) {
    --float-offset: 20px;
  }

  .about-stat-card:nth-child(4) {
    --float-offset: -20px;
  }

  .about-stat-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 1rem;
    color: #ff8c00;
  }

  .about-stat-value {
    font-size: 2rem;
    font-weight: 700;
    color: #ff8c00;
    margin-bottom: 0.5rem;
  }

  .about-stat-label {
    font-size: 0.95rem;
    color: #b8bec8;
    line-height: 1.5;
  }

  /* Live Call Section */
  .live-call-section {
    width: 100%;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, rgba(26, 32, 45, 0.8), rgba(15, 20, 25, 0.9));
    border-top: 1px solid rgba(255, 140, 0, 0.3);
    border-bottom: 1px solid rgba(255, 140, 0, 0.3);
  }

  .live-call-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .live-call-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .live-call-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    padding: 0.5rem 1rem;
    background: rgba(255, 140, 0, 0.1);
    border: 1px solid rgba(255, 140, 0, 0.3);
    border-radius: 20px;
    font-size: 0.875rem;
    color: #ff8c00;
    font-weight: 600;
  }

  .live-call-badge-dot {
    width: 8px;
    height: 8px;
    background: #ff8c00;
    border-radius: 50%;
    animation: badge-blink 1s ease-in-out infinite;
  }

  @keyframes badge-blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }

  .live-call-headline {
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.3;
  }

  .live-call-subheadline {
    font-size: 1rem;
    color: #b8bec8;
    line-height: 1.6;
  }

  .live-call-features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0;
  }

  .live-call-feature {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  .live-call-feature-icon {
    width: 24px;
    height: 24px;
    min-width: 24px;
    color: #ff8c00;
    margin-top: 0.25rem;
  }

  .live-call-feature-text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .live-call-feature-title {
    font-weight: 600;
    color: #ffffff;
  }

  .live-call-feature-desc {
    font-size: 0.875rem;
    color: #b8bec8;
  }

  .live-call-cta {
    display: inline-block;
    width: fit-content;
    margin-top: 1rem;
    padding: 0.875rem 1.75rem;
    background: linear-gradient(135deg, #ff8c00, #ffa500);
    color: #ffffff;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 700;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px rgba(255, 140, 0, 0.4);
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
  }

  .live-call-cta:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(255, 140, 0, 0.6);
  }

  .live-call-visual {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
  }

  .live-call-pulse-rings {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }

  .live-call-pulse-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid rgba(255, 140, 0, 0.2);
    border-radius: 50%;
    animation: pulse-ring 2s ease-out infinite;
  }

  .live-call-pulse-ring:nth-child(1) {
    width: 280px;
    height: 280px;
    animation-delay: 0s;
  }

  .live-call-pulse-ring:nth-child(2) {
    width: 380px;
    height: 380px;
    animation-delay: 0.6s;
  }

  @keyframes pulse-ring {
    0% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1.4);
    }
  }

  .live-call-avatar {
    position: relative;
    z-index: 10;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff8c00, #ffa500);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    box-shadow: 0 0 25px rgba(255, 140, 0, 0.4);
  }

  .live-call-agent-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    margin-top: 1.5rem;
  }

  .live-call-agent-name {
    font-size: 1.125rem;
    font-weight: 700;
    color: #ffffff;
  }

  .live-call-agent-status {
    font-size: 0.875rem;
    color: #b8bec8;
  }

  .live-call-sound-bars {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 0.5rem;
    height: 40px;
    margin: 1.5rem 0;
  }

  .live-call-sound-bar {
    width: 4px;
    background: linear-gradient(135deg, #ff8c00, #ffa500);
    border-radius: 2px;
    animation: sound-wave 0.6s ease-in-out infinite;
  }

  .live-call-sound-bar:nth-child(1) {
    height: 12px;
    animation-delay: 0s;
  }

  .live-call-sound-bar:nth-child(2) {
    height: 24px;
    animation-delay: 0.1s;
  }

  .live-call-sound-bar:nth-child(3) {
    height: 32px;
    animation-delay: 0.2s;
  }

  .live-call-sound-bar:nth-child(4) {
    height: 24px;
    animation-delay: 0.3s;
  }

  .live-call-sound-bar:nth-child(5) {
    height: 12px;
    animation-delay: 0.4s;
  }

  @keyframes sound-wave {
    0%, 100% {
      opacity: 0.4;
    }
    50% {
      opacity: 1;
    }
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .about-main-container {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .live-call-container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .about-hero-title {
      font-size: 2.5rem;
    }

    .about-content-headline {
      font-size: 2rem;
    }

    .live-call-headline {
      font-size: 1.75rem;
    }

    .about-stats-right {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .about-stat-card {
      flex: 1;
      min-width: calc(50% - 1rem);
      animation: none;
      transform: none !important;
    }
  }

  @media (max-width: 768px) {
    .about-hero-section {
      padding: 2.5rem 1.5rem;
    }

    .about-main-section {
      padding: 2.5rem 1.5rem;
    }

    .live-call-section {
      padding: 2rem 1rem;
    }

    .about-hero-title {
      font-size: 2rem;
    }

    .about-content-headline {
      font-size: 1.5rem;
    }

    .live-call-headline {
      font-size: 1.5rem;
    }

    .about-content-left {
      gap: 1.5rem;
    }

    .about-main-container {
      gap: 2rem;
    }

    .about-stats-right {
      flex-direction: column;
      gap: 1.5rem;
      min-height: auto;
    }

    .about-stat-card {
      flex: 1;
      min-width: 100%;
    }

    .about-hero-description {
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    .live-call-subheadline {
      font-size: 0.95rem;
    }
  }
`;

export default function AboutPage() {
  return (
    <>
      <style>{aboutSectionStyle}</style>
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
              { name: "FAQ", id: "faq" },
              { name: "Über uns", id: "about" }
            ]}
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
              
              <a href="tel:+4901234567890" className="live-call-cta">
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