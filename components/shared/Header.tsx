import React from "react";
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
  return (
    <header className="header">
      <Link href={"/"}>
        <Image alt="Logo" src={"/Logo.svg"} width={198} height={54} />
      </Link>

      <nav>
        <ul className="header_menu">
          {navBarLinks.map((item) => (
            <li key={item.text} className="header_menu-item">
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header_search">
        <input type="text" placeholder="Search..." />
        <Image
          src={"/Search-icon.svg"}
          alt="search"
          width={56}
          height={56}
          className="search_icon"
        />
      </div>

      <div className="header_cart">
        <Image src={"/cart-icon.svg"} alt="cart" width={56} height={56} />
        <div className="cart_text">Cart (0)</div>
      </div>
    </header>
  );
};

export default Header;
