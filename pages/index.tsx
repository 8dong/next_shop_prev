import type { NextPage, GetServerSideProps } from 'next';

import Advertisement from '../components/pages/productItems/Advertiesment';
import ProductItemList from '../components/pages/productItems/ProductItemList';

import type { Product } from '../data/productsItem';

interface HomeProps {
  fetchedProductItems: Product[];
  isDone: boolean;
}

const Home: NextPage<HomeProps> = ({ fetchedProductItems, isDone }) => {
  return (
    <div>
      <Advertisement
        title='준비물까지 챙겨주는 온라인 서비스'
        desc='취미를 시작하는데 필요한 모든 것을 준비해드려요.'
        imgSrc='/assets/ad_img.jpeg'
        imgAlt='광고 이미지'
      />
      <ProductItemList products={fetchedProductItems} isDone={isDone} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3001/api/fetchProductItems', {
    method: 'POST',
    body: JSON.stringify({ startIndex: 0 }),
    headers: {
      'Content-type': 'application/json'
    }
  });

  const { fetchedProductItems, isDone } = await res.json();

  return {
    props: { fetchedProductItems, isDone }
  };
};

export default Home;
