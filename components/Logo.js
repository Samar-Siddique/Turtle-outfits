// Turtle logo: honeycomb shell + lettering. Geometry is computed once at module load
// and rounded, so server and browser render exactly the same markup.
const CX = 300;
const CY = 258;
const r3 = (v) => +v.toFixed(3);

const PLATES = (() => {
  const R = 46, r = 40, dx = 1.5 * R, dy = Math.sqrt(3) * R, out = [];
  for (let k = -3; k <= 3; k++) {
    const odd = Math.abs(k) % 2 === 1;
    for (let j = -5; j <= 5; j++) {
      const x = CX + k * dx, y = CY + (j + (odd ? 0.5 : 0)) * dy;
      const pts = [0, 1, 2, 3, 4, 5].map((i) => {
        const a = (Math.PI / 3) * i;
        return [r3(x + r * Math.cos(a)), r3(y + r * Math.sin(a))];
      });
      if (pts.every(([vx, vy]) => ((vx - CX) / 188) ** 2 + ((vy - CY) / 190) ** 2 <= 1)) {
        const hp = pts.map(([vx, vy]) => [r3(x + (vx - x) * 0.66 - 3), r3(y + (vy - y) * 0.66 - 4)]);
        out.push({
          pts: pts.map((p) => p.join(",")).join(" "),
          hp: hp.map((p) => p.join(",")).join(" "),
          delay: r3(((Math.hypot(x - CX, y - CY)) / 200) * 1.6),
        });
      }
    }
  }
  return out;
})();

const RIM = Array.from({ length: 20 }, (_, i) => {
  const deg = i * 18, a = (deg * Math.PI) / 180;
  return { x: r3(CX + 212 * Math.cos(a)), y: r3(CY + 208 * Math.sin(a)), rot: deg + 90, i };
});

const LETTERS = "TURTLE".split("");

export default function Logo() {
  return (
    <svg className="logo" viewBox="0 0 600 520" role="img" aria-label="Turtle logo">
      <defs>
        <linearGradient id="lime" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e2f78a" />
          <stop offset=".55" stopColor="#9ee05a" />
          <stop offset="1" stopColor="#62c447" />
        </linearGradient>
        <linearGradient id="plate" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38a04b" />
          <stop offset="1" stopColor="#22783a" />
        </linearGradient>
        <linearGradient id="sheenG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset=".5" stopColor="#fff" stopOpacity=".22" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="shellClip">
          <ellipse cx={CX} cy={CY} rx="238" ry="236" />
        </clipPath>
      </defs>

      <ellipse cx={CX} cy={CY} rx="238" ry="236" fill="#1b6330" stroke="#050f07" strokeWidth="12" />
      <ellipse cx={CX} cy={CY} rx="226" ry="224" fill="none" stroke="#47b45a" strokeOpacity=".35" strokeWidth="3" />

      {RIM.map((p) => (
        <rect
          key={p.i}
          className="rim"
          x={r3(p.x - 15)}
          y={r3(p.y - 11)}
          width="30"
          height="22"
          rx="7"
          transform={`rotate(${p.rot} ${p.x} ${p.y})`}
          fill="#3aa84d"
          stroke="#050f07"
          strokeWidth="4"
          style={{ animationDelay: r3(p.i * 0.16) + "s" }}
        />
      ))}

      {PLATES.map((p, i) => (
        <g key={i}>
          <polygon points={p.pts} fill="url(#plate)" stroke="#050f07" strokeWidth="5" strokeLinejoin="round" />
          <polygon className="hl" points={p.hp} fill="#8fe38a" style={{ animationDelay: p.delay + "s" }} />
        </g>
      ))}

      <g transform="rotate(-5 300 270)">
        {LETTERS.map((ch, i) => (
          <g key={i} className="lt" style={{ animationDelay: r3(i * 0.09) + "s, " + r3(1 + i * 0.18) + "s" }}>
            <text x={95 + i * 82 + 4} y="306" textAnchor="middle" fontFamily="Rubik Dirt, Impact, sans-serif" fontSize="128" fill="#031208" stroke="#031208" strokeWidth="12" strokeLinejoin="round">{ch}</text>
            <text x={95 + i * 82} y="300" textAnchor="middle" fontFamily="Rubik Dirt, Impact, sans-serif" fontSize="128" fill="url(#lime)" stroke="#052410" strokeWidth="8" strokeLinejoin="round" paintOrder="stroke">{ch}</text>
          </g>
        ))}
      </g>

      <g clipPath="url(#shellClip)">
        <g transform="rotate(18 300 260)">
          <rect className="sheen" x="-160" y="-60" width="90" height="640" fill="url(#sheenG)" />
        </g>
      </g>
    </svg>
  );
}
