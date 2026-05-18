import black from "@/assets/granite-black.jpg";
import white from "@/assets/granite-white.jpg";
import red from "@/assets/granite-red.jpg";
import blue from "@/assets/granite-blue.jpg";
import green from "@/assets/granite-green.jpg";
import grey from "@/assets/granite-grey.jpg";
import brown from "@/assets/granite-brown.jpg";
import gold from "@/assets/granite-gold.jpg";
import pink from "@/assets/granite-pink.jpg";
import multi from "@/assets/granite-multi.jpg";

import pBlack from "@/assets/project-black.jpg";
import pWhite from "@/assets/project-white.jpg";
import pRed from "@/assets/project-red.jpg";
import pBlue from "@/assets/project-blue.jpg";
import pGreen from "@/assets/project-green.jpg";
import pGrey from "@/assets/project-grey.jpg";
import pBrown from "@/assets/project-brown.jpg";
import pGold from "@/assets/project-gold.jpg";
import pPink from "@/assets/project-pink.jpg";
import pMulti from "@/assets/project-multi.jpg";

export interface Granite {
  slug: string;
  name: string;
  tagline: string;
  shortDesc: string;
  slab: string;
  project: string;
  accentHex: string;
  layout: "editorial" | "split" | "gallery" | "vertical" | "magazine";
  origin: string;
  formation: string;
  story: string[];
  specs: { label: string; value: string }[];
  finishes: string[];
  applications: string[];
  sizes: string[];
  pairings: string[];
  signature: string;
  inspiration: string;
}

export const granites: Granite[] = [
  {
    slug: "black-granite", name: "Black Granite", tagline: "Bold. Absolute. Eternal.",
    shortDesc: "Deep abyss tones with silvery mica that command any architectural space.",
    slab: black, project: pBlack, accentHex: "#0c0c10", layout: "editorial",
    origin: "Karimnagar, Telangana",
    formation: "Precambrian gabbroic intrusion, 2.5 billion years old",
    story: [
      "Black Granite is the most assertive surface in our entire catalogue — a deep, near-opaque obsidian field punctuated by silvery mica and rare quartz crystals that catch light only at oblique angles. The colour tone is a true jet black, neither blue-shifted nor brown-shifted, which allows it to anchor a room without competing with anything placed upon it.",
      "Quarried from the gabbroic shields of Karimnagar in southern India, each block is bench-sawn from a single mother slab so that veining, density and crystal distribution remain perfectly continuous across an entire installation. We grade only the densest, most uniform 12% of the quarry yield for export.",
      "When mirror-polished, the surface achieves an almost wet, liquid reflectivity that doubles the apparent volume of any space. Honed and leathered finishes mute the gloss while preserving the depth — a tactile, velvety blackness that pairs beautifully with brushed brass and smoked walnut.",
      "In terms of durability, Black Granite is a benchmark stone. A Mohs hardness of 6.5, near-zero water absorption (0.08%) and a compressive strength of 240 MPa make it virtually impervious to scratching, etching and thermal shock. It is one of the few natural stones suitable for both monumental exterior facades and high-traffic interior flooring.",
      "Luxury appeal is intrinsic. Black has been the colour of monuments, memorials and ceremonial architecture for millennia, and our Black Granite extends that lineage into contemporary residences, flagship retail, private aviation interiors and quiet, ceremonial public buildings.",
      "Common applications include kitchen islands and waterfall countertops, bathroom vanities, fireplace surrounds, library and entry flooring, exterior cladding, plinths, and sculptural staircases. It is equally at home in modernist, art-deco and brutalist palettes.",
      "Maintenance is exceptionally simple — a neutral-pH stone cleaner and a soft microfiber are enough for daily care. We recommend an impregnating sealer once every three to five years for kitchen and bath installations; exterior facades typically require no sealing at all.",
      "For interior use it lends gravity and focus; for exterior facades it produces a silhouette that reads as solid, monolithic and permanent even from a distance. This is a stone chosen by clients who want their architecture to age into legacy rather than fashion.",
    ],
    specs: [
      { label: "Density", value: "3.02 g/cm³" }, { label: "Water absorption", value: "0.08%" },
      { label: "Compressive strength", value: "240 MPa" }, { label: "Mohs hardness", value: "6.5" },
    ],
    finishes: ["Mirror Polished", "Honed", "Leathered", "Flamed"],
    applications: ["Monumental facades", "Kitchen islands", "Memorials", "Luxury flooring"],
    sizes: ["Gangsaw 320×195 cm", "Cutter 240×120 cm", "Tiles 60×60 cm"],
    pairings: ["Brushed brass", "Smoked walnut", "Travertine ivory"],
    signature: "The mirror that holds the room.",
    inspiration: "Tadao Ando's Church of Light — silence rendered in stone.",
  },
  {
    slug: "white-granite", name: "White Granite", tagline: "Pure. Luminous. Sculptural.",
    shortDesc: "A canvas of soft grain that opens space with quiet, gallery-grade light.",
    slab: white, project: pWhite, accentHex: "#cfc7b8", layout: "split",
    origin: "Chamrajnagar, Karnataka",
    formation: "Leucocratic granite, quartz-feldspar rich, Archean basement",
    story: [
      "White Granite is our most luminous surface — a soft, milky background scattered with fine grey-black mineral specks that read as delicate texture rather than pattern. The base tone is a warm, daylight white that flatters skin, art and timber alike, with none of the cold cast common to engineered surfaces.",
      "Quarried from the leucocratic granites of Chamrajnagar in Karnataka, each slab is laid out under calibrated daylight panels in our finishing hall and graded for grain uniformity before it earns the RKGB stamp. Only the most evenly speckled blocks make it past inspection.",
      "Texture is finely crystalline and gently reflective — a quartz-feldspar dominant matrix that takes a true gallery polish without ever feeling glassy. Honed, satin, brushed and sandblasted finishes are also available, each producing a different quality of light.",
      "Despite its delicate appearance, White Granite is extremely durable: Mohs hardness 6.0, low water absorption of 0.21%, and a polished reflectance of 78%. It is naturally resistant to UV fade, frost and thermal shock, making it suitable for both interior and exterior projects in any climate.",
      "Its luxury appeal lies in restraint. White stone is the language of museums, embassies and serene private residences. Our white grade carries enough mineral incident to feel handcrafted rather than printed, which is why interior designers specify it for projects where the architecture must speak quietly.",
      "Typical applications include gallery and lobby flooring, bathroom suites, kitchen countertops and backsplashes, vanity tops, statement staircases and feature cladding. It is especially powerful when used floor-to-wall to dissolve the boundary between planes.",
      "Maintenance is straightforward — a neutral cleaner and routine resealing every two to three years is sufficient for interior use. We provide each shipment with a complete care guide and our recommended sealer.",
      "For interior settings it produces a tranquil, gallery-grade calm; for exterior cladding it delivers a soft, sunlit white that does not glare. This is the stone of clients who want luminosity without theatre.",
    ],
    specs: [
      { label: "Density", value: "2.68 g/cm³" }, { label: "Water absorption", value: "0.21%" },
      { label: "Reflectance", value: "78% (polished)" }, { label: "Mohs hardness", value: "6.0" },
    ],
    finishes: ["Polished", "Satin", "Brushed", "Sandblasted"],
    applications: ["Gallery flooring", "Hospitality lobbies", "Bath suites", "Vanity tops"],
    sizes: ["Gangsaw 300×190 cm", "Slab 280×170 cm", "Tiles 80×80 cm"],
    pairings: ["Pale oak", "Antique bronze", "Linen plaster"],
    signature: "Daylight made permanent.",
    inspiration: "John Pawson minimalism — the quiet majesty of white.",
  },
  {
    slug: "red-granite", name: "Red Granite", tagline: "Warm. Regal. Iconic.",
    shortDesc: "A heritage stone whose crimson depth has crowned palaces for centuries.",
    slab: red, project: pRed, accentHex: "#7a1d1d", layout: "gallery",
    origin: "Ilkal, Karnataka & Jhansi, Madhya Pradesh",
    formation: "Potassium-feldspar porphyritic granite, 2.3 Ga",
    story: [
      "Red Granite is one of the most historically charged stones on earth — a deep crimson field set with charcoal feldspar crystals and the occasional flash of bright orange quartz. The colour tone is unmistakably warm: a saturated, slightly orange-red that reads as ceremonial rather than decorative.",
      "Our material is drawn from the same quarry belts in Ilkal and Jhansi that supplied Mughal courts and Buckingham-era civic buildings, giving every installation a quiet architectural lineage. We grade exclusively for evenness of saturation — only the top 12% of blocks make it to export.",
      "The texture is medium-coarse porphyritic, with large, well-formed potassium-feldspar crystals that catch light from across a room. Polished, flamed, bush-hammered and antiqued finishes are available, each emphasising a different quality — gloss, grip, depth, or age.",
      "Durability is excellent: Mohs 6.5, water absorption of 0.18%, and outstanding frost resistance verified across northern European installations. The stone is also remarkably UV-stable, holding its crimson tone for decades of exterior exposure.",
      "Luxury appeal is rooted in heritage. Red has been the colour of authority, dynasty and welcome for centuries, and our Red Granite extends that vocabulary into modern civic buildings, heritage restorations, luxury hospitality and statement residential entries.",
      "Applications include civic monuments, plinths and pedestals, statement walls, paving and cobbles for entry courts, lobby flooring, fireplace surrounds and bookmatched feature walls. It is equally suited to both interior ceremonial spaces and external public-facing facades.",
      "Maintenance is undemanding: a neutral cleaner and an impregnating sealer once every three to five years for interior use. Exterior installations typically self-clean with rain and weather gracefully.",
      "Interior use produces warmth and ceremony; exterior use produces a building presence that reads as confident and rooted. This is the stone of clients building for legacy and civic memory.",
    ],
    specs: [
      { label: "Density", value: "2.74 g/cm³" }, { label: "Water absorption", value: "0.18%" },
      { label: "Frost resistance", value: "Excellent" }, { label: "Mohs hardness", value: "6.5" },
    ],
    finishes: ["Polished", "Flamed", "Bush-hammered", "Antiqued"],
    applications: ["Civic monuments", "Heritage restoration", "Statement walls", "Plinths"],
    sizes: ["Gangsaw 310×190 cm", "Cutter 240×120 cm", "Cobbles 10×10 cm"],
    pairings: ["Patinated copper", "Indian rosewood", "Cream limestone"],
    signature: "The colour of dynasties.",
    inspiration: "The red sandstone forts of Agra — power softened by warmth.",
  },
  {
    slug: "blue-granite", name: "Blue Granite", tagline: "Cool. Iridescent. Architectural.",
    shortDesc: "Cobalt depth with optical shimmer engineered for monumental facades.",
    slab: blue, project: pBlue, accentHex: "#1c3f7a", layout: "vertical",
    origin: "Vizag, Andhra Pradesh",
    formation: "Labradorite-rich anorthosite — schiller-effect feldspar",
    story: [
      "Blue Granite — geologically a labradorite-rich anorthosite — is the most optically active stone in our collection. The base colour is a deep oceanic cobalt, almost ink-like, but embedded labradorite crystals scatter light into a blue, green and gold flash known to gemologists as schiller.",
      "Quarried from the coastal anorthosite belt around Vizag in Andhra Pradesh, every block is hand-rotated under standardised lighting during selection so that the schiller axis can be aligned with the intended installation plane. This is a stone that must be specified, not merely ordered.",
      "Texture is coarsely crystalline, with large interlocking feldspar plates that produce both visual depth and remarkable mechanical strength. Available in high-polish, honed, flamed and water-jet finishes — polishing maximises schiller, honing produces a softer, fabric-like glow.",
      "Durability is engineered-grade: Mohs 6.0, flexural strength 16 MPa, near-zero water absorption and Class A schiller index. The stone is specified worldwide for curtain-wall cladding on towers from Riyadh to Singapore because it performs in extreme heat, cold and wind load.",
      "Luxury appeal comes from rarity and optics. Blue is the rarest natural colour in dimension stone, and labradorite schiller is the rarest optical effect — together they produce a surface that genuinely shimmers as the viewer moves past it.",
      "Applications include curtain-wall cladding for high-rise architecture, bar tops, feature staircases, pool surrounds, hospitality reception desks and statement bathroom suites. It performs equally well at building scale and at object scale.",
      "Maintenance is minimal — a soft cloth and neutral cleaner preserve both gloss and schiller. We supply a labradorite-specific sealer that protects without dulling the optical effect.",
      "Interior installation produces a jewel-like centrepiece; exterior cladding produces a facade that reads differently at every hour of the day. This is the stone of clients commissioning a building that will be photographed.",
    ],
    specs: [
      { label: "Density", value: "2.75 g/cm³" }, { label: "Schiller index", value: "Class A" },
      { label: "Flexural strength", value: "16 MPa" }, { label: "Mohs hardness", value: "6.0" },
    ],
    finishes: ["High-polish", "Honed", "Flamed", "Water-jet"],
    applications: ["Curtain-wall cladding", "Bar tops", "Feature staircases", "Pool surrounds"],
    sizes: ["Gangsaw 320×200 cm", "Slab 280×170 cm", "Custom strip"],
    pairings: ["Polished chrome", "Charcoal oak", "Frosted glass"],
    signature: "Aurora trapped in stone.",
    inspiration: "Nordic glacier interiors — a deep, cold luminescence.",
  },
  {
    slug: "green-granite", name: "Green Granite", tagline: "Verdant. Mineral. Storied.",
    shortDesc: "Forest-deep emerald with calligraphic black veining and sculptural presence.",
    slab: green, project: pGreen, accentHex: "#214d35", layout: "magazine",
    origin: "Markapur, Andhra Pradesh",
    formation: "Hornblende-biotite gneiss with chlorite enrichment",
    story: [
      "Green Granite reads almost botanical — a deep, mossy emerald field threaded with charcoal calligraphy and the occasional translucent crystal. The colour tone sits between forest and bottle green, with a faint blue undertone in low light that gives the stone its characteristic depth.",
      "Quarried in Markapur, Andhra Pradesh, the green pigment is geologically derived from chlorite enrichment in a hornblende-biotite gneiss, and the dark calligraphic veining is original metamorphic banding preserved over more than a billion years.",
      "Texture is fine to medium grained with a slightly waxy crystalline character. Our finishing line applies a micro-honing pass that mutes glare while preserving the saturated green pigment, then offers polished, leathered or river-washed finishes for designers who prefer a softer touch.",
      "Durability is well above industry average: Mohs 6.5, water absorption 0.12%, and high acid resistance — important for installations near pools, spas and citrus-heavy kitchens. The stone weathers gracefully in both humid and dry climates.",
      "Luxury appeal is sensory. Green is associated with calm, longevity and natural luxury — wellness brands, libraries, private cigar lounges and high-end retail interiors specify it precisely because it slows the eye down without being austere.",
      "Applications include bookmatched feature walls, spa and wellness interiors, library tables and bar fronts, boutique retail floors, custom inlay work and sculptural pedestals. It performs equally well in modern minimalist palettes and in classic art-deco compositions.",
      "Maintenance is light — a neutral cleaner and an impregnating sealer once every three years is sufficient. Leathered finishes hide fingerprints particularly well, making them ideal for high-touch surfaces.",
      "Interior use produces a calm, considered atmosphere; exterior use is best reserved for shaded courtyards and entry walls, where the saturated green reads as a controlled, organic counterpoint to lighter materials.",
    ],
    specs: [
      { label: "Density", value: "2.80 g/cm³" }, { label: "Water absorption", value: "0.12%" },
      { label: "Acid resistance", value: "High" }, { label: "Mohs hardness", value: "6.5" },
    ],
    finishes: ["Polished", "Honed", "Leathered", "River-washed"],
    applications: ["Boutique retail", "Spa interiors", "Library tables", "Bookmatched walls"],
    sizes: ["Gangsaw 300×190 cm", "Bookmatch pairs", "Slim 12 mm"],
    pairings: ["Aged brass", "Cane weave", "Cream travertine"],
    signature: "A forest, sliced thin.",
    inspiration: "Carlo Scarpa's Olivetti showroom — stone as quiet theatre.",
  },
  {
    slug: "grey-granite", name: "Grey Granite", tagline: "Quiet. Modern. Refined.",
    shortDesc: "Cool argent tones that bring discipline and clarity to contemporary builds.",
    slab: grey, project: pGrey, accentHex: "#6a7079", layout: "editorial",
    origin: "Hosur, Tamil Nadu",
    formation: "Biotite granite with uniform medium grain",
    story: [
      "Grey Granite is the architect's stone — a calm, cool silver field with finely dispersed biotite specks that read as texture rather than pattern. The colour tone is a neutral mid-grey, neither warm nor cold, which makes it the most versatile background surface in our catalogue.",
      "Quarried from the biotite-granite belt around Hosur in Tamil Nadu, the deposit produces an unusually uniform medium grain that is forgiving under raking architectural light and predictable across very large installations.",
      "Texture is even and planar — no dramatic veining, no surprises across batches. We batch-match grey blocks by tone score so that even a 4,000 m² facade reads as a single continuous plane, a capability few other quarries can offer at scale.",
      "Durability is high: Mohs 6.0, water absorption 0.15%, and slip resistance up to R11 in a flamed finish. The stone meets demanding airport and transport-hub paving specifications and is approved for use in seismic zones globally.",
      "Luxury appeal is in restraint. Grey is the language of contemporary architecture — Renzo Piano, David Chipperfield, Tadao Ando — and our Grey Granite delivers that language in a natural material with the warmth and irregularity machined surfaces lack.",
      "Applications include office tower lobbies and external cladding, airport flooring and concourses, public plazas, kerbstones and external paving, residential courtyards, and minimalist kitchen and bath installations.",
      "Maintenance is virtually nothing for exterior installations — the stone self-cleans with rain. Interior surfaces require a neutral cleaner and an occasional resealing every three to five years.",
      "Interior use brings discipline and clarity to a room; exterior use produces buildings that feel engineered, calm and contemporary. This is the stone of clients building offices, infrastructure and homes that will be admired decades after completion.",
    ],
    specs: [
      { label: "Density", value: "2.71 g/cm³" }, { label: "Water absorption", value: "0.15%" },
      { label: "Slip resistance R", value: "R11 (flamed)" }, { label: "Mohs hardness", value: "6.0" },
    ],
    finishes: ["Polished", "Honed", "Flamed", "Sandblasted"],
    applications: ["Office towers", "Airports", "Plazas", "External paving"],
    sizes: ["Gangsaw 320×195 cm", "Paving 60×40 cm", "Kerbstone"],
    pairings: ["Anodised aluminium", "Black steel", "Concrete"],
    signature: "Engineered calm.",
    inspiration: "Renzo Piano's Shard — clarity through restraint.",
  },
  {
    slug: "brown-granite", name: "Brown Granite", tagline: "Earthen. Warm. Grounding.",
    shortDesc: "Espresso warmth woven with gold filaments — natural, tactile, and timeless.",
    slab: brown, project: pBrown, accentHex: "#5a3621", layout: "split",
    origin: "Kishangarh, Rajasthan",
    formation: "Iron-rich granitoid with feldspar phenocrysts",
    story: [
      "Brown Granite is the most tactile, hospitable stone in our range — a deep espresso field threaded with golden flecks, copper veining and well-formed feldspar phenocrysts that catch sunlight like grains of metal in a riverbed.",
      "Quarried in Kishangarh, Rajasthan, the warm pigment comes from iron oxide bound to feldspar — a chemistry that actually deepens under sunlight rather than fading, producing a stone that improves visibly over the first decade of installation.",
      "Texture is medium-coarse and very forgiving. A leathered finish on this stone is one of the most tactile surfaces in our entire catalogue — designers describe it as the closest stone gets to feeling like worn leather or aged bronze.",
      "Durability is excellent: Mohs 6.0, water absorption 0.17%, and exceptional thermal stability for fireplace surrounds, hearths and outdoor kitchens. The stone resists oils, wines and acidic foods better than most warm-toned natural stones.",
      "Luxury appeal is rooted in warmth and patina. Brown is the colour of libraries, cellars, lodges and country residences — spaces designed to feel inherited rather than acquired. Axel Vervoordt-style interiors specify it precisely for this reason.",
      "Applications include residential kitchen islands and waterfall countertops, fireplace surrounds and hearths, library and study flooring, wine cellars, bar tops, and exterior steps and entry pavers in warm-palette architecture.",
      "Maintenance is simple but appreciated: a neutral cleaner, a soft cloth, and an enhancing sealer that deepens the brown and gold tones. Reseal every three years for kitchen and bath use.",
      "Interior use produces a grounded, welcoming warmth; exterior use brings a Mediterranean, sun-baked quality to entry steps and courtyards. This is the stone of clients building homes that should feel lived-in from the first day.",
    ],
    specs: [
      { label: "Density", value: "2.73 g/cm³" }, { label: "Water absorption", value: "0.17%" },
      { label: "Thermal stability", value: "Excellent" }, { label: "Mohs hardness", value: "6.0" },
    ],
    finishes: ["Leathered", "Polished", "Brushed", "Antiqued"],
    applications: ["Residential kitchens", "Fireplace surrounds", "Library floors", "Wine cellars"],
    sizes: ["Gangsaw 300×190 cm", "Cutter 240×120 cm", "Hearth blocks"],
    pairings: ["Smoked oak", "Cognac leather", "Brushed brass"],
    signature: "Earth, refined into surface.",
    inspiration: "Axel Vervoordt interiors — patina as luxury.",
  },
  {
    slug: "gold-granite", name: "Gold Granite", tagline: "Opulent. Radiant. Ceremonial.",
    shortDesc: "Sun-amber base with mineral inclusions that catch and hold every light.",
    slab: gold, project: pGold, accentHex: "#b88030", layout: "gallery",
    origin: "Madurai, Tamil Nadu",
    formation: "Migmatitic granite — partial-melt banding with garnet",
    story: [
      "Gold Granite is the most ceremonial surface in our collection — a sun-amber base traversed by migmatitic banding that resembles liquid metal frozen mid-pour, with occasional dark garnet inclusions that give the surface its jewel-like quality.",
      "Quarried in Madurai, Tamil Nadu, this stone is geologically a partial-melt migmatite, meaning the flowing gold bands were created at depth under extreme heat — a process that cannot be replicated in any engineered surface.",
      "Texture is highly figured. Each block is photographed under standardised light and matched to client mood boards before shipping, because the patterning varies meaningfully from slab to slab. Bookmatched pairs produce some of the most spectacular feature walls in modern architecture.",
      "Durability is high: Mohs 6.5, water absorption 0.14%, sealed stain-resistance Class 1. The stone performs in hospitality kitchens, bar fronts and back-of-house wet areas — environments where lesser amber stones would etch within weeks.",
      "Luxury appeal is uncomplicated — Gold Granite simply reads as wealth, ceremony and warmth. It is the stone of five-star hotel reception halls, royal residences and high-end retail where the brand is asserting cultural weight.",
      "Applications include hotel lobbies and reception desks, royal and presidential residences, banquet halls, ballroom flooring, bookmatched feature walls, bar tops and dining surrounds. Exterior use is reserved for ceremonial entries and porte-cochères.",
      "Maintenance follows our standard premium protocol: neutral cleaner, soft cloth and a colour-enhancing sealer every two to three years. The stone responds beautifully to professional honing and re-polishing.",
      "Interior use produces a held-breath quality of warmth and light; exterior use is best reserved for shaded entries where the gold pigment glows rather than glares. This is the stone of clients staging an arrival.",
    ],
    specs: [
      { label: "Density", value: "2.76 g/cm³" }, { label: "Water absorption", value: "0.14%" },
      { label: "Stain resistance", value: "Sealed Class 1" }, { label: "Mohs hardness", value: "6.5" },
    ],
    finishes: ["High-polish", "Honed", "Brushed", "Bookmatched"],
    applications: ["Hotel lobbies", "Royal residences", "Banquet halls", "Reception desks"],
    sizes: ["Gangsaw 320×195 cm", "Bookmatch pairs", "Slab 280×170 cm"],
    pairings: ["Champagne bronze", "Onyx", "Velvet sage"],
    signature: "A held breath of sunlight.",
    inspiration: "The gilded interiors of the Burj Al Arab — warmth as ceremony.",
  },
  {
    slug: "pink-granite", name: "Pink Granite", tagline: "Soft. Elegant. Romantic.",
    shortDesc: "Blush tonality with charcoal flecks — gentle drama for elevated interiors.",
    slab: pink, project: pPink, accentHex: "#d4a8a0", layout: "vertical",
    origin: "Jalore, Rajasthan",
    formation: "Pink K-feldspar granite, coarse phenocrystic",
    story: [
      "Pink Granite is the most romantic stone in our catalogue — a soft, powdery blush background scattered with charcoal flecks and coarse pink potassium-feldspar phenocrysts that look almost edible at close range.",
      "Quarried in Jalore, Rajasthan, this stone reads warm at dawn, cool at dusk — its tonality genuinely breathes with the day, which is why hospitality designers specify it for spaces meant to feel different in morning and evening light.",
      "Texture is coarsely crystalline with well-defined phenocrysts. We supply this stone with a low-sheen satin finish that emphasises the feldspar grains without glare, though polished, honed and tumbled options are also available for designers seeking different moods.",
      "Durability is reliable: Mohs 6.0, water absorption 0.19%, and excellent UV stability — the pink tone holds true under decades of natural light without fading toward grey or beige. The stone also performs well in mild marine environments.",
      "Luxury appeal is in tonal restraint. Pink stone is rare in commercial luxury because it requires confidence to specify, and our Pink Granite is graded specifically to feel architectural rather than decorative — closer to plaster pink than candy pink.",
      "Applications include boutique hotel lobbies, powder rooms and vanity tops, bridal and couture retail, garden walls and pavilions, sculptural plinths, and feature staircases in soft-palette residences.",
      "Maintenance is light: a neutral cleaner, a soft cloth and an impregnating sealer every three years preserves both colour and texture. Tumbled finishes hide wear particularly well in high-traffic boutique environments.",
      "Interior use produces a Barragán-like architectural blush; exterior use is best reserved for courtyards, garden walls and pavilions where the colour can dialogue with planting and natural light.",
    ],
    specs: [
      { label: "Density", value: "2.69 g/cm³" }, { label: "Water absorption", value: "0.19%" },
      { label: "UV stability", value: "Excellent" }, { label: "Mohs hardness", value: "6.0" },
    ],
    finishes: ["Satin", "Polished", "Honed", "Tumbled"],
    applications: ["Boutique hotels", "Powder rooms", "Garden walls", "Sculptural plinths"],
    sizes: ["Gangsaw 300×190 cm", "Slab 270×170 cm", "Tiles 40×40 cm"],
    pairings: ["Rose gold", "Bleached ash", "Sage velvet"],
    signature: "The blush of soft light.",
    inspiration: "Luis Barragán courtyards — colour as architecture.",
  },
  {
    slug: "multi-color-granite", name: "Multi-color Granite", tagline: "Vivid. Singular. Expressive.",
    shortDesc: "A geological tapestry — every slab is a one-of-one artwork from the earth.",
    slab: multi, project: pMulti, accentHex: "#8a5a3a", layout: "magazine",
    origin: "Salem, Tamil Nadu",
    formation: "Charnockite with garnet-pyroxene assemblage — granulite facies",
    story: [
      "Multi-color Granite is the most expressive surface in our entire catalogue — a single slab can carry vivid swirls of red, gold, green, blue and black, woven together by the kind of crystalline complexity that only deep-crustal metamorphism can produce.",
      "Quarried in Salem, Tamil Nadu, the stone is geologically a charnockite formed at granulite facies more than 1.6 billion years ago, meaning every block is a literal time capsule of the early Indian continent.",
      "Texture is dramatically heterogeneous — coarse garnet and pyroxene crystals sit alongside flowing quartz-feldspar bands. No two slabs are alike, which is why we offer this stone exclusively as numbered editions with a provenance certificate issued per slab.",
      "Durability is exceptional: Mohs 6.5–7.0, water absorption 0.10%, density 2.84 g/cm³. The stone is harder than most granites and is suitable for both high-traffic interior installations and backlit architectural features.",
      "Luxury appeal is one-of-one. Multi-color Granite is the closest dimension stone gets to fine art — every installation is unrepeatable, and the value of the slab is partly archaeological. Couture brands, art collectors and trophy residences specify it for exactly this reason.",
      "Applications include backlit feature walls (the stone has remarkable translucency under LED), statement kitchen islands, sculptural art installations, couture retail interiors, private museum vitrines, and bookmatched quartets for ballroom-scale walls.",
      "Maintenance is straightforward despite the visual complexity — neutral cleaner, soft cloth and a colour-enhancing sealer every two to three years. The stone is best installed by certified RKGB partners due to the importance of pattern alignment.",
      "Interior use produces a centrepiece that the architecture is built around; exterior use is reserved for shaded entry walls where the colour can be appreciated up close. This is the stone of clients commissioning a single, definitive object.",
    ],
    specs: [
      { label: "Density", value: "2.84 g/cm³" }, { label: "Water absorption", value: "0.10%" },
      { label: "Edition", value: "1 of 1" }, { label: "Mohs hardness", value: "6.5–7.0" },
    ],
    finishes: ["High-polish", "Honed", "Bookmatched", "Backlit"],
    applications: ["Backlit feature walls", "Statement islands", "Art installations", "Couture retail"],
    sizes: ["Gangsaw 320×200 cm", "Bookmatch quartets", "Custom"],
    pairings: ["Blackened steel", "Smoked glass", "Ebonised oak"],
    signature: "A canvas the earth painted first.",
    inspiration: "Anselm Kiefer's mineral palettes — geology as art.",
  },
];

export const granitesBySlug = Object.fromEntries(granites.map((g) => [g.slug, g]));
