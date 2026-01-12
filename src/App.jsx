import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import Footer from './components/Footer';
import RhythmWaves from './components/RhythmWaves';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="app">
        <RhythmWaves />
        <motion.div
          className="progress-bar"
          style={{
            scaleX,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'var(--color-amber)',
            transformOrigin: '0%',
            zIndex: 1000
          }}
        />

        <div className="background-ornaments">
          <div className="ornament blur-1" />
          <div className="ornament blur-2" />
        </div>

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>

        <Footer />

        <style jsx>{`
          .app {
            position: relative;
            min-height: 100vh;
          }
          .background-ornaments {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
          }
          .ornament {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.15;
          }
          .blur-1 {
            top: -10%;
            right: -5%;
            width: 500px;
            height: 500px;
            background: var(--color-amber);
          }
          .blur-2 {
            bottom: 10%;
            left: -5%;
            width: 400px;
            height: 400px;
            background: var(--color-indigo);
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
