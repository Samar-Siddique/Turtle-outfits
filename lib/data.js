export const WA = "923708306660";
export const NUMS = ["0370 8306660", "0370 8306668"];

export const C = {
  moss: ["Moss", "#4a5d2a"], black: ["Black", "#16181a"], bone: ["Bone", "#d9d4c2"],
  navy: ["Navy", "#1d2a44"], grey: ["Charcoal", "#3a3f3c"], olive: ["Olive", "#6b7040"],
  sand: ["Sand", "#b7a47c"], denim: ["Denim", "#3d5a80"], brown: ["Brown", "#5a4332"], lime: ["Lime", "#9bd62b"],
  rose: ["Dusty Rose", "#b4727f"], mauve: ["Mauve", "#8a6a86"], cream: ["Cream", "#e6dcc6"],
  sky: ["Sky", "#4f8fc0"], yellow: ["Mustard", "#d1a82f"], red: ["Brick", "#a8443a"],
};

const MS = ["S", "M", "L", "XL"];
const WS = ["XS", "S", "M", "L"];
const KS = ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"];

export const PRODUCTS = [
  { id: 1, gender: "Men", cat: "Jackets", name: "Shell Puffer Jacket", price: 4490, was: 5490, sizes: MS, colors: [C.moss, C.black, C.bone], badge: "HOT" },
  { id: 2, gender: "Men", cat: "Jackets", name: "Varsity Bomber", price: 3990, sizes: MS, colors: [C.black, C.navy, C.olive] },
  { id: 4, gender: "Men", cat: "Hoodies", name: "Heavy Zip Hoodie", price: 2790, sizes: ["S", "M", "L", "XL", "XXL"], colors: [C.black, C.moss, C.grey], badge: "NEW" },
  { id: 8, gender: "Men", cat: "Trousers", name: "Cargo Trouser", price: 2490, sizes: ["30", "32", "34", "36"], colors: [C.olive, C.black, C.sand] },
  { id: 10, gender: "Men", cat: "Pants", name: "Baggy Denim Pant", price: 2990, sizes: ["30", "32", "34", "36"], colors: [C.denim, C.black] },
  { id: 12, gender: "Men", cat: "Pants", name: "Street Cargo Pant", price: 2590, sizes: ["30", "32", "34", "36"], colors: [C.moss, C.black, C.bone], badge: "NEW" },
  { id: 3, gender: "Women", cat: "Jackets", name: "Cropped Windbreaker", price: 2990, sizes: WS, colors: [C.rose, C.black, C.cream] },
  { id: 13, gender: "Women", cat: "Jackets", name: "Cropped Puffer Jacket", price: 4290, sizes: WS, colors: [C.cream, C.black, C.mauve], badge: "NEW" },
  { id: 5, gender: "Women", cat: "Hoodies", name: "Oversized Pullover", price: 2490, was: 2990, sizes: ["S", "M", "L"], colors: [C.bone, C.rose, C.black] },
  { id: 14, gender: "Women", cat: "Hoodies", name: "Zip Fleece Hoodie", price: 2690, sizes: WS, colors: [C.mauve, C.grey, C.cream] },
  { id: 7, gender: "Women", cat: "Trousers", name: "Wide Leg Trouser", price: 2290, sizes: ["26", "28", "30", "32"], colors: [C.black, C.sand, C.grey] },
  { id: 11, gender: "Women", cat: "Pants", name: "Slim Chino Pant", price: 2190, sizes: ["26", "28", "30", "32"], colors: [C.sand, C.navy, C.brown] },
  { id: 15, gender: "Kids", cat: "Jackets", name: "Kids Puffer Jacket", price: 2990, sizes: KS, colors: [C.sky, C.black, C.yellow], badge: "HOT" },
  { id: 16, gender: "Kids", cat: "Jackets", name: "Kids Varsity Bomber", price: 2590, sizes: KS, colors: [C.navy, C.olive, C.red] },
  { id: 6, gender: "Kids", cat: "Hoodies", name: "Turtle Logo Hoodie", price: 1990, sizes: KS, colors: [C.moss, C.black, C.yellow], badge: "POPO" },
  { id: 18, gender: "Kids", cat: "Hoodies", name: "Kids Zip Hoodie", price: 1890, was: 2290, sizes: KS, colors: [C.grey, C.sky, C.moss] },
  { id: 9, gender: "Kids", cat: "Trousers", name: "Jogger Trouser", price: 1590, was: 1890, sizes: KS, colors: [C.grey, C.black, C.navy] },
  { id: 17, gender: "Kids", cat: "Pants", name: "Kids Cargo Pant", price: 1790, sizes: KS, colors: [C.olive, C.black, C.sand], badge: "NEW" },
];

export const TYPES = ["Jackets", "Hoodies", "Trousers", "Pants"];

export const CATS = [
  { g: "Men", tag: "Trending", tint: "#1f3324", a: ["Jackets", "#16181a"], b: ["Hoodies", "#4a5d2a"] },
  { g: "Women", tag: "New in", tint: "#35242f", a: ["Hoodies", "#b4727f"], b: ["Trousers", "#b7a47c"] },
  { g: "Kids", tag: "Mini fits", tint: "#1f3140", a: ["Jackets", "#4f8fc0"], b: ["Hoodies", "#d1a82f"] },
];

export const MARQUEE = ["MEN", "WOMEN", "KIDS", "BAAR-O-BAAR LAHORE", "JACKETS", "HOODIES", "POPO!", "COD ALL PAKISTAN"];

export const TABS = ["All", "Men", "Women", "Kids"];

export const cnt = (g, t) => PRODUCTS.filter((p) => p.gender === g && (t === "All" || p.cat === t)).length;

// 4490 -> "4,490" (manual, so server and browser always print the same text)
export const group = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
export const fmt = (n) => "Rs. " + group(n);

export function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const f = (v) => Math.max(0, Math.min(255, v + amt));
  const r = f(n >> 16), g = f((n >> 8) & 255), b = f(n & 255);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
