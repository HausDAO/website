import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Home from 'pages/Home';
import Moloch from 'pages/Moloch';
import NoMatch from 'pages/NoMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="moloch" element={<Moloch />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;

function Layout() {
  return (
    <div className="h-full overflow-auto">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
