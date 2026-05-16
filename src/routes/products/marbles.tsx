import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow } from "@/components/site/Eyebrow";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import marble from "@/assets/marble-hero.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/products/marbles")({
  head: () => ({
    meta: [
      { title: "Marble Collection — Statuario, Carrara & Exotics | RKGB" },
      { name: "description", content: "Curated marble — Statuario, Carrara, Calacatta and exotic varieties for luxury interiors." },
      { property: "og:title", content: "Marble Collection | RKGB" },
      { property: "og:description", content: "Statuario, Carrara, Calacatta and exotic marbles." },
    ],
  }),
  component: MarblesPage,
});

const collections = [
  { name: "Statuario White", tone: "Pure white · grey veining", price: "Signature" },
  { name: "Carrara Classic", tone: "Soft grey · fine veining", price: "Heritage" },
  { name: "Calacatta Gold", tone: "White · warm gold veins", price: "Luxury" },
  { name: "Crema Marfil", tone: "Cream · subtle pattern", price: "Classic" },
  { name: "Emperador Dark", tone: "Brown · ivory veins", price: "Dramatic" },
  { name: "Onyx Honey", tone: "Translucent · backlit-ready", price: "Exotic" },
];

function MarblesPage() {
  return (
    <div>
      <section className="relative h-[80vh] min-h-[640px] overflow-hidden">
        <img src={marble} alt="Marble surface" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-12">
          <div className="max-w-2xl">
            <Eyebrow>The Marble Collection</Eyebrow>
            <h1 className="mt-6 font-serif text-5xl text-ink md:text-7xl text-balance">Soft light, sculpted by time.</h1>
            <p className="mt-6 max-w-md text-muted-foreground">Sourced from the world&apos;s most storied quarries — finished to a quietness that only marble can achieve.</p>
          </div>
        </div>
      </section>
      <section className="bg-background py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="border-t border-ink/20">
            {collections.map((m, i) => (
              <article key={m.name} className="group grid grid-cols-12 items-center gap-4 border-b border-ink/20 py-10 transition hover:bg-beige/40">
                <div className="col-span-1 font-serif text-2xl text-gold">{String(i + 1).padStart(2, "0")}</div>
                <div className="col-span-12 md:col-span-5"><h3 className="font-serif text-3xl text-ink md:text-4xl">{m.name}</h3></div>
                <div className="col-span-8 md:col-span-4 text-sm text-muted-foreground">{m.tone}</div>
                <div className="col-span-4 md:col-span-2 text-right text-xs uppercase tracking-widest text-gold">{m.price}</div>
              </article>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex h-12 items-center gap-2 bg-ink px-8 text-sm tracking-wide text-background hover:bg-gold transition">
              Request marble samples <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <QuoteCTA />
    </div>
  );
}