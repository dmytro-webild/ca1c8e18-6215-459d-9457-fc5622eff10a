"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import Link from 'next/link';

const navItems = [
  { name: "Home", id: "/" },
  { name: "About", id: "/about" },
  { name: "Contact", id: "/contact" },
  { name: "Services", id: "/services" }
];

export default function ImpressumPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline navItems={navItems} />
      </div>
      <div id="impressum" data-section="impressum" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Impressum</h1>
        </div>
      </div>
    </ThemeProvider>
  );
}