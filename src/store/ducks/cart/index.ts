import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product, CartProduct } from '../../../vinyland';

export type CartState = {
  products: CartProduct[];
};

interface UpdateAmount {
  id: number;
  amount: number;
}

const initialState: CartState = {
  products: [],
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id,
      );

      if (productIndex !== -1) {
        state.products[productIndex].amount =
          (state.products[productIndex].amount || 0) + 1;
      } else {
        state.products.push({ ...action.payload, amount: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload,
      );

      if (productIndex !== -1) {
        state.products.splice(productIndex, 1);
      }
    },
    updateAmount: (state, action: PayloadAction<UpdateAmount>) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id,
      );

      if (productIndex !== -1) {
        state.products[productIndex].amount =
          action.payload.amount >= 1 ? action.payload.amount : 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateAmount } = cart.actions;
export default cart.reducer;
