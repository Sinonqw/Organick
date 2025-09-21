"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import { FaTrashAlt } from "react-icons/fa"; // Используем иконку для кнопки удаления

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.cost, 0);

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-[#274C5B] text-center mb-10 tracking-wide">
          Your Organic Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">Your cart is empty.</p>
            <p className="mt-4 text-gray-400">Time to fill it with some fresh goodness!</p>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#274C5B]">{item.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">Freshly sourced</p>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="text-xl font-bold text-gray-700">${item.cost.toFixed(2)}</span>
                    <button
                      className="text-red-500 hover:text-red-700 transition-colors"
                      onClick={() => removeFromCart(item._id)}
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      <FaTrashAlt className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center text-2xl font-bold text-[#274C5B]">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <button
                  className="w-full md:w-auto flex-1 bg-[#274C5B] text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                  onClick={() => alert("Proceed to Checkout")} // Замените на реальную логику оформления заказа
                >
                  Proceed to Checkout
                </button>
                <button
                  className="w-full md:w-auto flex-1 border border-[#274C5B] text-[#274C5B] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;