const HEXES = [
  { l: "4%", t: "62%", s: 54, d: 16, dl: -3 },
  { l: "18%", t: "20%", s: 34, d: 20, dl: -9 },
  { l: "34%", t: "78%", s: 40, d: 18, dl: -6 },
  { l: "52%", t: "12%", s: 60, d: 24, dl: -14 },
  { l: "66%", t: "70%", s: 30, d: 15, dl: -2 },
  { l: "80%", t: "28%", s: 46, d: 19, dl: -11 },
  { l: "92%", t: "74%", s: 36, d: 22, dl: -8 },
];

export default function Drift() {
  return (
    <div className="drift" aria-hidden="true">
      {HEXES.map((h, i) => (
        <svg
          key={i}
          viewBox="0 0 40 40"
          style={{
            left: h.l,
            top: h.t,
            width: h.s,
            height: h.s,
            opacity: +(0.12 + (i % 3) * 0.04).toFixed(2),
            animationDuration: h.d + "s",
            animationDelay: h.dl + "s",
          }}
        >
          <polygon points="20,3 35,11.5 35,28.5 20,37 5,28.5 5,11.5" />
        </svg>
      ))}
    </div>
  );
}
