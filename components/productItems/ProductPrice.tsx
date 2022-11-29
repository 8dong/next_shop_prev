import styled from 'styled-components';

interface ProductPriceProps {
  productPrice: number;
  installment: number;
}

const ProductPrice = ({ productPrice, installment }: ProductPriceProps) => {
  const totalPrice = productPrice.toLocaleString('ko-KR');
  const installmentPrice = Math.floor(productPrice / installment).toLocaleString('ko-KR');

  return (
    <ProductPriceWrapper>
      <span className='totalPrice'>{totalPrice}원</span>
      <span>
        <strong className='installmentPrice'>월 {installmentPrice}원</strong>
        <span className='installment'>({installment} 개월)</span>
      </span>
    </ProductPriceWrapper>
  );
};

const ProductPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  .totalPrice {
    margin-bottom: 5px;
    font-size: 13px;
    font-style: italic;
    color: #818181;
  }

  .installmentPrice {
    margin-right: 5px;
  }

  .installment {
    font-size: 13px;
    color: #818181;
  }
`;

export default ProductPrice;
