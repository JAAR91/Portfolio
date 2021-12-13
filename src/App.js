import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contac';
import Projects from './components/Projects';

const App = () => (
  <div class="d-flex flex-column d-md-flex d-md-row" id="page-container">
    <NavBar />
    {/* <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes> */}
  </div>
);
export default App;