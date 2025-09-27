"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { motion, Variants } from "framer-motion";

const containerVariants:Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export interface IProduct {
  _id: string;
  tag: string;
  title: string;
  img: string;
  cost: number;
}

const ProductsList = ({
  products,
  count,
}: {
  products: IProduct[];
  count: number;
}) => {
  return (
    <motion.ul 
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{once: true, amount: 0.3}}
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
      {products.slice(0, count).map((product) => (
        <ProductCard
          key={product._id}
          _id={product._id.toString()}
          tag={product.tag}
          title={product.title}
          img={product.img}
          cost={product.cost}
          itemVariants={itemVariants}
        />
      ))}
    </motion.ul>
  );
};

export default ProductsList;
