import React from 'react';
import { Award, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container bg-light">
      <div className="section-wrapper">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Tycoon Elevators</h2>
            <p className="about-description">
              Tycoon Elevators is a leading provider of premium elevator solutions across Delhi NCR. 
              With years of experience in the industry, we specialize in installation, modernization, 
              repair, and maintenance of all types of elevator systems.
            </p>
            <p className="about-description">
              Our commitment to safety, reliability, and customer satisfaction has made us the 
              trusted choice for residential, commercial, healthcare, and industrial clients. We 
              combine cutting-edge technology with expert craftsmanship to deliver elevator 
              solutions that exceed expectations.
            </p>
            <p className="about-description">
              Every project we undertake is backed by our team of certified technicians, quality 
              materials, and adherence to international safety standards. When you choose Tycoon 
              Elevators, you choose peace of mind.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <Award size={32} />
                </div>
                <h3 className="stat-number">10+</h3>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <Users size={32} />
                </div>
                <h3 className="stat-number">500+</h3>
                <p className="stat-label">Happy Clients</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <Shield size={32} />
                </div>
                <h3 className="stat-number">100%</h3>
                <p className="stat-label">Safety Certified</p>
              </div>
            </div>
          </div>

          <div className="about-image-grid">
            <img 
              src="https://images.unsplash.com/photo-1758448721149-aa0ce8e1b2c9" 
              alt="Modern elevator lobby"
              className="about-image about-image-main"
            />
            <img 
              src="https://images.unsplash.com/photo-1547630824-eed1be6a27b0" 
              alt="Elevator interior"
              className="about-image about-image-secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
