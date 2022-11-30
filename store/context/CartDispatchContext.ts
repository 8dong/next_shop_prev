import { createContext } from 'react';

import type { Product } from '../../data/productsItem';

interface CartDispatch {
  editCartList(newProducts: Product[]): void;
}

const CartDispatchContext = createContext<CartDispatch | undefined>(undefined);

export default CartDispatchContext;
