import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { granitesBySlug, granites, type Granite } from "@/data/granites";
import { Eyebrow } from "@/components/site/Eyebrow";
import { QuoteCTA } from "@/components/site/QuoteCTA";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products/granites/$slug")({
  head: ({ params }) => {
    const g = granitesBySlug[params.slug];
    if (!g) return { meta: [{ title: "Granite — RKGB" }] };
    return {
      meta: [
        { title: `${g.name} — ${g.tagline} | RKGB` },
        { name: "description", content: `${g.name}: ${g.shortDesc} Quarried in ${g.origin}.` },
        { property: "og:title", content: `${g.name} | RKGB` },
        { property: "og:description", content: g.shortDesc },
        { property: "og:image", content: g.project },
      ],
    };
  },
  loader: ({ params }) => {
    const g = granitesBySlug[params.slug];
    if (!g) throw notFound();
    return { granite: g };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-40 text-center">
      <h1 className="font-serif text-4xl text-ink">Stone not found</h1>
      <Link to="/products/granites" className="mt-6 inline-block text-gold underline">Back to collection</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-6 py-40 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: GraniteDetail,
});

function GraniteDetail() {
  const { granite } = Route.useLoaderData();
  const Layout = LAYOUTS[granite.layout as keyof typeof LAYOUTS];
  return (
    <div className="bg-background">
      <Layout g={granite} />
      <RelatedStrip current={granite.slug} />
      <QuoteCTA accent={granite.accentHex} />
    </div>
  );
}

const LAYOUTS = {
  editorial: EditorialLayout,
  split: SplitLayout,
  gallery: GalleryLayout,
  vertical: VerticalLayout,
  magazine: MagazineLayout,
} as const;

/* ──────────────────────────── Layout 1: EDITORIAL ──────────────────────────── */
function EditorialLayout({ g }: { g: Granite }) {
  return (
    <>
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        <img src={g.project} alt={g.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${g.accentHex}cc 0%, transparent 60%)` }} />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-16 lg:px-12">
          <Crumbs g={g} dark />
          <h1 className="mt-6 font-serif text-6xl text-background md:text-9xl text-balance leading-[0.9]">{g.name}</h1>
          <p className="mt-4 max-w-xl text-lg italic text-background/80 font-serif">{g.signature}</p>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 lg:px-12">
          <div className="md:col-span-4">
            <Eyebrow>Origin Story</Eyebrow>
            <div className="mt-6 space-y-1 text-sm">
              <div className="text-muted-foreground">Quarry</div>
              <div className="font-serif text-2xl text-ink">{g.origin}</div>
            </div>
            <div className="mt-6 space-y-1 text-sm">
              <div className="text-muted-foreground">Geology</div>
              <div className="text-ink">{g.formation}</div>
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="font-serif text-3xl text-ink leading-snug text-balance md:text-4xl">{g.story[0]}</p>
            <p className="mt-8 text-muted-foreground leading-relaxed">{g.story[1]}</p>
          </div>
        </div>
      </section>

      <section className="bg-beige py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <Eyebrow>Technical Sheet</Eyebrow>
              <dl className="mt-8 divide-y divide-ink/10">
                {g.specs.map((s) => (
                  <div key={s.label} className="flex justify-between py-4">
                    <dt className="text-sm uppercase tracking-widest text-muted-foreground">{s.label}</dt>
                    <dd className="font-serif text-xl text-ink">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <SpecsAside g={g} />
          </div>
        </div>
      </section>

      <InspirationBar g={g} />
    </>
  );
}

/* ──────────────────────────── Layout 2: SPLIT ──────────────────────────── */
function SplitLayout({ g }: { g: Granite }) {
  return (
    <>
      <section className="grid min-h-screen md:grid-cols-2">
        <div className="relative flex flex-col justify-between p-10 lg:p-16" style={{ background: g.accentHex, color: g.accentHex.toLowerCase() === "#cfc7b8" ? "#1a1a1a" : "#fff" }}>
          <Crumbs g={g} dark={g.accentHex.toLowerCase() !== "#cfc7b8"} />
          <div>
            <div className="text-xs uppercase tracking-[0.3em] opacity-70">{g.tagline}</div>
            <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.9]">{g.name}</h1>
            <p className="mt-8 max-w-md font-serif text-2xl italic opacity-90">{g.signature}</p>
          </div>
          <div className="grid grid-cols-2 gap-6 border-t border-current/20 pt-8 text-sm">
            <div><div className="opacity-60 text-xs uppercase tracking-widest">Origin</div><div className="mt-1 font-serif text-lg">{g.origin}</div></div>
            <div><div className="opacity-60 text-xs uppercase tracking-widest">Hardness</div><div className="mt-1 font-serif text-lg">{g.specs[3]?.value ?? "—"}</div></div>
          </div>
        </div>
        <div className="relative min-h-[60vh]">
          <img src={g.slab} alt={`${g.name} slab`} className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-3 lg:px-12">
          <div className="md:col-span-1"><Eyebrow>Formation</Eyebrow><p className="mt-4 text-sm text-muted-foreground">{g.formation}</p></div>
          <div className="md:col-span-2">
            {g.story.map((p, i) => <p key={i} className={i === 0 ? "font-serif text-3xl text-ink leading-snug text-balance" : "mt-6 text-muted-foreground leading-relaxed"}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="bg-ink py-28 text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Eyebrow>In Situ</Eyebrow>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <img src={g.project} alt="" className="aspect-[4/3] w-full object-cover" />
            <div className="self-end">
              <h3 className="font-serif text-4xl">{g.signature}</h3>
              <ChipRow label="Finishes" items={g.finishes} />
              <ChipRow label="Applications" items={g.applications} />
              <ChipRow label="Pairs with" items={g.pairings} />
            </div>
          </div>
        </div>
      </section>

      <SpecsBand g={g} />
    </>
  );
}

/* ──────────────────────────── Layout 3: GALLERY ──────────────────────────── */
function GalleryLayout({ g }: { g: Granite }) {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Crumbs g={g} />
          <div className="mt-10 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">{g.tagline}</div>
              <h1 className="mt-4 font-serif text-6xl text-ink md:text-8xl text-balance leading-[0.95]">{g.name}</h1>
            </div>
            <p className="md:col-span-4 md:col-start-9 self-end text-muted-foreground">{g.shortDesc}</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-4 px-6 lg:px-12">
          <img src={g.slab} alt="" className="col-span-12 aspect-[21/9] w-full object-cover md:col-span-8" />
          <div className="col-span-12 grid grid-rows-2 gap-4 md:col-span-4">
            <img src={g.project} alt="" className="h-full w-full object-cover" />
            <div className="flex flex-col justify-center p-6" style={{ background: g.accentHex, color: "#fff" }}>
              <div className="text-xs uppercase tracking-widest opacity-70">Edition</div>
              <div className="mt-2 font-serif text-3xl">{g.specs.find(s => s.label === "Edition")?.value ?? "Open"}</div>
              <div className="mt-4 text-sm opacity-90 italic font-serif">{g.signature}</div>
            </div>
          </div>
          <img src={g.project} alt="" className="col-span-6 aspect-square w-full object-cover md:col-span-3" />
          <img src={g.slab} alt="" className="col-span-6 aspect-square w-full object-cover md:col-span-3" />
          <div className="col-span-12 flex items-end md:col-span-6">
            <div>
              <Eyebrow>The narrative</Eyebrow>
              <p className="mt-4 font-serif text-2xl text-ink leading-snug">{g.story[0]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beige py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 lg:px-12">
          <div>
            <Eyebrow>Quarry & Formation</Eyebrow>
            <h3 className="mt-4 font-serif text-3xl text-ink">{g.origin}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{g.formation}</p>
            <p className="mt-6 text-muted-foreground">{g.story[1]}</p>
          </div>
          <SpecsAside g={g} />
        </div>
      </section>

      <InspirationBar g={g} />
    </>
  );
}

/* ──────────────────────────── Layout 4: VERTICAL ──────────────────────────── */
function VerticalLayout({ g }: { g: Granite }) {
  return (
    <>
      <section className="relative pt-32 pb-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
          <Crumbs g={g} center />
          <div className="mt-10 text-xs uppercase tracking-[0.4em] text-gold">{g.tagline}</div>
          <h1 className="mt-6 font-serif text-7xl text-ink md:text-9xl text-balance leading-[0.9]">{g.name}</h1>
          <p className="mx-auto mt-8 max-w-xl font-serif text-2xl italic text-muted-foreground">{g.signature}</p>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-3xl px-6">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img src={g.slab} alt="" className="h-full w-full object-cover" />
          </div>
          <p className="mt-8 text-center text-xs uppercase tracking-widest text-muted-foreground">{g.origin} · {g.formation}</p>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-serif text-3xl text-ink leading-snug text-balance md:text-4xl">{g.story[0]}</p>
          <p className="mx-auto mt-10 max-w-2xl text-muted-foreground leading-relaxed">{g.story[1]}</p>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img src={g.project} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <SpecsBand g={g} />
      <ApplicationGrid g={g} />
      <InspirationBar g={g} />
    </>
  );
}

/* ──────────────────────────── Layout 5: MAGAZINE ──────────────────────────── */
function MagazineLayout({ g }: { g: Granite }) {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Crumbs g={g} />
          <div className="mt-12 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="font-serif text-[10rem] leading-none text-gold/30 md:text-[14rem]">{g.name.charAt(0)}</div>
            </div>
            <div className="md:col-span-7 self-end">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Issue 0{granites.findIndex(x => x.slug === g.slug) + 1}</div>
              <h1 className="mt-3 font-serif text-5xl text-ink md:text-7xl text-balance leading-[0.95]">{g.name}</h1>
              <p className="mt-4 max-w-xl text-muted-foreground">{g.shortDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="relative aspect-[21/9] overflow-hidden">
            <img src={g.slab} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 lg:px-12">
          <div className="md:col-span-3 space-y-8">
            <div><div className="text-xs uppercase tracking-widest text-gold">Origin</div><div className="mt-2 font-serif text-2xl text-ink">{g.origin}</div></div>
            <div><div className="text-xs uppercase tracking-widest text-gold">Geology</div><div className="mt-2 text-sm text-ink">{g.formation}</div></div>
            <div><div className="text-xs uppercase tracking-widest text-gold">Signature</div><div className="mt-2 font-serif italic text-lg text-ink">{g.signature}</div></div>
          </div>
          <div className="md:col-span-6 md:col-start-5 columns-1 gap-8">
            <p className="font-serif text-2xl text-ink leading-snug">{g.story[0]}</p>
            <p className="mt-6 text-muted-foreground leading-relaxed">{g.story[1]}</p>
            <p className="mt-6 text-muted-foreground leading-relaxed">Inspired by {g.inspiration}</p>
          </div>
          <div className="md:col-span-2 md:col-start-11">
            <img src={g.project} alt="" className="aspect-[2/3] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-ink py-28 text-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3 lg:px-12">
          {g.specs.map((s) => (
            <div key={s.label} className="border-l-2 border-gold pl-6">
              <div className="text-xs uppercase tracking-widest text-background/50">{s.label}</div>
              <div className="mt-3 font-serif text-4xl text-gold">{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      <ApplicationGrid g={g} />
    </>
  );
}

/* ──────────────────────────── Shared blocks ──────────────────────────── */
function Crumbs({ g, dark = false, center = false }: { g: Granite; dark?: boolean; center?: boolean }) {
  const cls = dark ? "text-background/70" : "text-muted-foreground";
  return (
    <div className={`flex items-center gap-2 text-xs uppercase tracking-widest ${cls} ${center ? "justify-center" : ""}`}>
      <Link to="/products" className="hover:text-gold">Products</Link>
      <span>/</span>
      <Link to="/products/granites" className="hover:text-gold">Granites</Link>
      <span>/</span>
      <span className={dark ? "text-background" : "text-ink"}>{g.name}</span>
    </div>
  );
}

function ChipRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="mt-6">
      <div className="text-xs uppercase tracking-widest text-background/50">{label}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((it) => (
          <span key={it} className="border border-background/30 px-3 py-1 text-xs text-background/90">{it}</span>
        ))}
      </div>
    </div>
  );
}

function SpecsAside({ g }: { g: Granite }) {
  return (
    <div className="space-y-8">
      <div>
        <div className="text-xs uppercase tracking-widest text-gold">Finishes</div>
        <div className="mt-3 flex flex-wrap gap-2">{g.finishes.map(f => <span key={f} className="border border-ink/20 px-3 py-1 text-xs text-ink">{f}</span>)}</div>
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-gold">Standard sizes</div>
        <ul className="mt-3 space-y-1 text-sm text-ink">{g.sizes.map(s => <li key={s}>· {s}</li>)}</ul>
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-gold">Pairs with</div>
        <div className="mt-3 text-sm text-ink">{g.pairings.join(" · ")}</div>
      </div>
    </div>
  );
}

function SpecsBand({ g }: { g: Granite }) {
  return (
    <section className="bg-beige py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        {g.specs.map((s) => (
          <div key={s.label} className="bg-background p-8 shadow-sm">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            <div className="mt-3 font-serif text-3xl text-ink">{s.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ApplicationGrid({ g }: { g: Granite }) {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Eyebrow>Where it lives</Eyebrow>
        <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">Applications.</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {g.applications.map((a, i) => (
            <div key={a} className="group relative aspect-[4/5] overflow-hidden">
              <img src={i % 2 === 0 ? g.project : g.slab} alt={a} className="h-full w-full object-cover transition duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-background">
                <div className="text-xs uppercase tracking-widest text-gold">0{i + 1}</div>
                <div className="mt-1 font-serif text-xl">{a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InspirationBar({ g }: { g: Granite }) {
  return (
    <section className="py-24" style={{ background: `linear-gradient(135deg, ${g.accentHex}14, transparent)` }}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Eyebrow><span className="mx-auto">Design notes</span></Eyebrow>
        <p className="mt-6 font-serif text-3xl text-ink italic leading-snug">"{g.inspiration}"</p>
      </div>
    </section>
  );
}

function RelatedStrip({ current }: { current: string }) {
  const idx = granites.findIndex(g => g.slug === current);
  const prev = granites[(idx - 1 + granites.length) % granites.length];
  const next = granites[(idx + 1) % granites.length];
  return (
    <section className="border-y border-ink/10 bg-background py-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 lg:px-12">
        <Link to="/products/granites/$slug" params={{ slug: prev.slug }} className="group flex items-center gap-4">
          <ArrowLeft className="h-5 w-5 text-muted-foreground transition group-hover:-translate-x-1 group-hover:text-gold" />
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Previous</div>
            <div className="font-serif text-lg text-ink group-hover:text-gold">{prev.name}</div>
          </div>
        </Link>
        <Link to="/products/granites" className="hidden text-xs uppercase tracking-widest text-muted-foreground hover:text-gold md:inline-flex items-center gap-2">
          All stones <ArrowUpRight className="h-4 w-4" />
        </Link>
        <Link to="/products/granites/$slug" params={{ slug: next.slug }} className="group flex items-center gap-4 text-right">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Next</div>
            <div className="font-serif text-lg text-ink group-hover:text-gold">{next.name}</div>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-gold" />
        </Link>
      </div>
    </section>
  );
}