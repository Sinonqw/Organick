import AboutUs from "@/components/sections/AboutUs/AboutUs";
import Benefits from "@/components/sections/Benefits/Benefits";
import Hero from "@/components/sections/Hero";
import OurProducts from "@/components/sections/OurProducts/OurProducts";
import Promo from "@/components/sections/Promo/Promo";

export default function Home() {
  return (
    <>
      <Hero />
      <Promo />
      <AboutUs />
      <OurProducts />
      <Benefits />
    </>
  );
}
