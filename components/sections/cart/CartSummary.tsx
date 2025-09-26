"use client";

import React from "react";
import { useCart } from "@/app/context/CartContext";
import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";

const CartSummary = () => {
  const { total, clearCart } = useCart();

  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <Title className="text-2xl">Total:</Title>
        <Title className="text-2xl">${total.toFixed(2)}</Title>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Button
          colorBg="#274C5B"
          colorText="white"
          href="#"
          className="flex-1"
          onClick={() => console.log("Proceed to Checkout")}
        >
          Proceed to Checkout
        </Button>
        <Button
          colorBg="white"
          colorText="#274C5B"
          className="border border-[#274C5B] flex-1 py-3"
          onClick={clearCart}
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
