import styled from 'styled-components';

import ProductImage from '../../productItems/ProductImage';
import ProductPrice from '../../productItems/ProductPrice';
import FloatButton from '../../common/FloatButton';

import type { Product } from '../../../data/productsItem';

interface CartProductItemProps {
  product: Product;
  isSelected: boolean;
  selectHandler: () => void;
  removeCartHandler: () => void;
}

const CartProductItem = ({
  product,
  isSelected,
  selectHandler,
  removeCartHandler
}: CartProductItemProps) => {
  return (
    <CartProductItemWrapper>
      <ProductImage productImage={product.coverImage} productTitle={product.title} />
      <ProductPrice productPrice={product.price} installment={5} />
      {isSelected ? (
        <FloatButton buttonType='select' onClick={selectHandler} />
      ) : (
        <FloatButton buttonType='unselect' onClick={selectHandler} />
      )}
      <FloatButton buttonType='remove' onClick={removeCartHandler} />
    </CartProductItemWrapper>
  );
};

const CartProductItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 330px;
  margin-bottom: 30px;

  position: relative;
`;

export default CartProductItem;
