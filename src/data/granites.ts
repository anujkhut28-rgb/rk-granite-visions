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
}

export const granites: Granite[] = [
  { slug: "black-granite", name: "Black Granite", tagline: "Bold. Absolute. Eternal.", shortDesc: "Deep abyss tones with silvery mica that command any architectural space.", slab: black, project: pBlack, accentHex: "#0c0c10" },
  { slug: "white-granite", name: "White Granite", tagline: "Pure. Luminous. Sculptural.", shortDesc: "A canvas of soft grain that opens space with quiet, gallery-grade light.", slab: white, project: pWhite, accentHex: "#f3efe8" },
  { slug: "red-granite", name: "Red Granite", tagline: "Warm. Regal. Iconic.", shortDesc: "A heritage stone whose crimson depth has crowned palaces for centuries.", slab: red, project: pRed, accentHex: "#7a1d1d" },
  { slug: "blue-granite", name: "Blue Granite", tagline: "Cool. Iridescent. Architectural.", shortDesc: "Cobalt depth with optical shimmer engineered for monumental facades.", slab: blue, project: pBlue, accentHex: "#1c3f7a" },
  { slug: "green-granite", name: "Green Granite", tagline: "Verdant. Mineral. Storied.", shortDesc: "Forest-deep emerald with calligraphic black veining and sculptural presence.", slab: green, project: pGreen, accentHex: "#214d35" },
  { slug: "grey-granite", name: "Grey Granite", tagline: "Quiet. Modern. Refined.", shortDesc: "Cool argent tones that bring discipline and clarity to contemporary builds.", slab: grey, project: pGrey, accentHex: "#6a7079" },
  { slug: "brown-granite", name: "Brown Granite", tagline: "Earthen. Warm. Grounding.", shortDesc: "Espresso warmth woven with gold filaments — natural, tactile, and timeless.", slab: brown, project: pBrown, accentHex: "#5a3621" },
  { slug: "gold-granite", name: "Gold Granite", tagline: "Opulent. Radiant. Ceremonial.", shortDesc: "Sun-amber base with mineral inclusions that catch and hold every light.", slab: gold, project: pGold, accentHex: "#b88030" },
  { slug: "pink-granite", name: "Pink Granite", tagline: "Soft. Elegant. Romantic.", shortDesc: "Blush tonality with charcoal flecks — gentle drama for elevated interiors.", slab: pink, project: pPink, accentHex: "#d4a8a0" },
  { slug: "multi-color-granite", name: "Multi-color Granite", tagline: "Vivid. Singular. Expressive.", shortDesc: "A geological tapestry — every slab is a one-of-one artwork from the earth.", slab: multi, project: pMulti, accentHex: "#8a5a3a" },
];

export const granitesBySlug = Object.fromEntries(granites.map((g) => [g.slug, g]));