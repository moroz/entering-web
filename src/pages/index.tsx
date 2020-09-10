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
          <a
            href="https://entering-web-static.s3.amazonaws.com/%E7%95%B6%E8%97%8F%E5%82%B3%E4%BD%9B%E6%95%99%E8%88%87%E8%A5%BF%E6%96%B9%E7%9B%B8%E9%81%87.pdf"
            className="button hero__cta"
          >
            下載免費PDF
          </a>
        </div>
        <img src="/mockup.jpg" alt="Book mockup" className="hero__mockup" />
      </div>
    </main>
  </Layout>
);

export default Home;
