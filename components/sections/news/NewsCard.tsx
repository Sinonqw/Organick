// NewsCard.js
import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";
import Button from "@/components/ui/Button";

interface INewsCard {
  date: string;
  author: string;
  desc: string;
  title: string;
  img: string;
}

const NewsCard = ({ author, date, desc, title, img }: INewsCard) => {
  const [day, month] = date.split(" ");

  return (
    <article className="relative w-full">
      <div className="relative">
        <Image
          alt={title}
          src={img}
          width={677}
          height={524}
          className="rounded-2xl w-full h-auto"
        />
        <span className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 
                       bg-white rounded-full px-4 py-2 text-center text-sm md:text-base lg:text-lg font-extrabold text-[#274c5b]">
          {day} <br /> {month}
        </span>
      </div>
      <div className="bg-white rounded-[1.5rem] p-6 md:p-8 lg:p-12 shadow-md mx-4 md:mx-6 lg:mx-8 -mt-24 md:-mt-32 lg:-mt-40 relative z-10">
        <div className="flex gap-2 items-center mb-2 md:mb-4">
          <Image src={"/icons/author.svg"} alt="Author icon" width={18} height={20} />
          <p className="text-[#274c5b] text-sm md:text-base">{author}</p>
        </div>
        <div className="mb-4">
          <Title className="text-xl xl:text-2xl">{title}</Title>
          <Desc className="text-md xl:text-xl">{desc}</Desc>
        </div>
        {/* <Button className="py-3 px-6 xl:py-7 xl:12">Read More</Button> */}
      </div>
    </article>
  );
};

export default NewsCard;