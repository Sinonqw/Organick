import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

const Cart = () => {
    const {cartItems, totalQuantity} = useCart()
  return (
    <Link
      href="/cart"
      className="flex items-center gap-2 cursor-pointer relative transition-transform duration-200 hover:scale-105 group"
    >
      <Image
        src={"/cart-icon.svg"}
        alt="cart"
        width={28}
        height={28}
        className="group-hover:animate-bounce"
      />
      <span className="cart_text hidden sm:block">
        Cart: {cartItems.length}
        <sup className="text-red-600">({totalQuantity})</sup>
      </span>
    </Link>
  );
};

export default Cart;
