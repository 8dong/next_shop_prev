import styled from 'styled-components';

const CountBadge = ({ count }: { count: number | undefined }) => {
  return <CountBadgeWrapper>{count}</CountBadgeWrapper>;
};

const CountBadgeWrapper = styled.div`
  position: absolute;
  top: -30%;
  right: -20%;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background-color: #0066ff;

  font-size: 12px;
  color: #fff;
`;

export default CountBadge;
