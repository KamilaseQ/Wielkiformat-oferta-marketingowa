import { Hero } from "@/components/Hero";
import { MarketPanel } from "@/components/MarketPanel";
import { Potential } from "@/components/Potential";
import { Packages } from "@/components/Packages";
import { Glossary } from "@/components/Glossary";
import { FinalCta } from "@/components/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <MarketPanel />
      <Potential />
      <Packages />
      <Glossary />
      <FinalCta />
    </main>
  );
}
