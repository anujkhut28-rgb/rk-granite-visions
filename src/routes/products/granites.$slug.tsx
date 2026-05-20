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
  const { granite: g } = Route.useLoaderData();
  const idx = granites.findIndex((x) => x.slug === g.slug);
  const prev = granites[(idx - 1 + granites.length) % granites.length];
  const next = granites[(idx + 1) % granites.length];

  return (
    <div className="bg-background">
      {/* ── Breadcrumb ── */}
      <div className="border-b border-ink/10 pt-24">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-12">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <Link to="/products" className="hover:text-gold">Products</Link>
            <span>/</span>
            <Link to="/products/granites" className="hover:text-gold">Granites</Link>
            <span>/</span>
            <span className="text-ink">{g.name}</span>
          </div>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-10 md:grid-cols-12 md:items-center lg:gap-16">
            <div className="md:col-span-6">
              <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold">
                <span className="h-px w-8 bg-gold" />
                {g.tagline}
              </div>
              <h1 className="mt-5 font-serif text-4xl leading-[1.05] text-ink text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                {g.name}
              </h1>
              <p className="mt-6 max-w-lg font-serif text-lg italic text-muted-foreground md:text-xl">
                {g.signature}
              </p>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                {g.shortDesc}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-widest text-ink"
                  style={{ background: `${g.accentHex}1f`, border: `1px solid ${g.accentHex}40` }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: g.accentHex }} />
                  {g.origin}
                </span>
                <span className="inline-flex items-center rounded-full border border-ink/15 px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {g.specs[0]?.value ?? "Granite"}
                </span>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="relative overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
                <div className="aspect-[4/5] sm:aspect-[5/6]">
                  <img src={g.slab} alt={`${g.name} slab`} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick specs strip ── */}
      <section className="border-y border-ink/10 bg-beige/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-ink/10 px-6 sm:grid-cols-4 sm:divide-x lg:px-12">
          {g.specs.slice(0, 4).map((s) => (
            <div key={s.label} className="px-2 py-6 sm:px-6 sm:py-8">
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.label}</div>
              <div className="mt-2 font-serif text-xl text-ink md:text-2xl">{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Narrative ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 md:grid-cols-12 lg:gap-20">
            <div className="md:col-span-4">
              <Eyebrow>The Stone</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">A study in {g.tagline.toLowerCase()}.</h2>
              <div className="mt-8 space-y-5 text-sm">
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold">Quarry</div>
                  <div className="mt-1 font-serif text-lg text-ink">{g.origin}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold">Geology</div>
                  <div className="mt-1 text-muted-foreground leading-relaxed">{g.formation}</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="font-serif text-2xl leading-snug text-ink text-balance md:text-3xl">
                {g.story[0]}
              </p>
              <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
                {g.story.slice(1).map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project image ── */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="overflow-hidden rounded-sm">
            <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9]">
              <img src={g.project} alt={`${g.name} in a project setting`} className="h-full w-full object-cover" />
            </div>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            In situ · {g.signature}
          </p>
        </div>
      </section>

      {/* ── Technical sheet ── */}
      <section className="bg-beige py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 md:grid-cols-12 lg:gap-20">
            <div className="md:col-span-5">
              <Eyebrow>Technical Sheet</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">Specifications.</h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Engineered to international standards. Full technical PDF and physical samples available on request.
              </p>
            </div>
            <div className="md:col-span-7">
              <dl className="divide-y divide-ink/10 border-y border-ink/10">
                {g.specs.map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between gap-6 py-4">
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</dt>
                    <dd className="font-serif text-lg text-ink md:text-xl">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── Finishes / Sizes / Pairings ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3 lg:px-12">
          <Detail title="Finishes">
            <div className="flex flex-wrap gap-2">
              {g.finishes.map((f) => (
                <span key={f} className="border border-ink/15 px-3 py-1.5 text-xs uppercase tracking-widest text-ink">{f}</span>
              ))}
            </div>
          </Detail>
          <Detail title="Standard Sizes">
            <ul className="space-y-2 text-sm text-ink">
              {g.sizes.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="h-px w-4 bg-gold" />{s}
                </li>
              ))}
            </ul>
          </Detail>
          <Detail title="Pairs With">
            <p className="text-sm leading-relaxed text-muted-foreground">{g.pairings.join(" · ")}</p>
            <p className="mt-6 font-serif italic text-ink">"{g.inspiration}"</p>
          </Detail>
        </div>
      </section>

      {/* ── Applications ── */}
      <section className="bg-beige/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Applications</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">Where it lives.</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {g.applications.map((a, i) => (
              <div key={a} className="group bg-background">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={i % 2 === 0 ? g.project : g.slab}
                    alt={a}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="border border-t-0 border-ink/10 px-5 py-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold">0{i + 1}</div>
                  <div className="mt-1 font-serif text-lg text-ink">{a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prev / Next ── */}
      <section className="border-y border-ink/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-8 lg:px-12">
          <Link to="/products/granites/$slug" params={{ slug: prev.slug }} className="group flex items-center gap-3 md:gap-4">
            <ArrowLeft className="h-5 w-5 text-muted-foreground transition group-hover:-translate-x-1 group-hover:text-gold" />
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Previous</div>
              <div className="font-serif text-base text-ink group-hover:text-gold md:text-lg">{prev.name}</div>
            </div>
          </Link>
          <Link to="/products/granites" className="hidden items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-gold md:inline-flex">
            All Stones <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/products/granites/$slug" params={{ slug: next.slug }} className="group flex items-center gap-3 md:gap-4">
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Next</div>
              <div className="font-serif text-base text-ink group-hover:text-gold md:text-lg">{next.name}</div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-gold" />
          </Link>
        </div>
      </section>

      <QuoteCTA accent={g.accentHex} />
    </div>
  );
}

function Detail({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.25em] text-gold">{title}</div>
      <div className="mt-5 border-t border-ink/10 pt-5">{children}</div>
    </div>
  );
}