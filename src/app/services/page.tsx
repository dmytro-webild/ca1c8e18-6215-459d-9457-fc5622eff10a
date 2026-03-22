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
              { name: "Services", id: "services" },
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
