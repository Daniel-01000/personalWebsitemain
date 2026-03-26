import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Blog from './components/Blog';
import AllBlogs from './components/AllBlogs';
import Contact from './components/Contact';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen">
        <Navbar scrolled={scrolled} />
        <Routes>
          {/* Main Portfolio Page */}
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Portfolio />
              <Experience />
              <Blog />
              <Contact />
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
