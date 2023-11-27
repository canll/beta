import { createSlice } from "@reduxjs/toolkit";
import productList from "../../util";

const initialState = {
  productList: productList.map((product) => ({ ...product, quantity: 0 })),
  quantity: 2,
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
  },
});
export const { increase, discrease } = productCardSlice.actions;
export default productCardSlice.reducer;
