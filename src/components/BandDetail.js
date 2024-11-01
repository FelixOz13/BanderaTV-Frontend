import React, { useEffect } from 'react';
import Navbar from './Navbar/Navbar'
import CommentBox from '../CommentsComponents/CommentBox';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy';
import './banddetail.css';
import '../CommentsComponents/Comments.css';
import { GiBlackFlag } from 'react-icons/gi';
import { SiApplemusic, SiTidal } from 'react-icons/si';
import { FaTiktok, FaInstagramSquare, FaYoutube, FaSpotify, FaFacebook } from 'react-icons/fa';
import { IoTicketSharp } from 'react-icons/io5';
import { BsTwitterX } from 'react-icons/bs';
import LikeButtons from '../components/LikeButtons';
import { useDispatch, useSelector } from 'react-redux';
import { getCardById } from '../features/cards/cardSlice';
import ReactGA from 'react-ga4';

const BandDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Initialize Google Analytics
  useEffect(() => {
    ReactGA.initialize("G-MM8CRMGQ36");
    ReactGA.send({ hitType: "pageview", page: `/Bandera/${id}` });
  }, [id]);

  // Selectors to get the card, loading, error state, and error message
  const card = useSelector((state) => state.cards.card);
  const isLoading = useSelector((state) => state.cards.isLoading);
  const isError = useSelector((state) => state.cards.isError);
  const message = useSelector((state) => state.cards.message);

  useEffect(() => {
    if (id) {
      console.log("Fetching band with ID:", id);
      dispatch(getCardById(id))
        .unwrap()
        .then((fetchedCard) => {
          console.log("Fetched card:", fetchedCard);
        })
        .catch((error) => {
          console.error("Error fetching card:", error);
        });
    }
  }, [dispatch, id]);

  console.log("Current card:", card);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner" />
        <p className='title2'>Loading...</p>
      </div>
    );
  }

  if (isError || !card || Object.keys(card).length === 0) {
    console.log("Error fetching card:", message);
    return (
      <div className="error-container">
        <p className='title2'>Band not found</p>
      </div>
    );
  }

  return (
    <div>
    <Navbar/>
    <div className="banddetail-container">
      
        <div className="card-content">
          <div className="video-container">
            <ReactPlayer
              url={card.videourl}
              className="video"
              width="100%"
              height="100%"
              autoPlay={true}
              controls={true}
            />
          </div>
          <div className="band-card">
        <img
          src={`/images/${card.coverImg}`}
          alt={card.title}
          className="bandetail--image"
          loading="lazy"
        />
        <img
            src={`/images/${card.locationImg}`}
            alt="Location"
            className="origin-flag"
            loading="lazy"
          />
          <h2 className="card--title">{card.title}</h2>
          <p className="description">{card.description}</p>
          <CommentBox/>
          
          <LikeButtons />
          <div className="card-links">
            {card.websiteurl && (
              <a href={card.websiteurl} className="icons-bandera" target="_blank" rel="noopener noreferrer">
                <GiBlackFlag />
              </a>
            )}
            {card.youtube && (
              <a href={card.youtube} className="icons-YT" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            )}
            {card.facebook && (
              <a href={card.facebook} className="icons-fb" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            )}
            {card.instagram && (
              <a href={card.instagram} className="icons-instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare />
              </a>
            )}
            {card.twitter && (
              <a href={card.twitter} className="icons-twitter" target="_blank" rel="noopener noreferrer">
                <BsTwitterX />
              </a>
            )}
            {card.spotify && (
              <a href={card.spotify} className="icons-spotify" target="_blank" rel="noopener noreferrer">
                <FaSpotify />
              </a>
            )}
            {card.apple && (
              <a href={card.apple} className="icons-itunes" target="_blank" rel="noopener noreferrer">
                <SiApplemusic />
              </a>
            )}
            {card.tidal && (
              <a href={card.tidal} className="icons-tidal" target="_blank" rel="noopener noreferrer">
                <SiTidal />
              </a>
            )}
            {card.ticketmaster && (
              <a href={card.ticketmaster} className="icons-ticketmaster" target="_blank" rel="noopener noreferrer">
                <IoTicketSharp />
              </a>
            )}
            {card.tiktok && (
              <a href={card.tiktok} className="icons-tiktok" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
            )}
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default BandDetail;
