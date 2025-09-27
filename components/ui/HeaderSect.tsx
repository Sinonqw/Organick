"use client";
import React from "react";
import Subtitle from "./Subtitle";
import Title from "./Title";
import Button from "./Button";
import { motion, Variants } from "framer-motion";

const headerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

interface IHeaderSect {
  subtitleText: string;
  titleText: string;
  subtitleColor?: string;
  titleColor?: string;
  btnText?: string;
  btnBgColor?: string;
  btnTextColor: string;
  btnClasses?: string;
  href?: string;
}

const HeaderSect = ({
  subtitleColor,
  subtitleText,
  titleColor,
  titleText,
  btnBgColor,
  btnText,
  btnTextColor,
  btnClasses,
  href,
}: IHeaderSect) => {
  return (
    <motion.div
      variants={headerItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 sm:gap-6 mb-8 sm:mb-12"
    >
      <motion.div
        variants={headerItemVariants}
        className="max-w-[700px] text-center sm:text-left"
      >
        <Subtitle
          color={subtitleColor}
          className="mb-2 text-2xl sm:text-3xl lg:text-4xl"
        >
          {subtitleText}
        </Subtitle>
        <Title color={titleColor} className="text-3xl sm:text-4xl lg:text-5xl">
          {titleText}
        </Title>
      </motion.div>

      {href && (
        <motion.div variants={headerItemVariants}>
          <Button
            href={href}
            colorBg={btnBgColor}
            colorText={btnTextColor}
            className={btnClasses}
          >
            {btnText}
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HeaderSect;
