import React, { useEffect } from 'react';

const TermsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-content pt-150 pb-150">
            <div className="container">
                <div className="glass-card legal-content">
                    <h1 className="mb-2">Terms of Service</h1>
                    <p className="text-mono text-amber mb-4">Last updated: January 2026</p>

                    <div className="legal-body">
                        <section>
                            <h2>1. Agreement to Terms</h2>
                            <p>By accessing Optiyan's digital instruments and services, you agree to be bound by these terms. We engineer for quality and stability; we expect the same engagement from our partners.</p>
                        </section>

                        <section>
                            <h2>2. Intellectual Property</h2>
                            <p>The "Yantra Standard" and our proprietary orchestration workflows remain the intellectual property of Optiyan. We deliver functional masterpieces for your use, but the underlying patterns are ours.</p>
                        </section>

                        <section>
                            <h2>3. Liability</h2>
                            <p>While we strive for "Soulful Engineering" and robust stability, Optiyan is not liable for fluctuations in the external digital environment beyond our orchestration.</p>
                        </section>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .pt-150 { padding-top: 150px; }
        .pb-150 { padding-bottom: 150px; }
        .legal-content {
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }
        .legal-body section {
          margin: 3rem 0;
        }
        h2 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 2rem; }
      `}</style>
        </div>
    );
};

export default TermsPage;
