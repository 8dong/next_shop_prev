import type { NextPage } from 'next';
import Advertisement from '../components/pages/productItems/Advertiesment';

const Home: NextPage = () => {
  return (
    <div>
      <Advertisement
        title='준비물까지 챙겨주는 온라인 서비스'
        desc='취미를 시작하는데 필요한 모든 것을 준비해드려요.'
        imgSrc='/assets/ad_img.jpeg'
        imgAlt='광고 이미지'
      />
    </div>
  );
};

export default Home;
