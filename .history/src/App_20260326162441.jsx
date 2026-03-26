import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Blog from './components/Blog';
import ProjectShowcase from './components/ProjectShowcase';
import AllBlogs from './components/AllBlogs';
import ProjectBlog from './components/ProjectBlog';
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
              <Experience />
              <Blog />
              <Contact />
            </main>
          } />
          <Route path="/blog" element={<AllBlogs />} />
          <Route path="/projects/bp-vital" element={<ProjectBlog />} />
          <Route path="/projects/clientin" element={<ProjectBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
