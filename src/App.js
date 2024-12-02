// src/App.js
import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import './App.css';

function App() {
  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: .6, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });
    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    lenis.current.scrollTo(element);
  };

  return (
    <div className="App">
      <nav>
        <button onClick={() => scrollToSection('section1')}>Section 1</button>
        <button onClick={() => scrollToSection('section2')}>Section 2</button>
        <button onClick={() => scrollToSection('section3')}>Section 3</button>
      </nav>
      <div id="section1" className="section">
        <h2>Section 1</h2>
        <p>Content for Section 1...</p>
      </div>
      <div id="section2" className="section">
        <h2>Section 2</h2>
        <p>Content for Section 2...</p>
      </div>
      <div id="section3" className="section">
        <h2>Section 3</h2>
        <p>Content for Section 3...</p>
      </div>
    </div>
  );
}

export default App;
