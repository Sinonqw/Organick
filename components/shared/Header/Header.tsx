"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu/MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { navBarLinks } from "./DesktopMenu";
import Cart from "./MobileMenu/Cart";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <DesktopMenu getIsActive={getIsActive} />

      {/* Корзина и мобильные контролы */}
      <div className="flex gap-4 order-2 xl:order-3 xl:flex-row xl:gap-6 items-center">
        <Cart />

        {/* Мобильное меню */}
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          navBarLinks={navBarLinks}
          pathname={pathname}
        />
      </div>
    </header>
  );
};

export default Header;
