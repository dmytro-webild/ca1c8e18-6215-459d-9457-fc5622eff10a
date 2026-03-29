"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

const navItems = [
  { name: "Home", id: "/" },
  { name: "Über uns", id: "/about" },
  { name: "Agenten", id: "/agents" },
  { name: "Kontakt", id: "/contact" }
];

export default function ServicesPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="reveal-blur" borderRadius="pill" contentWidth="medium" sizing="medium" background="noiseDiagonalGradient" cardStyle="glass-elevated" primaryButtonStyle="primary-glow" secondaryButtonStyle="glass" headingFontWeight="semibold">
      <div id="nav" data-section="nav" className="bg-[#0a0f1e] text-white">
        <NavbarLayoutFloatingInline navItems={navItems} button={{ text: "Starten", href: "/contact" }} />
      </div>
      <div id="services" data-section="services" className="py-20 bg-[#0a0f1e] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Services</h1>
        </div>
      </div>
    </ThemeProvider>
  );
}