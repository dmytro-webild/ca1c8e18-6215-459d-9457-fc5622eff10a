"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { Sparkles, Clock, Activity, Phone } from 'lucide-react'; // Import necessary icons

const uberUnsSectionStyle = `
  @keyframes blink-dot-animation {
    0%, 49%, 100% { opacity: 1; }
    50%, 99% { opacity: 0.3; }
  }

  @keyframes float-card-animation {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
  }

  /* Base styles for the section container */
  .uber-uns-section-container {
    background-color: #0a0f1e; /* Dark navy */
  }

  /* Left Column */
  .badge-dot {
    animation: blink-dot-animation 1.5s ease-in-out infinite;
  }

  .about-stat-card-float {
    animation: float-card-animation 3s ease-in-out infinite;
  }
  .about-stat-card-float.card-1 {
    animation-delay: 0s;
  }
  .about-stat-card-float.card-2 {
    animation-delay: 0.5s;
  }
  .about-stat-card-float.card-3 {
    animation-delay: 1s;
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .uber-uns-section-grid {
      grid-template-columns: 1fr; /* Stack columns on mobile */
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    .uber-uns-section-container {
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
    }
    .stat-cards-container {
        gap: 1.5rem;
    }
  }

  @media (min-width: 769px) and (max-width: 960px) {
    .uber-uns-section-grid {
        /* On tablets, keep 2 columns but adjust gap/max-width for better fit */
        gap: 2rem;
        max-width: 800px;
    }
    .stat-cards-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 2 cards per row */
        gap: 1.5rem;
    }
    .stat-cards-container .about-stat-card-float:last-child {
        grid-column: 1 / span 2; /* Make the last card span two columns */
        max-width: 50%; /* Center the last card if there are 3 */
        margin-left: auto;
        margin-right: auto;
    }
  }
  @media (min-width: 961px) {
    .stat-cards-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .stat-cards-container .about-stat-card-float {
      /* Reset any tablet-specific grid properties */
      max-width: none;
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

export default function UberUnsPage() {
    return (
        <>
            <style>{uberUnsSectionStyle}</style>
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
                            { name: "Über uns", id: "/uber-uns" }
                        ]}
                        button={{ text: "Kostenloses Erstgespräch", href: "https://calendly.com/voicelinkai/info" }}
                        brandName="VoiceLinkAI"
                    />
                </div>

                <div id="uber-uns" data-section="uber-uns" className="uber-uns-section-container relative w-full overflow-hidden py-18 md:py-24">
                    <div className="uber-uns-section-grid mx-auto max-w-[960px] px-4 md:px-8 lg:px-12 py-18 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        {/* Left Column */}
                        <div className="flex flex-col gap-8 md:gap-10">
                            <div className="flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-orange-700 bg-[rgba(249,115,22,0.1)] text-orange-500 font-semibold text-sm relative overflow-hidden">
                                <span className="relative flex h-2 w-2">
                                    <span className="badge-dot absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                <span>ÜBER UNS</span>
                            </div>
                            <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                                Wir bauen keine Software.<br />
                                Wir lösen <span className="text-orange-500">echte Probleme</span><br />
                                im Solarhandwerk.
                            </h1>
                            <div className="flex flex-col gap-6 text-gray-400 text-base leading-relaxed">
                                <p>
                                    VoiceLinkAI ist keine Plattform, die du dir selbst
                                    zusammenklicken musst. Wir entwickeln fertige KI-Agenten,
                                    die direkt in deinen Betrieb integriert werden – abgestimmt
                                    auf die Sprache, die Prozesse und die Herausforderungen
                                    von Solarunternehmen.
                                    <br /><br />
                                    <strong className="text-white">fertige KI-Agenten</strong>
                                </p>
                                <p>
                                    Unsere Kunden sind Solarunternehmen mit 3 bis 50 Mitarbeitern,
                                    die in der Auftragsspitze nicht zusammenbrechen wollen –
                                    und deren Team endlich wieder Zeit für die eigentliche Arbeit
                                    haben soll: Anlagen bauen, Kunden beraten, Aufträge abschließen.
                                    <br /><br />
                                    <strong className="text-white">Solarunternehmen mit 3 bis 50 Mitarbeitern</strong>
                                </p>
                            </div>
                            <div className="border-l-3 border-orange-500 bg-[rgba(249,115,22,0.05)] text-white text-sm italic rounded-r-lg p-6 mt-4">
                                "Wir übernehmen alles – von der Konzeption bis zur Integration.
                                Du musst nichts einrichten, nichts lernen.
                                Dein Agent arbeitet ab Tag eins."
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                <div className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center text-orange-500 font-bold border-2 border-orange-500">
                                    FS
                                </div>
                                <div>
                                    <div className="text-white text-base font-bold">Florian Schüßler</div>
                                    <div className="text-gray-400 text-xs">Gründer, VoiceLinkAI</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Stat Cards */}
                        <div className="flex flex-col gap-6 md:gap-8 mt-8 md:mt-0 relative stat-cards-container">
                            {/* Card 1 */}
                            <div className="about-stat-card-float card-1 bg-[--card] border border-[rgba(249,115,22,0.15)] rounded-2xl p-6 transition-all duration-300 ease-in-out hover:border-[rgba(249,115,22,0.4)]">
                                <div className="flex items-start gap-4">
                                    <Clock size={24} className="text-orange-500 flex-shrink-0" />
                                    <div>
                                        <div className="text-orange-500 text-2xl font-bold leading-tight">1–2 Wo.</div>
                                        <div className="text-white text-sm font-semibold mt-1">Bis dein Agent live ist</div>
                                        <div className="text-gray-400 text-xs mt-1 leading-relaxed">Kein monatelanger Einführungsprozess – wir liefern schnell und fertig</div>
                                    </div>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="about-stat-card-float card-2 bg-[--card] border border-[rgba(249,115,22,0.15)] rounded-2xl p-6 transition-all duration-300 ease-in-out hover:border-[rgba(249,115,22,0.4)]">
                                <div className="flex items-start gap-4">
                                    <Activity size={24} className="text-orange-500 flex-shrink-0" />
                                    <div>
                                        <div className="text-orange-500 text-2xl font-bold leading-tight">120+</div>
                                        <div className="text-white text-sm font-semibold mt-1">Stunden pro Monat gespart</div>
                                        <div className="text-gray-400 text-xs mt-1 leading-relaxed">Routineaufgaben die kein Mensch mehr erledigen muss</div>
                                    </div>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="about-stat-card-float card-3 bg-[--card] border border-[rgba(249,115,22,0.15)] rounded-2xl p-6 transition-all duration-300 ease-in-out hover:border-[rgba(249,115,22,0.4)]">
                                <div className="flex items-start gap-4">
                                    <Phone size={24} className="text-orange-500 flex-shrink-0" />
                                    <div>
                                        <div className="text-orange-500 text-2xl font-bold leading-tight">100%</div>
                                        <div className="text-white text-sm font-semibold mt-1">Anrufe werden angenommen</div>
                                        <div className="text-gray-400 text-xs mt-1 leading-relaxed">Kein Lead geht mehr verloren – 24/7, auch wenn das Team auf dem Dach ist</div>
                                    </div>
                                </div>
                            </div>
                            {/* Pills below cards */}
                            <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
                                <span className="px-3 py-1 rounded-full border border-orange-500 bg-[--background] text-orange-500 text-xs font-medium">DSGVO-konform</span>
                                <span className="px-3 py-1 rounded-full border border-orange-500 bg-[--background] text-orange-500 text-xs font-medium">Made in Germany</span>
                                <span className="px-3 py-1 rounded-full border border-orange-500 bg-[--background] text-orange-500 text-xs font-medium">Solar-spezialisiert</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
}
