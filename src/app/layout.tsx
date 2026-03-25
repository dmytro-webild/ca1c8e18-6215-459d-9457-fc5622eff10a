import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'VoiceLinkAI – KI-Agenten für Solarunternehmen',
  description: 'Automatisieren Sie Routineaufgaben mit KI-Agenten speziell für Solarunternehmen. 24/7 Kundenservice, intelligente Terminbuchung, Chat-Automation – DSGVO-konform, in 1–2 Wochen live.',
};


const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}
