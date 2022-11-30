import { useRouter } from 'next/router';
// import { useContext } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import CartButton from '../common/CartButton';
import CountBadge from '../common/CountBadge';
// import CartStateContext from '../../store/context/CartStateContext';

import type { RootState } from '../../store/redux/store';

const Header = ({ title }: { title: string }) => {
  const cartList = useSelector((store: RootState) => store.cart.cartList);
  const cartListLength = cartList.length;
  // const cartListLength = useContext(CartStateContext)!.length;

  const router = useRouter();

  const goToCartPage = () => {
    router.push('/cart');
  };

  const goToHomePage = () => {
    router.push('/');
  };

  return (
    <HeaderWrapper>
      <h1 onClick={goToHomePage}>{title}</h1>
      <div className='cartButton'>
        <CartButton location='header' onClick={goToCartPage} />
        <CountBadge count={cartListLength} />
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  max-width: 1024px;
  height: 100px;
  margin: 0 auto;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  background-color: #fff;

  h1 {
    display: flex;
    align-items: center;
    height: 80%;
    padding: 0 20px;

    font-size: 25px;
    font-weight: 700;

    cursor: pointer;
  }

  .cartButton {
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);

    width: 1.5em;
    height: 1.5em;
  }

  @media screen and (max-width: 768px) {
    & {
      height: 70px;
    }
  }
`;

export default Header;
