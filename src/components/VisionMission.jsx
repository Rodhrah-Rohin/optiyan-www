import React from 'react';
import { motion } from 'framer-motion';

const VisionMission = () => {
  return (
    <section className="section vision-mission">
      <div className="container">
        <div className="vm-grid">
          <motion.div
            className="vm-item glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-mono text-amber">OUR VISION</span>
            <h3>Soulful Engineering</h3>
            <p>
              To become the global standard for "Soulful Engineering," where technology is no longer a burden to be managed, but a perfectly tuned instrument that empowers human creativity and intent.
            </p>
          </motion.div>

          <motion.div
            className="vm-item glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-mono text-amber">OUR MISSION</span>
            <h3>Transforming Chaos into Harmony</h3>
            <p>
              To empower enterprises by transforming fragmented workflows into harmonious systems. We combine deep technical expertise with an attentive, client-first approach to deliver robust, premium solutions.
            </p>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .vm-grid {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .vm-item {
          padding: 5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: center;
          align-items: center;
          border-color: rgba(255, 180, 0, 0.2);
          background: rgba(255, 180, 0, 0.03);
        }
        .vm-item:hover {
          border-color: var(--color-amber);
          background: rgba(255, 180, 0, 0.06);
        }
        .vm-item h3 {
          font-size: 3rem;
          max-width: 600px;
        }
        .vm-item p {
          font-size: 1.2rem;
          opacity: 0.8;
          max-width: 700px;
        }
        @media (max-width: 768px) {
          .vm-item {
            padding: 3rem 2rem;
          }
          .vm-item h3 {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default VisionMission;
