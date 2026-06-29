"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { persona } from "@/data/persona";

const links = [
  { href: "#timeline", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export function PortfolioNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="hidden items-center gap-1 md:flex" aria-label="Page sections">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-md px-3 py-2 text-sm text-navy/70 transition-colors duration-200 hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {link.label}
          </a>
        ))}
        <a
          href={persona.shopUrl}
          className="ml-2 rounded-full border border-navy/15 px-3 py-2 text-sm text-navy/70 transition-colors duration-200 hover:border-gold/40 hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          GK Lab
        </a>
      </nav>

      <button
        type="button"
        className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-navy/10 text-navy md:hidden"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div
          id="mobile-nav"
          className="absolute left-0 right-0 top-full border-b border-navy/10 bg-white px-6 py-4 shadow-lg md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="min-h-[44px] rounded-md px-3 py-3 text-sm text-navy/80 transition-colors hover:bg-cream hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href={persona.shopUrl}
              className="min-h-[44px] rounded-md px-3 py-3 text-sm font-medium text-gold transition-colors hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              GK Lab Store
            </a>
            <a
              href={persona.vibeUrl}
              className="min-h-[44px] rounded-md px-3 py-3 text-sm text-navy/80 transition-colors hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              GK WOO
            </a>
          </div>
        </div>
      )}
    </>
  );
}
