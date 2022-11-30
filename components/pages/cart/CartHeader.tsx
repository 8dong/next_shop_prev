import styled from 'styled-components';

import Button from '../../common/Button';

interface CartHeaderProps {
  allSelectHandler: Function;
  removeCartHandler: Function;
}

const CartHeader = ({ allSelectHandler, removeCartHandler }: CartHeaderProps) => {
  return (
    <CartHeaderWrapper>
      <h2>장바구니</h2>
      <div className='buttonGroup'>
        <Button onClick={removeCartHandler}>삭제</Button>
        <Button onClick={allSelectHandler}>전체 선택</Button>
      </div>
    </CartHeaderWrapper>
  );
};

const CartHeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  .buttonGroup {
    display: flex;
    justify-content: space-between;
    width: 250px;
  }

  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
    }

    .buttonGroup {
      align-self: flex-end;
    }
  }
`;

export default CartHeader;
