import React from "react";
import Image from "next/image";

import { IProductCard } from "@/data/Products";

const ProductCard = ({ tag, title, img, cost }: IProductCard) => {
  return (
    <li className="list-item-animation">
      <article className="bg-[#F9F8F8] py-5 px-6 rounded-2xl article-hover-effect">
        <span className="inline-block py-[6px] px-4 bg-[#274C5B] text-white open-sans font-semibold text-[15px] rounded-[8px] text-center">
          {tag}
        </span>

        <div className="w-full h-[324px] flex items-center justify-center mb-4">
          <Image
            className="max-h-full object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
            src={img}
            alt={title}
            width={335}
            height={324}
          />
        </div>
        <h5 className="roboto font-semibold text-[20px] text-[#274C5B] mb-[13px]">
          {title}
        </h5>
        <div className="flex justify-between items-center pt-[6px] border-t-1 border-[#dedddd]">
          <div className="flex gap-[7px] items-center">
            <span className="line-through font-semibold text-[15px] text-[#b8b8b8]">
              $20.00
            </span>
            <span className="font-bold text-[#274c5b] text-[18px]">
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