import Head from 'next/head';
import type { AppProps } from 'next/app';

import CartContextProvider from '../store/context/CartContextProvider';
import Page from '../components/layout/Page';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'
        ></link>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </CartContextProvider>
  );
}

export default MyApp;
