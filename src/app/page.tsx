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
import { AlertCircle, Bot, HelpCircle, Info, Lightbulb, Rocket, Sparkles, Workflow, Zap, MessageSquare, TrendingUp, Shield, Headphones, Calendar, Phone } from 'lucide-react';

const animatedBorderStyle = `
  [data-section] {
    border: 1px solid rgba(249, 115, 22, 0.3);
  }

  .vs-infographic {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background: #111827;
    border-radius: 12px;
    border: 1px solid #1f2937;
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

  .vs-badge {
    background: #f97316;
    padding: 0.75rem 1.25rem;
    border-radius: 50px;
    font-weight: 700;
    color: #ffffff;
  }

  .vs-stat {
    padding: 1.5rem;
    background: #0a0f1e;
    border: 1px solid #1f2937;
    border-radius: 8px;
  }

  .vs-stat-value {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #f97316;
  }

  .vs-stat-label {
    font-size: 0.875rem;
    color: #94a3b8;
  }

  .call-agent-section {
    width: 100%;
    background: #0a0f1e;
    padding: 4rem 2rem;
    border-top: 1px solid #1f2937;
    border-bottom: 1px solid #1f2937;
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

  .call-agent-cta {
    display: inline-block;
    margin-top: 1rem;
    padding: 1rem 2rem;
    background: #f97316;
    color: #ffffff;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    .call-agent-container {
      grid-template-columns: 1fr;
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
            brandName="VoicelinkSolarAi"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboard
            title="Voller Auftragskalender. Überlastetes Team. Kunden, die trotzdem warten."
            description="Die meisten Solarunternehmen haben kein Problem mit zu wenig Anfragen – sie haben ein Problem damit, sie ordentlich zu bearbeiten. Kunden warten tagelang auf Rückmeldung, dein Team versinkt in Routineaufgaben, und nach der Installation ruft jeder zweite Kunde wegen Kleinigkeiten an. Wir automatisieren genau diese Prozesse – mit KI-Agenten, die deinem Team die Arbeit abnehmen, die keinen Menschen braucht."
            background={{ variant: "radial-gradient" }}
            tag="KI-Automation für Solarunternehmen"
            tagIcon={Zap}
            buttons={[{ text: "👉 Kostenloses Erstgespräch buchen", href: "https://calendly.com/voicelinkai/info" }]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-modern-sleek-software-dashboard-interf-1774010018435-0a6597cd.png?_wi=1"
          />
        </div>

        <div id="call-agent" data-section="call-agent" className="call-agent-section">
          <div className="call-agent-container">
            <div className="call-agent-content">
              <h2 className="text-4xl font-bold text-white">Besucher können deinen KI-Agenten jetzt anrufen</h2>
              <p className="text-slate-400">Dein virtueller Assistent nimmt Anrufe entgegen, beantwortet Fragen und bucht Termine – 24/7.</p>
              <a href="https://calendly.com/voicelinkai/info" className="call-agent-cta">👉 Live-Demo anfordern</a>
            </div>
          </div>
        </div>

        <div id="statistics" data-section="statistics">
          <div className="vs-infographic">
            <div className="vs-container">
              <div className="vs-column left">
                <div className="vs-stat">
                  <div className="vs-stat-value">38%</div>
                  <div className="vs-stat-label">Routineanfragen manuell</div>
                </div>
              </div>
              <div className="vs-badge">VS</div>
              <div className="vs-column right">
                <div className="vs-stat">
                  <div className="vs-stat-value">100%</div>
                  <div className="vs-stat-label">Keine Anrufe verloren</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="problems" data-section="problems">
          <FeatureCardNineteen
            title="Was dich täglich Kapazität kostet"
            description="Die größten Zeitfresser in Solarunternehmen"
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              { id: 1, tag: "Telefon", title: "Routineanrufe", description: "Dein Team ist auf dem Dach, nicht am Telefon.", subtitle: "" },
              { id: 2, tag: "Termine", title: "Terminkoordination", description: "Manuelle Abstimmung kostet Stunden.", subtitle: "" },
              { id: 3, tag: "Anfragen", title: "Verwaltung", description: "Anfragen bleiben liegen.", subtitle: "" }
            ]}
          />
        </div>

        <div id="solution" data-section="solution">
          <TestimonialAboutCard
            tag="Unsere Lösung"
            tagIcon={Sparkles}
            title="KI-Agenten für Solar"
            description="Wir bauen keine Software zum selbst Klicken."
            subdescription="Wir liefern fertige, einsatzbereite Agenten, die deinen Betrieb verstehen."
            icon={Zap}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/a-sophisticated-diagram-showing-seamless-1774010017346-e1338d62.png"
            useInvertedBackground={true}
          />
        </div>

        <div id="agents" data-section="agents">
          <FeatureBento
            title="Die KI-Agenten"
            description="Automatisierung für Solarbetriebe"
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="blur-reveal"
            features={[
              { title: "Telefon", description: "Anrufe 24/7", bentoComponent: "phone", statusIcon: Zap, alertIcon: AlertCircle, alertTitle: "", alertMessage: "", apps: [] },
              { title: "Termine", description: "Automatische Buchung", bentoComponent: "timeline", heading: "", subheading: "", items: [{ label: "", detail: "" }], completedLabel: "" },
              { title: "Chat", description: "Lead Qualifizierung", bentoComponent: "chat", aiIcon: Bot, userIcon: MessageSquare, exchanges: [], placeholder: "" }
            ]}
          />
        </div>

        <div id="howitworks" data-section="howitworks">
          <FeatureCardNineteen
            title="In 3 Schritten starten"
            description=""
            textboxLayout="default"
            useInvertedBackground={true}
            features={[
              { id: 1, tag: "Schritt 1", title: "Analyse", description: "Wir identifizieren deine Zeitfresser.", subtitle: "" },
              { id: 2, tag: "Schritt 2", title: "Training", description: "Anpassung auf deine Prozesse.", subtitle: "" },
              { id: 3, tag: "Schritt 3", title: "Live", description: "Nach 1-2 Wochen im Einsatz.", subtitle: "" }
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <TestimonialAboutCard
            tag="Über uns"
            tagIcon={Info}
            title="Fertige KI-Agenten"
            description="Wir nehmen dir die Arbeit ab."
            subdescription="Konzeption, Training, Integration – komplett aus einer Hand."
            icon={Lightbulb}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BD3dlR7FZEi8PoUil2VldNiisn/an-inspiring-visualization-showing-a-sol-1774010018283-dee187fe.png"
            useInvertedBackground={false}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            title="Häufige Fragen"
            description=""
            textboxLayout="default"
            useInvertedBackground={true}
            faqsAnimation="blur-reveal"
            faqs={[
              { id: "1", title: "Was bringt KI?", content: "Entlastung von Routinearbeit, nicht mehr Leads." },
              { id: "2", title: "Was macht der Agent?", content: "Anrufe, Termine, Qualifizierung." },
              { id: "3", title: "Wie schnell?", content: "1-2 Wochen." }
            ]}
          />
        </div>

        <div id="bottom-cta" data-section="bottom-cta">
          <div className="bg-slate-900 p-12 text-center border border-orange-500/30 rounded-xl max-w-4xl mx-auto my-12">
            <h2 className="text-3xl font-bold text-white mb-6">Bereit für Veränderung?</h2>
            <p className="text-slate-400 mb-8">Buche jetzt dein Erstgespräch.</p>
            <a href="https://calendly.com/voicelinkai/info" className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold">👉 Kostenloses Erstgespräch buchen</a>
          </div>
        </div>

        <div id="closing-cta" data-section="closing-cta">
          <ContactSplit
            tag="Bereit?"
            title="Dein Team sollte bauen – nicht telefonieren"
            description="Lass uns deine Zeitfresser analysieren."
            tagIcon={Rocket}
            background={{ variant: "radial-gradient" }}
            useInvertedBackground={true}
            buttonText="👉 Prozessanalyse buchen"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="VoiceLinkAI"
            columns={[
              { title: "Produkt", items: [{ label: "Telefon", href: "#" }, { label: "Termine", href: "#" }] },
              { title: "Unternehmen", items: [{ label: "Über uns", href: "#" }, { label: "Kontakt", href: "#" }] },
              { title: "Rechtliches", items: [{ label: "Impressum", href: "#" }, { label: "Datenschutz", href: "#" }] }
            ]}
            copyrightText="© 2025 VoiceLinkAI. Alle Rechte vorbehalten."
          />
        </div>
      </ThemeProvider>
    </>
  );
}