import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './Navbar';
import Footer from './Footer';

import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Donate from './Components/Donate';
import Gallary from './Components/Gallary';
import Projects from './Components/Projects';

function App() {
  // useEffect(() => {
  //   // Disable right-click
  //   const handleContextMenu = (e) => {
  //     e.preventDefault();
  //   };

  //   // Disable dev tools key combinations
  //   const handleKeyDown = (e) => {
  //     if (
  //       e.key === 'F12' ||
  //       (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key.toUpperCase())) ||
  //       (e.ctrlKey && e.key.toLowerCase() === 'u')
  //     ) {
  //       e.preventDefault();
  //     }
  //   };

  //   document.addEventListener("contextmenu", handleContextMenu);
  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/gallary" element={<Gallary />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
