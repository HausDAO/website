import { Header } from 'components/Header';

export function Hero() {
  return (
    <div style={{ width: '100%', backgroundColor: 'var(--blue)' }}>
      <Header
        title="DAOHaus is the protocol for purpose-driven governance"
        align="center"
        maxW="480px"
        margin="75px auto"
        color="white"
      />
    </div>
  );
}
