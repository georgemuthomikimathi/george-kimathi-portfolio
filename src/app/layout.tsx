import type { Metadata } from "next";
import { persona } from "@/data/persona";
import "./globals.css";

export const metadata: Metadata = {
  title: `${persona.name} — Portfolio`,
  description: `${persona.tagline}. ${persona.subtagline}`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
