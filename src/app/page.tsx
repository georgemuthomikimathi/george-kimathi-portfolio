import Image from "next/image";
import { Award, ExternalLink, GraduationCap, Wrench } from "lucide-react";
import { persona } from "@/data/persona";
import { PortfolioNav } from "@/components/PortfolioNav";

const highlightIcons = {
  Degree: GraduationCap,
  Honours: Award,
  Focus: Wrench,
} as const;

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-navy/10 bg-white/95 backdrop-blur-md">
        <div className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="pro-heading text-lg font-semibold text-navy transition-colors hover:text-navy-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {persona.shortName}
          </a>
          <PortfolioNav />
        </div>
      </header>

      <section className="border-b border-navy/10 bg-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1fr_200px] md:items-center md:py-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-gold">GK Lab · Portfolio</p>
            <h1 className="pro-heading mt-2 text-4xl font-bold text-navy md:text-5xl">{persona.name}</h1>
            <p className="mt-3 text-xl text-navy-light">{persona.title}</p>
            <p className="mt-4 max-w-xl leading-relaxed text-navy/70">{persona.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={persona.shopUrl}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm text-white transition-colors duration-200 hover:bg-navy-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                GK Lab Store
              </a>
              <a
                href={persona.vibeUrl}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-navy/20 px-5 py-2.5 text-sm text-navy transition-colors duration-200 hover:bg-navy/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                GK WOO
              </a>
              <a
                href={persona.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-gold/30 px-5 py-2.5 text-sm text-gold transition-colors duration-200 hover:bg-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                YouTube
              </a>
            </div>
          </div>
          <div className="relative mx-auto flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border-4 border-gold/30 bg-navy shadow-lg transition-shadow duration-200 hover:shadow-xl md:mx-0">
            <Image
              src="/assets/brand/Georgie the Educator Logo.png"
              alt="Georgie the Educator"
              width={160}
              height={160}
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {persona.highlights.map((item) => {
            const Icon = highlightIcons[item.label as keyof typeof highlightIcons];
            return (
              <div
                key={item.label}
                className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all duration-200 hover:border-gold/20 hover:shadow-md"
              >
                <Icon className="h-6 w-6 text-gold" aria-hidden />
                <p className="mt-3 text-xs uppercase tracking-wider text-navy/50">{item.label}</p>
                <p className="mt-1 text-sm font-medium text-navy">{item.value}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="timeline" className="border-y border-navy/10 bg-white py-16 scroll-mt-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="pro-heading text-3xl font-bold text-navy">Journey</h2>
          <p className="mt-2 text-navy/60">Kenya → Southern Africa → United States</p>
          <div className="mt-10 space-y-0">
            {persona.timeline.map((item, i) => (
              <div key={item.year} className="relative flex gap-6 pb-10">
                {i < persona.timeline.length - 1 && (
                  <div className="absolute left-[7px] top-3 h-full w-px bg-navy/15" aria-hidden />
                )}
                <div className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-gold bg-white" aria-hidden />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">{item.year}</p>
                  <p className="mt-1 font-semibold text-navy">
                    {item.place}{" "}
                    <span className="font-normal text-navy/50">{item.country}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-navy/70">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-navy/10 bg-white py-16 scroll-mt-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="pro-heading text-3xl font-bold text-navy">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {persona.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-navy/15 bg-cream px-4 py-2 text-sm text-navy transition-colors duration-200 hover:border-gold/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-16">
        <h2 className="pro-heading text-3xl font-bold text-navy">Projects</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {persona.projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[88px] items-start justify-between rounded-xl border border-navy/10 bg-white p-5 shadow-sm transition-all duration-200 hover:border-gold/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <div>
                <p className="font-semibold text-navy">{project.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-navy/60">{project.desc}</p>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 text-navy/30" aria-hidden />
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-navy/10 bg-navy py-10 text-center text-sm text-white/70">
        <p>{persona.name} · {persona.title}</p>
        <p className="mt-2">
          <a href={persona.vibeUrl} className="underline transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
            GK WOO
          </a>
          {" · "}
          <a href={persona.shopUrl} className="underline transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
            GK Lab store
          </a>
        </p>
      </footer>
    </div>
  );
}
