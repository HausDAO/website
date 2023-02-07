import { Header } from 'components/Header';
import { Button } from 'components/Button';

function App() {
  return (
    <div className="App">
      <Header title="DAOHaus!!!" />
      <Button onClick={() => alert('Start Daoing it!')}>DAOHaus</Button>
    </div>
  );
}

export default App;
