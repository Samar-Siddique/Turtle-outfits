"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { WA, fmt } from "@/lib/data";

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [tab, setTab] = useState("All");
  const [ty, setTy] = useState("All");
  const [bag, setBag] = useState([]);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("bag");
  const [menu, setMenu] = useState(false);
  const [grp, setGrp] = useState("Men");
  const [form, setForm] = useState({ name: "", phone: "", city: "", address: "", note: "" });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const add = (p, col, size) =>
    setBag((b) => {
      const key = p.id + col[0] + size;
      const hit = b.find((x) => x.key === key);
      if (hit) return b.map((x) => (x.key === key ? { ...x, qty: x.qty + 1 } : x));
      return [...b, { key, p, col, size, qty: 1 }];
    });

  const bump = (key, d) =>
    setBag((b) => b.map((x) => (x.key === key ? { ...x, qty: x.qty + d } : x)).filter((x) => x.qty > 0));

  const count = bag.reduce((a, x) => a + x.qty, 0);
  const total = bag.reduce((a, x) => a + x.qty * x.p.price, 0);

  const view = bag.length ? step : "bag";
  const valid =
    form.name.trim().length > 1 &&
    form.phone.replace(/\D/g, "").length >= 10 &&
    form.city.trim().length > 1 &&
    form.address.trim().length > 5;

  const msg = useMemo(() => {
    const lines = bag.map(
      (x) => `- ${x.p.name} (${x.p.gender}) | ${x.col[0]} | ${x.size} | x${x.qty} | ${fmt(x.p.price * x.qty)}`
    );
    return (
      `Assalam o Alaikum Turtle Outfit! Mujhe ye order karna hai:\n${lines.join("\n")}\nTotal: ${fmt(total)} (Cash on Delivery)\n\nNaam: ${form.name}\nPhone: ${form.phone}\nCity: ${form.city}\nAddress: ${form.address}` +
      (form.note.trim() ? `\nNote: ${form.note}` : "")
    );
  }, [bag, total, form]);

  const href = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

  const close = () => {
    setOpen(false);
    setStep("bag");
    setMenu(false);
  };

  const pick = (g, t) => {
    setTab(g);
    setTy(t);
    close();
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setStep("bag");
        setMenu(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const value = {
    tab, setTab, ty, setTy, bag, add, bump, count, total,
    open, openBag: () => setOpen(true),
    menu, openMenu: () => setMenu(true),
    step, setStep, view, grp, setGrp,
    form, set, valid, href, close, pick,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside <ShopProvider>");
  return ctx;
}
