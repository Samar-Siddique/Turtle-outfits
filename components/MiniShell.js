const hex = (cx, cy, r) =>
  [0, 1, 2, 3, 4, 5]
    .map((i) => {
      const a = (Math.PI / 3) * i;
      return (cx + r * Math.cos(a)).toFixed(1) + "," + (cy + r * Math.sin(a)).toFixed(1);
    })
    .join(" ");

const SMALL = [
  [20, 8.5], [20, 31.5], [10.5, 14], [29.5, 14], [10.5, 26], [29.5, 26],
];

export default function MiniShell() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <ellipse cx="20" cy="20" rx="18" ry="18" fill="#1b6330" stroke="#050f07" strokeWidth="2" />
      <polygon points={hex(20, 20, 7)} fill="#6ccf4f" stroke="#050f07" strokeWidth="1.5" />
      {SMALL.map(([x, y]) => (
        <polygon key={x + "-" + y} points={hex(x, y, 4.5)} fill="#3aa84d" stroke="#050f07" strokeWidth="1.2" />
      ))}
    </svg>
  );
}
