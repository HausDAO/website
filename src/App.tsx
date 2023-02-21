import React from 'react';
import Hero from 'components/Hero';
import Header from 'components/Header';
import { Button } from 'components/Button';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Card from 'components/Card';
import bgNorthStar from 'assets/bg_northStar.png';

function App() {
  return (
    <div className="App" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      <Hero bg={bgNorthStar} bgColor="white">
        {/* <h2 style={{ color: 'var(--red)', fontSize: '42px' }}>
          DAOhaus is the protocol for purpose-driven governance
        </h2> */}
        <Header title="Party Time" />
        <div
          style={{
            backgroundImage: 'url(' + bgNorthStar + ')',
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            top: 0,
            left: 0,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
      </Hero>
      <Button onClick={() => alert('Start Daoing it!')}>SUMMON</Button>
      <pre>$$1,000,000</pre>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
