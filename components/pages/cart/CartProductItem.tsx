import styled from 'styled-components';

import ProductImage from '../../productItems/ProductImage';
import ProductPrice from '../../productItems/ProductPrice';
import FloatButton from '../../common/FloatButton';

import type { Product } from '../../../data/productsItem';

const CartProductItem = ({ product }: { product: Product }) => {
  return (
    <CartProductITemWrapper>
      <ProductImage productImage={product.coverImage} productTitle={product.title} />
      <ProductPrice productPrice={product.price} installment={5} />
      <FloatButton buttonType='select' />
      <FloatButton buttonType='remove' />
    </CartProductITemWrapper>
  );
};

const CartProductITemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 330px;
  margin-bottom: 30px;

  position: relative;
`;

export default CartProductItem;
