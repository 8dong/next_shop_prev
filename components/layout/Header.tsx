import { useRouter } from 'next/router';
import styled from 'styled-components';

const Header = ({ title }: { title: string }) => {
  const router = useRouter();
  const goToCartPage = () => {
    router.push('/cart');
  };

  return (
    <HeaderWrapper>
      <h1 onClick={goToCartPage}>{title}</h1>
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

  @media screen and (max-width: 768px) {
    & {
      height: 70px;
    }
  }
`;

export default Header;
