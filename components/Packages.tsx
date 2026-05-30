"use client";

import { useState } from "react";
import { PACKAGES, type Package } from "@/lib/data";
import { PackageCard } from "@/components/PackageCard";
import { PackageDetail } from "@/components/PackageDetail";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Packages() {
  const [active, setActive] = useState<Package | null>(null);
  const [open, setOpen] = useState(false);

  const openPackage = (pkg: Package) => {
    setActive(pkg);
    setOpen(true);
  };

  return (
    <section id="oferta" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Oferta"
          title="Trzy poziomy ekspansji"
          subtitle="Trzy etapy budowania widoczności — od porządku, przez markę, po pełny ekosystem. Każdy wyższy pakiet zawiera wszystko z poprzedniego. Kliknij pakiet, by zobaczyć szczegóły."
        />
      </Reveal>

      <div className="mt-16 grid items-start gap-6 lg:grid-cols-3">
        {PACKAGES.map((pkg, i) => (
          <Reveal key={pkg.id} delay={i * 0.1}>
            <PackageCard pkg={pkg} onOpen={() => openPackage(pkg)} />
          </Reveal>
        ))}
      </div>

      <PackageDetail pkg={active} open={open} onOpenChange={setOpen} />
    </section>
  );
}
