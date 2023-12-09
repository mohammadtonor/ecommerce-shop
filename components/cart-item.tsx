"use client";

import { Product } from "@/types";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  return <li>item</li>;
};

export default CartItem;
