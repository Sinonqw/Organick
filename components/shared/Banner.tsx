import React from "react";
import Title from "../ui/Title";
import Image from "next/image";

interface IBanner {
  text: string;
  img: string;
}

const Banner = ({ text, img }: IBanner) => {


  
  return (
    <section className="relative w-full h-[450px] flex items-center justify-center">
      <Image
        src={img}
        alt=""
        objectFit="cover"
        layout="fill"
        className="absolute inset-0 z-0"
      />

      <Image
        src="/banners/decor.png"
        alt=""
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-10 opacity-70"
      />

      <Title className="relative z-20 text-7xl text-white font-bold">
        {text}
      </Title>
    </section>
  );
};

export default Banner;
