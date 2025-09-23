"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { IProduct } from "@/types/product"; // Оставляем этот импорт

const ProductCard = ({ _id, tag, title, img, cost }: IProduct) => {
  // Получаем и функцию добавления, и сами товары из корзины
  const { addItem, cartItems } = useCart();
  const [added, setAdded] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Находим текущий товар в корзине, чтобы отобразить его количество
  const cartItem = cartItems.find((item) => item._id === _id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAdd = () => {
    // ВaddItem передаем только необходимые поля
    addItem({ _id, title, cost });
    
    // Анимация кнопки
    setAdded(true);
    setTimeout(() => setAdded(false), 700);

    // Показываем всплывашку
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000); // Скрыть через 2 секунды
  };

  return (
    <>
      <li className="w-full">
        <article className="bg-[#F9F8F8] p-4 md:p-6 rounded-2xl h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
          <Link
            href={`/shop/${_id}`}
            className="flex-1 flex flex-col no-underline"
          >
            <span className="inline-block py-1 px-3 bg-[#274C5B] text-white text-xs rounded-lg self-start">
              {tag}
            </span>
            <div className="w-full aspect-square flex items-center justify-center my-4">
              <Image
                src={img}
                alt={title}
                width={335}
                height={324}
                className="object-contain"
              />
            </div>
            <h5 className="font-semibold text-lg text-[#274C5B] mb-2">
              {title}
            </h5>
          </Link>

          <div className="mt-auto flex justify-between items-center pt-2 border-t border-[#dedddd]">
            <span className="font-bold text-[#274c5b]">${cost}</span>
            <div className="flex items-center gap-2">
              {quantity > 0 && (
                <div className="px-2 py-1 bg-[#274C5B] text-white rounded-lg text-sm font-semibold">
                  x{quantity}
                </div>
              )}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAdd();
                }}
                className={`bg-[#274C5B] text-white text-sm px-3 py-1 rounded-lg hover:bg-opacity-90 transition-transform duration-200 ${
                  added ? "animate-bounce" : ""
                }`}
              >
                {added ? "Added!" : "Add to Cart"}
              </button>
            </div>
          </div>
        </article>
      </li>

      {/* Всплывашка (Toast) */}
      {showToast && (
        <div className="fixed bottom-8 right-8 bg-[#274C5B] text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform translate-x-0 opacity-100 animate-slide-in-right">
          <p className="font-semibold">
            <span className="font-bold">{title}</span> added to cart!
          </p>
        </div>
      )}
    </>
  );
};

export default ProductCard;
