import Image from 'next/image';
import styled from 'styled-components';

interface ProductImageProps {
  productImage: string;
  productTitle: string;
}

const ProductImage = ({ productImage, productTitle }: ProductImageProps) => {
  return (
    <ProductImageWrapper>
      <div className='productImage'>
        <Image src={productImage} alt={productTitle} fill sizes='(max-width: 768px) 100vw, 50vw' />
      </div>
      <h3>{productTitle}</h3>
    </ProductImageWrapper>
  );
};

const ProductImageWrapper = styled.article`
  .productImage {
    position: relative;

    width: 100%;
    height: 200px;
    margin-bottom: 10px;
  }

  .productImage img {
    object-fit: cover;
  }

  h3 {
    padding: 0 5px;

    font-size: 16px;
    font-weight: 400;
  }
`;

export default ProductImage;
