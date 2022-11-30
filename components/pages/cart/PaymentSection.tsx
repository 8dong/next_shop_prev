import { useState } from 'react';

import coupons from '../../../data/coupons';

import SelectedList from './SelectedList';
import CouponList from './CouponList';

import type { Product } from '../../../data/productsItem';
import type { Coupon } from '../../../data/coupons';
import PaymentPrice from './PaymentPrice';

const PaymentSection = ({ selectedProducts }: { selectedProducts: Product[] }) => {
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);

  const couponSelectHandler = (coupon: Coupon) => {
    setSelectedCoupon(coupon);
  };

  return (
    <section>
      <SelectedList selectedProducts={selectedProducts} />
      <CouponList
        coupons={coupons}
        selectedCoupon={selectedCoupon}
        couponSelectHandler={couponSelectHandler}
      />
      <PaymentPrice selectedCoupon={selectedCoupon} selectedProducts={selectedProducts} />
    </section>
  );
};

export default PaymentSection;
