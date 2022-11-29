export type Coupon = RateCoupon | AmountCoupon;

interface RateCoupon {
  type: 'rate';
  title: string;
  discountRate: number;
}

interface AmountCoupon {
  type: 'amount';
  title: string;
  discountAmount: number;
}

const coupons: Coupon[] = [
  {
    type: 'rate',
    title: '10% 할인 쿠폰',
    discountRate: 10
  },
  {
    type: 'amount',
    title: '10,000원 할인 쿠폰',
    discountAmount: 10000
  }
];

export default coupons;
