import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItemList: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItemList.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItemList.push(action.payload);
      }
      state.totalQuantity += action.payload.quantity;
      state.totalPrice +=
        (action.payload.price -
          action.payload.price * action.payload.discount) *
        action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      const existingItem = state.cartItemList.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.totalPrice -=
          (existingItem.price - existingItem.price * existingItem.discount) *
          existingItem.quantity;
        state.totalQuantity -= existingItem.quantity;
        state.cartItemList = state.cartItemList.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItemList.find((item) => item.id === id);
      if (existingItem) {
        state.totalPrice -=
          (existingItem.price - existingItem.price * existingItem.discount) *
          existingItem.quantity;
        state.totalQuantity -= existingItem.quantity;

        existingItem.quantity = quantity;

        state.totalPrice +=
          (existingItem.price - existingItem.price * existingItem.discount) *
          existingItem.quantity;
        state.totalQuantity += existingItem.quantity;
      }
    },
    clearCart: (state) => {
      state.cartItemList = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
