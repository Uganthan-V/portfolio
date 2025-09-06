import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TrailingCursor from './components/TrailingCursor';

const App: React.FC = () => {
  return (
    <div className="bg-[#0f0f1b] text-gray-200 min-h-screen">
      <TrailingCursor />
      {/* Background Image and Overlay */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-fixed z-[-1]"
        style={{ backgroundImage: "url('https://i.imgur.com/5xWJ1c3.jpeg')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      </div>

      {/* Particle Background */}
      <div id="particles-js" className="fixed top-0 left-0 w-full h-full z-[-1]">
        {/* In a real app, you would initialize a particle library here. We'll simulate with CSS. */}
        <div className="absolute w-full h-full top-0 left-0 animate-[sparkle_50s_linear_infinite]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="absolute w-full h-full top-0 left-0 animate-[sparkle_80s_linear_infinite]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;