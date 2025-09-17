
import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Link from "next/link";

interface ITipsCard {
  text: string;
  img: string;
}

const TipsCard = ({ text, img }: ITipsCard) => {
  return (
    <article className="relative w-full">
      <div>
        <Image 
          alt={text} 
          src={img} 
          width={612} 
          height={583} 
          className="w-full h-auto"
        />
      </div>
      <Link href={'/'}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                py-4 md:py-[33px] px-8 md:px-[83px] bg-white rounded-2xl shadow-lg w-fit text-center"
      >
        <Title bold="medium" className="text-xl md:text-2xl lg:text-3xl whitespace-nowrap">
          {text}
        </Title>
      </Link>
    </article>
  );
};

export default TipsCard;