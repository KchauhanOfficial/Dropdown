import React from 'react';
import { Settings, Wrench, TrendingUp, Shield } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'Installation',
    description: 'Professional elevator installation services with complete safety compliance and quality assurance. Our expert team ensures seamless integration.',
    image: 'https://images.unsplash.com/photo-1748027869634-fc2e545cfb0c',
    icon: Settings
  },
  {
    id: 2,
    title: 'Modernisation',
    description: 'Upgrade your old elevator systems with cutting-edge technology, improved safety features, and enhanced performance for better efficiency.',
    image: 'https://images.unsplash.com/photo-1770265014427-d963ddbb4975',
    icon: TrendingUp
  },
  {
    id: 3,
    title: 'Repair',
    description: 'Quick and reliable fault detection and repair services. Our technicians diagnose and fix issues promptly to minimize downtime.',
    image: 'https://images.unsplash.com/photo-1742281692582-3507d7219c33',
    icon: Wrench
  },
  {
    id: 4,
    title: 'Maintenance',
    description: 'Regular preventive maintenance services ensuring smooth, safe, and efficient elevator operation throughout the year.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a',
    icon: Shield
  }
];

const Services = () => {
  return (
    <section id="services" className="section-container bg-light">
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-description">
            Comprehensive elevator solutions tailored to your specific requirements
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id} 
                className="service-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-image-wrapper">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-image"
                  />
                  <div className="service-icon-badge">
                    <IconComponent size={28} />
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
