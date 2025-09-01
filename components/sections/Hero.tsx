import React from "react";
import Image from "next/image";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[600px] lg:h-[900px] mb-12 sm:mb-24">
      {/* Background Image */}
      <Image
        src="/home-hero-bg.png"
        alt="A plate of healthy food"
        layout="fill"
        objectFit="cover"
        className="z-10"
      />

      {/* Text Content */}
      <div className="relative z-20 w-full flex flex-col justify-center items-center text-center lg:items-start lg:text-left px-6 py-12 lg:pl-[150px] lg:py-0">
        <div className="max-w-full lg:max-w-[530px] w-full">
          {/* Subtitle with adaptive styles */}
          <Subtitle className="text-xl sm:text-2xl lg:text-3xl xl:text-[36px]">100% Natural Food</Subtitle>
          
          {/* Title with adaptive styles */}
          <Title className="mt-2 mb-4 text-4xl leading-tight sm:text-6xl lg:text-7xl xl:text-[70px]">
            Choose the best healthier way of life
          </Title>
          
          {/* Button with adaptive styles */}
          <Button className="text-sm px-6 py-4 sm:text-base sm:px-8 sm:py-5 lg:text-[20px] lg:px-9 lg:py-7">Explore Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;