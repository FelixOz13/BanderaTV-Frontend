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

const Reggaeton = () => {
  const dispatch = useDispatch();
  const { cards, isLoading, isError, message } = useSelector((state) => state.cards);
  const [visibleCards, setVisibleCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]); // Add state for filtered cards

  // Filter cards based on the search term
  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = visibleCards.filter((card) =>
      card.title.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredCards(filtered);
  };

  useEffect(() => {
    console.log("Dispatching 'Reggaeton' category fetch");
    dispatch(getCardsByCategory('Reggaeton')); // Fetch cards in the 'Reggaeton' category
  }, [dispatch]);

  useEffect(() => {
    setVisibleCards(cards);
    setFilteredCards(cards); // Initialize filteredCards with all cards
    console.log("Visible cards:", cards);
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
      <Searchbar onSearch={handleSearch} />
      <div>
        <ButtonTreeCategories/>
      </div>
      <div className="carousel-container">
        <Carousel responsive={responsive}>
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
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

export default Reggaeton;
