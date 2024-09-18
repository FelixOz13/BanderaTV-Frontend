import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import StarRating from './StarRating';

import Spinner from './Spinner';



import { BsFillPlayCircleFill, } from 'react-icons/bs';


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

      {/* Additional Content (Previously Commented-Out) 
      <img
        src={`../images/${item.locationImg}`}
        className="locationImg"
        alt="location"
      />
      <p className="description">{item.description}</p>
      <div>
        {!imageLoaded && <Spinner />}
        <ReactPlayer
          url={item.videourl}
          className="video"
          width="280px"
          height="180px"
          light
          autoPlay={false}
          controls
          playIcon={<BsFillPlayCircleFill />}
          onReady={handleImageLoad}
        />
      </div>
      <LikeButtons />
      <div className="sharebutton">
        <button
          className="sharebutton1"
          onClick={handleShare}
          role="link"
        >
          <FaShare />
        </button>
        <Link className="sharebutton1" to={`/Bandera/${item.title}`}>
          <RiFullscreenLine />
        </Link>
        <a
          className="sharebutton2"
          href={`whatsapp://send?text=${encodeURIComponent(`${window.location.origin}${currentLocation.pathname}`)}`}
        >
          <FaWhatsapp />
        </a>
      </div>
      <div className="comments-section" style={{ marginTop: '20px' }}>
        <Comments commentsUrl="http://localhost:3004/comments" currentUserId="1" />
      </div>
      <div className="slidertextdiv">
        <h1 className="slidertext">
          Presiona un Link para visitar la red social del artista
        </h1>
      </div>
      <div className="third-party-icons">
        <a
          target="_blank"
          rel="noreferrer"
          href={item.websiteurl}
          className="icons-bandera"
        >
          <GiBlackFlag />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={item.facebook}
          className="icons-fb"
        >
          <FaFacebook />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={item.youtube}
          className="icons-YT"
        >
          <FaYoutube />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={item.instagram}
          className="icons-instagram"
        >
          <FaInstagramSquare />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={item.twitter}
          className="icons-twitter"
        >
          <BsTwitterX />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={item.tiktok}
          className="icons-tiktok"
        >
          <FaTiktok />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={item.ticketmaster}
          className="icons-ticketmaster"
        >
          <IoTicketSharp />
        </a>
        <a href={item.wiki} target="_blank" rel="noreferrer">
          <img
            src="../images/wiki.jpg"
            className="sponsor"
            alt="Wikipedia"
            media="(max-width: 400px)"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={item.spotify}
          className="icons-spotify"
        >
          <FaSpotify />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={item.apple}
          className="icons-itunes"
        >
          <SiApplemusic />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={item.tidal}
          className="icons-tidal"
        >
          <SiTidal />
        </a>
        <a href={item.napster} target="_blank" rel="noreferrer">
          <img
            src="../images/amazonMusic.jpeg"
            className="sponsor"
            alt="Amazon Music"
            media="(max-width: 300px)"
          />
        </a>
      </div>
      <BanderaMedia />*/}
    </div>
  );
}

export default Card;
