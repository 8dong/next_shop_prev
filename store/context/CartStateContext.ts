import { createContext } from 'react';

import type { Product } from '../../data/productsItem';

const CartStateContext = createContext<undefined | Product[]>(undefined);

export default CartStateContext;
