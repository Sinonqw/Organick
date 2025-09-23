"use client";
import React from "react";
import { useCart } from "@/app/context/CartContext";
import { IProduct } from "@/types/product";

interface IProps {
  product: IProduct;
}

const AddToCartButton = ({ product }: IProps) => {
  // Получаем доступ к функции addItem из контекста
  const { addItem } = useCart();

  const handleAddToCart = () => {
    // Вызываем addItem, передавая нужные поля из product
    addItem(product);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleAddToCart}
        className="bg-[#274C5B] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
