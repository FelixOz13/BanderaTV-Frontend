import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import StarRating from './StarRating';

import Spinner from './Spinner';



import { BsFillPlayCircleFill } from 'react-icons/bs';


function Card({ item }) {
  const [imageLoaded, setImageLoaded] = useState(false);
 

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  let badgeText;
  if (item.openSpots === 0) {
    badgeText = 'No Mas Boletos';
  } else if (item.openSpots > 0) {
    badgeText = 'Boletos Disponibles';
  }

  

  return (
    <div className="card">
      <Link className="card--link" to={`/Bandera/${item.title}`}>
        {badgeText && <div className="card--badge">{badgeText}</div>}
        {!imageLoaded && <Spinner />}
        <img
          src={`../images/${item.coverImg}`}
          className="card--image"
          alt={`Cover for ${item.title}`}
          onLoad={handleImageLoad}
          onError={(e) => { e.target.src = 'path/to/placeholder/image'; }}
        />
        <div className="card--details">
          <h1 className="card--title">{item.title}</h1>
          <p className="category">{item.category}</p>
          <img src={`../images/${item.locationImg}`}
               className="locationImg"
               alt="location"
      />
        </div>
        <StarRating />
        <h1 className='play-button'><BsFillPlayCircleFill /></h1>
      </Link>
    </div>
  );
}

export default Card;
