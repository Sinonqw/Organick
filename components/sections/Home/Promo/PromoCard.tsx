import React from "react";
import Image from "next/image";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";

interface IPromoCard {
  img: string
  subtitle: string
  title: string
  subtitleColor?: string
  titleColor?: string
}

const PromoCard = ({ img, subtitle, title, subtitleColor = "#7EB693", titleColor = "#274C5B" }: IPromoCard) => {
  return (
    <div className="relative w-full md:max-w-[calc(50%-18px)] lg:max-w-[680px] py-20 px-8 sm:py-25 sm:px-14 rounded-2xl overflow-hidden">
      <Image
        src={img}
        alt="photo"
        fill
        className="object-cover"
      />
      <div className="relative z-10 max-w-[277px]">
        <Subtitle color={subtitleColor} className="mb-1">
          {subtitle}
        </Subtitle>
        <Title color={titleColor} className="text-2xl md:text-3xl lg:text-4xl">
          {title}
        </Title>
      </div>
    </div>
  )
}

export default PromoCard;