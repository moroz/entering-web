import React from 'react';
import Head from 'next/head';

import Layout from '@/components/Layout';

const Home: React.FC<{}> = () => (
  <Layout>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__text__header">新書問世</h1>
          <p className="hero__text__subheader">
            《當藏傳佛教與西方相遇》繁體中文版即將上市。
            <br />
            請點擊下方按鈕獲得電子贈書與您結緣。
          </p>
          <a href="#" className="button hero__cta">
            下載免費PDF
          </a>
        </div>
        <img src="/mockup.jpg" alt="Book mockup" className="hero__mockup" />
      </div>
    </main>
  </Layout>
);

export default Home;
