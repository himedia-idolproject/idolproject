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
  ],
};

const productSlice = createSlice({
  name: "prodcuts",
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;
export default productSlice.reducer;
