"use client";

import { CATS, TYPES } from "@/lib/data";
import { useShop } from "@/context/ShopContext";
import MiniShell from "./MiniShell";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { count, pick, openBag, openMenu } = useShop();

  return (
    <div className="bar">
      <a href="#top" className="brand">
        <MiniShell />
        TURTLE<small>OUTFIT</small>
      </a>
      <nav className="nav">
        <div className="navitem">
          <a className="lnk" href="#categories">Categories</a>
          <div className="mega">
            <div className="mp">
              {CATS.map((c) => (
                <div key={c.g}>
                  <h4>{c.g}</h4>
                  {TYPES.map((t) => (
                    <a key={t} href="#shop" onClick={() => pick(c.g, t)}>{t}</a>
                  ))}
                  <a href="#shop" onClick={() => pick(c.g, "All")}>All {c.g}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <a className="lnk" href="#shop">Shop</a>
        <a className="lnk" href="#why">Why Turtle</a>
        <a className="lnk" href="#visit">Contact</a>
        <ThemeToggle />
        <button className="bagbtn" onClick={openBag} aria-label="Open bag">
          Bag <span className="n" key={count}>{count}</span>
        </button>
        <button className="burger" onClick={openMenu} aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </div>
  );
}
