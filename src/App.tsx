import { Hero } from 'components/Hero';
import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { ClientRequest } from 'http';

function App() {
  return (
    <div className="App" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Hero title="DAOHaus is the protocol for purpose-driven governance" />
      <Header
        title="Infinite Composable Moloch"
        align="center"
        maxW="480px"
        margin="75px auto"
        color="var(--red)"
      />
      <Button onClick={() => alert('Start Daoing it!')}>SUMMON</Button>
      <pre>$$1,000,000</pre>
    </div>
  );
}

export default App;
