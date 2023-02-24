import React from 'react';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Home from 'pages/Home';
import Moloch from 'pages/Moloch';

function App() {
  return (
    <div className="h-full overflow-auto">
      <Navigation />
      {/* <Home /> */}
      <Moloch />
      <Footer />
    </div>
  );
}

export default App;
