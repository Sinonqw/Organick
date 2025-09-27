"use client";
import React, { ReactNode } from "react";

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
    <h2
      className={`roboto ${
        bold === "medium" ? "font-medium" : "font-extrabold"
      } ${className}`}
      style={{ color }}
    >
      {children}
    </h2>
  );
};

export default Title;
