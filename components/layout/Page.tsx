import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageWrapper>
      <Header title='NEXT SHOP' />
      {children}
    </PageWrapper>
  );
};

const PageWrapper = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 100px;

  @media screen and (max-width: 768px) {
    & {
      padding-top: 70px;
    }
  }
`;

export default Page;
