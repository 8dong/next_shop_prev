import styled from 'styled-components';

import type { Product } from '../../../data/productsItem';
import type { Coupon } from '../../../data/coupons';

interface PaymentPriceProps {
  selectedProducts: Product[];
  selectedCoupon: Coupon | null;
}

const PaymentPrice = ({ selectedProducts, selectedCoupon }: PaymentPriceProps) => {
  const fixedPrice = selectedProducts.reduce((prev, product) => prev + product.price, 0);
  let reducePrice: number = 0;

  selectedProducts.forEach((product) => {
    let productPrice = product.price;

    if (!selectedCoupon || product.availableCoupon === false) {
      reducePrice += 0;
    } else if (selectedCoupon) {
      if (selectedCoupon.type === 'amount') {
        reducePrice = selectedCoupon.discountAmount;
      } else if (selectedCoupon.type === 'rate') {
        reducePrice += productPrice / selectedCoupon.discountRate;
      }
    }
  });

  let totalPrice = fixedPrice - reducePrice;

  return (
    <PaymentWrapper>
      <h3>결제 금액</h3>
      <dl>
        <div>
          <dt>총 상품 금액</dt>
          <dd>{fixedPrice.toLocaleString('ko-KR')} 원</dd>
        </div>
        <div>
          <dt>상품 할인 금액</dt>
          <dd>{reducePrice.toLocaleString('ko-KR')} 원</dd>
        </div>
        <div>
          <dt>
            <strong>최종 결제 금액</strong>
          </dt>
          <dd>{totalPrice.toLocaleString('ko-KR')} 원</dd>
        </div>
      </dl>
    </PaymentWrapper>
  );
};

const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #e3e3e3;

  h3 {
    font-size: 30px;
    margin-bottom: 40px;
  }

  dl div {
    display: flex;
    justify-content: space-between;
    height: 50px;
  }

  dl div:last-child {
    height: 200px;
  }

  dt,
  dd {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }

  dd {
    color: #565656;
  }

  dl div:last-child dt {
    font-weight: 700;
    font-size: 20px;
  }

  dl div:last-child dd {
    font-weight: 700;
    font-size: 20px;
  }
`;

export default PaymentPrice;
