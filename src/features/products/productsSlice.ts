import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchProductsFromServer } from "./productsApi";

// product type
export interface Product {
  _id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  image?: {
    url: string;
  } | null;
}

// slice state type
interface ProductsState {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
  error: string;
}

// Initial state
const initialState: ProductsState = {
  products: [],
  isLoading: false,
  isError: false,
  error: "",
};

// Async thunk — fetches from backend
export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const products = await fetchProductsFromServer();
      return products; // must be an array of Product
    } catch (err: any) {
      return rejectWithValue(err.message ?? "Failed to fetch products");
    }
  }
);

// Slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProducts(state) {
      state.products = [];
      state.isError = false;
      state.error = "";
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error =
          (action.payload as string) || action.error.message || "Error";
      });
  },
});

export const { clearProducts } = productsSlice.actions;
export default productsSlice.reducer;
