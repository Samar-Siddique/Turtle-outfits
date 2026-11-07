import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";

export const metadata = {
  title: "Turtle Outfit",
  description: "Turtle Outfit: jackets, hoodies, trousers and pants for men, women and kids. Order on WhatsApp, cash on delivery.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b100c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Rubik+Dirt&display=swap"
        />
      </head>
      <body>
        <ShopProvider>{children}</ShopProvider>
      </body>
    </html>
  );
}
