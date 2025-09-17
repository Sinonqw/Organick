import AboutUs from "@/components/sections/aboutUs/AboutUs";
import Benefits from "@/components/sections/Home/Benefits/Benefits";
import Hero from "@/components/sections/Home/Hero";
import Offer from "@/components/sections/Home/Offer/Offer";
import OurProducts from "@/components/sections/ourProducts/OurProducts";
import Promo from "@/components/sections/Home/Promo/Promo";
import Story from "@/components/sections/Home/Story/Story";
import Tips from "@/components/sections/Home/Tips/Tips";
import News from "@/components/sections/news/News";
import Newsletter from "@/components/sections/newsletter/Newsletter";
import { featuresHome } from "@/data/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <Promo />
      <AboutUs desc="Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley." features={featuresHome} img="/citrus.png" subtitile="About Us" title="We Believe in Working
Accredited Farmers" />
      <OurProducts />
      <Benefits />
      <Offer />
      <Story />
      <Tips />
      <News />
      <Newsletter />
    </>
  );
}
