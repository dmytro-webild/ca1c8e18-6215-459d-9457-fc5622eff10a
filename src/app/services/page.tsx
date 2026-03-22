"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { Sparkles, Phone, Headphones, MessageSquare, Calendar, Zap, CheckCircle, AlertCircle } from 'lucide-react';

const servicesSectionStyle = `
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

  .services-hero-section {
    width: 100%;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, rgba(15, 20, 25, 0.8), rgba(26, 32, 45, 0.9));
  }

  .services-hero-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  .services-hero-tag {
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

  .services-hero-tag svg {
    width: 16px;
    height: 16px;
  }

  .services-hero-title {
    font-size: 3rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .services-hero-description {
    font-size: 1.25rem;
    color: #b8bec8;
    max-width: 800px;
    margin: 0 auto 4rem;
    line-height: 1.6;
  }

  /* Services Grid */
  .services-grid-section {
    width: 100%;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #0f1419 0%, #1a202d 50%, #16213e 100%);
  }

  .services-grid-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .service-card {
    padding: 2.5rem;
    background: linear-gradient(135deg, rgba(26, 32, 45, 0.8), rgba(15, 20, 25, 0.9));
    border: 1px solid rgba(249, 115, 22, 0.3);
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(249, 115, 22, 0.2);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .service-card:hover {
    border-color: rgba(249, 115, 22, 0.6);
    box-shadow: 0 0 30px rgba(249, 115, 22, 0.4);
    transform: translateY(-5px);
  }

  .service-card-icon {
    width: 48px;
    height: 48px;
    color: #f97316;
  }

  .service-card-title {
    font-size: 1.375rem;
    font-weight: 700;
    color: #ffffff;
  }

  .service-card-description {
    font-size: 0.95rem;
    color: #b8bec8;
    line-height: 1.6;
  }

  .service-card-features {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(249, 115, 22, 0.2);
  }

  .service-card-feature {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.875rem;
    color: #b8bec8;
  }

  .service-card-feature svg {
    width: 16px;
    height: 16px;
    color: #f97316;
    flex-shrink: 0;
  }

  /* Phone Number Input Section */
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

  .phone-input-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background: rgba(26, 32, 45, 0.5);
    border: 1px solid rgba(249, 115, 22, 0.3);
    border-radius: 12px;
  }

  .phone-input-label {
    font-weight: 600;
    color: #ffffff;
    font-size: 1rem;
  }

  .phone-input-wrapper {
    display: flex;
    gap: 1rem;
  }

  .phone-input-field {
    flex: 1;
    padding: 0.75rem 1rem;
    background: rgba(15, 20, 25, 0.6);
    border: 1px solid rgba(249, 115, 22, 0.3);
    border-radius: 8px;
    color: #ffffff;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .phone-input-field:focus {
    outline: none;
    border-color: rgba(249, 115, 22, 0.6);
    box-shadow: 0 0 10px rgba(249, 115, 22, 0.2);
  }

  .phone-input-field::placeholder {
    color: #7a8a9a;
  }

  .phone-call-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, #f97316, #fb923c);
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px rgba(249, 115, 22, 0.4);
    font-size: 0.95rem;
  }

  .phone-call-button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(249, 115, 22, 0.6);
  }

  .phone-call-button svg {
    width: 18px;
    height: 18px;
  }

  .phone-input-description {
    font-size: 0.875rem;
    color: #b8bec8;
    margin-top: 0.5rem;
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

    .services-hero-title {
      font-size: 2.5rem;
    }

    .live-call-headline {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 768px) {
    .services-hero-section {
      padding: 2.5rem 1.5rem;
    }

    .services-grid-section {
      padding: 2.5rem 1.5rem;
    }

    .live-call-section {
      padding: 2rem 1rem;
    }

    .services-hero-title {
      font-size: 2rem;
    }

    .live-call-headline {
      font-size: 1.5rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .services-hero-description {
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    .live-call-subheadline {
      font-size: 0.95rem;
    }

    .phone-input-wrapper {
      flex-direction: column;
    }

    .phone-call-button {
      width: 100%;
    }
  }
`;

export default function ServicesPage() {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [isCalling, setIsCalling] = React.useState(false);

  const handleCallAgent = () => {
    if (phoneNumber.trim()) {
      setIsCalling(true);
      // Create tel link with the provided phone number
      const agentPhoneNumber = '+4901234567890'; // Your AI agent's phone number
      window.location.href = `tel:${agentPhoneNumber}`;
      
      // Reset after a delay
      setTimeout(() => {
        setIsCalling(false);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCallAgent();
    }
  };

  return (
    <>
      <style>{servicesSectionStyle}</style>
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
              { name: "Services", id: "services" }
            ]}
            button={{ text: "Kostenloses Erstgespräch", href: "https://calendly.com/voicelinkai/info" }}
            brandName="VoiceLinkAI"
          />
        </div>

        {/* Hero Section */}
        <div id="services" data-section="services" className="services-hero-section">
          <div className="services-hero-container">
            <div className="services-hero-tag">
              <Sparkles size={16} />
              <span>Unsere Services</span>
            </div>
            <h1 className="services-hero-title">Rufe unseren KI-Agenten jetzt live an</h1>
            <p className="services-hero-description">
              Erlebe die Kraft von KI-gesteuerten Telefonagenten in Echtzeit. Gib deine Telefonnummer an und starten Sie ein Gespräch mit unserem intelligenten Agenten – 24/7, ohne Wartezeiten.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid-section">
          <div className="services-grid-container">
            <h2 style={{
              fontSize: "2rem",              fontWeight: "700",              color: "#ffffff",              marginBottom: "1rem",              textAlign: "center"
            }}>Was unser Agent kann</h2>
            <div className="services-grid">
              <div className="service-card">
                <Headphones className="service-card-icon" />
                <h3 className="service-card-title">24/7 Anrufentgegennahme</h3>
                <p className="service-card-description">Der Agent antwortet auf jeden Anruf – ob tagsüber, nachts oder am Wochenende. Kein Anruf geht verloren.</p>
                <div className="service-card-features">
                  <div className="service-card-feature">
                    <CheckCircle size={16} />
                    <span>Rund-um-die-Uhr verfügbar</span>
                  </div>
                  <div className="service-card-feature">
                    <CheckCircle size={16} />
                    <span>Natürliche Konversation</span>
                  </div>
                  <div className="service-card-feature">
                    <CheckCircle size={16} />
                    <span>Mehrsprachig</span>
                  </div>
                </div>
              </div>

              <div className="service-card">
                <MessageSquare className="service-card-icon" />
                <h3 className="service-card-title">Intelligente Qualifizierung</h3>
                <p className="service-card-description">Der Agent stellt die richtigen Fragen und sammelt Informationen – so dass nur warme Leads dein Team erreichen.</p>
                <div className="service-card-features">
                  <div className="service-card-feature">
                    <CheckCircle size={16} />
                    <span>Automatische Datenerfassung</span>
                  </div>
                  <div className="service-card-feature">
                    <CheckCircle size={16} />
                    <span>Lead-Bewertung</span>
                  </div>
                  <div className="service-card-feature">
                    <CheckCircle size={16} />
                    <span>Anomalieerkennung</span>
                  </div>
                </div>
              </div>

              <div className="service-card">
                <Calendar className="service-card-icon" />
                <h3 className="service-card-title">Automatische Terminbuchung</h3>
                <p className="service-card-description">Termine werden automatisch in deinem Kalender eingebucht – ohne manuelle Abstimmung oder Doppelbuchungen.</p>
                <div className="service-card-features">
                  <div className="service-card-feature">
                    <CheckCircle size={16} />
                    <span>CRM-Integration</span>
                  </div>
                  <div className="service-card-feature">
                    <CheckCircle size={16} />
                    <span>Kalender-Sync</span>
                  </div>
                  <div className="service-card-feature">
                    <CheckCircle size={16} />
                    <span>Konfirmations-SMS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Call Section */}
        <div id="call-agent" data-section="call-agent" className="live-call-section">
          <div className="live-call-container">
            {/* Content Side */}
            <div className="live-call-content">
              <div className="live-call-badge">
                <div className="live-call-badge-dot" />
                <span>Live AI Agent – Jetzt anrufen</span>
              </div>
              <h2 className="live-call-headline">
                Teste unseren KI-Agenten live
              </h2>
              <p className="live-call-subheadline">
                Gib deine Telefonnummer an und starte ein echtes Gespräch mit unserem Agenten. Du wirst direkt angerufen und kannst die KI in Aktion erleben.
              </p>
              
              <div className="live-call-features">
                <div className="live-call-feature">
                  <Headphones className="live-call-feature-icon" />
                  <div className="live-call-feature-text">
                    <div className="live-call-feature-title">Echte Anrufe</div>
                    <div className="live-call-feature-desc">Der Agent ruft dich auf der eingegebenen Nummer an</div>
                  </div>
                </div>
                
                <div className="live-call-feature">
                  <MessageSquare className="live-call-feature-icon" />
                  <div className="live-call-feature-text">
                    <div className="live-call-feature-title">Natürliche Gespräche</div>
                    <div className="live-call-feature-desc">Flüssige, menschenähnliche Konversationen in Echtzeit</div>
                  </div>
                </div>
                
                <div className="live-call-feature">
                  <Zap className="live-call-feature-icon" />
                  <div className="live-call-feature-text">
                    <div className="live-call-feature-title">Sofort verfügbar</div>
                    <div className="live-call-feature-desc">Kein Warten – der Agent antwortet in Sekunden</div>
                  </div>
                </div>
              </div>
              
              <div className="phone-input-form">
                <label className="phone-input-label">Gib deine Telefonnummer an:</label>
                <div className="phone-input-wrapper">
                  <input
                    type="tel"
                    className="phone-input-field"
                    placeholder="+49 (0) 123 456789"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button
                    className="phone-call-button"
                    onClick={handleCallAgent}
                    disabled={isCalling}
                  >
                    <Phone size={18} />
                    {isCalling ? 'Rufe an...' : 'Agent anrufen'}
                  </button>
                </div>
                <div className="phone-input-description">
                  ✓ DSGVO-konform ✓ Keine Datenspeicherung ✓ Kostenlos testen
                </div>
              </div>
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
                  <div className="live-call-agent-status">{phoneNumber ? 'Bereit zu wählen...' : 'Bereit für deinen Anruf'}</div>
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

import React from 'react';