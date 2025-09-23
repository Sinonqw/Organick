"use client";
import React, { useMemo, useState, useEffect } from "react";
import ProductCard from "../../products/ProductCard";
import HeaderSect from "@/components/ui/HeaderSect";

interface IProduct {
  _id: string;
  tag: string;
  title: string;
  img: string;
  cost: number;
}

const Offer = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  function getRandomItems<T>(array: T[], count: number): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
    }
    return newArray.slice(0, count);
  }

  const randomProducts = useMemo(() => getRandomItems(products, 4), [products]);

  return (
    <section className="bg-[#274C5B] py-16 px-4 md:py-24 md:px-6 lg:py-32 xl:py-52">
      <HeaderSect
        btnText="View All Product"
        btnTextColor="#274C5B"
        subtitleText="Offer"
        btnClasses="py-7 px-10"
        titleColor="#FFFFFF"
        titleText="We Offer Organic For You"
        href="/shop"
      />

      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {randomProducts.map((product) => (
            <ProductCard
              cost={product.cost}
              img={product.img}
              tag={product.tag}
              title={product.title}
              _id={product._id}
              key={product._id}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Offer;
