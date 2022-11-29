import styled from 'styled-components';
import Image from 'next/image';

interface AdvertisementProps {
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
}

const Advertisement = ({ title, desc, imgSrc, imgAlt }: AdvertisementProps) => {
  return (
    <AdvertisementWrapper>
      <div className='advertiesInfo'>
        <h2>{title}</h2>
        <span>{desc}</span>
      </div>
      <div className='advertiesImage'>
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          sizes='(max-width: 768px) 50vw, 60vw'
          priority={true}
        />
      </div>
    </AdvertisementWrapper>
  );
};

const AdvertisementWrapper = styled.section`
  display: flex;
  margin-bottom: 20px;
  background-color: #2b2b2b;

  .advertiesInfo {
    width: 50%;
    padding: 30px;

    color: #fff;
  }

  .advertiesInfo h2 {
    width: 60%;
    margin-bottom: 20px;

    word-break: keep-all;
    font-size: 30px;
  }

  .advertiesInfo span {
    display: block;
    width: 60%;

    font-size: 18px;
    word-break: keep-all;
    color: #afafaf;
  }

  .advertiesImage {
    position: relative;
    width: 50%;
    height: 300px;
  }

  .advertiesImage img {
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
    }

    .advertiesInfo {
      width: 100%;
    }

    .advertiesInfo h2 {
      width: 100%;
    }

    .advertiesInfo span {
      width: 100%;
    }

    .advertiesImage {
      width: 80%;
      margin: 0 auto 30px auto;
    }
  }
`;

export default Advertisement;
