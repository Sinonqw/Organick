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
    <div className="flex gap-5">
      <div className="p-6 bg-white rounded-[20px] flex items-center justify-center">
        <Image
          alt="icon"
          src={img}
          width={52}
          height={52}
        />
      </div>
      <div>
        <Title color="#274c5b" size={25} className="mb-[7px]">
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
