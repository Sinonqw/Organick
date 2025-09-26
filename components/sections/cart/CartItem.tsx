"use client";

import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useCart } from "@/app/context/CartContext";
import Desc from "@/components/ui/Desc";
import Title from "@/components/ui/Title";

interface CartItemProps {
  _id: string;
  title: string;
  quantity: number;
  cost: number;
}

const CartItem: React.FC<CartItemProps> = ({ _id, title, quantity, cost }) => {
  const { removeItem } = useCart();

  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
      <div className="flex-1">
        <Title className="text-lg">{title}</Title>
        <Desc>
          Freshly sourced <span className="text-gray-400">x {quantity}</span>
        </Desc>
      </div>
      <div className="flex items-center space-x-6">
        <Title className="text-xl">${(cost * quantity).toFixed(2)}</Title>
        <button
          className="text-red-500 hover:text-red-700 transition-colors"
          onClick={() => removeItem(_id)}
          aria-label={`Remove ${title} from cart`}
        >
          <FaTrashAlt className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
