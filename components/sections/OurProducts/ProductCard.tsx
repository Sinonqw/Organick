import React from "react";
import Image from "next/image";

import { IProductCard } from "@/data/Products";

const ProductCard = ({ tag, title, img, cost }: IProductCard) => {
  return (
    <li className="list-item-animation w-full">
      <article className="bg-[#F9F8F8] p-4 md:p-6 rounded-2xl article-hover-effect">
        <span className="inline-block py-1 px-3 bg-[#274C5B] text-white open-sans font-semibold text-xs rounded-lg text-center">
          {tag}
        </span>

        <div className="w-full aspect-square flex items-center justify-center my-4">
          <Image
            className="max-h-full object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
            src={img}
            alt={title}
            width={335}
            height={324}
          />
        </div>

        <h5 className="roboto font-semibold text-lg md:text-xl text-[#274C5B] mb-2">
          {title}
        </h5>

        <div className="flex justify-between items-center pt-2 border-t border-[#dedddd]">
          <div className="flex gap-1 items-center">
            <span className="line-through font-semibold text-sm text-[#b8b8b8]">
              $20.00
            </span>
            <span className="font-bold text-[#274c5b] text-base md:text-lg">
              ${cost}.00
            </span>
          </div>

          <div>
            <Image alt="#" src={"/icons/stars.svg"} width={84} height={18} />
          </div>
        </div>
      </article>
    </li>
  );
};

export default ProductCard;
