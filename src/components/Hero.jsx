import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <span className="text-mono text-amber">REFINING THE RHYTHM</span>
            <h1 className="hero-title">
              Orchestrating <br />
              <span className="gradient-text">Digital Harmony</span>
            </h1>
            <p className="hero-description">
              We transform fragmented workflows into harmonious systems.
              Stripping away the discord of manual labor to reveal a masterpiece of efficiency.
            </p>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="glass-orbit">
              <div className="orbit-core">
                <img src="/docs/square.png" alt="Optiyan Emblem" className="hero-icon" />
                <div className="core-glow" />
              </div>
              <div className="ring ring-1" />
              <div className="ring ring-2" />
              <div className="ring ring-3" />
              <div className="rotating-text-container">
                <svg viewBox="0 0 200 200" className="rotating-text">
                  <path id="circlePath" d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0" fill="transparent" />
                  <text className="rotating-svg-text">
                    <textPath href="#circlePath" startOffset="0%">
                      REFINING THE RHYTHM • REFINING THE RHYTHM •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="mouse">
            <div className="wheel" />
          </div>
          <p>Scroll to Explore</p>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          position: relative;
        }
        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-title {
          font-size: clamp(3rem, 8vw, 5.5rem);
          margin: 1.5rem 0;
          line-height: 1;
        }
        .hero-description {
          font-size: 1.25rem;
          max-width: 540px;
          margin-bottom: 3rem;
          color: var(--color-silver);
          opacity: 0.8;
        }
        .hero-actions {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .btn-outline {
          border: 1px solid rgba(255, 180, 0, 0.4);
          padding: 0.8rem 2rem;
          border-radius: 30px;
          font-weight: 600;
          color: var(--color-white);
        }
        .btn-outline:hover {
          background: rgba(255, 180, 0, 0.1);
          border-color: var(--color-amber);
        }
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .glass-orbit {
          position: relative;
          width: 500px;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .orbit-core {
          position: relative;
          z-index: 5;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-icon {
          width: 220px;
          z-index: 2;
          filter: drop-shadow(0 0 30px rgba(255, 180, 0, 0.4));
        }
        .core-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          background: var(--color-amber);
          filter: blur(80px);
          opacity: 0.2;
          border-radius: 50%;
        }
        .ring {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          transition: var(--transition-smooth);
        }
        .ring-1 { 
          width: 100%; 
          height: 100%; 
          border-color: rgba(255, 180, 0, 0.1);
          animation: spin 30s linear infinite;
        }
        .ring-2 { 
          width: 85%; 
          height: 85%; 
          border-style: dashed;
          animation: spin 20s linear infinite reverse;
        }
        .ring-3 { 
          width: 70%; 
          height: 70%; 
          border-color: rgba(255, 180, 0, 0.05);
          animation: spin 15s linear infinite;
        }

        .rotating-text-container {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: none;
        }
        .rotating-text {
          width: 80%;
          height: 80%;
          animation: spin 40s linear infinite;
        }
        .rotating-svg-text {
          font-family: var(--font-mono);
          font-size: 10px;
          fill: var(--color-amber);
          opacity: 0.3;
          letter-spacing: 5px;
          text-transform: uppercase;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          opacity: 0.6;
        }
        .mouse {
          width: 24px;
          height: 40px;
          border: 2px solid var(--color-silver);
          border-radius: 12px;
          position: relative;
        }
        .wheel {
          width: 4px;
          height: 8px;
          background: var(--color-amber);
          border-radius: 2px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          animation: moveWheel 2s infinite ease-in-out;
        }
        @keyframes moveWheel {
          0% { transform: translateX(-50%) translateY(0); opacity: 1; }
          100% { transform: translateX(-50%) translateY(15px); opacity: 0; }
        }
        .scroll-indicator p {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-silver);
        }

        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            padding-bottom: 5rem;
          }
          .hero-description {
            margin: 0 auto 3rem;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-visual {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
