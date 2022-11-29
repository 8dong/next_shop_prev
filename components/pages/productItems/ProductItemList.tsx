import { useState } from 'react';
import styled from 'styled-components';

import ProductItem from './ProductItem';

import type { Product } from '../../../data/productsItem';

interface ProductItemListProps {
  products: Product[];
  isDone: boolean;
}

const ProductItemList = ({ products, isDone }: ProductItemListProps) => {
  const [productList, setProductList] = useState(products);

  return (
    <ProductItemListWrapper>
      {productList.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductItemListWrapper>
  );
};

const ProductItemListWrapper = styled.ul`
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

export default ProductItemList;
