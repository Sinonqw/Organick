import React from "react";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";
import Item from "./Item";
import { IItem } from "./Item";
import Image from "next/image";

const Items: IItem[] = [
  {
    title: "100% Natural Product",
    desc: "Simply dummy text of the printing and typesetting industry Lorem Ipsum",
  },
  {
    title: " Increases resistance",
    desc: "Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="flex flex-wrap items-center justify-center gap-8 py-12 md:py-24 lg:py-[190px] bg-[#F9F8F8] px-5">
      <div className="flex-1 max-w-lg">
        <div className="mb-6 md:mb-9">
          <Subtitle className="mb-1 md:mb-[6px]">Why Choose us?</Subtitle>
          <Title className="mb-4 text-3xl md:text-4xl lg:text-5xl md:mb-7">
            We do not buy from the open market & traders.
          </Title>
          <Desc>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard the 1500s, when an
            unknown
          </Desc>
        </div>

        <ul className="mt-8">
          {Items.map((item, i) => (
            <Item desc={item.desc} title={item.title} key={i} />
          ))}
        </ul>
      </div>
      <div className="hidden md:block flex-1 max-w-md md:max-w-xl">
        <Image
          alt=""
          src={"/about/whyChooseUs.png"}
          width={678}
          height={579}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
