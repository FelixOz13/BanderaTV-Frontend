import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartService from './cartService';
import axios from 'axios';

const initialState = {
  items: [],
  totalItems: 0,
  status: 'idle',
  error: null,
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const getCartByUserId = createAsyncThunk(
  'cart/getCartByUserId',
  async (userId, { rejectWithValue }) => {
    try {
      // Fetch cart items for the user
      const response = await axios.get(`/api/cart/${userId}`);
      const cartData = response.data;

      // Extract product IDs from cart items
      const productIds = cartData.items.map((item) => item.productId);

      // Fetch full product details for each product ID
      const productPromises = productIds.map((id) =>
        axios.get(`/api/product/${id}`)
      );
      const productResponses = await Promise.all(productPromises);
      const productData = productResponses.map((res) => res.data);

      // Merge cart items with corresponding product details
      const combinedData = cartData.items.map((item) => ({
        ...item,
        ...productData.find((product) => product._id === item.productId),
      }));

      return combinedData;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);


export const addItemToCart = createAsyncThunk(
  'cart/addItemToCart',
  async (itemWithSizeAndColor, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/cart', itemWithSizeAndColor, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      return response.data; // Updated cart object
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);



export const updateCartItem = createAsyncThunk(
  'cart/updateCartItem',
  async ({ id, size, quantity }) => {
    return await cartService.updateCartItem(id, size, quantity);
  }
);

export const removeItemFromCart = createAsyncThunk(
  'cart/removeItemFromCart',
  async ({ id, size }) => {
    return await cartService.removeItemFromCart(id, size);
  }
);

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async () => {
    return await cartService.getCartItems();
  }
);

export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async () => {
    return await cartService.clearCart();
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCartByUserId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCartByUserId.fulfilled, (state, action) => {
        state.status = 'succeeded';
      
        // Assuming action.payload is the combined data
        state.items = action.payload.map(item => ({
          ...item,
          price: item.price || 0, // Ensure price is always available
          name: item.name || 'Unknown', // Default values if missing
          imageUrl: item.imageUrl || '' // Default values if missing
        }));
        
        state.totalItems = state.items.length;
      })
      .addCase(getCartByUserId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        console.log('Add item fulfilled:', action.payload);
        // Check if item already exists and update if necessary
        const existingItem = state.items.find(
          (item) => item.productId === action.payload.productId && item.size === action.payload.size && item.color === action.payload.color
        );
      
        if (existingItem) {
          existingItem.count += action.payload.count;
        } else {
          state.items.push(action.payload);
        }
      
        state.totalItems = state.items.length;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item._id === action.payload._id && item.size === action.payload.size
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => !(item._id === action.payload._id && item.size === action.payload.size)
        );
        state.totalItems = state.items.length;
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.items = [];
        state.totalItems = 0;
      });
  },
});

export const cartActions = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCount = (state) => state.cart.totalItems;

export default cartSlice.reducer;