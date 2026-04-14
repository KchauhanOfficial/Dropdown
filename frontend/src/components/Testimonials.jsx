import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'Sky Heights Residency',
    rating: 5,
    text: 'Exceptional service! Tycoon Elevators installed our passenger lift with utmost professionalism. The team was punctual, skilled, and ensured everything was perfect.',
    image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=D4AF37&color=fff&size=80'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    company: 'Bloom Hospitals',
    rating: 5,
    text: 'We needed urgent elevator maintenance for our hospital, and Tycoon Elevators responded immediately. Their quick service and reliability are commendable.',
    image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=D4AF37&color=fff&size=80'
  },
  {
    id: 3,
    name: 'Amit Verma',
    company: 'Tech Park Solutions',
    rating: 5,
    text: 'Outstanding modernization work! They upgraded our old elevator system to a state-of-the-art solution. Highly recommend for commercial projects.',
    image: 'https://ui-avatars.com/api/?name=Amit+Verma&background=D4AF37&color=fff&size=80'
  },
  {
    id: 4,
    name: 'Neha Gupta',
    company: 'Green Valley Homes',
    rating: 5,
    text: 'The home lift installation was seamless. The technicians were courteous and the final result exceeded our expectations. Worth every penny!',
    image: 'https://ui-avatars.com/api/?name=Neha+Gupta&background=D4AF37&color=fff&size=80'
  }
];

const Testimonials = () => {
  return (
    <section className="section-container">
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-description">
            Trusted by hundreds of satisfied customers across Delhi NCR
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <Quote className="quote-icon" size={32} />
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="author-image"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
