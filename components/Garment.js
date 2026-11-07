import { shade } from "@/lib/data";

export default function Garment({ cat, color }) {
  const dark = shade(color, -38);
  const light = shade(color, 28);
  const common = { fill: color, stroke: "#000", strokeWidth: 3, strokeLinejoin: "round" };

  if (cat === "Jackets")
    return (
      <svg viewBox="0 0 200 220" role="img" aria-label="Jacket">
        <path d="M68 28 L46 40 L10 128 L40 140 L58 96 L58 204 L142 204 L142 96 L160 140 L190 128 L154 40 L132 28 L100 46 Z" {...common} />
        <path d="M68 28 Q100 70 132 28 L132 44 Q100 84 68 44 Z" fill={dark} stroke="#000" strokeWidth="3" strokeLinejoin="round" />
        <path d="M100 56 V204" stroke="#000" strokeWidth="3" />
        <path d="M58 150 H142 M58 112 H142" stroke={dark} strokeWidth="4" opacity=".55" />
        <rect x="70" y="160" width="22" height="6" rx="3" fill={light} stroke="#000" strokeWidth="2" />
        <rect x="108" y="160" width="22" height="6" rx="3" fill={light} stroke="#000" strokeWidth="2" />
      </svg>
    );

  if (cat === "Hoodies")
    return (
      <svg viewBox="0 0 200 220" role="img" aria-label="Hoodie">
        <path d="M66 34 L44 46 L10 130 L40 142 L58 100 L58 204 L142 204 L142 100 L160 142 L190 130 L156 46 L134 34 Z" {...common} />
        <path d="M62 36 Q100 -6 138 36 Q100 82 62 36 Z" fill={dark} stroke="#000" strokeWidth="3" strokeLinejoin="round" />
        <path d="M100 60 V92" stroke={light} strokeWidth="3" strokeLinecap="round" />
        <circle cx="92" cy="96" r="3.5" fill={light} stroke="#000" strokeWidth="1.5" />
        <circle cx="108" cy="96" r="3.5" fill={light} stroke="#000" strokeWidth="1.5" />
        <path d="M72 150 H128 L134 186 H66 Z" fill={dark} stroke="#000" strokeWidth="3" strokeLinejoin="round" />
        <path d="M58 196 H142" stroke="#000" strokeWidth="3" />
      </svg>
    );

  if (cat === "Trousers")
    return (
      <svg viewBox="0 0 200 220" role="img" aria-label="Trouser">
        <path d="M52 14 H148 L162 206 H110 L100 84 L90 206 H38 Z" {...common} />
        <path d="M52 14 H148 V30 H52 Z" fill={dark} stroke="#000" strokeWidth="3" strokeLinejoin="round" />
        <path d="M100 30 V84" stroke="#000" strokeWidth="3" />
        <rect x="56" y="70" width="26" height="30" rx="3" fill={dark} stroke="#000" strokeWidth="2.5" />
        <rect x="118" y="70" width="26" height="30" rx="3" fill={dark} stroke="#000" strokeWidth="2.5" />
      </svg>
    );

  return (
    <svg viewBox="0 0 200 220" role="img" aria-label="Pants">
      <path d="M62 14 H138 L134 206 H106 L100 78 L94 206 H66 Z" {...common} />
      <path d="M62 14 H138 V30 H62 Z" fill={dark} stroke="#000" strokeWidth="3" strokeLinejoin="round" />
      <path d="M100 30 V78" stroke="#000" strokeWidth="3" />
      <path d="M66 44 Q80 58 84 40 M134 44 Q120 58 116 40" fill="none" stroke={light} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
