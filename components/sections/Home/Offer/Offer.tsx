"use client";
import React, { useMemo, useState, useEffect } from "react";
import ProductCard from "../../products/ProductCard";
import HeaderSect from "@/components/ui/HeaderSect";
import { motion, Variants } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0 },
};

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
      [newArray[i], newArray[randomIndex]] = [
        newArray[randomIndex],
        newArray[i],
      ];
    }
    return newArray.slice(0, count);
  }

  const randomProducts = useMemo(() => getRandomItems(products, 4), [products]);

  return (
    <motion.section
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{once: true, amount: 0.3}}
    className="bg-[#274C5B] py-16 px-4 md:py-24 md:px-6 lg:py-32 xl:py-52">
      <HeaderSect
        btnText="View All Product"
        btnTextColor="#274C5B"
        subtitleText="Offer"
        btnClasses="py-7 px-10"
        titleColor="#FFFFFF"
        titleText="We Offer Organic For You"
        href="/shop"
      />

      <motion.div
      variants={itemVariants}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {randomProducts.map((product) => (
            <ProductCard
              cost={product.cost}
              img={product.img}
              tag={product.tag}
              title={product.title}
              _id={product._id}
              key={product._id}
              itemVariants={itemVariants}
            />
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default Offer;
