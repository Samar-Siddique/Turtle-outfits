"use client";

import { useEffect, useRef, useState } from "react";
import { fmt, group } from "@/lib/data";
import Garment from "./Garment";

export default function ProductCard({ p, index, onAdd }) {
  const [ci, setCi] = useState(0);
  const [size, setSize] = useState(p.sizes[1] || p.sizes[0]);
  const [added, setAdded] = useState(false);
  const timer = useRef(null);
  const col = p.colors[ci];

  useEffect(() => () => clearTimeout(timer.current), []);

  const addNow = () => {
    onAdd(p, col, size);
    setAdded(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="card" style={{ animationDelay: (index % 4) * 70 + "ms" }}>
      <div className={"pic" + (p.gender === "Kids" ? " kids" : "")}>
        <span className="cat">{p.gender} &middot; {p.cat}</span>
        {p.badge && <span className="badge">{p.badge}</span>}
        <Garment cat={p.cat} color={col[1]} />
      </div>
      <div className="info">
        <div className="row">
          <h3 className="name">{p.name}</h3>
          <div className="price">
            {p.was && <s>{group(p.was)}</s>}
            {fmt(p.price)}
          </div>
        </div>
        <div>
          <span className="lbl">Colour: {col[0]}</span>
          <div className="sw">
            {p.colors.map((c, k) => (
              <button key={c[0]} aria-label={c[0]} aria-pressed={k === ci} style={{ background: c[1] }} onClick={() => setCi(k)} />
            ))}
          </div>
        </div>
        <div>
          <span className="lbl">Size</span>
          <div className="sz">
            {p.sizes.map((s) => (
              <button key={s} aria-pressed={s === size} onClick={() => setSize(s)}>{s}</button>
            ))}
          </div>
        </div>
        <button className={"add" + (added ? " done" : "")} onClick={addNow}>
          {added ? "Added" : "Add to Bag"}
        </button>
      </div>
    </article>
  );
}
