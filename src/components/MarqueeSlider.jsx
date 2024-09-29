import React from 'react';
import './MarqueeSlider.css';

const MarqueeSlider = ({ items }) => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {items.map((item, index) => (
          <div key={index} className="marquee-item">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={`item-${index}`} className="marquee-image" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSlider;
