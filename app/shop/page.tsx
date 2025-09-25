"use client";

import React, { useState, useEffect } from "react";
import Banner from "@/components/shared/Banner";
import ProductsList, {
  IProduct,
} from "@/components/sections/products/ProductsList";

const ShopPage = () => {
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
    <>
      <Banner img="/banners/shopB.jpg" text="Shop" />
      <section className="py-23">
        <ProductsList count={12} products={products} />
      </section>
    </>
  );
};

export default ShopPage;
