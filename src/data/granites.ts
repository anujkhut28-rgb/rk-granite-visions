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
      "Quarried from the ancient gabbroic shields of southern India, Black Granite is the stone of monuments — chosen for its absolute opacity and the way polished surfaces dissolve into mirror.",
      "Each block is bench-sawn from a single mother slab, preserving the continuous mineral grain that gives our Black its signature depth.",
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
      "White Granite is our most photographed surface — a luminous backdrop that lets art, light and life perform.",
      "Selected for grain uniformity, each slab is laid out under daylight panels in our finishing hall before it earns the RKGB stamp.",
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
      "From the same quarries that once supplied Mughal courts, our Red carries an architectural lineage you can feel underfoot.",
      "We grade exclusively for evenness of red saturation — only the top 12% of blocks make it to export.",
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
      "When light strikes Blue Granite at a low angle, embedded labradorite scatters into a blue-gold flash known to gemologists as schiller.",
      "We hand-rotate every block during selection to verify the schiller axis aligns with the intended installation plane.",
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
      "Green Granite reads almost botanical — emerald grounds threaded with charcoal calligraphy.",
      "Our finishing line applies a micro-honing pass that mutes glare while preserving the depth of the green pigment.",
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
      "Grey is our specifier's favourite — predictable, planar, and forgiving under raking architectural light.",
      "We batch-match grey blocks by tone score so a 4,000 m² facade reads as a single continuous plane.",
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
      "The warmth in Brown Granite comes from iron oxide bound to feldspar — a chemistry that ages beautifully under sunlight.",
      "A leathered finish on this stone is one of the most tactile surfaces in our entire catalogue.",
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
      "Gold Granite earns its name from migmatitic banding that resembles liquid metal frozen mid-pour.",
      "Each block is photographed under standardised light and matched to client mood boards before shipping.",
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
      "Pink Granite reads warm at dawn, cool at dusk — its tonality breathes with the day.",
      "We supply this stone with a low-sheen satin finish that emphasises feldspar phenocrysts without glare.",
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
      "No two slabs of our Multi-color are alike — every block is a geological signature 1.6 billion years in the making.",
      "We offer this stone exclusively as numbered editions, with provenance certificates issued per slab.",
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