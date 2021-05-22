import HamburgerCounter from './HamburgerCounter';
import SoftdrinkCounter from './SoftdrinkCounter';
import FriesCounter from './FriesCounter';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <HamburgerCounter />
      <SoftdrinkCounter />
      <FriesCounter />
    </div>
  );
}
