import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { Footer } from 'components/Footer';

function App() {
  return (
    <div className="App">
      <Header title="DAOHaus!!!" />
      <Button onClick={() => alert('Start Daoing it!')}>DAOHaus</Button>
      <Footer />
    </div>
  );
}

export default App;
