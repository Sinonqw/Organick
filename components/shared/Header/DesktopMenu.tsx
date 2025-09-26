import React from "react";
import Link from "next/link";

export const navBarLinks = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Shop", link: "/shop" },
  { text: "News", link: "/news" },
];

interface IMenu {
  getIsActive: (link:string) => boolean;
}

const DesktopMenu = ({ getIsActive }: IMenu) => {
  return (
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
  );
};

export default DesktopMenu;
