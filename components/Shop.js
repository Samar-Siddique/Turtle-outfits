"use client";

import { useMemo } from "react";
import { PRODUCTS, TABS, TYPES } from "@/lib/data";
import { useShop } from "@/context/ShopContext";
import ProductCard from "./ProductCard";

export default function Shop() {
  const { tab, setTab, ty, setTy, add } = useShop();

  const list = useMemo(
    () => PRODUCTS.filter((p) => (tab === "All" || p.gender === tab) && (ty === "All" || p.cat === ty)),
    [tab, ty]
  );

  return (
    <section className="sec" id="shop">
      <div className="sechead">
        <h2>The <em>Drop</em></h2>
        <p className="note">Colour aur size chunein, bag mein daalein, order seedha WhatsApp par. Prices sample hain.</p>
      </div>
      <div className="tabs" role="group" aria-label="Filter products">
        {TABS.map((t) => (
          <button key={t} className="tab" aria-pressed={t === tab} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>
      <div className="types" role="group" aria-label="Filter by type">
        {["All", ...TYPES].map((t) => (
          <button key={t} aria-pressed={t === ty} onClick={() => setTy(t)}>{t === "All" ? "All types" : t}</button>
        ))}
      </div>
      <div className="grid" key={tab + ty}>
        {list.map((p, i) => (
          <ProductCard key={p.id} p={p} index={i} onAdd={add} />
        ))}
      </div>
    </section>
  );
}
