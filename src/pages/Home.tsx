import Dialog from 'components/Dialog';
import Ecosystem from 'components/Ecosystem';
import Governance from 'components/Governance';
import Hero from 'components/Hero';
import PublicGoods from 'components/PublicGoods';
import Testimonials from 'components/Testimonials';
import React from 'react';

const Home = () => {
  return (
    <main>
      <Hero />
      <PublicGoods />
      <Testimonials />
      <Ecosystem />
      <Dialog />
      <Governance />
    </main>
  );
};

export default Home;
