import React, { useMemo } from "react";
import { Products } from "@/data/Products";
import ProductCard from "../OurProducts/ProductCard";
import HeaderSect from "@/components/ui/HeaderSect";

const Offer = () => {
  function getRandomItems<T>(array: T[], count: number): T[] {
    const result: T[] = [];
    const used = new Set<number>();

    while (result.length < count && result.length < array.length) {
      const randomIndex = Math.floor(Math.random() * array.length);

      if (!used.has(randomIndex)) {
        result.push(array[randomIndex]);
        used.add(randomIndex);
      }
    }
    return result;
  }
  const randomProducts = useMemo(() => getRandomItems(Products, 4), []);

  return (
    <section className="bg-[#274C5B] py-50 px-10">
      <HeaderSect

        btnText="View All Product"
        btnTextColor="#274C5B"
        subtitleColor="#7EB693"
        subtitleText="Offer"
        titleColor="#FFFFFF"
        titleText="We Offer Organic For You"
      />

      <div>
        <ul className="grid grid-cols-4 gap-5">
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
