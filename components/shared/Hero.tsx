"use client";

import { motion, Variants } from "framer-motion";
import React from "react";
import Image from "next/image";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";
import Button from "../ui/Button";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { 
      delayChildren: 0.4,
      staggerChildren: 0.3 
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[600px] lg:h-[900px] mb-12 sm:mb-24">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <Image src="/home-hero-bg.png" layout="fill" alt="" objectFit="cover" />
      </motion.div>

      {/* Text Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 w-full flex flex-col justify-center items-center text-center lg:items-start lg:text-left px-6 py-12 lg:pl-[150px] lg:py-0"
      >
        <motion.div variants={itemVariants}>
          <Subtitle className="text-xl sm:text-2xl lg:text-3xl xl:text-[36px]">
            100% Natural Food
          </Subtitle>
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-160">
          <Title className="mt-2 mb-4 text-4xl leading-tight sm:text-6xl lg:text-7xl xl:text-[70px]">
            Choose the best healthier way of life
          </Title>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            href="/shop"
            className="text-sm px-6 py-4 sm:text-base sm:px-8 sm:py-5 lg:text-[20px] lg:px-9 lg:py-7"
          >
            Explore Now
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
