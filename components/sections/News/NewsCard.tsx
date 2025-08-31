import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";
import Button from "@/components/ui/Button";

interface INewsCard {
  date: string;
  author: string;
  title: string;
  desc: string;
  img: string;
}

const NewsCard = ({ author, date, desc, title, img }: INewsCard) => {
  const [day, month] = date.split(" ");

  return (
    <article className="relative">
      <div>
        <Image
          alt=""
          src={img}
          width={677}
          height={524}
          className="rounded-2xl"
        />
        <span className="block absolute top-12 left-10 text-[#274C5B] text-[25px] font-extrabold bg-white rounded-full py-4 px-6 text-center">
          {day} <br /> {month}
        </span>
      </div>
      <div className="bg-white px-[57px] pt-[46px] pb-15 absolute top-70 shadow-[0_20px_35px_0_rgba(167,167,167,0.25)] rounded-3xl max-w-[613px] left-8 flex flex-col gap-4">
        <div className="flex gap-2">
          <Image src={"/icons/author.svg"} alt="" width={18} height={20} />
          <p className="text-[18px] text-[#274c5b]">{author}</p>
        </div>
        <div>
          <Title size={25} color="#274C5B">
            {title}
          </Title>
          <Desc size={18}>{desc}</Desc>
        </div>
        <Button className="max-w-[220px]">Read More</Button>
      </div>
    </article>
  );
};

export default NewsCard;
