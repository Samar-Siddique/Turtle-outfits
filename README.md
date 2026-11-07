# Turtle Outfit (Next.js demo)

Next.js 14 (App Router) + React 18. Koi extra library nahi, sirf CSS (`app/globals.css`).

## Chalane ke steps

1. Node.js 18.17 ya naya install hona chahiye (`node -v` se check karein). Nahi hai to https://nodejs.org se LTS install karein.
2. Terminal mein is folder ke andar jayein:
   ```bash
   cd turtle-outfit
   npm install
   npm run dev
   ```
3. Browser mein http://localhost:3000 kholein.

Phone par test karna ho (same WiFi): `npm run dev -- -H 0.0.0.0` chalayein aur phone mein `http://<laptop-ka-IP>:3000` kholein.

## Production build

```bash
npm run build
npm start
```

## Vercel par deploy (client ko link dene ke liye)

1. Folder ko GitHub repo mein push karein.
2. https://vercel.com par login karke "Add New > Project" se repo import karein.
3. Settings default rakhein, "Deploy" dabayein. Aap ko `https://...vercel.app` ka public link mil jayega.

Ya CLI se: `npx vercel` (pehli dafa login poochega), phir `npx vercel --prod`.

## Folder structure

```
app/
  layout.js        fonts, metadata, ShopProvider
  page.js          saare sections yahan jurte hain
  globals.css      poora design aur animations
components/
  Navbar, Hero, Logo, MiniShell, Drift, Marquee,
  Categories, Shop, ProductCard, Garment,
  Why, PopoBanner, Contact, Footer,
  Scrim, BagDrawer, MobileMenu
context/ShopContext.js   bag, filters, checkout form, WhatsApp message
lib/data.js              products, categories, WhatsApp number, helpers
```

## Aam tabdeeliyan

- **Products / prices / sizes:** `lib/data.js` mein `PRODUCTS`.
- **WhatsApp number:** `lib/data.js` mein `WA` (country code ke saath, + ke baghair) aur `NUMS` (screen par dikhne wale numbers).
- **Colours:** `app/globals.css` ke shuru mein `:root` variables.
- **"Demo preview" badge hatana:** `app/page.js` se `<div className="demo">` wali line delete karein.
