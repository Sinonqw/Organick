"use client";
import React from "react";

interface NavItem {
  text: string;
  link: string;
}

interface MobileNavListProps {
  navBarLinks: NavItem[];
  getIsActive: (link: string) => boolean;
  onClick: () => void;
}

const MobileNavList: React.FC<MobileNavListProps> = ({ navBarLinks, getIsActive, onClick }) => {
  return (
    <ul className="flex flex-col gap-4">
      {navBarLinks.map((item, index) => (
        <li
          key={item.text}
          className={`list-item-animation ${
            getIsActive(item.link) ? "font-bold text-[#274C5B]" : ""
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <a href={item.link} onClick={onClick}>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavList;
