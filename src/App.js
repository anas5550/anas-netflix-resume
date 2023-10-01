import React from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Education from './Components/Education/Education';
import './App.css';
import './index.css';
import Skills from './Components/Skills/Skills';
import Experiance from './Components/Experiance/Experiance';
import Footer from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'
import Links from './Components/Links/Links';
import Certificates from './Components/Certificates/Certificates';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Navbar />
        <Hero />
        <Education />
        <Skills />
        <Experiance />
        <Links />
        <Certificates />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
