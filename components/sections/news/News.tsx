// News.js
import React from "react";
import HeaderSect from "@/components/ui/HeaderSect";
import NewsCard from "./NewsCard";
import NEWS_ITEMS from "@/data/News";

const News = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <HeaderSect
        btnBgColor="#fff"
        btnTextColor="#274C5B"
        subtitleText="News"
        titleText="Discover weekly content about organic food, & more"
      />
      <div className="flex flex-col md:flex-row gap-8 justify-center">
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