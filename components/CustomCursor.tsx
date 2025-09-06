import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if(isHidden) setIsHidden(false);
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      // Check if the target or its parent is an interactive element
      if (target.closest('a, button, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    const handleMouseLeave = () => {
        setIsHidden(true);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHidden]);

  return (
    <>
      {/* Outline/Glow - Slower transition creates a trailing effect */}
      <div
        className={`fixed pointer-events-none z-[9999] w-10 h-10 rounded-full border-2 border-cyan-400 transition-transform duration-500 ease-out
          ${isHovering ? 'scale-150 border-cyan-200' : ''}
          ${isHidden ? 'scale-0' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Dot - Faster transition makes it feel responsive */}
      <div
        className={`fixed pointer-events-none z-[9999] w-2 h-2 rounded-full bg-cyan-300 transition-transform duration-100
         ${isHidden ? 'scale-0' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CustomCursor;