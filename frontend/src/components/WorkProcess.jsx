import React from 'react';
import { Search, ClipboardList, Hammer, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Site Inspection',
    description: 'Our experts visit your location to assess requirements and provide accurate recommendations',
    icon: Search
  },
  {
    id: 2,
    title: 'Planning & Design',
    description: 'Detailed planning and custom design tailored to your specific needs and space constraints',
    icon: ClipboardList
  },
  {
    id: 3,
    title: 'Professional Installation',
    description: 'Expert installation by certified technicians ensuring safety standards and quality',
    icon: Hammer
  },
  {
    id: 4,
    title: 'Testing & Support',
    description: 'Rigorous testing and ongoing maintenance support for optimal performance',
    icon: CheckCircle
  }
];

const WorkProcess = () => {
  return (
    <section className="section-container">
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="section-title">Our Work Process</h2>
          <p className="section-description">
            A systematic approach ensuring excellence at every stage
          </p>
        </div>

        <div className="process-container">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="process-step">
                <div className="process-number">{step.id}</div>
                <div className="process-icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="process-connector"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
