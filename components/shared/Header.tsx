"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navBarLinks = [
  { text: "Home", link: "/home" },
  { text: "About", link: "/about" },
  { text: "Pages", link: "/pages" },
  { text: "Shop", link: "/shop" },
  { text: "Projects", link: "/project" },
  { text: "News", link: "/news" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header flex gap-4 xl:flex-row xl:items-center xl:justify-between">
      {/* Logo */}
      <Link href={"/"} className="order-1">
        <Image alt="Logo" src={"/Logo.svg"} width={198} height={54} className="w-32 sm:w-48 lg:w-48 xl:w-48 h-auto" />
      </Link>

      {/* Desktop menu */}
      <nav className="hidden xl:block order-2">
        <ul className="header_menu flex gap-6">
          {navBarLinks.map((item) => (
            <li key={item.text} className="header_menu-item">
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Search + Cart + Mobile Controls */}
      <div className="flex gap-2 order-2 xl:order-3 xl:flex-row xl:gap-6 items-center">
        {/* Search Input (Desktop only) */}
        <div className="header_search hidden xl:flex items-center gap-2 relative">
          <input type="text" placeholder="Search..." />
          <Image
            src={"/Search-icon.svg"}
            alt="search"
            width={28}
            height={28}
            className="search_icon absolute w-[55px]"
          />
        </div>

        {/* Cart */}
        <div className="header_cart flex items-center gap-2 max-w-[100px] sm:max-w-none border-0 sm:border">
          <Image src={"/cart-icon.svg"} alt="cart" width={28} height={28} />
          <div className="cart_text hidden sm:block">Cart (0)</div>
        </div>

        {/* Mobile menu toggle */}
        <div className="xl:hidden ml-2">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 border border-[#274C5B] rounded-md">
            <div className={`hamburger-lines ${menuOpen ? 'menu-open' : ''}`}>
              <span className="top-line"></span>
              <span className="middle-line"></span>
              <span className="bottom-line"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Overlay for sidebar */}
      {menuOpen && (
        <div className="overlay active" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Mobile menu sidebar */}
      <nav
        className={`mobile__menu-sidebar p-4 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
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
              className="header_menu-item list-item-animation"
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