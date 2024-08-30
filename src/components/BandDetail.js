import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import Navbar from './Navbar';
import LikeButtons from './LikeButtons';
import StarRating from './StarRating';
import { GiBlackFlag } from 'react-icons/gi';
import { SiApplemusic } from 'react-icons/si';
import { useParams,  Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import BanderaMedia from './BanderaMedia';
import {
  FaTiktok,
  FaWhatsapp,
  FaInstagramSquare,
  FaYoutube,
  FaShare,
  FaSpotify,
  FaFacebook,
} from 'react-icons/fa';
import { SiTidal } from 'react-icons/si';
import { BsTwitterX } from 'react-icons/bs';
import { loadCardData } from '../utils/loadCardData'; 
import "./banddetail.css"



const BandDetail = () => {
  const [band, setBand] = useState(null);
  const [loading, setLoading] = useState(true);
  const { title } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bandsData = await loadCardData();
        const foundBand = bandsData.find(item => item.title === title);
        setBand(foundBand);
      } catch (error) {
        console.error('Error loading bands data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [title]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!band) {
    return <div>Band not found</div>;
  }
  const encodedTitle = encodeURIComponent(band.title);
const shareUrl = `${window.location.origin}/Bandera/${encodedTitle}`;
const coverImgUrl = `${window.location.origin}/images/${band.coverImg}`;

const handleShare = () => {
if (navigator.share) {
const shareContent = {
title: document.title,
text: `Te Invitamos a disfrutar de ${band.title} con Bandera Musical. ${coverImgUrl}`,
url: shareUrl, // Include the URL so it can be opened directly
};
navigator
.share(shareContent)
.then(() => console.log('Share successful'))
.catch(error => console.error('Error sharing:', error));
} else {
console.warn('Web Share API not supported');
}
};

  
  return (
    <div>
    <Navbar />
    
  
    <div className="band-card">
      <Link to={`/band/${encodeURIComponent(band.title)}`} target="_blank" rel="noreferrer">
       
      </Link>
      <div className="title-name" >
      <h2 className="title-name">{band.title}</h2>
      </div>
      
      <div className="card--titler">
      <p className="card--titler">{band.category}</p>
      </div>
      <div><img
     src={`../images/${band.locationImg}`}
     className="origin-flag"
     alt="location"
   />
   </div>
      <div><img
      src={`../images/${band.coverImg}`}
      className="coverImg"
      alt="cover"
    />
    </div>
     
<div>

<StarRating/>
</div>
      
      <LikeButtons />
      <p className="description" style={{backgroundColor:"black"}}>{band.description}</p>
      <div>
       
        
      <div className="sharebutton">
      <button
        className="sharebutton-button"
        onClick={handleShare}
        role="link" // ARIA role for link-like elements
      >
        <FaShare />
      </button>
    
      <a
      className="sharebutton-button"
      href={`whatsapp://send?text=${encodeURIComponent(
        `Te Invitamos a disfrutar de ${band.title} con Bandera Musical. Mira la imagen del álbum: ${coverImgUrl}\nVisita la página: ${shareUrl}`
      )}`}
    >
      <FaWhatsapp />
    </a>
    </div>
    
      
      <div className="video-container">
      <ReactPlayer
        url={band.videourl}
        className="video"
        width="100%"
        height="100%"
        
        autoPlay={false}
        controls
      />
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
          href={band.websiteurl}
          className="icons-bandera"
          id="third-party-grid"
        >
          <GiBlackFlag />
        </a>
       
        <a
          target="_blank"
          rel="noreferrer"
          href={band.facebook}
          className="icons-fb"
          id="third-party-grid"
        >
          <FaFacebook />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={band.youtube}
          className="icons-YT"
          id="third-party-grid"
        >
          <FaYoutube />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={band.instagram}
          className="icons-instagram"
          id="third-party-grid"
        >
          <FaInstagramSquare />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={band.twitter}
          className="icons-twitter"
          id="third-party-grid"
        >
        <BsTwitterX />

        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={band.tiktok}
          className="icons-tiktok"
          id="third-party-grid"
        >
          <FaTiktok />
        </a>
        <a href={band.ticketmaster} target="_blank" rel="noreferrer">
          <img
            src="../images/ticketmaster.jpg"
            className="sponsor"
            alt=""
            media="(max-width: 400px)"
          />
        </a>
        <a href={band.wiki} target="_blank" rel="noreferrer">
          <img
            src="../images/wiki.jpg"
            className="sponsor"
            alt=""
            media="(max-width: 400px)"
          />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={band.spotify}
          className="icons-spotify"
          id="third-party-grid"
        >
          <FaSpotify />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={band.apple}
          className="icons-itunes"
          id="third-party-grid"
        >
          <SiApplemusic />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={band.tidal}
          className="icons-tidal"
          id="third-party-grid"
        >
          <SiTidal />
        </a>

        <a href={band.napster} target="_blank" rel="noreferrer">
          <img
            src="../images/amazonMusic.jpeg"
            className="sponsor"
            alt=""
            media="(max-width: 300px)"
          />
        </a>
      </div>
      <h1 style={{color:"goldenrod", backgroundColor:"black"}}>Deja tus Comentarios</h1>
      <div style={{ marginTop: '65px' }}>
        <Comments
          commentsUrl="http://localhost:3004/comments"
          currentUserId="1"
        />
      </div>
      
      <BanderaMedia style={{color:"goldenrod"}}/>
    </div>
    </div>
    </div>
    
  );
};

export default BandDetail;
