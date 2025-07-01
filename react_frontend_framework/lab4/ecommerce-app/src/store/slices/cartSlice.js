import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartProducts: [], totalItems: 0, totalPrice: 0 },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cartProducts.find(
        (product) => product.sku === action.payload.sku
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartProducts.push({
          image: action.payload.image,
          title: action.payload.title,
          sku: action.payload.sku,
          quantity: 1,
          price: action.payload.price,
          stock: action.payload.stock,
        });
      }
      state.totalItems += 1;
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action) => {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.sku === action.payload.sku
      );
      let product = state.cartProducts[productIndex];
      state.totalItems -= product.quantity;
      if (state.totalItems == 0) {
        state.totalPrice = 0;
      } else {
        state.totalPrice -= product.price * product.quantity;
      }
      state.cartProducts.splice(productIndex, 1);
    },
    increaseQuantity: (state, action) => {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.sku === action.payload.sku
      );

      let product = state.cartProducts[productIndex];
      product.quantity += 1;
      state.totalItems += 1;
      state.totalPrice += product.price;
    },
    decreaseQuantity: (state, action) => {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.sku === action.payload.sku
      );

      let product = state.cartProducts[productIndex];
      product.quantity -= 1;
      state.totalItems -= 1;
      if (state.totalItems == 0) {
        state.totalPrice = 0;
      } else {
        state.totalPrice -= product.price;
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
