import React from 'react';
import { Building, Briefcase, Heart, Factory } from 'lucide-react';

const industries = [
  {
    id: 1,
    title: 'Residential Buildings',
    description: 'Apartments, condos, and housing complexes with reliable passenger lifts',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623',
    icon: Building
  },
  {
    id: 2,
    title: 'Commercial Offices',
    description: 'Corporate towers and business centers with high-speed elevators',
    image: 'https://images.pexels.com/photos/14711251/pexels-photo-14711251.jpeg',
    icon: Briefcase
  },
  {
    id: 3,
    title: 'Healthcare Facilities',
    description: 'Hospitals and clinics with specialized medical elevator systems',
    image: 'https://images.unsplash.com/photo-1628372095387-017d1099fc19',
    icon: Heart
  },
  {
    id: 4,
    title: 'Industrial Sites',
    description: 'Warehouses and factories with heavy-duty goods lifts',
    image: 'https://images.unsplash.com/photo-1763898260685-1a5b10346ba9',
    icon: Factory
  }
];

const Industries = () => {
  return (
    <section className="section-container bg-light">
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-description">
            Delivering specialized elevator solutions across diverse sectors
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <div key={industry.id} className="industry-card">
                <div className="industry-image-container">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="industry-image"
                  />
                  <div className="industry-overlay">
                    <IconComponent size={40} className="industry-icon" />
                  </div>
                </div>
                <div className="industry-content">
                  <h3 className="industry-title">{industry.title}</h3>
                  <p className="industry-description">{industry.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
