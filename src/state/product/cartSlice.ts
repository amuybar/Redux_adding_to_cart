// cartSlice.ts (separate file)

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++; 
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); 
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const existingItem = state.items.find((item) => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity++;
      }
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const existingItem = state.items.find((item) => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart,increaseQuantity,decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
