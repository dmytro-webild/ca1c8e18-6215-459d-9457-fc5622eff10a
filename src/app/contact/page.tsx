"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { Sparkles, Phone, Headphones, MessageSquare, Calendar, Zap, CheckCircle, AlertCircle } from 'lucide-react';

const contactSectionStyle = `
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

  .contact-hero-section {
    width: 100%;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, rgba(15, 20, 25, 0.8), rgba(26, 32, 45, 0.9));
  }

  .contact-hero-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  .contact-hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    margin: 0 auto 1.5rem;
    padding: 0.5rem 1rem;
    background: rgba(249, 115, 22, 0.1);
    border: 1px solid rgba(249, 115, 22, 0.3);
    border-radius: 20px;
    font-size: 0.875rem;
    color: #f97316;
    font-weight: 600;
  }

  .contact-hero-tag svg {
    width: 16px;
    height: 16px;
  }

  .contact-hero-title {
    font-size: 3rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .contact-hero-description {
    font-size: 1.25rem;
    color: #b8bec8;
    max-width: 800px;
    margin: 0 auto 4rem;
    line-height: 1.6;
  }

  /* Live Call Section */
  .live-call-section {
    width: 100%;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, rgba(26, 32, 45, 0.8), rgba(15, 20, 25, 0.9));
    border-top: 1px solid rgba(249, 115, 22, 0.3);
    border-bottom: 1px solid rgba(249, 115, 22, 0.3);
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
    background: rgba(249, 115, 22, 0.1);
    border: 1px solid rgba(249, 115, 22, 0.3);
    border-radius: 20px;
    font-size: 0.875rem;
    color: #f97316;
    font-weight: 600;
  }

  .live-call-badge-dot {
    width: 8px;
    height: 8px;
    background: #f97316;
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
    color: #f97316;
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
    background: linear-gradient(135deg, #f97316, #fb923c);
    color: #ffffff;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 700;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px rgba(249, 115, 22, 0.4);
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
  }

  .live-call-cta:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(249, 115, 22, 0.6);
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
    border: 2px solid rgba(249, 115, 22, 0.2);
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
    background: linear-gradient(135deg, #f97316, #fb923c);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    box-shadow: 0 0 25px rgba(249, 115, 22, 0.4);
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
    background: linear-gradient(135deg, #f97316, #fb923c);
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
    .live-call-container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .contact-hero-title {
      font-size: 2.5rem;
    }

    .live-call-headline {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 768px) {
    .contact-hero-section {
      padding: 2.5rem 1.5rem;
    }

    .live-call-section {
      padding: 2rem 1rem;
    }

    .contact-hero-title {
      font-size: 2rem;
    }

    .live-call-headline {
      font-size: 1.5rem;
    }

    .contact-hero-description {
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    .live-call-subheadline {
      font-size: 0.95rem;
    }
  }
`;

export default function ContactPage() {
  return (
    <>
      <style>{contactSectionStyle}</style>
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
              { name: "Kontakt", id: "contact" }
            ]}
            button={{ text: "Kostenloses Erstgespräch", href: "https://calendly.com/voicelinkai/info" }}
            brandName="VoiceLinkAI"
          />
        </div>

        {/* Hero Section */}
        <div id="contact" data-section="contact" className="contact-hero-section">
          <div className="contact-hero-container">
            <div className="contact-hero-tag">
              <Sparkles size={16} />
              <span>Kontakt</span>
            </div>
            <h1 className="contact-hero-title">Lass uns gemeinsam starten</h1>
            <p className="contact-hero-description">
              Hast du Fragen zu unseren KI-Agenten? Oder möchtest du direkt einen unserer Agenten erleben? Kontaktiere uns – oder rufe unseren KI-Agenten selbst an und erlebe ihn live in Aktion.
            </p>
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
