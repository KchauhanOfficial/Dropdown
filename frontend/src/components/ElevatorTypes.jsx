import React from 'react';
import { Building2, Package, Home, Utensils } from 'lucide-react';

const elevatorData = [
  {
    id: 1,
    title: 'Passenger Lift',
    description: 'Modern and safe passenger elevators designed for residential and commercial buildings with smooth operation.',
    image: 'https://images.unsplash.com/photo-1592256410394-51c948ec13d5',
    icon: Building2
  },
  {
    id: 2,
    title: 'Goods Lift',
    description: 'Heavy-duty industrial elevators built for transporting materials and goods with high load capacity.',
    image: 'https://images.unsplash.com/photo-1595392312388-38d093a975e3',
    icon: Package
  },
  {
    id: 3,
    title: 'Home Lift',
    description: 'Compact and elegant home elevators providing luxury and convenience for your residential space.',
    image: 'https://images.unsplash.com/photo-1758448511533-e1502259fff6',
    icon: Home
  },
  {
    id: 4,
    title: 'Dumbwaiter Lift',
    description: 'Small service lifts ideal for restaurants, hotels, and homes for transporting food and small items efficiently.',
    image: 'https://images.unsplash.com/photo-1760001553757-490bfe842adc',
    icon: Utensils
  }
];

const ElevatorTypes = () => {
  return (
    <section id="elevators" className="section-container">
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="section-title">Our Elevator Solutions</h2>
          <p className="section-description">
            Explore our comprehensive range of elevator systems designed for every need
          </p>
        </div>

        <div className="elevator-grid">
          {elevatorData.map((elevator) => {
            const IconComponent = elevator.icon;
            return (
              <div key={elevator.id} className="elevator-card">
                <div className="elevator-image-container">
                  <img 
                    src={elevator.image} 
                    alt={elevator.title}
                    className="elevator-image"
                  />
                  <div className="elevator-icon-overlay">
                    <IconComponent size={32} />
                  </div>
                </div>
                <div className="elevator-content">
                  <h3 className="elevator-title">{elevator.title}</h3>
                  <p className="elevator-description">{elevator.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ElevatorTypes;
