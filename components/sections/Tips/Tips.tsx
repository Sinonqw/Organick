import React from "react";
import TipsCard from "./TipsCard";
import TIPS_CARDS from "@/data/Tips";

const Tips = () => {
  return (
    <section className="flex gap-10 py-[187px] bg-[#F1F8F4]">
      {TIPS_CARDS.map((item, i) => (
        <TipsCard key={i} img={item.img} text={item.text} />
      ))}
    </section>
  );
};

export default Tips;
