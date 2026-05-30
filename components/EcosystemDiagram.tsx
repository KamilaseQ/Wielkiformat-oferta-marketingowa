import type { EcosystemNode } from "@/lib/data";

interface EcosystemDiagramProps {
  nodes: EcosystemNode[];
}

/**
 * Schemat strategii dla najwyższego pakietu.
 * Pokazuje, że każdy kanał ma jasno przypisaną rolę — a razem tworzą jeden
 * spójny system. Wszystkie węzły są równorzędne (żaden nie jest „bazą” dla reszty).
 */
export function EcosystemDiagram({ nodes }: EcosystemDiagramProps) {
  return (
    <div className="relative">
      <ol className="relative ml-3 space-y-3 border-l border-gold-500/25 pl-6">
        {nodes.map((node) => (
          <li key={node.channel} className="relative">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-gold-400 ring-4 ring-card-2" />
            <div className="rounded-xl border border-border bg-white/[0.02] p-4">
              <span className="font-semibold text-ink">{node.channel}</span>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{node.role}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-5 rounded-xl border border-gold-500/30 bg-gold-500/5 p-4 text-sm leading-relaxed text-ink-muted">
        <span className="font-semibold text-ink">Każdy element gra inną rolę.</span>{" "}
        Razem tworzą jeden spójny wizerunek — marki firmy i Artura — obecny na
        wszystkich kanałach, z których korzystają klienci.
      </p>
    </div>
  );
}
