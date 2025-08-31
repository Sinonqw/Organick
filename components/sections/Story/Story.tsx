import React from "react";
import Image from "next/image";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";

const Story = () => {
  return (
    <section className="relative h-[931px]">
      <div className="absolute z-[-1]">
        <Image alt="" src={"/storyBg.png"} width={952} height={931} />
      </div>
      <div className="py-[77px] pr-[65px] pl-[90px] rounded-2xl bg-white max-w-[789px] absolute right-0 top-[100px]">
        <div className="max-w-[600px] mb-[35px]">
          <Subtitle size={36} className="mb-2">Eco Friendly</Subtitle>
          <Title size={50}>Econis is a Friendly Organic Store</Title>
        </div>
        <div className="flex flex-col gap-[35px]">
          <div>
            <Title color="#274C5B" bold="medium">
              Start with Our Company First
            </Title>
            <Desc size={18}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </Desc>
          </div>
          <div>
            <Title color="#274C5B" bold="medium">
              Start with Our Company First
            </Title>
            <Desc size={18}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </Desc>
          </div>
          <div>
            <Title color="#274C5B" bold="medium">
              Start with Our Company First
            </Title>
            <Desc size={18}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </Desc>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
