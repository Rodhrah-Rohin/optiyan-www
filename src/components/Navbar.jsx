import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container nav-content">
        <Link to="/" className="logo-container">
          <img src="/docs/dark-H.png" alt="Optiyan Logo" className="logo" />
        </Link>

        <div className="nav-links">
          <Link to="/about">About Us</Link>
          <Link to={location.pathname === '/' ? '#services' : '/#services'} onClick={() => {
            if (location.pathname === '/') {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}>Services</Link>
          <button onClick={scrollToContact} className="btn-primary">Connect</button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: 1.5rem 0;
          transition: var(--transition-smooth);
        }
        .navbar.scrolled {
          padding: 1rem 0;
          background: rgba(26, 26, 29, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 180, 0, 0.1);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          height: 60px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 10px rgba(255, 180, 0, 0.1));
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 3rem;
        }
        .nav-links :global(a), .nav-links button {
          font-weight: 500;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--color-silver);
          transition: var(--transition-smooth);
        }
        .nav-links :global(a:hover) {
          color: var(--color-amber);
        }
        .nav-links button:hover {
          color: var(--color-obsidian) !important;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
