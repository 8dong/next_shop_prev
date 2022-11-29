import React from 'react';
import styled from 'styled-components';

interface HeaderCartButton {
  location: 'header';
  onClick: Function;
}

interface AddCartButton {
  location: 'add';
  onClick: Function;
}

interface RemoveCartButton {
  location: 'remove';
  onClick: Function;
}

type CartButtonProps = HeaderCartButton | AddCartButton | RemoveCartButton;

const CartButton = ({ location, onClick }: CartButtonProps) => {
  const buttonClickHandler = () => {
    onClick();
  };

  return (
    <CartButtonWrapper location={location} onClick={buttonClickHandler}>
      <i className='fi fi-rr-shopping-cart'></i>
    </CartButtonWrapper>
  );
};

const CartButtonWrapper = styled.button<{ location: 'header' | 'add' | 'remove' }>`
  position: absolute;
  top: ${(props) => {
    switch (props.location) {
      case 'header':
        return '50%';
      case 'add':
        return '93%';
      case 'remove':
        return '50%';
    }
  }};
  right: 5%;
  transform: translateY(-50%);

  cursor: pointer;

  i {
    display: flex;
    justify-contnet: center;
    align-items: center;
    width: 1em;
    height: 1em;

    font-size: 1.5em;

    color: ${(props) => (props.location === 'remove' ? '#3787ff' : '#4a4a4a')};
  }
`;

export default CartButton;
