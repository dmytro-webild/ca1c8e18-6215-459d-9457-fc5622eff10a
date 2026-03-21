"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { Phone, Zap, Quote } from 'lucide-react';

const demoSectionStyle = `
  @keyframes phoneFloat {
    0%, 100% {
      transform: translateY(0px) rotateZ(-5deg);
    }
    50% {
      transform: translateY(-20px) rotateZ(-5deg);
    }
  }

  @keyframes pulseRing {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 140, 0, 0.7);
    }
    70% {
      box-shadow: 0 0 0 30px rgba(255, 140, 0, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 140, 0, 0);
    }
  }

  @keyframes liveBadgePulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  #demo {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(15, 20, 25, 0.5), rgba(26, 32, 45, 0.7));
  }

  .demo-container {
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .live-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1rem;
    background: linear-gradient(135deg, #ff8c00, #ffa500);
    border-radius: 50px;
    font-weight: 700;
    font-size: 0.875rem;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    box-shadow: 0 0 20px rgba(255, 140, 0, 0.6);
    border: 1px solid rgba(255, 140, 0, 0.8);
    margin-bottom: 1rem;
    animation: liveBadgePulse 2s ease-in-out infinite;
  }

  .live-badge::before {
    content: '';
    width: 8px;
    height: 8px;
    background: #ffffff;
    border-radius: 50%;
    animation: liveBadgePulse 2s ease-in-out infinite;
  }

  .demo-headline {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    text-align: center;
    color: #ffffff;
    margin: 0;
    line-height: 1.2;
  }

  .demo-subheadline {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    color: #b8bec8;
    text-align: center;
    margin: 0;
    line-height: 1.6;
    max-width: 600px;
  }

  .demo-card {
    background: linear-gradient(135deg, rgba(26, 32, 45, 0.8), rgba(15, 20, 25, 0.9));
    border: 1px solid rgba(255, 140, 0, 0.3);
    border-radius: 16px;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
  }

  .demo-card:hover {
    border-color: rgba(255, 140, 0, 0.6);
    box-shadow: 0 30px 80px rgba(255, 140, 0, 0.2);
  }

  .phone-icon-wrapper {
    position: relative;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .phone-icon-wrapper::before {
    content: '';
    position: absolute;
    inset: -10px;
    border: 2px solid rgba(255, 140, 0, 0.4);
    border-radius: 50%;
    animation: pulseRing 2s ease-out infinite;
  }

  .phone-icon {
    width: 80px;
    height: 80px;
    color: #ff8c00;
    animation: phoneFloat 3s ease-in-out infinite;
    position: relative;
    z-index: 1;
  }

  .phone-number-display {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 700;
    color: #ffa500;
    text-align: center;
    font-family: 'Courier New', monospace;
    letter-spacing: 0.1em;
    margin: 1rem 0;
  }

  .call-cta-button {
    padding: 1.25rem 2.5rem;
    background: linear-gradient(135deg, #ff8c00, #ffa500);
    border: none;
    border-radius: 50px;
    font-size: 1.125rem;
    font-weight: 700;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(255, 140, 0, 0.4);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .call-cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 50px rgba(255, 140, 0, 0.6);
  }

  .call-cta-button:active {
    transform: translateY(0);
  }

  .testimonial-section {
    width: 100%;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 140, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .testimonial-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(255, 165, 0, 0.05);
    border-left: 3px solid #ff8c00;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .testimonial-item:hover {
    background: rgba(255, 165, 0, 0.1);
  }

  .testimonial-quote {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    color: #e8eef7;
    font-size: 1rem;
    line-height: 1.6;
    font-style: italic;
  }

  .testimonial-quote svg {
    width: 24px;
    height: 24px;
    color: #ff8c00;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }

  .testimonial-author {
    font-weight: 700;
    color: #ffa500;
    font-size: 0.95rem;
    font-style: normal;
  }

  @media (max-width: 768px) {
    #demo {
      padding: 1.5rem;
    }

    .demo-container {
      gap: 2rem;
    }

    .demo-card {
      padding: 2rem 1.5rem;
      gap: 1.5rem;
    }

    .phone-icon-wrapper {
      width: 100px;
      height: 100px;
    }

    .phone-icon {
      width: 60px;
      height: 60px;
    }
  }
`;

export default function DemoPage() {
  const handleCall = () => {
    window.location.href = 'tel:+4930110188860';
  };

  return (
    <>
      <style>{demoSectionStyle}</style>
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
              { name: "Probleme", id: "/demo#hero" },
              { name: "Agenten", id: "/demo#agents" },
              { name: "So funktioniert's", id: "/demo#howitworks" },
              { name: "FAQ", id: "/demo#faq" }
            ]}
            button={{ text: "Kostenloses Erstgespräch", href: "https://calendly.com/voicelinkai/info" }}
            brandName="VoiceLinkAI"
          />
        </div>

        <div id="demo" data-section="demo">
          <div className="demo-container">
            <div className="live-badge">
              Live Demo
            </div>

            <div>
              <h1 className="demo-headline">Überzeuge dich selbst</h1>
              <p className="demo-subheadline">
                Rufe unseren KI-Agenten live an und erlebe, wie er dein Unternehmen unterstützen könnte. Jeder Anruf wird in Echtzeit von unserem System bearbeitet.
              </p>
            </div>

            <div className="demo-card">
              <div className="phone-icon-wrapper">
                <Phone className="phone-icon" />
              </div>

              <div className="phone-number-display">+49 30 110 188 860</div>

              <button className="call-cta-button" onClick={handleCall}>
                🎧 Jetzt anrufen
              </button>

              <div className="testimonial-section">
                <div className="testimonial-item">
                  <div className="testimonial-quote">
                    <Quote />
                    <span>
                      "Der Agent hat innerhalb von Sekunden meine Anfrage qualifiziert und alle wichtigen Informationen erfasst. Beeindruckend!"
                    </span>
                  </div>
                  <div className="testimonial-author">— Klaus M., Geschäftsführer Solarunternehmen</div>
                </div>

                <div className="testimonial-item">
                  <div className="testimonial-quote">
                    <Quote />
                    <span>
                      "Keine Wartezeiten, keine verpassten Anrufe. Das ist genau das, was wir brauchen, wenn alle im Außendienst sind."
                    </span>
                  </div>
                  <div className="testimonial-author">— Sarah L., Projektmanagerin</div>
                </div>

                <div className="testimonial-item">
                  <div className="testimonial-quote">
                    <Quote />
                    <span>
                      "Wir konnten unsere Angebotserstellung um 60% beschleunigen. Das war eine echte Gamechanger für unser Team."
                    </span>
                  </div>
                  <div className="testimonial-author">— Michael R., Vertriebsleiter</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
