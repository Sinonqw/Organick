import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Subtitle from "@/components/ui/Subtitle";
import Link from "next/link";
import { JSX } from "react";

interface IMedia {
  name: string;
  icon: JSX.Element;
  link: string;
}

interface ITeamCard {
  name: string;
  prof: string;
  media: IMedia[];
  img: string;
}

const TeamCard = ({ name, prof, media, img }: ITeamCard) => {
  return (
    <article className="bg-white rounded-[25px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      <div className="relative w-full h-[615px] rounded-t-[25px] overflow-hidden">
        <Image 
          alt={name} 
          src={img} 
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <Title className="text-2xl mb-1 text-primary-dark">{name}</Title>
            <Subtitle className="text-[18px] text-gray-500 font-normal">{prof}</Subtitle>
          </div>
          <div className="flex gap-2">
            {media.map((social, index) => (
              <Link href={social.link} key={index} className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:text-white hover:bg-green-500 hover:border-green-500 transition-colors">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default TeamCard;