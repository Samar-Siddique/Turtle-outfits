import { NUMS, WA } from "@/lib/data";

export default function Contact() {
  return (
    <section className="sec" id="visit">
      <div className="sechead">
        <h2>Order <em>Karo</em></h2>
        <p className="note">Seedha shop se baat karein.</p>
      </div>
      <div className="contact">
        <div className="panel">
          <span className="lbl">WhatsApp / Call</span>
          {NUMS.map((n) => (
            <span className="num" key={n}>{n}</span>
          ))}
          <div className="cta" style={{ marginTop: 18 }}>
            <a className="btn solid" href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer">Open WhatsApp</a>
          </div>
        </div>
        <div className="panel">
          <span className="lbl">Follow Turtle Outfit</span>
          <p style={{ margin: "0 0 4px", color: "var(--mute)" }}>Naye videos aur rates sab se pehle yahan.</p>
          <div className="socials">
            <span>TikTok</span><span>Instagram</span><span>Facebook</span><span>YouTube</span>
          </div>
        </div>
      </div>
    </section>
  );
}
