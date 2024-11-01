import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import favoritesService from './favoritesService';

export const addToFavorites = createAsyncThunk(
  'favorites/addToFavorites',
  async (item, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token; // or however you get the token
      return await favoritesService.addToFavorites(item, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const removeFromFavorites = createAsyncThunk(
  'favorites/removeFromFavorites',
  async ({ id, size }, thunkAPI) => {
    try {
      return await favoritesService.removeItemFromFavorites(id, size);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getFavoriteItemsById = createAsyncThunk(
  'favorites/getFavoriteItemsById',
  async (_, thunkAPI) => {
    try {
      return await favoritesService.getFavoriteItemsById();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToFavorites.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.push(action.payload);
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(removeFromFavorites.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.filter(
          (item) => item.id !== action.meta.arg.id || item.size !== action.meta.arg.size
        );
      })
      .addCase(removeFromFavorites.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getFavoriteItemsById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getFavoriteItemsById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getFavoriteItemsById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Selector to get the count of favorite items
export const selectFavoritesCount = (state) => state.favorites.items.length;

export default favoritesSlice.reducer;
