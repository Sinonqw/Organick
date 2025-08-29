import React from "react";
import PromoCard from "./PromoCard";
import cards from "@/data/PromoCards";


const Promo = () => {
  return (
    <section className="flex justify-center gap-9 bg-white py-39 flex-wrap">

      {cards.map((item, i) => (
        <PromoCard key={i} img={item.img} subtitle={item.subtitle} title={item.title} subtitleColor={item.subtitleColor} titleColor={item.titleColor} />
      ))}
    </section>
  );
};

export default Promo;
