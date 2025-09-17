import React from "react";
import Banner from "@/components/sections/Banner";
import AboutUs from "@/components/sections/aboutUs/AboutUs";
import { featuresAbout } from "@/data/Features";
import WhyChooseUs from "@/components/sections/About/WhyChoose/WhyChooseUs";
import Team from "@/components/sections/About/Team/Team";
import Offer from "@/components/sections/About/Offer/Offer";
import Newsletter from "@/components/sections/newsletter/Newsletter";

const About = () => {
  return (
    <>
      <Banner img="/banners/aboutB.jpg" text="About Us" />
      <AboutUs
        desc={`Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. \n

Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.`}
        features={featuresAbout}
        img="/about/abouImg.png"
        subtitile="About Us"
        title="We do Creative 
Things for Success"
        flex="row"
      />
      <WhyChooseUs />
      <Team />
      <Offer />
      <Newsletter />
    </> 
  );
};

export default About;
