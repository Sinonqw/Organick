"use client";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

interface IProduct {
  _id: string;
  tag: string;
  title: string;
  img: string;
  cost: number;
}

const OurProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-12 sm:py-24 lg:py-44"
    >
      <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-10">
        <Subtitle className="mb-2 text-4xl">Categories</Subtitle>
        <Title className="text-4xl sm:text-5xl lg:text-6xl">Our Products</Title>
      </motion.div>

      {/* Loader пока данные не пришли */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 animate-pulse rounded-2xl h-[350px]"
            ></div>
          ))}
        </div>
      ) : (
        <ProductsList count={8} products={products} />
      )}
    </motion.section>
  );
};

export default OurProducts;
