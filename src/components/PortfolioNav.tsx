"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { persona } from "@/data/persona";
import { cn } from "@/lib/utils";

const links = [
  { href: "#timeline", label: "Journey", id: "timeline" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
];

export function PortfolioNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const linkClass = (id: string) =>
    cn(
      "rounded-md px-3 py-2 text-sm transition-colors duration-200",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
      active === id ? "font-medium text-navy" : "text-navy/70 hover:text-navy"
    );

  return (
    <>
      <nav className="hidden items-center gap-1 md:flex" aria-label="Page sections">
        {links.map((link) => (
          <a key={link.href} href={link.href} className={linkClass(link.id)} aria-current={active === link.id ? "true" : undefined}>
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
        className={cn(
          "flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-navy/10 text-navy transition-colors duration-200 md:hidden",
          "hover:border-gold/30 hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
          open && "border-gold/40 bg-cream"
        )}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-navy/20 backdrop-blur-[2px] md:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close menu overlay"
          />
          <div
            id="mobile-nav"
            className="absolute left-0 right-0 top-full z-50 border-b border-navy/10 bg-white px-6 py-4 shadow-lg md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "min-h-[44px] rounded-md px-3 py-3 text-sm transition-colors",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold",
                    active === link.id
                      ? "bg-cream font-medium text-navy"
                      : "text-navy/80 hover:bg-cream hover:text-navy"
                  )}
                  aria-current={active === link.id ? "true" : undefined}
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
        </>
      )}
    </>
  );
}
