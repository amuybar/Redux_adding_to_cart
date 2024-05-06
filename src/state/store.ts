import {configureStore} from "@reduxjs/toolkit";

import productSlice from "./product/productSlice";
import cartSlice from "./product/cartSlice";


export const store = configureStore({
    reducer: {
      product:productSlice,
      cart:cartSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch=typeof store.dispatch;