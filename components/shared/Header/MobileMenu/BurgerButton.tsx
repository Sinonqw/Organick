"use client";
import React from "react";

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 border border-[#274C5B] rounded-md"
    >
      <div className={`hamburger-lines ${isOpen ? "menu-open" : ""}`}>
        <span className="top-line"></span>
        <span className="middle-line"></span>
        <span className="bottom-line"></span>
      </div>
    </button>
  );
};

export default BurgerButton;
