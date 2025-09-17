import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";

interface ICard {
  title: string;
  desc: string;
  img: string;
}

const Card = ({ title, desc, img }: ICard) => {
  return (
    <article className="flex flex-col items-start p-4">
      <Image alt="icon" src={img} width={46} height={46} />
      <Title className="mt-4 text-xl md:text-2xl">{title}</Title>
      <Desc className="mt-2 text-sm md:text-base">{desc}</Desc>
    </article>
  );
};

export default Card;
