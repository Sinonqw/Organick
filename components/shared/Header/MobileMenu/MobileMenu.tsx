"use client";

import React from "react";
import BurgerButton from "./BurgerButton";
import MobileNavList from "./MobileNavList";

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
  navBarLinks: { text: string; link: string }[];
  pathname: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  menuOpen,
  setMenuOpen,
  navBarLinks,
  pathname,
}) => {
  // Функция для определения активной ссылки
  const getIsActive = (link: string) =>
    link === "/" ? pathname === "/" : pathname.startsWith(link);

  return (
    <>
      {/* Кнопка-бургер */}
      <div className="xl:hidden ml-2">
        <BurgerButton
          isOpen={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Оверлей для мобильного меню */}
      {menuOpen && (
        <div
          className="overlay active"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Сайдбар */}
      <nav
        className={`mobile__menu-sidebar p-4 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-4">
          <BurgerButton isOpen={true} onClick={() => setMenuOpen(false)} />
        </div>
        <MobileNavList
          navBarLinks={navBarLinks}
          getIsActive={getIsActive}
          onClick={() => setMenuOpen(false)}
        />
      </nav>
    </>
  );
};

export default MobileMenu;
