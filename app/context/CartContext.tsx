"use client";
import { createContext, ReactNode, useContext, useState } from "react";

// Интерфейс для элемента в корзине.
// Важно: поля _id, title и cost должны точно совпадать с данными из БД.
export interface CartItem {
  _id: string;
  title: string;
  cost: number;
  quantity: number;
}

// Интерфейс для всего контекста корзины.
export interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  total: number;
  clearCart: () => void;
  totalQuantity: number;
}

// Создаем контекст
export const CartContext = createContext<CartContextType | null>(null);

// Компонент-провайдер, который хранит состояние корзины
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Функция для добавления товара в корзину
  const addItem = (item: Omit<CartItem, "quantity">) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem._id === item._id
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Функция для удаления товара из корзины
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((cartItem) => cartItem._id !== id));
  };

  // Функция для полной очистки корзины
  const clearCart = () => {
    setCartItems([]);
  };

  // Расчет общей стоимости
  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.cost * cartItem.quantity;
  }, 0);

  const totalQuantity = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        total,
        clearCart,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Хук для использования контекста в других компонентах
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
