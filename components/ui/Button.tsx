"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface IButton {
  children: ReactNode;
  colorBg?: string;
  colorText?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  colorBg = "#EFD372",
  colorText = "white",
  className,
  onClick,
  href,
}: IButton) => {
  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      href={href}
      onClick={onClick}
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.05,
        y: -2,
        boxShadow: "0px 8px 20px rgba(0,0,0,0.25)",
      }}
      whileTap={{ scale: 0.95, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        roboto font-bold rounded-[16px] gap-[10px] inline-flex items-center justify-center 
        ${className}
      `}
      style={{
        backgroundColor: colorBg,
        color: colorText,
      }}
    >
      {children}
      <Image
        src={"/arrow-icon.svg"}
        alt="Стрелка"
        width={19}
        height={19}
        className="inline-block ml-[10px] transition-transform duration-300 transform group-hover:translate-x-1"
      />
    </Tag>
  );
};

export default Button;
