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
    <article className="relative">
      <div>
        <Image alt="" src={img} width={612} height={583} />
      </div>
      <Link href={'/'}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                py-[33px] px-[83px] bg-white rounded-2xl shadow-lg max-w-[320px] w-full"
      >
        <Title bold="medium">{text}</Title>
      </Link>
    </article>
  );
};

export default TipsCard;
