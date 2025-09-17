import React from "react";
import PromoCard from "./PromoCard";
import cards from "@/data/PromoCards";

const Promo = () => {
  return (
    <section className="flex flex-wrap justify-center gap-4 sm:justify-center sm:gap-9 bg-white py-20 sm:py-39 px-4 sm:px-0">
      {cards.map((item, i) => (
        <PromoCard
          key={i}
          img={item.img}
          subtitle={item.subtitle}
          title={item.title}
          subtitleColor={item.subtitleColor}
        />
      ))}
    </section>
  );
};

export default Promo;