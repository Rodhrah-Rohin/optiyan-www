import React from 'react';
import { motion } from 'framer-motion';
import services from '../data/services.json';
import { Zap, Layers, MessageSquare } from 'lucide-react';

const iconMap = {
    Zap: <Zap size={32} />,
    Layers: <Layers size={32} />,
    MessageSquare: <MessageSquare size={32} />
};

const Services = () => {
    return (
        <section id="services" className="section services">
            <div className="container">
                <div className="text-center mb-100">
                    <span className="text-mono text-amber">OUR INSTRUMENTS</span>
                    <h2 className="section-title">Specialized <span className="gradient-text">Orchestration</span></h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="glass-card service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="service-icon text-amber">
                                {iconMap[service.icon]}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .mb-100 { margin-bottom: 100px; }
        .text-center { text-align: center; }
        .section-title { font-size: 3.5rem; margin-top: 1rem; }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .service-card {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          border-color: rgba(255, 180, 0, 0.1);
        }

        .service-card:hover {
          border-color: var(--color-amber);
          background: rgba(255, 180, 0, 0.04);
        }

        .service-icon {
          margin-bottom: 0.5rem;
        }

        .service-title {
          font-size: 1.75rem;
          color: var(--color-white);
        }

        .service-description {
          font-size: 1.1rem;
          opacity: 0.7;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.8rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Services;
