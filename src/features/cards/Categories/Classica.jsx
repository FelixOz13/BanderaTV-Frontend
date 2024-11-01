import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCardsByCategory } from '../cardSlice'; // Update to fetch by category
import Card from '../Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../card.css'

const Classica = () => {
  const dispatch = useDispatch();
  const { cards, isLoading, isError, message } = useSelector((state) => state.cards);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    dispatch(getCardsByCategory('Classica')); // Fetch cards in the 'rock' category
  }, [dispatch]);

  useEffect(() => {
    setVisibleCards(cards);
  }, [cards]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {message}</div>;

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="carousel-container">
      <Carousel responsive={responsive}>
        {visibleCards.length > 0 ? (
          visibleCards.map((card) => (
            <div key={card._id}>
              <Card card={card} />
            </div>
          ))
        ) : (
          <p>No cards available</p>
        )}
      </Carousel>
    </div>
  );
};

export default Classica;
