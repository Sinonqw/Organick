"use client";
import { useEffect, useState } from "react";
import NewsCard from "../news/NewsCard";

interface INew {
  _id: string;   // 👈 обязательно
  img: string;
  date: string;
  author: string;
  title: string;
  desc: string;
}

const NewsList = () => {
  const [news, setNews] = useState<INew[]>([]);

  useEffect(() => {
    async function fetchNews() {
      const res = await fetch("/api/news"); // обязательно с /
      const data = await res.json();
      setNews(data);
    }
    fetchNews();
  }, []);

  return (
    <section className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {news.map((item) => (
          <NewsCard
            key={item._id}
            _id={item._id}  
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

export default NewsList;
