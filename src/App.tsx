import Header from 'components/Header';
import Navigation from 'components/Navigation';
import { Button } from 'components/Button';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Button onClick={() => alert('Start Daoing it!')}>DAOHaus</Button>
      <Footer />
    </div>
  );
}

export default App;
