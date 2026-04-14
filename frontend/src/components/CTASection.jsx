import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-overlay"></div>
      <div 
        className="cta-background"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1592256410394-51c948ec13d5')`
        }}
      ></div>
      
      <div className="cta-content">
        <h2 className="cta-title">Looking for a Reliable Elevator Solution?</h2>
        <p className="cta-subtitle">
          Get expert consultation and free quotes for your elevator needs
        </p>
        <div className="cta-buttons">
          <a href="tel:9015108775">
            <Button className="btn-cta-primary">
              <Phone size={20} />
              Call Us Now
            </Button>
          </a>
          <a 
            href="https://wa.me/919015108775?text=Hello, I'm interested in your elevator services" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="btn-cta-secondary">
              <MessageCircle size={20} />
              WhatsApp Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
