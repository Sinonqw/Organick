import React from "react";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";

export interface IItem {
  title: string;
  desc: string;
}

const Item = ({ title, desc }: IItem) => {
  return (
    <li className="mb-6">
      <div className="py-4 px-5 md:py-[29px] md:px-[27px] w-full flex gap-2 items-center bg-[#ECECEC] rounded-4xl">
        <div className="w-[15px] h-[15px] border-3 border-[#7EB693] rounded-full flex-shrink-0"></div>
        <Title className="text-lg md:text-2xl">{title}</Title>
      </div>
      <Desc className="text-base md:text-[18px] pl-8 md:pl-10 mt-2">
        {desc}
      </Desc>
    </li>
  );
};

export default Item;
