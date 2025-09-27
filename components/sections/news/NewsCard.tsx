"use client";

import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

interface INewsCard {
  _id: string;
  date?: string;
  author: string;
  desc: string;
  title: string;
  img: string;
}

const NewsCard = ({ _id, author, desc, title, img }: INewsCard) => {
  return (
    <motion.article
      className="relative w-full"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Картинка с оверлеем */}
      <motion.div
        className="relative overflow-hidden rounded-4xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        <Image
          alt={title}
          src={img}
          width={677}
          height={524}
          className="rounded-2xl w-full h-auto object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black/0 rounded-2xl"
          whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Контент */}
      <motion.div
        className="bg-white rounded-[1.5rem] p-6 md:p-8 lg:p-12 shadow-md mx-4 md:mx-6 lg:mx-8 
                   -mt-24 md:-mt-32 lg:-mt-40 relative z-10 flex flex-col gap-4"
        whileHover={{ y: -5, boxShadow: "0px 20px 40px rgba(0,0,0,0.15)" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Автор */}
        <div className="flex gap-2 items-center mb-2 md:mb-4">
          <Image
            src={"/icons/author.svg"}
            alt="Author icon"
            width={18}
            height={20}
          />
          <p className="text-[#274c5b] text-sm md:text-base">{author}</p>
        </div>

        {/* Заголовок и описание */}
        <div className="mb-4">
          <motion.div
            whileHover={{ color: "#7EB693" }}
            transition={{ duration: 0.3 }}
          >
            <Title className="text-xl xl:text-2xl">{title}</Title>
          </motion.div>
          <Desc className="text-md xl:text-xl">{desc}</Desc>
        </div>

        {/* Кнопка */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Button href={`/news/${_id}`} className="py-3 px-6 xl:py-7 xl:px-12">
            Read More
          </Button>
        </motion.div>
      </motion.div>
    </motion.article>
  );
};

export default NewsCard;
