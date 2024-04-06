import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Components/Home'

import About from './Components/About'
import Contact from './Components/Contact'
import Policy from './Components/Policy'
import Gallery from './Components/Gallery'
import Service from './Components/Services'
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />}  />
          <Route path="/service" element={<Service />}  />
          <Route path="/contact" element={<Contact />}  />
          <Route path="/gallery" element={<Gallery />}  />
          <Route path="/policy" element={<Policy />}  />

        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
