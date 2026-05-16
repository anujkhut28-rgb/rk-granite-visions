import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/site/Eyebrow";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import factory from "@/assets/factory.jpg";
import hero from "@/assets/hero-main.jpg";
import marble from "@/assets/marble-hero.jpg";
import { granites } from "@/data/granites";
import { Award, ShieldCheck, Truck, Users, Building2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RKGB — Manufacturing Heritage in Natural Stone" },
      { name: "description", content: "Two decades of craftsmanship — RKGB's quarries, factories, certifications, and the people behind the world's most polished slabs." },
      { property: "og:title", content: "About RKGB" },
      { property: "og:description", content: "Two decades of craftsmanship in natural stone." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero — editorial split */}
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Eyebrow>Our Story</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl text-ink md:text-7xl text-balance">
            From a single quarry to the world&apos;s most ambitious facades.
          </h1>
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <img src={factory} alt="Manufacturing facility" loading="lazy" width={1600} height={1024} className="aspect-[16/10] w-full object-cover shadow-luxury" />
            <div className="self-end">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Radhe Krishna Granite &amp; BuildCon began in 1998 with a single belief — that
                stone, properly understood, is the most enduring material of architecture. Today
                we operate four facilities, employ over 600 craftspeople, and ship across 40+
                countries.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="font-serif text-4xl text-gold">1998</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Founded</div>
                </div>
                <div>
                  <div className="font-serif text-4xl text-gold">600+</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Craftspeople</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-beige py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Eyebrow>Our Journey</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl text-ink md:text-5xl">Twenty-five years in stone.</h2>
          <ol className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              { y: "1998", t: "Founded", d: "First quarry leased in Rajasthan." },
              { y: "2006", t: "Export Begins", d: "First container ships to the Gulf." },
              { y: "2014", t: "Mega Factory", d: "Integrated 500,000 sq.ft. processing plant." },
              { y: "2024", t: "Global Studio", d: "Design partnerships across four continents." },
            ].map((s, i) => (
              <li key={s.y} className="relative">
                <div className="font-serif text-5xl text-gold">{s.y}</div>
                <div className="luxury-divider my-4" />
                <div className="font-serif text-xl text-ink">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                {i < 3 && <span className="absolute right-0 top-6 hidden text-3xl text-border lg:block">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Process */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Eyebrow>Manufacturing</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl text-ink md:text-5xl">
                Five stages, one obsession.
              </h2>
              <p className="mt-6 text-muted-foreground">
                Every block follows a disciplined path from quarry face to crated export — with
                inspection gates at every transition.
              </p>
            </div>
            <ol className="space-y-8">
              {[
                ["Quarrying", "Block selection by senior geologists, with mineralogy tested on site."],
                ["Sawing", "Multi-wire gangsaws cut to architectural tolerance — ±1.5 mm."],
                ["Resining & Healing", "Surface stabilisation that protects structural integrity."],
                ["Polishing", "Sixteen-head lines that bring out the stone's optical depth."],
                ["Inspection & Packing", "Three-stage QC, edge-protected wooden crates, ocean-grade export."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-6 border-b border-border pb-8">
                  <span className="font-serif text-3xl text-gold w-12 shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-ink">{t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-ink py-28 text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Standards</p>
              <h2 className="mt-6 max-w-xl font-serif text-4xl md:text-5xl">
                Certified at every level of the supply chain.
              </h2>
            </div>
            <p className="max-w-sm text-background/60">
              We hold and exceed the industry&apos;s most stringent quality, safety, and
              environmental certifications.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { i: ShieldCheck, t: "ISO 9001:2015", d: "Quality management" },
              { i: Award, t: "CE Marked", d: "European compliance" },
              { i: Building2, t: "BIS Certified", d: "Indian standards" },
              { i: Truck, t: "Export House", d: "Govt. of India" },
            ].map((c) => (
              <div key={c.t} className="border border-background/15 p-8 transition hover:border-gold">
                <c.i className="h-8 w-8 text-gold" strokeWidth={1.2} />
                <div className="mt-6 font-serif text-xl">{c.t}</div>
                <div className="text-xs uppercase tracking-widest text-background/50">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Eyebrow>People</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl text-ink md:text-5xl">
            Craft is people. We invest in both.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "Rajesh Sharma", r: "Founder &amp; Chairman" },
              { n: "Priya Krishnan", r: "Director of Operations" },
              { n: "Amit Khanna", r: "Head of Exports" },
            ].map((p) => (
              <div key={p.n} className="bg-beige p-10 text-center">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-gold text-3xl font-serif text-background">
                  {p.n[0]}
                </div>
                <div className="mt-6 font-serif text-xl text-ink">{p.n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground" dangerouslySetInnerHTML={{ __html: p.r }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Eyebrow>Infrastructure</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl text-ink md:text-5xl">Inside the works.</h2>
          <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[240px]">
            <img src={factory} alt="Factory floor" loading="lazy" width={1600} height={1024} className="row-span-2 h-full w-full object-cover" />
            <img src={hero} alt="Polished slab" loading="lazy" width={1920} height={1280} className="h-full w-full object-cover" />
            <img src={marble} alt="Marble inspection" loading="lazy" width={1920} height={1280} className="h-full w-full object-cover col-span-2" />
            <img src={granites[0].slab} alt="Black granite" loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
            <img src={granites[7].slab} alt="Gold granite" loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
            <img src={granites[3].slab} alt="Blue granite" loading="lazy" width={1280} height={960} className="h-full w-full object-cover col-span-2 md:col-span-1" />
            <div className="hidden bg-ink text-background p-8 md:flex flex-col justify-end">
              <Users className="h-6 w-6 text-gold" strokeWidth={1.2} />
              <div className="mt-4 font-serif text-2xl">600+</div>
              <div className="text-xs uppercase tracking-widest text-background/60">Craftspeople</div>
            </div>
          </div>
        </div>
      </section>

      <QuoteCTA />
    </div>
  );
}