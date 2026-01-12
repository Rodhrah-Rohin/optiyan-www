import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="section-title">Born from the <br /><span className="text-amber">Yantra</span></h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="about-content"
          >
            <p className="lead">
              The world is full of noise. In the modern enterprise, that noise sounds like the endless clicking of repetitive tasks and fragmented workflows.
            </p>
            <p>
              At <strong>Optiyan</strong>, we believe every business has an inherent pulse—a natural cadence of productivity that gets buried under the weight of manual labor. We don’t just "automate"; we orchestrate.
            </p>
            <p>
              Born from the Sanskrit concept of the <em>Yantra</em> (the sacred instrument) and the pursuit of <em>Optimization</em>, we approach technology as artisans. We listen first, documenting the nuances of your needs, and then we build.
            </p>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 6rem;
          align-items: start;
        }
        .section-title {
          font-size: 4rem;
          line-height: 1.1;
        }
        .about-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .lead {
          font-size: 1.5rem;
          color: var(--color-white);
          line-height: 1.4;
          font-family: var(--font-serif);
          font-style: italic;
        }
        p {
          font-size: 1.1rem;
          opacity: 0.8;
        }
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .section-title {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
