import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { Product } from "@/types";

interface CardStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCard = create(
  persist<CardStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItem = get().items;
        const existingItem = currentItem.find((item) => item.id === data.id);

        if (existingItem) {
          return toast("Item already exists");
        }

        set({ items: [...get().items, data] });
        toast("Item added to Card");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast("Item removed from Card");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCard;
