import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MouseGlow = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for the glow position
    const springConfig = { damping: 25, stiffness: 150 };
    const dx = useSpring(mouseX, springConfig);
    const dy = useSpring(mouseY, springConfig);

    // Even smoother spring for the secondary ring
    const d2x = useSpring(mouseX, { damping: 40, stiffness: 100 });
    const d2y = useSpring(mouseY, { damping: 40, stiffness: 100 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <>
            <motion.div
                className="mouse-glow"
                style={{
                    left: dx,
                    top: dy,
                }}
            />
            <motion.div
                className="mouse-ring"
                style={{
                    left: d2x,
                    top: d2y,
                }}
            />
            <style jsx>{`
        .mouse-glow {
          position: fixed;
          width: 600px;
          height: 600px;
          background: radial-gradient(
            circle, 
            rgba(255, 180, 0, 0.05) 0%, 
            rgba(255, 180, 0, 0.02) 40%, 
            transparent 70%
          );
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: -1;
          filter: blur(40px);
        }
        .mouse-ring {
          position: fixed;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255, 180, 0, 0.15);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: -1;
        }
      `}</style>
        </>
    );
};

export default MouseGlow;
