import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

// Types for direct use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
