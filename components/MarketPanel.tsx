"use client";

import { TrendingUp, ArrowUpRight } from "lucide-react";
import { MARKET_STATS } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function MarketPanel() {
  const stats = MARKET_STATS.filter((s) => !s.conclusion);
  const conclusion = MARKET_STATS.find((s) => s.conclusion);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Rynek"
          title="Marketing to nie dodatek. To podstawa działania na szeroką skalę."
          subtitle="Kilka liczb dla kontekstu — żeby pokazać, gdzie toczy się gra."
        />
      </Reveal>

      <div className="mt-12 grid auto-rows-fr gap-4 md:grid-cols-3">
        {stats.map((stat, i) => (
          <Reveal key={stat.title} delay={i * 0.08} className="h-full">
            <div className="glass h-full rounded-2xl p-6">
              <TrendingUp className="mb-5 h-6 w-6 text-brand-400" />
              <div className="font-mono text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </div>
              <p className="mt-3 font-semibold text-ink">{stat.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {stat.description}
              </p>
              {stat.source && (
                <p className="mt-4 text-xs uppercase tracking-wider text-ink-faint">
                  źródło: {stat.source}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {conclusion && (
        <Reveal delay={0.1}>
          <div className="relative mt-4 flex flex-col gap-4 overflow-hidden rounded-2xl border border-gold-500/40 bg-gradient-to-br from-gold-500/[0.12] to-transparent p-7 sm:flex-row sm:items-start sm:gap-6 sm:p-9">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300">
              <ArrowUpRight className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-300 sm:text-sm">
                {conclusion.title}
              </p>
              <p className="mt-2 max-w-2xl text-lg font-medium leading-relaxed text-ink">
                {conclusion.description}
              </p>
            </div>
          </div>
        </Reveal>
      )}
    </section>
  );
}
