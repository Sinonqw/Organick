import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import React from "react";
import ProductCard from "./ProductCard";
import { Products } from "@/data/Products";

const OurProducts = () => {
  return (
    <section className="pt-[176px] pb-[200px]">
      <div className="text-center mb-10">
        <Subtitle size={36} className="mb-2">
          Categories
        </Subtitle>
        <Title size={50}>
          Our Products
        </Title>
      </div>

      <ul className="grid grid-cols-4 gap-5 ">
        {Products.map((product) => (
          <ProductCard
            cost={product.cost}
            img={product.img}
            tag={product.tag}
            title={product.title}
            key={product.title}
          />
        ))}
      </ul>
    </section>
  );
};

export default OurProducts;
