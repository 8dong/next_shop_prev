import React, { useState } from 'react';

import CartStateContext from './CartStateContext';
import CartDispatchContext from './CartDispatchContext';

import type { Product } from '../../data/productsItem';

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartList, setCartList] = useState<Product[]>([]);

  const editCartList = (newCartList: Product[]) => {
    setCartList(newCartList);
  };

  const cartDispatch = {
    editCartList
  };

  return (
    <CartStateContext.Provider value={cartList}>
      <CartDispatchContext.Provider value={cartDispatch}>{children}</CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export default CartContextProvider;
