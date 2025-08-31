import React from "react";
import HeaderSect from "@/components/ui/HeaderSect";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <section className="pt-[177px] pb-[185px]">
      <HeaderSect
        btnBgColor="#fff"
        btnText="More News"
        btnTextColor="#274C5B"
        subtitleText="News"
        titleText="Discover weekly content about organic food, & more"
        btnClasses="border-1 border-[#274C5B]"
      />
      <div className="flex justify-center gap-12">
        <NewsCard author="By Rachi Card" date="25 Nov" desc="Simply dummy text of the printing and typesetting industry. Lorem Ipsum" img="/news/bg1.png" title="The Benefits of Vitamin D & How to Get It"/>
        <NewsCard author="By Rachi Card" date="25 Nov" desc="Simply dummy text of the printing and typesetting industry. Lorem Ipsum" img="/news/bg2.png" title="The Benefits of Vitamin D & How to Get It"/>
      </div>
    </section>
  );
};

export default News;
