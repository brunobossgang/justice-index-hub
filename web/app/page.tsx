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
    stats: "7.9M stops · 16 states · 2000–2020",
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
            transition={{ delay: 1.1, duration: 0.5 }}
            className="mt-12"
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
          <p className="text-slate-600">© 2026 Justice Index</p>
        </div>
      </footer>
    </>
  );
}
