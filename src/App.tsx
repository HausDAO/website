import React from 'react';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Home from 'pages/Home';

function App() {
  return (
    <div className="h-full overflow-auto">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
