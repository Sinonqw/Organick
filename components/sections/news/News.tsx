'use client'
import React from "react";
import HeaderSect from "@/components/ui/HeaderSect";
import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";
interface INew {
  img: string;
  date: string;
  author: string;
  title: string;
  desc: string;
}

const News = () => {
  const [news, setNews] = useState<INew[]>([]);

  useEffect(() => {
    async function fetchNews() {
      const res = await fetch("api/news");
      const data = await res.json();
      setNews(data);
    }
    fetchNews();
  }, []);

  return (
    <section className="container mx-auto py-16 px-4">
      <HeaderSect
        btnBgColor="#fff"
        btnTextColor="#274C5B"
        subtitleText="News"
        btnClasses="py-7 px-10 border-#686868 border-2"
        href="/news"
        btnText="More News"
        titleText="Discover weekly content about organic food, & more"
      />
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {news.map((item, i) => {
          if (i < 2) {
            return (
              <NewsCard
                key={i}
                _id={i.toString()}
                author={item.author}
                date={item.date}
                desc={item.desc}
                img={item.img}
                title={item.title}
              />
            );
          }
          return null;
        })}
      </div>
    </section>
  );
};

export default News;
