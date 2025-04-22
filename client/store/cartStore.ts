import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../types";

type CartStore = {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (item) => {
        set((state) => {
          const existingIndex = state.cart.findIndex(
            (cartItem) => cartItem.id === item.id
          );

          if (existingIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingIndex] = {
              ...updatedCart[existingIndex],
              quantity: item.quantity,
            };

            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, item] };
          }
        });
      },

      removeFromCart: (index) =>
        set((state) => {
          const newCart = state.cart.filter((_, i) => i !== index);
          return { cart: newCart };
        }),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);
