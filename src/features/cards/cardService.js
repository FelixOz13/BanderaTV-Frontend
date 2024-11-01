import axios from 'axios';

const API_URL = 'http://localhost:5000/api/card/';
const API_URL_CATEGORIES = 'http://localhost:5000/api/categories/';

// Create new card
const createCard = async (cardData, authToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  const response = await axios.post(API_URL, cardData, config);
  return response.data;
};

// Get all cards
const getAllCards = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Return only the data
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
};

// Get single card by id
const getCardById = async (id) => {
  const response = await axios.get(`${API_URL}${id}`);
  return response.data; // Return only the data
};

// Get cards by category
const getCardsByCategory = async (category) => {
  const response = await axios.get(`${API_URL}?category=${category}`);
  return response.data;
};

// Update card
const updateCard = async (id, cardData, authToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  const response = await axios.put(`${API_URL}${id}`, cardData, config);
  return response.data;
};

// Delete card
const deleteCard = async (id, authToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  const response = await axios.delete(`${API_URL}${id}`, config);
  return response.data;
};

// Add card to wishlist
const addToWishlist = async (cardId, authToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  const response = await axios.put(`${API_URL}wishlist`, { cardId }, config);
  return response.data;
};

// Rate card
const rateCard = async (ratingData, authToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  const response = await axios.put(`${API_URL}rating`, ratingData, config);
  return response.data;
};

// Get all categories
const getAllCategories = async () => {
  try {
    const response = await axios.get(API_URL_CATEGORIES);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

const cardService = {
  createCard,
  getAllCards,
  getCardById,
  updateCard,
  deleteCard,
  addToWishlist,
  rateCard,
  getAllCategories,
  getCardsByCategory,
};

export default cardService;
