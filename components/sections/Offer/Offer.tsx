import React, { useMemo } from "react";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";
import { Products } from "@/data/Products";
import ProductCard from "../OurProducts/ProductCard";

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
      <div className="flex justify-between items-end gap-3 mb-[50px]">
        <div>
          <Subtitle color="#7EB693" size={36} className="mb-2">
            Offer
          </Subtitle>
          <Title color="white" size={50}>
            We Offer Organic For You
          </Title>
        </div>
        <Button colorBg="#EFD372">View All Product</Button>
      </div>

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
