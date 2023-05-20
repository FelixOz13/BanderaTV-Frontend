import ReactPlayer from 'react-player/lazy'
import LikeButtons from './LikeButtons'
import BanderaMedia from './BanderaMedia'
import StarRating from './StarRating'
import { GiBlackFlag } from 'react-icons/gi'
import { FaFacebook } from 'react-icons/fa'
import { FaSpotify } from 'react-icons/fa'
import { FaDeezer } from 'react-icons/fa'
import { SiApplemusic } from 'react-icons/si'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { SiTidal } from 'react-icons/si'
import React, { useState } from 'react'
import Spinner from './Spinner'
import Comments from '../Comments/Comments'
import { BsFillPlayCircleFill } from 'react-icons/bs'

function Card(props) {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = 'No Mas Boletos'
  } else if (props.item.openSpots > 0) {
    badgeText = 'Boletos Disponibles'
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      {!imageLoaded && <Spinner />}{' '}
      {/* Display spinner while image is loading */}
      <img
        src={`../images/${props.item.coverImg}`}
        className="card--image"
        alt="card"
        onLoad={handleImageLoad}
      />
      <div className="notranslate">
        <h1 className="card--title">{props.item.title}</h1>
        <p className="category">{props.item.category}</p>
      </div>
      <StarRating />
      <img
        src={`../images/${props.item.locationImg}`}
        className="locationImg"
        alt="location"
      />
      <p className="description">{props.item.description}</p>
      <div>
        {!imageLoaded && <Spinner />}{' '}
        <ReactPlayer
          className="video"
          width="280px"
          height="180px"
          light
          controls
          url={props.item.videourl}
          playIcon=<BsFillPlayCircleFill />
          onReady={handleImageLoad}
        />
      </div>
      <LikeButtons />
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
          href={props.item.websiteurl}
          className="icons-bandera"
          id="third-party-grid"
        >
          <GiBlackFlag />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={props.item.facebook}
          className="icons-fb"
          id="third-party-grid"
        >
          <FaFacebook />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={props.item.youtube}
          className="icons-YT"
          id="third-party-grid"
        >
          <FaYoutube />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={props.item.instagram}
          className="icons-instagram"
          id="third-party-grid"
        >
          <FaInstagramSquare />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={props.item.twitter}
          className="icons-twitter"
          id="third-party-grid"
        >
          <FaTwitterSquare />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={props.item.tiktok}
          className="icons-tiktok"
          id="third-party-grid"
        >
          <FaTiktok />
        </a>
        <a href={props.item.ticketmaster} target="_blank" rel="noreferrer">
          <img
            src="../images/ticketmaster.jpg"
            className="sponsor"
            alt=""
            media="(max-width: 400px)"
          />
        </a>
        <a href={props.item.wiki} target="_blank" rel="noreferrer">
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
          href={props.item.spotify}
          className="icons-spotify"
          id="third-party-grid"
        >
          <FaSpotify />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={props.item.apple}
          className="icons-itunes"
          id="third-party-grid"
        >
          <SiApplemusic />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href={props.item.tidal}
          className="icons-tidal"
          id="third-party-grid"
        >
          <SiTidal />
        </a>

        <a href={props.item.napster} target="_blank" rel="noreferrer">
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
