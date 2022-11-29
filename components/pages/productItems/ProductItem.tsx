import styled from 'styled-components';

import ProductImage from '../../productItems/ProductImage';
import ProductPrice from '../../productItems/ProductPrice';
import CartButton from '../../common/CartButton';

import type { Product } from '../../../data/productsItem';

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <ProductItemWrapper>
      <ProductImage productImage={product.coverImage} productTitle={product.title} />
      <ProductPrice productPrice={product.price} installment={5} />
      <CartButton location='add' />
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
`;

export default ProductItem;
