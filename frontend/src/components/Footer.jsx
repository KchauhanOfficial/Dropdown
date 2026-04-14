import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img 
              src="https://customer-assets.emergentagent.com/job_lift-solutions-delhi/artifacts/tq5p1ehx_Gemini_Generated_Image_1g4qz91g4qz91g4q%20%281%29.png" 
              alt="Tycoon Elevators" 
              className="footer-logo-image"
            />
            <h3>Tycoon Elevators</h3>
          </div>
          <p className="footer-description">
            Your trusted partner for safe, reliable, and premium elevator solutions across Delhi NCR.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook" className="social-link">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="social-link">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="social-link">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('services')}>Services</button></li>
            <li><button onClick={() => scrollToSection('elevators')}>Elevators</button></li>
            <li><button onClick={() => scrollToSection('gallery')}>Gallery</button></li>
            <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Our Services</h4>
          <ul className="footer-links">
            <li><a href="#services">Installation</a></li>
            <li><a href="#services">Modernisation</a></li>
            <li><a href="#services">Repair Services</a></li>
            <li><a href="#services">Maintenance</a></li>
            <li><a href="#elevators">Passenger Lifts</a></li>
            <li><a href="#elevators">Goods Lifts</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <Phone size={18} />
              <a href="tel:9015108775">9015108775</a>
            </li>
            <li>
              <Mail size={18} />
              <a href="mailto:info@tycoonelevators.com">info@tycoonelevators.com</a>
            </li>
            <li>
              <MapPin size={18} />
              <span>Delhi 110094, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tycoon Elevators. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
