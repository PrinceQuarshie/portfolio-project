import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {tsParticles} from "tsparticles-engine";
import particlesConfig from './components/config/particles-config';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <>
      <tsParticles
      params={particlesConfig}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
