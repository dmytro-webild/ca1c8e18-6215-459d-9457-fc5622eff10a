"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { Sparkles, Phone, Headphones, MessageSquare, Calendar, Zap, CheckCircle, AlertCircle } from 'lucide-react';

const universalNavItems = [
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

export default function ContactPage() {
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
            navItems={universalNavItems}
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