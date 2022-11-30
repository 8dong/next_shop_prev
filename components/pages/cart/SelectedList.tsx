import styled from 'styled-components';

import type { Product } from '../../../data/productsItem';

const SelectedList = ({ selectedProducts }: { selectedProducts: Product[] }) => {
  return (
    <PaymentListWrapper>
      <h3>구매 목록</h3>
      <ul>
        {selectedProducts.map((selectedProduct) => (
          <li key={selectedProduct.id}>{selectedProduct.title}</li>
        ))}
      </ul>
    </PaymentListWrapper>
  );
};

const PaymentListWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  background-color: #e3e3e3;

  h3 {
    margin-bottom: 20px;

    font-size: 20px;
  }

  ul {
    text-align: right;
    color: #606060;
  }

  li {
    margin-bottom: 10px;
  }

  li:last-child {
    margin-bottom: 0;
  }
`;

export default SelectedList;
