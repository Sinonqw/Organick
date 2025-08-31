import React from "react";
import Image from "next/image";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";
import COMPANY_INFO from "@/data/Story";

const Story = () => {
  return (
    <section className="relative h-[931px]">
      <div className="absolute z-[-1]">
        <Image alt="" src={"/storyBg.png"} width={952} height={931} />
      </div>
      <div className="py-[77px] pr-[65px] pl-[90px] rounded-2xl bg-white max-w-[789px] absolute right-0 top-[100px]">
        <div className="max-w-[600px] mb-[35px]">
          <Subtitle size={36} className="mb-2">
            Eco Friendly
          </Subtitle>
          <Title size={50}>Econis is a Friendly Organic Store</Title>
        </div>
        <div className="flex flex-col gap-[35px]">
          {COMPANY_INFO.map((item, i) => (
            <div key={i}>
              <Title color="#274C5B" bold="medium">
                {item.title}
              </Title>
              <Desc size={18}>{item.description}</Desc>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
