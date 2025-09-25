"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { usePathname } from "next/navigation";

const navBarLinks = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Shop", link: "/shop" },
  { text: "News", link: "/news" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const pathname = usePathname();

  const getIsActive = (link: string) =>
    link === "/" ? pathname === "/" : pathname.startsWith(link);

  return (
    <header className="header flex gap-4 xl:flex-row xl:items-center xl:justify-between p-4">
      {/* Логотип */}
      <Link href={"/"} className="order-1">
        <Image
          alt="Logo"
          src={"/Logo.svg"}
          width={198}
          height={54}
          className="w-32 sm:w-48 lg:w-48 xl:w-48 h-auto"
        />
      </Link>

      {/* Десктопное меню */}
      <nav className="hidden xl:block order-2">
        <ul className="flex gap-6">
          {navBarLinks.map((item) => (
            <li key={item.text}>
              <Link
                href={item.link}
                className={`transition-colors relative px-1 ${
                  getIsActive(item.link)
                    ? "font-bold text-[#274C5B] after:block after:h-[2px] after:bg-[#274C5B] after:absolute after:-bottom-1 after:left-0 after:w-full"
                    : "hover:text-[#274C5B]"
                }`}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Корзина и мобильные контролы */}
      <div className="flex gap-4 order-2 xl:order-3 xl:flex-row xl:gap-6 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-2 cursor-pointer relative transition-transform duration-200 hover:scale-105 group"
        >
          <Image 
            src={"/cart-icon.svg"} 
            alt="cart" 
            width={28} 
            height={28} 
            className="group-hover:animate-shake"
          />
          <span className="cart_text hidden sm:block">Cart ({cartItems.length})</span>
        </Link>

        {/* Мобильное меню */}
        <div className="xl:hidden ml-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 border border-[#274C5B] rounded-md"
          >
            <div className={`hamburger-lines ${menuOpen ? "menu-open" : ""}`}>
              <span className="top-line"></span>
              <span className="middle-line"></span>
              <span className="bottom-line"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Оверлей для мобильного меню */}
      {menuOpen && <div className="overlay active" onClick={() => setMenuOpen(false)}></div>}

      {/* Мобильное боковое меню */}
      <nav
        className={`mobile__menu-sidebar p-4 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-4">
          <button onClick={() => setMenuOpen(false)}>
            <div className="hamburger-lines menu-open">
              <span className="top-line"></span>
              <span className="middle-line"></span>
              <span className="bottom-line"></span>
            </div>
          </button>
        </div>
        <ul className="flex flex-col gap-4">
          {navBarLinks.map((item, index) => (
            <li
              key={item.text}
              className={`list-item-animation ${
                getIsActive(item.link) ? "font-bold text-[#274C5B]" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link href={item.link} onClick={() => setMenuOpen(false)}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
