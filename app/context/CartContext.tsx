"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Добавляем quantity
export interface ICartItem {
  _id: string;
  tag: string;
  title: string;
  img: string;
  cost: number;
  quantity: number; // вот тут
}

export interface ICartContext {
  cartItems: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (_id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  // Загружаем корзину из localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  // Сохраняем корзину в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: ICartItem) => {
    setCartItems((prev) => {
      const exist = prev.find((p) => p._id === product._id);
      if (exist) {
        // если товар уже в корзине, увеличиваем количество
        return prev.map((p) =>
          p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (_id: string) => {
    setCartItems((prev) => prev.filter((p) => p._id !== _id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
