import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import ContactUs from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
