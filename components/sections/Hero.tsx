import React from "react";
import Image from "next/image";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="h-[900px] flex items-center relative mb-[154px]">
      
      {/* Контейнер для текстового контента, который будет поверх фона */}
      <div className="flex-1 pl-[150px] relative z-20">
        <div className="max-w-[530px]">
          <Subtitle color="#68a47f">100% Natural Food</Subtitle>
          <Title color="#274c5b" size={70}>Choose the best healthier way of life</Title>
          <Button colorBg="#EFD372" colorText="#274C5B">Explore Now</Button>
        </div>
      </div>
      
      {/* Изображение-фон, которое будет под контентом */}
      <Image
        src="/home-hero-bg.png"
        alt="A plate of healthy food"
        layout="fill"
        objectFit="cover"
        className="z-10"
      />
      <Image
        src="/bg-decor.png"
        alt="A plate of healthy food"
        layout="fill"
        className="z-11"
      />
      
      
    </section>
  );
};

export default Hero;