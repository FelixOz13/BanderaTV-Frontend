import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../../components/StarRating'; // Assuming you have this component
import Spinner from '../../components/Spinner'; // Assuming you have this component
import { TbHandClick } from "react-icons/tb";

const Card = ({ card }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Logic for badge text (you can customize this)
  let badgeText;
  if (card.openSpots === 0) {
    badgeText = 'No Mas Boletos';
  } else if (card.openSpots > 0) {
    badgeText = 'Boletos Disponibles';
  }

  return (
    <div className="card">
      <Link className="card--link" to={`/Bandera/${card._id}`}>
        {badgeText && <div className="card--badge">{badgeText}</div>}
        {!imageLoaded && <Spinner />}
        <img
          src={`/images/${card.coverImg}`}
          className="card--image"
          alt={`Cover for ${card.title}`}
          onLoad={handleImageLoad}
          onError={(e) => { e.target.src = 'path/to/placeholder/image'; }} // Placeholder image path
        />
        <div className="card--details">
          <h1 className="card--title">{card.title}</h1>
          <p className="category">{card.category}</p>
          <img 
            src={`/images/${card.locationImg}`} // Assuming there's a location image
            className="locationImg"
            alt="location"
          />
        </div>
        <StarRating /> {/* Assuming this component is used for ratings */}
        <h1 className='play-button'><TbHandClick /></h1>
      </Link>
    </div>
  );
};

export default Card;
