"use client";

import React from "react";
import { useCart } from "@/app/context/CartContext";
import CartItem from "./CartItem";
import { motion, AnimatePresence } from "framer-motion";

const CartList = () => {
  const { cartItems } = useCart();

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {cartItems.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-500">Your cart is empty.</p>
            <p className="mt-4 text-gray-400">
              Time to fill it with some fresh goodness!
            </p>
          </motion.div>
        ) : (
          cartItems.map((item) => (
            <motion.div
              key={item._id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                x: -30,
                scale: 0.97,
                transition: { duration: 0.22 },
              }}
            >
              <CartItem
                _id={item._id}
                title={item.title}
                quantity={item.quantity}
                cost={item.cost}
              />
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartList;
