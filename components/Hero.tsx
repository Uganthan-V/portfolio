import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero: React.FC = () => {
  const typedText = useTypewriter(
    ['A Frontend Developer.', 'A UI/UX Enthusiast.', 'A Creative Problem Solver.'],
    100,
    2000
  );

  return (
    <section id="home" className="h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-cyan-400 text-glow">John Doe</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-mono">
            <span>{typedText}</span>
            <span className="inline-block w-1 h-8 sm:h-10 bg-cyan-400 animate-pulse ml-1"></span>
          </p>
          <a
            href="#projects"
            className="mt-8 px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 button-glow"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;