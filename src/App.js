import React from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar'
import Places from './components/Places'
import Shared from './components/Shared'
import Footer from './components/Footer'
import Home from './components/Home';
import Share from './components/Share';
import About from './components/About';
import Pool from './components/Pool';

function App() {
  return (
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shared" element={<Shared />} />
            <Route path="/share" element={<Share />} />
            <Route path="/places" element={<Places />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/pool" element={<Pool />} /> 
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;
