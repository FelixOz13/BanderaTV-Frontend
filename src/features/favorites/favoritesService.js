import axios from 'axios';

const API_URL = 'http://localhost:5000/api/favorites';



const addToFavorites = async (item, token) => {
  console.log('addToFavorites called with item:', item);
  console.log('Token:', token);
  console.log('API_URL:', API_URL);
  try {
    const response = await axios.post(API_URL, item, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('Response from server:', response);
    console.log('Response data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding to favorites:', error);
    console.error('Error message:', error.message);
    console.error('Error response:', error.response);
    throw new Error('Add to favorites failed: ' + error.message);
  }
};

const removeFromFavorites = async (id, size, token) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { size },
    });
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || 'Failed to remove item from favorites';
    throw new Error(message);
  }
};

const getFavoriteItemsById = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || 'Failed to fetch favorite items';
    throw new Error(message);
  }
};

// Assign the object to a variable before exporting it as default
const favoritesService = {
  addToFavorites,
  removeFromFavorites,
  getFavoriteItemsById,
};

export default favoritesService;
