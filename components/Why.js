const POINTS = [
  ["Cash on Delivery", "Parcel khol kar dekhein, phir payment karein. Poore Pakistan mein."],
  ["Seedha Lahore Se", "Shop se seedha aap tak. Beech mein koi nahi, isliye rate bhi theek."],
  ["Easy Exchange", "Size theek nahi aaya? WhatsApp karein, exchange hum sambhalenge."],
  ["Heavy Fabric", "Jackets aur hoodies jo sardi mein bhi poora saath dein."],
];

export default function Why() {
  return (
    <section className="sec" id="why">
      <div className="sechead">
        <h2>Why <em>Turtle</em></h2>
      </div>
      <div className="why">
        {POINTS.map(([title, text]) => (
          <div key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
