import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/tailwind.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;