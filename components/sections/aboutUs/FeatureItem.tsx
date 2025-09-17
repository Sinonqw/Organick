import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";

interface IFeatureItem {
  img: string;
  title: string;
  desc: string;
}

const FeatureItem = ({ img, title, desc }: IFeatureItem) => {
  return (
    <div className="flex items-center gap-2 sm:gap-5">
      <div className="p-2 bg-white rounded-[1.25rem] flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20 sm:p-6">
        <Image
          alt="icon"
          src={img}
          width={52}
          height={52}
          className="w-6 h-6 sm:w-[52px] sm:h-[52px]"
        />
      </div>
      <div className="flex-1">
        <Title className="mb-1 text-base sm:text-xl md:text-2xl">
          {title}
        </Title>
        <Desc>
          {desc}
        </Desc>
      </div>
    </div>
  );
};

export default FeatureItem;