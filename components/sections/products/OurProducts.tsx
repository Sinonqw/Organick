"use client";
import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
        console.error("Error fetching products:", error);
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
      animate="visible"
      className="py-12 sm:py-24 lg:py-44 px-4"
    >
      {/* Заголовок */}
      <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-10">
        <Subtitle className="mb-2 text-4xl">Categories</Subtitle>
        <Title className="text-4xl sm:text-5xl lg:text-6xl">Our Products</Title>
      </motion.div>

      {/* Контент */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loader w-10 h-10 border-4 border-t-[#274C5B] border-gray-300 rounded-full animate-spin"></span>
        </div>
      ) : (
        <ProductsList count={8} products={products} />
      )}
    </motion.section>
  );
};

export default OurProducts;
