"use client";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import { motion, Variants } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: {opacity: 0, y: -50},
  visible: {opacity: 1, y: 0}
}

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
    <motion.section
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{once: true, amount: 0.3}}
    className="py-12 sm:py-24 lg:py-44">
      <motion.div 
      variants={itemVariants}
      className="text-center mb-8 sm:mb-10">
        <Subtitle className="mb-2 text-4xl">Categories</Subtitle>
        <Title className="text-4xl sm:text-5xl lg:text-6xl">Our Products</Title>
      </motion.div>

      <ProductsList count={8} products={products} />
    </motion.section>
  );
};

export default OurProducts;
