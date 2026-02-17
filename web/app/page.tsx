"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setVal(t * end);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end]);

  return (
    <span ref={ref} className="tabular-nums">
      {val.toFixed(1)}
      {suffix}
    </span>
  );
}

const investigations = [
  {
    emoji: "🚔",
    title: "Same Stop, Different Outcome",
    url: "https://samestopdifferentoutcome.org",
    github: "https://github.com/brunobossgang/same-stop",
    accent: "rose",
    stats: "8.6M stops · 18 states · 2000–2020",
    finding:
      "Black drivers searched at 2.2× the rate — contraband found less often",
    source: "Stanford Open Policing Project",
  },
  {
    emoji: "⚖️",
    title: "Same Crime, Different Time",
    url: "https://samecrimedifferenttime.org",
    github: "https://github.com/brunobossgang/justice-index",
    accent: "amber",
    stats: "1.3M cases · 23 years · 2002–2024",
    finding:
      "Minority defendants receive longer sentences after controlling for all legal factors — Black defendants get +3.85 extra months",
    source: "U.S. Sentencing Commission",
  },
  {
    emoji: "🏦",
    title: "Same Loan, Different Rate",
    url: "https://sameloandifferentrate.org",
    github: "https://github.com/brunobossgang/same-loan",
    accent: "emerald",
    stats: "15.3M loans · 51 states · 2018–2023",
    finding:
      "Hispanic borrowers pay +0.192pp and Black borrowers +0.161pp more above benchmark rates",
    source: "CFPB HMDA data",
  },
];

const accentClasses: Record<string, { border: string; bg: string; text: string; button: string }> = {
  rose: {
    border: "border-rose-500/30 hover:border-rose-500/60",
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    button: "bg-rose-600 hover:bg-rose-500",
  },
  amber: {
    border: "border-amber-500/30 hover:border-amber-500/60",
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    button: "bg-amber-600 hover:bg-amber-500",
  },
  emerald: {
    border: "border-emerald-500/30 hover:border-emerald-500/60",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    button: "bg-emerald-600 hover:bg-emerald-500",
  },
};

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-bold tracking-widest">
            JUSTICE INDEX
          </a>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#investigations" className="hover:text-white transition">
              Investigations
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a
              href="https://github.com/brunobossgang"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://x.com/Justice_Index"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
              aria-label="Twitter/X"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a
              href="https://instagram.com/justiceindex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold tracking-tight sm:text-7xl"
          >
            Justice Index
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 max-w-2xl text-xl text-slate-300 sm:text-2xl"
          >
            From the traffic stop — to the courtroom — to the bank.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-4 max-w-xl text-base text-slate-400"
          >
            Three data investigations exposing racial bias in American
            institutions. All public data. All open source.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg font-medium text-slate-300"
          >
            <span>
              <Counter end={15.3} suffix="M" /> mortgages
            </span>
            <span className="text-slate-600">·</span>
            <span>
              <Counter end={7.9} suffix="M" /> traffic stops
            </span>
            <span className="text-slate-600">·</span>
            <span>
              <Counter end={1.3} suffix="M" /> federal sentences
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="mt-10"
          >
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Same crime, different time. Same stop, different outcome. Same loan, different rate. The data speaks. justice-index.org via @Justice_Index")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 px-5 py-2.5 text-sm font-medium text-white transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Share on X
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="mt-6"
          >
            <a
              href="#investigations"
              className="text-sm text-slate-500 hover:text-white transition"
            >
              ↓ Explore the investigations
            </a>
          </motion.div>
        </section>

        {/* Investigation Cards */}
        <div
          id="investigations"
          className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20"
        >
          <Section>
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Three Investigations
            </h2>
          </Section>
          <div className="grid gap-8 md:grid-cols-3">
            {investigations.map((inv, i) => {
              const ac = accentClasses[inv.accent];
              return (
                <Section key={inv.title}>
                  <a
                    href={inv.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex h-full flex-col rounded-2xl border ${ac.border} bg-slate-900/50 p-8 transition-all duration-300 hover:bg-slate-900`}
                  >
                    <span className="text-4xl">{inv.emoji}</span>
                    <h3 className="mt-4 text-xl font-bold">{inv.title}</h3>
                    <p className={`mt-2 text-sm font-medium ${ac.text}`}>
                      {inv.stats}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                      &ldquo;{inv.finding}&rdquo;
                    </p>
                    <p className="mt-3 text-xs text-slate-600">
                      Source: {inv.source}
                    </p>
                    <span
                      className={`mt-6 inline-flex w-fit rounded-lg px-4 py-2 text-sm font-medium text-white ${ac.button} transition`}
                    >
                      Explore →
                    </span>
                  </a>
                </Section>
              );
            })}
          </div>
        </div>

        {/* Story Arc */}
        <Section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Bias follows people through every institution
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-400">
            On the street, police search minority drivers more — and find less.
            In the courtroom, minority defendants get longer sentences for the same
            crime. At the bank, minority borrowers pay higher rates for the same
            loan.
          </p>
          <p className="mt-6 text-base text-slate-500">
            These are not isolated incidents. They are systemic patterns,
            exposed through millions of public records.
          </p>
        </Section>

        {/* Follow CTA */}
        <Section className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-3">Follow the Investigation</p>
          <h2 className="text-2xl font-bold sm:text-3xl">Follow @Justice_Index for updates</h2>
          <p className="mt-4 text-slate-400">New investigations, data updates, and analysis — straight from the source.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://x.com/Justice_Index"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 px-6 py-3 text-sm font-medium text-white transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              @Justice_Index on X
            </a>
            <a
              href="https://instagram.com/justiceindex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 px-6 py-3 text-sm font-medium text-white transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              @justiceindex on Instagram
            </a>
          </div>
        </Section>

        {/* About */}
        <Section
          id="about"
          className="mx-auto max-w-3xl px-6 py-24 scroll-mt-20 text-center"
        >
          <h2 className="text-2xl font-bold sm:text-3xl">About</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Justice Index is an open-source data journalism project analyzing
            racial disparities across American institutions using exclusively
            public data.
          </p>
          <p className="mt-4 text-base text-slate-500">
            Open for scrutiny. Forkable. Reproducible.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            {investigations.map((inv) => (
              <a
                key={inv.url}
                href={inv.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-4 py-2 text-slate-400 hover:text-white hover:border-white/30 transition"
              >
                {inv.title} ↗
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-600">
            Built by Bruno Beckman
          </p>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-sm text-slate-500">
          <div className="flex flex-wrap justify-center gap-6">
            {investigations.map((inv) => (
              <a
                key={inv.url}
                href={inv.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                {inv.title}
              </a>
            ))}
            <a
              href="https://github.com/brunobossgang"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://x.com/Justice_Index"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              @Justice_Index on Twitter
            </a>
            <a
              href="https://instagram.com/justiceindex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              @justiceindex on Instagram
            </a>
          </div>
          <p className="text-slate-600">© 2026 Justice Index</p>
        </div>
      </footer>
    </>
  );
}
