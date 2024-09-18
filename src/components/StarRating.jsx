import React from 'react';
import ReactStars from 'react-rating-stars-component';

function StarRating({ size = 25, isHalf = true, count = 5 }) {
  // Function to generate a random value between 2.5 and 5
  const getRandomRating = () => {
    return (Math.random() * 2.5) + 2.5;
  };

  return (
    <div className="stars">
      <ReactStars
        size={size}
        isHalf={isHalf}
        count={count}
        value={getRandomRating()}
      />
    </div>
  );
}

export default StarRating;
