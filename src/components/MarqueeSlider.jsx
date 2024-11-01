import React from 'react';
import './MarqueeSlider.css';

const MarqueeSlider = ({ items = [] }) => { // Default to an empty array if items is undefined
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="marquee-item">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt={`item-${index}`} className="marquee-image" />
              </a>
            </div>
          ))
        ) : (
          <p>No items to display</p> // Add fallback if there are no items
        )}
      </div>
    </div>
  );
};

export default MarqueeSlider;
