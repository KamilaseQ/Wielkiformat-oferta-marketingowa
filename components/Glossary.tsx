import Image from "next/image";
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
              <div className="glass group flex h-full flex-col overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-night">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/90 via-night/40 to-transparent px-4 pb-3 pt-10">
                    <span className="text-xs font-medium text-white/90">
                      {item.mockupLabel}
                    </span>
                  </div>
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
