import React from "react";
import Image from "next/image";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";
import Button from "@/components/ui/Button";
import FeatureItem from "./FeatureItem";
import features from "@/data/Features";

const AboutUs = () => {
  return (
    <section className="flex justify-between gap-2 bg-[#F9F8F8] items-center">
      <div>
        <Image src={"/citrus.png"} alt="photo" width={911} height={867} />
      </div>

      <div>
        <div className="max-w-[702px] mb-[46px]">
          <Subtitle size={36} className="mb-2">
            About Us
          </Subtitle>
          <Title size={50} className="mb-[14px]">
            We Believe in Working Accredited Farmers
          </Title>

          <Desc >
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </Desc>
        </div>

        <div className="flex flex-col gap-[30px] mb-[46px]">
          {features.map((item, i) => (
            <FeatureItem
              desc={item.desc}
              img={item.img}
              title={item.title}
              key={i}
            />
          ))}
        </div>

        <Button colorBg="#274C5B" colorText="#FFFFFF">
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;
