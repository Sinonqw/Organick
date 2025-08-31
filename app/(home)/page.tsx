import AboutUs from "@/components/sections/AboutUs/AboutUs";
import Benefits from "@/components/sections/Benefits/Benefits";
import Hero from "@/components/sections/Hero";
import Offer from "@/components/sections/Offer/Offer";
import OurProducts from "@/components/sections/OurProducts/OurProducts";
import Promo from "@/components/sections/Promo/Promo";
import Story from "@/components/sections/Story/Story";
import Tips from "@/components/sections/Tips/Tips";
import News from "@/components/sections/News/News";

export default function Home() {
  return (
    <>
      <Hero />
      <Promo />
      <AboutUs />
      <OurProducts />
      <Benefits />
      <Offer />
      <Story />
      <Tips />
      <News />
    </>
  );
}
