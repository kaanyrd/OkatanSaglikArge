import { configureStore } from "@reduxjs/toolkit";
import barSlice from "./side-slice";

const store = configureStore({
  reducer: { sideBar: barSlice.reducer },
});
export default store;
