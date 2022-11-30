// import { useContext } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import CartProductItem from './CartProductItem';
// import CartStateContext from '../../../store/context/CartStateContext';

import type { Product } from '../../../data/productsItem';
import type { RootState } from '../../../store/redux/store';

interface CartProductItemListProps {
  isSelectedValid(productId: string): boolean;
  selectHandler(product: Product): () => void;
  removeCartHandler(target: 'selected' | 'product', product: Product): () => void;
}

const CartProductItemList = ({
  isSelectedValid,
  selectHandler,
  removeCartHandler
}: CartProductItemListProps) => {
  const cartList = useSelector((store: RootState) => store.cart.cartList);
  // const cartList = useContext(CartStateContext)!;

  return (
    <CartProductItemListWrapper>
      {cartList.map((product) => (
        <CartProductItem
          product={product}
          key={product.id}
          isSelected={isSelectedValid(product.id)}
          selectHandler={selectHandler(product)}
          removeCartHandler={removeCartHandler('product', product)}
        />
      ))}
    </CartProductItemListWrapper>
  );
};

const CartProductItemListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: space-between;
  column-gap: 20px;

  @media screen and (max-width: 1024px) {
    & {
      justify-content: space-evenly;
    }
  }
`;

export default CartProductItemList;
