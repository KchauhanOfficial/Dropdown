import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ElevatorTypes from '../components/ElevatorTypes';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Industries from '../components/Industries';
import WorkProcess from '../components/WorkProcess';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Contact from '../components/Contact';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <ElevatorTypes />
      <Services />
      <WhyChooseUs />
      <Industries />
      <WorkProcess />
      <Gallery />
      <Testimonials />
      <About />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
