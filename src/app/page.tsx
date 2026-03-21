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
import { AlertCircle, Bot, HelpCircle, Info, Lightbulb, Rocket, Sparkles, Workflow, Zap, MessageSquare, TrendingUp, Shield, CheckCircle, X, Headphones, Calendar, MessageCircle, Phone } from 'lucide-react';

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

  .vs-infographic {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(15, 20, 25, 0.8), rgba(26, 32, 45, 0.9));
    border-radius: 12px;
    border: 1px solid rgba(255, 140, 0, 0.3);
  }

  .vs-container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 2rem;
    align-items: start;
  }

  .vs-column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .vs-column.left {
    border-right: 1px solid rgba(255, 140, 0, 0.2);
    padding-right: 2rem;
  }

  .vs-column.right {
    border-left: 1px solid rgba(255, 140, 0, 0.2);
    padding-left: 2rem;
  }

  .vs-divider {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .vs-badge {
    background: linear-gradient(135deg, #ff8c00, #ffa500);
    box-shadow: 0 0 20px rgba(255, 140, 0, 0.6), 0 0 40px rgba(255, 165, 0, 0.3);
    border: 1px solid rgba(255, 140, 0, 0.8);
    padding: 0.75rem 1.25rem;
    border-radius: 50px;
    font-weight: 700;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #ffffff;
    text-align: center;
    animation: glow-badge 2s ease-in-out infinite;
  }

  @keyframes glow-badge {
    0%, 100% {
      box-shadow: 0 0 20px rgba(255, 140, 0, 0.6), 0 0 40px rgba(255, 165, 0, 0.3);
    }
    50% {
      box-shadow: 0 0 30px rgba(255, 140, 0, 0.8), 0 0 60px rgba(255, 165, 0, 0.5);
    }
  }

  .vs-stat {
    padding: 1.5rem;
    background: rgba(26, 32, 45, 0.5);
    border: 1px solid rgba(255, 140, 0, 0.2);
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .vs-stat:hover {
    background: rgba(26, 32, 45, 0.8);
    border-color: rgba(255, 140, 0, 0.5);
    box-shadow: 0 0 15px rgba(255, 140, 0, 0.3);
  }

  .vs-stat.left {
    border-left: 3px solid #e63946;
  }

  .vs-stat.right {
    border-left: 3px solid #ffa500;
  }

  .vs-stat-value {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .vs-stat.left .vs-stat-value {
    color: #e63946;
  }

  .vs-stat.right .vs-stat-value {
    color: #ffa500;
  }

  .vs-stat-label {
    font-size: 0.875rem;
    color: #b8bec8;
    line-height: 1.4;
  }

  .vs-icon-container {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-bottom: 0.5rem;
  }

  .vs-icon-container.left {
    background: rgba(230, 57, 70, 0.1);
  }

  .vs-icon-container.right {
    background: rgba(255, 165, 0, 0.1);
  }

  .vs-icon-container.left svg {
    color: #e63946;
  }

  .vs-icon-container.right svg {
    color: #ffa500;
  }

  .vs-bottom-bar {
    grid-column: 1 / -1;
    background: linear-gradient(90deg, #ff8c00, #ffa500);
    padding: 1.25rem 1.5rem;
    border-radius: 8px;
    text-align: center;
    font-weight: 600;
    color: #ffffff;
    font-size: 0.95rem;
    letter-spacing: 0.02em;
  }

  @media (max-width: 768px) {
    .vs-container {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .vs-column.left,
    .vs-column.right {
      border: none;
      padding: 0;
    }

    .vs-divider {
      display: none;
    }

    .vs-infographic {
      padding: 1.5rem;
    }

    .vs-stat {
      padding: 1rem;
    }
  }

  .voicelink-logo {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 1.125rem;
    background: linear-gradient(135deg, #ff8c00, #ffa500);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .voicelink-logo svg {
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #ff8c00, #ffa500);
    padding: 4px;
    border-radius: 4px;
  }

  /* Dark Full-Width Call Section */
  .call-agent-section {
    width: 100%;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
    padding: 4rem 2rem;
    border-top: 2px solid rgba(255, 140, 0, 0.4);
    border-bottom: 2px solid rgba(255, 140, 0, 0.4);
  }

  .call-agent-container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .call-agent-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .call-agent-tag {
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

  .call-agent-tag svg {
    width: 16px;
    height: 16px;
  }

  .call-agent-headline {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.2;
  }

  .call-agent-subheadline {
    font-size: 1.125rem;
    color: #b8bec8;
    line-height: 1.6;
  }

  .call-agent-features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .call-agent-feature {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  .call-agent-feature-icon {
    width: 24px;
    height: 24px;
    min-width: 24px;
    color: #ff8c00;
    margin-top: 0.25rem;
  }

  .call-agent-feature-text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .call-agent-feature-title {
    font-weight: 600;
    color: #ffffff;
    font-size: 1rem;
  }

  .call-agent-feature-desc {
    font-size: 0.875rem;
    color: #b8bec8;
  }

  .call-agent-cta {
    display: inline-block;
    width: fit-content;
    margin-top: 1rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #ff8c00, #ffa500);
    color: #ffffff;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 700;
    transition: all 0.3s ease;
    box-shadow: 0 0 30px rgba(255, 140, 0, 0.5);
  }

  .call-agent-cta:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(255, 140, 0, 0.8);
  }

  .call-agent-visual {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;
  }

  .call-agent-phone-mockup {
    position: relative;
    width: 300px;
    height: 600px;
    background: linear-gradient(135deg, rgba(255, 140, 0, 0.1), rgba(255, 165, 0, 0.05));
    border: 2px solid rgba(255, 140, 0, 0.4);
    border-radius: 40px;
    padding: 12px;
    box-shadow: 0 0 40px rgba(255, 140, 0, 0.3), inset 0 0 60px rgba(255, 140, 0, 0.1);
  }

  .call-agent-phone-screen {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(26, 32, 45, 0.9), rgba(15, 20, 25, 0.95));
    border-radius: 35px;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    text-align: center;
  }

  .call-agent-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 140, 0, 0.1);
    border: 1px solid rgba(255, 140, 0, 0.3);
    border-radius: 20px;
    font-size: 0.875rem;
    color: #ff8c00;
    font-weight: 600;
  }

  .call-agent-status-dot {
    width: 8px;
    height: 8px;
    background: #ff8c00;
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      box-shadow: 0 0 8px rgba(255, 140, 0, 0.6);
    }
    50% {
      opacity: 0.5;
    }
  }

  .call-agent-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff8c00, #ffa500);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    box-shadow: 0 0 30px rgba(255, 140, 0, 0.4);
  }

  .call-agent-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: #ffffff;
  }

  .call-agent-activity {
    font-size: 0.875rem;
    color: #b8bec8;
  }

  .call-agent-dial-pad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .call-agent-dial-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 140, 0, 0.1);
    border: 1px solid rgba(255, 140, 0, 0.3);
    color: #ff8c00;
    font-weight: 600;
    cursor: default;
    transition: all 0.3s ease;
  }

  .call-agent-dial-button:nth-child(1) { content: '1'; }
  .call-agent-dial-button:nth-child(2) { content: '2'; }
  .call-agent-dial-button:nth-child(3) { content: '3'; }
  .call-agent-dial-button:nth-child(4) { content: '4'; }
  .call-agent-dial-button:nth-child(5) { content: '5'; }
  .call-agent-dial-button:nth-child(6) { content: '6'; }
  .call-agent-dial-button:nth-child(7) { content: '7'; }
  .call-agent-dial-button:nth-child(8) { content: '8'; }
  .call-agent-dial-button:nth-child(9) { content: '9'; }

  .call-agent-action-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
  }

  .call-agent-action-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    transition: all 0.3s ease;
  }

  .call-agent-action-btn.accept {
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
  }

  .call-agent-action-btn.decline {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
  }

  .call-agent-pulse-rings {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }

  .call-agent-pulse-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid rgba(255, 140, 0, 0.3);
    border-radius: 50%;
    animation: pulse-ring 2s ease-out infinite;
  }

  .call-agent-pulse-ring:nth-child(1) {
    width: 320px;
    height: 320px;
    animation-delay: 0s;
  }

  .call-agent-pulse-ring:nth-child(2) {
    width: 420px;
    height: 420px;
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

  @media (max-width: 1024px) {
    .call-agent-container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .call-agent-headline {
      font-size: 2rem;
    }

    .call-agent-visual {
      min-height: 400px;
    }
  }

  @media (max-width: 768px) {
    .call-agent-section {
      padding: 2rem 1rem;
    }

    .call-agent-headline {
      font-size: 1.5rem;
    }

    .call-agent-subheadline {
      font-size: 1rem;
    }

    .call-agent-phone-mockup {
      width: 250px;
      height: 500px;
    }
  }

  /* Statistics Section */
  .statistics-section {
    width: 100%;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, rgba(15, 20, 25, 0.5), rgba(26, 32, 45, 0.7));
  }

  .statistics-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .statistics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .statistics-card {
    padding: 2rem;
    background: rgba(26, 32, 45, 0.6);
    border: 1px solid rgba(255, 140, 0, 0.2);
    border-radius: 12px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .statistics-card:hover {
    background: rgba(26, 32, 45, 0.9);
    border-color: rgba(255, 140, 0, 0.5);
    box-shadow: 0 0 20px rgba(255, 140, 0, 0.2);
  }

  .statistics-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ff8c00;
    margin-bottom: 0.5rem;
  }

  .statistics-label {
    font-size: 1rem;
    color: #b8bec8;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    .statistics-section {
      padding: 2rem 1rem;
    }

    .statistics-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .statistics-value {
      font-size: 2rem;
    }
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

        <div id="call-agent" data-section="call-agent" className="call-agent-section">
          <div className="call-agent-container">
            {/* Content Side */}
            <div className="call-agent-content">
              <div className="call-agent-tag">
                <Phone size={16} />
                <span>Live AI Agent</span>
              </div>
              <h2 className="call-agent-headline">
                Besucher können deinen KI-Agenten jetzt anrufen
              </h2>
              <p className="call-agent-subheadline">
                Dein virtueller Assistent nimmt Anrufe entgegen, beantwortet Fragen und bucht Termine – 24/7, ohne dass ein Mensch abheben muss. Warme Leads für dein Team. Zufriedene Kunden. Null Anrufe verloren.
              </p>
              
              <div className="call-agent-features">
                <div className="call-agent-feature">
                  <Headphones className="call-agent-feature-icon" />
                  <div className="call-agent-feature-text">
                    <div className="call-agent-feature-title">24/7 Live Support</div>
                    <div className="call-agent-feature-desc">Kein Anruf geht verloren – auch nachts und am Wochenende</div>
                  </div>
                </div>
                
                <div className="call-agent-feature">
                  <MessageSquare className="call-agent-feature-icon" />
                  <div className="call-agent-feature-text">
                    <div className="call-agent-feature-title">Intelligente Qualifizierung</div>
                    <div className="call-agent-feature-desc">Agent stellt die richtigen Fragen und übergibt nur warme Leads</div>
                  </div>
                </div>
                
                <div className="call-agent-feature">
                  <Calendar className="call-agent-feature-icon" />
                  <div className="call-agent-feature-text">
                    <div className="call-agent-feature-title">Automatische Terminbuchung</div>
                    <div className="call-agent-feature-desc">Termine landen direkt in deinem Kalender – keine Rückfragen nötig</div>
                  </div>
                </div>
                
                <div className="call-agent-feature">
                  <Zap className="call-agent-feature-icon" />
                  <div className="call-agent-feature-text">
                    <div className="call-agent-feature-title">CRM-Integration</div>
                    <div className="call-agent-feature-desc">Alle Anrufdaten sind direkt in deinem System verfügbar</div>
                  </div>
                </div>
              </div>
              
              <a href="https://calendly.com/voicelinkai/info" className="call-agent-cta">
                👉 Live-Demo anfordern
              </a>
            </div>
            
            {/* Visual Side */}
            <div className="call-agent-visual">
              <div className="call-agent-pulse-rings">
                <div className="call-agent-pulse-ring" />
                <div className="call-agent-pulse-ring" />
              </div>
              
              <div className="call-agent-phone-mockup">
                <div className="call-agent-phone-screen">
                  <div className="call-agent-status">
                    <div className="call-agent-status-dot" />
                    <span>Online aktiv</span>
                  </div>
                  
                  <div className="call-agent-avatar">🤖</div>
                  
                  <div className="call-agent-name">VoiceLink Agent</div>
                  <div className="call-agent-activity">Im Gespräch...</div>
                  
                  <div className="call-agent-dial-pad">
                    <div className="call-agent-dial-button">1</div>
                    <div className="call-agent-dial-button">2</div>
                    <div className="call-agent-dial-button">3</div>
                    <div className="call-agent-dial-button">4</div>
                    <div className="call-agent-dial-button">5</div>
                    <div className="call-agent-dial-button">6</div>
                    <div className="call-agent-dial-button">7</div>
                    <div className="call-agent-dial-button">8</div>
                    <div className="call-agent-dial-button">9</div>
                  </div>
                  
                  <div className="call-agent-action-buttons">
                    <div className="call-agent-action-btn accept">✓</div>
                    <div className="call-agent-action-btn decline">✕</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="statistics" data-section="statistics">
          <MetricCardEleven
            title="Impact der KI-Agenten"
            description="Die messbaren Ergebnisse unserer Kunden"
            textboxLayout="default"
            useInvertedBackground={false}
            tag="42.000+ Interaktionen automatisiert"
            tagIcon={TrendingUp}
            tagAnimation="blur-reveal"
            animationType="blur-reveal"
            metrics={[
              {
                id: "1",                value: "60%",                title: "Routineanrufe automatisiert",                description: "der Routineaufrufe werden durch KI bearbeitet",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-modern-sleek-software-dashboard-interf-1774010018435-0a6597cd.png",                imageAlt: "Automation Dashboard"
              },
              {
                id: "2",                value: "8-12h",                title: "Stunden eingespart",                description: "pro Mitarbeiter pro Woche",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-modern-sleek-software-dashboard-interf-1774010018435-0a6597cd.png",                imageAlt: "Time Savings"
              },
              {
                id: "3",                value: "35%",                title: "Mehr qualifizierte Leads",                description: "durch intelligente Vorqualifizierung",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-modern-sleek-software-dashboard-interf-1774010018435-0a6597cd.png",                imageAlt: "Lead Generation"
              },
              {
                id: "4",                value: "24/7",                title: "Kundenerreichbarkeit",                description: "ohne Ausnahmen, rund um die Uhr",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-modern-sleek-software-dashboard-interf-1774010018435-0a6597cd.png",                imageAlt: "24/7 Support"
              }
            ]}
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
            description="Jeder Agent automatisiert einen der größten Zeitfresser – speziell trainiert auf die Anforderungen von Solarunternehmen."
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

        <div id="bottom-cta" data-section="bottom-cta">
          <div style={{
            width: "100%",            maxWidth: "1200px",            margin: "0 auto",            padding: "2rem",            background: "linear-gradient(135deg, rgba(15, 20, 25, 0.8), rgba(26, 32, 45, 0.9))",            borderRadius: "12px",            border: "1px solid rgba(255, 140, 0, 0.3)",            textAlign: "center"
          }}>
            <h2 style={{
              fontSize: "2rem",              fontWeight: "700",              color: "#ffffff",              marginBottom: "1.5rem",              lineHeight: "1.3"
            }}>
              Bereit für Veränderung?
            </h2>
            <p style={{
              fontSize: "1.125rem",              color: "#b8bec8",              marginBottom: "2rem",              lineHeight: "1.6"
            }}>
              Buche jetzt dein kostenloses Erstgespräch und erfahre, wie KI-Agenten dein Team entlasten können.
            </p>
            <a
              href="https://calendly.com/voicelinkai/info"
              style={{
                display: "inline-block",                padding: "0.875rem 2rem",                background: "linear-gradient(135deg, #ff8c00, #ffa500)",                color: "#ffffff",                textDecoration: "none",                borderRadius: "8px",                fontWeight: "600",                fontSize: "1rem",                transition: "all 0.3s ease",                boxShadow: "0 0 20px rgba(255, 140, 0, 0.5)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 30px rgba(255, 140, 0, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 140, 0, 0.5)";
              }}
            >
              👉 Kostenloses Erstgespräch buchen
            </a>
          </div>
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
