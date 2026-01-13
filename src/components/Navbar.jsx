import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.location.href = '/#contact';
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
    >
      <div className="container nav-content">
        <Link to="/" className="logo-container" onClick={() => setIsMenuOpen(false)}>
          <img src="/docs/dark-H.png" alt="Optiyan Logo" className="logo" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="nav-links desktop-only">
          <Link to="/about">About Us</Link>
          <Link to={location.pathname === '/' ? '#services' : '/#services'} onClick={() => {
            if (location.pathname === '/') {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}>Services</Link>
          <button onClick={scrollToContact} className="btn-primary">Connect</button>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
          >
            <div className="container mobile-nav-links">
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to={location.pathname === '/' ? '#services' : '/#services'} onClick={() => {
                setIsMenuOpen(false);
                if (location.pathname === '/') {
                  setTimeout(() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}>Services</Link>
              <button onClick={scrollToContact} className="btn-primary">Connect</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
          background: rgba(26, 26, 29, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 180, 0, 0.1);
        }
        .navbar.menu-open {
          background: var(--color-obsidian);
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
          transition: var(--transition-smooth);
        }
        .logo-container:hover .logo {
          filter: drop-shadow(0 0 20px rgba(255, 180, 0, 0.6));
          transform: scale(1.05);
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
          position: relative;
          padding: 0.5rem 0;
        }
        .nav-links :global(a)::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--color-amber);
          transition: width 0.3s ease;
        }
        .nav-links :global(a:hover)::after {
          width: 100%;
        }
        .nav-links :global(a:hover) {
          color: var(--color-amber);
        }
        .btn-primary:hover {
          box-shadow: 0 0 25px rgba(255, 180, 0, 0.5);
          transform: scale(1.05);
        }
        .mobile-toggle {
          display: none;
          color: var(--color-silver);
          z-index: 101;
        }
        .mobile-menu {
          display: none;
          background: var(--color-obsidian);
          border-bottom: 1px solid rgba(255, 180, 0, 0.1);
          overflow: hidden;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 2rem;
          align-items: flex-start;
        }
        .mobile-nav-links :global(a) {
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-white);
        }

        @media (max-width: 968px) {
          .desktop-only {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .mobile-menu {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
