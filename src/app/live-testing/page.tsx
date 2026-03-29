"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

const navItems = [
  { name: "Home", id: "/" },
  { name: "About", id: "/about" },
  { name: "Contact", id: "/contact" },
  { name: "Services", id: "/services" }
];

export default function LiveTestingPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="noiseDiagonalGradient" cardStyle="glass-elevated" primaryButtonStyle="primary-glow" secondaryButtonStyle="glass" headingFontWeight="normal">
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline navItems={navItems} button={{ text: "Get Started", href: "/contact" }} />
      </div>
      <div id="live-testing" data-section="live-testing" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Live Testing</h1>
        </div>
      </div>
    </ThemeProvider>
  );
}