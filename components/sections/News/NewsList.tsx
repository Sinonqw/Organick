"use client";
import { useEffect, useState } from "react";
import NewsCard from "../news/NewsCard";
import { motion } from "framer-motion";

interface INew {
  _id: string;
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
      try {
        const res = await fetch("/api/news");
        const data = await res.json();
        setNews(data);
      } catch (err) {
        console.error("Ошибка при загрузке новостей:", err);
      }
    }
    fetchNews();
  }, []);

  return (
    <section className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {news.map((item, i) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <NewsCard
              _id={item._id}
              author={item.author}
              date={item.date}
              desc={item.desc}
              img={item.img}
              title={item.title}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewsList;
