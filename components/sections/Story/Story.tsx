// Story.tsx
import React from "react";
import Image from "next/image";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";
import COMPANY_INFO from "@/data/Story";

const Story = () => {
  return (
    <section className="relative px-4 py-8 md:px-8 md:py-16 lg:py-24">
      {/* Background image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image 
          alt="Organic store background" 
          src={"/storyBg.png"} 
          layout="fill" 
          objectFit="cover" 
          className="w-full h-full"
        />
      </div>

      {/* Content box */}
      <div 
        className="relative z-10 mx-auto max-w-lg bg-white p-6 rounded-2xl md:p-12 md:max-w-xl lg:ml-auto lg:mr-0 lg:max-w-2xl"
        style={{ maxWidth: '500px' }}
      >
        {/* Header */}
        <div className="mb-4 md:mb-8">
          <Subtitle className="text-xl md:text-3xl lg:text-4xl mb-1">
            Eco Friendly
          </Subtitle>
          <Title className="text-2xl md:text-4xl lg:text-5xl">
            Econis is a Friendly Organic Store
          </Title>
        </div>

        {/* Info blocks */}
        <div className="flex flex-col gap-4 md:gap-8">
          {COMPANY_INFO.map((item, i) => (
            <div key={i}>
              <Title color="#274C5B" bold="medium" className="text-2xl md:text-2xl">
                {item.title}
              </Title>
              <Desc className="text-md md:text-base">
                {item.description}
              </Desc>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;