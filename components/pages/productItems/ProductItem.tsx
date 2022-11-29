import styled from 'styled-components';

import ProductImage from '../../productItems/ProductImage';
import ProductPrice from '../../productItems/ProductPrice';
import CartButton from '../../common/CartButton';

import CartStateContext from '../../../store/CartStateContext';
import CartDispatchContext from '../../../store/CartDispatchContext';

import type { Product } from '../../../data/productsItem';
import { useContext } from 'react';

const ProductItem = ({ product }: { product: Product }) => {
  const cartList = useContext(CartStateContext)!;
  const { editCartList } = useContext(CartDispatchContext)!;

  const isExist = cartList.some((cartProduct) => cartProduct.id === product.id);

  const removeHandler = () => {
    editCartList(cartList.filter((cartProduct) => cartProduct.id !== product.id));
  };

  const addHandler = () => {
    editCartList([...cartList, product]);
  };

  return (
    <ProductItemWrapper>
      <ProductImage productImage={product.coverImage} productTitle={product.title} />
      <ProductPrice productPrice={product.price} installment={5} />
      <div className='cartButton'>
        {isExist ? (
          <CartButton location='remove' onClick={removeHandler} />
        ) : (
          <CartButton location='add' onClick={addHandler}></CartButton>
        )}
      </div>
    </ProductItemWrapper>
  );
};

const ProductItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 330px;
  margin-bottom: 30px;

  position: relative;

  .cartButton {
    position: absolute;
    top: 88%;
    right: 13%;
  }
`;

export default ProductItem;
