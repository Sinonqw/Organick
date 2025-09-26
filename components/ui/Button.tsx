import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

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
  href,
}: IButton) => {
  return (
    <Link
      href={`${href}`}
      className={`
        roboto font-bold rounded-[16px] gap-[10px] inline-flex items-center justify-center 
        transition-all duration-300 transform hover:scale-105 
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
    </Link>
  );
};

export default Button;
