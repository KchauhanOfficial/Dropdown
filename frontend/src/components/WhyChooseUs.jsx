import React from 'react';
import { Users, Clock, MapPin, DollarSign, Award, Headphones } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Experienced Technicians',
    description: 'Highly skilled professionals with years of expertise',
    icon: Users
  },
  {
    id: 2,
    title: 'Fast Service Response',
    description: '24/7 emergency support and quick turnaround time',
    icon: Clock
  },
  {
    id: 3,
    title: 'Serving Delhi NCR',
    description: 'Comprehensive coverage across the entire region',
    icon: MapPin
  },
  {
    id: 4,
    title: 'Affordable Pricing',
    description: 'Competitive rates without compromising quality',
    icon: DollarSign
  },
  {
    id: 5,
    title: 'Certified & Safe',
    description: 'All safety certifications and compliance standards met',
    icon: Award
  },
  {
    id: 6,
    title: 'Reliable Support',
    description: 'Dedicated customer service for all your needs',
    icon: Headphones
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-container">
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="section-title">Why Choose Tycoon Elevators?</h2>
          <p className="section-description">
            Your trusted partner for reliable and safe elevator solutions
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.id} 
                className="feature-card"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="feature-icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
