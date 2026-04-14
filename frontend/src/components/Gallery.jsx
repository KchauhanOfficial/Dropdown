import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1648951568236-b2bd16ecb41e',
    title: 'Modern Elevator Lobby',
    category: 'Commercial'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1635375113080-2bcee0c02ba4',
    title: 'Luxury Building Interior',
    category: 'Residential'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1624985947227-6abdf50fb47d',
    title: 'Premium Elevator Installation',
    category: 'Commercial'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1631247794283-fe71c8615b64',
    title: 'Corporate Tower Elevator',
    category: 'Commercial'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1721189738431-07d1d0f1ed38',
    title: 'Modern Passenger Lift',
    category: 'Residential'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1721190159107-a4ccd0efc9f3',
    title: 'High-Rise Building Elevator',
    category: 'Commercial'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1758518731135-6d9af1849b25',
    title: 'Glass Elevator System',
    category: 'Commercial'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1718201525336-095240724352',
    title: 'Luxury Residential Elevator',
    category: 'Residential'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1759774312019-f99825b9718c',
    title: 'Premium Building Interior',
    category: 'Residential'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Commercial', 'Residential'];

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="section-container bg-light">
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="section-title">Our Project Gallery</h2>
          <p className="section-description">
            Showcasing our premium elevator installations across Delhi NCR
          </p>
        </div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-button ${filter === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h4 className="gallery-title">{image.title}</h4>
                <p className="gallery-category">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button 
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage.url} 
            alt={selectedImage.title}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="lightbox-info">
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.category}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
