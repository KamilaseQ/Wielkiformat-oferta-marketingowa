import { ImageIcon } from "lucide-react";
import { GLOSSARY } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Glossary() {
  return (
    <section className="relative border-y border-border bg-night-2">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Słowniczek"
            title="Krótko: co znaczą pojęcia z oferty"
            subtitle="Bez żargonu. Każdy format pełni inną rolę — tu masz to wyjaśnione w jednym zdaniu."
          />
        </Reveal>

        <div className="mt-12 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GLOSSARY.map((item, i) => (
            <Reveal key={item.term} delay={(i % 4) * 0.06} className="h-full">
              <div className="glass flex h-full flex-col overflow-hidden rounded-2xl">
                {/* Placeholder na mockup — do podmiany na grafikę */}
                <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 border-b border-border bg-white/[0.02] text-ink-faint">
                  <ImageIcon className="h-7 w-7" />
                  <span className="px-3 text-center text-xs">{item.mockupLabel}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold text-ink">{item.term}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.definition}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
