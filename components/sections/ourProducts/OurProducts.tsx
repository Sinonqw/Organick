import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import React from "react";
import ProductCard from "./ProductCard";
import { Products } from "@/data/Products";
import ProductsList from "../ProductsList";

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

      <ProductsList count={8} products={Products}/>
    </section>
  );
};

export default OurProducts;