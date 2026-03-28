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
import { AlertCircle, Bot, HelpCircle, Info, Lightbulb, Rocket, Sparkles, Workflow, Zap, MessageSquare, TrendingUp, Shield, CheckCircle, X, Headphones, Calendar, MessageCircle, Phone, Volume2, BarChart3, Mic } from 'lucide-react';

const animatedBorderStyle = `
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

  .voicelink-logo {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 1.125rem;
    color: #ffffff;
  }

  .waveform-icon {
    display: flex;
    gap: 2px;
    align-items: flex-end;
    height: 20px;
  }

  .bar { width: 4px; background: #f97316; border-radius: 1px; }

  .call-agent-section {
    width: 100%;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
    padding: 4rem 2rem;
    border-top: 2px solid rgba(249, 115, 22, 0.4);
    border-bottom: 2px solid rgba(249, 115, 22, 0.4);
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

  .call-agent-badge {
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

  .call-agent-badge-dot {
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

  .call-agent-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 0.5rem 0;
  }

  .call-agent-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(249, 115, 22, 0.1);
    border: 1px solid rgba(249, 115, 22, 0.3);
    border-radius: 20px;
    font-size: 0.875rem;
    color: #f97316;
    font-weight: 500;
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
    color: #f97316;
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
    background: linear-gradient(135deg, #f97316, #fb923c);
    color: #ffffff;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 700;
    transition: all 0.3s ease;
    box-shadow: 0 0 30px rgba(249, 115, 22, 0.5);
  }

  .call-agent-cta:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(249, 115, 22, 0.8);
  }

  .call-agent-visual {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;
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
    border: 2px solid rgba(249, 115, 22, 0.3);
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

  .call-agent-avatar {
    position: relative;
    z-index: 10;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(135deg, #f97316, #fb923c);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    box-shadow: 0 0 30px rgba(249, 115, 22, 0.4);
  }

  .call-agent-agent-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .call-agent-agent-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: #ffffff;
  }

  .call-agent-agent-status {
    font-size: 0.875rem;
    color: #b8bec8;
  }

  .call-agent-phone-number {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 1.5rem 0;
    padding: 1rem;
    background: rgba(249, 115, 22, 0.1);
    border: 1px solid rgba(249, 115, 22, 0.3);
    border-radius: 12px;
  }

  .call-agent-phone-icon {
    width: 24px;
    height: 24px;
    color: #f97316;
  }

  .call-agent-phone-text {
    font-size: 1.125rem;
    font-weight: 600;
    color: #ffffff;
  }

  .call-agent-sound-bars {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 0.5rem;
    height: 40px;
    margin: 1.5rem 0;
  }

  .call-agent-sound-bar {
    width: 4px;
    background: linear-gradient(135deg, #f97316, #fb923c);
    border-radius: 2px;
    animation: sound-wave 0.6s ease-in-out infinite;
  }

  .call-agent-sound-bar:nth-child(1) {
    height: 12px;
    animation-delay: 0s;
  }

  .call-agent-sound-bar:nth-child(2) {
    height: 24px;
    animation-delay: 0.1s;
  }

  .call-agent-sound-bar:nth-child(3) {
    height: 32px;
    animation-delay: 0.2s;
  }

  .call-agent-sound-bar:nth-child(4) {
    height: 24px;
    animation-delay: 0.3s;
  }

  .call-agent-sound-bar:nth-child(5) {
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
  }
`;

const Logo = () => (
    <div className="voicelink-logo">
        <div className="waveform-icon">
            <div className="bar" style={{ height: '8px' }} />
            <div className="bar" style={{ height: '14px' }} />
            <div className="bar" style={{ height: '20px' }} />
            <div className="bar" style={{ height: '14px' }} />
            <div className="bar" style={{ height: '8px' }} />
        </div>
        <span className="text-white font-black tracking-tighter">VOICELINK</span>
        <span className="text-orange-500 font-normal">AI</span>
    </div>
);

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
            description="Wir automatisieren Prozesse mit KI-Agenten, die deinem Team die Arbeit abnehmen, die keinen Menschen braucht. Wir liefern fertige Lösungen, speziell für Solarunternehmen."
            background={{ variant: "radial-gradient" }}
            tag="KI-Automation für Solarunternehmen"
            tagIcon={Zap}
            tagAnimation="blur-reveal"
            buttons={[
              { text: "👉 Kostenloses Erstgespräch buchen", href: "https://calendly.com/voicelinkai/info" }
            ]}
            buttonAnimation="slide-up"
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-modern-sleek-software-dashboard-interf-1774010018435-0a6597cd.png?_wi=1"
            imageAlt="VoiceLinkAI Solar Dashboard"
            mediaAnimation="blur-reveal"
          />
        </div>

        <div id="call-agent" data-section="call-agent" className="call-agent-section">
          <div className="call-agent-container">
            <div className="call-agent-content">
              <div className="call-agent-badge">
                <div className="call-agent-badge-dot" />
                <span>Live AI Agent</span>
              </div>
              <h2 className="call-agent-headline">
                Besucher können deinen KI-Agenten jetzt anrufen
              </h2>
              <p className="call-agent-subheadline">
                Dein virtueller Assistent nimmt Anrufe entgegen, beantwortet Fragen und bucht Termine – 24/7. Warme Leads für dein Team. Null Anrufe verloren.
              </p>
              
              <a href="https://calendly.com/voicelinkai/info" className="call-agent-cta">
                👉 Live-Demo anfordern
              </a>
            </div>
            
            <div className="call-agent-visual">
              <div className="call-agent-pulse-rings">
                <div className="call-agent-pulse-ring" />
                <div className="call-agent-pulse-ring" />
              </div>
              
              <div style={{
                position: 'relative',
                zIndex: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem'
              }}>
                <div className="call-agent-avatar">🤖</div>
                <div className="call-agent-agent-info">
                  <div className="call-agent-agent-name">VoiceLink Agent</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="VoiceLinkAI"
            columns={[
              { title: "Produkt", items: [{ label: "KI-Telefonassistent", href: "#agents" }] },
              { title: "Unternehmen", items: [{ label: "Über uns", href: "#about" }] }
            ]}
          />
        </div>
      </ThemeProvider>
    </>
  );
}
