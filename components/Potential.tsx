import { Check } from "lucide-react";
import { POTENTIAL_POINTS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Potential() {
  return (
    <section className="relative border-y border-border bg-night-2">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Potencjał"
            title="Masz mocny fundament. Online jest jeszcze do wzięcia."
            subtitle="Przestrzeń, której Wielki Format jeszcze nie zagospodarował — a konkurencja też nie. Fundament już stoi; teraz czas go skalować."
          />
        </Reveal>

        <div className="mt-12 grid auto-rows-fr gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {POTENTIAL_POINTS.map((point, i) => (
            <Reveal key={point.title} delay={(i % 3) * 0.06} className="h-full">
              <div className="flex h-full flex-col gap-3 bg-night p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-ink">{point.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{point.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
