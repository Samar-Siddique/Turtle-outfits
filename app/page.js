import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Categories from "@/components/Categories";
import Shop from "@/components/Shop";
import Why from "@/components/Why";
import PopoBanner from "@/components/PopoBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Scrim from "@/components/Scrim";
import BagDrawer from "@/components/BagDrawer";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />

      <div className="wrap">
        <Categories />
        <Shop />
        <Why />
        <PopoBanner />
        <Contact />
        <Footer />
      </div>

      <div className="demo">Demo preview</div>

      <Scrim />
      <BagDrawer />
      <MobileMenu />
    </>
  );
}
