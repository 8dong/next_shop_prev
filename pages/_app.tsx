import type { AppProps } from 'next/app';

import Page from '../components/layout/Page';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
