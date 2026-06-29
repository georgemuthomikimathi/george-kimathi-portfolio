import type { Metadata } from "next";
import { george } from "@/data/george";
import "./globals.css";

export const metadata: Metadata = {
  title: `${george.name} — Portfolio`,
  description: `${george.title}. ${george.tagline}`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
