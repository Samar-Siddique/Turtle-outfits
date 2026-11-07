"use client";

import { WA } from "@/lib/data";
import { useShop } from "@/context/ShopContext";
import Drift from "./Drift";
import Logo from "./Logo";

export default function Hero() {
  const { pick } = useShop();

  return (
    <div className="wrap" id="top">
      <header className="hero">
        <Drift />
        <div className="copy">
          <h1 className="sr">Turtle Outfit</h1>
          <div className="kicker"><i></i> New drop live</div>
          <p className="dialog" aria-label="Baar-o-Baar Lahore">
            <span>Baar-o-Baar</span>
            <span>Lahore</span>
          </p>
          <div className="cats">
            {["Men", "Women", "Kids"].map((g) => (
              <a key={g} href="#shop" onClick={() => pick(g, "All")}>{g}</a>
            ))}
          </div>
          <div className="cta">
            <a className="btn solid" href="#shop">Shop the drop</a>
            <a className="btn ghost" href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </div>
        </div>
        <div className="logoWrap">
          <Logo />
        </div>
      </header>
    </div>
  );
}
