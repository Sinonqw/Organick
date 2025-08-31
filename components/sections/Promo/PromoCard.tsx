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

const PromoCard = ({ img, subtitle, title, subtitleColor = "#7EB693", titleColor = "#fff" }: IPromoCard) => {
  return (
    <div className="relative max-w-[680px] w-full py-25 px-14 rounded-2xl overflow-hidden">
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
        <Title color={titleColor} size={40}>
          {title}
        </Title>
      </div>
    </div>
  )
}

export default PromoCard;
