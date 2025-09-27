// app/shop/[productInner]/ShopSingleClient.tsx
"use client";

import React from "react";
import ProductGallery from "@/components/sections/Shop/ShopInner/ProductGallery";
import ProductDetails from "@/components/sections/Shop/ShopInner/ProductDetails";
import RelatedProducts from "@/components/sections/Shop/ShopInner/RelatedProducts";
import { IProduct } from "@/types/product";
import { motion, Variants } from "framer-motion";

interface IProps {
  product: IProduct;
  otherProducts: IProduct[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ShopSingleClient = ({ product, otherProducts }: IProps) => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto py-16 px-4"
    >
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        <ProductGallery img={product.img} title={product.title} tag={product.tag} />
        <ProductDetails
          title={product.title}
          cost={product.cost}
          description={product.description || ""}
          product={product}
        />
      </div>

      {otherProducts.length > 0 && (
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Related Products</h2>
          <RelatedProducts products={otherProducts} />
        </div>
      )}
    </motion.section>
  );
};

export default ShopSingleClient;
