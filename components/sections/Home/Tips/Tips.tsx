import React from "react";
import TipsCard from "./TipsCard";
import TIPS_CARDS from "@/data/Tips";

const Tips = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-10 py-10 md:py-[187px] bg-[#F1F8F4] px-4 md:px-8 lg:px-16">
      {TIPS_CARDS.map((item, i) => (
        <TipsCard key={i} img={item.img} text={item.text} />
      ))}
    </section>
  );
};

export default Tips;
