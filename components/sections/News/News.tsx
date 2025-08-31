import React from "react";
import HeaderSect from "@/components/ui/HeaderSect";
import NewsCard from "./NewsCard";
import NEWS_ITEMS from "@/data/News";

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
        {NEWS_ITEMS.map((item, i) => (
          <NewsCard
            key={i}
            author={item.author}
            date={item.date}
            desc={item.desc}
            img={item.img}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default News;
