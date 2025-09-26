"use client";

import React from "react";
import { useCart } from "@/app/context/CartContext";
import CartItem from "./CartItem";

const CartList = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-500">Your cart is empty.</p>
        <p className="mt-4 text-gray-400">
          Time to fill it with some fresh goodness!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {cartItems.map((item) => (
        <CartItem
          key={item._id}
          _id={item._id}
          title={item.title}
          quantity={item.quantity}
          cost={item.cost}
        />
      ))}
    </div>
  );
};

export default CartList;
