"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, Download, ExternalLink, Github, GraduationCap, Wrench } from "lucide-react";
import { george } from "@/data/george";
import { persona } from "@/data/persona";
import { PortfolioNav } from "@/components/PortfolioNav";

function CredentialLightbox({ src, label, onClose }: { src: string; label: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div className="relative max-h-[90vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <p className="mb-2 text-center text-sm text-white">{label}</p>
        <Image src={src} alt={label} width={1200} height={1600} className="max-h-[80vh] w-auto rounded-lg object-contain" unoptimized />
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  return (
    <div className="min-h-screen">
      {lightbox && <CredentialLightbox {...lightbox} onClose={() => setLightbox(null)} />}

      <header className="sticky top-0 z-30 border-b border-navy/10 bg-white/95 backdrop-blur-md">
        <div className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="pro-heading text-lg font-semibold text-navy">{persona.shortName}</a>
          <PortfolioNav />
        </div>
      </header>

      <section className="border-b border-navy/10 bg-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1fr_200px] md:items-center md:py-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-gold">Portfolio</p>
            <h1 className="pro-heading mt-2 text-4xl font-bold text-navy md:text-5xl">{persona.tagline}</h1>
            <p className="mt-3 text-xl font-semibold text-navy">{persona.name}</p>
            <p className="mt-2 max-w-xl text-sm text-navy/70">{persona.subtagline}</p>
            <p className="mt-3 text-sm text-navy/50">{persona.title}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={george.github} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm text-white hover:bg-navy-light">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="/dossier/George-Kimathi-Credentials-Public.pdf" download className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-navy/20 px-5 py-2.5 text-sm text-navy hover:bg-navy/5">
                <Download className="h-4 w-4" /> Download Dossier PDF
              </a>
              <a href={george.vibeUrl} className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-gold/30 px-5 py-2.5 text-sm text-gold hover:bg-gold/10">
                GK WOO
              </a>
            </div>
          </div>
          <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-gold/30 shadow-lg md:mx-0">
            <Image
              src="/assets/credentials/KCSE Certificate.jpg"
              alt={persona.name}
              fill
              className="scale-150 object-cover object-top"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: GraduationCap, label: "Degree", value: george.degree },
            { icon: Award, label: "Honours", value: "Best Student ×2 (2015, 2016)" },
            { icon: Wrench, label: "IELTS", value: `Band ${george.ielts}` },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
              <item.icon className="h-6 w-6 text-gold" />
              <p className="mt-3 text-xs uppercase tracking-wider text-navy/50">{item.label}</p>
              <p className="mt-1 text-sm font-medium text-navy">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="timeline" className="scroll-mt-16 border-y border-navy/10 bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="pro-heading text-3xl font-bold text-navy">Journey</h2>
          <p className="mt-2 text-navy/60">Kenya → Namibia → United States</p>
          <div className="mt-10 space-y-0">
            {george.timeline.map((item, i) => (
              <div key={item.year} className="relative flex gap-6 pb-10">
                {i < george.timeline.length - 1 && (
                  <div className="absolute left-[7px] top-3 h-full w-px bg-navy/15" aria-hidden />
                )}
                <div className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-gold bg-white" aria-hidden />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">{item.year}</p>
                  <p className="mt-1 font-semibold text-navy">
                    {item.place} <span className="font-normal text-navy/50">{item.country}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-navy/70">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="credentials" className="scroll-mt-16 bg-cream py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="pro-heading text-3xl font-bold text-navy">Credentials</h2>
          <p className="mt-2 text-navy/60">Click to enlarge</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {george.credentials.map((cred) => (
              <button
                key={cred.file}
                type="button"
                onClick={() => setLightbox({ src: `/assets/credentials/${cred.file}`, label: cred.label })}
                className="group overflow-hidden rounded-xl border border-navy/10 bg-white text-left shadow-sm transition hover:border-gold/40 hover:shadow-md"
              >
                <div className="relative h-40 overflow-hidden bg-navy/5">
                  <Image
                    src={`/assets/credentials/${cred.file}`}
                    alt={cred.label}
                    fill
                    className="object-cover object-top transition group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <p className="p-3 text-sm font-medium text-navy">{cred.label}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-16 border-y border-navy/10 bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="pro-heading text-3xl font-bold text-navy">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {george.skills.map((skill) => (
              <span key={skill} className="rounded-full border border-navy/15 bg-cream px-4 py-2 text-sm text-navy">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-16">
        <h2 className="pro-heading text-3xl font-bold text-navy">Projects</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {george.projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[88px] items-start justify-between rounded-xl border border-navy/10 bg-white p-5 shadow-sm transition hover:border-gold/40 hover:shadow-md"
            >
              <div>
                <p className="font-semibold text-navy">{project.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-navy/60">{project.desc}</p>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 text-navy/30" />
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-navy/10 bg-navy py-10 text-center text-sm text-white/70">
        <p>{persona.name} · {persona.title}</p>
        <p className="mt-2">
          <a href={george.vibeUrl} className="underline hover:text-white">GK WOO</a>
          {" · "}
          <a href={george.shopUrl} className="underline hover:text-white">GK Lab</a>
        </p>
      </footer>
    </div>
  );
}
