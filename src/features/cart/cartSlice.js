import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      if (state.count === 1) return;
      state.count--;
    },
    reset(state) {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
