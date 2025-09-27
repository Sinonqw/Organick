"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ITitle {
  children: ReactNode;
  color?: string;
  className?: string;
  bold?: "medium" | "extrabold";
}

const Title = ({
  children,
  color = "#274C5B",
  className,
  bold = "extrabold",
}: ITitle) => {
  return (
    <motion.h2
      initial={{ transform: "translateX(-100px)" }}
      animate={{ transform: "translateX(0px)" }}
      transition={{ type: "spring" }}
      className={`roboto ${
        bold === "medium" ? "font-medium" : "font-extrabold"
      } ${className}`}
      style={{ color }}
    >
      {children}
    </motion.h2>
  );
};

export default Title;
