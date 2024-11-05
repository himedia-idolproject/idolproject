import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      idolGroup: "BTS",
      name: "BTS 키홀더",
      category: "accessory",
      price: 15000,
      discount: 0.1,
      image: "",
    },
    {
      id: 2,
      idolGroup: "BlackPink",
      name: "Black Pink Calender",
      category: ""
    }
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;
export default productSlice.reducer;
