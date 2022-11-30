import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
// import { useContext } from 'react';

import ProductImage from '../../productItems/ProductImage';
import ProductPrice from '../../productItems/ProductPrice';
import CartButton from '../../common/CartButton';

import cartStateSlice from '../../../store/redux/cartStateSlice';
// import CartStateContext from '../../../store/context/CartStateContext';
// import CartDispatchContext from '../../../store/context/CartDispatchContext';

import type { Product } from '../../../data/productsItem';
import type { RootState } from '../../../store/redux/store';

const ProductItem = ({ product }: { product: Product }) => {
  const cartList = useSelector((store: RootState) => store.cart.cartList);
  // const cartList = useContext(CartStateContext)!;

  const dispath = useDispatch();
  // const { editCartList } = useContext(CartDispatchContext)!;

  const isExist = cartList.some((cartProduct) => cartProduct.id === product.id);

  const removeHandler = () => {
    const newCartList = cartList.filter((cartProduct) => cartProduct.id !== product.id);

    dispath(cartStateSlice.actions.editCartList({ newCartList }));
    // editCartList(cartList.filter((cartProduct) => cartProduct.id !== product.id));
  };

  const addHandler = () => {
    const newCartList = [...cartList, product];

    dispath(cartStateSlice.actions.editCartList({ newCartList }));
    // editCartList([...cartList, product]);
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
