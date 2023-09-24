import React from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Education from './Components/Education/Education';
import './App.css';
import './index.css';
import Skills from './Components/Skills/Skills';
import Experiance from './Components/Experiance/Experiance';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Experiance />
    </div>
  );
}

export default App;
