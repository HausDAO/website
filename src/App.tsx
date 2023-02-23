import React from 'react';
import Hero from 'components/Hero';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import PublicGoods from 'components/PublicGoods';
import Testimonials from 'components/Testimonials';
import Ecosystem from 'components/Ecosystem';
import Governance from 'components/Governance';
import Dialog from 'components/Dialog';

function App() {
  return (
    <div className="h-full overflow-auto">
      <Navigation />
      <Hero />
      <PublicGoods />
      <Testimonials />
      <Ecosystem />
      <Dialog />
      <Governance />
      <Footer />
    </div>
  );
}

export default App;
