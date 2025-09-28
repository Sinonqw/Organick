"use client";
import React from "react";
import Title from "@/components/ui/Title";
import Subtitle from "@/components/ui/Subtitle";
import OfferCard from "./OfferCard";
import { motion, Variants } from "framer-motion";

const offerData = [
  { img: "/about/offer1.jpg", title: "Spicy" },
  { img: "/about/offer2.jpg", title: "Nuts & Feesd" },
  { img: "/about/offer3.jpg", title: "Fruits" },
  { img: "/about/offer4.jpg", title: "Vegetable" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const Offer = () => {
  return (
    <motion.section 
    initial="hidden"
    whileInView="visible"
    viewport={{once: true, amount: 0.3}}
    variants={containerVariants}
    className="bg-[#2D4543] text-white py-24 px-8">
      <motion.div
      variants={itemVariants}
      className="text-center mb-16">
        <Subtitle className="text-3xl font-medium text-[#7EB693] mb-2">
          About Us
        </Subtitle>
        <Title className="text-5xl font-extrabold" color="white">
          What We Offer for You
        </Title>
      </motion.div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {offerData.map((item, index) => (
          <OfferCard key={index} img={item.img} title={item.title} />
        ))}
      </div>
    </motion.section>
  );
};

export default Offer;
