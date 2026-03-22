"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { Sparkles, Users, Zap, Award, Target, Heart } from 'lucide-react';

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

  /* Responsive */
  @media (max-width: 1024px) {
    .about-main-container {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .about-hero-title {
      font-size: 2.5rem;
    }

    .about-content-headline {
      font-size: 2rem;
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

    .about-hero-title {
      font-size: 2rem;
    }

    .about-content-headline {
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
    }

    .about-stat-card {
      flex: 1;
      min-width: 100%;
    }

    .about-hero-description {
      font-size: 1rem;
      margin-bottom: 2rem;
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
                <Heart size={40} className="about-stat-icon" />
                <div className="about-stat-value">1–2 Wo.</div>
                <div className="about-stat-label">Zeit bis dein Agent live ist – ohne IT-Kenntnisse, DSGVO-konform</div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}