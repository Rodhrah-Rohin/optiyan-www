import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  // Use Vite environment variable for the access key
  const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
        // Reset button message after 3 seconds
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-mono text-amber">STAY CONNECTED</span>
            <h2 className="section-title">Let's refine your <br /><span className="gradient-text">Rhythm.</span></h2>
            <p className="contact-desc">
              Ready to transform your operation into a masterpiece of efficiency?
              Reach out to us and let's orchestrate something exceptional together.
            </p>
            <div className="contact-details">
              <div className="detail-item">
                <span className="text-amber">Email</span>
                <p>hello@optiyan.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder="john@company.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">How can we help?</label>
                <textarea id="message" name="message" required rows="5" placeholder="Tell us about your current rhythm..."></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Orchestrating...' : status === 'success' ? 'Message Received' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 6rem;
          align-items: start;
        }
        .contact-desc {
          font-size: 1.2rem;
          margin: 2rem 0 3rem;
          opacity: 0.8;
          max-width: 480px;
        }
        .contact-details {
          display: grid;
          gap: 2rem;
        }
        .detail-item span {
          display: block;
          font-family: var(--font-mono);
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }
        .detail-item p {
          font-size: 1.1rem;
          color: var(--color-white);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-white);
        }
        .form-group input, 
        .form-group textarea {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
          color: var(--color-white);
          font-family: inherit;
          transition: var(--transition-smooth);
        }
        .form-group input:focus, 
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-white);
          background: rgba(255, 255, 255, 0.05);
        }
        .w-full {
          width: 100%;
          justify-content: center;
          padding: 1.2rem;
        }
        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .contact-info {
            text-align: center;
          }
          .contact-desc {
            margin: 2rem auto 3rem;
          }
          .contact-details {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
