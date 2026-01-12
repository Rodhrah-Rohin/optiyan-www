import React, { useEffect } from 'react';

const PrivacyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-content pt-150 pb-150">
            <div className="container">
                <div className="glass-card legal-content">
                    <h1 className="mb-2">Privacy Policy</h1>
                    <p className="text-mono text-amber mb-4">Last updated: January 2026</p>

                    <div className="legal-body">
                        <section>
                            <h2>1. Orchestrating Privacy</h2>
                            <p>At Optiyan, we respect your digital rhythm. We only collect data that is essential for delivering our premium orchestration services.</p>
                        </section>

                        <section>
                            <h2>2. Data Collection</h2>
                            <p>We may collect information you provide directly to us through our contact forms or when you communicate with us regarding our bespoke instruments.</p>
                        </section>

                        <section>
                            <h2>3. Use of Information</h2>
                            <p>Information is used solely to refine your experience, provide detailed architectural consultations, and maintain the integrity of our digital infrastructure.</p>
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

export default PrivacyPage;
