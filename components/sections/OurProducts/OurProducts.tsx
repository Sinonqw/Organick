import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import React from "react";
import ProductCard from "./ProductCard";
import { Products } from "@/data/Products";

const OurProducts = () => {
  return (
    <section className="py-12 sm:py-24 lg:py-44">
      <div className="text-center mb-8 sm:mb-10">
        <Subtitle className="mb-2 text-4xl">
          Categories
        </Subtitle>
        <Title className="text-4xl sm:text-5xl lg:text-6xl">
          Our Products
        </Title>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
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