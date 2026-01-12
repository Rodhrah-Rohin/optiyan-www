import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <Services />
            <ContactForm />
        </>
    );
};

export default Home;
