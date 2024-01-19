import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layouts/layout';
import { NextPageCustomLayout } from '@/types/_app.type';
import AppProvider from '@/components/providers/app-provider';
import enableSmoothScroll from '@/components/data/enableSmoothScroll';
import { useEffect } from 'react';

// Memanggil fungsi enableSmoothScroll di sini
enableSmoothScroll();

const App = ({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageCustomLayout;
}) => {
  const getLayout = Component.getLayout ?? ((page: any) => <Layout>{page}</Layout>);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <title>SrabuTrans | Logistic & Transport Solution</title>
        <meta name="keywords" key="keywords" content="SrabuTrans" />
        <link rel="shortcut icon" href="https://thumbs2.imgbox.com/d8/e2/yctnWHf3_t.png" />
      </Head>
      <div>
        <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
      </div>
    </>
  );
};

export default App;
