import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const handleGetQuote = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1772721559246-286e6d986d73')`
        }}
      ></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Safe & Reliable Elevator Solutions
        </h1>
        <p className="hero-subtitle">
          Installation, Modernisation, Repair & Maintenance
        </p>
        <p className="hero-description">
          Trusted elevator services across Delhi NCR with expert technicians and premium quality solutions
        </p>
        
        <div className="hero-buttons">
          <a href="tel:9015108775">
            <Button className="btn-primary">
              <Phone size={20} />
              Call Now
            </Button>
          </a>
          <Button onClick={handleGetQuote} className="btn-secondary">
            <MessageCircle size={20} />
            Get Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
