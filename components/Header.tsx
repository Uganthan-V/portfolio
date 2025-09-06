// {{change 5}}
import React, { useState, useEffect, useRef } from 'react';

const MenuIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// {{change 6}}
 const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMouseActive, setIsMouseActive] = useState(true); // Track mouse activity
  const idleTimeout = useRef<number | null>(null); // useRef to hold the timeout id

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleMouseMove = () => {
      setIsMouseActive(true); // Mouse is active
      if (idleTimeout.current) {
        clearTimeout(idleTimeout.current); // Clear previous timeout
      }
      idleTimeout.current = window.setTimeout(() => {
        setIsMouseActive(false); // Mouse is idle
      }, 500); // Set timeout to 500ms (adjust as needed)
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
       if (idleTimeout.current) {
        clearTimeout(idleTimeout.current); // Clear timeout on unmount
      }
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-black/40 backdrop-blur-md shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <a href="#home" onClick={handleLinkClick} className="text-2xl font-bold text-cyan-400 text-glow tracking-wider">
            Portfolio
          </a>
          
        
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              // {{change 2}}
              // Add enlarge, glow, z-index, and transition effects on hover
              // {{change 8}}
              <a key={link.href} href={link.href} className={`text-gray-300 hover:text-black transition-colors duration-300 relative group hover:scale-110 hover:shadow-black hover:shadow-md hover:z-10 ${isMouseActive ? '' : 'scale-100 shadow-none'}`}>
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
            <a
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition-all duration-300 button-glow"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-cyan-400 transition-colors z-50">
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-lg z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div className="flex flex-col items-center justify-center h-full pt-16 text-center">
          {navLinks.map((link) => (
            // {{change 3}}
            // {{change 4}}
            // Add enlarge, glow, z-index, and transition effects on hover
            <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-3xl text-gray-200 my-4 hover:text-black transition-colors hover:scale-110 hover:shadow-black hover:shadow-md hover:z-10">
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer" 
            className="mt-8 px-8 py-3 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition-all duration-300 button-glow text-xl"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;