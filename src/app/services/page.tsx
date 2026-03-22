"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import { AlertCircle, Bot, HelpCircle, Info, Lightbulb, Rocket, Sparkles, Workflow, Zap, MessageSquare, TrendingUp, Shield, CheckCircle, X, Headphones, Calendar, MessageCircle, Phone, Volume2, Radio } from 'lucide-react';

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

  /* Call Agent Section - Full Width Dark */
  .call-agent-section {
    width: 100%;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
    padding: 4rem 2rem;
  }

  .call-agent-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .call-agent-header {
    margin-bottom: 3rem;
  }

  .call-agent-tag {
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

  .call-agent-tag svg {
    width: 16px;
    height: 16px;
  }

  .call-agent-headline {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .call-agent-subheadline {
    font-size: 1.125rem;
    color: #b8bec8;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Centered Card */
  .call-agent-card {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 3rem auto 0;
    padding: 3rem 2rem;
    background: linear-gradient(135deg, rgba(26, 32, 45, 0.9), rgba(15, 20, 25, 0.95));
    border: 1px solid rgba(255, 140, 0, 0.3);
    border-radius: 16px;
    box-shadow: 0 0 40px rgba(255, 140, 0, 0.2);
  }

  /* Pulsing Rings */
  .call-agent-rings {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .call-agent-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid rgba(255, 140, 0, 0.3);
    border-radius: 50%;
    animation: pulse-ring 2s ease-out infinite;
  }

  .call-agent-ring:nth-child(1) {
    width: 280px;
    height: 280px;
    animation-delay: 0s;
  }

  .call-agent-ring:nth-child(2) {
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
      transform: translate(-50%, -50%) scale(1.3);
    }
  }

  /* Animated AI Avatar */
  .call-agent-avatar {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto 1.5rem;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff8c00, #ffa500);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    box-shadow: 0 0 30px rgba(255, 140, 0, 0.4);
    animation: avatar-float 3s ease-in-out infinite;
  }

  @keyframes avatar-float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  /* Sound Wave Bars */
  .call-agent-soundwave {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    margin: 1.5rem auto;
    height: 40px;
  }

  .call-agent-bar {
    width: 4px;
    background: linear-gradient(180deg, #ff8c00, #ffa500);
    border-radius: 2px;
    animation: wave 0.8s ease-in-out infinite;
  }

  .call-agent-bar:nth-child(1) { height: 20px; animation-delay: 0s; }
  .call-agent-bar:nth-child(2) { height: 28px; animation-delay: 0.1s; }
  .call-agent-bar:nth-child(3) { height: 32px; animation-delay: 0.2s; }
  .call-agent-bar:nth-child(4) { height: 28px; animation-delay: 0.1s; }
  .call-agent-bar:nth-child(5) { height: 20px; animation-delay: 0s; }

  @keyframes wave {
    0%, 100% {
      height: 20px;
    }
    50% {
      height: 100%;
    }
  }

  /* Agent Info */
  .call-agent-info {
    margin: 2rem 0;
  }

  .call-agent-status {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 140, 0, 0.1);
    border: 1px solid rgba(255, 140, 0, 0.3);
    border-radius: 20px;
    font-size: 0.875rem;
    color: #ff8c00;
    font-weight: 600;
    margin-bottom: 1rem;
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

  .call-agent-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 0.5rem;
  }

  .call-agent-activity {
    font-size: 0.875rem;
    color: #b8bec8;
  }

  /* Phone Number */
  .call-agent-phone {
    margin: 2rem 0;
    padding: 1.5rem;
    background: rgba(255, 140, 0, 0.05);
    border: 1px solid rgba(255, 140, 0, 0.2);
    border-radius: 12px;
  }

  .call-agent-phone-label {
    font-size: 0.875rem;
    color: #b8bec8;
    margin-bottom: 0.5rem;
  }

  .call-agent-phone-number {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ff8c00;
    font-family: 'Courier New', monospace;
    letter-spacing: 2px;
  }

  /* CTA Button */
  .call-agent-cta {
    display: inline-block;
    margin: 2rem auto;
    padding: 1rem 2.5rem;
    background: linear-gradient(135deg, #ff8c00, #ffa500);
    color: #ffffff;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 0 30px rgba(255, 140, 0, 0.5);
  }

  .call-agent-cta:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(255, 140, 0, 0.8);
  }

  /* Feature Columns */
  .call-agent-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 2.5rem;
    padding-top: 2.5rem;
    border-top: 1px solid rgba(255, 140, 0, 0.2);
  }

  .call-agent-feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    text-align: center;
  }

  .call-agent-feature-icon {
    width: 32px;
    height: 32px;
    color: #ff8c00;
  }

  .call-agent-feature-title {
    font-weight: 600;
    color: #ffffff;
    font-size: 0.95rem;
  }

  .call-agent-feature-desc {
    font-size: 0.8rem;
    color: #b8bec8;
    line-height: 1.4;
  }

  /* Bottom CTA Text */
  .call-agent-bottom-cta {
    margin-top: 2.5rem;
    padding: 1.5rem;
    background: rgba(255, 140, 0, 0.05);
    border: 1px solid rgba(255, 140, 0, 0.2);
    border-radius: 12px;
    font-size: 0.95rem;
    color: #b8bec8;
    line-height: 1.6;
  }

  .call-agent-bottom-cta strong {
    color: #ff8c00;
  }

  @media (max-width: 768px) {
    .call-agent-section {
      padding: 2rem 1rem;
    }

    .call-agent-headline {
      font-size: 1.75rem;
    }

    .call-agent-card {
      padding: 2rem 1.5rem;
    }

    .call-agent-features {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .call-agent-ring:nth-child(1) {
      width: 240px;
      height: 240px;
    }

    .call-agent-ring:nth-child(2) {
      width: 320px;
      height: 320px;
    }
  }
`;

export default function ServicesPage() {
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
              { name: "Services", id: "call-agent" },
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
        <div id="services" data-section="services">
          <HeroBillboard
            title="Unsere KI-Services für Solarunternehmen"
            description="Maßgeschneiderte KI-Lösungen, die dein Team entlasten und deine Prozesse automatisieren – ohne Komplexität, ohne Eigenarbeit."
            background={{ variant: "radial-gradient" }}
            tag="Services & Lösungen"
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
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-modern-sleek-software-dashboard-interf-1774010018435-0a6597cd.png?_wi=1"
            imageAlt="VoiceLinkAI Solar Dashboard"
            mediaAnimation="blur-reveal"
          />
        </div>

        {/* Call Agent Section - Full Width Dark */}
        <div id="call-agent" data-section="call-agent" className="call-agent-section">
          <div className="call-agent-container">
            <div className="call-agent-header">
              <div className="call-agent-tag">
                <Phone size={16} />
                <span>Live AI Agent</span>
              </div>
              <h2 className="call-agent-headline">
                Besucher können deinen KI-Agenten jetzt anrufen
              </h2>
              <p className="call-agent-subheadline">
                Dein virtueller Assistent nimmt Anrufe entgegen, beantwortet Fragen und bucht Termine – 24/7, ohne dass ein Mensch abheben muss.
              </p>
            </div>

            {/* Centered Card with Avatar, Rings, and Sound Waves */}
            <div className="call-agent-card">
              <div className="call-agent-rings">
                <div className="call-agent-ring" />
                <div className="call-agent-ring" />
              </div>

              <div className="call-agent-avatar">🤖</div>

              <div className="call-agent-soundwave">
                <div className="call-agent-bar" />
                <div className="call-agent-bar" />
                <div className="call-agent-bar" />
                <div className="call-agent-bar" />
                <div className="call-agent-bar" />
              </div>

              <div className="call-agent-info">
                <div className="call-agent-status">
                  <div className="call-agent-status-dot" />
                  <span>Online aktiv</span>
                </div>
                <div className="call-agent-name">VoiceLink Agent</div>
                <div className="call-agent-activity">Bereit für Anrufe</div>
              </div>

              <div className="call-agent-phone">
                <div className="call-agent-phone-label">Jetzt anrufen:</div>
                <div className="call-agent-phone-number">+49 (0) 123 456789</div>
              </div>

              <a href="https://calendly.com/voicelinkai/info" className="call-agent-cta">
                👉 Live-Demo anfordern
              </a>

              {/* Feature Columns */}
              <div className="call-agent-features">
                <div className="call-agent-feature">
                  <Headphones className="call-agent-feature-icon" />
                  <div className="call-agent-feature-title">24/7 Support</div>
                  <div className="call-agent-feature-desc">Kein Anruf geht verloren</div>
                </div>
                <div className="call-agent-feature">
                  <MessageSquare className="call-agent-feature-icon" />
                  <div className="call-agent-feature-title">Intelligente Qualifizierung</div>
                  <div className="call-agent-feature-desc">Nur warme Leads für dein Team</div>
                </div>
                <div className="call-agent-feature">
                  <Calendar className="call-agent-feature-icon" />
                  <div className="call-agent-feature-title">Auto-Terminbuchung</div>
                  <div className="call-agent-feature-desc">Direkt in deinen Kalender</div>
                </div>
              </div>

              {/* Bottom CTA Text */}
              <div className="call-agent-bottom-cta">
                <strong>Warme Leads für dein Team.</strong> Zufriedene Kunden. Null Anrufe verloren.
              </div>
            </div>
          </div>
        </div>

        <div id="problems" data-section="problems">
          <FeatureCardNineteen
            title="Unsere Services im Überblick"
            description="Drei spezialisierte KI-Services, die auf die Anforderungen von Solarunternehmen zugeschnitten sind"
            textboxLayout="default"
            useInvertedBackground={false}
            tag="Unsere Angebote"
            tagIcon={AlertCircle}
            tagAnimation="blur-reveal"
            features={[
              {
                id: 1,
                tag: "Service 1",                title: "KI-Telefonassistent",                subtitle: "24/7 Kundenservice ohne Pausenzeiten",                description: "Dein virtueller Assistent antwortet auf Anrufe, beantwortet häufig gestellte Fragen, bucht Termine und qualifiziert Interessenten – rund um die Uhr. Niemals ein Anruf verpasst, nur warme Leads für dein Team.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-illustration-showing-a-frustrated-sol-1774010017180-ab16cf36.png"
              },
              {
                id: 2,
                tag: "Service 2",                title: "KI-Buchungsagent",                subtitle: "Automatische Terminverwaltung",                description: "Termine buchen sich selbst. Der Agent koordiniert Aufmaßtermine, Installationen und Wartungen direkt in deinen Kalender – ohne E-Mail-Marathon, ohne Doppelbuchungen, ohne Rückfragen.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-illustration-depicting-the-complexity-1774010017922-56bddc49.png"
              },
              {
                id: 3,
                tag: "Service 3",                title: "KI-Chat-Agent",                subtitle: "Intelligente Lead-Qualifizierung",                description: "Website-Besucher werden zu qualifizierten Leads. Der Agent beantwortet Fragen, sammelt Projektdaten und übergibt warme Leads an dein Team – mit allen Informationen, die nötig sind.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-overflowing-inbox-visualization-showi-1774010017112-e64754b3.png"
              },
              {
                id: 4,
                tag: "Service 4",                title: "KI-After-Sales-Agent",                subtitle: "Entlastung deines Support-Teams",                description: "Nach der Installation müssen Fragen beantwortet werden – von 0-10 Uhr. Der Agent beantwortet die häufigsten Kundenanfragen selbstständig, eskaliert Probleme an Techniker. Zufriedene Kunden, weniger Anrufe.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-visualization-of-excessive-paperwork-a-1774010019993-3cfe0bc8.png"
              },
              {
                id: 5,
                tag: "Service 5",                title: "KI-Angebots-Follow-up",                subtitle: "Automatisches Nachfassen von Angeboten",                description: "Offene Angebote werden nicht vergessen. Der Agent überprüft regelmäßig, ob Interessenten noch interessiert sind, stellt Fragen und leitet Leads zurück an dein Team. Kein Geschäft mehr verloren.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-illustration-showing-circular-loops-a-1774010017196-ba997d78.png"
              },
              {
                id: 6,
                tag: "Service 6",                title: "Custom KI-Lösungen",                subtitle: "Maßgeschneidert auf deine Prozesse",                description: "Dein Prozess ist einzigartig? Wir bauen custom Agenten, die genau deine Anforderungen erfüllen. Von CRM-Integration bis SMS-Automation – alles ist möglich. Lass uns gemeinsam herausfinden, was dir weiterhilft.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-illustration-showing-skilled-solar-te-1774010017383-a52df022.png"
              }
            ]}
          />
        </div>

        <div id="agents" data-section="agents">
          <FeatureBento
            title="Wie unsere Services funktionieren"
            description="Jeder Service ist spezialisiert auf einen Prozess und liefert messbare Ergebnisse."
            textboxLayout="default"
            useInvertedBackground={false}
            tag="Service-Details"
            tagIcon={Bot}
            tagAnimation="blur-reveal"
            animationType="blur-reveal"
            features={[
              {
                title: "Schnelle Integration",                description: "Innerhalb von 1–2 Wochen ist dein Agent live. Wir kümmern uns um alles: CRM-Integration, Kalender-Anbindung, Agent-Training.",                button: { text: "Mehr erfahren", href: "https://calendly.com/voicelinkai/info" },
                bentoComponent: "timeline",                heading: "Integration Timeline",                subheading: "Schnell und unkompliziert",                items: [
                  { label: "Analyse", detail: "Wir verstehen deine Prozesse" },
                  { label: "Setup", detail: "Agent wird konfiguriert" },
                  { label: "Live", detail: "Agent startet" }
                ],
                completedLabel: "Ready to go"
              },
              {
                title: "DSGVO-konform",                description: "Alle Daten bleiben in Deutschland. Keine Verstöße gegen Datenschutz. Transparent und sicher – immer.",                button: { text: "Sicherheit ansehen", href: "https://calendly.com/voicelinkai/info" },
                bentoComponent: "icon-info-cards",                items: [
                  { icon: Shield, label: "Verschlüsselt", value: "End-to-End" },
                  { icon: CheckCircle, label: "DSGVO", value: "Konform" },
                  { icon: Zap, label: "Server", value: "Deutschland" }
                ]
              },
              {
                title: "Vollständige Support",                description: "Dein dedizierter Agent-Manager kümmert sich um Optimierung, Updates und Support. Du musst nichts selbst machen.",                button: { text: "Support Paket ansehen", href: "https://calendly.com/voicelinkai/info" },
                bentoComponent: "chat",                aiIcon: Bot,
                userIcon: MessageSquare,
                exchanges: [
                  {
                    userMessage: "Der Agent könnte besser auf technische Fragen antworten",                    aiResponse: "Verstanden. Wir passen sein Training an und testen die Antwort morgen."
                  },
                  {
                    userMessage: "Wie viele Anrufe hat der Agent diese Woche bearbeitet?",                    aiResponse: "267 Anrufe, 189 wurden vollständig bearbeitet, 78 wurden zu warmen Leads für dein Team."
                  },
                  {
                    userMessage: "Können wir SMS-Integration hinzufügen?",                    aiResponse: "Ja, das ist möglich. Ich buche dir einen Termin mit unserem Technical Lead für nächste Woche."
                  }
                ],
                placeholder: "Stellt deine Fragen..."
              }
            ]}
          />
        </div>

        <div id="howitworks" data-section="howitworks">
          <FeatureCardNineteen
            title="Der Prozess: Von der Analyse zur Live-Schaltung"
            description="Wir machen die Implementierung einfach. Du brauchst nur zu wissen, wo dir die Zeit verloren geht."
            textboxLayout="default"
            useInvertedBackground={true}
            tag="Unser Prozess"
            tagIcon={Workflow}
            tagAnimation="blur-reveal"
            features={[
              {
                id: 1,
                tag: "Phase 1",                title: "Kostenlose Prozessanalyse",                subtitle: "Gemeinsam herausfinden, wo der Hebel ist",                description: "Wir schauen gemeinsam auf deine Abläufe. Wo verlierst du täglich Zeit? Welcher Service würde dir den größten Benefit bringen? Nach diesem Gespräch weißt du genau, wie der Agent dir weiterhilft.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-consultation-meeting-visualization-sho-1774010019320-185e5975.png"
              },
              {
                id: 2,
                tag: "Phase 2",                title: "Agent-Konfiguration & Training",                subtitle: "Speziell für dein Unternehmen",                description: "Wir konfigurieren deinen Agent: Training auf deine Produkte, deine Prozesse, deine FAQ. Integration in CRM und Kalender. Alles geschieht im Hintergrund – du musst dich um nichts kümmern.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/technical-integration-and-training-proce-1774010017773-f39f60ac.png"
              },
              {
                id: 3,
                tag: "Phase 3",                title: "Live-Start & Optimierung",                subtitle: "Der Agent startet und wird kontinuierlich verbessert",                description: "Dein Agent geht live. Wir begleiten die ersten Wochen, werten die Gespräche aus und optimieren kontinuierlich. Regelmäßige Reports zeigen dir den ROI.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-launch-and-optimization-moment-showing-1774010019600-abe6736b.png"
              }
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <TestimonialAboutCard
            tag="Warum VoiceLinkAI"
            tagIcon={Info}
            tagAnimation="blur-reveal"
            title="Spezialisiert auf Solarunternehmen"
            description="Wir bauen nicht für den Massenmarkt. Wir bauen für dich."
            subdescription="Wir verstehen die Herausforderungen von Solarunternehmen: Volle Auftragsbücher, überforderte Teams, Kunden die tagelang warten. Unsere Services sind genau darauf zugeschnitten – nicht als Baukasten, sondern als fertige, sofort einsatzbereite Lösungen. Dein Team hat keine Zeit für technische Spielereien. Deshalb kümmern wir uns um alles."
            icon={Lightbulb}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-diverse-team-of-ai-specialists-solar-i-1774010018835-1f0ee5d9.png"
            imageAlt="About Team"
            mediaAnimation="blur-reveal"
            useInvertedBackground={false}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            title="Häufige Fragen zu unseren Services"
            description="Alles, was du über unsere KI-Services wissen musst"
            textboxLayout="default"
            useInvertedBackground={true}
            tag="FAQ"
            tagIcon={HelpCircle}
            tagAnimation="blur-reveal"
            faqsAnimation="blur-reveal"
            faqs={[
              {
                id: "1",                title: "Welcher Service passt am besten zu uns?",                content: "Das hängt von deinen aktuellen Bottlenecks ab. Wenn Anrufe dein Problem sind: KI-Telefonassistent. Wenn Terminkoordination Stunden kostet: KI-Buchungsagent. Wenn Anfragen tagelang liegen: KI-Chat-Agent. In unserem kostenlosen Gespräch analysieren wir gemeinsam, was dir den größten Hebel bringt."
              },
              {
                id: "2",                title: "Wie lange dauert die Implementierung?",                content: "Normalerweise 1–2 Wochen vom Kick-off bis zur Live-Schaltung. Das hängt davon ab, wie schnell wir deine CRM-Integration aufsetzen können, aber wir arbeiten effizient."
              },
              {
                id: "3",                title: "Was kostet das?",                content: "Die Investition hängt von der Komplexität ab. Der KI-Telefonassistent startet bei EUR X/Monat, benutzerdefinierte Services können mehr kosten. In unserem kostenlosen Erstgespräch erstellen wir ein konkretes Angebot für deinen Use Case."
              },
              {
                id: "4",                title: "Ist das wirklich DSGVO-konform?",                content: "Ja. Alle Daten bleiben auf Servern in Deutschland. Keine Verstöße gegen Datenschutz. Wir nehmen Datensicherheit sehr ernst und können vollständige Compliance-Dokumentation bereitstellen."
              },
              {
                id: "5",                title: "Brauchen wir spezielle IT-Kenntnisse?",                content: "Nein. Du brauchst keine technischen Kenntnisse. Wir kümmern uns um alles: CRM-Integration, Kalender-Anbindung, Agent-Training. Du musst nur das Geschäft verstehen – und das tust du ja."
              },
              {
                id: "6",                title: "Können wir den Agent später wieder abschalten oder anpassen?",                content: "Jederzeit. Wenn dir der Service nicht passt, kannst du ihn kündigen. Wenn du Anpassungen brauchst, arbeiten wir zusammen daran. Der Agent ist flexibel und kann jederzeit optimiert werden."
              }
            ]}
          />
        </div>

        <div id="closing-cta" data-section="closing-cta">
          <ContactSplit
            tag="Bereit zu starten?"
            title="Lass dein Team wieder arbeiten statt Routine-Aufgaben zu erledigen"
            description="Buche jetzt dein kostenloses Gespräch und erfahre, welcher Service dir den größten Hebel bringt. Keine versteckten Gebühren, keine langen Verträge – nur ehrliche Beratung."
            tagIcon={Rocket}
            tagAnimation="blur-reveal"
            background={{ variant: "radial-gradient" }}
            useInvertedBackground={true}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-inspiring-visualization-showing-a-sol-1774010018283-dee187fe.png"
            imageAlt="Closing CTA"
            mediaAnimation="blur-reveal"
            mediaPosition="right"
            inputPlaceholder="deine@email.de"
            buttonText="👉 Kostenloses Gespräch buchen"
            termsText="Kostenlos, unverbindlich, 30 Min. Beratung"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="VoiceLinkAI"
            columns={[
              {
                title: "Services",                items: [
                  { label: "KI-Telefonassistent", href: "/services" },
                  { label: "KI-Buchungsagent", href: "/services" },
                  { label: "KI-Chat-Agent", href: "/services" },
                  { label: "Custom Lösungen", href: "/services" }
                ]
              },
              {
                title: "Unternehmen",                items: [
                  { label: "Über uns", href: "/about" },
                  { label: "So funktioniert's", href: "/#howitworks" },
                  { label: "Kontakt", href: "/services" }
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
