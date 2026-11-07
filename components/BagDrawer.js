"use client";

import { fmt } from "@/lib/data";
import { useShop } from "@/context/ShopContext";
import Garment from "./Garment";

export default function BagDrawer() {
  const { bag, bump, total, open, close, view, setStep, form, set, valid, href } = useShop();

  return (
    <aside className={"drawer" + (open ? " on" : "")} aria-hidden={!open} aria-label="Your bag">
      <div className="dh">
        <h3>{view === "form" ? "Checkout" : "Your Bag"}</h3>
        <button className="x" onClick={close} aria-label="Close bag">&#10005;</button>
      </div>

      {view === "bag" && (
        <div className="dl">
          {bag.length === 0 && (
            <div className="empty">
              <b>Bag khali hai</b>
              Koi jacket ya hoodie chun lein.
            </div>
          )}
          {bag.map((x) => (
            <div className="li" key={x.key}>
              <div className="th"><Garment cat={x.p.cat} color={x.col[1]} /></div>
              <div>
                <h4>{x.p.name}</h4>
                <small>{x.col[0]} &middot; {x.size}</small>
                <div className="q">
                  <button onClick={() => bump(x.key, -1)} aria-label="Less">&minus;</button>
                  <span>{x.qty}</span>
                  <button onClick={() => bump(x.key, 1)} aria-label="More">+</button>
                </div>
              </div>
              <div className="pp">{fmt(x.p.price * x.qty)}</div>
            </div>
          ))}
        </div>
      )}

      {view === "form" && (
        <form className="dl" id="checkout-form" onSubmit={(e) => e.preventDefault()} noValidate>
          <p className="fh">Delivery ka address likhein. Order isi se WhatsApp par jayega.</p>
          <div className="field">
            <label htmlFor="f-name">Full name</label>
            <input id="f-name" autoComplete="name" value={form.name} onChange={set("name")} placeholder="Ali Khan" />
          </div>
          <div className="field">
            <label htmlFor="f-phone">Phone number</label>
            <input id="f-phone" type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} placeholder="03XX XXXXXXX" />
          </div>
          <div className="field">
            <label htmlFor="f-city">City</label>
            <input id="f-city" autoComplete="address-level2" value={form.city} onChange={set("city")} placeholder="Lahore" />
          </div>
          <div className="field">
            <label htmlFor="f-address">Complete address</label>
            <textarea id="f-address" rows={3} autoComplete="street-address" value={form.address} onChange={set("address")} placeholder="House / street / area" />
          </div>
          <div className="field">
            <label htmlFor="f-note">Note (optional)</label>
            <input id="f-note" value={form.note} onChange={set("note")} placeholder="Koi khaas hidayat" />
          </div>
          <div className="sum">
            {bag.map((x) => (
              <div key={x.key}>
                <span>{x.qty} x {x.p.name} ({x.col[0]}, {x.size})</span>
                <span>{fmt(x.p.price * x.qty)}</span>
              </div>
            ))}
          </div>
        </form>
      )}

      <div className="df">
        <div className="tot"><span>Total</span><span>{fmt(total)}</span></div>
        {view === "bag" ? (
          <button className="co" disabled={bag.length === 0} onClick={() => setStep("form")}>Checkout</button>
        ) : (
          <>
            <a
              className="wa"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!valid}
              onClick={(e) => { if (!valid) e.preventDefault(); }}
            >
              Place Order
            </a>
            {!valid && <div className="cod">SAB FIELDS BHAREIN, PHIR ORDER BHEJ SAKTE HAIN</div>}
            <button className="back" onClick={() => setStep("bag")}>Back to bag</button>
          </>
        )}
        <div className="cod">CASH ON DELIVERY &middot; DELIVERY CHARGES WHATSAPP PAR CONFIRM</div>
      </div>
    </aside>
  );
}
