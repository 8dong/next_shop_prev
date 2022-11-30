import { useContext } from 'react';
import styled from 'styled-components';

import CartStateContext from '../../../store/CartStateContext';
import CartProductItem from './CartProductItem';

const CartProductItemList = () => {
  const cartList = useContext(CartStateContext)!;

  return (
    <CartProductItemListWrapper>
      {cartList.map((product) => (
        <CartProductItem product={product} key={product.id} />
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
