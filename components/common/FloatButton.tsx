import styled from 'styled-components';

interface FloatButtonPorps {
  buttonType: 'select' | 'unselect' | 'remove';
  onClick: Function;
}

const FloatButton = ({ buttonType, onClick }: FloatButtonPorps) => {
  const floatButtonClickHandler = () => {
    onClick();
  };

  let floatButtonContent;

  switch (buttonType) {
    case 'remove':
      floatButtonContent = <i className='fi fi-rr-cross'></i>;
      break;
    default:
      floatButtonContent = <i className='fi fi-rr-check'></i>;
  }

  return (
    <FlatButtonWrapper buttonType={buttonType} onClick={floatButtonClickHandler}>
      {floatButtonContent}
    </FlatButtonWrapper>
  );
};

const FlatButtonWrapper = styled.button<{ buttonType: 'select' | 'remove' | 'unselect' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => (props.buttonType === 'select' ? '#0066ff' : '#fcfcfc')};

  position: absolute;
  top: ${(props) => (props.buttonType === 'remove' ? '5%' : '45%')};
  right: 5%;

  cursor: pointer;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33px;
    height: 33px;

    font-size: 1.2em;

    color: ${(props) => (props.buttonType === 'select' ? '#fcfcfc' : '#000')};
  }
`;

export default FloatButton;
