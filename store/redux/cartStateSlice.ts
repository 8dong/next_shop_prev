import { createSlice } from '@reduxjs/toolkit';

import { Product } from '../../data/productsItem';

interface CartActionType {
  type: string;
  payload: {
    newCartList: Product[];
  };
}

const cartStateSlice = createSlice({
  name: 'cart',
  initialState: {
    cartList: [] as Product[]
  },
  reducers: {
    editCartList(prevCartList, action: CartActionType) {
      prevCartList.cartList = action.payload.newCartList;
    }
  }
});

export default cartStateSlice;
