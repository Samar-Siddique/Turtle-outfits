"use client";

import { CATS, TYPES, cnt } from "@/lib/data";
import { useShop } from "@/context/ShopContext";
import Garment from "./Garment";

export default function Categories() {
  const { pick } = useShop();

  return (
    <section className="sec" id="categories">
      <div className="sechead">
        <h2>Shop by <em>Category</em></h2>
      </div>
      <div className="cat-grid">
        {CATS.map((c) => (
          <div key={c.g} className="catcard" style={{ "--tint": c.tint }}>
            <a className="catimg" href="#shop" aria-label={"Shop " + c.g} onClick={() => pick(c.g, "All")}>
              <span className="tagpill">{c.tag}</span>
              <div className="gar" aria-hidden="true">
                <Garment cat={c.a[0]} color={c.a[1]} />
                <Garment cat={c.b[0]} color={c.b[1]} />
              </div>
            </a>
            <div className="catbody">
              <div className="cathead">
                <h3>{c.g}</h3>
                <span>{cnt(c.g, "All")} products</span>
              </div>
              <div className="subs">
                {TYPES.map((t) => (
                  <a key={t} href="#shop" onClick={() => pick(c.g, t)}>
                    {t}<i>{cnt(c.g, t)}</i>
                  </a>
                ))}
              </div>
              <a className="shopall" href="#shop" onClick={() => pick(c.g, "All")}>Shop all {c.g}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
