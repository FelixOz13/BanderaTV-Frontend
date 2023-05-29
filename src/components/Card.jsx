import ReactPlayer from 'react-player/lazy'
import LikeButtons from './LikeButtons'
import BanderaMedia from './BanderaMedia'
import StarRating from './StarRating'
import { GiBlackFlag } from 'react-icons/gi'
import { SiApplemusic } from 'react-icons/si'
import { useLocation } from 'react-router-dom'
import {
  FaTiktok,
  FaWhatsapp,
  FaInstagramSquare,
  FaYoutube,
  FaShare,
  FaSpotify,
  FaFacebook,
  FaTwitterSquare,
} from 'react-icons/fa'
import { SiTidal } from 'react-icons/si'
import React, { useState } from 'react'
import Spinner from './Spinner'
import { BsFillPlayCircleFill } from 'react-icons/bs'

function Card({ item }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const currentLocation = useLocation()

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  let badgeText
  if (item.openSpots === 0) {
    badgeText = 'No Mas Boletos'
  } else if (item.openSpots > 0) {
    badgeText = 'Boletos Disponibles'
  }
  const location = useLocation()
  const shareUrl = `${window.location.origin}${location.pathname}`

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          text: 'Check out this link!',
          url: shareUrl,
        })
        .then(() => console.log('Share successful'))
        .catch((error) => console.error('Error sharing:', error))
    } else {
      console.warn('Web Share API not supported')
    }
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      {!imageLoaded && <Spinner />}{' '}
      {/* Display spinner while image is loading */}
      <img
        src={`../images/${item.coverImg}`}
        className="card--image"
        alt="card"
        onLoad={handleImageLoad}
      />
      <div className="notranslate">
        <h1 className="card--title">{item.title}</h1>

        <p className="category">{item.category}</p>
      </div>
      <StarRating />
      <img
        src={`../images/${item.locationImg}`}
        className="locationImg"
        alt="location"
      />
      <p className="description">{item.description}</p>
      <div>
        {!imageLoaded && <Spinner />}{' '}
        <ReactPlayer
          url={item.videourl}
          className="video"
          width="280px"
          height="180px"
          light
          autoPlay={false}
          controls
          playIcon=<BsFillPlayCircleFill />
          onReady={handleImageLoad}
        />
      </div>
      <LikeButtons />
      <div className="sharebutton">
        <a className="sharebutton1" href="#" onClick={handleShare}>
          <FaShare />
        </a>

        <a
          className="sharebutton2"
          href={`whatsapp://send?text=${encodeURIComponent(
            `${window.location.origin}${currentLocation.pathname}`,
          )}`}
        >
          <FaWhatsapp />
        </a>
      </div>
      {/*<div>
        <Comments
          commentsUrl="http://localhost:3004/comments"
          currentUserId="1"
        />
       </div>*/}
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
          id="third-party-grid"
        >
          <GiBlackFlag />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={item.facebook}
          className="icons-fb"
          id="third-party-grid"
        >
          <FaFacebook />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={item.youtube}
          className="icons-YT"
          id="third-party-grid"
        >
          <FaYoutube />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={item.instagram}
          className="icons-instagram"
          id="third-party-grid"
        >
          <FaInstagramSquare />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={item.twitter}
          className="icons-twitter"
          id="third-party-grid"
        >
          <FaTwitterSquare />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={item.tiktok}
          className="icons-tiktok"
          id="third-party-grid"
        >
          <FaTiktok />
        </a>
        <a href={item.ticketmaster} target="_blank" rel="noreferrer">
          <img
            src="../images/ticketmaster.jpg"
            className="sponsor"
            alt=""
            media="(max-width: 400px)"
          />
        </a>
        <a href={item.wiki} target="_blank" rel="noreferrer">
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
          href={item.spotify}
          className="icons-spotify"
          id="third-party-grid"
        >
          <FaSpotify />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={item.apple}
          className="icons-itunes"
          id="third-party-grid"
        >
          <SiApplemusic />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={item.tidal}
          className="icons-tidal"
          id="third-party-grid"
        >
          <SiTidal />
        </a>

        <a href={item.napster} target="_blank" rel="noreferrer">
          <img
            src="../images/amazonMusic.jpeg"
            className="sponsor"
            alt=""
            media="(max-width: 300px)"
          />
        </a>
      </div>
      <BanderaMedia />
    </div>
  )
}

export default Card
