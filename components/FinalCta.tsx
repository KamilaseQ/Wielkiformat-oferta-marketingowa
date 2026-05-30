import { Phone } from "lucide-react";
import { CONTACTS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section id="kontakt" className="bg-aurora relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Fundament masz. <span className="text-gradient-gold">Reszta to skala.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Wielki Format ma działający system sprzedaży offline. Pakiety różnią się
            skalą ekspansji online — od porządku, przez markę, po pełny ekosystem.
            Wariant dobierzemy wspólnie, pod Twoje cele.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-12 text-sm font-semibold uppercase tracking-widest text-ink-faint">
            Pytania do oferty? Dzwoń:
          </p>
          <div className="mx-auto mt-5 grid max-w-xl gap-3 sm:grid-cols-2">
            {CONTACTS.map((c) => (
              <a
                key={c.name}
                href={`tel:${c.phone}`}
                className="glass flex items-center justify-center gap-3 rounded-xl px-6 py-4 font-semibold text-ink transition hover:border-brand-400/50 hover:bg-white/[0.07]"
              >
                <Phone className="h-4 w-4 text-brand-300" />
                <span>
                  {c.name}
                  <span className="ml-2 font-normal text-ink-muted">
                    {c.phoneDisplay}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <p className="mt-14 text-sm text-ink-faint">
          Wielki Format · Król Artur — pełna widoczność online
        </p>
      </div>
    </section>
  );
}
