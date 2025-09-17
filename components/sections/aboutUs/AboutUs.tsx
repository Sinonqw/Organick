import React from "react";
import Image from "next/image";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";
import Button from "@/components/ui/Button";
import FeatureItem from "./FeatureItem";

interface IFeature {
  desc: string;
  img: string;
  title: string;
}

interface IAbout {
  img: string;
  subtitile: string;
  title: string;
  desc: string;
  features: IFeature[];
  flex?: string;
}

const AboutUs = ({ img, desc, features, subtitile, title, flex }: IAbout) => {
  return (
    <section className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:gap-2 p-4 lg:p-20">
      <div className="w-full lg:w-1/2">
        <Image
          src={img}
          alt="photo"
          width={911}
          height={867}
          layout="responsive"
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 mt-8 lg:mt-0">
        <div className="max-w-full lg:max-w-[702px] mb-8">
          <Subtitle className="mb-2">{subtitile}</Subtitle>
          <Title className="mb-4 text-3xl sm:text-4xl lg:text-5xl">
            {title}
          </Title>
          <Desc className="max-w-[650px] whitespace-pre-line">{desc}</Desc>
        </div>
        {flex == "row" ? (
          <div className="flex gap-2 mb-8">
            {features.map((item, i) => (
              <FeatureItem
                desc={item.desc}
                img={item.img}
                title={item.title}
                key={i}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-8 mb-8">
            {features.map((item, i) => (
              <FeatureItem
                desc={item.desc}
                img={item.img}
                title={item.title}
                key={i}
              />
            ))}
          </div>
        )}

        <Button colorBg="#274C5B" colorText="#FFFFFF" className="py-7 px-12">
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;
