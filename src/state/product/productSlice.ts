import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define interfaces for Product
export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

// Define the initial state
interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

// Create the product slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Add a product
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    // Remove a product
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    // Update a product
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
  },
});

// Export actions and reducer
export const { addProduct, removeProduct, updateProduct } = productSlice.actions;

// Selectors
export const selectAllProducts = (state: RootState) => state.product.products;
export const selectProductById = (productId: number) => (state: RootState) =>
  state.product.products.find((product) => product.id === productId);

export default productSlice.reducer;
