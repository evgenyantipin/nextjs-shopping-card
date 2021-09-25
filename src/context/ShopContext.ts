import React from "react";
import type { Product } from "types/Product";
import type { CartItem } from "types/CartItem";

export type ContextProps = {
  cart: CartItem[];
  addProductToCart: (product: Product, size: string) => void;
  removeProductFromCart: (productId: number) => void;
  clearCart: () => void;
};

export default React.createContext<ContextProps>({
  cart: [],
  addProductToCart: (product: Product, size: string) => {},
  removeProductFromCart: (productId: number) => {},
  clearCart: () => {}
});
