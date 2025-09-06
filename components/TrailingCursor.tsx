import React, { useEffect, useRef } from 'react';

const TrailingCursor: React.FC = () => {
  const NUM_CIRCLES = 20;
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const coords = useRef({ x: -24, y: -24 });
  const circlePositions = useRef(Array(NUM_CIRCLES).fill({ x: -24, y: -24 }));

  useEffect(() => {
    // Initialize refs array
    circleRefs.current = circleRefs.current.slice(0, NUM_CIRCLES);

    const handleMouseMove = (e: MouseEvent) => {
      coords.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const animate = () => {
      const positions = circlePositions.current;
      // The first circle (leader) aims for the real mouse position
      let leaderX = coords.current.x;
      let leaderY = coords.current.y;

      positions.forEach((_pos, index) => {
        const currentCirclePos = positions[index];
        
        // Calculate distance to the leader (either the mouse or the circle in front)
        const dx = leaderX - currentCirclePos.x;
        const dy = leaderY - currentCirclePos.y;
        
        // Ease the movement for a smoother trail
        const newX = currentCirclePos.x + dx * 0.35;
        const newY = currentCirclePos.y + dy * 0.35;
        
        positions[index] = { x: newX, y: newY };
        
        // The next circle in the trail will follow this one
        leaderX = newX;
        leaderY = newY;
        
        const circleEl = circleRefs.current[index];
        if (circleEl) {
          // Position the circle, offsetting by half its size (12px) to center it
          circleEl.style.transform = `translate(${newX - 12}px, ${newY - 12}px)`;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {Array.from({ length: NUM_CIRCLES }).map((_, i) => (
         <div
            key={i}
            // Inline styles for dynamic scaling and opacity to create a tapering effect
            style={{
              transform: `scale(${(NUM_CIRCLES - i) / NUM_CIRCLES})`,
              opacity: `${(NUM_CIRCLES - i) / (NUM_CIRCLES * 1.2)}`,
            }}
            className="circle"
            // FIX: The ref callback function was implicitly returning a value, which is not assignable to the 'Ref<HTMLDivElement>' type.
            // Changed the arrow function to a block body to ensure it returns void.
            ref={(el) => {
              circleRefs.current[i] = el;
            }}
         />
      ))}
    </>
  );
};

export default TrailingCursor;
