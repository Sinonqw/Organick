"use client";
import React from "react";
import TipsCard from "./TipsCard";
import TIPS_CARDS from "@/data/Tips";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2, // 👈 карточки будут поочерёдно появляться
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Tips = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-10 md:py-[187px] bg-[#F1F8F4] px-4 md:px-8 lg:px-16"
    >
      <motion.div
        variants={containerVariants}
        className="flex flex-col md:flex-row gap-4 md:gap-10"
      >
        {TIPS_CARDS.map((item, i) => (
          <motion.div key={i} variants={itemVariants}>
            <TipsCard img={item.img} text={item.text} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Tips;
