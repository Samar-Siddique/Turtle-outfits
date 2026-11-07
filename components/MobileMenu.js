"use client";

import { CATS, TYPES, WA, cnt } from "@/lib/data";
import { useShop } from "@/context/ShopContext";

export default function MobileMenu() {
  const { menu, close, grp, setGrp, pick } = useShop();

  return (
    <aside className={"menu" + (menu ? " on" : "")} aria-hidden={!menu} aria-label="Menu">
      <div className="dh">
        <h3>Menu</h3>
        <button className="x" onClick={close} aria-label="Close menu">&#10005;</button>
      </div>
      <div className="mb">
        {CATS.map((c) => (
          <div className="acc" key={c.g}>
            <button aria-expanded={grp === c.g} onClick={() => setGrp(grp === c.g ? "" : c.g)}>{c.g}</button>
            <div className={"subl" + (grp === c.g ? " on" : "")}>
              <a href="#shop" onClick={() => pick(c.g, "All")}>All {c.g}<span>{cnt(c.g, "All")}</span></a>
              {TYPES.map((t) => (
                <a key={t} href="#shop" onClick={() => pick(c.g, t)}>{t}<span>{cnt(c.g, t)}</span></a>
              ))}
            </div>
          </div>
        ))}
        <div className="mlinks">
          <a href="#shop" onClick={close}>Shop all</a>
          <a href="#why" onClick={close}>Why Turtle</a>
          <a href="#visit" onClick={close}>Contact</a>
        </div>
      </div>
      <div className="df">
        <a className="wa" href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
      </div>
    </aside>
  );
}
