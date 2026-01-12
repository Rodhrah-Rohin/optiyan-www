import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import Pillars from '../components/Pillars';
import VisionMission from '../components/VisionMission';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-content pt-150">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="page-header text-center mb-100"
                >
                    <span className="text-mono text-amber">OUR ETHOS</span>
                    <h1 className="hero-title">Beyond the <span className="gradient-text">Algorithm</span></h1>
                </motion.div>
            </div>

            <About />
            <Pillars />
            <VisionMission />

            <style jsx>{`
        .pt-150 { padding-top: 150px; }
        .hero-title { font-size: 4.5rem; }
        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
        }
      `}</style>
        </div>
    );
};

export default AboutPage;
