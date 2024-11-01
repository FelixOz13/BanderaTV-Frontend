import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCardsByCategory } from '../cardSlice';
import Card from '../Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../card.css';
import Searchbar from '../../../components/Searchbar';
import Navbar from '../../../components/Navbar/Navbar';
import ButtonTreeCategories from './ButtonTreeCategories';

const Trova = () => {
  const dispatch = useDispatch();
  const { cards, isLoading, isError, message } = useSelector((state) => state.cards);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    console.log("Dispatching 'Trova' category fetch");
    dispatch(getCardsByCategory('Trova')); // Ensure category name matches backend data
  }, [dispatch]);

  useEffect(() => {
    setVisibleCards(cards);
    console.log("Visible cards:", cards); // Log the fetched cards to debug
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
    <div>
    <Navbar/>
    <Searchbar/>
    <div>
    <ButtonTreeCategories/>
    </div>
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
    </div>
  );
};

export default Trova;
