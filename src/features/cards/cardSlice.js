import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cardService from './cardService';

// Async thunk to get all cards
export const getAllCards = createAsyncThunk(
  'card/getAll',
  async (_, thunkAPI) => {
    try {
      return await cardService.getAllCards(); // Return data directly from service
    } catch (error) {
      const message = 
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Async thunk to get a card by ID
export const getCardById = createAsyncThunk(
  'card/getCardById',
  async (id, thunkAPI) => {
    try {
      return await cardService.getCardById(id); // Return data directly from service
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Async thunk to get cards by category
export const getCardsByCategory = createAsyncThunk(
  'cards/getCardsByCategory',
  async (category, { rejectWithValue }) => {
    try {
      return await cardService.getCardsByCategory(category); // Use cardService
    } catch (error) {
      const message = 
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

// Async thunk to create a new card
export const createCard = createAsyncThunk(
  'card/create',
  async (cardData, thunkAPI) => {
    try {
      return await cardService.createCard(cardData); // Return data directly from service
    } catch (error) {
      const message = 
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Async thunk to update a card by ID
export const updateCard = createAsyncThunk(
  'card/update',
  async ({ id, cardData }, thunkAPI) => {
    try {
      return await cardService.updateCard(id, cardData); // Return data directly from service
    } catch (error) {
      const message = 
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Async thunk to delete a card by ID
export const deleteCard = createAsyncThunk(
  'card/delete',
  async (id, thunkAPI) => {
    try {
      await cardService.deleteCard(id); // Service handles deletion
      return id; // Return the id of the deleted card for state removal
    } catch (error) {
      const message = 
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Card slice definition
const cardsSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [],
    card: {}, // The single card object for detailed views
    isLoading: false,
    isError: false,
    message: '',
    currentPage: 1, // Current page for pagination
    itemsPerPage: 100 // Number of items per page for pagination
  },
  reducers: {
    // Reducer to update current page
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    // Reducer to update items per page if needed
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload; // Store fetched cards
      })
      .addCase(getAllCards.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCardById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCardById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.card = action.payload; // Set current card data
      })
      .addCase(getCardById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCardsByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCardsByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload; // Set filtered cards by category
      })
      .addCase(getCardsByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards.push(action.payload); // Add the new card
      })
      .addCase(createCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCard.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.cards.findIndex(card => card.id === action.payload.id);
        if (index !== -1) {
          state.cards[index] = action.payload; // Update card in array
        }
      })
      .addCase(updateCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = state.cards.filter(card => card._id !== action.payload); // Remove card by id
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { setPage, setItemsPerPage } = cardsSlice.actions;
export default cardsSlice.reducer;
