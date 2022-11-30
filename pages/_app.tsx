import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import Page from '../components/layout/Page';

import store from '../store/redux/store';
// import CartContextProvider from '../store/context/CartContextProvider';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <CartContextProvider>
    <Provider store={store}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </Provider>
    // </CartContextProvider>
  );
}

export default MyApp;
