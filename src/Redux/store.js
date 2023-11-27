import { configureStore } from "@reduxjs/toolkit";
import productCardReducer from "./control/productCartSlice";

export const store = configureStore({
  reducer: {
    card: productCardReducer,
  },
});
