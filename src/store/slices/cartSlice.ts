import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IBookCartItem,
  IBookDetailsApi,
  ICartStore,
} from "../../services/types/index";

const initialState: ICartStore = {
  cartItems: [],
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }: PayloadAction<IBookCartItem>) => {
      state.cartItems = [
        { ...payload },
        ...state.cartItems.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },

    deleteCart: (state, { payload }: PayloadAction<IBookDetailsApi>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.isbn13 !== payload.isbn13
      );
    },
  },
});
export const { setCart, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
