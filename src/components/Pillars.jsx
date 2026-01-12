import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Shield, Zap, Award } from 'lucide-react';

const pillars = [
  {
    icon: <Radio className="text-amber" size={32} />,
    title: "Attuned Orchestration",
    description: "Before we touch a single line of code, we listen. We believe that true optimization is impossible without a deep understanding of your unique 'beat'."
  },
  {
    icon: <Shield className="text-amber" size={32} />,
    title: "The Yantra Standard",
    description: "Built for robust, long-term performance. We prioritize clean architecture, smooth integration, and meticulous documentation."
  },
  {
    icon: <Zap className="text-amber" size={32} />,
    title: "Purposeful Automation",
    description: "Automation should liberate, not complicate. We focus on removing the friction of repetitive tasks so your human talent can focus on creativity."
  },
  {
    icon: <Award className="text-amber" size={32} />,
    title: "Quality over Cadence",
    description: "In a world obsessed with 'more,' we choose 'better.' We deliver systems that aren't just functional—they are elegant masterpiece projects."
  }
];

const Pillars = () => {
  return (
    <section className="section pillars">
      <div className="container">
        <div className="text-center mb-100">
          <span className="text-mono text-amber">OUR METHODOLOGY</span>
          <h2 className="section-title">The Pillars of <span className="gradient-text">Precision</span></h2>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="glass-card pillar-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="pillar-icon">
                {pillar.icon}
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-description">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .mb-100 { margin-bottom: 100px; }
        .text-center { text-align: center; }
        .section-title { font-size: 3.5rem; margin-top: 1rem; }
        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .pillar-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          height: 100%;
        }
        .pillar-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(255, 180, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pillar-title {
          font-size: 1.75rem;
          color: var(--color-white);
        }
        .pillar-description {
          font-size: 1.1rem;
          opacity: 0.7;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Pillars;
