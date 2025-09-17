import React, { useMemo } from "react";
import { Products } from "@/data/Products";
import ProductCard from "../../ourProducts/ProductCard";
import HeaderSect from "@/components/ui/HeaderSect";

const Offer = () => {
  function getRandomItems<T>(array: T[], count: number): T[] {
    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [newArray[i], newArray[randomIndex]] = [
        newArray[randomIndex],
        newArray[i],
      ];
    }

    return newArray.slice(0, count);
  }
  const randomProducts = useMemo(() => getRandomItems(Products, 4), []);

  return (
    <section className="bg-[#274C5B] py-16 px-4 md:py-24 md:px-6 lg:py-32 xl:py-52">
      <HeaderSect
        btnText="View All Product"
        btnTextColor="#274C5B"
        subtitleText="Offer"
        btnClasses="py-7 px-10"
        titleColor="#FFFFFF"
        titleText="We Offer Organic For You"
      />

      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {randomProducts.map((product, i) => (
            <ProductCard
              cost={product.cost}
              img={product.img}
              tag={product.tag}
              title={product.title}
              key={i}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Offer;