import { createSlice } from "@reduxjs/toolkit";
import productList from "../../util";

const initialState = {
  productList: productList.map((product) => ({ ...product, quantity: 0 })),
  quantity: 2,
  total: 0,
};

const productCardSlice = createSlice({
  name: "productCard",
  initialState,
  reducers: {
    increase: (state, action) => {
      const increaseItem = state.productList.find(
        (item) => item.id === action.payload
      );
      increaseItem.quantity += 1;
    },
    discrease: (state, action) => {
      const discreaseItem = state.productList.find(
        (item) => item.id === action.payload
      );
      discreaseItem.quantity -= 1;
    },
    totalChange: (state) => {
      let totalIncrease = 0;
      state.productList.forEach((item) => {
        totalIncrease += item.quantity;
      });
      state.total = totalIncrease;
    },
  },
});
export const { increase, discrease, totalChange } = productCardSlice.actions;
export default productCardSlice.reducer;
