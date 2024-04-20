import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 2
}

const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;