import { createSlice } from "@reduxjs/toolkit";

const initialValues = { bar: false };

const barSlice = createSlice({
  name: "bar",
  initialState: initialValues,
  reducers: {
    closeBar(state, action) {
      state.bar = false;
    },
    openBar(state, action) {
      state.bar = true;
    },
  },
});

export const barActions = barSlice.actions;

export default barSlice;
