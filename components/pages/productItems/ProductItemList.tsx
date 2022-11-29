import { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import ProductItem from './ProductItem';
import ProductItemSkeleton from '../../productItems/ProductItemSkeleton';

import type { Product } from '../../../data/productsItem';

interface ProductItemListProps {
  products: Product[];
  isDone: boolean;
}

const ProductItemList = ({ products, isDone }: ProductItemListProps) => {
  const [productList, setProductList] = useState(products);
  const [isFetchDone, setFetchDone] = useState(isDone);

  const productListLength = productList.length;

  const observerTargetEl = useRef<HTMLLIElement>(null);

  const getFetchProductItems = useCallback(async (productListLength: number) => {
    const res = await fetch('http://localhost:3001/api/fetchProductItems', {
      method: 'POST',
      body: JSON.stringify({ startIndex: productListLength }),
      headers: {
        'Content-type': 'application/json'
      }
    });

    const { fetchedProductItems, isDone } = await res.json();

    setProductList((prevState) => [...prevState, ...fetchedProductItems]);
    setFetchDone(isDone);
  }, []);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry]) => {
      if (entry.isIntersecting && !isFetchDone) {
        await getFetchProductItems(productListLength);
      }
    },
    [productListLength, isFetchDone, getFetchProductItems]
  );

  useEffect(() => {
    if (isFetchDone) return;

    const observer = new IntersectionObserver(onIntersect, { threshold: 0.9 });
    observer.observe(observerTargetEl.current!);

    return () => observer.disconnect();
  }, [onIntersect, isFetchDone]);

  return (
    <ProductItemListWrapper>
      {productList.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      {!isFetchDone && <ProductItemSkeleton ref={observerTargetEl} />}
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
