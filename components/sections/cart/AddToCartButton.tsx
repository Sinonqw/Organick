"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { IProduct } from "@/types/product";

interface IProps {
  product: IProduct;
}

const AddToCartButton = ({ product }: IProps) => {
  // Получаем доступ к функции addItem из контекста
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    // Вызываем addItem, передавая нужные поля из product
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 700); // анимация 0.7с
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleAddToCart}
        className={`bg-[#274C5B] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
          added ? "animate-bounce" : ""
        }`}
      >
        {added ? "Added!" : "Add To Cart"}
      </button>
    </div>
  );
};

export default AddToCartButton;
