import React from "react";
import Title from "@/components/ui/Title";

interface IBenefitCard {
  title: string;
  text: string;
}

const BenefitCard = ({ title, text }: IBenefitCard) => {
  return (
    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-[#7EB693] flex items-center justify-center p-2">
      <div className="w-full h-full absolute rounded-full bg-[#F1F1F1] border-4 border-white flex flex-col items-center justify-center p-3 text-center">
        <Title className="text-3xl md:text-4xl mb-2">{title}</Title>
        <p className="font-semibold text-[#274C5B] text-sm md:text-base">
          {text}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
