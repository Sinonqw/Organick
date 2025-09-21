"use client";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import React, { useEffect, useState } from "react";
import ProductsList from "../ProductsList";

interface IProduct {
  _id: string;
  tag: string;
  title: string;
  img: string;
  cost: number;
}

const OurProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <section className="py-12 sm:py-24 lg:py-44">
      <div className="text-center mb-8 sm:mb-10">
        <Subtitle className="mb-2 text-4xl">Categories</Subtitle>
        <Title className="text-4xl sm:text-5xl lg:text-6xl">Our Products</Title>
      </div>

      <ProductsList count={8} products={products} />
    </section>
  );
};

export default OurProducts;
