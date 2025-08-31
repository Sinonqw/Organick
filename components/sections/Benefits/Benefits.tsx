import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import React from "react";
import Image from "next/image";
import Desc from "@/components/ui/Desc";
import BenefitCard from "./BenefitCard";

const Benefits = () => {
  return (
    <section className="relative overflow-hidden py-[164px]">
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url('/benefitsBg.png')",
        }}
      ></div>
      <div
        className="absolute top-0 right-0 w-full h-full bg-no-repeat bg-contain transform rotate-180    "
        style={{
          backgroundImage: "url('/benefitsBg.png')",
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center pb-[102px] border-b-1 border-b-[#e0e0e0] mb-[102px] max-w-[800px] mx-auto">
        <div className="mb-15 flex flex-col items-center">
          <Subtitle className="mb-2" size={36}>
            Testimonial
          </Subtitle>
          <Title size={50}>
            What Our Customer Saying?
          </Title>
        </div>

        <div className="flex flex-col items-center mb-5 max-w-[780px] text-center">
          <Image
            src={"/users/user1.png"}
            className="rounded-full mb-5"
            alt="user"
            width={115}
            height={115}
          />
          <Image
            alt=""
            src={"/icons/stars.svg"}
            width={122}
            height={26}
            className="mb-6"
          />
          <Desc size={18}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </Desc>
        </div>

        <div className="mb-5">
          <h4 className="roboto text-[25px] font-semibold text-[#274C5B]">
            Sara Taylor
          </h4>
          <Desc size={15} className="text-center">
            Consumer
          </Desc>
        </div>

        <div className="flex gap-2">
          <span className="block w-2 h-2 rounded-full bg-black"></span>
          <span className="block w-2 h-2 rounded-full bg-black"></span>
          <span className="block w-2 h-2 rounded-full bg-black"></span>
        </div>
      </div>

      <div className="relative z-10 flex justify-center gap-15 max-w-[1030px] mx-auto">
        <BenefitCard text="Organic" title="100%" />
        <BenefitCard text="Organic" title="100%" />
        <BenefitCard text="Organic" title="100%" />
        <BenefitCard text="Organic" title="100%" />
      </div>
    </section>
  );
};

export default Benefits;