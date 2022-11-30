import { useState } from 'react';
import styled from 'styled-components';

import Button from '../../common/Button';

import type { Coupon } from '../../../data/coupons';

interface CouponListProps {
  coupons: Coupon[];
  couponSelectHandler: Function;
  selectedCoupon: Coupon | null;
}

const CouponList = ({ coupons, couponSelectHandler, selectedCoupon }: CouponListProps) => {
  const [isShowCouponList, setIsShowCouponList] = useState(false);

  const couponListButtonClickHandler = () => {
    setIsShowCouponList((prevState) => !prevState);
  };

  const couponClickHandler = (coupon: Coupon | null) => {
    return () => {
      couponSelectHandler(coupon);
      setIsShowCouponList(false);
    };
  };

  return (
    <CouponListWrapper isShow={isShowCouponList}>
      <strong>쿠폰</strong>
      <div className='couponSelectBox'>
        <button onClick={couponListButtonClickHandler}>
          {selectedCoupon ? selectedCoupon.title : '선택해주세요'}
        </button>
        {isShowCouponList && (
          <ul>
            <li onClick={couponClickHandler(null)}>쿠폰 미적용 선택</li>
            {coupons.map((coupon) => (
              <li onClick={couponClickHandler(coupon)} key={coupon.title}>
                {coupon.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </CouponListWrapper>
  );
};

const CouponListWrapper = styled.div<{ isShow: boolean }>`
  padding: 20px;

  strong {
    display: block;
    margin-bottom: 20px;

    font-size: 20px;
  }

  .couponSelectBox {
    position: relative;
  }

  .couponSelectBox button {
    width: 300px;
    height: 50px;
    padding-left: 15px;
    border: 1px solid #d4d4d4;

    text-align: left;
  }

  .couponSelectBox ul {
    position: absolute;
    top: 100%;
  }

  .couponSelectBox li {
    display: flex;
    align-items: center;
    width: 300px;
    height: 50px;
    padding-left: 15px;
    border: 1px solid #d4d4d4;
    border-top: none;
    background-color: #fff;

    text-align: left;
  }
`;

export default CouponList;
