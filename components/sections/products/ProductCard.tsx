"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export interface IProductCard {
  _id: string;
  tag: string;
  title: string;
  img: string;
  cost: number;
}

const ProductCard = ({ _id, tag, title, img, cost }: IProductCard) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({ _id, title, cost });
    setAdded(true);
    setTimeout(() => setAdded(false), 700);
  };

  return (
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
          <h5 className="font-semibold text-lg text-[#274C5B] mb-2">{title}</h5>
        </Link>

        <div className="mt-auto flex justify-between items-center pt-2 border-t border-[#dedddd]">
          <span className="font-bold text-[#274c5b]">${cost}</span>
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
      </article>
    </li>
  );
};

export default ProductCard;
