"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import PromoCard from "./PromoCard";
import cards from "@/data/PromoCards";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const Promo = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-wrap justify-center gap-4 sm:gap-9 bg-white py-20 sm:py-39 px-4 sm:px-0"
    >
      {cards.map((item, i) => (
        <motion.div
          key={i}
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            boxShadow: "0px 20px 40px rgba(0,0,0,0.25)",
            transition: { type: "spring", stiffness: 200, damping: 20 },
          }}
          className="w-full md:max-w-[calc(50%-18px)] lg:max-w-[680px] rounded-2xl"
        >
          <PromoCard
            img={item.img}
            subtitle={item.subtitle}
            title={item.title}
            subtitleColor={item.subtitleColor}
          />
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Promo;
