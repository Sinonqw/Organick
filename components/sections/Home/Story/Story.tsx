"use client";
import React from "react";
import Image from "next/image";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";
import COMPANY_INFO from "@/data/Story";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Story = () => {
  return (
    <section className="relative px-4 py-8 md:px-8 md:py-16 lg:py-24">
      {/* Background image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          alt="Organic store background"
          src={"/storyBg.png"}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content box */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto max-w-lg bg-white p-6 rounded-2xl md:p-12 md:max-w-xl lg:ml-auto lg:mr-0 lg:max-w-2xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-4 md:mb-8">
          <Subtitle className="text-xl md:text-3xl lg:text-4xl mb-1">
            Eco Friendly
          </Subtitle>
          <Title className="text-2xl md:text-4xl lg:text-5xl">
            Econis is a Friendly Organic Store
          </Title>
        </motion.div>

        {/* Info blocks */}
        <div className="flex flex-col gap-4 md:gap-8">
          {COMPANY_INFO.map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Title
                color="#274C5B"
                bold="medium"
                className="text-2xl md:text-2xl"
              >
                {item.title}
              </Title>
              <Desc className="text-md md:text-base">{item.description}</Desc>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Story;
