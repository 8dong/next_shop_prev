import { forwardRef } from 'react';
import styled from 'styled-components';

const ProductItemSkeleton = forwardRef<HTMLLIElement>((_, ref) => {
  return (
    <ProductItemSkeletonWrapper ref={ref}>
      <div>
        <div className='image'></div>
        <span className='title'></span>
      </div>
      <div className='productPrice'>
        <span className='totalPrice'></span>
        <span>
          <span className='installmentPrice'></span>
          <span className='installment'></span>
        </span>
      </div>
    </ProductItemSkeletonWrapper>
  );
});

const ProductItemSkeletonWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 330px;
  margin-bottom: 30px;

  position: relative;

  .image {
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
  }

  .title {
    display: block;
    width: 80%;
    height: 2em;
    margin: 0 5px;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
  }

  .totalPrice {
    display: block;
    width: 30%;
    height: 1.5em;
    margin-bottom: 5px;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
  }

  .productPrice span:last-child {
    display: flex;
  }

  .installmentPrice {
    display: block;
    width: 40%;
    height: 1.5em;
    margin-right: 5px;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
  }

  .installment {
    display: block;
    width: 20%;
    height: 1.5em;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
  }

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
`;

ProductItemSkeleton.displayName = 'ProductItemSkeleton';

export default ProductItemSkeleton;
