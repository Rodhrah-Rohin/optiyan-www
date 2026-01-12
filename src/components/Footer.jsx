import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="footer section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/docs/dark-H.png" alt="Optiyan Logo" className="footer-logo" />
            <p className="tagline">Refining the rhythm.</p>
          </div>

          <div className="footer-cta">
            <h2 className="footer-title">Ready to refine <br />your cadence?</h2>
            <a href="mailto:hello@optiyan.com" className="btn-primary">Get in Touch</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} Optiyan. Built with precision.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--color-obsidian);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 4rem;
        }
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 6rem;
        }
        .footer-logo {
          height: 60px;
          width: auto;
          margin-bottom: 1rem;
        }
        .tagline {
          font-family: var(--font-serif);
          font-style: italic;
          opacity: 0.6;
        }
        .footer-title {
          font-size: 3rem;
          margin-bottom: 2rem;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.9rem;
          opacity: 0.5;
        }
        .footer-legal {
          display: flex;
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 4rem;
          }
          .footer-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
