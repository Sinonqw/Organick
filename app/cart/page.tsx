"use client";

import React from "react";
import CartList from "@/components/sections/cart/CartList";
import CartSummary from "@/components/sections/cart/CartSummary";

const CartPage = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-[#274C5B] text-center mb-10 tracking-wide">
          Your Organic Cart
        </h1>

        <CartList />
        <CartSummary />
      </div>
    </div>
  );
};

export default CartPage;
