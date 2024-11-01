import axios from 'axios';

const getToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.warn('No token found. Please log in.');
    throw new Error('No token found');
  }
  return token;
};

const handleError = (error) => {
  if (error.response) {
    console.error('Error response data:', error.response.data);
    console.error('Error response status:', error.response.status);
    console.error('Error response headers:', error.response.headers);
    if (error.response.status === 401) {
      // Token expired or unauthorized
      console.warn('Unauthorized. Redirecting to login.');
      // Handle redirect to login or refresh token logic
    }
  } else if (error.request) {
    console.error('Error request data:', error.request);
  } else {
    console.error('Error message:', error.message);
  }
};

const getUserId = () => {
  return localStorage.getItem('userId') || null;
};

const cartApi = axios.create({
  baseURL: '/api/cart',
});

cartApi.interceptors.request.use(
  (config) => {
    const token = getToken(); // Ensure this function is used
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const newToken = await refreshToken();
        error.config.headers.Authorization = `Bearer ${newToken}`;
        return await cartApi.request(error.config); // Retry request with new token
      } catch (refreshError) {
        handleError(refreshError);
        // Handle refresh token error (e.g., redirect to login)
      }
    }
    return Promise.reject(error);
  }
);


const refreshToken = async () => {
  try {
    const response = await axios.post('/api/token/refresh', {
      refreshToken: localStorage.getItem('refreshToken'),
    });
    const newToken = response.data.token;
    localStorage.setItem('token', newToken);
    return newToken;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

const cartService = {
  getCartByUserId: async (userId) => {
    if (!userId) {
      console.error('User ID is required');
      throw new Error('User ID is required');
    }
    try {
      const response = await cartApi.get(`/${userId}`);
      const cartData = response.data;
      const productIds = cartData.items.map((item) => item.product);

      // Fetch products using a different method if batch fetching is not supported
      const productPromises = productIds.map((id) => axios.get(`/api/product/${id}`));
      const productResponses = await Promise.all(productPromises);
      const productData = productResponses.map((res) => res.data);

      const combinedData = cartData.items.map((item) => ({
        ...item,
        ...productData.find((product) => product._id === item.product),
      }));

      return combinedData;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  addItemToCart: async (item, count) => {
    const userId = getUserId();
    if (!userId) {
      console.error('User ID is required');
      throw new Error('User ID is required');
    }
    const payload = { ...item, userId, count, productId: item._id };
    console.log('Request payload:', payload);
    try {
      const response = await cartApi.post('', payload);
      console.log('Add item response:', response.data);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

 updateCartItem: async (userId, productId, size, quantity) => {
  if (!userId) {
    console.error('User ID is required');
    throw new Error('User ID is required');
  }
  try {
    const response = await cartApi.patch(`/${userId}`, { productId, size, quantity });
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
},

removeItemFromCart: async (userId, productId, size) => {
  if (!userId) {
    console.error('User ID is required');
    throw new Error('User ID is required');
  }
  try {
    // Send size and productId in the request body
    const response = await cartApi.delete(`/${userId}/${productId}`, {
      data: { size }
    });
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
},


  getCartItems: async (userId) => {
    if (!userId) {
      console.error('User ID is required');
      throw new Error('User ID is required');
    }
    try {
      const response = await cartApi.get(`/${userId}`);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  clearCart: async (userId) => {
    if (!userId) {
      console.error('User ID is required');
      throw new Error('User ID is required');
    }
    try {
      const response = await cartApi.delete(`/${userId}`);
      console.log('Clear cart response:', response.data);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
};

export default cartService;