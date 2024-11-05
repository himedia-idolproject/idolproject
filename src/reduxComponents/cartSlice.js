import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    // 객체 {
    //   id: 1,
    //   idolGroup: "BTS",
    //   name: "BTS 키홀더",
    //   category: "accessory",
    //   price: 15000,
    //   discount: 0.1,
    //   image: "",
    //   quantity: 1,
    // }
  },
  reducers: {
    itemInCart: (state, action) => {
      let item = action.payload;
      item.quantity = 1;
      state.cart.push(item);
    },
    removeItemInCart: (state) => {
      state.cart = [];
    },
    addItem: (state, action) => {
      if (state.cart.id === action.payload) {
        if (state.cart.quantity === 5) {
          alert("한 상품당 최대 5개까지만 구매가능합니다.");
        } else {
          state.cart.quantity += 1;
        }
        return;
      }
    },
    reduceItem: (state, action) => {
      if (state.cart.id === action.payload) {
        if (state.cart.quantity === 1) {
          state.cart = state.cart.filter(state.cart.id !== action.payload);
        } else {
          state.cart.quantity -= 1;
        }
        return;
      }
    },
  },
});

export const {} = cartSlice.actions;
export default cartSlice;
