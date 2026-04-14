import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-section">
          <img 
            src="https://customer-assets.emergentagent.com/job_lift-solutions-delhi/artifacts/tq5p1ehx_Gemini_Generated_Image_1g4qz91g4qz91g4q%20%281%29.png" 
            alt="Tycoon Elevators Logo" 
            className="company-logo"
          />
          <span className="company-name">Tycoon Elevators</span>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
          <button onClick={() => scrollToSection('elevators')} className="nav-link">Elevators</button>
          <button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </nav>

        <div className="header-actions">
          <a href="tel:9015108775" className="call-button">
            <Phone size={18} />
            <span>9015108775</span>
          </a>
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
