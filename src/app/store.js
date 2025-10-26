import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import CounterReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: CounterReducer,
  },
});

export default store;
